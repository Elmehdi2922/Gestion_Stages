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

import com.abhoer.pj2.Repositories.EmployeRepository;
import com.abhoer.pj2.entities.Employe;
 

@RestController
@RequestMapping("/api/employes")
public class EmployeController {

	@Autowired
	private EmployeRepository employeRepository;
	
	@GetMapping("/All")
	public List<Employe> getemployes()
	{
		return employeRepository.findAll();
	}
	
	@GetMapping("/getOne/{id}")
	public Employe getemploye(@PathVariable int id)
	{
		return employeRepository.findById(id).get();
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean deleteemploye(@PathVariable int id)
	{
		employeRepository.deleteById(id);
		return true;
	}
	@PutMapping("/update")
	public Employe updateemploye(@RequestBody Employe employe)
	{
		return employeRepository.save(employe);
	}

	@PostMapping("/add")
	public Employe createemploye(@RequestBody Employe employe)
	{
		return employeRepository.save(employe);
	}

}