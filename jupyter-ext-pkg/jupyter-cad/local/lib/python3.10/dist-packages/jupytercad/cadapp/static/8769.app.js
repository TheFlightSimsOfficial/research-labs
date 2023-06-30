"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8769],{38769:(e,t,n)=>{n.r(t),n.d(t,{commonmarkLanguage:()=>Oe,deleteMarkupBackward:()=>Ue,insertNewlineContinueMarkup:()=>De,markdown:()=>Qe,markdownKeymap:()=>Fe,markdownLanguage:()=>Re});var r,s=n(16693),i=n(29229),o=n(68466),a=n(21704),l=n(30262);class h{constructor(e,t,n,r,s,i,o){this.type=e,this.value=t,this.from=n,this.hash=r,this.end=s,this.children=i,this.positions=o,this.hashProp=[[a.md.contextHash,r]]}static create(e,t,n,r,s){return new h(e,t,n,r+(r<<8)+e+(t<<4)|0,s,[],[])}addChild(e,t){e.prop(a.md.contextHash)!=this.hash&&(e=new a.mp(e.type,e.children,e.positions,e.length,this.hashProp)),this.children.push(e),this.positions.push(t)}toTree(e,t=this.end){let n=this.children.length-1;return n>=0&&(t=Math.max(t,this.positions[n]+this.children[n].length+this.from)),new a.mp(e.types[this.type],this.children,this.positions,t-this.from).balance({makeTree:(e,t,n)=>new a.mp(a.Jq.none,e,t,n,this.hashProp)})}}!function(e){e[e.Document=1]="Document",e[e.CodeBlock=2]="CodeBlock",e[e.FencedCode=3]="FencedCode",e[e.Blockquote=4]="Blockquote",e[e.HorizontalRule=5]="HorizontalRule",e[e.BulletList=6]="BulletList",e[e.OrderedList=7]="OrderedList",e[e.ListItem=8]="ListItem",e[e.ATXHeading1=9]="ATXHeading1",e[e.ATXHeading2=10]="ATXHeading2",e[e.ATXHeading3=11]="ATXHeading3",e[e.ATXHeading4=12]="ATXHeading4",e[e.ATXHeading5=13]="ATXHeading5",e[e.ATXHeading6=14]="ATXHeading6",e[e.SetextHeading1=15]="SetextHeading1",e[e.SetextHeading2=16]="SetextHeading2",e[e.HTMLBlock=17]="HTMLBlock",e[e.LinkReference=18]="LinkReference",e[e.Paragraph=19]="Paragraph",e[e.CommentBlock=20]="CommentBlock",e[e.ProcessingInstructionBlock=21]="ProcessingInstructionBlock",e[e.Escape=22]="Escape",e[e.Entity=23]="Entity",e[e.HardBreak=24]="HardBreak",e[e.Emphasis=25]="Emphasis",e[e.StrongEmphasis=26]="StrongEmphasis",e[e.Link=27]="Link",e[e.Image=28]="Image",e[e.InlineCode=29]="InlineCode",e[e.HTMLTag=30]="HTMLTag",e[e.Comment=31]="Comment",e[e.ProcessingInstruction=32]="ProcessingInstruction",e[e.URL=33]="URL",e[e.HeaderMark=34]="HeaderMark",e[e.QuoteMark=35]="QuoteMark",e[e.ListMark=36]="ListMark",e[e.LinkMark=37]="LinkMark",e[e.EmphasisMark=38]="EmphasisMark",e[e.CodeMark=39]="CodeMark",e[e.CodeText=40]="CodeText",e[e.CodeInfo=41]="CodeInfo",e[e.LinkTitle=42]="LinkTitle",e[e.LinkLabel=43]="LinkLabel"}(r||(r={}));class f{constructor(e,t){this.start=e,this.content=t,this.marks=[],this.parsers=[]}}class p{constructor(){this.text="",this.baseIndent=0,this.basePos=0,this.depth=0,this.markers=[],this.pos=0,this.indent=0,this.next=-1}forward(){this.basePos>this.pos&&this.forwardInner()}forwardInner(){let e=this.skipSpace(this.basePos);this.indent=this.countIndent(e,this.pos,this.indent),this.pos=e,this.next=e==this.text.length?-1:this.text.charCodeAt(e)}skipSpace(e){return m(this.text,e)}reset(e){for(this.text=e,this.baseIndent=this.basePos=this.pos=this.indent=0,this.forwardInner(),this.depth=1;this.markers.length;)this.markers.pop()}moveBase(e){this.basePos=e,this.baseIndent=this.countIndent(e,this.pos,this.indent)}moveBaseColumn(e){this.baseIndent=e,this.basePos=this.findColumn(e)}addMarker(e){this.markers.push(e)}countIndent(e,t=0,n=0){for(let r=t;r<e;r++)n+=9==this.text.charCodeAt(r)?4-n%4:1;return n}findColumn(e){let t=0;for(let n=0;t<this.text.length&&n<e;t++)n+=9==this.text.charCodeAt(t)?4-n%4:1;return t}scrub(){if(!this.baseIndent)return this.text;let e="";for(let t=0;t<this.basePos;t++)e+=" ";return e+this.text.slice(this.basePos)}}function c(e,t,n){if(n.pos==n.text.length||e!=t.block&&n.indent>=t.stack[n.depth+1].value+n.baseIndent)return!0;if(n.indent>=n.baseIndent+4)return!1;let s=(e.type==r.OrderedList?C:S)(n,t,!1);return s>0&&(e.type!=r.BulletList||b(n,t,!1)<0)&&n.text.charCodeAt(n.pos+s-1)==e.value}const d={[r.Blockquote]:(e,t,n)=>62==n.next&&(n.markers.push(V(r.QuoteMark,t.lineStart+n.pos,t.lineStart+n.pos+1)),n.moveBase(n.pos+(u(n.text.charCodeAt(n.pos+1))?2:1)),e.end=t.lineStart+n.text.length,!0),[r.ListItem]:(e,t,n)=>!(n.indent<n.baseIndent+e.value&&n.next>-1||(n.moveBaseColumn(n.baseIndent+e.value),0)),[r.OrderedList]:c,[r.BulletList]:c,[r.Document]:()=>!0};function u(e){return 32==e||9==e||10==e||13==e}function m(e,t=0){for(;t<e.length&&u(e.charCodeAt(t));)t++;return t}function g(e,t,n){for(;t>n&&u(e.charCodeAt(t-1));)t--;return t}function k(e){if(96!=e.next&&126!=e.next)return-1;let t=e.pos+1;for(;t<e.text.length&&e.text.charCodeAt(t)==e.next;)t++;if(t<e.pos+3)return-1;if(96==e.next)for(let n=t;n<e.text.length;n++)if(96==e.text.charCodeAt(n))return-1;return t}function x(e){return 62!=e.next?-1:32==e.text.charCodeAt(e.pos+1)?2:1}function b(e,t,n){if(42!=e.next&&45!=e.next&&95!=e.next)return-1;let r=1;for(let t=e.pos+1;t<e.text.length;t++){let n=e.text.charCodeAt(t);if(n==e.next)r++;else if(!u(n))return-1}return n&&45==e.next&&w(e)>-1&&e.depth==t.stack.length||r<3?-1:1}function L(e,t){for(let n=e.stack.length-1;n>=0;n--)if(e.stack[n].type==t)return!0;return!1}function S(e,t,n){return 45!=e.next&&43!=e.next&&42!=e.next||e.pos!=e.text.length-1&&!u(e.text.charCodeAt(e.pos+1))||!(!n||L(t,r.BulletList)||e.skipSpace(e.pos+2)<e.text.length)?-1:1}function C(e,t,n){let s=e.pos,i=e.next;for(;i>=48&&i<=57;){if(s++,s==e.text.length)return-1;i=e.text.charCodeAt(s)}return s==e.pos||s>e.pos+9||46!=i&&41!=i||s<e.text.length-1&&!u(e.text.charCodeAt(s+1))||n&&!L(t,r.OrderedList)&&(e.skipSpace(s+1)==e.text.length||s>e.pos+1||49!=e.next)?-1:s+1-e.pos}function y(e){if(35!=e.next)return-1;let t=e.pos+1;for(;t<e.text.length&&35==e.text.charCodeAt(t);)t++;if(t<e.text.length&&32!=e.text.charCodeAt(t))return-1;let n=t-e.pos;return n>6?-1:n}function w(e){if(45!=e.next&&61!=e.next||e.indent>=e.baseIndent+4)return-1;let t=e.pos+1;for(;t<e.text.length&&e.text.charCodeAt(t)==e.next;)t++;let n=t;for(;t<e.text.length&&u(e.text.charCodeAt(t));)t++;return t==e.text.length?n:-1}const A=/^[ \t]*$/,T=/-->/,I=/\?>/,B=[[/^<(?:script|pre|style)(?:\s|>|$)/i,/<\/(?:script|pre|style)>/i],[/^\s*<!--/,T],[/^\s*<\?/,I],[/^\s*<![A-Z]/,/>/],[/^\s*<!\[CDATA\[/,/\]\]>/],[/^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i,A],[/^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i,A]];function E(e,t,n){if(60!=e.next)return-1;let r=e.text.slice(e.pos);for(let e=0,t=B.length-(n?1:0);e<t;e++)if(B[e][0].test(r))return e;return-1}function M(e,t){let n=e.countIndent(t,e.pos,e.indent),r=e.countIndent(e.skipSpace(t),t,n);return r>=n+5?n+1:r}function H(e,t,n){let s=e.length-1;s>=0&&e[s].to==t&&e[s].type==r.CodeText?e[s].to=n:e.push(V(r.CodeText,t,n))}const v={LinkReference:void 0,IndentedCode(e,t){let n=t.baseIndent+4;if(t.indent<n)return!1;let s=t.findColumn(n),i=e.lineStart+s,o=e.lineStart+t.text.length,a=[],l=[];for(H(a,i,o);e.nextLine()&&t.depth>=e.stack.length;)if(t.pos==t.text.length){H(l,e.lineStart-1,e.lineStart);for(let e of t.markers)l.push(e)}else{if(t.indent<n)break;{if(l.length){for(let e of l)e.type==r.CodeText?H(a,e.from,e.to):a.push(e);l=[]}H(a,e.lineStart-1,e.lineStart);for(let e of t.markers)a.push(e);o=e.lineStart+t.text.length;let n=e.lineStart+t.findColumn(t.baseIndent+4);n<o&&H(a,n,o)}}return l.length&&(l=l.filter((e=>e.type!=r.CodeText)),l.length&&(t.markers=l.concat(t.markers))),e.addNode(e.buffer.writeElements(a,-i).finish(r.CodeBlock,o-i),i),!0},FencedCode(e,t){let n=k(t);if(n<0)return!1;let s=e.lineStart+t.pos,i=t.next,o=n-t.pos,a=t.skipSpace(n),l=g(t.text,t.text.length,a),h=[V(r.CodeMark,s,s+o)];a<l&&h.push(V(r.CodeInfo,e.lineStart+a,e.lineStart+l));for(let n=!0;e.nextLine()&&t.depth>=e.stack.length;n=!1){let s=t.pos;if(t.indent-t.baseIndent<4)for(;s<t.text.length&&t.text.charCodeAt(s)==i;)s++;if(s-t.pos>=o&&t.skipSpace(s)==t.text.length){for(let e of t.markers)h.push(e);h.push(V(r.CodeMark,e.lineStart+t.pos,e.lineStart+s)),e.nextLine();break}{n||H(h,e.lineStart-1,e.lineStart);for(let e of t.markers)h.push(e);let r=e.lineStart+t.basePos,s=e.lineStart+t.text.length;r<s&&H(h,r,s)}}return e.addNode(e.buffer.writeElements(h,-s).finish(r.FencedCode,e.prevLineEnd()-s),s),!0},Blockquote(e,t){let n=x(t);return!(n<0)&&(e.startContext(r.Blockquote,t.pos),e.addNode(r.QuoteMark,e.lineStart+t.pos,e.lineStart+t.pos+1),t.moveBase(t.pos+n),null)},HorizontalRule(e,t){if(b(t,e,!1)<0)return!1;let n=e.lineStart+t.pos;return e.nextLine(),e.addNode(r.HorizontalRule,n),!0},BulletList(e,t){let n=S(t,e,!1);if(n<0)return!1;e.block.type!=r.BulletList&&e.startContext(r.BulletList,t.basePos,t.next);let s=M(t,t.pos+1);return e.startContext(r.ListItem,t.basePos,s-t.baseIndent),e.addNode(r.ListMark,e.lineStart+t.pos,e.lineStart+t.pos+n),t.moveBaseColumn(s),null},OrderedList(e,t){let n=C(t,e,!1);if(n<0)return!1;e.block.type!=r.OrderedList&&e.startContext(r.OrderedList,t.basePos,t.text.charCodeAt(t.pos+n-1));let s=M(t,t.pos+n);return e.startContext(r.ListItem,t.basePos,s-t.baseIndent),e.addNode(r.ListMark,e.lineStart+t.pos,e.lineStart+t.pos+n),t.moveBaseColumn(s),null},ATXHeading(e,t){let n=y(t);if(n<0)return!1;let s=t.pos,i=e.lineStart+s,o=g(t.text,t.text.length,s),a=o;for(;a>s&&t.text.charCodeAt(a-1)==t.next;)a--;a!=o&&a!=s&&u(t.text.charCodeAt(a-1))||(a=t.text.length);let l=e.buffer.write(r.HeaderMark,0,n).writeElements(e.parser.parseInline(t.text.slice(s+n+1,a),i+n+1),-i);a<t.text.length&&l.write(r.HeaderMark,a-s,o-s);let h=l.finish(r.ATXHeading1-1+n,t.text.length-s);return e.nextLine(),e.addNode(h,i),!0},HTMLBlock(e,t){let n=E(t,0,!1);if(n<0)return!1;let s=e.lineStart+t.pos,i=B[n][1],o=[],a=i!=A;for(;!i.test(t.text)&&e.nextLine();){if(t.depth<e.stack.length){a=!1;break}for(let e of t.markers)o.push(e)}a&&e.nextLine();let l=i==T?r.CommentBlock:i==I?r.ProcessingInstructionBlock:r.HTMLBlock,h=e.prevLineEnd();return e.addNode(e.buffer.writeElements(o,-s).finish(l,h-s),s),!0},SetextHeading:void 0};class P{constructor(e){this.stage=0,this.elts=[],this.pos=0,this.start=e.start,this.advance(e.content)}nextLine(e,t,n){if(-1==this.stage)return!1;let r=n.content+"\n"+t.scrub(),s=this.advance(r);return s>-1&&s<r.length&&this.complete(e,n,s)}finish(e,t){return(2==this.stage||3==this.stage)&&m(t.content,this.pos)==t.content.length&&this.complete(e,t,t.content.length)}complete(e,t,n){return e.addLeafElement(t,V(r.LinkReference,this.start,this.start+n,this.elts)),!0}nextStage(e){return e?(this.pos=e.to-this.start,this.elts.push(e),this.stage++,!0):(!1===e&&(this.stage=-1),!1)}advance(e){for(;;){if(-1==this.stage)return-1;if(0==this.stage){if(!this.nextStage(ae(e,this.pos,this.start,!0)))return-1;if(58!=e.charCodeAt(this.pos))return this.stage=-1;this.elts.push(V(r.LinkMark,this.pos+this.start,this.pos+this.start+1)),this.pos++}else{if(1!=this.stage){if(2==this.stage){let t=m(e,this.pos),n=0;if(t>this.pos){let r=oe(e,t,this.start);if(r){let t=J(e,r.to-this.start);t>0&&(this.nextStage(r),n=t)}}return n||(n=J(e,this.pos)),n>0&&n<e.length?n:-1}return J(e,this.pos)}if(!this.nextStage(ie(e,m(e,this.pos),this.start)))return-1}}}}function J(e,t){for(;t<e.length;t++){let n=e.charCodeAt(t);if(10==n)break;if(!u(n))return-1}return t}class N{nextLine(e,t,n){let s=t.depth<e.stack.length?-1:w(t),i=t.next;if(s<0)return!1;let o=V(r.HeaderMark,e.lineStart+t.pos,e.lineStart+s);return e.nextLine(),e.addLeafElement(n,V(61==i?r.SetextHeading1:r.SetextHeading2,n.start,e.prevLineEnd(),[...e.parser.parseInline(n.content,n.start),o])),!0}finish(){return!1}}const O={LinkReference:(e,t)=>91==t.content.charCodeAt(0)?new P(t):null,SetextHeading:()=>new N},R=[(e,t)=>y(t)>=0,(e,t)=>k(t)>=0,(e,t)=>x(t)>=0,(e,t)=>S(t,e,!0)>=0,(e,t)=>C(t,e,!0)>=0,(e,t)=>b(t,e,!0)>=0,(e,t)=>E(t,0,!0)>=0],X={text:"",end:0};class z{constructor(e,t,n,s){this.parser=e,this.input=t,this.ranges=s,this.line=new p,this.atEnd=!1,this.dontInject=new Set,this.stoppedAt=null,this.rangeI=0,this.to=s[s.length-1].to,this.lineStart=this.absoluteLineStart=this.absoluteLineEnd=s[0].from,this.block=h.create(r.Document,0,this.lineStart,0,0),this.stack=[this.block],this.fragments=n.length?new pe(n,t):null,this.readLine()}get parsedPos(){return this.absoluteLineStart}advance(){if(null!=this.stoppedAt&&this.absoluteLineStart>this.stoppedAt)return this.finish();let{line:e}=this;for(;;){for(;e.depth<this.stack.length;)this.finishContext();for(let t of e.markers)this.addNode(t.type,t.from,t.to);if(e.pos<e.text.length)break;if(!this.nextLine())return this.finish()}if(this.fragments&&this.reuseFragment(e.basePos))return null;e:for(;;){for(let t of this.parser.blockParsers)if(t){let n=t(this,e);if(0!=n){if(1==n)return null;e.forward();continue e}}break}let t=new f(this.lineStart+e.pos,e.text.slice(e.pos));for(let e of this.parser.leafBlockParsers)if(e){let n=e(this,t);n&&t.parsers.push(n)}e:for(;this.nextLine()&&e.pos!=e.text.length;){if(e.indent<e.baseIndent+4)for(let n of this.parser.endLeafBlock)if(n(this,e,t))break e;for(let n of t.parsers)if(n.nextLine(this,e,t))return null;t.content+="\n"+e.scrub();for(let n of e.markers)t.marks.push(n)}return this.finishLeaf(t),null}stopAt(e){if(null!=this.stoppedAt&&this.stoppedAt<e)throw new RangeError("Can't move stoppedAt forward");this.stoppedAt=e}reuseFragment(e){if(!this.fragments.moveTo(this.absoluteLineStart+e,this.absoluteLineStart)||!this.fragments.matches(this.block.hash))return!1;let t=this.fragments.takeNodes(this);if(!t)return!1;let n=t,r=this.absoluteLineStart+t;for(let e=1;e<this.ranges.length;e++){let t=this.ranges[e-1].to,s=this.ranges[e].from;t>=this.lineStart&&s<r&&(n-=s-t)}return this.lineStart+=n,this.absoluteLineStart+=t,this.moveRangeI(),this.absoluteLineStart<this.to?(this.lineStart++,this.absoluteLineStart++,this.readLine()):(this.atEnd=!0,this.readLine()),!0}get depth(){return this.stack.length}parentType(e=this.depth-1){return this.parser.nodeSet.types[this.stack[e].type]}nextLine(){return this.lineStart+=this.line.text.length,this.absoluteLineEnd>=this.to?(this.absoluteLineStart=this.absoluteLineEnd,this.atEnd=!0,this.readLine(),!1):(this.lineStart++,this.absoluteLineStart=this.absoluteLineEnd+1,this.moveRangeI(),this.readLine(),!0)}moveRangeI(){for(;this.rangeI<this.ranges.length-1&&this.absoluteLineStart>=this.ranges[this.rangeI].to;)this.rangeI++,this.absoluteLineStart=Math.max(this.absoluteLineStart,this.ranges[this.rangeI].from)}scanLine(e){let t=X;if(t.end=e,e>=this.to)t.text="";else if(t.text=this.lineChunkAt(e),t.end+=t.text.length,this.ranges.length>1){let e=this.absoluteLineStart,n=this.rangeI;for(;this.ranges[n].to<t.end;){n++;let r=this.ranges[n].from,s=this.lineChunkAt(r);t.end=r+s.length,t.text=t.text.slice(0,this.ranges[n-1].to-e)+s,e=t.end-t.text.length}}return t}readLine(){let{line:e}=this,{text:t,end:n}=this.scanLine(this.absoluteLineStart);for(this.absoluteLineEnd=n,e.reset(t);e.depth<this.stack.length;e.depth++){let t=this.stack[e.depth],n=this.parser.skipContextMarkup[t.type];if(!n)throw new Error("Unhandled block context "+r[t.type]);if(!n(t,this,e))break;e.forward()}}lineChunkAt(e){let t,n=this.input.chunk(e);if(this.input.lineChunks)t="\n"==n?"":n;else{let e=n.indexOf("\n");t=e<0?n:n.slice(0,e)}return e+t.length>this.to?t.slice(0,this.to-e):t}prevLineEnd(){return this.atEnd?this.lineStart:this.lineStart-1}startContext(e,t,n=0){this.block=h.create(e,n,this.lineStart+t,this.block.hash,this.lineStart+this.line.text.length),this.stack.push(this.block)}startComposite(e,t,n=0){this.startContext(this.parser.getNodeType(e),t,n)}addNode(e,t,n){"number"==typeof e&&(e=new a.mp(this.parser.nodeSet.types[e],_,_,(null!=n?n:this.prevLineEnd())-t)),this.block.addChild(e,t-this.block.from)}addElement(e){this.block.addChild(e.toTree(this.parser.nodeSet),e.from-this.block.from)}addLeafElement(e,t){this.addNode(this.buffer.writeElements(he(t.children,e.marks),-t.from).finish(t.type,t.to-t.from),t.from)}finishContext(){let e=this.stack.pop(),t=this.stack[this.stack.length-1];t.addChild(e.toTree(this.parser.nodeSet),e.from-t.from),this.block=t}finish(){for(;this.stack.length>1;)this.finishContext();return this.addGaps(this.block.toTree(this.parser.nodeSet,this.lineStart))}addGaps(e){return this.ranges.length>1?q(this.ranges,0,e.topNode,this.ranges[0].from,this.dontInject):e}finishLeaf(e){for(let t of e.parsers)if(t.finish(this,e))return;let t=he(this.parser.parseInline(e.content,e.start),e.marks);this.addNode(this.buffer.writeElements(t,-e.start).finish(r.Paragraph,e.content.length),e.start)}elt(e,t,n,r){return"string"==typeof e?V(this.parser.getNodeType(e),t,n,r):new G(e,t)}get buffer(){return new Q(this.parser.nodeSet)}}function q(e,t,n,r,s){if(s.has(n.tree))return n.tree;let i=e[t].to,o=[],l=[],h=n.from+r;function f(n,s){for(;s?n>=i:n>i;){let s=e[t+1].from-i;r+=s,n+=s,t++,i=e[t].to}}for(let a=n.firstChild;a;a=a.nextSibling){f(a.from+r,!0);let n,p=a.from+r;a.to+r>i?(n=q(e,t,a,r,s),f(a.to+r,!1)):n=a.toTree(),o.push(n),l.push(p-h)}return f(n.to+r,!1),new a.mp(n.type,o,l,n.to+r-h,n.tree?n.tree.propValues:void 0)}class j extends a._b{constructor(e,t,n,r,s,i,o,a,l){super(),this.nodeSet=e,this.blockParsers=t,this.leafBlockParsers=n,this.blockNames=r,this.endLeafBlock=s,this.skipContextMarkup=i,this.inlineParsers=o,this.inlineNames=a,this.wrappers=l,this.nodeTypes=Object.create(null);for(let t of e.types)this.nodeTypes[t.name]=t.id}createParse(e,t,n){let r=new z(this,e,t,n);for(let s of this.wrappers)r=s(r,e,t,n);return r}configure(e){let t=$(e);if(!t)return this;let{nodeSet:n,skipContextMarkup:s}=this,i=this.blockParsers.slice(),o=this.leafBlockParsers.slice(),h=this.blockNames.slice(),f=this.inlineParsers.slice(),p=this.inlineNames.slice(),c=this.endLeafBlock.slice(),d=this.wrappers;if(D(t.defineNodes)){s=Object.assign({},s);let e,i=n.types.slice();for(let n of t.defineNodes){let{name:t,block:o,composite:h,style:f}="string"==typeof n?{name:n}:n;if(i.some((e=>e.name==t)))continue;h&&(s[i.length]=(e,t,n)=>h(t,n,e.value));let p=i.length,c=h?["Block","BlockContext"]:o?p>=r.ATXHeading1&&p<=r.SetextHeading2?["Block","LeafBlock","Heading"]:["Block","LeafBlock"]:void 0;i.push(a.Jq.define({id:p,name:t,props:c&&[[a.md.group,c]]})),f&&(e||(e={}),Array.isArray(f)||f instanceof l.Vp?e[t]=f:Object.assign(e,f))}n=new a.Lj(i),e&&(n=n.extend((0,l.Gv)(e)))}if(D(t.props)&&(n=n.extend(...t.props)),D(t.remove))for(let e of t.remove){let t=this.blockNames.indexOf(e),n=this.inlineNames.indexOf(e);t>-1&&(i[t]=o[t]=void 0),n>-1&&(f[n]=void 0)}if(D(t.parseBlock))for(let e of t.parseBlock){let t=h.indexOf(e.name);if(t>-1)i[t]=e.parse,o[t]=e.leaf;else{let t=e.before?U(h,e.before):e.after?U(h,e.after)+1:h.length-1;i.splice(t,0,e.parse),o.splice(t,0,e.leaf),h.splice(t,0,e.name)}e.endLeaf&&c.push(e.endLeaf)}if(D(t.parseInline))for(let e of t.parseInline){let t=p.indexOf(e.name);if(t>-1)f[t]=e.parse;else{let t=e.before?U(p,e.before):e.after?U(p,e.after)+1:p.length-1;f.splice(t,0,e.parse),p.splice(t,0,e.name)}}return t.wrap&&(d=d.concat(t.wrap)),new j(n,i,o,h,c,s,f,p,d)}getNodeType(e){let t=this.nodeTypes[e];if(null==t)throw new RangeError(`Unknown node type '${e}'`);return t}parseInline(e,t){let n=new le(this,e,t);e:for(let e=t;e<n.end;){let t=n.char(e);for(let r of this.inlineParsers)if(r){let s=r(n,t,e);if(s>=0){e=s;continue e}}e++}return n.resolveMarkers(0)}}function D(e){return null!=e&&e.length>0}function $(e){if(!Array.isArray(e))return e;if(0==e.length)return null;let t=$(e[0]);if(1==e.length)return t;let n=$(e.slice(1));if(!n||!t)return t||n;let r=(e,t)=>(e||_).concat(t||_),s=t.wrap,i=n.wrap;return{props:r(t.props,n.props),defineNodes:r(t.defineNodes,n.defineNodes),parseBlock:r(t.parseBlock,n.parseBlock),parseInline:r(t.parseInline,n.parseInline),remove:r(t.remove,n.remove),wrap:s?i?(e,t,n,r)=>s(i(e,t,n,r),t,n,r):s:i}}function U(e,t){let n=e.indexOf(t);if(n<0)throw new RangeError(`Position specified relative to unknown parser ${t}`);return n}let F=[a.Jq.none];for(let e,t=1;e=r[t];t++)F[t]=a.Jq.define({id:t,name:e,props:t>=r.Escape?[]:[[a.md.group,t in d?["Block","BlockContext"]:["Block","LeafBlock"]]]});const _=[];class Q{constructor(e){this.nodeSet=e,this.content=[],this.nodes=[]}write(e,t,n,r=0){return this.content.push(e,t,n,4+4*r),this}writeElements(e,t=0){for(let n of e)n.writeTo(this,t);return this}finish(e,t){return a.mp.build({buffer:this.content,nodeSet:this.nodeSet,reused:this.nodes,topID:e,length:t})}}class Z{constructor(e,t,n,r=_){this.type=e,this.from=t,this.to=n,this.children=r}writeTo(e,t){let n=e.content.length;e.writeElements(this.children,t),e.content.push(this.type,this.from+t,this.to+t,e.content.length+4-n)}toTree(e){return new Q(e).writeElements(this.children,-this.from).finish(this.type,this.to-this.from)}}class G{constructor(e,t){this.tree=e,this.from=t}get to(){return this.from+this.tree.length}get type(){return this.tree.type.id}get children(){return _}writeTo(e,t){e.nodes.push(this.tree),e.content.push(e.nodes.length-1,this.from+t,this.to+t,-1)}toTree(){return this.tree}}function V(e,t,n,r){return new Z(e,t,n,r)}const K={resolve:"Emphasis",mark:"EmphasisMark"},Y={resolve:"Emphasis",mark:"EmphasisMark"},W={},ee={};class te{constructor(e,t,n,r){this.type=e,this.from=t,this.to=n,this.side=r}}let ne=/[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;try{ne=new RegExp("[\\p{Pc}|\\p{Pd}|\\p{Pe}|\\p{Pf}|\\p{Pi}|\\p{Po}|\\p{Ps}]","u")}catch(e){}const re={Escape(e,t,n){if(92!=t||n==e.end-1)return-1;let s=e.char(n+1);for(let t=0;t<32;t++)if("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".charCodeAt(t)==s)return e.append(V(r.Escape,n,n+2));return-1},Entity(e,t,n){if(38!=t)return-1;let s=/^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(e.slice(n+1,n+31));return s?e.append(V(r.Entity,n,n+1+s[0].length)):-1},InlineCode(e,t,n){if(96!=t||n&&96==e.char(n-1))return-1;let s=n+1;for(;s<e.end&&96==e.char(s);)s++;let i=s-n,o=0;for(;s<e.end;s++)if(96==e.char(s)){if(o++,o==i&&96!=e.char(s+1))return e.append(V(r.InlineCode,n,s+1,[V(r.CodeMark,n,n+i),V(r.CodeMark,s+1-i,s+1)]))}else o=0;return-1},HTMLTag(e,t,n){if(60!=t||n==e.end-1)return-1;let s=e.slice(n+1,e.end),i=/^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(s);if(i)return e.append(V(r.URL,n,n+1+i[0].length));let o=/^!--[^>](?:-[^-]|[^-])*?-->/i.exec(s);if(o)return e.append(V(r.Comment,n,n+1+o[0].length));let a=/^\?[^]*?\?>/.exec(s);if(a)return e.append(V(r.ProcessingInstruction,n,n+1+a[0].length));let l=/^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(s);return l?e.append(V(r.HTMLTag,n,n+1+l[0].length)):-1},Emphasis(e,t,n){if(95!=t&&42!=t)return-1;let r=n+1;for(;e.char(r)==t;)r++;let s=e.slice(n-1,n),i=e.slice(r,r+1),o=ne.test(s),a=ne.test(i),l=/\s|^$/.test(s),h=/\s|^$/.test(i),f=!h&&(!a||l||o),p=!l&&(!o||h||a),c=f&&(42==t||!p||o),d=p&&(42==t||!f||a);return e.append(new te(95==t?K:Y,n,r,(c?1:0)|(d?2:0)))},HardBreak(e,t,n){if(92==t&&10==e.char(n+1))return e.append(V(r.HardBreak,n,n+2));if(32==t){let t=n+1;for(;32==e.char(t);)t++;if(10==e.char(t)&&t>=n+2)return e.append(V(r.HardBreak,n,t+1))}return-1},Link:(e,t,n)=>91==t?e.append(new te(W,n,n+1,1)):-1,Image:(e,t,n)=>33==t&&91==e.char(n+1)?e.append(new te(ee,n,n+2,1)):-1,LinkEnd(e,t,n){if(93!=t)return-1;for(let t=e.parts.length-1;t>=0;t--){let s=e.parts[t];if(s instanceof te&&(s.type==W||s.type==ee)){if(!s.side||e.skipSpace(s.to)==n&&!/[(\[]/.test(e.slice(n+1,n+2)))return e.parts[t]=null,-1;let i=e.takeContent(t),o=e.parts[t]=se(e,i,s.type==W?r.Link:r.Image,s.from,n+1);if(s.type==W)for(let n=0;n<t;n++){let t=e.parts[n];t instanceof te&&t.type==W&&(t.side=0)}return o.to}}return-1}};function se(e,t,n,s,i){let{text:o}=e,a=e.char(i),l=i;if(t.unshift(V(r.LinkMark,s,s+(n==r.Image?2:1))),t.push(V(r.LinkMark,i-1,i)),40==a){let n,s=e.skipSpace(i+1),a=ie(o,s-e.offset,e.offset);a&&(s=e.skipSpace(a.to),n=oe(o,s-e.offset,e.offset),n&&(s=e.skipSpace(n.to))),41==e.char(s)&&(t.push(V(r.LinkMark,i,i+1)),l=s+1,a&&t.push(a),n&&t.push(n),t.push(V(r.LinkMark,s,l)))}else if(91==a){let n=ae(o,i-e.offset,e.offset,!1);n&&(t.push(n),l=n.to)}return V(n,s,l,t)}function ie(e,t,n){if(60==e.charCodeAt(t)){for(let s=t+1;s<e.length;s++){let i=e.charCodeAt(s);if(62==i)return V(r.URL,t+n,s+1+n);if(60==i||10==i)return!1}return null}{let s=0,i=t;for(let t=!1;i<e.length;i++){let n=e.charCodeAt(i);if(u(n))break;if(t)t=!1;else if(40==n)s++;else if(41==n){if(!s)break;s--}else 92==n&&(t=!0)}return i>t?V(r.URL,t+n,i+n):i==e.length&&null}}function oe(e,t,n){let s=e.charCodeAt(t);if(39!=s&&34!=s&&40!=s)return!1;let i=40==s?41:s;for(let s=t+1,o=!1;s<e.length;s++){let a=e.charCodeAt(s);if(o)o=!1;else{if(a==i)return V(r.LinkTitle,t+n,s+1+n);92==a&&(o=!0)}}return null}function ae(e,t,n,s){for(let i=!1,o=t+1,a=Math.min(e.length,o+999);o<a;o++){let a=e.charCodeAt(o);if(i)i=!1;else{if(93==a)return!s&&V(r.LinkLabel,t+n,o+1+n);if(s&&!u(a)&&(s=!1),91==a)return!1;92==a&&(i=!0)}}return null}class le{constructor(e,t,n){this.parser=e,this.text=t,this.offset=n,this.parts=[]}char(e){return e>=this.end?-1:this.text.charCodeAt(e-this.offset)}get end(){return this.offset+this.text.length}slice(e,t){return this.text.slice(e-this.offset,t-this.offset)}append(e){return this.parts.push(e),e.to}addDelimiter(e,t,n,r,s){return this.append(new te(e,t,n,(r?1:0)|(s?2:0)))}addElement(e){return this.append(e)}resolveMarkers(e){for(let t=e;t<this.parts.length;t++){let n=this.parts[t];if(!(n instanceof te&&n.type.resolve&&2&n.side))continue;let r,s=n.type==K||n.type==Y,i=n.to-n.from,o=t-1;for(;o>=e;o--){let e=this.parts[o];if(e instanceof te&&1&e.side&&e.type==n.type&&!(s&&(1&n.side||2&e.side)&&(e.to-e.from+i)%3==0&&((e.to-e.from)%3||i%3))){r=e;break}}if(!r)continue;let a=n.type.resolve,l=[],h=r.from,f=n.to;if(s){let e=Math.min(2,r.to-r.from,i);h=r.to-e,f=n.from+e,a=1==e?"Emphasis":"StrongEmphasis"}r.type.mark&&l.push(this.elt(r.type.mark,h,r.to));for(let e=o+1;e<t;e++)this.parts[e]instanceof Z&&l.push(this.parts[e]),this.parts[e]=null;n.type.mark&&l.push(this.elt(n.type.mark,n.from,f));let p=this.elt(a,h,f,l);this.parts[o]=s&&r.from!=h?new te(r.type,r.from,h,r.side):null,(this.parts[t]=s&&n.to!=f?new te(n.type,f,n.to,n.side):null)?this.parts.splice(t,0,p):this.parts[t]=p}let t=[];for(let n=e;n<this.parts.length;n++){let e=this.parts[n];e instanceof Z&&t.push(e)}return t}findOpeningDelimiter(e){for(let t=this.parts.length-1;t>=0;t--){let n=this.parts[t];if(n instanceof te&&n.type==e)return t}return null}takeContent(e){let t=this.resolveMarkers(e);return this.parts.length=e,t}skipSpace(e){return m(this.text,e-this.offset)+this.offset}elt(e,t,n,r){return"string"==typeof e?V(this.parser.getNodeType(e),t,n,r):new G(e,t)}}function he(e,t){if(!t.length)return e;if(!e.length)return t;let n=e.slice(),r=0;for(let e of t){for(;r<n.length&&n[r].to<e.to;)r++;if(r<n.length&&n[r].from<e.from){let t=n[r];t instanceof Z&&(n[r]=new Z(t.type,t.from,t.to,he(t.children,[e])))}else n.splice(r++,0,e)}return n}const fe=[r.CodeBlock,r.ListItem,r.OrderedList,r.BulletList];class pe{constructor(e,t){this.fragments=e,this.input=t,this.i=0,this.fragment=null,this.fragmentEnd=-1,this.cursor=null,e.length&&(this.fragment=e[this.i++])}nextFragment(){this.fragment=this.i<this.fragments.length?this.fragments[this.i++]:null,this.cursor=null,this.fragmentEnd=-1}moveTo(e,t){for(;this.fragment&&this.fragment.to<=e;)this.nextFragment();if(!this.fragment||this.fragment.from>(e?e-1:0))return!1;if(this.fragmentEnd<0){let e=this.fragment.to;for(;e>0&&"\n"!=this.input.read(e-1,e);)e--;this.fragmentEnd=e?e-1:0}let n=this.cursor;n||(n=this.cursor=this.fragment.tree.cursor(),n.firstChild());let r=e+this.fragment.offset;for(;n.to<=r;)if(!n.parent())return!1;for(;;){if(n.from>=r)return this.fragment.from<=t;if(!n.childAfter(r))return!1}}matches(e){let t=this.cursor.tree;return t&&t.prop(a.md.contextHash)==e}takeNodes(e){let t=this.cursor,n=this.fragment.offset,r=this.fragmentEnd-(this.fragment.openEnd?1:0),s=e.absoluteLineStart,i=s,o=e.block.children.length,a=i,l=o;for(;;){if(t.to-n>r){if(t.type.isAnonymous&&t.firstChild())continue;break}if(e.dontInject.add(t.tree),e.addNode(t.tree,t.from-n),t.type.is("Block")&&(fe.indexOf(t.type.id)<0?(i=t.to-n,o=e.block.children.length):(i=a,o=l,a=t.to-n,l=e.block.children.length)),!t.nextSibling())break}for(;e.block.children.length>o;)e.block.children.pop(),e.block.positions.pop();return i-s}}const ce=(0,l.Gv)({"Blockquote/...":l.pJ.quote,HorizontalRule:l.pJ.contentSeparator,"ATXHeading1/... SetextHeading1/...":l.pJ.heading1,"ATXHeading2/... SetextHeading2/...":l.pJ.heading2,"ATXHeading3/...":l.pJ.heading3,"ATXHeading4/...":l.pJ.heading4,"ATXHeading5/...":l.pJ.heading5,"ATXHeading6/...":l.pJ.heading6,"Comment CommentBlock":l.pJ.comment,Escape:l.pJ.escape,Entity:l.pJ.character,"Emphasis/...":l.pJ.emphasis,"StrongEmphasis/...":l.pJ.strong,"Link/... Image/...":l.pJ.link,"OrderedList/... BulletList/...":l.pJ.list,"BlockQuote/...":l.pJ.quote,"InlineCode CodeText":l.pJ.monospace,URL:l.pJ.url,"HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark":l.pJ.processingInstruction,"CodeInfo LinkLabel":l.pJ.labelName,LinkTitle:l.pJ.string,Paragraph:l.pJ.content}),de=new j(new a.Lj(F).extend(ce),Object.keys(v).map((e=>v[e])),Object.keys(v).map((e=>O[e])),Object.keys(v),R,d,Object.keys(re).map((e=>re[e])),Object.keys(re),[]);function ue(e,t,n){let r=[];for(let s=e.firstChild,i=t;;s=s.nextSibling){let e=s?s.from:n;if(e>i&&r.push({from:i,to:e}),!s)break;i=s.to}return r}const me={resolve:"Strikethrough",mark:"StrikethroughMark"},ge={defineNodes:[{name:"Strikethrough",style:{"Strikethrough/...":l.pJ.strikethrough}},{name:"StrikethroughMark",style:l.pJ.processingInstruction}],parseInline:[{name:"Strikethrough",parse(e,t,n){if(126!=t||126!=e.char(n+1)||126==e.char(n+2))return-1;let r=e.slice(n-1,n),s=e.slice(n+2,n+3),i=/\s|^$/.test(r),o=/\s|^$/.test(s),a=ne.test(r),l=ne.test(s);return e.addDelimiter(me,n,n+2,!o&&(!l||i||a),!i&&(!a||o||l))},after:"Emphasis"}]};function ke(e,t,n=0,r,s=0){let i=0,o=!0,a=-1,l=-1,h=!1,f=()=>{r.push(e.elt("TableCell",s+a,s+l,e.parser.parseInline(t.slice(a,l),s+a)))};for(let p=n;p<t.length;p++){let n=t.charCodeAt(p);124!=n||h?(h||32!=n&&9!=n)&&(a<0&&(a=p),l=p+1):((!o||a>-1)&&i++,o=!1,r&&(a>-1&&f(),r.push(e.elt("TableDelimiter",p+s,p+s+1))),a=l=-1),h=!h&&92==n}return a>-1&&(i++,r&&f()),i}function xe(e,t){for(let n=t;n<e.length;n++){let t=e.charCodeAt(n);if(124==t)return!0;92==t&&n++}return!1}const be=/^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/;class Le{constructor(){this.rows=null}nextLine(e,t,n){if(null==this.rows){let r;if(this.rows=!1,(45==t.next||58==t.next||124==t.next)&&be.test(r=t.text.slice(t.pos))){let s=[];ke(e,n.content,0,s,n.start)==ke(e,r,t.pos)&&(this.rows=[e.elt("TableHeader",n.start,n.start+n.content.length,s),e.elt("TableDelimiter",e.lineStart+t.pos,e.lineStart+t.text.length)])}}else if(this.rows){let n=[];ke(e,t.text,t.pos,n,e.lineStart),this.rows.push(e.elt("TableRow",e.lineStart+t.pos,e.lineStart+t.text.length,n))}return!1}finish(e,t){return!!this.rows&&(e.addLeafElement(t,e.elt("Table",t.start,t.start+t.content.length,this.rows)),!0)}}const Se={defineNodes:[{name:"Table",block:!0},{name:"TableHeader",style:{"TableHeader/...":l.pJ.heading}},"TableRow",{name:"TableCell",style:l.pJ.content},{name:"TableDelimiter",style:l.pJ.processingInstruction}],parseBlock:[{name:"Table",leaf:(e,t)=>xe(t.content,0)?new Le:null,endLeaf(e,t,n){if(n.parsers.some((e=>e instanceof Le))||!xe(t.text,t.basePos))return!1;let r=e.scanLine(e.absoluteLineEnd+1).text;return be.test(r)&&ke(e,t.text,t.basePos)==ke(e,r,t.basePos)},before:"SetextHeading"}]};class Ce{nextLine(){return!1}finish(e,t){return e.addLeafElement(t,e.elt("Task",t.start,t.start+t.content.length,[e.elt("TaskMarker",t.start,t.start+3),...e.parser.parseInline(t.content.slice(3),t.start+3)])),!0}}const ye=[Se,{defineNodes:[{name:"Task",block:!0,style:l.pJ.list},{name:"TaskMarker",style:l.pJ.atom}],parseBlock:[{name:"TaskList",leaf:(e,t)=>/^\[[ xX]\]/.test(t.content)&&"ListItem"==e.parentType().name?new Ce:null,after:"SetextHeading"}]},ge];function we(e,t,n){return(r,s,i)=>{if(s!=e||r.char(i+1)==e)return-1;let o=[r.elt(n,i,i+1)];for(let s=i+1;s<r.end;s++){let a=r.char(s);if(a==e)return r.addElement(r.elt(t,i,s+1,o.concat(r.elt(n,s,s+1))));if(92==a&&o.push(r.elt("Escape",s,2+s++)),u(a))break}return-1}}const Ae={defineNodes:[{name:"Superscript",style:l.pJ.special(l.pJ.content)},{name:"SuperscriptMark",style:l.pJ.processingInstruction}],parseInline:[{name:"Superscript",parse:we(94,"Superscript","SuperscriptMark")}]},Te={defineNodes:[{name:"Subscript",style:l.pJ.special(l.pJ.content)},{name:"SubscriptMark",style:l.pJ.processingInstruction}],parseInline:[{name:"Subscript",parse:we(126,"Subscript","SubscriptMark")}]},Ie={defineNodes:[{name:"Emoji",style:l.pJ.character}],parseInline:[{name:"Emoji",parse(e,t,n){let r;return 58==t&&(r=/^[a-zA-Z_0-9]+:/.exec(e.slice(n+1,e.end)))?e.addElement(e.elt("Emoji",n,n+1+r[0].length)):-1}}]};var Be=n(6510);const Ee=(0,o.kU)({commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}}}),Me=new a.md,He=de.configure({props:[o.x0.add((e=>!e.is("Block")||e.is("Document")||null!=ve(e)?void 0:(e,t)=>({from:t.doc.lineAt(e.from).to,to:e.to}))),Me.add(ve),o.uj.add({Document:()=>null}),o.pp.add({Document:Ee})]});function ve(e){let t=/^(?:ATX|Setext)Heading(\d)$/.exec(e.name);return t?+t[1]:void 0}function Pe(e,t){let n=e;for(;;){let e,r=n.nextSibling;if(!r||null!=(e=ve(r.type))&&e<=t)break;n=r}return n.to}const Je=o.rs.of(((e,t,n)=>{for(let r=(0,o.qz)(e).resolveInner(n,-1);r&&!(r.from<t);r=r.parent){let e=r.type.prop(Me);if(null==e)continue;let t=Pe(r,e);if(t>n)return{from:n,to:t}}return null}));function Ne(e){return new o.SQ(Ee,e,[Je],"markdown")}const Oe=Ne(He),Re=Ne(He.configure([ye,Te,Ae,Ie]));class Xe{constructor(e,t,n,r,s,i,o){this.node=e,this.from=t,this.to=n,this.spaceBefore=r,this.spaceAfter=s,this.type=i,this.item=o}blank(e,t=!0){let n=this.spaceBefore+("Blockquote"==this.node.name?">":"");if(null!=e){for(;n.length<e;)n+=" ";return n}for(let e=this.to-this.from-n.length-this.spaceAfter.length;e>0;e--)n+=" ";return n+(t?this.spaceAfter:"")}marker(e,t){let n="OrderedList"==this.node.name?String(+qe(this.item,e)[2]+t):"";return this.spaceBefore+n+this.type+this.spaceAfter}}function ze(e,t){let n=[];for(let t=e;t&&"Document"!=t.name;t=t.parent)"ListItem"!=t.name&&"Blockquote"!=t.name&&"FencedCode"!=t.name||n.push(t);let r=[];for(let e=n.length-1;e>=0;e--){let s,i=n[e],o=t.lineAt(i.from),a=i.from-o.from;if("FencedCode"==i.name)r.push(new Xe(i,a,a,"","","",null));else if("Blockquote"==i.name&&(s=/^[ \t]*>( ?)/.exec(o.text.slice(a))))r.push(new Xe(i,a,a+s[0].length,"",s[1],">",null));else if("ListItem"==i.name&&"OrderedList"==i.parent.name&&(s=/^([ \t]*)\d+([.)])([ \t]*)/.exec(o.text.slice(a)))){let e=s[3],t=s[0].length;e.length>=4&&(e=e.slice(0,e.length-4),t-=4),r.push(new Xe(i.parent,a,a+t,s[1],e,s[2],i))}else if("ListItem"==i.name&&"BulletList"==i.parent.name&&(s=/^([ \t]*)([-+*])([ \t]{1,4}\[[ xX]\])?([ \t]+)/.exec(o.text.slice(a)))){let e=s[4],t=s[0].length;e.length>4&&(e=e.slice(0,e.length-4),t-=4);let n=s[2];s[3]&&(n+=s[3].replace(/[xX]/," ")),r.push(new Xe(i.parent,a,a+t,s[1],e,n,i))}}return r}function qe(e,t){return/^(\s*)(\d+)(?=[.)])/.exec(t.sliceString(e.from,e.from+10))}function je(e,t,n,r=0){for(let s=-1,i=e;;){if("ListItem"==i.name){let e=qe(i,t),o=+e[2];if(s>=0){if(o!=s+1)return;n.push({from:i.from+e[1].length,to:i.from+e[0].length,insert:String(s+2+r)})}s=o}let e=i.nextSibling;if(!e)break;i=e}}const De=({state:e,dispatch:t})=>{let n=(0,o.qz)(e),{doc:r}=e,i=null,a=e.changeByRange((t=>{if(!t.empty||!Re.isActiveAt(e,t.from))return i={range:t};let o=t.from,a=r.lineAt(o),l=ze(n.resolveInner(o,-1),r);for(;l.length&&l[l.length-1].from>o-a.from;)l.pop();if(!l.length)return i={range:t};let h=l[l.length-1];if(h.to-h.spaceAfter.length>o-a.from)return i={range:t};let f=o>=h.to-h.spaceAfter.length&&!/\S/.test(a.text.slice(h.to));if(h.item&&f){if(h.node.firstChild.to>=o||a.from>0&&!/[^\s>]/.test(r.lineAt(a.from-1).text)){let e,t=l.length>1?l[l.length-2]:null,n="";t&&t.item?(e=a.from+t.from,n=t.marker(r,1)):e=a.from+(t?t.to:0);let i=[{from:e,to:o,insert:n}];return"OrderedList"==h.node.name&&je(h.item,r,i,-2),t&&"OrderedList"==t.node.name&&je(t.item,r,i),{range:s.EditorSelection.cursor(e+n.length),changes:i}}{let t="";for(let e=0,n=l.length-2;e<=n;e++)t+=l[e].blank(e<n?l[e+1].from-t.length:null,e<n);return t+=e.lineBreak,{range:s.EditorSelection.cursor(o+t.length),changes:{from:a.from,insert:t}}}}if("Blockquote"==h.node.name&&f&&a.from){let n=r.lineAt(a.from-1),s=/>\s*$/.exec(n.text);if(s&&s.index==h.from){let r=e.changes([{from:n.from+s.index,to:n.to},{from:a.from+h.from,to:a.to}]);return{range:t.map(r),changes:r}}}let p=[];"OrderedList"==h.node.name&&je(h.item,r,p);let c=h.item&&h.item.from<a.from,d="";if(!c||/^[\s\d.)\-+*>]*/.exec(a.text)[0].length>=h.to)for(let e=0,t=l.length-1;e<=t;e++)d+=e!=t||c?l[e].blank(e<t?l[e+1].from-d.length:null):l[e].marker(r,1);let u=o;for(;u>a.from&&/\s/.test(a.text.charAt(u-a.from-1));)u--;return d=e.lineBreak+d,p.push({from:u,to:o,insert:d}),{range:s.EditorSelection.cursor(u+d.length),changes:p}}));return!i&&(t(e.update(a,{scrollIntoView:!0,userEvent:"input"})),!0)};function $e(e){return"QuoteMark"==e.name||"ListMark"==e.name}const Ue=({state:e,dispatch:t})=>{let n=(0,o.qz)(e),r=null,i=e.changeByRange((t=>{let i=t.from,{doc:o}=e;if(t.empty&&Re.isActiveAt(e,t.from)){let e=o.lineAt(i),r=ze(function(e,t){let n=e.resolveInner(t,-1),r=t;$e(n)&&(r=n.from,n=n.parent);for(let e;e=n.childBefore(r);)if($e(e))r=e.from;else{if("OrderedList"!=e.name&&"BulletList"!=e.name)break;n=e.lastChild,r=n.to}return n}(n,i),o);if(r.length){let n=r[r.length-1],o=n.to-n.spaceAfter.length+(n.spaceAfter?1:0);if(i-e.from>o&&!/\S/.test(e.text.slice(o,i-e.from)))return{range:s.EditorSelection.cursor(e.from+o),changes:{from:e.from+o,to:i}};if(i-e.from==o&&(!n.item||e.from<=n.item.from||!/\S/.test(e.text.slice(0,n.to)))){let r=e.from+n.from;if(n.item&&n.node.from<n.item.from&&/\S/.test(e.text.slice(n.from,n.to)))return{range:t,changes:{from:r,to:e.from+n.to,insert:n.blank(n.to-n.from)}};if(r<i)return{range:s.EditorSelection.cursor(r),changes:{from:r,to:i}}}}}return r={range:t}}));return!r&&(t(e.update(i,{scrollIntoView:!0,userEvent:"delete"})),!0)},Fe=[{key:"Enter",run:De},{key:"Backspace",run:Ue}],_e=(0,Be.html)({matchClosingTags:!1});function Qe(e={}){let{codeLanguages:t,defaultCodeLanguage:n,addKeymap:l=!0,base:{parser:h}=Oe}=e;if(!(h instanceof j))throw new RangeError("Base parser provided to `markdown` should be a Markdown parser");let f,p=e.extensions?[e.extensions]:[],c=[_e.support];n instanceof o.ri?(c.push(n.support),f=n.language):n&&(f=n);let d=t||f?(u=t,m=f,e=>{if(e&&u){let t=null;if(e=/\S*/.exec(e)[0],t="function"==typeof u?u(e):o.c6.matchLanguageName(u,e,!0),t instanceof o.c6)return t.support?t.support.language.parser:o.Be.getSkippingParser(t.load());if(t)return t.parser}return m?m.parser:null}):void 0;var u,m;return p.push(function(e){let{codeParser:t,htmlParser:n}=e,s=(0,a.FE)(((e,s)=>{let i=e.type.id;if(!t||i!=r.CodeBlock&&i!=r.FencedCode){if(n&&(i==r.HTMLBlock||i==r.HTMLTag))return{parser:n,overlay:ue(e.node,e.from,e.to)}}else{let n="";if(i==r.FencedCode){let t=e.node.getChild(r.CodeInfo);t&&(n=s.read(t.from,t.to))}let o=t(n);if(o)return{parser:o,overlay:e=>e.type.id==r.CodeText}}return null}));return{wrap:s}}({codeParser:d,htmlParser:_e.language.parser})),l&&c.push(s.Prec.high(i.keymap.of(Fe))),new o.ri(Ne(h.configure(p)),c)}}}]);