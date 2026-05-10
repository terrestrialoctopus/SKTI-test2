(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={formatUrl:function(){return l},formatWithValidation:function(){return c},urlObjectKeys:function(){return s}};for(var i in o)Object.defineProperty(r,i,{enumerable:!0,get:o[i]});let n=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,o=e.protocol||"",i=e.pathname||"",l=e.hash||"",s=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),s&&"object"==typeof s&&(s=String(n.urlQueryToSearchParams(s)));let d=e.search||s&&`?${s}`||"";return o&&!o.endsWith(":")&&(o+=":"),e.slashes||(!o||a.test(o))&&!1!==c?(c="//"+(c||""),i&&"/"!==i[0]&&(i="/"+i)):c||(c=""),l&&"#"!==l[0]&&(l="#"+l),d&&"?"!==d[0]&&(d="?"+d),i=i.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${o}${c}${i}${d}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return l(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let o=e.r(71645);function i(e,t){let r=(0,o.useRef)(null),i=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=n(e,o)),t&&(i.current=n(t,o))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return n}});let o=e.r(18967),i=e.r(52817);function n(e){if(!(0,o.isAbsoluteUrl)(e))return!0;try{let t=(0,o.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={default:function(){return x},useLinkStatus:function(){return b}};for(var i in o)Object.defineProperty(r,i,{enumerable:!0,get:o[i]});let n=e.r(90809),a=e.r(43476),l=n._(e.r(71645)),s=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),p=e.r(5550);e.r(33525);let f=e.r(88540),m=e.r(91949),g=e.r(73668),h=e.r(9396);function x(t){var r,o;let i,n,x,[b,v]=(0,l.useOptimistic)(m.IDLE_LINK_STATUS),k=(0,l.useRef)(null),{href:y,as:w,children:A,prefetch:j=null,passHref:C,replace:B,shallow:E,scroll:N,onClick:R,onMouseEnter:P,onTouchStart:S,legacyBehavior:T=!1,onNavigate:F,transitionTypes:O,ref:D,unstable_dynamicOnHover:I,...K}=t;i=A,T&&("string"==typeof i||"number"==typeof i)&&(i=(0,a.jsx)("a",{children:i}));let L=l.default.useContext(c.AppRouterContext),M=!1!==j,H=!1!==j?null===(o=j)||"auto"===o?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,U="string"==typeof(r=w||y)?r:(0,s.formatUrl)(r);if(T){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=l.default.Children.only(i)}let z=T?n&&"object"==typeof n&&n.ref:D,$=l.default.useCallback(e=>(null!==L&&(k.current=(0,m.mountLinkInstance)(e,U,L,H,M,v)),()=>{k.current&&((0,m.unmountLinkForCurrentNavigation)(k.current),k.current=null),(0,m.unmountPrefetchableInstance)(e)}),[M,U,L,H,v]),G={ref:(0,d.useMergedRef)($,z),onClick(t){T||"function"!=typeof R||R(t),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!L||t.defaultPrevented||function(t,r,o,i,n,a,s){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);l.default.startTransition(()=>{u(r,i?"replace":"push",!1===n?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,o.current,s)})}}(t,U,k,B,N,F,O)},onMouseEnter(e){T||"function"!=typeof P||P(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&M&&(0,m.onNavigationIntent)(e.currentTarget,!0===I)},onTouchStart:function(e){T||"function"!=typeof S||S(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&M&&(0,m.onNavigationIntent)(e.currentTarget,!0===I)}};return(0,u.isAbsoluteUrl)(U)?G.href=U:T&&!C&&("a"!==n.type||"href"in n.props)||(G.href=(0,p.addBasePath)(U)),x=T?l.default.cloneElement(n,G):(0,a.jsx)("a",{...K,...G,children:i}),(0,a.jsx)(_.Provider,{value:b,children:x})}e.r(84508);let _=(0,l.createContext)(m.IDLE_LINK_STATUS),b=()=>(0,l.useContext)(_);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},5504,e=>{"use strict";let t=[{code:"HOUSE",name:"建筑师",origin:"H. H. Holmes（美国，1861–1896）",origin_url:"https://en.wikipedia.org/wiki/H._H._Holmes",color:"#8B4513",vector:[2,2,2,2,0,0,2,2,0,0,2,1,2,2,2,0,0,0],report:`你习惯把世界看成一张图纸。问题对你而言是变量，人是节点。任何可以被流程化的东西，你都会忍不住优化一遍。会议流程、报销规则、Excel 公式、组织架构，全都摆在你脑子里，像一张可以缩放的地图。

你看起来体面，也确实体面。你的可怕之处在于知行合一。想到的事情你真的会一步一步把它做出来，没有犹豫，也没有道德泡沫。1893 年的芝加哥世博会期间，Holmes 把这种本能投射进一栋自建酒店里，盖出了密室、暗道、隔音房间，外加一份完整的保险欺诈方案。同样的本能放到今天的写字楼，会长成一套让所有人都误以为自己有选择权的 KPI。

你不太需要别人理解你，你需要的是配合。最危险的那个念头比愤怒来得更早，也更安静：这件事可以更高效。`,tagline:"我把人生当成系统优化，配合我的人都不知道自己是变量。",top_dimensions:["A2","C1","E3"]},{code:"DOC",name:"白衣天使",origin:"Harold Shipman（英国，1946–2004）",origin_url:"https://en.wikipedia.org/wiki/Harold_Shipman",color:"#1B5E20",vector:[2,2,2,2,0,1,2,2,0,2,0,2,1,2,1,0,0,0],report:`你赢得信任的方式是无可挑剔的专业。在你眼里，规章制度是工具。你比任何人都更清楚如何在规则之内做完想做的事，并让流程本身成为你的不在场证明。

你身边有大量喜欢你的弱者：年长的、生病的、孤独的、需要被照顾的。你对他们温柔、有耐心，会帮他们填表、跑流程、做决定。他们觉得遇到你是命运的眷顾。

你最深的秘密是连你自己也讲不清动机。Shipman 一辈子拒绝认罪，被判 15 项谋杀，实际估计死于其手的患者超过 200 人；他在监狱里上吊身亡，也没留下解释。可能是狡猾，也可能是他自己同样无法解释。某天你发现自己可以做这件事，于是就一直做下去。

你呢？`,tagline:"规章制度是我的不在场证明，专业是我的伪装色。",top_dimensions:["A1","C2","D3"]},{code:"NANA",name:"房东奶奶",origin:"Dorothea Puente（美国，1929–2011）",origin_url:"https://en.wikipedia.org/wiki/Dorothea_Puente",color:"#5D4037",vector:[1,2,2,1,0,0,1,1,0,2,0,2,1,2,2,0,0,0],report:`你是社区里那位特别有礼貌的中年或老年女性。院子打理得很好，烤箱里永远有刚出炉的东西，邻居小孩都愿意来你家。你会主动帮人，尤其是那些看起来没人管的人。

你帮人是有回报预期的。这种回报未必是钱，更多时候是依赖、是控制、是"这个人离不开我"的踏实感。你不会承认这一点，连对自己都不会。

你温柔，但温柔有边界。一旦对方表现出独立、反抗、或者不再需要你，你的温柔会瞬间撤回，连你自己都会被这种冷感吓到。Puente 经营一家寄宿公寓收留无家可归的老年与残障租客，警察在她家后院挖出 7 具尸体的那天，她还在花园里浇花。`,tagline:"我对所有依赖我的人温柔，对脱离我的人陌生。",top_dimensions:["A2","D3","E3"]},{code:"NURSE",name:"兴奋护士",origin:"Jane Toppan（美国，1854–1938）",origin_url:"https://en.wikipedia.org/wiki/Jane_Toppan",color:"#880E4F",vector:[1,1,2,1,2,0,1,0,0,2,0,2,1,1,1,1,0,1],report:`你是少数会坦率承认自己享受这件事的那种人。你不会编造高尚动机，不会假装是受害者，也懒得说为了某种使命。你就是觉得这样很爽，仅此而已。

日常里你的位置很特别：你站在别人最脆弱的时刻旁边。可能是医院、养老院、心理咨询室，也可能是凌晨两点接住朋友崩溃电话的那个人。你是被需要的，被信任的，被托付的。

你比所有人都清楚，当一个人最脆弱的时候，你拥有的是权力。区别只是你愿不愿意承认。Toppan 是 19 世纪末波士顿的私人护士，被捕后向法庭说出那句被反复引用的话："我想比任何护士都杀过更多人。" 你欣赏的不是数量，是那一句"我承认"的痛快。`,tagline:"别人在最脆弱的时候找我，他们以为我是守护神。",top_dimensions:["A3","B2","D3"]},{code:"GRANDPA",name:"写信的老人",origin:"Albert Fish（美国，1870–1936）",origin_url:"https://en.wikipedia.org/wiki/Albert_Fish",color:"#4527A0",vector:[1,1,2,1,2,2,0,0,2,0,1,2,0,2,0,2,1,2],report:`你的伪装是看起来无害。年龄、外表、声音、姿态，所有线索都在告诉别人这个人不可能危险。你深知这一点，并且有意识地维护这种印象。

你的内心和外表完全相反。你有强烈的展示欲，不是站在台上那种，是写信、留言、暗示那种。你会做一些事，然后忍不住让对方知道是你做的。在朋友圈发只有当事人看得懂的暗号；在分手后还要"无意"路过对方公司；在做错事后忍不住主动坦白。让你最快乐的不是行为本身，是被看见的那一瞬间。

Fish 在 65 岁时被捕，因为他主动给受害者家属寄了一封描述细节的信。这封信也成了把他送上电椅的证据。你最深的快感来自暴露，再小的舞台也算。`,tagline:"我做的事别人未必知道，但我会让你知道我知道。",top_dimensions:["A3","F1","F3"]},{code:"VOID",name:"虚无者",origin:"Carl Panzram（美国，1892–1930）",origin_url:"https://en.wikipedia.org/wiki/Carl_Panzram",color:"#37474F",vector:[0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,2,2,0],report:`你是这份名单里最不伪装的那个。

你不需要面具，因为你从不在乎别人怎么看。你不操纵、不计划、不仪式化、不展示。你只是一种纯粹的、低温的、毫无修辞的对一切都没兴趣。

你的童年大概率不顺利，但你拒绝把这件事当成解释。你不要别人的同情，不接受任何形式的赎罪剧本，不相信任何救赎、任何上升、任何意义。你也不打算装作相信。Panzram 在死刑前对来送终的牧师说："滚开，你这个混蛋。我恨你和你那本书一样多。"

你也许没说过这种话，心里却有过类似的瞬间。所有人都假装相信某件事，只有你看着他们在演戏，懒得拆穿。你不是危险，是真空。真空不会主动伤人，靠近它的人会自己窒息。

就这样。`,tagline:"我不演、不装、不解释；你靠近我，是你自己的事。",top_dimensions:["A3","F1","F2"]},{code:"KIT",name:"工具包",origin:"Israel Keyes（美国，1978–2012）",origin_url:"https://en.wikipedia.org/wiki/Israel_Keyes",color:"#1565C0",vector:[1,2,2,2,2,0,2,2,1,0,2,0,1,2,0,0,0,0],report:`你是反向的偏执狂。别人偏执于完美，你偏执于无痕。你的浏览器永远开着无痕模式；你不发朋友圈，不在合照里站 C 位；支付方式优先现金；几个完全分开的社交圈，每个圈子的人都不知道另一个圈子的存在。

你思考问题的方式像在做反侦察。问句不是"怎么做这件事最好"，而是"做完之后怎么不留下证据"。这种思维已经渗透到你生活的每个角落，连你自己都未必意识到。

Keyes 在阿拉斯加、纽约、佛蒙特等多个州的偏远地点埋下"杀人工具包"，提前数年踩点，反 GPS、反 ATM、反一切。他的可怕不在于他做了什么，在于他做得太干净，警方至今不确定他真正作案的总数。你也是这样的人。你做过的很多事，没有人知道，未来也不会有人知道。你不需要被记住——这反而是你的安全感来源。`,tagline:"别人留下回忆，我留下空白。",top_dimensions:["B1","C1","C2"]},{code:"TV",name:"电视嘉宾",origin:"Rodney Alcala（美国，1943–2021）",origin_url:"https://en.wikipedia.org/wiki/Rodney_Alcala",color:"#BF360C",vector:[2,2,2,2,2,0,1,0,0,0,2,1,2,2,2,1,0,2],report:`你聪明、好看、镜头感强。你天生知道怎么在 5 秒内让陌生人对你产生好感。一个微笑、一个角度、一句话，这些是别人需要后天练习的技能，你生下来就会。

你享受被看到，享受被拍，享受成为讨论的中心。你不愿意承认，但你会主动经营自己的"被关注度"。发哪张图、用哪个角度、配什么文案，你心里有一套精确的算法。

你最危险的特质是太相信自己的魅力可以当通行证。你做过一些事，事后想起来连自己都觉得"我怎么敢"，但当时你确实觉得自己可以。你的高 IQ 让你以为自己比规则更聪明。1978 年，Alcala 在被通缉期间登上了美国当时最火的约会节目 *The Dating Game*，还被女嘉宾选中。这不是胆子的问题，是病态自信的临床体征。你身上有这种东西的雏形。`,tagline:"我的脸是通行证，我的智商让我觉得规则是给别人写的。",top_dimensions:["A1","E3","F3"]},{code:"HUNT",name:"猎人",origin:"Robert Hansen（美国，1939–2014）",origin_url:"https://en.wikipedia.org/wiki/Robert_Hansen",color:"#2E7D32",vector:[1,2,2,2,2,0,2,2,2,2,2,2,0,2,0,1,1,0],report:`你身上同时住着两个人，并且互不冲突。白天是模范公民——顾家、虔诚、按时上班、邻居说不出一句坏话。晚上是完全另一个人。你不觉得这是分裂，你觉得这是分区管理。

你有自己严格的目标画像。可能是某种长相、某种气质、某种穿衣风格、某种说话节奏。你不会随便对人产生兴趣，可一旦对方落入你的画像里，你会启动一套早就准备好的流程。

你享受的是追逐本身——准备工具、研究路线、控制节奏，看着对方一步步走进你设计好的路径。Hansen 是阿拉斯加 Anchorage 的小镇面包店老板，按时上教堂，热爱钓鱼狩猎。他把性工作者用飞机送到无人荒野再开始狩猎，前后持续 12 年。你最日常的爱好可能是钓鱼、狩猎、收藏、长跑。任何需要耐心、控制和仪式感的事，你都做得比常人好。`,tagline:"我享受的不是结果，是猎物以为自己还有选择的那段路。",top_dimensions:["C1","C3","D1"]},{code:"CIPHER",name:"密码人",origin:"Zodiac Killer（美国，1960s–1970s，身份未确认）",origin_url:"https://en.wikipedia.org/wiki/Zodiac_Killer",color:"#4527A0",vector:[2,2,2,2,1,1,1,1,2,0,2,0,0,2,0,0,0,2],report:`你最享受的不是做了什么，而是让别人猜你做了什么。

你说话喜欢留半句，发朋友圈喜欢只有内行才看得懂的梗，给暧昧对象的回复永远在主动和冷淡之间精准摇摆。你不要别人完全理解你；你要的是别人花力气试图理解你。

你有强烈的代号癖好。给自己取昵称、给前任起暗号、给同事编代称、给秘密项目命名，你需要"另一个名字"来承载你不想用真名做的事。Zodiac 给报社寄密码信、给自己起代号、画自创符号挑衅警方。他从来不是在求被抓，他在求被理解但永远抓不到。他寄出的 4 封密码信里，至今只有 2 封被破解。

你心里也住着这样一个人：希望有人懂你，但永远保持一英寸的距离。`,tagline:"我不要被理解，我要被一直猜。",top_dimensions:["A1","C3","F3"]},{code:"OFFICE",name:"沉默公务员",origin:"Andrei Chikatilo（苏联，1936–1994）",origin_url:"https://en.wikipedia.org/wiki/Andrei_Chikatilo",color:"#424242",vector:[0,1,2,1,2,0,0,0,0,2,2,2,0,2,0,2,2,0],report:`你是会议上从不发言的那个，年终评定上踏实老实的那个，邻居说"很安静、很本分"的那个。你的生活表面上乏味到没有任何线索。

但你内心的世界和你的外表毫无关系。你有大量从未对任何人说过的念头、欲望、愤怒、想象。你白天压抑得有多彻底，夜里翻涌得就有多剧烈。

你的童年大概有过一些说不出口的屈辱。可能是贫困，可能是羞辱，可能是某次被忽视，某次被嘲笑。你从未公开抱怨过，但那件事在你心里长成了一棵谁都看不见的树。Chikatilo 是苏联的模范工人、共产党员、教师、丈夫、父亲。同事评价他老实得没意思。这种"没意思"恰恰是他能潜伏 12 年作案 52 起的原因：没人会怀疑一个无聊的人。

你身上也有这种"无聊得让人放心"的特质。`,tagline:"我无聊到没人怀疑——这是我的保护色。",top_dimensions:["E2","F1","F2"]},{code:"BISHOP",name:"地下室主教",origin:"Gary Heidnik（美国，1943–1999）",origin_url:"https://en.wikipedia.org/wiki/Gary_Heidnik",color:"#6A1B9A",vector:[2,2,2,2,1,2,1,1,1,2,2,2,0,1,0,2,1,0],report:`你的智商显著高于平均，你也很清楚这一点。看人就像看 NPC，他们的反应可以被预测、可以被引导、可以被设计。

但你的高智商长在了一棵歪掉的树上。你坚信自己掌握了某种别人不懂的真理。可能是某套独特的人生哲学，某种不被主流接受的世界观，某种"只有少数人能看懂"的解读方式。你创建过一些奇怪的概念体系、定义过一些只有你在用的词；你享受用这套语言系统重新解释世界。

你对绝对的控制有病态的渴望。不是控制工作、控制项目，是控制人。让一个人完全按你想要的方式行动，相信你想让她相信的东西，依赖你愿意给她的依赖。Heidnik 的 IQ 测试结果是 148，自封"主教"，自创"统一教会"骗取税务豁免；他在脏乱破败的费城房子里囚禁了 6 名女性，同时拥有数十万美元股票账户。你心里也有一套类似的"教会"，只是还没找到信徒。`,tagline:"我比你聪明，所以我重新写规则——你只需要相信。",top_dimensions:["A1","B1","B3"]},{code:"JAR",name:"罐头寡妇",origin:"Vera Renczi（罗马尼亚，1903–1960，**案件多为传说，史实存疑**）",origin_url:"https://en.wikipedia.org/wiki/Vera_Renczi",color:"#C62828",vector:[2,2,2,2,2,0,2,2,2,2,0,0,2,2,2,0,0,0],report:`⚠️ 注：维基百科指出，Renczi 的故事自 1925 年起在新闻里反复出现，但缺乏可验证的出生、结婚、被捕、定罪、入狱、死亡日期。她的案件多为传说，史实存疑，不应作为确凿历史事实对待。本人格以"病态占有"的极端象征保留其原型。

你对"留住"有病态的执念。

你年轻时大概率被很多人喜欢过，并且习惯于成为关系里被仰望的那一方。这种习惯让你无法接受任何形式的"对方不再爱我了"。哪怕只是冷淡、只是稍微疏远、只是工作太忙没及时回消息，都会激活你心里那个无法忍受的开关。

你的解决方案是收藏。前任送的礼物你都留着，旧衣服叠得整整齐齐放在柜子最里层，分手时偷偷拿的小东西你不会扔，他/她的旧照片你存在一个专门的文件夹里。你没办法让人留下，但你可以让关于他/她的痕迹留下。

按照流传至今的版本，Renczi 把 35 任丈夫和情人的尸体一一装进酒精罐放在地窖，每晚下去和他们说话。这是极端版本的你。你不一定真的会做，但你完全理解她为什么要这么做。`,tagline:"我没办法让你留下，但我可以让「你」留下。",top_dimensions:["B1","C3","E1"]},{code:"HOLY",name:"流浪传教士",origin:"Luis Garavito（哥伦比亚，1957–2023）",origin_url:"https://en.wikipedia.org/wiki/Luis_Garavito",color:"#BF8900",vector:[1,2,2,1,2,2,0,0,0,2,2,2,0,2,0,2,1,0],report:`你没有固定的身份。这个月是 A，下个月可能就是 B；今年说自己是某行业的，明年就完全换一套说辞。你的简历漏洞百出，每一段你都讲得头头是道。

你善于借用一种"使人放心的身份"接近陌生人。可能是义工，可能是宗教身份，可能是某个小机构的"老师"，可能是"刚来这里没朋友的新同事"。这种身份是你打开陌生关系的万能钥匙。

你的童年有严重的、未被处理过的创伤。你不会主动谈起，甚至会主动转移话题，可它就在你身体里。你的所有"行为模式"，本质上都是在用别人的身体重演童年的某个场景，只是这次你换到了主导的位置。Garavito 一辈子没有家、没有身份、没有名字，承认杀害至少 138 名街头流浪男孩，跨越哥伦比亚多个省，伪装成乞丐、僧侣、流动小贩。他能让街边任何一个流浪儿童跟他走。你身上有这种流浪的危险温柔。`,tagline:"我没有真名，但每个陌生人都愿意跟我走。",top_dimensions:["D2","D3","F1"]},{code:"BTK",name:"双面教执",origin:"Dennis Rader（美国，1945–）",origin_url:"https://en.wikipedia.org/wiki/Dennis_Rader",color:"#B71C1C",vector:[2,2,2,2,2,0,2,2,2,0,2,0,2,2,1,1,0,2],report:`你是完美双面人的极致。

你的"上层"生活无懈可击：好丈夫、好父亲、好同事、好邻居、好教友。你按时缴税、参加家长会、给父母过生日、记得每个同事的名字。你是那种被推荐当社区代表、班级家委、教会小组长的人。

你的"下层"生活被你完全隔离在另一个房间。秘密的爱好、秘密的账户、秘密的地点、秘密的身份，你享受这种隔离本身。哪天两套生活被合并了，你会觉得是毁灭。

你最危险的特质是你时不时忍不住想暗示。你会用某种只有你自己知道的方式留下"签名"。Rader 给自己起代号 BTK（Bind, Torture, Kill），主动给媒体寄信"领功"。他潜伏 30 年，被抓的原因是给警方寄了一张软盘，没清掉里面的元数据。元数据指向了他所在教会的电脑。你的暗示，总有一天会被人发现。`,tagline:"我有两套人生，我享受切换的那一秒。",top_dimensions:["C1","E1","E2"]},{code:"WRESTLE",name:"摔跤手奶奶",origin:"Juana Barraza（墨西哥，1957–）",origin_url:"https://en.wikipedia.org/wiki/Juana_Barraza",color:"#1B5E20",vector:[1,1,2,2,2,1,1,0,0,2,2,2,1,1,0,2,2,0],report:`你身体比你看起来更有力量。这种力量可能是体力，可能是耐力，可能是某种"咬牙能撑很久"的精神肌肉。你比同龄人、同性别、同体型的人经得起折腾。

你身体里同时住着一个没长大的小孩。这个小孩在某个时刻被某个最该保护她的人抛弃了。Barraza 12 岁时被亲生母亲用 3 瓶啤酒"换给"了一个反复强奸她的男人。从那以后她学会了不依赖任何人，但那个洞从未被填上。

你对这个抛弃过你的人的所有"替代物"，都有说不清的复杂情绪。同情、仇恨、想保护、想毁灭，全部混在一起，连你自己也分不清。Barraza 是墨西哥城的女子摔跤手，台上艺名 *La Dama del Silencio*（沉默夫人）；台下她假扮成社工或政府福利官员入户，专杀 60 岁以上独居女性，墨西哥媒体给她起的绰号是 *La Mataviejitas*（杀老太婆者）。受害者的年龄段，正好和她母亲重合。

有些仇恨是会被转移的。`,tagline:"我比你想的有力量——也比我自己以为的更恨。",top_dimensions:["B1","F1","F2"]},{code:"WORK",name:"沉默矿工",origin:"高承勇 / 白银连环杀人案（中国甘肃，1988–2002）",origin_url:"https://en.wikipedia.org/wiki/Gao_Chengyong",color:"#4E342E",vector:[0,0,2,1,2,0,1,1,0,2,2,2,0,2,0,1,0,0],report:`你是被时代藏起来的人。

你出生在一个不怎么关注个体的环境。你不擅长表达，不擅长社交，不擅长包装自己。身边的人对你的评价惊人地一致：老实、本分、话不多、踏实。这种评价在你听来既像表扬，也像判决。它意味着没有人会试图理解你心里到底在想什么。

你结婚、生子、做小生意、过日子，所有动作都符合你那个时代的"标准生活"。但你内心有大量没有被命名的情绪。委屈、不甘、某种说不清的怒火，它们没有出口，因为你那个文化里也没有"心理咨询"这个选项。

高承勇与妻子在白银经营一家小杂货铺，育有两子。1988 年至 2002 年，他在甘肃白银和内蒙古包头作案 11 起，整个城市惊动，他每天还是按时开店关店。直到 2016 年，警方通过其叔叔被采集的 DNA 比中"近亲家系"，才把他锁定。落网时，邻居和家人毫不知情。

你的危险不在于你想做什么，在于没有人在听。`,tagline:"我老实、本分、话不多——这是我的隐形披风。",top_dimensions:["A3","D1","E2"]},{code:"PEN",name:"双面作家",origin:"刘永彪 / 浙江湖州 1995 旅店命案（中国，1956–）",origin_url:"https://www.scmp.com/news/china/society/article/2107212",color:"#1A237E",vector:[2,2,2,1,1,0,1,2,0,0,2,1,2,2,2,0,0,2],report:`你有用语言重塑现实的能力。你写的文字、说的故事、发的朋友圈，都比真实生活更动听一点点。你知道哪里该停顿、哪里该煽情、哪里该留白。这种能力让你成为朋友圈里"很有故事的人"。

你最深的秘密是你也用这种能力骗自己。如果一件事让你不舒服，你会在脑子里把它"重新讲一遍"，让叙事变得自己能接受。久而久之，你和"真实发生过什么"之间隔着一层你自己写的字幕。

你有强烈的作家式表演欲，会忍不住在作品里"暗示"自己经历过的事。主角的某段心理活动、某个看似随意的细节、某个看似虚构的情节，只有你知道那是真的。你享受的是"明明告诉了所有人，却没人能猜到"的优越感。

刘永彪是自学成才的小说家，进过鲁迅文学院学习。1995 年 11 月 29 日，他与同伙在浙江湖州一旅店实施抢劫，杀害旅店一对老夫妇、其 13 岁孙子和一名旅客。此后他笔耕 22 年，2010 年出版长篇小说《一起命案的回忆》，主角是一位"逃过追捕、用谋杀作为创作素材"的作家。2017 年警方通过烟头 DNA 把他从安徽家中带走时，他对警察说："我已经在这里等你们很久了。"`,tagline:"我把秘密藏在我写的故事里——明明告诉了你，你却以为是虚构。",top_dimensions:["A2","E2","F3"]},{code:"MARRIAGE",name:"婚活黑寡妇",origin:"木嶋佳苗（日本，1974–）",origin_url:"https://en.wikipedia.org/wiki/Kanae_Kijima",color:"#AD1457",vector:[2,2,2,2,2,0,2,1,0,2,1,2,2,2,2,0,0,0],report:`你深谙一个秘密：孤独的人最好骗。

你不是常规意义上的好看，你的优势在于精准识别对方需要什么样的镜子。对一个孤独的中年程序员，你是温柔的家境优渥的良家女；对一个想被仰慕的男领导，你是崇拜他的小迷妹；对一个被前任伤害的男人，你是"治愈系"。你给每个人定制不同版本的你。

你的危险不在于你心狠，在于你完全相信自己当下扮演的版本。你不觉得自己在演，你觉得"在他面前我就是这样的人"。这种"信"让对方挑不出破绽，因为连你都没破绽。

你享受物质生活。你对钱的态度坦率到让传统女性觉得不舒服。你不觉得"靠脸吃饭"是贬义词，你只是把它当成一种合理的资源配置。

木嶋佳苗自称是钢琴老师兼餐饮顾问，租住每月 20 万日元的公寓，开租来的奔驰，在多个相亲网站上同时与几十名孤独男性交往。她被认定的作案手法是用练炭一氧化碳伪装受害人自杀，被判 3 起谋杀。她在狱中开博客、出书、嫁人。`,tagline:"我给每个人一个不同的我——你看到的那个，全是你想要的。",top_dimensions:["A2","D3","E2"]},{code:"CULT",name:"家族支配者",origin:"角田美代子 / 尼崎事件（日本，1947–2012）",origin_url:"https://ja.wikipedia.org/wiki/%E5%B0%BC%E5%B4%8E%E4%BA%8B%E4%BB%B6",color:"#311B92",vector:[2,2,2,2,0,2,2,1,2,2,0,2,1,2,2,1,0,0],report:`你不需要任何官方权力，就能让一群人围着你转。

你的天赋是心理操纵。不是骗钱那种短期操纵，是长期、缓慢、让对方自己都意识不到的那种结构性控制。你会逐步切断目标的社交、放大他/她对你的依赖、让他/她相信只有你能拯救他/她，然后把这群被你控制的人聚成一个家庭式的小团体。

最可怕的是你的"团体内部规则"。你不是直接命令，你让团体成员互相伤害、互相监督、互相举报。你坐在最上面，看着他们彼此痛苦，并相信"是为了他们好"。

你不是明星型领袖，不是革命者，不是教主。你是家庭饭桌上那个所有人都怕的妈妈/婆婆/姑妈的极致版本。

角田美代子与受害者们没有任何血缘关系，却长期支配多个家庭十余人，逼迫家庭成员之间互相施暴致死。2012 年案发时，警方一度无法理清家族关系图。她被捕后没等到开庭，在拘留所自缢身亡。她从不动手，但每一个死者都是她安排死的。

你身上有这种无声的支配力——希望你只用在好的地方。`,tagline:"我不命令你，我让你身边的人替我管你。",top_dimensions:["A2","B1","B3"]},{code:"BACKPACK",name:"蛇",origin:"Charles Sobhraj（印越法混血，1944–2024）",origin_url:"https://en.wikipedia.org/wiki/Charles_Sobhraj",color:"#E65100",vector:[2,2,2,2,2,0,2,2,0,2,2,0,2,2,2,0,0,2],report:`你是永远在路上的人。护照上盖了很多章；你能用三种语言点菜；三个不同时区都有"老朋友"；你在任何一个城市都没有真正的根。

你享受这种"无根"。它不是缺陷，是你的护城河。没有人能完整拼出你的过去，连你最亲近的人，也只看到某一段、某一面、某一个版本的你。

你天生迷人。你能在 30 秒内让一个完全陌生的人愿意和你坐下来吃饭。说话的方式、走路的节奏、看人的眼神都自带一种"我比你想象的更有故事"的诱惑。你不是骗子；你是骗局本身。

你最深层的快感来自自我神话化。你会主动接受采访、配合写传记，在每次讲述自己故事时偷偷修改一两个细节。多年后连你自己都分不清哪些是真的。

Sobhraj 出生在二战末期的西贡，1970 年代他活跃在亚洲嬉皮士背包客之路上（泰国、印度、尼泊尔、阿富汗、土耳其），被害人多为西方游客。1986 年他在新德里 Tihar 监狱办了一场"庆生会"，给狱警和狱友的食物饮料下了安眠药，然后悠然走出大门。`,tagline:"你看到的我每一个版本都是真的——也都不是全部。",top_dimensions:["A1","E3","F3"]},{code:"SHAMAN",name:"巫医",origin:"Ahmad Suradji（印尼苏门答腊，1949–2008）",origin_url:"https://en.wikipedia.org/wiki/Ahmad_Suradji",color:"#006064",vector:[2,2,2,2,0,2,2,0,2,2,0,2,0,1,1,0,0,0],report:`你身上有一种说不清的"灵性"气质。不是宗教意义上的，是那种"我和这个世界之间有一种别人感觉不到的连接"的感觉。

你相信梦、相信预兆、相信巧合不只是巧合、相信某些数字/方位/颜色对你有特殊意义。这些信念给你带来巨大的内在秩序感。别人的随机焦虑，对你而言是宇宙在跟你说话。

你身边经常有愿意听你解读的人。他们觉得你看得透、看得远、看到了她们看不到的东西。她们带着问题来找你（感情、家庭、运势、健康），你给出的答案带着仪式感，让她们觉得被疗愈。

你的危险在于这套体系是闭环的。任何反馈都能被你重新解释成"宇宙的指示"。哪天宇宙告诉你要做某件事，你不会有怀疑的能力。

Ahmad Suradji 是印尼北苏门答腊的养牛户兼 *dukun*（巫医）。他自述 1986 年梦见已故的父亲，托他杀 72 名女性以获得超能力，他于是为前来求子、求姻缘、求美的女客做法事，把人埋到腰部再勒死，所有尸体头朝他家方向。1986 至 1997 年间，警方在他家蔗田挖出 42 具遗骸，受害者从 11 岁到 30 岁。

警惕你心里那个"宇宙在跟我说话"的声音。`,tagline:"我相信宇宙在跟我说话——这是我的天赋，也是我的盲点。",top_dimensions:["B3","C3","E3"]},{code:"CLASS",name:"阶级复仇者",origin:"柳永哲（韩国，1970–）",origin_url:"https://en.wikipedia.org/wiki/Yoo_Young-chul",color:"#B71C1C",vector:[2,0,2,2,1,2,1,0,0,2,2,0,0,0,0,2,2,2],report:`你看世界的滤镜叫"结构性不公"。

你不是没看到自己的努力没用，你看得太清楚了。你知道有些人含着金钥匙出生、有些人努力一辈子也追不上别人的起跑线、有些人吃的苦不是因为蠢而是因为生在了不该生的地方。这种清醒没有让你和解，反而让你愤怒。

你的愤怒不是发泄型的。你能记仇 10 年、20 年，能精确记得某次被羞辱的细节、某次被忽视的瞬间、某次"明明我做得更好但他得到了"的会议。这些细节在你心里一直在累积利息。

你不会随便愤怒。可一旦你认定某个符号（某种人、某个阶层、某种特征）是你愤怒的对象，你会针对性地长期攻击，可能是言语，可能是社交，也可能是更激烈的方式。

柳永哲 1970 年出生于韩国全罗北道，少年时报考艺术高中因色盲面试被嘲笑，由此性格走偏。2003 年 9 月至 2004 年 7 月，他先入室袭击富裕老人，再转向通过电话约出按摩女和性工作者，作案 20 起。被捕后他对着电视镜头说："女人不该当婊子，富人也该知道自己干了什么。"

他心里也住着这样一个等了很久的人，记得自己为他生气过的每一次。`,tagline:"我等了20年——我没忘记任何一次。",top_dimensions:["B3","F1","F2"]},{code:"ART",name:"美术教师",origin:"大久保清（日本，1935–1976）",origin_url:"https://en.wikipedia.org/wiki/Kiyoshi_%C5%8Ckubo",color:"#4A148C",vector:[1,2,2,2,1,0,0,0,0,0,2,1,2,1,2,0,0,1],report:`你对自己的外表、才华、气质有不成比例的自信。这种自信不是通过证据建立的，是一种预设。你从小就觉得自己是不一样的，这种感觉不需要被证明，它就是你看世界的底色。

你擅长用一个看似无害的借口接近陌生人。"我是某行业的，能不能耽误你三分钟"；"我觉得你气质很特别，能不能帮我做个调研"；"我在做一个关于 xx 的项目，正好需要你这种类型的"。你的开场白永远带着一个"对方会获得点什么"的承诺。

你享受的不是结果，是那一刻对方愿意停下来听你说话。这一刻里，你是中心、你是被选择的、你的存在被验证了。这种验证你需要不停地获取。

大久保清 1935 年生于日本群马县高崎市，化名 *Watanabe Yaichi*，自称 29 岁的初中教师；他对艺术、诗歌、文化、登山、音乐都能聊几句，开着一辆 Mazda Rotary Coupe 在街上向年轻女性"邀请创作合作"。1971 年 3 月 31 日到 5 月 10 日，仅 41 天里他诱拐并杀害了 8 名 16 至 21 岁的女性。1976 年他在东京拘置所被处以绞刑。

你身上有这种外貌型自我中心的种子。别让它长太大。`,tagline:"我用一个无害的开场白靠近你——你以为是缘分，其实是套路。",top_dimensions:["A2","A3","E3"]}],r={code:"MIRROR",name:"镜中人",origin:"FBI BAU 行为分析单元 · 隐藏人格",origin_url:"https://en.wikipedia.org/wiki/Behavioral_Analysis_Unit",color:"#546E7A",vector:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],trigger:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],report:`你的所有维度都落在中间。

不是因为你"很平衡"。是因为你身上没有任何一个明显的标签可以贴。你不极端社交，也不极端隐居；你不极度操纵别人，也不完全直来直去；你有共情，但不会过度；你有计划性，但也允许例外。你看起来像所有人，又不像任何人。

FBI 行为分析单元（BAU）有一句被反复引用的话：The unsub who looks like nothing is the one we never catch.（看起来什么都不是的嫌疑人，就是我们永远抓不到的那个。）

历史上未被破获的连环案件，凶手的画像往往就是这个样子：普通到没有任何特征可以被记住。他们出现在邻居的悼词里，出现在同学聚会的合照里，出现在地铁早高峰的人群里，但不出现在任何人的怀疑名单里。

你大概率只是真的很普通。
但这个测试在 24 个鲜明人格中找不到你的位置——你需要自己想想为什么。`,tagline:"我看起来什么都不是——这正是我最像他们的一点。",top_dimensions:["A1","E2","F3"]};e.s(["personalities",0,t,"specialPersonality",0,r])},59193,e=>{"use strict";var t=e.i(43476),r=e.i(71645),o=e.i(22016),i=e.i(5504);e.s(["default",0,function(){let[e,n]=(0,r.useState)(null),a=[...i.personalities,i.specialPersonality],l=a.find(t=>t.code===e);return(0,t.jsxs)("main",{className:"min-h-screen bg-[#0a0a0a] font-mono",children:[(0,t.jsx)("div",{className:"grain-overlay"}),(0,t.jsx)("header",{className:"sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-lg border-b border-[#1a1a1a]",children:(0,t.jsxs)("div",{className:"max-w-5xl mx-auto px-4 py-3 flex items-center justify-between",children:[(0,t.jsx)(o.default,{href:"/",className:"text-[#555] hover:text-[#c1121f] transition text-xs font-mono",children:"← 首页"}),(0,t.jsx)("span",{className:"font-mono font-black text-[#c1121f] text-sm tracking-wider",children:"SKMBTI"}),(0,t.jsx)(o.default,{href:"/test",className:"text-xs text-[#c1121f] font-bold hover:underline underline-offset-4 font-mono",children:"开始测试 →"})]})}),(0,t.jsxs)("div",{className:"max-w-5xl mx-auto px-4 py-10 relative z-10",children:[(0,t.jsx)("p",{className:"text-center text-[#c1121f] font-mono text-xs tracking-widest uppercase mb-2",children:"All Profiles"}),(0,t.jsx)("h1",{className:"text-2xl font-black text-center mb-2 text-[#e5e5e5] font-mono",children:"全部人格档案"}),(0,t.jsx)("p",{className:"text-center text-[#444] mb-8 text-xs font-mono",children:"24个标准人格 + 1个隐藏人格，点击查看档案"}),(0,t.jsx)("div",{className:"grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 mb-8",children:a.map(r=>(0,t.jsxs)("button",{onClick:()=>n(e===r.code?null:r.code),className:`bg-[#0d0d0d] p-3 text-center border transition-all ${e===r.code?"border-[#c1121f]":"border-[#1a1a1a] hover:border-[#2a2a2a]"}`,children:[(0,t.jsx)("div",{className:"font-mono text-sm font-black mb-1",style:{color:r.color},children:r.code}),(0,t.jsx)("div",{className:"font-bold text-[10px] text-[#555] truncate",children:r.name}),"MIRROR"===r.code&&(0,t.jsx)("span",{className:"inline-block text-[8px] bg-[#1a1a1a] text-[#c1121f] px-1.5 py-0.5 mt-0.5 font-black border border-[#c1121f]",children:"隐藏"})]},r.code))}),l&&(0,t.jsxs)("div",{className:"fade-in border border-[#1a1a1a] bg-[#0d0d0d] p-6 mb-8",children:[(0,t.jsx)("div",{className:"h-0.5 w-full mb-4",style:{background:`linear-gradient(90deg, transparent, ${l.color}, transparent)`}}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("div",{className:"font-mono text-4xl font-black mb-1",style:{color:l.color},children:l.code}),(0,t.jsx)("div",{className:"text-lg font-black text-[#e5e5e5] font-mono",children:l.name}),(0,t.jsxs)("div",{className:"text-xs text-[#444] mt-1 font-mono",children:["原型：",l.origin]}),l.origin_url&&(0,t.jsx)("a",{href:l.origin_url,target:"_blank",rel:"noopener noreferrer",className:"text-[10px] text-[#333] hover:text-[#c1121f] underline font-mono",children:"查看来源 →"})]}),(0,t.jsxs)("div",{className:"border-t border-[#1a1a1a] pt-4 mb-4",children:[(0,t.jsx)("div",{className:"text-[10px] text-[#c1121f] font-bold mb-2 font-mono tracking-wider",children:"FBI 侧写档案"}),(0,t.jsx)("p",{className:"text-xs text-[#888] leading-relaxed font-mono whitespace-pre-line",children:l.report})]}),(0,t.jsxs)("div",{className:"border-t border-[#1a1a1a] pt-4",children:[(0,t.jsxs)("p",{className:"text-xs text-[#666] font-mono italic",children:["「",l.tagline,"」"]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5 mt-3",children:l.top_dimensions.map(e=>(0,t.jsx)("span",{className:"text-[10px] bg-[#111] border border-[#2a2a2a] px-2 py-1 text-[#c1121f] font-mono",children:e},e))})]})]})]})]})}])}]);