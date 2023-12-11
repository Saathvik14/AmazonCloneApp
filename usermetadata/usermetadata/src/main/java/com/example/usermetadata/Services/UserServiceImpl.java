package com.example.usermetadata.Services;


import com.example.usermetadata.Entity.UserMetaData;
import com.example.usermetadata.Repository.UserRepo;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserMetaData saveUserMetaData(UserMetaData userMetaData) {
        return userRepo.save(userMetaData);
    }


    @Override
    public List<UserMetaData> getUserMetaData(String uniqueId)
    {
       return userRepo.findAllByUniqueId(uniqueId);
    }

}
