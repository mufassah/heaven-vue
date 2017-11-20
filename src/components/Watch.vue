<template>
  <div>
    <div class="watch-nav-holder">
      <div class="watch-nav">
        <a data-position="top" data-delay="50" data-tooltip="Kairazy" class="tooltipped" v-on:click="changeChannel('kairazy')">
          <img src="../assets/temps/kairazy.png" class="watch-nav-img"/>
        </a>
        <a data-position="top" data-delay="50" data-tooltip="LCS" class="tooltipped" v-on:click="changeChannel('NALCS1')">
          <img src="../assets/temps/lcs.png" class="watch-nav-img"/>
        </a>
        <a data-position="top" data-delay="50" data-tooltip="MLG" class="tooltipped" v-on:click="changeChannel('mlg')">
          <img src="../assets/temps/mlg.png" class="watch-nav-img"/>
        </a>
        <a data-position="top" data-delay="50" data-tooltip="TSM SmaK" class="tooltipped" v-on:click="changeChannel('tsm_smak')">
          <img src="../assets/temps/smak.png" class="watch-nav-img"/>
        </a>
      </div>
    </div>
    <div class="watch-container">
     
        <iframe class="stream_embed" :src="streamUrl" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>
      
      
        <iframe class="chat_embed" frameborder="0" scrolling="no" :src="chatUrl"></iframe>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'watch',
    data () {
      return {
        channel: 'kairazy',
        streamUrl: "https://player.twitch.tv/?channel=kairazy&amp;muted=false",
        chatUrl: "https://www.twitch.tv/kairazy/chat" 
      }
    },
    methods: {
      changeChannel (channelName) {
        console.log(channelName)
        this.channel = channelName
        this.streamUrl = "https://player.twitch.tv/?channel="+ this.channel +"&amp;muted=false"
        this.chatUrl = "https://www.twitch.tv/" + this.channel + "/chat"
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.watch-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 3em;
}
.watch-nav-holder{
  display: flex;
  justify-content: center;
}
.watch-nav {
  display: flex;
  justify-content: space-around;
  font-size: 2em;
  margin-bottom: 2em;
  width: 80%;
}
.watch-nav > a {
  color: white;
}
.watch-nav > a:hover {
  color: #ffdb4d;
}
.watch-nav-img{
    width: 4em;
    height: 4em;
    border-radius:50%;
    transition: border-radius .5s;
}
.watch-nav-img:hover{
    height: 4em;
    width: 4em;
    border-radius: 25%;
    cursor: pointer;
}
.chat_embed {
  max-width: 30em;
  flex: 1;
  height: 45em;
  box-shadow: 1px 3px 7px #ffdb4d;
}
.chat_embed > iframe {
  width: inherit;
  height: inherit;
}
.stream_embed {
  max-width: 82em;
  flex: 3;
  height: 45em;
  box-shadow: 1px 3px 7px #ffdb4d;
}
.stream_embed > iframe {
  width: inherit;
  height: inherit;
}
</style>
