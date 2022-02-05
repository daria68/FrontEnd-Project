package com.SportPartner.SportPartner.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.SportPartner.SportPartner.model.User;
import com.SportPartner.SportPartner.service.SportPartnerService;
import org.apache.catalina.Service;

@RestController
public class SportPartnerController {
    @Autowired
    private SportPartnerService service;

    //register
    @PostMapping("/sportPartnerregister")
    @CrossOrigin(origins = "http://localhost:4200")
    public User sportPartner(@RequestBody User user) throws Exception {
        String tempEmail = user.getEmail();
        if(tempEmail !=null && !"".equals(tempEmail)){
            User userobj = service.fetchUserByEmail(tempEmail);
            if(userobj != null){
                throw new Exception("The user " + tempEmail + " already exists!" );
            }
        }
        User userObj = null;
        userObj = service.saveUser(user);
        return userObj;
    }

    //login
    @PostMapping("/sportPartnerlogin")
    @CrossOrigin(origins = "http://localhost:4200")
    public User loginsportPartner(@RequestBody User user) throws Exception {
        String tempEmail = user.getEmail();
        String tempPass = user.getPassword();
        User userObj = null;
        if(tempEmail !=null && tempPass != null){
            userObj = service.fetchUserByEmailAndPassword(tempEmail,tempPass);
        }
        if(userObj == null){
            throw new Exception("Wrong credentials!");
        }
        return userObj;
    }
}
