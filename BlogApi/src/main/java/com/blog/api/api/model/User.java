package com.blog.api.api.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User implements UserDetails {
    @Id
    @Column
    private String username;

    @Column
    private String password;

    @Column
    private String vorname;

    @Column
    private String nachname;

    @Column
    private byte[] profilBild;

    @Column
    private String authorities;

    @Transient
    private Collection<? extends GrantedAuthority> authList;

    @Column
    private boolean isAccountNonExpired;

    @Column
    private boolean isAccountNonLocked;

    @Column
    private boolean isCredentialsNonExpired;

    @Column
    private boolean isEnabled;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authList;
    }

    @Override
    public boolean isAccountNonExpired() {
        return isAccountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return isAccountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return isCredentialsNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return isEnabled;
    }

    public void setAuthList(Collection<? extends GrantedAuthority> authorities){
        this.authList = authorities;
        this.authorities = "";
        for(GrantedAuthority a : authorities){
            this.authorities += a.getAuthority().toString();
        }
    }
}
