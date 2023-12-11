package com.example.productDetailsService.Repository;

import com.example.productDetailsService.Entity.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.UUID;

public interface ProductRepo extends MongoRepository<Product, BigInteger> {

    Product save(Product product);
    ArrayList<Product> findAll();
    Product findByproductID(UUID productId);
}
