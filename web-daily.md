#2020/10
----
## HTML5 + css
----
### HTML5相关~

   - hgroup
	    - blockquote： 表示引用 有缩进效果 块元素会换行
	    - q: 表示一个短引用 ，行内元素不换行
	    - dl dt dd： dl创建定义列表 dt表示定义的内容并 dd来进行注释说明

   - 超链接
	    - target属性:用来指定超链接打开的位置
		     - 默认值_self 在当前页面打开
				 - _blank 在一个新的页面中打开
	    - 在href中设置  ：‘#’  可以回到顶部 ；输入id可以跳转到任何位置 '#bottom'
		  - 在href中设置 : javascript:; 不会发生任何事件 
	
	 - lorem 自动生成相关英文
   - iframe： 用于在当前页面中引入其他页面

   - audio 引入外部音频文件 默认情况下不显示， 加入controls 允许用户控制
	    - autoplay：视频文件是否自动播放 设置之后会自动播放

   - video 引入一个视频 使用方式和audio一样


### css样式相关
---

   - p + span p下一个span兄弟元素
	 - p ~ span p后面的所有span

   - 伪类选择器
      1. :first-child 第一个子元素
			2. :slast-child 最后一个子元素
			3. :nth-child(n) 选择第n个元素, 2n表示选中偶数, 2n+1或者odd表示选中奇数
			4. :fist-of-type 在相同子类中选取 其他同理
			5. :not(li:nth-child(3)) ：将符合条件的元素从选择器中去除 

   - 超链接中
      - a:link 表示没有访问过的连接
      - a:visited 用来表示访问过的连接(由于隐私原因 只能修改颜色)
			- a:hover 表示鼠标移入的状态
			- a:active 表示鼠标点击的状态

   - 伪元素选择器
	    - ::first-letter 表示第一个字母
			- ::first-line 表示第一行
			- ::selection 表示选中的内容
			- ::before 表示元素的开始	结合content属性来使用
			- ::after 表示元素的结束 结合content属性来使用
			- q

   - 样式的继承 后代会继承祖先元素样式
 
   - 单位
	    - em：相对元素的字体大小来计算的
	    - 1em = 1font-size (一般默认16px)
			- rem 是相对于根元素字体的大小来计算(html)
			- HSL HSLA值
			   - H 色相 （0-360）
				 - S 饱和度 颜色浓度(0-100%)
				 - L 亮度 颜色亮度 (0-100%)
   - 盒子模型（box model）
	    - 内容区(content)
			- 内边距(padding) 即内容区和边框之间的距离 四个方向
			- 边框(border) 会影响内容区大小
			   - border-style 指定边框的样式
				    - solid 表示实线
						- dotted 点状虚线
						- dashed 虚线
						- double 双线
			- 外边距(margin)

   - box-sizing 设置盒子尺寸的计算方式
      - content-box 默认值 宽度和高度用来设置内容区的大小
	    - border-box 宽度和高度用来设置可见框的大小（加入边框和内边距的总大小）

   - outline 用来设置元素的轮廓线 用法和border一样 不同的outline不会影响可见框的大小

   - box-shadow: 10px 10px 10px（阴影模糊半径） rgba(0,0,0,.3)； 用来设置元素的阴影效果，不会影响元素的页面布局

   - border-radius: 50%  设置圆角

   - display 用来设置元素显示的类型
	    - inline 将元素设置为行内元素
			- block	 将元素设置为块元素
			- inline-block 设置为行内块元素
			- table	设置为一个表格
			- none	元素不在页面中显示,并且不占据位置
	 - visibility 用来设置元素的显示状态
	    - 默认值visible
			- hideen 元素在页面中隐藏,但是依然占据页面的位置 

### BFC(Blokc Formatting Context) 块级格式化环境

   - BFC 是css中的一个隐含属性,可以为一个元素开启BFC
	    - 特点
			   - 开启BFC的元素不会被元素所覆盖
			   - 开启BFC的元素，子元素和父元素外边距不会重叠
				 - 开启BFC的元素可以包含浮动的子元素

   - 开启方法:
	    1. 设置元素浮动(不推荐)
			2. 将元素设置为行内块元素(不推荐)
		  3. 将元素的overflow设置为一个非visible的值 overflow hidden,auto 

   - clear
	    - 作用:清除浮动元素对当前元素所禅城的影响
			- 可选值
			   - left  清除左侧浮动对当前元素的影响
				 - right 清除右侧浮动对当前元素的影响
				 - both 清除两侧最大影响的那侧
      - 原理: 设置浮动之后,浏览器会自动为元素添加一个上外边距; 使其位置不受其他元素的影响

   - clearfix 最终解决高度塌陷，和外边距重合的方案
	    ```
			.clearfix::before,
			.clearfix::after{
				 content:'';
				 display:table;
				 clear:both;
			 }
		 ```
			 
### 定位 position
   - 定位：
	   1. static 默认值,元素是静止的没有开启定位
		 2. relative 开启的是相对定位
			  - 特点
				   - 不会脱离文档流,元素性质不会改变 块还是块
					 - 会提升元素的层级
					 - 参照元素在文档流中的位置进行定位
		 3. fixed 开启的是固定定位
			  - 特点
				   - 大部分和绝对定位一样
					 - 唯一不同的是，固定定位永远参照与浏览器的视口进行定位,不会随着网页滚动而滚动
		 4. absolute 开启的是绝对定位
			  - 特点 
				   - 不设置偏移量元素的位置不会改变
					 - 开启绝对定位后，元素会从文档流脱离 
					 - 绝对定位会改变元素的性质，行内变成块，块的宽度被内容撑开
					 - 开启绝对定位后也会提升层级
					 - 相对与其包含块（离他最近的开启定位的祖先元素）进行定位
		 5. sticky 开启元素的粘滞定位
			  - 特点
				   - 大部分和绝对定位一样
					 - 不同的是粘滞定位可以达到某个位置将其固定
		 6. z-index 可以指定元素层级 
		 7. 祖先元素层级再高也不会盖住后代元素

   - background-clip: content-box 将北京颜色设置到内容区,边控和内边距不再有背景颜色
	 - border: 2px solid transparent(透明)


### 字体族

   - font-family （字体的格式）
	    - 可选值 serif 衬线字体
			- sans-serif 非衬线字体
			- monospace 等宽字体

   -  font-face 可以将服务器中的字体直接提供给用户去使用
	 ```
    @font-face{
		 font-family: ; (指定字体的名字)
		 src:url()  (服务器中字体的路径)
	 }
	 
	 ```
   - font 可以设置字体相关所有属性
	    - 语法 font: bold italic(斜体) 字体大小/行高（不写有默认值） 字体族

### 图标字体
 
   - 图标字体 (iconfont)  fontawesome(下载解压完，将css和webfonts移动到项目中) ; iconfont
	 - 使用方法 
	     1. i标签  `<i class= "fas fa-bell"></i>`  fas或者fab  后面添加具体需要用的图标id 
			 2. 
			 ```
				li::before { 
				 content: '\f1b0' ; 
				 font-family;
				 font-family:'Font Awesome 5 Fresse'
				 font-weight:900;
					}
			 ```
			 
			  3. `<span class="fas">&#xf0f3;<span>`

   - iconfont （阿里）图标
	    - i标签  `<i class= "iconfont">&#xe61c</i>`  
      - `<i class= "iconfont  icon-qitalaji">c</i>`
			- 伪元素方法同上


### 行高 line height（单行行高）

   - line-height:1 表示行高是指定字体的倍数
	 - 行高会在字体框的上下平均分配
	 - 行间距 = 行高 - 字体大小.

### 文本相关

#### 文本水平和垂直对齐
   - text-align
	    - justify 两端对齐
			- left
			- right
			- center

   - vertical-align
	    - baseline 默认值基线对齐
		  - top 顶部对齐
		  - bottom
			- middle

   - 图片引入产生的间隙 （默认会以基线对齐 产生间隙）
	    - vertical-align:top 改变以基线对齐的默认值 使图片对齐

   - text-decoration:  设置文本修饰
	    - underline 下划线  red  dotted；
			- line-shrough 删除线
			- overline 上划线

   - white-sapce:   设置网页如何处理空白
	    - normal 正常 默认值
			- nowrap 不换行
			- pre 保留空白

   - text-overflow: ellipsis ; 表示溢出的内容省略号
	 - 加上 overflow: hidden 并且设置一个宽度 即可多余内容省略号表示


#### 背景相关

   - background-repeat:  设置图片重复方式
	    - 默认值 repeat 
			- repeat-x
			- repeat-y
			- no-repeat 不重复

   - background-position:设置图片位置 center（x） center（y）

   - background-clip: 设置背景范围
	    - 默认值:border-box 背景出现在边框下面
			- padding-box 背景不会出现在边框，只出现在内容区和内边距
			- content-box 背景只会出现在内容区

   - background-origin: 背景图片的偏移量计算原点
	    - 默认值:padding-box , background-position从内边距开始计算
			- centent-box  背景图的偏移量从内容区处计算
			- border-box 背景图的变量从边框处开始计算

   - background-size: 100px , auto   设置背景图片大小
	    - 设置图片大小 第一个值表示宽度,第二个值表示高度
			- cover 图片比例不变 , 将元素铺满
			- contain 图片比例不变,将图片在元素中完整显示

   - background-attachment: 背景图片是否跟随元素移动 (用得不多)
	    - 默认值 scroll 背景图片会跟随元素移动
			- fixed 背景图片会固定在页面中,不会随元素移动


   - 注：简写属性中background-size必须写在background-position后面 并且用/隔开
	 - 注：background-origin background-clip 两个样式, orgin要在clip的前边


   - 雪碧图 （css-Sprite）
	    - 注：将多个图片统一保存到大图片中，通过调整background-position来显示

   - 线性渐变 
	    - background-image:
		     - linear-gradient(red(开头),yellow(结尾)) 沿着一条直线发生变化 从上往下
				 - linear-gradient(to right,red,yellow) 开头可以设置一个渐变的方向，可以多种颜色平均分布
				 - linear-gradient(to right,red, 50px, yellow) 可以设置红色从50px 之后开始渐变
      - background-image:repeating-linear-gradient(red 0px, green 50px)  可以平铺的线性渐变

   - 径向渐变 background-image
	    - background-image:radial-gradient(red,yellow)
			- background-image:radial-gradient(100px,200px at 0 0,red,yellow) 手动改变径向渐变大小


### 表格

   - table
      - `<td colspan = "2">` 横向合并单元格
			- `<td rowspan = "2">` 纵向合并单元格
			- th 表示头部的单元格

   - table样式
	    - border-spacing:0px 指定边框之间的距离 (td之间的边框叠在一起)
			- border-collapse:collapse 设置边框进行合并 (形成单边框)

   - 注: 如果表格中没有使用tbody而是使用tr,那么浏览器会自动创建一个tboby，并且把所有tr全部放到tbody中，那么tr不是tbody的子元素。
	 - 注: 将元素设置为`table-cell` 使用`vertical-align:middle`可以让元素水平垂直居中



#### 表单

   - form属性 (input以下为type属性；name:提交数据的名字 如usename=孙悟空 value)
	    - action 是表单要提交的服务器的地址
			- 文本框(text)
			    - 数据要提交到服务器,必须为元素指定一个name值
      - 密码框: (password)
			- 单选按钮: (radio) 要有name值,需要指定value，作为用户选择得值传给服务器
			    - checked 设置为默认选中状态
      - 多选框: (checkbox) 指定name和value属性
			- 下拉列表:选择提交数据
			```
			<select name='xxx'>
				<option selected默认选中 value='i'>选项1</option>
				<option value='ii'>选项2</option>
				<option value='iii'>选项3</option>
			</select>
			```
      - type=button 普通按钮 结合js使用
			- reset 重置按钮
			- email 邮箱
			- `autocomplete= off` 关闭表单自动补全  
			- readonly 将表单设置为只读  无法更改 只能看 数据会提交
			- disable  将表单设置为禁用 无法点击 	数据不会提交
			- autofucus 设置表单自动获取焦点


### 过度效果 transition
   - 功能:通过过度我们可以指定一个属性发生变化时的切换方式

   1. transition-property: all
	    - 指定要执行过度的属性
			- transition-property: width;  多个属性用,隔开 所有属性都需要过度all代替
   2. transision-duration:
	    - 指定过度效果的持续时间
			- transision-duration:2s ; 

   3. transtion-timing-function：过度的时序函数
	    - 默认值 easy 慢开始 后加速 再减速
			- linear  匀速运动
			- ease-in 加速运动
			- ease-out 减速运动
			- ease-in-out 先加速 后减速 
			- cubic-nezier()指定时序函数
			- steps(3,end(start)) 分布执行过度效果 start 表示时间开始时执行

   4. transition-delay :2s   过度效果的延迟
	    - 等待一段时间后执行过度效果
	 5.  简写transition 没有顺序要求  第一个时间为持续时间 第二个时间为延迟时间


###  动画

   - 设置动画效果,必须要设置一个关键帧,关键帧设置了动画执行每一个步骤
	 - animation-name:text;
	 - animation-interation-count：infinite 无限次执行
	 - animation-direction 动画执行方向 
	    - reverse 反向执行 to -> from
			- alternate； 重复执行时反向执行
	 - animation-play-state: 控制动画执行状态
	    - running 动画执行
			- paused 动画暂停
   - animation-fill-mode: 动画填充模式
	    - none 默认值
			- forwards 停止在动画结束的位置

   ```
	 @keyframes text {
		 from{
			 margin-left:0px;
		 }
		 to{
			 margin-left:700px;
		 }
	 }
	 ```
	 

#### transform 变形平移旋转 

   - 注：变形不会影响元素布局
	 - transform:
	    1. 平移 translateX, translateY,translateZ
			2.  通常在元素大小不确定的情况下 用 `left:50%; top:50%; transform:translate(-50%,-50%)`，设置元素垂直组中
			3.  给html设置视距 `perspective:800px` 即 人脸距离网页的距离  

   - 旋转
		  - transform:rotateZ(45deg)
		  - backface-visibility:hidden 设置是否显示元素的背面
		  - opacity:0.5 给整个元素设置透明的效果 
		  - transform-style:preserve-3d 设置3d变形效果

   - 缩放
			- transform:scale(参数)  对元素进行缩放
			- transform:origin: 0 0  设置变形的原点 默认值是center


### less
   - 注:  less是一门css的预处理语言,通过less可以编写更少的代码实现更大的样式

   - 原生css中 变量的设置
   ```
	 定义 --color:#bfa; --length:20px
	 
	 使用 var(--color)
	 
	 calc() 计算函数
	 ```
	 
	 - less简单用法
	 ```
	 .box1 {
		 width:100px;
		 
			.box2 {
			 width:100px;
			 
			 .box3 {
				width:100px;
			 }
		 }
	 }
	 ```
   1. // 是less中的单行注释，不会被解析到css中
	 2. 变量  在变量中存储一个任意的值
	 3. 常用相关
	    - @a:100px;   `width:@a`
			- @c:box6 ;   `.@{c} ` 表示类名
			- 变量重名时,优先使用比较近的变量
			- `&:hover` 就表示外层父元素
			- `.p2:extend(.p1)` 对选择器样式进行扩展
			- `.p3{.pi()}` 对指定的样式进行引用 mixin 混入
			- `.p4(){}` 使用类选择器可以在选择器后面添加括号，实际上是创建一个mixins的混合函数
			- `text(@w){width:@w} ; .text(200px)`  可以定义形参
			- color:average(red，blue) 选择中间值
			- background-coloer:darken(#bfa,20%) 选择颜色加深的程度

   4. 设置css和less之间的映射关系
		  - 打开easy-less 将 less.compile中的 'sourceMap'改为true



### flex(弹性盒)

   - flex container
	    - flex-flow	 缩写属性（flex-direction和flex-wrap）
			- flex-direction 确定主轴方向默认row 从左到右
			- flex-wrap	 默认情况下items在同一行显示 默认值nowrap
			- justify-content 确定在主轴上面的排布方式 默认与主轴对齐
			- align-items 决定在交叉轴的对齐方式 默认normal
			- align-content 决定了多行 items在交叉轴的对齐方式 默认（stretch）

   - flex items
      - flex	缩写属性(flex-grow ; flex-shrink;flex-basis)  1代表 grow ;100px代表flex-basis 
			- flex-grow	 默认0  分为大于1和小于1
			- flex-basis	设置flex items在主轴 方向上的大小宽度
			- flex-shrink  默认值1 收缩
			- order	 默认0 越小越先排序
			- align-self 可以覆盖 flex container设置的align-items 效果和align-items一样

---

# 2020/8/29
---
## JavaScript

   - 概念 ：一种专为与网页交互而设计的客户端语言
   - 功能 ：用户交换（表单验证）；网页特效（悬浮的广告）；记住账户名密码 ...

## JavaScript组成

   - ECMAScript
   - BOM 整个浏览器
   - DOM document 整个文档 从<html> 开始 到</html>结束
    
## Javascript语法

   1. type = "text/javascript" 说明当前script 标签中文本的类型
   2. 所有的JS代码必须写在script标签里
   3. 语法规范 script写在head标签中
   4. document.wirte("xxx")  在当前文本上输入内容
   5. 多个script标签会按顺序执行
   6. js代码可以外部引入 src引入外部文件
      - `<scirpt type ="text/jacascript" src ="xxx"></script>`
	  - 如果当前script标签作用引入外部文件，那么这个script就不能再写代码
   7. 原样输出的标签
      - &lt; 是<     
	  - &gt;是>
   8. 注释
      -  // 单行注释  快捷键 ctrl + /
	  -  /* 多行注释  快捷键 ctrl + shift +/ 
### JS 变量 
   + 常量/字面量   确定值叫做常量   如100 ，3.14
       + JS的数据类型分为两大类
	      + 基本数据类型
		     1. 数字  number  100
			 2. 字符串 string 所有带双引号/单引号 ‘hello’  “hello”
			 3. 布尔值 boolean  true false
			 4. 特殊数据类型 null 空  undefined  未声明
			    + 变量，值可以改变得叫做变量
				   + 1 声明变量  通过关键字 （系统定义的有特殊功能的单词）var
				      + 声明变量的时候，同时给变量赋值，叫做初始化。
				   + 2 可以同时定义多个变量 变量之间要用逗号隔开
				   + ` var age =18； var name ="xxx", age=18,sex="x"`
			 5. 标识符 ：用户自定义的所有名字叫做标识符，变量名规律：
			    1. 标识符必须由数字、字母、下划线和美元符号组成
				2. 不能以数字开头
				3. 标识符区分大小写，age和Age这是两个变量 
				4. 标识符见名思意
		   + 输出当前变量/常量的数据类型
		      + （格式） typeof 变量/常量
			  +  （注） JS 是弱语言，变量被赋值成什么类型就是什么类型,不要在后续的代码里改变该变量的数据类型，很容易引起代码歧义。
			      ``` var age ="xxx";
				       alert（typeof age）; //number
					   name =18;
					   alert (typeof age); //string
				  ```
				  + 查看变量的类型 `var x =123； alert（typeof x）；`
					   
		   


# 2020/8/30
---

## 第五章 运算符

**字符串拼接** 
   1. 如果一个操作数是字符串，+号叫做字符串拼接符。 表示：此时不是数学意义上的加法，而是拼接的意思
	        ``` 
			var tmp= 1+1;
			var tmp= "您" + "好"；
			var tmp= "h" +true; 
			var tmp= "h" +undefined; 
			alert(tmp);
			```
			
   2. 任何数据除了字符串做相加运算外，与NaN做算术运算的结果始终是NAN，包括NAN本身和NAN做运算结果也为NAN
	   + 字符串如果是纯数字字符串会转化成数字，否则转换成NAN var tmp=1 - “2” //输出-1   字符串“2” 转成了数字2
	   + var tmp 1- "2a"; //NAN not a number "2a"转换成NaN
#### 表达式    11
   概念：运算符和操作数组成的式子，叫做表达式。
      - 功能
	  - 表达式值
#### 复合赋值运算符
   - += *= /= 
   ```
    var tmp = 5;
    tmp += 10;// tmp = tmp + 10;
    alert(tmp);
   ```
#### 自动数据转换   07
     总结 任何其他数据类型除了和字符串做相加操作外，与数字类型做算数运算的时候。其他数据类型都会自动转换成数字
    
	+ 布尔值  true => 1    ;     false=>0
	+ 特殊数据类型   null=>0    ;  undefined =>NaN
	   + var tmp = 1 * “1”； //1
	   + var tmp = 1 / “1”   // number
	   + var tmp = 1 + true; //2
	   + var tmp = 1 +null; //1
	   + var tmp = 1 +undefined; //NaN
	   
#### 强制数据类型转换  08
   + 注：通过 Boolean()进行强制数据类型转换； 将别的数据强制转成布尔值
   + 结论 
      1. 数字0转换成布尔值为false， 所有非0数字转成布尔值都为true
	  2. 空字符串转成布尔值为false，所有非空字符串转成布尔值为true
	  3. null和undefined转成布尔值都是false
##### 强制数据转换成数字   09
   1. Number()  将别的数据类型转成数学
       1. 字符串  纯数字字符串 =>对应的数字 否则， NaN 
	   2. 布尔值 true=> 1     false => 0
	   3. 特殊数据类型 null=>0  undefined=> NaN
   2. parseInt（） 兼容Number的功能   并且取整
   3. parseFloat（） 取浮点数 带小数的数字  可以将别的数据类型转换成数字
   4. 补充 var tmp = 1 / 0;//Infinity 无穷大
			var tmp = -1 / 0//-Infinity 无穷小
#### 一元运算符   13
   + 注 ： 只能操作一个值的运算符，叫做一元运算符
      1. a++ ；     ++后置，先取a的值 ，然后在进行+1操作
	  2. ++a ;      ++前置，先进行加一操作，然后再取a的值
	  3. --a ;      a--     同理

#### 关系运算符     15
   + 注 ： 关系运算符中操作数为非数字要尊从一下规律 ：
      1. 如果两个操作数都是数值，则数值比较
	  2. 两个操作数都是字符串，则比较两个字符串对应的字符编码值/ASCII码表值
	     - 逐位进行比较，知道比较出大小，终止比较
	  3. 两个操作数有一个是数值，则将另外一个转换成数值，再进行数值比较
   + 在等于和不等的比较上，如果操作数非数值，则遵从一下规律 
      1. 一个操作数为布尔值，则比较之前将其转换成数值，false转成0，true转成1
	  2. 一个数字为字符串，则比较之前将其转成数值再进行比较
	  3. 一个操作数为NaN，则== 返回false，!=返回true ，并且NaN和NaN自身不等
	  4. 4在全等（===）和全不等（!==），如果值和和类型都相等，才返回true，否则返回false

#### 逻辑运算符   16 17
   - 与    表达式1   &&   表达式2  注：只有当两个表达式的结果都为真的时候，与运算的结果才为true
      - 短路操作： 当第一个表达式1位false的时候，第二个表达式不去执行，直接判断整个与运算为false
   - 或    表达式1   ||   表达式2  注：只有当两个表达式的结果都为假的时候，或运算的结果才为假
      - 短路操作 ： 当表达式1为true ，表达式2不去执行 ，判断整个表达式为true
   - 非    !表达式
      - 逻辑非运算遵从下述规律 
	      1. 如果操作数是一个空字符串，则返回true, `alert (!"");//true`
		  2. 如果操作数是非空字符串，则返回false,  `alert(!"ss");//false`
		  3. 操作数是0，返回true,  `alert(!0);//true`
		  4. 操作数是任意非0的数值（包括infinity），false
		  5. 操作数是NaN，返回true
		  6. 操作数是undifined,返回true


# 2020/9/1
---
#### 选择语句
   - 单分支 ； if语句 
      - 在JS中，我们把{}括起来的所有语句都当做是一条语句对待
	  - 执行语句，一定要比if判断条件缩进四个空格
   - 双分支 
      - 如果声明变量没有复制，将这个变量设置为null  即 var max = null
	```
	//判断最大值
	 var num1 = 10;
	var num2 = 20;
	var max = null;
	if(num1 > num2){
		max = num1;
	}else{
		max =num2;
	}
	alert("两个数中的最大数是:" + max);
	```
	```
	判断年份是闰年还是平年
	var year = 2014;
	if(year % 400 == 0 || year % 4 == 0 && year % 100 !=0){
		alert("这是一个闰年");
	}else{
		alert("这是一个平年");
	}
	```
	- 注意：
	   1. 嵌套时，最好不要超过三层；
	   2. 内层的每一对if...else代码要缩进并对齐
	   3. 编写代码时，else艺与最近的if配对


#### switch 和 if 语句注意点
   - if后面的（）不能省略， （）后面不要加分号
   - if 分支中即使一句话也要把{}协商
   - switch语句中default分支一定要写上，防止维护中产生歧义
   - 把执行效率 更大的放前面
   - 分支少用if ； 分支多用switch

#### 三目运算法/条件运算符
   - 格式： 表达式1 ? 表达式2： 表达式3；
       - 执行过程 :先求解表达式1，若为非0（真）则求解表达式2，若表达式1为0（假），则求解表达式3

####  循环语句
   - while(表达式)
      1. 先判断表达式，表达式成立执行循环语句
	  2. 循环条件中使用的变量（循环变量）需要经过初始化
	  3. 循环体重，应有结束循环的条件，否则会造成死循环
	  4. 循环体中，可以写若干合法的js代码，包括if，也可以再套个循环
   - do while
    ``` 
	do{
		循环语句
	}while（表达式）；
	```
   - for 循环
    ```
	for (表达式1；表达式2；表达式3){
		循环语句；
	}
    ```
	   1. 先求表达式1（只求一次)
	   2. 求解表达式2，若其值为真（非0）；则执行for语句中的循环语句，然后再去求解表达式3；在求解表达式2，若为假，则结束循环


####  break 和 continue

---
 
####  函数
   - 编程JS中函数的概念：
      - 函数的当他被调用时执行的可重复使用的代码块。
   - 无参函数的声明：
      ```
		function 函数名（）{
			for(var i =0;i < 10;i++){
				document.write("hello world <br />");
		}
	  ```
   - 有参函数的封装过程：
	 ```
	    function 函数名（形参...）{
			函数体
		}
		function add(num1,num2){
			alert(num1+num2);
		}
		
		add(5,6);
			
	 ```
	 
   - 函数的分类
	   - 内置函数（系统函数，官方函数）
	      1. alert（）; parseInt() ; document.write()
	   - 自定义函数  
	      1. 根据实际需求，自己封装一个函数
   - arguments
       - 注： 在每一个函数内，都有一个内置的数组，是一个变量，叫做arguments。arguments可以存储当前函数传入的所有参数，而且，是通过传参的顺序。进行排列的。
       -  arguments .length 输入传入参数的个数
       -  访问argumens里面的数据，需要通过对应的房间号/下标进行访问:alert(arguments[0]);
	   -  下标可以配合循环去使用
	   ```
	    function sum(){
	   	var sum = 0;
	   	for(var i=0; i < arguments.length;i++){
	   		sum +=arguments[i];
	   	}
	   	alert(sum);
	   }
	   sum(3,4,5);
	   ```
   - 返回值  return
      - 在函数外部获取到，函数调用的结果
	  - return后面索根表达式的数值，就是当前函数调用的值。
	  - 函数执行到return语句以后，就执行结束，跟在return后面其他的语句，执行不到

   - 作用域
      - 起作用的范围，即有效范围，每一个函数的声明都会形成一个作用域
	     - 全局作用域
		     - 全局作用域声明的变量  ； 全局变量
		 - 局部作用域
		     - 局部作用域声明的变量  ；  局部变量 ；局部变量的生命周期和生效的范围，都是生命该变量的函数区域；当函数调用完之后，就直接销毁
      - 如果全局作用域和局部作用域变量重名，我们采取就近原则，当前访问的这个变量离哪个作用域近，就是哪个作用域

   - 事件驱动函数
      - 注： 在和页面交互的过程中所调用的函数，称之为事件调用函数
   - 什么是事件
      - 注： 和页面交互的行为称之为时间。比如：鼠标点击某个按钮时（onclick）、鼠标浮动或离开到某个区域时（ommouseover、onmouseout）、文本框获取焦点和失去焦点时（onfocus、onblur）
   - 页面加载后执行 window.onload = function(){
	   - 
   }
   
	```
	/* var oBtn =document.getElementById("btn");
			alert(oBtn); */
		window.onload = function(){
			var oBtn = document.getElementById("btn");
			alert(oBtn);
		}
		</script>
	</head>
	<body>
		<input type="button" value ="按钮" id= "btn"/>
	</body>
	```

   - 给按钮添加时间驱动函数 ；单击 onclick
   - 文本驱动函数
    
     ```
	 window.onload= function(){
	 	var oBtn = document.getElementById("btn");
	 	var oTxt = document.getElementById("txt");
	 	oBtn.onclick =function(){
	 		 // oTxt.value = ""; //清空文本内容
	 		 alert(oTxt.value);
	 		 oTxt.value ="修改后的内容";
	 	}
	 }
	 ```

   - 构造函数

#### 递归
   - 函数自己调用自己，称为递归调用
      - 我们可以写出递归，但是我们并不知道他是如何得出结果
	  - 方法
	     1. 首先先去找临界值，既无需计算，获得的值
		 2. 找这一次和上一次的关系
		 3. 假设当前函数已经可以使用了，调用自身计算上一次的运行结果，再写出这次的运行结果
		 4. 必须有参数
		 5. 必须有return
	```
	function sum(n){
		if(n == 1){
			return 1;
		}
		 return sum(n-1)+n;
	}
	alert(sum(100)); */ //1-100求和
	```

### 数组
	
#### 基本数据类型： 数字 ；字符串 ；布尔值 ；特殊数据类型：null undefined
   - 特殊数据类型：
      - 数组：字面意思上是一组数据，一组（一般情况下相同类型的）数据(不一定都是数字)
	     - 数组是一种数据类型
		 - 数组的作用是：使用单独的变量来存储一系列的值
		 - 1 使用new 运算创建数组时
		    - 参数：是我们要在数组中存储的数据
			- 参数：如果当前的参数，只有一个，冰倩这个参数是数字（10）的话。数组长度为10的数组
         - 2 省略new运算符创建数组 ：var arr =Array(...);
		 - 3 通常常量来创建数组 ：var arr =[...];
		    - 数组中存储的数据，一般情况下叫做数组中的元素
			- 数组元素的访问，通过下标完成，下标，也叫作索引，从0开始
   - 数组的长度
      - arr.length访问 ;数组元素的个数
	     -length属性，不是只读的，可以设置。
   - 数组元素的访问和赋值，都是通过数组的下标完成
      - 下标是索引，即元素的序号，从0开始，下标最大的取值是：数组的长度（length）-1
	  - 下标可以是变量或者表达式
   - 数组的遍历：数组和循环结合使用
   - 随机数：math.random() 可以随机0-1之间任意的数
   - for.....in 快速遍历
      - for（var 变量 in 数组）{}

   - 栈方法 特点（先进后出）
      1. push();   格式: 数组.push（元素...）
	      - 给数组末尾添加元素
		  - 参数：添加的元素，数量随意
	      - 返回值：添加元素以后，数组的长度。var res = arr.push("西瓜","芒果");alert(res);
      2. pop()；   格式 ：数组.pop（）
	      - 功能：移除数组末尾的最后一个元素
		  - 返回值：移除的元素
   - 队列  特点（从一头进，另外一头出,先进先出）
	  1. shift();  格式：数组.shift()
	      - 功能：从数组的头部取下一个元素
		  - 返回值 : 取下的元素 
	  2. unshift（）;格式 :数组.unshift（参数..）
	      - 功能: 从数组的头部插入元素 
		  - 参数: 插入的元素，插入的参数随意
		  - 返回值: 插入元素后数组的长度
   - concat（） 格式:数组1.concat（数组2）
	   1. 功能:将两个数组，合并成为一个新数组，原数组不会变
	   2. 返回值:我们合并好的新数组
	   3. 参数我们要合并的数组
   - slice()  格式:数组.slice(strat,end);
       1. 功能:基于当前数组获取指定区域元素并创建一个新数组。源数组不改变
	   2. 参数:start开始获取区域的下标，end结束获取区域的下标(不包括end下标位置的元素)
	   3. 返回值:指定区域元素生成的新数组
   - splice（）格式: 数组.splice（start，length，元素）； 可以完成删除，插入，替换
      - 参数1 ；截取的开始下标
	  - 参数2 ；截取的长度
	  - 参数3 ；在截取的开始下标位置，我们要插入的元素,插入的元素的个数随意
      - 返回值：截取掉的元素，组成的数组
   - join（） 格式: 数组.join（拼接符）
      1. 功能：使用拼接符将数组中的元素拼接成字符串
	  2. 参数：拼接符
	  3. 返回值：拼接好的字符串


   - 数组排序 
      1. reverse()逆向排序 ; 格式：数组.reverse();
	  2. sort( )将数组元素升序排序;    格式：数组.sort（
	     - 默认按照字符串进行排序

#### 冒泡排序
      - 原理：前后两个数两两进行比较，如果符合交换条件，交换位置，直到所有数据排序完成，结束比较


#### 选择排序（）打擂台法
     - 通过比较首先选出的最小的数放在第一个位置上，然后在其余的数中选择次小数放在第二个位置，以此类推，直到所有的数成为有序数列

#### 数组引用 复合数据类型/引用数据类型
   - 所有的复合数据类型都不存储在我们的函数中，存储在堆断
   - 函数运行的内存空间是预先分配好的，一旦被分配好内存空间，就不能进行改变了
   - 在堆断，我们可以想要使用内存，就随时分配多少内存
   - 所有的复合数据类型，存储的都是门牌号， 也就是地址，所以这类型的数据 ，我们叫做引用数据类型

# 2020/9/3  
---
### 字符串概念

   - 在JS中所有单引号或者双引号括起来的都叫字符串
	```
	        /1.通过new运算符创建
			var str = new String("hello world");
			alert(str);   //object 对象有属性和函数
			/2.new可以省略
			 var str = String(true);
			alert(typeof str); 
			/3.通过常量创建字符串
			var str ="hello";
			alert(str); 
	```

#### 字符串属性
   - length 返回的是当前字符串中字符的个数
   - 访问字符串的字符
      - 字符串.charAt(下标) →简写： 字符串.[下标]
	  - 返回值：是对应下标的字符

##### ECMAScript中的字符串是不可变得，既字符串一旦创建，他们就不能改变。要改变某个变量保存的字符串，就要首先销毁原来的字符串，然后再用另一个包含值的字符串填充该变量
 
#### 字符串函数		 (document.write)中使用
   1. big() 用大号字体显示字符串
   2. blink()显示闪动字符串
   3. bold()使用粗体显示字符串
   4. fixed()以打印机文本显示字符串
   5. strike()使用删除线来显示字符串
   6. fontcolor()使用指定颜色来显示字符串
   7. fontsize()使用指定尺寸来显示字符串
   8. link()将字符串显示为链接
   9. sub()将字符串显示为下标
   10. sup()将字符串显示为上标

##### 字符串方法
   1. charCodeAt
      - 格式 ： 字符串.charCodeAt(下标)
	  - 返回值：返回字符串中对应下标字符的ASCII码值
   2. String.fromCharCode();
      - 格式：String.fromCharCode(ASCII码值);
	  - 参数：ASCII码值，个数任意
	  - 返回值：ASCII码值对应字符组成的字符串
   3. concat
      - 格式：字符串1.concat（字符串2）
	  - 返回值：拼接成的字符串

##### 字符串查找方法
   1. indexOf()
      - 格式：字符串.indexOf(子串，开始查找的位置)；
	  - 返回值：如果在字符串中查找到了子串第一次的位置，返回子串出现的位置，否则没有查找到返回-1
   2. lastIndexOf()
     - 格式：字符串.lastIndexOf
	 - 返回值：子串在字符串中最后一次出现的位置，如果没有，返回-1
   3. search(子串/正则) 参数可以是正则表达式   /"abc"/    /abc/
      - 正则表达式可以添加修饰符 /abc/ig； i代表忽略大小写，g代表全局匹配
   4. replace()
      - 格式：字符串.replace(匹配的字符串/正则表达式，替换成的新字符串);
	  - 返回值:替换完成以后生成的新字符串 
	  - 【注】如果想替换所有符合条件字符串，就必须使用正则表达式完成
   5. substring()
      - 格式：字符串.substring(start,end);
	  - 功能：指定范围内，提取字符串，生成新字符串
	  - 返回值：提取的新字符串(不包含结束位置 )
   6. split() 字符串分割
      - 格式：字符串.split(分隔符，生成的数组的长度)；
	  - 返回值：通过分隔符，分割成的装有子串的数组
	  - [注]:分隔符，整体；会分割出空字符串
	  - 如果分隔符是空字符串""，那么我们字符串会分割成单个字符
	  - 字符串=>数组 split  ；； 数组=>字符串 join
   7. toLowerCase()      ；    数组.toLowerCase()  全小写
   8. toUpperCase()      ；    数组.toUpperCase()  全大写

##### ECMA5

   - 严格模式
      - 写在哪个作用域下，这个作用域下所有的代码都遵循严格模式 

   - 数组额外的方法
      1. indexOf  ;arr.indexOf(30,3)
      2. forEach()
	     - 格式：数组.forEach(function(item,index,array)){}
		    - item 当前遍历到的元素
			- index 当前遍历到的下标
			- array 当前数组
			- 功能 ：遍历数组 
			```
				var arr = [10,20,30];
				arr.forEach(function(item,index,array){
					alert(item + ","+ index + ","+ array);
				})
			```
      2. map 映射   遍历->操作->返回
          ```
				var arr = [10,20,30,40];
				var newArr = arr.map(function(item,index,array){
					return item - 2;
				})
				alert(newArr); //8 18 28 38
		  ```
	  3. reduce 归并
	     - 格式 ：arr.reduece(function(pre,next,index,array){})
		 - next:当前遍历到的元素
		 - pre：上一次遍历return后面的值
		```
			var arr = [10,20,30,40,50];
			var newArr =arr.reduce(function(pre,next,index,array){
				alert(pre+"," + next+",");
				return pre + next;
			})
			alert(newArr);
		```
	  4. filter 过滤 （例如找出所有大于30的元素）
	     - 格式arr.filter(function(item,index,array){...})
	  5. some  某些 ,判断return后面的条件是否成立，如果成立返回true,否则的话返回false
	     - 格式 arr.some(function(item,index,array){...})
		     - 判断return后面的表达式，在当前数组是否成立，如果成立true，否则flase
			 - 如果匹配成功，则返回true，后面不再进行遍历
	  6. every 跟some一样，但是要求每一项都符合，才会返回true，有一项不符合则返回flase
	     - 如果判断有元素不符合条件，则返回false，终止循环

## 2020/9/6
---

### Math对象
   - Math对象用于执行数学任务
      - Math常用的属性 : Math.PI 约等于3.14159
   - 常用的Math函数
      1. alert(Math.round(3.5)); //四舍五入
	  2. alert(Math.random()); //随机0-1之间的随机数
	  3. alert(Math.max(10,50,20));// 返回最大值
	  4. alert(Math.min());//返回最小值
	  5. alert(Math.abs(-10));//返回绝对值
	  6. alert(Math.ceil());//向上取整
	  7. alert(Math.floor());//向下取整
	  8. alert(Math.pow(x,y));//求：x的y次方
	  9. alert(Math.sqrt());// 开平方

   - Math对象勾股函数
      1. Math.sin()/cos()/tan()/  ；(参数都是弧度 ;1弧度=Math.PI/180;)

   - 对象
      - 对象的概念:对象其实就是一种类型，即“引用”类型。而对象就是“引用类型”的实例。在ECMAscript中引用类型就是一种“数据结构”，用于将[数据和功能]组织在一起
      - 分析:数据存储历程
	     - 变量(单个数据)=>数组[批量数据]=>对象(数据函数)
	  - 对象的创建
	     1. 对象中的数据，称之为对象的属性
		 2. 对象中的函数，称之为对象的方法
      - 声明函数:
	      - function show(){};  可以写成 var show = function(){}
		  - 函数:也是数据类型/复合/引用数据类型   function
		  - 函数名 == 函数所在的地址

	  1. 使用new运算符创建对象
	```
		var person = new Object();
		//给该对象添加数据/属性
		person.name = "xxx";
		person.age = 18;
		//给该对象添加函数/方法
		person.showName = function(){
			alert(person.name);
		}
		// alert(person.name);
		person.showName();
	```
	
	  2. new运算符可以省略其他部分一样
	  3. 使用常量/字面量去创建对象
	      1. var person ={};
	```
		var person ={};
		// person.name = "xxx";
		person["name"]= "xxx";
		person.age = 18;
		/* person.showName = function(){
			alert(person.name);
		} */
		person["showName"] = function(){
			alert(person["name"]);
		}
		person.showName();
	```
	
   - 通过delete person.name可以删除对象属性

### 日期对象
    
   - [注]：我们所用的时间都是根据格林尼治时间，中国北京处于东八区

   - date 在JS中，日期也是一个数据类型、复合数据类型，是对象
   - 日期对象的创建方式 （注）
      - var d = new Date();
	  - 参数：如果我们不传参数，默认获取的就是当前系统的时间

   - 生成日期对象的参数()，有这几种
      1. Date("2020/09/06")
	  2. Date("2020-09-06")
	  3. Date(2016,04,13,14,34)
	  4. 参数可以是毫秒，计算从1970年,1月1日0时0分0秒；开始加毫秒数，计算出这个时间
	     - var d = new Date(1000);

#### 日期对象方法  (通过某种方法输出)

   - [格式]: 日期对象.方法();
      1. alert(box.toDateString()); 以特定的格式显示星期几、月、日、年
	  2. alert(box.toTimeString()); 以特定的格式显示时、分、秒和时区
	  3. alert(box.toLocaleDateString()); 以特定的地区 格式显示，星期几、月、日和年
	  4. alert(box.toLocaleTimeString());以特定地区格式显示、时、分、秒、和时区
	  5. alert(box.toUTCSring()); 以特定格式显示完整的UTC日期

   - set系列的函数 是设置值;;get系列的函数 是获取值
      1. get/setDate();   alert(d.getDate())  ; d.setDate(4)
	  2. getDay(); 		从Date对象返回一周中的某一天（0-6）星期0代表周日
	  3. get/setMonth() ; 从Date对象中返回月份（0-11）
	  4. set/getFullMonth() ; 从Date对象以四位数返回年份
	  5. set/getHours(); 返回Date对象的小时（0-23）
	  6. set/getMinutes()；返回Date对象的分钟（0-59）
	  7. set/getSeconds();返回Date对象的描述（0-59）
	  8. set/getMilliseconds();返回Date对象的毫秒
	  9. getTimezoneOffset();返回本地时间与格林威治标准时间（GMT）的分钟差

   - d.set/getTime() 设置/获取当前日期距离1970年的毫秒数 ； （参照物是1970年）
   - Date.parse（2020-9-6）
       - 参数:是一个日期格式的字符串
	   - 功能:返回这个日期，距离1970年的毫秒数
	```
		var time = Date.parse("2020-9-6");
		var d = new Date(time);
		alert(d);
	```
	
#### 定时器
   1. setInterval
   - 格式:setIntetval(函数/匿名函数，毫秒数)；
      - setInterval(function(){},毫秒数）;
   - 功能:每隔所传参数的毫秒数，就调用一次所传参数的函数
   - 返回值：当前页面上对于这个定时器的唯一标识，定时器的ID

   2. clearInterval()  ；取消定时器；参数:定时器的ID 
	
   3. innerHTML  标签间的所有内容



## 2020/9/8
---

### BOM （Browser Object Model）
  
   - window对象  浏览器打开的一个窗口
   - BOM 就是浏览器的对象模型
  
#### 系统对话框

   - 浏览器可以通过调用系统对话框，向用户显示信息
      - window下的函数可以省略window直接调用
      - 系统提供了三个函数，可以完成系统对话框的操作
   1. alert() 直接弹出警告框; 参数:警告框上显示的内容
   2. confirm() 弹出一个带有确定和取消的警告框
      - 返回值:点击确定 => 返回true  ；点击取消=>返回flase
   3. prompt() 弹出一个带输入框的提示框
      - 参数:第一个参数:要在提示框上显示的内容；第二个参数：输入框内默认的值
	  - 返回值:点击确定 => 返回值是输入的内容   ；  点击取消 => 返回值是null

#### open

   - `window.open()//open()`
      1. 要加载URL
	  2. 窗口的名称或者窗口的目标
	  3. 一串具有特殊意义的字符串
```
	window.onload = function(){
		var oBtn = document.getElementById("btn");
		oBtn.onclick = function(){
			// open("https://www.baidu.com");
			//如果只有一个参数，调用open方法会打开新窗口，加载url
			
			// open("https://www.baidu.com","百度");
			//第二个参数，是给打开的新窗口起一个名字，然后以后，再去加载url，就在这个已经起好名字的目标新窗口加载url
			
			open("https://www.baidu.com","百度","width = 400,height=400,top=200,left=200");
			//第三个参数，设置我当前打开窗口的一些参数
		}
	}
```
	   
   - opener 打开当前窗口的父窗口的window对象


#### location

   - location : 可以看做浏览器上的地址输入框
      注释：它提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能
	  
   - location 中的属性
       1. url 统一资源定位符（快递包上的一个地址）
	   2. location.hash  : 锚点， #1 ，实现业内跳转
	   3. host : 主机名：端口号  ； 浏览器端口号 默认8080
	       - IP ，通过IP我们可以在全球范围内，找到我这台电脑所使用的网络的地址
		   - 端口号；正在使用网络的软件，在当前电脑内的唯一的标识
		       - IP:端口号
       4. hostname : 主机名  ； 域名/IP
	       - 注：域名其实就是给IP起一个好记的名字
	   5. href : 整个url
	   6. pathname :  路径名
	   7. port: 端口号
	   8. protocol:协议   ；http:网络协议	/  file:本地文件协议
	   9. search：查询字符串
	      - 跟在？后面的部分
     - protocol(协议):host(主机名):port(端口号)/pathname(路径)?查询字符串（search）#锚点（hash）

   - location 对象方法
       1. assign() : 跳转到指定url
	   2. reload() : 重载当前的url
	       - 如果传参，参数为true的时候，强制加载。从服务器源头重新加载
	   3. replace() :用新的url替换当前页面；可以避免跳转前的历史记录


#### history
   - history是window对象的属性，他保存这个用户上网的记录

   - 属性
      1. history.length  ；返回当前history对象中的记录数（历史记录的条数）
   - 方法
	  1. history.back()  ：返回上一条历史记录，类似于后退
	  2. history.forward()：前进到吓一跳历史记录，类似于前进
	  3. history.go  :
	     - 参数为0是，重载当前页面
		 - 参数为正数时  ；前进对应数量的记录
		 - 参数为负数时  ；后退对应数量的记录

---
### DOM
   - DOM : document object model ;文档对象模型
      - 【注】 “W3C 文档对象模型 （DOM） 是中立与平台和语言的接口，他允许程序和脚本动态地访问和更新文档的内容，结构和样式
	  - [注] DOM是打通html、css和JS壁垒的一个工具
   - DOM中节点种类一共有三种（JS 中所有节点都是对象）
      1. `<div title ="属性节点">测试Div</div>` 
	  2. 元素节点： `<div></div>`
	      - 通过节点对象，访问它的一系列属性
		  - tagName :获取元素节点的标签名
		  - innerHTML :获取元素节点标签间的内容（解析标签）
	  3. 属性节点：`title ="属性节点"`
	     - id
		 - title 
		 - style 
		 - className
		 - 访问这些属性： 元素节点.属性名  ；或者 元素节点[属性名]
	  4. 文本节点: `测试DIV`
 
   - document.getElementsByTagName()
   - node.getElementsByTagName(); 注：从node节点开始找出所有符合条件的元素节点
        - 参数:标签名
		- 功能:获取当前页面上所有符合该标签名标准的元素节点
		- 返回值:一个装有符合条件的元素节点的数组

   - document.getElementsByName() ；只能从document开始
        - 参数:name的值
		- 返回值：装有符合条件的元素节点的数组
		- 【注】：name属性一般情况下，只有文本输入框的元素节点才有

   - node.getElemensByClassName()
       - 参数：class
	   - 功能：是获取node节点下，所有符合条件的元素节点
	   - 返回值：所有符合条件的元素节点组成的数组

   - getComputedStyle(元素节点)[获取样式类型]
       - 获取当前有效样式


---

   - attribute
      - set/getattribute
	  - remove.attri bute

   - childNodes  获取当前元素节点的所有子节点，包括两种节点类型
       1. 元素节点
	   2. 文本节点
    - firstChild  快速找到元素节点子节点的第一个
	- lastChild   快速找到元素节点子节点的最后一个

   - DOM节点
       1. 元素节点: nodeName【元素名称】；nodeType【1】; nodeValue【null】
	   2. 属性节点: nodeName【属性名称】; nodeType【2】; nodeValue【属性值】
	   3. 文本节点: nodeName 【#text】 ; nodeType【3】; nodeValue【文本内容（不包括HTML）】

   - ownerDocument 属性	    
       - ownerDocument  属性返回该节点的文档对象根节点，返回的对象相当于document

   - parentNode  ； 属性返回该节点的父节点
   - previousSibling ；属性返回该节点的前一个同级节点
   - nextsibling  ; 属性返回该节点的后一个同级节点

---

#### 节点操作方法


   - creatElement()
      1. 格式：document.creatElement(标签名)

   - appendChild()
      1. 格式：parent.appendChild(newNode)
	  2. 功能：将newNode插入到parent子节点的末尾

   - createTextNode()
      1. 格式：document.createTextNode(文本)
	  2. 功能：创建文本节点


   - insertBefore()
      1. 格式 :父节点.insertBefore(插入的节点,旧节点)；
	  2. 功能 :将插入的节点插入到旧节点之前

   - replaceChild()
      1. 格式：parent.replaceChild(newNode,oldNode);
	  2. 功能: 用newNodo将oldNode替换掉

   - cloneNode()
      1. 格式：node.cloneNode()
	  2. 返回值：新克隆出来的节点
	  3. 功能：克隆节点
	  4. 参数：true   默认是false ； 如果传true, 就会复制元素节点中的innerHTML

   - removeChild()
      1. 格式：node.parentNode.removeChild(node)
	  2. 功能：删除节点



## 2020/9/14
----
 ### 事件Event
  - 概念: JavaScript事件是由访问Web页面的用户引起的一系列操作。当用户直接性某些操作的时候，再去执行一系列代码；或者用来获取事件的详细信息，如鼠标位置，键盘按键等等
   
   - 事件类型 （on + 事件名称）
       1. 鼠标事件
	   2. 键盘事件
	   3. HTML事件
   - onclick

   - mouseover 鼠标滑过区域

   - onfocus  

   - onblur  失去焦点
   
   - onchange 内容改变且失去焦点


#### 事件对象
  - 概念:当触发某个事件时，会产生一个事件对象，这个对象包含着虽有的事件有关的信息。包括导致事件的元素、事件的类型、以及其他与特定事件相关的信息
       - 通过事件绑定的执行函数是可以得到一个隐藏参数的。说明，浏览器会自动分配一个参数，这个参数其实就是event对象

  - 对象获取方式
      1. evt.clientX  ;evt.clientY  ；距离可视区域的距离
	  2. evt.pageX  ;evt.pageY ;   距离页面的距离
	  3. evt.offsetX ;evt.offsetY;  鼠标距离事件源的距离
  
    - onkeypress  ;按下字符键触发

	- onkeydown   ;按下任意键触发

    - altKey  ; ctrlKey; shiftKey;   (输出true或者false)

    - keyCode  ;判断是否按了某个键


#### 事件流
    - 事件流的三个阶段：捕获，目标，冒泡
	- 阻止冒泡：evt.cancelBubble =true


    - 事件委托机制 :利用事件冒泡的原理，把本应添加给某元素上的时间委托给他的父级（外层）


#### 事件默认行为
  
  - 概念: JavaScript事件本身所具有的属性，例如a标签的跳转吗，Submit按钮的提交，右键菜单，文本框的输入等

  - 阻止默认行为
      - evt.preventDefault()
	  - return false
	  - evt.returnValue =  false
	  - oForm.onsubmit  ；阻止按键输入
	  - aInput[0].onkeydown ；阻止输入
	  - document.oncontextmenu ;阻止右键


### DOM 2级事件

   - 添加事件监听器 :addEventListener(事件名，处理函数，布尔值)
   - 移除事件监听器 :removeEventListerner（事件名，处理函数）
   - 如果是普通事件 : outer.onclick = null

---


### HTTP协议 cookie
   - HTTP: 超文本传输协议，用于从web服务器传输超文本到本地浏览器的传输协议，它是一个无状态的协议

   - cookie: 是指缓存在本地客户端的数据

### cookie的基本操作
   - cookie的基本操作包括增，删，改，查四个部分

   - 新增:document.cookie = "usename = honny"
```
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+3);
	document.cookie = "useName = honny;expire="+oDate;
```
   - 查看:console.log(document.cookie)
   - 修改:document.cookie = "usename = honny";  document.cookie = "usename = honny1";
   - 删除:
```
var oDate = new Date();
			oDate.setDate(oDate.getDate()-2);
			document.cookie = "useName = honny;expire="+oDate;
```

#### cookie的封装

   - setCookie(name,value,day)
   - getCookie（name）
   - removeCookie(name)



### 正则表达式

   - 概念: 正则表达式是由普通字符及特殊字符组成的对字符串进行过滤的逻辑公式

   - 创建方式
       1. 字面量的方式 `var reg = /abc/;`
	   2. 构造函数   ` var reg = new RegExp("abc")`
	   3. test方法  正则表达式的方法(用来检测字符串是否含有符合规则的子串有既true) `dvar flag =reg.test(str);`
 
   - 修饰符
       - g；表示全局匹配
	   - i; 忽略大小写
	   - match方法 ，字符串方法  `console.log(str.match(reg))`
	   - search方法；用于查找符合规则的子串的位置，只返回第一个匹配的位置
	   - exec方法；将匹配成功的内容加到数组里，如果没有匹配成功，则返回null

   - 特殊字符
      1. `. `除了换行符之外的所有单0个字符
	  2. ` *. ` 重复多次匹配，匹配任意次（0-n）
	  3. `+` 至少有一次重复匹配
	  4. `?` 进行0或者一次匹配
	  5. `[]`表示可以出现的范围[0-9]
	  6. `\w` 数字字母下划线等同于[0-9a-zA-Z_]; `\W`:非数字字母下划线
	  7. `\d` 表示数字，等同于[0-9]  ;`\D` 表示非数字
	  8.  `\s`  匹配空格
	  9. ` {m,n} `//至少匹配m次，至多匹配n次;{m,}至少m次；{m}m次
	  10. ` /^匹配开始$/匹配结束 `
	  11. ` |或 `
	  12. ` ()`分组 将内容作为一个整体进行匹配;`console.log(RegExp.$1)` 获取括号内的值
	  13. $1 $2
		```
		var reg = /(.*)\s(.*)/;
		var str ="taobao baidu";
		console.log(str.replace(reg,"$2 $1"));
	    ```


### ES6

   - let的使用
      - 用来声明变量。它的用法类似var，但是所声明的变量，只在let命令所在的代码块内有效
	  - 存在块级作用域{}
	  - 不存在声明提升
	  - 不允许重复声明（包括普通变量和函数变量）
	  - const的使用
	  - 用来声明常量，不要试图改变常量的值，其他语法参照let
 
   - 解构赋值:按照一定模式，从数组和对象中提取值，对变量进行赋值


   - 模板字符串
      - 将变量或者表达式直接嵌入字符串
	  - 使用反引号（``）拼接多行字符串

   - 箭头函数 
      - 只有一个表达式
	  - 含有多条语句
	  - this的指向问题 

   - set结构
       - ` let set = new Set([1,2,3,4,4]);  // 构造函数，值不重复 `
	   - ` [...set]//...扩展运算符，将类数组对象转换以逗号分隔的序列 `
	   - for of //遍历
	   - set.size //长度  set.add(0), set.delete(0);set.has(0);set.clear();
	   - keys : 返回键名的遍历器
	   - values():返回键值的遍历器
	   - entries():返回键值对的遍历器
	   - forEach(value,key):使用回调函数遍历每个成员

   - map 结构

       - `map.set(1,1);`
	   - map.set(key,value);map.get(key);map.delete(key);map.has(key);map.clear();
	   - 其他同理set


   - 生成器函数

   - 类（class）


## 2020/9/20
---

#### JS 动画
    
   1.边缘碰撞测试
   - function move()函数
   - document.querySelector()

   - opacity
   - cursor:pointer; 鼠标放上去显示手标



#### 继承和闭包

   - 类的继承
       - 父类和子类
	   - 方法重写
 
   - UML表示类
   - UML表示继承

   - 原型prototype
   - `__proto__`


#### Ajax
   - Ajax全称 : Asynchronous JavaScript And XML
   - 是一种异步加载数据的技术
   - 可以通过使用Ajax，来实现页面的局部刷新

   - AJAX优缺点
	    - 优点: 1,无需刷新网页就可以与服务器进行通信; 2,允许根据用户事件来更新部分页面内容
			- 缺点: 1,没有浏览历史,不能回退; 2,存在跨域问题; 3.对seo不太友好

   - xml 可扩展标记语言
	    - 用来传输和储存数据

   - Ajax的核心对象:XMLHttpRequest
   - GET
   - POST

   1. 回调地狱、Promise（三种状态:pending、fulfill、reject状态）
       - promise构造函数，有一个参数，这个参数是一个回调，这个回调，接收两个参数，这两个参数，都能够改变
	   - promise对象的状态，第一个参数，可以将状态从pending===>fulfill,而第二个参数，可以将状态从pending===》reject
   2. Ajax的同源策略
 

   - 同源策略
   - 解决跨域问题
       1. JSONP
	   2. CORS

#### JSON 

   - Javascript Object Natation,是一种轻量级的数据交换格式
   - JS对象的子集，与JS无缝对接
   - JSON数据和JS对象的转换
      - JSON→JS:JSON.parse(data);
	  - JS→JSON：JSON.stringify(JSObj)
   
   
   
---

### jQuery
   
   - 选择器 $
   - 属性
      1. html
	  2. val
	  3. prop
	  4. attr
	  5. addClass/removeClass/hasClass/toggleClass
   - 动画
      1. show/hide
	  2. fadeIn/fadeOut
	  3. slideUp/slideDown
	  4. animate/stop

   - 遍历
      1. childern
	  2. parent
	  3. parents
	  4. find
	  5. next
	  6. prev
	  7. siblings


   - eq()选择元素
   - 
      ``` decodeURIComponent('%E9%BB%84%E5%BF%A0')
      "黄忠"
     ```` 
	 
   - event

   - off ` $('li:eq(3)').off('mouseover') `

   - append&appendTo

   - prepend
   - after
   - insertAfter

   - empty 删除节点内容
   
   
#### plugin

   - jquery的插件，定义在jQery.fn的基础上
   - 解决命名冲突
   - 循环jqery对象中的每个元素
   - 在函数中，将jqery返回（this）

   - $.fn.extend


### AJAX 实例 express

   - AJAX 基于express 相关案例
	 - 请求报文
	    - 行  POST /s?ie=utf-8 HTTP/1.1
			- 头 
			   - Host: atguigu.com
				 - Cookie: name=guigu
				 - Content-type: application/x-www-form-urlencoded
				 - User-Agent: chrome83
			- 空行
			- 体  username=admin&passwordl=admin 
   - 响应报文
	    - 行 HTTP/1.1 200 OK
			- 头 
			   - Content-type: text/html;charset=utf-8
				 - Content-length: 2048
				 - Content-encoding:gzip
      - 空行
			- 体 `<head> <body> <h1>内容</h1></body></head>`
			

   - AJAX 发送请求案例
	    - 创建express对象 
			```
			  const { response } = require('express');
			  
			  //1.引入express
			  const express = require('express');
			
			const { ArgumentOutOfRangeError } = require('rxjs');
			
			  //2.创建应用对象
			  const app = express();
			  
			  //3.创建路由规则
			  app.get('/server', (request, response) => {
			    //设置响应头 设置允许跨域
			    response.setHeader('Access-Control-Allow-Origin','*');
					//响应头 自定义
					    response.setHeader('Access-Control-Allow-Header','*')
			    //设置响应体
			    response.send('hello AJAX')
			  });
			
			  //4.监听窗口启动服务
			  app.listen(8000, () =>{
			    console.log('服务启动');
			  })
			```
			- get请求设置参数
			```
			<!DOCTYPE html>
			<html lang="ch">
			
			<head>
			  <meta charset="UTF-8">
			  <title>AJAX get 请求</title>
			  <style>
			    #result {
			      width: 200px;
			      height: 100px;
			      border:solid 1px #90b;
			    }
			  </style>
			</head>
			<body>
			  <button id= 'button'>点击发送请求</button>
			  <div id="result"></div>
			<script>
			  const btn = document.getElementsByTagName('button')[0];
			  const result = document.getElementById('result');
			  btn.onclick = function(){
			    //1.创建对象
			    const xhr = new XMLHttpRequest();
			    //2.初始化 设置请求方法和url
			    xhr.open('GET','http://127.0.0.1:8000/server');
			    //3.发送
			    xhr.send();
			    //4. 事件绑定 处理服务端返回的结果
			    //readystate 是xhr对象中的属性,表示状态 0,1,2,3,4
			    xhr.onreadystatechange = function() {
			      //判断 服务端返回了所有的结果
			      if(xhr.readyState === 4) {
			        //判断相应状态码 200 404 403 401 500
			        // 2xx 成功
			        if(xhr.status >= 200 && xhr.status <300) {
			          //处理结果 行 头 空行 体
			          //1.响应行
			          console.log(xhr.status);//状态码
			          console.log(xhr.statusText);//状态字符串
			          console.log(xhr.getAllResponseHeaders());//所有相应头
			          console.log(xhr.response);//响应体
			
			          //设置result 的文本
			          result.innerHTML = xhr.response;
			        }else{
			        }
			      }
			    }
			  }	
			</script>
			</body>
			</html>
			```
			
#### post请求

   - post
	 ```
	 <script>
	     const result = document.getElementById('result');
	     result.addEventListener('mouseover',function(){
	       //1.创建对象
	     const xhr = new XMLHttpRequest();
			 //设置响应体类型 即将JSON转换为对象
			 xhr.responseType = "json";
	     //2.初始化 设置类型和url
	     xhr.open('POST','http://127.0.0.1:8000/server');
			 //设置请求头
			 xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
	     //3.发送
	     xhr.send('a:100&b:200');
	     //4.事件绑定
	       xhr.onreadystatechange = function(){
	         //判断状态
	         if(xhr.readyState ===4 ){
	             if(xhr.status >=200 && xhr.status <300){
	                 //处理服务端返回的结果
	                 result.innerHTML = xhr.response;
	             }
	         }
	       }
	     })
	     
	   </script>
	 ```

####
   - 安装nodemon 自动重启express
	 - `npm install -g nodemon` 安装
	 - `nodemon server.js` 启动

   - 相关方法
	    - abort
			- 网站BootCDN
			- crossorigin="anonymous" 跨域警示取消


   - 跨域
	 - 同源策略


## 2020/10/14 Vue
---

#### Vue是一个渐进式的框架
 
   - 特点
      1. 解耦视图和数据
	  2. 可复用的组件
	  3. 前端路由技术
	  4. 状态管理
	  5. 虚拟DOM

#### MVVM

   - view层
      1. 视图层
	  2. 在我们前端开发中，通常就是DOM层
	  3. 主要作用是给用户展示各种信息

   - Model层
      1. 数据层
	  2. 数据可能是死数据，更多来自服务器，从网络上请求下来的数据
	  3. 在我们计数器的案例中，就是后面抽取出来的obj，当然里面数据可能没有那么简单

   - VueModel层
      1. 视图模型图
	  2. 视图模型层是View和Model沟通的桥梁
	  3. 一方面它实现了Data Binding ，也就是数据绑定，将Model的改变实时的反应到view中
	  4. 另一方面它实现了DOM listener，也就是DOM 监听，当DOM发生一些事件（点击，滑动），可以监听到，并在需要的情况下改变对应的Data



    - Mustache语法  胡须（也就是双大括号）



    - v-once
		- v-html
		- v-text
		- v-pre 原值显示
		- v-clock 斗篷


#### 绑定指令 v-bind

   - 对象语法 :class='{类名:boolean}'


   - 事件监听
			- @click.stop
			- @click.prevent

   - 编程范式：
     命令式编程/声明式编程
	   面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
		 
	 - 高阶函数
      - filter(function(n){})
			   - filter中的回调函数有一个要求，必须返回一个boolean值
				 - 当返回true时，函数内部会自动将这次回调的n加入到新的数组中
				 - 当返回false时 函数内部会过滤掉这次n
			
			- map
			   -  map函数的使用
				 ```
				 let xx = newNums.map(function(n){
					 return n*2
				 })
				 ```
				 
			- reduce(function(prevalue,value){},参数2)
			```
			let total = new2Nums.reduce(function(prevalue,n){
								 return preValue + n
			},0)
			```

   - v-model双向绑定

   - v-model.lazy

   - v-model.number

   - v-moder.trim

   - multiple

---

### 组件化

   - 思想:可以将一个完整的网页分成多个组件；每个组件都用于实现页面的一个功能块；每一个组件又可以进行细分
   - 数据结构：数组/栈/堆/链表/树结构

   - vue的组件化思想
	    - 组件化是vue.js中的重要思想
			   - 它提供了一种抽象，让我们可以开发出一个个独立可服用的小组件来构造我们的应用
				 - 任何的应用都会被抽象成一颗组件树

   - 组件的使用步骤
	    1. 创建组件构造器 Vue.extend()
			2. 注册组件 Vue.component()
			3. 使用组件


   - 父子组件的通信
	    1. 父组件 => pass props 子组件
			2. 子组件 => $emit Events 父组件


---
####  插槽 slot

	 - 基本使用slot
	 - 
   - 具名插槽


#### 编译的作用域  

   - 查询 Stack Overflow
   - Vue实例内的作用域
	 -  父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译
	 -  

#### 作用域插槽
   - 父组件替换插槽的标签，但是内容由子组件来提供

   - 常用的模块化规范
	     1. CommonJS
			 2. AMD
			 3. CMD
			 4. ES6的modules


#### 模块化

   - export default


#### Webpack
   - 是现在的javascript应用的静态模拟打包工具
   - 依赖node环境 需要先下载node npm(node packages manager)
	    - 安装: npm install webpack@3.6.0 -g
			- npm init

   - grunt/gulp/webpack/rollup
   - dist (distribution 发布) 
	 - webpack ./src/main.js ./dist/bundle.js
	 - webpack动态获取路径 需要创建一个webpack.config.js文件
   ```
	 const path = require('path')
	 module.exports={
		 entry:'./src/main.js',
		 output:{
			 path:path.resolve(__dirname,'dist')
			 filename:'bundle.js',
			 publicPath:'dist/' 涉及url的图片会自动拼接上dist
		 }
	 }
	 ```
	    - npm init 初始化
	    - npm install 增加依赖

  - 输入 npm install webpack@3.6.0 --save--dev  devDependencies 开发时依赖
	- dependencies 运行时依赖

  - npm install webpack@3.6.0 --save-dev 开发时依赖


  - npm install vue-loader vue-template-compiler --save-dev

   - 省略扩展名 在resolve文件中添加 `extensions:['.js','.css','.vue']`
#### webpack扩充 loader

   ```
	 //使用commonjs的模块化规范
	 const path = require('path');
	 //2.使用es6的模块化规范
	 module.exports = {
	 	entry: './src/main.js',
	 	output:{
	 		path:path.resolve(__dirname,'dist'),
	 		filename:'bundle.js'
	 	},
	 	module:{
	 		rules: [
	       {
	         test: /\.css$/,
	         use: [ 'style-loader', 'css-loader' ]
	       }
	     ]
	 	}
	 }
	 ```
	 
	 - file-loader
   - publicPath:'dist/'	 

#### Plugin 

   - 加入插件 现在webpack.config.js 文件中导入webpack
	 ```
	 module.export = {
		 ...
		 plugins: [
			 new webpack.BannerPlugin('最终版权归xxx所有'),
			 new HtmlWebpackPlugin({
				 template:'index.html' 模板
			 })
		 ]
	 }
	 ```
	 - `npm install html-webpack-plugin --save--dev`
---
#### Vue CLI （command-Line Interface）

   - vue init webpack project

   - vm.options.template   =>(parse)=>   'ast'    =>(compiler)=> 'f(x),render(function)' => 'virtual dom' =>ui

   - vcs ->version control system(版本控制git/svn)

   - vue ui

   - git add .   git status  git comit -m '修改配置文件'


##### 箭头函数


##### vue-router

   - 通过互联的网络把信息从源地址传输到目的地址的活动
       - 路由是决定数据包从来源到目的地的路径
			 - 转送将输入端的数据转移到合适的输出端

   - 后端渲染 : jsp java server paga
      
   - 后端路由 
	    - 后端处理url和页面之间的映射关系 
      - 缺点：1整个模块由后端人员编写和维护，2前端人员必须要会PHP和JAVA等语言编写页面代码，3HTML和数据以及对应的逻辑混在一起，编写维护很麻烦

   - 前后端分离
      - 后端只负责提供数据，不负责任何界面的内容

   - 前端渲染:浏览器中显示的网页大部分内容，都是由前端写的Js代码在浏览器中执行，最终渲染出来的网页

   - 单页面富应用阶段SPA
	    - 其实spa最主要的特点就是在前后端分离的基础上加了一层前端路由
			- 也就是前端来维护一套路由规则

   - SPA (simple page web application)
      - 整个网页只有一个html页面
			- 在前后端分离的基础上加了一层前端路由
			- 也就是其前端来维护一套路由规则
			- 改变url，但是页面不刷新


   - location.hash
	 - history.pushState({},'','home')
	 - history.replaceState({},'','home') 不可返回

####安装使用

   - npm install vue -router --save


   - router-link
		   - tag
			 - replace
			 - linkActiveClass = active
    
		
	 - 动态路由
       - this.$router.push(replace)
			 - this.$route.param.useId

   - 懒加载:用到时再加载
			- ADM写法:   const About = resolve =>(['../components/About.vue'],resolve);
      - const Home = => import('../components/Home.vue');

   - 路由的嵌套
	    - children


   - 传参的方式
	    - params/query
		
		
		- url 
		   - scheme://host:port/path>query#fragment

   - 导航守卫
		   - created
			 - mounted
			 - updated
			 - destroyed
			 - active
	```
	router.beforeEach((to,from,next) =>{
	  document.title = to.matched[0].meta.title,
	  next()
	})
	
	router.afterEach((to,from) =>{
	  
	})
	```
	
   - keep-alive
	    - activated ; deactivated 只有在keep alive状态下才有用

   - Vuex 


   - devtools 插件

	 - mint-ui/iview

### VueX 状态管理模式

   - vuex集中储存室管理所有组件的状态
	 - 单一状态树 ：单一数据源

### axios 

   - 并发请求 `axios([])`
	    - `axios.spread((res1, res2) ={})`
   - BaseURL 设置全局配置
	    - `axios.defaults.baseURL = 'http://...'`
			- `axios.defaults.baseURL = 5000 ` 设置超时
   - 创建axios实例
	    - `const instance = axios.create({})`
   - axios的拦截器 
	 ```
	 instance.interceptor.request.vue(config =>{
		 console.log(config);
		 return config
		},err =>{
			console.log(err)
		}
	 })
	 ```
   - 响应拦截
	 ```
	 instance.interceptors.response.use(res =>{
		 console.log(res)
		 return res.data 
	 },err =>{
		 console.log(err)
	 })
	 ```

### 新项目 

   1. 划分目录结构
	 2. 引用两个CSS文件
	 3. vue.config.js(别名) 和editorconfig
	 4. 项目的模块划分:tabbar 路由关系


#### 首页开发 
   - navbar 网络数据的请求 轮播图 推荐
	 - FeatureView
	 - TabControl
	 - 首页商品数据的请求
	    - 设置数据结构，用于保存数据
			- 发送请求数据
   - 对商品数据进行展示
	    - 封装goodslist组件 
			- 封装goodsListItem组件
   - 重构better-scroll
	 - 回到顶部 BackTop
	    - 监听组件点击 .native
			- backtop组件的显示和隐藏
   - 解决首页可滚动距离的问题
	 - 上拉加载更多
	 - 监听滚动，动态改变tabControl的样式
	    - 监听HomeSwiper中的img的加载 用isLoad变量进行状态的记录
	    - 在最上面多复制一份tabControl组件对象 监听滚动位置 动态显示
   - 让Home保持原来的状态 不销毁
	    - keep-alive
			- 让home保持原来的位置 avtivated deactivated


#### 详情页开发

   - 判断一个对象是否为空 `v-if = "Object.keys(goods).length !==1"`
	 - 联动效果
	 - `this.$nextTick(()={})`
	 - 最大值 `Number.MAX_VALUE`
	 - 
	 - 思路
	    1. 点击商品加入详情页
			2. 解决- 首页保持位置状态
			3. 详情页的导航栏实现
			4. 请求详情的数据
			5. 轮播图的实现
			6. 商品基本信息的展示
			7. 店铺信息的展示
			8. 商品图片的展示
			9. 参数信息的展示
			10. 评论数据的展示
			11. 推荐数据的展示
			12. `mixin`的使用
			13. 处理2个bug
			14. 详情和内容的联动效果
			   - 点击标题，滚动到对应的主题
				 - 内容滚动 显示正确的标题
      15. 顶部工具栏的封装
			16. 详情页回到顶部
			17. 点击购物车
			   - 监听加入购物车按钮的点击；并且获取商品信息
				 - 将商品添加到Vuex中
      18. 购物车的展示
			   - 购物车导航栏的展示
			   - 购物车商品的展示
			   - 商品的选中和不选中切换
				 - 底部工具栏的汇总
      19. 映射关系
			   - actions可以返回一个Promise
				 - `mapActions的映射关系   ...mapAction(['addCart'])`

#### better-scroll
   - `const bscroll = new BScroll(el, { })`
	 - 结构 wrapper > content > 内容
	 - 监听滚动
	     - probeType:0 1 2(手指滚动) 3(只要是滚动)
			 - `bscroll.on('scroll', (position) => {})`
   - 上拉加载
		   - pullUpLoad: true
			 - `bscroll.on('pullingUp', () =>{})`
   - click: true  元素可以监听 点击

   - 解决better-scroll滚动问题
	    - 监听图片加载完成 `@load="方法"`
   - 事件总线 
	    - 在main.js Vue原型创建  `Vue.probeTyle.$bus = new Vue()`  
	    - `this.$bus.$emit('事件') ; this.$bus.on('接收事件')`
	 

#### 项目相关

   - 配置别名 创建 vue.config.js文件

	 ```
		module.exports = {
		  configureWebpack: {
		    resolve: {
		      alias: {
		        'assets' :@/assets
		      }
		    }
		  }
		}
	 ```
	
	

   - .editorconfig文件 相关配置设置
   - .监听组件点击事件要加上native

   - 防抖操作(debounce)
  ```
	debounce(func,delay) {
	       let timer = null
	       return function (...args) {
	         if(timer) clearTimeout(timer)
	         timer = setTimeout(() =>{
	           func.apply(this,args)
	         },delay)
	       }
	     },
	```
	
   - 所有组件都有一个属性$el：用于获取组件中的元素

   - 服务器返回时间 会以Unix时间元年为起点，返回对应的时间戳1535694719(秒)
	    1. const data =new Data(1535694719*1000)
			2. data => FormatString
			3. fmt.format(data,'yyyy-MM-dd hh:mm:ss') 年月日小时分钟秒  时间格式化
			4. $nextTick  图片高度没有计算在内
			5. Number.MAX_VALUE 最大值


   - mapGetters 将getters放到计算属性中的使用方法；2:或者对象语法
 ```
 ...mapGetters([
       'cartLength',
       'cartList'
     ])
 ```
		

  

   - fastClick 减小点击延迟 300ms延迟
	 - polyfill 补丁

   - 图片懒加载lazyload Vue  修改img:src =>v-lazy

   - px转化成vw的webpack插件 px2vw插件
	 - npm install postcss-px-to-viewport --save-dev


   - 服务器 (主机) window/Linux=>tomcat/nginx(软件)
	    1. 将自己电脑作为服务器windows
			2. 远程部署Mac


   - 远程部署
	 - ubantu
   - 远程主机 =>linux centos => nginx
	 - WinSCP SecureCRT

#### 时间戳 data-> ForMatString

   - 服务器返回时间会以unix元年为起点返回对应的时间戳
      1. 将时间戳转换成Data对象
			2. 将data进行格式化,转成对应的字符串
			3. fmt.format(data, 'yyyy-MM-dd:mm:ss')


#### 混入mixin

   1. 创建混入对象 `const mixin = {}`
	 2. 组件对象中使用 mixins:[mixin]
---
   - 面试题 Vue的响应式原理
	     1.Vue内部如何监听Message数据发生改变？
			     - object.defineProperty => 监听对象属性的改变
			 2.当数据发生改变的时候，Vue如何知道要通知哪些数据，界面发生刷新？
					 -发布订阅者模式
					 
		
#### 购物车

   - 数组函数 find  `let oldProduct = state.cartList.find(item => item.iid === payload.iid)`

   - 使用 mapGetters `import {mapGetters} from 'vuex' 注意: 是在vuex中导入
 	 ```
	 在getters.js文件导出
	 export default {
	   cartLength(state) {
	     return state.cartList.length
	   },
	   cartList(state) {
	     return state.cartList
	   }
	 }
	 
	 在组建中使用
	 computed: {
	     ...mapGetters(['cartLength','cartList']),
	 
	   }
	 ```
	 
#### toast  插件封装方式

   1. 创建一个js文件
   ```
	 import Toast from './Toast'
	 
	 const obj = {}
	 
	 obj.install = function (Vue) {
	   // 1.创建组件构造器
	   const toastContrustor = Vue.extend(Toast);
	 
	   // 2.new的方式，根据组件构造器，可以创建出来一个组件对象
	   const toast = new toastContrustor()
	 
	   // 3.将组件对象手动挂载到某一个元素上
	     toast.$mount(document.createElement('div'));
	 
	   // 4.toast.$el对应的就是div
	   document.body.appendChild(toast.$el)
	 
	   Vue.prototype.$toast = toast;
	 }
	 
	 export default obj
	 ```
	 2. 挂载到`main.js` 上 并且使用 `Vue.use(toast)`


#### fastclick 解决移动端300ms延迟

   1. 安装   `npm install fastclick --save`
	 2. 在main.js中导入  `import FastClick from 'fastclick'`
	 3. 调用  `FastClick.attach(document.body)`


#### 图片懒加载 用到时再加载

   1. 安装  `npm install vue-lazyload --save`
	 2. 导入 `import VueLazyLoad from 'vue-lazyload'`
	 3. 使用 `Vue.use(VueLazyLoad, {loading:'导入图片', error:''})`
	 4. 修改img中  `:src -> v-lazy`


#### px2vw webpack插件

   1. 安装插件 `npm install postcss-px-to-viewport --save-dev`
	 2. 修改`postcss.config.js`文件

	 ```
	 module.exports = {
		 plugins: {
			 autoprefixer: {},
			 "postcss-px-to-viewport": {
				 viewportWidth: 375, //视窗的宽度，对应的是我们设计稿的宽度(retina 750 高清)
				 viewportHeight: 667, //视窗的高度，对应的使我们设计稿的高度（也可以不配置）
				 unitPrecision: 5,  //指定'px' 转换成是床单位置的小数位数(很多时候无法整除)
				 viewportUnit: 'vw', //指定需要转换成视窗单位，建议用vw
				 selectorBlackList:['ignore', 'tab-bar', 'tab-bar-item']// 指定不需要转换的类
				 minPixeValue: 1, //小于或者邓毅'1px' 不转换成视窗单位
				 mediaQuery: false, //允许在媒体查询中转换'px'
				 exclude:[/TabBar/]  //不转换
			 }
		 }
	 }
	 ```
	 
#### Vue响应式原理 及其依赖技术的分析

   1. app.message修改数据，vue内部是如何监听message数据的改变
      - Object.defineProperty -> 监听对象属性的改变

			```
				const obj = {
					message:'哈哈哈',
					name:'zhangsan'
				}
				
				Object.keys(obj).forEach(key => {
					let value = obj[key]
					
					Object.defineProperty(obj, key, {
						set(newValue) {
							consolo.log('监听' + key +'改变' )
							//根据解析html代码， 获取到哪些人有用属性
							value =  newValue
						},
						
						get() {
							console.log('获取' + key + '对应的值')
							//张三李四 调用get
							return value
						}
					})
				})
			```
   2. 当数据发生改变，Vue如何做到要通知哪些数据，界面发生刷新
	    - 发布订阅者模式

      ```
			//发布者
			class Dep {
				constructor() {
					this.subs = []
				}
				
				addSub(watcher) {
					this.subs.push(watcher)
				}
				
				notify() {
					this.subs.forEach(item => {
						item.update()
					})
				}
			}
			//订阅者
			class Watcher {
				constructor(name) {
					this.name = name;
				}
				
				updata() {
					
				}
			}
			
			const dep = new Dep()
			const w1 = new Watcher('zhangsan');
			dep.addSub(w1)
			
			dep.notify()
			```
			
			
### Git 分布式版本控制
   - 先卸载 直接反安装,然后清理环境变量

   1. 下载对应版本 慢的话可以淘宝镜像下载
	    - https://npm.taobao.org/mirrors/git-for-windows/

   2. 下载完Git，菜单下有三个程序
	    - Git Bash : Unix与Linux风格的命令行，使用最多，推荐最多
			- Git CMD  : Windows风格的命令行
			- Git Gui  : 图形假面Git， 不建议初学者使用，先熟悉常用命令

   3. 常见Linux命令
	    - cd:改变目录
			- cd .. 回退到上一个目录, 直接 cd进入默认目录
			- pwd: 显示当前所在目录的路径
			- ls(||) : 列出当前目录中的所有文件，只不过两个||内容更为详细
			- touch : 新建一个如 touch index.js 就会在当前目录下新建一个index.js文件
			- rm : 删除一个文件, rm index.js 就会删除index.js文件
			- mkdir: 新建一个目录. 就是新建一个文件夹
			- rm-r : 删除一个文件夹, rm -r src 删除src目录
			- mv 移动文件, mv index.html src index.html 就是我们要移动号的文件,src是目标文件夹，当然，这样写必须文件夹在同一个目录下
			- reset 重新初始化终端/清屏
			- clear 清屏
			- history 查看命令历史
			- help 帮助
			- exit 退出
			- #表示注释

   4. Git相关配置
	    - git config -l 查看配置
			- git config --system --list 查看系统配置
			- git config --global --list 本地配置
			- git config --global user.name "sunwukong" #名称
			- git config --global suer.email  #邮箱

   5. git工作区域 基本理论  git add files -> git  commit -> git push   ; git pull -> git reset -> git checkout  
	    - WorkSpace: 工作区，平时存放项目代码 
			- Index/Stage :暂存区，用于临时存放你的改动，实际上就是一个文件，保存即将提交到文件的列表信息
			- Repository : 仓库区（本地仓库），就是安全存放数据的位置，这里面有你提交到所有版本的数据。其中HEAD指向最近放入仓库的版本
			- Remote : 远程残酷，托管代码的服务器， 可以简单的认为是你项目组中的一台电脑，用于数据交换

   6. 项目搭建
	    - git init 本地初始化项目
			- git clone [url] 克隆远程目录

#### 使用码云

   - 配置 ssh公钥 免登入
	    - C:\Users\user\.ssh 目录 
			- ssh-keygen -t rsa

#### git 分支操作

   - git branch 列出所有本地分支
	 - git branch -r 列出所有远程分支
	 - git branch [branch-name] 新建一个分支 但依然停留在当前分支
	 - git checkout -b [branch] 新建一个分支 并且切换到该分支
	 - git branch -d [branch-name] 删除分支
	 - git checkout [branch-name] 切换到指定分支 并且更新工作区
	 - git checkout - 切换到上一个分支
   - 删除远程分支
	    - git push origin --delete [branch name]
	    - git branch -dr [remote/branch]
   - git merge [branch] 合并指定分支到当前分支