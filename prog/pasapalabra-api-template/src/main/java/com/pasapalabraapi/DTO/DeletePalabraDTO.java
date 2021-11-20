package com.pasapalabraapi.DTO;

public class DeletePalabraDTO {
	private int ciAdministrador;
	private int pinAdministrador;
	private int codigoPalabra;
	
	public DeletePalabraDTO(int ciAdministrador, int pinAdministrador, int codigoPalabra) {
		super();
		this.ciAdministrador = ciAdministrador;
		this.pinAdministrador = pinAdministrador;
		this.codigoPalabra = codigoPalabra;
	}

	public int getCiAdministrador() {
		return ciAdministrador;
	}

	public void setCiAdministrador(int ciAdministrador) {
		this.ciAdministrador = ciAdministrador;
	}

	public int getPinAdministrador() {
		return pinAdministrador;
	}

	public void setPinAdministrador(int pinAdministrador) {
		this.pinAdministrador = pinAdministrador;
	}

	public int getCodigoPalabra() {
		return codigoPalabra;
	}

	public void setCodigoPalabra(int codigoPalabra) {
		this.codigoPalabra = codigoPalabra;
	}
	
	
}
