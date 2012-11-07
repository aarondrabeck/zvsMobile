Ext.define('zvsMobile.view.DeviceList', {
    extend: 'Ext.dataview.List',
    requires: ['Ext.plugin.PullRefresh'],
    xtype: 'DeviceList',
    config: {
        cls: 'DeviceListItem',
        store: 'Devices',
        scrollable: 'vertical',
        ui: 'round',
        scrollToTopOnRefresh: false,
        plugins: [{ xclass: 'Ext.plugin.PullRefresh'}],
        itemTpl: new Ext.XTemplate(
		        '<div class="device">',
			        '<div class="imageholder {type}_{on_off}"></div>',
			        '<h2>{name}</h2>',
			        '<div class="level">',
				        '<div class="meter">',
					        '<div class="progress" style="width:{level}%">',
					        '</div>',
				        '</div>',
				        '<div class="percent">{level_txt}</div>',
			        '</div>',
		        '</div>'),
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            title: 'Devices'
        }]
    }
});
