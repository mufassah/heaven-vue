<template>
	<div>
 <div class="carousel">
  <div id="news1" href="#five!" class="carousel-item">
    <div class="carousel-col-centered5">
      <h4>News Headline</h4><a id="modal-btn1" href="#modal5" class="waves-effect waves-light btn modal-trigger hide-btn">Read More!</a>
    </div>
  </div>
  <div id="news2" href="#one!" class="carousel-item">
    <div class="carousel-col-centered1">
      <h4>News Headline</h4><a id="modal-btn2" href="#modal1" class="waves-effect waves-light btn modal-trigger hide-btn">Read More!</a>
    </div>
  </div>
  <div id="news3" href="#two!" class="carousel-item">
    <div class="carousel-col-centered2">
      <h4>News Headline</h4><a id="modal-btn3" href="#modal2" class="waves-effect waves-light btn modal-trigger hide-btn">Read More!</a>
    </div>
  </div>
  <div id="news4" href="#three!" class="carousel-item">
    <div class="carousel-col-centered3">
      <h4>News Headline</h4><a id="modal-btn4" href="#modal3" class="waves-effect waves-light btn modal-trigger hide-btn">Read More!</a>
    </div>
  </div>
  <div id="news5" href="#four!" class="carousel-item">
    <div class="carousel-col-centered4">
      <h4>News Headline</h4><a id="modal-btn5" href="#modal4" class="waves-effect waves-light btn modal-trigger hide-btn">Read More!		</a>
    </div>
  </div>
</div>
<!-- Modal Structure -->
<div id="modal1" class="modal">
  <div class="my-modal-content"><img src="../assets/temps/hunger.png"/>
    <h4>Heaven Clan Website is now LIVE!</h4>
    <p>Right here is where actual text to a story would go. We can leave that to snuggles or whomever else wants to try their hand at story writing :)</p>
  </div>
  <div class="modal-footer">
    <div class="modal-action modal-close waves-effect waves-green btn-flat">CLOSE</div>
  </div>
</div>
<div id="modal2" class="modal">
  <div class="my-modal-content"><img src="../assets/temps/warlock.png"/>
    <h4>Heaven Clan Website is now LIVE!</h4>
    <p>Right here is where actual text to a story would go. We can leave that to snuggles or whomever else wants to try their hand at story writing :)</p>
  </div>
  <div class="modal-footer">
    <div class="modal-action modal-close waves-effect waves-green btn-flat">CLOSE</div>
  </div>
</div>
<div id="modal3" class="modal">
  <div class="my-modal-content"><img src="../assets/temps/titan.png"/>
    <h4>Heaven Clan Website is now LIVE!</h4>
    <p>Right here is where actual text to a story would go. We can leave that to snuggles or whomever else wants to try their hand at story writing :)</p>
  </div>
  <div class="modal-footer">
    <div class="modal-action modal-close waves-effect waves-green btn-flat">CLOSE</div>
  </div>
</div>
<div id="modal4" class="modal">
  <div class="my-modal-content"><img src="../assets/temps/traveler.jpg"/>
    <h4>Heaven Clan Website is now LIVE!</h4>
    <p>Right here is where actual text to a story would go. We can leave that to snuggles or whomever else wants to try their hand at story writing :)</p>
  </div>
  <div class="modal-footer">
    <div class="modal-action modal-close waves-effect waves-green btn-flat">CLOSE</div>
  </div>
</div>
<div id="modal5" class="modal">
  <div class="my-modal-content"><img src="../assets/temps/destinyBG.jpg"/>
    <h4>Heaven Clan Website is now LIVE!</h4>
    <p>Right here is where actual text to a story would go. We can leave that to snuggles or whomever else wants to try their hand at story writing :)</p>
  </div>
  <div class="modal-footer">
    <div class="modal-action modal-close waves-effect waves-green btn-flat">CLOSE</div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.carousel .carousel-item{
	width: 40em!important;
	height: 25em !important;
}
.carousel-col-centered1 {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	background-image: url("../assets/temps/hunger.png");
	background-size: contain;
	background-repeat: no-repeat;
	width: 100%;
	height: 22em;
	color: white;
}
.carousel-col-centered2 {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	background-image: url("../assets/temps/warlock.png");
	background-size: contain;
	background-repeat: no-repeat;
	width: 100%;
	height: 22em;
	color: white;
}
.carousel-col-centered3 {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	background-image: url("../assets/temps/titan.png");
	background-size: contain;
	background-repeat: no-repeat;
	width: 100%;
	height: 22em;
	color: white;
}
.carousel-col-centered4 {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	background-image: url("../assets/temps/traveler.jpg");
	background-size: contain;
	background-repeat: no-repeat;
	width: 100%;
	height: 22em;
	color: white;
}
.carousel-col-centered5 {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	background-image: url("../assets/temps/destinyBG.jpg");
	background-size: contain;
	background-repeat: no-repeat;
	width: 100%;
	height: 22em;
	color: white;
}
.waves-effect.waves-light.btn.modal-trigger{
	background-color: #f08b15 !important;
}
.hide-btn {
	
}

.carousel-item.active > div > a {
	/*visibility: visible;*/
	opacity: 1;
	transition: opacity .75s;
}
.carousel-item > div > a {
	opacity: 0;
	transition: opacity .75s;
}
.my-modal-content{
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2em;
}
.my-modal-content > img {
	width: 80%;
	margin-bottom: 1em;
}
.my-modal-content > p {
	padding-left: 2em;
	padding-right: 2em;
}
.modal, .modal-footer, .modal-footer > .modal-action.modal-close.waves-effect.waves-green.btn-flat {
	background-color: #2c2c31 !important;
	color: #ddd !important;
}
</style>
