package rosco;

import java.util.ArrayList;

import persisitencia.ManejadorBD;

public class ManejadorPalabras {
	
	public void crearNuevaPalabra(char letra, String definicion,boolean empiezaPor, int ciA, int pinA) {
		ManejadorBD manejbd = new ManejadorBD();
		boolean validado = manejbd.validarAdmin(ciA, pinA);
		
		// Si lo valida crear una palabra
		if (validado) {
			Palabra palabra = new Palabra(letra, definicion, pinA, empiezaPor, validado, ciA, pinA);
			manejbd.addPalabra(palabra);
		}
	}
		public void eliminarPalabra(int codigo, int ciA, int pinA) {
			ManejadorBD manejbd = new ManejadorBD();
			boolean validado = manejbd.validarAdmin(ciA, pinA);
			
			if (validado) {
				manejbd.deletePalabra(ciA, pinA);
			}
		}
	
		public ArrayList<Palabra> obtenerPalabra(String categoria, int ciA, int pinA) {
			ManejadorBD manejbd = new ManejadorBD();
			char letras[] = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z',};
			ArrayList<Palabra> palabras = new ArrayList<Palabra>();
			
			for(int i = 0; i<letras.length; i++) {
				Palabra palabraActual = manejbd.obtenerPalabra(letras[i]);
				palabras.add(palabraActual);
			}
			
			return palabras;
		}
}
