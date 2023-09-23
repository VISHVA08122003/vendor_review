package com.vishva.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.reactive.CorsConfigurationSource;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;

@OpenAPIDefinition(
		info = @Info(
				contact=@Contact(
			name = "vishva",
			email="vishva@gmail.com",
			url="https://vendormanagement-url.com"
				),
		description="This is open api documentation for vendor management system",
		title="vendormanagement",
		version="1.0",
		license=@License(
				name="MIT",
				url="https://vendormanagement-url.com"
				),
		termsOfService=
		"Terms of service"
				)
		)
@Configuration

public class OpenApiConfig {
	@Bean
	public UrlBasedCorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration config =  new CorsConfiguration();
		config.addAllowedHeader("*");
		config.addAllowedOrigin("*");
		config.addAllowedMethod("*");
		UrlBasedCorsConfigurationSource source = new  UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", config);
		return source;
	}
}
