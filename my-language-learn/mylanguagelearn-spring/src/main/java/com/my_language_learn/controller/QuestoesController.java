package com.my_language_learn.controller;

import com.my_language_learn.model.Questoes;
import com.my_language_learn.repository.QuestaoRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/questoes")

public class QuestoesController {
    QuestaoRepository questaoRepository;

    @GetMapping
    public @ResponseBody List<Questoes> listar() {
        return questaoRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Questoes> FindById(@PathVariable Long id) {
        Questoes questoes = questaoRepository.findById(id).orElse(null);
        return ResponseEntity.ok(questoes);
    }
}
