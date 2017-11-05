(function(window){
  var u = {};
  var appkey_id = 'JhlwRmmrOppZV6x1';
  var appkey_secret = 'LLQVtu4QfUv84igNbRFMSpnq';
  //var server = "http://139.198.191.202/api/window_client/";
  var server = "http://172.20.10.10/api/window_client/";
  function post(method, data, func){
    $api.post(server+method,
      {values:data},
      function(ret){
        func(ret);
      }
    );
  }
  u.getManageMsg = function(func){
    post("read_from_manage", {"appkey_id": appkey_id, "appkey_secret": appkey_secret}, function(ret){
      if(ret && ret.code==200){
        func(ret.data);
      }
    })
  }
  u.checkDish = function(image, func){
    post("get_dish_info", {"appkey_id": appkey_id, "appkey_secret": appkey_secret, 'dish_image': image}, function(ret){
      if(ret){
        func(ret);
      }
    })
  }
  u.checkFaceID = function(image, charge, name, func){
    post("charge",  {"appkey_id": appkey_id, "appkey_secret": appkey_secret, 'user_image': image, 'charge': charge, 'name':name}, function(ret){
      if(ret){
        func(ret);
      }else{
        func(null);
      }
    });
  }

  window.$server = u;
})(window);
