package com.blog.api.api.controller;

import com.blog.api.api.model.Beitrag;
import com.blog.api.api.security.AuthenticationRequest;
import com.blog.api.api.security.JwtUtil;
import com.blog.api.api.security.MyUserDetailsService;
import com.blog.api.api.service.BeitragService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
public class BeitragController {

    @Autowired
    private MyUserDetailsService myUserDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

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

    @PostMapping(value = "/authenticate")
    @ResponseBody
    public String authentiate(@RequestBody AuthenticationRequest request) throws Exception {

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getUsername(),
                            request.getPassword()
                    )
            );
        } catch (BadCredentialsException e) {
            throw new Exception("Incorrect Username and Password");
        }

        final UserDetails userdetails = myUserDetailsService.loadUserByUsername(request.getUsername());

        final String jwt = jwtUtil.generateToken(userdetails);

        return new Gson().toJson(jwt);
    }
}
