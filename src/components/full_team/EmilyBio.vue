<template>
<v-flex xs12 sm8 lg7 offset-sm1>
      <div class="member-card">
      <div class="avi-holder" v-bind:style="{ backgroundImage: 'url(' + bgImg + ')' }">
          <v-avatar size="400px">
            <img :src="avi">
          </v-avatar>
      </div>
      <div class="member-bio">
        <h3>this is the bio header</h3>
        <div class="member-links">
          <h5 class="linkage">@amberhartlin</h5>
          <h5 class="linkage">twitch.tv/amberhartlin</h5>
          <h5 class="linkage">other links</h5>
        </div>
        <p>this is where you would put all the bio information. it's super special and shit</p>
      </div>
    </div>
    </v-flex>

  </template>

<script>
  export default {
    props: ['member'],
    data () {
      return {
        bgImg: this.member.bgImg,
        avi: this.member.avatar
      }
    }
  }
</script>
  <style>
  /*to me moved*/
.avi-holder{
  width: 100%;
  display: flex;
  justify-content: space-around;
  /*background-image: url("/static/images/Amber_Header.png");*/
  background-size: cover;
}
.member-bio{
  height: 300px;
  width: 100%;
  background-color: #191717;
}
.member-card{
  box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
  color: #bdbdbd;
}
.member-links{
  display: flex;
}
.linkage{
  margin-right: 1em;
}
.member-bio > p {
  font-size: 1.2em;
}
</style>