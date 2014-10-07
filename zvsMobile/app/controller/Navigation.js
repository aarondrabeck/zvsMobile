/*
 * File: app/controller/Navigation.js
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

Ext.define('zvsMobile.controller.Navigation', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            navMenu: {
                selector: '#navMenu',
                xtype: 'navmenu'
            },
            mainView: 'navigationview#mainView',
            devicesPanel: 'panel#devicesPanel'
        },

        control: {
            "mainview #menuButton": {
                tap: 'showMenu'
            },
            "navmenu button": {
                tap: 'navigate'
            },
            "dataview#homeDataview": {
                itemtap: 'onHomeDataViewItemTap'
            },
            "navigationview#mainView": {
                initialize: 'onNavigationviewInitialize',
                push: 'onNavigationviewPush'
            },
            "#navBar": {
                back: 'onBarBack'
            }
        }
    },

    showMenu: function(target) {
        // Get or create navigation menu
        var menu = this.getNavMenu();
        if (!menu) {
            menu = Ext.create('widget.navmenu');
        }

        Ext.Viewport.setMenu(menu, {
            side:'left',
            cover:true
        });
        Ext.Viewport.toggleMenu('left');

        var menuItems = menu.getItems().items,				// Menu buttons
        	currentView = this.currentView || "homepanel";	// Current view alias, default to home

        // Disable active view's button
        menuItems.forEach(function(button) {

            // Get custom navView attribute
            var navView = button.config.navView;

            // Active button, disable
            if (currentView == navView) {
                button.disable();
                button.setStyle('background-color:#f7f7f7');
            }

            // Enable all others
            else {
                button.enable();
                 button.setStyle('background-color:white');
            }

        });


    },

    navigate: function(button, e, eOpts) {
        var text = button.getText(),						// Button text
        	navView = button.getInitialConfig().navView,	// Get custom attribute 'navView'
        	mainView = this.getMainView(),					// Main navigation view
        	navMenu = this.getNavMenu();					// Navigation menu

        // Add view to main view
        mainView.push({
            xtype: navView,
            title: text
        });

        // Remember current view alias
        this.currentView = navView;

        Ext.Viewport.removeMenu('left');
    },

    onHomeDataViewItemTap: function(dataview, index, target, record, e, eOpts) {

        var navView = record.data.navView,	// Get custom attribute 'navView'
            mainView = this.getMainView();					// Main navigation view

        // Add view to main view
        mainView.push({
            xtype: navView,
            title: record.data.Name
        });

        // Remember current view alias
        this.currentView = navView;
    },

    onNavigationviewInitialize: function(component, eOpts) {
        Ext.Ajax.on('beforerequest', (function(conn, options, eOpts) {

            options.url = zvsMobile.app.getBaseUrl() + options.url;
            options.headers = {
                'X-zvsToken': zvsMobile.app.getToken(),
            };
        }), this);
    },

    onNavigationviewPush: function(navigationview, view, eOpts) {
        history.pushState();
    },

    onBarBack: function(bar, eOpts) {
        history.back();  //pop the state to trigger listener in step 3
            return false;  // return false so listener will take care of this
    },

    launch: function() {
        var that = this;
        window.addEventListener('popstate', function () {
            var portal = that.getMainView();
            if (portal) {
                portal.pop();

                var currentItem = portal.getActiveItem();

                if(currentItem)
                    that.currentView = currentItem.xtype;

            }
        }, false);
    }

});