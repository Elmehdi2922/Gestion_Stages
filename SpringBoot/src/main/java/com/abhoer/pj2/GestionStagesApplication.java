package com.abhoer.pj2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.abhoer.pj2.Repositories.AdminRepository; 
import com.abhoer.pj2.Repositories.DepartementRepository;
import com.abhoer.pj2.Repositories.EmployeRepository;
import com.abhoer.pj2.Repositories.MoisRepository;
import com.abhoer.pj2.Repositories.NiveauRepository;
import com.abhoer.pj2.Repositories.RessourceshumainesRepository;
import com.abhoer.pj2.Repositories.StageRepository;
import com.abhoer.pj2.Repositories.StageTypeRepository;
import com.abhoer.pj2.Repositories.StagiaireRepository;
import com.abhoer.pj2.entities.Admin;
import com.abhoer.pj2.entities.Departement;
import com.abhoer.pj2.entities.Employe;
import com.abhoer.pj2.entities.Mois;
import com.abhoer.pj2.entities.Niveau;
import com.abhoer.pj2.entities.Stage;
import com.abhoer.pj2.entities.StageType;
import com.abhoer.pj2.entities.Stagiaire;
import com.abhoer.pj2.entities.ResourcesHumaines;




@SpringBootApplication
public class GestionStagesApplication implements CommandLineRunner  {

	
	@Autowired
	public AdminRepository adminRepository ;
	
	@Autowired
	public DepartementRepository departementRepository;

	@Autowired
	public NiveauRepository niveauRepository;
	
	@Autowired
	public EmployeRepository employeRepository;
	 
	@Autowired
	public StagiaireRepository stagiaireRepository;
	
	@Autowired
	public MoisRepository moisRepository;
	 
	@Autowired
	public StageRepository stageRepository;
	
	
	@Autowired
	public StageTypeRepository stageTypeRepository;
	
	@Autowired
	public RessourceshumainesRepository ressourceshumainesRepository;
	
	 
	
	public static void main(String[] args) {
		SpringApplication.run(GestionStagesApplication.class, args);
		
		
	}
	
	
	public void run(String... arg0) throws Exception {	
		System.out.println("############## Projet ################");
		System.out.println("############## Admin Compte ################");
		
		
		adminRepository.save(new Admin("n410299","KHALKI","Elmehdi","Marrakech","d53177942","mehdikhalki45@gmail.com","images/icon/avatar-7.jpg","Admin","123"));
		adminRepository.save(new Admin("n20192","KHALKI","HAMZA","ESSAOUIRA","0604020505","HAMZAKHOKHO@gmail.com","images/icon/avatar-06.jpg","HAMZA","123"));
		adminRepository.save(new Admin("k20092","Persone","p1","ESSAOUIRA","0604020505","personne1@gmail.com","images/icon/avatar-06.jpg","HAMZA1","123"));
		adminRepository.save(new Admin("l28192","Homme","p2","Casa","0604020505","personne2@gmail.com","images/icon/avatar-06.jpg","HAMZA2","123"));
		adminRepository.save(new Admin("h90192","Femme","p3","Beni Mellal","0604020505","personne4@gmail.com","images/icon/avatar-06.jpg","HAMZA3","123"));
		
		
		System.out.println("############## Departement ################");
		
		Departement departement1=new Departement("Informatique");
		Departement departement2=new Departement("Ressources Humaines");
		Departement departement3=new Departement("Finance");
		

		departementRepository.save(departement1);
		departementRepository.save(departement2);
		departementRepository.save(departement3);
		
		System.out.println("############## Employe ################");
		
		Employe employe=new Employe("R1233","Rachid","Chawi","Casa","0604020505","Rachid@gmail.com","images/icon/avatar-01.jpg","Rachid","123",departement1);
		employeRepository.save(employe);
		employeRepository.save(new Employe("R2588","Saadia","Marzouk","Beni Mellal","0604020505","Saadia@gmail.com","images/icon/avatar-02.jpg","Saadia","123",departement3));
		employeRepository.save(new Employe("R0004","Mohamed","Khalki","Essouira","0604020505","Khalki@gmail.com","images/icon/avatar-03.jpg","Mohamed","123",departement2));
		employeRepository.save(new Employe("R1233","MOUSTAFA","HARIQ","Tedla","0604020505","Rachid@gmail.com","images/icon/avatar-04.jpg","HARIQ","123",departement1));
		employeRepository.save(new Employe("R1255","respo","MEhdi","Casa","0604020505","respo@gmail.com","images/icon/avatar-06.jpg","respo","123",departement2));
		employeRepository.save(new Employe("R1233","Rachid","Chawi","Casa","0604020505","Rachid@gmail.com","images/icon/avatar-01.jpg","Rachid","123",departement1));
		employeRepository.save(new Employe("R2588","Saadia","Marzouk","Beni Mellal","0604020505","Saadia@gmail.com","images/icon/avatar-02.jpg","Saadia","123",departement3));
		employeRepository.save(new Employe("R0004","Mohamed","Khalki","Essouira","0604020505","Khalki@gmail.com","images/icon/avatar-03.jpg","Mohamed","123",departement2));
		employeRepository.save(new Employe("R1233","MOUSTAFA","HARIQ","Tedla","0604020505","Rachid@gmail.com","images/icon/avatar-04.jpg","HARIQ","123",departement1));
		employeRepository.save(new Employe("R1255","respo","MEhdi","Casa","0604020505","respo@gmail.com","images/icon/avatar-06.jpg","respo","123",departement2));
		employeRepository.save(new Employe("R1233","Rachid","Chawi","Casa","0604020505","Rachid@gmail.com","images/icon/avatar-01.jpg","Rachid","123",departement1));
		employeRepository.save(new Employe("R2588","Saadia","Marzouk","Beni Mellal","0604020505","Saadia@gmail.com","images/icon/avatar-02.jpg","Saadia","123",departement3));
		employeRepository.save(new Employe("R0004","Mohamed","Khalki","Essouira","0604020505","Khalki@gmail.com","images/icon/avatar-03.jpg","Mohamed","123",departement2));
		employeRepository.save(new Employe("R1233","MOUSTAFA","HARIQ","Tedla","0604020505","Rachid@gmail.com","images/icon/avatar-04.jpg","HARIQ","123",departement1));
		employeRepository.save(new Employe("R1255","respo","MEhdi","Casa","0604020505","respo@gmail.com","images/icon/avatar-06.jpg","respo","123",departement2));

		System.out.println("############## Niveau ################");
		
		niveauRepository.save(new Niveau("1ere année"));
		niveauRepository.save(new Niveau("2eme année"));
		niveauRepository.save(new Niveau("3eme année"));
		niveauRepository.save(new Niveau("4eme année"));
		niveauRepository.save(new Niveau("5eme année"));
		
		System.out.println("############## Type stage ################");
		
		StageType stageType1= new StageType("obligatoire ");
		StageType stageType2= new StageType("decouverte ");
		StageType stageType3= new StageType("initiation");
		StageType stageType4= new StageType("facultatifs");
		stageTypeRepository.save(stageType1);
		stageTypeRepository.save(stageType2);
		stageTypeRepository.save(stageType3);
		stageTypeRepository.save(stageType4);
		
		System.out.println("############## Niveau ################");
		
		moisRepository.save(new Mois("janvier"));
		moisRepository.save(new Mois("fevrier"));
		moisRepository.save(new Mois("mars"));
		moisRepository.save(new Mois("avril"));
		moisRepository.save(new Mois("mai"));
		moisRepository.save(new Mois("juin"));
		moisRepository.save(new Mois("juillet"));
		moisRepository.save(new Mois("aout"));
		moisRepository.save(new Mois("septembre"));
		moisRepository.save(new Mois("octobre"));
		moisRepository.save(new Mois("novembre"));
		moisRepository.save(new Mois("decembre")); 
		
		System.out.println("############## Stagiaire ################");
		
		
		Stagiaire stagiaire= new Stagiaire("St12364","Amine","Elmandour","Safi","0678952514","Amin@gmail.com","images/icon/avatar-02.jpg","AminStg","123",2,"doc/KHALKI.pdf","EMSI");
		stagiaireRepository.save(stagiaire);
		
		System.out.println("############## Ressource humaines ################");
		
		ressourceshumainesRepository.save(new ResourcesHumaines("RH14785","MOHAMED","BENITABAA","Marrakech","0678952514","Amin@gmail.com","images/icon/avatar-02.jpg","RH123","2019"));
		
		
		System.out.println("############## Stage ################");
		
		stageRepository.save(new Stage("2 mois","20-10-2019","30-11-2019",departement1,stageType1,stagiaire,employe,"doc/cv.pdf","doc/rapport1.pdf"));
		stageRepository.save(new Stage("3 mois","12-10-2019","30-11-2019",departement1,stageType1,stagiaire,employe,"doc/cv2.pdf","doc/rapport2.pdf"));

		stageRepository.save(new Stage("5 mois","30-12-2019","01-01-2020",departement1,stageType1,stagiaire,employe,"doc/cv1.pdf","doc/rapport3.pdf"));
		stageRepository.save(new Stage("6 mois","30-12-2019","01-01-2020",departement1,stageType1,stagiaire,employe,"doc/cv2.pdf","doc/rapport4.pdf"));
		stageRepository.save(new Stage("3 mois","30-12-2019","01-01-2020",departement1,stageType1,stagiaire,employe,"doc/cv2.pdf","doc/rapport5.pdf"));
		
		
		System.out.println("############## The END ################");
		
		
	
		
	}


}
