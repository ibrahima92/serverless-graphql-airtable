## Serverless Lambda functions with Apollo GraphQL and Airtable

First, clone the repo:

```bash
git clone https://github.com/ibrahima92/serverless-graphql-airtable
```

Create an account on [Airtable](https://airtable.com/) and create a new table. Then, change the credentials in the `.env` file with yours

- Resources: [Airtable API Docs](https://airtable.com/app3Cx2QgrU126Pj0/api/docs#javascript/introduction)

```
AIRTABLE_API_KEY=<your-api-key>
AIRTABLE_BASE_ID=<your-table-base-id>
AIRTABLE_TABLE_NAME=<your-table-name>
```

Next, browse into the `functions` directory then install the dependencies:

```bash
cd functions && yarn
```

Install the [Netlify DEV](https://docs.netlify.com/cli/get-started/#installation) by running this command:

```bash
npm install netlify-cli -g
```

Next, browse to the root of the project and run this command:

```bash
    netlify dev
```

Open [http://localhost:8888/.netlify/functions/graphql](http://localhost:8888/.netlify/functions/graphql) with your browser to see the result.
