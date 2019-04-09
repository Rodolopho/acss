export default function font(str){
	let holder="";
	str.split(/-/).forEach((e)=>{
		if(e.search(/_/)!==-1){
			holder+="\""+e.replace(/_/g," ")+"\" ,";
		}else{
			holder+=e+",";
		}
	});

	return holder.replace(/,$/,"");
}