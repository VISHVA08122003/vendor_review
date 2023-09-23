package com.vishva.demo.aspect;

import java.util.Date;


import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Before;

public class UserAspect {
	
	@Before(value="execution(* com.vishva.demo.controller.usercontroller.getUser(..))")
	   public void beforeAdvice(JoinPoint joinpoint)
	   {
		   System.out.println(joinpoint.getSignature()+"Hello Sky "+new Date());
	   }
	@After(value="execution(* com.vishva.demo.controller.usercontroller.getUser(..))")
	public void afterAdvice(JoinPoint joinpoint)
	{
		 System.out.println(joinpoint.getSignature()+"After Advice Called "+new Date());
	}

}
