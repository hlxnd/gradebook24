const notello = { 

    firstRowRenderer: function(instance, td, row, col, prop, value, cellProperties) {
        Handsontable.renderers.TextRenderer.apply(this, arguments);
        td.style.fontWeight = 'bold';
    },

    schnittRenderer: function(instance, td, row, col, prop, value, cellProperties) {
    // Handsontable.renderers.TextRenderer.apply(this, arguments);
    // let schnitt = (col === this.frontendData[row].length - 1);
    // td.style.background = schnitt ? 'lightgrey' : 'white';
    // td.style.fontWeight = schnitt ? 'bold' : 'normal';
    },

    frontendData: [["Schüler","","[M]"],["","",""]],

    loadTableSettings: function(store,class_id) {

        let clazz=store.state.backendData.classes.filter((v,i,a)=>v.id===class_id)[0];
        
        store.buildFrontendWithBackend(class_id,this.frontendData);
        store.sanitizeTable(this.frontendData);
        
        //let container = document.getElementById('clazz_table');
        return {
            data: this.frontendData,
            rowHeaders: false,
            colHeaders: false,
            filters: true,
            dropdownMenu: true,
            fillHandle: false,
            beforeChangeRender: (changes,source) => {
                console.log(">>>>>>>>> "+changes);
                if (changes!==null && changes!==undefined && changes.length>0) {
                    store.sanitizeTable(this.frontendData);
                    //noten.resyncBackend(this.frontendData, backendData_);
                    store.updateBackendWithFrontend(this.frontendData,class_id);
                }
            },
            cells: function (row, col, prop) {
                var cellProperties = {};
        
                //cellProperties.renderer = this.schnittRenderer;
        
                if (row === 0 && col !== 0) {
                    cellProperties = {
                        editor: 'select',
                        selectOptions: store.state.backendData.config.examTypes,
                        renderer: this.firstRowRenderer
                    }
                }
        
                return cellProperties;
            }
        };   
    },

    addExam: function() {
        console.log(">>>>>>>>>>>>>>>>>>> "+this.frontendData[0]);
        let index=this.frontendData[0].findIndex((v)=>v.toString().substr(0,1)==="[");
        // if (index>0)
        //     hot.alter('insert_col', index, 1);
        //if (!noten.isEmptyCol(data,data[0].length-2)) {
            for (let r=0;r<this.frontendData.length;r++) {
                this.frontendData[r].splice(index,0,'');
            }
            //hot.render();
            hot.updateSettings({data: this.frontendData});
        //}
    }
}

export default notello;


