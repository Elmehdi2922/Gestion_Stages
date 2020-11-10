package com.abhoer.pj2.Repositories;

import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.JpaRepository;

import com.abhoer.pj2.entities.Mois;

@Primary
public interface MoisRepository extends JpaRepository<Mois,Integer> {


}
