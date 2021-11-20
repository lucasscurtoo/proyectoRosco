package com.pasapalabraapi.DTO;

public class FinalizarPartidaDTO {
	private int codigoPartida;
	private int puntaje;
	
	public FinalizarPartidaDTO(int codigoPartida, int puntaje) {
		super();
		this.codigoPartida = codigoPartida;
		this.puntaje = puntaje;
	}

	public int getCodigoPartida() {
		return codigoPartida;
	}

	public void setCodigoPartida(int codigoPartida) {
		this.codigoPartida = codigoPartida;
	}

	public int getPuntaje() {
		return puntaje;
	}

	public void setPuntaje(int puntaje) {
		this.puntaje = puntaje;
	}
	
	
}
