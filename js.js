window.onload = function () {
	// 获取所需要操作的对象
	var smallBox = document.getElementById("small-box");
	var floatBox = document.getElementById("float-box");
	var bigBox = document.getElementById("big-box");
	var bigImage = bigBox.getElementsByTagName("img")[0];

	// 鼠标移动到对象上显示放大镜和放大镜放大后的图像
	smallBox.onmouseover = function(){
		floatBox.style.display = "block";
		bigBox.style.display = "block";
	}

	// 鼠标移出对象时隐藏放大镜和放大镜放大后的图像
	smallBox.onmouseout = function(){
		floatBox.style.display = "none";
		bigBox.style.display = "none";
	}

	// 鼠标在对象上移动触发的事件
	smallBox.onmousemove = function(e){
		var event = e || window.event;
		var left = event.clientX - smallBox.offsetLeft - floatBox.offsetWidth/2;
		var top = event.clientY - smallBox.offsetTop - floatBox.offsetHeight/2;

		if(left < 0) {
			left = 0;
		} else if (left > (smallBox.offsetWidth - floatBox.offsetWidth)) {
			left = smallBox.offsetWidth - floatBox.offsetWidth;
		}

		if (top < 0) {
			top = 0;
		} else if (top > (smallBox.offsetHeight - floatBox.offsetHeight)) {
			top = smallBox.offsetHeight - floatBox.offsetHeight;
		}

		// 设置放大镜移动的距离
		floatBox.style.left = left + "px";
		floatBox.style.top = top + "px";
		// 根据比例计算放大镜放大后的图像移动的位移(负数)
		bigImage.style.left = -(left * bigImage.offsetWidth)/smallBox.offsetWidth + "px";
		bigImage.style.top = -(top * bigImage.offsetHeight)/smallBox.offsetHeight + "px";
	}
}