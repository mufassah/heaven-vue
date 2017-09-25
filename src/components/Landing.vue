<template>
  <div>
  <div class="landing-container">
    <div class="main-twitter-container">
      <div class="twitter-container">
        <div class="twitter-feed">
          <h2 class="twitter-header-1">TWITTER</h2>
          <h2 class="twitter-header-2">FEED</h2>
          <div class="twitter-width">
            <!-- <a class="twitter-timeline" data-height="350" data-theme="dark" data-chrome="noheader nofooter noborders" href="https://twitter.com/HeavenClan_"></a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script> -->
          </div>
        </div>
      </div>
    </div>
    <div class="heaven-central-container">
      <div class="news-header">
        <h2 class="news-header1">HEAVEN &nbsp;</h2>
        <h2 class="news-header2">CENTRAL</h2>
      </div>
      <div class="heaven-news-stories">
        <div class="main-story">
          <h3>Heaven Clan Main Story</h3>
        </div>
        <div class="side-stories">
          <div class="inside-stories">
            <div class="story-img1">
              <h3>Not as recent news</h3>
            </div>
            <div class="story-img2">
              <h3>WATCH</h3>
            </div>
          </div>
          <div class="inside-stories">
            <div class="story-img3">
              <h3>Team/Community?</h3>
            </div>
            <div class="story-img4">
              <h3>Yet another News Story</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="landing-news-container">
    <div class="heaven-news-container">
      <div class="news-header">
        <h2 class="news-header1">HEAVEN &nbsp;</h2>
        <h2 class="news-header2">NEWS</h2>
      </div>
      <div class="heaven-news-stories">
        <div class="side-stories">
          <div class="inside-stories">
            <div class="news-story-img1">
              <h3>News 1</h3>
            </div>
            <div class="news-story-img2">
              <h3>News 2</h3>
            </div>
          </div>
          <div class="inside-stories">
            <div class="news-story-img3">
              <h3>News 3</h3>
            </div>
            <div class="news-story-img4">
              <h3>News 4</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="heaven-news-container">
      <div class="news-header">
        <h2 class="news-header1">HEAVEN &nbsp;</h2>
        <h2 class="news-header2">TEAM</h2>
      </div>
      <div class="heaven-news-stories">
        <div class="side-stories">
          <div class="inside-stories">
            <div class="news-story-img1">
              <h3>Players</h3>
            </div>
            <div class="news-story-img2">
              <h3>Management</h3>
            </div>
          </div>
          <div class="inside-stories">
            <div class="news-story-img3">
              <h3>Designers</h3>
            </div>
            <div class="news-story-img4">
              <h3>Content Creators</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'landing',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.landing-container{
    display: flex;
    margin-bottom: 5em;
}
.landing-news-container{
    margin-top: 5em;
    display: flex;
    margin-bottom: 5em;
    padding-left: 2em;
}
.main-twitter-container{
    padding-top: 6em;
    padding-bottom: 6em;
}
.twitter-container{
    flex:1.5;
    margin-right: 1em;
    margin-left: 3em;
    
    background: rgba(0,0,0,.4);
}
.twitter-feed{
    padding: .2em 3em 2em 3em;
}
.twitter-width{
    width: 300px;
}
.twitter-header-1{
    color: #e5c300;
    text-align: center;
    margin-bottom: -.5em;
}
.twitter-header-2{
    color: white;
    text-align: center;
}
.heaven-central-container{
    flex: 4.5;
    margin-left: 1em;
    margin-right: 3em;
    padding: 0em 2em;
    background: rgba(0,0,0,.4);
}
.heaven-news-container{
    flex: 4.5;
    margin-left: 1em;
    margin-right: 3em;
    padding: 0em 2em;
    background: rgba(0,0,0,.4);
}
.news-header{
    display: flex;
    justify-content: center;
    margin-bottom: .5em;
}
.news-header1{
    color: #e5c300;
}.news-header2{
    color: white;
}
.main-story{
    flex: 1.5;
    background-image: url("../assets/temps/logo.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    
}
.side-stories{
    flex: 4;
    display: flex;
    flex-direction: column;
}
.inside-stories{
    flex: 1;
    display: flex;
}
.story-img1{
    flex: 1;
    background-image: url("../assets/temps/hunger.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.story-img2{
    flex: 1;
    background-image: url("../assets/temps/warlock.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.story-img3{
    flex: 1;
    background-image: url("../assets/temps/titan.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.story-img4{
    flex: 1;
    background-image: url("../assets/temps/traveler.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
.heaven-news-stories{
    display: flex;
    height: 45em;
    color: white;
    text-align: center;
    margin-bottom: 2em;
}
.news-story-img1{
    flex: 1;
    background-image: url("../assets/temps/hunger.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 1em;
}
.news-story-img2{
    flex: 1;
    background-image: url("../assets/temps/warlock.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 1em;
}
.news-story-img3{
    flex: 1;
    background-image: url("../assets/temps/titan.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 1em;
}
.news-story-img4{
    flex: 1;
    background-image: url("../assets/temps/traveler.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 1em;
}


</style>
