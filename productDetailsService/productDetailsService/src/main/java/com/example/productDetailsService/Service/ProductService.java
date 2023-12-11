package com.example.productDetailsService.Service;

import com.example.productDetailsService.Entity.Product;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.UUID;

@Service
public interface ProductService {
   public Product saveDataToDB(Product product);

   public ArrayList<Product> findAllProducts();

   public Product getProductDetails(UUID productId);
}
