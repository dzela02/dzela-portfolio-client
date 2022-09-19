## Getting started

Run following in terminal

```bash
    npm i
    cd sanity/ && sanity install
```

### Needed global dependency's to run everything

- [Vercel CLI](https://vercel.com/docs/cli) - follow docs to learn more.
- [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) - follow docs to learn more.
- [Sanity Studio](https://dzela.sanity.studio) - to edit the data that is shown in the app.

## To deploy

- Create a branch from stable `bash git checkout -b ${feature || fix}/${MESSAGE}`
- Make changes and commit `bash git commit -m '${MESSAGE}'`
- Open PR
- Merge and everything will be deployed through automated pipeline (CD/CI)!

# Congrats you have deployed new version!
