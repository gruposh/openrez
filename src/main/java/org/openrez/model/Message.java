package org.openrez.model;

public class Message {

	private String subject;
	private String from;
	private String to;
	
	public Message(String subject, String from, String to) {
		super();
		this.subject = subject;
		this.from = from;
		this.to = to;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}
	
}
