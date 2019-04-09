let deviceAlias={
	match:/^(mob|tab|lab|hd|print|xs|sm|md|lg|xl)(?=[-|_])/,
	"mob":"@media (max-width : 768px) {",
	"tab":"@media  (min-width : 768px){",
	"lap":"@media  (min-width : 992px) {",
	"desk":"@media  (min-width : 1200px) {",
	"hd":"@media  (min-width : 1408px) {",
	"print":"@media print{",
	"xs":"@media (max-width : 576px) {",
	"sm":"@media  (min-width : 576px) {",
	"md":"@media  (min-width : 768px) {",
	"lg":"@media  (min-width : 992px) {",
	"xl":"@media  (min-width : 1200px) {",
};


export default function deviceHandler(alias, content){
	if( deviceAlias.hasOwnProperty(alias)){
		return deviceAlias[alias]+'\n'+ content+ "\n } ";
	}else{

	}
}