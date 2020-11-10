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

import com.abhoer.pj2.Repositories.RessourceshumainesRepository;
import com.abhoer.pj2.entities.ResourcesHumaines; 
 
@RestController
@RequestMapping("/api/rh")
public class RessourcesHumainesController {

	@Autowired
	private RessourceshumainesRepository ressourceshumainesRepository;
	
	@GetMapping("/All")
	public List<ResourcesHumaines> getresourceshumaines()
	{
		return ressourceshumainesRepository.findAll();
	}
	
	@GetMapping("/getOne/{id}")
	public ResourcesHumaines getresourceshumaine(@PathVariable int id)
	{
		return ressourceshumainesRepository.findById(id).get();
	}
	
	@DeleteMapping("/delete/{id}")
	public boolean deleteresourceshumaine(@PathVariable int id)
	{
		ressourceshumainesRepository.deleteById(id);
		return true;
	}
	@PutMapping("/update")
	public ResourcesHumaines updateresourceshumaine(@RequestBody ResourcesHumaines resourceshumaine)
	{
		return ressourceshumainesRepository.save(resourceshumaine);
	}

	@PostMapping("/add")
	public ResourcesHumaines createresourceshumaine(@RequestBody ResourcesHumaines resourceshumaine)
	{
		return ressourceshumainesRepository.save(resourceshumaine);
	}

}