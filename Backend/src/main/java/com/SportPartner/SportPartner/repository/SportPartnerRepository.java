package com.SportPartner.SportPartner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.SportPartner.SportPartner.model.User;
public interface SportPartnerRepository extends JpaRepository<User,Integer> {
    public User findByEmail(String email);
    public User findByEmailAndPassword(String email, String password);
}
