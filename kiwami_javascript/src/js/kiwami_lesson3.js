/* ===================================================================
 javascript 極み
=================================================================== */
/* ====回答結果を実行======*/
function answer_build_1(elmId) {
 $.ajax({
      type: 'POST',
      url: 'http://zipcloud.ibsnet.co.jp/api/search',
      async: true,
      dataType: 'jsonp',
      data: {
       'zipcode': '1510053'
      },
	  success: function(result){
	    var obj = result.results[0];
	    var address = obj.address1 + obj.address2 + obj.address3;
        $("#" + elmId).text(address).css('background-color', 'cyan');
      },
      error: function(result){
       alert(result)
      }
     });
}

function answer_build_2(elmId) {
 $.ajax({
      type: 'GET',
      url: 'http://www.ekidata.jp/api/p/13.json',
      async: true,
      dataType: 'script',
      success: function(result){
        $.each(xml.data.line, function(index, item) { 
           var option = $('<option >').attr('value', item.line_cd).text(item.line_name);
           $("#" + elmId).append(option);
        });
      },
      error: function(result){
       alert(result)
      }
     });
}

/* ====実行結果をリセット======*/
function answer_reset_1(elmId) {
	var sec = "#" + elmId;
	$(sec).text("実行結果を表示").css('background-color', 'white');;
}

function answer_reset_2(elmId) {
	var sec = "#" + elmId;
	$(sec).find("option").remove();
	var option = $('<option >').attr('value', "").text("選択してください");
	$(sec).append(option);
}
