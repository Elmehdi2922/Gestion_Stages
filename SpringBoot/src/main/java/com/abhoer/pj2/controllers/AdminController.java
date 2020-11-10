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

import com.abhoer.pj2.Repositories.AdminRepository;
import com.abhoer.pj2.entities.Admin;
 




@RestController
@RequestMapping("/api/admins")
public class AdminController {


	@Autowired
	private AdminRepository adminRepository;
	
	@GetMapping("/All")
	public List<Admin> getadmins()
	{
		return adminRepository.findAll();
	}
	
	@GetMapping("/getOne/{id}")
	public Admin getadmin(@PathVariable int id)
	{
		return adminRepository.findById(id).get();
	}
	
	
	@DeleteMapping("/delete/{id}")
	public boolean deleteadmin(@PathVariable int id)
	{
		adminRepository.deleteById(id);
		return true;
	}
	@PutMapping("/update")
	public Admin updateadmin(@RequestBody Admin admin)
	{
		return adminRepository.save(admin);
	}

	@PostMapping("/save")
	public Admin createadmin(@RequestBody Admin admin)
	{
		return adminRepository.save(admin);
	}


 
	
	
	
}