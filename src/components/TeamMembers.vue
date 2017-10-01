<template>
  <v-layout row>
    <v-flex xs12 sm4 lg2 offset-sm1 class="roster-list scroller">
      <v-card>
        <v-toolbar class="roster-header">

          <v-toolbar-title>
            <v-text-field
              label="Filter"
              v-model="search"
              box
              class="roster-filter"
            ></v-text-field>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          
        </v-toolbar>
        <v-expansion-panel class="roster-body" popout>
          <v-expansion-panel-content v-for="(item,i) in filteredItems" :key="i">
            <div slot="header" class="roster-item">
              <v-avatar class="roster-avi">
                <img v-bind:src="item.avatar">
              </v-avatar>
              <div class="roster-info">
                <div class="roster-title">
                  {{ item.title }}
                </div>
                <div class="roster-subtitle">
                  {{ item.subtitle}}
                </div>
              </div>
            </div>
            
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'team-members',
    data () {
      return {
        search: '',
        items: [
        { avatar: '/static/images/kairazy.png', title: 'Kairazy', subtitle: 'Admin/Player' },
        { avatar: '/static/images/austin.jpg', title: 'Mufassah', subtitle: 'Admin/Web Designer' },
        { avatar: '/static/images/evers.jpg', title: 'Evers', subtitle: 'Player' },
        { avatar: '/static/images/slightlygifted.jpg', title: 'Slightly Gifted', subtitle: 'Player' },
        { avatar: '/static/images/amber.jpg', title: 'Amber', subtitle: 'Admin' },
        { avatar: '/static/images/apuithy.jpg', title: 'Apuithy', subtitle: 'Player' },
        { avatar: '/static/images/blightful.jpg', title: 'Blightful', subtitle: 'Player' },
        { avatar: '/static/images/cyn.jpg', title: 'Cyn', subtitle: 'Admin/Designer' },
        { avatar: '/static/images/adrian.jpg', title: 'Adrian', subtitle: 'Player' },
        { avatar: '/static/images/adam.jpg', title: 'Adam', subtitle: 'Player' },
        { avatar: '/static/images/meep.jpg', title: 'Meep', subtitle: 'Player' },
        { avatar: '/static/images/sean.jpg', title: 'Sean', subtitle: 'Designer/Player' },
        { avatar: '/static/images/snuggs.jpg', title: 'Snuggs', subtitle: 'Admin/Player' },
        { avatar: '/static/images/scene.jpg', title: 'ThaScene', subtitle: 'Player' }
        ]
      }
    },
    computed: {
      filteredItems() {
        return this.items.filter(item => {
          return (item.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || item.subtitle.toLowerCase().indexOf(this.search.toLowerCase()) > -1)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.roster-list {
  margin-bottom: 5em;
  height: 52em;
  overflow-y: scroll;
}
.roster-header{
  background-color: #212121;
  color: #bdbdbd;
}
.input-group {
  padding: 1.4em 0 0 !important;
}
.input-group__details:after {
  background-color: #bdbdbd !important;
}
.input-group.input-group--text-field:not(.input-group--single-line):not(.input-group--error).input-group--focused label {
  color: #bdbdbd !important;
}
.input-group--text-field input {
  caret-color: #bdbdbd !important;
}
.input-group__input {
  background: hsla(0,0%,100%,.1) !important;
}

.roster-header.toolbar {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
.roster-body{
  background-color: #2d2929;
  color: #bdbdbd;
}
.roster-item{
  display: flex;
  justify-content: space-around;
}
.roster-avi {
  flex: 1;
}
.roster-info {
  flex: 2;
}
.roster-title {
  
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.expansion-panel__header > div > i {
  display: none;
}
.expansion-panel__container {
  border-bottom: 1px groove #424242;
}
.expansion-panel__container:hover {
  background-color: #191717;
}
.expansion-panel__container.expansion-panel__container--active {
  background-color: #191717;
}

/* scrollbar */
.scroller::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px !important;
  background-color: #7f7878;
}
.scroller::-webkit-scrollbar
{
  width: 12px; 
}
.scroller::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #3c3a3a;
}
</style>
