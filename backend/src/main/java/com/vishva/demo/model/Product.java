package com.vishva.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="concert")
public class Product {
	
	@Id
	@GeneratedValue
	private Long id;
	private String productName;
	private Long Cost;
	private Long Quantity;
	
	
	
	public Product() {
		super();
	}
	public Product(Long id, String productName, Long cost, Long quantity) {
		super();
		this.id = id;
		this.productName = productName;
		Cost = cost;
		Quantity = quantity;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public Long getCost() {
		return Cost;
	}
	public void setCost(Long cost) {
		Cost = cost;
	}
	public Long getQuantity() {
		return Quantity;
	}
	public void setQuantity(Long quantity) {
		Quantity = quantity;
	}
}
