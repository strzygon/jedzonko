package net.morele.domain;

import javax.persistence.*;

/**
 * Created by strzygon on 2015-10-26.
 */
@Entity
public class Meal {

    @Id
    @Column
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int mealId;

    @Column
    private String mealName;

    @ManyToOne
    private Restaurant restaurant;


    public int getMealId() {
        return mealId;
    }

    public void setMealId(int mealId) {
        this.mealId = mealId;
    }

    public String getMealName() {
        return mealName;
    }

    public void setMealName(String mealName) {
        this.mealName = mealName;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }
}
