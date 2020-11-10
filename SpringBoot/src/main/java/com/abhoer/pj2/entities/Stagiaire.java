package com.abhoer.pj2.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Stagiaire extends Personne{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private Date date_emb; 
	private int idniveau;
	private int idstage;
	private String cv;
	private String ecole;
	private String demande;
	@OneToMany(mappedBy="idstagiaire",cascade = {CascadeType.ALL}) 
	@JsonIgnore
    private List<Stage> stages;
	
	public Stagiaire(String cin, String nom, String prenom, String adresse, String tele, String email, String image,
			String login, String motpasse) {
		super(cin, nom, prenom, adresse, tele, email, image, login, motpasse, "stagiaire");
		// TODO Auto-generated constructor stub
	}
	
	public Stagiaire(String cin, String nom, String prenom, String adresse, String tele, String email, String image,
			String login, String motpasse, Date date_emb, int idniveau, int idstage, String cv,
			String ecole, String demande) {
		super(cin, nom, prenom, adresse, tele, email, image, login, motpasse, "stagiaire");
		this.date_emb = date_emb;
		this.idniveau = idniveau;
		this.idstage = idstage;
		this.cv = cv;
		this.ecole = ecole;
		this.demande = demande;
	}
	public Stagiaire(String cin, String nom, String prenom, String adresse, String tele, String email, String image,
			String login, String motpasse,  int idniveau,  String cv,
			String ecole) {
		super(cin, nom, prenom, adresse, tele, email, image, login, motpasse, "stagiaire");

		this.idniveau = idniveau;
		this.cv = cv;
		this.ecole = ecole;
	}
	public Stagiaire(String cin, String nom, String prenom, String adresse, String tele, String email, String image,
			String login, String mot_passe,int idniveau,String cv,String ecole,String demande) {
		super(cin, nom, prenom, adresse, tele, email, image, login, mot_passe,"stagiaire");
		this.date_emb = new Date();
		this.cv = cv;
		this.ecole = ecole;
		this.ecole = ecole;
		this.demande = demande;
		
	 
	}
	public Stagiaire() {
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

	public int getIdniveau() {
		return idniveau;
	}

	public void setIdniveau(int idniveau) {
		this.idniveau = idniveau;
	}

	public int getIdstage() {
		return idstage;
	}

	public void setIdstage(int idstage) {
		this.idstage = idstage;
	}

	public String getCv() {
		return cv;
	}

	public void setCv(String cv) {
		this.cv = cv;
	}

	public String getEcole() {
		return ecole;
	}

	public void setEcole(String ecole) {
		this.ecole = ecole;
	}

	public String getDemande() {
		return demande;
	}

	public void setDemande(String demande) {
		this.demande = demande;
	}

	public List<Stage> getStages() {
		return stages;
	}

	public void setStages(List<Stage> stages) {
		this.stages = stages;
	}
	
}
