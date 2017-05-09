/*
 * @Author: Administrator
 * @Date:   2017-05-09 11:38:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-05-09 16:38:19
 */

'use strict';

var template = '<div class="row">\
					<div class="input-group col-md-12">\
						<span class="input-group-addon" id="basic-addon1">英文</span>\
						<input type="text" class="form-control en" placeholder="请输入英文" aria-describedby="basic-addon1">\
						<span class="input-group-addon" id="basic-addon2">中文</span>\
						<input type="text" class="form-control ch" placeholder="请输入中文" aria-describedby="basic-addon2">\
					</div>\
				</div>';

for (var i = 0; i < 100; i++) {
	$(".container-fluid").append(template);
}

$("#subBtn").on("click", function() {
	var wordlist = [];
	for (var i = 0; i < 100; i++) {
		var json = {};
		var en = $(".en").eq(i).val();
		var ch = $(".ch").eq(i).val();
		if (en && ch) {
			json["en"] = en;
			json["ch"] = ch;
			wordlist.push(json);
		}
	}
	console.log(JSON.stringify(wordlist));
})

var arr = [{"definite":"明确的"},{"cautious":"谨慎的"},{"prayer":"祈祷"},{"nest":"巢，窝"},{"domestic":"本国的，家庭的"},{"chest":"胸腔"},{"airline":"航空公司"},{"rebel":"反叛分子"},{"statisfactory":"令人满意的"},{"stem":"茎，树干"},{"render":"使得，给予"},{"object":"实物，目标"},{"gardener":"园丁，花匠"},{"shrink":"（使）起皱，（使）收缩"},{"parade":"游行"},{"rumour":"谣言"},{"rug":"(小)地毯"},{"establish":"建立"},{"primarily":"首要的"},{"kindness":"仁慈"},{"breast":"乳房"},{"sticky":"粘性的"},{"boost":"提高，激励"},{"fund":"资金"},{"incredible":"不能相信的"},{"abroad":"在国外"},{"detective":"侦探"},{"stiff":"僵直的"},{"stimulate":"刺激"},{"fame":"名声"},{"consume":"消费"},{"accelerate":"(使)加快"},{"lightning":"闪电"},{"sting":"刺，蛰"},{"bound":"有义务的，反弹，界限"},{"rouse":"惊起"},{"cultivate":"种植"},{"material":"材料，物质的"},{"personnel":"人员"},{"display":"展示"},{"particle":"粒子"},{"impression":"印象"},{"biology":"生物学"},{"drunk":"醉的"},{"barrier":"栅栏"},{"stock":"原料，股票，储备"},{"fisherman":"渔民"},{"politician":"政治家"},{"royal":"王室的"},{"stocking":"长袜"},{"delegate":"代表"},{"highlight":"强调"},{"depression":"抑郁"},{"signature":"签名"},{"atmosphere":"大气"},{"evaluate":"评价"},{"rescue":"营救"},{"personality":"个性，人格"},{"latter":"(两者中）后者的"},{"parliament":"议会"},{"input":"输入"},{"partial":"部分的"},{"loyalty":"忠诚的"},{"calendar":"日历"},{"overlook":"忽视"},{"debate":"争论"},{"stoop":"弯腰"}];
var alter = [];
arr.forEach(function(item, index){
	var o = {};
	for(var i in item){
		o.en = i;
		o.ch = item[i];
	}
	alter.push(o);
})
console.log(JSON.stringify(alter));