/**
 * Created by rind on 5/30/17.
 */

import * as events from 'phovea_core/src/event';
import * as d3 from 'd3';
import * as localforage from 'localforage';
import {AppConstants} from './app_constants';
import {MAppViews} from './app';
import {splitAt} from './utilities';

const CHART_HEIGHT: number = 18;
const INITIAL_SVG_HEIGHT: number = 100;
const OFFSET = 20;                         //Offset for the chart in px
const formatNumber = d3.format(',.0f');    //Zero decimal places
const format = function (d) { return formatNumber(d); }; //Display number with unit sign

interface KeyValue {
  key: string;
  values: number;
}

export default class SparklineBarChart implements MAppViews {
  //2 singletons for both views
  private static sourceChart: SparklineBarChart;
  private static targetChart: SparklineBarChart;

  private $node;
  private parentDOM: string;
  private field: string;
  private necessaryHeight = INITIAL_SVG_HEIGHT;
  private chartWidth: number = 120;        //Fallback if not calcualted dynamically

 constructor(parent: Element, private options: any) {
    this.field = options.field;
    this.parentDOM = options.parentDOM;

    //Initialize Singletons aka the Objects for left or right view point
    if ('sourceNode' === options.field) {
      SparklineBarChart.sourceChart = this;
      this.chartWidth = (d3.select('.left_bars') as any).node().getBoundingClientRect().width - OFFSET;
    } else if ('targetNode' === options.field) {
      SparklineBarChart.targetChart = this;
      this.chartWidth = (d3.select('.right_bars') as any).node().getBoundingClientRect().width - OFFSET;
    }
  }

  /**
   * Initialize the view and return a promise
   * that is resolved as soon the view is completely initialized.
   * @returns {Promise<ValidHeader>}
   */
  init() {
    this.attachListener();

    //Prepare the svg here, apparently sankey.init() has already finished
    this.$node = d3.select(this.parentDOM)
      .append('svg')
      .classed('barchart', true)
      .attr('width', this.chartWidth)
      .attr('height', INITIAL_SVG_HEIGHT);

    //Return the promise directly as long there is no dynamical data to update
    return Promise.resolve(this);
  }

  /**
   * build sparkline barcharts for enter selection of sankey nodes.
   * This function can be passed to the call method of a d3 selection.
   * @param node
   */
  public static createSparklines(node: d3.Selection<any>) {
    //This is how we retrieve the data. As it's loaded async it is only available as promise.
    //We can save the promise thoug in a global variable and get the data later if we need
    let promiseData = localforage.getItem('data').then((value) => {
      return value;
    });

    //Within the {} the data is available for usage
    promiseData.then(function (data: any) {

      let timePoints = d3.set(
        data.map(function (d: any) { return d.timeNode; })
      ).values().sort();

      node.each(function (d, i) {
        let nodeElem = d3.select(this);
        let yMiddle = nodeElem.datum().y + nodeElem.datum().dy / 2;

        if (nodeElem.attr('class').includes('source')) {
          SparklineBarChart.sourceChart.build(data, nodeElem.datum().name, yMiddle, timePoints);
        } else {
          SparklineBarChart.targetChart.build(data, nodeElem.datum().name, yMiddle, timePoints);
        }
      });
    });
  }

  private build(data: any, nodeName: string, yMiddle: number, timePoints: string[]) {
    let _self = this;

    if (this.necessaryHeight < yMiddle) {
      this.necessaryHeight = yMiddle;
      this.$node.attr('height', yMiddle + CHART_HEIGHT + 5);
    }

    let aggregated_data = _self.prepareData(data, nodeName)
    _self.drawBarChart(aggregated_data, nodeName, yMiddle, timePoints)
  }

  /**
   * Attach the event listeners
   */
  private attachListener() {
    let _self = this;
    events.on(AppConstants.EVENT_FILTER_CHANGED, (evt, data) => {
      //On filters discard everything to allow a clean redraw
      _self.$node.html('');
    });
  }

  /**
   * This method returns the sum of flows from/to the node for each time unit
   * @param data raw data, a JSON of all flows
   * @param nodeName name of the node for which the barchart is drawn
   */
  private prepareData(data: any, nodeName: string): KeyValue[] {
    let _self = this;
    let filtered_data = data.filter(function (d) { return d[_self.field] == nodeName; });
    let aggregated_data = d3.nest()
      .key(function (d: any) { return d.timeNode; })
      .rollup(function (v) { return d3.sum(v, function (d: any) { return d.valueNode; }) })
      .entries(filtered_data);

    return aggregated_data;
  }

  /**
   * This method draws bars based on data.
   * @param aggregated_data one value for each time unit
   * @param nodeName name of the node for which the barchart is drawn
   * @param dy vertical offset from sankey diagram
   */
  private drawBarChart(aggregated_data: KeyValue[], nodeName: string, yMiddle: number, timePoints: string[]) {
    let x = d3.scale.ordinal().rangeRoundBands([0, this.chartWidth], .05);
    let y = d3.scale.linear().range([CHART_HEIGHT, 0]);

    x.domain(timePoints);
    y.domain([0, d3.max(aggregated_data, function (d) { return d.values; })]);

    let group = this.$node.append('g');

    group.selectAll('bar')
      .data(aggregated_data)
      .enter().append('rect')
      .classed('bar', true)
      .attr('x', function (d, i) { return x(d.key); })
      .attr('width', x.rangeBand())
      .attr('y', function (d) { return y(d.values) + yMiddle; })
      .attr('height', function (d) { return CHART_HEIGHT - y(d.values); })
      //Add the link titles - Hover Path
      .append('title')
      .text(function (d) {
        let timeArray = splitAt(4)(d.key);
        return nodeName + ' → ' + timeArray[0] + 'Q' + timeArray[1] + '\n' + format(d.values);
      });
  }
}

/**
 * Factory method to create a new SparklineBarChart instance
 * @param parent
 * @param options
 * @returns {SparklineBarChart}
 */
export function create(parent: Element, options: any) {
  return new SparklineBarChart(parent, options);
}