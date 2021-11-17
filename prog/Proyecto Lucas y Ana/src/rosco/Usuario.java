package rosco;

public class Usuario {
	private int ci;
	private String nombre;
	private String apellido;
	private String mail;
	private int pin;
		
		public Usuario(int ci, String nombre, String apellido, String mail, int pin) {
			this.ci = ci;
			this.nombre = nombre;
			this.apellido = apellido;
			this.mail = mail;
			this.pin = pin;
		}

		public int getCi() {
			return ci;
		}

		public void setCi(int ci) {
			this.ci = ci;
		}

		public String getNombre() {
			return nombre;
		}

		public void setNombre(String nombre) {
			this.nombre = nombre;
		}

		public String getApellido() {
			return apellido;
		}

		public void setApellido(String apellido) {
			this.apellido = apellido;
		}

		public String getMail() {
			return mail;
		}

		public void setMail(String mail) {
			this.mail = mail;
		}

		public int getPin() {
			return pin;
		}

		public void setPin(int pin) {
			this.pin = pin;
		}
		
			
			
			
				
}
