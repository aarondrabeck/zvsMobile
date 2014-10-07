function _c7ab6408299aff1c6fea13e65cf98d6b615cd62a(){};Ext.define('zvsMobile.override.data.proxy.Ajax', {
    override: 'Ext.data.proxy.Ajax',
     requires:[
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],
    alias:'proxy.odata',
    sortParam:'$orderby',
    filterParam:'$filter',
    pageParam:null,
    limitParam:'$top',
    startParam:'$skip',
    actionMethods: {
        create:'POST',
        read:'GET',
        update: 'PATCH',
        destroy:'DELETE'
    },
    headers:{
        Accept:'application/json',
        Prefer:'return-content'
    },
   
    buildUrl:function(request) {
        
       
        var me = this;
        var operation = request.operation;
        var records = request.getOperation().getRecords() || [];
        var record = records[0];
        var params = request.getParams() || {};
        var url = me.callParent(arguments);
        var idProperty = me.getModel().getIdProperty();
         var id = (record && !record.phantom) ? record.getId() : params[idProperty];

        url = zvsMobile.app.getBaseUrl() + url;
        if (id) {
            url = url.replace(/\/?$/,'(' + id + ')');
        }
        if (request.url) {
            url += request.url;
        }
        //request._url = url;        

        var defaultHeaders = Ext.Ajax.getDefaultHeaders() || {};
        var headers = me.getHeaders() || {};
        headers["X-zvsToken"] = zvsMobile.app.getToken();
        me.setHeaders(headers);


        return url;
    },

    encodeFilters:function(filters) {
        var min = [],
            length = filters.length,
            i = 0;

        for (; i < length; i++) {
            min[i] = {
                property: filters[i].getProperty(),
                value   : filters[i].getValue()
            };
        } return this.applyEncoding(min);
//         var sch,
//             filterChecks = [],
//             filterBuf,
//             filter,
//             exact;
//         for (sch = 0; filter = filters[sch]; sch++) {
//             exact = filter.config.exactMatch;
//             filterBuf = [];
//             //     if (exact) {
//             filterBuf.push('(');
//             filterBuf.push(filter.config.value);
//             filterBuf.push(' eq ');
//             //   } else {
//             //     filterBuf.push('substringof(\'');
//             //   filterBuf.push(filter.config.value);
//             //      filterBuf.push('\',');
//             // }

//             filterBuf.push(filter.config.property);
//             //// if (!filter.caseSensitive && !exact) {
//             //filterBuf.push(')');
//             //}
//             filterBuf.push(')');
//             filterChecks.push(filterBuf.join(''));
//         }
//         return filterChecks.join(' and ');
    }
});