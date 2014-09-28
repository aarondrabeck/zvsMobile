/*
 * File: app/store/SceneStore.js
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

Ext.define('zvsMobile.store.SceneStore', {
    extend: 'Ext.data.Store',

    requires: [
        'zvsMobile.model.Scene',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.util.Sorter'
    ],

    config: {
        groupDir: 'DESC',
        model: 'zvsMobile.model.Scene',
        storeId: 'SceneStore',
        proxy: {
            type: 'odata',
            enablePagingParams: false,
            filterParam: '$filter',
            limitParam: '$top',
            noCache: false,
            sortParam: '$orderby',
            startParam: '$skip',
            url: 'odata4/Scenes',
            headers: {
                'Content-Type': 'application/json'
            },
            useDefaultXhrHeader: false,
            reader: {
                type: 'json',
                idProperty: 'Id',
                rootProperty: 'value'
            }
        },
        sorters: {
            property: 'SortOrder'
        }
    }
});