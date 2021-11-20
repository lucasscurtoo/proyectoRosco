package com.pasapalabraapi.logic;

import com.pasapalabraapi.persistence.ManejadorBD;

public class ManejadorAdministrador {
	
	public void crearAdministrador(int ci, String nombre, String apellido, String mail, int pin, int ciA, int pinA) {
		//Validar el pinA y la ciA
		ManejadorBD manejbd = new ManejadorBD();
		boolean validado = manejbd.validarAdmin(ciA, pinA);
		
		// Si esta validado
		if(validado) {
			// Creamos el Admin y lo mandamos a la bd
			Usuario admin = new Administrador(ci, nombre, apellido, mail, pin);
			manejbd.addAdministrador(admin);	
		}
		//		SINO, no hacemos nada
	}
	
	public void eliminarAdministrador(int ci, int ciA, int pinA) {
		ManejadorBD manejbd = new ManejadorBD();
		boolean validado = manejbd.validarAdmin(ciA, pinA);
		
		if(validado) {
			manejbd.deleteAdministrador(ci);
		}
	}
		
}
