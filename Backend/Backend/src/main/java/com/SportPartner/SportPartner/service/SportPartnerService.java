package com.SportPartner.SportPartner.service;

import com.SportPartner.SportPartner.repository.SportPartnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.SportPartner.SportPartner.model.User;
@Service
public class SportPartnerService {

        @Autowired
        private SportPartnerRepository repo;

        public User saveUser(User user) {
            return repo.save(user);
        }

        public User fetchUserByEmail(String email){
            return repo.findByEmail(email);
        }

        public User fetchUserByEmailAndPassword(String email, String password){
            return repo.findByEmailAndPassword(email, password);
        }

}
