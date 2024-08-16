package com.my_language_learn.repository;


import com.my_language_learn.model.Questoes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestaoRepository extends JpaRepository<Questoes, Long > {
}
