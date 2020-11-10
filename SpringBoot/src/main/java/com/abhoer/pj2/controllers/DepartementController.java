package com.abhoer.pj2.controllers;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abhoer.pj2.Repositories.DepartementRepository;
import com.abhoer.pj2.entities.Departement;
 
@RestController
@RequestMapping("/api/departements")
public class DepartementController {


	@Autowired
	private DepartementRepository departementRepository;
	
	@GetMapping("/All")
	public List<Departement> getdepartements()
	{
		return departementRepository.findAll();
	}
	
	@GetMapping("/getOne/{id}")
	public Departement getdepartement(@PathVariable int id)
	{
		return departementRepository.findById(id).get();
	}
	
	
	@DeleteMapping("/delete/{id}")
	public boolean deletedepartement(@PathVariable int id)
	{
		departementRepository.deleteById(id);
		return true;
	}
	@PutMapping("/update")
	public Departement updatedepartement(@RequestBody Departement departement)
	{
		return departementRepository.save(departement);
	}

	@PostMapping("/add")
	public Departement createdepartement(@RequestBody Departement departement)
	{
		return departementRepository.save(departement);
	}

	@RequestMapping("/countDepartements")
	public int Countdepartement()
	{
			return (int) departementRepository.count(); 
	}
 
	
	
	
}