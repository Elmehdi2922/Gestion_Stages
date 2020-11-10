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
 
import com.abhoer.pj2.Repositories.ReclamationRepository;
import com.abhoer.pj2.entities.Reclamation;
 
@RestController
@RequestMapping("/api/reclamations")
public class ReclamationController {


	@Autowired
	private ReclamationRepository reclamationRepository;
	
	@GetMapping("/All")
	public List<Reclamation> getReclamations()
	{
		return reclamationRepository.findAll();
	}
	
	@GetMapping("/getOne/{id}")
	public Reclamation getReclamation(@PathVariable int id)
	{
		return reclamationRepository.findById(id).get();
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean deleteReclamation(@PathVariable int id)
	{
		reclamationRepository.deleteById(id);
		return true;
	}
	
	@PutMapping("/update")
	public Reclamation updateReclamation(@RequestBody Reclamation Reclamation)
	{
		return reclamationRepository.save(Reclamation);
	}

	@PostMapping("/add")
	public Reclamation createReclamation(@RequestBody Reclamation Reclamation)
	{
		return reclamationRepository.save(Reclamation);
	}

	@RequestMapping("/count")
	public int CountReclamation()
	{
			return (int) reclamationRepository.count(); 
	}
 
}