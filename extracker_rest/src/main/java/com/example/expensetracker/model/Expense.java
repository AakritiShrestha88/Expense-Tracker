package com.example.expensetracker.model;



import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="expenses")
public class Expense {
@Id
@GeneratedValue(strategy = GenerationType.TABLE)
    private long id;
    private String name;
    private double amount;
    private String category;
    private String description;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
    
    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
