Ext.define('zvsMobile.view.SceneList', {
    extend: 'Ext.dataview.List',
    requires: ['Ext.plugin.PullRefresh'],
    xtype: 'SceneList',
    config: {
        cls: 'SceneListItem',
        store: 'Scenes',
        scrollable: 'vertical',
        ui: 'round',
        scrollToTopOnRefresh: false,
        plugins: [{ xclass: 'Ext.plugin.PullRefresh'}],
        itemTpl: new Ext.XTemplate(
            '<div class="scene">',
			    '<div class="imageholder running_{is_running}"></div>',
			    '<h2>{name} ({cmd_count})</h2>',
			'</div>'
         ),
        items: {
            xtype: 'toolbar',
            docked: 'top',
            title: 'Scenes'
        }

    }
});

