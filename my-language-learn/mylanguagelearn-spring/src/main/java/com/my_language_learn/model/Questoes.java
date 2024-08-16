package com.my_language_learn.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Questoes {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idQuestao;

    @Column(length = 1000, nullable = false)
    private String enunciado;

    @Column(length = 1000, nullable = false)
    private String resposta;

    @Column(length = 100, nullable = false)
    private int nivel;

    @Column(length = 100, nullable = false)
    private int valor;
}

