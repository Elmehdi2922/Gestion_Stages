package com.abhoer.pj2.controllers;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abhoer.pj2.Repositories.StageRepository;
import com.abhoer.pj2.entities.Stage;
 
@RestController
@RequestMapping("/api/stages")
public class StageController {

	@Autowired
	private StageRepository stageRepository;
	
	@GetMapping("/All")
	public List<Stage> getstages()
	{
		return stageRepository.findAll();
	}
	
	@GetMapping("/getOne/{id}")
	public Stage getstage(@PathVariable int id)
	{
		return stageRepository.findById(id).get();
	}
	
	
	@DeleteMapping("/delete/{id}")
	public boolean deletestage(@PathVariable int id)
	{
		stageRepository.deleteById(id);
		return true;
	}
	@PutMapping("/update")
	public Stage updatestage(@RequestBody Stage stage)
	{
		return stageRepository.save(stage);
	}

	@PostMapping("/add")
	public Stage createstage(@RequestBody Stage stage)
	{
		return stageRepository.save(stage);
	}
	@RequestMapping("/countStages")
	public int CountStage()
	{
			return (int) stageRepository.count(); 
	}	
	
	@RequestMapping("/demande")
	public Stage stage1(Pageable p)
	{
			return (Stage) stageRepository.stage1(p); 
	}
	
	@RequestMapping("/get_stage_bymonth")
	public List<Integer> getstagebymonth()
	{
			return stageRepository.getstage_bymonth(); 
	}
	
	@PutMapping("/updatestage/{indice}/{enc}/{etat}")
	public int updatestage(@PathVariable int indice, @PathVariable int enc,@PathVariable String etat)
	{
		return stageRepository.updatestage(indice,enc,etat); 
			 
	}

	@GetMapping("/get_stage_Employe")
	public List<Stage> get_stage_Employe()
	{
		return stageRepository.get_stage_Employe(); 
			 
	}
	
	@GetMapping("/get_stage_byStagiaire/{id}")
	public List<Stage> get_stage_byStagiaire(@PathVariable int id)
	{
		return stageRepository.get_stage_byStagiaire(id); 
			 
	}
}