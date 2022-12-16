
# API User Login - Technical Test

Repositori ini berisi source code API User Login.




## Tech Stack

**Backend:** Node, Express

**Database:** MongoDB

**Cloud:** Google Compute Engine

**Container :** Docker

**Container Orchestration:** Kubernetes



## Important Link

 - [Submission Document](https://jahiduddin.notion.site/Deall-Backend-Engineer-Test-cfa2d5277eea4483b99c8e4228fff44f)
 - [API Documentation](https://documenter.getpostman.com/view/3903208/2s8YzXteda)
 - [Repository API User CRUD](https://github.com/abdjahiduddin/TechTestMicroserviceUsers)
 - [Repository Kubernetes YAML File](https://github.com/abdjahiduddin/TechTestKubeYaml)


## Packages
- bcryptjs : Hash password sebelum disimpan ke database dan membandingkan hash password yang tersimpan di database dan plain password.
- express : Membangun REST API.
- express-validator : Melakukan validasi dan sanitasi data yang dikirim melalui body request dan path parameter.
- jsonwebtoken : Membuat JWT Token dan melakukan verifikasi JWT Token.
- mongoose : Membuat schema dan model database. Serta melakukan operasi CRUD ke MongoDB.
- babel : Melakukan compile source code javascript agar dapat dijalankan oleh javascript engine versi lama (backwards-compatible).

## Credential
**email:** admin@gmail.com

**password:** admin

## Endpoint
Detail mengenai cara melakukan request dan response yang akan didapatkan dapat dilihat di [API Documentation](https://documenter.getpostman.com/view/3903208/2s8YzXteda).

Perlu diperhatikan jika menjalankan project ini secara lokal maka path tidak perlu diawali dengan /auth karena /auth hanya digunakan oleh rules Ingress Kubernetes.

Generate JWT Token :
```bash
  /api/login
```


## Environment Variables
- MONGODB_URI : URI untuk membuat koneksi ke MongoDB.
- JWT_SECRET : Secret yang digunakan untuk generate dan verifikasi JWT Token.
- NODE_ENV : Production atau Development.

## Run Locally

Clone project

```bash
  git clone https://github.com/abdjahiduddin/TechTestMicroserviceUserLogin.git
```

Masuk ke directory project 

```bash
  cd TechTestMicroserviceUserLogin
```

Install dependencies

```bash
  yarn install
```

Jalankan server dilingkungan development

```bash
  yarn run start-dev
```

Build project menggunakan babel

```bash
  yarn run build
```

Jalankan server dilingkungan production

```bash
  yarn run start
```
