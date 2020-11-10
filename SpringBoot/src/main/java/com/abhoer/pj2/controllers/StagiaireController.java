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

import com.abhoer.pj2.Repositories.StagiaireRepository;
import com.abhoer.pj2.entities.Stagiaire;
 
@RestController
@RequestMapping("/api/stagiaires")
public class StagiaireController {

	@Autowired
	private StagiaireRepository stagiaireRepository;
	
	@GetMapping("/All")
	public List<Stagiaire> getstagiaires()
	{
		return stagiaireRepository.findAll();
	}
	
	@GetMapping("/getOne/{id}")
	public Stagiaire getstagiaire(@PathVariable int id)
	{
		return stagiaireRepository.findById(id).get();
	}
	
	
	@DeleteMapping("/delete/{id}")
	public boolean deletestagiaire(@PathVariable int id)
	{
		stagiaireRepository.deleteById(id);
		return true;
	}
	@PutMapping("/update")
	public Stagiaire updatestagiaire(@RequestBody Stagiaire stagiaire)
	{
		return stagiaireRepository.save(stagiaire);
	}

	@PostMapping("/add")
	public Stagiaire createstagiaire(@RequestBody Stagiaire stagiaire)
	{
		return stagiaireRepository.save(stagiaire);
	}


	@RequestMapping("/countStagiaires")
	public int Countstagiaire()
	{
			return (int) stagiaireRepository.count(); 
	}	
	
	
	
}