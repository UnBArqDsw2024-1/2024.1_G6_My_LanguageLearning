package com.my_language_learn;

import com.my_language_learn.model.Usuario;
import com.my_language_learn.repository.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MylanguagelearnSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(MylanguagelearnSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(UsuarioRepository usuarioRepository) {
		return args -> {
			usuarioRepository.deleteAll();

			Usuario c = new Usuario();
			Usuario c1 = new Usuario();

			c.setNome("Joao");
			c.setEmail("joao@gmail.com");
			c.setSenha("123456");
			usuarioRepository.save(c);

			c1.setNome("Maria");
			c1.setEmail("maria@gmail.com");
			c1.setSenha("123456");
			usuarioRepository.save(c1);
		};
	}

}
