package com.my_language_learn.controller;

import com.my_language_learn.model.Usuario;
import com.my_language_learn.repository.UsuarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/users")
public class UsuarioController {

    UsuarioRepository usuarioRepository;

    @GetMapping
    public @ResponseBody List<Usuario> listar() {
        return usuarioRepository.findAll();
    }

}