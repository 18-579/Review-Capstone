package com.codewitharjun.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewitharjun.fullstackbackend.model.User;

public interface UserRepository extends JpaRepository<User,Long>{

}
