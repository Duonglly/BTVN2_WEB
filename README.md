# BTVN2_WEB

Bài tập 02: Lập trình web.
==============================
NGÀY GIAO: 19/10/2025
==============================
DEADLINE: 26/10/2025
==============================
1. Sử dụng github để ghi lại quá trình làm, tạo repo mới, để truy cập public, edit file `readme.md`:
   chụp ảnh màn hình (CTRL+Prtsc) lúc đang làm, paste vào file `readme.md`, thêm mô tả cho ảnh.
2. NỘI DUNG BÀI TẬP:
2.1. Cài đặt Apache web server:
- Vô hiệu hoá IIS: nếu iis đang chạy thì mở cmd quyền admin để chạy lệnh: iisreset /stop
- Download apache server, giải nén ra ổ D, cấu hình các file:
  + D:\Apache24\conf\httpd.conf
  + D:Apache24\conf\extra\httpd-vhosts.conf
  để tạo website với domain: fullname.com
  code web sẽ đặt tại thư mục: `D:\Apache24\fullname` (fullname ko dấu, liền nhau)
- sử dụng file `c:\WINDOWS\SYSTEM32\Drivers\etc\hosts` để fake ip 127.0.0.1 cho domain này
  ví dụ sv tên là: `Đỗ Duy Cốp` thì tạo website với domain là fullname ko dấu, liền nhau: `doduycop.com`
- thao tác dòng lệnh trên file `D:\Apache24\bin\httpd.exe` với các tham số `-k install` và `-k start` để cài đặt và khởi động web server apache.
2.2. Cài đặt nodejs và nodered => Dùng làm backend:
- Cài đặt nodejs:
  + download file `https://nodejs.org/dist/v20.19.5/node-v20.19.5-x64.msi`  (đây ko phải bản mới nhất, nhưng ổn định)
  + cài đặt vào thư mục `D:\nodejs`
- Cài đặt nodered:
  + chạy cmd, vào thư mục `D:\nodejs`, chạy lệnh `npm install -g --unsafe-perm node-red --prefix "D:\nodejs\nodered"`
  + download file: https://nssm.cc/release/nssm-2.24.zip
    giải nén được file nssm.exe
    copy nssm.exe vào thư mục `D:\nodejs\nodered\`
  + tạo file "D:\nodejs\nodered\run-nodered.cmd" với nội dung (5 dòng sau):
@echo off
REM fix path
set PATH=D:\nodejs;%PATH%
REM Run Node-RED
node "D:\nodejs\nodered\node_modules\node-red\red.js" -u "D:\nodejs\nodered\work" %*
  + mở cmd, chuyển đến thư mục: `D:\nodejs\nodered`
  + cài đặt service `a1-nodered` bằng lệnh: nssm.exe install a1-nodered "D:\nodejs\nodered\run-nodered.cmd"
  + chạy service `a1-nodered` bằng lệnh: `nssm start a1-nodered`
2.3. Tạo csdl tuỳ ý trên mssql (sql server 2022), nhớ các thông số kết nối: ip, port, username, password, db_name, table_name
2.4. Cài đặt thư viện trên nodered:
- truy cập giao diện nodered bằng url: http://localhost:1880
- cài đặt các thư viện: node-red-contrib-mssql-plus, node-red-node-mysql, node-red-contrib-telegrambot, node-red-contrib-moment, node-red-contrib-influxdb, node-red-contrib-duckdns, node-red-contrib-cron-plus
- Sửa file `D:\nodejs\nodered\work\settings.js` : 
  tìm đến chỗ adminAuth, bỏ comment # ở đầu dòng (8 dòng), thay chuỗi mã hoá mật khẩu bằng chuỗi mới
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "chuỗi_mã_hoá_mật_khẩu",
            permissions: "*"
        }]
    },   
   với mã hoá mật khẩu có thể thiết lập bằng tool: hcom

# CÁC BƯỚC LÀM

## Vô hiệu hóa iis

## Cài và khởi động Apache

<img width="965" height="500" alt="image" src="https://github.com/user-attachments/assets/982d12d3-c682-4a97-8620-9fe91ab81302" />

## Cài Node.js + Cài Node-RED + Cài NSSM (để chạy Node-RED như service)

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/77d7ed8f-7837-4469-a089-64ce463a7cef" />

## Tạo cơ sở dữ liệu trên MSSQL

<img width="329" height="301" alt="image" src="https://github.com/user-attachments/assets/e80c8812-5330-47bd-a4ed-b17325150898" />

## Cài thư viện trên Node-RED

node-red-contrib-mssql-plus
node-red-node-mysql
node-red-contrib-telegrambot
node-red-contrib-moment
node-red-contrib-influxdb
node-red-contrib-duckdns
node-red-contrib-cron-plus

<img width="620" height="878" alt="image" src="https://github.com/user-attachments/assets/fe957059-06f0-4319-a720-a2ab51c80fbd" />

## Sửa file settings.js để thêm đăng nhập

mã hóa mật khẩu:$2y$10$6tGhMi2d5f/2Ui8k6Q3zWO2DkYLWKKgyW8V814B1gg.VprXehMuVq(123456)

## Tạo API backend trong Node-RED

<img width="1521" height="605" alt="image" src="https://github.com/user-attachments/assets/2fc60ba9-319e-4164-83e4-e7994125bc00" />

## Tạo API POST (nhận dữ liệu từ client)

<img width="728" height="651" alt="image" src="https://github.com/user-attachments/assets/89b6d63e-69ea-4616-90fa-43d9071e8f1a" />

## Tạo giao diện Frontend

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/70487642-39d3-43f1-ab7e-1aff20fd17e7" />



