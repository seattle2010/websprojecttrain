$(function() {

	$("#test_append").click(function() {
		//总体原则 写一个 注销一个
		//看api的 文档处理
		//都可以在firebug的html里看到代码变化
		//开始都是往最上面的两个div里面加效果

		// append(content) 向每个匹配的元素内部追加内容。
		//. 父.append(子)  插在父的最后位置
		//.获取div1  效果:div1后面每次点击都增加一次XXX
		//在firebug的HTMl项目里的代码 能看到div1的<b>我恨你</b>在增加
		$("#div1").append("<b>我恨你</b>")
		//2 插入DOM元素  把hello插入到div1后面
		////document.getElementById("b1"); 是js取得DOM 把它放到括号里
		//效果 网页div后面出现hello
		$("#div1").append(document.getElementById("b1"))
		//3.插入jQuery对象
		$("#div1").append($("#b1"))
		////$("div").append($("#b1")) //效果特别 在ppt里有解释图
	});

	$("#test_appendTo").click(function() {
		// appendTo 把所有匹配的元素追加到另一个指定的元素元素集合中。
		//子.appendTo(父)
		$("#b1").appendTo($("div"))  //所有div
	});

	$("#test_prepend").click(function() {
		// prepend 向每个匹配的元素内部前置内容。
		//把所有匹配的元素追加到另一个指定的元素元素集合中
		//和上面例子一个道理 就是放在前面 结构一样
    $("div").prepend($("#b1")) //hello放进div
	});

	$("#test_prependTo").click(function() {
		// 把所有匹配的元素前置到另一个、指定的元素元素集合中。
    $("#b1").prependTo($("div"))
	});

});
//外部插入  兄弟之间的插入
$(function() {
	$("#test_after").click(function() {
		// 在每个匹配的元素之后插入内容。
		//大哥.after(小弟)  把hello当做div的兄弟
		$("div").after($("#b1"))  //前面到后面去
		
	});

	$("#test_before").click(function() {
		// 在每个匹配的元素之前插入内容。
		//大哥.before(大哥的大哥)
		$("div").before($("#b1"))
	});
	$("#test_insertAfter").click(function() {
		// 把所有匹配的元素插入到另一个、指定的元素元素集合的后面。
		//小弟.insertAfter(大哥) 前面到后面去
		$("#b1").insertAfter($("div")) //插入在后面 像after
	});
	$("#test_insertBefore").click(function() {
		// 把所有匹配的元素插入到另一个、指定的元素元素集合的前面。
		$("#b1").insertBefore($("div"))

	});
});

$(function() {

	$("#test_removeNode").click(function() {
		/**
		 * 从DOM中删除所有匹配的元素。 这个方法不会把匹配的元素从jQuery对象中删除，因而可以在将来再使用这些匹配的元素。
		 * 但除了这个元素本身得以保留之外，其他的比如绑定的事件，附加的数据等都会被移除。
		 */
		//看api  empty,remove和detach区别
		//detach是临时删除,remove是永久删除
		$("#ul li").remove()

	});
	$("#test_emptyNode").click(function() {
		//之前做法  点"删除子节点" 下面代码有效
		//document.getElementById("ul").innerHTML="";
		//现在做法  点"删除子节点" 下面代码有效
		$("#ul li").text("") //不打引号 text()是查询内容
		//上面代码不能全删除 只能删除文本 还保留了li
		//下面这个是全删除 把ul删掉 点"删除子节点"
    // $("#ul").text("")
		//用empty()方法删除  在api中有 点"删除子节点"
		$("#ul").empty()

  });
});

$(function() {

	$("#btn_clone").click(function() {
		alert("点击了我...");
	});

	$("#test_clone").click(function() {
		// 克隆匹配的DOM元素并且选中这些克隆的副本。
	
		
	});

	$("#test_replace1").click(function() {
		// replaceWith将所有匹配的元素替换成指定的HTML或DOM元素。
		
	});

	$("#test_replace2").click(function() {
		// replaceAll用匹配的元素替换掉所有 selector匹配到的元素。
		
	});

});
$(function() {

	$("#test_getterAttr").click(function() {
		// jquery凡是取值的方法,如果是多个元素,那么只会取第一个元素的值.
		
	});

	$("#test_setterAttr").click(function() {
		// jquery凡是设置值的方法,都是对所有元素操作.并且返回值都为操作jquery对象
		

	});
});
$(function() {
	$("#test_addClass").click(function() {
		// 为每个匹配的元素添加指定的类名。注意不要加"."
	});
	$("#test_removeClass").click(function() {
		// 为每个匹配的元素添加指定的类名。注意不要加"."
	});

	$("#test_togggleClass").click(function() {
		// 如果存在（不存在）就删除（添加）一个类。
	});

	$("#test_hasClass").click(function() {
		// hasClass 判断是否纯在该Css

	});
});