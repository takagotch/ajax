document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('btn').addEventListener('click', function(){
    var result = document.getElementById('result');
    var xhr = new XMLHttpRequest();
//1
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        if(xhr.status){
          result.textContent = xhr.responseText;
        }else{
          result.textContent = 'EER';
        }
      }else{
        result.textContent = 'LOADING...'
      }
    };
//2
xhr.addEventListener('loadstart', function(){
  result.textContent = 'LOADING...';
}, false);

xhr.addEventListener('load', function(){
  result.textContent = xhr.responseText;
}, false);

xhr.addEventListener('error', function(){
  result.textContent = 'EER';
}, false);
//  
    xhr.open('GET', 'index_ajax.php?name=' +
      encodeURIComponent(document.getElementById('search').value), true);
    xhr.send(null);
  }, false);
}, false);


