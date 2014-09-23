Ext.define('zvsMobile.ODataProxy', {
    extend:'Ext.data.proxy.Ajax',
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
    constructor:function(cfg) {
        
        return this.callParent(arguments);
    },
    buildUrl:function(request) {
        var me        = this,
            operation = request.operation,
            records   = request.getOperation().getRecords() || [],
            record    = records[0],
            params     = request.getParams() || {},
            url       = me.url,
            idProperty = me.getModel().getIdProperty(),
            id        = (record && !record.phantom) ? record.getId() : params[idProperty];

        if (id) {
            url = url.replace(/\/?$/,'(' + id + ')');
        }
        if (request.url) {
            url += request.url;
        }
        request.url = url;
        return me.callParent(arguments);
    },
   
    encodeFilters:function(filters) {
        var sch,
            filterChecks = [],
            filterBuf,
            filter,
            exact;
        for (sch = 0; filter = filters[sch]; sch++) {
            exact = filter.config.exactMatch;
            filterBuf = [];
       //     if (exact) {
                filterBuf.push('(');
                filterBuf.push(filter.config.value);
                filterBuf.push(' eq ');
         //   } else {
           //     filterBuf.push('substringof(\'');
             //   filterBuf.push(filter.config.value);
          //      filterBuf.push('\',');
           // }
            
            filterBuf.push(filter.config.property);
           //// if (!filter.caseSensitive && !exact) {
                //filterBuf.push(')');
            //}
            filterBuf.push(')');
            filterChecks.push(filterBuf.join(''));
        }
        return filterChecks.join(' and ');
    }
});