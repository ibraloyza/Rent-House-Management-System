package com.renthouse.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class yesController {
    @GetMapping("/yes")
    public String yesss(){
        return "yesssssss";
    }

}
