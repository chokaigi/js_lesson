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
	$("#section1_sub").append('第１回目勉強会アンケート');
	
	
	var ary2 = [
		{ file: "lesson4.html", menu: "第４章：jQueryを使ったイベントハンドラ" },
		{ file: "lesson5.html", menu: "第５章：関数（無名関数、クロージャー、プロトタイプ、クラスの作成）" },
		{ file: "lesson6.html", menu: "第６章：WindowオブジェクトとDocumentオブジェクト" },
	]
	createSection("section2", "第２回目", ary2);
	$("#section2_sub").append('第２回目勉強会アンケート');
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
		{ file: "lesson4.html", menu: "jQueryを使ったイベントハンドラ" },
		{ file: "lesson5.html", menu: "関数（無名関数、クロージャー、プロトタイプ、クラスの作成）" },
		{ file: "lesson6.html", menu: "WindowオブジェクトとDocumentオブジェクト" },
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

function response_build(elmId) {
	var str = $("#" + elmId).val();
	try {
		eval(str);
	} catch(e) {
		alert(e);
	}
}

/* ====HTMLを文字列で表示======*/
function html_replace(str) {
	return str.replace(/</g,"&lt;").replace(/</g,"&gt;").replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;").replace(/"/g,"&quot;");
}

function function_replace(fnc) {
	return String(fnc).replace("function () {", "").replace(/}$/, "");
}

