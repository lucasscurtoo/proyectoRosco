package com.pasapalabraapi.api;

import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.server.ResponseStatusException;

import com.pasapalabraapi.DTO.CreatePartidaDTO;
import com.pasapalabraapi.DTO.FinalizarPartidaDTO;
import com.pasapalabraapi.logic.Partida;

@Controller
public class PartidaController {
	
	@PostMapping("/partidas")
	@ResponseBody
	// ?categoria=""
	public Partida createPartida(@RequestParam(name="categoria", required=false, defaultValue="any") String categoria,
								@RequestBody CreatePartidaDTO partida) {
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not implemented...");
	} 
	
	@PutMapping("/partidas")
	@ResponseBody
	public Partida finalizarPartida(@RequestBody FinalizarPartidaDTO partida) {
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not implemented...");
	}
}
