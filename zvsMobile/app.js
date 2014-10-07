/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({

    requires: [
        'Ext.MessageBox'
    ],
    models: [
        'Device',
        'DeviceValue',
        'Settings',
        'Scene',
        'Group',
        'DeviceCommand',
        'DeviceTypeCommand',
        'BuiltinCommand',
        'LogItem',
        'SceneCommand',
        'StoredCommand',
        'DeviceValueTrigger'
    ],
    stores: [
        'DeviceStore',
        'DeviceValuesStore',
        'Settings',
        'SceneStore',
        'GroupStore',
        'DeviceCommandStore',
        'DeviceTypeCommandStore',
        'BuiltinCommandStore',
        'LogItemStore',
        'SceneCommandStore',
        'DeviceValueTriggerStore'
    ],
    views: [
        'MainView',
        'DevicesPanel',
        'NavMenu',
        'DeviceValuesPanel',
        'DeviceDetailsTabPanel',
        'SettingsForm',
        'ScenesPanel',
        'GroupsPanel',
        'HomePanel',
        'DeviceControlPanel',
        'SceneControlPanel',
        'GroupControlPanel',
        'DeviceEdit',
        'SceneEdit',
        'SceneTabPanel',
        'GroupDetailTabPanel',
        'GroupEdit',
        'LogList',
        'TriggerPanel',
        'TriggerDetailsTabPanel',
        'TriggerEdit'
    ],
    controllers: [
        'Navigation',
        'Devices',
        'SettingsEdit',
        'Scenes',
        'Group',
        'DeviceEdit',
        'DeviceControl',
        'GroupEdit',
        'Log',
        'Trigger',
        'TriggerEdit'
    ],
    name: 'zvsMobile',

    getToken: function() {
        var store = Ext.getStore('Settings');
        var setting = store.getById(1);
        if(setting && setting.data && setting.data.Token)
        return setting.data.Token;

        return 'defaultToken';


    },

    getBaseUrl: function() {
        var settingsStore = Ext.getStore('Settings');
        var record = settingsStore.getById(1);

        if(record && record.data && record.data.Url&& record.data.Port)
            return record.data.Url + ':'+ record.data.Port +'/' ;

            return 'http://localhost:8080/';
    },

    executeCommand: function(commandId, arg1, arg2, calllback) {
        var uri = 'odata4/Commands(' + commandId + ')/Actions.Execute';
        var callback2 = calllback;
        Ext.Ajax.request({
            scope:  this,
            url: uri,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-zvsToken':zvsMobile.app.getToken()
            },
            jsonData: {
                Argument: arg1.toString(),
                Argument2: arg2.toString()
            },
            success: function (response, opts) {

                var result = JSON.parse(response.responseText);
                if (result.value) {
                    callback2(result.value, null);
                }
                else {
                    callback2(null, 'Error executing command');
                }
            },
            failure: function (response, opts) {

                if(response.status > 399)
                {
                    if(response.status == 400 && response.responseText !== '')
                    {

                        var result = JSON.parse(response.responseText);

                        if(result.error)
                        {
                            callback2(null, result.error.message);
                            return;
                        }
                    }

                    callback2(null, response.statusText);


                }
                else
                {
                    callback2(null, 'Connection error');
                }
            }
        });
    },

    launch: function() {

        Ext.create('zvsMobile.view.MainView', {fullscreen: true});
    }

});
