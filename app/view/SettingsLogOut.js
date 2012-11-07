﻿Ext.define('zvsMobile.view.SettingsLogOut', {
        extend: 'Ext.Panel',
        xtype: 'LogOut',
        constructor: function (config) {
            var self = this;
            Ext.apply(config || {}, {
			    
                items: [{
                        xtype: 'panel',
                        html: ''
                    },{
                    xtype: 'fieldset',
                    style: 'padding:10px;',
                    items: [ {
                        xtype: 'button',
                        text: 'Logout',
                        width: '90%',
                        style: 'margin:10px auto;',
                        handler: function (b) {
                            //Set token in local storage to null
                            appSettingsStore = Ext.getStore('appSettingsStore');
                            var tokenRecord = appSettingsStore.findRecord('SettingName', 'zvstoken');
                            if (tokenRecord != null) {
                                tokenRecord.set('Value', null);
                                appSettingsStore.sync();
                            }
                            else {
                                appSettingsStore.add({ SettingName: 'zvstoken', Value: null });
                                appSettingsStore.sync();
                            }

                            self.fireEvent('loggedOut');
                        }
                    }]
                }]
            });
            this.callParent([config]);
        },
        config:
        {
            xtype: 'panel',
            layout: 'vbox',
            scrollable: 'vertical'
        }
    });