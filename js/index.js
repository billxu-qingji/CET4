/*
 * @Author: Administrator
 * @Date:   2017-05-08 09:29:36
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-05-09 16:56:50
 */

'use strict';

var app = new Vue({
	el: "#content",
	data: {
		wordList: wordList,
		currentList: 0,
		list: wordList[0],
		display: false,
	},
})

! function() {

	$(".nav-sidebar li").on("click", function(event) {
		app.currentList = $(event.target).parent().data("index");
		
		$("[data-check='true']").each(function(index, item){
			console.log(item);
			$(item).attr("class", "check");
		})
		$("[type='text']").val("");
	})

	// 隐藏单项
	$(".raw").on("click", function(event) {
		event.stopPropagation();
		if ($(event.target).css("opacity") !== "0") {
			$(event.target).css("opacity", "0");
		} else {
			$(event.target).css("opacity", "1");
		}

	})

	// 失去焦点时显示单词
	$("[type='text']").on("blur", function(event) {
		if ($(event.target).val()) {
			$(event.target).parent().prev().css("opacity", "1");
			if ($(event.target).val() == $(event.target).data("word")) {
				$(event.target).next().attr("class", "glyphicon glyphicon-ok");
			} else {
				$(event.target).next().attr("class", "glyphicon glyphicon-remove");
			}
		}
	})


	// 隐藏英文
	$("#hideEn").on("click", function(event) {
		event.stopPropagation();
		$(".en").css("opacity") !== "0" ? $(".en").css("opacity", "0") : $(".en").css("opacity", "1");
	})

	// 隐藏中文
	$("#hideCh").on("click", function(event) {
		event.stopPropagation();
		$(".ch").css("opacity") !== "0" ? $(".ch").css("opacity", "0") : $(".ch").css("opacity", "1");
	})

	//检查
	$("#checkBtn").on("click", function(event) {
		event.stopPropagation();

		var right = $(".glyphicon-ok").length; // 记录正确的数量
		var sum = $("[type='text']").length; // 记录单词总数量

		var template = '<div class="jumbotron">\
  							<h1>Inspection report</h1>\
  							<p>单词总数：' + sum + '</p>\
  							<p>正确数量：' + right + '</p>\
  							<p>错误数量：' + (sum - right) + '</p>\
  							<p>正确率：' + parseInt((right / sum) * 100) + '%</p>\
						</div>';
		$("#checkBtn").before(template);
	})

	// 收藏
	$("[class='glyphicon glyphicon-heart-empty']").on("click", function(event) {
		$(event.target).toggleClass('collect');
	})


}()