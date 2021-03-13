package com.blog.api.api.controller;

import com.blog.api.api.service.UserService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value ="/users", method = RequestMethod.GET)
    @ResponseBody
    public String getAllUsers(){
        return new Gson().toJson(userService.getAll());
    }
}
