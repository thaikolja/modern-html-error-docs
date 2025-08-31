# Modern HTML Error Docs

![GitHub Release](https://img.shields.io/github/v/release/thaikolja/modern-html-error-docs?include_prereleases&display_name=release&style=flat&color=light-blue&link=https%3A%2F%2Fgithub.com%2Fthaikolja%2Fmodern-html-error-docs) ![GitHub forks](https://img.shields.io/github/forks/thaikolja/modern-html-error-docs?style=flat) ![GitHub Repo stars](https://img.shields.io/github/stars/thaikolja/modern-html-error-docs?style=flat&color=dark-green) ![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A collection of modern, responsive, and brandable [HTML error pages](https://www.presslabs.com/how-to/error-pages/) (e.g., `404`, `500`) designed to turn frustrating moments into memorable, on-brand experiences—with an optional dose (customizable) of sarcasm, irony, and humor. Built for server administrators who are bored with the default Apache/Nginx error docs.

This repository is hosted on [GitLab](https://gitlab.com/thaikolja/modern-html-error-docs) and mirrored to [GitHub](https://github.com/thaikolja/modern-html-error-docs).

---

**Example for the error code 503:**

![screenshot](https://p.ipic.vip/zfu3jm.jpg)

## Features

-   ⚡️ **Fast:** Only HTML, a little CSS, and Vanilla JavaScript. No additional tools needed.
-   📱 **Responsive Design:** Optimized for various screen sizes, from mobile devices to large desktops.
-   📦 **Single Source of Truth:** All error docs are managed in a central `messages.json` file for easy updates.
-   🛟 **Fallback Mechanism:** Content is displayed even if JavaScript is disabled in the browser.
-   🧹 **Organized Structure:** Clear separation of CSS, JavaScript, and image assets.
-   ⚒️ **Customizable:** Easily modify docs, styling, and robot images to match your brand.

## Requirements

-   Server running Linux
-   Installed web server, e.g., Apache or Nginx
-   Access to your server's (standard) error docs files, e.g., root access

## Installation

> [!WARNING]
>
> Although the error docs have been built for Linux servers, please note that the following paths and folders **may not be accurate for your specific distribution.**

### Install from Build

Download the pre-built version with minified assets and only the necessary files that need to be transferred to the server.

1. Use SSH to log in to your server as a user with enough permission (see: "Requirements")

2. Find the directory that stores the server's default error docs (example: `/var/www/error-docs`) and `cd` into this directory

3. Head to the "Release" section on [GitLab](https://gitlab.com/thaikolja/modern-html-error-docs/-/releases) or [GitHub](https://github.com/thaikolja/modern-html-error-docs/releases) and copy the URL of **the latest version's .zip file** named `error-docs-built.zip`

4. Create a backup of the already existing files:

   ```bash
   cp -r error-docs error-docs_backup
   ```

5. Unzip the downloaded archive and set permissions:

   ```bash
   sudo unzip error-docs-built.zip -d /var/www/error-docs
   sudo chown -R www-data:www-data /var/www/error-docs
   sudo chmod -R 0755 /var/www/error-docs
   ```

6. If the error docs hadn't been set, activate them on your web server:

   1. #### Apache

      ```bash
      ErrorDocument 404 /var/www/error-docs/not_found.html
      ErrorDocument 500 /var/www/error-docs/internal_server_error.html
      # etc.
      ```

   2. #### Nginx

      ```nginx
      error_page 404 /errors/my-brand/not_found.html;
      location = /errors/my-brand/not_found.html {
          internal;
          alias /var/www/errors/my-brand/not_found.html;
      }
      # etc.
      ```

   3. #### Plesk

      1. Upload the built files into `httpdocs` or a subfolder
      2. Enable "Custom error documents" in Domains → Hosting Settings, or use the Plesk CLI/API so your changes survive vhost regeneration

### Install via Git

1. Clone this repository:

   ```bash
   git clone https://gitlab.com/thaikolja/modern-html-error-docs.git
   ```

2. `cd` into the directory:

   ```bash
   cd modern-html-error-docs
   ```

3. Install necessary packages to build the distribution package:

   ```bash
   npm i
   # or `yarn`, `bun i`, or whatever package manager you prefer
   ```

4. Build the package:

   ```bash
   npm run package # or with other package managers
   ```

5. Use the content `dist/` folder to replace your error docs.

## Customization

### Messages and Texts

All error docs are stored in `assets/data/docs.json`. You can edit this file to change the titles, descriptions, and robot speech for each error code.

```json
{
  "404": {
    "title": "Page Not Found",
    "meta_description": "404 Page Not Found - Oops! The page you're looking for has vanished into the digital void.",
    "robot_speech": "In a shocking turn of events, the page you're looking for has ceased to be. The internet is a cruel mistress, indeed.",
    "main_message": "The page you're looking for has vanished into the digital void.",
    "sub_message": "This robot is here to remind you that sometimes things just don't work out."
  }
  // ... other error codes
}
```

### Styling

Modify the **source** `assets/css/main.css` file to change the visual appearance of the error pages. The CSS uses nesting for better readability and maintainability.

### Images

Replace or add new robot images in the `assets/img/` directory. Ensure you update the `srcset` and `src` attributes in the respective HTML files if you change the image filenames.

### JavaScript

The `assets/js/scripts.js` file handles the dynamic loading of docs from `docs.json` and can be extended for additional client-side functionality (use the **source file** from the repository).

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## Author

* Kolja Nolte (kolja.nolte@gmail.com)

## License

Distributed under the MIT License. See `LICENSE` for more information.
