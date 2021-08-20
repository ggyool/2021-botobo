FROM openjdk:11-jdk
ARG JAR_FILE=target/*SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-Dspring.profiles.active=dev","-jar","/app.jar"]

