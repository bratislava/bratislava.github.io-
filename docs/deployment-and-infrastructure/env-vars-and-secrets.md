# Environment variables & Secrets

:::caution bratiska-cli 

TODO CONTINUE HERE 

:::

# Secrets

We are using `Sealed Secrets` https://github.com/bitnami-labs/sealed-secrets.
To use a secret in your project, you have to install `kubeseal` if you haven`t installed it yet. 

```bash
brew install kubeseal
```
The next thing is going to the folder `secrets` where all our secrets are stored:

```bash
cd kubernetes/base/secrets
```

After that, we need to create a temp file for our new secrets. Let's assume we want database connection secretes. You need to make this file `database.yml`

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: database-secret
data:
  POSTGRES_DB: YmFuYW5h
  POSTGRES_USER: YmFuYW5h
  POSTGRES_PASSWORD: YmFuYW5h
```

- `metadata.name` is the name of the group of secrets in our case, `database-secret` - if this is app specific, it is often prefix by app name, so for example `bratislava-strapi-database-secret`

- `data` contains environment variables keys (`POSTGRES_DB`) and base64 encode values (`YmFuYW5h`).

For example, if you need to set up the database name to `banana`, you need to base64 encode this value. You can use an online base64 converter like https://www.base64encode.org and encode `banana` to `YmFuYW5h`. This has to happen even if the value you want to provide is base64 encoded! In such case you'll take your base64 encoded value and encode it again.


The last thing is encrypting our secrets by kubeseal to be used on Kubernetes. You need to run this command that creates the file `database.secret.yml` where all our values are encrypted and safe to add to the repository.
```bash
kubeseal --controller-name=sealed-secrets --scope=namespace-wide --namespace=standalone --format=yaml < database.yml > database.secret.yml 
```

If you want to propagate a sealed secret to Kubernetes without a pipeline, you can run this command:
```bash
kubectl create -f database.secret.yml
```

If you already have a sealed secret in Kubernetes, you can update it with the command:
```bash
kubectl apply -f database.secret.yml
```
Usually, you get this kind of error: `Error from server (AlreadyExists): error when creating "database.secret.yml": sealedsecrets.bitnami.com "nest-Prisma-template-database-secret" already exists`

If you want to check if your secret is there, you can run this command:
```bash
kubectl get secret --namespace=standalone nest-prisma-template-database-secret
```


#### Database naming convention

Please use our services names (project-slugs) as database names and users. In this case, we will use `nest-prisma-template`. And for passwords, use at least 16 characters long pass with random chars.
```yml
POSTGRES_DB: nest-prisma-template
POSTGRES_USER: nest-prisma-template
POSTGRES_PASSWORD: LBcdso08b&aasd(ck2*d!p
```

which after base64 encoding looks like this:

```yml
POSTGRES_DB: bmVzdC1wcmlzbWEtdGVtcGxhdGU=
POSTGRES_USER: bmVzdC1wcmlzbWEtdGVtcGxhdGU=
POSTGRES_PASSWORD: TEJjZHNvMDhiJmFhc2QoY2syKmQhcA==
```