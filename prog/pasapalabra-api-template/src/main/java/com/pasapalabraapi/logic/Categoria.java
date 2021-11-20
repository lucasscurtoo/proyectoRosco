	package com.pasapalabraapi.logic;

import java.util.ArrayList;

public class Categoria {
	private String nombreCat;
	private ArrayList<Palabra> palabras;
	
	
	
		public Categoria(String nombreCat) {
			this.nombreCat = nombreCat;
			this.palabras = new ArrayList<Palabra>();
		}

		public String getNombre() {
			return nombreCat;
		}

		public void setNombre(String nombreCat) {
			this.nombreCat = nombreCat;
		}
		
		
		


}
