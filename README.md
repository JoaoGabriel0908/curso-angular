# CursoAngular

[x] Criando componente com 'ng generate component...'
  [x] Criou os 4 arquivos: HTML, CSS Spect/Test e TS
  Pastas first-component

[x] Estilizando CSS no arquivo Global
  Pastas principal

[x] Estilizando CSS no arquivos de componentes

[x] Compartilhando dados do componente pai para o filho utilizando Input
  Pastas ParentsData

[x] Diretivas: Adicionando classes únicas e várias classes em uma tag, Adicionando também estilos próprios 
  Pastas directives

# curso-angular 27/02

[x] Eventos para disparar, Sintaxe: (click)="EmitindoClick()"
  Pastas events

[x] Emitindo eventos de filho para pai, Sintaxe: (emit)="onEmit()" 
  Pastas emitter e change-numbers

[x] Renderização de listas: Loop com ngFor: Sintaxe *ngFor = "let item of items" item = Item individual de um conjunto de "items"
  Pastas list-render

[x] Importância das interfaces: Toda entidade precisa de uma interface, para tornar o código mais simples. 
  Pastas Animals

[x] Pipe Operators recursos para trabalhar com strings nos templates, realizando diversasFunções
Sintaxe: {{dado | algumPipeOperator}}
  Pastas pipes
  
[x] Two way data binding recurso para formulários, conseguimos altera as props e o template com o preenchimento de inputs, é necessário importar
o FormsModule
  Pastas two-way-binding

# curso-angular 01/03

[x] Services, ficam as requisições para as APIs que utilizamos no projeto. 
Sintaxe: ng generate service <nome>

[x] Angular Route serve para declaras as rotas com RouterModule e Routes

[x] Requisições HTTP precisamos do HttpClient e HttpHeaders
Inicializar o module httpClientModule em app.module.ts

[x] Criando rota dinâmica. Resgatar parametros utilizamos o ActivatedRoute. Lógica do HTTP ficará no service
