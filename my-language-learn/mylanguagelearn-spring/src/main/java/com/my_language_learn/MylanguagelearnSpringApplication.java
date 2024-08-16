package com.my_language_learn;

import com.my_language_learn.model.Questoes;
import com.my_language_learn.model.Usuario;
import com.my_language_learn.repository.QuestaoRepository;
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
	CommandLineRunner initDatabase(UsuarioRepository usuarioRepository, QuestaoRepository questaoRepository) {
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

			questaoRepository.deleteAll();

			Questoes q = new Questoes();

			q.setEnunciado("Carne em inglês é beafi.");
			q.setResposta("False");
			q.setNivel(1);
			q.setValor(120);
			questaoRepository.save(q);
		};
	}

}
