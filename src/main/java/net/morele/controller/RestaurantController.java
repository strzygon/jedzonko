package net.morele.controller;

import net.morele.Constants;
import net.morele.domain.Restaurant;
import net.morele.repository.RestaurantRepository;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by strzygon on 2015-10-26.
 */

@RestController
@RequestMapping(value = Constants.URI_API + Constants.URL_RESTAURANT)
public class RestaurantController {

    static final Logger logger = Logger.getLogger(RestaurantController.class);

    @Autowired
    private RestaurantRepository repository;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Restaurant> getRestaurantList() {
        logger.info("getRestaurantList");
        return repository.findAll();
    }
}
