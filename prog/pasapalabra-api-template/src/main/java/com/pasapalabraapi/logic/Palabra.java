package com.pasapalabraapi.logic;

import java.util.ArrayList;

public class Palabra {
	private int idWord;
	private int idNumber;
	private char letter;
	private String definition;
	private String word;
	private boolean hint;
	private boolean inUse;
	private int cantidadRespondida;
	private int cantidadRespondidaCorrectamente;
	private ArrayList<Categoria> categoria;
	
		public Palabra(int idWord, int idNumber, char letter, String definition, String word, boolean hint, boolean inUse, int cantidadRespondida, int cantidadRespondidaCorrectamente) {
			this.idWord = idWord;
			this.idNumber = idNumber;
			this.letter = letter;
			this.definition = definition;
			this.word = word;
			this.hint = hint;
			this.inUse = inUse;
			this.cantidadRespondida = cantidadRespondida;
			this.cantidadRespondidaCorrectamente = cantidadRespondidaCorrectamente;
			this.categoria = new ArrayList<Categoria>();
		}
			public void setIdWord(int idWord) {
				this.idWord = idWord;
			}
			public int getIdWord() {
				return idWord;
			}
			public void setIdNumber(int idNumber) {
				this.idNumber = idNumber;
			}
			public int getIdNumber() {
				return idNumber;
			}

			public void setLetter(char letter) {
				this.letter = letter;
			}
			public char getLetter() {
				return letter;
			}
			public String getDefinition() {
				return definition;
			}
			public void setDefinition(String definition) {
				this.definition = definition;
			}
			public String getWord() {
				return word;
			}
			public void setWord(String word) {
				this.word = word;
			}
			public boolean isHint() {
				return hint;
			}
			public void setHint(boolean hint) {
				this.hint = hint;
			}
			public boolean isInUse() {
				return inUse;
			}
			public void setInUse(boolean inUse) {
				this.inUse = inUse;
			}
			public int getCantidadRespondida() {
				return cantidadRespondida;
			}
			public void setCantidadRespondida(int cantidadRespondida) {
				this.cantidadRespondida = cantidadRespondida;
			}
			public int getCantidadRespondidaCorrectamente() {
				return cantidadRespondidaCorrectamente;
			}
			public void setCantidadRespondidaCorrectamente(int cantidadRespondidaCorrectamente) {
				this.cantidadRespondidaCorrectamente = cantidadRespondidaCorrectamente;
			}
			
			


}
