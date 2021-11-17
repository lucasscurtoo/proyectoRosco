package persisitencia;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import rosco.Jugador;
import rosco.Palabra;
import rosco.Partida;
import rosco.Usuario;

public class ManejadorBD {

	public static void main(String[] args) {

	}
	
	public boolean validarAdmin(int ciA, int pinA) {
		DBConf dbconf = new DBConf();
		Connection con = dbconf.conectarMySQL();
		boolean existe = false;
		
		 try {
			Statement stmt = con.createStatement();
			
			String query = "select ci, pin from administrador as a, usuario as u where a.ci=u.ci and a.ci=" + ciA + " and pin=" + pinA;
			
			ResultSet rs = stmt.executeQuery(query);
			
			while(rs.next()) {
				existe = true;
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 
		return existe;
	}
	
	public void addAdministrador(Usuario admin) {	
		DBConf dbconf = new DBConf();
		Connection con = dbconf.conectarMySQL();
		
		 try {
		    	Statement stmt = con.createStatement();
				String query = "CREATE TABLE Administrador(ci int)";
				stmt.executeUpdate(query);
		    }catch (SQLException e) {
		    	e.printStackTrace();
		    }
		}
		
	
	public void deleteAdministrador(int ci) {
	
	}
	public void addPalabra(Palabra palabra) {
		DBConf dbconf = new DBConf();
		Connection con = dbconf.conectarMySQL();
		
	    try {
	    	Statement stmt = con.createStatement();
			String query = "CREATE TABLE Palabra(palabra VARCHAR(20), codigo int, letra VARCHAR(1), definicion VARCHAR(200), empieza VARCHAR(1), contiene(1), en_Uso boolean, disponible boolean, cant_correctas int, cant_erradas int)";
			stmt.executeUpdate(query);
	    }catch (SQLException e) {
	    	e.printStackTrace();
	    }
	}
	public void deletePalabra(int ciA, int pinA) {
		
	}
	
	public  <Palabras> ArrayList<Palabras> obtenerPalabra(char c) {
		DBConf dbconf = new DBConf();
		Connection con = dbconf.conectarMySQL();
		
		ArrayList<Palabras> palabras = new ArrayList<Palabras>();

		try {
			Statement stmt = con.createStatement();

			// HACIENDO QUERY
			String query2 = "SELECT * FROM palabra";
			ResultSet rs = stmt.executeQuery(query2);
			while(rs.next()) {
				String letra = rs.getString(1);
				String definicion = rs.getString("definicion");
				String empiezaPor = rs.getString("empiezaPor");
			}
			
		}catch (SQLException e) {
			e.printStackTrace();
			
		}
		
		return palabras;
					
	}
	
	public boolean validarnickName(int pin, String nickName) {
		DBConf dbconf = new DBConf();
		Connection con = dbconf.conectarMySQL();
		
		 try {
			Statement stmt = con.createStatement();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}
		
	public void nuevaPartida(Partida partida) {
		DBConf dbconf = new DBConf();
		Connection con = dbconf.conectarMySQL();
		
		 try {
		    	Statement stmt = con.createStatement();
				String query = "CREATE TABLE Partida(codigo int, nickName VARCHAR (20), finalizada boolean)";
				stmt.executeUpdate(query);
		    }catch (SQLException e) {
		    	e.printStackTrace();
		    }
		
		
	}
	
	public void updateCorrecta(Palabra palabra) {
		
	}
	
	public void updateIncorrecta(Palabra palabra) {
		
	}
	
	public void updatePartida(int codigo, int puntaje) {
		
	}

	public ArrayList<Jugador> getTop10() {
		
		DBConf dbconf = new DBConf();
		Connection con = dbconf.conectarMySQL();
		ArrayList<Jugador> jugadoresTop10 = new ArrayList<Jugador>();
		
		 try {
	    	Statement stmt = con.createStatement();
			String query = "SELECT * FROM Jugador ORDER BY (puntaje) DESC LIMIT 10";
			ResultSet rs = stmt.executeQuery(query);
			
			while(rs.next()) {
				jugadoresTop10.add(new Jugador(rs.getString("nickName"), 1, "", "", "", 1));
			}
			
	    }catch (SQLException e) {
	    	e.printStackTrace();
	    }
		 
		return jugadoresTop10;
	}

	public ArrayList<Jugador> getTopPeor10() {
		
		DBConf dbconf = new DBConf();
		Connection con = dbconf.conectarMySQL();
		ArrayList<Jugador> peoresJugadoresTop10 = new ArrayList<Jugador>();
		
		try {
			Statement stmt = con.createStatement();
			String query = "SELECT * FROM Jugador ORDER BY (puntaje) LIMIT DESC 10";
			ResultSet rs = stmt.executeQuery (query);
			
			while(rs.next()) {
				peoresJugadoresTop10.add(new Jugador(rs.getString("nickName"),1, "", "", "", 1));
			}
		}catch (SQLException e) {
			e.printStackTrace();
		}
		
			return peoresJugadoresTop10;
		
	}

	
}
	
