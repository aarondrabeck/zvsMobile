/*
 * File: app/view/HomePanel.js
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

Ext.define('zvsMobile.view.HomePanel', {
    extend: 'Ext.Panel',
    alias: 'widget.homepanel',

    requires: [
        'Ext.Container',
        'Ext.Button'
    ],

    config: {
        baseCls: 'x-panel tileParent',
        itemId: 'homePanel',
        autoDestroy: false,
        scrollable: 'vertical',
        items: [
            {
                xtype: 'container',
                cls: 'tile',
                items: [
                    {
                        xtype: 'container',
                        baseCls: 'tileInner',
                        items: [
                            {
                                xtype: 'button',
                                navView: 'devicespanel',
                                baseCls: 'x-button mainButtonCls',
                                centered: false,
                                style: 'background-color:#2CAFE7',
                                iconAlign: 'top',
                                iconCls: 'mainIconCls light',
                                labelCls: 'mainLabelCls',
                                text: 'Devices'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'tile',
                items: [
                    {
                        xtype: 'container',
                        baseCls: 'tileInner',
                        items: [
                            {
                                xtype: 'button',
                                navView: 'scenespanel',
                                baseCls: 'x-button mainButtonCls',
                                centered: false,
                                height: '100%',
                                style: 'background-color:#9EC974',
                                iconAlign: 'top',
                                iconCls: 'scene mainIconCls',
                                labelCls: 'mainLabelCls',
                                text: 'Scenes'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'tile',
                items: [
                    {
                        xtype: 'container',
                        baseCls: 'tileInner',
                        items: [
                            {
                                xtype: 'button',
                                navView: 'groupspanel',
                                baseCls: 'x-button mainButtonCls',
                                centered: false,
                                height: '100%',
                                style: 'background-color:#F5A70E',
                                iconAlign: 'top',
                                iconCls: 'group mainIconCls',
                                labelCls: 'mainLabelCls',
                                text: 'Group'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'tile',
                items: [
                    {
                        xtype: 'container',
                        baseCls: 'tileInner',
                        items: [
                            {
                                xtype: 'button',
                                navView: 'settingsform',
                                baseCls: 'x-button mainButtonCls',
                                centered: false,
                                height: '100%',
                                style: 'background-color:#EE5445',
                                iconAlign: 'top',
                                iconCls: 'settings mainIconCls',
                                labelCls: 'mainLabelCls',
                                text: 'Settings'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});