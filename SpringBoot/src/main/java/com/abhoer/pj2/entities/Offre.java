package com.abhoer.pj2.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

 
@Entity 
public class Offre {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String titre;
	private String image;
	private String message;
	private String date;
	
	public Offre() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Offre(String titre, String message, String date) {
		super();
		this.titre = titre;
		this.message = message;
		this.date = date;
	}
	public Offre(String titre, String message, String date,String image) {
		super();
		this.titre = titre;
		this.image = image;
		this.message = message;
		this.date = date;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	 
}
