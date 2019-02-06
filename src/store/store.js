import notello from "../js/notello.js";
import noten from "../js/noten.js";

var store = {
  debug: true,
  state: {
    backendData: {
      classes: [{
        id: '6d_2018_2019',
        name: '6d Französisch (18/19)',
        examTypes: [
          { id: 'MÜ', weight: 2 },
          { id: 'TE', weight: 1 },
          { id: 'KA', weight: 2 }
        ],
        students: ['', ''],
        exams: ['TE', 'TE'],
        marks: [{ student: 'A', grades: ['5+', '5+'] }]
      }, {
        id: '7a_2018_2019',
        name: '7a Englisch (18/19)',
        students: [],
        exams: [],
        marks: [ ],
        examTypes: [
          { id: 'MÜ', weight: 2 },
          { id: 'TE', weight: 1 },
          { id: 'KA', weight: 2 }
        ]
      }],
      config: {
        examTypes: ['KA', 'TE', 'MÜ']
      }
    }
  },
    updateBackendWithFrontend(frontendData,class_id) {
        if (this.debug) {
            console.log('updateBackendWithFrontend - '+class_id)
            console.log(frontendData);
        }
        noten.resyncBackend(frontendData,
            this.state.backendData.classes.filter(v=>v.id===class_id)[0])
        this.saveBackend();
    },
    sanitizeTable(frontendData) {
      if (frontendData[frontendData.length-1][0].toString().trim()!='') {
          frontendData.push([]);
          for (let i=0;i<frontendData[0].length;i++)
              frontendData[frontendData.length-1].push('');
      }
      let index=frontendData[0].findIndex((v)=>v.toString().substr(0,1)==="[");
      if (frontendData[0][index-1].toString().trim()!='') {
          for (let r=0;r<frontendData.length;r++) {
              frontendData[r].splice(index,0,'');
          }
      }
    },
    buildFrontendWithBackend(class_id,frontendData) {
        if (this.debug) {
            console.log('buildFrontendWithBackend - '+class_id)
            console.log(frontendData);
        }
        noten.makeDisplayData(frontendData,
            this.state.backendData.classes.filter(v=>v.id===class_id)[0])
    },
    buffer: '',
    saveBackend() {

        function plain(data) {
            if (data === null || typeof data === 'undefined') {
                return data;
            }

            try {
                return JSON.parse(JSON.stringify(data));
            } catch (e) {
                throw 'vue-plain: Parse failed, make sure your parameter can be JSON.stringify';
            }
        }

        let data=JSON.stringify(this.state.backendData);
        if (data!==this.buffer) {
            this.buffer=data;
            localStorage.setItem("flograde",this.buffer);
            console.log(this.buffer);
        }
    },
    loadSettings: function(class_id) {
      return notello.loadTableSettings(this,class_id)
    }
}

export default store
