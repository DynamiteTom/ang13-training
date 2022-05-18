import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

const features = `
    'angular', 
    'component', 
    'directive',
    'pipes',
    'services',
    'decorators', 
    'interf_class',
    'typeScript',
    'important-files',
    'Data-binding',
    'Styles_CSS_SCSS',
    'ng-build_ng-serve',
    'modules',   
    'life-cycle-hooks',
    'routing_router',
    '@Input_@Output',
    ' -- ',
    'lazy-loading', 
    'Change Detection',
    'AoT-compilation', 
    'tree-shaking_',
    'APF',
    'Ivy_Locality', 
    'View-Engine',
    'Promises_Observables',
    'Observables_Subjects',
    'RxJS_',
    'Higher-Order-Mapping-ftns',
    'Forms',
    'ViewDOM',
    'ContentDOM',
    'Content-Projection',
    'HTTP_HttpClient',
    'Cusom Libraries',
    'Nx Nrwl',
    'ngrx_CRUD',
    ' -- ',
    'Ang main libraries',
    'Git_distd-VCS',
    'Testing_unit',
    'Design Patterns',
    'TDD/BDD',
    'Security',
    'Authorization/Authentication',
    'Node.js',
    'npm',
    'express',
    'VS-Code',
    'Angular Language Service',
    'TSServer',
    'ESLint',
    'CI_CD_Jenkins',
    'Webpack',
    'Cloud_AWS_Azure',
    'Accessability',
    ' -- ',
    'Schematics',
    'Angular Material',
    'Flex Layout',
    'PWA - Service Workers',
    'Angular Elements',
    'Web Workers',
    'Angular Universal',
    'Stand alone Components',
    ' -- ',
    'Agile',
    'Jira/Atlassian',
    'Azure',
    'Angular Performance',
    'REST_APIs_Swagger',
    'Ag-grid',
    'Micro Frontends',
    'Web 3',
    'Angular Versions'
 `;

const subTopics = [
    ['JavaScript Framework','mobile-laptop-desktop',
    '- Front End appns','- Angular/CLI','- main parts','TypeScript','TS Libraries',
    'Server Side Angular',
    '-- Add ons'],
    ['Why Components - ', '- class', '- template','Decorators','- @Component({})', '-= selector', '-- templateUrl', '-- styleUrl','- Data Binding', '- LC-hooks','-- Component Tree','- Change detection',
    'this', '- ng g c xyz'],
    ['Why Directives','@Directive({})','- attribute-directives', '- template-directives *ngIf','-- *ngIf','-- *ngFor','-- *ngSwitch()', 
    '- Components'],
    ['Why Pipes','- transforms data','-- display', 'template', '- Pure', '- Impure','Custom Pipes', '-- @Pipe({})','-- PipeTransform - transform','built-in pipes'],
    ['Why Services','wrt Components','Reuse',
    '- DI - dep Injection',
    '- DI Tokens',
    '-- Defining Providers',
    '--- Providers with deps',
    '---- aliasing class providers',
    '---- aliasing class interface',
    '---- aliasing multi class i/fs',
    '---- injecting an Object',
    '---- injecting a config Object',
    '---- InjectionToken object',
    '---- interfaces and DI',
    '---- Using factory providers',
    'class +',
    '@Injectable({})', 
    '- declare locn', 
    '- nesting',
    '- Sharing',
    'typical tasks',
    '- Providing a Service', 
    '-- @injectable({ providedIn: \'root\'})',
    '--- providedIn: \'root\'',
    '--- providedIn: \'platform\'',
    '--- providedIn: \'any\'',
    '--- providedIn: \'<T>\'',
    'providers'
    ], 
    ['Decorators','- Metadata','- Annotations', '- Class', 'Decorator examples',
    '-- Types of decorators','--- Class','--- Property','--- Event','--- Attribute'
    
  ], 
    ['Interfaces', '- interface defn', 'Classes','- constructor', '- properties', '- methods', '- events', '-- this'],
    ['TypeScript',
    '- Strong Data Types',
    '-- Inferred Types',
    '- interfaces | classes',
    '- tooling -     ',
    '- tsc', 
    '- .ts files', 
    '-- transpilation', 
    '- tsconfig.json',
    '-- compilerOptions',
    '-- angularCompilerOptions', 
    '- JS files', '- ngc',
    '- Barrels (index.ts)',
    '-- index.ts'
  ],
    ['- package.json', '- angular.json', '- tsconfig.json','-- index.html','-- main.js','-- dist folder','-- node_modules folder','core.d.ts' ],
    ['Data Binding','- String interpolation {{x}}','ex','- property binding[]','ex','- event binding()','ex', '- 2-way data binding','ex'],
    ['Why Style - color-size-position', '- CSS', 
    '-- CSS-Box-Model','-- margins','-- padding','-- borders','content',
    ' -- ',     
    'inline - ext', 'ngStyle','ngClass', 
     ' -- ','- SCSS - variables etc.','-- variables', '-- functions()', '-- mixins','inheritance', 
       'ViewEncapsulation'],
     ['Angular/CLI','- Building', '- Serving the Browser port'],
    ['Modules','NgModule', 
    '- Libraries ', 'decorator', '- declares Components', '- imports Modules', '- exports Modules','- Can define Service','- bootstrapping - ','min 1 Module','Lazy Loading'],
     ['Life Cycle Hooks','- Instantiates class','- Renders View + Child','- Change detection','- Updates View + Comp Instance',
     '- imports @angular/core',
     'LCH parts','- ngOnChanges()', '- ngOnInit() most popular','- ngDoCheck()', '- ngAfterContentInit()', 
     '- ngAfterContentChecked()', '- ngAfterViewInit()', '- ngAfterViewChecked()','- ngOnDestroy()'],
    ['ComponentRouter', '- URLs', 'Routes path:\'x\' - component', '<base href=\/"\">', '-- HTML5 Urls', '- router-outlet', '- routerLink', 
    ' -- ','- Routes','- RouterModule', '-- @angular/router','--- forRoot()','--- forChild()','--- Nested Routes',
    ' -- ', '- get Route Info','-- ActivatedRoute','-- ActivatedRouteSnapshot','-- RouterStateSnapshot','-- .snapshot.paramMap.get(\'id\') ','-- ParamMap','- Wildcard Routes **','-- PageNotFoundComponent','redirectTo()', 
    ' -- ','- Router Guards', '-- Componentless-routes', '-- 5 Guard options','--- canActivate','--- canActivateChild','--- canDeactivate','--- Resolve','--- CanLoad',
    ' -- ','- history','- history.pushState','- older browsers','-- LocationStrategy','--- PathLocationStrategy','---- HTML5 style navigation','--- HashLocationStrategy', '---- useHash:true',
    ' -- ','Route Resolver', '- new Comp --routing','-- Lazy Loading'],
    ['Parent Child commn','- @Input()', '- @Output EventEmitter'],
    [' -- '],
    ['Lazy Loading','- Modules','-- browser URL','-- forChild','-- children', 
    '--- Feature Modules',
    '---- generating modules',
    '---- generating comps in modules',
    '--- Shared Modules',
    '---- PreLoading Modules',
    '----- PreloadAllModules',
    ' -- ',
    'Lazy Load Components',
    '--- async await', '--- await import','-- simplified Ang13'
    ],
    ['Why Change Detection?',
    '- zone.js',
    '- ChangeDetectorRef',
    '- ngZone', '- manual CD', 
    '- automatic CD','- onPush', '- without ngZone'],
    ['Why AOT','Compile time build', 'No need for Compiler','3 Phases','- 1:Code Analysis','- 2:Code generation','- 3:Template type checking','Benefits'],
    ['Why TreeShake', 'treeshaking in Ivy', 'treeShaking in VE'],
    ['APF - Ang Package Format', 'npm packages','Tooling support','ES versions','Angular CLI','ng-packagr','esm and fesm','.dts files','ESM',
       'Angular 13 APF','- Node package exports', '- es2020 support', '- Ivy partial compilation'
    ],
    ['Ivy new', 'Locality','Incremental DOM','-- Instructions', 'Libraries', '- ngcc', '- Linker   instead', 'Ang Language Service','Compilaion of changes','Ivy - Advantages','no EntryComponents'],
    ['- ViewEngine old', '- Renderer2', '3 parts -', ' -1: Template Parsing', ' 2: Tree Shaking',' 3: Compilation' , '- Interpreter', '--metadata.json file','ngFactory.js files','JIT or AOT','EntryComponent'],
    ['Promises', '- then()', '- future tasks', '- (resolve, reject)','- asynchronous','- catch',' -- ', 
     'Observables','- streams', '- time', '- next()','- Observer','- subscribe','- async pipe','- hot-cold','- Sync or Async', '-- Marble Diagrams'],
    ['Observables','Subjects', '- behaviorSubject', '- asyncSubject', '- replaySubject'],
    ['Reactive Extensions','- library','-- npm install rxjs', '-- asynchronous','-- Event based ops',
    '-- Observable sequences',
    'imps Observable type','Utility ftns','- Convert async to Observables','- iterating over stream','- map vals to types','- filtering streams','- multiple streams',
    'Pipeable operators','- Combination','- Conditional','- Creation',
    '- Errors','- Multi-cast','- Filters','- Transform'],
    ['- ConcatMap','- MergeMap','- SwitchMap','- ExhaustMap'],
    ['Why forms',
    ' -- ',  
    '- Template Forms', '-- Template directives','-- ngForm', '-- complex test setup','-- complex validation', '-- [(ngModel)]',
    ' -- ',
    ' -- Template Validation', 
    ' -- ',
    '- Reactive Forms','-- direct access','-- Synchronous data flow','-- simpler test setup','-- simpler validation', '-- new FormControl("")','FormBuilder',  
    ' -- ',
    '  -- Reactive Validation' 
  ],
    ['Whats View DOM', '- ViewChild', '- ViewChildren'],
    ['Whats Content DOM', '- ContentChild', '- ContentChildren'],
    ['Whats transclusion',
    '- ex of content projection', 
    '-- ng-content',
    '--- Single Slot',
    '--- Multi-Slot',
    '--- Conditional',
    ' -- ',
    '-- data types -','--- Inner HTML', '--- HTML Elements','--- Styled HTML', '--- Other Components' 
  ],
    ['CRUD', 'HttpClient', 'HttpInterceptors', 'Angular/InMemoryWebApi'],
    ['appns vers custom libraries',
    'Appns',
    'Custom Libraries',
    '- ng g library x','-- angular.json',
    '- ng-packagr','-- package.json', 
    '- ref to build path','-- tsconfig.json','- lib sources in project/x',
    'Ivy and ngcc',
    'Ang11 - Partial compilation'],
    ['Nx Nrwl','- Nrwl/Nx','-- smart', '-- fast','-- extensible','-- nrwl/angular', '-- nx monorepo', '-- nx cli','-- nx build', '-- nx serve'],  
    ['State Management', 'RxJS and Observables', 'BehaviorSubject','- appn State', 'uni-directional',
    '- 5 features ',
    '-- Serializability', 
    '-- TypeSafety',
    '-- Encapsulation',   
    '-- Testable',
    '-- Performance',
  '- SHARI principle','- Store','- Reducer','- Action','- Selector', '- Effects', '-- Store Devtools','-- Entity', '-- Data', 'ComponentStore'],
    [' -- '],
    [`Core libraries`,
      '- @angular/core',
      '- @angular/compiler',
      '- @angular/browser',
      '- @angular/common',
      '- @angular/router',
      '- @angular/platform-browser',
      '- @angular/platform-browser-dynamic',
      '- @angular/forms',
      '- @angular/animations',
      '- @angular/material',
      '- @angular/cdk',
      '--',
      '- @angular/cli',
      '- @angular/compiler/cli',
      '- @angular-devkit/build-angular',
      
    ],
    ['GIT',
    '- Parts','- Working tree', '- Stage area','- Local Repository','- Remote Repository','Branches','Fork','stash',
    '- Commands - ','- Add','- fetch','- branch','- checkout', '- commit','- init','- push','- pull','- log','- status',
    '- GitHub'
    ], 
    ['Testing', '- Unit', '-- spec.ts', '--- describe', '--- beforeEach()', '--- it - fit - xit', '--- afterEach', '---- TestBed', '-- Jasmine', '-- Karma', '-- Mocking', '--- Wallaby', 
    '- Integration','-- Shallow','-- Deep', 
    '- End to End', '-- Protractor', '-- Cypress'],
    ['Why Design', 'SOLID Principles','-- Single Responsibility','-- Open-Closed','-- Liskov Substn','-- Interface Segn','-- Dep Inv', 
    ' -- ','DRY',
    ' -- ', 'DIP',  
    ' -- ','Singleton Pattern',  
    ' -- ','Factory Pattern',  
    ' -- ','Decorator Pattern',  
   ' -- ','Lazy',
   ' -- ','Composition'],
    ['Test Driven Devt','Behavoral Driven Design'],
    ['Security','- XSS','-- auto-escaping{{}}',
    '-- CSRF - XSRF', '--- CSRF token','--- HttpClientXsrfModule', 
    '- Output Encoding', 
    '- Sanitization', '-- DomSanitizer','-- bypassSecurityTrustHTML', 
    '- Immutable Code', '- JWTs', '- OWASP', '- SNYK'],
    ['Auhtorization', 'Authentication', '- Auth0', '- OAuth2'],
    ['Node.js','http://nodejs.org', '- JS runtime', 'Chrome V8 JS Engine','-- backend JS runtime',
     '- can generate dynamic pages','- can CRUD + close files','- collect form data',
    '- add|delete|modify db','- tasks exec on events','- event - server port','- files initiated on server', '--*.js'],
    ['npm'],
    ['express','express impn','-- get()','-- listen()'],
    ['VS-Code'],
    ['Angular Language Service','- Code completions', '- Errors', '- Hints', '- Navigation', '-- Angular Templates'],
    ['TSServer-',''],  
    ['ESLint', 'JS + TS', 'Static Analysis','VS Code + CI Pipeline',
    'AST based pattern checker - JS',
    '- enforce style | formatting| coding',
    '-- ESLint 8.9 - ',
    '-- ESLint 8.15 - '
    ],
    ['Why CI/CD', '- CI - Continuous Integration','- CD - Continuous Development', '- CD - Continuous Delivery', '-- Jenkins'],
    ['Webpack', 
    '- CLI build process',
    '-- TS to JS',
    '-- SASS files to CSS',
    '- module bundler','- Terser','-- Terser plugin', '- Entry Points -', '-- Entry','-- Output', '- Loaders','- Plugins'],
    ['Whats the Cloud?','- 3 reasons for the cloud are', 
    ' -- ',  
    '- AWS - Amazon Web Services',
    '- S3 - Simple Storage Service',
    '- EC2 - Elastic Compute Cloud',
    '- Amazon Connect',
    '- AWS Lambda',    
    ' -- ', 
    '- MS Azure',
    '- services - ',
    '-- virtual m/c - IaaS',
    '-- App Services - PaaS',
    '-- Websites - ',
    '-- WebJobs - ',
    '- Identity',
    '-- AAD ',
    '-- AAD - B2C',
    '-- AAD Domain Services  ',
    '-- Azure Info Protn',
    '- location',
    '-- on-premise - ',
    '-- hybrid -',
    '-- multicloud -',
    '-- at the edge -'
  
  ],
    ['Accessability','- ARIA attrbutes', '- WCAG', '- POUR'],
    [' -- '],
    ['Schematics'],
    ['Ang Material', 
    ' -- ',
    'Ang CDK'],
    ['Flex-layout', 'display:flex'],
    ['PWA', '- SWs', '- manifests', '- Web-platform features','- Progressive Enhancement ','--- native apps','---- Works Offline',
    ' -- ','- Requirements','-- Responsive', '-- Auto-updated','-- Secure','-- Reliably Connected', '-- Progresve','-- Searchable','-- Shareable  ', '.. User Exprience','-- installable', '-- Regularly Communicate',
    ' -- ','- Service Workers','-- HTTPS','-- Caching','-- SW Manifest','--- Updating cache','---- Fast loading', 
    '-- Push Notifications',  '--- interfaces','---- PushEvent','---- PushManager','---- PushMessageData','---- PushSubscription','---- PushSubscriptionOptions', 
    '-- Background Sync', '--- defer actions','---- Store when offline','----- browser cache','----- indexedDB', '----- Sync when online',  
   '-- Network proxy','--- intercepts HTTP outputs','--- various responses',
   '--- mobile or other'
    ],
    ['Why Angular Elements','- Custom Elements','- Web Components', '- Framework Agnostic','polyfills',
      'CustomElementRegistry','- createCustomElement() API','NgElementConstructor i/f()','customElements.define()',  '-- CD ftn', '-- data binding','bootstrap to DOM'
    ,'-- Dynamic Content','NgElements class','WithProperties()'],
    ['Why Web Workers', 'Threading', ''],
    ['Why Angular Universal','- SSR - Server Side Rendering'],
    ['Optional Modules', 
    '- standalone: true', 
    '- bootstrapApplication(AppComponent)',
    '-- Compatability',
    '-- Architecture',
    '- Problem with Schematics'
  
  ],

    [' -- '],
    ['Agile', '- Iterative', '- Team','- Respond to Change'],
    ['Jira',
    '- teamwork',
    '- Boards',
    '-- Create an Agile Board'  ,
    ' -- ',
    '--- Team Management Board','---- Simplified board',
    ' -- ',
    '--- Scrum Board','---- Sprints + Backlog',
    ' -- ',
    '--- Kanban Board', '---- WIP (Work In Progress)', 
    '----- What is WIP',
    ' -- ',
    '- Agile project management tool'
  ],
  [' - Azure'],
    ['How - Angular Performance - ','largest contentful paint', '',
         'Lazy Loading','Angular Universal','PWA-SW','Ivy', 'AOT Compilation','Tree-Shaking', 'Modern Angular'],
    ['- RESTitutional file transfer','-- APIs','-- IDLs','--- humans/auto machine procing','-- HTTP methods',
    '-- List REST API DLs','--- WSDL','--- WADL','--- OData','--- OpenAPI','--- RSDL','--- RAML',
    ' -- ','- Swagger', '-- design & Doc APIs','-- enable Teams','-- IDL','-- RESTful APIs','-- JSON','-- CRUD methods', 
    ' -- ','- Postman', '-- web based tool','-- access APIs anywhere  ',
    ' -- ','- GraphQL','-- Quey language for API','-- description of data in API','-- Server side runtime','--- exec queries'],
    [' - Ag-grid'],
    ['Why Micro-FEs','- WebPack5', '- Module Federation'],
    ['- new WWW -','', ''],
    ['- Ang Versions','Ang 14','Ang 13', 'Ang 12','Ang 11','Ang 10','Ang 09','Ang 08','Ang 07',]
];

const subTopicsInfo = [
  [`
  JavaScript Framework for development of client side mobile web desktop appns -
  <br/>written in MS TypeScript for adding types to the JS framework and simplifying JS (EcmaScript - modern JS) - with classes and interfaces 
  <br/>- ts files are then transpiled down to JS code to run in the browser 
  <br/>rendering pages in the DOM in response to user actions - Angular uses View DOM in the template HTML and Content DOM inside other Components
  <br/>using the Angular/CLI to generate the main parts of Angular appns -
  <br/>Components Directives Pipes Services and Modules and Change Detection to id when events occur 
  <br/>Observables and the RxJS operators can manipulate streams of data over time and use Subjects to aid working with them 
  <br/>simplifying subscription and allow multi-casting events around the application. 
  <br/>Angular appns vs Angular custom libraries
  <br/>Special files - package.json (diff libraries used) - angular.json - tsconfig.json - main/index.htmls and main/main.ts file 
  <br/>Special folders - node_modules for the large libraries used in project and librares 
  <br/>ng build gives the dist folder - ang13-training/favicon.ico | index.html | main.js 300kb | polyfill.js | runtime.js
  `,
  'mobile-laptop-desktop', '- primarily used for writing Front End Appns written in TypeScript which are then transpiled to JS to run on the browser',
  'Angular CLI (Command Line Interface) uses Webpack - generate parts - build appn or serve browser','-- Components - Directives - Pipes - Services - Modules - classes Change Detection - ngc compiler uses tsc (TypeScript) Webpack used by the Angular/CLI',
  'TypeScript','TS Libraries  ',
  ' - Angular Universal lets Angular work on the Server and use SSR - Server Side Rendering - Also a way to speed up the initial load time by only loading static code and then dynamically loading the Angular framework after behind the scenes - very fast load time',
  `-- Add ons - angular/pwa (Progressive Web Appns) and Service Workers - 
    angular/elements - angular/webWorkers - Angular Universal - Angular Material - angular/flex-layout
    ` 
  ], 
  [`Components are the most important part of an Ang appn - they have a @Component decorator with a selector - template and optional style
    <br/>The class can have constructor - properties - methods - events 
    <br/>Can import services into the constructor using DI 
    <br/>Data binding - interpolation {{}} | property [] | event () | [( ngModel )]  
    <br/>Can have child Components and use @Input() / @Output() with EventEmitter()
    <br/>Life Cycle Hooks - ngOnInit() define how the Component operates from creation to destruction
    <br/>Component Tree - each component has a ChangeDetector - to react to changes and ensure View is correct
    <br/>Style of the parts of the data - 
    <br/>Best to store Component data as immutable Observables which can then be manipulated using RxJS library
    <br/>Subjects - like BehaviorSubject let us turn Observables into multi-cast objects
    <br/>can use this to ref data or methods in the Component - 
  `, 
      'defines the properties and methods including constructor and events of a Component - Directive - Pipe - Service - Module', 
      'name of the External HTML file or inline HTML <br/>  templateUrl: \'./ts-menu.component.html\' or "Hello World" - Note directives dont have a template file',
      'Decorators - eg @Component - define metadata for Angular annotations to class',
      'decorator which defines the selector - template and styles of the Component', 
      '-- tag which can be used to install the Component', 
      '-- HTML part of the Component', 
      '-- styles of the Component', 
      '-- Interpolation {{}} - Property [] - Event () - [( )]',
      `- ngOnChanges() - ngOnInit() most popular - ngDoCheck()- ngAfterContentInit() 
      - ngAfterContentChecked() - ngAfterViewInit() - ngAfterViewChecked() - ngOnDestroy()`,
      '-- Component Tree - is all components in the appn in a tree branching structure with each Component having a CD mechanism',
      '--- applied to every Component  to detect when the Component properties have changed ',
      'this refs all properties or methods or events of a Component',
      'generate a new Component'
    ],
    [`Directives let us define a different style (attribute) or add or remove parts to HTML (template) but normally dont have templates
    - <br/> decorator @Decorator({}) 
    - <br/> 3 types - attribute | template | Components -  
    `,
      '@Directive({})',
      '- attribute-directives', 
      '- template-directives *ngIf - *nfFor() ',
         '<div *ngIf="let x === 1; else elsePart"></div> <ng-template #elsePart>',
         '<div *nfFor="x of List"></div>',
         '<div *ngSwitch with case statements',
      '- Components are a form of Directive but have a template'],
    ['Why Pipes - pure and impure - decoraor - @Pipe() - used in a template HTML to modify data - Custom Pipes - @PipeTransform with transform()', 
      'transform data for display',
      '- only applied in template',
      '-- used in a template',
     '- Pure - ', 
     '- Impure - ',
    'Custom Pipes', 
    '@Pipe({})','-- custom transformation',
    'Date - UpperCase - LowerCase - Currency - Decimal - Percentage - Async'],
    [`Services - implemented as a simple class with @Injectable({}) decorator - 
      - <br/>ng g s my-service
      - <br/>can be reussssed in several different Components so data can be shared 
      - <br/>We can have nested services - 
      - <br/>A provider is an instruction to the DI (Dep Injection) system on how to obtain a value for a dependency
      - <br/>- most of the time these dependencies are services that you create and provide
      - <br/>@Injectable({}) - ensures the compiler will generate the reqd metadata to create classs deps when class is injected 
      - <br/>- ng g s my-service
      - <br/> - providedIn? - determines which injectors will provide the injectable 
      - <br/>- @Injectable({ providedIn : \'root\',}) - (appn - or root level injector) you can now inject the service anywhere in your appn     
      - <br/>- @Injectable({ providedIn : \'platform\',}) - a special singleton platform injector via a service - shared by all appns on page    
      - <br/>- @Injectable({ providedIn : \'any\',}) - provides a unique instance in each lazy loaded module | all eagerly loaded modules share one instance 
      - <br/>- @Injectable({ providedIn : \'Type<any>\',}) - associates the injectable with an @NgModule or other injector types 
      `,

    'simplifies Components',
    'Reuseability in other Components',
    `- DI (Dependency Injection) - is a design pattern - in which a class requests deps from external sources - (wrt creatng them) 
     <br/>provides dependencies to a class upon instantiation 
     <br/>- is used to increase flexibility + modularity in your appns
    `,
    '- DI Tokens',
    '-- Defining Providers',
    '--- Providers with deps',
    '---- aliasing class providers',
    '---- aliasing class interface',
    '---- aliasing multi class i/fs',
    '---- injecting an Object',
    '---- injecting a config Object',
    '---- InjectionToken object',
    '---- interfaces and DI  ',
    '---- Using factory providers',
   
    'class +','@Injectable({})', '- declare locn', '- nesting','- Sharing','typical tasks',
    '- Providing a Service', 
    '-- @injectable({ providedIn: \'root\'})',
    '--- providedIn: \'root\'',
    '--- providedIn: \'platform\'',
    '--- providedIn: \'any\'',
    '--- providedIn: <T>\'',
    'providers',
    '- constructor(private x: MyService){}', 
    '- Services are injected into Components via the constructor', 
     '@Injectable({})', 
     '- Module or Component',
     'nesting services',
     '- Sharing',
     'fetching data from a server - logging - validating user input ', 
     'class with injectable decorator',
     '@Injectable({providedIn: \'root\'})',
     '-- @Injectable({ providedIn : \'root\',}) - (appn - or root level injector) you can now inject the service anywhere in your appn',     
     '-- @Injectable({ providedIn : \'platform\',}) - a special singleton platform injector via a service - shared by all appns on page',    
     '-- @Injectable({ providedIn : \'any\',}) - provides a unique instance in each lazy loaded module | all eagerly loaded modules share one instance', 
     '-- @Injectable({ providedIn : \'Type<any>\',}) - associates the injectable with an @NgModule or other injector types',       
     'other values',
     'privders:[MyService]'
    ], 
     
    ['Decorators - add metadata to a class | objects or methods -  which defines annotations - used by TypeScript compiler tsc',
     '- Metadata - describes other data',
     '- Annotations - are hard coded language features - set on a class - reflect metadata library', 
     '- Class - ',
     '- @Component - @Directive @Pipe @Injectable  @NgModule - @Input @Output @ViewChild @ContentChild ',
     '-- Types of decorators','@Component','@Input or @Output','@HostListener','@Injectable'
    ], 
    ['Interfaces - define a contract with properties and or methods -', 
    ' - export interface IGame{ gameId: number, gameName: string, gameCode: string, etc. }', 
      'Classes - can implement interfaces and must bind by the contract - can have constructor| properties| methods| events',
      '- constructor - important for DI of services', 
      '- properties - class data - can be private - default public', 
      '- methods - functions on the class', 
      '- events - ', 
      '-- this to ref the class object properties and methods'],

    [`TypeScript - data types - number | string | boolean - strongly typed and uses inferred types - interfaces and types   
      <br/>tsc transpiles ts down to .js files - 
      <br/>uses tsconfig.json - transpiles .ts files dwn to .js files to run in the browser 
      <br/>tooling - auto-completion | navigation | refactoring - 
      `,
      '- Strong Data Types - number | string | boolean | ',
      '-- Inferred Types - TS determines the types',
      '- interfaces | classes - helps structure Angular structures',
      '- tooling - auto-completion | navigation | refactoring',  
      '- TypeScript Compiler - MS - transpiles ts with type information to js files', 
    '- .ts files - files with Type Infon - makes data TypeSafe',
    '-- transpilation ts files down to JavaScript files', 
    `- tsconfig.json - identifies the project or appn as a TypeScript appn 
     - <br/> - with this ids root path - CompilerOptions - AngularCompilerOptions
    `, 
    '-- CompilerOptions',
    '-- AngularCompilerOptions',
    '- JS files - ES5 files - with std JavaScript' , 
    '- ngc - (Angular Compiler ) uses tsc to transpile ts to js files',
    `- Barrels - (index.ts) is a way to rollup exports from several modules into one convenient module
    <br/>The barrel itself is a module file that re-exports selected exports of other modules
    <br/> - module file which provides a centralised place for exporting 
    <br/> -- components | interfaces | services | directives | pipes
    `,
      '-- index.ts'
    ],
    ['- package.json', 
     '- angular.json',  
     '-- dist folder',
     '-- node_modules folder','- primary entry point for @angular/core lib' ],
    [`Data binding - is a technique where data stays in sync between the Component and the View
    <br/>- When user updates data in the view - Ang updates the Component
    <br/>- When Component gets new data - Ang updates the View
    `,
    '- String interpolation {{x}} - from data source to target view','-- {{ val }}',
    '- Property binding - [] - Properties are features of DOM nodes - from view target to data source','-- <img [alt]="hero.name" [src]="heroImageUrl">',
    '- Class binding - [class]="classExpression"',
    '- Style binding - <nav [style]=\'navStyle\'>',
    '- Attribute binding - <button type="button" [attr.aria-label]="actionName">{{actionName}} with Aria</button>',
    '- event binding - () - from view target to data source ','<button type="button" (click)="onSave()">Save</button>', 
    '- 2-way data binding - Banana in a box - [(target)]', '-- [(ngModel)] = "name"'],
    ['Why Style - color-size-position', 
    '- CSS', 
    '-- CSS-Box-Model','-- margins','-- padding','-- borders','-- content',
    ' -- ',
    'inline - ext', 
    'ngStyle',
    'ngClass', 
    ' -- ',
    '- SCSS - variables etc.','-- variables', '-- functions()', '-- mixins','inheritance',
    'ViewEncapsulation'],
    ['Angular/CLI','- Building', '- Serving the Browser port'],
       
    [`Modules - @NgModule({}) - Angular loads a colln of JS Modules - library modules - @angular/core etc.
    <br/>ng g m xyz
    <br/>modules are a great way to organise an appn and extend it with capabilities from ext libraries eg. FormsModule
    <br/>lets you group related components | directives | pipes | services - 
    <br/>Launch appn by bootstrapping the root NgModule
    <br/>There are Routing Modules - 
    <br/>Std modules are loaded eagerly
    <br/>Lazy loading modules - lets us use Feature Modules and Shared Modules
    `, 
    `NgModule - is a class marked by the @NgModule decorator 
    <br/>takes a metadata object that describes how to compile a components template 
    <br/>and how to create an injector at runtime 
    <br/> 
    <br/>configure the injector and the compiler and help organize related things together
    `, 
    'Ang Libraries are NgModules - FormsModule | HttpClientModule| RouterModule',
    '@NgModule({}) decorator',
    '- declares relavent Components', 
    '- imports Modules','exports Modules', 
    '- Can define Service Providers - providers',
    '- bootstrap: [AppComponent]',
    '- required by every Ang appn',
    '- Lazy Loading - uses Feature Modules and Shared Modules'
  ],
 
    [`Life Cycle Hooks - A component has a life-cycle that starts when 
    <br/>Angular instantiates the Component class 
    <br/>and renders the Component view and child views -
    <br/>We can fine tune the hehavior of our components during creatin | update | destruction
    <br/>ngOnInit - the most common LCH contains initialisation logic for the Component
    <br/>ngOnChanges - details which properties have changed and how theyve changed  
    <br/>ngOnDestroy - which is where we place the cleanup logic for the Component
    `,'- instantiates class', 
    '- renders view + child views',
    '- CD',
    '- updates View + Component Instance',
    '-- import from @angular/core',
    'Parts -',
     '- ngOnChanges(changes: SimpleChanges) - called many times - when Ang sets/resets data bound Input properties - changes to input properties', 
     '- ngOnInit() most popular (called only once!) C- Initializes the Comp/Directive after Ang 1st displays data bound properties + sets Input property  ',
     '- ngDoCheck() - Detect and Act upon changes that Ang cant detect on its own - Called immed after ngOnChanges() on every CD run + after ngOnInt() on 1st run', 
     '- ngAfterContentInit() - (called once after ngDoCheck()) Responds after Ang projects ext content into View or view containing Directive', 
     '- ngAfterContentChecked() - Responds after Ang checks content projected into Comp/Dir - after all ngDoChecks + ngAfterContentInit()', 
     '- ngAfterViewInit() - (called once after ngAfterContentChecked) Responds after Ang Initialises Comp View + Child Views      ', 
     '- ngAfterViewChecked() - Responds after Ang checks Comp View + Child Views - (After every ngAfterContentChecked + ngAfterViewInit()_',
     '- ngOnDestroy() - Cleanup just before Comp - Unsubscribes Observables - detach event handlers - avoid memory leaks   '],  
     [`ComponentRouter - to handle the navigation from 1 view to the next - Interpreting browser URLs as an instn to change view -
     ng new ang-app --routing --defaults using the Angular CLI to generate a basic Ang appn with routing enabled 
     <br/>We can use ActivatedRoute and to get data about the Routes
    <br/><router-outlet></router-outlet> lets us position the routing infon in our Component template -
    <br/>   
     <br/>routing normally uses RouterModule.forRoot(routes) where routes defines the actual component routes linking URL paths with various components 
     <br/>Note that Lazy Loading can use Routing using a RouteModule.forChild(routes)
     <br/>We can use the Router Resolver to prefetch data to ensure the data is objtained first - 
     
     `,
     '- interprets a browser URL to change View', 'routes:Routes = [{path:"first-comp",component: FirstComponent}]','<base href=\/"\">', '-- HTML5 Urls', '- <router-outlet></router-outlet> location where the router links will go', '- <a routerLink="/first_comp">link</a>','--- Nested Routing', 
     ' -- ','- Routes','- RouterModule', '-- @angular/router', 'RouterModule.forRoot(routes)','RouterModule.forChild(routes) - lazy load the Component or Module',
     ' -- ','- get Route Info','-- ActivatedRoute','-- ActivatedRouteSnapshot','-- RouterStateSnapshot','-- .snapshot.paramMap.get(\'id\') ','-- ParamMap','- Wildcard Routes **','-- PageNotFoundComponent','redirectTo()', 
     ' -- ','- Router Guards','Componentless-routes','-- 5 Guard options','--- canActivate','--- canActivateChild','--- canDeactivate','--- Resolve','--- CanLoad', 
     ' -- ','- When a router navigates to a new Comp view - it updates browser location and history with URL for view - ', '- for modern browsers - HTML5 History push state - no server page request','-- older browsers - use # for no server request - localhost:3002/src/#/crisis-center',
     '-- LocationStrategy','--- PathLocationStrategy','---- HTML5 style navigation','--- HashLocationStrategy', '---- useHash:true',
     ' -- ','-- pre-fetches data before deciding if to jump to the URL or not', '-- create a new Component but include rooting in it','-- The router is used for Lazy Loading'],
     ['Parent Child commn','- @Input()', '- @Output EventEmitter'],
     [' -- '],
     ['Lazy Loading - ', '-- Initially only Modules could be Lazy Loaded (but now Components can too)', '-- browser URL','RouterModule.forChild()',
    'children', 
    '- Feature Modules - import CommonModule instead of BrowserModule (imported once in the root)',
    `ng g m CustFeature - creates a Module called CustFeatureModule 
    <br/>
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    
    @NgModule({
      imports: [
        CommonModule
      ],  
      declarations: []
    })
    export class CustFeatureModule[}
    `,
    `Component in a Feature Module - 
    <br/>ng g c cust-feature/CustFeature
    <br/>
    import { CustFeatureComponent } from './cust-feature/cust-feature.component';

    @NgModule({
      imports: [
        CommonModule
      ],
      declarations: [
        CustFeatureComponent
      ]
    })
    `,
    '- Shared Modules','-- PreloadingStrategy',
    '--- PreloadAllModules - to initially fetch all modules', 
    ' -- ',
    '-- Lazy Load Components (not Modules)',
    '- async-await is used for lazy loading Components',
    `---  async getLazy2() {this.viewContainerRef.clear(); 
      const { Lazy2Component } = await import(\'./lazy2.component\'); 
      this.viewContainerRef.createComponent( this.cfr.resolveComponentFactory(Lazy2Component));}
      `,
      `--- Simplified in Angular 13
    <br/>Ivy creates the Component in ViewContainerRef (without a factory)
    <br/>
    export class AppComponent {
      @ViewChild("formComponent", { read: ViewContainerRef })
      formComponent!: ViewContainerRef;
    
      constructor() {}
    
      async loadForm() {
        const { LazyFormComponent } = await import("./lazy-form.component");
        this.formComponent.clear();
        this.formComponent.createComponent(LazyFormComponent);
      }    
    `],
    [`Change Detection is a builtin framework feature that ensures auto sync between changes to data and the view
      <br/>zone.js but has a class ngZone to help with CD properties and methods
      <br/>The ChangeDetectionRef is base class that provides CD ftns - A CD tree for changed views
      <br/>We can also run via ChangeDetectionStrategy.onPush() to inc performance and just check a branch 
    `,
    '- zone.js - ',
    `- ChangeDetectorRef - base class that provides CD functionality 
      <br/>A change detection tree collects all views that are to be checked for changes
      <br/>Use methods to add | remove views from the tree | initiate CD | explicit mark views as dirty - changed
      <br/>Input changed | events -
      <br/>markForCheck()<br/>detach()<br/>detectChanges()<br/>checkNoChanges()<br/>reattach() 
    `,
    `- ngZone - an injectable service for executing for work inside or outside of the Angular zone  
    <br/>optimizes performance when starting a work consisting of 1+ async tasks that dont require UI updates or error handling to be handled by Angular
    <br/>runOutsideAngular() - kicks off but then run inside Angular with run()
    <br/>isInAngularZone() - assertInAngularZone() - assertNotInAngularZone()
    <br/>properties - hasPendingMacroTasks() - hasPendingMicroTasks() - isStable()- onStable() onError()
    <br/>methods - run() runTask() - runGuarded() - runOutsideAngular()
    `, 
    '- manual CD', 
    '- compares the template expression values before + after an event - for all components of the Component tree',
    '- ChangeDetectionStrategy.onPush()', 
    '- without ngZone'],
    ['AoT is better due to - ','Compile time build', 'No need for Compiler', '3 Phases - 1:Code Analysis- 2:Code generation- 3:Template type checking',
    '-1 AOT Collector - analyzes the metadata and reps in best manner - recorded in the metadata.json file',
    '-2 Metadata collected from the Code Analysis phase is interpreted by Compilers Static Reflector + check for metadata errors ',
    '-3 Angular template compiler - uses tsc to validate binding expns in template - fullTemplateTypeCheck: true in tsconfig',
    'Benefits are 1: Executable code loaded - 2: inlines all ext HTML+CSS - 3: finds template errors - 4: Reduces injection attacks - 5: Reduces bundle load of Frmwk'],
    ['Remove dead code from the bundle - unused bits', 
    'Ivy tree-shakes - DI-CP-View - Content queries - Animations Pipes i18n core frmwork services LCHs - easier to ship librarries', 
    'View Engine tree-shakes - Static analysis of code and then compiles whats left'],  
     [`APF - Ang Package Format - is an Angular specific specn for the structure and format of npm packages used by all Angular packages @angular/core and Angular libraries etc.
     <br/>compatable with all tooling offere by the Angular team + JS ecosystem + 3rd party developers  
     <br/>Developers can rely on the CLI and ng-packagr to produce packages in the APF 
     `, 
    'npm packages',
    'Tooling support',
    'ES versions -',
    `Angular CLI - is a Command Line Interface tool - used to initialize | develop | scaffold and maintain Angular appns directly from a command shell
    <br/>npm install -g @angular/cli - ng new - ng help - ng build - ng serve - ng test 
    <br/>uses schematics to apply transforms to a web-project - modify these schematics | define new  one (update code |  
      fix breaking changes in a dep | add new confign | add a framewok)  
    <br/>Added in the @schematis/angular colln - ng g   and ng add     
    `,
    'ng-packagr - a build tool - Angular CLI uses',   
    'esm and fesm (flattened)',
    '.d.ts files',  
    '-  package.json - "type": "module" - No CommonJS Modules',
    'Angular 13 new improved version - Node package exports - es2020 support Ivy partial compilation',
     '- not rely on Internal APIs - using the Node.js - sub-path pattern feature - displaying multiple outputs at each entry point', 
     '- BigInt - Dynamic Import - Nullish Coascing - Optional Chaining -   Promise.allSettled - string#matchAll - globalThis - Module Namespace exports - import.meta', 
     'for Libraries - publishing tsconfig.json - "angularCompilerOptions": {"compilationMode": "partial"}- no particular runtime version - '
  ],
    ['Ivy is new Compilation and Rendering Pipeline using AoT Compilation', 
    ' - single file compilation - components dont need to know about dependencies',
    'Incremental DOM - every component gets compiled to a series of instructions - create DOM trees - updated mutably inplace - comprising the compiler',
    '-- Instructions', 'Libraries', '- ngcc', '- Linker instead', 'Ang Language Service','only recompiles Components that have changed',
    '- adv Tree Shakeable - Reduced size - faster compilation - enhanced testing + debugging - easier dyn comp loading - mobile exp',
    'EntryComponents - are no longer required'],
    ['- ViewEngine old - required to transpile .ts to .js', '- abstract base class - to render template to DOM - can be overridden for Custom Rendering - RendererFactory2', '3 parts -', ' -1: Template Parsing + creating Data Structure', ' 2: passing sructure into Interpreter + Tree Shaking'  ,' 3: Compilation' , '- Interpreter', '--metadata.json file',
    'contains the static repn of code in a Component','JIT or AOT',
    `EntryComponent is any component that Angular loads imperatively - not refd in the template - by type 
    <br/>you bootstrap the component in an NgModule - or including it in a routing defn
    <br/>- 1: Bootstrapped Component
    <br/>- 2: A Component you specify in a route defn
    `],
    ['Promises',  '- then()', '- future tasks', '- new Promise(resolve, reject)','- asynchronous','Promise.resolve(\'done\').then((val) => {throw new Error("fail")}).then((val) => console.log(val)).catch((err) => console.error(err));',' -- ',
     'Observables','- next()','- Observer','- subscribe','- async pipe','hot - runs all the time without req subscribe()  - cold - requires subscribe ','-- bubbles which identify parts in the timestream'],
    ['Observables','Subjects', '- behaviorSubject', '- asyncSubject', '- replaySubject'],
    ['Reactive Extensions',
    '- library','-- npm install rxjs', '-- asynchronous','-- Event based ops',
    'imps Observable type','Utility ftns','- Convert async to Observables','- iterating over stream','- map vals to types','- filtering streams','- multiple streams',
    'Pipeable operators','- Combination','- Conditional','- Creation',
    '- Errors','- Multi-cast','- Filters','- Transform'],
    ['- Sequence opn (order of opns is important) - map values to inner Observable subscribe and emit in order - delayed subscribe to inner Observables',
    '- (alias FlatMap) Parallel opn - Multiple simultaneous active inner subscriptions - possible memory leaks - subscribes immed to inner Observables -  map to Observable with inner timer or a stream of DOM events',
    '-- map to Observable - complete previous inner Observable - emit values - immed cancel prev opn and emit new one - can have a cancelling operator - ',
    '- ExhaustMap - projects each source value to an Observale which is merged in the o/p Observable only if prev has completed - maps each value to an Observable then flattens all the inner Observables usng exhaust'],
    [`Why forms - to handle user input - eg Login - Register
    <br/>Both Template and Reactive forms - track value changes between form Input elements and form data in the Component Model
    <br/>sharing common building blocks but differ how to create + manage common form-control instances 
    2 types of Forms - 
      <br/>Template Forms - for simple forms - not as reusable or scalable
      <br/>use async data flow between the View and data model - 
      <br/>Most of the code is using NgModel and template directives - 
      <br/>uses ngForm - 
      <br/>rely on mutability with 2 way data binding to update the data model in the Comp as changes are made in the template

      <br/>Testing is reliant on mangular CD - to run properly and require more setup
      <br/>FormsModule - 
      <br/>
      <br/>Reactive Forms - more scalable and reusable and use Observable streams - explicit and immutable approach to managing the state of a form at a given point in time
      <br/>Most of the code is in the class (not the template) 
      <br/>provides a Model-driven approach to handling form inputs whose values change over time
      <br/>FormControl instance always return a new value when the controls - Each change to form state returns a new state - 
      <br/> maintains the integrity of the model between changes - 
      <br/>where form inputs and values are provided as streams of input values which can be accessed asynchronously 
      <br/>provide synchronous access to the data model| immutability with Observable operators | change tracking through observable streams
      <br/>FormModel is the source of truth
      <br/>FormControl instance emits the new value via the valueChanges observable 
      <br/>ReactiveFormsModule - 
      <br/>
      <br/>Validation is an integral part of managing any type of forms 
      <br/>Angular provides a set of built-in validators + ability to create custom validators
      
      
      `,
    ' -- ',
    '- Template Forms', '-- Template directives for object Model','-- ngForm', 'more complex test setup','-- complex validation','',
    ' -- ',
    ' --- Template Validation',
    ' -- ',
    '- Reactive Forms','-- direct access to Object Model','-- Synchronous data flow','simpler test setup','-- simpler validation','-- Data','= new FormControl("")',
    ' -- ',
    '--- Reactive Validation'
  ], 
    ['- is within the tempalte of the Component', '- Queries one child', '- Queries multiple Children'],
    ['- is within a Component tags', '- Queries one child', '- Queries multiple children'],
    [`transclusion is Content Projection - a pattern to insert/project content to use inside another Component - lets a Directive to make use of templates + add content to DOM - lets Directives generate dynamice data driven DOM instns 
      you can make reusable components - for scalable appns by inserting content into already created Comps/Dirs 
    `, 
    '-- eg a Component projecting data into a CardComponent',
     '<ng-content></ng-content>',
     '- <ng-content select=".single-slot">',
     `- <ng-content select=".part-1"></ng-content>
        <ng-content select=".part-2"></ng-content>
      `,
     '- <ng-content select="."> - creates component into which conditionally into 1+ slots',
     ' -- ',
     '-- data types -','--- Inner HTML', '--- HTML Elements','--- Styled HTML', '--- Other Components' 
     ],
     ['HTTP CRUD - Create | Read| Update | Delete - operations which the HTTP can use to manipulate data from a server', 
     'HttpClient - performs HTTP requests -  uses HttpClientModule from @angular/common/http',      
     `HttpInterceptors - is a special Angular service - provides a way to intercept HTTP Requests and Responses and modify them the way we wish 
     HttpClientInMemoryWebApiModule - angular-in-memory-web-api - for Angular demos and tests that emulates CRUD opns over a RESTify API -      
      is a library that intercepts Angular Http and HttpClient requests that would normally go to the remote server
      and redirects them to an in-memory data store - that you control on the frontend.
       <br/>angular/in-memory-web-api -  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1000})   
  `
  ],
    ['appns vers custom libraries',
    'Appns',
    '- use ng g library',
    '- ng-packagr', 
    '- ng g library', 
    '-- angular.json',
    'ng-packagr --',
    'package.json - ref to build path--', 
    'tsconfig.json',
    '- lib sources in project/x',
    'Ivy and ngcc (Compatability Compiler) ',
    'Ang11 - Partial compilation - no need for ngcc'
    ],
    ['- a smart fast extensible Build System - Nx is a next generation build system with 1st class monorepo support + powerful integrations',
    '- Nrwl/Nx',
    '-- smart', 
    '-- fast',
    '-- extensible',
    '-- nrwl/angular', 
    '-- nx monorepo', 
    '-- nx cli',
    '-- nx build', 
    '-- nx serve'],  
    [`State Management - Reactive State for Angular 
    - a group of angular libraries for Reactive extensions 
    - inspired by the Redux pattern - derives state using RxJS and Observables
    - helps simplify appns with many user interactions and multiple data sources
    - Features 
    1: Serializability 
    2: TypeSafety - using tsc (TypeScript compiler)
    3: Encapsulation - using ngrx Effects and Store - any resource side effects - network requests | db access | business logic can be isolated from the UI - simpler components and helps SRP   
    4: Testable - since store uses pure ftns (Reducers) for changing state and (Selectors) for selecting data from state and (Effects) to isolate side effects from UI - this simplifies testing - Ngrx provides special test methods - provideMockStore |   provideMockActions etc.
    5: Performance - Store is built on single immutable data state - making CD (Change Detection) simpler using OnPush strategy. NgRx is also powered by Memoized selector ftns - optimizing  state query computations
    <br/>SHARI   
    `,
    'based around the RxJS library and Observables to make the data immutable',
    'BehaviorSubject - ngrx is based around the behaviorSubject',
    'appn State',
    '- enforces a unidirectional sequence of operations ',
    '- 5 features - Serializablity | TypeSafety | Encapsulation | Testable | Performance',
    '-- Serializability', 
    '-- TypeSafety - using tsc (TypeScript compiler)',
    '-- Encapsulation - using ngrx Effects and Store - any resource side effects - network requests | db access | business logic can be isolated from the UI - simpler components and helps SRP',   
    '-- Testable - since store uses pure ftns (Reducers) for changing state and (Selectors) for selecting data from state and (Effects) to isolate side effects from UI - this simplifies testing - Ngrx provides special test methods - provideMockStore |   provideMockActions etc',
    '-- Performance - Store is built on single immutable data state - making CD (Change Detection) simpler using OnPush strategy. NgRx is also powered by Memoized selector ftns - optimizing  state query computations',
    `- SHARI -<br/> 
      S: - Shared state that is accessed by many components and services
      H: - Hydrated state that is persisted and rehydrated from external storage 
      A: - Available state that must be available when reentering routes
      R: - Retrieved state that must be retrieved with a side effect
      I: - Impacted state that is impacted by Actions from other sources
      `,
    '- ngrx/Store is a library for managing the main appn State - uses StoreModule from @ngrx/store - StoreModule.forRoot({ spinner: reducer }),',
    ' A reactive state mgmt library powered by RxJS - manages flow of data through appn - actions dispatched - reducers act on them and mutate the Store',
    '- Reducer are pure functions which take an action and output data to state or on to Effects (if async)',
    '- Action - express state changes - acts as input to Reducer to produce new State and if async then to feed the effects library'
    ,
    '- Selector - Read state data - are pure functions for getting slices of the state from the Store - how appns listen to State Changes', 
    '- Effects - (side Effects - commn with ext API HTTP or dispatching another action  ) asynchronous parts of code which take effect after Reducer functions - DJ of the NGRX dancefloor', 
    `-- Store Devtools - @ngrx/store-devtools - provides dev tools and instrumentation for Store - npm install @ngrx/store-devtools - StoreDevtoolsModule -  
    <br/>StoreDevtoolsModule.instrument({name: 'NgRx Demo App',logOnly: environment.production})     
    
    `,
    '-- Entity - data - ',
    '-- Data - Simplifying the case for many CRUD operations',
    '--- if the state is confined to one Component then this can be used',
    'implementation of ngrx ', '- Au   th0 SDK'
    ], 
    [' -- '],
    [`Core libraries`,
      `- @angular/core - imps Angular core functionality - low level services and utilities  
        <br/>BrowserModule - included auto in root AppModule when create a new app with CLI
        <br/>defines class structure for Components | view hierarchies | CD | Rendering | event handling
        <br/>defines the decorators for metadata
        <br/>defines infrastructure for DI | i18n | testing | debugging
      `,
      `- @angular/compiler - ngc - is the tool used to compile Angular appns and the Libraries
       <br/>built on top of the TypeScript compiler (tsc) - extended for Angular decorators etc      
        <br/>serves as a bridge between the developer and the runtime - ngc translaes the Ang code into efficient runtime instns
       `,
      '- @angular/browser - loaded into the root folder automatically when creata a project with ng new xxx',
      `- @angular/common - imps basic Angular framework functionality 
      <br/>directives | pipes | location services used in routing | HTTP services | localization support 
      <br/>exports are re-exported by BrowserModule - included in the root AppModule wrt Ang CLI
      `,
      `- @angular/router - imps the Angular router service - enables navn from 1 view to the next wrt appn tasks
      <br/>Defines the Route object that maps a URL path to a Component
      <br/>and RouterOutlet directive - places a RoutedView in a template 
      <br/>+ a complete API for configuring | querying | controlling router state  
      <br/>import { RouterModule } to use the Router service in apps   
      `,
      `- @angular/platform-browser - supports exec of Ang apps on diff browsers 
      <br/>library for using Angular in a web browser
      <br/>BrowserModule - included by default  
      `,
      `- @angular/platform-browser-dynamic - for using JIT with Angular in a web browser 
      <br/>eg Bootstrapping 
      `,
      '- @angular/forms',
      '- @angular/animations',
      '- @angular/material',
      '- @angular/cdk',
      '--',
      '- @angular/cli',
      '- @angular/compiler/cli',
      '- @angular-devkit/build-angular',
    ],
    [`GIT (Global Infon Tracker) - is a free open source distributed VCS (Version Control System) designed to handle small to large projects with speed and efficiency
    <br/>- has 3 parts - 1: Working tree 2: Staging area 3: Local repository + Remote repository - 
    <br/> - Branches - part of everyday devt process - A pointer to a snapshot of your changes - spawn a new branch to make changes 
    <br/> - Forking - creates a indept copy of a Git repository - 
    <br/> - git clone - creates a linked copy that will continue to sync with the target repo
    <br/> - Stashing - lets you change to a diff project and store the current staged file info 
    <br/>- Staging and Committing -  
    `,
      'Parts','- Working tree', '- Stage area','- Local Repository','- Remote Repository',
      'Branches - ',
      'Fork - ',
      'stash - ',
    'Commands - ',
    '- Add - ',
    '- fetch - ',
    '- branch - ',
    '- checkout -',
    '- commit - ',
    '- init - ',
    '- push - ',
    '- pull - ',
    '- log - ',
    '- status -',
    ''], 
    [`Testing is very important to ensure the validity of your programs and that there are no problems with the code!
      <br/>There are three forms of test 1: Unit 2: Integration 3: End 2 End
      <br/>Unit testing is the simplest and most important type of testing. It normally involves Jasmine and the Karma (Test runner)
      <br/>Jasmine spies are very useful for mocking parts of the Angular Component structure 
      <br/>TestBed is used to create dummy components etc 
      <br/>Integration testing - has 2 types - shallow and deep 
      <br/>Shallow integration testing - is where the child components are simple
      <br/>Deep integration testing is where child components have dependecies like services
      <br/>End to End testing is not so important but using Protractor and the more modern Cypress
      <br/>Protractor has a page object to be shared across diff components - 
    `, 
    '- Unit', 
    '-- spec.ts', 
    '--- describe', '--- beforeEach()', '--- it - fit - xit', '--- afterEach', '---- TestBed', '-- Jasmine', '-- Karma', '-- Mocking', '--- Wallaby', 
    '- Integration','-- Shallow','-- Deep', '- End to End', '-- Protractor', '-- Cypress'],
    ['Why Design', '- SOLID','-- A Class should have 1 and only 1 (Job) reason to change',
    '-- Open for extension but Closed for modification',
    '-- Every subclass - Generics - should be able to replace the base (Parent class)',
    '-- Never imp an Interface you dont use - nor methods they dont use',
    '-- Entities must depend on the abstraction (not Concreations)   ', 
    ' -- ','Dont Repeat Yourself', 
    ' -- ',' Dep Injection is important for Scalability - large appns - Services injected into many Components', 
    ' -- ',
    `- ensure there is onl 1 instance of the class - getInstance or DI system 
     <br/> Services defined in the root (not those in Components which are instantiated for each Component)
    `,  
    ' -- ','- Instantiate diff child objects - of same parent Class dept on conditions - <br/>Object Creation Interface',    
    ' -- ','- alternative to Subclasses for extending an Object - Composition instead of Inheritance<br/>An object which wraps another Object',  
    ' -- ','Lazy Pattern',
    ' -- ','Composition Pattern'],
    ['Test Driven Devt',
    ' -- ',
    'Behavoral Driven Design','- eases conversion of user features specns to code reqd to imp them'],
    [`Angular Security -   
    
    `, 
    '- XSS (Cross Site Scripting Vulnerability) - allows attacker to control users appn in browser',
    '-- Angular auto-escaping for {{}} interpolation', 
    '- CSRF = XSRF (Cross Site Request Forgery) exploits users security by sending an unwanted request to server wrt cookies',
    '- CSRF - cookie-to-header token - protected by server side appn generates token to protect against CSRF attacks',
    '--- HttpClientXsrfModule.withOptions({cookieName: \'XSRF-TOKEN\',headerName: \'X-XSRF-TOKEN\'})',
    '- Strings are replaced by their text values', 
    '- is the inspection of untrusted values - turning it into a safe to use in DOM value - Angular auto sanitizes untrusted values for HTML|styles|URLs ',
    '-- DomSanitizer - used to allow code through',
    '-- constructor(private sanitizer : DomSanitizer) {} - getHtmlSnippet() {let safeHtml = `<img src="..." oerror="alert(\'Failed to load image\')">`;return this.sanitizer.bypassSecurityTrustHtml(safeHtml);}', 
    ' - using Observables for data instead of the actual data - means the code cant be accidentally changed', 
    '- JSON Web Tokens - appn talks to server that produces Token - passed as Authorization Header to prove authentication', 
    '- OWASP - a foundation works to improve security of S/W ', 
    '- npm install -g snyk - snyk test - tracks over 23 security vulnerabilities for Angular related Modules'],
    ['Auhtorization', 'Authentication', '- Auth0', '- OAuth2'],
    ['Node.js'],
    ['- Node Package Manager'],
    ['- Most popular Web framework - A backend web appn for Node.js for building Web appns and APIs - provides mechanisms for writing handlers for requests with diff HTTP verbs at diff URL Paths- routes ',
    '-- const express = require(\'express\'); const app = express(); const port = 3000;','-- app.get(\'/\', function(req, res) {res.send(\'Hello World!\')}); - ','--  app.listen(port, function() { console.log(\`Example app listening on port ${port}!\`)}); ' 
    ],
    ['VS-Code'],
    [`Angular Language Service - provides code editors - eg VS Code with a way to get 
    Completions | Errors | Hints | Navigation inside Angular templates
    <br/>It goes straight to your config files and finds out about all the templates in your project and provides adequate support as you open a template 
    `,'- Code completions', '- Errors', '- Hints', '- Navigation', '-- Angular Templates'
    ],
    [`TSServer (Stand alone Server) - is a Node executable that executes the tsc (TypeScript Compiler) and Language Services and exposes them through a JSON protocol
    <br/>used in Code editors and IDE support - VS Code - uses tsserver written in TypeScript     
    `], 
    [`ESLint - statically analyses your code to quickly find problems 
    <br/>- is a static code analysis tool used to flag programming errors | bugs | stylistic errors and suspicious constructs
    <br/>- is a JavaScript Linter to lint either JS + TS code (TSLint only used by TypeScript) - A large project can contain both JS + TS
    <br/>- is built into most Web Editors VS Code or as part of your CI pipeline  -
    <br/>- enables you to enforce a set of style | formatting | coding stds for your codebase  
    <br/>ESLint8.9 - released Feb 2022 - ES2022 added - ecmaVersion parser option to 13 
    <br/>ESLint8.15 - May 2022 - 
   
    `,
    'ESLint is a JavaScript Linter to lint either JS + TS code', 
    'Static Analysis',
    'VS Code + CI Pipeline',
    'AST based pattern checker - JS',
    '- lets you enforce a set of style | formatting | coding stds for your codebase',
    'ESLint 8.09 (7th Feb 2022) -  ',
    'ESLint 8.15 (7th May 2022) -  ',
    ],
    ['Why CI/CD', 
  '- CI - Continuous Integration',
  '- CD - Continuous Development', 
  '- CD - Continuous Delivery', 
  '-- Jenkins'],
    [`Webpack - is a module bundler with its main purpose is to bundle JS files for usage in a browser
     <br/>Once installed you can interact with webpack either with CLI or API
     <br/>A tool that lets you compile JS modules
     <br/> 
     <br/>It generates 1 file (or a few files) to run your app
     <br/>npm install --save-dev webpack 
     <br/>The most modern modules are ESM (EcmaScript Modules) supports ES2015+ | CommonJS| AMD modules out of the box  
     <br/>- performs clever static analysis of the AST of your code - 
     <br/>- has an evaluation engine to evaluate simple expressions - supports most libraries out of the box
     <br/>Code Splitting - lets you split your codebase - into multiple chunks 
     <br/> - Chunks are loaded asynchronously at runtime - Reduces the initial loading time
     <br/>Optimizations - Webpack can do many optns to reduce the output size of your JS by dedup freq used modules - minifying and giving you full control of what is loaded initially
     <br/>- and what is loaded at runtime through code splitting 
     <br/>- It can also make your code chunks cache friendly by using hashes  
     <br/>Has a rich plugin interface - very flexible - 
     <br/>Enables use of Loaders to preprocess files - lets you bundle any static resource - beyond JS Use Node.js to write your own
     <br/>uses async I/O and has multiple caching levels - very fast on inc compilations
    `, 
    '- Angular CLI build process uses Webpack behind the scenes for',
    '-- transpile TS to JS',
    '-- transform SASS files to CSS',
    'module bundler - which lets you bundle JS modules together',
    `- Terser is an industry std minifier for JS code - 
    <br/>Webpack performs minification mode using Terser by default 
    <br/> It minifies JS + HTML + CSS - requires loaders + plugins 
    `,
    `Terser plugin - TerserWebpackPlugin - 3rd party package - plugin uses terser to minify your JS  
    <br/>- Webpack v5 has latest terser-webpack-plugin out of the box
    <br/>- const TerserPlugin = require("terser-webpack-plugin");
    `, 
    'Entry Points -', 
    '-- Entry',
    '-- Output', 
    'Loaders',
    'Plugins'
    ],
    [`The Cloud - refers to Servers accessed over the Internet and the S/W and DBs that run on those servers 
      Cloud Servers are located all over the World
      <br/>Cloud Computing offers businesses Scalability of resources for when production expands and contracts
    `,
    ' - 3 reasons 1: File Storage - store all types of info in the cloud 2: File Sharing - Makes it easy to share files simultaneously 3: Backing up Data - simplifies backing up and protecting your files', 
    ' -- ',
    `- AWS - Amazon Web Services - offers reliable | scalable | cheap Cloud Computing Services 
      <br/>provides distributed computing processing capacity and S/W tools via AWS server farms - S3 and EC2  
      <br/>AWS are accessed over HTTP using the REST architecture style (JSON for newer APIs) and SOAP (for older APIs)
      `,
    '- S3 - Simple Storage Service - ',
    '- EC2 - Elastic Compute Cloud -   ',
    '- Amazon Connect - ',
    '- AWS Lambda - a serverless ftn enabling ETL wrt EC2 and S3',    
    ' -- ',
    `- Azure - MS - Cloud computing - for appn management via MS-managed data centers
      <br/>
    `,
    '- services - ',
    '-- virtual m/c - IaaS (Infrastrucure as a Service) - lets users launch GP Windows and Linxu VMs - Linux on Azure',
    '-- App Services - PaaS (Platform as a Service) - letting devs easily publsh and manage websites',
    '-- Websites - allow devs to develop using a raft of Server side langs - ',
    '-- WebJobs - apps can be deployed to an App Service envt to imp background processing on a schedule|on demand| run continuously ',
    '- Identity',
    '-- AAD (Azure Active Directory) - sync on premisees directories + enables SSO',
    '-- AAD (Azure Active Directory) B2C - use of consumer identity and access management',
    '-- AAD (Azure Active Directory) Domain Services - join Azure virtual machines to a domain',
    '-- Azure Info Protn - used to protect sensitive info',
    '- location',
    '-- on-premise - ',
    '-- hybrid -',
    '-- multicloud -',
    '-- at the edge -'  
],
    ['Accessability','- ARIA attrbutes', '- WCAG', '- POUR'],
    [' -- '],
    [`Schematics is a template based code generator - that supports complex logic 
      <br/>A set of instructions for transforming a S/W project by generating or modifying code  
      <br/>packaged into collections and installed by npm 
      <br/>Angular CLI uses schematics to apply transforms to a web-project - 
      modify these schematics | define new  one (update code |  fix breaking changes in a dep | add new confign | add a framewok)  
      <br/>Added in the @schematis/angular colln - ng g and ng add  
      `
    ],
    ['Ang Material', 
    ' -- ',
    'Ang CDK'],
    ['Flex-layout', 
        'display:flex'],
    ['Progressive Web Appn - are Web appns that use Service Workers - manifests - caching - progressive appns - to give a similar exp with a native appn - apps leverage modern browser capabilities - even with no Network or sparse Networks', 
    '- Service Workers', '- manifests', '- other Web-platform features','- Progressive Enhancement ','--- native apps ','---- Works Offline',
    ' -- ','- Requirements',
    '-- Runs on almost every desktop | mobile | tablet', 
    '-- Due to SW - keeps it always updated',
    '-- due to HTTPS - secure',
    '-- SWs to make it work offline and on sparse networks',
    '-- employs modern web capabilities to produce an app-like experrience',
    '-- via SE due to web app manifest',
    '-- does not require downloading - easily shared via simple link or URL', 
    '-- engages same interaction methodology as a native app  ',
    '-- fully installable on users mobile home screen (no App Store)',
    '-- up to date via Push Notification - offers latest updates', 
    ' -- ',
    '- Service Workers - is a script runs in Web browser to manage and manages caching of appn',
    '-- For SW to be registered it requires HTTPS', 
    '-- Caching is like installing a native appn - appn is cached as 1 unit - all files updated together ',
    '-- SW loads Manifest file - ngsw.json from Server using CLI generated config file- ngsw-tsconfig.json - (not the Web App Manifest file) - Caching - describes resources to cache - includes hashes of every files content',
    '--- Update to appn deployed - Contents of manifest changes - hence new ver of appn should be downloaded and cached - Updates happen in background quickly after changes are published',
    '-- SW is preserved after user closes tab - next time browser loads appn - it loads SW first - appn very fast - intercepts every resource request - no need for Network',    
    '-- interactions are handled using the SwPush service - ensure protect against CSRF/XSRF   attacks ',
    '--- interfaces','---- PushEvent','---- PushManager','---- PushMessageData','---- PushSubscription','---- PushSubscriptionOptions',
    '-- Background Sync - ','--- defer actions','---- Store when offline','----- caches small static assets','----- for storing large assets', '----- Sync when online',
    '-- SW work as a Network proxy - intercept all outgoing HTTP requests made by appn and can choose how to respond to them - query a local cache | deliver cached response| request new data from Server','--- interupts HTTP output requests','--- ',
    '-- mobile or other'
    ],
    ['let us Mix languages together - eg Angular and React','- Custom Elements','- Web Components', '- Framework Agnostic','polyfills',
    'CustomElementRegistry','- createCustomElement() API','NgElementConstructor i/f()','customElements.define()',  '-- CD ftn', '-- data binding','bootstrap to DOM'
    ,'-- Dynamic Content','- NgElement class','-- let us add Type Infon to the NgElement class'],
    ['Web Workers permit multithreading in Angular', 'Threading', 
      ''],
    ['Angular Universal is a UI Framework - Accessability - mobile friendly','- SSR - Server Side Rendering'],
    [`Optional Modules - Standalone Components | Pipes | Directives
      <br/>adding strandalone : true
      <br/>Stand alone Components - @Component standalone: true and its backwards compatible in both directions - 
      <br/> Not owned by anyone or anything - but can be imported into other components and modules
      <br/> ImportProvidersFrom(RouterModule.forRoot(APP_ROUTES))  
      <br/> We just update Angular Schematics 
    `, '- @Component standalone: true',
    '- bootstrapApplication(AppComponent)',
    '-- Backwards compatability -',
    '-- Architecture -',
     `Advantages - 
     <br/>1: Reduces boilerplate in many appns eg SCAM (Single Component Angular Module) pattern
     <br/>2: Simplifies learning Angular by removing NgModule from coding
     <br/>3: Allows us to offer more streamlined APIs for common use cases      
     `,
     '',
      'SCAM (Single Component Angular Module) - one Module for each Component'],
      '- Problem with Schematics - which search for your AppModule - Libs should update schematics    ',
      
    [' -- '],
    ['Agile - is an iterative approach to project management + S/W devt that helps teams deliver value to their customers faster with fewer headaches - suite of Agile work management solutions powering collaboration - across all teams',
    '- iterative means small incremental changes',
    '- (no bigbang) - delivers work in small, but consumable, increments - ',
    '- Requirements | Plans| Results are evaluated continuously so teams have a natural mechanisms for responding to change'
  ],
    ['Jira S/W - provides Scrum and Kanban boards - are task management hubs - where tasks are mapped to customizable workflows', 
     '- provide transparency across teamwork + visibility into the status of every work item.', 
     '- Boards - displays issues 1+ projects so you can view | manage | report on work',
     
     '-- View all boards - click Create board - Scrum|Kanban', 
     ' -- ',
    '--- Team management board - Simplified board - teams new to agile - lets you incrementally inc power',
    '-',
    '--- Simplified Board',
    ' -- ',
    '--- Scrum Board - for teams that use sprints - includes a backlog - is the tool that unites Agile teams around a single goal + promotes iterative incremental delivery',
    '---- Sprints + Backlog ----- short time based period when a scrum team works to complete a set amount of work (eg 2 weeks)',
    ' -- ',
    '--- Kanban Board - management + constraining WIP - includes option of Kanban backlog - fully extendable - with custom extensions and Backlog management',
    '---- designed to visualise work - limit WIP - maximize efficiency or flow',
    '----- used in supply chain management - for cost of unfinished goods the manufacturing process',
    ' -- ',
    '- help Agile + DevOps'
  ],
  ['Azure - Cloud'],
    ['How - Angular Performance - ','- sourceMap Explorer','LCP - largest Component Paint  ',' - Lazy Loading','- Angular Universal','- PWA-SW','- Ivy', '- AOT Compilation','- Tree-Shaking', '- Modern Angular'],
    ['- architectual style that for an API that uses HTTP requests to access and use data','-- APIs','-- IDLs','--- humans/auto machine procing','-- HTTP methods',  '-- List REST API DLs','--- WSDL','--- WADL','--- OData','--- OpenAPI','--- RSDL','--- RAML',
    ' -- ','- IDL for RESTful APIs expressed using JSON', '-- design & Doc APIs','-- ','-- Interface Defn Language','-- RESTful APIs','-- JSON','-- CRUD methods', 
    ' -- ','- an API platform for building and using APIs -','-- simplifies each step of the API lifecycle','-- streamlines collaboation with team members',
    ' -- ','- a Query Language for your API - provides a complete descn of data in the API','-- Quey language for API','-- description of data in API','-- Server side runtime','--- exec queries'
    ],
    ['ag-grid'],
    ['Why Micro-FEs','- WebPack5', '- Module Federation'],  
    ['- new WWW -','', ''],
    ['- Ang Versions','Ang 14',
    'Ang 13 TS 4.5 - milestone in updates - new APF - CLI now uses ESBuild (JS Bundler works with Terser) - Node package exports - ES2020 - cli.cache ', 
    'Ang 12 TS 4.2 - cleaner code - Ivy everywhere - templates - Nullish Coalescing - Critters for CSS inlining - ',
    'Ang 11 TS 4.0 - Font inlining - ESLint - Stricter types - HMR Hot Module Replacement - Partial Compilation - Linker - no ngcc - Webpack 5 Moduoe Fedn',  
    'Ang 10 TS 3.9 - major release - new default browser config - Ivy Ngcc - optional strict - Perf improvements - ModuleWithProviders<T>',
    `Ang 09 TS 3.6/7 - Ivy enabled by default - Updates to Zone.js and RxJS - smaller bundle size 
        ModuleWithProviders - Language Service - Faster Testing with ComponentHarness - 
    `,
    `Ang 08 TS 3.4 - Differenctial Loading - ES5 | ES2015 - 
    <br/>new lazy loading syntax - uses dynamic import syntax -    
    <br/>Simplifies Web Worker creation -   ng g 
    <br/>new APIs 
    <br/>bazel and Ivy are coming - 
    `,
    `Ang 07 TS 3.1  Ang Material and CDK - Virtual scrolling | Drag n Drop  
      <br/>Performance improvements -reflect-metadata polyfill - 
      <br/> CLI prompts       '
      <br/>Angular DO-Bootstrap (interface DoBootstrap - ngDoBootstrap) and Angular Compiler - 
      <br/>new Angular Compiler - offers an 8 phase rotating AOT compilation - NGCC libraries 
      <br/>Angular Error handling - 
      <br/>Angular Elements - 
      <br/>ative Script - 
    `  
  ],
    
];
/*
    

*/

@Component({
  selector: 'app-ts-menu',
  templateUrl: './ts-menu.component.html',
  styleUrls: ['./ts-menu.component.scss']
})
export class TsMenuComponent implements OnInit {
  
  isScreenSmall = false;

  ts_list = of(features.split(','));
  ts_sublist = subTopics; // gives indiv arrays
  
  ts_strArr: string[] = [];
  ts_subStrArr: string[6][] = [];
  
  tsFeatureIndex = 0;
  tsFeatureSubIndex = 0;

  tsInfo: string = ``;

  constructor() { }

  ngOnInit(): void {
      console.log('ngOnInit()');
      let arr = this.ts_sublist;
  }

  getInfo(i: number, j: number){
      this.tsInfo = subTopicsInfo[i][j];       
      this.tsFeatureSubIndex = j;
  }

  removeQuote(str: string): string{
      return str.replace(/'/g,'');
  }

  showTSFeatures(inx: number){
      this.tsFeatureIndex = inx;
  }
}
