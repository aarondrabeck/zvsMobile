/*
 * File: app/view/DeviceValueNumberHistoryChart.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('zvsMobile.view.DeviceValueNumberHistoryChart', {
    extend: 'Ext.chart.CartesianChart',
    alias: 'widget.devicevaluenumberhistorychart',

    requires: [
        'Ext.chart.axis.Time',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom'
    ],

    config: {
        store: 'DeviceValueHistoryStore',
        colors: [
            '#115fa6',
            '#94ae0a',
            '#a61120',
            '#ff8809',
            '#ffd13e',
            '#a61187',
            '#24ad9a',
            '#7c7474',
            '#a66111'
        ],
        axes: [
            {
                type: 'time',
                fields: [
                    'DateTime'
                ],
                title: 'Date',
                dateFormat: 'M d H:i'
            },
            {
                type: 'numeric',
                fields: [
                    'Value'
                ],
                grid: {
                    odd: {
                        fill: '#e8e8e8'
                    }
                },
                increment: 10,
                position: 'left',
                title: 'Value'
            }
        ],
        series: [
            {
                type: 'line',
                colors: 'rgba(0,200,0,0.3)',
                marker: {
                    type: 'circle',
                    radius: 5
                },
                style: {
                    smooth: true,
                    stroke: 'rgb(0,200,0)',
                    
                },
                xField: 'DateTime',
                yField: 'Value'
            }
        ],
        interactions: [
            {
                type: 'panzoom'
            }
        ]
    }

});