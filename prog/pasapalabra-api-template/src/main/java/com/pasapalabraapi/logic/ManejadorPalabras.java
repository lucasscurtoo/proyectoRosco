package com.pasapalabraapi.logic;

import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;

import com.pasapalabraapi.persistence.DBConf;
import com.pasapalabraapi.persistence.ManejadorBD;
import com.sun.jdi.connect.spi.Connection;



public class ManejadorPalabras {
	
	public void crearNuevaPalabra(int idWord, int idNumber, char letter, String definition, String word, boolean hint, boolean inUse, int ciA, int pinA) {
		ManejadorBD manejbd = new ManejadorBD();
		boolean validado = manejbd.validarAdmin(ciA, pinA);
		
		// Si lo valida crear una palabra
		if (validado) {
			Palabra palabra = new Palabra(idWord, idNumber,letter, definition, word, hint,validado, ciA, pinA);
			manejbd.addPalabra(palabra);
		}
	}
	public void delPalabra(int codigo) throws SQLException {           ///////////////////
		DBConf dbconf = new DBConf();
		java.sql.Connection con = dbconf.conectarMySQL();

		Statement stmt = con.createStatement();
		String delete = "DELETE FROM (Table Palabra) WHERE codigo = " + codigo ;

		try {
		stmt.executeUpdate(delete);
		} catch (SQLException e) {
		System.out.println(e.getMessage());
		}  

		}
		public ArrayList<Palabra> obtenerPalabra(String categoria) {
			ManejadorBD manejbd = new ManejadorBD();
			 char letras[] =  {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z',};
			ArrayList<Palabra> palabras = new ArrayList<Palabra>();
			
			
			
			for(int i = 0; i<letras.length; i++) {
				Palabra palabraActual = manejbd.obtenerPalabra(categoria, letras[i]);
				palabras.add(palabraActual);
			}
			
			return palabras;
		}
}
