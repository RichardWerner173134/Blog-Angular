package com.blog.api.api.service;

import com.blog.api.api.model.User;
import com.blog.api.api.model.UserDAO;
import com.blog.api.api.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> getUser(String username){
        return userRepository.findById(username);
    }

    public void addUser(User user){
        userRepository.save(user);
    }

    public boolean isPresent(User user){
        return userRepository.findById(user.getUsername()).isPresent();
    }

    public List<UserDAO> getAll() {
        return userRepository.findAll().stream()
                .map(user -> new UserDAO(user.getUsername(), user.getVorname(), user.getNachname()))
                .collect(Collectors.toList());
    }
}