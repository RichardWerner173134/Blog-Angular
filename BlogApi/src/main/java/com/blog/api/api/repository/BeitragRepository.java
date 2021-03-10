package com.blog.api.api.repository;

import com.blog.api.api.model.Beitrag;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BeitragRepository extends CrudRepository<Beitrag, Integer> {
    List<Beitrag> findAll();
}
