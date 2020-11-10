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

import com.abhoer.pj2.Repositories.MoisRepository;
import com.abhoer.pj2.entities.Mois;
 
@RestController
@RequestMapping("/api/mois")
public class MoisController {

	@Autowired
	private MoisRepository moisRepository;
	
	@GetMapping("/All")
	public List<Mois> getniveaus()
	{
		return moisRepository.findAll();
	}
	
	@GetMapping("/getOne/{id}")
	public Mois getniveau(@PathVariable int id)
	{
		return moisRepository.findById(id).get();
	}
	
	
	@DeleteMapping("/delete/{id}")
	public boolean deleteniveau(@PathVariable int id)
	{
		moisRepository.deleteById(id);
		return true;
	}
	@PutMapping("/update")
	public Mois updateniveau(@RequestBody Mois niveau)
	{
		return moisRepository.save(niveau);
	}

	@PostMapping("/add")
	public Mois createniveau(@RequestBody Mois Mois)
	{
		return moisRepository.save(Mois);
	}


 
	
	
	
}