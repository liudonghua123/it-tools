typeof window<"u"&&typeof window.global>"u"&&(window.global=window);const ParserEND=1114112;class ParserError extends Error{constructor(e,s,r){super("[ParserError] "+e,s,r),this.name="ParserError",this.code="ParserError",Error.captureStackTrace&&Error.captureStackTrace(this,ParserError)}}class State{constructor(e){this.parser=e,this.buf="",this.returned=null,this.result=null,this.resultTable=null,this.resultArr=null}}class Parser{constructor(){this.pos=0,this.col=0,this.line=0,this.obj={},this.ctx=this.obj,this.stack=[],this._buf="",this.char=null,this.ii=0,this.state=new State(this.parseStart)}parse(e){if(e.length===0||e.length==null)return;this._buf=String(e),this.ii=-1,this.char=-1;let s;for(;s===!1||this.nextChar();)s=this.runOne();this._buf=null}nextChar(){return this.char===10&&(++this.line,this.col=-1),++this.ii,this.char=this._buf.codePointAt(this.ii),++this.pos,++this.col,this.haveBuffer()}haveBuffer(){return this.ii<this._buf.length}runOne(){return this.state.parser.call(this,this.state.returned)}finish(){this.char=ParserEND;let e;do e=this.state.parser,this.runOne();while(this.state.parser!==e);return this.ctx=null,this.state=null,this._buf=null,this.obj}next(e){if(typeof e!="function")throw new ParserError("Tried to set state to non-existent state: "+JSON.stringify(e));this.state.parser=e}goto(e){return this.next(e),this.runOne()}call(e,s){s&&this.next(s),this.stack.push(this.state),this.state=new State(e)}callNow(e,s){return this.call(e,s),this.runOne()}return(e){if(this.stack.length===0)throw this.error(new ParserError("Stack underflow"));e===void 0&&(e=this.state.buf),this.state=this.stack.pop(),this.state.returned=e}returnNow(e){return this.return(e),this.runOne()}consume(){if(this.char===ParserEND)throw this.error(new ParserError("Unexpected end-of-buffer"));this.state.buf+=this._buf[this.ii]}error(e){return e.line=this.line,e.col=this.col,e.pos=this.pos,e}parseStart(){throw new ParserError("Must declare a parseStart method")}}Parser.END=ParserEND;Parser.Error=ParserError;const createDateTime=t=>{const e=new Date(t);if(isNaN(e))throw new TypeError("Invalid Datetime");return e},f=(t,e)=>{for(e=String(e);e.length<t;)e="0"+e;return e};class FloatingDateTime extends Date{constructor(e){super(e+"Z"),this.isFloating=!0}toISOString(){const e=`${this.getUTCFullYear()}-${f(2,this.getUTCMonth()+1)}-${f(2,this.getUTCDate())}`,s=`${f(2,this.getUTCHours())}:${f(2,this.getUTCMinutes())}:${f(2,this.getUTCSeconds())}.${f(3,this.getUTCMilliseconds())}`;return`${e}T${s}`}}const createDateTimeFloat=t=>{const e=new FloatingDateTime(t);if(isNaN(e))throw new TypeError("Invalid Datetime");return e};class Date_ extends Date{constructor(e){super(e),this.isDate=!0}toISOString(){return`${this.getUTCFullYear()}-${f(2,this.getUTCMonth()+1)}-${f(2,this.getUTCDate())}`}}const createDate=t=>{const e=new Date_(t);if(isNaN(e))throw new TypeError("Invalid Datetime");return e};class Time extends Date{constructor(e){super(`0000-01-01T${e}Z`),this.isTime=!0}toISOString(){return`${f(2,this.getUTCHours())}:${f(2,this.getUTCMinutes())}:${f(2,this.getUTCSeconds())}.${f(3,this.getUTCMilliseconds())}`}}const createTime=t=>{const e=new Time(t);if(isNaN(e))throw new TypeError("Invalid Datetime");return e},TOMLParser=makeParserClass(Parser);class TomlError extends Error{constructor(e){super(e),this.name="TomlError",Error.captureStackTrace&&Error.captureStackTrace(this,TomlError),this.fromTOML=!0,this.wrapped=null}}TomlError.wrap=t=>{const e=new TomlError(t.message);return e.code=t.code,e.wrapped=t,e};const CTRL_I=9,CTRL_J=10,CTRL_M=13,CTRL_CHAR_BOUNDARY=31,CHAR_SP=32,CHAR_QUOT=34,CHAR_NUM=35,CHAR_APOS=39,CHAR_PLUS=43,CHAR_COMMA=44,CHAR_HYPHEN=45,CHAR_PERIOD=46,CHAR_0=48,CHAR_1=49,CHAR_7=55,CHAR_9=57,CHAR_COLON=58,CHAR_EQUALS=61,CHAR_A=65,CHAR_E=69,CHAR_F=70,CHAR_T=84,CHAR_U=85,CHAR_Z=90,CHAR_LOWBAR=95,CHAR_a=97,CHAR_b=98,CHAR_e=101,CHAR_f=102,CHAR_i=105,CHAR_l=108,CHAR_n=110,CHAR_o=111,CHAR_r=114,CHAR_s=115,CHAR_t=116,CHAR_u=117,CHAR_x=120,CHAR_z=122,CHAR_LCUB=123,CHAR_RCUB=125,CHAR_LSQB=91,CHAR_BSOL=92,CHAR_RSQB=93,CHAR_DEL=127,SURROGATE_FIRST=55296,SURROGATE_LAST=57343,escapes={[CHAR_b]:"\b",[CHAR_t]:"	",[CHAR_n]:`
`,[CHAR_f]:"\f",[CHAR_r]:"\r",[CHAR_QUOT]:'"',[CHAR_BSOL]:"\\"};function isDigit(t){return t>=CHAR_0&&t<=CHAR_9}function isHexit(t){return t>=CHAR_A&&t<=CHAR_F||t>=CHAR_a&&t<=CHAR_f||t>=CHAR_0&&t<=CHAR_9}function isBit(t){return t===CHAR_1||t===CHAR_0}function isOctit(t){return t>=CHAR_0&&t<=CHAR_7}function isAlphaNumQuoteHyphen(t){return t>=CHAR_A&&t<=CHAR_Z||t>=CHAR_a&&t<=CHAR_z||t>=CHAR_0&&t<=CHAR_9||t===CHAR_APOS||t===CHAR_QUOT||t===CHAR_LOWBAR||t===CHAR_HYPHEN}function isAlphaNumHyphen(t){return t>=CHAR_A&&t<=CHAR_Z||t>=CHAR_a&&t<=CHAR_z||t>=CHAR_0&&t<=CHAR_9||t===CHAR_LOWBAR||t===CHAR_HYPHEN}const _type=Symbol("type"),_declared=Symbol("declared"),hasOwnProperty=Object.prototype.hasOwnProperty,defineProperty=Object.defineProperty,descriptor={configurable:!0,enumerable:!0,writable:!0,value:void 0};function hasKey(t,e){return hasOwnProperty.call(t,e)?!0:(e==="__proto__"&&defineProperty(t,"__proto__",descriptor),!1)}const INLINE_TABLE=Symbol("inline-table");function InlineTable(){return Object.defineProperties({},{[_type]:{value:INLINE_TABLE}})}function isInlineTable(t){return t===null||typeof t!="object"?!1:t[_type]===INLINE_TABLE}const TABLE=Symbol("table");function Table(){return Object.defineProperties({},{[_type]:{value:TABLE},[_declared]:{value:!1,writable:!0}})}function isTable(t){return t===null||typeof t!="object"?!1:t[_type]===TABLE}const _contentType=Symbol("content-type"),INLINE_LIST=Symbol("inline-list");function InlineList(t){return Object.defineProperties([],{[_type]:{value:INLINE_LIST},[_contentType]:{value:t}})}function isInlineList(t){return t===null||typeof t!="object"?!1:t[_type]===INLINE_LIST}const LIST=Symbol("list");function List(){return Object.defineProperties([],{[_type]:{value:LIST}})}function isList(t){return t===null||typeof t!="object"?!1:t[_type]===LIST}let _custom;try{const utilInspect=eval("require('util').inspect");_custom=utilInspect.custom}catch(t){}const _inspect=_custom||"inspect";class BoxedBigInt{constructor(e){try{this.value=global.BigInt.asIntN(64,e)}catch{this.value=null}Object.defineProperty(this,_type,{value:INTEGER})}isNaN(){return this.value===null}toString(){return String(this.value)}[_inspect](){return`[BigInt: ${this.toString()}]}`}valueOf(){return this.value}}const INTEGER=Symbol("integer");function Integer(t){let e=Number(t);return Object.is(e,-0)&&(e=0),global.BigInt&&!Number.isSafeInteger(e)?new BoxedBigInt(t):Object.defineProperties(new Number(e),{isNaN:{value:function(){return isNaN(this)}},[_type]:{value:INTEGER},[_inspect]:{value:()=>`[Integer: ${t}]`}})}function isInteger(t){return t===null||typeof t!="object"?!1:t[_type]===INTEGER}const FLOAT=Symbol("float");function Float(t){return Object.defineProperties(new Number(t),{[_type]:{value:FLOAT},[_inspect]:{value:()=>`[Float: ${t}]`}})}function isFloat(t){return t===null||typeof t!="object"?!1:t[_type]===FLOAT}function tomlType$1(t){const e=typeof t;if(e==="object"){if(t===null)return"null";if(t instanceof Date)return"datetime";if(_type in t)switch(t[_type]){case INLINE_TABLE:return"inline-table";case INLINE_LIST:return"inline-list";case TABLE:return"table";case LIST:return"list";case FLOAT:return"float";case INTEGER:return"integer"}}return e}function makeParserClass(t){class e extends t{constructor(){super(),this.ctx=this.obj=Table()}atEndOfWord(){return this.char===CHAR_NUM||this.char===CTRL_I||this.char===CHAR_SP||this.atEndOfLine()}atEndOfLine(){return this.char===t.END||this.char===CTRL_J||this.char===CTRL_M}parseStart(){if(this.char===t.END)return null;if(this.char===CHAR_LSQB)return this.call(this.parseTableOrList);if(this.char===CHAR_NUM)return this.call(this.parseComment);if(this.char===CTRL_J||this.char===CHAR_SP||this.char===CTRL_I||this.char===CTRL_M)return null;if(isAlphaNumQuoteHyphen(this.char))return this.callNow(this.parseAssignStatement);throw this.error(new TomlError(`Unknown character "${this.char}"`))}parseWhitespaceToEOL(){if(this.char===CHAR_SP||this.char===CTRL_I||this.char===CTRL_M)return null;if(this.char===CHAR_NUM)return this.goto(this.parseComment);if(this.char===t.END||this.char===CTRL_J)return this.return();throw this.error(new TomlError("Unexpected character, expected only whitespace or comments till end of line"))}parseAssignStatement(){return this.callNow(this.parseAssign,this.recordAssignStatement)}recordAssignStatement(r){let i=this.ctx,h=r.key.pop();for(let n of r.key){if(hasKey(i,n)&&!isTable(i[n]))throw this.error(new TomlError("Can't redefine existing key"));i=i[n]=i[n]||Table()}if(hasKey(i,h))throw this.error(new TomlError("Can't redefine existing key"));return i[_declared]=!0,isInteger(r.value)||isFloat(r.value)?i[h]=r.value.valueOf():i[h]=r.value,this.goto(this.parseWhitespaceToEOL)}parseAssign(){return this.callNow(this.parseKeyword,this.recordAssignKeyword)}recordAssignKeyword(r){return this.state.resultTable?this.state.resultTable.push(r):this.state.resultTable=[r],this.goto(this.parseAssignKeywordPreDot)}parseAssignKeywordPreDot(){if(this.char===CHAR_PERIOD)return this.next(this.parseAssignKeywordPostDot);if(this.char!==CHAR_SP&&this.char!==CTRL_I)return this.goto(this.parseAssignEqual)}parseAssignKeywordPostDot(){if(this.char!==CHAR_SP&&this.char!==CTRL_I)return this.callNow(this.parseKeyword,this.recordAssignKeyword)}parseAssignEqual(){if(this.char===CHAR_EQUALS)return this.next(this.parseAssignPreValue);throw this.error(new TomlError('Invalid character, expected "="'))}parseAssignPreValue(){return this.char===CHAR_SP||this.char===CTRL_I?null:this.callNow(this.parseValue,this.recordAssignValue)}recordAssignValue(r){return this.returnNow({key:this.state.resultTable,value:r})}parseComment(){do{if(this.char===t.END||this.char===CTRL_J)return this.return();if(this.char===CHAR_DEL||this.char<=CTRL_CHAR_BOUNDARY&&this.char!==CTRL_I)throw this.errorControlCharIn("comments")}while(this.nextChar())}parseTableOrList(){if(this.char===CHAR_LSQB)this.next(this.parseList);else return this.goto(this.parseTable)}parseTable(){return this.ctx=this.obj,this.goto(this.parseTableNext)}parseTableNext(){return this.char===CHAR_SP||this.char===CTRL_I?null:this.callNow(this.parseKeyword,this.parseTableMore)}parseTableMore(r){if(this.char===CHAR_SP||this.char===CTRL_I)return null;if(this.char===CHAR_RSQB){if(hasKey(this.ctx,r)&&(!isTable(this.ctx[r])||this.ctx[r][_declared]))throw this.error(new TomlError("Can't redefine existing key"));return this.ctx=this.ctx[r]=this.ctx[r]||Table(),this.ctx[_declared]=!0,this.next(this.parseWhitespaceToEOL)}else if(this.char===CHAR_PERIOD){if(!hasKey(this.ctx,r))this.ctx=this.ctx[r]=Table();else if(isTable(this.ctx[r]))this.ctx=this.ctx[r];else if(isList(this.ctx[r]))this.ctx=this.ctx[r][this.ctx[r].length-1];else throw this.error(new TomlError("Can't redefine existing key"));return this.next(this.parseTableNext)}else throw this.error(new TomlError("Unexpected character, expected whitespace, . or ]"))}parseList(){return this.ctx=this.obj,this.goto(this.parseListNext)}parseListNext(){return this.char===CHAR_SP||this.char===CTRL_I?null:this.callNow(this.parseKeyword,this.parseListMore)}parseListMore(r){if(this.char===CHAR_SP||this.char===CTRL_I)return null;if(this.char===CHAR_RSQB){if(hasKey(this.ctx,r)||(this.ctx[r]=List()),isInlineList(this.ctx[r]))throw this.error(new TomlError("Can't extend an inline array"));if(isList(this.ctx[r])){const i=Table();this.ctx[r].push(i),this.ctx=i}else throw this.error(new TomlError("Can't redefine an existing key"));return this.next(this.parseListEnd)}else if(this.char===CHAR_PERIOD){if(!hasKey(this.ctx,r))this.ctx=this.ctx[r]=Table();else{if(isInlineList(this.ctx[r]))throw this.error(new TomlError("Can't extend an inline array"));if(isInlineTable(this.ctx[r]))throw this.error(new TomlError("Can't extend an inline table"));if(isList(this.ctx[r]))this.ctx=this.ctx[r][this.ctx[r].length-1];else if(isTable(this.ctx[r]))this.ctx=this.ctx[r];else throw this.error(new TomlError("Can't redefine an existing key"))}return this.next(this.parseListNext)}else throw this.error(new TomlError("Unexpected character, expected whitespace, . or ]"))}parseListEnd(r){if(this.char===CHAR_RSQB)return this.next(this.parseWhitespaceToEOL);throw this.error(new TomlError("Unexpected character, expected whitespace, . or ]"))}parseValue(){if(this.char===t.END)throw this.error(new TomlError("Key without value"));if(this.char===CHAR_QUOT)return this.next(this.parseDoubleString);if(this.char===CHAR_APOS)return this.next(this.parseSingleString);if(this.char===CHAR_HYPHEN||this.char===CHAR_PLUS)return this.goto(this.parseNumberSign);if(this.char===CHAR_i)return this.next(this.parseInf);if(this.char===CHAR_n)return this.next(this.parseNan);if(isDigit(this.char))return this.goto(this.parseNumberOrDateTime);if(this.char===CHAR_t||this.char===CHAR_f)return this.goto(this.parseBoolean);if(this.char===CHAR_LSQB)return this.call(this.parseInlineList,this.recordValue);if(this.char===CHAR_LCUB)return this.call(this.parseInlineTable,this.recordValue);throw this.error(new TomlError("Unexpected character, expecting string, number, datetime, boolean, inline array or inline table"))}recordValue(r){return this.returnNow(r)}parseInf(){if(this.char===CHAR_n)return this.next(this.parseInf2);throw this.error(new TomlError('Unexpected character, expected "inf", "+inf" or "-inf"'))}parseInf2(){if(this.char===CHAR_f)return this.state.buf==="-"?this.return(-1/0):this.return(1/0);throw this.error(new TomlError('Unexpected character, expected "inf", "+inf" or "-inf"'))}parseNan(){if(this.char===CHAR_a)return this.next(this.parseNan2);throw this.error(new TomlError('Unexpected character, expected "nan"'))}parseNan2(){if(this.char===CHAR_n)return this.return(NaN);throw this.error(new TomlError('Unexpected character, expected "nan"'))}parseKeyword(){return this.char===CHAR_QUOT?this.next(this.parseBasicString):this.char===CHAR_APOS?this.next(this.parseLiteralString):this.goto(this.parseBareKey)}parseBareKey(){do{if(this.char===t.END)throw this.error(new TomlError("Key ended without value"));if(isAlphaNumHyphen(this.char))this.consume();else{if(this.state.buf.length===0)throw this.error(new TomlError("Empty bare keys are not allowed"));return this.returnNow()}}while(this.nextChar())}parseSingleString(){return this.char===CHAR_APOS?this.next(this.parseLiteralMultiStringMaybe):this.goto(this.parseLiteralString)}parseLiteralString(){do{if(this.char===CHAR_APOS)return this.return();if(this.atEndOfLine())throw this.error(new TomlError("Unterminated string"));if(this.char===CHAR_DEL||this.char<=CTRL_CHAR_BOUNDARY&&this.char!==CTRL_I)throw this.errorControlCharIn("strings");this.consume()}while(this.nextChar())}parseLiteralMultiStringMaybe(){return this.char===CHAR_APOS?this.next(this.parseLiteralMultiString):this.returnNow()}parseLiteralMultiString(){return this.char===CTRL_M?null:this.char===CTRL_J?this.next(this.parseLiteralMultiStringContent):this.goto(this.parseLiteralMultiStringContent)}parseLiteralMultiStringContent(){do{if(this.char===CHAR_APOS)return this.next(this.parseLiteralMultiEnd);if(this.char===t.END)throw this.error(new TomlError("Unterminated multi-line string"));if(this.char===CHAR_DEL||this.char<=CTRL_CHAR_BOUNDARY&&this.char!==CTRL_I&&this.char!==CTRL_J&&this.char!==CTRL_M)throw this.errorControlCharIn("strings");this.consume()}while(this.nextChar())}parseLiteralMultiEnd(){return this.char===CHAR_APOS?this.next(this.parseLiteralMultiEnd2):(this.state.buf+="'",this.goto(this.parseLiteralMultiStringContent))}parseLiteralMultiEnd2(){return this.char===CHAR_APOS?this.next(this.parseLiteralMultiEnd3):(this.state.buf+="''",this.goto(this.parseLiteralMultiStringContent))}parseLiteralMultiEnd3(){return this.char===CHAR_APOS?(this.state.buf+="'",this.next(this.parseLiteralMultiEnd4)):this.returnNow()}parseLiteralMultiEnd4(){return this.char===CHAR_APOS?(this.state.buf+="'",this.return()):this.returnNow()}parseDoubleString(){return this.char===CHAR_QUOT?this.next(this.parseMultiStringMaybe):this.goto(this.parseBasicString)}parseBasicString(){do{if(this.char===CHAR_BSOL)return this.call(this.parseEscape,this.recordEscapeReplacement);if(this.char===CHAR_QUOT)return this.return();if(this.atEndOfLine())throw this.error(new TomlError("Unterminated string"));if(this.char===CHAR_DEL||this.char<=CTRL_CHAR_BOUNDARY&&this.char!==CTRL_I)throw this.errorControlCharIn("strings");this.consume()}while(this.nextChar())}recordEscapeReplacement(r){return this.state.buf+=r,this.goto(this.parseBasicString)}parseMultiStringMaybe(){return this.char===CHAR_QUOT?this.next(this.parseMultiString):this.returnNow()}parseMultiString(){return this.char===CTRL_M?null:this.char===CTRL_J?this.next(this.parseMultiStringContent):this.goto(this.parseMultiStringContent)}parseMultiStringContent(){do{if(this.char===CHAR_BSOL)return this.call(this.parseMultiEscape,this.recordMultiEscapeReplacement);if(this.char===CHAR_QUOT)return this.next(this.parseMultiEnd);if(this.char===t.END)throw this.error(new TomlError("Unterminated multi-line string"));if(this.char===CHAR_DEL||this.char<=CTRL_CHAR_BOUNDARY&&this.char!==CTRL_I&&this.char!==CTRL_J&&this.char!==CTRL_M)throw this.errorControlCharIn("strings");this.consume()}while(this.nextChar())}errorControlCharIn(r){let i="\\u00";return this.char<16&&(i+="0"),i+=this.char.toString(16),this.error(new TomlError(`Control characters (codes < 0x1f and 0x7f) are not allowed in ${r}, use ${i} instead`))}recordMultiEscapeReplacement(r){return this.state.buf+=r,this.goto(this.parseMultiStringContent)}parseMultiEnd(){return this.char===CHAR_QUOT?this.next(this.parseMultiEnd2):(this.state.buf+='"',this.goto(this.parseMultiStringContent))}parseMultiEnd2(){return this.char===CHAR_QUOT?this.next(this.parseMultiEnd3):(this.state.buf+='""',this.goto(this.parseMultiStringContent))}parseMultiEnd3(){return this.char===CHAR_QUOT?(this.state.buf+='"',this.next(this.parseMultiEnd4)):this.returnNow()}parseMultiEnd4(){return this.char===CHAR_QUOT?(this.state.buf+='"',this.return()):this.returnNow()}parseMultiEscape(){return this.char===CTRL_M||this.char===CTRL_J?this.next(this.parseMultiTrim):this.char===CHAR_SP||this.char===CTRL_I?this.next(this.parsePreMultiTrim):this.goto(this.parseEscape)}parsePreMultiTrim(){if(this.char===CHAR_SP||this.char===CTRL_I)return null;if(this.char===CTRL_M||this.char===CTRL_J)return this.next(this.parseMultiTrim);throw this.error(new TomlError("Can't escape whitespace"))}parseMultiTrim(){return this.char===CTRL_J||this.char===CHAR_SP||this.char===CTRL_I||this.char===CTRL_M?null:this.returnNow()}parseEscape(){if(this.char in escapes)return this.return(escapes[this.char]);if(this.char===CHAR_u)return this.call(this.parseSmallUnicode,this.parseUnicodeReturn);if(this.char===CHAR_U)return this.call(this.parseLargeUnicode,this.parseUnicodeReturn);throw this.error(new TomlError("Unknown escape character: "+this.char))}parseUnicodeReturn(r){try{const i=parseInt(r,16);if(i>=SURROGATE_FIRST&&i<=SURROGATE_LAST)throw this.error(new TomlError("Invalid unicode, character in range 0xD800 - 0xDFFF is reserved"));return this.returnNow(String.fromCodePoint(i))}catch(i){throw this.error(TomlError.wrap(i))}}parseSmallUnicode(){if(isHexit(this.char)){if(this.consume(),this.state.buf.length>=4)return this.return()}else throw this.error(new TomlError("Invalid character in unicode sequence, expected hex"))}parseLargeUnicode(){if(isHexit(this.char)){if(this.consume(),this.state.buf.length>=8)return this.return()}else throw this.error(new TomlError("Invalid character in unicode sequence, expected hex"))}parseNumberSign(){return this.consume(),this.next(this.parseMaybeSignedInfOrNan)}parseMaybeSignedInfOrNan(){return this.char===CHAR_i?this.next(this.parseInf):this.char===CHAR_n?this.next(this.parseNan):this.callNow(this.parseNoUnder,this.parseNumberIntegerStart)}parseNumberIntegerStart(){return this.char===CHAR_0?(this.consume(),this.next(this.parseNumberIntegerExponentOrDecimal)):this.goto(this.parseNumberInteger)}parseNumberIntegerExponentOrDecimal(){return this.char===CHAR_PERIOD?(this.consume(),this.call(this.parseNoUnder,this.parseNumberFloat)):this.char===CHAR_E||this.char===CHAR_e?(this.consume(),this.next(this.parseNumberExponentSign)):this.returnNow(Integer(this.state.buf))}parseNumberInteger(){if(isDigit(this.char))this.consume();else{if(this.char===CHAR_LOWBAR)return this.call(this.parseNoUnder);if(this.char===CHAR_E||this.char===CHAR_e)return this.consume(),this.next(this.parseNumberExponentSign);if(this.char===CHAR_PERIOD)return this.consume(),this.call(this.parseNoUnder,this.parseNumberFloat);{const r=Integer(this.state.buf);if(r.isNaN())throw this.error(new TomlError("Invalid number"));return this.returnNow(r)}}}parseNoUnder(){if(this.char===CHAR_LOWBAR||this.char===CHAR_PERIOD||this.char===CHAR_E||this.char===CHAR_e)throw this.error(new TomlError("Unexpected character, expected digit"));if(this.atEndOfWord())throw this.error(new TomlError("Incomplete number"));return this.returnNow()}parseNoUnderHexOctBinLiteral(){if(this.char===CHAR_LOWBAR||this.char===CHAR_PERIOD)throw this.error(new TomlError("Unexpected character, expected digit"));if(this.atEndOfWord())throw this.error(new TomlError("Incomplete number"));return this.returnNow()}parseNumberFloat(){if(this.char===CHAR_LOWBAR)return this.call(this.parseNoUnder,this.parseNumberFloat);if(isDigit(this.char))this.consume();else return this.char===CHAR_E||this.char===CHAR_e?(this.consume(),this.next(this.parseNumberExponentSign)):this.returnNow(Float(this.state.buf))}parseNumberExponentSign(){if(isDigit(this.char))return this.goto(this.parseNumberExponent);if(this.char===CHAR_HYPHEN||this.char===CHAR_PLUS)this.consume(),this.call(this.parseNoUnder,this.parseNumberExponent);else throw this.error(new TomlError("Unexpected character, expected -, + or digit"))}parseNumberExponent(){if(isDigit(this.char))this.consume();else return this.char===CHAR_LOWBAR?this.call(this.parseNoUnder):this.returnNow(Float(this.state.buf))}parseNumberOrDateTime(){return this.char===CHAR_0?(this.consume(),this.next(this.parseNumberBaseOrDateTime)):this.goto(this.parseNumberOrDateTimeOnly)}parseNumberOrDateTimeOnly(){if(this.char===CHAR_LOWBAR)return this.call(this.parseNoUnder,this.parseNumberInteger);if(isDigit(this.char))this.consume(),this.state.buf.length>4&&this.next(this.parseNumberInteger);else return this.char===CHAR_E||this.char===CHAR_e?(this.consume(),this.next(this.parseNumberExponentSign)):this.char===CHAR_PERIOD?(this.consume(),this.call(this.parseNoUnder,this.parseNumberFloat)):this.char===CHAR_HYPHEN?this.goto(this.parseDateTime):this.char===CHAR_COLON?this.goto(this.parseOnlyTimeHour):this.returnNow(Integer(this.state.buf))}parseDateTimeOnly(){if(this.state.buf.length<4){if(isDigit(this.char))return this.consume();if(this.char===CHAR_COLON)return this.goto(this.parseOnlyTimeHour);throw this.error(new TomlError("Expected digit while parsing year part of a date"))}else{if(this.char===CHAR_HYPHEN)return this.goto(this.parseDateTime);throw this.error(new TomlError("Expected hyphen (-) while parsing year part of date"))}}parseNumberBaseOrDateTime(){return this.char===CHAR_b?(this.consume(),this.call(this.parseNoUnderHexOctBinLiteral,this.parseIntegerBin)):this.char===CHAR_o?(this.consume(),this.call(this.parseNoUnderHexOctBinLiteral,this.parseIntegerOct)):this.char===CHAR_x?(this.consume(),this.call(this.parseNoUnderHexOctBinLiteral,this.parseIntegerHex)):this.char===CHAR_PERIOD?this.goto(this.parseNumberInteger):isDigit(this.char)?this.goto(this.parseDateTimeOnly):this.returnNow(Integer(this.state.buf))}parseIntegerHex(){if(isHexit(this.char))this.consume();else{if(this.char===CHAR_LOWBAR)return this.call(this.parseNoUnderHexOctBinLiteral);{const r=Integer(this.state.buf);if(r.isNaN())throw this.error(new TomlError("Invalid number"));return this.returnNow(r)}}}parseIntegerOct(){if(isOctit(this.char))this.consume();else{if(this.char===CHAR_LOWBAR)return this.call(this.parseNoUnderHexOctBinLiteral);{const r=Integer(this.state.buf);if(r.isNaN())throw this.error(new TomlError("Invalid number"));return this.returnNow(r)}}}parseIntegerBin(){if(isBit(this.char))this.consume();else{if(this.char===CHAR_LOWBAR)return this.call(this.parseNoUnderHexOctBinLiteral);{const r=Integer(this.state.buf);if(r.isNaN())throw this.error(new TomlError("Invalid number"));return this.returnNow(r)}}}parseDateTime(){if(this.state.buf.length<4)throw this.error(new TomlError("Years less than 1000 must be zero padded to four characters"));return this.state.result=this.state.buf,this.state.buf="",this.next(this.parseDateMonth)}parseDateMonth(){if(this.char===CHAR_HYPHEN){if(this.state.buf.length<2)throw this.error(new TomlError("Months less than 10 must be zero padded to two characters"));return this.state.result+="-"+this.state.buf,this.state.buf="",this.next(this.parseDateDay)}else if(isDigit(this.char))this.consume();else throw this.error(new TomlError("Incomplete datetime"))}parseDateDay(){if(this.char===CHAR_T||this.char===CHAR_SP){if(this.state.buf.length<2)throw this.error(new TomlError("Days less than 10 must be zero padded to two characters"));return this.state.result+="-"+this.state.buf,this.state.buf="",this.next(this.parseStartTimeHour)}else{if(this.atEndOfWord())return this.returnNow(createDate(this.state.result+"-"+this.state.buf));if(isDigit(this.char))this.consume();else throw this.error(new TomlError("Incomplete datetime"))}}parseStartTimeHour(){return this.atEndOfWord()?this.returnNow(createDate(this.state.result)):this.goto(this.parseTimeHour)}parseTimeHour(){if(this.char===CHAR_COLON){if(this.state.buf.length<2)throw this.error(new TomlError("Hours less than 10 must be zero padded to two characters"));return this.state.result+="T"+this.state.buf,this.state.buf="",this.next(this.parseTimeMin)}else if(isDigit(this.char))this.consume();else throw this.error(new TomlError("Incomplete datetime"))}parseTimeMin(){if(this.state.buf.length<2&&isDigit(this.char))this.consume();else{if(this.state.buf.length===2&&this.char===CHAR_COLON)return this.state.result+=":"+this.state.buf,this.state.buf="",this.next(this.parseTimeSec);throw this.error(new TomlError("Incomplete datetime"))}}parseTimeSec(){if(isDigit(this.char)){if(this.consume(),this.state.buf.length===2)return this.state.result+=":"+this.state.buf,this.state.buf="",this.next(this.parseTimeZoneOrFraction)}else throw this.error(new TomlError("Incomplete datetime"))}parseOnlyTimeHour(){if(this.char===CHAR_COLON){if(this.state.buf.length<2)throw this.error(new TomlError("Hours less than 10 must be zero padded to two characters"));return this.state.result=this.state.buf,this.state.buf="",this.next(this.parseOnlyTimeMin)}else throw this.error(new TomlError("Incomplete time"))}parseOnlyTimeMin(){if(this.state.buf.length<2&&isDigit(this.char))this.consume();else{if(this.state.buf.length===2&&this.char===CHAR_COLON)return this.state.result+=":"+this.state.buf,this.state.buf="",this.next(this.parseOnlyTimeSec);throw this.error(new TomlError("Incomplete time"))}}parseOnlyTimeSec(){if(isDigit(this.char)){if(this.consume(),this.state.buf.length===2)return this.next(this.parseOnlyTimeFractionMaybe)}else throw this.error(new TomlError("Incomplete time"))}parseOnlyTimeFractionMaybe(){if(this.state.result+=":"+this.state.buf,this.char===CHAR_PERIOD)this.state.buf="",this.next(this.parseOnlyTimeFraction);else return this.return(createTime(this.state.result))}parseOnlyTimeFraction(){if(isDigit(this.char))this.consume();else if(this.atEndOfWord()){if(this.state.buf.length===0)throw this.error(new TomlError("Expected digit in milliseconds"));return this.returnNow(createTime(this.state.result+"."+this.state.buf))}else throw this.error(new TomlError("Unexpected character in datetime, expected period (.), minus (-), plus (+) or Z"))}parseTimeZoneOrFraction(){if(this.char===CHAR_PERIOD)this.consume(),this.next(this.parseDateTimeFraction);else if(this.char===CHAR_HYPHEN||this.char===CHAR_PLUS)this.consume(),this.next(this.parseTimeZoneHour);else{if(this.char===CHAR_Z)return this.consume(),this.return(createDateTime(this.state.result+this.state.buf));if(this.atEndOfWord())return this.returnNow(createDateTimeFloat(this.state.result+this.state.buf));throw this.error(new TomlError("Unexpected character in datetime, expected period (.), minus (-), plus (+) or Z"))}}parseDateTimeFraction(){if(isDigit(this.char))this.consume();else{if(this.state.buf.length===1)throw this.error(new TomlError("Expected digit in milliseconds"));if(this.char===CHAR_HYPHEN||this.char===CHAR_PLUS)this.consume(),this.next(this.parseTimeZoneHour);else{if(this.char===CHAR_Z)return this.consume(),this.return(createDateTime(this.state.result+this.state.buf));if(this.atEndOfWord())return this.returnNow(createDateTimeFloat(this.state.result+this.state.buf));throw this.error(new TomlError("Unexpected character in datetime, expected period (.), minus (-), plus (+) or Z"))}}}parseTimeZoneHour(){if(isDigit(this.char)){if(this.consume(),/\d\d$/.test(this.state.buf))return this.next(this.parseTimeZoneSep)}else throw this.error(new TomlError("Unexpected character in datetime, expected digit"))}parseTimeZoneSep(){if(this.char===CHAR_COLON)this.consume(),this.next(this.parseTimeZoneMin);else throw this.error(new TomlError("Unexpected character in datetime, expected colon"))}parseTimeZoneMin(){if(isDigit(this.char)){if(this.consume(),/\d\d$/.test(this.state.buf))return this.return(createDateTime(this.state.result+this.state.buf))}else throw this.error(new TomlError("Unexpected character in datetime, expected digit"))}parseBoolean(){if(this.char===CHAR_t)return this.consume(),this.next(this.parseTrue_r);if(this.char===CHAR_f)return this.consume(),this.next(this.parseFalse_a)}parseTrue_r(){if(this.char===CHAR_r)return this.consume(),this.next(this.parseTrue_u);throw this.error(new TomlError("Invalid boolean, expected true or false"))}parseTrue_u(){if(this.char===CHAR_u)return this.consume(),this.next(this.parseTrue_e);throw this.error(new TomlError("Invalid boolean, expected true or false"))}parseTrue_e(){if(this.char===CHAR_e)return this.return(!0);throw this.error(new TomlError("Invalid boolean, expected true or false"))}parseFalse_a(){if(this.char===CHAR_a)return this.consume(),this.next(this.parseFalse_l);throw this.error(new TomlError("Invalid boolean, expected true or false"))}parseFalse_l(){if(this.char===CHAR_l)return this.consume(),this.next(this.parseFalse_s);throw this.error(new TomlError("Invalid boolean, expected true or false"))}parseFalse_s(){if(this.char===CHAR_s)return this.consume(),this.next(this.parseFalse_e);throw this.error(new TomlError("Invalid boolean, expected true or false"))}parseFalse_e(){if(this.char===CHAR_e)return this.return(!1);throw this.error(new TomlError("Invalid boolean, expected true or false"))}parseInlineList(){if(this.char===CHAR_SP||this.char===CTRL_I||this.char===CTRL_M||this.char===CTRL_J)return null;if(this.char===t.END)throw this.error(new TomlError("Unterminated inline array"));return this.char===CHAR_NUM?this.call(this.parseComment):this.char===CHAR_RSQB?this.return(this.state.resultArr||InlineList()):this.callNow(this.parseValue,this.recordInlineListValue)}recordInlineListValue(r){return this.state.resultArr||(this.state.resultArr=InlineList(tomlType$1(r))),isFloat(r)||isInteger(r)?this.state.resultArr.push(r.valueOf()):this.state.resultArr.push(r),this.goto(this.parseInlineListNext)}parseInlineListNext(){if(this.char===CHAR_SP||this.char===CTRL_I||this.char===CTRL_M||this.char===CTRL_J)return null;if(this.char===CHAR_NUM)return this.call(this.parseComment);if(this.char===CHAR_COMMA)return this.next(this.parseInlineList);if(this.char===CHAR_RSQB)return this.goto(this.parseInlineList);throw this.error(new TomlError("Invalid character, expected whitespace, comma (,) or close bracket (])"))}parseInlineTable(){if(this.char===CHAR_SP||this.char===CTRL_I)return null;if(this.char===t.END||this.char===CHAR_NUM||this.char===CTRL_J||this.char===CTRL_M)throw this.error(new TomlError("Unterminated inline array"));return this.char===CHAR_RCUB?this.return(this.state.resultTable||InlineTable()):(this.state.resultTable||(this.state.resultTable=InlineTable()),this.callNow(this.parseAssign,this.recordInlineTableValue))}recordInlineTableValue(r){let i=this.state.resultTable,h=r.key.pop();for(let n of r.key){if(hasKey(i,n)&&(!isTable(i[n])||i[n][_declared]))throw this.error(new TomlError("Can't redefine existing key"));i=i[n]=i[n]||Table()}if(hasKey(i,h))throw this.error(new TomlError("Can't redefine existing key"));return isInteger(r.value)||isFloat(r.value)?i[h]=r.value.valueOf():i[h]=r.value,this.goto(this.parseInlineTableNext)}parseInlineTableNext(){if(this.char===CHAR_SP||this.char===CTRL_I)return null;if(this.char===t.END||this.char===CHAR_NUM||this.char===CTRL_J||this.char===CTRL_M)throw this.error(new TomlError("Unterminated inline array"));if(this.char===CHAR_COMMA)return this.next(this.parseInlineTablePostComma);if(this.char===CHAR_RCUB)return this.goto(this.parseInlineTable);throw this.error(new TomlError("Invalid character, expected whitespace, comma (,) or close bracket (])"))}parseInlineTablePostComma(){if(this.char===CHAR_SP||this.char===CTRL_I)return null;if(this.char===t.END||this.char===CHAR_NUM||this.char===CTRL_J||this.char===CTRL_M)throw this.error(new TomlError("Unterminated inline array"));if(this.char===CHAR_COMMA)throw this.error(new TomlError("Empty elements in inline tables are not permitted"));if(this.char===CHAR_RCUB)throw this.error(new TomlError("Trailing commas in inline tables are not permitted"));return this.goto(this.parseInlineTable)}}return e}function prettyError(t,e){if(t.pos==null||t.line==null)return t;let s=t.message;if(s+=` at row ${t.line+1}, col ${t.col+1}, pos ${t.pos}:
`,e&&e.split){const r=e.split(/\n/),i=String(Math.min(r.length,t.line+3)).length;let h=" ";for(;h.length<i;)h+=" ";for(let n=Math.max(0,t.line-1);n<Math.min(r.length,t.line+2);++n){let a=String(n+1);if(a.length<i&&(a=" "+a),t.line===n){s+=a+"> "+r[n]+`
`,s+=h+"  ";for(let o=0;o<t.col;++o)s+=" ";s+=`^
`}else s+=a+": "+r[n]+`
`}}return t.message=s+`
`,t}function parseString(t){global.Buffer&&global.Buffer.isBuffer(t)&&(t=t.toString("utf8"));const e=new TOMLParser;try{return e.parse(t),e.finish()}catch(s){throw prettyError(s,t)}}function stringify$1(t){if(t===null)throw typeError("null");if(t===void 0)throw typeError("undefined");if(typeof t!="object")throw typeError(typeof t);if(typeof t.toJSON=="function"&&(t=t.toJSON()),t==null)return null;const e=tomlType(t);if(e!=="table")throw typeError(e);return stringifyObject("","",t)}function typeError(t){return new Error("Can only stringify objects, not "+t)}function getInlineKeys(t){return Object.keys(t).filter(e=>isInline(t[e]))}function getComplexKeys(t){return Object.keys(t).filter(e=>!isInline(t[e]))}function toJSON(t){let e=Array.isArray(t)?[]:Object.prototype.hasOwnProperty.call(t,"__proto__")?{["__proto__"]:void 0}:{};for(let s of Object.keys(t))t[s]&&typeof t[s].toJSON=="function"&&!("toISOString"in t[s])?e[s]=t[s].toJSON():e[s]=t[s];return e}function stringifyObject(t,e,s){s=toJSON(s);let r,i;r=getInlineKeys(s),i=getComplexKeys(s);const h=[],n=e||"";r.forEach(o=>{var l=tomlType(s[o]);l!=="undefined"&&l!=="null"&&h.push(n+stringifyKey(o)+" = "+stringifyAnyInline(s[o],!0))}),h.length>0&&h.push("");const a=t&&r.length>0?e+"  ":"";return i.forEach(o=>{h.push(stringifyComplex(t,a,o,s[o]))}),h.join(`
`)}function isInline(t){switch(tomlType(t)){case"undefined":case"null":case"integer":case"nan":case"float":case"boolean":case"string":case"datetime":return!0;case"array":return t.length===0||tomlType(t[0])!=="table";case"table":return Object.keys(t).length===0;default:return!1}}function tomlType(t){return t===void 0?"undefined":t===null?"null":typeof t=="bigint"||Number.isInteger(t)&&!Object.is(t,-0)?"integer":typeof t=="number"?"float":typeof t=="boolean"?"boolean":typeof t=="string"?"string":"toISOString"in t?isNaN(t)?"undefined":"datetime":Array.isArray(t)?"array":"table"}function stringifyKey(t){const e=String(t);return/^[-A-Za-z0-9_]+$/.test(e)?e:stringifyBasicString(e)}function stringifyBasicString(t){return'"'+escapeString(t).replace(/"/g,'\\"')+'"'}function stringifyLiteralString(t){return"'"+t+"'"}function numpad(t,e){for(;e.length<t;)e="0"+e;return e}function escapeString(t){return t.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/([\u0000-\u001f\u007f])/,e=>"\\u"+numpad(4,e.codePointAt(0).toString(16)))}function stringifyMultilineString(t){let e=t.split(/\n/).map(s=>escapeString(s).replace(/"(?="")/g,'\\"')).join(`
`);return e.slice(-1)==='"'&&(e+=`\\
`),`"""
`+e+'"""'}function stringifyAnyInline(t,e){let s=tomlType(t);return s==="string"&&(e&&/\n/.test(t)?s="string-multiline":!/[\b\t\n\f\r']/.test(t)&&/"/.test(t)&&(s="string-literal")),stringifyInline(t,s)}function stringifyInline(t,e){switch(e||(e=tomlType(t)),e){case"string-multiline":return stringifyMultilineString(t);case"string":return stringifyBasicString(t);case"string-literal":return stringifyLiteralString(t);case"integer":return stringifyInteger(t);case"float":return stringifyFloat(t);case"boolean":return stringifyBoolean(t);case"datetime":return stringifyDatetime(t);case"array":return stringifyInlineArray(t.filter(s=>tomlType(s)!=="null"&&tomlType(s)!=="undefined"&&tomlType(s)!=="nan"));case"table":return stringifyInlineTable(t);default:throw typeError(e)}}function stringifyInteger(t){return String(t).replace(/\B(?=(\d{3})+(?!\d))/g,"_")}function stringifyFloat(t){if(t===1/0)return"inf";if(t===-1/0)return"-inf";if(Object.is(t,NaN))return"nan";if(Object.is(t,-0))return"-0.0";const[e,s]=String(t).split(".");return stringifyInteger(e)+"."+s}function stringifyBoolean(t){return String(t)}function stringifyDatetime(t){return t.toISOString()}function stringifyInlineArray(t){t=toJSON(t);let e="[";const s=t.map(r=>stringifyInline(r));return s.join(", ").length>60||/\n/.test(s)?e+=`
  `+s.join(`,
  `)+`
`:e+=" "+s.join(", ")+(s.length>0?" ":""),e+"]"}function stringifyInlineTable(t){t=toJSON(t);const e=[];return Object.keys(t).forEach(s=>{e.push(stringifyKey(s)+" = "+stringifyAnyInline(t[s],!1))}),"{ "+e.join(", ")+(e.length>0?" ":"")+"}"}function stringifyComplex(t,e,s,r){const i=tomlType(r);if(i==="array")return stringifyArrayOfTables(t,e,s,r);if(i==="table")return stringifyComplexTable(t,e,s,r);throw typeError(i)}function stringifyArrayOfTables(t,e,s,r){r=toJSON(r);const i=tomlType(r[0]);if(i!=="table")throw typeError(i);const h=t+stringifyKey(s);let n="";return r.forEach(a=>{n.length>0&&(n+=`
`),n+=e+"[["+h+`]]
`,n+=stringifyObject(h+".",e,a)}),n}function stringifyComplexTable(t,e,s,r){const i=t+stringifyKey(s);let h="";return getInlineKeys(r).length>0&&(h+=e+"["+i+`]
`),h+stringifyObject(i+".",e,r)}const parse=parseString,stringify=stringify$1;export{parse as p,stringify as s};
