

var btn = document.getElementById('btnQ1a');
var sectionQ1a = document.querySelector('.q1a');
var sectionQ1b = document.querySelector('.q1b');
var blockq1a =  sectionQ1a.style.display = 'none'; 


btn.addEventListener('click', function() {
  if(sectionQ1a.style.display === 'block') {
	sectionQ1a.style.display = 'none'; 
  } else {
      sectionQ1a.style.display = 'block';
  }
});


btnQ1b.addEventListener('click', function() {
  if(sectionQ1b.style.display === 'block') {
      sectionQ1b.style.display = 'none';
  } else {
      sectionQ1b.style.display = 'block';
     	sectionQ1a.style.display = 'none';

  }
});