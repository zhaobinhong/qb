
<h3 id="item-1">前言</h3>
<p>本来在另一篇里已经写了一点了，不知为啥，我再编辑更新内容一直保存不了，无奈只能再新创建一篇文章了。</p>
<h3 id="item-2">SVG简介</h3>
<p><strong>什么是SVG：</strong> SVG 指可伸缩矢量图形 (Scalable Vector Graphics) SVG 用来定义用于网络的基于矢量的图形 ，SVG 使用 XML 格式定义图形 。SVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失。</p>
<p><strong>SVG 的历史和优势：</strong><br>在 2003 年一月，SVG 1.1 被确立为 W3C 标准。</p>
<p>参与定义 SVG 的组织有：Sun公司（已被Oracle公司收购）、Adobe、苹果公司、IBM 以及柯达。</p>
<p>与其他图像格式相比，使用 SVG 的优势在于：</p>
<ul>
<li>SVG 可被非常多的工具读取和修改，比如记事本。</li>
<li>SVG 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性更强。</li>
<li>SVG 是可伸缩的 SVG 图像可在任何的分辨率下被高质量地打印。</li>
<li>SVG 可在图像质量不下降的情况下被放大。</li>
<li>SVG 图像中的文本是可选的，同时也是可搜索的（很适合制作地图）</li>
<li>SVG 是开放的标准</li>
<li>SVG 文件是纯粹的 XML</li>
<li>Flash 相比，SVG 最大的优势是与其他标准（比如 XSL 和 DOM）相兼容。而 Flash 则是未开源的私有技术</li>
</ul>
<h4>SVG元素</h4>
<ul><li>rect  :  <code>x="10" y="10" height="90" width="90" rx="5" ry="5"</code>
</li></ul>
<p>x,y就是矩形左上角坐标，rx，ry就是矩形的圆角宽高。<br><br></p>
<ul><li>circle ： <code>cx="50" cy="150" r="40"</code>
</li></ul>
<p>cx、cy就是圆心坐标，r是半径<br><br></p>
<ul><li>ellipse ：<code>cx="150" cy="150" rx="50" ry="30"</code>
</li></ul>
<p>cx、cy就是圆心坐标，rx、ry就是圆的长宽两个半径<br><br></p>
<ul><li>line：<code>x1="10"  y1="200" x2="10" y2="300"</code>
</li></ul>
<p>（x1,y1）是起点坐标，(x2,y2)是终点坐标。<br><br></p>
<ul><li>polyline：<code>points="80,320 130,320 95,400 80,320"</code>
</li></ul>
<p>points就是一系列的坐标点，从第一个点开始直线连接下一个点，直到结束。如果你想要图形封闭，可以把起始点再加在末尾。<br><br></p>
<ul><li>path: <code> &lt;path d="M50,50  A30,30 0 0,1 35,20  L100,100  M110,11 L100,0"  style="stroke:#660000; fill:none;"/&gt;   </code>
</li></ul>
<p>path元素的所有绘图都在d属性中指定。d属性包含绘制命令。上面的例子中，M发出“移至”命令，A发出“弧”命令，L发出“线段”命令。这些命令都作用在一个“虚拟画笔”。这支笔可以移动，绘制形状等。</p>
<p><a href="https://codepen.io/chenfengjuan/pen/erxJOp" rel="nofollow noreferrer" target="_blank">这是一个例子</a><button class="badge badge-light preview" data-url="chenfengjuan" data-param="erxJOp" data-typeid="0">点击预览</button></p>
<h4>SVG坐标系</h4>
<p>在SVG坐标系中，x=0,y=0点在左上角。与正常的图坐标系相比，y轴被反转。随着SVG中y的增加，点、形状等向下移动，而不是向上。</p>
<h3 id="item-3">D3简介</h3>
<p>D3 的全称是（Data-Driven Documents）, 顾名思义可以知道是一个被数据驱动的文档。D3.js是一个基于数据的操作文档的JavaScript库，可以让你绑定任何数据到DOM，支持DIV这种图案生成，也支持SVG这种图案的生成。D3帮助你屏蔽了浏览器差异，做出来图案的效果可以说是炫目得一塌糊涂，可是代码却很简洁。</p>
<h3 id="item-4">模块划分</h3>
<p>D3可以整个模块安装使用，也可以只安装你需要的模块<br>下面是我用过的几个模块<br>Arrays (Statistics, Search, Transformations, Histograms) <br>数组操作，排序，搜索，总结，统计数据，变换，直方图<br>Axes<br>创建坐标轴，以及坐标轴相关的设置，操作等。会创建相关dom元素<br>Brushes<br>刷子组件，选择区域用。会创建相关dom元素<br>Dragging<br>拖拽组件，用于实现拖拽事件<br>Scales (Continuous, Sequential, Quantize, Ordinal)<br>比例尺，会和坐标轴结合使用<br>Selections (Selecting, Modifying, Data, Events, Control, Local Variables, Namespaces)<br>选择集<br>Transitions<br>过渡组件，用来定义一些过渡效果<br>Zooming<br>缩放组件<br>Shapes (Arcs, Pies, Lines, Areas, Curves, Links, Symbols, Stacks)<br>数据集到几何数据的转换</p>
<h3 id="item-5">API</h3>
<h4>Arrays (d3-array)</h4>
<p>数组操作，排序，搜索，统计数据，变换，直方图<br>&lt;br/&gt;<br><strong>Statistics（统计）基本的统计数据方法</strong><br>下面这些方法的第二个参数都可以指定一个可选的访问器函数，这相当于在计算总和之前调用array.map（访问器）。 这些方法忽略未定义的和NaN值; 这对忽略缺失数据很有用。<br>&lt;br/&gt;</p>
<ul>
<li>d3.min -  d3.max(array)，d3.min(array)，返回数组的最小值</li>
<li>d3.max - d3.max(array)，返回数组最大值。</li>
</ul>
<p>与内建的Math.max不同，此方法忽略未定义的值; 这对忽略缺失数据很有用。 另外，使用自然顺序而不是数字顺序比较元素。 例如，字符串[“20”，“3”]的最大值是“3”，而数字[20,3]的最大值是20。</p>
<ul>
<li>d3.extent -  d3.extent(array)，把数组的最小最大值放在一个数组里返回</li>
<li>d3.sum -d3.sum(array)，返回一个数字数组的累计和</li>
<li>d3.mean - 回给定数字数组的平均值。</li>
<li>d3.median - 返回给定数组的中值。</li>
<li>d3.quantile - d3.quantile(array, 0.5)，返回给定数组的分位数。</li>
<li>d3.variance - 返回给定数组的总体方差。</li>
<li>d3.deviation - 返回给定数组的标准偏差。</li>
</ul>
<p>&lt;br/&gt;<br><strong>Search</strong><br>&lt;br/&gt;</p>
<ul><li>d3.scan</li></ul>
<p>扫描数组，按照比较器比较，返回最小值，类似于min方法。</p>
<div class="widget-codetool" style="display:none;">
        <div class="widget-codetool--inner">
        <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
        <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="var array = [{foo: 42}, {foo: 91}];
d3.scan(array, function(a, b) { return a.foo - b.foo; }); // 0
d3.scan(array, function(a, b) { return b.foo - a.foo; }); // 1" title="" data-original-title="复制"></span>
        </div>
        </div><pre class="hljs delphi"><code><span class="hljs-keyword">var</span> <span class="hljs-keyword">array</span> = [<span class="hljs-comment">{foo: 42}</span>, <span class="hljs-comment">{foo: 91}</span>];
d3.scan(<span class="hljs-keyword">array</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(a, b)</span> <span class="hljs-comment">{ return a.foo - b.foo; }</span>);</span> <span class="hljs-comment">// 0</span>
d3.scan(<span class="hljs-keyword">array</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(a, b)</span> <span class="hljs-comment">{ return b.foo - a.foo; }</span>);</span> <span class="hljs-comment">// 1</span></code></pre>
<ul>
<li>d3.ascending(a, b)</li>
<li>d3.descending(a, b)</li>
</ul>
<p>这两个都是排序的方法，结合array.sort()使用。<br>&lt;br/&gt;<br><strong>Transformations</strong><br>用于转换数组，生成新数组的方法</p>
<ul><li>d3.cross</li></ul>
<p>返回两个数组a和b的笛卡尔乘积</p>
<div class="widget-codetool" style="display:none;">
        <div class="widget-codetool--inner">
        <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
        <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="d3.cross([1, 2], [&quot;x&quot;, &quot;y&quot;]); // returns [[1, &quot;x&quot;], [1, &quot;y&quot;], [2, &quot;x&quot;], [2, &quot;y&quot;]]
d3.cross([1, 2], [&quot;x&quot;, &quot;y&quot;], (a, b) => a + b); // returns [&quot;1x&quot;, &quot;1y&quot;, &quot;2x&quot;, &quot;2y&quot;]" title="" data-original-title="复制"></span>
        </div>
        </div><pre class="hljs prolog"><code>d3.cross([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>], [<span class="hljs-string">"x"</span>, <span class="hljs-string">"y"</span>]); // returns [[<span class="hljs-number">1</span>, <span class="hljs-string">"x"</span>], [<span class="hljs-number">1</span>, <span class="hljs-string">"y"</span>], [<span class="hljs-number">2</span>, <span class="hljs-string">"x"</span>], [<span class="hljs-number">2</span>, <span class="hljs-string">"y"</span>]]
d3.cross([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>], [<span class="hljs-string">"x"</span>, <span class="hljs-string">"y"</span>], (a, b) =&gt; a + b); // returns [<span class="hljs-string">"1x"</span>, <span class="hljs-string">"1y"</span>, <span class="hljs-string">"2x"</span>, <span class="hljs-string">"2y"</span>]</code></pre>
<ul><li>d3.merge</li></ul>
<p>将指定的数组合并到一个数组中, 这种方法类似于内置的数组concat方法; 唯一的区别是当你有一个数组数组时，它更方便。</p>
<div class="widget-codetool" style="display:none;">
        <div class="widget-codetool--inner">
        <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
        <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="d3.merge([[1], [2, 3]]); // returns [1, 2, 3]" title="" data-original-title="复制"></span>
        </div>
        </div><pre class="hljs lua"><code style="word-break: break-word; white-space: initial;">d3.merge(<span class="hljs-string">[[1], [2, 3]]</span>); // returns [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]</code></pre>
<ul><li>d3.pairs(array[, reducer])</li></ul>
<p>对于指定数组中的每个相邻元素对，按顺序调用指定的传递元素i和元素i-1的reducer函数。</p>
<div class="widget-codetool" style="display:none;">
        <div class="widget-codetool--inner">
        <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
        <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="d3.pairs([1, 2, 3, 4]); // returns [[1, 2], [2, 3], [3, 4]]
d3.pairs([1, 2, 3, 4], (a, b) => b - a); // returns [1, 1, 1];" title="" data-original-title="复制"></span>
        </div>
        </div><pre class="hljs lsl"><code>d3.pairs([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]); <span class="hljs-comment">// returns [[1, 2], [2, 3], [3, 4]]</span>
d3.pairs([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], (a, b) =&gt; b - a); <span class="hljs-comment">// returns [1, 1, 1];</span></code></pre>
<h4>Selections (d3-selection)</h4>
<p><strong>Selecting Elements</strong><br>d3选择器对象，有两个属性：<code>_groups:Array(),_parents:Array()</code>。_groups里存的就是选中元素的dom对象</p>
<ul><li>d3.selection</li></ul>
<p><code>d3.selection() </code>返回选择根元素（html）的d3选择器对象</p>
<p><span class="img-wrap"><img referrerpolicy="no-referrer" src="/img/bVbbjHe" alt="clipboard.png" title="clipboard.png"></span></p>
<ul><li>d3.select</li></ul>
<p><code>d3.select('.block')</code>返回选择的元素的D3选择器对象</p>
<ul><li>d3.selectAll</li></ul>
<p><code>d3.selectAll('.block')</code> 返回匹配的所有的元素的数组<br>以上3个方法是d3的静态方法，下面这3个对应着相同的原型方法。</p>
<ul><li>selection.select</li></ul>
<p>为每个选定的元素选择一个匹配的后代元素。</p>
<ul><li>selection.selectAll</li></ul>
<p>为每个选定元素选择所有匹配的后代。</p>
<ul><li>selection.filter 过滤选定的元素，对每个选定元素执行filter方法</li></ul>
<div class="widget-codetool" style="display:none;">
        <div class="widget-codetool--inner">
        <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
        <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="var even = d3.selectAll(&quot;tr&quot;).filter(&quot;:nth-child(even)&quot;);
var even = d3.selectAll(&quot;tr:nth-child(even)&quot;);
var even = d3.selectAll(&quot;tr&quot;).select(function(d, i) { return i &amp; 1 ? this : null; });" title="" data-original-title="复制"></span>
        </div>
        </div><pre class="hljs actionscript"><code><span class="hljs-keyword">var</span> even = d3.selectAll(<span class="hljs-string">"tr"</span>).filter(<span class="hljs-string">":nth-child(even)"</span>);
<span class="hljs-keyword">var</span> even = d3.selectAll(<span class="hljs-string">"tr:nth-child(even)"</span>);
<span class="hljs-keyword">var</span> even = d3.selectAll(<span class="hljs-string">"tr"</span>).select(<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(d, i)</span> </span>{ <span class="hljs-keyword">return</span> i &amp; <span class="hljs-number">1</span> ? <span class="hljs-keyword">this</span> : <span class="hljs-literal">null</span>; });</code></pre>
<ul><li>selection.merge</li></ul>
<p>把已选定的组和另外指定的选择合并成一个选择器。但使用起来要注意，他不能把任意的两个选择合并。</p>
<ul><li>d3.matcher</li></ul>
<p>测试一个元素是否匹配给定的选择器，一般用来和filter结合使用<br><code>var div = selection.filter(d3.matcher("div"));</code></p>
<p>后面还有几个方法，就不一一说了，感觉很鸡肋，基本不用，就不说了。。。<br><strong>Modifying Elements</strong></p>
<ul>
<li>selection.attr - get or set an attribute.注意不能使用对象的形式一起传参数设置。</li>
<li>selection.classed - get, add or remove CSS classes.</li>
<li>selection.style - get or set a style property.</li>
</ul>
<div class="widget-codetool" style="display:none;">
        <div class="widget-codetool--inner">
        <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
        <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="d3.select('.block svg')
.attr('width',500)
.attr('height',500)
.classed('chart first', true)
.classed('chart', false)
.style('background','#f0f')
.style('border','5px solid #0ff')" title="" data-original-title="复制"></span>
        </div>
        </div><pre class="hljs less"><code><span class="hljs-selector-tag">d3</span><span class="hljs-selector-class">.select</span>(<span class="hljs-string">'.block svg'</span>)
<span class="hljs-selector-class">.attr</span>(<span class="hljs-string">'width'</span>,<span class="hljs-number">500</span>)
<span class="hljs-selector-class">.attr</span>(<span class="hljs-string">'height'</span>,<span class="hljs-number">500</span>)
<span class="hljs-selector-class">.classed</span>(<span class="hljs-string">'chart first'</span>, true)
<span class="hljs-selector-class">.classed</span>(<span class="hljs-string">'chart'</span>, false)
<span class="hljs-selector-class">.style</span>(<span class="hljs-string">'background'</span>,<span class="hljs-string">'#f0f'</span>)
<span class="hljs-selector-class">.style</span>(<span class="hljs-string">'border'</span>,<span class="hljs-string">'5px solid #0ff'</span>)</code></pre>
<ul><li>selection.property</li></ul>
<p>某些HTML元素具有特殊属性，这些属性不能通过属性或样式进行寻址，例如表单字段的文本值和复选框的选中布尔值。 使用此方法获取或设置这些属性。</p>
<ul>
<li>selection.text - get or set the text content.</li>
<li>selection.html - get or set the inner HTML.</li>
<li>selection.append</li>
</ul>
<p>在所选元素的后面添加一个子元素，并返回该元素的选择器对象</p>
<ul><li>selection.insert</li></ul>
<div class="widget-codetool" style="display:none;">
        <div class="widget-codetool--inner">
        <span class="selectCode code-tool" data-toggle="tooltip" data-placement="top" title="" data-original-title="全选"></span>
        <span type="button" class="copyCode code-tool" data-toggle="tooltip" data-placement="top" data-clipboard-text="d3.select('svg').insert('line','circle')" title="" data-original-title="复制"></span>
        </div>
        </div><pre class="hljs less"><code style="word-break: break-word; white-space: initial;"><span class="hljs-selector-tag">d3</span><span class="hljs-selector-class">.select</span>(<span class="hljs-string">'svg'</span>)<span class="hljs-selector-class">.insert</span>(<span class="hljs-string">'line'</span>,<span class="hljs-string">'circle'</span>)</code></pre>
<p>在svg里面的第一个匹配到<code>'circle'</code>的元素前面插入一个line元素。</p>
<ul>
<li>selection.remove - remove elements from the document.</li>
<li>selection.clone - insert clones of selected elements.</li>
<li>selection.sort - sort elements in the document based on data.</li>
<li>selection.order - reorders elements in the document to match the selection.</li>
<li>selection.raise</li>
</ul>
<p>按顺序重新插入每个选定元素，使这个选定元素作为其父项的最后一个子项。</p>
<ul><li>selection.lower</li></ul>
<p>按顺序重新插入每个选定元素，使这个选定元素作为其父项的第一个子项。</p>
<ul>
<li>d3.create - create and select a detached element.</li>
<li>d3.creator - create an element by name.</li>
</ul>
<p>&lt;br/&gt;<br><button class="badge badge-light preview" data-url="chenfengjuan" data-param="bMzJay" data-typeid="0">点击预览</button></p>
<p><strong>Joining Data</strong><br>绑定数据</p>
<ul><li>selection.data</li></ul>
<p>绑定一个数组到选择集上，数组的各项值分别与选择集的各元素绑定</p>
<ul><li>selection.enter</li></ul>
<p>返回缺失元素的选择集</p>
<ul><li>selection.exit</li></ul>
<p>返回缺失数据的元素选择集</p>
<ul><li>selection.datum</li></ul>
<p>绑定一个数据到选择集上<br>&lt;br/&gt;<br><a href="https://codepen.io/chenfengjuan/pen/KRYyoo" rel="nofollow noreferrer" target="_blank">数据绑定的例子</a><button class="badge badge-light preview" data-url="chenfengjuan" data-param="KRYyoo" data-typeid="0">点击预览</button></p>
<h4>Scales (d3-scale)</h4>
<p>一种计算关系，能够：将某一区域的值映射到另一区域，其大小关系不变。<br>这就是比例尺（Scale）<br>有哪些比例尺<br>比例尺，很像数学中的函数。例如，对于一个一元二次函数，有 x 和 y 两个未知数，当 x 的值确定时，y 的值也就确定了。<br>在数学中，x 的范围被称为定义域，y 的范围被称为值域。<br>D3 中的比例尺，也有定义域和值域，分别被称为 domain 和 range。开发者需要指定 domain 和 range 的范围，如此即可得到一个计算关系。</p>
<p>下面介绍两种最常用的比例尺：</p>
<p><strong>Continuous (Linear, Power, Log, Identity, Time)</strong><br>连续型比例尺包括线性比例尺，指数比例尺，对数比例尺，恒等比例尺，时间比例尺</p>
<ul><li>continuous</li></ul>
<p>计算一个给定的定义域值对应的值域的值，或者说给个x返回y。</p>
<ul><li>continuous.invert</li></ul>
<p>正好和上面的相反，给定一个y，返回x</p>
<ul><li>continuous.domain</li></ul>
<p>设置定义域</p>
<ul><li>continuous.range</li></ul>
<p>设置值域</p>
<ul><li>continuous.rangeRound</li></ul>
<p>和range同样，只是比range多一个功能，即启用舍入。</p>
<ul>
<li>continuous.clamp <br><code>x.clamp(true)</code><br>这个方法通俗点说就是：设置为true，当你输入的是domain范围外的值时，返回始终是range范围内的值，通常是range的边界值。对invert也同样；设置为false，输入的是domain范围外的值，返回可能是range的范围外的值。</li>
<li>continuous.interpolate</li>
</ul>
<p>设置输出插值器。<br>这个方法，主要是知道是插值器，留着以后说吧。</p>
<ul><li>continuous.ticks</li></ul>
<p><code>x.ticks(5)</code>设置比例尺的刻度的个数，默认是10个，当然count只是一个提示，具体个数还是取决于domain。返回的tick值是均匀间隔的，具有人类可读的值（例如10的幂的倍数）</p>
<ul><li>continuous.tickFormat</li></ul>
<p>用来设置刻度值的格式的，具体如何用还需要了解<code>locale.format</code>相关的，另外它需要和ticks结合使用。</p>
<ul><li>continuous.nice</li></ul>
<p>设置扩展domain成一个友好的整数。</p>
<ul><li>continuous.copy</li></ul>
<p>创建一个scale的副本。</p>
<p><strong>Ordinal (Band, Point)</strong><br><strong>scaleBand</strong></p>
<ul>
<li>d3.scaleBand 创建一个序数型的频带比例尺</li>
<li>band 输入一个定义域的值，返回对应的频带起点</li>
<li>band.domain 设置定义域</li>
<li>band.range  设置值域</li>
<li>band.rangeRound 设置值域和启用舍入</li>
<li>band.round 单独设置是否启用舍入</li>
<li>band.paddingInner 设置频带内间距</li>
<li>band.paddingOuter 设置起始和结束之外的间距</li>
<li>band.padding 把paddingInner和paddingOuter设置为一个值，一起设置。</li>
<li>band.align 设置频段对齐，如果有额外的空间。</li>
<li>band.bandwidth 获取每个频带的宽度。</li>
<li>band.step 获取相邻频段起点之间的距离。</li>
<li>band.copy 创建此比例的副本。</li>
</ul>
<p><span class="img-wrap"><img referrerpolicy="no-referrer" src="/img/bVbbjHl" alt="clipboard.png" title="clipboard.png"></span></p>
<p><a href="https://codepen.io/chenfengjuan/pen/NMmXxz" rel="nofollow noreferrer" target="_blank">一个柱状图</a><button class="badge badge-light preview" data-url="chenfengjuan" data-param="NMmXxz" data-typeid="0">点击预览</button></p>
<p>&lt;br/&gt;</p>
<h4>Axes (d3-axis)</h4>
<p>创建坐标轴，以及坐标轴相关的设置，操作等。会创建相关dom元素</p>
<ul>
<li>d3.axisTop - create a new top-oriented axis generator.</li>
<li>d3.axisRight - create a new right-oriented axis generator.</li>
<li>d3.axisBottom - create a new bottom-oriented axis generator.</li>
<li>d3.axisLeft - create a new left-oriented axis generator.</li>
<li>axis - generate an axis for the given selection.</li>
<li>axis.scale - set the scale.</li>
<li>axis.ticks - customize how ticks are generated and formatted.</li>
<li>axis.tickArguments - customize how ticks are generated and formatted.</li>
<li>axis.tickValues - set the tick values explicitly.</li>
<li>axis.tickFormat - set the tick format explicitly.</li>
<li>axis.tickSize - set the size of the ticks.</li>
<li>axis.tickSizeInner - set the size of inner ticks.</li>
<li>axis.tickSizeOuter - set the size of outer (extent) ticks.</li>
<li>axis.tickPadding - set the padding between ticks and labels.</li>
</ul>
<h4>Shapes</h4>
<p><strong>pie</strong><br>计算必要的角度以将表格数据集表示为饼图或圆环图。</p>
<ul>
<li>d3.pie 创建一个新的饼图生成器。</li>
<li>pie 计算给定数据集的弧角。</li>
<li>pie.value  设置值访问器。如果你的数据集是一个对象数组，你要告诉它，哪个数据是生成角度的数据</li>
<li>pie.sort 设置排序顺序比较器，你可以任意使用对象里的数据进行排序比较，顺序不同，该条数据所在的角度不同</li>
<li>pie.sortValues 设置排序顺序比较器。专门用来对value来进行排序设置的，如果设置了sortValues，那sort的排序就无效了。</li>
<li>pie.startAngle 设置整体起始角度。默认0</li>
<li>pie.endAngle 设置整个结束角度。默认2 * Math.PI;</li>
<li>pie.padAngle  设置相邻圆弧之间的衬垫角度。默认0</li>
</ul>
