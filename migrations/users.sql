create table sexe
(
    id   int auto_increment,
    name varchar(80) not null,
    constraint sexe_id_uindex
        unique (id)
);

alter table sexe
    add primary key (id);

create table users
(
    id         int auto_increment,
    mail       varchar(100) not null,
    pseudo     varchar(50)  not null,
    password   varchar(255) not null,
    sexe       int          not null,
    created_at datetime     not null,
    constraint users_id_uindex
        unique (id),
    constraint users_sexe_id_fk
        foreign key (sexe) references sexe (id)
);

alter table users
    add primary key (id);



INSERT INTO sexe (id, name) VALUES (1, 'Homme');
INSERT INTO sexe (id, name) VALUES (2, 'Femme');
INSERT INTO sexe (id, name) VALUES (3, 'Non précisé');