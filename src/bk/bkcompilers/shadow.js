import length from './length.js';
import color from  './color.js';


export default function shadow(data,customColor){
	
	let m=/(([-]?[0-9]+[d]?[0-9]*(px|em|p|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))+)[-_]([\w-]+)/;
	let holder="";
data.split(/--/).forEach((e)=>{
	if(m.test(e)){
		if(e.match(/^(i|inset)/)){holder+="inset "};

		let result=m.exec(e);
		let col=color(result[4],customColor);
		let len=length(result[1]);

		holder+=len +" "+col+",";
	}
})
	
	return holder.replace(/[,]$/,"");

}



		// filter:{match:/^fl([b|c|g|h|i|o|s][l|r|e]?)[0-9]+/,
		// 	callFunction:function(each){

		// 		getProperty='filter';
		// 		var funcAlias={bl:'blur',b:'brightness',c:'contrast',g:'grayscale',
		// 			hr:'hue-rotate',i:'invert',o:'opacity',s:'saturate',se:'sepia'};
		// 		if(each.match(/[d]?[0-9]$/)){

		// 			funcValue=each.match(/([0-9]*[d]?[0-9]+)/)[0].replace('d', '.');

		// 		}else if(each.match(/flhr[0-9]+/)){
		// 			funcValue=compiler.angleTimeFrequencyResolutionProcessor(each);
		// 		}else{

		// 			funcValue=compiler.lengthProcessor(each)?compiler.lengthProcessor(each):0;

		// 		}
		// 		getValue=funcAlias[each.match(this.match)[1]] + "(" +funcValue +")";
		// 		return 	[getProperty,getValue];

		// 	}

		// 	},