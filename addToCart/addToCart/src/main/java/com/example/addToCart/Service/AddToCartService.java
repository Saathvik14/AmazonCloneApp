package com.example.addToCart.Service;

import com.example.addToCart.Entity.Cart;
import com.example.addToCart.Entity.CartDetails;

import java.util.UUID;

public interface AddToCartService {
    public void addItemTOCartService(Cart cart);

    public void removeItemFromCartService(Cart cart);

    public CartDetails displayAllProductsInCart(UUID userId);
}
