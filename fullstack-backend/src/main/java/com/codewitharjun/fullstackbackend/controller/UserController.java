package com.codewitharjun.fullstackbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.codewitharjun.fullstackbackend.exception.UserNotFoundException;
import com.codewitharjun.fullstackbackend.model.User;
import com.codewitharjun.fullstackbackend.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3002/")

public class UserController {
	 
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/user")
	User newUser(@RequestBody User newUser) {
		return userRepository.save(newUser);
	}
	
	@GetMapping("/user")
	List<User> getAllUsers(){
		return userRepository.findAll();
	}
	
	@GetMapping("/user/{id}")
	User getUserById(@PathVariable Long id) {
		return userRepository.findById(id)
		   .orElseThrow(()->new UserNotFoundException(id));
		    
	}
	
	@PutMapping("/user/{id}")
	User updateUser(@RequestBody User newUser,@PathVariable Long id) {
	   return userRepository.findById(id)
	     .map(user -> {
	    	 
	     user.setUsername(newUser.getUsername());
	     user.setEmail(newUser.getEmail());
	     user.setPassword(newUser.getPassword());
	     return userRepository.save(user);
	     
	     }).orElseThrow(()->new UserNotFoundException(id));
	
	}
	@DeleteMapping("/user/{id}")
	String deleteUser(@PathVariable Long id) {
		if(!userRepository.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		userRepository.deleteById(id);
		return "User with id"+id+"has been deleted success";
			
	}
	
	
	


}
