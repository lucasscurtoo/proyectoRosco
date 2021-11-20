package com.pasapalabraapi.api;

import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.server.ResponseStatusException;

import com.pasapalabraapi.DTO.CreatePalabraDTO;
import com.pasapalabraapi.DTO.CreateUsuarioDTO;
import com.pasapalabraapi.DTO.DeletePalabraDTO;
import com.pasapalabraapi.logic.ManejadorPalabras;
import com.pasapalabraapi.logic.Palabra;
import com.pasapalabraapi.persistence.ManejadorBD;

@Controller
@CrossOrigin(origins = "*")
public class PalabraController {
	
	private ManejadorPalabras palMan = new ManejadorPalabras();
	
	@PostMapping("/palabras")
	@ResponseBody
	public Palabra createPalabra(@RequestBody CreatePalabraDTO palabra) {
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not implemented...");
	}
	
	@DeleteMapping("/palabras")
	@ResponseBody
	public void delPalabra(@RequestParam(name="codigo", required=true) int codigo) {
		try {
			this.palMan.delPalabra(codigo);
			
		} catch (Exception e) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not implemented...");
		}
	}
		
	@GetMapping("/palabras")
	@ResponseBody
	public ArrayList<Palabra> getPalabrasPorCategoria(@RequestParam(name="categoria", required=true, defaultValue="any") String categoria) {
		return palMan.obtenerPalabra(categoria);
	}  
	
	@GetMapping("/palabrasTodas")
	@ResponseBody
	public ArrayList<Palabra> obtenerPalabra(@RequestParam(name="categoria", required=true, defaultValue="any")String categoria ){
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"dalelocofunciona...");
	}
}
