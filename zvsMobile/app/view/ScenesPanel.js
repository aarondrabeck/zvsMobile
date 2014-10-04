/*
 * File: app/view/ScenesPanel.js
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

Ext.define('zvsMobile.view.ScenesPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.scenespanel',

    requires: [
        'Ext.dataview.DataView',
        'Ext.XTemplate',
        'Ext.Toolbar',
        'Ext.field.Search',
        'Ext.Spacer',
        'Ext.Button'
    ],

    config: {
        itemId: 'scenesPanel',
        layout: 'fit',
        items: [
            {
                xtype: 'dataview',
                cls: 'dataview-inline',
                itemId: 'scenesDataview',
                style: '',
                inline: true,
                itemCls: 'sceneItem',
                itemTpl: [
                    '<div class="scene-item">',
                    '	<h4 class="scene-name-truncate">{Name}</h4>  ',
                    '    <i class="SCENE scene-icon"></i> ',
                    '    <div class="scene-status">',
                    '        <tpl if=\'isRunning == true\'>',
                    ' Running',
                    '<tpl else>',
                    '   Off',
                    '</tpl>',
                    '			',
                    '		</div>	    ',
                    '</div>'
                ],
                store: 'SceneStore'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'searchfield',
                        itemId: 'sceneSearchfield',
                        width: '275px',
                        label: 'Search'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'refreshScenes',
                        iconCls: 'refresh'
                    }
                ]
            }
        ]
    }

});