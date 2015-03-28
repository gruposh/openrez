package org.openrez.controller;

import org.openrez.model.Message;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessagesRestController {

	
	@RequestMapping("/services/messages/findRest")
	public Message findRest() {
		return new Message("hola amigos", "h@grupoh.com", "kim@yahoo.com")  ;
	}	
}
