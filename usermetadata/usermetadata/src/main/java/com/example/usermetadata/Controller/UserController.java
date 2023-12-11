package com.example.usermetadata.Controller;


import com.example.usermetadata.Entity.UserMetaData;
import com.example.usermetadata.Services.UserService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/amazon/users/")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("saveUserDetails")
    public UserMetaData saveUserDetails(@RequestBody UserMetaData userMetaData){
        return userService.saveUserMetaData(userMetaData);
    }

    @GetMapping("getUserDetails/{userId}")
    public List<UserMetaData> getUserDetails(@PathVariable("userId") String uniqueId){
        return userService.getUserMetaData(uniqueId);
    }
}
