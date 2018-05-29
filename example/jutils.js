//获得页面html标签的属性值
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

//小小运动
function doMove(obj,dir,target,attr,fn){
	dir = parseInt(getStyle(obj,attr)) < target ? dir : -dir;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		speed = parseInt(getStyle(obj,attr)) + dir;
		if( speed > target && dir > 0 ||  speed < target && dir < 0 ){
			speed = target;
		}
		obj.style[attr] = speed + 'px';
		if( speed == target ){
			clearInterval(obj.timer);
		}
		fn && fn();
	},30);
}

//小小运动 && 运动结束，该obj透明度变为0；
function doMoveToOpcity(obj,dir,target,attr,fn){
	var num = 100;
	dir = parseInt(getStyle(obj,attr)) < target ? dir : -dir;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		speed = parseInt(getStyle(obj,attr)) + dir;
		if( speed > target && dir > 0 ||  speed < target && dir < 0 ){
			speed = target;
		}
		obj.style[attr] = speed + 'px';
		if( speed == target ){
			clearInterval(obj.timer);
		}
		num -= 5 ;
		if( num < 1){
			clearInterval( obj.timer );
		}
		obj.style.opacity = num / 100;
		fn && fn();
	},30);
}

//抖函数
function shake(obj,attr,fn){
	var num = 0;
	var arr = [];
	var timer = null;
	var pos = parseInt(getStyle(obj,attr));
	for(var i = 20; i > 0; i -= 4){
		arr.push(i,-i);
	}
	arr.push(0);

	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		obj.style[attr] = pos + arr[num] + 'px';
		num ++;
		if( num == arr.length){
			clearInterval(obj.timer);
			fn && fn();
		}
	},50);
}

//变透明
function toOpcity(object,fn){
	var num = 100;
	clearInterval( object.timer );
	object.timer = setInterval(function(){
		num --;
		if( num < 1){
			clearInterval( object.timer );
		}
		object.style.opacity = num / 100;
		fn && fn();
	},30);
}

//检测输入的是否是数字
function detectNum(str){
	var n = 0;
	for( var i = 0; i < str.length; i++ ){
		n = str.charCodeAt(i);
		if( n < 48 || n > 57 ){
			return false;
		}
	}
	return true;
}

//拖拽（单一div拖拽）
function dragDiv(obj){
	obj.onmousedown = function(e){
		var e = e || event;
		var disX = e.clientX - this.offsetLeft;
		var disY = e.clientY - this.offsetTop;
		if( obj.setCapture ){
			obj.setCapture();
		}
		document.onmousemove = function(e){
			var e = e || event;
			var l = e.clientX - disX;
			var t = e.clientY - disY;
			if( l < 0 ){
				l = 0;
			}else if( l > document.documentElement.clientWidth - obj.offsetWidth){
				l = document.documentElement.clientWidth - obj.offsetWidth;
			}
			if( t < 0 ){
				t = 0;
			}else if( t > document.documentElement.clientHeight - obj.offsetHeight){
				t = document.documentElement.clientHeight - obj.offsetHeight;
			}
			obj.style.left = l + 'px';
			obj.style.top = t + 'px';
		}
		document.onmouseup = function(){
			document.onmousemove = document.onmouseup = null;
			if( obj.releaseCapture ){
				obj.releaseCapture();
			}
		}
		return false;
	}
}