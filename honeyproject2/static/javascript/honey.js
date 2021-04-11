$('#video-list').on('mouseover',function () {
  var vid=document.getElementById('video-list');
  vid.autoplay=true;
  vid.load();
})
