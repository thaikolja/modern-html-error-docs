# Modern HTML Error Docs

![License](https://img.shields.io/badge/License-MIT-yellow.svg) ![GitHub Stars](https://img.shields.io/github/stars/thaikolja/html-error-docs.svg?style=flat) ![GitHub Forks](https://img.shields.io/github/forks/YOUR_USERNAME/YOUR_REPOSITORY.svg?style=flat)

A collection of modern, responsive, and brandable HTML error pages (e.g., 404, 500) designed to turn frustrating moments into memorable, on-brand experiences—with optional doses (customizable) of sarcasm, irony, and humor. Built for teams that want simple customization and a clean structure for deploying custom error docs across their web servers.

**Example for the error code 503:**

![screenshot](https://p.ipic.vip/k018xl.jpg)

## Features

-   ⚡️ **Responsive Design:** Optimized for various screen sizes, from mobile devices to large desktops.
-   📦 **Single Source of Truth:** All error docs are managed in a central `messages.json` file for easy updates.
-   🛟 **Fallback Mechanism:** Content is displayed even if JavaScript is disabled in the browser.
-   🧹 **Organized Structure:** Clear separation of CSS, JavaScript, and image assets.
-   ⚒️ **Customizable:** Easily modify docs, styling, and robot images to match your brand.

## Getting Started

Although the error docs have been built for Linux servers, please note that the following paths and folders may not be accurate for your specific distribution.

### Prerequisites

-   A server running Linux
-   An installed web server, e.g., Apache or Nginx
-   Root access or enough permissions to change default error docs
-   A modern web browser

## Installation

> [!NOTE]
>
> For both installation versions, a Debian 12 server running Plesk, Apache, and Nginx is used. Some file paths may not be the same with your distribution.

### Built Installation

Already built version that only has to be moved to the server.

1. Log in to your server as the root user

2. Change into the directory where the error message files are being stored:

   ```bash
   cd /var/www/vhosts/.skel/0
   ```

3. Create a backup of the default error docs folder:

   ```bash
   zip -r error-docs-backup.zip error_docs
   ```

4. Use `curl` or `wget` to download the built files as a .zip archive:

   ```bash
   # Using wget
   wget https://github.com/thaikolja/modern-html-error-docs/archive/refs/heads/main.zip
   
   # Using curl
   curl -0 https://github.com/thaikolja/modern-html-error-docs/archive/refs/heads/main.zip
   ```

5. Unzip the downloaded file `main.zip`:

   ```bash
   unzip main.zip
   ```

6. Delete the folder `error-docs` and rename your extracted `main`:

   ```bash
   rm -r error-docs && mv main error-docs
   ```

7. `cd` into `error-docs` and use `ls -la`. You should see the following file structure:

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

## Customization

### Error docs

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
