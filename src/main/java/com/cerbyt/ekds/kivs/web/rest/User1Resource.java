package com.cerbyt.ekds.kivs.web.rest;

import com.cerbyt.ekds.kivs.domain.User1;
import com.cerbyt.ekds.kivs.repository.User1Repository;
import com.cerbyt.ekds.kivs.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.cerbyt.ekds.kivs.domain.User1}.
 */
@RestController
@RequestMapping("/api")
public class User1Resource {

    private final Logger log = LoggerFactory.getLogger(User1Resource.class);

    private static final String ENTITY_NAME = "user1";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final User1Repository user1Repository;

    public User1Resource(User1Repository user1Repository) {
        this.user1Repository = user1Repository;
    }

    /**
     * {@code POST  /user-1-s} : Create a new user1.
     *
     * @param user1 the user1 to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new user1, or with status {@code 400 (Bad Request)} if the user1 has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/user-1-s")
    public ResponseEntity<User1> createUser1(@RequestBody User1 user1) throws URISyntaxException {
        log.debug("REST request to save User1 : {}", user1);
        if (user1.getId() != null) {
            throw new BadRequestAlertException("A new user1 cannot already have an ID", ENTITY_NAME, "idexists");
        }
        User1 result = user1Repository.save(user1);
        return ResponseEntity.created(new URI("/api/user-1-s/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /user-1-s} : Updates an existing user1.
     *
     * @param user1 the user1 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated user1,
     * or with status {@code 400 (Bad Request)} if the user1 is not valid,
     * or with status {@code 500 (Internal Server Error)} if the user1 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/user-1-s")
    public ResponseEntity<User1> updateUser1(@RequestBody User1 user1) throws URISyntaxException {
        log.debug("REST request to update User1 : {}", user1);
        if (user1.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        User1 result = user1Repository.save(user1);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, user1.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /user-1-s} : get all the user1S.
     *

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of user1S in body.
     */
    @GetMapping("/user-1-s")
    public List<User1> getAllUser1S() {
        log.debug("REST request to get all User1S");
        return user1Repository.findAll();
    }

    /**
     * {@code GET  /user-1-s/:id} : get the "id" user1.
     *
     * @param id the id of the user1 to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the user1, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/user-1-s/{id}")
    public ResponseEntity<User1> getUser1(@PathVariable Long id) {
        log.debug("REST request to get User1 : {}", id);
        Optional<User1> user1 = user1Repository.findById(id);
        return ResponseUtil.wrapOrNotFound(user1);
    }

    /**
     * {@code DELETE  /user-1-s/:id} : delete the "id" user1.
     *
     * @param id the id of the user1 to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/user-1-s/{id}")
    public ResponseEntity<Void> deleteUser1(@PathVariable Long id) {
        log.debug("REST request to delete User1 : {}", id);
        user1Repository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
