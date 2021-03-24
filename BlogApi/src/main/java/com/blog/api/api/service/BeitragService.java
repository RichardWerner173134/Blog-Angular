package com.blog.api.api.service;

import com.blog.api.api.model.Beitrag;
import com.blog.api.api.repository.BeitragRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public void addView(Long beitragId) throws Exception {
        Optional<Beitrag> byId = beitragRepository.findById(beitragId);
        if(byId.isPresent()){
            Beitrag beitrag = byId.get();
            beitrag.setViews(beitrag.getViews() + 1);
            beitragRepository.save(beitrag);
        } else {
            throw new Exception("Beitrag not found");
        }
    }
}
