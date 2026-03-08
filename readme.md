# Tauri + React + Docker Template

![Docker](https://img.shields.io/badge/docker-ready-blue)
![Rust](https://img.shields.io/badge/rust-latest-orange)
![Tauri](https://img.shields.io/badge/tauri-desktop-green)

A reproducible development environment for building desktop applications using **Tauri + React** inside Docker.

This setup allows you to develop Tauri applications without worrying about system dependencies or Rust/GTK/Webkit versions.

## Stack

* Tauri
* React
* Vite
* Rust
* Docker
* pnpm

## Features

* Fully containerized development environment
* Reproducible builds
* No system dependency conflicts
* Hot reload for React
* Rust backend compilation inside Docker
* GUI support via X11

---

# Requirements

* Docker
* Docker Compose
* Linux with X11

---

# Setup

Clone the repository:

```bash
git clone https://github.com/yourusername/tauri-react-docker-template.git
cd tauri-react-docker-template
```

Allow Docker to access your display:

```bash
xhost +local:docker
```

Build the container:

```bash
docker compose build
```

Run the development container:

```bash
docker compose run --rm tauri-dev bash
```

Install dependencies:

```bash
pnpm install
```

Start the application:

```bash
pnpm tauri dev
```

---

# Project Structure

```
.
├── src/                # React frontend
├── src-tauri/          # Rust backend
├── Dockerfile.dev
├── docker-compose.yml
└── README.md
```

---

# Why Docker?

Tauri requires several system dependencies such as:

* GTK
* WebKitGTK
* Rust toolchain

This container ensures the correct versions are installed and works consistently across machines.

---

# License

MIT

