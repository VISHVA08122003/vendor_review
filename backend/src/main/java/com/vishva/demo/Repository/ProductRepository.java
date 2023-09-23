package com.vishva.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vishva.demo.model.Payment;
import com.vishva.demo.model.Product;


public interface ProductRepository extends JpaRepository<Product, Long>{

	Payment save(Payment data);

}
