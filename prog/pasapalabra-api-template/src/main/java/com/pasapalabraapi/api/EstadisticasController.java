package com.pasapalabraapi.api;

import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.server.ResponseStatusException;

import com.pasapalabraapi.logic.Jugador;
import com.pasapalabraapi.logic.Palabra;

@Controller
public class EstadisticasController {
	
	@GetMapping("/top/ganadas")
	@ResponseBody
	public ArrayList<Jugador> getTop10JugadoresPartidasGanadas() {
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not implemented...");
	} 
	
	@GetMapping("/top/perdidas")
	@ResponseBody
	public ArrayList<Jugador> getTop10JugadoresPartidasPerdidas() {
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not implemented...");
	} 
	
	@GetMapping("/top/dificiles")
	@ResponseBody
	public ArrayList<Palabra> getTop10JugadoresPalabrasDificiles() {
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not implemented...");
	} 
	
}
