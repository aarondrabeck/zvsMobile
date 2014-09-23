/*
 * File: app/controller/DevicesController.js
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

Ext.define('zvsMobile.controller.DevicesController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView: '#mainView',
            switchControlPanel: {
                autoCreate: true,
                selector: 'panel#switchControlPanel',
                xtype: 'switchcontrolpanel'
            }
        },

        control: {
            "dataview#deviceDataview": {
                itemtap: 'onDataviewItemTap',
                refresh: 'onDataviewRefresh'
            },
            "button#devicesReloadBtn": {
                tap: 'onReloadTap'
            },
            "segmentedbutton#filterSegmentedButton": {
                toggle: 'onSegmentedbuttonToggle'
            },
            "togglefield#switchToggle": {
                change: 'onSwitchTogglefieldChange'
            }
        }
    },

    onDataviewItemTap: function(dataview, index, target, record, e, eOpts) {
        var mainView = this.getMainView();
        var valuesStore = Ext.getStore('DeviceValuesStore');
        valuesStore.filter('DeviceId', record.data.Id);

        valuesStore.load();

        mainView.push({
            xtype: 'devicedetailstabpanel',
            title: record.data.Name,
            data: record.data
        });

        var sw = this.getSwitchControlPanel();
        sw.setRecord(record.data);
    },

    onReloadTap: function(button, e, eOpts) {
        var deviceStore = Ext.getStore('DeviceStore');
        deviceStore.load();
    },

    onDataviewRefresh: function(dataview, eOpts) {

        var locationNames = [];
        var items = [{text: 'All', locationFilter: 'all',pressed:true}];
        var deviceStore = Ext.getStore('DeviceStore');
        var toolbar = Ext.getCmp('deviceToolbar');
        if(deviceStore.getFilters().length === 0)
        {
            deviceStore.each(function(element) {


                var item =  {
                            text: element.data.Location,
                            locationFilter:element.data.Location
                        };


                if(locationNames.indexOf(element.data.Location) === -1)
                    items.push(item);

                locationNames.push(element.data.Location);
            });
            var segButton  =Ext.getCmp('filterSegmentedButton');
            segButton.removeAll();
         segButton.add(items);

        }
    },

    onSegmentedbuttonToggle: function(segmentedbutton, button, isPressed, eOpts) {

        var deviceStore = Ext.getStore('DeviceStore');
        var filter = button.locationFilter;
        if(filter)
                    {
                        if(filter == 'all')
                            deviceStore.clearFilter();
                        else
                            deviceStore.filter('Location', filter);
                    }
    },

    onSwitchTogglefieldChange: function(togglefield, newValue, oldValue, eOpts) {
        var panel = this.getSwitchControlPanel();
        var device = panel.getData();

        Ext.Ajax.request({
            url: 'http://10.1.0.54:50232/DeviceCommands/?$filter=CustomData1 eq \'Basic\' and DeviceId eq '+ device.Id + '&$select=Id',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-zvsToken':'CC2D226814CBC713134BD9D09B892F10A9'
            },
            success: function (response, opts) {
                var result = JSON.parse(response.responseText);
                if (result.value.length == 1) {
                    var commandId = result.value[0].Id;
                    Ext.Ajax.request({
                        url: 'http://10.1.0.54:50232/DeviceCommands('+commandId+')/Actions.Execute',
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-zvsToken':'CC2D226814CBC713134BD9D09B892F10A9'
                        },
                        params: {
                            value: 1
                        },
                        success: function (response, opts) {
                            var result = JSON.parse(response.responseText);
                            if (result.value.length == 1) {
                                success(result.value[0].Id);
                            }
                            else {
                                panel.setError('Device command not found.');
                            }
                        },
                        failure: function (response, opts) {
                            var result = JSON.parse(response.responseText);
                            panel.setError(result.error.message);
                        }
                    });

                }
                else {
                    panel.setError('Device command not found.');
                }
            },
            failure: function (response, opts) {
                var result = JSON.parse(response.responseText);
                panel.setError(result.error.message);
            }
        });




    },

    getBasicDeviceCommand: function(deviceId, panel, success) {
        Ext.Ajax.request({
                    url: 'http://10.1.0.54:50232/DeviceCommands/?$filter=CustomData1 eqa \'Basic\' and DeviceId eq '+ deviceId + '&$select=Id',
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-zvsToken':'CC2D226814CBC713134BD9D09B892F10A9'
                    },
                    success: function (response, opts) {
                        var result = JSON.parse(response.responseText);
                        if (result.value.length == 1) {
                            success(result.value[0].Id);
                        }
                        else {
                            panel.setError('Device command not found.');
                        }
                    },
                    failure: function (response, opts) {
                        var result = JSON.parse(response.responseText);
                        panel.setError(result.error.message);
                    }
                });
    }

});