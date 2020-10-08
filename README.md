# Cloudflare Workers Bulk URL Redirect

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/VinuRaj/workers-bulk-redirect)

### Usage

Full tutorial: [Managing Bulk Redirects at the Cloud On The Edge](https://tutorialforest.com/redirects-cloud-edge-workers)


You'll need to configure your project's `wrangler.toml` file to prepare your project for deployment. See the docs (["Configuring"](https://developers.cloudflare.com/workers/cli-wrangler/configurations)) for a guide on how to do this.

Basically you only need to set the `account_id` in the `wrangler.toml` file.

Edit the `redirectMap` with your URLs. Changes will be deployed in [Cloudflare Workers](https://workers.cloudflare.com)