package com.abhoer.pj2.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;


@Entity 
public class Stage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String duree;
	private String datedebut;
	private String datefin;
	private String demande;
	private String rapport;

	@ManyToOne
	@JoinColumn(name = "iddepartement", referencedColumnName = "id")
	private Departement iddepartement;
	@ManyToOne
	@JoinColumn(name = "idtypestage", referencedColumnName = "id")
	private StageType idtypestage;
	@ManyToOne
	@JoinColumn(name = "idstagiaire", referencedColumnName = "id")
	private Stagiaire idstagiaire;
	@ManyToOne
	@JoinColumn(name = "encadrant", referencedColumnName = "id")
	private Employe encadrant;
	private int mois;
	private String etat;
	public Stage() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Stage(String durée, String datedebut, String datefin, Departement iddepartement, StageType idtypestage, Stagiaire idstagiaire,
			Employe encadrant) {
		super();
		this.duree = durée;
		this.datedebut = datedebut ;
		this.datefin =  datefin ;
		this.iddepartement = iddepartement;
		this.idtypestage = idtypestage;
		this.idstagiaire = idstagiaire;
		this.encadrant = encadrant;
		this.etat = "en attente";
		Date t = new Date();
		this.mois =t.getMonth(); 
		
	}
	public Stage(String durée, String datedebut, String datefin, Departement iddepartement, StageType idtypestage, Stagiaire idstagiaire,
			Employe encadrant,String demande) {
		super();
		this.duree = durée;
		this.datedebut = datedebut ;
		this.datefin =  datefin ;
		this.iddepartement = iddepartement;
		this.idtypestage = idtypestage;
		this.idstagiaire = idstagiaire;
		this.encadrant = encadrant;
		this.etat = "en attente";
		this.demande = demande;
		Date t = new Date();
		this.mois =t.getMonth(); 
		
	}
	public Stage(String durée, String datedebut, String datefin, Departement iddepartement, StageType idtypestage, Stagiaire idstagiaire,
			Employe encadrant,String demande,String rapport) {
		super();
		this.duree = durée;
		this.datedebut = datedebut ;
		this.datefin =  datefin ;
		this.iddepartement = iddepartement;
		this.idtypestage = idtypestage;
		this.idstagiaire = idstagiaire;
		this.encadrant = encadrant;
		this.etat = "en attente";
		this.demande = demande;
		this.rapport = rapport;
		Date t = new Date();
		this.mois =t.getMonth(); 
		
	}
	public Stage(String durée, String datedebut, String datefin, Departement iddepartement, StageType idtypestage, Stagiaire idstagiaire,
			Employe encadrant,int mois) {
		super();
		this.duree = durée;
		this.datedebut =  datedebut ;
		this.datefin =  datefin ;
		this.iddepartement = iddepartement;
		this.idtypestage = idtypestage;
		this.idstagiaire = idstagiaire;
		this.encadrant = encadrant;
		this.etat = "en attente";
		Date t = new Date();
		this.mois =mois;
		
	}
	public Stage(String durée,  Departement iddepartement, StageType idtypestage, Stagiaire idstagiaire,Employe encadrant) {
		super();
		this.duree = durée;
		 
		this.iddepartement = iddepartement;
		this.idtypestage = idtypestage;
		this.idstagiaire = idstagiaire;
		this.encadrant = encadrant;
		this.etat = "en attente";
		Date t = new Date();
		this.mois =t.getMonth(); 
		
	}
	
	public String getRapport() {
		return rapport;
	}
	public void setRapport(String rapport) {
		this.rapport = rapport;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getDemande() {
		return demande;
	}
	public void setDemande(String demande) {
		this.demande = demande;
	}
	public void setDuree(String duree) {
		this.duree = duree;
	}
	public int getMois() {
		return mois;
	}
	public void setMois(int mois) {
		this.mois = mois;
	}
	public String getDuree() {
		return duree;
	}
	
	public void setDurée(String durée) {
		this.duree = durée;
	}
	public String getDatedebut() {
		return datedebut;
	}
	public void setDatedebut(String datedebut) {
		this.datedebut = datedebut;
	}
	public String getDatefin() {
		return datefin;
	}
	public void setDatefin(String datefin) {
		this.datefin = datefin;
	}
	public Departement getIddepartement() {
		return iddepartement;
	}
	public void setIddepartement(Departement iddepartement) {
		this.iddepartement = iddepartement;
	}
	public StageType getIdtypestage() {
		return idtypestage;
	}
	public void setIdtypestage(StageType idtypestage) {
		this.idtypestage = idtypestage;
	}
	public Stagiaire getIdstagiaire() {
		return idstagiaire;
	}
	public void setIdstagiaire(Stagiaire idstagiaire) {
		this.idstagiaire = idstagiaire;
	}
	public Employe getEncadrant() {
		return encadrant;
	}
	public void setEncadrant(Employe encadrant) {
		this.encadrant = encadrant;
	}
	public String getEtat() {
		return etat;
	}
	public void setEtat(String etat) {
		this.etat = etat;
	}
	
	
}
