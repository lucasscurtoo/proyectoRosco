package com.pasapalabraapi.DTO;

public class CreatePartidaDTO {
	private String nicknameJugador;
	private int pin;
	
	public CreatePartidaDTO(String nicknameJugador, int pin) {
		super();
		this.nicknameJugador = nicknameJugador;
		this.pin = pin;
	}

	public String getNicknameJugador() {
		return nicknameJugador;
	}

	public void setNicknameJugador(String nicknameJugador) {
		this.nicknameJugador = nicknameJugador;
	}

	public int getPin() {
		return pin;
	}

	public void setPin(int pin) {
		this.pin = pin;
	}
	
	
}
