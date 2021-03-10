package com.blog.api.api.controller;

import com.blog.api.api.model.Beitrag;
import com.blog.api.api.service.BeitragService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
public class BeitragController {

    @Autowired
    private BeitragService beitragService;

    @GetMapping(value = "/beitraege", produces = "application/json")
    @ResponseBody
    public String getBeitraege(){
        return new Gson().toJson(beitragService.getAllBeitraege());
    }

    @PostMapping("/addBeitrag")
    public ResponseEntity addBeitrag(@Validated @RequestBody Beitrag beitrag){
        try {
            beitragService.addBeitrag(beitrag);
            return ResponseEntity.ok().build();
        } catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }
}
