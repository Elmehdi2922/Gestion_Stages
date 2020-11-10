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

import com.abhoer.pj2.Repositories.NiveauRepository;
import com.abhoer.pj2.entities.Niveau;
 
@RestController
@RequestMapping("/api/niveau")
public class NiveauController {

	@Autowired
	private NiveauRepository niveauRepository;
	
	@GetMapping("/All")
	public List<Niveau> getniveaus()
	{
		return niveauRepository.findAll();
	}
	
	@GetMapping("/getone/{id}")
	public Niveau getniveau(@PathVariable int id)
	{
		return niveauRepository.findById(id).get();
	}
	
	
	@DeleteMapping("/delete/{id}")
	public boolean deleteniveau(@PathVariable int id)
	{
		niveauRepository.deleteById(id);
		return true;
	}
	@PutMapping("/update")
	public Niveau updateniveau(@RequestBody Niveau niveau)
	{
		return niveauRepository.save(niveau);
	}

	@PostMapping("/add")
	public Niveau createniveau(@RequestBody Niveau niveau)
	{
		return niveauRepository.save(niveau);
	}

}