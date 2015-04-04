package org.openrez.controller;

import java.util.List;

import org.openrez.model.Customer;
import org.openrez.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerRestController {

	@Autowired
	private CustomerRepository repository;
	
	@RequestMapping("/services/customers/init.json")
	public boolean init() {
		repository.save(new Customer("Juan", "Peres"));
		repository.save(new Customer("Miguel", "Ramos"));
		return true;
	}
	
	@RequestMapping("/services/customer/findRest.json")
	public List<Customer> findRest() {
		for (Customer customer: repository.findAll()) {
			System.out.println("customer: " + customer.toString());
		}
		
		return repository.findAll();
	}	
}
