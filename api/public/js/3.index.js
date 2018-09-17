(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1144:function(n,t,e){"use strict";var r,i,u,o,a,c,s,f;e.d(t,"h",function(){return r}),e.d(t,"i",function(){return i}),e.d(t,"f",function(){return u}),e.d(t,"c",function(){return o}),e.d(t,"a",function(){return c}),e.d(t,"l",function(){return s}),e.d(t,"b",function(){return p}),e.d(t,"e",function(){return v}),e.d(t,"g",function(){return y}),e.d(t,"d",function(){return E}),e.d(t,"j",function(){return O}),e.d(t,"k",function(){return P}),function(n){n.create=function(n,t){return{line:n,character:t}},n.is=function(n){var t=n;return S.defined(t)&&S.number(t.line)&&S.number(t.character)}}(r||(r={})),function(n){n.create=function(n,t,e,i){if(S.number(n)&&S.number(t)&&S.number(e)&&S.number(i))return{start:r.create(n,t),end:r.create(e,i)};if(r.is(n)&&r.is(t))return{start:n,end:t};throw new Error("Range#create called with invalid arguments["+n+", "+t+", "+e+", "+i+"]")},n.is=function(n){var t=n;return S.defined(t)&&r.is(t.start)&&r.is(t.end)}}(i||(i={})),function(n){n.create=function(n,t){return{uri:n,range:t}},n.is=function(n){var t=n;return S.defined(t)&&i.is(t.range)&&(S.string(t.uri)||S.undefined(t.uri))}}(u||(u={})),function(n){n.Error=1,n.Warning=2,n.Information=3,n.Hint=4}(o||(o={})),function(n){n.create=function(n,t,e,r,i){var u={range:n,message:t};return S.defined(e)&&(u.severity=e),S.defined(r)&&(u.code=r),S.defined(i)&&(u.source=i),u},n.is=function(n){var t=n;return S.defined(t)&&i.is(t.range)&&S.string(t.message)&&(S.number(t.severity)||S.undefined(t.severity))&&(S.number(t.code)||S.string(t.code)||S.undefined(t.code))&&(S.string(t.source)||S.undefined(t.source))}}(a||(a={})),function(n){n.create=function(n,t){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];var i={title:n,command:t};return S.defined(e)&&e.length>0&&(i.arguments=e),i},n.is=function(n){var t=n;return S.defined(t)&&S.string(t.title)&&S.string(t.title)}}(c||(c={})),function(n){n.replace=function(n,t){return{range:n,newText:t}},n.insert=function(n,t){return{range:{start:n,end:n},newText:t}},n.del=function(n){return{range:n,newText:""}}}(s||(s={})),function(n){n.create=function(n,t){return{textDocument:n,edits:t}},n.is=function(n){var t=n;return S.defined(t)&&g.is(t.textDocument)&&Array.isArray(t.edits)}}(f||(f={}));var d,g,l,h,p,v,m,b,y,_,w,E,x,O,C,k,A,T,j=function(){function n(n){this.edits=n}return n.prototype.insert=function(n,t){this.edits.push(s.insert(n,t))},n.prototype.replace=function(n,t){this.edits.push(s.replace(n,t))},n.prototype.delete=function(n){this.edits.push(s.del(n))},n.prototype.add=function(n){this.edits.push(n)},n.prototype.all=function(){return this.edits},n.prototype.clear=function(){this.edits.splice(0,this.edits.length)},n}();!function(){function n(n){var t=this;this._textEditChanges=Object.create(null),n&&(this._workspaceEdit=n,n.documentChanges?n.documentChanges.forEach(function(n){var e=new j(n.edits);t._textEditChanges[n.textDocument.uri]=e}):n.changes&&Object.keys(n.changes).forEach(function(e){var r=new j(n.changes[e]);t._textEditChanges[e]=r}))}Object.defineProperty(n.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),n.prototype.getTextEditChange=function(n){if(g.is(n)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for versioned document changes.");var t=n;if(!(r=this._textEditChanges[t.uri])){var e={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(e),r=new j(i),this._textEditChanges[t.uri]=r}return r}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[n])){var i=[];this._workspaceEdit.changes[n]=i,r=new j(i),this._textEditChanges[n]=r}return r}}();!function(n){n.create=function(n){return{uri:n}},n.is=function(n){var t=n;return S.defined(t)&&S.string(t.uri)}}(d||(d={})),function(n){n.create=function(n,t){return{uri:n,version:t}},n.is=function(n){var t=n;return S.defined(t)&&S.string(t.uri)&&S.number(t.version)}}(g||(g={})),function(n){n.create=function(n,t,e,r){return{uri:n,languageId:t,version:e,text:r}},n.is=function(n){var t=n;return S.defined(t)&&S.string(t.uri)&&S.string(t.languageId)&&S.number(t.version)&&S.string(t.text)}}(l||(l={})),function(n){n.PlainText="plaintext",n.Markdown="markdown"}(h||(h={})),function(n){n.Text=1,n.Method=2,n.Function=3,n.Constructor=4,n.Field=5,n.Variable=6,n.Class=7,n.Interface=8,n.Module=9,n.Property=10,n.Unit=11,n.Value=12,n.Enum=13,n.Keyword=14,n.Snippet=15,n.Color=16,n.File=17,n.Reference=18,n.Folder=19,n.EnumMember=20,n.Constant=21,n.Struct=22,n.Event=23,n.Operator=24,n.TypeParameter=25}(p||(p={})),function(n){n.PlainText=1,n.Snippet=2}(v||(v={})),function(n){n.create=function(n){return{label:n}}}(m||(m={})),function(n){n.create=function(n,t){return{items:n||[],isIncomplete:!!t}}}(b||(b={})),function(n){n.fromPlainText=function(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}}(y||(y={})),function(n){n.create=function(n,t){return t?{label:n,documentation:t}:{label:n}}}(_||(_={})),function(n){n.create=function(n,t){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];var i={label:n};return S.defined(t)&&(i.documentation=t),S.defined(e)?i.parameters=e:i.parameters=[],i}}(w||(w={})),function(n){n.Text=1,n.Read=2,n.Write=3}(E||(E={})),function(n){n.create=function(n,t){var e={range:n};return S.number(t)&&(e.kind=t),e}}(x||(x={})),function(n){n.File=1,n.Module=2,n.Namespace=3,n.Package=4,n.Class=5,n.Method=6,n.Property=7,n.Field=8,n.Constructor=9,n.Enum=10,n.Interface=11,n.Function=12,n.Variable=13,n.Constant=14,n.String=15,n.Number=16,n.Boolean=17,n.Array=18,n.Object=19,n.Key=20,n.Null=21,n.EnumMember=22,n.Struct=23,n.Event=24,n.Operator=25,n.TypeParameter=26}(O||(O={})),function(n){n.create=function(n,t,e,r,i){var u={name:n,kind:t,location:{uri:r,range:e}};return i&&(u.containerName=i),u}}(C||(C={})),function(n){n.create=function(n){return{diagnostics:n}},n.is=function(n){var t=n;return S.defined(t)&&S.typedArray(t.diagnostics,a.is)}}(k||(k={})),function(n){n.create=function(n,t){var e={range:n};return S.defined(t)&&(e.data=t),e},n.is=function(n){var t=n;return S.defined(t)&&i.is(t.range)&&(S.undefined(t.command)||c.is(t.command))}}(A||(A={})),function(n){n.create=function(n,t){return{tabSize:n,insertSpaces:t}},n.is=function(n){var t=n;return S.defined(t)&&S.number(t.tabSize)&&S.boolean(t.insertSpaces)}}(T||(T={}));var M=function(){return function(){}}();!function(n){n.create=function(n,t){return{range:n,target:t}},n.is=function(n){var t=n;return S.defined(t)&&i.is(t.range)&&(S.undefined(t.target)||S.string(t.target))}}(M||(M={}));var P,I;!function(n){n.create=function(n,t,e,r){return new F(n,t,e,r)},n.is=function(n){var t=n;return!!(S.defined(t)&&S.string(t.uri)&&(S.undefined(t.languageId)||S.string(t.languageId))&&S.number(t.lineCount)&&S.func(t.getText)&&S.func(t.positionAt)&&S.func(t.offsetAt))},n.applyEdits=function(n,t){for(var e=n.getText(),r=function n(t,e){if(t.length<=1)return t;var r=t.length/2|0,i=t.slice(0,r),u=t.slice(r);n(i,e),n(u,e);for(var o=0,a=0,c=0;o<i.length&&a<u.length;){var s=e(i[o],u[a]);t[c++]=s<=0?i[o++]:u[a++]}for(;o<i.length;)t[c++]=i[o++];for(;a<u.length;)t[c++]=u[a++];return t}(t,function(n,t){return 0==n.range.start.line-t.range.start.line?n.range.start.character-t.range.start.character:0}),i=e.length,u=r.length-1;u>=0;u--){var o=r[u],a=n.offsetAt(o.range.start),c=n.offsetAt(o.range.end);if(!(c<=i))throw new Error("Ovelapping edit");e=e.substring(0,a)+o.newText+e.substring(c,e.length),i=a}return e}}(P||(P={})),function(n){n.Manual=1,n.AfterDelay=2,n.FocusOut=3}(I||(I={}));var S,F=function(){function n(n,t,e,r){this._uri=n,this._languageId=t,this._version=e,this._content=r,this._lineOffsets=null}return Object.defineProperty(n.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),n.prototype.getText=function(n){if(n){var t=this.offsetAt(n.start),e=this.offsetAt(n.end);return this._content.substring(t,e)}return this._content},n.prototype.update=function(n,t){this._content=n.text,this._version=t,this._lineOffsets=null},n.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var n=[],t=this._content,e=!0,r=0;r<t.length;r++){e&&(n.push(r),e=!1);var i=t.charAt(r);e="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}e&&t.length>0&&n.push(t.length),this._lineOffsets=n}return this._lineOffsets},n.prototype.positionAt=function(n){n=Math.max(Math.min(n,this._content.length),0);var t=this.getLineOffsets(),e=0,i=t.length;if(0===i)return r.create(0,n);for(;e<i;){var u=Math.floor((e+i)/2);t[u]>n?i=u:e=u+1}var o=e-1;return r.create(o,n-t[o])},n.prototype.offsetAt=function(n){var t=this.getLineOffsets();if(n.line>=t.length)return this._content.length;if(n.line<0)return 0;var e=t[n.line],r=n.line+1<t.length?t[n.line+1]:this._content.length;return Math.max(Math.min(e+n.character,r),e)},Object.defineProperty(n.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),n}();!function(n){var t=Object.prototype.toString;n.defined=function(n){return void 0!==n},n.undefined=function(n){return void 0===n},n.boolean=function(n){return!0===n||!1===n},n.string=function(n){return"[object String]"===t.call(n)},n.number=function(n){return"[object Number]"===t.call(n)},n.func=function(n){return"[object Function]"===t.call(n)},n.typedArray=function(n,t){return Array.isArray(n)&&n.every(t)}}(S||(S={}))}}]);