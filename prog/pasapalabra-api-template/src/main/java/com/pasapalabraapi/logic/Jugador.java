package com.pasapalabraapi.logic;

public class Jugador extends Usuario {
	private String nickName;
	private int partidasJugadas;
	private int partidasGanadas;
	
		public Jugador(String nickName, int partidasJugadas, int partidasGanadas, int ci, String nombre, String apellido, String mail, int pin) {
			super(ci,nombre, apellido, mail, pin);
			this.nickName = nickName;
			this.partidasJugadas = partidasJugadas;
			this.partidasGanadas = partidasGanadas;
		}
		
		public Jugador(String nickName, int ci, String nombre, String apellido, String mail, int pin) {
			super(ci,nombre, apellido, mail, pin);
			this.nickName = nickName;
		}

		public String getNickName() {
			return nickName;
		}

		public void setNickName(String nickName) {
			this.nickName = nickName;
		}

		public int getPartidasJugadas() {
			return partidasJugadas;
		}

		public void setPartidasJugadas(int partidasJugadas) {
			this.partidasJugadas = partidasJugadas;
		}

		public int getPartidasGanadas() {
			return partidasGanadas;
		}

		public void setPartidasGanadas(int partidasGanadas) {
			this.partidasGanadas = partidasGanadas;
		}
			


}
