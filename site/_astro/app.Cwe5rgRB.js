import{S as an}from"./index.astro_astro_type_script_index_0_lang.DmUdsC8B.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fl="184",vd=0,Mc=1,xd=2,or=1,Sd=2,nr=3,Li=0,hn=1,In=2,pi=0,Rs=1,Is=2,bc=3,wc=4,yd=5,Xi=100,Md=101,bd=102,wd=103,Ed=104,Td=200,Ad=201,Rd=202,Cd=203,Ua=204,Na=205,Pd=206,Id=207,Ld=208,Dd=209,Ud=210,Nd=211,Fd=212,Od=213,Bd=214,Fa=0,Oa=1,Ba=2,Ls=3,za=4,ka=5,Ga=6,Ha=7,Ol=0,zd=1,kd=2,Kn=0,Ku=1,Ju=2,ju=3,Bl=4,Qu=5,eh=6,th=7,nh=300,Ji=301,Ds=302,Bo=303,zo=304,Io=306,ln=1e3,Ln=1001,Va=1002,jt=1003,Gd=1004,Rr=1005,Qt=1006,ko=1007,Yi=1008,xn=1009,ih=1010,sh=1011,hr=1012,zl=1013,ei=1014,Dn=1015,_i=1016,kl=1017,Gl=1018,dr=1020,rh=35902,oh=35899,ah=1021,lh=1022,Un=1023,vi=1026,Zi=1027,Hl=1028,Vl=1029,ji=1030,Wl=1031,Xl=1033,co=33776,uo=33777,ho=33778,fo=33779,Wa=35840,Xa=35841,$a=35842,qa=35843,Ya=36196,Za=37492,Ka=37496,Ja=37488,ja=37489,vo=37490,Qa=37491,el=37808,tl=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,ul=37818,hl=37819,dl=37820,fl=37821,pl=36492,ml=36494,gl=36495,_l=36283,vl=36284,xo=36285,xl=36286,Hd=3200,So=0,Vd=1,hi="",St="srgb",yo="srgb-linear",Mo="linear",mt="srgb",os=7680,Ec=519,Wd=512,Xd=513,$d=514,$l=515,qd=516,Yd=517,ql=518,Zd=519,Sl=35044,Tc="300 es",Zn=2e3,fr=2001;function Kd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jd(){const i=pr("canvas");return i.style.display="block",i}const Ac={};function bo(...i){const e="THREE."+i.shift();console.log(e,...i)}function ch(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=ch(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function at(...i){i=ch(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function yl(...i){const e=i.join(" ");e in Ac||(Ac[e]=!0,Ye(...i))}function jd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Qd={[Fa]:Oa,[Ba]:Ga,[za]:Ha,[Ls]:ka,[Oa]:Fa,[Ga]:Ba,[Ha]:za,[ka]:Ls};class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Go=Math.PI/180,wo=180/Math.PI;function mi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function ef(i,e){return(i%e+e)%e}function Ho(i,e,t){return(1-t)*i+t*e}function qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ee{static{ee.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class en{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3],h=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(u!==v||l!==h||c!==f||d!==p){let g=l*h+c*f+d*p+u*v;g<0&&(h=-h,f=-f,p=-p,v=-v,g=-g);let m=1-a;if(g<.9995){const _=Math.acos(g),y=Math.sin(_);m=Math.sin(m*_)/y,a=Math.sin(a*_)/y,l=l*m+h*a,c=c*m+f*a,d=d*m+p*a,u=u*m+v*a}else{l=l*m+h*a,c=c*m+f*a,d=d*m+p*a,u=u*m+v*a;const _=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=_,c*=_,d*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+d*u+l*f-c*h,e[t+1]=l*p+d*h+c*u-a*f,e[t+2]=c*p+d*f+a*h-l*u,e[t+3]=d*p-a*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),u=a(r/2),h=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*d*u+c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u-h*f*p;break;case"YXZ":this._x=h*d*u+c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u+h*f*p;break;case"ZXY":this._x=h*d*u-c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u-h*f*p;break;case"ZYX":this._x=h*d*u-c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u+h*f*p;break;case"YZX":this._x=h*d*u+c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u-h*f*p;break;case"XZY":this._x=h*d*u-c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u+h*f*p;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{static{L.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),d=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-r*u,this.z=s+l*u+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vo=new L,Rc=new en;class Qe{static{Qe.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],p=n[8],v=s[0],g=s[3],m=s[6],_=s[1],y=s[4],x=s[7],w=s[2],M=s[5],T=s[8];return r[0]=o*v+a*_+l*w,r[3]=o*g+a*y+l*M,r[6]=o*m+a*x+l*T,r[1]=c*v+d*_+u*w,r[4]=c*g+d*y+u*M,r[7]=c*m+d*x+u*T,r[2]=h*v+f*_+p*w,r[5]=h*g+f*y+p*M,r[8]=h*m+f*x+p*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*r,f=c*r-o*l,p=t*u+n*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=u*v,e[1]=(s*c-d*n)*v,e[2]=(a*n-s*o)*v,e[3]=h*v,e[4]=(d*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wo.makeScale(e,t)),this}rotate(e){return this.premultiply(Wo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wo=new Qe,Cc=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pc=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tf(){const i={enabled:!0,workingColorSpace:yo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?Mo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yo]:{primaries:e,whitePoint:n,transfer:Mo,toXYZ:Cc,fromXYZ:Pc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Cc,fromXYZ:Pc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),i}const ut=tf();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let as;class nf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{as===void 0&&(as=pr("canvas")),as.width=e.width,as.height=e.height;const s=as.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=as}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sf=0;class Yl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xo(s[o].image)):r.push(Xo(s[o]))}else r=Xo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let rf=0;const $o=new L;class Kt extends es{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,n=Ln,s=Ln,r=Qt,o=Yi,a=Un,l=xn,c=Kt.DEFAULT_ANISOTROPY,d=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=mi(),this.name="",this.source=new Yl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($o).x}get height(){return this.source.getSize($o).y}get depth(){return this.source.getSize($o).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ln:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ln:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=nh;Kt.DEFAULT_ANISOTROPY=1;class Ft{static{Ft.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(f+1)/2,w=(m+1)/2,M=(d+h)/4,T=(u+v)/4,S=(p+g)/4;return y>x&&y>w?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=M/n,r=T/n):x>w?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=S/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=T/r,s=S/r),this.set(n,s,r,t),this}let _=Math.sqrt((g-p)*(g-p)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(_)<.001&&(_=1),this.x=(g-p)/_,this.y=(u-v)/_,this.z=(h-d)/_,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class of extends es{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Kt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Yl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends of{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uh extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class af extends Kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ct{static{ct.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,l,c,d,u,h,f,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,d,u,h,f,p,v,g)}set(e,t,n,s,r,o,a,l,c,d,u,h,f,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=h,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ls.setFromMatrixColumn(e,0).length(),r=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=o*d,f=o*u,p=a*d,v=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,p=c*d,v=c*u;t[0]=h+v*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-p,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,p=c*d,v=c*u;t[0]=h-v*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*d,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*d,f=o*u,p=a*d,v=a*u;t[0]=l*d,t[4]=p*c-f,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*d,t[4]=v-h*u,t[8]=p*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*u+p,t[10]=h-v*u}else if(e.order==="XZY"){const h=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+v,t[5]=o*d,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lf,e,cf)}lookAt(e,t,n){const s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),bi.crossVectors(n,_n),bi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),bi.crossVectors(n,_n)),bi.normalize(),Cr.crossVectors(_n,bi),s[0]=bi.x,s[4]=Cr.x,s[8]=_n.x,s[1]=bi.y,s[5]=Cr.y,s[9]=_n.y,s[2]=bi.z,s[6]=Cr.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],_=n[3],y=n[7],x=n[11],w=n[15],M=s[0],T=s[4],S=s[8],A=s[12],I=s[1],P=s[5],B=s[9],W=s[13],z=s[2],N=s[6],F=s[10],O=s[14],G=s[3],J=s[7],K=s[11],Q=s[15];return r[0]=o*M+a*I+l*z+c*G,r[4]=o*T+a*P+l*N+c*J,r[8]=o*S+a*B+l*F+c*K,r[12]=o*A+a*W+l*O+c*Q,r[1]=d*M+u*I+h*z+f*G,r[5]=d*T+u*P+h*N+f*J,r[9]=d*S+u*B+h*F+f*K,r[13]=d*A+u*W+h*O+f*Q,r[2]=p*M+v*I+g*z+m*G,r[6]=p*T+v*P+g*N+m*J,r[10]=p*S+v*B+g*F+m*K,r[14]=p*A+v*W+g*O+m*Q,r[3]=_*M+y*I+x*z+w*G,r[7]=_*T+y*P+x*N+w*J,r[11]=_*S+y*B+x*F+w*K,r[15]=_*A+y*W+x*O+w*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15],_=l*f-c*h,y=a*f-c*u,x=a*h-l*u,w=o*f-c*d,M=o*h-l*d,T=o*u-a*d;return t*(v*_-g*y+m*x)-n*(p*_-g*w+m*M)+s*(p*y-v*w+m*T)-r*(p*x-v*M+g*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],_=t*a-n*o,y=t*l-s*o,x=t*c-r*o,w=n*l-s*a,M=n*c-r*a,T=s*c-r*l,S=d*v-u*p,A=d*g-h*p,I=d*m-f*p,P=u*g-h*v,B=u*m-f*v,W=h*m-f*g,z=_*W-y*B+x*P+w*I-M*A+T*S;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/z;return e[0]=(a*W-l*B+c*P)*N,e[1]=(s*B-n*W-r*P)*N,e[2]=(v*T-g*M+m*w)*N,e[3]=(h*M-u*T-f*w)*N,e[4]=(l*I-o*W-c*A)*N,e[5]=(t*W-s*I+r*A)*N,e[6]=(g*x-p*T-m*y)*N,e[7]=(d*T-h*x+f*y)*N,e[8]=(o*B-a*I+c*S)*N,e[9]=(n*I-t*B-r*S)*N,e[10]=(p*M-v*x+m*_)*N,e[11]=(u*x-d*M-f*_)*N,e[12]=(a*A-o*P-l*S)*N,e[13]=(t*P-n*A+s*S)*N,e[14]=(v*y-p*w-g*_)*N,e[15]=(d*w-u*y+h*_)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,h=r*c,f=r*d,p=r*u,v=o*d,g=o*u,m=a*u,_=l*c,y=l*d,x=l*u,w=n.x,M=n.y,T=n.z;return s[0]=(1-(v+m))*w,s[1]=(f+x)*w,s[2]=(p-y)*w,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(h+m))*M,s[6]=(g+_)*M,s[7]=0,s[8]=(p+y)*T,s[9]=(g-_)*T,s[10]=(1-(h+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=ls.set(s[0],s[1],s[2]).length();const a=ls.set(s[4],s[5],s[6]).length(),l=ls.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Rn.copy(this);const c=1/o,d=1/a,u=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=d,Rn.elements[5]*=d,Rn.elements[6]*=d,Rn.elements[8]*=u,Rn.elements[9]*=u,Rn.elements[10]*=u,t.setFromRotationMatrix(Rn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Zn,l=!1){const c=this.elements,d=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===Zn)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===fr)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Zn,l=!1){const c=this.elements,d=2/(t-e),u=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s);let p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===Zn)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===fr)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ls=new L,Rn=new ct,lf=new L(0,0,0),cf=new L(1,1,1),bi=new L,Cr=new L,_n=new L,Ic=new ct,Lc=new en;class xi{constructor(e=0,t=0,n=0,s=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ic.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ic,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lc.setFromEuler(this),this.setFromQuaternion(Lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uf=0;const Dc=new L,cs=new en,ri=new ct,Pr=new L,Vs=new L,hf=new L,df=new en,Uc=new L(1,0,0),Nc=new L(0,1,0),Fc=new L(0,0,1),Oc={type:"added"},ff={type:"removed"},us={type:"childadded",child:null},qo={type:"childremoved",child:null};class Ot extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new L,t=new xi,n=new en,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Qe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(Uc,e)}rotateY(e){return this.rotateOnAxis(Nc,e)}rotateZ(e){return this.rotateOnAxis(Fc,e)}translateOnAxis(e,t){return Dc.copy(e).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uc,e)}translateY(e){return this.translateOnAxis(Nc,e)}translateZ(e){return this.translateOnAxis(Fc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pr.copy(e):Pr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Vs,Pr,this.up):ri.lookAt(Pr,Vs,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(ri),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oc),us.child=e,this.dispatchEvent(us),us.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ff),qo.child=e,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oc),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,e,hf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new L(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ve extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pf={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ve;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function Zo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=ef(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Zo(o,r,e+1/3),this.g=Zo(o,r,e),this.b=Zo(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return ut.workingToColorSpace(rn.copy(this),e),Math.round(rt(rn.r*255,0,255))*65536+Math.round(rt(rn.g*255,0,255))*256+Math.round(rt(rn.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(rn.copy(this),t);const n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=St){ut.workingToColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,s=rn.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(Ir);const n=Ho(wi.h,Ir.h,t),s=Ho(wi.s,Ir.s,t),r=Ho(wi.l,Ir.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Fe;Fe.NAMES=hh;class dh extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Cn=new L,oi=new L,Ko=new L,ai=new L,hs=new L,ds=new L,Bc=new L,Jo=new L,jo=new L,Qo=new L,ea=new Ft,ta=new Ft,na=new Ft;class An{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Cn.subVectors(s,t),oi.subVectors(n,t),Ko.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(oi),l=Cn.dot(Ko),c=oi.dot(oi),d=oi.dot(Ko),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const h=1/u,f=(c*l-a*d)*h,p=(o*d-a*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ea.setScalar(0),ta.setScalar(0),na.setScalar(0),ea.fromBufferAttribute(e,t),ta.fromBufferAttribute(e,n),na.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ea,r.x),o.addScaledVector(ta,r.y),o.addScaledVector(na,r.z),o}static isFrontFacing(e,t,n,s){return Cn.subVectors(n,t),oi.subVectors(e,t),Cn.cross(oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Cn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return An.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;hs.subVectors(s,n),ds.subVectors(r,n),Jo.subVectors(e,n);const l=hs.dot(Jo),c=ds.dot(Jo);if(l<=0&&c<=0)return t.copy(n);jo.subVectors(e,s);const d=hs.dot(jo),u=ds.dot(jo);if(d>=0&&u<=d)return t.copy(s);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(hs,o);Qo.subVectors(e,r);const f=hs.dot(Qo),p=ds.dot(Qo);if(p>=0&&f<=p)return t.copy(r);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(ds,a);const g=d*p-f*u;if(g<=0&&u-d>=0&&f-p>=0)return Bc.subVectors(r,s),a=(u-d)/(u-d+(f-p)),t.copy(s).addScaledVector(Bc,a);const m=1/(g+v+h);return o=v*m,a=h*m,t.copy(n).addScaledVector(hs,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ts{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Dr.subVectors(this.max,Ws),fs.subVectors(e.a,Ws),ps.subVectors(e.b,Ws),ms.subVectors(e.c,Ws),Ei.subVectors(ps,fs),Ti.subVectors(ms,ps),Oi.subVectors(fs,ms);let t=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-Oi.z,Oi.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,Oi.z,0,-Oi.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-Oi.y,Oi.x,0];return!ia(t,fs,ps,ms,Dr)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,fs,ps,ms,Dr))?!1:(Ur.crossVectors(Ei,Ti),t=[Ur.x,Ur.y,Ur.z],ia(t,fs,ps,ms,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const li=[new L,new L,new L,new L,new L,new L,new L,new L],Pn=new L,Lr=new ts,fs=new L,ps=new L,ms=new L,Ei=new L,Ti=new L,Oi=new L,Ws=new L,Dr=new L,Ur=new L,Bi=new L;function ia(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bi.fromArray(i,r);const a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=e.dot(Bi),c=t.dot(Bi),d=n.dot(Bi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Ht=new L,Nr=new ee;let mf=0;class At extends es{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sl,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nr.fromBufferAttribute(this,t),Nr.applyMatrix3(e),this.setXY(t,Nr.x,Nr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class fh extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ph extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}const gf=new ts,Xs=new L,sa=new L;class ks{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(sa)),this.expandByPoint(Xs.copy(e.center).sub(sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _f=0;const Mn=new ct,ra=new Ot,gs=new L,vn=new ts,$s=new ts,Yt=new L;class Ct extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kd(e)?ph:fh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(vn.min,$s.min),vn.expandByPoint(Yt),Yt.addVectors(vn.max,$s.max),vn.expandByPoint(Yt)):(vn.expandByPoint($s.min),vn.expandByPoint($s.max))}vn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Yt.fromBufferAttribute(a,c),l&&(gs.fromBufferAttribute(e,c),Yt.add(gs)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<n.count;S++)a[S]=new L,l[S]=new L;const c=new L,d=new L,u=new L,h=new ee,f=new ee,p=new ee,v=new L,g=new L;function m(S,A,I){c.fromBufferAttribute(n,S),d.fromBufferAttribute(n,A),u.fromBufferAttribute(n,I),h.fromBufferAttribute(r,S),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,I),d.sub(c),u.sub(c),f.sub(h),p.sub(h);const P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(v.copy(d).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(P),a[S].add(v),a[A].add(v),a[I].add(v),l[S].add(g),l[A].add(g),l[I].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let S=0,A=_.length;S<A;++S){const I=_[S],P=I.start,B=I.count;for(let W=P,z=P+B;W<z;W+=3)m(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const y=new L,x=new L,w=new L,M=new L;function T(S){w.fromBufferAttribute(s,S),M.copy(w);const A=a[S];y.copy(A),y.sub(w.multiplyScalar(w.dot(A))).normalize(),x.crossVectors(M,A);const P=x.dot(l[S])<0?-1:1;o.setXYZW(S,y.x,y.y,y.z,P)}for(let S=0,A=_.length;S<A;++S){const I=_[S],P=I.start,B=I.count;for(let W=P,z=P+B;W<z;W+=3)T(e.getX(W+0)),T(e.getX(W+1)),T(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,d=new L,u=new L;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(d),l.add(d),c.add(d),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d);let f=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*d;for(let m=0;m<d;m++)h[p++]=c[f++]}return new At(h,d,u)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sl,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new L;class Eo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){bo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Eo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){bo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let xf=0;class Ni extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=Rs,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kl extends Ni{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _s;const qs=new L,vs=new L,xs=new L,Ss=new ee,Ys=new ee,mh=new ct,Fr=new L,Zs=new L,Or=new L,zc=new ee,oa=new ee,kc=new ee;class Jl extends Ot{constructor(e=new Kl){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new Ct;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vf(t,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new Eo(n,3,0,!1)),_s.setAttribute("uv",new Eo(n,2,3,!1))}this.geometry=_s,this.material=e,this.center=new ee(.5,.5),this.count=1}raycast(e,t){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),mh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-xs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Br(Fr.set(-.5,-.5,0),xs,o,vs,s,r),Br(Zs.set(.5,-.5,0),xs,o,vs,s,r),Br(Or.set(.5,.5,0),xs,o,vs,s,r),zc.set(0,0),oa.set(1,0),kc.set(1,1);let a=e.ray.intersectTriangle(Fr,Zs,Or,!1,qs);if(a===null&&(Br(Zs.set(-.5,.5,0),xs,o,vs,s,r),oa.set(0,1),a=e.ray.intersectTriangle(Fr,Or,Zs,!1,qs),a===null))return;const l=e.ray.origin.distanceTo(qs);l<e.near||l>e.far||t.push({distance:l,point:qs.clone(),uv:An.getInterpolation(qs,Fr,Zs,Or,zc,oa,kc,new ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Br(i,e,t,n,s,r){Ss.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ys.x=r*Ss.x-s*Ss.y,Ys.y=s*Ss.x+r*Ss.y):Ys.copy(Ss),i.copy(e),i.x+=Ys.x,i.y+=Ys.y,i.applyMatrix4(mh)}const ci=new L,aa=new L,zr=new L,Ai=new L,la=new L,kr=new L,ca=new L;class jl{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){aa.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(aa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(zr),a=Ai.dot(this.direction),l=-Ai.dot(zr),c=Ai.lengthSq(),d=Math.abs(1-o*o);let u,h,f,p;if(d>0)if(u=o*l-a,h=o*a-l,p=r*d,u>=0)if(h>=-p)if(h<=p){const v=1/d;u*=v,h*=v,f=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-p?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=p?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(aa).addScaledVector(zr,h),f}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,s,r){la.subVectors(t,e),kr.subVectors(n,e),ca.crossVectors(la,kr);let o=this.direction.dot(ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(kr.crossVectors(Ai,kr));if(l<0)return null;const c=a*this.direction.dot(la.cross(Ai));if(c<0||l+c>o)return null;const d=-a*Ai.dot(ca);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nn extends Ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gc=new ct,zi=new jl,Gr=new ks,Hc=new L,Hr=new L,Vr=new L,Wr=new L,ua=new L,Xr=new L,Vc=new L,$r=new L;class D extends Ot{constructor(e=new Ct,t=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],u=r[l];d!==0&&(ua.fromBufferAttribute(u,e),o?Xr.addScaledVector(ua,d):Xr.addScaledVector(ua.sub(t),d))}t.add(Xr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(r),zi.copy(e.ray).recast(e.near),!(Gr.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Gr,Hc)===null||zi.origin.distanceToSquared(Hc)>(e.far-e.near)**2))&&(Gc.copy(r).invert(),zi.copy(e.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=_,w=y;x<w;x+=3){const M=a.getX(x),T=a.getX(x+1),S=a.getX(x+2);s=qr(this,m,e,n,c,d,u,M,T,S),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const _=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=qr(this,o,e,n,c,d,u,_,y,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=o[g.materialIndex],_=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=_,w=y;x<w;x+=3){const M=x,T=x+1,S=x+2;s=qr(this,m,e,n,c,d,u,M,T,S),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const _=g,y=g+1,x=g+2;s=qr(this,o,e,n,c,d,u,_,y,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Sf(i,e,t,n,s,r,o,a){let l;if(e.side===hn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Li,a),l===null)return null;$r.copy(a),$r.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo($r);return c<t.near||c>t.far?null:{distance:c,point:$r.clone(),object:i}}function qr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Hr),i.getVertexPosition(l,Vr),i.getVertexPosition(c,Wr);const d=Sf(i,e,t,n,Hr,Vr,Wr,Vc);if(d){const u=new L;An.getBarycoord(Vc,Hr,Vr,Wr,u),s&&(d.uv=An.getInterpolatedAttribute(s,a,l,c,u,new ee)),r&&(d.uv1=An.getInterpolatedAttribute(r,a,l,c,u,new ee)),o&&(d.normal=An.getInterpolatedAttribute(o,a,l,c,u,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new L,materialIndex:0};An.getNormal(Hr,Vr,Wr,h.normal),d.face=h,d.barycoord=u}return d}class gh extends Kt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=jt,d=jt,u,h){super(null,o,a,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ml extends At{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ys=new ct,Wc=new ct,Yr=[],Xc=new ts,yf=new ct,Ks=new D,Js=new ks;class ar extends D{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ml(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ts),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),Xc.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(Xc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ks),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),Js.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(Js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),e.ray.intersectsSphere(Js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),Wc.multiplyMatrices(n,ys),Ks.matrixWorld=Wc,Ks.raycast(e,Yr);for(let o=0,a=Yr.length;o<a;o++){const l=Yr[o];l.instanceId=r,l.object=this,t.push(l)}Yr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ml(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gh(new Float32Array(s*this.count),s,this.count,Hl,Dn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ha=new L,Mf=new L,bf=new Qe;class Vi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ha.subVectors(n,t).cross(Mf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(ha),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||bf.getNormalMatrix(e),s=this.coplanarPoint(ha).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new ks,wf=new ee(.5,.5),Zr=new L;class Ql{constructor(e=new Vi,t=new Vi,n=new Vi,s=new Vi,r=new Vi,o=new Vi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],p=r[8],v=r[9],g=r[10],m=r[11],_=r[12],y=r[13],x=r[14],w=r[15];if(s[0].setComponents(c-o,f-d,m-p,w-_).normalize(),s[1].setComponents(c+o,f+d,m+p,w+_).normalize(),s[2].setComponents(c+a,f+u,m+v,w+y).normalize(),s[3].setComponents(c-a,f-u,m-v,w-y).normalize(),n)s[4].setComponents(l,h,g,x).normalize(),s[5].setComponents(c-l,f-h,m-g,w-x).normalize();else if(s[4].setComponents(c-l,f-h,m-g,w-x).normalize(),t===Zn)s[5].setComponents(c+l,f+h,m+g,w+x).normalize();else if(t===fr)s[5].setComponents(l,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);const t=wf.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Zr.x=s.normal.x>0?e.max.x:e.min.x,Zr.y=s.normal.y>0?e.max.y:e.min.y,Zr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _h extends Ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $c=new ct,bl=new jl,Kr=new ks,Jr=new L;class vh extends Ot{constructor(e=new Ct,t=new _h){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,e.ray.intersectsSphere(Kr)===!1)return;$c.copy(s).invert(),bl.copy(e.ray).applyMatrix4($c);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=h,v=f;p<v;p++){const g=c.getX(p);Jr.fromBufferAttribute(u,g),qc(Jr,g,l,s,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=h,v=f;p<v;p++)Jr.fromBufferAttribute(u,p),qc(Jr,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qc(i,e,t,n,s,r,o){const a=bl.distanceSqToPoint(i);if(a<t){const l=new L;bl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class xh extends Kt{constructor(e=[],t=Ji,n,s,r,o,a,l,c,d){super(e,t,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tn extends Kt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Us extends Kt{constructor(e,t,n=ei,s,r,o,a=jt,l=jt,c,d=vi,u=1){if(d!==vi&&d!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ef extends Us{constructor(e,t=ei,n=Ji,s,r,o=jt,a=jt,l,c=vi){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sh extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Je extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],u=[];let h=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(u,2));function p(v,g,m,_,y,x,w,M,T,S,A){const I=x/T,P=w/S,B=x/2,W=w/2,z=M/2,N=T+1,F=S+1;let O=0,G=0;const J=new L;for(let K=0;K<F;K++){const Q=K*P-W;for(let oe=0;oe<N;oe++){const Ue=oe*I-B;J[v]=Ue*_,J[g]=Q*y,J[m]=z,c.push(J.x,J.y,J.z),J[v]=0,J[g]=0,J[m]=M>0?1:-1,d.push(J.x,J.y,J.z),u.push(oe/T),u.push(1-K/S),O+=1}}for(let K=0;K<S;K++)for(let Q=0;Q<T;Q++){const oe=h+Q+N*K,Ue=h+Q+N*(K+1),We=h+(Q+1)+N*(K+1),we=h+(Q+1)+N*K;l.push(oe,Ue,we),l.push(Ue,We,we),G+=6}a.addGroup(f,G,A),f+=G,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Je(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ns extends Ct{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new L,d=new ee;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(a,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class qe extends Ct{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const d=[],u=[],h=[],f=[];let p=0;const v=[],g=n/2;let m=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(f,2));function _(){const x=new L,w=new L;let M=0;const T=(t-e)/n;for(let S=0;S<=r;S++){const A=[],I=S/r,P=I*(t-e)+e;for(let B=0;B<=s;B++){const W=B/s,z=W*l+a,N=Math.sin(z),F=Math.cos(z);w.x=P*N,w.y=-I*n+g,w.z=P*F,u.push(w.x,w.y,w.z),x.set(N,T,F).normalize(),h.push(x.x,x.y,x.z),f.push(W,1-I),A.push(p++)}v.push(A)}for(let S=0;S<s;S++)for(let A=0;A<r;A++){const I=v[A][S],P=v[A+1][S],B=v[A+1][S+1],W=v[A][S+1];(e>0||A!==0)&&(d.push(I,P,W),M+=3),(t>0||A!==r-1)&&(d.push(P,B,W),M+=3)}c.addGroup(m,M,0),m+=M}function y(x){const w=p,M=new ee,T=new L;let S=0;const A=x===!0?e:t,I=x===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,g*I,0),h.push(0,I,0),f.push(.5,.5),p++;const P=p;for(let B=0;B<=s;B++){const z=B/s*l+a,N=Math.cos(z),F=Math.sin(z);T.x=A*F,T.y=g*I,T.z=A*N,u.push(T.x,T.y,T.z),h.push(0,I,0),M.x=N*.5+.5,M.y=F*.5*I+.5,f.push(M.x,M.y),p++}for(let B=0;B<s;B++){const W=w+B,z=P+B;x===!0?d.push(z,z+1,W):d.push(z+1,z,W),S+=3}c.addGroup(m,S,x===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mr extends qe{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new mr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const d=n[s],h=n[s+1]-d,f=(o-d)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ee:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,s=[],r=[],o=[],a=new L,l=new ct;for(let f=0;f<=e;f++){const p=f/e;s[f]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const d=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(rt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(rt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ec extends ti{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ee){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*u+this.aX,c=h*u+f*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Tf extends ec{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function tc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,u){let h=(o-r)/c-(a-r)/(c+d)+(a-o)/d,f=(a-o)/d-(l-o)/(d+u)+(l-a)/u;h*=d,f*=d,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Yc=new L,Zc=new L,da=new tc,fa=new tc,pa=new tc;class Af extends ti{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(Zc.subVectors(s[0],s[1]).add(s[0]),c=Zc);const u=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(Yc.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Yc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),da.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,p,v,g),fa.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,p,v,g),pa.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,p,v,g)}else this.curveType==="catmullrom"&&(da.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),fa.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),pa.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return n.set(da.calc(l),fa.calc(l),pa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kc(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Rf(i,e){const t=1-i;return t*t*e}function Cf(i,e){return 2*(1-i)*i*e}function Pf(i,e){return i*i*e}function lr(i,e,t,n){return Rf(i,e)+Cf(i,t)+Pf(i,n)}function If(i,e){const t=1-i;return t*t*t*e}function Lf(i,e){const t=1-i;return 3*t*t*i*e}function Df(i,e){return 3*(1-i)*i*i*e}function Uf(i,e){return i*i*i*e}function cr(i,e,t,n,s){return If(i,e)+Lf(i,t)+Df(i,n)+Uf(i,s)}class yh extends ti{constructor(e=new ee,t=new ee,n=new ee,s=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ee){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(e,s.x,r.x,o.x,a.x),cr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nf extends ti{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(cr(e,s.x,r.x,o.x,a.x),cr(e,s.y,r.y,o.y,a.y),cr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Mh extends ti{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ff extends ti{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bh extends ti{constructor(e=new ee,t=new ee,n=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ee){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(e,s.x,r.x,o.x),lr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Of extends ti{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(lr(e,s.x,r.x,o.x),lr(e,s.y,r.y,o.y),lr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wh extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Kc(a,l.x,c.x,d.x,u.x),Kc(a,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ee().fromArray(s))}return this}}var wl=Object.freeze({__proto__:null,ArcCurve:Tf,CatmullRomCurve3:Af,CubicBezierCurve:yh,CubicBezierCurve3:Nf,EllipseCurve:ec,LineCurve:Mh,LineCurve3:Ff,QuadraticBezierCurve:bh,QuadraticBezierCurve3:Of,SplineCurve:wh});class Bf extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new wl[s.type]().fromJSON(s))}return this}}class gr extends Bf{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Mh(this.currentPoint.clone(),new ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new bh(this.currentPoint.clone(),new ee(e,t),new ee(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new yh(this.currentPoint.clone(),new ee(e,t),new ee(n,s),new ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new wh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new ec(e,t,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gs extends gr{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new gr().fromJSON(s))}return this}}function zf(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Eh(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Wf(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let d=a,u=l;for(let h=t;h<s;h+=t){const f=i[h],p=i[h+1];f<a&&(a=f),p<l&&(l=p),f>d&&(d=f),p>u&&(u=p)}c=Math.max(d-a,u-l),c=c!==0?32767/c:0}return _r(r,o,t,a,l,c,0),o}function Eh(i,e,t,n,s){let r;if(s===t0(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Jc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Jc(o/n|0,i[o],i[o+1],r);return r&&Fs(r,r.next)&&(xr(r),r=r.next),r}function Qi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Fs(t,t.next)||Lt(t.prev,t,t.next)===0)){if(xr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function _r(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Zf(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Gf(i,n,s,r):kf(i)){e.push(l.i,i.i,c.i),xr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Hf(Qi(i),e),_r(i,e,t,n,s,r,2)):o===2&&Vf(i,e,t,n,s,r):_r(Qi(i),e,t,n,s,r,1);break}}}function kf(i){const e=i.prev,t=i,n=i.next;if(Lt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=Math.min(s,r,o),u=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c);let p=n.next;for(;p!==e;){if(p.x>=d&&p.x<=h&&p.y>=u&&p.y<=f&&ir(s,a,r,l,o,c,p.x,p.y)&&Lt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Gf(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Lt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,d=s.y,u=r.y,h=o.y,f=Math.min(a,l,c),p=Math.min(d,u,h),v=Math.max(a,l,c),g=Math.max(d,u,h),m=El(f,p,e,t,n),_=El(v,g,e,t,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=m&&x&&x.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&ir(a,d,l,u,c,h,y.x,y.y)&&Lt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&ir(a,d,l,u,c,h,x.x,x.y)&&Lt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=m;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=g&&y!==s&&y!==o&&ir(a,d,l,u,c,h,y.x,y.y)&&Lt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==s&&x!==o&&ir(a,d,l,u,c,h,x.x,x.y)&&Lt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Hf(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Fs(n,s)&&Ah(n,t,t.next,s)&&vr(n,s)&&vr(s,n)&&(e.push(n.i,t.i,s.i),xr(t),xr(t.next),t=i=s),t=t.next}while(t!==i);return Qi(t)}function Vf(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&jf(o,a)){let l=Rh(o,a);o=Qi(o,o.next),l=Qi(l,l.next),_r(o,e,t,n,s,r,0),_r(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Wf(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Eh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Jf(c))}s.sort(Xf);for(let r=0;r<s.length;r++)t=$f(s[r],t);return t}function Xf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function $f(i,e){const t=qf(i,e);if(!t)return e;const n=Rh(t,i);return Qi(n,n.next),Qi(t,t.next)}function qf(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Fs(i,t))return t;do{if(Fs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let d=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Th(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);vr(t,i)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&Yf(o,t)))&&(o=t,d=u)}t=t.next}while(t!==a);return o}function Yf(i,e){return Lt(i.prev,i,e.prev)<0&&Lt(e.next,i,i.next)<0}function Zf(i,e,t,n){let s=i;do s.z===0&&(s.z=El(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kf(s)}function Kf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function El(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Jf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Th(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ir(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Th(i,e,t,n,s,r,o,a)}function jf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Qf(i,e)&&(vr(i,e)&&vr(e,i)&&e0(i,e)&&(Lt(i.prev,i,e.prev)||Lt(i,e.prev,e))||Fs(i,e)&&Lt(i.prev,i,i.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Fs(i,e){return i.x===e.x&&i.y===e.y}function Ah(i,e,t,n){const s=Qr(Lt(i,e,t)),r=Qr(Lt(i,e,n)),o=Qr(Lt(t,n,i)),a=Qr(Lt(t,n,e));return!!(s!==r&&o!==a||s===0&&jr(i,t,e)||r===0&&jr(i,n,e)||o===0&&jr(t,i,n)||a===0&&jr(t,e,n))}function jr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Qr(i){return i>0?1:i<0?-1:0}function Qf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ah(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function vr(i,e){return Lt(i.prev,i,i.next)<0?Lt(i,e,i.next)>=0&&Lt(i,i.prev,e)>=0:Lt(i,e,i.prev)<0||Lt(i,i.next,e)<0}function e0(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Rh(i,e){const t=Tl(i.i,i.x,i.y),n=Tl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Jc(i,e,t,n){const s=Tl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Tl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function t0(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class n0{static triangulate(e,t,n=2){return zf(e,t,n)}}class fi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return fi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];jc(e),Qc(n,e);let o=e.length;t.forEach(jc);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Qc(n,t[l]);const a=n0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function jc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Qc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class wr extends Ct{constructor(e=new Gs([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:i0;let y,x=!1,w,M,T,S;if(m){y=m.getSpacedPoints(d),x=!0,h=!1;const re=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(d,re),M=new L,T=new L,S=new L}h||(g=0,f=0,p=0,v=0);const A=a.extractPoints(c);let I=A.shape;const P=A.holes;if(!fi.isClockWise(I)){I=I.reverse();for(let re=0,he=P.length;re<he;re++){const ae=P[re];fi.isClockWise(ae)&&(P[re]=ae.reverse())}}function W(re){const ae=10000000000000001e-36;let Me=re[0];for(let k=1;k<=re.length;k++){const fe=k%re.length,U=re[fe],He=U.x-Me.x,Le=U.y-Me.y,$e=He*He+Le*Le,ce=Math.max(Math.abs(U.x),Math.abs(U.y),Math.abs(Me.x),Math.abs(Me.y)),ot=ae*ce*ce;if($e<=ot){re.splice(fe,1),k--;continue}Me=U}}W(I),P.forEach(W);const z=P.length,N=I;for(let re=0;re<z;re++){const he=P[re];I=I.concat(he)}function F(re,he,ae){return he||at("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(he,ae)}const O=I.length;function G(re,he,ae){let Me,k,fe;const U=re.x-he.x,He=re.y-he.y,Le=ae.x-re.x,$e=ae.y-re.y,ce=U*U+He*He,ot=U*$e-He*Le;if(Math.abs(ot)>Number.EPSILON){const R=Math.sqrt(ce),b=Math.sqrt(Le*Le+$e*$e),$=he.x-He/R,ne=he.y+U/R,le=ae.x-$e/b,pe=ae.y+Le/b,me=((le-$)*$e-(pe-ne)*Le)/(U*$e-He*Le);Me=$+U*me-re.x,k=ne+He*me-re.y;const V=Me*Me+k*k;if(V<=2)return new ee(Me,k);fe=Math.sqrt(V/2)}else{let R=!1;U>Number.EPSILON?Le>Number.EPSILON&&(R=!0):U<-Number.EPSILON?Le<-Number.EPSILON&&(R=!0):Math.sign(He)===Math.sign($e)&&(R=!0),R?(Me=-He,k=U,fe=Math.sqrt(ce)):(Me=U,k=He,fe=Math.sqrt(ce/2))}return new ee(Me/fe,k/fe)}const J=[];for(let re=0,he=N.length,ae=he-1,Me=re+1;re<he;re++,ae++,Me++)ae===he&&(ae=0),Me===he&&(Me=0),J[re]=G(N[re],N[ae],N[Me]);const K=[];let Q,oe=J.concat();for(let re=0,he=z;re<he;re++){const ae=P[re];Q=[];for(let Me=0,k=ae.length,fe=k-1,U=Me+1;Me<k;Me++,fe++,U++)fe===k&&(fe=0),U===k&&(U=0),Q[Me]=G(ae[Me],ae[fe],ae[U]);K.push(Q),oe=oe.concat(Q)}let Ue;if(g===0)Ue=fi.triangulateShape(N,P);else{const re=[],he=[];for(let ae=0;ae<g;ae++){const Me=ae/g,k=f*Math.cos(Me*Math.PI/2),fe=p*Math.sin(Me*Math.PI/2)+v;for(let U=0,He=N.length;U<He;U++){const Le=F(N[U],J[U],fe);se(Le.x,Le.y,-k),Me===0&&re.push(Le)}for(let U=0,He=z;U<He;U++){const Le=P[U];Q=K[U];const $e=[];for(let ce=0,ot=Le.length;ce<ot;ce++){const R=F(Le[ce],Q[ce],fe);se(R.x,R.y,-k),Me===0&&$e.push(R)}Me===0&&he.push($e)}}Ue=fi.triangulateShape(re,he)}const We=Ue.length,we=p+v;for(let re=0;re<O;re++){const he=h?F(I[re],oe[re],we):I[re];x?(T.copy(w.normals[0]).multiplyScalar(he.x),M.copy(w.binormals[0]).multiplyScalar(he.y),S.copy(y[0]).add(T).add(M),se(S.x,S.y,S.z)):se(he.x,he.y,0)}for(let re=1;re<=d;re++)for(let he=0;he<O;he++){const ae=h?F(I[he],oe[he],we):I[he];x?(T.copy(w.normals[re]).multiplyScalar(ae.x),M.copy(w.binormals[re]).multiplyScalar(ae.y),S.copy(y[re]).add(T).add(M),se(S.x,S.y,S.z)):se(ae.x,ae.y,u/d*re)}for(let re=g-1;re>=0;re--){const he=re/g,ae=f*Math.cos(he*Math.PI/2),Me=p*Math.sin(he*Math.PI/2)+v;for(let k=0,fe=N.length;k<fe;k++){const U=F(N[k],J[k],Me);se(U.x,U.y,u+ae)}for(let k=0,fe=P.length;k<fe;k++){const U=P[k];Q=K[k];for(let He=0,Le=U.length;He<Le;He++){const $e=F(U[He],Q[He],Me);x?se($e.x,$e.y+y[d-1].y,y[d-1].x+ae):se($e.x,$e.y,u+ae)}}}te(),ge();function te(){const re=s.length/3;if(h){let he=0,ae=O*he;for(let Me=0;Me<We;Me++){const k=Ue[Me];Oe(k[2]+ae,k[1]+ae,k[0]+ae)}he=d+g*2,ae=O*he;for(let Me=0;Me<We;Me++){const k=Ue[Me];Oe(k[0]+ae,k[1]+ae,k[2]+ae)}}else{for(let he=0;he<We;he++){const ae=Ue[he];Oe(ae[2],ae[1],ae[0])}for(let he=0;he<We;he++){const ae=Ue[he];Oe(ae[0]+O*d,ae[1]+O*d,ae[2]+O*d)}}n.addGroup(re,s.length/3-re,0)}function ge(){const re=s.length/3;let he=0;de(N,he),he+=N.length;for(let ae=0,Me=P.length;ae<Me;ae++){const k=P[ae];de(k,he),he+=k.length}n.addGroup(re,s.length/3-re,1)}function de(re,he){let ae=re.length;for(;--ae>=0;){const Me=ae;let k=ae-1;k<0&&(k=re.length-1);for(let fe=0,U=d+g*2;fe<U;fe++){const He=O*fe,Le=O*(fe+1),$e=he+Me+He,ce=he+k+He,ot=he+k+Le,R=he+Me+Le;Ie($e,ce,ot,R)}}}function se(re,he,ae){l.push(re),l.push(he),l.push(ae)}function Oe(re,he,ae){Ke(re),Ke(he),Ke(ae);const Me=s.length/3,k=_.generateTopUV(n,s,Me-3,Me-2,Me-1);Xe(k[0]),Xe(k[1]),Xe(k[2])}function Ie(re,he,ae,Me){Ke(re),Ke(he),Ke(Me),Ke(he),Ke(ae),Ke(Me);const k=s.length/3,fe=_.generateSideWallUV(n,s,k-6,k-3,k-2,k-1);Xe(fe[0]),Xe(fe[1]),Xe(fe[3]),Xe(fe[1]),Xe(fe[2]),Xe(fe[3])}function Ke(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function Xe(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return s0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new wl[s.type]().fromJSON(s)),new wr(n,e.options)}}const i0={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],d=e[s*3+1];return[new ee(r,o),new ee(a,l),new ee(c,d)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],u=e[n*3+2],h=e[s*3],f=e[s*3+1],p=e[s*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new ee(o,1-l),new ee(c,1-u),new ee(h,1-p),new ee(v,1-m)]:[new ee(a,1-l),new ee(d,1-u),new ee(f,1-p),new ee(g,1-m)]}};function s0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Fn extends Ct{constructor(e=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=rt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],d=1/t,u=new L,h=new ee,f=new L,p=new L,v=new L;let g=0,m=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[_+1].x-e[_].x,m=e[_+1].y-e[_].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let _=0;_<=t;_++){const y=n+_*d*s,x=Math.sin(y),w=Math.cos(y);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*x,u.y=e[M].y,u.z=e[M].x*w,o.push(u.x,u.y,u.z),h.x=_/t,h.y=M/(e.length-1),a.push(h.x,h.y);const T=l[3*M+0]*x,S=l[3*M+1],A=l[3*M+0]*w;c.push(T,S,A)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){const x=y+_*e.length,w=x,M=x+e.length,T=x+e.length+1,S=x+1;r.push(w,M,S),r.push(T,S,M)}this.setIndex(r),this.setAttribute("position",new gt(o,3)),this.setAttribute("uv",new gt(a,2)),this.setAttribute("normal",new gt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.points,e.segments,e.phiStart,e.phiLength)}}class Bt extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,u=e/a,h=t/l,f=[],p=[],v=[],g=[];for(let m=0;m<d;m++){const _=m*h-o;for(let y=0;y<c;y++){const x=y*u-r;p.push(x,-_,0),v.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){const y=_+c*m,x=_+c*(m+1),w=_+1+c*(m+1),M=_+1+c*m;f.push(y,x,M),f.push(x,w,M)}this.setIndex(f),this.setAttribute("position",new gt(p,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.width,e.height,e.widthSegments,e.heightSegments)}}class nc extends Ct{constructor(e=new Gs([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(a,l,d),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new gt(s,3)),this.setAttribute("normal",new gt(r,3)),this.setAttribute("uv",new gt(o,2));function c(d){const u=s.length/3,h=d.extractPoints(t);let f=h.shape;const p=h.holes;fi.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const _=p[g];fi.isClockWise(_)===!0&&(p[g]=_.reverse())}const v=fi.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const _=p[g];f=f.concat(_)}for(let g=0,m=f.length;g<m;g++){const _=f[g];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let g=0,m=v.length;g<m;g++){const _=v[g],y=_[0]+u,x=_[1]+u,w=_[2]+u;n.push(y,x,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return r0(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new nc(n,e.curveSegments)}}function r0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class dn extends Ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],u=new L,h=new L,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const _=[],y=m/n;let x=0;m===0&&o===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const M=w/t;u.x=-e*Math.cos(s+M*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+M*r)*Math.sin(o+y*a),p.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),g.push(M+x,1-y),_.push(c++)}d.push(_)}for(let m=0;m<n;m++)for(let _=0;_<t;_++){const y=d[m][_+1],x=d[m][_],w=d[m+1][_],M=d[m+1][_+1];(m!==0||o>0)&&f.push(y,x,M),(m!==n-1||l<Math.PI)&&f.push(x,w,M)}this.setIndex(f),this.setAttribute("position",new gt(p,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tt extends Ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],d=[],u=[],h=new L,f=new L,p=new L;for(let v=0;v<=n;v++){const g=o+v/n*a;for(let m=0;m<=s;m++){const _=m/s*r;f.x=(e+t*Math.cos(g))*Math.cos(_),f.y=(e+t*Math.cos(g))*Math.sin(_),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(f,h).normalize(),d.push(p.x,p.y,p.z),u.push(m/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=s;g++){const m=(s+1)*v+g-1,_=(s+1)*(v-1)+g-1,y=(s+1)*(v-1)+g,x=(s+1)*v+g;l.push(m,_,x),l.push(_,y,x)}this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Os(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(eu(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(eu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function un(i){const e={};for(let t=0;t<i.length;t++){const n=Os(i[t]);for(const s in n)e[s]=n[s]}return e}function eu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function o0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ch(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const a0={clone:Os,merge:un};var l0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l0,this.fragmentShader=c0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=o0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class u0 extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Re extends Ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class To extends Re{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class h0 extends Ni{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Ol,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class d0 extends Ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f0 extends Ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ma={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(tu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!tu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function tu(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class p0{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const m0=new p0;class ic{constructor(e){this.manager=e!==void 0?e:m0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ic.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ms=new WeakMap;class g0 extends ic{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ma.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ms.get(o);u===void 0&&(u=[],Ms.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=pr("img");function l(){d(),t&&t(this);const u=Ms.get(this)||[];for(let h=0;h<u.length;h++){const f=u[h];f.onLoad&&f.onLoad(this)}Ms.delete(this),r.manager.itemEnd(e)}function c(u){d(),s&&s(u),ma.remove(`image:${e}`);const h=Ms.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(u)}Ms.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ma.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Ph extends ic{constructor(e){super(e)}load(e,t,n,s){const r=new Kt,o=new g0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Lo extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class _0 extends Lo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ga=new ct,nu=new L,iu=new L;class sc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ql,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(nu),iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(iu),t.updateMatrixWorld(),ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===fr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const eo=new L,to=new en,Hn=new L;class Ih extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(eo,to,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eo,to,Hn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(eo,to,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eo,to,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new L,su=new ee,ru=new ee;class fn extends Ih{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,su,ru),t.subVectors(ru,su)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Go*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class v0 extends sc{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=wo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class x0 extends Lo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new v0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class S0 extends sc{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}}class rc extends Lo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new S0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class oc extends Ih{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class y0 extends sc{constructor(){super(new oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class M0 extends Lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new y0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const bs=-90,ws=1;class b0 extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(bs,ws,e,t);s.layers=this.layers,this.add(s);const r=new fn(bs,ws,e,t);r.layers=this.layers,this.add(r);const o=new fn(bs,ws,e,t);o.layers=this.layers,this.add(o);const a=new fn(bs,ws,e,t);a.layers=this.layers,this.add(a);const l=new fn(bs,ws,e,t);l.layers=this.layers,this.add(l);const c=new fn(bs,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class w0 extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ou=new ct;class Lh{constructor(e,t,n=0,s=1/0){this.ray=new jl(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Zl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):at("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ou.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ou),this}intersectObject(e,t=!0,n=[]){return Al(e,this,n,t),n.sort(au),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Al(e[s],this,n,t);return n.sort(au),n}}function au(i,e){return i.distance-e.distance}function Al(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Al(r[o],e,t,!0)}}class Dh{static{Dh.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}function lu(i,e,t,n){const s=E0(n);switch(t){case ah:return i*e;case Hl:return i*e/s.components*s.byteLength;case Vl:return i*e/s.components*s.byteLength;case ji:return i*e*2/s.components*s.byteLength;case Wl:return i*e*2/s.components*s.byteLength;case lh:return i*e*3/s.components*s.byteLength;case Un:return i*e*4/s.components*s.byteLength;case Xl:return i*e*4/s.components*s.byteLength;case co:case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ho:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:case qa:return Math.max(i,16)*Math.max(e,8)/4;case Wa:case $a:return Math.max(i,8)*Math.max(e,8)/2;case Ya:case Za:case Ja:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ka:case vo:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case pl:case ml:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _l:case vl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xo:case xl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function E0(i){switch(i){case xn:case ih:return{byteLength:1,components:1};case hr:case sh:case _i:return{byteLength:2,components:1};case kl:case Gl:return{byteLength:2,components:4};case ei:case zl:case Dn:return{byteLength:4,components:1};case rh:case oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Uh(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function T0(i){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<u.length;f++){const p=u[h],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,p=u.length;f<p;f++){const v=u[f];i.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var A0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,C0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,D0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,F0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,O0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,k0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,G0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,K0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,j0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,up=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,xp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ep=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Op=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,em=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ym=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Um=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$m=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ym=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Km=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ig=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:A0,alphahash_pars_fragment:R0,alphamap_fragment:C0,alphamap_pars_fragment:P0,alphatest_fragment:I0,alphatest_pars_fragment:L0,aomap_fragment:D0,aomap_pars_fragment:U0,batching_pars_vertex:N0,batching_vertex:F0,begin_vertex:O0,beginnormal_vertex:B0,bsdfs:z0,iridescence_fragment:k0,bumpmap_pars_fragment:G0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:V0,clipping_planes_pars_vertex:W0,clipping_planes_vertex:X0,color_fragment:$0,color_pars_fragment:q0,color_pars_vertex:Y0,color_vertex:Z0,common:K0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:j0,displacementmap_pars_vertex:Q0,displacementmap_vertex:ep,emissivemap_fragment:tp,emissivemap_pars_fragment:np,colorspace_fragment:ip,colorspace_pars_fragment:sp,envmap_fragment:rp,envmap_common_pars_fragment:op,envmap_pars_fragment:ap,envmap_pars_vertex:lp,envmap_physical_pars_fragment:xp,envmap_vertex:cp,fog_vertex:up,fog_pars_vertex:hp,fog_fragment:dp,fog_pars_fragment:fp,gradientmap_pars_fragment:pp,lightmap_pars_fragment:mp,lights_lambert_fragment:gp,lights_lambert_pars_fragment:_p,lights_pars_begin:vp,lights_toon_fragment:Sp,lights_toon_pars_fragment:yp,lights_phong_fragment:Mp,lights_phong_pars_fragment:bp,lights_physical_fragment:wp,lights_physical_pars_fragment:Ep,lights_fragment_begin:Tp,lights_fragment_maps:Ap,lights_fragment_end:Rp,lightprobes_pars_fragment:Cp,logdepthbuf_fragment:Pp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Lp,logdepthbuf_vertex:Dp,map_fragment:Up,map_pars_fragment:Np,map_particle_fragment:Fp,map_particle_pars_fragment:Op,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:zp,morphinstance_vertex:kp,morphcolor_vertex:Gp,morphnormal_vertex:Hp,morphtarget_pars_vertex:Vp,morphtarget_vertex:Wp,normal_fragment_begin:Xp,normal_fragment_maps:$p,normal_pars_fragment:qp,normal_pars_vertex:Yp,normal_vertex:Zp,normalmap_pars_fragment:Kp,clearcoat_normal_fragment_begin:Jp,clearcoat_normal_fragment_maps:jp,clearcoat_pars_fragment:Qp,iridescence_pars_fragment:em,opaque_fragment:tm,packing:nm,premultiplied_alpha_fragment:im,project_vertex:sm,dithering_fragment:rm,dithering_pars_fragment:om,roughnessmap_fragment:am,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:um,shadowmap_vertex:hm,shadowmask_pars_fragment:dm,skinbase_vertex:fm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:_m,specularmap_pars_fragment:vm,tonemapping_fragment:xm,tonemapping_pars_fragment:Sm,transmission_fragment:ym,transmission_pars_fragment:Mm,uv_pars_fragment:bm,uv_pars_vertex:wm,uv_vertex:Em,worldpos_vertex:Tm,background_vert:Am,background_frag:Rm,backgroundCube_vert:Cm,backgroundCube_frag:Pm,cube_vert:Im,cube_frag:Lm,depth_vert:Dm,depth_frag:Um,distance_vert:Nm,distance_frag:Fm,equirect_vert:Om,equirect_frag:Bm,linedashed_vert:zm,linedashed_frag:km,meshbasic_vert:Gm,meshbasic_frag:Hm,meshlambert_vert:Vm,meshlambert_frag:Wm,meshmatcap_vert:Xm,meshmatcap_frag:$m,meshnormal_vert:qm,meshnormal_frag:Ym,meshphong_vert:Zm,meshphong_frag:Km,meshphysical_vert:Jm,meshphysical_frag:jm,meshtoon_vert:Qm,meshtoon_frag:eg,points_vert:tg,points_frag:ng,shadow_vert:ig,shadow_frag:sg,sprite_vert:rg,sprite_frag:og},Ee={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},$n={basic:{uniforms:un([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:un([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:un([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:un([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:un([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Fe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:un([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:un([Ee.points,Ee.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:un([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:un([Ee.common,Ee.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:un([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:un([Ee.sprite,Ee.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:un([Ee.common,Ee.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:un([Ee.lights,Ee.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};$n.physical={uniforms:un([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const no={r:0,b:0,g:0},ag=new ct,Nh=new Qe;Nh.set(-1,0,0,0,1,0,0,0,1);function lg(i,e,t,n,s,r){const o=new Fe(0);let a=s===!0?0:1,l,c,d=null,u=0,h=null;function f(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){const x=_.backgroundBlurriness>0;y=e.get(y,x)}return y}function p(_){let y=!1;const x=f(_);x===null?g(o,a):x&&x.isColor&&(g(x,1),y=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(_,y){const x=f(y);x&&(x.isCubeTexture||x.mapping===Io)?(c===void 0&&(c=new D(new Je(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Os($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ag.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Nh),c.material.toneMapped=ut.getTransfer(x.colorSpace)!==mt,(d!==x||u!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,h=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new D(new Bt(2,2),new On({name:"BackgroundMaterial",uniforms:Os($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ut.getTransfer(x.colorSpace)!==mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,h=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,y){_.getRGB(no,Ch(i)),t.buffers.color.setClear(no.r,no.g,no.b,y,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:p,addToRenderList:v,dispose:m}}function cg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(P,B,W,z,N){let F=!1;const O=u(P,z,W,B);r!==O&&(r=O,c(r.object)),F=f(P,z,W,N),F&&p(P,z,W,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,x(P,B,W,z),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function u(P,B,W,z){const N=z.wireframe===!0;let F=n[B.id];F===void 0&&(F={},n[B.id]=F);const O=P.isInstancedMesh===!0?P.id:0;let G=F[O];G===void 0&&(G={},F[O]=G);let J=G[W.id];J===void 0&&(J={},G[W.id]=J);let K=J[N];return K===void 0&&(K=h(l()),J[N]=K),K}function h(P){const B=[],W=[],z=[];for(let N=0;N<t;N++)B[N]=0,W[N]=0,z[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:z,object:P,attributes:{},index:null}}function f(P,B,W,z){const N=r.attributes,F=B.attributes;let O=0;const G=W.getAttributes();for(const J in G)if(G[J].location>=0){const Q=N[J];let oe=F[J];if(oe===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;O++}return r.attributesNum!==O||r.index!==z}function p(P,B,W,z){const N={},F=B.attributes;let O=0;const G=W.getAttributes();for(const J in G)if(G[J].location>=0){let Q=F[J];Q===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),N[J]=oe,O++}r.attributes=N,r.attributesNum=O,r.index=z}function v(){const P=r.newAttributes;for(let B=0,W=P.length;B<W;B++)P[B]=0}function g(P){m(P,0)}function m(P,B){const W=r.newAttributes,z=r.enabledAttributes,N=r.attributeDivisors;W[P]=1,z[P]===0&&(i.enableVertexAttribArray(P),z[P]=1),N[P]!==B&&(i.vertexAttribDivisor(P,B),N[P]=B)}function _(){const P=r.newAttributes,B=r.enabledAttributes;for(let W=0,z=B.length;W<z;W++)B[W]!==P[W]&&(i.disableVertexAttribArray(W),B[W]=0)}function y(P,B,W,z,N,F,O){O===!0?i.vertexAttribIPointer(P,B,W,N,F):i.vertexAttribPointer(P,B,W,z,N,F)}function x(P,B,W,z){v();const N=z.attributes,F=W.getAttributes(),O=B.defaultAttributeValues;for(const G in F){const J=F[G];if(J.location>=0){let K=N[G];if(K===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){const Q=K.normalized,oe=K.itemSize,Ue=e.get(K);if(Ue===void 0)continue;const We=Ue.buffer,we=Ue.type,te=Ue.bytesPerElement,ge=we===i.INT||we===i.UNSIGNED_INT||K.gpuType===zl;if(K.isInterleavedBufferAttribute){const de=K.data,se=de.stride,Oe=K.offset;if(de.isInstancedInterleavedBuffer){for(let Ie=0;Ie<J.locationSize;Ie++)m(J.location+Ie,de.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ie=0;Ie<J.locationSize;Ie++)g(J.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,We);for(let Ie=0;Ie<J.locationSize;Ie++)y(J.location+Ie,oe/J.locationSize,we,Q,se*te,(Oe+oe/J.locationSize*Ie)*te,ge)}else{if(K.isInstancedBufferAttribute){for(let de=0;de<J.locationSize;de++)m(J.location+de,K.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let de=0;de<J.locationSize;de++)g(J.location+de);i.bindBuffer(i.ARRAY_BUFFER,We);for(let de=0;de<J.locationSize;de++)y(J.location+de,oe/J.locationSize,we,Q,oe*te,oe/J.locationSize*de*te,ge)}}else if(O!==void 0){const Q=O[G];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(J.location,Q);break;case 3:i.vertexAttrib3fv(J.location,Q);break;case 4:i.vertexAttrib4fv(J.location,Q);break;default:i.vertexAttrib1fv(J.location,Q)}}}}_()}function w(){A();for(const P in n){const B=n[P];for(const W in B){const z=B[W];for(const N in z){const F=z[N];for(const O in F)d(F[O].object),delete F[O];delete z[N]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;const B=n[P.id];for(const W in B){const z=B[W];for(const N in z){const F=z[N];for(const O in F)d(F[O].object),delete F[O];delete z[N]}}delete n[P.id]}function T(P){for(const B in n){const W=n[B];for(const z in W){const N=W[z];if(N[P.id]===void 0)continue;const F=N[P.id];for(const O in F)d(F[O].object),delete F[O];delete N[P.id]}}}function S(P){for(const B in n){const W=n[B],z=P.isInstancedMesh===!0?P.id:0,N=W[z];if(N!==void 0){for(const F in N){const O=N[F];for(const G in O)d(O[G].object),delete O[G];delete N[F]}delete W[z],Object.keys(W).length===0&&delete n[B]}}}function A(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function ug(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function a(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let h=0;for(let f=0;f<d;f++)h+=c[f];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function hg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const S=T===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==xn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Dn&&!S)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ye("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,maxSamples:w,samples:M}}function dg(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Vi,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||s;return s=h,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const p=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?d(null):c();else{const _=r?0:n,y=_*4;let x=m.clippingState||null;l.value=x,x=d(p,h,y,f);for(let w=0;w!==y;++w)x[w]=t[w];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,p){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=f+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,x=f;y!==v;++y,x+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const Pi=4,cu=[.125,.215,.35,.446,.526,.582],$i=20,fg=256,js=new oc,uu=new Fe;let _a=null,va=0,xa=0,Sa=!1;const pg=new L;class Rl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=pg}=r;_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_a,va,xa),this._renderer.xr.enabled=Sa,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),Sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:_i,format:Un,colorSpace:yo,depthBuffer:!1},s=hu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mg(r)),this._blurMaterial=_g(r,e,t),this._ggxMaterial=gg(r,e,t)}return s}_compileMaterial(e){const t=new D(new Ct,e);this._renderer.compile(t,js)}_sceneToCubeUV(e,t,n,s,r){const l=new fn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(uu),u.toneMapping=Kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new D(new Je,new Nn({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let m=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,m=!0):(g.color.copy(uu),m=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[y]));const w=this._cubeSize;Es(s,x*w,y>2?w:0,w,w),u.setRenderTarget(s),m&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ji||e.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Es(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,js)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=0+c*1.25,f=u*h,{_lodMax:p}=this,v=this._sizeLods[n],g=3*v*(n>p-Pi?n-p+Pi:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Es(r,g,m,3*v,2*v),s.setRenderTarget(r),s.render(a,js),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Es(e,g,m,3*v,2*v),s.setRenderTarget(e),s.render(a,js)}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const d=3,u=this._lodMeshes[s];u.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$i-1),v=r/p,g=isFinite(r)?1+Math.floor(d*v):$i;g>$i&&Ye(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$i}`);const m=[];let _=0;for(let T=0;T<$i;++T){const S=T/v,A=Math.exp(-S*S/2);m.push(A),T===0?_+=A:T<g&&(_+=2*A)}for(let T=0;T<m.length;T++)m[T]=m[T]/_;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=p,h.mipInt.value=y-n;const x=this._sizeLods[s],w=3*x*(s>y-Pi?s-y+Pi:0),M=4*(this._cubeSize-x);Es(t,w,M,3*x,2*x),l.setRenderTarget(t),l.render(u,js)}}function mg(i){const e=[],t=[],n=[];let s=i;const r=i-Pi+1+cu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Pi?l=cu[o-i+Pi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,p=6,v=3,g=2,m=1,_=new Float32Array(v*p*f),y=new Float32Array(g*p*f),x=new Float32Array(m*p*f);for(let M=0;M<f;M++){const T=M%3*2/3-1,S=M>2?0:-1,A=[T,S,0,T+2/3,S,0,T+2/3,S+1,0,T,S,0,T+2/3,S+1,0,T,S+1,0];_.set(A,v*p*M),y.set(h,g*p*M);const I=[M,M,M,M,M,M];x.set(I,m*p*M)}const w=new Ct;w.setAttribute("position",new At(_,v)),w.setAttribute("uv",new At(y,g)),w.setAttribute("faceIndex",new At(x,m)),n.push(new D(w,null)),s>Pi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function hu(i,e,t){const n=new Jn(i,e,t);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gg(i,e,t){return new On({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Do(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function _g(i,e,t){const n=new Float32Array($i),s=new L(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function du(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function fu(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Do(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Fh extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new xh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Je(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:pi});r.uniforms.tEquirect.value=t;const o=new D(s,r),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Qt),new b0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}function vg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Bo||f===zo)if(e.has(h)){const p=e.get(h).texture;return a(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const v=new Fh(p.height);return v.fromEquirectangularTexture(i,h),e.set(h,v),h.addEventListener("dispose",c),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,p=f===Bo||f===zo,v=f===Ji||f===Ds;if(p||v){let g=t.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Rl(i)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const _=h.image;return p&&_&&_.height>0||v&&_&&l(_)?(n===null&&(n=new Rl(i)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function a(h,f){return f===Bo?h.mapping=Ji:f===zo&&(h.mapping=Ds),h}function l(h){let f=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&f++;return f===p}function c(h){const f=h.target;f.removeEventListener("dispose",c);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(h){const f=h.target;f.removeEventListener("dispose",d);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function xg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&yl("WebGLRenderer: "+n+" extension not supported."),s}}}function Sg(i,e,t,n){const s={},r=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const f in h)e.update(h[f],i.ARRAY_BUFFER)}function c(u){const h=[],f=u.index,p=u.attributes.position;let v=0;if(p===void 0)return;if(f!==null){const _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){const w=_[y+0],M=_[y+1],T=_[y+2];h.push(w,M,M,T,T,w)}}else{const _=p.array;v=p.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const w=y+0,M=y+1,T=y+2;h.push(w,M,M,T,T,w)}}const g=new(p.count>=65535?ph:fh)(h,1);g.version=v;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function d(u){const h=r.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function yg(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,h){i.drawElements(n,h,r,u*o),t.update(h,n,1)}function c(u,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,u*o,f),t.update(h,n,f))}function d(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,u,0,f);let v=0;for(let g=0;g<f;g++)v+=h[g];t.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Mg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:at("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function bg(i,e,t){const n=new WeakMap,s=new Ft;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(a);if(h===void 0||h.count!==u){let A=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),p===!0&&(y=2),v===!0&&(y=3);let x=a.attributes.position.count*y,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const M=new Float32Array(x*w*4*u),T=new uh(M,x,w,u);T.type=Dn,T.needsUpdate=!0;const S=y*4;for(let I=0;I<u;I++){const P=g[I],B=m[I],W=_[I],z=x*w*4*I;for(let N=0;N<P.count;N++){const F=N*S;f===!0&&(s.fromBufferAttribute(P,N),M[z+F+0]=s.x,M[z+F+1]=s.y,M[z+F+2]=s.z,M[z+F+3]=0),p===!0&&(s.fromBufferAttribute(B,N),M[z+F+4]=s.x,M[z+F+5]=s.y,M[z+F+6]=s.z,M[z+F+7]=0),v===!0&&(s.fromBufferAttribute(W,N),M[z+F+8]=s.x,M[z+F+9]=s.y,M[z+F+10]=s.z,M[z+F+11]=W.itemSize===4?s.w:1)}}h={count:u,texture:T,size:new ee(x,w)},n.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function wg(i,e,t,n,s){let r=new WeakMap;function o(c){const d=s.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function a(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}const Eg={[Ku]:"LINEAR_TONE_MAPPING",[Ju]:"REINHARD_TONE_MAPPING",[ju]:"CINEON_TONE_MAPPING",[Bl]:"ACES_FILMIC_TONE_MAPPING",[eh]:"AGX_TONE_MAPPING",[th]:"NEUTRAL_TONE_MAPPING",[Qu]:"CUSTOM_TONE_MAPPING"};function Tg(i,e,t,n,s){const r=new Jn(e,t,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new Us(e,t):void 0}),o=new Jn(e,t,{type:_i,depthBuffer:!1,stencilBuffer:!1}),a=new Ct;a.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new gt([0,2,0,0,2,0],2));const l=new u0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new D(a,l),d=new oc(-1,1,1,-1,0,1);let u=null,h=null,f=!1,p,v=null,g=[],m=!1;this.setSize=function(_,y){r.setSize(_,y),o.setSize(_,y);for(let x=0;x<g.length;x++){const w=g[x];w.setSize&&w.setSize(_,y)}},this.setEffects=function(_){g=_,m=g.length>0&&g[0].isRenderPass===!0;const y=r.width,x=r.height;for(let w=0;w<g.length;w++){const M=g[w];M.setSize&&M.setSize(y,x)}},this.begin=function(_,y){if(f||_.toneMapping===Kn&&g.length===0)return!1;if(v=y,y!==null){const x=y.width,w=y.height;(r.width!==x||r.height!==w)&&this.setSize(x,w)}return m===!1&&_.setRenderTarget(r),p=_.toneMapping,_.toneMapping=Kn,!0},this.hasRenderPass=function(){return m},this.end=function(_,y){_.toneMapping=p,f=!0;let x=r,w=o;for(let M=0;M<g.length;M++){const T=g[M];if(T.enabled!==!1&&(T.render(_,w,x,y),T.needsSwap!==!1)){const S=x;x=w,w=S}}if(u!==_.outputColorSpace||h!==_.toneMapping){u=_.outputColorSpace,h=_.toneMapping,l.defines={},ut.getTransfer(u)===mt&&(l.defines.SRGB_TRANSFER="");const M=Eg[h];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,_.setRenderTarget(v),_.render(c,d),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Oh=new Kt,Cl=new Us(1,1),Bh=new uh,zh=new af,kh=new xh,pu=[],mu=[],gu=new Float32Array(16),_u=new Float32Array(9),vu=new Float32Array(4);function Hs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=pu[s];if(r===void 0&&(r=new Float32Array(s),pu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Uo(i,e){let t=mu[e];t===void 0&&(t=new Int32Array(e),mu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ag(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function Cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function Ig(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if($t(t,n))return;vu.set(n),i.uniformMatrix2fv(this.addr,!1,vu),qt(t,n)}}function Lg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if($t(t,n))return;_u.set(n),i.uniformMatrix3fv(this.addr,!1,_u),qt(t,n)}}function Dg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if($t(t,n))return;gu.set(n),i.uniformMatrix4fv(this.addr,!1,gu),qt(t,n)}}function Ug(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function Fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function Og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function Bg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function Gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function Hg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Cl.compareFunction=t.isReversedDepthBuffer()?ql:$l,r=Cl):r=Oh,t.setTexture2D(e||r,s)}function Vg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zh,s)}function Wg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kh,s)}function Xg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bh,s)}function $g(i){switch(i){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Pg;case 35674:return Ig;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ug;case 35667:case 35671:return Ng;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return zg;case 36295:return kg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}function qg(i,e){i.uniform1fv(this.addr,e)}function Yg(i,e){const t=Hs(e,this.size,2);i.uniform2fv(this.addr,t)}function Zg(i,e){const t=Hs(e,this.size,3);i.uniform3fv(this.addr,t)}function Kg(i,e){const t=Hs(e,this.size,4);i.uniform4fv(this.addr,t)}function Jg(i,e){const t=Hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jg(i,e){const t=Hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qg(i,e){const t=Hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function e_(i,e){i.uniform1iv(this.addr,e)}function t_(i,e){i.uniform2iv(this.addr,e)}function n_(i,e){i.uniform3iv(this.addr,e)}function i_(i,e){i.uniform4iv(this.addr,e)}function s_(i,e){i.uniform1uiv(this.addr,e)}function r_(i,e){i.uniform2uiv(this.addr,e)}function o_(i,e){i.uniform3uiv(this.addr,e)}function a_(i,e){i.uniform4uiv(this.addr,e)}function l_(i,e,t){const n=this.cache,s=e.length,r=Uo(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Cl:o=Oh;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function c_(i,e,t){const n=this.cache,s=e.length,r=Uo(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zh,r[o])}function u_(i,e,t){const n=this.cache,s=e.length,r=Uo(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||kh,r[o])}function h_(i,e,t){const n=this.cache,s=e.length,r=Uo(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Bh,r[o])}function d_(i){switch(i){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return Kg;case 35674:return Jg;case 35675:return jg;case 35676:return Qg;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return o_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return h_}}class f_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$g(t.type)}}class p_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d_(t.type)}}class m_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function xu(i,e){i.seq.push(e),i.map[e.id]=e}function g_(i,e,t){const n=i.name,s=n.length;for(ya.lastIndex=0;;){const r=ya.exec(n),o=ya.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){xu(t,c===void 0?new f_(a,i,e):new p_(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new m_(a),xu(t,u)),t=u}}}class po{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);g_(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Su(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const __=37297;let v_=0;function x_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const yu=new Qe;function S_(i){ut._getMatrix(yu,ut.workingColorSpace,i);const e=`mat3( ${yu.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case Mo:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Mu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+x_(i.getShaderSource(e),a)}else return r}function y_(i,e){const t=S_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const M_={[Ku]:"Linear",[Ju]:"Reinhard",[ju]:"Cineon",[Bl]:"ACESFilmic",[eh]:"AgX",[th]:"Neutral",[Qu]:"Custom"};function b_(i,e){const t=M_[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const io=new L;function w_(){ut.getLuminanceCoefficients(io);const i=io.x.toFixed(4),e=io.y.toFixed(4),t=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function T_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function sr(i){return i!==""}function bu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const R_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pl(i){return i.replace(R_,P_)}const C_=new Map;function P_(i,e){let t=it[e];if(t===void 0){const n=C_.get(e);if(n!==void 0)t=it[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pl(t)}const I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(i){return i.replace(I_,L_)}function L_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const D_={[or]:"SHADOWMAP_TYPE_PCF",[nr]:"SHADOWMAP_TYPE_VSM"};function U_(i){return D_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const N_={[Ji]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE_UV"};function F_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":N_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const O_={[Ds]:"ENVMAP_MODE_REFRACTION"};function B_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":O_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const z_={[Ol]:"ENVMAP_BLENDING_MULTIPLY",[zd]:"ENVMAP_BLENDING_MIX",[kd]:"ENVMAP_BLENDING_ADD"};function k_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":z_[i.combine]||"ENVMAP_BLENDING_NONE"}function G_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function H_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=U_(t),c=F_(t),d=B_(t),u=k_(t),h=G_(t),f=E_(t),p=T_(r),v=s.createProgram();let g,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(sr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(sr).join(`
`),m.length>0&&(m+=`
`)):(g=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),m=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?it.tonemapping_pars_fragment:"",t.toneMapping!==Kn?b_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,y_("linearToOutputTexel",t.outputColorSpace),w_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),o=Pl(o),o=bu(o,t),o=wu(o,t),a=Pl(a),a=bu(a,t),a=wu(a,t),o=Eu(o),a=Eu(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=_+g+o,x=_+m+a,w=Su(s,s.VERTEX_SHADER,y),M=Su(s,s.FRAGMENT_SHADER,x);s.attachShader(v,w),s.attachShader(v,M),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(P){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(v)||"",W=s.getShaderInfoLog(w)||"",z=s.getShaderInfoLog(M)||"",N=B.trim(),F=W.trim(),O=z.trim();let G=!0,J=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,M);else{const K=Mu(s,w,"vertex"),Q=Mu(s,M,"fragment");at("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+K+`
`+Q)}else N!==""?Ye("WebGLProgram: Program Info Log:",N):(F===""||O==="")&&(J=!1);J&&(P.diagnostics={runnable:G,programLog:N,vertexShader:{log:F,prefix:g},fragmentShader:{log:O,prefix:m}})}s.deleteShader(w),s.deleteShader(M),S=new po(s,v),A=A_(s,v)}let S;this.getUniforms=function(){return S===void 0&&T(this),S};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(v,__)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=M,this}let V_=0;class W_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new X_(e),t.set(e,n)),n}}class X_{constructor(e){this.id=V_++,this.code=e,this.usedTimes=0}}function $_(i){return i===ji||i===vo||i===xo}function q_(i,e,t,n,s,r){const o=new Zl,a=new W_,l=new Set,c=[],d=new Map,u=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return l.add(S),S===0?"uv":`uv${S}`}function v(S,A,I,P,B,W){const z=P.fog,N=B.geometry,F=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?P.environment:null,O=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,G=e.get(S.envMap||F,O),J=G&&G.mapping===Io?G.image.height:null,K=f[S.type];S.precision!==null&&(h=n.getMaxPrecision(S.precision),h!==S.precision&&Ye("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const Q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,oe=Q!==void 0?Q.length:0;let Ue=0;N.morphAttributes.position!==void 0&&(Ue=1),N.morphAttributes.normal!==void 0&&(Ue=2),N.morphAttributes.color!==void 0&&(Ue=3);let We,we,te,ge;if(K){const et=$n[K];We=et.vertexShader,we=et.fragmentShader}else We=S.vertexShader,we=S.fragmentShader,a.update(S),te=a.getVertexShaderID(S),ge=a.getFragmentShaderID(S);const de=i.getRenderTarget(),se=i.state.buffers.depth.getReversed(),Oe=B.isInstancedMesh===!0,Ie=B.isBatchedMesh===!0,Ke=!!S.map,Xe=!!S.matcap,re=!!G,he=!!S.aoMap,ae=!!S.lightMap,Me=!!S.bumpMap,k=!!S.normalMap,fe=!!S.displacementMap,U=!!S.emissiveMap,He=!!S.metalnessMap,Le=!!S.roughnessMap,$e=S.anisotropy>0,ce=S.clearcoat>0,ot=S.dispersion>0,R=S.iridescence>0,b=S.sheen>0,$=S.transmission>0,ne=$e&&!!S.anisotropyMap,le=ce&&!!S.clearcoatMap,pe=ce&&!!S.clearcoatNormalMap,me=ce&&!!S.clearcoatRoughnessMap,V=R&&!!S.iridescenceMap,q=R&&!!S.iridescenceThicknessMap,Se=b&&!!S.sheenColorMap,Ce=b&&!!S.sheenRoughnessMap,_e=!!S.specularMap,ve=!!S.specularColorMap,je=!!S.specularIntensityMap,nt=$&&!!S.transmissionMap,dt=$&&!!S.thicknessMap,H=!!S.gradientMap,xe=!!S.alphaMap,ie=S.alphaTest>0,Pe=!!S.alphaHash,ye=!!S.extensions;let ue=Kn;S.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ue=i.toneMapping);const ze={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:We,fragmentShader:we,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Ie,batchingColor:Ie&&B._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&B.instanceColor!==null,instancingMorph:Oe&&B.morphTexture!==null,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ke,matcap:Xe,envMap:re,envMapMode:re&&G.mapping,envMapCubeUVHeight:J,aoMap:he,lightMap:ae,bumpMap:Me,normalMap:k,displacementMap:fe,emissiveMap:U,normalMapObjectSpace:k&&S.normalMapType===Vd,normalMapTangentSpace:k&&S.normalMapType===So,packedNormalMap:k&&S.normalMapType===So&&$_(S.normalMap.format),metalnessMap:He,roughnessMap:Le,anisotropy:$e,anisotropyMap:ne,clearcoat:ce,clearcoatMap:le,clearcoatNormalMap:pe,clearcoatRoughnessMap:me,dispersion:ot,iridescence:R,iridescenceMap:V,iridescenceThicknessMap:q,sheen:b,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:_e,specularColorMap:ve,specularIntensityMap:je,transmission:$,transmissionMap:nt,thicknessMap:dt,gradientMap:H,opaque:S.transparent===!1&&S.blending===Rs&&S.alphaToCoverage===!1,alphaMap:xe,alphaTest:ie,alphaHash:Pe,combine:S.combine,mapUv:Ke&&p(S.map.channel),aoMapUv:he&&p(S.aoMap.channel),lightMapUv:ae&&p(S.lightMap.channel),bumpMapUv:Me&&p(S.bumpMap.channel),normalMapUv:k&&p(S.normalMap.channel),displacementMapUv:fe&&p(S.displacementMap.channel),emissiveMapUv:U&&p(S.emissiveMap.channel),metalnessMapUv:He&&p(S.metalnessMap.channel),roughnessMapUv:Le&&p(S.roughnessMap.channel),anisotropyMapUv:ne&&p(S.anisotropyMap.channel),clearcoatMapUv:le&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:pe&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:q&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&p(S.sheenRoughnessMap.channel),specularMapUv:_e&&p(S.specularMap.channel),specularColorMapUv:ve&&p(S.specularColorMap.channel),specularIntensityMapUv:je&&p(S.specularIntensityMap.channel),transmissionMapUv:nt&&p(S.transmissionMap.channel),thicknessMapUv:dt&&p(S.thicknessMap.channel),alphaMapUv:xe&&p(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(k||$e),vertexNormals:!!N.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!N.attributes.uv&&(Ke||xe),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||N.attributes.normal===void 0&&k===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:se,skinning:B.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ue,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:Ke&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===mt,decodeVideoTextureEmissive:U&&S.emissiveMap.isVideoTexture===!0&&ut.getTransfer(S.emissiveMap.colorSpace)===mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===In,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ye&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&S.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function g(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)A.push(I),A.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(m(A,S),_(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function m(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),S.push(o.mask)}function y(S){const A=f[S.type];let I;if(A){const P=$n[A];I=a0.clone(P.uniforms)}else I=S.uniforms;return I}function x(S,A){let I=d.get(A);return I!==void 0?++I.usedTimes:(I=new H_(i,A,S,s),c.push(I),d.set(A,I)),I}function w(S){if(--S.usedTimes===0){const A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),d.delete(S.cacheKey),S.destroy()}}function M(S){a.remove(S)}function T(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:y,acquireProgram:x,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:T}}function Y_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Z_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Au(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ru(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,v,g,m){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.materialVariant=o(h),_.groupOrder=v,_.renderOrder=h.renderOrder,_.z=g,_.group=m),e++,_}function l(h,f,p,v,g,m){const _=a(h,f,p,v,g,m);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function c(h,f,p,v,g,m){const _=a(h,f,p,v,g,m);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function d(h,f){t.length>1&&t.sort(h||Z_),n.length>1&&n.sort(f||Au),s.length>1&&s.sort(f||Au)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function K_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ru,i.set(n,[o])):s>=r.length?(o=new Ru,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function J_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Fe};break;case"SpotLight":t={position:new L,direction:new L,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function j_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Q_=0;function ev(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tv(i){const e=new J_,t=j_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new ct,o=new ct;function a(c){let d=0,u=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,_=0,y=0,x=0,w=0,M=0,T=0;c.sort(ev);for(let A=0,I=c.length;A<I;A++){const P=c[A],B=P.color,W=P.intensity,z=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ji?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=B.r*W,u+=B.g*W,h+=B.b*W;else if(P.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(P.sh.coefficients[F],W);T++}else if(P.isDirectionalLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,G=t.get(P);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=P.shadow.matrix,_++}n.directional[f]=F,f++}else if(P.isSpotLight){const F=e.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(B).multiplyScalar(W),F.distance=z,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,n.spot[v]=F;const O=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,O.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[v]=O.matrix,P.castShadow){const G=t.get(P);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=N,x++}v++}else if(P.isRectAreaLight){const F=e.get(P);F.color.copy(B).multiplyScalar(W),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=F,g++}else if(P.isPointLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const O=P.shadow,G=t.get(P);G.shadowIntensity=O.intensity,G.shadowBias=O.bias,G.shadowNormalBias=O.normalBias,G.shadowRadius=O.radius,G.shadowMapSize=O.mapSize,G.shadowCameraNear=O.camera.near,G.shadowCameraFar=O.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=N,n.pointShadowMatrix[p]=P.shadow.matrix,y++}n.point[p]=F,p++}else if(P.isHemisphereLight){const F=e.get(P);F.skyColor.copy(P.color).multiplyScalar(W),F.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[m]=F,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const S=n.hash;(S.directionalLength!==f||S.pointLength!==p||S.spotLength!==v||S.rectAreaLength!==g||S.hemiLength!==m||S.numDirectionalShadows!==_||S.numPointShadows!==y||S.numSpotShadows!==x||S.numSpotMaps!==w||S.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,S.directionalLength=f,S.pointLength=p,S.spotLength=v,S.rectAreaLength=g,S.hemiLength=m,S.numDirectionalShadows=_,S.numPointShadows=y,S.numSpotShadows=x,S.numSpotMaps=w,S.numLightProbes=T,n.version=Q_++)}function l(c,d){let u=0,h=0,f=0,p=0,v=0;const g=d.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){const y=c[m];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function Cu(i){const e=new tv(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function d(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function nv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Cu(i),e.set(s,[a])):r>=o.length?(a=new Cu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],ov=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Pu=new ct,Qs=new L,Ma=new L;function av(i,e,t){let n=new Ql;const s=new ee,r=new ee,o=new Ft,a=new d0,l=new f0,c={},d=t.maxTextureSize,u={[Li]:hn,[hn]:Li,[In]:In},h=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:iv,fragmentShader:sv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ct;p.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new D(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=or;let m=this.type;this.render=function(M,T,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Sd&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=or);const A=i.getRenderTarget(),I=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(pi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const W=m!==this.type;W&&T.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(N=>N.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,N=M.length;z<N;z++){const F=M[z],O=F.shadow;if(O===void 0){Ye("WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const G=O.getFrameExtents();s.multiply(G),r.copy(O.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/G.x),s.x=r.x*G.x,O.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/G.y),s.y=r.y*G.y,O.mapSize.y=r.y));const J=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=J,O.map===null||W===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===nr){if(F.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Jn(s.x,s.y,{format:ji,type:_i,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),O.map.texture.name=F.name+".shadowMap",O.map.depthTexture=new Us(s.x,s.y,Dn),O.map.depthTexture.name=F.name+".shadowMapDepth",O.map.depthTexture.format=vi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=jt,O.map.depthTexture.magFilter=jt}else F.isPointLight?(O.map=new Fh(s.x),O.map.depthTexture=new Ef(s.x,ei)):(O.map=new Jn(s.x,s.y),O.map.depthTexture=new Us(s.x,s.y,ei)),O.map.depthTexture.name=F.name+".shadowMap",O.map.depthTexture.format=vi,this.type===or?(O.map.depthTexture.compareFunction=J?ql:$l,O.map.depthTexture.minFilter=Qt,O.map.depthTexture.magFilter=Qt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=jt,O.map.depthTexture.magFilter=jt);O.camera.updateProjectionMatrix()}const K=O.map.isWebGLCubeRenderTarget?6:1;for(let Q=0;Q<K;Q++){if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(O.map),i.clear());const oe=O.getViewport(Q);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),B.viewport(o)}if(F.isPointLight){const oe=O.camera,Ue=O.matrix,We=F.distance||oe.far;We!==oe.far&&(oe.far=We,oe.updateProjectionMatrix()),Qs.setFromMatrixPosition(F.matrixWorld),oe.position.copy(Qs),Ma.copy(oe.position),Ma.add(rv[Q]),oe.up.copy(ov[Q]),oe.lookAt(Ma),oe.updateMatrixWorld(),Ue.makeTranslation(-Qs.x,-Qs.y,-Qs.z),Pu.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Pu,oe.coordinateSystem,oe.reversedDepth)}else O.updateMatrices(F);n=O.getFrustum(),x(T,S,O.camera,F,this.type)}O.isPointLightShadow!==!0&&this.type===nr&&_(O,S),O.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(A,I,P)};function _(M,T){const S=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Jn(s.x,s.y,{format:ji,type:_i})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,S,h,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,S,f,v,null)}function y(M,T,S,A){let I=null;const P=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)I=P;else if(I=S.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const B=I.uuid,W=T.uuid;let z=c[B];z===void 0&&(z={},c[B]=z);let N=z[W];N===void 0&&(N=I.clone(),z[W]=N,T.addEventListener("dispose",w)),I=N}if(I.visible=T.visible,I.wireframe=T.wireframe,A===nr?I.side=T.shadowSide!==null?T.shadowSide:T.side:I.side=T.shadowSide!==null?T.shadowSide:u[T.side],I.alphaMap=T.alphaMap,I.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,I.map=T.map,I.clipShadows=T.clipShadows,I.clippingPlanes=T.clippingPlanes,I.clipIntersection=T.clipIntersection,I.displacementMap=T.displacementMap,I.displacementScale=T.displacementScale,I.displacementBias=T.displacementBias,I.wireframeLinewidth=T.wireframeLinewidth,I.linewidth=T.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const B=i.properties.get(I);B.light=S}return I}function x(M,T,S,A,I){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&I===nr)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);const W=e.update(M),z=M.material;if(Array.isArray(z)){const N=W.groups;for(let F=0,O=N.length;F<O;F++){const G=N[F],J=z[G.materialIndex];if(J&&J.visible){const K=y(M,J,A,I);M.onBeforeShadow(i,M,T,S,W,K,G),i.renderBufferDirect(S,null,W,K,M,G),M.onAfterShadow(i,M,T,S,W,K,G)}}}else if(z.visible){const N=y(M,z,A,I);M.onBeforeShadow(i,M,T,S,W,N,null),i.renderBufferDirect(S,null,W,N,M,null),M.onAfterShadow(i,M,T,S,W,N,null)}}const B=M.children;for(let W=0,z=B.length;W<z;W++)x(B[W],T,S,A,I)}function w(M){M.target.removeEventListener("dispose",w);for(const S in c){const A=c[S],I=M.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function lv(i,e){function t(){let H=!1;const xe=new Ft;let ie=null;const Pe=new Ft(0,0,0,0);return{setMask:function(ye){ie!==ye&&!H&&(i.colorMask(ye,ye,ye,ye),ie=ye)},setLocked:function(ye){H=ye},setClear:function(ye,ue,ze,et,zt){zt===!0&&(ye*=et,ue*=et,ze*=et),xe.set(ye,ue,ze,et),Pe.equals(xe)===!1&&(i.clearColor(ye,ue,ze,et),Pe.copy(xe))},reset:function(){H=!1,ie=null,Pe.set(-1,0,0,0)}}}function n(){let H=!1,xe=!1,ie=null,Pe=null,ye=null;return{setReversed:function(ue){if(xe!==ue){const ze=e.get("EXT_clip_control");ue?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),xe=ue;const et=ye;ye=null,this.setClear(et)}},getReversed:function(){return xe},setTest:function(ue){ue?de(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(ue){ie!==ue&&!H&&(i.depthMask(ue),ie=ue)},setFunc:function(ue){if(xe&&(ue=Qd[ue]),Pe!==ue){switch(ue){case Fa:i.depthFunc(i.NEVER);break;case Oa:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case Ga:i.depthFunc(i.GREATER);break;case Ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=ue}},setLocked:function(ue){H=ue},setClear:function(ue){ye!==ue&&(ye=ue,xe&&(ue=1-ue),i.clearDepth(ue))},reset:function(){H=!1,ie=null,Pe=null,ye=null,xe=!1}}}function s(){let H=!1,xe=null,ie=null,Pe=null,ye=null,ue=null,ze=null,et=null,zt=null;return{setTest:function(_t){H||(_t?de(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(_t){xe!==_t&&!H&&(i.stencilMask(_t),xe=_t)},setFunc:function(_t,si,kn){(ie!==_t||Pe!==si||ye!==kn)&&(i.stencilFunc(_t,si,kn),ie=_t,Pe=si,ye=kn)},setOp:function(_t,si,kn){(ue!==_t||ze!==si||et!==kn)&&(i.stencilOp(_t,si,kn),ue=_t,ze=si,et=kn)},setLocked:function(_t){H=_t},setClear:function(_t){zt!==_t&&(i.clearStencil(_t),zt=_t)},reset:function(){H=!1,xe=null,ie=null,Pe=null,ye=null,ue=null,ze=null,et=null,zt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let d={},u={},h={},f=new WeakMap,p=[],v=null,g=!1,m=null,_=null,y=null,x=null,w=null,M=null,T=null,S=new Fe(0,0,0),A=0,I=!1,P=null,B=null,W=null,z=null,N=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,G=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),O=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),O=G>=2);let K=null,Q={};const oe=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),We=new Ft().fromArray(oe),we=new Ft().fromArray(Ue);function te(H,xe,ie,Pe){const ye=new Uint8Array(4),ue=i.createTexture();i.bindTexture(H,ue),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<ie;ze++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(xe+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return ue}const ge={};ge[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(Ls),Me(!1),k(Mc),de(i.CULL_FACE),he(pi);function de(H){d[H]!==!0&&(i.enable(H),d[H]=!0)}function se(H){d[H]!==!1&&(i.disable(H),d[H]=!1)}function Oe(H,xe){return h[H]!==xe?(i.bindFramebuffer(H,xe),h[H]=xe,H===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xe),H===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ie(H,xe){let ie=p,Pe=!1;if(H){ie=f.get(xe),ie===void 0&&(ie=[],f.set(xe,ie));const ye=H.textures;if(ie.length!==ye.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,ze=ye.length;ue<ze;ue++)ie[ue]=i.COLOR_ATTACHMENT0+ue;ie.length=ye.length,Pe=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(ie)}function Ke(H){return v!==H?(i.useProgram(H),v=H,!0):!1}const Xe={[Xi]:i.FUNC_ADD,[Md]:i.FUNC_SUBTRACT,[bd]:i.FUNC_REVERSE_SUBTRACT};Xe[wd]=i.MIN,Xe[Ed]=i.MAX;const re={[Td]:i.ZERO,[Ad]:i.ONE,[Rd]:i.SRC_COLOR,[Ua]:i.SRC_ALPHA,[Ud]:i.SRC_ALPHA_SATURATE,[Ld]:i.DST_COLOR,[Pd]:i.DST_ALPHA,[Cd]:i.ONE_MINUS_SRC_COLOR,[Na]:i.ONE_MINUS_SRC_ALPHA,[Dd]:i.ONE_MINUS_DST_COLOR,[Id]:i.ONE_MINUS_DST_ALPHA,[Nd]:i.CONSTANT_COLOR,[Fd]:i.ONE_MINUS_CONSTANT_COLOR,[Od]:i.CONSTANT_ALPHA,[Bd]:i.ONE_MINUS_CONSTANT_ALPHA};function he(H,xe,ie,Pe,ye,ue,ze,et,zt,_t){if(H===pi){g===!0&&(se(i.BLEND),g=!1);return}if(g===!1&&(de(i.BLEND),g=!0),H!==yd){if(H!==m||_t!==I){if((_!==Xi||w!==Xi)&&(i.blendEquation(i.FUNC_ADD),_=Xi,w=Xi),_t)switch(H){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Is:i.blendFunc(i.ONE,i.ONE);break;case bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:at("WebGLState: Invalid blending: ",H);break}else switch(H){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bc:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wc:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",H);break}y=null,x=null,M=null,T=null,S.set(0,0,0),A=0,m=H,I=_t}return}ye=ye||xe,ue=ue||ie,ze=ze||Pe,(xe!==_||ye!==w)&&(i.blendEquationSeparate(Xe[xe],Xe[ye]),_=xe,w=ye),(ie!==y||Pe!==x||ue!==M||ze!==T)&&(i.blendFuncSeparate(re[ie],re[Pe],re[ue],re[ze]),y=ie,x=Pe,M=ue,T=ze),(et.equals(S)===!1||zt!==A)&&(i.blendColor(et.r,et.g,et.b,zt),S.copy(et),A=zt),m=H,I=!1}function ae(H,xe){H.side===In?se(i.CULL_FACE):de(i.CULL_FACE);let ie=H.side===hn;xe&&(ie=!ie),Me(ie),H.blending===Rs&&H.transparent===!1?he(pi):he(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const Pe=H.stencilWrite;a.setTest(Pe),Pe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),U(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(H){P!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),P=H)}function k(H){H!==vd?(de(i.CULL_FACE),H!==B&&(H===Mc?i.cullFace(i.BACK):H===xd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),B=H}function fe(H){H!==W&&(O&&i.lineWidth(H),W=H)}function U(H,xe,ie){H?(de(i.POLYGON_OFFSET_FILL),(z!==xe||N!==ie)&&(z=xe,N=ie,o.getReversed()&&(xe=-xe),i.polygonOffset(xe,ie))):se(i.POLYGON_OFFSET_FILL)}function He(H){H?de(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function Le(H){H===void 0&&(H=i.TEXTURE0+F-1),K!==H&&(i.activeTexture(H),K=H)}function $e(H,xe,ie){ie===void 0&&(K===null?ie=i.TEXTURE0+F-1:ie=K);let Pe=Q[ie];Pe===void 0&&(Pe={type:void 0,texture:void 0},Q[ie]=Pe),(Pe.type!==H||Pe.texture!==xe)&&(K!==ie&&(i.activeTexture(ie),K=ie),i.bindTexture(H,xe||ge[H]),Pe.type=H,Pe.texture=xe)}function ce(){const H=Q[K];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ot(){try{i.compressedTexImage2D(...arguments)}catch(H){at("WebGLState:",H)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(H){at("WebGLState:",H)}}function b(){try{i.texSubImage2D(...arguments)}catch(H){at("WebGLState:",H)}}function $(){try{i.texSubImage3D(...arguments)}catch(H){at("WebGLState:",H)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(H){at("WebGLState:",H)}}function le(){try{i.compressedTexSubImage3D(...arguments)}catch(H){at("WebGLState:",H)}}function pe(){try{i.texStorage2D(...arguments)}catch(H){at("WebGLState:",H)}}function me(){try{i.texStorage3D(...arguments)}catch(H){at("WebGLState:",H)}}function V(){try{i.texImage2D(...arguments)}catch(H){at("WebGLState:",H)}}function q(){try{i.texImage3D(...arguments)}catch(H){at("WebGLState:",H)}}function Se(H){return u[H]!==void 0?u[H]:i.getParameter(H)}function Ce(H,xe){u[H]!==xe&&(i.pixelStorei(H,xe),u[H]=xe)}function _e(H){We.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),We.copy(H))}function ve(H){we.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),we.copy(H))}function je(H,xe){let ie=c.get(xe);ie===void 0&&(ie=new WeakMap,c.set(xe,ie));let Pe=ie.get(H);Pe===void 0&&(Pe=i.getUniformBlockIndex(xe,H.name),ie.set(H,Pe))}function nt(H,xe){const Pe=c.get(xe).get(H);l.get(xe)!==Pe&&(i.uniformBlockBinding(xe,Pe,H.__bindingPointIndex),l.set(xe,Pe))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},K=null,Q={},h={},f=new WeakMap,p=[],v=null,g=!1,m=null,_=null,y=null,x=null,w=null,M=null,T=null,S=new Fe(0,0,0),A=0,I=!1,P=null,B=null,W=null,z=null,N=null,We.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:se,bindFramebuffer:Oe,drawBuffers:Ie,useProgram:Ke,setBlending:he,setMaterial:ae,setFlipSided:Me,setCullFace:k,setLineWidth:fe,setPolygonOffset:U,setScissorTest:He,activeTexture:Le,bindTexture:$e,unbindTexture:ce,compressedTexImage2D:ot,compressedTexImage3D:R,texImage2D:V,texImage3D:q,pixelStorei:Ce,getParameter:Se,updateUBOMapping:je,uniformBlockBinding:nt,texStorage2D:pe,texStorage3D:me,texSubImage2D:b,texSubImage3D:$,compressedTexSubImage2D:ne,compressedTexSubImage3D:le,scissor:_e,viewport:ve,reset:dt}}function cv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,d=new WeakMap,u=new Set;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,b){return p?new OffscreenCanvas(R,b):pr("canvas")}function g(R,b,$){let ne=1;const le=ot(R);if((le.width>$||le.height>$)&&(ne=$/Math.max(le.width,le.height)),ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const pe=Math.floor(ne*le.width),me=Math.floor(ne*le.height);h===void 0&&(h=v(pe,me));const V=b?v(pe,me):h;return V.width=pe,V.height=me,V.getContext("2d").drawImage(R,0,0,pe,me),Ye("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+pe+"x"+me+")."),V}else return"data"in R&&Ye("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),R;return R}function m(R){return R.generateMipmaps}function _(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,b,$,ne,le,pe=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let me;ne&&(me=e.get("EXT_texture_norm16"),me||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=b;if(b===i.RED&&($===i.FLOAT&&(V=i.R32F),$===i.HALF_FLOAT&&(V=i.R16F),$===i.UNSIGNED_BYTE&&(V=i.R8),$===i.UNSIGNED_SHORT&&me&&(V=me.R16_EXT),$===i.SHORT&&me&&(V=me.R16_SNORM_EXT)),b===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(V=i.R8UI),$===i.UNSIGNED_SHORT&&(V=i.R16UI),$===i.UNSIGNED_INT&&(V=i.R32UI),$===i.BYTE&&(V=i.R8I),$===i.SHORT&&(V=i.R16I),$===i.INT&&(V=i.R32I)),b===i.RG&&($===i.FLOAT&&(V=i.RG32F),$===i.HALF_FLOAT&&(V=i.RG16F),$===i.UNSIGNED_BYTE&&(V=i.RG8),$===i.UNSIGNED_SHORT&&me&&(V=me.RG16_EXT),$===i.SHORT&&me&&(V=me.RG16_SNORM_EXT)),b===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(V=i.RG8UI),$===i.UNSIGNED_SHORT&&(V=i.RG16UI),$===i.UNSIGNED_INT&&(V=i.RG32UI),$===i.BYTE&&(V=i.RG8I),$===i.SHORT&&(V=i.RG16I),$===i.INT&&(V=i.RG32I)),b===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(V=i.RGB8UI),$===i.UNSIGNED_SHORT&&(V=i.RGB16UI),$===i.UNSIGNED_INT&&(V=i.RGB32UI),$===i.BYTE&&(V=i.RGB8I),$===i.SHORT&&(V=i.RGB16I),$===i.INT&&(V=i.RGB32I)),b===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),$===i.UNSIGNED_INT&&(V=i.RGBA32UI),$===i.BYTE&&(V=i.RGBA8I),$===i.SHORT&&(V=i.RGBA16I),$===i.INT&&(V=i.RGBA32I)),b===i.RGB&&($===i.UNSIGNED_SHORT&&me&&(V=me.RGB16_EXT),$===i.SHORT&&me&&(V=me.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),b===i.RGBA){const q=pe?Mo:ut.getTransfer(le);$===i.FLOAT&&(V=i.RGBA32F),$===i.HALF_FLOAT&&(V=i.RGBA16F),$===i.UNSIGNED_BYTE&&(V=q===mt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&me&&(V=me.RGBA16_EXT),$===i.SHORT&&me&&(V=me.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function w(R,b){let $;return R?b===null||b===ei||b===dr?$=i.DEPTH24_STENCIL8:b===Dn?$=i.DEPTH32F_STENCIL8:b===hr&&($=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ei||b===dr?$=i.DEPTH_COMPONENT24:b===Dn?$=i.DEPTH_COMPONENT32F:b===hr&&($=i.DEPTH_COMPONENT16),$}function M(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==Qt?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function T(R){const b=R.target;b.removeEventListener("dispose",T),A(b),b.isVideoTexture&&d.delete(b),b.isHTMLTexture&&u.delete(b)}function S(R){const b=R.target;b.removeEventListener("dispose",S),P(b)}function A(R){const b=n.get(R);if(b.__webglInit===void 0)return;const $=R.source,ne=f.get($);if(ne){const le=ne[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&I(R),Object.keys(ne).length===0&&f.delete($)}n.remove(R)}function I(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const $=R.source,ne=f.get($);delete ne[b.__cacheKey],o.memory.textures--}function P(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(b.__webglFramebuffer[ne]))for(let le=0;le<b.__webglFramebuffer[ne].length;le++)i.deleteFramebuffer(b.__webglFramebuffer[ne][le]);else i.deleteFramebuffer(b.__webglFramebuffer[ne]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[ne])}else{if(Array.isArray(b.__webglFramebuffer))for(let ne=0;ne<b.__webglFramebuffer.length;ne++)i.deleteFramebuffer(b.__webglFramebuffer[ne]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ne=0;ne<b.__webglColorRenderbuffer.length;ne++)b.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[ne]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=R.textures;for(let ne=0,le=$.length;ne<le;ne++){const pe=n.get($[ne]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove($[ne])}n.remove(R)}let B=0;function W(){B=0}function z(){return B}function N(R){B=R}function F(){const R=B;return R>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),B+=1,R}function O(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function G(R,b){const $=n.get(R);if(R.isVideoTexture&&$e(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&$.__version!==R.version){const ne=R.image;if(ne===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{se($,R,b);return}}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+b)}function J(R,b){const $=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){se($,R,b);return}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+b)}function K(R,b){const $=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){se($,R,b);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+b)}function Q(R,b){const $=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&$.__version!==R.version){Oe($,R,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+b)}const oe={[ln]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},Ue={[jt]:i.NEAREST,[Gd]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[ko]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},We={[Wd]:i.NEVER,[Zd]:i.ALWAYS,[Xd]:i.LESS,[$l]:i.LEQUAL,[$d]:i.EQUAL,[ql]:i.GEQUAL,[qd]:i.GREATER,[Yd]:i.NOTEQUAL};function we(R,b){if(b.type===Dn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Qt||b.magFilter===ko||b.magFilter===Rr||b.magFilter===Yi||b.minFilter===Qt||b.minFilter===ko||b.minFilter===Rr||b.minFilter===Yi)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,oe[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,oe[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,oe[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ue[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ue[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,We[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===jt||b.minFilter!==Rr&&b.minFilter!==Yi||b.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function te(R,b){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",T));const ne=b.source;let le=f.get(ne);le===void 0&&(le={},f.set(ne,le));const pe=O(b);if(pe!==R.__cacheKey){le[pe]===void 0&&(le[pe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),le[pe].usedTimes++;const me=le[R.__cacheKey];me!==void 0&&(le[R.__cacheKey].usedTimes--,me.usedTimes===0&&I(b)),R.__cacheKey=pe,R.__webglTexture=le[pe].texture}return $}function ge(R,b,$){return Math.floor(Math.floor(R/$)/b)}function de(R,b,$,ne){const pe=R.updateRanges;if(pe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,$,ne,b.data);else{pe.sort((Ce,_e)=>Ce.start-_e.start);let me=0;for(let Ce=1;Ce<pe.length;Ce++){const _e=pe[me],ve=pe[Ce],je=_e.start+_e.count,nt=ge(ve.start,b.width,4),dt=ge(_e.start,b.width,4);ve.start<=je+1&&nt===dt&&ge(ve.start+ve.count-1,b.width,4)===nt?_e.count=Math.max(_e.count,ve.start+ve.count-_e.start):(++me,pe[me]=ve)}pe.length=me+1;const V=t.getParameter(i.UNPACK_ROW_LENGTH),q=t.getParameter(i.UNPACK_SKIP_PIXELS),Se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Ce=0,_e=pe.length;Ce<_e;Ce++){const ve=pe[Ce],je=Math.floor(ve.start/4),nt=Math.ceil(ve.count/4),dt=je%b.width,H=Math.floor(je/b.width),xe=nt,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),t.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,dt,H,xe,ie,$,ne,b.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,V),t.pixelStorei(i.UNPACK_SKIP_PIXELS,q),t.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function se(R,b,$){let ne=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=i.TEXTURE_3D);const le=te(R,b),pe=b.source;t.bindTexture(ne,R.__webglTexture,i.TEXTURE0+$);const me=n.get(pe);if(pe.version!==me.__version||le===!0){if(t.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ie=ut.getPrimaries(ut.workingColorSpace),Pe=b.colorSpace===hi?null:ut.getPrimaries(b.colorSpace),ye=b.colorSpace===hi||ie===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let q=g(b.image,!1,s.maxTextureSize);q=ce(b,q);const Se=r.convert(b.format,b.colorSpace),Ce=r.convert(b.type);let _e=x(b.internalFormat,Se,Ce,b.normalized,b.colorSpace,b.isVideoTexture);we(ne,b);let ve;const je=b.mipmaps,nt=b.isVideoTexture!==!0,dt=me.__version===void 0||le===!0,H=pe.dataReady,xe=M(b,q);if(b.isDepthTexture)_e=w(b.format===Zi,b.type),dt&&(nt?t.texStorage2D(i.TEXTURE_2D,1,_e,q.width,q.height):t.texImage2D(i.TEXTURE_2D,0,_e,q.width,q.height,0,Se,Ce,null));else if(b.isDataTexture)if(je.length>0){nt&&dt&&t.texStorage2D(i.TEXTURE_2D,xe,_e,je[0].width,je[0].height);for(let ie=0,Pe=je.length;ie<Pe;ie++)ve=je[ie],nt?H&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ve.width,ve.height,Se,Ce,ve.data):t.texImage2D(i.TEXTURE_2D,ie,_e,ve.width,ve.height,0,Se,Ce,ve.data);b.generateMipmaps=!1}else nt?(dt&&t.texStorage2D(i.TEXTURE_2D,xe,_e,q.width,q.height),H&&de(b,q,Se,Ce)):t.texImage2D(i.TEXTURE_2D,0,_e,q.width,q.height,0,Se,Ce,q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){nt&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,_e,je[0].width,je[0].height,q.depth);for(let ie=0,Pe=je.length;ie<Pe;ie++)if(ve=je[ie],b.format!==Un)if(Se!==null)if(nt){if(H)if(b.layerUpdates.size>0){const ye=lu(ve.width,ve.height,b.format,b.type);for(const ue of b.layerUpdates){const ze=ve.data.subarray(ue*ye/ve.data.BYTES_PER_ELEMENT,(ue+1)*ye/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,ue,ve.width,ve.height,1,Se,ze)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,q.depth,Se,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,_e,ve.width,ve.height,q.depth,0,ve.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,ve.width,ve.height,q.depth,Se,Ce,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,_e,ve.width,ve.height,q.depth,0,Se,Ce,ve.data)}else{nt&&dt&&t.texStorage2D(i.TEXTURE_2D,xe,_e,je[0].width,je[0].height);for(let ie=0,Pe=je.length;ie<Pe;ie++)ve=je[ie],b.format!==Un?Se!==null?nt?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,ve.width,ve.height,Se,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,_e,ve.width,ve.height,0,ve.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?H&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ve.width,ve.height,Se,Ce,ve.data):t.texImage2D(i.TEXTURE_2D,ie,_e,ve.width,ve.height,0,Se,Ce,ve.data)}else if(b.isDataArrayTexture)if(nt){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,_e,q.width,q.height,q.depth),H)if(b.layerUpdates.size>0){const ie=lu(q.width,q.height,b.format,b.type);for(const Pe of b.layerUpdates){const ye=q.data.subarray(Pe*ie/q.data.BYTES_PER_ELEMENT,(Pe+1)*ie/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pe,q.width,q.height,1,Se,Ce,ye)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Se,Ce,q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,q.width,q.height,q.depth,0,Se,Ce,q.data);else if(b.isData3DTexture)nt?(dt&&t.texStorage3D(i.TEXTURE_3D,xe,_e,q.width,q.height,q.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Se,Ce,q.data)):t.texImage3D(i.TEXTURE_3D,0,_e,q.width,q.height,q.depth,0,Se,Ce,q.data);else if(b.isFramebufferTexture){if(dt)if(nt)t.texStorage2D(i.TEXTURE_2D,xe,_e,q.width,q.height);else{let ie=q.width,Pe=q.height;for(let ye=0;ye<xe;ye++)t.texImage2D(i.TEXTURE_2D,ye,_e,ie,Pe,0,Se,Ce,null),ie>>=1,Pe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){const ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),q.parentNode!==ie){ie.appendChild(q),u.add(b),ie.onpaint=et=>{const zt=et.changedElements;for(const _t of u)zt.includes(_t.image)&&(_t.needsUpdate=!0)},ie.requestPaint();return}const Pe=0,ye=i.RGBA,ue=i.RGBA,ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Pe,ye,ue,ze,q),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(je.length>0){if(nt&&dt){const ie=ot(je[0]);t.texStorage2D(i.TEXTURE_2D,xe,_e,ie.width,ie.height)}for(let ie=0,Pe=je.length;ie<Pe;ie++)ve=je[ie],nt?H&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Se,Ce,ve):t.texImage2D(i.TEXTURE_2D,ie,_e,Se,Ce,ve);b.generateMipmaps=!1}else if(nt){if(dt){const ie=ot(q);t.texStorage2D(i.TEXTURE_2D,xe,_e,ie.width,ie.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,Ce,q)}else t.texImage2D(i.TEXTURE_2D,0,_e,Se,Ce,q);m(b)&&_(ne),me.__version=pe.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Oe(R,b,$){if(b.image.length!==6)return;const ne=te(R,b),le=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+$);const pe=n.get(le);if(le.version!==pe.__version||ne===!0){t.activeTexture(i.TEXTURE0+$);const me=ut.getPrimaries(ut.workingColorSpace),V=b.colorSpace===hi?null:ut.getPrimaries(b.colorSpace),q=b.colorSpace===hi||me===V?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);const Se=b.isCompressedTexture||b.image[0].isCompressedTexture,Ce=b.image[0]&&b.image[0].isDataTexture,_e=[];for(let ue=0;ue<6;ue++)!Se&&!Ce?_e[ue]=g(b.image[ue],!0,s.maxCubemapSize):_e[ue]=Ce?b.image[ue].image:b.image[ue],_e[ue]=ce(b,_e[ue]);const ve=_e[0],je=r.convert(b.format,b.colorSpace),nt=r.convert(b.type),dt=x(b.internalFormat,je,nt,b.normalized,b.colorSpace),H=b.isVideoTexture!==!0,xe=pe.__version===void 0||ne===!0,ie=le.dataReady;let Pe=M(b,ve);we(i.TEXTURE_CUBE_MAP,b);let ye;if(Se){H&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,dt,ve.width,ve.height);for(let ue=0;ue<6;ue++){ye=_e[ue].mipmaps;for(let ze=0;ze<ye.length;ze++){const et=ye[ze];b.format!==Un?je!==null?H?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,0,0,et.width,et.height,je,et.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,dt,et.width,et.height,0,et.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,0,0,et.width,et.height,je,nt,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,dt,et.width,et.height,0,je,nt,et.data)}}}else{if(ye=b.mipmaps,H&&xe){ye.length>0&&Pe++;const ue=ot(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,dt,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Ce){H?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,_e[ue].width,_e[ue].height,je,nt,_e[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,dt,_e[ue].width,_e[ue].height,0,je,nt,_e[ue].data);for(let ze=0;ze<ye.length;ze++){const zt=ye[ze].image[ue].image;H?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,0,0,zt.width,zt.height,je,nt,zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,dt,zt.width,zt.height,0,je,nt,zt.data)}}else{H?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,je,nt,_e[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,dt,je,nt,_e[ue]);for(let ze=0;ze<ye.length;ze++){const et=ye[ze];H?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,0,0,je,nt,et.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,dt,je,nt,et.image[ue])}}}m(b)&&_(i.TEXTURE_CUBE_MAP),pe.__version=le.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ie(R,b,$,ne,le,pe){const me=r.convert($.format,$.colorSpace),V=r.convert($.type),q=x($.internalFormat,me,V,$.normalized,$.colorSpace),Se=n.get(b),Ce=n.get($);if(Ce.__renderTarget=b,!Se.__hasExternalTextures){const _e=Math.max(1,b.width>>pe),ve=Math.max(1,b.height>>pe);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,pe,q,_e,ve,b.depth,0,me,V,null):t.texImage2D(le,pe,q,_e,ve,0,me,V,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Le(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,le,Ce.__webglTexture,0,He(b)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,le,Ce.__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(R,b,$){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const ne=b.depthTexture,le=ne&&ne.isDepthTexture?ne.type:null,pe=w(b.stencilBuffer,le),me=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Le(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(b),pe,b.width,b.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(b),pe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,pe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,R)}else{const ne=b.textures;for(let le=0;le<ne.length;le++){const pe=ne[le],me=r.convert(pe.format,pe.colorSpace),V=r.convert(pe.type),q=x(pe.internalFormat,me,V,pe.normalized,pe.colorSpace);Le(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(b),q,b.width,b.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(b),q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,q,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xe(R,b,$){const ne=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=n.get(b.depthTexture);if(le.__renderTarget=b,(!le.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ne){if(le.__webglInit===void 0&&(le.__webglInit=!0,b.depthTexture.addEventListener("dispose",T)),le.__webglTexture===void 0){le.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),we(i.TEXTURE_CUBE_MAP,b.depthTexture);const Se=r.convert(b.depthTexture.format),Ce=r.convert(b.depthTexture.type);let _e;b.depthTexture.format===vi?_e=i.DEPTH_COMPONENT24:b.depthTexture.format===Zi&&(_e=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,_e,b.width,b.height,0,Se,Ce,null)}}else G(b.depthTexture,0);const pe=le.__webglTexture,me=He(b),V=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,q=b.depthTexture.format===Zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===vi)Le(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,V,pe,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,q,V,pe,0);else if(b.depthTexture.format===Zi)Le(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,V,pe,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,q,V,pe,0);else throw new Error("Unknown depthTexture format")}function re(R){const b=n.get(R),$=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const ne=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ne){const le=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ne.removeEventListener("dispose",le)};ne.addEventListener("dispose",le),b.__depthDisposeCallback=le}b.__boundDepthTexture=ne}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if($)for(let ne=0;ne<6;ne++)Xe(b.__webglFramebuffer[ne],R,ne);else{const ne=R.texture.mipmaps;ne&&ne.length>0?Xe(b.__webglFramebuffer[0],R,0):Xe(b.__webglFramebuffer,R,0)}else if($){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]===void 0)b.__webglDepthbuffer[ne]=i.createRenderbuffer(),Ke(b.__webglDepthbuffer[ne],R,!1);else{const le=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,pe)}}else{const ne=R.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ke(b.__webglDepthbuffer,R,!1);else{const le=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,pe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(R,b,$){const ne=n.get(R);b!==void 0&&Ie(ne.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&re(R)}function ae(R){const b=R.texture,$=n.get(R),ne=n.get(b);R.addEventListener("dispose",S);const le=R.textures,pe=R.isWebGLCubeRenderTarget===!0,me=le.length>1;if(me||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=b.version,o.memory.textures++),pe){$.__webglFramebuffer=[];for(let V=0;V<6;V++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[V]=[];for(let q=0;q<b.mipmaps.length;q++)$.__webglFramebuffer[V][q]=i.createFramebuffer()}else $.__webglFramebuffer[V]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let V=0;V<b.mipmaps.length;V++)$.__webglFramebuffer[V]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(me)for(let V=0,q=le.length;V<q;V++){const Se=n.get(le[V]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Le(R)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let V=0;V<le.length;V++){const q=le[V];$.__webglColorRenderbuffer[V]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[V]);const Se=r.convert(q.format,q.colorSpace),Ce=r.convert(q.type),_e=x(q.internalFormat,Se,Ce,q.normalized,q.colorSpace,R.isXRRenderTarget===!0),ve=He(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,_e,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,$.__webglColorRenderbuffer[V])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke($.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),we(i.TEXTURE_CUBE_MAP,b);for(let V=0;V<6;V++)if(b.mipmaps&&b.mipmaps.length>0)for(let q=0;q<b.mipmaps.length;q++)Ie($.__webglFramebuffer[V][q],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,q);else Ie($.__webglFramebuffer[V],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);m(b)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let V=0,q=le.length;V<q;V++){const Se=le[V],Ce=n.get(Se);let _e=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,Ce.__webglTexture),we(_e,Se),Ie($.__webglFramebuffer,R,Se,i.COLOR_ATTACHMENT0+V,_e,0),m(Se)&&_(_e)}t.unbindTexture()}else{let V=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(V=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(V,ne.__webglTexture),we(V,b),b.mipmaps&&b.mipmaps.length>0)for(let q=0;q<b.mipmaps.length;q++)Ie($.__webglFramebuffer[q],R,b,i.COLOR_ATTACHMENT0,V,q);else Ie($.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,V,0);m(b)&&_(V),t.unbindTexture()}R.depthBuffer&&re(R)}function Me(R){const b=R.textures;for(let $=0,ne=b.length;$<ne;$++){const le=b[$];if(m(le)){const pe=y(R),me=n.get(le).__webglTexture;t.bindTexture(pe,me),_(pe),t.unbindTexture()}}}const k=[],fe=[];function U(R){if(R.samples>0){if(Le(R)===!1){const b=R.textures,$=R.width,ne=R.height;let le=i.COLOR_BUFFER_BIT;const pe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(R),V=b.length>1;if(V)for(let Se=0;Se<b.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const q=R.texture.mipmaps;q&&q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Se=0;Se<b.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),V){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const Ce=n.get(b[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ce,0)}i.blitFramebuffer(0,0,$,ne,0,0,$,ne,le,i.NEAREST),l===!0&&(k.length=0,fe.length=0,k.push(i.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(k.push(pe),fe.push(pe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),V)for(let Se=0;Se<b.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const Ce=n.get(b[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function He(R){return Math.min(s.maxSamples,R.samples)}function Le(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $e(R){const b=o.render.frame;d.get(R)!==b&&(d.set(R,b),R.update())}function ce(R,b){const $=R.colorSpace,ne=R.format,le=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||$!==yo&&$!==hi&&(ut.getTransfer($)===mt?(ne!==Un||le!==xn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",$)),b}function ot(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=W,this.getTextureUnits=z,this.setTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=J,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=he,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function uv(i,e){function t(n,s=hi){let r;const o=ut.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===kl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===rh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ih)return i.BYTE;if(n===sh)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===zl)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===_i)return i.HALF_FLOAT;if(n===ah)return i.ALPHA;if(n===lh)return i.RGB;if(n===Un)return i.RGBA;if(n===vi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===Hl)return i.RED;if(n===Vl)return i.RED_INTEGER;if(n===ji)return i.RG;if(n===Wl)return i.RG_INTEGER;if(n===Xl)return i.RGBA_INTEGER;if(n===co||n===uo||n===ho||n===fo)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===$a||n===qa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===Za||n===Ka||n===Ja||n===ja||n===vo||n===Qa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===Za)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ka)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ja)return r.COMPRESSED_R11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===vo)return r.COMPRESSED_RG11_EAC;if(n===Qa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===dl||n===fl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===el)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===ml||n===gl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===pl)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_l||n===vl||n===xo||n===xl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_l)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Sh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new On({vertexShader:hv,fragmentShader:dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new D(new Bt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pv extends es{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",g=new fv,m={},_=t.getContextAttributes();let y=null,x=null;const w=[],M=[],T=new ee;let S=null;const A=new fn;A.viewport=new Ft;const I=new fn;I.viewport=new Ft;const P=[A,I],B=new w0;let W=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ge=w[te];return ge===void 0&&(ge=new Yo,w[te]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(te){let ge=w[te];return ge===void 0&&(ge=new Yo,w[te]=ge),ge.getGripSpace()},this.getHand=function(te){let ge=w[te];return ge===void 0&&(ge=new Yo,w[te]=ge),ge.getHandSpace()};function N(te){const ge=M.indexOf(te.inputSource);if(ge===-1)return;const de=w[ge];de!==void 0&&(de.update(te.inputSource,te.frame,c||o),de.dispatchEvent({type:te.type,data:te.inputSource}))}function F(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",O);for(let te=0;te<w.length;te++){const ge=M[te];ge!==null&&(M[te]=null,w[te].disconnect(ge))}W=null,z=null,g.reset();for(const te in m)delete m[te];e.setRenderTarget(y),f=null,h=null,u=null,s=null,x=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",F),s.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,se=null,Oe=null;_.depth&&(Oe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=_.stencil?Zi:vi,se=_.stencil?dr:ei);const Ie={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Ie),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Jn(h.textureWidth,h.textureHeight,{format:Un,type:xn,depthTexture:new Us(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const de={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Jn(f.framebufferWidth,f.framebufferHeight,{format:Un,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),we.setContext(s),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(te){for(let ge=0;ge<te.removed.length;ge++){const de=te.removed[ge],se=M.indexOf(de);se>=0&&(M[se]=null,w[se].disconnect(de))}for(let ge=0;ge<te.added.length;ge++){const de=te.added[ge];let se=M.indexOf(de);if(se===-1){for(let Ie=0;Ie<w.length;Ie++)if(Ie>=M.length){M.push(de),se=Ie;break}else if(M[Ie]===null){M[Ie]=de,se=Ie;break}if(se===-1)break}const Oe=w[se];Oe&&Oe.connect(de)}}const G=new L,J=new L;function K(te,ge,de){G.setFromMatrixPosition(ge.matrixWorld),J.setFromMatrixPosition(de.matrixWorld);const se=G.distanceTo(J),Oe=ge.projectionMatrix.elements,Ie=de.projectionMatrix.elements,Ke=Oe[14]/(Oe[10]-1),Xe=Oe[14]/(Oe[10]+1),re=(Oe[9]+1)/Oe[5],he=(Oe[9]-1)/Oe[5],ae=(Oe[8]-1)/Oe[0],Me=(Ie[8]+1)/Ie[0],k=Ke*ae,fe=Ke*Me,U=se/(-ae+Me),He=U*-ae;if(ge.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(He),te.translateZ(U),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Oe[10]===-1)te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Le=Ke+U,$e=Xe+U,ce=k-He,ot=fe+(se-He),R=re*Xe/$e*Le,b=he*Xe/$e*Le;te.projectionMatrix.makePerspective(ce,ot,R,b,Le,$e),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Q(te,ge){ge===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ge.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ge=te.near,de=te.far;g.texture!==null&&(g.depthNear>0&&(ge=g.depthNear),g.depthFar>0&&(de=g.depthFar)),B.near=I.near=A.near=ge,B.far=I.far=A.far=de,(W!==B.near||z!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),W=B.near,z=B.far),B.layers.mask=te.layers.mask|6,A.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;const se=te.parent,Oe=B.cameras;Q(B,se);for(let Ie=0;Ie<Oe.length;Ie++)Q(Oe[Ie],se);Oe.length===2?K(B,A,I):B.projectionMatrix.copy(A.projectionMatrix),oe(te,B,se)};function oe(te,ge,de){de===null?te.matrix.copy(ge.matrixWorld):(te.matrix.copy(de.matrixWorld),te.matrix.invert(),te.matrix.multiply(ge.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=wo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(te){return m[te]};let Ue=null;function We(te,ge){if(d=ge.getViewerPose(c||o),p=ge,d!==null){const de=d.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let se=!1;de.length!==B.cameras.length&&(B.cameras.length=0,se=!0);for(let Xe=0;Xe<de.length;Xe++){const re=de[Xe];let he=null;if(f!==null)he=f.getViewport(re);else{const Me=u.getViewSubImage(h,re);he=Me.viewport,Xe===0&&(e.setRenderTargetTextures(x,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(x))}let ae=P[Xe];ae===void 0&&(ae=new fn,ae.layers.enable(Xe),ae.viewport=new Ft,P[Xe]=ae),ae.matrix.fromArray(re.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(re.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(he.x,he.y,he.width,he.height),Xe===0&&(B.matrix.copy(ae.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),se===!0&&B.cameras.push(ae)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const Xe=u.getDepthInformation(de[0]);Xe&&Xe.isValid&&Xe.texture&&g.init(Xe,s.renderState)}if(Oe&&Oe.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let Xe=0;Xe<de.length;Xe++){const re=de[Xe].camera;if(re){let he=m[re];he||(he=new Sh,m[re]=he);const ae=u.getCameraImage(re);he.sourceTexture=ae}}}}for(let de=0;de<w.length;de++){const se=M[de],Oe=w[de];se!==null&&Oe!==void 0&&Oe.update(se,ge,c||o)}Ue&&Ue(te,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),p=null}const we=new Uh;we.setAnimationLoop(We),this.setAnimationLoop=function(te){Ue=te},this.dispose=function(){}}}const mv=new ct,Gh=new Qe;Gh.set(-1,0,0,0,1,0,0,0,1);function gv(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Ch(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,_,y,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,_,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===hn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===hn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const _=e.get(m),y=_.envMap,x=_.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(mv.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Gh),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,_,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*_,g.scale.value=y*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,_){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const _=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _v(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function c(_,y){let x=s[_.id];x===void 0&&(p(_),x=d(_),s[_.id]=x,_.addEventListener("dispose",g));const w=y.program;n.updateUBOMapping(_,w);const M=e.render.frame;r[_.id]!==M&&(h(_),r[_.id]=M)}function d(_){const y=u();_.__bindingPointIndex=y;const x=i.createBuffer(),w=_.__size,M=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,w,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const y=s[_.id],x=_.uniforms,w=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,T=x.length;M<T;M++){const S=Array.isArray(x[M])?x[M]:[x[M]];for(let A=0,I=S.length;A<I;A++){const P=S[A];if(f(P,M,A,w)===!0){const B=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let N=0;N<W.length;N++){const F=W[N],O=v(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,B+z,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):ArrayBuffer.isView(F)?P.__data.set(new F.constructor(F.buffer,F.byteOffset,P.__data.length)):(F.toArray(P.__data,z),z+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,x,w){const M=_.value,T=y+"_"+x;if(w[T]===void 0)return typeof M=="number"||typeof M=="boolean"?w[T]=M:ArrayBuffer.isView(M)?w[T]=M.slice():w[T]=M.clone(),!0;{const S=w[T];if(typeof M=="number"||typeof M=="boolean"){if(S!==M)return w[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(S.equals(M)===!1)return S.copy(M),!0}}return!1}function p(_){const y=_.uniforms;let x=0;const w=16;for(let T=0,S=y.length;T<S;T++){const A=Array.isArray(y[T])?y[T]:[y[T]];for(let I=0,P=A.length;I<P;I++){const B=A[I],W=Array.isArray(B.value)?B.value:[B.value];for(let z=0,N=W.length;z<N;z++){const F=W[z],O=v(F),G=x%w,J=G%O.boundary,K=G+J;x+=J,K!==0&&w-K<O.storage&&(x+=w-K),B.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=O.storage}}}const M=x%w;return M>0&&(x+=w-M),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(y.boundary=16,y.storage=_.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",_),y}function g(_){const y=_.target;y.removeEventListener("dispose",g);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}const vv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vn=null;function xv(){return Vn===null&&(Vn=new gh(vv,16,16,ji,_i),Vn.name="DFG_LUT",Vn.minFilter=Qt,Vn.magFilter=Qt,Vn.wrapS=Ln,Vn.wrapT=Ln,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}class Sv{constructor(e={}){const{canvas:t=Jd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=xn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=f,g=new Set([Xl,Wl,Vl]),m=new Set([xn,ei,hr,dr,kl,Gl]),_=new Uint32Array(4),y=new Int32Array(4),x=new L;let w=null,M=null;const T=[],S=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let P=!1,B=null;this._outputColorSpace=St;let W=0,z=0,N=null,F=-1,O=null;const G=new Ft,J=new Ft;let K=null;const Q=new Fe(0);let oe=0,Ue=t.width,We=t.height,we=1,te=null,ge=null;const de=new Ft(0,0,Ue,We),se=new Ft(0,0,Ue,We);let Oe=!1;const Ie=new Ql;let Ke=!1,Xe=!1;const re=new ct,he=new L,ae=new Ft,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let k=!1;function fe(){return N===null?we:1}let U=n;function He(E,X){return t.getContext(E,X)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fl}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",et,!1),U===null){const X="webgl2";if(U=He(X,E),U===null)throw He(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw at("WebGLRenderer: "+E.message),E}let Le,$e,ce,ot,R,b,$,ne,le,pe,me,V,q,Se,Ce,_e,ve,je,nt,dt,H,xe,ie;function Pe(){Le=new xg(U),Le.init(),H=new uv(U,Le),$e=new hg(U,Le,e,H),ce=new lv(U,Le),$e.reversedDepthBuffer&&h&&ce.buffers.depth.setReversed(!0),ot=new Mg(U),R=new Y_,b=new cv(U,Le,ce,R,$e,H,ot),$=new vg(I),ne=new T0(U),xe=new cg(U,ne),le=new Sg(U,ne,ot,xe),pe=new wg(U,le,ne,xe,ot),je=new bg(U,$e,b),Ce=new dg(R),me=new q_(I,$,Le,$e,xe,Ce),V=new gv(I,R),q=new K_,Se=new nv(Le),ve=new lg(I,$,ce,pe,p,l),_e=new av(I,pe,$e),ie=new _v(U,ot,$e,ce),nt=new ug(U,Le,ot),dt=new yg(U,Le,ot),ot.programs=me.programs,I.capabilities=$e,I.extensions=Le,I.properties=R,I.renderLists=q,I.shadowMap=_e,I.state=ce,I.info=ot}Pe(),v!==xn&&(A=new Tg(v,t.width,t.height,s,r));const ye=new pv(I,U);this.xr=ye,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Le.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Le.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(E){E!==void 0&&(we=E,this.setSize(Ue,We,!1))},this.getSize=function(E){return E.set(Ue,We)},this.setSize=function(E,X,j=!0){if(ye.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Ue=E,We=X,t.width=Math.floor(E*we),t.height=Math.floor(X*we),j===!0&&(t.style.width=E+"px",t.style.height=X+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,E,X)},this.getDrawingBufferSize=function(E){return E.set(Ue*we,We*we).floor()},this.setDrawingBufferSize=function(E,X,j){Ue=E,We=X,we=j,t.width=Math.floor(E*j),t.height=Math.floor(X*j),this.setViewport(0,0,E,X)},this.setEffects=function(E){if(v===xn){at("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let X=0;X<E.length;X++)if(E[X].isOutputPass===!0){Ye("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(G)},this.getViewport=function(E){return E.copy(de)},this.setViewport=function(E,X,j,Y){E.isVector4?de.set(E.x,E.y,E.z,E.w):de.set(E,X,j,Y),ce.viewport(G.copy(de).multiplyScalar(we).round())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,X,j,Y){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,X,j,Y),ce.scissor(J.copy(se).multiplyScalar(we).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(E){ce.setScissorTest(Oe=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){ge=E},this.getClearColor=function(E){return E.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(E=!0,X=!0,j=!0){let Y=0;if(E){let Z=!1;if(N!==null){const Ae=N.texture.format;Z=g.has(Ae)}if(Z){const Ae=N.texture.type,Ne=m.has(Ae),Te=ve.getClearColor(),Be=ve.getClearAlpha(),ke=Te.r,tt=Te.g,st=Te.b;Ne?(_[0]=ke,_[1]=tt,_[2]=st,_[3]=Be,U.clearBufferuiv(U.COLOR,0,_)):(y[0]=ke,y[1]=tt,y[2]=st,y[3]=Be,U.clearBufferiv(U.COLOR,0,y))}else Y|=U.COLOR_BUFFER_BIT}X&&(Y|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),B=E},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",et,!1),ve.dispose(),q.dispose(),Se.dispose(),R.dispose(),$.dispose(),pe.dispose(),xe.dispose(),ie.dispose(),me.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",pc),ye.removeEventListener("sessionend",mc),Fi.stop()};function ue(E){E.preventDefault(),bo("WebGLRenderer: Context Lost."),P=!0}function ze(){bo("WebGLRenderer: Context Restored."),P=!1;const E=ot.autoReset,X=_e.enabled,j=_e.autoUpdate,Y=_e.needsUpdate,Z=_e.type;Pe(),ot.autoReset=E,_e.enabled=X,_e.autoUpdate=j,_e.needsUpdate=Y,_e.type=Z}function et(E){at("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function zt(E){const X=E.target;X.removeEventListener("dispose",zt),_t(X)}function _t(E){si(E),R.remove(E)}function si(E){const X=R.get(E).programs;X!==void 0&&(X.forEach(function(j){me.releaseProgram(j)}),E.isShaderMaterial&&me.releaseShaderCache(E))}this.renderBufferDirect=function(E,X,j,Y,Z,Ae){X===null&&(X=Me);const Ne=Z.isMesh&&Z.matrixWorld.determinant()<0,Te=dd(E,X,j,Y,Z);ce.setMaterial(Y,Ne);let Be=j.index,ke=1;if(Y.wireframe===!0){if(Be=le.getWireframeAttribute(j),Be===void 0)return;ke=2}const tt=j.drawRange,st=j.attributes.position;let Ge=tt.start*ke,vt=(tt.start+tt.count)*ke;Ae!==null&&(Ge=Math.max(Ge,Ae.start*ke),vt=Math.min(vt,(Ae.start+Ae.count)*ke)),Be!==null?(Ge=Math.max(Ge,0),vt=Math.min(vt,Be.count)):st!=null&&(Ge=Math.max(Ge,0),vt=Math.min(vt,st.count));const kt=vt-Ge;if(kt<0||kt===1/0)return;xe.setup(Z,Y,Te,j,Be);let Dt,yt=nt;if(Be!==null&&(Dt=ne.get(Be),yt=dt,yt.setIndex(Dt)),Z.isMesh)Y.wireframe===!0?(ce.setLineWidth(Y.wireframeLinewidth*fe()),yt.setMode(U.LINES)):yt.setMode(U.TRIANGLES);else if(Z.isLine){let nn=Y.linewidth;nn===void 0&&(nn=1),ce.setLineWidth(nn*fe()),Z.isLineSegments?yt.setMode(U.LINES):Z.isLineLoop?yt.setMode(U.LINE_LOOP):yt.setMode(U.LINE_STRIP)}else Z.isPoints?yt.setMode(U.POINTS):Z.isSprite&&yt.setMode(U.TRIANGLES);if(Z.isBatchedMesh)if(Le.get("WEBGL_multi_draw"))yt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const nn=Z._multiDrawStarts,De=Z._multiDrawCounts,gn=Z._multiDrawCount,ht=Be?ne.get(Be).bytesPerElement:1,yn=R.get(Y).currentProgram.getUniforms();for(let Gn=0;Gn<gn;Gn++)yn.setValue(U,"_gl_DrawID",Gn),yt.render(nn[Gn]/ht,De[Gn])}else if(Z.isInstancedMesh)yt.renderInstances(Ge,kt,Z.count);else if(j.isInstancedBufferGeometry){const nn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,De=Math.min(j.instanceCount,nn);yt.renderInstances(Ge,kt,De)}else yt.render(Ge,kt)};function kn(E,X,j){E.transparent===!0&&E.side===In&&E.forceSinglePass===!1?(E.side=hn,E.needsUpdate=!0,Ar(E,X,j),E.side=Li,E.needsUpdate=!0,Ar(E,X,j),E.side=In):Ar(E,X,j)}this.compile=function(E,X,j=null){j===null&&(j=E),M=Se.get(j),M.init(X),S.push(M),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),E!==j&&E.traverseVisible(function(Z){Z.isLight&&Z.layers.test(X.layers)&&(M.pushLight(Z),Z.castShadow&&M.pushShadow(Z))}),M.setupLights();const Y=new Set;return E.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let Ne=0;Ne<Ae.length;Ne++){const Te=Ae[Ne];kn(Te,j,Z),Y.add(Te)}else kn(Ae,j,Z),Y.add(Ae)}),M=S.pop(),Y},this.compileAsync=function(E,X,j=null){const Y=this.compile(E,X,j);return new Promise(Z=>{function Ae(){if(Y.forEach(function(Ne){R.get(Ne).currentProgram.isReady()&&Y.delete(Ne)}),Y.size===0){Z(E);return}setTimeout(Ae,10)}Le.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Fo=null;function ud(E){Fo&&Fo(E)}function pc(){Fi.stop()}function mc(){Fi.start()}const Fi=new Uh;Fi.setAnimationLoop(ud),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(E){Fo=E,ye.setAnimationLoop(E),E===null?Fi.stop():Fi.start()},ye.addEventListener("sessionstart",pc),ye.addEventListener("sessionend",mc),this.render=function(E,X){if(X!==void 0&&X.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;B!==null&&B.renderStart(E,X);const j=ye.enabled===!0&&ye.isPresenting===!0,Y=A!==null&&(N===null||j)&&A.begin(I,N);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(X),X=ye.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,X,N),M=Se.get(E,S.length),M.init(X),M.state.textureUnits=b.getTextureUnits(),S.push(M),re.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ie.setFromProjectionMatrix(re,Zn,X.reversedDepth),Xe=this.localClippingEnabled,Ke=Ce.init(this.clippingPlanes,Xe),w=q.get(E,T.length),w.init(),T.push(w),ye.enabled===!0&&ye.isPresenting===!0){const Ne=I.xr.getDepthSensingMesh();Ne!==null&&Oo(Ne,X,-1/0,I.sortObjects)}Oo(E,X,0,I.sortObjects),w.finish(),I.sortObjects===!0&&w.sort(te,ge),k=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,k&&ve.addToRenderList(w,E),this.info.render.frame++,Ke===!0&&Ce.beginShadows();const Z=M.state.shadowsArray;if(_e.render(Z,E,X),Ke===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&A.hasRenderPass())===!1){const Ne=w.opaque,Te=w.transmissive;if(M.setupLights(),X.isArrayCamera){const Be=X.cameras;if(Te.length>0)for(let ke=0,tt=Be.length;ke<tt;ke++){const st=Be[ke];_c(Ne,Te,E,st)}k&&ve.render(E);for(let ke=0,tt=Be.length;ke<tt;ke++){const st=Be[ke];gc(w,E,st,st.viewport)}}else Te.length>0&&_c(Ne,Te,E,X),k&&ve.render(E),gc(w,E,X)}N!==null&&z===0&&(b.updateMultisampleRenderTarget(N),b.updateRenderTargetMipmap(N)),Y&&A.end(I),E.isScene===!0&&E.onAfterRender(I,E,X),xe.resetDefaultState(),F=-1,O=null,S.pop(),S.length>0?(M=S[S.length-1],b.setTextureUnits(M.state.textureUnits),Ke===!0&&Ce.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?w=T[T.length-1]:w=null,B!==null&&B.renderEnd()};function Oo(E,X,j,Y){if(E.visible===!1)return;if(E.layers.test(X.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(X);else if(E.isLightProbeGrid)M.pushLightProbeGrid(E);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ie.intersectsSprite(E)){Y&&ae.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const Ne=pe.update(E),Te=E.material;Te.visible&&w.push(E,Ne,Te,j,ae.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ie.intersectsObject(E))){const Ne=pe.update(E),Te=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ae.copy(E.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ae.copy(Ne.boundingSphere.center)),ae.applyMatrix4(E.matrixWorld).applyMatrix4(re)),Array.isArray(Te)){const Be=Ne.groups;for(let ke=0,tt=Be.length;ke<tt;ke++){const st=Be[ke],Ge=Te[st.materialIndex];Ge&&Ge.visible&&w.push(E,Ne,Ge,j,ae.z,st)}}else Te.visible&&w.push(E,Ne,Te,j,ae.z,null)}}const Ae=E.children;for(let Ne=0,Te=Ae.length;Ne<Te;Ne++)Oo(Ae[Ne],X,j,Y)}function gc(E,X,j,Y){const{opaque:Z,transmissive:Ae,transparent:Ne}=E;M.setupLightsView(j),Ke===!0&&Ce.setGlobalState(I.clippingPlanes,j),Y&&ce.viewport(G.copy(Y)),Z.length>0&&Tr(Z,X,j),Ae.length>0&&Tr(Ae,X,j),Ne.length>0&&Tr(Ne,X,j),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function _c(E,X,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){const Ge=Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new Jn(1,1,{generateMipmaps:!0,type:Ge?_i:xn,minFilter:Yi,samples:Math.max(4,$e.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const Ae=M.state.transmissionRenderTarget[Y.id],Ne=Y.viewport||G;Ae.setSize(Ne.z*I.transmissionResolutionScale,Ne.w*I.transmissionResolutionScale);const Te=I.getRenderTarget(),Be=I.getActiveCubeFace(),ke=I.getActiveMipmapLevel();I.setRenderTarget(Ae),I.getClearColor(Q),oe=I.getClearAlpha(),oe<1&&I.setClearColor(16777215,.5),I.clear(),k&&ve.render(j);const tt=I.toneMapping;I.toneMapping=Kn;const st=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),Ke===!0&&Ce.setGlobalState(I.clippingPlanes,Y),Tr(E,j,Y),b.updateMultisampleRenderTarget(Ae),b.updateRenderTargetMipmap(Ae),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let vt=0,kt=X.length;vt<kt;vt++){const Dt=X[vt],{object:yt,geometry:nn,material:De,group:gn}=Dt;if(De.side===In&&yt.layers.test(Y.layers)){const ht=De.side;De.side=hn,De.needsUpdate=!0,vc(yt,j,Y,nn,De,gn),De.side=ht,De.needsUpdate=!0,Ge=!0}}Ge===!0&&(b.updateMultisampleRenderTarget(Ae),b.updateRenderTargetMipmap(Ae))}I.setRenderTarget(Te,Be,ke),I.setClearColor(Q,oe),st!==void 0&&(Y.viewport=st),I.toneMapping=tt}function Tr(E,X,j){const Y=X.isScene===!0?X.overrideMaterial:null;for(let Z=0,Ae=E.length;Z<Ae;Z++){const Ne=E[Z],{object:Te,geometry:Be,group:ke}=Ne;let tt=Ne.material;tt.allowOverride===!0&&Y!==null&&(tt=Y),Te.layers.test(j.layers)&&vc(Te,X,j,Be,tt,ke)}}function vc(E,X,j,Y,Z,Ae){E.onBeforeRender(I,X,j,Y,Z,Ae),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Z.onBeforeRender(I,X,j,Y,E,Ae),Z.transparent===!0&&Z.side===In&&Z.forceSinglePass===!1?(Z.side=hn,Z.needsUpdate=!0,I.renderBufferDirect(j,X,Y,Z,E,Ae),Z.side=Li,Z.needsUpdate=!0,I.renderBufferDirect(j,X,Y,Z,E,Ae),Z.side=In):I.renderBufferDirect(j,X,Y,Z,E,Ae),E.onAfterRender(I,X,j,Y,Z,Ae)}function Ar(E,X,j){X.isScene!==!0&&(X=Me);const Y=R.get(E),Z=M.state.lights,Ae=M.state.shadowsArray,Ne=Z.state.version,Te=me.getParameters(E,Z.state,Ae,X,j,M.state.lightProbeGridArray),Be=me.getProgramCacheKey(Te);let ke=Y.programs;Y.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?X.environment:null,Y.fog=X.fog;const tt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Y.envMap=$.get(E.envMap||Y.environment,tt),Y.envMapRotation=Y.environment!==null&&E.envMap===null?X.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",zt),ke=new Map,Y.programs=ke);let st=ke.get(Be);if(st!==void 0){if(Y.currentProgram===st&&Y.lightsStateVersion===Ne)return Sc(E,Te),st}else Te.uniforms=me.getUniforms(E),B!==null&&E.isNodeMaterial&&B.build(E,j,Te),E.onBeforeCompile(Te,I),st=me.acquireProgram(Te,Be),ke.set(Be,st),Y.uniforms=Te.uniforms;const Ge=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=Ce.uniform),Sc(E,Te),Y.needsLights=pd(E),Y.lightsStateVersion=Ne,Y.needsLights&&(Ge.ambientLightColor.value=Z.state.ambient,Ge.lightProbe.value=Z.state.probe,Ge.directionalLights.value=Z.state.directional,Ge.directionalLightShadows.value=Z.state.directionalShadow,Ge.spotLights.value=Z.state.spot,Ge.spotLightShadows.value=Z.state.spotShadow,Ge.rectAreaLights.value=Z.state.rectArea,Ge.ltc_1.value=Z.state.rectAreaLTC1,Ge.ltc_2.value=Z.state.rectAreaLTC2,Ge.pointLights.value=Z.state.point,Ge.pointLightShadows.value=Z.state.pointShadow,Ge.hemisphereLights.value=Z.state.hemi,Ge.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ge.spotLightMatrix.value=Z.state.spotLightMatrix,Ge.spotLightMap.value=Z.state.spotLightMap,Ge.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=st,Y.uniformsList=null,st}function xc(E){if(E.uniformsList===null){const X=E.currentProgram.getUniforms();E.uniformsList=po.seqWithValue(X.seq,E.uniforms)}return E.uniformsList}function Sc(E,X){const j=R.get(E);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.batchingColor=X.batchingColor,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.instancingMorph=X.instancingMorph,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function hd(E,X){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(X.matrixWorld);for(let j=0,Y=E.length;j<Y;j++){const Z=E[j];if(Z.texture!==null&&Z.boundingBox.containsPoint(x))return Z}return null}function dd(E,X,j,Y,Z){X.isScene!==!0&&(X=Me),b.resetTextureUnits();const Ae=X.fog,Ne=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?X.environment:null,Te=N===null?I.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ut.workingColorSpace,Be=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,ke=$.get(Y.envMap||Ne,Be),tt=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,st=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ge=!!j.morphAttributes.position,vt=!!j.morphAttributes.normal,kt=!!j.morphAttributes.color;let Dt=Kn;Y.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Dt=I.toneMapping);const yt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,nn=yt!==void 0?yt.length:0,De=R.get(Y),gn=M.state.lights;if(Ke===!0&&(Xe===!0||E!==O)){const wt=E===O&&Y.id===F;Ce.setState(Y,E,wt)}let ht=!1;Y.version===De.__version?(De.needsLights&&De.lightsStateVersion!==gn.state.version||De.outputColorSpace!==Te||Z.isBatchedMesh&&De.batching===!1||!Z.isBatchedMesh&&De.batching===!0||Z.isBatchedMesh&&De.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&De.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&De.instancing===!1||!Z.isInstancedMesh&&De.instancing===!0||Z.isSkinnedMesh&&De.skinning===!1||!Z.isSkinnedMesh&&De.skinning===!0||Z.isInstancedMesh&&De.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&De.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&De.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&De.instancingMorph===!1&&Z.morphTexture!==null||De.envMap!==ke||Y.fog===!0&&De.fog!==Ae||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Ce.numPlanes||De.numIntersection!==Ce.numIntersection)||De.vertexAlphas!==tt||De.vertexTangents!==st||De.morphTargets!==Ge||De.morphNormals!==vt||De.morphColors!==kt||De.toneMapping!==Dt||De.morphTargetsCount!==nn||!!De.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,De.__version=Y.version);let yn=De.currentProgram;ht===!0&&(yn=Ar(Y,X,Z),B&&Y.isNodeMaterial&&B.onUpdateProgram(Y,yn,De));let Gn=!1,Si=!1,ss=!1;const Mt=yn.getUniforms(),Gt=De.uniforms;if(ce.useProgram(yn.program)&&(Gn=!0,Si=!0,ss=!0),Y.id!==F&&(F=Y.id,Si=!0),De.needsLights){const wt=hd(M.state.lightProbeGridArray,Z);De.lightProbeGrid!==wt&&(De.lightProbeGrid=wt,Si=!0)}if(Gn||O!==E){ce.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Mt.setValue(U,"projectionMatrix",E.projectionMatrix),Mt.setValue(U,"viewMatrix",E.matrixWorldInverse);const Mi=Mt.map.cameraPosition;Mi!==void 0&&Mi.setValue(U,he.setFromMatrixPosition(E.matrixWorld)),$e.logarithmicDepthBuffer&&Mt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Mt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),O!==E&&(O=E,Si=!0,ss=!0)}if(De.needsLights&&(gn.state.directionalShadowMap.length>0&&Mt.setValue(U,"directionalShadowMap",gn.state.directionalShadowMap,b),gn.state.spotShadowMap.length>0&&Mt.setValue(U,"spotShadowMap",gn.state.spotShadowMap,b),gn.state.pointShadowMap.length>0&&Mt.setValue(U,"pointShadowMap",gn.state.pointShadowMap,b)),Z.isSkinnedMesh){Mt.setOptional(U,Z,"bindMatrix"),Mt.setOptional(U,Z,"bindMatrixInverse");const wt=Z.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),Mt.setValue(U,"boneTexture",wt.boneTexture,b))}Z.isBatchedMesh&&(Mt.setOptional(U,Z,"batchingTexture"),Mt.setValue(U,"batchingTexture",Z._matricesTexture,b),Mt.setOptional(U,Z,"batchingIdTexture"),Mt.setValue(U,"batchingIdTexture",Z._indirectTexture,b),Mt.setOptional(U,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Mt.setValue(U,"batchingColorTexture",Z._colorsTexture,b));const yi=j.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&je.update(Z,j,yn),(Si||De.receiveShadow!==Z.receiveShadow)&&(De.receiveShadow=Z.receiveShadow,Mt.setValue(U,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&X.environment!==null&&(Gt.envMapIntensity.value=X.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=xv()),Si){if(Mt.setValue(U,"toneMappingExposure",I.toneMappingExposure),De.needsLights&&fd(Gt,ss),Ae&&Y.fog===!0&&V.refreshFogUniforms(Gt,Ae),V.refreshMaterialUniforms(Gt,Y,we,We,M.state.transmissionRenderTarget[E.id]),De.needsLights&&De.lightProbeGrid){const wt=De.lightProbeGrid;Gt.probesSH.value=wt.texture,Gt.probesMin.value.copy(wt.boundingBox.min),Gt.probesMax.value.copy(wt.boundingBox.max),Gt.probesResolution.value.copy(wt.resolution)}po.upload(U,xc(De),Gt,b)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(po.upload(U,xc(De),Gt,b),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Mt.setValue(U,"center",Z.center),Mt.setValue(U,"modelViewMatrix",Z.modelViewMatrix),Mt.setValue(U,"normalMatrix",Z.normalMatrix),Mt.setValue(U,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){const wt=Y.uniformsGroups;for(let Mi=0,rs=wt.length;Mi<rs;Mi++){const yc=wt[Mi];ie.update(yc,yn),ie.bind(yc,yn)}}return yn}function fd(E,X){E.ambientLightColor.needsUpdate=X,E.lightProbe.needsUpdate=X,E.directionalLights.needsUpdate=X,E.directionalLightShadows.needsUpdate=X,E.pointLights.needsUpdate=X,E.pointLightShadows.needsUpdate=X,E.spotLights.needsUpdate=X,E.spotLightShadows.needsUpdate=X,E.rectAreaLights.needsUpdate=X,E.hemisphereLights.needsUpdate=X}function pd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(E,X,j){const Y=R.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),R.get(E.texture).__webglTexture=X,R.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,X){const j=R.get(E);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0};const md=U.createFramebuffer();this.setRenderTarget=function(E,X=0,j=0){N=E,W=X,z=j;let Y=null,Z=!1,Ae=!1;if(E){const Te=R.get(E);if(Te.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(U.FRAMEBUFFER,Te.__webglFramebuffer),G.copy(E.viewport),J.copy(E.scissor),K=E.scissorTest,ce.viewport(G),ce.scissor(J),ce.setScissorTest(K),F=-1;return}else if(Te.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(Te.__hasExternalTextures)b.rebindTextures(E,R.get(E.texture).__webglTexture,R.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const tt=E.depthTexture;if(Te.__boundDepthTexture!==tt){if(tt!==null&&R.has(tt)&&(E.width!==tt.image.width||E.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ae=!0);const ke=R.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[X])?Y=ke[X][j]:Y=ke[X],Z=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?Y=R.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?Y=ke[j]:Y=ke,G.copy(E.viewport),J.copy(E.scissor),K=E.scissorTest}else G.copy(de).multiplyScalar(we).floor(),J.copy(se).multiplyScalar(we).floor(),K=Oe;if(j!==0&&(Y=md),ce.bindFramebuffer(U.FRAMEBUFFER,Y)&&ce.drawBuffers(E,Y),ce.viewport(G),ce.scissor(J),ce.setScissorTest(K),Z){const Te=R.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+X,Te.__webglTexture,j)}else if(Ae){const Te=X;for(let Be=0;Be<E.textures.length;Be++){const ke=R.get(E.textures[Be]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Be,ke.__webglTexture,j,Te)}}else if(E!==null&&j!==0){const Te=R.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Te.__webglTexture,j)}F=-1},this.readRenderTargetPixels=function(E,X,j,Y,Z,Ae,Ne,Te=0){if(!(E&&E.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=R.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){ce.bindFramebuffer(U.FRAMEBUFFER,Be);try{const ke=E.textures[Te],tt=ke.format,st=ke.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Te),!$e.textureFormatReadable(tt)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(st)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=E.width-Y&&j>=0&&j<=E.height-Z&&U.readPixels(X,j,Y,Z,H.convert(tt),H.convert(st),Ae)}finally{const ke=N!==null?R.get(N).__webglFramebuffer:null;ce.bindFramebuffer(U.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,X,j,Y,Z,Ae,Ne,Te=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=R.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be)if(X>=0&&X<=E.width-Y&&j>=0&&j<=E.height-Z){ce.bindFramebuffer(U.FRAMEBUFFER,Be);const ke=E.textures[Te],tt=ke.format,st=ke.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Te),!$e.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ge),U.bufferData(U.PIXEL_PACK_BUFFER,Ae.byteLength,U.STREAM_READ),U.readPixels(X,j,Y,Z,H.convert(tt),H.convert(st),0);const vt=N!==null?R.get(N).__webglFramebuffer:null;ce.bindFramebuffer(U.FRAMEBUFFER,vt);const kt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await jd(U,kt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ge),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ae),U.deleteBuffer(Ge),U.deleteSync(kt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,X=null,j=0){const Y=Math.pow(2,-j),Z=Math.floor(E.image.width*Y),Ae=Math.floor(E.image.height*Y),Ne=X!==null?X.x:0,Te=X!==null?X.y:0;b.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,Ne,Te,Z,Ae),ce.unbindTexture()};const gd=U.createFramebuffer(),_d=U.createFramebuffer();this.copyTextureToTexture=function(E,X,j=null,Y=null,Z=0,Ae=0){let Ne,Te,Be,ke,tt,st,Ge,vt,kt;const Dt=E.isCompressedTexture?E.mipmaps[Ae]:E.image;if(j!==null)Ne=j.max.x-j.min.x,Te=j.max.y-j.min.y,Be=j.isBox3?j.max.z-j.min.z:1,ke=j.min.x,tt=j.min.y,st=j.isBox3?j.min.z:0;else{const Gt=Math.pow(2,-Z);Ne=Math.floor(Dt.width*Gt),Te=Math.floor(Dt.height*Gt),E.isDataArrayTexture?Be=Dt.depth:E.isData3DTexture?Be=Math.floor(Dt.depth*Gt):Be=1,ke=0,tt=0,st=0}Y!==null?(Ge=Y.x,vt=Y.y,kt=Y.z):(Ge=0,vt=0,kt=0);const yt=H.convert(X.format),nn=H.convert(X.type);let De;X.isData3DTexture?(b.setTexture3D(X,0),De=U.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(b.setTexture2DArray(X,0),De=U.TEXTURE_2D_ARRAY):(b.setTexture2D(X,0),De=U.TEXTURE_2D),ce.activeTexture(U.TEXTURE0),ce.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),ce.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),ce.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment);const gn=ce.getParameter(U.UNPACK_ROW_LENGTH),ht=ce.getParameter(U.UNPACK_IMAGE_HEIGHT),yn=ce.getParameter(U.UNPACK_SKIP_PIXELS),Gn=ce.getParameter(U.UNPACK_SKIP_ROWS),Si=ce.getParameter(U.UNPACK_SKIP_IMAGES);ce.pixelStorei(U.UNPACK_ROW_LENGTH,Dt.width),ce.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Dt.height),ce.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),ce.pixelStorei(U.UNPACK_SKIP_ROWS,tt),ce.pixelStorei(U.UNPACK_SKIP_IMAGES,st);const ss=E.isDataArrayTexture||E.isData3DTexture,Mt=X.isDataArrayTexture||X.isData3DTexture;if(E.isDepthTexture){const Gt=R.get(E),yi=R.get(X),wt=R.get(Gt.__renderTarget),Mi=R.get(yi.__renderTarget);ce.bindFramebuffer(U.READ_FRAMEBUFFER,wt.__webglFramebuffer),ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let rs=0;rs<Be;rs++)ss&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,R.get(E).__webglTexture,Z,st+rs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,R.get(X).__webglTexture,Ae,kt+rs)),U.blitFramebuffer(ke,tt,Ne,Te,Ge,vt,Ne,Te,U.DEPTH_BUFFER_BIT,U.NEAREST);ce.bindFramebuffer(U.READ_FRAMEBUFFER,null),ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Z!==0||E.isRenderTargetTexture||R.has(E)){const Gt=R.get(E),yi=R.get(X);ce.bindFramebuffer(U.READ_FRAMEBUFFER,gd),ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,_d);for(let wt=0;wt<Be;wt++)ss?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Gt.__webglTexture,Z,st+wt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Gt.__webglTexture,Z),Mt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yi.__webglTexture,Ae,kt+wt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yi.__webglTexture,Ae),Z!==0?U.blitFramebuffer(ke,tt,Ne,Te,Ge,vt,Ne,Te,U.COLOR_BUFFER_BIT,U.NEAREST):Mt?U.copyTexSubImage3D(De,Ae,Ge,vt,kt+wt,ke,tt,Ne,Te):U.copyTexSubImage2D(De,Ae,Ge,vt,ke,tt,Ne,Te);ce.bindFramebuffer(U.READ_FRAMEBUFFER,null),ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Mt?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(De,Ae,Ge,vt,kt,Ne,Te,Be,yt,nn,Dt.data):X.isCompressedArrayTexture?U.compressedTexSubImage3D(De,Ae,Ge,vt,kt,Ne,Te,Be,yt,Dt.data):U.texSubImage3D(De,Ae,Ge,vt,kt,Ne,Te,Be,yt,nn,Dt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ae,Ge,vt,Ne,Te,yt,nn,Dt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ae,Ge,vt,Dt.width,Dt.height,yt,Dt.data):U.texSubImage2D(U.TEXTURE_2D,Ae,Ge,vt,Ne,Te,yt,nn,Dt);ce.pixelStorei(U.UNPACK_ROW_LENGTH,gn),ce.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ht),ce.pixelStorei(U.UNPACK_SKIP_PIXELS,yn),ce.pixelStorei(U.UNPACK_SKIP_ROWS,Gn),ce.pixelStorei(U.UNPACK_SKIP_IMAGES,Si),Ae===0&&X.generateMipmaps&&U.generateMipmap(De),ce.unbindTexture()},this.initRenderTarget=function(E){R.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){W=0,z=0,N=null,ce.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}function Iu(i){for(const e of Object.values(i))e instanceof Kt&&e.dispose();i.dispose()}function yv(i){i.traverse(e=>{if(e instanceof D||e instanceof vh||e instanceof Jl){e.geometry?.dispose?.();const t=e.material;Array.isArray(t)?t.forEach(Iu):t&&Iu(t)}})}function Hh(i,e,t,n){const s=3*i-3*t+1,r=3*t-6*i,o=3*i,a=3*e-3*n+1,l=3*n-6*e,c=3*e,d=f=>((s*f+r)*f+o)*f,u=f=>((a*f+l)*f+c)*f,h=f=>(3*s*f+2*r)*f+o;return f=>{if(f<=0)return 0;if(f>=1)return 1;let p=f;for(let v=0;v<6;v+=1){const g=d(p)-f,m=h(p);if(Math.abs(g)<1e-5||m===0)break;p-=g/m}return u(Math.min(1,Math.max(0,p)))}}const Vh=Hh(.6,0,.25,1),Mv=Hh(.2,.6,.25,1);function bv(i,e,t){return i+(e-i)*t}function ac(i,e,t,n){return bv(i,e,1-Math.pow(.5,n/t))}function wv(){const i=[];function e(n){if(n.duration<=0&&!n.delay)return n.onUpdate(1),n.onComplete?.(),{cancel:()=>{}};const s={...n,elapsed:0,cancelled:!1};return i.push(s),{cancel:()=>{s.cancelled=!0}}}function t(n){for(let s=i.length-1;s>=0;s-=1){const r=i[s];if(r.cancelled){i.splice(s,1);continue}r.elapsed+=n;const o=r.elapsed-(r.delay??0);if(o<0)continue;const a=Math.min(1,o/r.duration);r.onUpdate((r.ease??Vh)(a)),a>=1&&(i.splice(s,1),r.onComplete?.())}}return{add:e,update:t,busy:()=>i.length>0}}const Ev=1200;function Tv(i){const e=new Set;let t=0,n=!1,s=!1,r=0,o=0,a=0,l=0,c=30;function d(h){if(!n)return;if(t=requestAnimationFrame(d),s){r=h;return}const f=h<l;if(!f&&c!==null&&h-o<1e3/c)return;o=h;const p=Math.min(.05,(h-r)/1e3);r=h,a+=p;for(const v of e)v(p,a);i(f)}function u(){l=performance.now()+Ev}return{add:h=>e.add(h),start:()=>{n||(n=!0,u(),r=performance.now(),t=requestAnimationFrame(d))},stop:()=>{n=!1,cancelAnimationFrame(t)},pause:()=>{s=!0},resume:()=>{s=!1,u(),r=performance.now()},wake:u,setIdleFps:h=>{c=h}}}class Av extends dh{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Je;e.deleteAttribute("uv");const t=new Re({side:hn}),n=new Re,s=new rc(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new D(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new ar(e,n,6),a=new Ot;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new D(e,Ts(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new D(e,Ts(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const d=new D(e,Ts(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);const u=new D(e,Ts(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const h=new D(e,Ts(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const f=new D(e,Ts(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ts(i){return new h0({color:0,emissive:16777215,emissiveIntensity:i})}function Wh(i){const e=i.getContext("2d");if(!e)throw new Error("2D canvas context unavailable.");return{data:e.getImageData(0,0,i.width,i.height).data,width:i.width,rows:i.height}}function Xh(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e;const s=n.getContext("2d");if(!s)throw new Error("2D canvas context unavailable.");const r=s.createImageData(i,e);return t(r.data),s.putImageData(r,0,0),n}function jn(i,e=2){const{data:t,width:n,rows:s}=Wh(i),r=(o,a)=>t[((a+s)%s*n+(o+n)%n)*4]/255;return Xh(n,s,o=>{for(let a=0;a<s;a+=1)for(let l=0;l<n;l+=1){const c=(r(l+1,a)-r(l-1,a))*e,d=(r(l,a+1)-r(l,a-1))*e,u=1/Math.sqrt(c*c+d*d+1),h=(a*n+l)*4;o[h]=(-c*u*.5+.5)*255,o[h+1]=(d*u*.5+.5)*255,o[h+2]=(u*.5+.5)*255,o[h+3]=255}})}function $h(i,e,t){const{data:n,width:s,rows:r}=Wh(i);return Xh(s,r,o=>{for(let a=0;a<s*r;a+=1){const l=n[a*4]/255,c=Math.round((t-(t-e)*l)*255);o[a*4]=c,o[a*4+1]=c,o[a*4+2]=c,o[a*4+3]=255}})}function pn(i){const e=new tn(i);return e.colorSpace=hi,e.wrapS=ln,e.wrapT=ln,e.anisotropy=4,e}function Rv(i){let e=2166136261;for(let t=0;t<i.length;t+=1)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Cv(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Ze(i){return Cv(Rv(i))}function C(i,e,t){return e+i()*(t-e)}function Bn(i,e){return e[Math.min(e.length-1,Math.floor(i()*e.length))]}function Lu(i){return i*i*(3-2*i)}function Ao(i,e,t=e){const n=new Float32Array(e*t);for(let r=0;r<n.length;r+=1)n[r]=i();const s=(r,o)=>n[o%t*e+r%e];return(r,o)=>{const a=(r-Math.floor(r))*e,l=(o-Math.floor(o))*t,c=Math.floor(a),d=Math.floor(l),u=Lu(a-c),h=Lu(l-d),f=s(c,d)+(s(c+1,d)-s(c,d))*u,p=s(c,d+1)+(s(c+1,d+1)-s(c,d+1))*u;return f+(p-f)*h}}function Pv(i,e){const{cellsX:t,cellsY:n=t,octaves:s,gain:r=.5}=e,o=[];let a=1,l=0;for(let c=0;c<s;c+=1){const d=c%2===1,u=t<<c,h=n<<c;o.push({sample:d?Ao(i,h,u):Ao(i,u,h),du:i(),dv:i(),transposed:d,weight:a}),l+=a,a*=r}return(c,d)=>{let u=0;for(const h of o)u+=h.transposed?h.sample(d+h.dv,c+h.du)*h.weight:h.sample(c+h.du,d+h.dv)*h.weight;return u/l}}function Iv(i,e,t,n){return(s,r)=>i(s+n*(e(s,r)-.5),r+n*(t(s,r)-.5))}function mn(i,e){const{warpStrength:t=.25,warpCellsX:n=2,warpCellsY:s=n,...r}=e,o=Pv(i,r);if(t===0)return o;const a=Ao(i,n,s),l=Ao(i,n,s);return Iv(o,a,l,t)}function zn(i,e,t=e,n=2){const s=document.createElement("canvas");s.width=e,s.height=t;const r=s.getContext("2d");if(!r)throw new Error("2D canvas context unavailable.");const o=r.createImageData(e,t),a=o.data;for(let l=0;l<t;l+=1)for(let c=0;c<e;c+=1){const d=.5+(i(c/e,l/t)-.5)*n,u=Math.max(0,Math.min(255,Math.round(d*255))),h=(l*e+c)*4;a[h]=u,a[h+1]=u,a[h+2]=u,a[h+3]=255}return r.putImageData(o,0,0),s}const Jt='"Source Serif 4", "Noto Serif SC", georgia, serif',ft='"IBM Plex Mono", menlo, monospace',Sn="#2a2118",Er="#4a3d2c",Wt="#7a6a4d",Du=2048;function bt(i,e,t){const n=Math.min(window.devicePixelRatio||1,2),s=document.createElement("canvas");s.width=Math.min(Du,Math.round(i*n)),s.height=Math.min(Du,Math.round(e*n));const r=s.getContext("2d");if(!r)throw new Error("2D canvas context unavailable.");r.scale(s.width/i,s.height/e),t(r,i,e);const o=new tn(s);return o.colorSpace=St,o.anisotropy=8,o}function Il(i){return/[⺀-鿿豈-﫿＀-￯　-〿]/.test(i)}function Lv(i){const e=[];for(const t of i.split(/\s+/)){if(!t)continue;let n="";for(const s of t)Il(s)?(n&&(e.push(n),n=""),e.push(s)):n+=s;n&&e.push(n)}return e}function ns(i,e,t){const n=[];let s="";for(const r of Lv(e)){const o=s!==""&&!Il(r[0])&&!Il(s[s.length-1]),a=s===""?r:s+(o?" ":"")+r;i.measureText(a).width>t&&s!==""?(n.push(s),s=r):s=a}return s&&n.push(s),n}function Sr(i,e,t,n,s,r,o=1/0){const a=ns(i,e,s),l=a.slice(0,o);a.length>o&&l.length>0&&(l[l.length-1]=`${l[l.length-1].replace(/[,，。.\s]+$/,"")}…`);let c=n;for(const d of l)i.fillText(d,t,c),c+=r;return c}function lc(i,e,t,n,s={}){const r=s.base??"#dccaa2",o=s.edge??"#b69a6a";if(i.save(),s.deckle){const a=Math.min(e,t)*.012,l=a*1.6;i.beginPath();const c=26,d=(u,h)=>{const f=u/c,p=(n()-.5)*l;return h===0?[a+f*(e-2*a),a+p]:h===1?[e-a+p,a+f*(t-2*a)]:h===2?[e-a-f*(e-2*a),t-a+p]:[a+p,t-a-f*(t-2*a)]};for(let u=0;u<4;u+=1)for(let h=0;h<=c;h+=1){const[f,p]=d(h,u);u===0&&h===0?i.moveTo(f,p):i.lineTo(f,p)}i.closePath(),i.clip()}i.fillStyle=r,i.fillRect(0,0,e,t),Rt(i,a=>{const l=a.createRadialGradient(e/2,t/2,Math.min(e,t)*.25,e/2,t/2,Math.max(e,t)*.75);l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,Et(o,.55)),a.fillStyle=l,a.fillRect(0,0,e,t)});for(let a=0;a<160;a+=1){const l=C(n,.5,Math.min(e,t)*.02);i.fillStyle=Et(n()>.5?"#b9a679":"#fffbe9",C(n,.02,.07)),i.beginPath(),i.arc(n()*e,n()*t,l,0,Math.PI*2),i.fill()}i.restore()}function Rt(i,e){const t=document.createElement("canvas");t.width=i.canvas.width,t.height=i.canvas.height;const n=t.getContext("2d");if(!n)throw new Error("2D canvas context unavailable.");n.setTransform(i.getTransform()),e(n),i.save(),i.setTransform(1,0,0,1,0,0),i.filter="blur(1.2px)",i.drawImage(t,0,0),i.restore()}function Et(i,e){const t=i.replace("#",""),n=parseInt(t.slice(0,2),16),s=parseInt(t.slice(2,4),16),r=parseInt(t.slice(4,6),16);return`rgba(${n},${s},${r},${e})`}function cc(i=64,e="255,210,150"){const t=document.createElement("canvas");t.width=i,t.height=i;const n=t.getContext("2d");if(!n)throw new Error("2D canvas context unavailable.");const s=n.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return s.addColorStop(0,`rgba(${e},0.85)`),s.addColorStop(.4,`rgba(${e},0.25)`),s.addColorStop(1,`rgba(${e},0)`),n.fillStyle=s,n.fillRect(0,0,i,i),t}function Dv(i,e,t,n,s,r,o,a="rgba(42,33,24,0.34)"){i.fillStyle=a;let l=n;for(;l<r;){const c=e()<.14,d=c?s*C(e,.4,.8):s*C(e,.93,1);i.fillRect(t,l,d,o*.32),l+=o*(c?1.7:1)}}const ni="#808080",Nt={plaster:{base:"#6b5238"},velvet:{base:"#5e2f25"},grime:"#1a120a",wear:"#e8d8b8"};function Uv(i){return[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)]}function Xt(i,e,t=i){const n=document.createElement("canvas");n.width=i,n.height=t;const s=n.getContext("2d");if(!s)throw new Error("2D canvas context unavailable.");return s.fillStyle=e,s.fillRect(0,0,i,t),{canvas:n,ctx:s}}function Qn(i,e,t,n,s,r){const o=i.createRadialGradient(e,t,n*.05,e,t,n);o.addColorStop(0,`rgba(${s},${r})`),o.addColorStop(1,`rgba(${s},0)`),i.fillStyle=o,i.fillRect(e-n,t-n,n*2,n*2)}function is(i,e,t,n){const s=t.canvas.width/t.canvas.height,r=mn(i,{cellsX:s>=1?Math.round(4*s):4,cellsY:s>=1?4:Math.round(4/s),octaves:4,warpStrength:.3}),o=zn(r,s>=1?Math.min(512,Math.round(256*s)):256,s>=1?256:Math.min(512,Math.round(256/s))),a=(l,c,d)=>{l.globalCompositeOperation=c,l.globalAlpha=d,l.drawImage(o,0,0,l.canvas.width,l.canvas.height),l.globalCompositeOperation="source-over",l.globalAlpha=1};return e&&a(e.ctx,"overlay",n.tone??0),a(t.ctx,"source-over",n.swell),r}function qh(i,e,t){const{from:n,length:s,lineWidth:r,alpha:o,step:a}=e;return(l,c)=>{const d=l.canvas.width;for(let u=0;u<s-a;u+=a){const h=u/s,f=Math.min(1,h/.15,(1-h)/.15),p=.35+1.3*i((n+u)/d,t(n+u)/d+.37);l.strokeStyle=Et(c,Math.min(1,o*f*p)),l.lineWidth=r*(.6+.4*p),l.beginPath(),l.moveTo(n+u,t(n+u)),l.lineTo(n+u+a,t(n+u+a)),l.stroke()}}}function uc(i,e,t){const n=Math.ceil(e.canvas.width/2),s=Math.ceil(e.canvas.height/2),r=Xt(n,ni,s);r.ctx.drawImage(e.canvas,0,0,n,s);const o=r.ctx.getImageData(0,0,n,s).data,a=[[t.grime??0,Nt.grime,"multiply",c=>(128-c)/48],[t.wear??0,Nt.wear,"source-over",c=>(c-128)/48]],l=Xt(n,"#000000",s);for(const[c,d,u,h]of a){if(c===0)continue;const[f,p,v]=Uv(d),g=l.ctx.createImageData(n,s);for(let m=0;m<o.length;m+=4){const _=Math.min(1,Math.max(0,h(o[m])));g.data[m]=f,g.data[m+1]=p,g.data[m+2]=v,g.data[m+3]=Math.round(_*_*c*255)}l.ctx.putImageData(g,0,0),i.ctx.globalCompositeOperation=u,i.ctx.drawImage(l.canvas,0,0,i.canvas.width,i.canvas.height),i.ctx.globalCompositeOperation="source-over"}}function Nv(i,e,t){const{x:n,width:s,drop:r,alpha:o}=t,a=8,l=[],c=[];for(let f=0;f<=r;f+=a){const p=f/r,v=n+(e(n/i.canvas.width+.31,p)-.5)*s*1.6,g=Math.max(2,s/2*(1-.55*p)*(.7+.6*e(p,.71)));l.push([v-g,f]),c.push([v+g,f])}const d=()=>{i.beginPath(),i.moveTo(...l[0]);for(const f of l)i.lineTo(...f);for(let f=c.length-1;f>=0;f-=1)i.lineTo(...c[f]);i.closePath()},u=i.createLinearGradient(0,0,0,r);u.addColorStop(0,Et(Nt.grime,o*.55)),u.addColorStop(.7,Et(Nt.grime,o*.3)),u.addColorStop(1,Et(Nt.grime,0)),d(),i.fillStyle=u,i.fill();const h=i.createLinearGradient(0,0,0,r);h.addColorStop(0,Et(Nt.grime,o)),h.addColorStop(1,Et(Nt.grime,0)),d(),i.strokeStyle=h,i.lineWidth=2.5,i.stroke()}const Fv={base:"#41301f",dark:"#2c1f12",light:"#5b452c"};function Uu(i,e=Fv){const n=Xt(1024,e.base),s=Xt(1024,ni),r=is(i,n,s,{tone:.42,swell:.26});for(let l=0;l<220;l+=1){const c=i()*1024,d={amp:C(i,2,10),wave:C(i,200,560),phase:i()*Math.PI*2},u={amp:C(i,.6,3),wave:C(i,40,130),phase:i()*Math.PI*2},h=i()*1024,f=C(i,.3,1)*1024,p=C(i,.8,4.2),v=l%6===0?C(i,.1,.2):C(i,.025,.08),g=i()>.5,_=qh(r,{from:h,length:f,lineWidth:p,alpha:v,step:14},y=>c+Math.sin(d.phase+y/d.wave*Math.PI*2)*d.amp+Math.sin(u.phase+y/u.wave*Math.PI*2)*u.amp+(r(y/1024,c/1024)-.5)*26);_(n.ctx,g?e.dark:e.light),_(s.ctx,g?"#000000":"#ffffff")}for(let l=0;l<1300;l+=1){const c=i()*1024,d=i()*1024;if(r(c/1024,d/1024)<.42)continue;const u=i()>.35;n.ctx.fillStyle=Et(u?e.dark:e.light,C(i,.06,.14)),n.ctx.fillRect(c,d,C(i,2,5),1.2),s.ctx.fillStyle=`rgba(${u?"0,0,0":"255,255,255"},${C(i,.08,.16)})`,s.ctx.fillRect(c,d,C(i,2,5),1.2)}const o=Array.from({length:6},()=>({x:i()*1024,y:i()*1024,radius:C(i,12,42)})),a=(l,c,d,u)=>{const h=l.createRadialGradient(c.x,c.y,1,c.x,c.y,c.radius);h.addColorStop(0,Et(d,u)),h.addColorStop(.5,Et(d,u*.36)),h.addColorStop(1,Et(d,0)),l.fillStyle=h,l.beginPath(),l.ellipse(c.x,c.y,c.radius*1.7,c.radius,0,0,Math.PI*2),l.fill()};return Rt(n.ctx,l=>{for(const c of o)a(l,c,e.dark,.5)}),Rt(s.ctx,l=>{for(const c of o)a(l,c,"#000000",.4)}),uc(n,s,{grime:.05,wear:.08}),{albedo:n.canvas,height:s.canvas}}function Ov(i){const s=Xt(2048,"#5d4936"),r=Xt(2048,ni),o=is(i,s,r,{tone:.36,swell:.2});for(let a=0;a<20;a+=1){const l=a*102.4,c=C(i,-.06,.06);s.ctx.fillStyle=c>0?`rgba(214,178,138,${c})`:`rgba(20,10,4,${-c*1.5})`,s.ctx.fillRect(0,l,2048,102.4);const d=(l+102.4/2)/2048;for(let f=0;f<2048;f+=128){const p=o(f/2048+.13,d)-.5;s.ctx.fillStyle=p>0?`rgba(214,178,138,${p*.12})`:`rgba(24,14,7,${-p*.16})`,s.ctx.fillRect(f,l,128,102.4)}Rt(r.ctx,f=>{const p=f.createLinearGradient(0,l,0,l+102.4);p.addColorStop(0,"rgba(0,0,0,0.22)"),p.addColorStop(.5,"rgba(255,255,255,0.1)"),p.addColorStop(1,"rgba(0,0,0,0.22)"),f.fillStyle=p,f.fillRect(0,l,2048,102.4)});for(let f=0;f<40;f+=1){const p=l+C(i,5,97.4),v={amp:C(i,1.2,4.4),wave:C(i,320,1040),phase:i()*Math.PI*2},g=i()*2048,m=C(i,280,1520),_=C(i,1.2,4.4),y=C(i,.04,.1),x=i()>.4,M=qh(o,{from:g,length:m,lineWidth:_,alpha:y,step:26},T=>p+Math.sin(v.phase+T/v.wave*Math.PI*2)*v.amp);M(s.ctx,x?"#2c1f12":"#8a6c4a"),M(r.ctx,x?"#000000":"#ffffff")}for(let f=0;f<80;f+=1){const p=l+C(i,3,99.4),v=i()*2048,g=C(i,8,34),m=C(i,-1.5,1.5),_=C(i,.04,.09),y=i()>.45;s.ctx.strokeStyle=`rgba(${y?"30,20,10":"150,116,80"},${_})`,s.ctx.lineWidth=C(i,.8,1.5),s.ctx.beginPath(),s.ctx.moveTo(v,p),s.ctx.lineTo(v+g,p+m),s.ctx.stroke(),r.ctx.strokeStyle=`rgba(${y?"0,0,0":"255,255,255"},${_*1.4})`,r.ctx.lineWidth=1,r.ctx.beginPath(),r.ctx.moveTo(v,p),r.ctx.lineTo(v+g,p+m),r.ctx.stroke()}for(let f=0;f<3;f+=1){if(i()<.4)continue;const p=l+C(i,6,102.4-6),v=i()*2048,g=C(i,90,420),m=C(i,-3,3);s.ctx.strokeStyle=`rgba(220,190,150,${C(i,.04,.08)})`,s.ctx.lineWidth=1.2,s.ctx.beginPath(),s.ctx.moveTo(v,p),s.ctx.lineTo(v+g,p+m),s.ctx.stroke()}const u=i()>.7?2:1,h=[];for(let f=0;f<u;f+=1){const p=i()*2048,v=(g,m)=>{g.strokeStyle=m,g.lineWidth=4,g.beginPath(),g.moveTo(p,l+2),g.lineTo(p,l+102.4-2),g.stroke()};v(s.ctx,"rgba(18,10,5,0.85)"),v(r.ctx,"rgba(0,0,0,0.8)");for(const g of[-10,10])h.push({x:p+g,y:l+102.4/2+C(i,-102.4*.28,102.4*.28)})}Rt(s.ctx,f=>{for(const p of h)Qn(f,p.x,p.y,4.4,"12,8,5",.7)}),Rt(r.ctx,f=>{for(const p of h)Qn(f,p.x,p.y,4.4,"0,0,0",.5)});for(const[f,p,v]of[[s.ctx,"rgba(18,10,5,0.85)","rgba(214,178,138,0.1)"],[r.ctx,"rgba(0,0,0,0.8)","rgba(255,255,255,0.22)"]])f.strokeStyle=p,f.lineWidth=4,f.beginPath(),f.moveTo(0,l+102.4),f.lineTo(2048,l+102.4),f.stroke(),f.strokeStyle=v,f.lineWidth=2,f.beginPath(),f.moveTo(0,l+102.4-3),f.lineTo(2048,l+102.4-3),f.stroke()}return uc(s,r,{grime:.12,wear:.08}),{albedo:s.canvas,height:r.canvas}}function Bv(i){const n=Xt(2048,Nt.plaster.base,1024),s=Xt(2048,ni,1024);is(i,n,s,{tone:.2,swell:.18});const r=mn(i,{cellsX:16,cellsY:8,octaves:3,warpStrength:.15,warpCellsX:4}),o=Array.from({length:130},()=>({x:i()*2048,y:i()*1024,radius:C(i,100,380),light:i()>.5,alpha:C(i,.01,.028)})),a=Array.from({length:6},()=>({x:i()*2048,width:C(i,60,200),drop:C(i,140,450),alpha:C(i,.04,.07)}));Rt(n.ctx,l=>{for(const c of o)Qn(l,c.x,c.y,c.radius,c.light?"238,212,178":"26,16,8",c.alpha);for(const c of a)Nv(l,r,c)}),Rt(s.ctx,l=>{for(const c of o)Qn(l,c.x,c.y,c.radius,c.light?"255,255,255":"0,0,0",c.alpha*.8)});for(let l=0;l<60;l+=1){const c=i()*2048,d=i()*1024,u=C(i,140,480),h=i()*Math.PI*2,f=C(i,.5,1.4),p=C(i,10,30),v=C(i,.018,.04),g=i()>.5,m=i(),_=(y,x)=>{y.strokeStyle=x,y.lineWidth=p,y.lineCap="round",y.beginPath();for(let w=0;w<=f;w+=.05){const M=u*(1+.12*(r(m+w*.18,d/1024)-.5)),T=c+Math.cos(h+w)*M,S=d+Math.sin(h+w)*M;w===0?y.moveTo(T,S):y.lineTo(T,S)}y.stroke()};_(n.ctx,`rgba(${g?"235,210,180":"20,12,6"},${v})`),_(s.ctx,`rgba(${g?"255,255,255":"0,0,0"},${v*1.4})`)}for(let l=0;l<3;l+=1){const c=i()*2048,d=i()*1024*.35,u=C(i,1024*.25,1024*.5),h=C(i,30,90)*(i()>.5?1:-1),f=i(),p=(v,g)=>{v.strokeStyle=g,v.lineWidth=1.6,v.beginPath();for(let m=0;m<=u;m+=8){const _=m/u,y=c+h*_+(r(f+_*.9,.13)-.5)*70;m===0?v.moveTo(y,d):v.lineTo(y,d+m)}v.stroke()};p(n.ctx,"rgba(20,12,6,0.22)"),p(s.ctx,"rgba(0,0,0,0.38)")}for(let l=0;l<48e3;l+=1){const c=i()*2048,d=i()*1024,u=C(i,.05,.12),h=i()>.5;r(c/2048,d/1024)<.4||(n.ctx.fillStyle=`rgba(${h?"240,220,190":"10,6,3"},${u})`,n.ctx.fillRect(c,d,1.8,1.8),s.ctx.fillStyle=`rgba(${h?"255,255,255":"0,0,0"},${u*1.6})`,s.ctx.fillRect(c,d,1.8,1.8))}return uc(n,s,{grime:.06,wear:.05}),{albedo:n.canvas,height:s.canvas}}function zv(i,e){const s=Xt(256,Nt.velvet.base,1024),r=Xt(256,"#d9d9d9",1024),o=mn(i,{cellsX:4,cellsY:16,octaves:3,warpStrength:.2}),a=zn(o,128,512);s.ctx.globalCompositeOperation="overlay",s.ctx.globalAlpha=.15,s.ctx.drawImage(a,0,0,256,1024),s.ctx.globalCompositeOperation="source-over",s.ctx.globalAlpha=1;const l=new Float32Array(256);for(let u=0;u<256;u+=1)l[u]=(e((u+.5)/256)+1)/2;for(let u=0;u<256;u+=1){const h=l[u]*2-1;s.ctx.fillStyle=h<0?`rgba(10,4,2,${(.12*-h).toFixed(3)})`:`rgba(255,180,130,${(.05*h).toFixed(3)})`,s.ctx.fillRect(u,0,1,1024)}const c=r.ctx.createImageData(256,1024);for(let u=0;u<1024;u+=1){const h=1-u/1024,f=1-.25*h*h;for(let p=0;p<256;p+=1){const v=(o(p/256,u/1024)-.5)*.16,g=.95-.4*l[p]*f+v,m=Math.max(0,Math.min(255,Math.round(g*255))),_=(u*256+p)*4;c.data[_]=m,c.data[_+1]=m,c.data[_+2]=m,c.data[_+3]=255}}r.ctx.putImageData(c,0,0);for(let u=0;u<18;u+=1){const h=i()*256,f=i()*1024*.6,p=C(i,1024*.2,1024*.7),v=C(i,1,2.5),g=C(i,.04,.08),m=i()>.45,_=i(),y=(x,w,M)=>{x.strokeStyle=w,x.lineWidth=v,x.beginPath();for(let T=0;T<=p;T+=16){const S=h+(o(_,(f+T)/1024)-.5)*5;T===0?x.moveTo(S,f):x.lineTo(S,f+T)}x.globalAlpha=M,x.stroke(),x.globalAlpha=1};y(s.ctx,m?"#8a5a48":"#3a1c14",g),y(r.ctx,"#f2f2f2",g*.7)}const d=Array.from({length:5},()=>({x:i()*256,y:C(i,1024*.25,1024*.95),radius:C(i,30,80)}));Rt(s.ctx,u=>{for(const p of d)Qn(u,p.x,p.y,p.radius,"200,150,120",.05);const h=u.createLinearGradient(0,0,0,1024*.14);h.addColorStop(0,Et(Nt.wear,.08)),h.addColorStop(1,Et(Nt.wear,0)),u.fillStyle=h,u.fillRect(0,0,256,1024*.14);const f=u.createLinearGradient(0,1024*.92,0,1024);f.addColorStop(0,Et(Nt.grime,0)),f.addColorStop(1,Et(Nt.grime,.2)),u.fillStyle=f,u.fillRect(0,1024*.92,256,1024*.08)}),Rt(r.ctx,u=>{for(const h of d)Qn(u,h.x,h.y,h.radius,"70,70,70",.4)});for(let u=0;u<3e3;u+=1){const h=i()*256,f=i()*1024,p=i()>.5;s.ctx.fillStyle=`rgba(${p?"220,170,140":"12,5,3"},${C(i,.02,.045)})`,s.ctx.fillRect(h,f,1.4,1.4)}return{albedo:s.canvas,roughness:r.canvas}}function kv(i){const t=Xt(1024,"#6b2d22"),n=t.ctx,s=1024/2,r=(d,u,h)=>{n.strokeStyle=h,n.lineWidth=u,n.beginPath(),n.arc(s,s,s-d,0,Math.PI*2),n.stroke()};r(9,16,"#52251a"),r(39,30,"#8a4a35"),r(80,10,"#c9a86a"),r(110,4,"#c9a86a"),n.strokeStyle="rgba(201,168,106,0.8)",n.lineWidth=6;for(const d of[1,.62,.3])n.beginPath(),n.moveTo(s,s-300*d),n.lineTo(s+220*d,s),n.lineTo(s,s+300*d),n.lineTo(s-220*d,s),n.closePath(),n.stroke();n.globalAlpha=.4,n.globalCompositeOperation="overlay",n.drawImage(zn(mn(i,{cellsX:4,octaves:4}),256),0,0,1024,1024),n.globalCompositeOperation="source-over",n.globalAlpha=1;const o=Array.from({length:5},()=>({x:C(i,.2,.8),y:C(i,.25,.75),r:C(i,.04,.09)})),a=Array.from({length:7},()=>({x:i()*1024,y:i()*1024,r:C(i,80,180),alpha:C(i,.05,.13)}));Rt(n,d=>{for(const u of o)Qn(d,u.x*1024,u.y*1024,u.r*1024,"201,178,140",.35);for(const u of a)Qn(d,u.x,u.y,u.r,"226,196,150",u.alpha)});for(const d of o){const u=Math.round(d.r*600);for(let h=0;h<u;h+=1){const f=i()*Math.PI*2,p=d.r*1024*Math.sqrt(i())*.85,v=d.x*1024+Math.cos(f)*p,g=d.y*1024+Math.sin(f)*p*.7;n.strokeStyle=`rgba(214,190,150,${C(i,.05,.12)})`,n.lineWidth=1.4,n.beginPath(),n.moveTo(v-4,g),n.lineTo(v+4,g),n.stroke()}}for(let d=0;d<9e3;d+=1){const u=i()>.55;n.fillStyle=u?`rgba(220,180,130,${.02+i()*.05})`:`rgba(0,0,0,${.02+i()*.05})`,n.fillRect(i()*1024,i()*1024,1.7,1.7)}const l=Xt(512,ni);l.ctx.globalAlpha=.35,l.ctx.drawImage(zn(mn(i,{cellsX:3,octaves:3}),128),0,0,512,512),l.ctx.globalAlpha=1;for(let d=0;d<3200;d+=1){const u=i()*512,h=i()*512,f=i()*Math.PI*2,p=C(i,2,6);l.ctx.strokeStyle=`rgba(${i()>.5?"255,255,255":"0,0,0"},${C(i,.07,.13)})`,l.ctx.lineWidth=C(i,.8,1.5),l.ctx.beginPath(),l.ctx.moveTo(u,h),l.ctx.lineTo(u+Math.cos(f)*p,h+Math.sin(f)*p),l.ctx.stroke()}const c=Xt(512,"#fafafa");return Rt(c.ctx,d=>{for(const u of o)Qn(d,u.x*512,u.y*512,u.r*512*1.2,"200,200,200",.5)}),{albedo:t.canvas,pile:l.canvas,roughness:c.canvas}}function Gv(i){const t=Xt(256,"#f2f2f2");t.ctx.globalAlpha=.12,t.ctx.globalCompositeOperation="overlay",t.ctx.drawImage(zn(mn(i,{cellsX:4,octaves:3}),256),0,0,256,256),t.ctx.globalCompositeOperation="source-over",t.ctx.globalAlpha=1;for(let n=0;n<1100;n+=1){const s=i()>.5;t.ctx.fillStyle=s?`rgba(255,250,242,${C(i,.05,.1)})`:`rgba(26,18,12,${C(i,.04,.09)})`,t.ctx.fillRect(i()*256,i()*256,C(i,1,1.8),C(i,1,1.8))}return t.canvas}function Hv(i){const t=Xt(512,ni),n=is(i,null,t,{swell:.14});for(let s=0;s<1500;s+=1){const r=i()*512,o=i()*512,a=C(i,3,9)*(.7+.6*n(r/512,o/512));Qn(t.ctx,r,o,a,"255,255,255",C(i,.08,.16))}t.ctx.strokeStyle="rgba(0,0,0,0.12)",t.ctx.lineWidth=1;for(let s=0;s<240;s+=1){let r=i()*512,o=i()*512,a=i()*Math.PI*2;const l=C(i,6,22);t.ctx.beginPath(),t.ctx.moveTo(r,o);for(let c=0;c<l;c+=4)a+=(n(r/512,o/512)-.5)*.9,r+=Math.cos(a)*4,o+=Math.sin(a)*4,t.ctx.lineTo(r,o);t.ctx.stroke()}return t.canvas}function Vv(i){const t=Xt(256,ni);is(i,null,t,{swell:.4}),t.ctx.lineWidth=1;for(let n=0;n<70;n+=1){const s=i()*256,r=i()*256,o=i()*Math.PI*2,a=C(i,4,14);t.ctx.strokeStyle=`rgba(${i()>.5?"255,255,255":"0,0,0"},0.06)`,t.ctx.beginPath(),t.ctx.moveTo(s,r),t.ctx.lineTo(s+Math.cos(o)*a,r+Math.sin(o)*a),t.ctx.stroke()}return t.canvas}function Wv(i){const t=Xt(256,ni),n=is(i,null,t,{swell:.12});for(let s=0;s<240;s+=1){const r=i()*256,o=i()*256,a=C(i,30,160),l=C(i,.8,2),c=C(i,.05,.14),d=i()>.5,u=i();t.ctx.strokeStyle=`rgba(${d?"255,255,255":"0,0,0"},${c})`,t.ctx.lineWidth=l,t.ctx.beginPath();for(let h=0;h<=a;h+=12){const f=r+(n(u,(o+h)/256)-.5)*4;h===0?t.ctx.moveTo(f,o):t.ctx.lineTo(f,o+h)}t.ctx.stroke()}return t.canvas}function Xv(i){const t=Xt(256,ni),n=is(i,null,t,{swell:.2}),s={x:256/2,y:256*.42};for(let r=0;r<26;r+=1){const o=i()*Math.PI*2,a=C(i,256*.18,256*.52),l=C(i,1.5,4),c=C(i,.08,.18),d=C(i,-.5,.5);t.ctx.strokeStyle=`rgba(0,0,0,${c})`,t.ctx.lineWidth=l,t.ctx.beginPath();for(let u=8;u<=a;u+=10){const h=o+d*(u/a)+(n(r/26,u/a)-.5)*.3,f=s.x+Math.cos(h)*u,p=s.y+Math.sin(h)*u;u===8?t.ctx.moveTo(f,p):t.ctx.lineTo(f,p)}t.ctx.stroke()}return t.canvas}function Yh(i){const t=Xt(256,ni),n=mn(i,{cellsX:3,octaves:2});t.ctx.lineWidth=1;for(let s=2;s<256;s+=4){t.ctx.strokeStyle=`rgba(0,0,0,${C(i,.05,.09)})`,t.ctx.beginPath();for(let r=0;r<=256;r+=16){const o=s+(n(r/256,s/256)-.5)*1.6;r===0?t.ctx.moveTo(r,o):t.ctx.lineTo(r,o)}t.ctx.stroke()}t.ctx.strokeStyle="rgba(0,0,0,0.05)";for(let s=32;s<256;s+=64){const r=C(i,-4,4);t.ctx.beginPath(),t.ctx.moveTo(s-r/2,0),t.ctx.lineTo(s+r/2,256),t.ctx.stroke()}for(let s=0;s<600;s+=1){const r=i()*256,o=i()*256,a=i()*Math.PI*2,l=C(i,2,7);t.ctx.strokeStyle=`rgba(${i()>.5?"255,255,255":"0,0,0"},0.05)`,t.ctx.beginPath(),t.ctx.moveTo(r,o),t.ctx.lineTo(r+Math.cos(a)*l,o+Math.sin(a)*l),t.ctx.stroke()}return t.canvas}function mo(i,e){return i.wrapS=ln,i.wrapT=ln,i.repeat.set(...e.repeat??[1,1]),i.rotation=e.rotation??0,e.anisotropy&&(i.anisotropy=e.anisotropy),i}function Zh(i){const e=new tn(i);return e.colorSpace=St,e.anisotropy=4,e}function $v(i){const e=document.createElement("canvas");e.width=Math.ceil(i.width/2),e.height=Math.ceil(i.height/2);const t=e.getContext("2d");if(!t)throw new Error("2D canvas context unavailable.");return t.drawImage(i,0,0,e.width,e.height),e}function so(i,e,t){const n=t.polishHalf?$v(i.height):i.height;return{map:mo(Zh(i.albedo),e),normalMap:mo(pn(jn(i.height,2)),e),normalScale:new ee(t.normalScale,t.normalScale),...t.polish?{roughnessMap:mo(pn($h(n,t.polish[0],t.polish[1])),e),roughness:1}:{}}}function qv(i){const e=new Rl(i),t=new Av,n=e.fromScene(t,.04).texture;t.dispose(),e.dispose();const s=new Re({...so(Uu(Ze("walnut")),{repeat:[2,2]},{normalScale:.5,polish:[.6,.85]}),metalness:.05,envMapIntensity:.5}),r=new Re({...so(Uu(Ze("walnut-dark")),{repeat:[1.4,1.4],rotation:Math.PI/2},{normalScale:.5,polish:[.45,.7]}),color:new Fe("#9a7b58"),metalness:.08,envMapIntensity:.5}),o=new To({map:s.map,normalMap:s.normalMap,normalScale:new ee(.4,.4),roughnessMap:s.roughnessMap,roughness:1,color:new Fe("#9a7b58"),metalness:.05,clearcoat:.5,clearcoatRoughness:.35,envMapIntensity:.7}),a=new Re({...so(Ov(Ze("floorboards")),{repeat:[2,2],anisotropy:4},{normalScale:.7,polish:[.55,.9],polishHalf:!0}),metalness:.02,envMapIntensity:.32}),l=new Re({...so(Bv(Ze("plaster")),{repeat:[2,1]},{normalScale:.45,polish:[.8,.98]}),metalness:0,envMapIntensity:.22}),c=new Re({color:new Fe("#3a2b1c"),roughness:.95,metalness:0}),d=new Re({color:new Fe("#b08d57"),roughness:.32,metalness:.9,envMapIntensity:1.6}),u=pn(jn(Yh(Ze("laid-paper")),1.2)),h=Hv(Ze("leather")),f=pn(jn(h,1.6)),p=pn($h(h,.5,.78)),v=mo(Zh(Gv(Ze("leather-albedo"))),{repeat:[2,2]}),g=new Re({color:new Fe("#e9dcba"),roughness:.9,metalness:0,normalMap:u,normalScale:new ee(.18,.18),envMapIntensity:.5}),m=new Re({color:new Fe("#e8dcbf"),roughness:.92,metalness:0,normalMap:u,normalScale:new ee(.18,.18),envMapIntensity:.5}),_=new To({color:new Fe("#cfe0e8"),transparent:!0,opacity:.12,roughness:.06,metalness:0,envMapIntensity:1.4,depthWrite:!1}),y=new Map,x=T=>{let S=y.get(T);return S||(S=new Re({map:v,color:new Fe(T),roughnessMap:p,roughness:1,metalness:.04,normalMap:f,normalScale:new ee(.45,.45),envMapIntensity:.6}),y.set(T,S)),S},w=[s,r,o,a,l,c,d,g,m,_],M=T=>{T.map?.dispose(),T.normalMap?.dispose(),T.roughnessMap?.dispose(),T.dispose()};return{wood:s,woodDark:r,tabletop:o,floor:a,plaster:l,ceiling:c,brass:d,parchment:g,paper:m,glass:_,leather:x,envMap:n,dispose:()=>{for(const T of w)M(T);for(const T of y.values())M(T);n.dispose()}}}function Kh(i){return Math.min(window.devicePixelRatio,i==="full"?2:1.5)}function Yv(i){const e=new Sv({canvas:i,antialias:!0,powerPreference:"high-performance"});return e.outputColorSpace=St,e.toneMapping=Bl,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=or,e.shadowMap.autoUpdate=!1,e.setPixelRatio(Kh("full")),e.setSize(window.innerWidth,window.innerHeight),e}const Zv=new L(0,1,0);function Nu(i){const e=new ct().lookAt(i.position,i.target,Zv);return new en().setFromRotationMatrix(e)}function Kv(i){const e=new fn(45,window.innerWidth/window.innerHeight,.08,40),t=new L,n=new en;let s=!1,r=!1,o=0,a=null;function l(d){a?.cancel(),s=!1,o=0,t.copy(d.position),n.copy(Nu(d)),e.position.copy(t),e.quaternion.copy(n)}function c(d,u=1.5){if(r||u<=0)return l(d),Promise.resolve();a?.cancel();const h=e.position.clone(),f=e.quaternion.clone(),p=d.position.clone(),v=Nu(d);return s=!0,o=0,new Promise(g=>{a=i.add({duration:u,ease:Vh,onUpdate:m=>{e.position.lerpVectors(h,p,m),e.quaternion.slerpQuaternions(f,v,m)},onComplete:()=>{s=!1,t.copy(p),n.copy(v),g()}})})}return{camera:e,flyTo:c,cut:l,isMoving:()=>s,update:(d,u)=>{s||r||(o=Math.min(1,o+d/2.5),e.position.set(t.x+Math.sin(u*.31)*.016*o,t.y+Math.sin(u*.43)*.011*o,t.z+Math.cos(u*.23)*.013*o),e.quaternion.copy(n))},setReducedMotion:d=>{r=d}}}const Bs={width:12,depth:12,height:4.4,half:6},Vt=1.04,hc=new L(-1.05,2.82,5.68),Wn={about:{position:new L(1.5,2.4,1.85),target:new L(-.15,.95,-.1)},research:{position:new L(0,1.72,-1.55),target:new L(0,1.78,-5.9)},projects:{position:new L(1.55,1.72,0),target:new L(5.9,1.78,0)},cabinet:{position:new L(-.1,1.66,1.75),target:new L(-.3,1.56,5.9)},cv:{position:new L(-1.85,1.62,.3),target:new L(-5.9,1.4,.35)}},Jv={position:new L(3.1,1.78,4.7),target:new L(-.4,1.1,-.6)},En=["about","research","projects","cabinet","cv"];function jv(i){return En.includes(i)}const Qv=1.55,ex=Math.PI/4,tx=new L(0,1,0);function nx(i){const e=i.position.clone().sub(i.target).multiplyScalar(Qv).add(i.target);return e.x=Math.min(5.1,Math.max(-5.1,e.x)),e.z=Math.min(5.1,Math.max(-5.1,e.z)),e.y=Math.min(3.4,e.y),{position:e,target:i.target.clone()}}function ro(i,e,t){const n=e?nx(i):i;if(t===0)return n;const s=n.target.clone().sub(n.position).applyAxisAngle(tx,t*ex);return{position:n.position.clone(),target:n.position.clone().add(s)}}function Fu(){const i=window.location.hash.replace(/^#/,"");if(!i)return null;const[e,t]=i.split("/",2);return jv(e)?t?{section:e,key:t}:{section:e}:null}function ix(i){let e="about",t=null,n=!1,s=!1,r=0;function o(m){const _=t?`#${e}/${t}`:`#${e}`;window.location.hash!==_&&(m?window.history.pushState(null,"",_):window.history.replaceState(null,"",_))}function a(){t!==null&&(i.closeItem(),t=null)}function l(m,_,y=1.55){a(),s=!1,r=0;const x=m!==e;e=m,i.onSection(m),o(_&&x),i.director.flyTo(Wn[m],x?y:.9)}function c(m){if(n||!i.validateItem(m)||m.section===e&&m.key===t)return;a(),s=!1,r=0;const _=m.section!==e;_&&(e=m.section,i.onSection(e)),t=m.key,o(_);const y=i.openItem(m);y&&i.director.flyTo(y,1.15)}function d(){if(!n){if(t!==null){a(),o(!1),i.director.flyTo(Wn[e],1);return}e!=="about"&&l("about",!0)}}function u(){const m=Fu();if(!m){l("about",!1);return}if(m.key&&i.validateItem({section:m.section,key:m.key})){if(m.section!==e||t!==m.key){a(),e=m.section,i.onSection(e),t=m.key;const _=i.openItem({section:e,key:m.key});i.director.flyTo(_??Wn[e],1.3)}return}(m.section!==e||t!==null)&&l(m.section,!1)}function h(m=!0){n&&(n=!1,i.onIntroEnd(),i.onSection("about"),m&&o(!1))}function f(){const m=Fu();if(m){if(e=m.section,i.director.cut(Wn[e]),i.onSection(e),m.key&&i.validateItem({section:e,key:m.key})){t=m.key;const _=i.openItem({section:e,key:m.key});_&&i.director.flyTo(_,1)}return}n=!0,i.onIntroStart(),i.director.cut(Jv),i.director.flyTo(Wn.about,3.6).then(()=>h())}function p(){n&&i.director.flyTo(Wn.about,.8).then(()=>h())}function v(m){if(m.defaultPrevented||m.metaKey||m.ctrlKey||m.altKey)return;const _=m.target;if(!(_ instanceof HTMLElement&&_.closest("button, a, input, select, textarea")&&m.key!=="Escape")){if(n){(m.key==="Escape"||m.key==="Enter"||m.key===" ")&&p();return}if(m.key==="Escape")d();else if(m.key==="ArrowLeft"||m.key==="ArrowRight"){const y=m.key==="ArrowLeft"?-1:1,x=(En.indexOf(e)+y+En.length)%En.length;l(En[x],!0)}else if(m.key==="Enter"&&t===null){const y=i.firstItem(e);y&&c({section:e,key:y})}else(m.key==="s"||m.key==="S")&&t===null&&!s?(s=!0,i.director.flyTo(ro(Wn[e],s,r),1.15)):(m.key==="w"||m.key==="W")&&t===null&&s?(s=!1,i.director.flyTo(ro(Wn[e],s,r),1.15)):(m.key==="a"||m.key==="A")&&t===null?r>=1?l(En[(En.indexOf(e)-1+En.length)%En.length],!0):(r+=1,i.director.flyTo(ro(Wn[e],s,r),1.15)):(m.key==="d"||m.key==="D")&&t===null&&(r<=-1?l(En[(En.indexOf(e)+1)%En.length],!0):(r-=1,i.director.flyTo(ro(Wn[e],s,r),1.15)))}}function g(){n&&h(!1),u()}return window.addEventListener("keydown",v),window.addEventListener("hashchange",g),{start:f,navigate:m=>{n||l(m,!0)},open:c,close:d,skipIntro:p,current:()=>({section:e,item:t,intro:n}),dispose:()=>{window.removeEventListener("keydown",v),window.removeEventListener("hashchange",g)}}}const ba=new L(0,1,0);function sx(i,e){const t=new Map;let n=null,s=[];function r(){for(const u of s)u.cancel();s=[]}function o(u){let h=t.get(u);return h||(h={position:u.group.position.clone(),quaternion:u.group.quaternion.clone()},t.set(u,h)),h}function a(u,h){u.coverPivot.rotation[u.openAxis]=h}function l(u){const h=o(u);u.group.position.copy(h.position),u.group.quaternion.copy(h.quaternion),u.coverPivot.rotation.set(0,0,0),u.busy=!1}function c(u,h,f){r();for(const P of t.keys())P!==u&&P.busy&&l(P);n=u,u.busy=!0,u.hovered=!1,u.bakePage(f),o(u);const p=h.target.clone().sub(h.position).normalize(),v=ba.clone().cross(p).normalize(),g=h.position.clone().add(p.clone().multiplyScalar(.8)).add(v.multiplyScalar(.27)).add(new L(0,-.03,0)),m=p.clone().negate().add(ba.clone().multiplyScalar(.24)).normalize(),_=new L().crossVectors(m,ba).normalize(),y=new L().crossVectors(_,m).normalize(),x=new en().setFromRotationMatrix(new ct().makeBasis(m,y,_)).multiply(u.presentTwist),w=u.group.parent;if(!w)return;w.updateWorldMatrix(!0,!1);const M=w.worldToLocal(g.clone()),S=w.getWorldQuaternion(new en).invert().multiply(x),A=u.group.position.clone(),I=e();s.push(i.add({duration:I?0:.32,ease:Mv,onUpdate:P=>{u.group.position.z=A.z+P*u.slideOut},onComplete:()=>{if(n!==u)return;const P=u.group.position.clone(),B=u.group.quaternion.clone();s.push(i.add({duration:I?0:.95,onUpdate:z=>{u.group.position.lerpVectors(P,M,z),u.group.quaternion.slerpQuaternions(B,S,z)}}));const W=u.coverPivot.rotation[u.openAxis];s.push(i.add({duration:I?0:1.05,delay:I?0:.3,onUpdate:z=>{a(u,W+(u.openAngle-W)*z)}}))}}))}function d(){if(!n)return;const u=n,h=o(u);n=null,r();const f=e(),p=u.coverPivot.rotation[u.openAxis];s.push(i.add({duration:f?0:.45,onUpdate:m=>{a(u,p*(1-m))}}));const v=u.group.position.clone(),g=u.group.quaternion.clone();s.push(i.add({duration:f?0:.85,delay:f?0:.18,onUpdate:m=>{u.group.position.lerpVectors(v,h.position,m),u.group.quaternion.slerpQuaternions(g,h.quaternion,m)},onComplete:()=>{u.busy=!1}}))}return{open:c,close:d,isOpen:()=>n!==null}}function rx(i,e){const t=new Lh,n=new ee,s=[],r=new Map;let o=!0,a=!1,l=null,c=0,d=0,u=0,h=null;function f(x){n.x=x.clientX/window.innerWidth*2-1,n.y=-(x.clientY/window.innerHeight)*2+1,a=!0}function p(x){let w=x;for(;w;){const M=r.get(w);if(M)return M;w=w.parent}return null}function v(){t.setFromCamera(n,i);const x=t.intersectObjects(s.map(w=>w.object),!0);return x.length>0?p(x[0].object):null}function g(x){x!==l&&(l?.onHoverLeave?.(),l=x,l?.onHoverEnter?.(),e.style.cursor=l?"pointer":"")}function m(x){f(x)}function _(x){x.button===0&&(d=x.clientX,u=x.clientY)}function y(x){if(!o||x.button!==0||Math.hypot(x.clientX-d,x.clientY-u)>6)return;f(x);const M=v();M?.onClick?M.onClick():M||h?.()}return e.addEventListener("pointermove",m),e.addEventListener("pointerdown",_),e.addEventListener("pointerup",y),{add:x=>{s.push(x),r.set(x.object,x)},setEnabled:x=>{o=x,x||g(null)},update:()=>{c+=1,!(!o||!a||c%2!==0)&&(a=!1,g(v()))},onMiss:x=>{h=x},hovered:()=>l,dispose:()=>{e.removeEventListener("pointermove",m),e.removeEventListener("pointerdown",_),e.removeEventListener("pointerup",y),e.style.cursor=""}}}function Jh(i){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");if(!t)throw new Error("2D canvas context unavailable.");const n=t.createRadialGradient(64,64,8,64,64,64);return n.addColorStop(0,`rgba(0,0,0,${i})`),n.addColorStop(.55,`rgba(0,0,0,${i*.55})`),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),new tn(e)}function zs(i,e,t=.4,n=.005){const s=new D(new Bt(i,e),new Nn({map:Jh(t),transparent:!0,depthWrite:!1}));return s.rotation.x=-Math.PI/2,s.position.y=n,s.renderOrder=1,s.name="contact-shadow",s}function Ii(i,e=.005){const t=new Float32Array(i.length*12),n=new Float32Array(i.length*8),s=new Float32Array(i.length*16),r=[];i.forEach((l,c)=>{const d=l.width/2,u=l.depth/2;[[l.x-d,l.z-u,0,1],[l.x+d,l.z-u,1,1],[l.x+d,l.z+u,1,0],[l.x-d,l.z+u,0,0]].forEach(([p,v,g,m],_)=>{const y=c*4+_;t.set([p,0,v],y*3),n.set([g,m],y*2),s.set([0,0,0,l.opacity??.4],y*4)});const f=c*4;r.push(f,f+2,f+1,f,f+3,f+2)});const o=new Ct;o.setAttribute("position",new At(t,3)),o.setAttribute("uv",new At(n,2)),o.setAttribute("color",new At(s,4)),o.setIndex(r);const a=new D(o,new Nn({map:Jh(1),transparent:!0,depthWrite:!1,vertexColors:!0}));return a.position.y=e,a.renderOrder=1,a.name="contact-spots",a}const Gi=300;function ox(){const i=Ze("dust"),e=new Float32Array(Gi*3),t=new Float32Array(Gi),n=new Float32Array(Gi),s=new Float32Array(Gi),r=new Float32Array(Gi);for(let d=0;d<Gi;d+=1){const h=i()<.7?C(i,0,1.25):C(i,1.5,5.4),f=i()*Math.PI*2;t[d]=Math.cos(f)*h,n[d]=Math.sin(f)*h,e[d*3]=t[d],e[d*3+1]=C(i,1,3.2),e[d*3+2]=n[d],s[d]=C(i,.018,.05),r[d]=i()*Math.PI*2}const o=new Ct;o.setAttribute("position",new At(e,3));const a=new tn(cc(32,"255,222,170"));a.colorSpace=St,a.minFilter=Qt;const l=new _h({map:a,size:.03,transparent:!0,opacity:.45,blending:Is,depthWrite:!1,sizeAttenuation:!0}),c=new vh(o,l);return c.frustumCulled=!1,{points:c,update:(d,u)=>{const h=o.getAttribute("position"),f=h.array;for(let p=0;p<Gi;p+=1){let v=f[p*3+1]-s[p]*d*6;v<.9&&(v=3.3),f[p*3+1]=v,f[p*3]=t[p]+Math.sin(u*.32+r[p])*.07,f[p*3+2]=n[p]+Math.cos(u*.27+r[p])*.07}h.needsUpdate=!0}}}function ax(i){const e=new Ve,t=new D(new qe(.07,.08,.014,20),i.brass);t.position.y=.007,t.castShadow=!0,e.add(t);const n=new D(new qe(.012,.018,.05,12),i.brass);n.position.y=.038,e.add(n);const s=new D(new qe(.02,.022,.13,14),new Re({color:15984328,roughness:.85}));return s.position.y=.128,s.castShadow=!0,e.add(s),e.position.copy(hc),e}function lx(){const i=new tn(cc(64,"255,176,92"));i.colorSpace=St;const e=new Jl(new Kl({map:i,blending:Is,transparent:!0,opacity:.9,depthWrite:!1}));return e.position.copy(hc),e.position.y+=.225,e.scale.set(.075,.12,1),{sprite:e,update:(t,n)=>{const s=1+.16*Math.sin(n*9.1)+.1*Math.sin(n*15.7+2.1);e.scale.set(.075*s,.12*(2-s)*s,1),e.material.opacity=.75+.2*Math.sin(n*11.3+.8)}}}function cx(i){const e=Ze("rain"),t=.66,n=bt(768,512,(_,y,x)=>{const w=_.createLinearGradient(0,0,0,x);w.addColorStop(0,"#222d3e"),w.addColorStop(.45,"#3c4659"),w.addColorStop(t,"#5d5e66"),w.addColorStop(1,"#3a3a42"),_.fillStyle=w,_.fillRect(0,0,y,x);for(let S=0;S<14;S+=1){const A=e()*y,I=e()*x*.5,P=C(e,80,200),B=_.createRadialGradient(A,I,4,A,I,P),W=e()>.4?"16,20,30":"90,96,110";B.addColorStop(0,`rgba(${W},${C(e,.08,.2)})`),B.addColorStop(1,`rgba(${W},0)`),_.fillStyle=B,_.fillRect(A-P,I-P*.5,P*2,P)}let M=-10;for(;M<y;){const S=C(e,50,110),A=C(e,.05,.13)*x,I=t*x-A;_.fillStyle="#2c3340",_.fillRect(M,I,S,x-I),e()>.5&&_.fillRect(M+C(e,6,S-14),I-C(e,6,14),C(e,5,9),16),M+=S+C(e,2,12)}for(let S=0;S<4;S+=1)_.fillStyle=`rgba(255,${Math.round(C(e,170,200))},110,${C(e,.3,.6)})`,_.fillRect(e()*y,(t-C(e,.015,.06))*x,C(e,3,5),C(e,4,6));const T=_.createLinearGradient(0,x*(t-.1),0,x);T.addColorStop(0,"rgba(140,148,165,0)"),T.addColorStop(1,"rgba(140,148,165,0.32)"),_.fillStyle=T,_.fillRect(0,0,y,x)}),s=bt(512,384,(_,y,x)=>{_.clearRect(0,0,y,x);const w=.62;let M=-10;for(;M<y;){const I=C(e,70,150),P=C(e,.18,.42)*x,B=w*x-P;_.fillStyle="#141821",_.fillRect(M,B,I,x-B),e()>.4&&_.fillRect(M+C(e,6,I-16),B-C(e,10,22),C(e,7,12),26),e()>.65&&(_.beginPath(),_.moveTo(M,B),_.lineTo(M+I/2,B-C(e,12,26)),_.lineTo(M+I,B),_.closePath(),_.fill()),M+=I+C(e,3,16)}for(let I=0;I<10;I+=1)_.fillStyle=`rgba(255,${Math.round(C(e,170,200))},110,${C(e,.3,.55)})`,_.fillRect(e()*y,(w+C(e,.02,.13))*x,C(e,2,3.5),C(e,2.5,4));const T=y*.68,S=x*.72;_.strokeStyle="#06080c",_.lineWidth=4,_.beginPath(),_.moveTo(T,x),_.lineTo(T,S+4),_.stroke(),_.strokeStyle="rgba(255,196,120,0.35)",_.lineWidth=1.2,_.beginPath(),_.moveTo(T-1.5,S+6),_.lineTo(T-1.5,S+46),_.stroke();const A=_.createRadialGradient(T,S,2,T,S,44);A.addColorStop(0,"rgba(255,206,130,0.6)"),A.addColorStop(.16,"rgba(255,196,120,0.32)"),A.addColorStop(1,"rgba(255,196,120,0)"),_.fillStyle=A,_.fillRect(T-44,S-44,88,88),_.fillStyle="#1a1410",_.fillRect(T-3.5,S-5,7,2.5),_.fillStyle="#ffdfa8",_.fillRect(T-2.5,S-2.5,5,5)});function r(_,y,x,w,M,T,S){const A=new D(new Bt(y,x),new Nn({map:_,transparent:S,depthWrite:!S}));return A.position.set(w,M,T),i.add(A),A}r(n,6,4,0,.2,-1.6,!1),r(s,3.6,2.4,0,-.35,-.7,!0);const o=.07;function a(_,y){const x=bt(384,1024,(w,M,T)=>{w.clearRect(0,0,M,T),w.lineCap="round";for(let S=0;S<_;S+=1){const A=e()*M,I=e()*T,P=C(e,60,140),B=e()<y,W=B?C(e,.04,.09):C(e,.05,.12);w.strokeStyle=B?`rgba(235,215,180,${W})`:`rgba(14,18,26,${W})`,w.lineWidth=C(e,.5,1);for(const z of[0,-T])for(const N of[0,-M,M])w.beginPath(),w.moveTo(A+N,I+z),w.lineTo(A+N+P*o,I+z+P),w.stroke()}});return x.wrapS=ln,x.wrapT=ln,x}const l=new ee(1.78,1.9);function c(_,y,x=1){const w=new D(new Bt(l.x,l.y),new Nn({map:_,transparent:!0,opacity:x,depthWrite:!1}));return w.position.z=y,i.add(w),w}const d=a(520,.18);d.repeat.set(1.8,1.5);const u=new D(new Bt(3.2,2.8),new Nn({map:d,transparent:!0,opacity:.55,depthWrite:!1}));u.position.set(0,0,-1.05),i.add(u);const h=c(a(380,.22),.008),f=bt(512,512,(_,y,x)=>{_.clearRect(0,0,y,x);for(let w=0;w<420;w+=1){const M=e()*y,T=x-Math.pow(e(),1.6)*x,S=C(e,.5,1.6);_.fillStyle=`rgba(20,26,36,${C(e,.08,.16)})`,_.beginPath(),_.arc(M,T+S*.5,S,0,Math.PI*2),_.fill(),_.fillStyle=`rgba(214,226,240,${C(e,.12,.26)})`,_.beginPath(),_.arc(M-S*.25,T-S*.3,S*.55,0,Math.PI*2),_.fill()}});c(f,.012);const p=bt(256,512,(_,y,x)=>{_.clearRect(0,0,y,x);for(let w=0;w<3;w+=1){const M=e()*y;_.strokeStyle="rgba(205,218,235,0.1)",_.lineWidth=C(e,.8,1.2);for(const T of[0,-x]){const S=[[M,T]];let A=0,I=M;for(;A<x;)A+=C(e,18,36),I+=C(e,-3,3),S.push([I,A+T]);_.beginPath(),_.moveTo(S[0][0],S[0][1]);for(let P=1;P<S.length-1;P+=1){const B=(S[P][0]+S[P+1][0])/2,W=(S[P][1]+S[P+1][1])/2;_.quadraticCurveTo(S[P][0],S[P][1],B,W)}_.stroke()}}});p.wrapS=ln,p.wrapT=ln;const v=c(p,.016,.9),g=o*(1024/384),m=(_,y,x,w)=>{const M=_.material.map;M&&(M.offset.y=(M.offset.y+y*x)%1,M.offset.x=(M.offset.x-y*x*w)%1)};return{update:_=>{m(u,.5,_,g),m(h,.95,_,g),m(v,.011,_,0)}}}function ux(){const i=new Ve,e=new Re({color:2564380,roughness:1,metalness:0}),t=new D(new dn(.16,20,16),e);t.scale.set(1,.6,.82),t.position.y=.095,i.add(t);const n=new D(new dn(.082,16,12),e);n.position.set(.13,.12,.05),n.castShadow=!0,i.add(n);const s=new D(new dn(.055,12,10),e);s.position.set(.08,.1,.03),i.add(s);const r=new mr(.024,.045,12),o=new D(r,e);o.position.set(.11,.1725,.085),o.rotation.z=-.15,i.add(o);const a=new D(r,e);a.position.set(.175,.1725,.03),a.rotation.z=.15,i.add(a);const l=new D(new Tt(.11,.02,8,18,3.8),e);return l.rotation.x=-Math.PI/2,l.position.set(-.08,.02,.05),i.add(l),{group:i,update:(c,d)=>{t.scale.y=.6*(1+.045*Math.sin(d*1.6));const u=Math.pow(Math.max(0,Math.sin(d*.43)),64)*.3;o.rotation.x=u}}}function hx(i,e){const t=new Ve;t.name="atmosphere";let n=!1;const s=ox();t.add(s.points),t.add(ax(i));const r=lx();t.add(r.sprite);const o=cx(e),a=ux();a.group.position.set(1.62,.014,1.32),a.group.rotation.y=-.7;const l=zs(.75,.6,.5,.006);return l.position.x=-.04,l.position.z=.03,a.group.add(l),t.add(a.group),{group:t,update:(c,d)=>{n||(s.update(c,d),r.update(c,d),o.update(c),a.update(c,d))},setReducedMotion:c=>{n=c}}}function jh(i,e=.5){const t=new tn(cc());t.colorSpace=St;const n=new Jl(new Kl({map:t,blending:Is,transparent:!0,opacity:e,depthWrite:!1}));return n.scale.setScalar(i),n}function dx(i){const e=new Ve,t=new D(new qe(.012,.012,Bs.height-3.16,8),i.brass);t.position.y=(Bs.height+3.16)/2,e.add(t);const n=new D(new mr(.34,.26,24,1,!0),i.brass);n.position.y=3.28,n.material=i.brass,e.add(n);const s=new D(new dn(.05,16,12),new Nn({color:16767392}));s.position.y=3.18,e.add(s);const r=jh(.7,.65);r.position.y=3.18,e.add(r);const o=new x0(16761219,56,10,.58,.72,1.8);o.position.set(0,3.16,0),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.near=.4,o.shadow.bias=-5e-4,o.shadow.normalBias=.02,o.shadow.radius=2.5,o.target.position.set(0,Vt,0),e.add(o),e.add(o.target);const a=3.16-Vt,l=new D(new mr(1.1,a,36,1,!0),fx(.3));return l.position.y=Vt+a/2,e.add(l),{group:e,light:o}}function fx(i){return new On({uniforms:{uColor:{value:new Fe(16761219)},uGain:{value:i}},vertexShader:`
      varying float vAlong;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      void main() {
        vAlong = uv.y; // 0 at the cone base (table), 1 at the apex (lamp)
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorldPosition = world.xyz;
        vWorldNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uGain;
      varying float vAlong;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      void main() {
        vec3 toCamera = normalize(cameraPosition - vWorldPosition);
        float body = smoothstep(0.0, 0.6, abs(dot(normalize(vWorldNormal), toCamera)));
        float along = pow(vAlong, 1.35) * smoothstep(1.0, 0.92, vAlong);
        float nearFade = smoothstep(0.2, 1.1, length(cameraPosition - vWorldPosition));
        gl_FragColor = vec4(uColor, body * along * uGain * nearFade);
      }
    `,transparent:!0,blending:Is,depthWrite:!1})}function px(i,e,t,n){const s=new Ve;s.position.copy(e),s.rotation.y=t;const r=new D(new Je(.12,.26,.03),i.brass);s.add(r);const o=new D(new Je(.035,.035,.16),i.brass);o.position.set(0,.05,.09),s.add(o);const a=new D(new dn(.035,12,10),new Nn({color:16767392}));a.position.set(0,.08,.18),s.add(a);const l=jh(.42,.5);if(l.position.copy(a.position),s.add(l),n){const c=new rc(16757611,6,9,1.9);c.position.set(0,.1,.3),s.add(c)}return s}function mx(i){const e=new Ve;e.name="lighting";let t=!1;const n=new _0(15916992,2759182,.34);e.add(n);const s=dx(i);e.add(s.group);const r=Bs.half-.42;[[new L(-2.6,3.55,-r),0],[new L(2.6,3.55,-r),0],[new L(r,3.55,-2.6),-Math.PI/2],[new L(r,3.55,2.6),-Math.PI/2],[new L(-2.6,3.55,r),Math.PI],[new L(2.6,3.55,r),Math.PI],[new L(-r,3.55,-2.6),Math.PI/2],[new L(-r,3.55,2.6),Math.PI/2]].forEach(([d,u],h)=>{e.add(px(i,d,u,h%2===0))});const a=new rc(16751181,2.4,4,1.8);a.position.copy(hc).add(new L(0,.2,0)),e.add(a);const l=new M0(5994148,.55);l.position.set(-6,3.2,.4),l.target.position.set(0,1,0),l.castShadow=!0,l.shadow.mapSize.set(1024,1024),l.shadow.camera.left=-7,l.shadow.camera.right=7,l.shadow.camera.top=7,l.shadow.camera.bottom=-7,l.shadow.camera.near=.5,l.shadow.camera.far=16,l.shadow.bias=-8e-4,l.shadow.normalBias=.05,l.shadow.radius=3,e.add(l),e.add(l.target);const c=a.intensity;return{group:e,candleLight:a,update:(d,u)=>{t||(a.intensity=c*(1+.11*Math.sin(7.3*u)+.07*Math.sin(13.7*u+1.7)+.04*Math.sin(23.1*u+.4)))},setReducedMotion:d=>{t=d,d&&(a.intensity=c)}}}const er=new L;function bn(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;er.copy(e),er[n]=0,er.normalize();const c=.5*o/(o+a),d=1-er.angleTo(i)/l;return Math.sign(er[t])===1?d*c:a/(o+a)+c+c*(1-d)}class No extends Je{constructor(e=1,t=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new L,c=new L,d=new L(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,v=new L,g=.5/o;for(let m=0,_=0;m<u.length;m+=3,_+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[m+0]=d.x*Math.sign(l.x)+c.x*r,u[m+1]=d.y*Math.sign(l.y)+c.y*r,u[m+2]=d.z*Math.sign(l.z)+c.z*r,h[m+0]=c.x,h[m+1]=c.y,h[m+2]=c.z,Math.floor(m/p)){case 0:v.set(1,0,0),f[_+0]=bn(v,c,"z","y",r,n),f[_+1]=1-bn(v,c,"y","z",r,t);break;case 1:v.set(-1,0,0),f[_+0]=1-bn(v,c,"z","y",r,n),f[_+1]=1-bn(v,c,"y","z",r,t);break;case 2:v.set(0,1,0),f[_+0]=1-bn(v,c,"x","z",r,e),f[_+1]=bn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),f[_+0]=1-bn(v,c,"x","z",r,e),f[_+1]=1-bn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),f[_+0]=1-bn(v,c,"x","y",r,e),f[_+1]=1-bn(v,c,"y","x",r,t);break;case 5:v.set(0,0,-1),f[_+0]=bn(v,c,"x","y",r,e),f[_+1]=1-bn(v,c,"y","x",r,t);break}}static fromJSON(e){return new No(e.width,e.height,e.depth,e.segments,e.radius)}}function be(i,e,t,n=.004){return new No(i,e,t,2,n)}function wa(i,e,t){const n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)}function Yn(i,e,t,n,s,r={}){const o=Ze(`worn-panel:${s}`),a=Math.min(r.radius??.0025,Math.min(i,e,t)*.44),l=new No(i,e,t,r.segments??3,a),c=l.attributes.position,d=r.amplitude??C(o,65e-5,.00125),u=r.cornerCompression??C(o,.0011,.0021),h=o()*Math.PI*2,f=o()*Math.PI*2,p=C(o,2.2,4.1),v=C(o,2.4,4.4);for(let g=0;g<c.count;g+=1){let m=c.getX(g),_=c.getY(g),y=c.getZ(g),x,w,M,T;n==="xy"?(x=m,w=_,M=i/2,T=e/2):n==="xz"?(x=m,w=y,M=i/2,T=t/2):(x=_,w=y,M=e/2,T=t/2);const S=x/M,A=w/T,I=wa(.7,1,Math.abs(S)),P=wa(.7,1,Math.abs(A)),B=I*P,W=r.protectNegativeZ?.2+.8*wa(-1,-.52,y/(t/2)):1,z=(Math.sin(A*Math.PI*p+h)*.68+Math.sin(A*Math.PI*(p*.47)-f)*.32)*d,N=(Math.sin(S*Math.PI*v+f)*.7+Math.sin(S*Math.PI*(v*.53)+h)*.3)*d,F=B*u;x+=Math.sign(x||1)*(I*z*W-F),w+=Math.sign(w||1)*(P*N*W-F),n==="xy"?(m=x,_=w):n==="xz"?(m=x,y=w):(_=x,y=w),c.setXYZ(g,m,_,y)}return c.needsUpdate=!0,l.computeVertexNormals(),l.computeBoundingBox(),l.computeBoundingSphere(),l}function yr(i,e,t){const n=i.attributes.uv;for(let s=0;s<n.count;s+=1)n.setXY(s,n.getX(s)+e,n.getY(s)+t);return i}function Ea(i,e,t,n){const s=new Je(i,e,t);s.clearGroups();let r=0,o=0,a=n[0];for(const l of n)l!==a&&(s.addGroup(r,o,a),r+=o,o=0,a=l),o+=6;return s.addGroup(r,o,a),s}function Ta(i){const[e,t]=i.size??[256,128],n=document.createElement("canvas");n.width=e,n.height=t;const s=n.getContext("2d");if(!s)throw new Error("2D canvas context unavailable.");s.fillStyle="#ffffff",s.fillRect(0,0,e,t),s.globalCompositeOperation="multiply";const r=h=>{const f=Math.round(255*(1-h));return`rgb(${f},${f},${f})`},o=(h,f,p,v,g)=>{const m=s.createLinearGradient(h,f,p,v);return m.addColorStop(0,r(g)),m.addColorStop(1,"#ffffff"),m},{left:a,right:l,top:c,bottom:d}=i.edges??{};a&&(s.fillStyle=o(0,0,e*a.depth,0,a.strength)),a&&s.fillRect(0,0,e*a.depth,t),l&&(s.fillStyle=o(e,0,e*(1-l.depth),0,l.strength)),l&&s.fillRect(e*(1-l.depth),0,e*l.depth,t),c&&(s.fillStyle=o(0,0,0,t*c.depth,c.strength)),c&&s.fillRect(0,0,e,t*c.depth),d&&(s.fillStyle=o(0,t,0,t*(1-d.depth),d.strength)),d&&s.fillRect(0,t*(1-d.depth),e,t*d.depth);for(const h of i.bands??[]){const f=h.v*t,p=h.half*t,v=s.createLinearGradient(0,f-p,0,f+p);v.addColorStop(0,"#ffffff"),v.addColorStop(.5,r(h.strength)),v.addColorStop(1,"#ffffff"),s.fillStyle=v,s.fillRect(0,f-p,e,p*2)}const u=new tn(n);return u.wrapS=Ln,u.wrapT=Ln,u}function Ut(i,e,t,n,s=0,r=0,o=0,a=0){const l=a>0?be(i,e,t,a):new Je(i,e,t),c=new D(l,n);return c.position.set(s,r,o),c.castShadow=!0,c.receiveShadow=!0,c}function Ou(i){return bt(256,80,(e,t,n)=>{e.fillStyle="#8a6c3c",e.fillRect(0,0,t,n),e.strokeStyle="#5c4322",e.lineWidth=4,e.strokeRect(6,6,t-12,n-12),e.fillStyle="#2a1d0d",e.font=`600 26px ${ft}`,e.textAlign="center",e.textBaseline="middle",e.fillText(an.doorPlaqueTitle[i],t/2,n/2-8),e.font=`500 15px ${Jt}`,e.fillText(an.doorPlaqueSubtitle[i],t/2,n/2+20)})}function gx(i,e){const t=new Ve,n=i.wood;t.add(Ut(1.3,.12,.18,n,0,2.42,0)),t.add(Ut(.12,2.4,.18,n,-.65,1.16,0)),t.add(Ut(.12,2.4,.18,n,.65,1.16,0));const s=Ut(1.06,2.32,.07,i.woodDark,0,1.18,.01,.006);t.add(s);for(const[d,u]of[[1.78,.78],[.72,.95]]){t.add(Ut(.66,u-.14,.035,i.wood,0,d,.063,.012));for(const h of[d-u/2,d+u/2])t.add(Ut(.86,.045,.045,n,0,h,.075,.006));for(const h of[-.43,.43])t.add(Ut(.045,u-.045,.045,n,h,d,.075,.006))}const r=new D(new dn(.04,16,12),i.brass);r.position.set(-.4,1.12,.13),t.add(r);const o=new D(new qe(.012,.012,.07,12),i.brass);o.rotation.x=Math.PI/2,o.position.set(-.4,1.12,.098),t.add(o);const a=new D(new Tt(.055,.008,10,28),i.brass);a.position.set(-.4,1.12,.092),t.add(a);for(const d of[.48,1.18,1.88]){const u=new D(new qe(.016,.016,.15,12),i.brass);u.position.set(.57,d,.1),t.add(u);const h=new D(be(.11,.07,.012,.002),i.brass);h.position.set(.5,d,.094),t.add(h)}const l=new Re({map:Ou(e),roughness:.4,metalness:.7}),c=new D(new Je(.52,.16,.02),l);return c.name="door-plaque",c.position.set(0,2.62,.04),t.add(c),{group:t,setLang:d=>{l.map?.dispose(),l.map=Ou(d),l.needsUpdate=!0}}}const Qh=5,Ll=3.16,Dl=2.2,Bu=.014,Ci=160;function _x(i){const e=[3,5,8,13].map(d=>({k:d,amplitude:.002+i()*.003,phase:i()*Math.PI*2})),t=d=>1+e.reduce((u,h)=>u+h.amplitude*Math.sin(h.k*d+h.phase),0),n=[[.45,1],[.8,1],[.94,1],[.985,.9],[1,.45],[.992,.1]],s=n.length,r=1+s*Ci,o=new Float32Array(r*3),a=new Float32Array(r*2);o.set([0,Bu,0]),a.set([.5,.5]);for(let d=0;d<s;d+=1){const[u,h]=n[d];for(let f=0;f<Ci;f+=1){const p=f/Ci*Math.PI*2,v=u*t(p),g=Math.cos(p)*v*Ll,m=Math.sin(p)*v*Dl,_=1+d*Ci+f;o.set([g,h*Bu,m],_*3),a.set([g/(2*Ll)+.5,.5-m/(2*Dl)],_*2)}}const l=[];for(let d=0;d<Ci;d+=1){const u=(d+1)%Ci;l.push(0,1+u,1+d);for(let h=0;h<s-1;h+=1){const f=1+h*Ci,p=f+Ci;l.push(f+d,f+u,p+u,f+d,p+u,p+d)}}const c=new Ct;return c.setAttribute("position",new At(o,3)),c.setAttribute("uv",new At(a,2)),c.setIndex(l),c.computeVertexNormals(),c}function vx(){const i=document.createElement("canvas");i.width=256,i.height=256;const e=i.getContext("2d");if(!e)throw new Error("2D canvas context unavailable.");const t=e.createRadialGradient(128,128,0,128,128,128);t.addColorStop(.86,"rgba(0,0,0,0)"),t.addColorStop(.945,"rgba(0,0,0,0.32)"),t.addColorStop(.975,"rgba(0,0,0,0.2)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,256,256);const n=new D(new Bt(2*Ll*1.04,2*Dl*1.04),new Nn({map:new tn(i),transparent:!0,depthWrite:!1}));return n.rotation.x=-Math.PI/2,n.position.y=.0015,n.renderOrder=1,n.name="rug-under-shadow",n}function go(i){return Math.sin(i*Math.PI*2*Qh)*(.75+.25*Math.sin(i*9.7))}function xx(i,e,t){const n=Qh*10,s=4,r=.012,o=(n+1)*(s+1),a=new Float32Array(o*2*3),l=new Float32Array(o*2*2);for(let f=0;f<2;f+=1){const p=f===0?1:-1;for(let v=0;v<=s;v+=1){const g=(v/s-.5)*e,m=1-.25*(g/e+.5)**2;for(let _=0;_<=n;_+=1){const y=_/n,x=(y-.5)*i,w=go(y)*t*m,M=(go(y+.001)-go(y-.001))/.002/i*t*m,T=r/2/Math.hypot(M,1)*p,S=f*o+v*(n+1)+_;a.set([x-M*T,g,w+T],S*3),l.set([y,v/s],S*2)}}}const c=(f,p)=>f*(n+1)+p,d=(f,p)=>o+f*(n+1)+p,u=[];for(let f=0;f<s;f+=1)for(let p=0;p<n;p+=1)u.push(c(f,p),c(f,p+1),c(f+1,p+1),c(f,p),c(f+1,p+1),c(f+1,p)),u.push(d(f,p),d(f+1,p),d(f+1,p+1),d(f,p),d(f+1,p+1),d(f,p+1));for(let f=0;f<s;f+=1)u.push(c(f,0),c(f+1,0),d(f+1,0),c(f,0),d(f+1,0),d(f,0)),u.push(c(f,n),d(f,n),d(f+1,n),c(f,n),d(f+1,n),c(f+1,n));for(let f=0;f<n;f+=1)u.push(c(0,f),d(0,f),d(0,f+1),c(0,f),d(0,f+1),c(0,f+1)),u.push(c(s,f),c(s,f+1),d(s,f+1),c(s,f),d(s,f+1),d(s,f));const h=new Ct;return h.setAttribute("position",new At(a,3)),h.setAttribute("uv",new At(l,2)),h.setIndex(u),h.computeVertexNormals(),h}const Hi={y:2.04,w:1.84,h:1.96};function Sx(i,e){const t=new Gs;t.moveTo(-i/2,-e/2),t.lineTo(i/2,-e/2),t.lineTo(i/2,e/2),t.lineTo(-i/2,e/2),t.closePath();const n=Hi.y-e/2,s=new gr;s.moveTo(-1.84/2,n-Hi.h/2),s.lineTo(Hi.w/2,n-Hi.h/2),s.lineTo(Hi.w/2,n+Hi.h/2),s.lineTo(-1.84/2,n+Hi.h/2),s.closePath(),t.holes.push(s);const r=new nc(t),o=r.getAttribute("position"),a=r.getAttribute("uv");for(let l=0;l<o.count;l+=1)a.setXY(l,o.getX(l)/i+.5,o.getY(l)/e+.5);return r}function yx(i){const e=new Ve,t=i.wood;e.add(Ut(1.9,.12,.16,t,0,3.02,0,.008)),e.add(Ut(1.9,.14,.22,t,0,1.06,0,.012)),e.add(Ut(.12,1.91,.16,t,-.92,2.005,0,.008)),e.add(Ut(.12,1.91,.16,t,.92,2.005,0,.008)),e.add(Ut(.07,1.92,.1,t,0,2.05,0,.006)),e.add(Ut(1.78,.07,.09,t,0,2.05,0,.006)),e.add(Ut(1.78,.07,.09,t,0,2.53,0,.006)),e.add(Ut(1.78,.07,.09,t,0,1.57,0,.006));for(const[c,d,u,h]of[[1.84,.03,0,3.005],[1.84,.03,0,1.075],[.03,1.96,-.905,2.04],[.03,1.96,.905,2.04]])e.add(Ut(c,d,.13,i.woodDark,u,h,-.085));const n=new D(new Bt(1.78,1.9),new To({color:new Fe(10466500),transparent:!0,opacity:.12,roughness:.06,metalness:0,envMapIntensity:1.2,depthWrite:!1}));n.position.set(0,2.05,-.02),e.add(n);const s=zv(Ze("curtain-drape"),go),r=new tn(s.albedo);r.colorSpace=St,r.anisotropy=4;const o=new Re({map:r,roughnessMap:pn(s.roughness),roughness:1,metalness:0,envMapIntensity:.35,side:In}),a=xx(.46,2.3,.055);for(const c of[-1,1]){const d=new D(a,o);d.position.set(c*1.16,2,.14),d.rotation.y=c*.14,d.scale.x=c,d.castShadow=!0,e.add(d)}const l=new D(new qe(.018,.018,2.9,16),i.brass);return l.rotation.z=Math.PI/2,l.position.set(0,3.18,.12),e.add(l),{group:e,rainPane:n}}function Mx(i){const e=new Ve;for(const n of[-1,1]){const s=new D(yr(be(.055,3.7,.045,.008),.31*n,.17),i.woodDark);s.position.set(n*.26,1.85,0),s.castShadow=!0,e.add(s)}const t=new qe(.018,.018,.5,12);t.rotateZ(Math.PI/2);for(let n=0;n<9;n+=1){const s=new D(t,i.woodDark);s.position.set(0,.32+n*.38,0),s.castShadow=!0,e.add(s)}return e.rotation.x=-.16,e}function bx(i,e){const t=new Ve;t.name="room";const{width:n,depth:s,height:r,half:o}=Bs,a=[-3.2,0,3.2];i.floor.aoMap=Ta({size:[256,256],edges:{left:{depth:.04,strength:.4},right:{depth:.04,strength:.4},top:{depth:.04,strength:.4},bottom:{depth:.04,strength:.4}}});const l=new D(new Bt(n,s),i.floor);l.rotation.x=-Math.PI/2,l.receiveShadow=!0,t.add(l),i.ceiling.aoMap=Ta({size:[256,256],edges:{left:{depth:.03,strength:.55},right:{depth:.03,strength:.55},top:{depth:.03,strength:.55},bottom:{depth:.03,strength:.55}},bands:a.map(x=>({v:(x+o)/s,half:.021,strength:.35}))});const c=new D(new Bt(n,s),i.ceiling);c.rotation.x=Math.PI/2,c.position.y=r,t.add(c);for(const[x,w]of a.entries()){const M=Ut(n+.04,.2,.14,i.wood,0,r-.095,w,.012);yr(M.geometry,x*.37,x*.21),t.add(M)}i.plaster.aoMap=Ta({size:[512,128],edges:{left:{depth:.029,strength:.5},right:{depth:.029,strength:.5},top:{depth:.09,strength:.5},bottom:{depth:.04,strength:.3}}});const d=new Bt(n,r),u=[[d,0,r/2,-o,0],[d,o,r/2,0,-Math.PI/2],[d,0,r/2,o,Math.PI],[Sx(n,r),-o,r/2,0,Math.PI/2]];for(const[x,w,M,T,S]of u){const A=new D(x,i.plaster);A.position.set(w,M,T),A.rotation.y=S,A.receiveShadow=!0,t.add(A)}for(const x of[-1,1]){t.add(Ut(n,.105,.14,i.wood,0,r-.16,x*(o-.07),.012)),t.add(Ut(n,.05,.09,i.woodDark,0,r-.078,x*(o-.045),.009));const w=Ut(s-.16,.105,.14,i.wood,x*(o-.07),r-.16,0,.012);w.rotation.y=Math.PI/2,t.add(w);const M=Ut(s-.18,.05,.09,i.woodDark,x*(o-.045),r-.078,0,.009);M.rotation.y=Math.PI/2,t.add(M)}const h=kv(Ze("rug")),f=new tn(h.albedo);f.colorSpace=St,f.anisotropy=4;const p=pn(jn(h.pile,2.6));p.repeat.set(6,6);const v=new D(_x(Ze("rug-edge")),new To({map:f,normalMap:p,roughnessMap:pn(h.roughness),roughness:1,metalness:0,specularIntensity:.15,sheen:.4,sheenColor:new Fe(7551020),sheenRoughness:.9,envMapIntensity:.1}));v.receiveShadow=!0,t.add(v),t.add(vx());const g=gx(i,e);g.group.position.set(4.05,0,o-.1),g.group.rotation.y=Math.PI,t.add(g.group);const m=yx(i);m.group.position.set(-o+.1,0,0),m.group.rotation.y=Math.PI/2,t.add(m.group);const _=Mx(i);_.position.set(-3.35,-.004,-o+1),t.add(_);const y=zs(.85,.5,.3);y.position.set(-3.35,.005,-o+1.04),t.add(y);for(const[x,w,M,T]of[[n,0,-o+.014,0],[n,0,o-.014,0],[n-.054,o-.014,0,Math.PI/2],[n-.054,-o+.014,0,Math.PI/2]]){const S=Ut(x,.12,.026,i.woodDark,w,.06,M,.004);S.rotation.y=T,t.add(S)}return{group:t,doorGroup:g.group,rainPane:m.rainPane,setLang:g.setLang}}function ii(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ct;let c=0;for(let d=0;d<i.length;++d){const u=i[d];let h=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,d),c+=f}}if(t){let d=0;const u=[];for(let h=0;h<i.length;++h){const f=i[h].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+d);d+=i[h].attributes.position.count}l.setIndex(u)}for(const d in r){const u=zu(r[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,u)}for(const d in o){const u=o[d][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let h=0;h<u;++h){const f=[];for(let v=0;v<o[d].length;++v)f.push(o[d][v][h]);const p=zu(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(p)}}}return l}function zu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const d=i[c];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}const o=new e(r),a=new At(o,t,n);let l=0;for(let c=0;c<i.length;++c){const d=i[c];if(d.isInterleavedBufferAttribute){const u=l/t;for(let h=0,f=d.count;h<f;h++)for(let p=0;p<t;p++){const v=d.getComponent(h,p);a.setComponent(h+u,p,v)}}else o.set(d.array,l);l+=d.count*t}return s!==void 0&&(a.gpuType=s),a}const wx={conference:[7218224,8268344,6037290],workshop:[3099196,3626570,2703928],preprint:[7035452,7824970,6180659],systems:[3819092,3292489,4345948],ml:[7031339,8017466,6045476]},Ex=[4864558,5456186,4143667];function ed(i){return wx[i]??Ex}function td(i){return i==="published"||i==="complete"}const Pt=.23,rr=.055,tr=.008,Tx=-2.15;function Ax(i){return i.replace(/<[^>]+>/g,"")}const Rx=new en().setFromRotationMatrix(new ct().makeBasis(new L(0,0,1),new L(1,0,0),new L(0,1,0)));let Aa=null;function ku(){return Aa||(Aa=pn(jn(Vv(Ze("box-cloth")),1.6))),Aa}let As=null;function Cx(){if(!As){const i=Ze("box-cloth-albedo"),e=256,t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");if(!n)throw new Error("2D canvas context unavailable.");n.fillStyle="#f2f2f2",n.fillRect(0,0,e,e),n.globalAlpha=.14,n.globalCompositeOperation="overlay",n.drawImage(zn(mn(i,{cellsX:4,octaves:3}),256),0,0,e,e),n.globalCompositeOperation="source-over",n.globalAlpha=1;for(let s=0;s<900;s+=1){const r=i()>.5;n.fillStyle=r?`rgba(255,250,240,${C(i,.05,.1)})`:`rgba(20,14,8,${C(i,.04,.09)})`,n.fillRect(i()*e,i()*e,1.4,1.4)}As=new tn(t),As.colorSpace=St,As.wrapS=ln,As.wrapT=ln}return As}function Px(i,e,t){const s=rr,r=.0015,o=[Yn(i+r*2,.011,e+r*2,"xz",`${t}:lid-top`,{radius:.0028,amplitude:.001,cornerCompression:.0018,protectNegativeZ:!0}).translate(0,(s-.011)/2,0),Yn(i+r*2,s-.011+r,.011+r,"xy",`${t}:lid-front`,{radius:.0025,amplitude:9e-4,cornerCompression:.0015}).translate(0,-.011/2,(e-.011)/2),Yn(i+r*2,s-.011+r,.011+r,"xy",`${t}:lid-hinge-wall`,{radius:.0025,amplitude:35e-5,cornerCompression:7e-4}).translate(0,-.011/2,-.235/2),Yn(.011+r,s-.011+r,e-2*.011+r*2,"yz",`${t}:lid-right`,{radius:.0025,amplitude:85e-5,cornerCompression:.0014,protectNegativeZ:!0}).translate((i-.011)/2,-.011/2,0),Yn(.011+r,s-.011+r,e-2*.011+r*2,"yz",`${t}:lid-left`,{radius:.0025,amplitude:85e-5,cornerCompression:.0014,protectNegativeZ:!0}).translate(-(i-.011)/2,-.011/2,0)],a=ii(o);for(const l of o)l.dispose();if(!a)throw new Error("Lid shell merge failed.");return a}function oo(i,e,t,n,s){const r=Ze(`segmented-lip:${s}`),o=[],a=5,l=4;for(const d of[-1,1]){for(let u=0;u<a;u+=1){const h=i/a+.0014,f=new Je(h,n*C(r,.8,1.18),t*C(r,.86,1.12));f.rotateY(C(r,-.012,.012)),f.translate(-i/2+(u+.5)*(i/a)+C(r,-7e-4,7e-4),C(r,-25e-5,25e-5),d*(e/2-t/2)+C(r,-65e-5,65e-5)),o.push(f)}for(let u=0;u<l;u+=1){const h=e/l+.0014,f=new Je(t*C(r,.86,1.12),n*C(r,.8,1.18),h);f.rotateY(C(r,-.012,.012)),f.translate(d*(i/2-t/2)+C(r,-65e-5,65e-5),C(r,-25e-5,25e-5),-e/2+(u+.5)*(e/l)+C(r,-7e-4,7e-4)),o.push(f)}}const c=ii(o);for(const d of o)d.dispose();if(!c)throw new Error("Segmented archive lip merge failed.");return c}function Ix(i,e){return bt(416,512,(t,n,s)=>{const r=Ze(`box-front:${i.key}`);t.fillStyle=e,t.fillRect(0,0,n,s);for(let a=0;a<900;a+=1){const l=C(r,.02,.06);t.fillStyle=r()>.5?`rgba(255,245,225,${l})`:`rgba(10,6,2,${l})`,t.fillRect(r()*n,r()*s,1.6,1.6)}const o=[[0,0],[n,0],[0,s],[n,s]].map(([a,l])=>({cx:a,cy:l,radius:C(r,26,44)}));Rt(t,a=>{const l=a.createRadialGradient(n/2,s/2,s*.3,n/2,s/2,s*.74);l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,0.34)"),a.fillStyle=l,a.fillRect(0,0,n,s);for(const{cx:c,cy:d,radius:u}of o){const h=a.createRadialGradient(c,d,2,c,d,u);h.addColorStop(0,"rgba(228,216,192,0.5)"),h.addColorStop(1,"rgba(228,216,192,0)"),a.fillStyle=h,a.fillRect(c-50,d-50,100,100)}}),t.lineCap="round";for(let a=0;a<13;a+=1){const l=r()>.45,c=r()>.5?1:0,d=l?C(r,20,74):C(r,24,92),u=C(r,1,7);if(t.strokeStyle=`rgba(184,160,119,${C(r,.12,.3)})`,t.lineWidth=C(r,2.5,6.5),t.beginPath(),l){const h=C(r,10,n-d-10),f=c?s-u:u;t.moveTo(h,f+C(r,-1.4,1.4)),t.lineTo(h+d,f+C(r,-1.4,1.4))}else{const h=c?n-u:u,f=C(r,12,s-d-12);t.moveTo(h+C(r,-1.4,1.4),f),t.lineTo(h+C(r,-1.4,1.4),f+d)}t.stroke()}for(const[a,l]of[[0,0],[n,0],[0,s],[n,s]]){const c=a===0?1:-1,d=l===0?1:-1;t.fillStyle=`rgba(174,148,104,${C(r,.12,.24)})`,t.beginPath(),t.moveTo(a,l),t.lineTo(a+c*C(r,9,19),l+d*C(r,2,7)),t.lineTo(a+c*C(r,3,9),l+d*C(r,12,25)),t.closePath(),t.fill()}})}function Lx(i,e){return bt(320,190,(t,n,s)=>{t.fillStyle="#e2d6b4",t.fillRect(0,0,n,s),t.strokeStyle=e?"#b99752":"#8a7448",t.lineWidth=5,t.strokeRect(8,8,n-16,s-16),t.fillStyle=Wt,t.font=`500 16px ${ft}`,t.textAlign="center",t.textBaseline="alphabetic",t.fillText(`PROJECT · ${i.date.slice(0,4)}`,n/2,38),t.fillStyle=Sn,t.font=`600 24px ${Jt}`,ns(t,i.titlePlain.en,n-42).slice(0,3).forEach((o,a)=>{t.fillText(o,n/2,76+a*30)}),t.fillStyle=Wt,t.font=`500 14px ${ft}`,t.fillText(i.id,n/2,s-20)})}function Dx(i,e){return bt(480,360,(t,n,s)=>{const r=Ze(`box-contents:${i.key}`);t.fillStyle="#ded2b4",t.fillRect(0,0,n,s);for(let c=0;c<520;c+=1){const d=r()>.48;t.fillStyle=d?`rgba(255,249,226,${C(r,.025,.07)})`:`rgba(69,52,31,${C(r,.02,.055)})`,t.fillRect(r()*n,r()*s,1.4,1.4)}t.strokeStyle="rgba(73,55,33,0.48)",t.lineWidth=2,t.strokeRect(12,12,n-24,s-24),t.fillStyle=Wt,t.font=`600 13px ${ft}`,t.textAlign="left",t.fillText(e==="zh"?"项目研究简报":"PROJECT RESEARCH BRIEF",28,38),t.textAlign="right",t.fillText(i.id,n-28,38),t.fillStyle=Sn,t.font=`600 25px ${Jt}`,t.textAlign="left",t.textBaseline="alphabetic";const o=ns(t,i.titlePlain[e],n-56).slice(0,3);o.forEach((c,d)=>t.fillText(c,28,78+d*29));const a=78+(o.length-1)*29;t.fillStyle=Wt,t.font=`500 12px ${ft}`;const l=a+26;t.fillText(i.meta[e].toUpperCase(),28,l),t.strokeStyle="rgba(73,55,33,0.34)",t.beginPath(),t.moveTo(28,l+14),t.lineTo(n-28,l+14),t.stroke(),t.fillStyle=Er,t.font=`400 14px ${Jt}`,Sr(t,Ax(i.summaryHtml[e]),28,l+39,n-56,19,6),t.fillStyle="#9a8a64",t.font=`500 11px ${ft}`,t.textAlign="right",t.fillText(`${i.date} · FOL. ${i.id}`,n-28,s-25)})}function Ux(i,e){return bt(420,300,(t,n,s)=>{const r=Ze(`box-dossier:${i.key}`);t.fillStyle="#c7ad73",t.fillRect(0,0,n,s);for(let l=0;l<420;l+=1)t.fillStyle=`rgba(55,38,20,${C(r,.018,.055)})`,t.fillRect(r()*n,r()*s,C(r,.8,2.1),1);t.strokeStyle="rgba(69,45,25,0.58)",t.lineWidth=2,t.strokeRect(11,11,n-22,s-22),t.fillStyle=Wt,t.font=`600 12px ${ft}`,t.textAlign="left",t.fillText(e==="zh"?"证据卷宗 / 内部阅览":"EVIDENCE DOSSIER / INTERNAL",24,36),t.textAlign="right",t.fillText(i.date,n-24,36),t.fillStyle=Sn,t.font=`600 23px ${Jt}`,t.textAlign="left";const o=ns(t,i.titlePlain[e],n-48).slice(0,3);o.forEach((l,c)=>t.fillText(l,24,73+c*27));const a=92+o.length*27;t.strokeStyle="rgba(68,46,27,0.38)",t.beginPath(),t.moveTo(24,a),t.lineTo(n-24,a),t.stroke(),t.fillStyle=Wt,t.font=`500 11px ${ft}`,t.fillText(i.meta[e].toUpperCase(),24,a+23),Dv(t,r,24,a+38,n-48,Math.max(28,s-a-72),14),t.save(),t.translate(n-78,s-43),t.rotate(-.08),t.strokeStyle="rgba(111,51,32,0.76)",t.lineWidth=3,t.strokeRect(-54,-17,108,34),t.fillStyle="rgba(111,51,32,0.76)",t.font=`700 13px ${ft}`,t.textAlign="center",t.fillText(i.status.toUpperCase(),0,5),t.restore(),t.fillStyle=Wt,t.font=`500 11px ${ft}`,t.textAlign="left",t.fillText(i.id,24,s-29)})}function Nx(i,e){return bt(300,190,(t,n,s)=>{const r=Ze(`box-accession:${i.key}`);t.fillStyle="#e1d5b7",t.fillRect(0,0,n,s),t.strokeStyle="rgba(68,51,31,0.58)",t.lineWidth=2,t.strokeRect(8,8,n-16,s-16),t.fillStyle=Sn,t.font=`700 15px ${ft}`,t.textAlign="left",t.fillText(e==="zh"?"收录卡":"ACCESSION CARD",19,31),t.fillStyle=Wt,t.font=`500 10px ${ft}`,t.textAlign="right",t.fillText(i.id,n-18,30),[i.date,i.type.toUpperCase(),i.links[0]?.label[e]?.toUpperCase()??"REPORT",i.links[1]?.label[e]?.toUpperCase()??"SOURCE"].forEach((a,l)=>{const c=61+l*25;t.strokeStyle="rgba(68,51,31,0.38)",t.strokeRect(20,c-11,10,10),l<3&&(t.beginPath(),t.moveTo(22,c-6),t.lineTo(25,c-2),t.lineTo(31,c-12),t.stroke()),t.fillStyle=Er,t.font=`500 10px ${ft}`,t.textAlign="left",t.fillText(a,40,c-2),t.strokeStyle="rgba(68,51,31,0.2)",t.beginPath(),t.moveTo(40,c+4),t.lineTo(n-20-r()*25,c+4),t.stroke()}),t.fillStyle="rgba(111,51,32,0.7)",t.font=`700 10px ${ft}`,t.textAlign="right",t.fillText("CATALOGUED",n-18,s-18)})}function Fx(i){const e={x:22,y:18,w:316,h:214},t=bt(360,270,(n,s,r)=>{n.fillStyle=i.type==="systems"?"#34404a":"#4a3444",n.fillRect(0,0,s,r),n.fillStyle="#eee7d4",n.fillRect(e.x-7,e.y-7,e.w+14,e.h+14),n.fillStyle="#ded8c8",n.fillRect(e.x,e.y,e.w,e.h),n.strokeStyle="rgba(38,30,22,0.32)",n.strokeRect(e.x,e.y,e.w,e.h),n.fillStyle="#d4c7a6",n.font=`500 11px ${ft}`,n.textAlign="left",n.fillText(`FIG. A · ${i.id}`,18,r-14),n.textAlign="right",n.fillText(i.date,s-18,r-14)});if(i.image){const n=new Image;n.decoding="async",n.onload=()=>{const s=t.image,r=s.getContext("2d");if(!r)return;const o=Math.min(e.w/n.width,e.h/n.height);r.save(),r.setTransform(s.width/360,0,0,s.height/270,0,0),r.beginPath(),r.rect(e.x,e.y,e.w,e.h),r.clip(),r.fillStyle="#eee8d8",r.fillRect(e.x,e.y,e.w,e.h),r.filter="sepia(0.12) saturate(0.9) contrast(0.96)",r.drawImage(n,e.x+(e.w-n.width*o)/2,e.y+(e.h-n.height*o)/2,n.width*o,n.height*o),r.restore(),t.needsUpdate=!0},n.src=i.image.url}return t}function ao(i,e,t,n,s,r,o,a,l){const c=new Ve;c.position.copy(o),c.rotation.y=a;const d=new D(be(e,n,t,Math.min(.002,n*.42)),s);d.castShadow=!0,c.add(d);const u=new Bt(e-.005,t-.005);u.rotateX(l==="body"?-Math.PI/2:Math.PI/2),u.rotateY(Math.PI);const h=new D(u,r);return h.position.y=(l==="body"?1:-1)*(n/2+45e-5),c.add(h),i.add(c),c}function Ox(i,e){const t=Ze(e.key),n=C(t,.24,.3),s=C(t,.3,.36),r=new Fe(Bn(t,ed(e.type))).lerp(new Fe(6972764),.1),o=td(e.status),a=r.clone().lerp(new Fe(16769712),.55),l=new Re({map:Cx(),color:r,roughness:.86,metalness:0,normalMap:ku(),normalScale:new ee(.5,.5),emissive:a,emissiveIntensity:0}),c=new Re({map:Ix(e,`#${r.getHexString()}`),roughness:.82,metalness:0,normalMap:ku(),normalScale:new ee(.35,.35),emissive:a,emissiveIntensity:0}),d=new Re({color:14602932,roughness:.9,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),u=new Re({color:13086067,roughness:.92,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),h=new Re({color:14800311,roughness:.92,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),f=new Re({map:Fx(e),color:16777215,roughness:.82,metalness:0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),p=new Re({color:7299661,roughness:.94,metalness:0}),v=new Re({color:10453326,roughness:.93,metalness:0}),g=new Re({color:3812128,roughness:.88,metalness:0}),m=new Re({color:2630430,roughness:.42,metalness:.7}),_=new Re({color:8942679,roughness:.98,metalness:0,normalMap:i.paper.normalMap,normalScale:new ee(.22,.22)}),y=new Re({map:Lx(e,o),roughness:.84,metalness:0,emissive:a,emissiveIntensity:0}),x=new Ve;x.name=`box:${e.key}`;const w=s-.012,M=.01,T=.0012,S=new Ve;S.name="archive-body-shell",S.position.y=-(s-w)/2;const A=new D(Yn(n+T*2,M,Pt+T*2,"xz",`${e.key}:body-bottom`,{radius:.0028,amplitude:85e-5,cornerCompression:.0016}),l);A.position.y=-w/2+M/2,A.castShadow=!0,S.add(A);const I=w-M,P=new D(Yn(n+T*2,I+T,M+T,"xy",`${e.key}:body-front`,{radius:.0027,amplitude:.00105,cornerCompression:.002}),l);P.position.set(0,M/2,Pt/2-M/2),P.castShadow=!0,S.add(P);const B=new D(new Bt(n-.006,I-.006),c);B.position.set(0,M/2,Pt/2+4e-4),S.add(B);const W=new D(Yn(n+T*2,I+T,M+T,"xy",`${e.key}:body-back`,{radius:.0027,amplitude:85e-5,cornerCompression:.0017}),l);W.position.set(0,M/2,-Pt/2+M/2),W.castShadow=!0,S.add(W);for(const V of[-1,1]){const q=new D(Yn(M+T,I+T,Pt-M*2+T*2,"yz",`${e.key}:body-side:${V}`,{radius:.0027,amplitude:9e-4,cornerCompression:.0018}),l);q.position.set(V*(n/2-M/2),M/2,0),q.castShadow=!0,S.add(q)}x.add(S);const z=new D(Yn(n+.006,.018,Pt+.01,"xz",`${e.key}:bottom-shoe`,{radius:.003,amplitude:9e-4,cornerCompression:.0018}),l);z.position.y=-s/2+.009,z.castShadow=!0,x.add(z);const N=n*.72,F=s*.42,O=s*.13,G=new D(new Bt(N,F),y);G.position.set(0,O,Pt/2+.011),x.add(G);const J=N+.016,K=F+.016;for(const V of[O-K/2,O+K/2]){const q=new D(be(J,.009,.008,.002),i.brass);q.position.set(0,V,Pt/2+.016),x.add(q)}for(const V of[-J/2,J/2]){const q=new D(be(.009,K,.008,.002),i.brass);q.position.set(V,O,Pt/2+.016),x.add(q)}for(const V of[-1,1]){const q=new D(be(.009,.05,.009,.002),i.brass);q.position.set(V*(n/2-.009),-s/2+.03,Pt/2+.014),x.add(q);const Se=new D(be(.05,.009,.009,.002),i.brass);Se.position.set(V*(n/2-.03),-s/2+.009,Pt/2+.014),x.add(Se)}const Q=new D(be(n-.024,.006,Pt-.024,.002),g);Q.position.y=s/2-.031,x.add(Q);const oe=n*.72,Ue=Pt*.72;for(let V=0;V<3;V+=1){const q=new D(be(oe+.008-V*.002,.0024,Ue+.008-V*.003,.001),V===0?i.paper:i.parchment);q.position.set(-n*.055+(V-1)*.0022,s/2-.026+V*.003,(1-V)*.0018),q.rotation.y=(V-1)*.018,x.add(q)}const We=ao(x,oe,Ue,.003,i.parchment,d,new L(-n*.055,s/2-.017,0),-.012,"body");We.name="body-report-card";for(const[V,q]of[i.parchment,v,i.paper].entries()){const Se=new D(be(.038,.0024,.014,.001),q);Se.position.set(n*(.12+V*.12),s/2-.019+V*4e-4,-Pt*.36),x.add(Se)}const we=s/2-.012,te=new D(oo(n-.008,Pt-.008,.008,.0022,`${e.key}:body-core`),_);te.position.y=we+55e-5,x.add(te);const ge=new D(oo(n-.006,Pt-.006,.0043,.0012,`${e.key}:body-cloth-fold`),l);ge.position.y=we+.0017,x.add(ge);const de=new D(new Tt(.021,.0032,8,20,Math.PI),i.brass);de.rotation.z=Math.PI,de.position.set(0,-s*.18,Pt/2+.018),x.add(de);for(const V of[-.021,.021]){const q=new D(new qe(.0055,.0055,.01,10),i.brass);q.rotation.x=Math.PI/2,q.position.set(V,-s*.18,Pt/2+.014),x.add(q)}const se=new Ve;se.name="archive-lid-pivot",se.position.set(0,s/2-rr+.006,-.246/2);const Oe=n+tr*2,Ie=new D(Px(Oe,Pt+tr*2,e.key),l);Ie.name="archive-lid-shell",Ie.position.set(0,rr/2,(Pt+tr*2)/2),Ie.castShadow=!0,se.add(Ie);const Ke=Pt+tr*2,Xe=new D(oo(Oe-.006,Ke-.006,.0075,.0021,`${e.key}:lid-core`),_);Xe.position.set(0,-8e-4,Ke/2),se.add(Xe);const re=new D(oo(Oe-.004,Ke-.004,.004,.0011,`${e.key}:lid-cloth-fold`),l);re.position.set(0,55e-5,Ke/2),se.add(re);const he=new D(be(n-.028,.005,Pt-.028,.002),p);he.name="archive-lid-liner",he.position.set(0,rr-.012,Ke/2),se.add(he);for(const V of[.02,Ke-.02]){const q=new D(be(n-.038,.004,.006,.0015),g);q.position.set(0,.039,V),se.add(q)}for(const V of[-n/2+.02,n/2-.02]){const q=new D(be(.006,.004,Ke-.046,.0015),g);q.position.set(V,.039,Ke/2),se.add(q)}const ae=n-.05,Me=.174,k=new D(be(ae,.004,Me,.002),v);k.name="archive-lid-folder",k.position.set(-.003,.0365,.132),k.rotation.y=-.018,k.castShadow=!0,se.add(k);const fe=new D(be(.052,.0035,.022,.0015),v);fe.position.set(n*.23,.0338,.215),fe.rotation.y=-.018,se.add(fe);const U=n*.62,He=.122;for(let V=0;V<2;V+=1){const q=new D(be(U+.007-V*.002,.0022,He+.007-V*.002,.001),V===0?i.paper:i.parchment);q.position.set(-n*.08+(V-.5)*.003,.034-V*.0026,.131+V*.002),q.rotation.y=.026-V*.012,se.add(q)}const Le=ao(se,U,He,.003,v,u,new L(-n*.08,.029,.132),.022,"lid");Le.name="archive-lid-dossier";const $e=e.image?e.image.width/e.image.height:1.2,ce=$e>1.6?n*.43:n*.34,ot=$e>1.6?.061:.078,R=ao(se,ce,ot,.0032,i.parchment,f,new L(n*.24,.0245,.137),-.055,"lid");R.name="archive-lid-figure";const b=ao(se,n*.34,.058,.0028,i.paper,h,new L(-n*.25,.021,.082),-.064,"lid");b.name="archive-lid-accession";const $=[i.parchment,e.type==="systems"?p:v,i.paper];for(let V=0;V<$.length;V+=1){const q=new D(be(.039,.0028,.016,.001),$[V]);q.position.set(-n*.19+V*n*.19,.028-V*5e-4,.214-V*.002),se.add(q)}for(const V of[-1,1]){const q=new D(be(.011,.003,.064,.0015),g);q.position.set(V*n*.35,.0175,.078),q.rotation.y=V*-.38,se.add(q);for(const Se of[.052,.104]){const Ce=new D(new qe(.0028,.0028,.002,10),i.brass);Ce.position.set(V*n*.35,.0152,Se),se.add(Ce)}}const ne=new D(be(.022,.004,.012,.0015),m);ne.position.set(-n*.16,.0205,.185),ne.rotation.y=.03,se.add(ne);const le=new D(new Tt(.008,.0012,6,14,Math.PI),i.brass);le.rotation.x=Math.PI/2,le.position.set(-n*.16,.0175,.179),se.add(le);for(const V of[-n*.28,n*.28]){const q=new D(new qe(.005,.005,.045,10),i.brass);q.rotation.z=Math.PI/2,q.position.set(V,.008,.004),se.add(q);const Se=new D(be(.046,.003,.036,.0015),i.brass);Se.position.set(V,.035,.029),se.add(Se);for(const Ce of[-.013,.013]){const _e=new D(new qe(.0023,.0023,.0016,10),i.brass);_e.position.set(V+Ce,.0327,.031),se.add(_e)}}x.add(se);const pe=new D(new Je(.034,.018,.0016),i.parchment);pe.position.set(-n*.24,s/2-rr-.004,Pt/2+.004),pe.rotation.x=.18,x.add(pe);let me=null;return{dto:e,group:x,coverPivot:se,openAxis:"x",openAngle:Tx,presentTwist:Rx.clone(),slideOut:.26,width:n+tr*2,height:s,baseZ:0,hovered:!1,busy:!1,highlight:V=>{l.emissiveIntensity=.5*V,c.emissiveIntensity=.42*V,y.emissiveIntensity=.34*V},bakePage:V=>{me===V&&d.map&&u.map&&h.map||(me=V,d.map?.dispose(),d.map=Dx(e,V),d.color.set(16777215),d.needsUpdate=!0,u.map?.dispose(),u.map=Ux(e,V),u.color.set(16777215),u.needsUpdate=!0,h.map?.dispose(),h.map=Nx(e,V),h.color.set(16777215),h.needsUpdate=!0)}}}const Di=8,Xn=128,Zt={u0:.03,v0:.01,u1:.52,v1:.99},di={u0:.56,v0:.01,u1:.97,v1:.99},qi={u0:.56,v0:.01,u1:.97,v1:.46},Wi={u0:.56,v0:.54,u1:.97,v1:.99};function dc(i,e){const t=i.getAttribute("uv");for(let n=0;n<t.count/4;n+=1){const s=e(n);for(let r=0;r<4;r+=1){const o=n*4+r;t.setXY(o,(s.u0+t.getX(o)*(s.u1-s.u0))/Di,s.v0+t.getY(o)*(s.v1-s.v0))}}}function Bx(){const i={u0:di.u0,u1:di.u1,v0:.78,v1:.97},e=(s,r,o,a,l,c,d)=>{const u=new Je(s,r,o).translate(a,l,c);return dc(u,d),u},t=[e(.94,.84,.94,0,-.06,0,()=>di),e(.86,.64,.018,0,-.09,.479,s=>s===4?Zt:di),e(.97,.035,.97,0,-.4825,0,()=>di),e(1,.035,1,0,.4825,0,()=>i),e(1,.09,.025,0,.42,.4875,()=>i),e(1,.09,.025,0,.42,-.4875,()=>i),e(.025,.09,.95,.4875,.42,0,()=>i),e(.025,.09,.95,-.4875,.42,0,()=>i)],n=ii(t);for(const s of t)s.dispose();if(!n)throw new Error("Archive box unit merge failed.");return n}function zx(){const i=[{w:1,d:.96,x:0,z:0},{w:.96,d:1,x:.012,z:-.01},{w:.99,d:.97,x:-.009,z:.012},{w:.97,d:.99,x:.006,z:-.006}],e=i.map((n,s)=>{const r=new Je(n.w,.235,n.d).translate(n.x,-.36+s*.24,n.z),o=a=>({u0:a.u0,u1:a.u1,v0:a.v0+(a.v1-a.v0)*s/i.length,v1:a.v0+(a.v1-a.v0)*(s+1)/i.length});return dc(r,a=>o(a===4?Zt:di)),r}),t=ii(e);for(const n of e)n.dispose();if(!t)throw new Error("Paper bundle unit merge failed.");return t}function kx(){const s=(c,d,u,h,f,p,v,g)=>{const m=new Je(c,d,u).translate(h,f,p);dc(m,v);const _=new Float32Array(m.getAttribute("position").count).fill(g);return m.setAttribute("pageMask",new At(_,1)),m},r=()=>qi,o=[s(.09,1,.9,-.455,0,-.05,r,0),s(.09,1,.9,.455,0,-.05,r,0),s(.8200000000000001,.95,.86,0,-.025,-.030000000000000002,()=>Wi,1)],a=9;for(let c=0;c<a;c+=1){const u=(c+.5)/a-.5,h=.032*(1-(u/.5)**2),f={u0:Zt.u0+(Zt.u1-Zt.u0)*(c/a),u1:Zt.u0+(Zt.u1-Zt.u0)*((c+1)/a),v0:Zt.v0,v1:Zt.v1};o.push(s(1/a+.003,1,.1,u,0,.5-.1/2+h,p=>p===4?f:qi,0))}o.push(s(1,.026,.13,0,.487,.448,r,0),s(1,.026,.13,0,-.487,.448,r,0));const l=ii(o);for(const c of o)c.dispose();if(!l)throw new Error("Book unit merge failed.");return l}function nd(i,e={}){const{columns:t=Di,paperPages:n=!1}=e,s=new Re(i),r=`atlasColumn / ${t}.0`,o=!!i.normalMap;return s.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute float atlasColumn;${n?`
attribute float pageMask;`:""}`).replace("#include <uv_vertex>",`#include <uv_vertex>
	vMapUv.x += ${r};${o?`
	vNormalMapUv.x += ${r};`:""}`),n&&(a.vertexShader=a.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
	vColor.xyz = mix(vColor.xyz, vec3(1.0), pageMask);`))},s.customProgramCacheKey=()=>`atlasColumns:${t}:${o}:${n}`,s}function ui(i,e,t,n){let s=i;if(n.columns){const o=new Float32Array(t.length);t.forEach((a,l)=>{o[l]=a.column??0}),s=i.clone(),s.setAttribute("atlasColumn",new Ml(o,1))}const r=new ar(s,e,t.length);return t.forEach((o,a)=>{r.setMatrixAt(a,o.matrix),r.setColorAt(a,o.color)}),r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r.castShadow=!0,r.receiveShadow=!0,r.name=n.name,r}const Ki=[.28,.86,1.44,2.02,2.6,3.18],pt=.34,on=3.62,Mr=.04,Ro=.22;function Tn(i,e,t,n,s,r,o,a){const l=yr(be(t,n,s,.005),e(),e()),c=new D(l,i.wood);return c.position.set(r,o,a),c.castShadow=!0,c.receiveShadow=!0,c}function Gx(){return bt(256,512,(i,e,t)=>{i.fillStyle="#241a10",i.fillRect(0,0,e,t);const n=r=>t*(1-r/on),s=[...Ki.slice(1).map(r=>r-Mr),on];for(const r of s){const o=n(r),a=n(r-.16),l=i.createLinearGradient(0,o,0,a);l.addColorStop(0,"rgba(0,0,0,0.6)"),l.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=l,i.fillRect(0,o,e,a-o)}for(const[r,o]of[[0,.16],[1,.84]]){const a=i.createLinearGradient(r*e,0,o*e,0);a.addColorStop(0,"rgba(0,0,0,0.4)"),a.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=a,i.fillRect(Math.min(r,o)*e,0,Math.abs(o-r)*e,t)}})}let Ra=null,Ca=null;function Hx(){return Ra||(Ra=new Re({map:Gx(),roughness:.92,metalness:0})),Ra}function Vx(){if(!Ca){const i=bt(4,64,(e,t,n)=>{const s=e.createLinearGradient(0,0,0,n);s.addColorStop(0,"rgba(0,0,0,0.45)"),s.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=s,e.fillRect(0,0,t,n)});Ca=new Nn({map:i,transparent:!0,depthWrite:!1})}return Ca}function Wx(i){const t=pt-.04,n=[...Ki.slice(1).map(l=>l-Mr),on],s=[],r=[],o=[];n.forEach((l,c)=>{const d=-i/2+.06,u=i/2-.06;s.push(d,l-.07,t,u,l-.07,t,u,l,t,d,l,t),r.push(0,0,1,0,1,1,0,1);const h=c*4;o.push(h,h+1,h+2,h,h+2,h+3)});const a=new Ct;return a.setAttribute("position",new At(new Float32Array(s),3)),a.setAttribute("uv",new At(new Float32Array(r),2)),a.setIndex(o),new D(a,Vx())}function id(i,e,t){const n=new Ve;n.name="shelf-frame";const s=Ze(`${t}:frame`),r=new D(new Je(e-.12,on,.02),Hx());r.position.set(0,on/2,.01),r.receiveShadow=!0,n.add(r),n.add(Tn(i,s,.06,on,pt,-e/2+.03,on/2,pt/2)),n.add(Tn(i,s,.06,on,pt,e/2-.03,on/2,pt/2)),n.add(Tn(i,s,e+.04,.07,pt+.055,0,on+.005,pt/2+.004)),n.add(Tn(i,s,e+.09,.052,pt+.095,0,on+.064,pt/2+.012)),n.add(Tn(i,s,e+.14,.042,pt+.135,0,on+.111,pt/2+.02)),n.add(Tn(i,s,e+.025,.13,pt+.055,0,.13,pt/2+.004)),n.add(Tn(i,s,e+.075,.075,pt+.095,0,.0525,pt/2+.012)),n.add(Tn(i,s,e+.115,.035,pt+.13,0,.0175,pt/2+.018));for(const l of[-1,1])n.add(Tn(i,s,.032,on-.25,.022,l*(e/2-.03),on/2+.025,pt+.005));for(const l of Ki)n.add(Tn(i,s,e-.1,Mr,pt-.04,0,l-Mr/2,pt/2)),n.add(Tn(i,s,e-.075,.058,.026,0,l-.031,pt+.003));n.add(Wx(e));const o=Math.max(2,Math.ceil(e/3)),a=e/o;return n.add(Ii(Array.from({length:o},(l,c)=>({x:-e/2+(c+.5)*a,z:pt/2+.2,width:a*1.5,depth:.45,opacity:.18})))),n}const Gu="#cfc5b4",Xx="#d4c9ae",$x=[7493444,5981751,9006420,5853294,6574406,7756902,5399630,8019771,8997440,4930352,6972508,8152646];function qx(){const i=Ze("filler-atlas"),e=Di*Xn,t=512,n=document.createElement("canvas");n.width=e,n.height=t;const s=document.createElement("canvas");s.width=e,s.height=t;const r=n.getContext("2d"),o=s.getContext("2d");if(!r||!o)throw new Error("2D canvas context unavailable.");o.fillStyle="#808080",o.fillRect(0,0,e,t);const a=zn(mn(i,{cellsX:5,octaves:3}),256),l=[];for(let d=0;d<Di;d+=1){const u=d*Xn,h=u+Zt.u0*Xn,f=(Zt.u1-Zt.u0)*Xn,p=u+Wi.u0*Xn,v=(Wi.u1-Wi.u0)*Xn;r.fillStyle=Gu,r.fillRect(u,0,Xn*(Zt.u1+.02),t);const g=C(i,-.06,.06);r.fillStyle=g>0?`rgba(255,250,235,${g})`:`rgba(40,28,16,${-g})`,r.fillRect(u,0,Xn*(Zt.u1+.02),t);const m=i()*128,_=i()*128;r.globalAlpha=.16,r.globalCompositeOperation="overlay",r.drawImage(a,m,_,96,320,h,0,f,t),r.globalCompositeOperation="source-over",r.globalAlpha=1;for(let z=0;z<380;z+=1){const N=i()>.5,F=h+i()*f,O=i()*t;r.fillStyle=N?`rgba(248,240,226,${C(i,.05,.12)})`:`rgba(20,14,8,${C(i,.05,.12)})`,r.fillRect(F,O,C(i,1,1.8),C(i,1,1.8)),o.fillStyle=`rgba(${N?"255,255,255":"0,0,0"},${C(i,.06,.12)})`,o.fillRect(F,O,C(i,1,1.8),C(i,1,1.8))}for(let z=0;z<22;z+=1){const N=h+i()*f,F=C(i,.02,.06),O=i()>.5,G=C(i,.3,1)*t,J=i()*(t-G);r.fillStyle=O?`rgba(255,255,255,${F})`:`rgba(40,30,20,${F})`,r.fillRect(N,J,1,G),o.fillStyle=O?`rgba(255,255,255,${F})`:`rgba(0,0,0,${F})`,o.fillRect(N,J,1,G)}for(const[z,N]of[[0,.4],[1,.6]])l.push({xa:h+z*f,xb:h+N*f});const y=Bn(i,[0,2,3,4,5]),x=C(i,.08,.14),w=C(i,.66,.8);for(let z=0;z<y;z+=1){const F=(x+w*z/Math.max(1,y-1)+C(i,-.015,.015))*t,O=C(i,2,5);r.fillStyle="rgba(255,255,255,0.22)",r.fillRect(h+O,F,f-O*2,7),r.fillStyle="rgba(0,0,0,0.3)",r.fillRect(h+O,F+7,f-O*2,3),o.fillStyle="rgba(255,255,255,0.8)",o.fillRect(h+O,F,f-O*2,7),o.fillStyle="rgba(0,0,0,0.5)",o.fillRect(h+O,F+7,f-O*2,3)}const M=i()<.7,T=i()<.6;if(M){r.fillStyle=T?"rgba(255,244,214,0.5)":"rgba(30,20,12,0.4)";for(const z of[.05,.07,.92,.94])r.fillRect(h+3,z*t,f-6,2)}if(i()<.65){const z=C(i,.22,.42),N=C(i,.16,.26);r.fillStyle="rgba(0,0,0,0.14)",r.fillRect(h+6,z*t,f-12,N*t),o.fillStyle="rgba(0,0,0,0.18)",o.fillRect(h+6,z*t,f-12,N*t)}for(let z=0;z<14;z+=1){const N=h+i()*f,F=(i()>.5?C(i,0,.05):C(i,.95,1))*t;r.fillStyle=`rgba(236,228,210,${C(i,.05,.16)})`,r.fillRect(N,F,C(i,2,7),C(i,1,4))}r.fillStyle=Gu,r.fillRect(u+Xn*(qi.u0-.02),0,Xn*(1-qi.u0+.02),t);const S=(1-qi.v1)*t,A=(qi.v1-qi.v0)*t,I=(1-Wi.v1)*t,P=(Wi.v1-Wi.v0)*t;r.fillStyle=g>0?`rgba(255,250,235,${g})`:`rgba(40,28,16,${-g})`,r.fillRect(p,S,v,A),r.globalAlpha=.16,r.globalCompositeOperation="overlay",r.drawImage(a,(m+61)%128,(_+37)%128,96,110,p,S,v,A),r.globalCompositeOperation="source-over",r.globalAlpha=1;for(let z=0;z<140;z+=1){const N=i()>.5,F=p+i()*v,O=S+i()*A;r.fillStyle=N?`rgba(248,240,226,${C(i,.05,.11)})`:`rgba(20,14,8,${C(i,.05,.11)})`,r.fillRect(F,O,1.4,1.4),o.fillStyle=`rgba(${N?"255,255,255":"0,0,0"},${C(i,.06,.11)})`,o.fillRect(F,O,1.4,1.4)}r.fillStyle=Xx,r.fillRect(p,I,v,P);const B=C(i,-.05,.05);r.fillStyle=B>0?`rgba(255,252,240,${B})`:`rgba(90,70,46,${-B})`,r.fillRect(p,I,v,P);let W=I;for(;W<I+P;){const z=C(i,.03,.1);r.fillStyle=`rgba(96,80,58,${z})`,r.fillRect(p,W,v,1.2),o.fillStyle=i()>.5?`rgba(255,255,255,${z*2})`:`rgba(0,0,0,${z*2})`,o.fillRect(p,W,v,1.2),W+=C(i,2,5)}for(let z=0;z<3;z+=1){const N=I+i()*P;r.fillStyle=`rgba(70,56,38,${C(i,.12,.2)})`,r.fillRect(p,N,v,2)}for(let z=0;z<2;z+=1){const N=I+i()*P;r.fillStyle="rgba(250,246,232,0.7)",r.fillRect(p,N,v,C(i,2,4)),o.fillStyle="rgba(255,255,255,0.5)",o.fillRect(p,N,v,2.5)}for(let z=0;z<10;z+=1)r.fillStyle=`rgba(150,112,62,${C(i,.06,.14)})`,r.fillRect(p+i()*v,I+i()*P,C(i,1.5,3.5),C(i,1.5,3))}Rt(o,d=>{for(const{xa:u,xb:h}of l){const f=d.createLinearGradient(u,0,h,0);f.addColorStop(0,"rgba(0,0,0,0.55)"),f.addColorStop(1,"rgba(0,0,0,0)"),d.fillStyle=f,d.fillRect(Math.min(u,h),0,Math.abs(h-u),t)}}),Rt(r,d=>{for(const{xa:u,xb:h}of l){const f=d.createLinearGradient(u,0,h,0);f.addColorStop(0,"rgba(0,0,0,0.3)"),f.addColorStop(1,"rgba(0,0,0,0)"),d.fillStyle=f,d.fillRect(Math.min(u,h),0,Math.abs(h-u),t)}});const c=new tn(n);return c.colorSpace=St,c.anisotropy=4,{map:c,normalMap:pn(jn(s,1.6))}}let Pa=null;function Yx(){if(!Pa){const i=qx();Pa={geometry:kx(),material:nd({map:i.map,normalMap:i.normalMap,normalScale:new ee(.7,.7),roughness:.78,metalness:.02},{paperPages:!0})}}return Pa}const Zx=new L(0,0,1),Ui=pt/2-.02,Ul=.03;function Nl(i,e,t,n,s){const r=new en().setFromAxisAngle(Zx,n);i.push({matrix:new ct().compose(t,r,s),color:new Fe(Bn(e,$x)).multiplyScalar(C(e,.85,1.1)),column:Math.floor(e()*Di)})}function Kx(i,e,t,n,s){const r=3+Math.floor(e()*7),o=C(e,.24,.31);let a=n,l=0;for(let c=0;c<r;c+=1){const d=C(e,Ul,.062);if(a+d>s)return a;const u=Math.min(.33,Math.max(.2,o+C(e,-.025,.025)));Nl(i,e,new L(a+d/2,t+u/2,Ui),0,new L(d,u,Ro*C(e,.86,1))),l=u,a+=d+C(e,.001,.01)}if(l>0&&e()<.45){const c=C(e,.14,.26),d=Math.cos(c),u=Math.sin(c),h=Math.min(.33,l*C(e,.88,1/d)),f=C(e,Ul,.05),p=f*d+h*u;a+p<=s&&(Nl(i,e,new L(a+p/2,t+(f*u+h*d)/2,Ui),c,new L(f,h,Ro*C(e,.86,1))),a+=p)}return a}function Jx(i,e,t,n,s){const r=C(e,.24,.3);if(n+r>s)return s;const o=2+Math.floor(e()*3);let a=t;for(let l=0;l<o;l+=1){const c=C(e,.035,.05);Nl(i,e,new L(n+r/2+C(e,-.012,.012),a+c/2,Ui),Math.PI/2,new L(c,r-l*.016,Ro)),a+=c}return n+r+C(e,.01,.06)}function jx(i,e,t,n){let s=n.from,r=n.flushStart??!1;for(;s<n.to-Ul;){const o=r?0:e();r=!1,o<.62?(s=Kx(i,e,t,s,n.to),s+=C(e,.02,.1)):o<.78?s=Jx(i,e,t,s,n.to):s+=C(e,.05,.24)}}function sd(i,e,t){const n=Ze(i),s=[];e.forEach((a,l)=>{for(const c of t(l))jx(s,n,a,c)});const{geometry:r,material:o}=Yx();return ui(r,o,s,{columns:!0,name:"filler-books"})}function rd(i,e,t){const n=Ze(`${t}:dividers`),s=e<2.4?[]:[-e/6,e/6],r=on-.015,o=.16;return{meshes:s.map(a=>Tn(i,n,.05,r-o,pt-.06,a,(r+o)/2,pt/2+.005)),positions:s}}function od(i,e,t){const n=id(i,e,t);n.name="shelf-bank";const s=rd(i,e,t);for(const l of s.meshes)n.add(l);const r=.12,o=[-e/2+r,...s.positions.flatMap(l=>[l-.045,l+.045]),e/2-r],a=[];for(let l=0;l<o.length;l+=2)a.push({from:o[l],to:o[l+1]});return n.add(sd(t,Ki,()=>a)),n}const Ps=6,It=256,ur=1024,Qx=[10130051,9280144,9344160,11180676,9804958,10920346,9345668],e1=[14209212,13419694,14735556],t1=[5924950,5397090,6969674,6512987,5661792],n1=[12755056,11570270,13281914],i1=[16775400,15919312,15260872];function s1(){const i=Ze("file-skin"),e=256,t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");if(!n)throw new Error("2D canvas context unavailable.");n.fillStyle="#cdd0c8",n.fillRect(0,0,e,e),n.globalAlpha=.25,n.globalCompositeOperation="overlay",n.drawImage(zn(mn(i,{cellsX:5,octaves:4}),256),0,0,e,e),n.globalCompositeOperation="source-over",n.globalAlpha=1;for(let r=0;r<180;r+=1){const o=i()>.5;n.fillStyle=o?`rgba(248,248,240,${C(i,.04,.1)})`:`rgba(20,18,14,${C(i,.04,.1)})`,n.fillRect(i()*e,i()*e,C(i,1,2.4),C(i,1,2.4))}for(let r=0;r<30;r+=1){const o=i()*e,a=i()*e,l=i()*Math.PI*2,c=C(i,4,16);n.strokeStyle=`rgba(${i()>.5?"240,240,232":"30,28,24"},${C(i,.05,.1)})`,n.lineWidth=1,n.beginPath(),n.moveTo(o,a),n.lineTo(o+Math.cos(l)*c,a+Math.sin(l)*c),n.stroke()}const s=new tn(t);return s.colorSpace=St,s.wrapS=ln,s.wrapT=ln,s}function r1(){const i=Ze("tube-skin"),e=128,t=256,n=document.createElement("canvas");n.width=e,n.height=t;const s=n.getContext("2d");if(!s)throw new Error("2D canvas context unavailable.");s.fillStyle="#d9bd92",s.fillRect(0,0,e,t),s.globalAlpha=.25,s.globalCompositeOperation="overlay",s.drawImage(zn(mn(i,{cellsX:3,cellsY:6,octaves:3}),128,256),0,0,e,t),s.globalCompositeOperation="source-over",s.globalAlpha=1;for(let o=0;o<150;o+=1){const a=i()*e,l=i()*t,c=C(i,16,90),d=i()>.5;s.strokeStyle=`rgba(${d?"244,226,194":"110,82,48"},${C(i,.05,.12)})`,s.lineWidth=C(i,.8,1.6),s.beginPath(),s.moveTo(a,l),s.lineTo(a+C(i,-2,2),l+c),s.stroke()}for(const o of[C(i,.2,.4),C(i,.6,.85)])s.fillStyle="rgba(90,68,40,0.4)",s.fillRect(o*e,0,2,t),s.fillStyle="rgba(255,244,222,0.25)",s.fillRect(o*e+2,0,1.5,t);Rt(s,o=>{for(const a of[0,1]){const l=o.createLinearGradient(0,a===0?0:t,0,a===0?28:t-28);l.addColorStop(0,"rgba(70,52,30,0.45)"),l.addColorStop(1,"rgba(70,52,30,0)"),o.fillStyle=l,o.fillRect(0,0,e,t)}});const r=new tn(n);return r.colorSpace=St,r.wrapS=ln,r}function o1(){const i=Ze("tube-cap"),e=128,t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");if(!n)throw new Error("2D canvas context unavailable.");const s=e/2;n.fillStyle="#1c150c",n.fillRect(0,0,e,e),n.fillStyle="#caa97c",n.beginPath(),n.arc(s,s,62,0,Math.PI*2),n.fill(),n.lineWidth=1.6;const r=5;let o=s+9,a=s;for(let c=0;c<r*Math.PI*2;c+=.18){const d=9+c/(r*Math.PI*2)*50,u=s+Math.cos(c)*d,h=s+Math.sin(c)*d*(1+(i()-.5)*.02);n.strokeStyle=`rgba(74,52,28,${C(i,.3,.6)})`,n.beginPath(),n.moveTo(o,a),n.lineTo(u,h),n.stroke(),o=u,a=h}n.fillStyle="#241a0e",n.beginPath(),n.arc(s,s,9,0,Math.PI*2),n.fill(),n.strokeStyle="rgba(255,238,210,0.35)",n.lineWidth=2,n.beginPath(),n.arc(s,s,61,0,Math.PI*2),n.stroke();const l=new tn(t);return l.colorSpace=St,l}const a1=[{seamV:.22,label:"paper",grime:.9,lean:.05},{seamV:.3,label:null,grime:.5,lean:-.05,crushCorner:!0},{seamV:.24,label:"round",grime:.6,lean:.02,cornerPatches:!0},{seamV:.26,label:"tilted",grime:.7,lean:-.02,dropFront:!0},{seamV:.21,label:"tall",grime:.35,lean:.06,fadeTop:!0},{seamV:.2,label:null,grime:.8,lean:-.07,traySeam:!0,ringStain:!0}];function Co(i,e){return{x:i*It+e.u0*It,w:(e.u1-e.u0)*It}}function l1(i,e,t,n,s,r){const o=s*It,a=ur,l=Co(s,Zt),c=Co(s,di);i.fillStyle="#c9c2b2",i.fillRect(o,0,It,a),i.fillStyle=r.lean>0?`rgba(255,250,235,${r.lean})`:`rgba(40,30,16,${-r.lean})`,i.fillRect(o,0,It,a),i.globalAlpha=.26,i.globalCompositeOperation="overlay",i.drawImage(n,t()*128,t()*128,110,110,o,0,It,a),i.globalCompositeOperation="source-over",i.globalAlpha=1;for(let u=0;u<1e3;u+=1){const h=t()>.5,f=o+t()*It,p=t()*a,v=C(t,1,2),g=C(t,1,2);i.fillStyle=h?`rgba(244,238,222,${C(t,.08,.18)})`:`rgba(34,26,16,${C(t,.08,.18)})`,i.fillRect(f,p,v,g),e.fillStyle=`rgba(${h?"255,255,255":"0,0,0"},${C(t,.08,.16)})`,e.fillRect(f,p,v,g)}Rt(i,u=>{for(const f of[l,c])for(const[p,v]of[[0,.2],[1,.8]]){const g=u.createLinearGradient(f.x+p*f.w,0,f.x+v*f.w,0);g.addColorStop(0,"rgba(20,14,8,0.34)"),g.addColorStop(1,"rgba(20,14,8,0)"),u.fillStyle=g,u.fillRect(Math.min(f.x+p*f.w,f.x+v*f.w),0,Math.abs(v-p)*f.w,a)}const h=u.createLinearGradient(0,a*.65,0,a);if(h.addColorStop(0,Et(Nt.grime,0)),h.addColorStop(1,Et(Nt.grime,.34*r.grime)),u.fillStyle=h,u.fillRect(o,0,It,a),r.fadeTop){const f=u.createLinearGradient(0,0,0,a*.45);f.addColorStop(0,Et(Nt.wear,.18)),f.addColorStop(1,Et(Nt.wear,0)),u.fillStyle=f,u.fillRect(o,0,It,a*.45)}if(r.dropFront){const f=u.createRadialGradient(l.x+l.w/2,a*r.seamV+36,2,l.x+l.w/2,a*r.seamV+36,26);f.addColorStop(0,"rgba(14,10,6,0.5)"),f.addColorStop(1,"rgba(14,10,6,0)"),u.fillStyle=f,u.fillRect(l.x,a*r.seamV,l.w,80)}});const d=[r.seamV,...r.traySeam?[.85]:[]];for(const u of d){const h=u*a+C(t,-14,14);i.fillStyle="rgba(20,12,6,0.5)",i.fillRect(o,h,It,7),i.fillStyle="rgba(255,250,238,0.22)",i.fillRect(o,h-5,It,5),e.fillStyle="rgba(0,0,0,0.65)",e.fillRect(o,h,It,7),e.fillStyle="rgba(255,255,255,0.4)",e.fillRect(o,h-5,It,5)}if(r.dropFront){const u=l.x+l.w/2;i.fillStyle="rgba(20,12,6,0.28)",i.fillRect(u-1,a*r.seamV,2.5,a*(.92-r.seamV)),e.fillStyle="rgba(0,0,0,0.4)",e.fillRect(u-1,a*r.seamV,2.5,a*(.92-r.seamV))}if(r.label==="paper"||r.label==="tilted"){const u=l.w*C(t,.52,.68),h=a*.115,f=l.x+(l.w-u)/2,p=a*C(t,.4,.52);i.save(),r.label==="tilted"&&(i.translate(f+u/2,p+h/2),i.rotate(C(t,-.045,.045)),i.translate(-(f+u/2),-(p+h/2))),i.fillStyle="rgba(238,230,210,0.95)",i.fillRect(f,p,u,h),i.strokeStyle="rgba(96,80,56,0.7)",i.lineWidth=2.5,i.strokeRect(f+4,p+4,u-8,h-8),i.fillStyle="rgba(150,40,30,0.55)",i.fillRect(f+10,p+h*.34,u-20,3),i.fillStyle="rgba(70,58,40,0.6)",i.fillRect(f+12,p+h*.52,u*C(t,.4,.7),4),i.fillRect(f+12,p+h*.7,u*C(t,.25,.5),4),i.restore()}else if(r.label==="round"){const u=l.x+l.w/2,h=a*C(t,.44,.5);i.strokeStyle="rgba(120,50,40,0.5)",i.lineWidth=3,i.beginPath(),i.arc(u,h,26,0,Math.PI*2),i.stroke(),i.fillStyle="rgba(120,50,40,0.4)",i.fillRect(u-14,h-3,28,6)}else if(r.label==="tall"){const u=l.w*.3,h=a*.26,f=l.x+(l.w-u)/2,p=a*.55;i.fillStyle="rgba(238,230,210,0.92)",i.fillRect(f,p,u,h),i.strokeStyle="rgba(96,80,56,0.6)",i.lineWidth=2,i.strokeRect(f+3,p+3,u-6,h-6);for(let v=0;v<4;v+=1)i.fillStyle="rgba(70,58,40,0.55)",i.fillRect(f+8,p+16+v*18,u-16-t()*14,3)}if(r.cornerPatches)for(const[u,h]of[[l.x,0],[l.x+l.w,0],[l.x,a],[l.x+l.w,a]])i.fillStyle="rgba(58,48,34,0.5)",i.beginPath(),i.moveTo(u,h===0?0:a),i.lineTo(u+(u===l.x?30:-30),h===0?0:a),i.lineTo(u,h===0?44:a-44),i.closePath(),i.fill(),e.fillStyle="rgba(255,255,255,0.25)",e.beginPath(),e.moveTo(u,h===0?0:a),e.lineTo(u+(u===l.x?30:-30),h===0?0:a),e.lineTo(u,h===0?44:a-44),e.closePath(),e.fill();r.crushCorner&&(Rt(i,u=>{const h=u.createRadialGradient(l.x+l.w,30,4,l.x+l.w,30,60);h.addColorStop(0,Et(Nt.wear,.4)),h.addColorStop(1,Et(Nt.wear,0)),u.fillStyle=h,u.fillRect(l.x+l.w-70,0,70,90)}),Rt(e,u=>{const h=u.createRadialGradient(l.x+l.w,30,4,l.x+l.w,30,50);h.addColorStop(0,"rgba(0,0,0,0.55)"),h.addColorStop(1,"rgba(0,0,0,0)"),u.fillStyle=h,u.fillRect(l.x+l.w-60,0,60,80)})),r.ringStain&&(i.strokeStyle="rgba(60,40,22,0.3)",i.lineWidth=4,i.beginPath(),i.arc(c.x+c.w*.55,a*.16,30,0,Math.PI*2),i.stroke());for(const u of[6,a-9])for(let h=0;h<14;h+=1)i.fillStyle=Et(Nt.wear,C(t,.08,.2)),i.fillRect(o+t()*It,u+C(t,-4,4),C(t,5,16),4)}function c1(i,e,t,n,s){const r=s*It,o=ur;i.fillStyle="#e6dec8",i.fillRect(r,0,It,o);let a=0;for(;a<o;){const l=C(t,40,100),c=C(t,-.08,.06);i.fillStyle=c>0?`rgba(255,250,238,${c})`:`rgba(120,98,66,${-c})`,i.fillRect(r,a,It,l);const d=t();for(const[u,h]of[[i,`rgba(110,92,64,${C(t,.25,.45)})`],[e,"rgba(0,0,0,0.45)"]]){u.strokeStyle=h,u.lineWidth=2,u.beginPath();for(let f=0;f<=It;f+=16){const p=a+l+(n(d+f/It,a/o)-.5)*7;f===0?u.moveTo(r+f,p):u.lineTo(r+f,p)}u.stroke()}if(t()<.3){const u=a+l-C(t,8,14);i.fillStyle="rgba(250,244,228,0.85)",i.fillRect(r,u,It,C(t,6,10)),e.fillStyle="rgba(255,255,255,0.5)",e.fillRect(r,u,It,6)}a+=l+2}for(const l of[Zt,di]){const c=Co(s,l),d=c.x+c.w*C(t,.42,.58);i.fillStyle="rgba(74,58,40,0.85)",i.fillRect(d,0,5,o),i.fillStyle="rgba(140,116,84,0.5)",i.fillRect(d+5,0,2,o),e.fillStyle="rgba(0,0,0,0.55)",e.fillRect(d,0,5,o)}Rt(i,l=>{for(const c of[Zt,di]){const d=Co(s,c),u=l.createLinearGradient(d.x,0,d.x+d.w*.16,0);u.addColorStop(0,Et(Nt.grime,.2)),u.addColorStop(1,Et(Nt.grime,0)),l.fillStyle=u,l.fillRect(d.x,0,d.w*.16,o)}})}function u1(){const i=Ze("archive-atlas"),e=Di*It,t=document.createElement("canvas");t.width=e,t.height=ur;const n=document.createElement("canvas");n.width=e,n.height=ur;const s=t.getContext("2d"),r=n.getContext("2d");if(!s||!r)throw new Error("2D canvas context unavailable.");r.fillStyle="#808080",r.fillRect(0,0,e,ur);const o=zn(mn(i,{cellsX:5,octaves:3}),256),a=mn(i,{cellsX:6,octaves:3,warpStrength:.15});for(let c=0;c<Di;c+=1)c<Ps?l1(s,r,i,o,c,a1[c]):c1(s,r,i,a,c);const l=new tn(t);return l.colorSpace=St,l.anisotropy=4,{map:l,normalMap:pn(jn(n,1.4))}}const h1=.06;function d1(){const i=h1,e=new Gs;e.moveTo(0,0),e.lineTo(1,0),e.lineTo(1,1),e.lineTo(.55,1),e.lineTo(0,.45),e.closePath();const t=.012,n=new wr(e,{depth:i-2*t,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelOffset:-t,bevelSegments:2}).translate(0,0,t),s=n.clone().translate(0,0,1-i),r=[new Je(i,1,1-2*i).translate(1-i/2,.5,.5),new Je(1-2*i,i,1-2*i).translate(.5,i/2,.5),new Je(i,.45,1-2*i).translate(i/2,.225,.5)].map(l=>{const c=l.toNonIndexed();return l.dispose(),c}),o=[n,s,...r],a=ii(o);for(const l of o)l.dispose();if(!a)throw new Error("Magazine file merge failed.");return a.rotateY(Math.PI/2),a.translate(-.5,-.5,.5),a}function f1(i){const e=[],t=[[.28,C(i,.38,.44)],[0,C(i,.26,.34)],[-.27,C(i,.1,.18)]];for(const[s,r]of t){const o=r+.42;e.push(new Je(.8,o,.25).translate(C(i,-.03,.03),r-o/2,s+C(i,-.015,.015)))}const n=ii(e);for(const s of e)s.dispose();if(!n)throw new Error("File papers merge failed.");return n}function p1(){const i=[new Je(.58,.025,.018).translate(0,.195,.505),new Je(.58,.025,.018).translate(0,-.055,.505),new Je(.025,.25,.018).translate(-.2775,.07,.505),new Je(.025,.25,.018).translate(.2775,.07,.505)],e=ii(i);for(const t of i)t.dispose();if(!e)throw new Error("Archive label-frame merge failed.");return e}function m1(){const i=[],e=new Tt(.13,.018,8,20,Math.PI);e.rotateZ(Math.PI),e.translate(0,-.19,.514),i.push(e);for(const n of[-.13,.13]){const s=new qe(.027,.027,.025,12);s.rotateX(Math.PI/2),s.translate(n,-.19,.505),i.push(s)}const t=ii(i);for(const n of i)n.dispose();if(!t)throw new Error("Archive pull merge failed.");return t}function g1(){const i=[new Je(.025,1.01,.022).translate(.05,0,.505),new Je(1.01,.025,.022).translate(0,.015,.505),new Je(.025,.022,1.01).translate(.05,.49,0),new Je(1.01,.022,.025).translate(0,.49,.015)],e=ii(i);for(const t of i)t.dispose();if(!e)throw new Error("Bundle twine merge failed.");return e}let Ia=null;function ad(){if(!Ia){const i=u1(),e=new Re({map:r1(),roughness:.55,metalness:0,envMapIntensity:.45,normalMap:pn(jn(Wv(Ze("tube-kraft")),1.4)),normalScale:new ee(.4,.4)}),t=new Re({map:o1(),roughness:.85,metalness:0,envMapIntensity:.2});Ia={boxGeometry:Bx(),bundleGeometry:zx(),boxMaterial:nd({map:i.map,normalMap:i.normalMap,normalScale:new ee(.8,.8),roughness:.88,metalness:0,envMapIntensity:.25}),pullGeometry:m1(),labelFrameGeometry:p1(),hardwareMaterial:new Re({color:8746074,roughness:.38,metalness:.68,envMapIntensity:.75}),twineGeometry:g1(),twineMaterial:new Re({color:5521965,roughness:.88,metalness:0}),fileGeometry:d1(),fileMaterial:new Re({map:s1(),roughness:.45,metalness:.35,envMapIntensity:.7}),papersGeometry:f1(Ze("file-papers-geometry")),papersMaterial:new Re({color:15261900,roughness:.92,metalness:0,envMapIntensity:.4,normalMap:pn(jn(Yh(Ze("file-papers")),1.2)),normalScale:new ee(.18,.18)}),tubeGeometry:new qe(1,1,1,28),tubeMaterials:[e,t,t],parcelGrain:pn(jn(Xv(Ze("parcel-wrinkle")),1.8))}}return Ia}const Po=new en,_1=new en().setFromAxisAngle(new L(0,0,1),Math.PI/2);function br(i,e,t){return new ct().compose(i,e,t)}function v1(i,e,t,n,s){const r=2+Math.floor(e()*4),o=C(e,.26,.33);let a=n,l=-1;for(let c=0;c<r;c+=1){const d=C(e,.2,.32);if(a+d>s)return a;const u=Math.min(.35,Math.max(.22,o+C(e,-.02,.02))),h=C(e,.26,.31),f=Math.max(Ui,h/2+.03);let p=Math.floor(e()*Ps);p===l&&(p=(p+1+Math.floor(e()*(Ps-1)))%Ps),l=p,i.push({matrix:br(new L(a+d/2,t+u/2,f),Po,new L(d,u,h)),color:new Fe(Bn(e,Qx)).multiplyScalar(C(e,.85,1.08)),column:p}),a+=d+C(e,.002,.014)}return a}function x1(i,e,t,n,s,r){const o=2+Math.floor(t()*4),a=C(t,.29,.33),l=C(t,.26,.3),c=new Fe(Bn(t,t1));let d=s;for(let u=0;u<o;u+=1){const h=C(t,.07,.095);if(d+h>r)return d;const f=new L(d+h/2,n+a/2,Ui),p=new L(h,a,l);i.push({matrix:br(f,Po,p),color:c.clone().multiplyScalar(C(t,.92,1.08))}),t()<.62&&e.push({matrix:br(f,Po,p),color:new Fe(Bn(t,i1)).multiplyScalar(C(t,.92,1.02))}),d+=h+.004}return d}function S1(i,e,t,n,s){const r=C(e,.26,.34);if(n+r>s)return s;const o=2+Math.floor(e()*3);let a=t;for(let l=0;l<o;l+=1){const c=C(e,.045,.075);i.push({matrix:br(new L(n+r/2+C(e,-.01,.01),a+c/2,Ui),Po,new L(r-l*.014,c,C(e,.24,.28))),color:new Fe(Bn(e,e1)).multiplyScalar(C(e,.94,1.04)),column:Ps+Math.floor(e()*(Di-Ps))}),a+=c}return n+r+C(e,.01,.05)}function y1(i,e,t,n,s){const r=Math.min(C(e,.4,.68),s-n-.02);if(r<.28)return n;const o=C(e,.027,.042);return i.push({matrix:br(new L(n+r/2,t+o,Ui),_1,new L(o,r,o)),color:new Fe(Bn(e,n1)).multiplyScalar(C(e,.92,1.06))}),n+r+C(e,.015,.06)}function M1(i,e,t){const n=C(i,.24,.3),s=C(i,.15,.19),r=C(i,.2,.24),o=new Ve,a=new Re({color:new Fe(Bn(i,[9075300,8156264,8613982])),roughness:.95,metalness:0,envMapIntensity:.2,normalMap:ad().parcelGrain,normalScale:new ee(.6,.6)}),l=new D(be(n,s,r,.018),a);l.castShadow=!0,o.add(l);const c=new Re({color:4601898,roughness:.8}),d=new D(new Je(.012,s+.005,r+.005),c);d.position.x=n*C(i,-.12,.12),o.add(d);const u=new D(new Je(n+.005,s+.005,.012),c);return o.add(u),o.position.set(t+n/2,e+s/2,Ui),o.rotation.y=C(i,-.05,.05),{group:o,advance:n+C(i,.015,.06)}}function b1(i,e,t){const n=Ze(i),s=new Ve;s.name="filler-archive";const r=[],o=[],a=[],l=[],c=[];let d=!1;e.forEach((h,f)=>{for(const p of t(f)){let v=p.from,g=p.flushStart??!1;for(;v<p.to-.08;){const m=g?0:n();if(g=!1,m<.5)v=v1(r,n,h,v,p.to),v+=C(n,.015,.08);else if(m<.68)v=x1(a,l,n,h,v,p.to),v+=C(n,.015,.08);else if(m<.82)if(!d&&n()<.25&&p.to-v>.34){d=!0;const _=M1(n,h,v);s.add(_.group),v+=_.advance}else v=S1(o,n,h,v,p.to);else m<.9?v=y1(c,n,h,v,p.to):v+=C(n,.05,.22)}}});const u=ad();if(r.length>0){s.add(ui(u.boxGeometry,u.boxMaterial,r,{columns:!0,name:"filler-boxes"})),s.add(ui(u.pullGeometry,u.hardwareMaterial,r.map(f=>({...f,color:new Fe(16777215)})),{columns:!1,name:"filler-box-pulls"}));const h=r.filter(f=>[0,3].includes(f.column??-1));h.length>0&&s.add(ui(u.labelFrameGeometry,u.hardwareMaterial,h.map(f=>({...f,color:new Fe(16777215)})),{columns:!1,name:"filler-box-label-frames"}))}return o.length>0&&(s.add(ui(u.bundleGeometry,u.boxMaterial,o,{columns:!0,name:"filler-paper-bundles"})),s.add(ui(u.twineGeometry,u.twineMaterial,o.map(h=>({...h,color:new Fe(16777215)})),{columns:!1,name:"filler-bundle-twine"}))),a.length>0&&s.add(ui(u.fileGeometry,u.fileMaterial,a,{columns:!1,name:"filler-files"})),l.length>0&&s.add(ui(u.papersGeometry,u.papersMaterial,l,{columns:!1,name:"filler-file-papers"})),c.length>0&&s.add(ui(u.tubeGeometry,u.tubeMaterials,c,{columns:!1,name:"filler-tubes"})),s}const wn=.009,w1=-2.45;function ld(i){return`#${i.toString(16).padStart(6,"0")}`}function E1(i){return i.replace(/<[^>]+>/g,"")}function T1(i,e,t){return bt(160,640,(n,s,r)=>{const o=Ze(`spine:${i.key}`),a=ld(e);n.fillStyle=a,n.fillRect(0,0,s,r);for(let u=0;u<260;u+=1){const h=o()>.5;n.fillStyle=h?`rgba(255,240,220,${C(o,.02,.06)})`:`rgba(8,5,3,${C(o,.03,.08)})`,n.fillRect(o()*s,o()*r,1.4,1.4)}Rt(n,u=>{const h=u.createLinearGradient(0,0,s,0);h.addColorStop(0,"rgba(0,0,0,0.35)"),h.addColorStop(.5,"rgba(255,255,255,0.08)"),h.addColorStop(1,"rgba(0,0,0,0.35)"),u.fillStyle=h,u.fillRect(0,0,s,r)});for(let u=0;u<10;u+=1){const h=(o()>.4?C(o,0,.04):C(o,.96,1))*r;n.fillStyle=`rgba(232,216,184,${C(o,.06,.16)})`,n.fillRect(o()*s,h,C(o,3,9),2.5)}for(const u of[86,150,r-170,r-106])n.fillStyle="rgba(255,255,255,0.1)",n.fillRect(8,u,s-16,7),n.fillStyle="rgba(0,0,0,0.28)",n.fillRect(8,u+7,s-16,3);const l=t?"#e3c47c":"#e8dcc0";n.strokeStyle=l,n.lineWidth=2;for(const u of[34,42,r-64,r-56])n.beginPath(),n.moveTo(14,u),n.lineTo(s-14,u),n.stroke();n.save(),n.translate(s/2,178),n.rotate(Math.PI/2),n.font=`600 30px ${Jt}`,n.textAlign="left",n.textBaseline="middle";const c=ns(n,i.titlePlain.en,r-380),d=c.slice(0,2);c.length>2&&(d[1]=`${d[1]}…`),d.forEach((u,h)=>{const f=((d.length-1)/2-h)*38;if(t){const p=n.createLinearGradient(0,-f-15,0,-f+15);p.addColorStop(0,"#f0d695"),p.addColorStop(.5,"#c89e54"),p.addColorStop(1,"#e9cd86"),n.fillStyle=p}else n.fillStyle=l;n.fillText(u,0,-f)}),n.restore(),n.fillStyle=l,n.font=`500 17px ${ft}`,n.textAlign="center",n.textBaseline="middle",n.fillText(i.id,s/2,r-86)})}function A1(i,e,t){return bt(512,720,(n,s,r)=>{const o=Ze(`cover:${i.key}`);n.fillStyle=ld(e),n.fillRect(0,0,s,r);for(let d=0;d<500;d+=1){const u=o()>.5;n.fillStyle=u?`rgba(255,240,220,${C(o,.02,.05)})`:`rgba(8,5,3,${C(o,.02,.06)})`,n.fillRect(o()*s,o()*r,1.6,1.6)}const a=[[0,0],[s,0],[0,r],[s,r]].map(([d,u])=>({cx:d,cy:u,radius:C(o,30,54)}));Rt(n,d=>{const u=d.createRadialGradient(s/2,r/2,80,s/2,r/2,s);u.addColorStop(0,"rgba(255,255,255,0.05)"),u.addColorStop(1,"rgba(0,0,0,0.35)"),d.fillStyle=u,d.fillRect(0,0,s,r);for(const{cx:h,cy:f,radius:p}of a){const v=d.createRadialGradient(h,f,2,h,f,p);v.addColorStop(0,"rgba(228,214,188,0.4)"),v.addColorStop(1,"rgba(228,214,188,0)"),d.fillStyle=v,d.fillRect(h-60,f-60,120,120)}});const l=t?"#dec07a":"#e0d3b6";n.strokeStyle=l,n.lineWidth=3,n.strokeRect(28,28,s-56,r-56),n.lineWidth=1,n.strokeRect(40,40,s-80,r-80),n.fillStyle=l,n.font=`600 34px ${Jt}`,n.textAlign="center",n.textBaseline="middle";const c=ns(n,i.titlePlain.en,s-130).slice(0,4);c.forEach((d,u)=>{n.fillText(d,s/2,r*.34+(u-(c.length-1)/2)*44)}),n.save(),n.translate(s/2,r*.66),n.rotate(Math.PI/4),n.strokeRect(-14,-14,28,28),n.strokeRect(-7,-7,14,14),n.restore(),n.font=`500 19px ${ft}`,n.fillText(i.id,s/2,r-74)})}function R1(i){return bt(512,720,(e,t,n)=>{const s=Ze(`endpaper:${i}`);e.fillStyle="#e8ddc4",e.fillRect(0,0,t,n);const r=["#7e2a38","#2b3a55","#6b5a3c","#2f4a3c"];for(let o=0;o<70;o+=1){const a=s()*n,l=C(s,8,36),c=C(s,60,200),d=s()*Math.PI*2;e.strokeStyle=`${Bn(s,r)}${Math.round(C(s,28,70)).toString(16).padStart(2,"0")}`,e.lineWidth=C(s,1.5,5),e.beginPath();for(let u=0;u<=t;u+=8){const h=a+Math.sin(d+u/c*Math.PI*2)*l;u===0?e.moveTo(u,h):e.lineTo(u,h)}e.stroke()}})}function C1(i,e){const t=bt(700,960,(n,s,r)=>{n.fillStyle="#efe5c9",n.fillRect(0,0,s,r);const o=n.createLinearGradient(0,0,70,0);o.addColorStop(0,"rgba(0,0,0,0.22)"),o.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=o,n.fillRect(0,0,70,r);const a=96,l=s-60,c=l-a;let d=96;n.fillStyle="#8d7b5c",n.font=`500 16px ${ft}`,n.textAlign="left",n.textBaseline="alphabetic",n.fillText(i.meta[e].toUpperCase(),a,d),d+=40,n.fillStyle=Sn,n.font=`600 34px ${Jt}`;const u=ns(n,i.titlePlain[e],c).slice(0,3);for(const v of u)n.fillText(v,a,d),d+=42;if(d+=6,i.authorsHtml){n.font=`italic 400 20px ${Jt}`,n.fillStyle="#4a3d2c";let v=E1(i.authorsHtml[e]);if(n.measureText(v).width>c){for(;v.length>4&&n.measureText(`${v}…`).width>c;)v=v.slice(0,-1);v=`${v.replace(/[,，\s]+$/,"")}…`}n.fillText(v,a,d),d+=34}n.strokeStyle="#b7a276",n.lineWidth=1.5,n.beginPath(),n.moveTo(a,d),n.lineTo(l,d),n.stroke(),d+=36;const h=i.image?r-420:r-90,f=Ze(`page:${i.key}`);n.fillStyle="rgba(42,33,24,0.3)";let p=d;for(;p<h-40;){const v=f()<.16;n.fillRect(a,p,c*(v?C(f,.4,.75):C(f,.92,1)),7),p+=v?38:23}i.image?(n.strokeStyle="#8d7b5c",n.lineWidth=2,n.strokeRect(a,h,c,300),n.fillStyle="#8d7b5c",n.font=`500 15px ${ft}`,n.fillText(`PLATE · ${i.id}`,a,h+330)):(n.fillStyle="#8d7b5c",n.font=`500 15px ${ft}`,n.fillText(i.id,a,r-60))});if(i.image){const n=new Image;n.decoding="async",n.onload=()=>{const r=t.image.getContext("2d");if(!r)return;const o=96,a=640-o,c={x:o+6,y:540+6,w:a-12,h:288},d=Math.min(c.w/n.width,c.h/n.height),u=n.width*d,h=n.height*d;r.save(),r.filter="sepia(0.25) saturate(0.85)",r.drawImage(n,c.x+(c.w-u)/2,c.y+(c.h-h)/2,u,h),r.restore(),t.needsUpdate=!0},n.src=i.image.url}return t}function P1(i,e){const t=Ze(e.key),n=C(t,.275,.345),s=C(t,.04,.062),r=Ro,o=Bn(t,ed(e.type)),a=td(e.status),l=i.leather(o),c=new Fe(o).lerp(new Fe(16769712),.55),d=new Re({map:T1(e,o,a),normalMap:l.normalMap,normalScale:new ee(.45,.45),roughnessMap:l.roughnessMap,roughness:1,metalness:.04,emissive:c,emissiveIntensity:0}),u=new Re({map:A1(e,o,a),normalMap:l.normalMap,normalScale:new ee(.45,.45),roughnessMap:l.roughnessMap,roughness:1,metalness:.04,emissive:c,emissiveIntensity:0}),h=new Re({map:R1(e.key),roughness:.85,metalness:0}),f=new Re({color:15327173,roughness:.9}),p=new Ve;p.name=`book:${e.key}`;const v=new D(Ea(s,n,wn,[0,0,0,0,1,0]),[l,d]);v.position.z=r/2-wn/2,v.castShadow=!0,p.add(v);const g=new D(new Je(wn,n,r-wn),l);g.position.set(-s/2+wn/2,0,-wn/2),g.castShadow=!0,p.add(g);const m=new D(Ea(s-2*wn,n*.965,r*.93,[0,1,1,1,1,1]),[f,i.paper]);m.position.set(0,0,-wn),m.castShadow=!0,p.add(m);const _=new Ve;_.position.set(s/2-wn/2,0,r/2-wn);const y=new D(Ea(wn,n,r-wn,[0,1,2,2,2,2]),[u,h,l]);y.position.set(0,0,-.211/2),y.castShadow=!0,_.add(y),p.add(_);const x=new D(new Je(.0016,.034,.016),i.parchment);x.position.set(0,n*.965/2+.011,r/2-.05),x.rotation.x=-.08,p.add(x);let w=null;return{dto:e,group:p,coverPivot:_,openAxis:"y",openAngle:w1,presentTwist:new en,slideOut:.17,width:s,height:n,baseZ:0,hovered:!1,busy:!1,highlight:M=>{d.emissiveIntensity=.58*M,u.emissiveIntensity=.58*M},bakePage:M=>{w===M&&f.map||(w=M,f.map?.dispose(),f.map=C1(e,M),f.color.set(16777215),f.needsUpdate=!0)}}}function Hu(i,e,t,n){return bt(768,200,(s,r,o)=>{s.fillStyle="#241910",s.fillRect(0,0,r,o),s.strokeStyle="#c9a86a",s.lineWidth=3,s.strokeRect(10,10,r-20,o-20),s.lineWidth=1,s.strokeRect(18,18,r-36,o-36),s.fillStyle="#e3c47c";const a=n==="zh"?i.zh:i.en.toUpperCase();s.font=`600 64px ${Jt}`,s.textAlign="center",s.textBaseline="middle",s.fillText(a,r/2,o/2-14),s.font=`500 22px ${ft}`,s.fillStyle="#9a7e4f",s.fillText(`${e} · FOL. ${t}`,r/2,o/2+52)})}function fc(i,e,t,n,s){const r=new Ve;r.name="hanging-sign";const o=new Re({map:Hu(e,t,n,s),roughness:.7,metalness:.1}),a=new D(be(1.6,.42,.035,.007),i.woodDark);a.castShadow=!0,r.add(a);const l=new D(new Bt(1.5,.32),o);l.position.z=.019,r.add(l);for(const[c,d,u,h]of[[1.6,.045,0,.1875],[1.6,.045,0,-.1875],[.045,.33,.7775,0],[.045,.33,-.7775,0]]){const f=new D(be(c,d,.052,.005),i.wood);f.position.set(u,h,.003),f.castShadow=!0,r.add(f)}for(const c of[-1,1]){const d=new D(new Tt(.021,.004,7,14),i.brass);d.position.set(c*.66,.205,.01),r.add(d);const u=new Tt(.024,.0035,6,12);for(let h=0;h<6;h+=1){const f=new D(u,i.brass);f.position.set(c*.66,.25+h*.052,0),f.rotation.y=h%2===0?0:Math.PI/2,r.add(f)}}return{group:r,setLang:c=>{o.map?.dispose(),o.map=Hu(e,t,n,c),o.needsUpdate=!0}}}const _o=9.4,lo=[2,3],Vu=_o-1.8,Wu=pt/2+.012,Xu=.085;function I1(i){return bt(192,56,(e,t,n)=>{e.fillStyle="#7e6234",e.fillRect(0,0,t,n),e.fillStyle="#d2c096",e.fillRect(5,5,t-10,n-10),e.fillStyle=Sn,e.font=`500 18px ${ft}`,e.textAlign="center",e.textBaseline="middle",e.fillText(i,t/2,n/2+1)})}function L1(i,e,t){const n=[];let s=-e,r=!1;for(const o of[...i].sort((a,l)=>a.x-l.x)){const a=t()<.3?.004:C(t,.015,.1);n.push({from:s,to:o.x-o.width/2-a,flushStart:r}),s=o.x+o.width/2+.004,r=!0}return n.push({from:s,to:e,flushStart:r}),n}function $u(i,e,t,n){const s=id(i,_o,n.seed);s.name=`wall:${n.seed}`;const r=rd(i,_o,n.seed);for(const w of r.meshes)s.add(w);const o=Ze(n.seed),a=n.style==="boxes"?Ox:P1,l=_o/2-.14,c=pt/2+(pt-.04)/2,d=[],u=new Map,h=new Map;for(let w=0;w<e.length;w+=1){const M=e[w].shelf??lo[w%lo.length];h.set(M,(h.get(M)??0)+1)}const f=new Map;e.forEach((w,M)=>{const T=w.shelf??lo[M%lo.length],S=Ki[T],A=h.get(T)??1,I=f.get(T)??0;f.set(T,I+1);const cw=n.band??Vu,P=cw/(A+1),B=C(o,-1,1)*Math.min(.3,P*.2);let W=-cw/2+P*(I+1)+B;const z=a(i,w);for(const O of r.positions){const G=z.width/2+.09;Math.abs(W-O)<G&&(W=O+Math.sign(W-O||1)*G)}z.group.position.set(W,S+z.height/2,Wu),z.baseZ=Wu,s.add(z.group),d.push(z);const N=u.get(T)??[];N.push({x:W,width:z.width}),u.set(T,N);const F=new D(new Je(.11,.034,.008),new Re({map:I1(w.id),roughness:.6,metalness:.25}));F.position.set(W,S-Mr/2,c+.005),s.add(F)});const p=r.positions.map(w=>({x:w,width:.13})),v=w=>L1([...u.get(w)??[],...p],l,o),g=n.style==="boxes"?b1(`${n.seed}:filler`,Ki,v):sd(`${n.seed}:filler`,Ki,v);s.add(g);const m=fc(i,n.label,n.number,n.folio,t);m.group.position.set(0,on-.42,pt/2+.22),s.add(m.group);if(n.subPlaques)for(const sq of n.subPlaques){const sp=fc(i,sq.label,"","",t);sp.group.scale.setScalar(sq.scale??.5),sp.group.position.set(0,sq.y??1.25,pt/2+.22),s.add(sp.group)}let _=Number.POSITIVE_INFINITY;const y=.35,x=.7;return{group:s,books:d,update:w=>{_+=w,d.forEach((M,T)=>{if(!M.busy){const P=M.baseZ+(M.hovered?Xu:0);M.group.position.z=ac(M.group.position.z,P,.06,w)}const S=Math.min(1,Math.max(0,(M.group.position.z-M.baseZ)/Xu)),A=_-T*y,I=A>0&&A<x?Math.sin(A/x*Math.PI):0;M.highlight(M.busy?0:Math.max(S*.8,I*.85))})},glint:()=>{_=0},setLang:m.setLang}}function D1(i,e){const t=bt(320,84,(n,s,r)=>{const o=Ze(`plaque:${e}`);n.fillStyle="#8a6c3c",n.fillRect(0,0,s,r);for(let l=0;l<70;l+=1){const c=o()*r,d=o()>.5;n.strokeStyle=`rgba(${d?"255,236,190":"70,52,26"},${C(o,.04,.1)})`,n.lineWidth=1,n.beginPath(),n.moveTo(o()*s*.4,c),n.lineTo(s-o()*s*.4,c+C(o,-1,1)),n.stroke()}Rt(n,l=>{const c=l.createLinearGradient(0,0,0,r);c.addColorStop(0,"rgba(255,255,255,0.18)"),c.addColorStop(.5,"rgba(0,0,0,0)"),c.addColorStop(1,"rgba(0,0,0,0.25)"),l.fillStyle=c,l.fillRect(0,0,s,r)}),n.strokeStyle="#5c4322",n.lineWidth=3,n.strokeRect(5,5,s-10,r-10),n.fillStyle="#241a0c",n.font=`600 22px ${Jt}`,n.textAlign="center",n.textBaseline="middle";let a=i.split("|")[0].trim();for(;n.measureText(a).width>s-40&&a.length>4;)a=`${a.slice(0,-2).trimEnd()}…`;n.fillText(a,s/2,r/2-12),n.font=`500 14px ${ft}`,n.fillText(e,s/2,r/2+18)});return new Re({map:t,roughness:.45,metalness:.6})}function cd(i,e,t){const n=new Re({color:3813671,roughness:.8}),s=new D(new Bt(e,t),n);return new Ph().load(i,r=>{r.colorSpace=St,n.map=r,n.color.set(16777215),n.needsUpdate=!0}),s}function U1(i){const e=new Ve,t=new Re({color:7828331,roughness:.32,metalness:.82,envMapIntensity:.9}),n=new Re({color:1512465,roughness:.55}),s=new Gs;s.absarc(0,0,.13,0,Math.PI*2,!1);const r=new gr;r.absarc(0,0,.018,0,Math.PI*2,!0),s.holes.push(r);for(let d=0;d<5;d+=1){const u=d/5*Math.PI*2,h=new gr;h.absarc(Math.cos(u)*.067,Math.sin(u)*.067,.025,0,Math.PI*2,!0),s.holes.push(h)}const o=new wr(s,{depth:.005,curveSegments:32,bevelEnabled:!0,bevelThickness:.0015,bevelSize:.0015,bevelSegments:1});o.translate(0,0,-.0025);for(const d of[-.018,.018]){const u=new D(o,t);u.position.z=d,u.castShadow=!0,e.add(u)}const a=new D(new qe(.105,.105,.03,28),n);a.rotation.x=Math.PI/2,e.add(a);const l=new D(new Tt(.026,.008,8,20),i.brass);l.position.z=.022,e.add(l);const c=new D(be(.22,.014,.075,.004),i.woodDark);c.position.set(0,-.135,0),c.castShadow=!0,e.add(c);for(const d of[-.055,.055]){const u=new D(new qe(.006,.008,.14,10),i.brass);u.position.set(d,-.067,-.012),u.rotation.z=d<0?-.12:.12,e.add(u)}return e}function N1(i){const e=new Ve,t=new D(be(.26,.19,.014,.003),new Re({color:1907223,roughness:.6}));t.castShadow=!0,e.add(t);const n=bt(256,48,(r,o,a)=>{for(let l=0;l<8;l+=1)r.fillStyle=l%2===0?"#e8dcc0":"#1d1a17",r.save(),r.translate(l*o/8,0),r.transform(1,0,-.35,1,0,0),r.fillRect(0,0,o/8+18,a),r.restore()}),s=new D(new Je(.26,.035,.016),new Re({map:n,roughness:.6}));s.position.set(-.012,.115,0),s.rotation.z=.09,e.add(s);for(const r of[-.105,.105]){const o=new D(new qe(.009,.009,.025,12),new Re({color:6446937,roughness:.35,metalness:.75}));o.rotation.x=Math.PI/2,o.position.set(r,.103,.012),e.add(o)}if(i.image){const r=cd(i.image.url,.225,.13);r.position.set(0,-.012,.0072),e.add(r)}return e}function F1(i,e){const t=new Ve,n=new D(be(.3,.22,.008,.003),i.woodDark);n.position.z=-.004,n.castShadow=!0,t.add(n);for(const[o,a,l,c]of[[.3,.027,0,.0965],[.3,.027,0,-.0965],[.027,.166,.1365,0],[.027,.166,-.1365,0]]){const d=new D(be(o,a,.018,.003),i.woodDark);d.position.set(l,c,.004),d.castShadow=!0,t.add(d)}const s=new D(new Je(.264,.184,.003),i.parchment);if(s.position.z=.006,t.add(s),e.image){const o=e.image.width/e.image.height,a=Math.min(.24,.16*o),l=cd(e.image.url,a,a/o);l.position.z=.008,t.add(l)}const r=new D(be(.022,.17,.018,.003),i.woodDark);return r.position.set(0,-.055,-.055),r.rotation.x=.62,t.add(r),t}function qu(i){const e=new Ve,t=new Re({color:1712166,roughness:.15,metalness:.2}),n=i.parchment,s=new Ve;for(const w of[0,.16]){const M=new D(new qe(.045,.045,.012,14),i.woodDark);M.position.y=w,s.add(M)}const r=[[.031,.012],[.036,.022],[.03,.04],[.012,.07],[.007,.08],[.012,.09],[.03,.12],[.036,.138],[.031,.148]].map(([w,M])=>new ee(w,M));s.add(new D(new Fn(r,28),t));const o=new D(new qe(.029,.006,.052,20),new Re({color:13084266,roughness:.95}));o.position.y=.039,s.add(o);for(const w of[-.037,.037]){const M=new D(new qe(.004,.004,.148,10),i.brass);M.position.set(w,.08,0),s.add(M)}s.position.set(-1.05,0,0),e.add(s);const a=new Ve,l=new D(new qe(.05,.05,.016,20),i.brass);l.rotation.x=Math.PI/2-.5,l.position.y=.05,a.add(l);const c=new D(new Ns(.042,28),new Re({color:14207399,roughness:.72,metalness:0}));c.rotation.x=-.5,c.position.set(0,.055,.009),a.add(c);const d=new D(new Tt(.044,.004,8,28),i.brass);d.rotation.x=-.5,d.position.copy(c.position),a.add(d);const u=new Ve;u.rotation.x=-.5,u.position.set(0,.055,.012);for(const[w,M]of[[.032,.7],[.024,-.85]]){const T=new D(be(w,.0025,.0015,6e-4),i.woodDark);T.position.x=w/2-.003,T.rotation.z=M,u.add(T)}a.add(u);const h=new D(new qe(.01,.01,.015,8),i.brass);h.position.set(0,.1,-.02),a.add(h);const f=new D(new Tt(.014,.003,8,20),i.brass);f.position.set(0,.116,-.022),a.add(f);const p=new Tt(.008,.0018,6,14);for(let w=0;w<4;w+=1){const M=new D(p,i.brass);M.position.set((w%2===0?1:-1)*.006,.135+w*.014,-.022),M.rotation.y=w%2*Math.PI/2,a.add(M)}a.position.set(.95,0,.05),e.add(a);const v=new Ve;for(let w=0;w<4;w+=1){const M=new D(new Je(.16,.008,.11),n);M.position.y=.004+w*.009,M.rotation.y=(w%2===0?1:-1)*.12,v.add(M)}v.position.set(-.3,0,.08),e.add(v);for(const[w,M]of[[.32,.06],[.42,.045]]){const T=[[0,0],[.022,0],[.027,M*.12],[.026,M*.62],[.017,M*.78],[.012,M*.82],[.012,M],[0,M]].map(([I,P])=>new ee(I,P)),S=new D(new Fn(T,20),t);S.position.set(w,0,.04),e.add(S);const A=new D(new qe(.013,.012,.012,12),i.brass);A.position.set(w,M+.006,.04),e.add(A)}const g=new Ve,m=new D(new Tt(.045,.008,8,22),i.brass);g.add(m);const _=new D(new Ns(.039,24),i.glass);_.position.z=-.001,_.renderOrder=2,g.add(_);const y=new D(new qe(.011,.011,.026,10),i.brass);y.position.y=-.052,g.add(y);const x=new D(new qe(.008,.01,.09,8),i.woodDark);return x.position.y=-.085,g.add(x),g.position.set(1.12,.1,.02),g.rotation.z=.35,g.rotation.x=-.3,e.add(g),e.traverse(w=>{w instanceof D&&(w.castShadow=!0)}),e}function O1(i,e){const t=new Ve,n=3,s=2.72,r=.5,o=[[-n/2+.08,.08],[n/2-.08,.08],[-n/2+.08,r-.08],[n/2-.08,r-.08]];for(const[y,x]of o){const w=[[0,0],[.035,0],[.045,.035],[.052,.085],[.039,.14],[.034,.22],[0,.22]].map(([T,S])=>new ee(T,S)),M=new D(new Fn(w,22),i.woodDark);M.position.set(y,0,x),M.castShadow=!0,t.add(M)}t.add(Ii([...o.map(([y,x])=>({x:y,z:x,width:.16,depth:.16,opacity:.5})),{x:0,z:r/2,width:n,depth:.7,opacity:.15}]));const a=(y,x,w,M,T,S,A=.006)=>{const I=new D(be(y,x,w,A),i.wood);return I.position.set(M,T,S),I.castShadow=!0,I.receiveShadow=!0,t.add(I),I};a(n-.14,.08,r,0,.26,r/2),a(n,.08,r,0,s-.04,r/2),a(n+.14,.1,r+.05,0,s+.05,(r+.05)/2,.01),a(n+.24,.055,r+.1,0,s+.12,(r+.1)/2,.012),a(n+.32,.04,r+.14,0,s+.167,(r+.14)/2,.012),a(n+.16,.075,r+.09,0,.205,(r+.09)/2,.009),a(n+.25,.055,r+.13,0,.155,(r+.13)/2,.009),a(.07,s-.3,r,-n/2+.035,(s+.22)/2-.04,r/2),a(.07,s-.3,r,n/2-.035,(s+.22)/2-.04,r/2);for(const y of[-1,1])a(.032,s-.42,.026,y*(n/2-.035),(s+.2)/2,r+.008,.004);const l=bt(256,384,(y,x,w)=>{const M=Ze("cabinet-felt");y.fillStyle="#43331f",y.fillRect(0,0,x,w),y.globalAlpha=.22,y.globalCompositeOperation="overlay",y.drawImage(zn(mn(M,{cellsX:3,cellsY:4,octaves:3}),128,192),0,0,x,w),y.globalCompositeOperation="source-over",y.globalAlpha=1;for(let T=0;T<900;T+=1){const S=M()>.45;y.fillStyle=S?`rgba(120,92,58,${C(M,.06,.14)})`:`rgba(14,9,4,${C(M,.06,.14)})`,y.fillRect(M()*x,M()*w,1.2,C(M,1,2.2))}Rt(y,T=>{const S=T.createRadialGradient(x/2,w*.42,10,x/2,w*.42,w*.62);S.addColorStop(0,"rgba(255,214,150,0.3)"),S.addColorStop(1,"rgba(255,214,150,0)"),T.fillStyle=S,T.fillRect(0,0,x,w);const A=T.createLinearGradient(0,0,0,w);A.addColorStop(0,"rgba(0,0,0,0.45)"),A.addColorStop(.4,"rgba(0,0,0,0)"),A.addColorStop(1,"rgba(0,0,0,0.5)"),T.fillStyle=A,T.fillRect(0,0,x,w)})}),c=new D(new Je(n-.1,s-.34,.02),new Re({map:l,roughness:.95,metalness:0}));c.position.set(0,(s+.22)/2-.04,.02),c.receiveShadow=!0,t.add(c);const d=[.86,1.46,2.06];for(const y of d){const x=new D(be(n-.16,.035,r-.12,.004),i.wood);x.position.set(0,y,r/2),x.receiveShadow=!0,t.add(x);const w=new D(be(n-.12,.052,.025,.004),i.woodDark);w.position.set(0,y-.012,r-.045),w.castShadow=!0,t.add(w)}const u=qu(i);u.position.set(0,d[0]+.015,r/2),t.add(u);const h=qu(i);h.position.set(.18,d[2]+.015,r/2-.04),h.rotation.y=.1,t.add(h);for(const y of[-1,1]){const x=n/2-.08,w=y*(x/2+.02),M=new Ve,T=(s+.22)/2-.04,S=s-.32;for(const[B,W,z,N]of[[x-.08,.04,w,T+S/2-.02],[x-.08,.04,w,T-S/2+.02],[.04,S,w-x/2+.02,T],[.04,S,w+x/2-.02,T]]){const F=new D(be(B,W,.025,.0025),i.brass);F.position.set(z,N,r-.02),M.add(F)}const A=new D(new Bt(x-.06,S-.06),i.glass);A.position.set(w,T,r-.022),A.renderOrder=10,M.add(A);for(const B of d){const W=new D(be(x-.09,.018,.023,.002),i.brass);W.position.set(w,B,r-.015),M.add(W)}const I=new D(new qe(.012,.012,.09,10),i.brass);I.position.set(w-y*(x/2-.07),T,r),M.add(I);const P=new D(new qe(.005,.005,.06,8),i.brass);P.rotation.z=Math.PI/2,P.position.set(w-y*(x/2-.045),T,r-.008),M.add(P),t.add(M)}const f=new D(be(.035,.075,.012,.003),i.brass);f.position.set(0,(s+.22)/2-.04,r+.004),t.add(f);const p=[],v=d.map(()=>[]),g=[1,2,0],m=Math.max(3,Math.ceil(e.length/g.length)),_=Math.min(.92,2.64/m);return e.forEach((y,x)=>{const w=Math.min(g.length-1,Math.floor(x/m)),M=x%m,T=Math.min(m,e.length-w*m),S=(M-(T-1)/2)*_,A=d[g[w]]+.015,I=new Ve,P=new D(be(.48,.018,.23,.004),i.woodDark);P.position.set(0,.009,.005),P.castShadow=!0,I.add(P);const B=v[g[w]];if(y.tags.includes("video")){const N=U1(i);N.position.set(-.14,.13,-.03),N.rotation.y=-.28,I.add(N);const F=N1(y);F.position.set(.12,.115,.06),F.rotation.y=.17,F.rotation.x=-.06,I.add(F),B.push({x:S-.14,z:r/2-.03,width:.4,depth:.15,opacity:.3},{x:S+.12,z:r/2+.06,width:.38,depth:.12,opacity:.3})}else{const N=F1(i,y);N.position.set(0,.13,0),N.rotation.x=-.08,I.add(N)}const z=new D(new Je(.21,.055,.008),D1(y.title,y.id));z.position.set(0,.028,.17),z.rotation.x=-.35,I.add(z),B.push({x:S,z:r/2+.17,width:.32,depth:.08,opacity:.3}),I.position.set(S,A,r/2),t.add(I),p.push({dto:y,group:I,hovered:!1,baseY:A})}),v.forEach((y,x)=>{y.length>0&&t.add(Ii(y,d[x]+.018))}),{group:t,placed:p}}function B1(i,e,t,n){const s=new Ve;s.name="cabinet-wall";const r=O1(i,e);r.group.position.set(.3,0,0),s.add(r.group);const o=zs(3.3,.85,.25);o.position.set(.3,.005,.25),s.add(o);const a=[[3.9,3,"cabinet-bank-a"],[-2.3,1.9,"cabinet-bank-b"],[-5.35,1,"cabinet-bank-c"]];for(const[c,d,u]of a){const h=od(i,d,u);h.position.set(c,0,0),s.add(h)}const l=fc(i,n.label,n.number,n.folio,t);return l.group.position.set(.3,3.18,.72),s.add(l.group),{group:s,artifacts:r.placed,update:c=>{for(const d of r.placed){const u=d.baseY+(d.hovered?.022:0);d.group.position.y=ac(d.group.position.y,u,.07,c)}},setLang:l.setLang}}function Yu(i,e,t){return bt(440,560,(n,s,r)=>{n.fillStyle="#e2d4b2",n.fillRect(0,0,s,r),n.strokeStyle="rgba(122,106,77,0.35)",n.lineWidth=1,n.strokeRect(8,8,s-16,r-16);const o=48;let a=84;n.fillStyle=Sn,n.font=`500 22px ${ft}`,n.textAlign="left",n.fillText("CURRICULUM VITAE",o,a),a+=40,n.font=`600 30px ${Jt}`,n.fillText(e.name[t],o,a),a+=26,n.font=`400 15px ${ft}`,n.fillStyle=Wt,n.fillText(e.role[t],o,a),a+=30,n.strokeStyle=Wt,n.beginPath(),n.moveTo(o,a),n.lineTo(s-48,a),n.stroke(),a+=34,n.font=`400 16px ${ft}`;for(const c of i.schema)n.fillStyle=Wt,n.fillText(c.label[t],o,a),n.fillStyle=Sn,n.fillText(c.value,o+150,a),a+=28;a+=16;const l=Ze("typed-lines");for(n.fillStyle="rgba(42,33,24,0.4)";a<r-80;)n.fillRect(o,a,(s-96)*(.5+l()*.5),5),a+=19;n.fillRect(o,a,90,5),n.fillStyle=Sn,n.fillRect(o+96,a-8,2.5,18)})}function z1(i,e){const t=new Ve,n=new Re({color:2170137,roughness:.38,metalness:.55}),s=new Gs;s.moveTo(-.15,0),s.lineTo(.15,0),s.lineTo(.14,.065),s.lineTo(.07,.13),s.lineTo(-.08,.2),s.lineTo(-.145,.14),s.closePath();const r=new wr(s,{depth:.022,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:1});r.rotateY(Math.PI/2),r.translate(-.011,0,0);for(const K of[-.185,.185]){const Q=new D(r,n);Q.position.set(K,.018,0),Q.castShadow=!0,t.add(Q)}const o=new D(be(.42,.07,.3,.008),n);o.position.y=.035,o.castShadow=!0,t.add(o);const a=new D(be(.38,.05,.2,.006),n);a.position.set(0,.085,.04),a.rotation.x=.18,a.castShadow=!0,t.add(a);const l=new D(be(.19,.012,.026,.004),n);l.position.set(0,.103,.145),t.add(l);const c=new Re({color:14273970,roughness:.5}),d=new ar(new qe(.011,.011,.008,10),c,30),u=new ar(new qe(.003,.0035,.026,8),new Re({color:2893859,roughness:.4,metalness:.65}),30),h=new ct;let f=0;for(let K=0;K<3;K+=1){const Q=10-K;for(let oe=0;oe<Q;oe+=1){const Ue=(oe-(Q-1)/2)*.034,We=.1-K*.045,we=.115+K*.012;h.setPosition(new L(Ue,we,We)),d.setMatrixAt(f,h),h.setPosition(new L(Ue,we-.015,We)),u.setMatrixAt(f,h),f+=1}}d.count=f,d.instanceMatrix.needsUpdate=!0,u.count=f,u.instanceMatrix.needsUpdate=!0,t.add(d),t.add(u);for(const K of[-.065,.065]){const Q=new D(new qe(.0035,.0035,.028,8),n);Q.position.set(K,.088,.145),t.add(Q)}const p=new D(be(.36,.12,.14,.01),n);p.position.set(0,.14,-.075),p.castShadow=!0,t.add(p);const v=new D(be(.26,.055,.09,.014),n);v.position.set(0,.176,-.037),v.castShadow=!0,t.add(v);const g=new D(new Je(.215,.012,.018),new Re({color:986380,roughness:.92,metalness:0}));g.position.set(0,.195,.006),t.add(g);for(const K of[-.105,.105]){const Q=new D(new qe(.043,.043,.016,24),n);Q.rotation.x=Math.PI/2,Q.position.set(K,.195,-.01),Q.castShadow=!0,t.add(Q);const oe=new D(new Tt(.016,.004,8,20),i.brass);oe.position.set(K,.195,.001),t.add(oe)}const m=new Re({color:5262148,roughness:.32,metalness:.78}),_=new ar(new qe(.0022,.0022,1,6),m,15),y=new ct,x=new en,w=new L(0,1,0);for(let K=0;K<15;K+=1){const Q=(K/14-.5)*.26,oe=new L(Q,.132,.008),Ue=new L(Q*.28,.184,-.046),We=Ue.clone().sub(oe),we=oe.clone().add(Ue).multiplyScalar(.5);x.setFromUnitVectors(w,We.clone().normalize()),y.compose(we,x,new L(1,We.length(),1)),_.setMatrixAt(K,y)}_.instanceMatrix.needsUpdate=!0,t.add(_);const M=new D(new qe(.026,.026,.38,24),new Re({color:1315086,roughness:.6}));M.rotation.z=Math.PI/2,M.position.set(0,.215,-.085),t.add(M);for(const K of[-1,1]){const Q=new D(new qe(.018,.018,.02,16),i.brass);Q.rotation.z=Math.PI/2,Q.position.set(K*.205,.215,-.085),t.add(Q)}const T=new D(new qe(.008,.008,.46,12),n);T.rotation.z=Math.PI/2,T.position.set(0,.245,-.085),t.add(T);for(const K of[-1,1]){const Q=new D(be(.025,.052,.05,.006),n);Q.position.set(K*.205,.245,-.085),Q.castShadow=!0,t.add(Q);const oe=new D(new qe(.0025,.0025,.16,8),i.brass);oe.position.set(K*.105,.305,-.088),oe.rotation.z=K*.035,t.add(oe)}const S=new D(new qe(.0045,.0045,.19,10),i.brass);S.position.set(.255,.285,-.055),S.rotation.z=-.78,S.rotation.x=.22,t.add(S);const A=new D(new qe(.01,.01,.045,12),new Re({color:1644051,roughness:.45}));A.rotation.x=Math.PI/2,A.position.set(.32,.35,-.02),t.add(A);for(const[K,Q]of[[-.15,.1],[.15,.1],[-.15,-.1],[.15,-.1]]){const oe=new D(new qe(.018,.021,.012,12),new Re({color:1315086,roughness:.8}));oe.position.set(K,-.006,Q),t.add(oe)}const I=-.16,P=new Bt(.235,.3,1,10),B=.215-.36,W=-.085+.1,z=Math.cos(I)*B+Math.sin(I)*W,N=-Math.sin(I)*B+Math.cos(I)*W,F=.026,O=-.06,G=P.attributes.position;for(let K=0;K<G.count;K+=1){const Q=G.getY(K);if(Q<O){const oe=(O-Q)/(O+.15),Ue=Math.PI/180*(10+75*oe),We=oe*oe;G.setY(K,Q+(z+F*Math.cos(Ue)-Q)*We),G.setZ(K,(N-F*Math.sin(Ue))*We)}else{const oe=(Q-O)/(.15-O);G.setZ(K,-.005*oe*oe)}}P.computeVertexNormals();const J=new D(P,e);return J.position.set(0,.36,-.1),J.rotation.x=I,t.add(J),{group:t,paper:J}}function k1(i,e){const t=new Ve,n=new D(be(.075,.13,.075,.006),i.woodDark);n.position.y=e-.065,n.castShadow=!0,t.add(n);const s=[[.027,0],[.038,e*.08],[.03,e*.18],[.039,e*.33],[.028,e*.52],[.041,e*.7],[.031,e*.84],[.044,e-.11]].map(([o,a])=>new ee(o,a)),r=new D(new Fn(s,24),i.woodDark);return r.castShadow=!0,r.receiveShadow=!0,t.add(r),t}function G1(i,e,t,n,s){const r=new Ve;r.name="cv-desk";const o=new Ve,a=new D(yr(be(1.7,.05,.8,.006),.43,.31),i.tabletop);a.position.y=.78,a.castShadow=!0,a.receiveShadow=!0,o.add(a);const l=new D(yr(be(1.63,.034,.73,.006),.12,.58),i.woodDark);l.position.y=.738,l.castShadow=!0,o.add(l);const c=[[.78,.32],[-.78,.32],[.78,-.32],[-.78,-.32]];for(const[F,O]of c){const G=k1(i,.735);G.position.set(F,0,O),o.add(G)}o.add(Ii(c.map(([F,O])=>({x:F,z:O,width:.14,depth:.14,opacity:.5})),.006));const d=new D(be(1.52,.14,.045,.004),i.woodDark);d.position.set(0,.66,.355),d.castShadow=!0,o.add(d);const u=new D(be(1.52,.12,.045,.004),i.woodDark);u.position.set(0,.66,-.355),u.castShadow=!0,o.add(u);for(const F of[-.78,.78]){const O=new D(be(.045,.12,.61,.004),i.woodDark);O.position.set(F,.66,0),O.castShadow=!0,o.add(O)}for(const[F,O]of[[-.56,.38],[0,.62],[.56,.38]]){const G=new D(be(O,.105,.022,.004),i.wood);G.position.set(F,.67,.386),G.castShadow=!0,o.add(G);const J=new D(new Tt(.024,.0035,9,22,Math.PI),i.brass);J.position.set(F,.652,.401),J.rotation.z=Math.PI,o.add(J);for(const K of[-1,1]){const Q=new D(new dn(.0065,10,8),i.brass);Q.position.set(F+K*.024,.652,.401),o.add(Q)}}for(const F of[-.78,.78]){const O=new D(be(.05,.055,.61,.004),i.woodDark);O.position.set(F,.2,0),O.castShadow=!0,o.add(O)}const h=new D(be(1.54,.055,.05,.004),i.woodDark);h.position.set(0,.2,-.32),h.castShadow=!0,o.add(h),o.position.set(0,0,.95),r.add(o);const f=zs(1.6,.9,.22);f.position.set(0,.005,.95),r.add(f);const p=new Re({map:Yu(e,t,n),roughness:.9,side:In}),v=z1(i,p);v.group.position.set(0,.817,.92),r.add(v.group);const g=new Ve,m=new D(new qe(.028,.035,.05,16),i.glass);m.position.y=.025,g.add(m);const _=new D(new qe(.022,.028,.034,16),new Re({color:790038,roughness:.15}));_.position.y=.018,g.add(_);const y=new D(new Tt(.0235,.0035,8,18),i.brass);y.rotation.x=Math.PI/2,y.position.y=.052,g.add(y),g.position.set(-.55,.805,.85),r.add(g),r.add(Ii([{x:0,z:.92,width:.5,depth:.36,opacity:.3},{x:-.55,z:.85,width:.09,depth:.09,opacity:.3}],.806));const x=new Ve,w=new D(be(.42,.04,.4,.004),i.wood);w.position.y=.45,w.castShadow=!0,x.add(w);const M=new D(be(.36,.035,.34,.012),i.leather(3810592));M.position.set(0,.487,.005),M.castShadow=!0,x.add(M);for(const[F,O]of[[.18,.17],[-.18,.17]]){const G=new D(be(.04,.45,.04,.003),i.wood);G.position.set(F,.225,O),G.castShadow=!0,x.add(G)}const T=-.06,S=F=>-.17-(F-.59)*.06;for(const F of[.18,-.18]){const O=new D(be(.04,1.18,.04,.003),i.wood);O.position.set(F,.59,-.17),O.rotation.x=T,O.castShadow=!0,x.add(O);const G=new D(new dn(.029,14,10),i.wood);G.position.set(F,1.205,S(1.205)),G.castShadow=!0,x.add(G)}const A=new D(be(.392,.09,.03,.004),i.wood);A.position.set(0,1.12,S(1.12)),A.rotation.x=T,A.castShadow=!0,x.add(A);const I=new D(be(.392,.07,.026,.004),i.wood);I.position.set(0,.6,S(.6)),I.rotation.x=T,I.castShadow=!0,x.add(I);for(const F of[-.1,0,.1]){const O=new D(be(.05,.5,.018,.003),i.woodDark);O.position.set(F,.855,S(.855)),O.rotation.x=T,x.add(O)}const P=new D(new Tt(.075,.012,10,30),i.wood);P.position.set(0,.88,S(.88)+.012),P.rotation.x=T,x.add(P);const B=new D(be(.35,.035,.03,.003),i.woodDark);B.position.set(0,.16,S(.16)),B.rotation.x=T,x.add(B);const W=new D(be(.35,.035,.03,.003),i.woodDark);W.position.set(0,.16,.17),W.castShadow=!0,x.add(W);for(const F of[-.18,.18]){const O=new D(be(.03,.035,.33,.003),i.woodDark);O.position.set(F,.18,.005),O.castShadow=!0,x.add(O)}x.add(Ii([{x:.18,z:.17},{x:-.18,z:.17},{x:.18,z:S(0)},{x:-.18,z:S(0)}].map(F=>({...F,width:.09,depth:.09,opacity:.5})),.006)),x.position.set(.3,0,1.78),x.rotation.y=Math.PI+.15,r.add(x);const z=zs(.6,.6,.2);z.position.set(.3,.005,1.78),r.add(z);for(const[F,O]of[[3.95,"cv-bank-a"],[-3.95,"cv-bank-b"]]){const G=od(i,3.8,O);G.position.set(F,0,0),r.add(G)}const N=fc(i,s.label,s.number,s.folio,n);return N.group.position.set(0,3.2,.62),r.add(N.group),{group:r,typewriter:v.group,focusTargets:[v.group],update:(F,O)=>{v.paper.rotation.x=-.16+Math.sin(O*.7)*.012},setLang:F=>{p.map?.dispose(),p.map=Yu(e,t,F),p.needsUpdate=!0,N.setLang(F)}}}const La=.36,Da=.48;function H1(i,e){return bt(680,920,(t,n,s)=>{lc(t,n,s,Ze("sheet-intro"),{deckle:!0});const r=64,o=n-64;let a=108;t.fillStyle=Sn,t.textAlign="left",t.textBaseline="alphabetic",t.font=`600 56px ${Jt}`,t.fillText(i.profile.name[e],r,a),a+=34,t.font=`500 17px ${ft}`,t.fillStyle=Wt,t.fillText(i.profile.role[e],r,a),a+=18,t.strokeStyle=Wt,t.lineWidth=1.5,t.beginPath(),t.moveTo(r,a),t.lineTo(o,a),t.stroke(),a+=44,t.fillStyle=Er,t.font=`400 23px ${Jt}`,a=Sr(t,i.about.introPlain[e],r,a,o-r,34,9),a+=30,t.font=`500 16px ${ft}`;for(const l of i.about.facts)t.fillStyle=Wt,t.fillText(l.label[e].toUpperCase(),r,a),t.fillStyle=Sn,t.fillText(l.text[e],r+170,a),a+=32;t.fillStyle=Wt,t.font=`500 14px ${ft}`,t.fillText(`ED. ${i.profile.edition} · ${i.about.updated}`,r,s-64)})}function V1(i,e){return bt(680,920,(t,n,s)=>{lc(t,n,s,Ze("sheet-bio"),{deckle:!0});const r=64,o=n-64;let a=100;t.fillStyle=Wt,t.font=`500 15px ${ft}`,t.textAlign="left",t.fillText(`${an.sheetBio[e].toUpperCase()} · 01`,r,a),a+=46,t.fillStyle=Sn,t.font=`italic 500 26px ${Jt}`,a=Sr(t,`“${i.about.quote[e]}”`,r,a,o-r,36,4),a+=20,t.strokeStyle=Wt,t.lineWidth=1.5,t.beginPath(),t.moveTo(r,a),t.lineTo(o,a),t.stroke(),a+=40,t.fillStyle=Er,t.font=`400 19px ${Jt}`;for(const l of i.about.paragraphsPlain)if(a=Sr(t,l[e],r,a,o-r,28,8),a+=18,a>s-120)break})}function W1(i,e){return bt(680,920,(t,n,s)=>{lc(t,n,s,Ze("sheet-timeline"),{deckle:!0});const r=64,o=n-64;let a=100;t.fillStyle=Wt,t.font=`500 15px ${ft}`,t.textAlign="left",t.fillText(`${an.sheetTimeline[e].toUpperCase()} · 02`,r,a),a+=52;for(const l of i.about.timeline){t.fillStyle=Sn,t.font=`600 30px ${Jt}`,t.fillText(l.time,r,a),t.font=`500 13px ${ft}`,t.fillStyle=Wt;const c=l.tag[e].toUpperCase();if(t.textAlign="right",t.fillText(c,o,a),t.textAlign="left",a+=30,t.fillStyle=Er,t.font=`400 19px ${Jt}`,a=Sr(t,l.textPlain[e],r,a,o-r,27,4),a+=14,t.strokeStyle="rgba(122,106,77,0.4)",t.lineWidth=1,t.beginPath(),t.moveTo(r,a),t.lineTo(o,a),t.stroke(),a+=32,a>s-100)break}})}const Zu={intro:H1,bio:V1,timeline:W1};function X1(i,e){const t=[new ee(0,0),new ee(.048,0),new ee(.06,e*.055),new ee(.036,e*.12),new ee(.054,e*.2),new ee(.034,e*.31),new ee(.058,e*.43),new ee(.035,e*.57),new ee(.054,e*.7),new ee(.04,e*.82),new ee(.064,e*.91),new ee(.068,e),new ee(0,e)],n=new D(new Fn(t,28),i.woodDark);return n.castShadow=!0,n.receiveShadow=!0,n}function $1(i){const e=new Ve,t=new Tt(.026,.0022,12,24);for(const s of[-1,1]){const r=new D(t,i.brass);r.rotation.x=Math.PI/2,r.position.set(s*.029,.0026,0),e.add(r);const o=new D(new Ns(.023,28),i.glass);o.rotation.x=-Math.PI/2,o.position.set(s*.029,.0024,0),o.renderOrder=2,e.add(o);const a=new D(new dn(.004,10,8),i.brass);a.position.set(s*.057,.0032,0),e.add(a)}const n=new D(new Je(.012,.003,.003),i.brass);n.position.y=.0026,n.position.z=0,e.add(n);for(const s of[-1,1]){const r=new D(new Je(.085,.002,.003),i.brass);r.position.set(s*.014,.0052,.024),r.rotation.y=s*.18,e.add(r)}return e}function q1(){const i=new Ve,e=new Re({color:15327696,roughness:.34,envMapIntensity:.8}),t=[[0,0],[.024,0],[.03,.002],[.05,.009],[.056,.013],[.054,.014],[.046,.0115],[.024,.0048],[0,.004]].map(([l,c])=>new ee(l,c)),n=new D(new Fn(t,36),e);n.castShadow=!0,i.add(n);const s=[[0,0],[.021,0],[.025,.003],[.029,.018],[.034,.044],[.0335,.046],[.0305,.044],[.0265,.018],[.023,.012],[0,.011]].map(([l,c])=>new ee(l,c)),r=new D(new Fn(s,36),e);r.position.y=.004,r.castShadow=!0,i.add(r);const o=new D(new Tt(.014,.0035,10,24,Math.PI),e);o.position.set(.036,.03,0),o.rotation.z=-Math.PI/2,o.castShadow=!0,i.add(o);for(const l of[.044,.016]){const c=new D(new dn(.0046,12,10),e);c.position.set(.0345,l,0),i.add(c)}const a=new D(new Ns(.0305,32),new Re({color:3810322,roughness:.15,envMapIntensity:1.1}));return a.rotation.x=-Math.PI/2,a.position.y=.042,i.add(a),i}function Y1(i){const e=new Ve,t=new D(new qe(.06,.08,.02,32),i.brass);t.position.y=.01,t.castShadow=!0,e.add(t);const n=new D(new qe(.016,.022,.014,16),i.brass);n.position.y=.027,e.add(n);const s=new D(new qe(.008,.008,.126,12),i.brass);s.position.y=.097,e.add(s);const r=new Ve;r.position.y=.16;const o=new Tt(.085,.005,12,40),a=new D(o,i.brass),l=new D(o,i.brass);l.rotation.x=Math.PI/2;const c=new D(new Tt(.064,.004,12,36),i.brass);c.rotation.x=Math.PI/3,r.add(a,l,c),r.rotation.z=.41;const d=new D(new dn(.02,14,10),i.brass);return r.add(d),e.add(r),{group:e,spinner:c}}function Z1(i,e,t){const n=new Ve;n.name="about-table",n.add(zs(2.6,1.7,.2,.016)),n.add(Ii([{x:1,z:.62,width:.22,depth:.22,opacity:.5},{x:-1,z:.62,width:.22,depth:.22,opacity:.5},{x:1,z:-.62,width:.22,depth:.22,opacity:.5},{x:-1,z:-.62,width:.22,depth:.22,opacity:.5}],.017));const s=new D(be(2.3,.06,1.5,.006),i.tabletop);s.position.y=Vt-.03,s.castShadow=!0,s.receiveShadow=!0,n.add(s);const r=new D(be(2.23,.038,1.43,.006),i.woodDark);r.position.y=Vt-.077,r.castShadow=!0,r.receiveShadow=!0,n.add(r);const o=new Ve;for(const[G,J,K,Q]of[[2.04,.05,0,.64],[2.04,.05,0,-.64],[.05,1.24,1.02,0],[.05,1.24,-1.02,0]]){const oe=new D(be(G,.12,J,.003),i.woodDark);oe.position.set(K,Vt-.12,Q),oe.castShadow=!0,oe.receiveShadow=!0,o.add(oe)}n.add(o);for(const G of[-.48,.48]){const J=new D(be(.78,.078,.018,.003),i.wood);J.position.set(G,Vt-.12,.675),J.castShadow=!0,n.add(J);const K=new D(be(.71,.05,.007,.002),i.woodDark);K.position.set(G,Vt-.12,.688),K.castShadow=!0,n.add(K);const Q=new D(new Tt(.027,.0038,10,24,Math.PI),i.brass);Q.position.set(G,Vt-.137,.695),Q.rotation.z=Math.PI,n.add(Q);for(const oe of[-1,1]){const Ue=new D(new dn(.007,12,8),i.brass);Ue.position.set(G+oe*.027,Vt-.137,.695),n.add(Ue)}}const a=Vt-.06;for(const[G,J]of[[1,.62],[-1,.62],[1,-.62],[-1,-.62]]){const K=X1(i,a);K.position.set(G,0,J),n.add(K);const Q=new D(be(.135,.14,.135,.006),i.woodDark);Q.position.set(G,.91,J),Q.castShadow=!0,Q.receiveShadow=!0,n.add(Q);const oe=new D(new qe(.058,.052,.055,24),i.woodDark);oe.position.set(G,.82,J),oe.castShadow=!0,n.add(oe)}for(const G of[-1,1]){const J=new D(be(.075,.09,1.22,.006),i.woodDark);J.position.set(G,.29,0),J.castShadow=!0,J.receiveShadow=!0,n.add(J)}const l=new D(be(1.98,.075,.075,.006),i.woodDark);l.position.set(0,.29,0),l.castShadow=!0,l.receiveShadow=!0,n.add(l);for(const G of[-1,1])for(const J of[-.62,.62]){const K=new D(be(.11,.115,.11,.004),i.woodDark);K.position.set(G,.29,J),K.castShadow=!0,n.add(K);const Q=new D(new qe(.011,.011,.012,12),i.wood);Q.rotation.z=Math.PI/2,Q.position.set(G+Math.sign(G)*.059,.29,J),n.add(Q)}const c=[],d=[{kind:"intro",x:.05,z:-.04,spin:.05},{kind:"bio",x:.62,z:.22,spin:-.21},{kind:"timeline",x:-.52,z:.24,spin:.24}],u=d.map(G=>{const J=new Re({map:Zu[G.kind](e,t),transparent:!0,roughness:.92,metalness:0,normalMap:i.parchment.normalMap,normalScale:new ee(.25,.25)}),K=Ze(`sheet-curl-${G.kind}`),Q=K()>.5?1:-1,oe=K()>.5?1:-1,Ue=.001+K()*.0012,We=.003+K()*.004,we=new Bt(La,Da,8,10),te=we.getAttribute("position");for(let se=0;se<te.count;se+=1){const Oe=te.getX(se)/(La/2),Ie=te.getY(se)/(Da/2);te.setZ(se,Ue*(Oe*Oe+Ie*Ie)*.5+We*Math.max(0,Oe*Q)**2*Math.max(0,Ie*oe)**2)}we.computeVertexNormals();const ge=new D(we,J),de=Vt+8e-4;return ge.rotation.x=-Math.PI/2,ge.rotation.z=G.spin,ge.position.set(G.x,de,G.z),ge.receiveShadow=!0,n.add(ge),{kind:G.kind,mesh:ge,hovered:!1,baseY:de}});for(const G of d)c.push({x:G.x,z:G.z,width:La+.08,depth:Da+.08,opacity:.16});let h=null;if(e.profile.portrait){h=new Ve;const G=new D(be(.3,.37,.008,.002),i.brass);G.position.z=-.004,G.castShadow=!0,h.add(G);for(const[oe,Ue,We,we]of[[.3,.045,0,.1625],[.3,.045,0,-.1625],[.045,.28,.1275,0],[.045,.28,-.1275,0]]){const te=new D(be(oe,Ue,.016,.002),i.brass);te.position.set(We,we,.004),te.castShadow=!0,h.add(te)}const J=new Re({color:4865324,roughness:.85}),K=new D(new Bt(.26,.325),J);K.position.z=8e-4,h.add(K),new Ph().load(e.profile.portrait.url,oe=>{oe.colorSpace=St,J.map=oe,J.color.set(16774116),J.needsUpdate=!0});const Q=new D(be(.02,.32,.02,.003),i.brass);Q.position.set(0,-.03,-.107),Q.rotation.x=.62,h.add(Q),h.position.set(-.78,Vt+.185,-.42),h.rotation.x=-.13,h.rotation.y=.34,n.add(h),c.push({x:-.78,z:-.4,width:.34,depth:.12,opacity:.3}),c.push({x:-.78,z:-.62,width:.1,depth:.08,opacity:.25})}const f=Y1(i);f.group.position.set(.88,Vt,-.44),n.add(f.group),c.push({x:.88,z:-.44,width:.2,depth:.2,opacity:.3});const p=new Ve,v=Ze("table-stack"),g=.006;let m=Vt;for(const G of[3099196,7218224,4608107]){const J=.028+v()*.012,K=i.leather(G),Q=new Ve;for(const We of[-1,1]){const we=new D(be(.21,g,.29,.002),K);we.position.y=We*(J-g)*.5,we.castShadow=!0,Q.add(we)}const oe=new D(be(g,J-.002,.29,.002),K);oe.position.x=-.105+g/2-.001,Q.add(oe);const Ue=new D(new Je(.198,J-2*g,.278),i.parchment);Ue.position.x=.002,Q.add(Ue),Q.position.set(-.42,m+J/2,-.52),Q.rotation.y=(v()-.5)*.4,p.add(Q),m+=J}n.add(p),c.push({x:-.42,z:-.52,width:.3,depth:.38,opacity:.28});const _=new Ve,y=new Re({color:1906706,roughness:.35,metalness:.4}),x=new D(new qe(.0045,.007,.12,16),y);x.rotation.z=Math.PI/2,x.castShadow=!0,_.add(x);const w=new D(new qe(.007,.0075,.046,16),y);w.rotation.z=Math.PI/2,w.position.x=-.081,w.castShadow=!0,_.add(w);const M=new D(new Tt(.0062,.0012,8,16),i.brass);M.rotation.y=Math.PI/2,M.position.x=.061,_.add(M);const T=new D(new qe(0,.0042,.026,10),i.brass);T.rotation.z=-Math.PI/2,T.position.x=.074,_.add(T);const S=new D(be(.034,.0025,.0025,.001),i.brass);S.position.set(-.08,.0075,0),_.add(S),_.rotation.y=.5,_.position.set(.36,Vt+.007,.33),n.add(_),c.push({x:.36,z:.33,width:.13,depth:.1,opacity:.16});const A=q1();A.position.set(-.92,Vt,.32),n.add(A),c.push({x:-.92,z:.32,width:.14,depth:.14,opacity:.3});const I=$1(i);I.position.set(.32,Vt+6e-4,.47),I.rotation.y=-.7,n.add(I),c.push({x:.32,z:.47,width:.11,depth:.09,opacity:.18});const P=new Ve,B=new Re({color:14670022,roughness:.28,envMapIntensity:.9}),W=[[0,0],[.024,0],[.028,.004],[.0285,.016],[.026,.0175],[.0235,.0165],[.0235,.007],[0,.006]].map(([G,J])=>new ee(G,J)),z=new D(new Fn(W,32),B);z.castShadow=!0,P.add(z);const N=new D(new dn(.0228,28,10,0,Math.PI*2,0,Math.PI/2),new Re({color:9840666,roughness:.95,envMapIntensity:.1}));N.scale.y=.35,N.position.y=.008,P.add(N);const F=[[0,0],[.0265,0],[.0295,.004],[.0295,.009],[.024,.012],[0,.013]].map(([G,J])=>new ee(G,J)),O=new D(new Fn(F,32),B);return O.position.set(.064,.0135,.014),O.rotation.set(Math.PI,0,.08),O.castShadow=!0,P.add(O),P.position.set(.3,Vt,-.35),n.add(P),c.push({x:.3,z:-.35,width:.09,depth:.09,opacity:.25}),c.push({x:.364,z:-.336,width:.08,depth:.08,opacity:.2}),n.add(Ii(c,Vt+8e-4)),{group:n,sheets:u,portraitGroup:h,update:(G,J)=>{f.spinner.rotation.z+=G*.25;for(const K of u){const Q=K.baseY+(K.hovered?.02:0);K.mesh.position.y=ac(K.mesh.position.y,Q,.07,G)}},setLang:G=>{for(const J of u){const K=J.mesh.material;K.map?.dispose(),K.map=Zu[J.kind](e,G),K.needsUpdate=!0}}}}const K1=500;function J1(i,e,t){const n=document.createElement("div");n.style.cssText=["position:fixed","left:10px","bottom:10px","z-index:99","font:11px/1.6 ui-monospace,monospace","color:#9fdf9f","background:rgba(0,0,0,0.65)","padding:6px 9px","border-radius:4px","pointer-events:none","white-space:pre"].join(";"),document.body.appendChild(n);let s=!0,r=!1,o=0,a=0,l=performance.now(),c=0;function d(){e.setIdleFps(s?30:null),i.setPixelRatio(Kh(r?"low":"full")),t()}function u(h){h.key==="1"?(s=!s,d()):h.key==="2"&&(r=!r,d())}return window.addEventListener("keydown",u),{sample:(h,f)=>{o=o===0?h:o*.9+h*.1,a+=1;const p=performance.now();if(p-l<K1)return;c=a*1e3/(p-l),a=0,l=p;const v=i.info.render;n.textContent=`${c.toFixed(0)} fps (${f?"active":"idle"})
render ${o.toFixed(2)} ms cpu
${v.calls} calls · ${(v.triangles/1e3).toFixed(1)}k tris
dpr ${i.getPixelRatio().toFixed(2)}
[1] idle: ${s?"30fps":"off"}   [2] dpr: ${r?"1.5":"full"}`},dispose:()=>{window.removeEventListener("keydown",u),n.remove()}}}function lt(i){return i.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function j1(i,e){return i.map(t=>{const n=t.external?' target="_blank" rel="noopener noreferrer"':"";return`<a class="${t.primary?"p-link primary":"p-link"}" href="${lt(t.href)}"${n}>${lt(t.label[e])}${t.external?" ↗":""}</a>`}).join("")}function Q1(i,e){return`
    <div class="p-meta">${lt(i.meta[e])}</div>
    <h2 class="p-title">${i.titleHtml[e]}</h2>
    ${i.authorsHtml?`<div class="p-authors">${i.authorsHtml[e]}</div>`:""}
    <div class="p-rule"></div>
    <div class="p-summary">${i.summaryHtml[e]}</div>
    <div class="p-links">${j1(i.links,e)}</div>
    <div class="p-folio">${lt(i.id)}</div>`}function eS(i,e){const t=i.tagLabels.map(s=>lt(s[e])).join(" · "),n=lt(i.langs.map(s=>s.toUpperCase()).join("/"));return`
    <div class="p-meta">${t} · ${lt(i.date)} · ${n}</div>
    <h2 class="p-title">${lt(i.title)}</h2>
    <div class="p-rule"></div>
    ${i.image?`<img class="p-image" src="${lt(i.image.url)}" alt="${lt(i.image.alt)}" />`:""}
    <div class="p-summary">${lt(i.summary)}</div>
    <div class="p-links"><a class="p-link primary" href="${lt(i.url)}" target="_blank" rel="noopener noreferrer">${an.visit[e]}</a></div>
    <div class="p-folio">${lt(i.id)}</div>`}function tS(i,e,t){if(e==="bio"){const r=i.about.paragraphsHtml.map(o=>`<p>${o[t]}</p>`).join("");return`
      <div class="p-meta">${an.sheetBio[t].toUpperCase()} · 01</div>
      <blockquote class="p-quote">${lt(i.about.quote[t])}</blockquote>
      <div class="p-rule"></div>
      <div class="p-summary">${r}</div>`}if(e==="timeline"){const r=i.about.timeline.map(o=>`
        <div class="p-event">
          <div class="p-event-head"><span class="p-event-time">${lt(o.time)}</span><span class="p-event-tag">${lt(o.tag[t])}</span></div>
          <div class="p-event-text">${o.textHtml[t]}</div>
        </div>`).join("");return`
      <div class="p-meta">${an.sheetTimeline[t].toUpperCase()} · 02</div>
      <h2 class="p-title">${lt(i.about.timeline.length?i.about.timeline[i.about.timeline.length-1].time:"")}–${lt(i.about.timeline[0]?.time??"")}</h2>
      <div class="p-rule"></div>
      ${r}`}const n=i.about.facts.map(r=>`<div class="p-fact"><span class="p-fact-label">${lt(r.label[t])}</span><span>${lt(r.text[t])}</span></div>`).join(""),s=i.profile.contacts.map(r=>`<a class="p-link" href="${lt(r.href)}" target="_blank" rel="noopener noreferrer">${lt(r.label)} ↗</a>`).join("");return`
    <div class="p-meta">${lt(i.profile.role[t])}</div>
    <h2 class="p-title">${lt(i.profile.name[t])}</h2>
    <div class="p-rule"></div>
    <div class="p-summary">${i.about.introHtml[t]}</div>
    <div class="p-facts">${n}</div>
    <div class="p-links">${s}<a class="p-link" href="mailto:${lt(i.profile.email)}">email ↗</a></div>`}function nS(i,e){const t=i.cv.schema.map(n=>`<div class="p-fact"><span class="p-fact-label">${lt(n.label[e])}</span><span>${lt(n.value)}</span></div>`).join("");return`
    <div class="p-meta">${lt(i.cv.version)} · ${lt(i.cv.updated)}</div>
    <h2 class="p-title">Curriculum Vitae</h2>
    <div class="p-rule"></div>
    <div class="p-summary"><p>${lt(i.cv.description[e])}</p></div>
    <div class="p-facts">${t}</div>
    <div class="p-links">
      <a class="p-link primary" href="${lt(i.cv.pdf)}" target="_blank" rel="noopener noreferrer">${lt(i.cv.viewLabel[e])}</a>
      <a class="p-link" href="${lt(i.cv.pdf)}" download>${lt(i.cv.downloadLabel[e])}</a>
    </div>`}function iS(i,e,t){let n=t,s="about",r="none",o=null,a=null,l=null,c=null,d=null,u=null;i.innerHTML=`
    <header class="o-top">
      <div class="o-brand"><span class="o-brand-name"></span><span class="o-brand-sub"></span></div>
      <div class="o-folio"></div>
      <div class="o-actions">
        <button class="o-i o-lang" type="button"></button>
        <a class="o-i o-exit"></a>
      </div>
    </header>
    <nav class="o-compass"></nav>
    <div class="o-hint"></div>
    <aside class="o-panel" hidden>
      <button class="o-i o-panel-close" type="button">×</button>
      <div class="o-panel-body"></div>
    </aside>
    <button class="o-i o-skip" type="button" hidden></button>
    <div class="o-toast" hidden><span class="o-toast-msg"></span><button class="o-i o-toast-btn" type="button" hidden></button></div>
  `;const h={top:i.querySelector(".o-top"),brandName:i.querySelector(".o-brand-name"),brandSub:i.querySelector(".o-brand-sub"),folio:i.querySelector(".o-folio"),langBtn:i.querySelector(".o-lang"),exit:i.querySelector(".o-exit"),compass:i.querySelector(".o-compass"),hint:i.querySelector(".o-hint"),panel:i.querySelector(".o-panel"),panelBody:i.querySelector(".o-panel-body"),panelClose:i.querySelector(".o-panel-close"),skip:i.querySelector(".o-skip"),toastBox:i.querySelector(".o-toast"),toastMsg:i.querySelector(".o-toast-msg"),toastBtn:i.querySelector(".o-toast-btn")};function f(y){return e.sections.find(x=>x.key===y)}function p(y){return n==="zh"?y.zh:y.en.toUpperCase()}function v(){h.compass.innerHTML="";for(const y of e.sections){const x=document.createElement("button");x.type="button",x.className=`o-i o-stop${y.key===s?" active":""}`,x.innerHTML=`<span class="o-stop-num">${lt(y.number)}</span><span class="o-stop-label">${lt(p(y.label))}</span>`,x.addEventListener("click",()=>l?.(y.key)),h.compass.appendChild(x)}}function g(){if(r==="none"){h.hint.textContent="";return}h.hint.textContent=r==="item"?an.hintItem[n]:an.hintStation[n]}function m(){o&&(h.toastMsg.textContent=o.message[n],h.toastBtn.hidden=o.action===null,o.action&&(h.toastBtn.textContent=o.action.label[n]))}function _(){h.brandName.textContent=e.profile.name[n],h.brandSub.textContent=` · ${an.brand[n]}`;const y=f(s);h.folio.textContent=y?`${y.number} · ${p(y.label)} · FOL. ${y.folio}`:"",h.langBtn.textContent=an.langToggle[n],h.exit.textContent=an.exit[n],h.exit.href=e.exit[n],h.skip.textContent=an.skip[n],v(),g(),m()}return h.langBtn.addEventListener("click",()=>c?.()),h.skip.addEventListener("click",()=>d?.()),h.panelClose.addEventListener("click",()=>u?.()),h.toastBtn.addEventListener("click",()=>o?.action?.onAction()),_(),{setLang:y=>{n=y,_(),a&&!h.panel.hidden&&(h.panelBody.innerHTML=a(n))},setSection:y=>{s=y,_()},showPanel:y=>{a=y,h.panelBody.innerHTML=y(n),h.panel.hidden=!1,requestAnimationFrame(()=>h.panel.classList.add("show"))},hidePanel:()=>{a=null,h.panel.classList.remove("show"),h.panel.hidden=!0},setHint:y=>{r=y,g()},showSkip:()=>{h.skip.hidden=!1},hideSkip:()=>{h.skip.hidden=!0},setChromeVisible:y=>{h.top.classList.toggle("dim",!y),h.compass.classList.toggle("dim",!y)},toast:(y,x)=>{o={message:y,action:x??null},m(),h.toastBox.hidden=!1},hideToast:()=>{o=null,h.toastBox.hidden=!0},panelContains:y=>y instanceof Node&&h.panel.contains(y),onNavigate:y=>{l=y},onLangToggle:y=>{c=y},onSkip:y=>{d=y},onClosePanel:y=>{u=y},dispose:()=>{i.innerHTML=""}}}const sS=["intro","bio","timeline"];function oS({canvas:i,ui:e,dto:t,lang:n}){let s=n;const r=window.matchMedia("(prefers-reduced-motion: reduce)");let o=r.matches;const a=Yv(i),l=new dh;l.background=new Fe(985606);const c=qv(a);l.environment=c.envMap,l.environmentIntensity=.26;const d=wv(),u=Kv(d),h=u.camera,f=bx(c,s);l.add(f.group);const p=mx(c);l.add(p.group);const v=hx(c,f.rainPane);l.add(v.group);const g=k=>t.sections.find(fe=>fe.key===k)??{key:k,label:{en:k,zh:k},number:"",folio:"",count:""},m=Z1(c,t,s);l.add(m.group);const _=g("research"),y=$u(c,t.research,s,{seed:"research-wall",label:_.label,number:_.number,folio:_.folio,band:3.6,subPlaques:[{label:{en:"Research",zh:"研究"},y:2.44,scale:.5},{label:{en:"Internship",zh:"实习"},y:1.28,scale:.5}]});y.group.position.set(0,0,-5.96),l.add(y.group);const x=g("projects"),w=$u(c,t.projects,s,{seed:"projects-wall",label:x.label,number:x.number,folio:x.folio,style:"boxes"});w.group.position.set(Bs.half-.04,0,0),w.group.rotation.y=-Math.PI/2,l.add(w.group);const M=g("cabinet"),T=B1(c,t.cabinet,s,{label:M.label,number:M.number,folio:M.folio});T.group.position.set(0,0,Bs.half-.04),T.group.rotation.y=Math.PI,l.add(T.group);const S=g("cv"),A=G1(c,t.cv,t.profile,s,{label:S.label,number:S.number,folio:S.folio});A.group.position.set(-5.96,0,0),A.group.rotation.y=Math.PI/2,l.add(A.group);const I=new Map;for(const k of y.books)I.set(`research/${k.dto.key}`,{book:k,section:"research",normal:new L(0,0,1)});for(const k of w.books)I.set(`projects/${k.dto.key}`,{book:k,section:"projects",normal:new L(-1,0,0)});const P=new Map;for(const k of T.artifacts)P.set(k.dto.key,k);function B(k){const fe=k.book.group.getWorldPosition(new L);return{position:fe.clone().add(k.normal.clone().multiplyScalar(1.52)).add(new L(0,.06,0)),target:fe.clone().add(k.normal.clone().multiplyScalar(.55))}}function W(k){const fe=k.group.getWorldPosition(new L);return{position:fe.clone().add(new L(0,.16,-1.45)),target:fe.clone().add(new L(0,.08,0))}}function z(k){const U=(m.sheets.find(He=>He.kind===k)??m.sheets[0]).mesh.getWorldPosition(new L);return{position:U.clone().add(new L(.04,.82,.46)),target:U}}function N(){const k=A.typewriter.getWorldPosition(new L),fe=new L(0,0,1).applyQuaternion(A.group.getWorldQuaternion(new en));return{position:k.clone().add(fe.multiplyScalar(1.4)).add(new L(0,.58,0)),target:k.clone().add(new L(0,.16,0))}}const F=rx(h,i),O=sx(d,()=>o),G=iS(e,t,s);function J(k){return k.section==="research"||k.section==="projects"?I.has(`${k.section}/${k.key}`):k.section==="cabinet"?P.has(k.key):k.section==="about"?sS.includes(k.key):k.section==="cv"&&k.key==="cv"}function K(k){return k==="research"?t.research[0]?.key??null:k==="projects"?t.projects[0]?.key??null:k==="cabinet"?t.cabinet[0]?.key??null:k==="about"?"intro":"cv"}function Q(k){if(G.setHint("item"),k.section==="research"||k.section==="projects"){const fe=I.get(`${k.section}/${k.key}`);if(!fe)return null;const U=B(fe);return O.open(fe.book,U,s),G.showPanel(He=>Q1(fe.book.dto,He)),U}if(k.section==="cabinet"){const fe=P.get(k.key);return fe?(G.showPanel(U=>eS(fe.dto,U)),W(fe)):null}if(k.section==="about"){const fe=k.key;return G.showPanel(U=>tS(t,fe,U)),z(fe)}return G.showPanel(fe=>nS(t,fe)),N()}function oe(){O.close(),G.hidePanel(),G.setHint("station")}const Ue=new Set;function We(k){if(!o){if(k==="research")y.glint();else if(k==="projects")w.glint()}}const we=ix({director:u,onSection:k=>{G.setSection(k),G.setHint("station"),We(k)},onIntroStart:()=>{G.setChromeVisible(!1),G.showSkip(),G.setHint("none")},onIntroEnd:()=>{G.setChromeVisible(!0),G.hideSkip(),G.setHint("station")},openItem:Q,closeItem:oe,validateItem:J,firstItem:K});G.onNavigate(k=>we.navigate(k)),G.onSkip(()=>we.skipIntro()),G.onClosePanel(()=>we.close()),G.onLangToggle(()=>ge(s==="en"?"zh":"en"));for(const k of I.values())F.add({object:k.book.group,onHoverEnter:()=>{k.book.busy||(k.book.hovered=!0)},onHoverLeave:()=>{k.book.hovered=!1},onClick:()=>we.open({section:k.section,key:k.book.dto.key})});for(const k of P.values())F.add({object:k.group,onHoverEnter:()=>{k.hovered=!0},onHoverLeave:()=>{k.hovered=!1},onClick:()=>we.open({section:"cabinet",key:k.dto.key})});for(const k of m.sheets)F.add({object:k.mesh,onHoverEnter:()=>{k.hovered=!0},onHoverLeave:()=>{k.hovered=!1},onClick:()=>we.open({section:"about",key:k.kind})});m.portraitGroup&&F.add({object:m.portraitGroup,onClick:()=>we.open({section:"about",key:"intro"})});for(const k of A.focusTargets)F.add({object:k,onClick:()=>we.open({section:"cv",key:"cv"})});(()=>{const dp=()=>f.doorGroup.getObjectByName("door-plaque");const bz=.04;let hov=0,gt=-1,last=0,raf=0;const step=ts=>{const P=dp();if(!P){raf=0;return}const w=last?Math.min(.05,(ts-last)/1000):.016;last=ts;const tgt=bz+(hov?Xu:0);P.position.z=ac(P.position.z,tgt,.06,w);const S=Math.min(1,Math.max(0,(P.position.z-bz)/Xu));let I=0;if(gt>=0){gt+=w;const x=.7;I=gt>0&&gt<x?Math.sin(gt/x*Math.PI):0;if(gt>=x)gt=-1}if(P.material.emissive.getHex()!==16764064)P.material.emissive=new Fe(16764064);P.material.emissiveIntensity=Math.max(hov?S*.55:0,I*.6);if(hov||S>.002||gt>=0)raf=requestAnimationFrame(step);else{P.position.z=bz;P.material.emissiveIntensity=0;raf=0}};const kick=()=>{if(!raf){last=0;raf=requestAnimationFrame(step)}};F.add({object:f.doorGroup,onClick:()=>{window.location.href=t.exit[s]},onHoverEnter:()=>{hov=1;gt=0;kick()},onHoverLeave:()=>{hov=0;kick()}})})(),F.onMiss(()=>{const k=we.current();k.intro?we.skipIntro():k.item&&we.close()});const te=[G,f,m,y,w,T,A];function ge(k){if(k===s)return;s=k;try{window.localStorage.setItem("m3d:lang",k)}catch{}document.documentElement.lang=k,document.title=`${an.brand[k]} · ${t.profile.name[k]}`;for(const U of te)U.setLang(k);const fe=we.current();fe.item&&(fe.section==="research"||fe.section==="projects")&&I.get(`${fe.section}/${fe.item}`)?.book.bakePage(k)}let de=null;const se=Tv(k=>{a.shadowMap.needsUpdate=k;const fe=de?performance.now():0;a.render(l,h),de?.sample(performance.now()-fe,k)});se.add(()=>{d.busy()&&se.wake()}),se.add(k=>d.update(k)),se.add((k,fe)=>u.update(k,fe)),se.add((k,fe)=>p.update(k,fe)),se.add((k,fe)=>v.update(k,fe)),se.add((k,fe)=>m.update(k,fe)),se.add(k=>y.update(k)),se.add(k=>w.update(k)),se.add(k=>T.update(k)),se.add((k,fe)=>A.update(k,fe)),se.add(()=>F.update());function Oe(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight),se.wake()}const Ie=()=>se.wake();let Ke=!1;function Xe(){document.hidden?se.pause():Ke||se.resume()}function re(k){k.preventDefault(),Ke=!0,se.pause(),G.toast(an.contextLost,{label:an.relight,onAction:()=>window.location.reload()})}function he(){Ke=!1,G.hideToast(),se.resume()}function ae(){u.setReducedMotion(o),p.setReducedMotion(o),v.setReducedMotion(o)}function Me(k){o=k.matches,ae()}if(new URLSearchParams(window.location.search).has("debug")){const k=(U,He)=>{const Le=new Lh;return Le.setFromCamera(new ee(U,He),h),Le.intersectObjects(l.children,!0).filter(ce=>ce.object.type!=="Points"&&ce.object.type!=="Sprite").slice(0,5).map(ce=>{const ot=[];let R=ce.object;for(;R;)ot.unshift(R.name||R.type),R=R.parent;const b=ce.point;return`${ce.distance.toFixed(2)}m ${ot.join("/")} @(${b.x.toFixed(2)}, ${b.y.toFixed(2)}, ${b.z.toFixed(2)})`})},fe=(U,He,Le,$e,ce,ot)=>{u.cut({position:new L(U,He,Le),target:new L($e,ce,ot)}),se.wake()};window.__m3d={scene:l,camera:h,renderer:a,pick:k,pose:fe},de=J1(a,se,Oe)}return window.addEventListener("resize",Oe),document.addEventListener("visibilitychange",Xe),i.addEventListener("webglcontextlost",re),i.addEventListener("webglcontextrestored",he),r.addEventListener("change",Me),i.addEventListener("pointermove",Ie),i.addEventListener("pointerdown",Ie),window.addEventListener("keydown",Ie),window.addEventListener("hashchange",Ie),ae(),{start:()=>{Oe(),se.start(),we.start()},dispose:()=>{se.stop(),we.dispose(),F.dispose(),G.dispose(),de?.dispose(),window.removeEventListener("resize",Oe),document.removeEventListener("visibilitychange",Xe),i.removeEventListener("webglcontextlost",re),i.removeEventListener("webglcontextrestored",he),r.removeEventListener("change",Me),i.removeEventListener("pointermove",Ie),i.removeEventListener("pointerdown",Ie),window.removeEventListener("keydown",Ie),window.removeEventListener("hashchange",Ie),yv(l),c.dispose(),a.dispose()}}}export{oS as createApp};
