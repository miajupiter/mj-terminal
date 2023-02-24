
<p align="center">
<a href="https://miajupiter.com" _target="blank">
<img src="https://github.com/miajupiter/.github/raw/main/images/miajupiter-logo.png" width="320" />
</a>

[![](https://img.shields.io/badge/%F0%9F%8C%90%20www-miajupiter.com-blueviolet?style=flat&labelColor=%23323232)](https://miajupiter.com)


# MJ-Terminal

[![npm](https://img.shields.io/npm/v/mj-terminal?label=npm&logo=npm) ](https://www.npmjs.com/package/mj-terminal) [![download](https://img.shields.io/npm/dt/mj-terminal?label=downloads&logo=npm)](https://www.npmjs.com/package/mj-terminal) [![GitHub](https://img.shields.io/github/license/miajupiter/mj-terminal)](https://choosealicense.com/licenses/mit/) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fmiajupiter%2Fmj-terminal&count_bg=%236495ED&title_bg=%23323232&icon=cliqz.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com) [![](https://img.shields.io/badge/readme-docs-chocolate.svg)](https://github.com/miajupiter/mj-terminal#readme) [![](https://img.shields.io/github/stars/miajupiter/mj-terminal?color=yellow&label=stars&logo=github)](https://github.com/miajupiter/mj-terminal/stargazers)


Terminal style a WebApp

It was cloned from https://github.com/m4tt72/terminal and we changed some things as below

- Reduced 2 themes dark and light . We love and support [dark mode for saving the planet (📝 change.org)](https://www.change.org/UseDarkMode)
- Project codes were cleaned from **semicolon endings**.
- Removed **config.json** file
- Added environment approach ( **.env** file )




## Get Started
You can see and test on [live demo](https://demo.miajupiter.com/mj-terminal)

### Preview

![](
<p align="center">
<a href="https://miajupiter.com" _target="blank">
<img src="https://github.com/miajupiter/.github/raw/main/images/miajupiter-logo.png" width="320" />
</a>

[![](https://img.shields.io/badge/%F0%9F%8C%90%20www-miajupiter.com-blueviolet?style=flat&labelColor=%23323232)](https://miajupiter.com)


# MJ-Terminal

Terminal style a WebApp

It was cloned from https://github.com/m4tt72/terminal and we changed some things as below

- Reduced 2 themes dark and light . We love and support [dark mode for saving the planet (📝 change.org)](https://www.change.org/UseDarkMode)
- Project codes were cleaned from **semicolon endings**.
- Removed **config.json** file
- Added environment approach ( **.env** file )



## Get Started
You can see and test on [live demo](https://demo.miajupiter.com/mj-terminal)

### Preview

![](https://github.com/miajupiter/mj-terminal/blob/main/docs/screenshots/mj-terminal-screenshot-01.jpg)

## Install

```bash
$ npm install mj-terminal 
```
OR
```bash
$ yarn add mj-terminal
```


## Environment Variables

In this `.env.sample` file you can see which variables the App is using.

- rename `.env.sample` to `.env` file

**".env" file example**
```ini
NEXT_PUBLIC_TITLE=MiaJupiter Server
NEXT_PUBLIC_META_DESCRIPTION=MiaJupiter | Shaman Coders
NEXT_PUBLIC_META_AUTHOR=MiaJupiter Developer Team
NEXT_PUBLIC_FAVICON='/assets/web-icon.png'
NEXT_PUBLIC_THEME='dark'
NEXT_PUBLIC_GITHUB_USER=miajupiter
NEXT_PUBLIC_WEBSITE = https://miajupiter.com
NEXT_PUBLIC_COMPANY_INFO = "https://raw.githubusercontent.com/miajupiter/.github/main/profile/README.md"

# Welcome Banner Option
# NEXT_PUBLIC_BANNER = "Welcome to MiaJupiter Server\nSimplicity is a form of high intelligence\n"
# OR URL
NEXT_PUBLIC_BANNER = https://raw.githubusercontent.com/miajupiter/.github/main/public/terminal.banner.txt

NEXT_PUBLIC_VERSION=${npm_package_version}

```


## Docker

### Build
in project folder, run the following command

```bash
$ docker build -t mj-terminal:lastest .
```

### Run
```bash
$ docker run -dit \
  -p 127.0.0.1:80:3000 \
  --name mj-terminal mj-terminal:lastest
```

### Create a service

```bash
$ docker create -dit \
  -p 127.0.0.1:80:3000 \
  --name mj-terminal mj-terminal:lastest
```

)

## Install

```bash
$ npm install mj-terminal 
```
OR
```bash
$ yarn add mj-terminal
```


## Environment Variables

In this `.env.sample` file you can see which variables the App is using.

- rename `.env.sample` to `.env` file

**".env" file example**
```ini
NEXT_PUBLIC_TITLE=MiaJupiter Server
NEXT_PUBLIC_META_DESCRIPTION=MiaJupiter | Shaman Coders
NEXT_PUBLIC_META_AUTHOR=MiaJupiter Developer Team
NEXT_PUBLIC_FAVICON='/assets/web-icon.png'
NEXT_PUBLIC_THEME='dark'
NEXT_PUBLIC_GITHUB_USER=miajupiter
NEXT_PUBLIC_WEBSITE = https://miajupiter.com
NEXT_PUBLIC_COMPANY_INFO = "https://raw.githubusercontent.com/miajupiter/.github/main/profile/README.md"

# Welcome Banner Option
# NEXT_PUBLIC_BANNER = "Welcome to MiaJupiter Server\nSimplicity is a form of high intelligence\n"
# OR URL
NEXT_PUBLIC_BANNER = https://raw.githubusercontent.com/miajupiter/.github/main/public/terminal.banner.txt

NEXT_PUBLIC_VERSION=${npm_package_version}

```


## Docker

### Build
in project folder, run the following command

```bash
$ docker build -t mj-terminal:lastest .
```

### Run
```bash
$ docker run -dit \
  -p 127.0.0.1:80:3000 \
  --name mj-terminal mj-terminal:lastest
```

### Create a service

```bash
$ docker create -dit \
  -p 127.0.0.1:80:3000 \
  --name mj-terminal mj-terminal:lastest
```
