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

import com.abhoer.pj2.Repositories.StageTypeRepository;
import com.abhoer.pj2.entities.StageType;
 
@RestController
@RequestMapping("/api/stageTypes")
public class StageTypeController {

	@Autowired
	private StageTypeRepository stageTypeRepository;
	
	@GetMapping("/All")
	public List<StageType> getstageTypes()
	{
		return stageTypeRepository.findAll();
	}
	
	@GetMapping("/getOne/{id}")
	public StageType getstageType(@PathVariable int id)
	{
		return stageTypeRepository.findById(id).get();
	}
	
	
	@DeleteMapping("/delete/{id}")
	public boolean deletestageType(@PathVariable int id)
	{
		stageTypeRepository.deleteById(id);
		return true;
	}
	@PutMapping("/update")
	public StageType updatestageType(@RequestBody StageType stageType)
	{
		return stageTypeRepository.save(stageType);
	}

	@PostMapping("/add")
	public StageType createstageType(@RequestBody StageType stageType)
	{
		return stageTypeRepository.save(stageType);
	}
 
}