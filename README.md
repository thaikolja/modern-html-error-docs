# Modern HTML Error Docs

![GitHub Release](https://img.shields.io/github/v/release/thaikolja/modern-html-error-docs?include_prereleases&display_name=release&style=flat&color=light-blue&link=https%3A%2F%2Fgithub.com%2Fthaikolja%2Fmodern-html-error-docs) ![GitHub forks](https://img.shields.io/github/forks/thaikolja/modern-html-error-docs?style=flat) ![GitHub Repo stars](https://img.shields.io/github/stars/thaikolja/modern-html-error-docs?style=flat&color=dark-green) ![License](https://img.shields.io/badge/License-MIT-yellow.svg)

A collection of modern, responsive, and brandable [HTML error pages](https://www.presslabs.com/how-to/error-pages/) (e.g., `404`, `500`) designed to turn frustrating moments into memorable, on-brand experiences—with an optional dose (customizable) of sarcasm, irony, and humor. Built for server administrators who are bored with the default Apache/Nginx error docs. This repository is hosted on [GitLab](https://gitlab.com/thaikolja/modern-html-error-docs) and mirrored to [GitHub](https://github.com/thaikolja/modern-html-error-docs).

**Example for the error code 503:**

![screenshot](https://p.ipic.vip/k018xl.jpg)

## Features

-   ⚡️ **Fast:** Only HTML, a little CSS, and Vanilla JavaScript. No additional tools needed.
-   📱 **Responsive Design:** Optimized for various screen sizes, from mobile devices to large desktops.
-   📦 **Single Source of Truth:** All error docs are managed in a central `messages.json` file for easy updates.
-   🛟 **Fallback Mechanism:** Content is displayed even if JavaScript is disabled in the browser.
-   🧹 **Organized Structure:** Clear separation of CSS, JavaScript, and image assets.
-   ⚒️ **Customizable:** Easily modify docs, styling, and robot images to match your brand.

## Getting Started

Although the error docs have been built for Linux servers, please note that the following paths and folders may not be accurate for your specific distribution.

### Requirements

-   A server running Linux
-   An installed web server, e.g., Apache or Nginx
-   Access to your server's standard error docs files

## Installation

> [!NOTE]
>
> For this installation, a Debian 12 server running Plesk, Apache, and Nginx is used. Some file paths may differ from those in your distribution.

### Install from Build

An **already built version** with minified assets and only the necessary files that need to be moved to the server.

1. Use SSH to log in to your server as a user with enough permission (see: "Requirements")

2. Change into the directory where the error message files are being stored. In this case, it's the following directory for **new domains**. Already existing domains are located in `/var/www/vhosts/DOMAIN.COM/error-docs`.

   ```bash
   cd /var/www/vhosts/.skel/0
   ```

3. Create a backup of the default error docs folder:

   ```bash
   zip -r error-docs-backup.zip error_docs
   ```

4. Head to the "Release" section on GitLab or GitHub and copy the URL of the latest version's .zip file:

   ```bash
   # Using wget
   wget https://github.com/thaikolja/modern-html-error-docs/archive/refs/heads/main.zip
   
   # Using curl
   curl -0 https://github.com/thaikolja/modern-html-error-docs/archive/refs/heads/main.zip
   ```

5. Unzip the downloaded file `main.zip`:

   ```bash
   unzip dist.zip
   ```

6. Backup your existing default `error-docs` and rename your extracted `dist`:

   ```bash
   mv error-docs ./error-docs_backup && mv dist error-docs
   ```

7. `cd` into `error-docs` and use `ls -l` (or `tree`, if available). You should see the following file structure:

   ```bash
   ├── assets
   │   ├── css
   │   │   └── main.min.css
   │   ├── data
   │   │   └── docs.json
   │   ├── img
   │   │   ├── robot-blue.avif
   │   │   ├── robot-blue.png
   │   │   ├── robot-blue.webp
   │   │   ├── robot-red.avif
   │   │   ├── robot-red.png
   │   │   ├── robot-red.webp
   │   │   ├── robot-yellow.avif
   │   │   ├── robot-yellow.png
   │   │   └── robot-yellow.webp
   │   └── js
   │       └── scripts.min.js
   ├── bad_gateway.html
   ├── bad_request.html
   ├── forbidden.html
   ├── internal_server_error.html
   ├── maintenance.html
   ├── method_not_allowed.html
   ├── not_acceptable.html
   ├── not_found.html
   ├── not_implemented.html
   ├── precondition_failed.html
   ├── proxy_authentication_required.html
   ├── request-uri_too_long.html
   ├── unauthorized.html
   └── unsupported_media_type.html
   ```

8. To change the docs for each template, open `assets/data/docs.json` and adjust them there.

9. Restart your Apache or Nginx server or create a new website in your Plesk interface:

   ```bash
   # Apache
   sudo systemctl restart apache2
   
   # Nginx
   sudo systemctl restart nginx
   ```

10. 🥳 Your Modern HTML Error Docs are successfully installed!

### Via Git

1. Clone the main repository with unminified codes:

   ```bash
   ```

2. Apply your changes.

3. Clea

## Customization

### Messages and Texts

These error docs 

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

Modify the `assets/css/main.css` file to change the visual appearance of the error pages. The CSS uses nesting for better readability and maintainability.

### Images

Replace or add new robot images in the `assets/img/` directory. Ensure you update the `srcset` and `src` attributes in the respective HTML files if you change the image filenames.

### JavaScript

The `assets/js/scripts.js` file handles the dynamic loading of docs from `docs.json` and can be extended for additional client-side functionality.

## What's Next

* Creating a way of easier deployment
* Accurate Linux distribution determination
* Expanding `README.md` for the most used Linux distributions

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## Author

* Kolja Nolte (kolja.nolte@gmail.com)

## License

Distributed under the MIT License. See `LICENSE` for more information.
