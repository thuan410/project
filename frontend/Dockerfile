# Sử dụng Gradle chính thức để build ứng dụng
FROM openjdk:17-jdk-slim

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép file JAR từ stage trước
COPY /build/libs/frontend-0.0.1-SNAPSHOT.jar /app/frontend-0.0.1-SNAPSHOT.jar

# Expose cổng 9090 (mặc định cho Spring Boot)
EXPOSE 9090

# Chạy ứng dụng
ENTRYPOINT ["java", "-jar", "/app/frontend-0.0.1-SNAPSHOT.jar"]

