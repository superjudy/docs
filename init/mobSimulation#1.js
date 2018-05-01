<!DOCTYPE html>
<html>
<head>
	<title>mobSimulation</title>
	<style type="text/css">
		*{
			margin:0;
			padding:0;
		}
		#box{
			width: 360px;
			height: 600px;
			border:1px solid #333;
			margin:10px auto;
		}
		#up{
			width: 340px;
			height: 530px;
			margin:10px auto;
			background: #f1f1f1;
		}
		#down{
			width: 340px;
			height: 40px;
			margin:0 auto;
		}
		#imgUrl{
			width: 40px;
			height: 40px;
			border-radius: 50%;
			display: block;
			float: left;
			cursor: pointer;
		}
		input{
			outline: none;
			border:none;
			border-radius: 6px;
			margin-top:5px;
		}
		#iptText{
			width: 210px;
			height: 26px;
			padding: 2px 5px;
			line-height: 26px;
			font-size: 14px;
			float: left;
			margin-left: 10px;
			background: #e4e4e4;
		}
		#iptBtn{
			width: 60px;
			height:30px;
			line-height: 30px;
			float: right;
			cursor: pointer;
		}
		img{
			width: 40px;
			height: 40px;
			border-radius: 50%;
		}
		p{
			height: 40px;
			line-height: 40px;
			font-size: 14px;
			margin: 10px auto;
		}
	</style>
	<script type="text/javascript">
		window.onload = function(){
			var imgUrl = document.getElementById('imgUrl');
			var up = document.getElementById('up');
			var iptText = document.getElementById('iptText');
			var iptBtn = document.getElementById('iptBtn');

			var arrUrl = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'];
			var num = 0;
			var arr = [];

			imgUrl.onclick = function(){
				num ++;
				if(num == arrUrl.length){
					num = 0;
				}
				imgUrl.src = arrUrl[num];
			}

			iptBtn.onclick = function(){
				arr.push(
					'<p><img src="'+ arrUrl[num] +'">'+
					iptText.value +
					'<br/></p>'
				);
				up.innerHTML = arr.join("");
				
			}
		}
	</script>
</head>
<body>
<div id="box">
	<div id="up"></div>
	<div id="down">
		<img src="img/1.jpg" id="imgUrl"/>
		<input type="text" id="iptText"/>
		<input type="button" value="提交" id="iptBtn"/>
	</div>
</div>
</body>
</html>