package com.pasapalabraapi.api;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.server.ResponseStatusException;

import com.pasapalabraapi.DTO.LoginDTO;
import com.pasapalabraapi.logic.Usuario;

public class LoginController {
	
	@PostMapping("/login")
	@ResponseBody
	public Usuario login(@RequestBody LoginDTO loginDTO) {
		throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not implemented...");
	} 
}
