package com.vishva.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vishva.demo.model.Payment;



public interface PaymentRepository extends JpaRepository<Payment, Integer>{


}
