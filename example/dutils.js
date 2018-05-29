//读取cookie
function getCookie(key){
	var arr1 = document.cookie.split('; ');
	for( var i = 0; i < arr1.length; i++ ){
		var arr2 = arr1[i].split('=');
		if( arr2[0] == key ){
			return decodeURI( arr2[1] );
		}
	}
}

//设置cookie
function setCookie(key,value,t){
	var oDate = new Date();
	oDate.setDate( oDate.getData() + t );
	document.cookie = key + '=' + value + ';expires=' + oDate.toGMTString();
}

//删除cookie
function removeCookis(key){
	setCookie(key,'',-1);
}

//获取URL的id
//var id = window.location.search;
function getId(id){
    if(id.indexOf('?') != -1){
        var id = id.substring(1);
        var arr = id.split('=');
    }
    return arr[1];
}