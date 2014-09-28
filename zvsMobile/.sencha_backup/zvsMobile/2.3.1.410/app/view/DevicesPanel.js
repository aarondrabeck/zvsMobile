/*
 * File: app/view/DevicesPanel.js
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

Ext.define('zvsMobile.view.DevicesPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.devicespanel',

    requires: [
        'Ext.dataview.DataView',
        'Ext.XTemplate',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Spacer',
        'Ext.SegmentedButton',
        'zvsMobile.view.DeviceControlPanel'
    ],

    config: {
        itemId: 'devicesPanel',
        layout: 'fit',
        items: [
            {
                xtype: 'dataview',
                cls: 'dataview-inline',
                itemId: 'deviceDataview',
                inline: true,
                itemCls: 'dataview-inline',
                itemTpl: [
                    '<div class="device-item {type.UniqueIdentifier}">',
                    '	',
                    '	<h4 class="device-name-truncate">{Name}</h4>',
                    '   ',
                    '    <div class="device-level">',
                    '			{CurrentLevelText}',
                    '		</div>',
                    '	<div class="device-item-level">',
                    '		<div class="meter">',
                    '			<div class="progress" style="width:{CurrentLevelInt}%">',
                    '			</div>',
                    '		</div>',
                    '		',
                    '	</div>',
                    '     <h5 class="location-name-truncate">{Location}</h5>',
                    '</div>'
                ],
                store: 'DeviceStore'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                id: 'deviceToolbar',
                ui: 'neutral',
                scrollable: 'horizontal',
                items: [
                    {
                        xtype: 'button',
                        id: 'devicesReloadBtn',
                        text: 'Reload'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'segmentedbutton',
                        id: 'filterSegmentedButton',
                        allowDepress: true
                    }
                ]
            }
        ]
    }

});