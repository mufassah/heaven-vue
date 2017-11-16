<template>
  <div id='roster'>
    <v-layout row>
    <team-members v-bind:items='items' v-on:active-member='setActiveMember'></team-members>
    <transition name="component-fade" mode="out-in">
      <component v-bind:is="currentView" v-bind:member='activeMember'></component>
    </transition>
  </v-layout>
</div>
</template>

<script>
  import TeamMembers from '@/components/TeamMembers'
  import AmberBio from '@/components/full_team/AmberBio'
  import KairazyBio from '@/components/full_team/KairazyBio'
  import MufassahBio from '@/components/full_team/MufassahBio'
  import EversBio from '@/components/full_team/EversBio'
  import SlightlyGiftedBio from '@/components/full_team/SlightlyGiftedBio'
  import ApuithyBio from '@/components/full_team/ApuithyBio'
  import BlightfulBio from '@/components/full_team/BlightfulBio'
  import CynBio from '@/components/full_team/CynBio'
  import AdrianBio from '@/components/full_team/AdrianBio'
  import MeepBio from '@/components/full_team/MeepBio'
  import SeanBio from '@/components/full_team/SeanBio'
  import SnuggsBio from '@/components/full_team/SnuggsBio'
  import AdamBio from '@/components/full_team/AdamBio'
  import ThaSceneBio from '@/components/full_team/ThaSceneBio'
  import EmilyBio from '@/components/full_team/EmilyBio'

  export default {
    name: 'roster',
    components: {
      TeamMembers,
      AmberBio,
      KairazyBio,
      MufassahBio,
      EversBio,
      SlightlyGiftedBio,
      ApuithyBio,
      BlightfulBio,
      CynBio,
      AdrianBio,
      MeepBio,
      SeanBio,
      SnuggsBio,
      AdamBio,
      ThaSceneBio,
      EmilyBio
    },
    data () {
      return {
         items: [
         { avatar: '/static/images/amber.jpg', title: 'Amber', subtitle: 'Admin', comp: AmberBio, bgImg: '/static/images/Amber_Header.png' },
        { avatar: '/static/images/kairazy.png', title: 'Kairazy', subtitle: 'Admin/Player', comp: KairazyBio, bgImg: '/static/images/Amber_Header.png' },
        { avatar: '/static/images/austin.jpg', title: 'Mufassah', subtitle: 'Admin/Web Designer', comp: MufassahBio, bgImg: '/static/images/Austin_Header.jpg' },
        { avatar: '/static/images/evers.jpg', title: 'Evers', subtitle: 'Player', comp: EversBio, bgImg: '/static/images/Amber_Header.png' },
        { avatar: '/static/images/slightlygifted.jpg', title: 'Slightly Gifted', subtitle: 'Player', comp: SlightlyGiftedBio, bgImg: '/static/images/Amber_Header.png' },
        { avatar: '/static/images/apuithy.jpg', title: 'Apuithy', subtitle: 'Player', comp: ApuithyBio, bgImg: '/static/images/Amber_Header.png' },
        { avatar: '/static/images/blightful.jpg', title: 'Blightful', subtitle: 'Player', comp: BlightfulBio, bgImg: '/static/images/Amber_Header.png' },
        { avatar: '/static/images/cyn.jpg', title: 'Cyn', subtitle: 'Admin/Designer', comp: CynBio, bgImg: '/static/images/Amber_Header.png' },
        { avatar: '/static/images/adrian.jpg', title: 'Adrian', subtitle: 'Player', comp: AdrianBio, bgImg: '/static/images/Amber_Header.png' },
        { avatar: '/static/images/adam.jpg', title: 'Adam', subtitle: 'Player', comp: AdamBio, bgImg: '/static/images/Amber_Header.png' },
        { avatar: '/static/images/meep.jpg', title: 'Meep', subtitle: 'Player', comp: MeepBio, bgImg: '/static/images/Amber_Header.png' },
        { avatar: '/static/images/sean.jpg', title: 'Sean', subtitle: 'Designer/Player', comp: SeanBio, bgImg: '/static/images/Amber_Header.png' },
        { avatar: '/static/images/snuggs.jpg', title: 'Snuggs', subtitle: 'Admin/Player', comp: SnuggsBio, bgImg: '/static/images/Amber_Header.png' },
        { avatar: '/static/images/scene.jpg', title: 'ThaScene', subtitle: 'Player', comp: ThaSceneBio, bgImg: '/static/images/Amber_Header.png' },
        { avatar: '/static/images/amber.jpg', title: 'Emily', subtitle: 'Admin', comp: EmilyBio, bgImg: '/static/images/Amber_Header.png' }
        ],
        currentView: null,
        activeMember: {}
      }
    },
    created: function () {
      this.activeMember = this.items[0]
      this.currentView = this.activeMember.comp
    },
    methods: {
      setActiveMember (newestMember) {
        this.activeMember = newestMember
        this.currentView = newestMember.comp
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to{
  opacity: 0;
}
</style>
