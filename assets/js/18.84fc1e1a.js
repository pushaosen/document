(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{193:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dom1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom1","aria-hidden":"true"}},[t._v("#")]),t._v(" DOM1")]),t._v(" "),s("h2",{attrs:{id:"node类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node类型","aria-hidden":"true"}},[t._v("#")]),t._v(" Node类型")]),t._v(" "),s("ul",[s("li",[t._v("Node.ELEMENT_NODE(1);")]),t._v(" "),s("li",[t._v("Node.ATTRIBUTE_NODE(2);")]),t._v(" "),s("li",[t._v("Node.TEXT_NODE(3);")]),t._v(" "),s("li",[t._v("Node.CDATA_SECTION_NODE(4);")]),t._v(" "),s("li",[t._v("Node.ENTITY_NODE(6);")]),t._v(" "),s("li",[t._v("Node.PROCESSING_INSTRUCTION_NODE(7);")]),t._v(" "),s("li",[t._v("Node.COMMENT_NODE(8);")]),t._v(" "),s("li",[t._v("Node.DOCUMENT_NODE(9);")]),t._v(" "),s("li",[t._v("Node.DOCUMENT_TYPE_NODE(10);")]),t._v(" "),s("li",[t._v("Node.DOCUMENT_FRAGMENT_NODE(11);")]),t._v(" "),s("li",[t._v("Node.NOTATION.NODE(12);")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断node类型")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node is an element'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nname "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若是元素，name为标签名")]),t._v("\nvalue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若是元素，value为null")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 访问节点的childNodes属性")]),t._v("\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 伪数组转换成数组，如childNodes")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arrayOfNodes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("childNodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意：IE8及更早版本会报错，将NodeList实现为一个COM对象")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 兼容IE8及以前版本转成数组")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("convertToArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nodes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" array "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    array "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非IE浏览器")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    array "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"节点关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节点关系","aria-hidden":"true"}},[t._v("#")]),t._v(" 节点关系")]),t._v(" "),s("ul",[s("li",[t._v("parentNode")]),t._v(" "),s("li",[t._v("childNodes")]),t._v(" "),s("li",[t._v("previousSibling")]),t._v(" "),s("li",[t._v("nextSibling")]),t._v(" "),s("li",[t._v("firstChild")]),t._v(" "),s("li",[t._v("lastChild")])]),t._v(" "),s("h2",{attrs:{id:"操作节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作节点","aria-hidden":"true"}},[t._v("#")]),t._v(" 操作节点")]),t._v(" "),s("ul",[s("li",[t._v("appendChild()：将节点添加到父节点的最后一个节点")]),t._v(" "),s("li",[t._v("insertBefore(newNode, childNode)：将节点插入在childNode之前")]),t._v(" "),s("li",[t._v("replaceChild(newNode, oldNode)：将新节点替换旧节点")]),t._v(" "),s("li",[t._v("removeChild(childNode)：移除指定的节点")]),t._v(" "),s("li",[t._v("cloneNode(true)：true可选，为true执行深拷贝，为false执行浅拷贝")]),t._v(" "),s("li",[t._v("normalize()：删除空文本节点，合并文本节点")])]),t._v(" "),s("h2",{attrs:{id:"document类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document类型","aria-hidden":"true"}},[t._v("#")]),t._v(" Document类型")]),t._v(" "),s("p",[t._v("document对象是HTMLDocument（继承自Document类型）的一个实例，表示整个HTML页面，document是window对象的一个属性。")]),t._v(" "),s("ul",[s("li",[t._v("document.documentElement： 指向"),s("code",[t._v("<html>")]),t._v("元素；")]),t._v(" "),s("li",[t._v("document.body：指向"),s("code",[t._v("<body>")]),t._v("元素；")]),t._v(" "),s("li",[t._v("document.title：网页标题；")]),t._v(" "),s("li",[t._v("document.URL：完整的URL；")]),t._v(" "),s("li",[t._v("document.domain：取得域名；")]),t._v(" "),s("li",[t._v("document.referrer；获取来源页面的URL；")])]),t._v(" "),s("p",[t._v("注意：在根域名相同的情况下，可以设置子域名页面的domain为根域名，解决跨域问题")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假设页面来自news.qq.com")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qq.com'")]),t._v("；"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以与qq.com域名的页面相互通信")]),t._v("\n")])])]),s("h2",{attrs:{id:"查找元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 查找元素")]),t._v(" "),s("ul",[s("li",[t._v("getElementById('id')：匹配id，返回第一个匹配的元素；")]),t._v(" "),s("li",[t._v("getElementsByTagName('div')；匹配标签名，返回HTMLCollection集合；")]),t._v(" "),s("li",[t._v("getElementsByName('name')；")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取页面所有的<img>元素")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" images "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 若有<img src="a.jpg" name="myImage">')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myImage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" images"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("namedItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myImage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" images"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myImage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"设置-获取特性（常用于自定义特性：如data-id等等）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-获取特性（常用于自定义特性：如data-id等等）","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置/获取特性（常用于自定义特性：如data-id等等）")]),t._v(" "),s("ul",[s("li",[t._v("getAttribute()：可以取得html元素特性和自定义属性；")]),t._v(" "),s("li",[t._v("setAttribute()：设置html元素特性和自定义属性；")]),t._v(" "),s("li",[t._v("removeAttribute()：移除html元素特性和自定义属性；")])]),t._v(" "),s("h2",{attrs:{id:"attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[t._v("#")]),t._v(" attributes")]),t._v(" "),s("p",[t._v("attributes属性中包含一系列节点，每个节点的nodeName就是特性的名称，而节点的nodeValue就是特性的值。")]),t._v(" "),s("ul",[s("li",[t._v("getNamedItem(name)：返回nodeName属性等于name的节点；")]),t._v(" "),s("li",[t._v("setNamedItem(node)：向列表中添加节点，以节点的nodeName属性为索引；")]),t._v(" "),s("li",[t._v("removeNamedItem(name)：从列表中移除nodeName属性等于name的节点；")]),t._v(" "),s("li",[t._v("item(pos)：返回位于数字pos位置处的节点")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取元素id属性")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNamedItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置属性")]),t._v("\nelement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wrapper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* attributes常用于遍历元素特性 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("outputAttibutes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("element")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pairs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    attrName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    attrValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    attrName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    attrValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nodeValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("specified"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 兼容<=ie7")]),t._v("\n      pairs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("attrName"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("attrValue"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pairs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"selectors-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selectors-api","aria-hidden":"true"}},[t._v("#")]),t._v(" Selectors API")]),t._v(" "),s("p",[t._v("兼容性：IE8+")]),t._v(" "),s("ul",[s("li",[t._v("querySelector()方法")]),t._v(" "),s("li",[t._v("querySelectorAll()方法")])]),t._v(" "),s("h2",{attrs:{id:"元素遍历"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元素遍历","aria-hidden":"true"}},[t._v("#")]),t._v(" 元素遍历")]),t._v(" "),s("p",[t._v("兼容性：IE9+")]),t._v(" "),s("ul",[s("li",[t._v("childElementCount：返回子元素的个数；")]),t._v(" "),s("li",[t._v("firstElementChild：指向第一个子元素，firstChild的元素版；")]),t._v(" "),s("li",[t._v("lastElementChild：指向最后一个子元素；")]),t._v(" "),s("li",[t._v("previousElementSibling：指向前一个同辈子元素；")]),t._v(" "),s("li",[t._v("nextElementSibling：指向后一个同辈子元素；")])]),t._v(" "),s("h2",{attrs:{id:"classname相关操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#classname相关操作","aria-hidden":"true"}},[t._v("#")]),t._v(" className相关操作")]),t._v(" "),s("ul",[s("li",[t._v("getElementsByClassName()方法，兼容性：IE9+；")]),t._v(" "),s("li",[t._v("classList属性，兼容性：IE10+；\n"),s("ul",[s("li",[t._v("add(value)：若value已存在，则不添加；")]),t._v(" "),s("li",[t._v("remove(value)：删除value；")]),t._v(" "),s("li",[t._v("contain(value)：value是否存在；")]),t._v(" "),s("li",[t._v("toggle(value)：value存在，则删除；不存在，则添加；")])])])]),t._v(" "),s("h2",{attrs:{id:"焦点管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#焦点管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 焦点管理")]),t._v(" "),s("ul",[s("li",[t._v("document.activeElement：引用DOM中当前获得了焦点的元素；")]),t._v(" "),s("li",[t._v("document.hasFocus()方法：确定文档是否获得了焦点；")]),t._v(" "),s("li",[t._v("focus()方法：元素触焦；")])]),t._v(" "),s("h2",{attrs:{id:"htmldocument变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#htmldocument变化","aria-hidden":"true"}},[t._v("#")]),t._v(" HTMLDocument变化")]),t._v(" "),s("ul",[s("li",[t._v('document.readyState："loading:（正在加载文档），"complete"（已经加载完文档）；')]),t._v(" "),s("li",[t._v('document.compatMode："CSS1Compat"（标准模式），"BackCompat"（混杂模式）；')]),t._v(" "),s("li",[t._v("document.head：跟document.body类似；")])]),t._v(" "),s("h2",{attrs:{id:"字符集属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符集属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 字符集属性")]),t._v(" "),s("ul",[s("li",[t._v('document.charset // "UTF-16"')]),t._v(" "),s("li",[t._v('document.charset = "UTF-8"')])]),t._v(" "),s("h2",{attrs:{id:"自定义数据属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义数据属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义数据属性")]),t._v(" "),s("p",[t._v('如data-appid="12345"\n获取属性：element.dataset.appid\n设置属性：element.dataset.appid = "246810"')]),t._v(" "),s("h2",{attrs:{id:"插入标记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插入标记","aria-hidden":"true"}},[t._v("#")]),t._v(" 插入标记")]),t._v(" "),s("ul",[s("li",[t._v("innerHTML：插入dom树；")]),t._v(" "),s("li",[t._v("outerHTML：替换自身并插入dom树；")]),t._v(" "),s("li",[t._v("insertAdjacentHTML：在指定位置插入dom树；")])]),t._v(" "),s("p",[s("strong",[t._v("性能问题")])]),t._v(" "),s("blockquote",[s("p",[t._v("在使用innerHTML，outerHTML和insertAdjacentHTML方法时，最好先手动删除被替换元素的所有事件处理程序和JavaScript对象属性，否则内存占用会明显增加。")])]),t._v(" "),s("h2",{attrs:{id:"scrollintoview-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrollintoview-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" scrollIntoView()方法")]),t._v(" "),s("ul",[s("li",[t._v("scrollIntoView(true)：调用元素尽可能与视口顶部平齐；")]),t._v(" "),s("li",[t._v("scrollIntoView(false)：调用元素尽可能全部出现在视口中；")])]),t._v(" "),s("p",[s("em",[t._v("注意：scrollIntoView()方法的调用对象是元素容器")])])])},[],!1,null,null,null);a.default=e.exports}}]);