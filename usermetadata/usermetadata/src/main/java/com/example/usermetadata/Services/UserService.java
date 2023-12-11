package com.example.usermetadata.Services;

import com.example.usermetadata.Entity.UserMetaData;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {
    public UserMetaData saveUserMetaData(UserMetaData userMetaData);


    public List<UserMetaData> getUserMetaData(String uniqueId);
}
