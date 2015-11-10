package net.morele.repository;

import net.morele.domain.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by strzygon on 2015-10-26.
 */
public interface RestaurantRepository extends JpaRepository<Restaurant,Integer> {
}
