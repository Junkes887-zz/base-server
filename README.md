# Base-Server.ts
Servidor criado com a finalidade de ser utilizado de base para outros projetos.

# Etapas para executar este projeto:

1. Execute o comando `npm i`
2. Defina as configurações do banco de dados dentro do arquivo `ormconfig.json`
3. Execute o comando `npm start`

## Migrations comandos:
```python
npm run typeorm migration:run #Roda a migration
npm run typeorm migration:create -- -n migrationNameHere #Gera uma nova migration
```
