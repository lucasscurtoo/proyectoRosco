package rosco;

import java.util.ArrayList;

public class Categoria {
	private String nombre;
	private ArrayList<Palabra> palabras;
	
	
	
		public Categoria(String nombre) {
			this.nombre = nombre;
			this.palabras = new ArrayList<Palabra>();
		}

		public String getNombre() {
			return nombre;
		}

		public void setNombre(String nombre) {
			this.nombre = nombre;
		}
		
		
		


}
