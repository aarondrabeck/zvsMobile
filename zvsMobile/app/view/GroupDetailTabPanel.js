/*
 * File: app/view/GroupDetailTabPanel.js
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

Ext.define('zvsMobile.view.GroupDetailTabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.groupdetailstabpanel',

    requires: [
        'zvsMobile.view.GroupControlPanel',
        'zvsMobile.view.GroupEdit',
        'Ext.form.Panel',
        'Ext.tab.Bar'
    ],

    config: {
        itemId: 'groupDetailTabPanel',
        items: [
            {
                xtype: 'groupcontrolpanel',
                title: 'Control',
                iconCls: 'action'
            },
            {
                xtype: 'groupedit',
                title: 'Edit',
                iconCls: 'compose'
            }
        ],
        tabBar: {
            docked: 'bottom'
        }
    }

});