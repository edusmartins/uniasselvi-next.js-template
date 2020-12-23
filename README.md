# UI Style Guide Uniasselvi

Componentes do Style Guide da Uniasselvi construídos em Next.JS usando TypeScript.

## Como rodar

`npm install` para instalar as dependências. Depois rodar `npm run dev` ou `yarn dev` para iniciar a aplicação.

## Buttons

- ### Button

Botão simples, apenas com texto.

### `<Button/>`

#### Button Props

| **Name** | **Type** | **require** | **Default**    |
| -------- | -------- | ----------- | -------------- |
| style    | string   | false       | "prime"        |
| size     | string   | false       | _empty string_ |
| filled   | boolean  | false       | false          |
| disabled | boolean  | false       | false          |
| rounded  | boolean  | false       | false          |
| onClick  | function | false       | null           |

#### Button Styles

`prime` `second` `third` `waring` `right` `wrong`

#### Button Sizes

`small` `large`

#### Button Example

```JSX
<Button rounded={true} filled={true} style='prime' size='large'>Primário</Button>
```

- ### IconButton

Botão com ícone dentro. Pode receber ou não texto também.

### `<IconButton/>`

#### IconButton Props

| **Name**   | **Type** | **require** | **Default**    |
| ---------- | -------- | ----------- | -------------- |
| src        | string   | true        | -              |
| style      | string   | false       | "prime"        |
| size       | string   | false       | _empty string_ |
| wide       | boolean  | false       | false          |
| disabled   | boolean  | false       | false          |
| rounded    | boolean  | false       | false          |
| textBefore | string   | false       | _empty string_ |
| textAfter  | string   | false       | _empty string_ |
| onClick    | function | false       | null           |

#### IconButton Styles

`prime` `second` `third` `waring` `right` `wrong`

#### IconButton Sizes

`small` `large`

#### IconButton Example

```JSX
<IconButton src='/img/ico/add.svg' rounded={true} style='prime' size='large' textAfter='Upload'></IconButton>
```

- ### Switch

Toogle Switch simples, usado para que o usuário possa habilitar ou desabilitar algo dentro da aplicação.

### `<Switch/>`

#### Switch Props

| **Name** | **Type** | **require** | **Default**    |
| -------- | -------- | ----------- | -------------- |
| size     | string   | false       | _empty string_ |
| disabled | boolean  | false       | false          |
| rounded  | boolean  | false       | false          |
| checked  | boolean  | false       | false          |

#### Switch Sizes

`small` `large`

#### Switch Example

```JSX
<Switch checked={true} rounded={true}></Switch>
```

## Forms

- ### Checkbox

Input tipo checkbox, usado para questões de multipla escolha onde há a possibilidade de marcar mais de uma alterantiva ao mesmo tempo.

### `<Checkbox/>`

#### Checkbox Props

| **Name** | **Type** | **require** | **Default** |
| -------- | -------- | ----------- | ----------- |
| id       | string   | true        | -           |
| disabled | boolean  | false       | false       |
| checked  | boolean  | false       | false       |
| tabIndex | number   | false       | -           |

#### Checkbox Example

```JSX
<Checkbox id={1} name='rg-1' checked={true}>Input type checkbox</Checkbox>
```

- ### Radio

Input tipo radio, usado para questões de multipla escolha onde só há uma única resposta correta, sem possibilidade de marcar mais de uma opção ao mesmo tempo.

### `<Radio/>`

#### Radio Props

| **Name** | **Type** | **require** | **Default** |
| -------- | -------- | ----------- | ----------- |
| id       | string   | true        | -           |
| name     | string   | false       | -           |
| disabled | boolean  | false       | false       |
| checked  | boolean  | false       | false       |
| tabIndex | number   | false       | -           |

#### Radio Example

```JSX
<Radio id={1} name='rg-1' checked={true}>Input type radio</Radio>
```

- ### Range

Input tipo range, usado para medir o nível de algo, o quanto que a resposta tende mais para um dos lados.

### `<Range/>`

#### Range Props

| **Name** | **Type** | **require** | **Default** |
| -------- | -------- | ----------- | ----------- |
| style    | string   | false       | "prime"     |
| filled   | boolean  | false       | false       |

#### Range Styles

`prime` `second` `third` `right` `wrong`

#### Range Example

```JSX
<Range filled={true} style='prime' />
```

- ### TextArea

Input tipo text, usado para coletar informações curtas e diretas. EX.: cadastrar e-mail, senha, endereço, etc.

### `<TextArea/>`

#### TextArea Props

| **Name**    | **Type** | **require** | **Default**    |
| ----------- | -------- | ----------- | -------------- |
| style       | string   | false       | _empty string_ |
| placeHolder | string   | false       | _empty string_ |
| value       | string   | false       | _empty string_ |
| form        | string   | false       | _empty string_ |
| wrap        | string   | false       | "soft"         |
| cols        | number   | false       | 20             |
| rows        | number   | false       | 2              |
| minLenght   | number   | false       | 0              |
| maxLenght   | number   | false       | 524288         |
| required    | boolean  | false       | false          |
| readOnly    | boolean  | false       | false          |
| disabled    | boolean  | false       | false          |
| autoFocus   | boolean  | false       | false          |
| resize      | boolean  | false       | false          |

#### TextArea Styles

`done` `wrong`

#### TextArea Wrap

`soft` `hard`

#### TextArea Example

```JSX
<TextArea
  style='wrong'
  cols={30}
  rows={5}
  maxLenght={100}
  placeholder='Escreva algo aqui...'
  value='Algo deu errado!'
/>
```

- ### TextField

Input tipo text, usado para coletar informações curtas e diretas. EX.: cadastrar e-mail, senha, endereço, etc.

### `<TextField/>`

#### TextField Props

| **Name**    | **Type** | **require** | **Default**    |
| ----------- | -------- | ----------- | -------------- |
| style       | string   | false       | _empty string_ |
| placeHolder | string   | false       | _empty string_ |
| value       | string   | false       | _empty string_ |
| disabled    | boolean  | false       | false          |

#### TextField Styles

`done` `warning` `right` `wrong`

#### TextField Example

```JSX
<TextField
  src='/img/ico/user.svg'
  value='Completo'
  style='done'
/>
```

## Labels

- ### Alert

Usado para informar e/ou alertar o usuário sobre algo da aplicação, como, por exemplo, um erro, aviso, mensagem de sucesso, etc.

### `<Alert/>`

#### Alert Props

| **Name** | **Type** | **require** | **Default**    |
| -------- | -------- | ----------- | -------------- |
| style    | string   | false       | "prime"        |
| title    | string   | false       | _empty string_ |
| message  | string   | true        | -              |
| onClick  | function | false       | null           |

**\*OBS.:** A prop **`onClick`** é usada para passar uma função onClick() para o botão de fechar o alerta.\*

#### Alert Styles

`prime` `waring` `right` `wrong`

#### Alert Example

```JSX
<Alert title='Atenção' message='Mensagem de aviso' style='warning' />
```

- ### Label

Usado para informar algo sobre um elemento ou notificar o usuário.

### `<Label/>`

#### Label Props

| **Name** | **Type** | **require** | **Default** |
| -------- | -------- | ----------- | ----------- |
| style    | string   | false       | "prime"     |
| single   | boolean  | false       | false       |

**\*OBS.:** A prop **`single`** deve ser passada como **`{true}`** se o conteúdo da label for muito curto, como, por exemplo, um número com até 2 algarismos.\*

#### Label Styles

`prime` `second` `third` `waring` `right` `wrong`

#### Label Example

```JSX
<Label style='prime' single={true}>11</Label>
```

## Navegation

- ### CrumbsItem e CrumbsList

Navegação em migalhas de pão. Útil para o usuário receber um feedback visual de qual a profundidade que ele está dentro da aplicação.

### `<CrumbsItem>` e `<CrumbsList>`

#### CrumbsItem Props

| **Name** | **Type** | **require** | **Default** |
| -------- | -------- | ----------- | ----------- |
| href     | string   | true        | -           |

**\*OBS.:** O componente **`CrumbsList`** não recebe props, mas o **`CrumbsItem`** precisa obrigatoriamente receber a prop **`href`**.\*

#### CrumbsList e CrumbsItem Example

```JSX
<CrumbsList>
  <CrumbsItem href='/'>Início</CrumbsItem>
  <CrumbsItem href='/'>Categorias</CrumbsItem>
  <CrumbsItem href='/'>Ciências Exatas</CrumbsItem>
</CrumbsList>
```

- ### Pagination

Navegação de paginação, mostrando quantas páginas há de conteúdo disponível para ser navegado.

Esse componente irá checar se há a query **`page`** na URL, e irá gerar o número de páginas disponíveis baseado nessa numeração juntamente com as props **`paginationMin`** e **`paginationMax`**.

### `<Pagination/>`

#### Pagination Props

| **Name**         | **Type** | **require** | **Default**    |
| ---------------- | -------- | ----------- | -------------- |
| size             | string   | false       | _empty string_ |
| paginationNumber | number   | false       | -              |
| paginationMin    | number   | true        | -              |
| paginationMax    | number   | true        | -              |

**\*OBS.:** A prop **`paginatioNumber`** deve ser usada apenas para testes, quando se quer colocar o componente **`<Pagination/>`** em uma página que não possui em sua URL uma query **`page`**.\*

#### Pagination Sizes

`small` `large`

#### Pagination Example

```JSX
<Pagination size='large' paginationMin={1} paginationMax={7}/>
```

## Text

- ### Header

Título das páginas. Podem ter tamanhos variados dependento da seção que o título se encontra.

### `<Header/>`

#### Header Props

| **Name** | **Type** | **require** | **Default** |
| -------- | -------- | ----------- | ----------- |
| size     | string   | false       | "h1"        |

#### Header Sizes

`h1` `h2` `h3` `h4` `h5` `h6`

#### Header Example

```JSX
<Header size='h1'>Meu Título</Header>
```

- ### OrderedList

Componente de lista ordenada. Recebe `<li>` tags como children.

### `<OrderedList/>`

#### OrderedList Example

```JSX
<OrderedList>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</OrderedList>
```

- ### UnorderedList

Componente de lista não ordenada. Recebe `<li>` tags como children.

### `<UnorderedList/>`

#### UnorderedList Example

```JSX
<UnorderedList>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</UnorderedList>
```
