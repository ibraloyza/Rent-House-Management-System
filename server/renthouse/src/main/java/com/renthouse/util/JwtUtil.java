package com.renthouse.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {
    private  final String jwtSecret = "myjwtsecretkey";
    private final long jwtExpirationMs = 3600000;

    public  String generateToken(UserDetails userDetails){
        return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .claim("role",userDetails.getAuthorities().iterator().next().getAuthority())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()+jwtExpirationMs))
                .signWith(SignatureAlgorithm.HS512,jwtSecret)
                .compact();
    }
    public  String extractUsername(String token){
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJwt(token).getBody().getSubject();
    }
    public  boolean validateToken(String token, UserDetails userDetails){
        final  String username = extractUsername(token);
        return username.equals(userDetails.getUsername());
    }
}
