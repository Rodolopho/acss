export default function font(str,font){
	
	if(typeof custom === "object"){
		if(custom.hasOwnProperty(font)) return custom[font];
	}
	let holder="";

	str.split(/--/).forEach((e)=>{
		if(e.search(/_/)!==-1){
			holder+="\""+e.replace(/_/g," ")+"\" ,";
		}else{
			holder+=e+",";
		}
	});

	return holder.replace(/,$/,"");
}