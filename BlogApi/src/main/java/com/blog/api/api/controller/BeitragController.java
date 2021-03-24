package com.blog.api.api.controller;

import com.blog.api.api.model.Beitrag;
import com.blog.api.api.model.BeitragViewIncreaseRequest;
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

    @RequestMapping(value = "/beitraege", produces = "application/json", method = RequestMethod.GET)
    @ResponseBody
    public String getBeitraege() {
        return new Gson().toJson(beitragService.getAllBeitraege());
    }

    @RequestMapping(value = "/addBeitrag", method = RequestMethod.POST)
    public ResponseEntity addBeitrag(@Validated @RequestBody Beitrag beitrag) {
        try {
            beitragService.addBeitrag(beitrag);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @RequestMapping(value = "/beitraege/{beitragId}/addView", method = RequestMethod.POST)
    public ResponseEntity addView(@PathVariable int beitragId, @RequestBody BeitragViewIncreaseRequest request) throws Exception {
        beitragService.addView((long)beitragId);
        return ResponseEntity.ok().build();
    }


}
