﻿Ext.define('zvsMobile.view.SceneDetails', {
    extend: 'Ext.Panel',
    xtype: 'SceneDetails',
    constructor: function (config) {
        var RepollTimer;
        var sceneId = 0;
        var self = this;

        Ext.apply(config || {}, {
            items: [{
                xtype: 'panel',
                id: 'SceneStatusTPL',
                tpl: new Ext.XTemplate(
                        '<div class="scene_info">',
                            '<div class="head">',
							    '<div class="image s_img_{scene.is_running}"></div>',
							    '<tpl for="scene">',
					                '<h1>{name}</h1>',
                                    '<div class="scene_overview"><strong>Running:</strong>',
                                    '<tpl if="is_running">Yes<tpl else>No</tpl></div>',
                            '</div>',
                        '</tpl>',
                    '</div>'
                )
            }, {
                xtype: 'button',
                id: 'activeSceneButton',
                text: 'Activate',
                ui: 'confirm',
                margin: '25 5',
                handler: function () {
                    console.log('AJAX: ActivateScene');

                    Ext.Ajax.request({
                        url: zvsMobile.app.BaseURL() + '/scene/' + self.sceneId,
                        method: 'POST',
                        headers: {
                            'zvstoken': zvsMobile.app.getToken()
                        },
                        params: {
                            is_running: true
                        },
                        success: function (response, opts) {
                            var result = JSON.parse(response.responseText);
                            if (result.success) {
                                var SceneStatusTPL = Ext.getCmp('SceneStatusTPL');
                                SceneStatusTPL._data.scene.is_running = true;
                                SceneStatusTPL.setData(SceneStatusTPL._data);

                                //Update the store 
                                data = Ext.getStore('Scenes').data.items;
                                for (i = 0, len = data.length; i < len; i++) {
                                    if (data[i].data.id === SceneStatusTPL._data.scene.id) {
                                        data[i].data.is_running = true;
                                    }
                                }
                                Ext.getStore('Scenes').add(data);
                                //Refresh the DEvice list
                                Ext.getCmp('SceneList').refresh();

                                self.delayedReload();
                                //Ext.Msg.alert('Scene Activation', result.desc);
                                Ext.getCmp('SceneActiveResult').setHtml(result.desc);

                            }
                            else {
                                Ext.Msg.alert('Scene Activation', 'Communication Error!');
                            }
                        }

                    });
                }
            }, {
                xtype: 'panel',
                id: 'SceneActiveResult',
                cls: 'result',
                html: ''
            }, {
                xtype: 'panel',
                id: 'ScenesDetailsTPL',
                tpl: new Ext.XTemplate(
                     	'<tpl for="scene">',
                         '<tpl if="cmd_count &gt; 0">',
                            '<div class="scene_overview">',
                                '<table class="info">',
                                '<thead>',
                                    '<tr>',
                                        '<th></th>',
                                        '<th scope="col" abbr="Device">Device / Cmd</th>',
                                        '<th scope="col" abbr="Action">Action</th>',
                                    '</tr>',
                                '</thead>',
                                '<tbody>',
                                '<tpl for="cmds">',
                                        '<tr>',
                                            '<th scope="row">{order}</th>',
                                            '<td>{device}</td>',
                                            '<td>{action}</td>',
                                            '</tr>',
                                        '</tpl>',
                                '</tbody>',
                                '</table>',
                            '</div>',
                        '</tpl>',
                        '</tpl>'
                    )
            }]
        });
        this.callSuper([config]);
    },
    config: {
        layout: 'vbox',
        scrollable: 'vertical'
    },
    delayedReload: function () {
        var self = this;
        if (self.RepollTimer) {
            clearInterval(self.RepollTimer);
        }
        self.RepollTimer = setTimeout(function () {
            self.loadScene(self.sceneId);
            Ext.getStore('Scenes').load();
        },5000);
    }, loadScene: function (sceneId) {
        var self = this;
        self.sceneId = sceneId;
        //Get Device Details			
        console.log('AJAX: GetSceneDetails');
        Ext.Ajax.request({
            url: zvsMobile.app.BaseURL() + '/scene/' + sceneId,
            method: 'GET',
            params: {
                u: Math.random()
            },
            headers: {
                'zvstoken': zvsMobile.app.getToken()
            },
            success: function (response) {
                var result = JSON.parse(response.responseText);
                if (result.success) {
                
                //Send data to panel TPL     
                var ScenesDetailsTPL = Ext.getCmp('ScenesDetailsTPL');
                var SceneStatusTPL = Ext.getCmp('SceneStatusTPL');
                SceneStatusTPL.setData(result);
                ScenesDetailsTPL.setData(result);

                //Update the store 
                data = Ext.getStore('Scenes').data.items;
                for (i = 0, len = data.length; i < len; i++) {
                    if (data[i].data.id === SceneStatusTPL._data.scene.id) {
                        data[i].data.is_running = result.scene.is_running;
                    }
                }
                Ext.getStore('Scenes').add(data);
                //Refresh the DEvice list
                Ext.getCmp('SceneList').refresh();
                Ext.getCmp('SceneActiveResult').setHtml('');
                }
            }
        });
    }
});