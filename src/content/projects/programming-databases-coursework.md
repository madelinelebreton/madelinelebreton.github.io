---
title: Programming and database coursework
summary: "Course projects in C, Java and SQL: a sentiment analysis tool, a resizable hash table, and a relational database for a Formula 1 racing team."
year: "2024"
place: McMaster University
organization: Mechatronics Engineering
order: 3
cover: ../../assets/projects/programming-databases-coursework/uml.png
coverAlt: UML class diagram of a racing team database, with classes for team, vehicle, engine, driver, driver contract, personnel, race engineer, mechanic and director.
fit: contain
plate: "#ffffff"
rich: true
tools: [C, Java, SQL, PostgreSQL]
linksHeading: Code on GitHub
links:
  - label: "Sentiment analysis tool in C (VADER-style)"
    href: https://github.com/madelinelebreton/algorithms-c/tree/main/sentiment-analysis-vader
  - label: "Data structures in Java"
    href: https://github.com/madelinelebreton/data-structures-java
  - label: "Racing team database in SQL"
    href: https://github.com/madelinelebreton/racing-team-database
tags: [data]
group: "design"
outcome: "A sentiment scorer in C, a resizable hash table in Java, and a racing-team database in SQL."
---
Three software courses from my mechatronics degree, each with a final project: a sentiment scorer in C, a resizable hash table in Java, and a racing-team database in SQL. The code is on GitHub (links at the bottom of the page).

## Programming for Mechatronics, C

**[Final project:](https://github.com/madelinelebreton/algorithms-c/tree/main/sentiment-analysis-vader)** a sentiment analysis tool in the style of VADER. It loads a word lexicon into a dynamically sized array and scores each sentence, adjusting for exclamation points, all-caps words, intensifiers like "very" and negations like "not". It then normalizes the result to a score between -1 and 1.

## Data Structures and Algorithms, Java

**[Sample:](https://github.com/madelinelebreton/data-structures-java)** I implemented a hash table for book names and 10-digit ISBNs. It handles collisions by linear probing, doubles in size when it is 70% full, and re-hashes the entries after a removed book so later lookups still work.

## Database Foundations, SQL

**[Final project:](https://github.com/madelinelebreton/racing-team-database)** with two teammates I built a database for a racing team. I drew the UML model, mapped it to a relational schema, and wrote the SQL: the schema, sample data for three teams, five queries without aggregates and three with. The model covers drivers who change during the season and reserve drivers.

![UML class diagram of the racing team database, with classes for team, vehicle, engine, driver, driver contract, personnel, race engineer, mechanic and director.](../../assets/projects/programming-databases-coursework/uml.png "wide: The UML diagram of the racing team database.")

<div class="align-bottom">
<div class="ab-text">

For example, to find the drivers who are reserves, I subtracted the drivers with a non-reserve contract from all drivers:

```sql
SELECT Driver.FIAID
FROM Driver
EXCEPT
SELECT DriverContract.FIAID
FROM DriverContract
WHERE Reserve = FALSE;
```

</div>

![SQL CREATE TABLE statements for the engine and driver tables, with primary and foreign keys.](../../assets/projects/programming-databases-coursework/schema-sql.png "Part of the schema, with the primary and foreign keys.")

</div>
