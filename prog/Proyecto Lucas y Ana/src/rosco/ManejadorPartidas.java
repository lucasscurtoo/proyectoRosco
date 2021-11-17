package rosco;

import java.util.ArrayList;

import persisitencia.ManejadorBD;

public class ManejadorPartidas {

	public void nuevaPartida(String nickName, int pin, String categoria) {
		ManejadorBD manejbd = new ManejadorBD();
		boolean validado = manejbd.validarnickName(pin, nickName);
		
		if (validado) {
			Partida partida = new Partida(nickName, false, 0);
			manejbd.nuevaPartida(partida);
			
		}
		else {
			
		}
	}
	
	public void finalizarPartida(int codigo, int puntaje, ArrayList<Palabra> correctas, ArrayList<Palabra> incorrectas) {
		ManejadorBD manejbd = new ManejadorBD();
		
		for(int i = 0; i<correctas.size(); i++) {
			manejbd.updateCorrecta(correctas.get(i));
		}
	
		for(int i = 0; i<incorrectas.size(); i++) {
			manejbd.updateIncorrecta(incorrectas.get(i));
		}
		
		manejbd.updatePartida(codigo, puntaje);
	}
	
	public ArrayList<Jugador> top10Mejores(){
		ManejadorBD manejbd = new ManejadorBD();
		
		return manejbd.getTop10();
	}
	
	public ArrayList<Jugador> top10Peores(){
		ManejadorBD manejbd = new ManejadorBD();
		
		return manejbd.getTopPeor10();
	}

}
