Ext.define('zvsMobile.view.GroupList', {
    extend: 'Ext.dataview.List',
    requires: ['Ext.plugin.PullRefresh'],
    xtype: 'GroupList',
    config: {
        cls: 'GroupList',
        store: 'Groups',
        scrollable: 'vertical',
        ui: 'round',
        scrollToTopOnRefresh: false,
        plugins: [{ xclass: 'Ext.plugin.PullRefresh'}],
        itemTpl: new Ext.XTemplate(
			'<div class="group">',
				'<div class="imageholder"></div>',
				'<h1>{name} ({count})</h1>',
			'</div>'
		),
        items: {
            xtype: 'toolbar',
            docked: 'top',
            title: 'Groups'
        }
    }
});
