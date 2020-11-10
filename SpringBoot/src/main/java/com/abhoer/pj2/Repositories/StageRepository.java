package com.abhoer.pj2.Repositories;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.abhoer.pj2.entities.Stage;

 
@CrossOrigin("*")

@Primary 
public interface StageRepository extends JpaRepository<Stage,Integer> {
	@Query(value="Select * from stage where id=1;",nativeQuery = true)
	public Page<Stage> stage1(Pageable p);
	@Query(value = "select COUNT(stage.id) as nbr"
			+ " From stage RIGHT JOIN mois on stage.mois=mois.id"
			+ " GROUP by mois.id ORDER by mois.id" , nativeQuery = true)
	public List<Integer> getstage_bymonth();
	@Modifying
	@Query(value = "UPDATE `stage` "
			+ "SET `encadrant`=:enc,`etat`=:etat WHERE id=:indice" , nativeQuery = true)
	public int updatestage(@Param("indice") int indice,@Param("enc") int enc,@Param("etat") String etat);


	@Query(value = "select stage.* from stage where stage.etat='valide'" , nativeQuery = true)
	public List<Stage> get_stage_Employe();


	@Query(value = "SELECT * FROM stage where idstagiaire=:id" , nativeQuery = true)
	public List<Stage> get_stage_byStagiaire(@Param("id") int id);



}
