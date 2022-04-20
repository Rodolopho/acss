import color from './compilers/color.js';
import length from './compilers/length.js';
import number from './compilers/number.js';
import font from './compilers/font.js';
import angleTimeFrequencyResolution from './compilers/angleTimeFrequencyResolution.js';
import transform from './compilers/transform.js';
import transition from './compilers/transition.js';
import border from './compilers/border.js';
import gradient from './compilers/gradient.js';
import shadow from './compilers/shadow.js';
import url from './compilers/url.js';
import filter from './compilers/filter.js';
import timingFunction from './compilers/timingFunction.js';
// import keyframes from './compilers/keyframes.js';

export let matcher={
	// device:{match:/^(mob|tab|lab|desk|hd|print|xs|sm|md|lg|xl)(?=[-|_])/, call:function(str){return this.match.exec(str)[1];}},
	// selector:{match:/^([-|_])/,call:null},
	//------------------------property and value compilers
	compilers:{
		color:{
			match:/^((background-color|fill|stroke|border(-(right|left|top|bottom|text-decoration|text-shadow))?-color|outline-color|color|text)|(bgc|b[rltb]?c|oc|c|txsc|tdc))[-_]/,
			call:color
		},
		length:{//cv is custome value for user 
			match:/^(([-]?[a-z])+)(([-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|fr|cv))+)/,
			call:length
		},

		number:{
			match:/^(aic|animation-iteration-count|border-image-slice|text-shadow-radius|txsr|bis|cc|column-count|f|flex|fg|flex-grow|fsk|flex-shrink|grid-column-start|grid-row-start|grid-column-end|grid-row-end|gcs|grs|gce|gre|font-size|fs|o|opacity|fill-opacity|stroke-opacity|ord|order|lh|ls|letter-spacing|line-height|orp|orphans|op|object-position|zi|z-index)([-]?[0-9]+[d]?(by)?[0-9]*)$/,
			call:number
		},
		font:{
			match:/^(font-family|ff)[-]([a-zA-Z0-9-_]+)/,
			call:font
		},
		time:{
			match: /^(adu|animation-duration|adl|animation-delay|tdl|transition-delay|tdu|transition-duration)([-]?[0-9]+[d]?[0-9]*(ms|s))/,
			call:angleTimeFrequencyResolution
		},
		transform:{
			match:/^(tf|transform)(([-](matrix|translate|rotate|skew|scale|perspective))|(m|t|tx|ty|s|sy|sx|r|sk|sky|skx|m3d|t3d|tz|ry|rx|rz|p))/,
			call:transform
		},
		transition:{
			match:/^(tn|transition)[-]([a-z-]+)([0-9]+[d]?[0-9]*[m]?[s])([\w-_]*)/,
			call:transition
		},
		border:{
			match:/^(b|border|brt|border-right|bl|border-left|bt|border-top|border-bottom|bb|ol|outline|cr|counter-reset)([-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmaxc|m|mm|in|pt|pc|fr|cv))[-]?(n|none|s|solid|r|ridge|o|outset|i|inset|h|hidden|g|groove|db|double|dt|dotted|ds|dashed)[-]([\w]*)/,
			call:border
		},
		gradient:{
			match:/(background|bg|bgi|background-image)[-]?(((repeating-)?(conic|linear|radical)-gradient)|(rrg|rg|lg|cg|rlg))([\w_-]+)/,
			call:gradient
		},
		shadow:{
			match:/(bxs|bxsi|txs|box-shadow|box-shadow-inset|text-shadow)([-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|fr|cv))+/,//[-_]([\w]+)/,
			call:shadow
		},
		url:{
			match:/(background-image|border-image-source|bis|background|bgi|bg)[-]?url[-_]([\w-]+)/,
			call:url,
		},
		filter:{
			match:/(filter|fl)[-]?(drop-shadow|ds|b|blur|br|brightness|c|contrast|g|grayscale|hr|hue-rotate|i|invert|o|opacity|s|saturate|se|sepia)([-]?[0-9][\w-]+)/,
			call:filter
		},
		timingFunction:{
			match:/(animation-timing-function|atf|transition-timing-function|ttf)[-_]?(cubic-bezier[_-]?[0-9][\w-]+|cb[-_]?[0-9][\w-]+|e|ease|l|linear|ei|ease-in|eo|ease-out|eio|ease-in-out|ss|step-start|se|step-end)/,
			call:timingFunction,
		},
		content:{
			match:/(con|content|grid-area|ga|grid-template-areas|gtc|grid-template-columns|gtr|grid-template-rows|gta)[-_]?(url|attr)?[-_]([\w-]+)/,
			call:(u,data)=>{
				//u->url
				if(u==="url"){
					return url(data);
				}else if(u==="attr"){
					return "attr("+data+")";
				}

				let result="";
					
				  data.split('--').forEach((each)=>{

					 if(each.match(/[_]/)){
					 	result+= "'"+ each.replace(/[_]/g," ")+"' ";
					 }else{
					 	result+= each;
					 }
				  })

				 return result.replace(/[\s]dot/g, " . ");
				

			}
		},
		animation:{
			match:/(animation-name|an)[-_]([\w]+)/,
			call:(data)=>{
				return data;
			}
		},

		fontFeatureSettings:{
			match:/(ffs|font-feature-settings)[-]([\w-_]+)/,
			call:(data)=>data.replace(/--/g,', ').replace(/(\w{4})/g, '"$1" ').replace('-'," "),
		},
		grid:{
			match:'',//,
			call:'grid',
		}


	}

	// -------------for property and value-----------
}
// let t=/(background-color|border(-(right|left|top|bottom))?-color|outline-color|color)|(bgc|b[rltb]?c|c)/,
