package com.abhoer.pj2.Repositories;

import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.JpaRepository;

import com.abhoer.pj2.entities.Employe;

@Primary
public interface EmployeRepository extends JpaRepository<Employe,Integer> {

	
}
