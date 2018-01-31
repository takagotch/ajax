//$.getJSON()
$.getJSON(
  "http://api.worldbank.org/regions/",
  {format: "json"},
  function(response){
    //...
  }
);

//deferredRegionsRequest = $.getJSON();
deferredRegionsRequest = $.getJSON(
  "http://api.worldbank.org/regions/?prefix=?",
  {format: "jsonp"}
);

deferredRegionsReques.fail(function(){
  //...
});

//1 $.grep()
filterrd = $.grep(response[1], function(regionObj){
  return (regionObj.id !=== null);
});

//2 $.map()
regions = $.map(filterd, function(regionObj){
  return{
    code: regionObj.code,
    name: regionObj.name.replace(" (all income levels)","")
  };
}
);

//1+2

deferredRegionsRequest.done(function(response){
  regions = $.map(
    $.grep(response[1], function(regionObj){
      return (regionObj.id !== null);
    }),
    function(regionObj){
      return{
        code: regionObj.code,
	name: regionObj.name.replace(" (all income levels)","")
      };
    };
  )
});

