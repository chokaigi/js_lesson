/* ===================================================================
 javascript 極み
=================================================================== */
$(function() {
	// 目次作成
	$("#subTitle").text("JavaScript編");
	var ary1 = [
		{ file: "lesson1.html", menu: "第１章：DOM（Document Object Model）を学ぶ" },
		{ file: "lesson2.html", menu: "第２章：jQueryとDOMを使用した高度なセレクタ" },
		{ file: "lesson3.html", menu: "第３章：業務で大活躍のAjaxアクセス" },
	]
	createSection("section1", "第１回目", ary1);
	$("#section1_sub").append('<a href="questionnaire1.html">第１回目勉強会アンケート</a>');
	
	
	var ary2 = [
		{ file: "lesson4.html", menu: "第４章：(仮) イベントについて（DOM Event Model）" },
		{ file: "lesson5.html", menu: "第５章：(仮) 関数について（Function）" },
	]
	createSection("section2", "第２回目", ary2);
	$("#section2_sub").append('<a href="questionnaire1.html">第２回目勉強会アンケート</a>');
	var ary3 = [
		{ file: "", menu: "勉強会全体を通しての質問時間" },
	]
	createSection("section3", "勉強会QA", ary3);

	// メニューリンク作成
	var ary = String(window.location).split("/");
	var selectFile = ary[ary.length - 1];
	var aryMenu = [
		{ file: "index.html", menu: "極み勉強会目次" },
		{ file: "lesson1.html", menu: "DOM（Document Object Model）を学ぶ" },
		{ file: "lesson2.html", menu: "jQueryとDOMを使用した高度なセレクタ" },
		{ file: "lesson3.html", menu: "業務で大活躍のAjaxアクセス" },
		{ file: "questionnaire1.html", menu: "第１回目勉強会アンケート" },
		{ file: "lesson4.html", menu: "(仮) イベントについて（DOM Event Model）" },
		{ file: "lesson5.html", menu: "(仮) 関数について（Function）" },
		{ file: "questionnaire2.html", menu: "第２回目勉強会アンケート" },
	]
	createMenu("menu", selectFile, aryMenu);


});

function createMenu(elmentId, file, ary) {
	$("#" + elmentId).append('<ul></ul>');
	var obj;
	var act
	for (var i in ary) {
		obj = ary[i];
		if (file == obj.file) {
			act = "active";
			$("#title").text(obj.menu);
		}
		$("#" + elmentId + " ul").append('<li><a href="' + obj.file + '" class="' + act + '"><font>' + obj.menu +'</font></a></li>');
		act = "";
	}
}

function createSection(elmentId, elmentText, ary) {
	$("#" + elmentId).text(elmentText);
	$("#" + elmentId).append('<ul></ul>');
	var obj;
	var act
	for (var i in ary) {
		obj = ary[i];
		if (obj.file == "") {
			$("#" + elmentId + " ul").append('<li>' + obj.menu + '</li>');
		} else {
			$("#" + elmentId + " ul").append('<li><a href="' + obj.file + '">' + obj.menu + '</a></li>');
		}
	}
}

/* ====練習問題実行======*/
function practice_build(elmId) {
	var str = $("#" + elmId).val();
	var resultSec = "#" + elmId + "_result";
	try {
		$(resultSec).text(eval(str));
		$(resultSec).css('background-color', '#52A2C5');
	} catch(e) {
		alert(e);
	}
}



