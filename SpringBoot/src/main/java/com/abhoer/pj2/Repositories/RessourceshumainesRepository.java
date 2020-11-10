package com.abhoer.pj2.Repositories;

import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.JpaRepository;

import com.abhoer.pj2.entities.ResourcesHumaines;;

@Primary
public interface RessourceshumainesRepository extends JpaRepository<ResourcesHumaines,Integer> {

//	@Query(value = "SELECT p.* FROM reservation r,personne p,tables t,suite s WHERE r.tableid=t.id and p.id=r.clientid and p.typecompte='client' and t.suiteid=s.id and s.id in(select personne.sid from personne where personne.id=:x) ", nativeQuery = true)
//	public List<Admin> getusersofsuite(@Param("x")int x);
}
