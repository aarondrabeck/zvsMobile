/*
 * File: app/model/DeviceValue.js
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

Ext.define('zvsMobile.model.DeviceValue', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.association.BelongsTo',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],
    uses: [
        'zvsMobile.model.Device'
    ],

    config: {
        idProperty: 'Id',
        fields: [
            {
                name: 'DeviceId',
                type: 'int'
            },
            {
                name: 'Name',
                type: 'string'
            },
            {
                name: 'UniqueIdentifier',
                type: 'string'
            },
            {
                name: 'Value',
                type: 'string'
            },
            {
                name: 'Description',
                type: 'string'
            },
            {
                name: 'Genre',
                type: 'string'
            },
            {
                name: 'Index',
                type: 'string'
            },
            {
                name: 'CommandClass',
                type: 'string'
            },
            {
                name: 'CustomData1',
                type: 'string'
            },
            {
                name: 'CustomData2',
                type: 'string'
            },
            {
                name: 'Id',
                type: 'int'
            }
        ],
        belongsTo: {
            model: 'zvsMobile.model.Device',
            foreignKey: 'DeviceId'
        },
        proxy: {
            type: 'odata',
            api: {
                read: 'http://localhost:50232/DeviceValues/'
            },
            filterParam: '$filter',
            url: 'http://localhost:50232/DeviceValues',
            headers: {
                'Content-Type': 'application/json',
                'X-zvsToken': 'CC2D226814CBC713134BD9D09B892F10A9'
            },
            useDefaultXhrHeader: false,
            reader: {
                type: 'json',
                idProperty: 'Id',
                rootProperty: 'value'
            }
        }
    }
});