/*
 * File: app/view/SceneControlPanel.js
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

Ext.define('zvsMobile.view.SceneControlPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.scenecontrolpanel',

    requires: [
        'Ext.Button',
        'Ext.Toolbar',
        'Ext.XTemplate'
    ],

    config: {
        itemId: 'sceneControlPanel',
        scrollable: 'vertical',
        tpl: [
            '<tpl for="scene">',
            '    <tpl if="cmd_count &gt; 0">',
            '        <div class="scene_overview">',
            '            <table class="info">',
            '                <thead>',
            '                    <tr>',
            '                        <th></th>',
            '                        <th scope="col" abbr="Device">Device / Cmd</th>',
            '                        <th scope="col" abbr="Action">Action</th>',
            '                    </tr>',
            '                </thead>',
            '                <tbody>',
            '                    <tpl for="cmds">',
            '                        <tr>',
            '                            <th scope="row">{order}</th>',
            '                            <td>{device}</td>',
            '                            <td>{action}</td>',
            '                        </tr>',
            '                    </tpl>',
            '                </tbody>',
            '            </table>',
            '        </div>',
            '    </tpl>',
            '</tpl>'
        ],
        items: [
            {
                xtype: 'button',
                itemId: 'activateSceneBtn',
                margin: 10,
                text: 'Activate Scene'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                itemId: 'feedbackLabel',
                padding: '10px',
                scrollable: 'vertical'
            }
        ]
    },

    setError: function(message) {
        var feedbackLabel= this.down('#feedbackLabel');
        feedbackLabel.setHtml(message);
        feedbackLabel.setStyle('color:red');
        setTimeout(function(){ feedbackLabel.setHtml('');}, 5000);
    },

    setSuccess: function(message) {
        var feedbackLabel= this.down('#feedbackLabel');
        feedbackLabel.setHtml(message);
        feedbackLabel.setStyle('color:green');
        setTimeout(function(){ feedbackLabel.setHtml('');}, 5000);
    }

});