var options = {
  id: 490538177,
  background: true,
  autoplay: true,
  muted: 1,
};
var vid1 = new Vimeo.Player('simone-player', options);

vid1.ready().then(() => {
  resize();
  window.onresize = resize;
});


function resize() {
  const elPlayer = document.querySelector('#simone-player iframe')
  const ratio = (document.body.clientHeight*0.8)/document.body.clientWidth;

  elPlayer.width =  document.body.clientWidth*0.8;
  elPlayer.height = document.body.clientWidth*ratio;
}