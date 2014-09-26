/*
 * File: app/controller/Settings.js
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

Ext.define('zvsMobile.controller.Settings', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            myurlfield: 'urlfield#myurlfield',
            mynumberfield: 'numberfield#mynumberfield',
            tokenTextField: 'textfield#tokenTextField',
            settingsForm: 'formpanel#settingsForm'
        },

        control: {
            "button#saveButton": {
                tap: 'OnSaveBtnTap'
            },
            "formpanel#settingsForm": {
                initialize: 'onFormpanelInitialize'
            }
        }
    },

    OnSaveBtnTap: function(button, e, eOpts) {
        //Save Emp
        var settingForm = this.getSettingsForm();

        var settingsStore = Ext.getStore('Settings');
        var record = settingsStore.getById(1);
        // get model instance "bound" to form
        var rec = settingForm.getRecord();

        var settingsStore = Ext.getStore('Settings');
        record.set(settingForm.getValues());

        var errs = rec.validate();
        var msg = '';

        if (!errs.isValid()) {
            errs.each(function (err) {
                msg += err.getField() + ' ' + err.getMessage() + '.  ';
            });
            Ext.Msg.alert('Error', msg);
            return;
        }

        settingsStore.sync();
        Ext.Msg.alert('Done',  'Settings saved');
    },

    onFormpanelInitialize: function(component, eOpts) {
        var settingsStore = Ext.getStore('Settings');
        var record = settingsStore.getById(1);

        if(!record) {
            record = Ext.create('zvsMobile.model.Settings', {
                Id: 1,
                Url: 'localhost',
                Port: 5332
            });
            settingsStore.add(record);
        }

        var settingForm = this.getSettingsForm();
        settingForm.setRecord(record);
    }

});