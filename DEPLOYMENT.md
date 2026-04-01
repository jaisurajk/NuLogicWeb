# Self-Hosting NuLogic

This project already includes the route `/community_app_ideas`, so once it is deployed on the `nulogic.app` domain the page URL will be:

`https://nulogic.app/community_app_ideas`

## 1. Build on the server

From the project directory:

```bash
npm install
npm run build
```

## 2. Start the Next.js app

For a simple production run:

```bash
PORT=3000 npm start
```

If you want the app to stay running after logout, use a process manager such as `pm2` or `systemd`.

Example with `pm2`:

```bash
pm2 start npm --name nulogic-community-app-ideas -- start
pm2 save
```

## 3. Point `nulogic.app` to the server

In your DNS provider, create or update the `A` record for `nulogic.app` so it points to your server's public IP address.

## 4. Reverse proxy with Nginx

Example Nginx config:

```nginx
server {
    server_name nulogic.app www.nulogic.app;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

After saving the config:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 5. Enable HTTPS

Use Certbot once DNS is pointing correctly:

```bash
sudo certbot --nginx -d nulogic.app -d www.nulogic.app
```

After that, your live URL should be:

`https://nulogic.app/community_app_ideas`

## Notes

- You do not need a special base path setting for this project because the page already exists at `/community_app_ideas`.
- The app metadata already uses `https://nulogic.app/community_app_ideas` as the canonical URL.
