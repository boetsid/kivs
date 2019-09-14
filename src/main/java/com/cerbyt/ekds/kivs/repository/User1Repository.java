package com.cerbyt.ekds.kivs.repository;
import com.cerbyt.ekds.kivs.domain.User1;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the User1 entity.
 */
@SuppressWarnings("unused")
@Repository
public interface User1Repository extends JpaRepository<User1, Long> {

}
