package com.example.expensetracker.repos;

import com.example.expensetracker.model.Expense;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ExpenseRepository extends CrudRepository<Expense,Integer> {
    List<Expense> findAll();
    Expense findById(int id);
    List<Expense> findByCategoryAndName(String category,String name);
   List<Expense> findByCategory(String category);
    List<Expense> findByAmountLessThan(double amount);
}
