package com.example.addToCart.Repo;

import com.example.addToCart.Entity.Cart;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.UUID;

@Repository
public interface AddToCartRepo extends CrudRepository<Cart, Long> {

    Cart save(Cart cart);
    void delete(Cart cart);
    ArrayList<Cart> findByuserId(UUID userId);

}