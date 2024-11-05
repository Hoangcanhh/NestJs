# Sử dụng hình ảnh Node.js phiên bản phù hợp
FROM node:20.12.2

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt các package
RUN npm install

# Sao chép mã nguồn
COPY . .

# Biên dịch TypeScript (nếu cần)
RUN npm run build

# Mở cổng 3000
EXPOSE 3000

# Khởi động ứng dụng
CMD ["npm", "run", "start:prod"]
