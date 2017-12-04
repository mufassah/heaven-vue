<template>
<v-flex xs12 sm8 lg7 offset-sm1>
      <div class="member-card">
      <div class="avi-holder" v-bind:style="{ backgroundImage: 'url(' + bgImg + ')' }">
          <v-avatar size="400px">
            <img :src="avi">
          </v-avatar>
      </div>
      <div class="member-bio flex-bio">
        <h3>this is the bio header</h3>
         <div class="member-links">

          <a href="https:www.twitter.com/amberhartlin">
            <div class="icon-link">
              <icon name="twitter" class="twitter scaled">
              </icon>
              <h5 class="linkage">amberhartlin</h5>
            </div>
          </a>
          
          <a href="https://www.twitch.tv/amberhartlin">
            <div class="icon-link">
              <icon name="twitch" class="twitch scaled"></icon>
              <h5 class="linkage">amberhartlin</h5>
            </div>
          </a>
        </div>
        
        <p>Amber's Bio</p>
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
a {
  color: #bdbdbd;
  text-decoration: none;
}
a:hover {
  color: white;
}

.twitter {
  position: relative;
  top: 5px;
  color: cyan;
  width: 25px;
}
.twitch {
  position: relative;
  top: 7px;
  color: #6441a5;
  width: 25px;

}
.scaled {
  transform: scale(1.5); /* Equal to scaleX(0.7) scaleY(0.7) */

}
.flex-bio {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;
  flex: 0 1 auto;
}
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
  overflow: hidden;
  box-shadow: 0 12px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
  color: #bdbdbd;
  border-radius: 25px 25px 25px 25px;
}
.member-links{
  display: flex;
  margin-bottom: 1em;
}
.linkage{
  margin-right: 1em;
  margin-bottom: 0 !important;
}
.member-bio > p {
  font-size: 1.2em;
}
.icon-link {
  display: flex;
}
</style>