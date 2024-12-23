# Sử dụng Gradle chính thức để build ứng dụng
FROM openjdk:17-jdk-slim

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép file JAR từ stage trước
COPY /build/libs/spring_api-0.0.1-SNAPSHOT.jar /app/spring_api-0.0.1-SNAPSHOT.jar

# Expose cổng 8080 (mặc định cho Spring Boot)
EXPOSE 8080

# Chạy ứng dụng
ENTRYPOINT ["java", "-jar", "/app/spring_api-0.0.1-SNAPSHOT.jar"]
