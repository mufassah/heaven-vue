<template>
  <div id="app">
    <nav class= "nav-full">
      <div class="nav-flex"> 
        <a class="nav-logo" href="/#/"><img src="./assets/Heaven_Logo.png" id="header"></a>
        <a class="heaven-clan nav-logo" href="/#/"><div class="logo-flex"><div class="heaven-yellow">HEAVEN &nbsp;</div><div class="heaven-white">CLAN</div></div></a>
      </div>
      <div class="nav-flex2">
        <div class="nav-items"><a class="nav-link" href="/#/roster">TEAM</a></div>
        <div class="nav-items"><a class="nav-link" href="/#/news">NEWS</a></div>
        <div class="nav-items"><a class="nav-link" ui-sref="about">ABOUT</a></div>
        <div class="nav-items"><a class="nav-link" href="/#/watch">WATCH</a></div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
#app {

}

body{
  background: url("./assets/temps/temp-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: 'NexaBold' !important;
}
.ui-view{
  padding-top: 15em;
  margin-top: -10em;
}
.nav-full{
  background: rgba(0,0,0,.6);
  height:8em !important;
  padding-top:.2em;
  padding-bottom:.2em;
  display:flex;
  color: white;
  margin-bottom: 5em;
  }
a.nav-logo{
  
}
a.nav-logo:link {
  /* Applies to all visited links */
  text-decoration:  none;
/*  color: white;*/
  } 
a.nav-logo:visited {
  /* Applies to all visited links */
  text-decoration:  none;
/*  color: white;*/
  } 
a.nav-logo:hover{
  text-decoration: none;
  color: #e5c300;
}
a.nav-logo:active{
  text-decoration: none;
  color: #e5c300;
}
#header{
  margin-top: 2em;
  width: 15em;
}
.logo-flex{
  display:flex;
}
.heaven-yellow{
  color: #e5c300;   
}
.heaven-white{
  color: white;
}
.heaven-clan{
  font-size:1.7em;
  text-decoration: none;
}
.heaven-clan:hover{
  text-decoration: none;
}
.nav-flex2{
  display: flex;
  justify-content: flex-end;
  flex:1;
  align-items: center;
  font-size: 1.7em;
}
.nav-flex{
  display: flex !important;
  align-items: center;
  flex: 1;
}
.nav-items{
  margin-left: 1.5em;
  margin-right: 1.5em;
}
a.nav-link{
  color: white;
}
a.nav-link:link {
  /* Applies to all visited links */
  text-decoration:  none;
  color: white;
  } 
a.nav-link:visited {
  /* Applies to all visited links */
  text-decoration:  none;
  color: white;
  } 
a.nav-link:hover{
  text-decoration: none;
  color: #e5c300;
}
a.nav-link:active{
  text-decoration: none;
  color: #e5c300;
}

</style>
