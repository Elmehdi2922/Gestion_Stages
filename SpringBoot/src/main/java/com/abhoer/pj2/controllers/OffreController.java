package com.abhoer.pj2.controllers;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abhoer.pj2.Repositories.OffreRepository; 
import com.abhoer.pj2.entities.Offre;
 
@RestController
@RequestMapping("/api/offres")
public class OffreController {


	@Autowired
	private OffreRepository offreRepository;
	
	@GetMapping("/All")
	public List<Offre> getOffres()
	{
		return offreRepository.findAll();
	}
	
	@GetMapping("/getOne/{id}")
	public Offre getOffre(@PathVariable int id)
	{
		return offreRepository.findById(id).get();
	}
	
	
	@DeleteMapping("/delete/{id}")
	public boolean deleteOffre(@PathVariable int id)
	{
		offreRepository.deleteById(id);
		return true;
	}
	@PutMapping("/update")
	public Offre updateOffre(@RequestBody Offre Offre)
	{
		return offreRepository.save(Offre);
	}

	@PostMapping("/add")
	public Offre createOffre(@RequestBody Offre Offre)
	{
		return offreRepository.save(Offre);
	}

	@RequestMapping("/countOffres")
	public int CountOffre()
	{
			return (int) offreRepository.count(); 
	}
	
	@RequestMapping("/get_offre_byIndice/{indice}")
	public List<Offre> get_offre_byIndice(@PathVariable String indice)
	{
			return offreRepository.get_offre_byIndice("%"+indice+"%");
	}
 
	
	
	
}