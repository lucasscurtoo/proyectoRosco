package com.pasapalabraapi.api;

import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.server.ResponseStatusException;

import com.pasapalabraapi.DTO.CreateUsuarioDTO;
import com.pasapalabraapi.logic.Usuario;

@Controller
public class AdminController {
	
	@PostMapping("/administradores")
	@ResponseBody
	public Usuario postAdministrador(@RequestBody(required=true) CreateUsuarioDTO request) {
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not implemented...");
	}

	@GetMapping("/administradores")
	@ResponseBody
	public ArrayList<Usuario> getAdministradores() {
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not implemented...");
	}  
	
}
