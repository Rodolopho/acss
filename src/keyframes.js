
export default function keyframes(data, name,propertyValue){
//keyframe-name- already extracted
//[from|to|20p]-classname--classname--classname__[to|20p]-classname--classname__[to|100p]
let statement="@keyframes "+ name +"{\n";
 let splits=data.split('__');
  splits.forEach(each=>{
  	let result=at(each,propertyValue);
  	if(result!==false) statement+='\t'+result;
  });

  return statement+"}";
}

function at(data, propertyValue){
	if(!data.match(/^(from|to|[0-9]+p)/)) return false;
	let statement="";
	let when=data.match(/^(from|to|[0-9]+p)/)[0];
	data=data.replace(when+'-','');
	data.split('---').forEach(e=>{
		let pnv=propertyValue(e);
		if(pnv) statement+="\n\t\t"+pnv+';';
	});

	if(statement) return when.replace(/p$/,"%")+ "{\n"+statement +"\n\t}\n";
	return false;



}