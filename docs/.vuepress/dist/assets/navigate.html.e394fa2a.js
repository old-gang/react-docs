import{_ as n,d as s}from"./app.0e104dfa.js";const a={},p=s(`<h1 id="\u7F16\u7A0B\u5F0F\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7A0B\u5F0F\u5BFC\u822A" aria-hidden="true">#</a> \u7F16\u7A0B\u5F0F\u5BFC\u822A</h1><blockquote><p>\u901A\u8FC7\u8FD0\u884C\u4EE3\u7801\u5BFC\u81F4\u7684\u9875\u9762\u5207\u6362\u88AB\u53EB\u505A\u7F16\u7A0B\u5F0F\u5BFC\u822A</p></blockquote><p>\u9875\u9762\u5207\u6362\u6709\u4E24\u79CD\u573A\u666F:</p><ol><li><p>\u7528\u6237\u70B9\u51FB\u5BFC\u822A\u6309\u94AE</p></li><li><p>\u7A0B\u5E8F\u8FD0\u884C\u5230\u67D0\u4E2A\u6307\u5B9A\u9636\u6BB5\u81EA\u52A8\u5207\u6362\u9875\u9762(\u6BD4\u5982: \u767B\u5F55\u6210\u529F\u4E4B\u540E,\u9875\u9762\u81EA\u52A8\u5207\u6362\u5230\u9996\u9875)</p></li></ol><h2 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h2><blockquote><p>\u5F15\u5165<code>useNavigate</code>\u5E76\u8C03\u7528,\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570.\u6267\u884C\u8FD4\u56DE\u7684\u51FD\u6570\u5C31\u53EF\u4EE5\u5B9E\u73B0\u7F16\u7A0B\u5F0F\u5BFC\u822A</p></blockquote><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//  navigate(&#39;\u76EE\u6807\u9875\u9762\u7684\u8DEF\u5F84&#39;, {</span>
    <span class="token comment">//   replace: true, // \u662F\u5426\u5F00\u542F\u66FF\u6362\u5386\u53F2\u8BB0\u5F55 true\u4E3A\u5F00\u542F,\u9ED8\u8BA4\u503C\u662Ffalse</span>
    <span class="token comment">// })</span>
    <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">replace</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u6216 navigate(-1) //\u7C7B\u4F3C\u4E8Ehistory.go()\u65B9\u6CD5</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">test2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handle<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\u6309\u94AE</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,7);function t(e,o){return p}var l=n(a,[["render",t],["__file","navigate.html.vue"]]);export{l as default};
