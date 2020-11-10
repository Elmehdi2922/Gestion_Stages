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

import com.abhoer.pj2.Repositories.PersonneRepository;
import com.abhoer.pj2.entities.Personne;

@RestController
@RequestMapping("/api/personnes")
public class PersonneController {


	@Autowired
	private PersonneRepository personneRepository;
	
	@GetMapping("/All")
	public List<Personne> getPersonnes()
	{
		return personneRepository.findAll();
	}
	
	@GetMapping("/getOne/{id}")
	public Personne getPersonne(@PathVariable int id)
	{
		return personneRepository.findById(id).get();
	}
	
	
	@DeleteMapping("/delete/{id}")
	public boolean deletePersonne(@PathVariable int id)
	{
		personneRepository.deleteById(id);
		return true;
	}
	@PutMapping("/update}")
	public Personne updatePersonne(@RequestBody Personne personne)
	{
		return personneRepository.save(personne);
	}

	@PostMapping("/save")
	public Personne createPersonne(@RequestBody Personne personne)
	{
		return personneRepository.save(personne);
	}



	@RequestMapping("/getusersofsuite")
	public List<Personne> getusersofsuite( int x) 
	{
		return personneRepository.getusersofsuite(x);
	}
	
	@RequestMapping("/countComptes")
	public int CountComptes()
	{
			return (int) personneRepository.count(); 
	}
	
	 
	
}