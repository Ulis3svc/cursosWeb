export class Empleado{
	/*
	public nombre:String;
	public edad:number;

	constructor(nombre, edad){
		this.nombre = nombre;
		this.edad = edad;
	}*/
	constructor(
		public nombre:string,
		public edad:number,
		public puesto:string,
		public bono: boolean,
		public colorFav: string
		){}
}