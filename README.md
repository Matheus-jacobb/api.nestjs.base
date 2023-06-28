Gerar mono repositorios
npx @nestjs/cli g library <library_name>

	Criado para que seja acessível por multiplas API's (API's do mesmo projeto)


Instalar ultima versão fixa
npm install --save-exact <package_name>

body-parser
Apenas tratar JSON como JSON e não como stringfy
https://docs.nestjs.com/faq/raw-body#body-parser-size-limit

logger pino
https://github.com/iamolegga/nestjs-pino

https://github.com/H4ad/tp-cli
`tp restore` Restaurar backup do arquivo "tp.yml"
`tp local api` Salvar o backup do arquivo "tp" ( arquivo utilizado como template para gerar os modelos crud )
`tp g resource <plural_entity_name>`

Entidades:
    Ao criar uma entidade, importar em: `src/typeorm/entities.db.ts`

**To test** we are using: `@golevelup/ts-jest`
