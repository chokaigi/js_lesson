/* ===================================================================
 javascript 極み
=================================================================== */
/* ====回答結果を実行======*/
function answer_build(elmId) {
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
function answer_reset(elmId) {
	var sec = "#" + elmId;
	$(sec).find("option").remove();
	var option = $('<option >').attr('value', "").text("選択してください");
	$(sec).append(option);
}
