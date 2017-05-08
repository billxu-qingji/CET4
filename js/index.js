/*
* @Author: Administrator
* @Date:   2017-05-08 09:29:36
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-08 10:52:33
*/

'use strict';

var app = new Vue({
	el: "#content",
	data: {
		wordList: wordList,
		currentList: 0,
		list: wordList[0],
	}
})