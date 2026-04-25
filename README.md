# CI/CD

## Trigger
Pipeline runs on push of tags matching `rel/*` or manually.

## Pipeline steps
- Install dependencies (`npm install`)
- Build project (`npm run build`)
- Deploy `dist/*` to `/var/www/innovasirius` via SCP

## Required Secrets
- `SERVER_IP` (either ip or domain)
- `SERVER_USER`(ssh username)
- `SSH_PRIVATE_KEY`

## Nginx
Config location:
`/etc/nginx/conf.d/innovasirius.conf`

Minimal routing:
```nginx
location / {
    root /var/www/innovasirius;
    try_files $uri $uri/ /index.html;
}
```
