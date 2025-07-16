package com.renthouse.controller;

import com.renthouse.dto.AuthResponse;
import com.renthouse.dto.LoginRequest;
import com.renthouse.dto.RegisterRequest;
import com.renthouse.model.Role;
import com.renthouse.model.User;
import com.renthouse.repository.UserRepository;
import com.renthouse.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request){
        if (userRepository.existsByUsername(request.getUsername()))
            return  ResponseEntity.badRequest().body("username  already taken");

        if (userRepository.existsByEmail(request.getEmail()))
            return ResponseEntity.badRequest().body("email already exist");

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.User); //Default role

        userRepository.save(user);
        return  ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public  ResponseEntity<?> login(@RequestBody LoginRequest request){
        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(),request.getPassword())
        );
        UserDetails userDetails = (UserDetails)  auth.getPrincipal();
        String jwt = jwtUtil.generateToken(userDetails);
        return  ResponseEntity.ok(new AuthResponse(jwt));
    }
}
