/*
 * File: app/controller/Scenes.js
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

Ext.define('zvsMobile.controller.Scenes', {
    extend: 'Ext.app.Controller',
    alias: 'controller.scenespanel',

    config: {
        refs: {
            mainView: 'navigationview#mainView'
        },

        control: {
            "panel#scenesPanel": {
                initialize: 'onPanelInitialize'
            },
            "dataview#scenesDataview": {
                itemtap: 'onDataviewItemTap'
            },
            "button#activateSceneBtn": {
                tap: 'onActivateButtonTap'
            },
            "button#refreshScenes": {
                tap: 'onReloadButtonTap'
            },
            "formpanel#sceneEdit": {
                show: 'onSceneEditShow'
            },
            "panel#sceneControlPanel": {
                show: 'onControlPanelShow'
            },
            "button#saveSceneButton": {
                tap: 'onSaveButtonTap'
            },
            "searchfield#sceneSearchfield": {
                keyup: 'onSearchfieldKeyup',
                clearicontap: 'onSearchfieldClearicontap'
            }
        }
    },

    onPanelInitialize: function(component, eOpts) {
        var sceneStore = Ext.getStore('SceneStore');
        sceneStore.clearFilter();
        sceneStore.load();
    },

    onDataviewItemTap: function(dataview, index, target, record, e, eOpts) {
        var mainView = this.getMainView();
        var sceneRecord = record;

        mainView.push({
            xtype: 'scenetabpanel',
            title: sceneRecord.data.Name,
            record: sceneRecord
        });
    },

    onActivateButtonTap: function(button, e, eOpts) {
        var sceneRecord = button.getParent().getRecord();
        var cmdStore = Ext.getStore('BuiltinCommandStore');
        cmdStore.getProxy().setUrl('odata4/BuiltinCommands/?$expand=Options&$filter=UniqueIdentifier eq \'RUN_SCENE\'');
        cmdStore.load({
            scope: this,
            callback: function(records, operation, success) {
                // the operation object contains all of the details of the load operation

                var cmd = cmdStore.first();
                if(cmd)
                {
                    button.disable();
                    button.setHtml('Running...');
                    zvsMobile.app.executeCommand(cmd.data.Id, sceneRecord.data.Id, '', function(success, error){
                        button.enable();
                         button.setHtml('Activate Scene');
                        if(success)
                            Ext.Msg.alert('Success',  success);
                        else
                            Ext.Msg.alert('Error',  error);
                    });

                }
            }
        });
    },

    onReloadButtonTap: function(button, e, eOpts) {
        var sceneStore = Ext.getStore('SceneStore');
        sceneStore.load();
    },

    onSceneEditShow: function(component, eOpts) {
        var sceneRecord = component.getParent().getRecord();
        component.setRecord(sceneRecord);
    },

    onControlPanelShow: function(component, eOpts) {
        var sceneRecord = component.getParent().getRecord();
                component.setRecord(sceneRecord);
    },

    onSaveButtonTap: function(button, e, eOpts) {
        var editPanel = button.getParent();
        var sceneRecord = editPanel.getRecord();
        button.disable();

        Ext.Ajax.request({
            url: 'odata4/Scenes('+sceneRecord.getData().Id+')/',
            method: 'PATCH',
            scope : this,
            jsonData: {
                Name: editPanel.getValues().Name
            },
            headers: {
                'Content-Type': 'application/json',
                'X-zvsToken': zvsMobile.app.getToken()
            },
            success: function (response, opts) {
                Ext.Msg.alert('Done',  'Scene updated');

                var sceneStore = Ext.getStore('SceneStore');
                var record = sceneStore.getById(sceneRecord.getData().Id);
                record.set(editPanel.getValues());
                var mainView = this.getMainView();
                mainView.getNavigationBar().setTitle(record.data.Name);
                button.enable();
            },
            failure: function (response, opts) {
                Ext.Msg.alert('Error',  'Scene update failed. ' + response.responseText);
                button.enable();
            }
        });
    },

    onSearchfieldKeyup: function(textfield, e, eOpts) {
        queryString = textfield.getValue();

        var store = Ext.getStore('SceneStore');
        store.clearFilter();

        if(queryString) {
            var thisRegEx = new RegExp(queryString, "i");
            store.filterBy(function(record) {
                if (thisRegEx.test(record.get('Name')))
                    return true;
                return false;
            });
        }
    },

    onSearchfieldClearicontap: function(textfield, e, eOpts) {
            var store = Ext.getStore('SceneStore');
            store.clearFilter();
    }

});