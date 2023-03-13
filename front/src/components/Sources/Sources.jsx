import React from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';
import {faFile} from '@fortawesome/free-solid-svg-icons';
import {faVideo} from '@fortawesome/free-solid-svg-icons';
import styles from "./Sources.module.scss";


const element1 = <FontAwesomeIcon icon={faFile}/>;
const element2 = <FontAwesomeIcon icon={faBook}/>;
const element3 = <FontAwesomeIcon icon={faVideo}/>;

const data = [
    {
        image: element1,
        title: "Нормативно-правовые документы",
        description: "Приказы, постановления, инструкции, клинические протоколы"
    },
    {
        image: element2,
        title: "Литература",
        description: "Методические пособия, книги, презентации"

    },
    {
        image: element3,
        title: "Видеоматериалы",
        description: "Обучающие видеоролики, конференции, лекции"
    }
];

const Sources = () => {
    return (
        <div className={styles.sources} id="sources">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className={styles.sourcesHeading}>Обучающие материалы</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        <div className={styles.sources}>
                            {data.map((item, i) => {
                                return (
                                    <div key={i} className={`me-auto mb-5 ${styles.sourcesItem}`}>
                                        <div className={styles.sourcesIcon}>{item.image}</div>
                                        <h3 className={styles.sourcesTitle}>{item.title}</h3>
                                        <p className={styles.sourcesText}>
                                            {item.description}
                                        </p>
                                        <NavLink to="/" className={styles.sourcesLink}>Подробнее...</NavLink>
                                    </div>
                                )
                            })}

                        </div>
                    }
                </div>
            </div>
        </div>
    );

};

export default Sources;