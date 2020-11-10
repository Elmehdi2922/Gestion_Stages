package com.abhoer.pj2.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Employe extends Personne{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private Date date_emb;
	@ManyToOne
	@JoinColumn(name = "iddepartement", referencedColumnName = "id")
	private Departement iddepartement; 
	@OneToMany(mappedBy="encadrant",cascade = {CascadeType.ALL}) 
	@JsonIgnore
    private List<Stage> stages;
	
	public Employe(String cin, String nom, String prenom, String adresse, String tele, String email, String image,
			String login, String mot_passe,Departement iddepartement) {
		super(cin, nom, prenom, adresse, tele, email, image, login, mot_passe,"employe");
		this.date_emb = new Date();
		this.iddepartement = iddepartement;
	 
	}
	public Employe() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Date getDate_emb() {
		return date_emb;
	}
	public void setDate_emb(Date date_emb) {
		this.date_emb = date_emb;
	}
	public Departement getIddepartement() {
		return iddepartement;
	}
	public void setIddepartement(Departement iddepartement) {
		this.iddepartement = iddepartement;
	}
	public List<Stage> getStages() {
		return stages;
	}
	public void setStages(List<Stage> stages) {
		this.stages = stages;
	}	
	
}
