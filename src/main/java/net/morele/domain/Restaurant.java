package net.morele.domain;

import javax.persistence.*;

/**
 * Created by strzygon on 2015-10-24.
 */
@Entity
public class Restaurant {

    @Id
    @Column
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int restaurantId;

    @Column
    private String name;

    @Column
    private String type;

    public int getRestaurantId() {
        return restaurantId;
    }

    public void setRestaurantId(int restaurantId) {
        this.restaurantId = restaurantId;
    }

    public String getName() {        return name;    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
