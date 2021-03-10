package com.blog.api.api.service;

import com.blog.api.api.model.Beitrag;
import com.blog.api.api.repository.BeitragRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BeitragService {

    @Autowired
    private BeitragRepository beitragRepository;

    public List<Beitrag> getAllBeitraege(){
        return beitragRepository.findAll();
    }

    public void addBeitrag(Beitrag beitrag) {
        beitragRepository.save(beitrag);
    }
}