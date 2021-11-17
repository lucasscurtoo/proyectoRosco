package rosco;

import java.util.ArrayList;

public class Partida {
	private int codigo;
	private String nickName;
	private boolean finalizada;
	private int puntaje;
	private ArrayList<Palabra> palabras;
	private Jugador jugador;
	
		public Partida(String nickName, boolean finalizada, int puntaje) {
			this.nickName = nickName;
			this.finalizada = finalizada;
			this.puntaje = puntaje;
			this.palabras = new ArrayList<Palabra>();
			
		}

		public int getCodigo() {
			return codigo;
		}

		public void setCodigo(int codigo) {
			this.codigo = codigo;
		}

		public String getNickName() {
			return nickName;
		}

		public void setNickName(String nickName) {
			this.nickName = nickName;
		}

		public boolean isFinalizada() {
			return finalizada;
		}

		public void setFinalizada(boolean finalizada) {
			this.finalizada = finalizada;
		}

		public int getPuntaje() {
			return puntaje;
		}

		public void setPuntaje(int puntaje) {
			this.puntaje = puntaje;
		}
			
			

}
