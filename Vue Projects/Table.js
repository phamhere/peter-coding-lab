Vue.component('name-head', {
  props: ['column','nameList','indexCheck','sortByName','sortByIndex','reverseName','reverseIndex'],
  template:
  `<thead>
    <tr>
      <td @click="toggleIndex">Index
        <i :class="indexSorted ? 'fas fa-sort-up' : 'fas fa-sort-down'"></i></td>
      <td @click="toggleName">Name
        <i :class="nameSorted ? 'fas fa-sort-up' : 'fas fa-sort-down'"></td>
      <td>Delete</td>
    </tr>
  </thead>`,
  data() {
    return {
      indexSorted: false,
      nameSorted: false,
    }
  },
  methods: {
    toggleIndex() {
      if (this.indexSorted) {
        this.indexSorted = !this.indexSorted;
        this.sortByIndex();
      }else {
        this.indexSorted = !this.indexSorted;
        this.reverseIndex();
      }
    },
    toggleName() {
      if (this.nameSorted) {
        this.nameSorted = !this.nameSorted;
        this.sortByName();
      }else {
        this.nameSorted = !this.nameSorted;
        this.reverseName();
      }
    }
  }
})

Vue.component('name-tr', {
    props: ['name'],
    template: 
    `<tr v-show="isVisible">
      <td>{{ name.id+1 }}</td>
      <td>{{ name.text }}</td>
      <td>
        <button @click="hideRow">Delete</button>
      </td>     
    </tr>`,
    data() {
      return {
        isVisible: true,
        fullname: "",
      }
    },
    methods: {
      hideRow() {
        this.isVisible = false
      }
    }
  })

Vue.component('name-table', {
  template:
  `<div>
    <table>
      <name-head 
        :nameList="nameList"
        :column="columnList" 
        :sortByName="sortByName" 
        :sortByIndex="sortByIndex"
        :reverseName="sortByName2"
        :reverseIndex="sortByIndex2"></name-head>
      <tbody>
        <name-tr v-for="item in nameList" :name="item" :key="item.id"></name-tr>
      </tbody>  
    </table>
    <div id="addName">
      <input placeholder="Type in Name">
      <button @click="append">Add to Table</button>
    </div>
  </div>`,
  data() {
    return {
      columnList: ['Index', 'Name'],
      nameList: [
        { id: 0, text: 'Peter Pham' },
        { id: 1, text: 'Spenser Hang' },
        { id: 2, text: 'Karly Bustos' },
        { id: 3, text: 'Michael Bostwick' },
        { id: 4, text: 'Jin Tak' },
        { id: 5, text: 'Calvin Ly' },
        { id: 6, text: 'Michael Wang' },
        { id: 7, text: 'Nathaniel Mollica' },
        { id: 8, text: 'Allen Zhu' },
        { id: 9, text: 'Michelle Moon' },
      ]
    }  
  },
  methods: {
    append() {
      let input = document.querySelector("input");
      let newinput = { id: this.nameList.length, text: input.value }
      this.nameList.push(newinput);
      input.value = "";
    },
    sortByName() {
      this.nameList = this.nameList.sort(function(a,b) {
        let nameA = a.text.toUpperCase();
        let nameB = b.text.toUpperCase();
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
    },
    sortByName2() {
      this.nameList = this.nameList.sort(function(a,b) {
        let nameA = a.text.toUpperCase();
        let nameB = b.text.toUpperCase();
        if (nameA < nameB) {
          return 1
        }
        if (nameA > nameB) {
          return -1
        }
        return 0
      })
    },
    sortByIndex() {
      this.nameList = this.nameList.sort(function(a,b) {
        return a.id - b.id;
      })
    },
    sortByIndex2() {
      this.nameList = this.nameList.sort(function(a,b) {
        return b.id - a.id;
      })
    }
  }
})

  var app = new Vue({
    el: '#app'
  })