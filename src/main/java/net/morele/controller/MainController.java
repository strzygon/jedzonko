package net.morele.controller;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by strzygon on 2015-05-28.
 */
@Controller
public class MainController {

    static final Logger logger = Logger.getLogger(MainController.class);

/*  @RequestMapping("/")
    String index() {
        logger.info("index");
        return "index";
    }*/
    @RequestMapping({
            "/",
            "/restaurant/{id:\\w+}",
    })
    public String index() {
        System.out.println("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");
        return "forward:/index.html";
    }

}
