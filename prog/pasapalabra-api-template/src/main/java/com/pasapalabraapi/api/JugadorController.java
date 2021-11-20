package com.pasapalabraapi.api;

import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.server.ResponseStatusException;

import com.pasapalabraapi.DTO.CreateUsuarioDTO;
import com.pasapalabraapi.logic.Usuario;

@Controller
public class JugadorController {
	
	@PostMapping("/jugadores")
	@ResponseBody
	public Usuario postJugador(@RequestBody CreateUsuarioDTO request) {
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not implemented...");
	}

	@GetMapping("/jugadores")
	@ResponseBody
	public ArrayList<Usuario> getJugadores() {
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not implemented...");
	}  
}
