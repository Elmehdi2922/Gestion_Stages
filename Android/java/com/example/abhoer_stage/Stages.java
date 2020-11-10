package com.example.abhoer_stage;

import com.google.gson.annotations.SerializedName;

public class Stages {
    @SerializedName("id")
    private int id;

    @SerializedName("datedebut")
    private String datedebut;

    @SerializedName("datefin")
    private String datefin;

    @SerializedName("demande")
    private String demande;

    @SerializedName("duree")
    private String duree;

    @SerializedName("encadrant")
    private int encadrant;

    @SerializedName("etat")
    private int iddepartement;

    @SerializedName("idstagiaire")
    private int idstagiaire;

    @SerializedName("idtypestage")
    private int idtypestage;

    @SerializedName("mois")
    private String mois;

    @SerializedName("rapport")
    private String rapport;


    public int getId() {
        return id;
    }

    public String getDatedebut() {
        return datedebut;
    }

    public String getDatefin() {
        return datefin;
    }

    public String getDemande() {
        return demande;
    }

    public String getDuree() {
        return duree;
    }

    public int getEncadrant() {
        return encadrant;
    }

    public int getIddepartement() {
        return iddepartement;
    }

    public int getIdstagiaire() {
        return idstagiaire;
    }

    public int getIdtypestage() {
        return idtypestage;
    }

    public String getMois() {
        return mois;
    }

    public String getRapport() {
        return rapport;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setDatedebut(String datedebut) {
        this.datedebut = datedebut;
    }

    public void setDatefin(String datefin) {
        this.datefin = datefin;
    }

    public void setDemande(String demande) {
        this.demande = demande;
    }

    public void setDuree(String duree) {
        this.duree = duree;
    }

    public void setEncadrant(int encadrant) {
        this.encadrant = encadrant;
    }

    public void setIddepartement(int iddepartement) {
        this.iddepartement = iddepartement;
    }

    public void setIdstagiaire(int idstagiaire) {
        this.idstagiaire = idstagiaire;
    }

    public void setIdtypestage(int idtypestage) {
        this.idtypestage = idtypestage;
    }

    public void setMois(String mois) {
        this.mois = mois;
    }

    public void setRapport(String rapport) {
        this.rapport = rapport;
    }
}
