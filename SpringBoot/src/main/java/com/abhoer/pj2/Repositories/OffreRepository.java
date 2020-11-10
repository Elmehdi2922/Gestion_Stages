package com.abhoer.pj2.Repositories;

import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.abhoer.pj2.entities.Offre;
import com.abhoer.pj2.entities.Stage;

@Primary
public interface OffreRepository extends JpaRepository<Offre,Integer> {

	@Query(value = "select * from offre where titre like :indice or message like :indice " , nativeQuery = true)
	public List<Offre> get_offre_byIndice(@Param("indice") String indice);
}
