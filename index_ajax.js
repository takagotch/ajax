document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('btn').addEventListener('click', function(){
    var result = document.getElementById('result');
    var xhr = new XMLHttpRequest();
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
  
    xhr.open('GET', 'index_ajax.php?name=' +
      encodeURIComponent(document.getElementById('search').value), true);
    xhr.send(null);
    }, false);
  }, false);

