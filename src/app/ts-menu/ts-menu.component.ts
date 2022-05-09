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
    'ngrx_CRUD',
    'ViewDOM',
    'ContentDOM',
    'Content-Projection',
    'HTTP_HttpClient',
    '@Input_@Output',
    'Git_distd-VCS',
    'Testing_unit',
    'Security',
    'Authorization/Authentication',
    'Node.js',
    'npm',
    'express',
    'CI_CD_Jenkins',
    'Webpack',
    'Cloud_AWS_Azure',
    'Accessability',
    'Angular Material',
    'Flex Layout',
    'PWA - Service Workers',
    'Angular Elements',
    'Web Workers',
    'Angular Universal',
    'Angular Performance',
    'REST_APIs_Swagger',
    'Micro Frontends',
    'Web 3'
`;

const subTopics = [
    ['JavaScript Framework','mobile-laptop-desktop',
    '- Front End appns','- Angular/  CLI','- main parts','TypeScript','TS Libraries',
    'Server Side Angular',
    '-- Add ons'],
    ['Why Components - ', '- class', '- template','Decorators','- @Component({})', '-= selector', '-- templateUrl', '-- styleUrl', '- LC-hooks','-- Component Tree','- Change detection',
    'this', '- ng g c xyz'],
    ['Why Directives','@Directive({})','- attribute-directives', '- template-directives *ngIf','-- *ngIf','-- *ngFor','-- *ngSwitch()', 
    '- Components'],
    ['Why Pipes','- transforms data','-- display', 'template', '- Pure', '- Impure','Custom Pipes', '-- @Pipe({})','-- PipeTransform - transform','built-in pipes'],
    ['Why Services','wrt Components','Reuse','- DI - dep Injection','class +','@Injectable({})', '- declare locn', '- nesting','- Sharing','typical tasks','- Providing a Service', '-- providedIn root','providers'], 
    ['Decorators','- Metadata','- Annotations', '- Class', 'Decorator examples'], 
    ['Interfaces', '- interface defn', 'Classes','- constructor', '- properties', '- methods', '- events', '-- this'],
    ['tsc', '- .ts files', '- tsconfig.json', '- JS files', '- ngc'],
    ['- package.json', '- angular.json', '-- dist folder','-- node_modules folder' ],
    ['- String interpolation {{x}}','- property binding[]','- event binding()', '- 2-way data binding'],
    ['Why Style - color-size-position', '- CSS', 
    '-- CSS-Box-Model','-- margins','-- padding','-- borders','content',
     'inline - ext', 'ngStyle','ngClass', 
        '- SCSS - variables etc.','-- variables', '-- functions()', '-- mixins','inheritance', 
       'ViewEncapsulation'],
     ['Angular/CLI','- Building', '- Serving the Browser port'],
    ['Modules','NgModule', 'decorator', '- declares Components', '- imports Modules', '- exports Modules','- Can define Service','min 1 Module','Lazy Loading'],
     ['Life Cycle Hooks','- Instantiates class','- Renders View + Child','- Change detection','- Updates View + Comp Instance','LCH parts','- ngOnChanges()', '- ngOnInit() most popular','- ngDoCheck()', '- ngAfterContentInit()', 
     '- ngAfterContentChecked()', '- ngAfterViewInit()', '- ngAfterViewChecked()','- ngOnDestroy()'],
    ['ComponentRouter', '- URLs', 'Routes path:\'x\' - component', '<base href=\/"\">', '-- HTML5 Urls', '- router-outlet', '- routerLink', 
    ' -- ','- Routes','- RouterModule', '-- @angular/router','--- forRoot()','--- forChild()',
    ' -- ', '- get Route Info','-- ActivatedRoute','-- ActivatedRouteSnapshot','-- RouterStateSnapshot','-- .snapshot.paramMap.get(\'id\') ','-- ParamMap','- Wildcard Routes **','-- PageNotFoundComponent','redirectTo()', 
    ' -- ','- Router Guards', '-- Componentless-routes', '-- 5 Guard options','--- canActivate','--- canActivateChild','--- canDeactivate','--- Resolve','--- CanLoad',
    ' -- ','- history','- history.pushState','- older browsers','-- LocationStrategy','--- PathLocationStrategy','---- HTML5 style navigation','--- HashLocationStrategy', '---- useHash:true',
    ' -- ','Route Resolver', '- new Comp --routing','-- Lazy Loading'],
   
    ['Lazy Loading','- Modules','- browser URL','- forChild','- children', 
    '-- Feature Modules','-- Shared Modules','--- PreLoading Modules','-- preloadingStrategy: PreloadAllModules',
    ' -- ','Load Components','--- async await', '--- await import','-- simplified Ang13'],
    ['Why Change Detection?','- ngZone', '- manual CD', '- automatic CD','- onPush', '- without ngZone'],
    ['Why AOT','Compile time build', 'No need for Compiler','3 Phases','- 1:Code Analysis','- 2:Code generation','- 3:Template type checking','Benefits'],
    ['Why TreeShake', 'treeshaking in Ivy', 'treeShaking in VE'],
    ['APF - Ang Package Format', 'npm packages','Tooling support','ES versions','Angular CLI','ng-packagr','esm and fesm','.dts files','ESM',
       'Angular 13 APF','- Node package exports', '- es2020 support', '- Ivy partial compilation'
    ],
    ['Ivy new', 'Locality','Incremental DOM','-- Instructions', 'Libraries', '- ngcc', '- Linker   instead', 'Ang Language Service','Compilaion of changes','Ivy - Advantages'],
    ['- ViewEngine old', '- Renderer2', '3 parts -', ' -1: Template Parsing', ' 2: Tree Shaking',' 3: Compilation' , '- Interpreter', '--metadata.json file','ngFactory.js files','JIT or AOT'],
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
    ['State Management','BehaviorSubject','- appn State', 'uni-directional','- Store','- Reducer','- Action','- Selector', '- Effects', '-- Entity', '-- Data', 'ComponentStore'],
    ['Whats View DOM', '- ViewChild', '- ViewChildren'],
    ['Whats Content DOM', '- ContentChild', '- ContentChildren'],
    ['Whats transclusion', 'ng-content','- Single Slot','- Multi-Slot','- Conditional'],
    ['CRUD', 'HttpClient', 'HttpInterceptors', 'Angular-web-api-'],
    ['Parent Child commn','- @Input()', '- @Output EventEmitter'],
    ['Parts','- Working tree', '- Stage area','- Local Repository','- Remote Repository','Branches','Fork','stash',
    'Commands - ','- Add','- fetch','- commit','- init','- push','- pull','- log','- status',''], 
    ['Why Test', '- Unit', '-- spec.ts', '--- describe', '--- beforeEach()', '--- it - fit - xit', '--- afterEach', '---- TestBed', '-- Jasmine', '-- Karma', '-- Mocking', '--- Wallaby', 
    '- Integration','-- Shallow','-- Deep', '- End to End', '-- Protractor', '-- Cypress'],
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
    ['Why CI/CD', '- CI - Continuous Integration','- CD - Continuous Development', '- CD - Continuous Delivery', '-- Jenkins'],
    ['Webpack', 'module bundler','Terser plugin', 'Entry Points -', '-- Entry','-- Output', 'Loaders','Plugins'],
    ['Whats the Cloud?', '- AWS - Amazon Web Services', '- Azure'],
    ['Accessability','- ARIA attrbutes', '- WCAG', '- POUR'],
    ['Ang Material', 'Ang CDK'],
    ['Flex-layout', 'display:flex'],
    ['Why PWA','- Service Workers'],
    ['Why Angular Elements','- Custom Elements','- Web Components', '- Framework Agnostic','polyfills',
      'CustomElementRegistry','- createCustomElement() API','NgElementConstructor i/f()','customElements.define()',  '-- CD ftn', '-- data binding','bootstrap to DOM'
    ,'-- Dynamic Content','NgElements class','WithProperties()'],
    ['Why Web Workers', 'Threading', ''],
    ['Why Angular Universal','- SSR - Server Side Rendering'],
    ['How - Angular Performance - ','largest contentful paint', '',
         'Lazy Loading','Angular Universal','PWA-SW','Ivy', 'AOT Compilation','Tree-Shaking', 'Modern Angular'],
    ['RESTitutional file transfer','- Swagger', '- GraphQL'],
    ['Why Micro-FEs','- WebPack5', '- Module Federation'],
    ['- new WWW -','', '']
];


const subTopicsInfo = [
  [`JavaScript Framework for devpment of client side mobile web desktop appns -
  <br/>written in MS TypeScript for adding types to the JS framework and simplifying JS (EcmaScript - modern JS) - with classes and interfaces - ts files are then transpiled down to JS code to run in the browser 
  <br/>using the Angular/CLI to generate the main parts of Angular appns -
  <br/>Components Directives Pipes Services and Modules and Change Detection to id when events occur 
  <br/>Observables and the RxJS operators can manipulate them and use Subjects to aid working with them
  `,
  'mobile-laptop-desktop', '- primarily used for writing Front End Appns written in TypeScript which are then transpiled to JS to run on the browser',
  'Angular CLI (Command Line Interface) uses Webpack - generate parts - build appn or serve browser','-- Components - Directives - Pipes - Services - Modules - classes Change Detection - ngc compiler uses tsc (TypeScript) Webpack used by the Angular/CLI',
  'TypeScript','TS Libraries  ',
  ' - Angular Universal lets Angular work on the Server and use SSR - Server Side Rendering - Also a way to speed up the initial load time by only loading static code and then dynamically loading the Angular framework after behind the scenes - very fast load time',
  `-- Add ons - angular/pwa (Progressive Web Appns) and Service Workers - 
    angular/elements - angular/webWorkers - Angular Universal - Angular Material - angular/flex-layout
    ` 
  ], 
  ['Components are the most important part of an Ang App', 
      'defines the properties and methods including constructor and events of a Component - Directive - Pipe - Service - Module', 
      'name of the External HTML file or inline HTML <br/>  templateUrl: \'./ts-menu.component.html\' or "Hello World" - Note directives dont have a template file',
      'Decorators - eg @Component - define metadata for Angular annotations to class',
      'decorator which defines the selector - template and styles of the Component', 
      '-- tag which can be used to install the Component', 
      '-- HTML part of the Component', 
      '-- styles of the Component', 
      `- ngOnChanges() - ngOnInit() most popular - ngDoCheck()- ngAfterContentInit() 
      - ngAfterContentChecked() - ngAfterViewInit() - ngAfterViewChecked() - ngOnDestroy()`,
      '-- Component Tree - is all components in the appn in a tree branching structure with each Component having a CD mechanism',
      '--- applied to every Component  to detect when the Component properties have changed ',
      'this refs all properties or methods or events of a Component',
      'generate a new Component'
    ],
    ['Directives let us define a different style (attribute) or add or remove parts to HTML (template) but normally dont have templates',
      '@Directive({})',
      '- attribute-directives', 
      '- template-directives *ngIf - *nfFor() ',
         '<div *ngIf="let x === 1; else elsePart"></div> <ng-template #elsePart>',
         '<div *nfFor="x of List"></div>',
         '<div *ngSwitch with case statements',
      '- Components are a form of Directive but have a template'],
    ['Why Pipes', 
      'transform data for display',
      '- only applied in template',
      '-- template',
     '- Pure', 
     '- Impure',
    'Custom Pipes', 
    '@Pipe({})','-- custom transformation',
    'Date - UpperCase - LowerCase - Currency - Decimal - Percentage - Async'],
    ['- implemented as a class with @Injectable decorator','simplifies Components',
    'Reuseability in other Components',
     '- Services are injected into Components via the constructor', '@Injectable({})', '- Module or Component','nesting services','- Sharing',
      'fetching data from a server - logging - validating user input ', 'class with injectable decorator','@Injectable({providedIn: \'root\'})','other values','privders:[MyService]'], 
    ['Decorators',
     '- Metadata',
     '- Annotations', 
     '- Class',
     '- @Component - @Directive @Pipe @Injectable  @NgModule - @Input @Output @ViewChild @ContentChild '
    ], 
    ['Interfaces - define a contract with properties and or methods -', 
    ' - export interface IGame{ gameId: number, gameName: string, gameCode: string, etc. }', 
      'Classes - can implement interfaces and must bind by the contract - can have constructor| properties| methods| events',
      '- constructor - important for DI of services', 
      '- properties - class data - can be private - default public', 
      '- methods - functions on the class', 
      '- events - ', 
      '-- this to ref the class object properties and methods'],
    ['- TypeScript Compiler - MS - transpiles ts with type information to js files', 
    '- .ts files - files with Type Infon - makes data TypeSafe', 
    '- tsconfig.json - file with this ids root path - CompilerOptions - AngularCompilerOptions', 
    '-- CompilerOptions',
    '-- AngularCompilerOptions',
    '- JS files - ES5 files - with std JavaScript' , 
    '- ngc - (Angular Compiler ) uses tsc to transpile ts to js files'],
    ['- package.json', 
    '- angular.json', 
    '-- dist folder',
    '-- node_modules folder' ],
    ['- String interpolation {{x}}',
    '- property binding[]',
    '- event binding()', 
    '- 2-way data binding'],
    ['Why Style - color-size-position', 
    '- CSS', 
    '-- CSS-Box-Model','-- margins','-- padding','-- borders','-- content',
    'inline - ext', 
    'ngStyle',
    'ngClass', 
    '- SCSS - variables etc.','-- variables', '-- functions()', '-- mixins','inheritance',
    'ViewEncapsulation'],
    ['Angular/CLI','- Building', '- Serving the Browser port'],
    ['Modules', 'NgModule configure the injector and the compiler and help organize related things together', 
    '@NgModule({}) decorator',
    '- declares relavent Components', '- imports Modules','exports Modules', 
    '- Can define Service Providers',
    '- required by every Ang appn',
    '- Lazy Loading - uses Feature Modules and Shared Modules'],
    ['Life Cycle Hooks - ','- instantiates class', '- renders view + child views','- CD','- updates View + Component Instance','Parts -',
     '- ngOnChanges(changes: SimpleChanges) - called many times - when Ang sets/resets data bound Input properties - changes to input properties', 
     '- ngOnInit() most popular (called only once!) C- Initializes the Comp/Directive after Ang 1st displays data bound properties + sets Input property  ',
     '- ngDoCheck() - Detect and Act upon changes that Ang cant detect on its own - Called immed after ngOnChanges() on every CD run + after ngOnInt() on 1st run', 
     '- ngAfterContentInit() - (called once after ngDoCheck()) Responds after Ang projects ext content into View or view containing Directive', 
     '- ngAfterContentChecked() - Responds after Ang checks content projected into Comp/Dir - after all ngDoChecks + ngAfterContentInit()', 
     '- ngAfterViewInit() - (called once after ngAfterContentChecked) Responds after Ang Initialises Comp View + Child Views      ', 
     '- ngAfterViewChecked() - Responds after Ang checks Comp View + Child Views - (After every ngAfterContentChecked + ngAfterViewInit()_',
     '- ngOnDestroy() - Cleanup just before Comp - Unsubscribes Observables - detach event handlers - avoid memory leaks   '],  
     ['ComponentRouter - to handle the navigation from 1 view to the next -','- interprets a browser URL to change View', 'routes:Routes = [{path:"first-comp",component: FirstComponent}]','<base href=\/"\">', '-- HTML5 Urls', '- <router-outlet></router-outlet> location where the router links will go', '- <a routerLink="/first_comp">link</a>', 
     ' -- ','- Routes','- RouterModule', '-- @angular/router', 'RouterModule.forRoot(routes)','RouterModule.forChild(routes) - lazy load the Component or Module',
     ' -- ','- get Route Info','-- ActivatedRoute','-- ActivatedRouteSnapshot','-- RouterStateSnapshot','-- .snapshot.paramMap.get(\'id\') ','-- ParamMap','- Wildcard Routes **','-- PageNotFoundComponent','redirectTo()', 
     ' -- ','- Router Guards','Componentless-routes','-- 5 Guard options','--- canActivate','--- canActivateChild','--- canDeactivate','--- Resolve','--- CanLoad', 
     ' -- ','- When a router navigates to a new Comp view - it updates browser location and history with URL for view - ', '- for modern browsers - HTML5 History push state - no server page request','-- older browsers - use # for no server request - localhost:3002/src/#/crisis-center',
     '-- LocationStrategy','--- PathLocationStrategy','---- HTML5 style navigation','--- HashLocationStrategy', '---- useHash:true',
     ' -- ','-- pre-fetches data before deciding if to jump to the URL or not', '-- create a new Component but include rooting in it','-- The router is used for Lazy Loading'],
    ['Lazy Loading - ', '-- Initially only Modules could be Lazy Loaded (but now Components can too)', '-- browser URL','RouterModule.forChild()',
    'children', '- Feature Modules','- Shared Modules','-- PreloadingStrategy','--- PreloadAllModules - to initially fetch all modules', 
    ' -- ','-- Lazy Load Components (not Modules)','- async-await is used for lazy loading Components','---  async getLazy2() {this.viewContainerRef.clear(); const { Lazy2Component } = await import(\'./lazy2.component\'); this.viewContainerRef.createComponent( this.cfr.resolveComponentFactory(Lazy2Component));}','--- Simplified in Angular 13'],
    ['Change Detection is a builtin framework feature that ensures auto sync between changes to data and the view','- ngZone', '- manual CD', 
    '- compares the template expression values before + after an event - for all components of the Component tree','- onPush', '- without ngZone'],
    ['AoT is better due to - ','Compile time build', 'No need for Compiler', '3 Phases - 1:Code Analysis- 2:Code generation- 3:Template type checking',
    '-1 AOT Collector - analyzes the metadata and reps in best manner - recorded in the metadata.json file',
    '-2 Metadata collected from the Code Analysis phase is interpreted by Compilers Static Reflector + check for metadata errors ',
    '-3 Angular template compiler - uses tsc to validate binding expns in template - fullTemplateTypeCheck: true in tsconfig',
    'Benefits are 1: Executable code loaded - 2: inlines all ext HTML+CSS - 3: finds template errors - 4: Reduces injection attacks - 5: Reduces bundle load of Frmwk'],
    ['Remove dead code from the bundle - unused bits', 
    'Ivy tree-shakes - DI-CP-View - Content queries - Animations Pipes i18n core frmwork services LCHs - easier to ship librarries', 
    'View Engine tree-shakes - Static analysis of code and then compiles whats left'],  
     ['APF - Ang Package Format', 
    'npm packages',
    'Tooling support',
    'ES versions',
    'Angular CLI',
    'ng-packagr',   
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
    '- adv Tree Shakeable - Reduced size - faster compilation - enhanced testing + debugging - easier dyn comp loading - mobile exp'],
    ['- ViewEngine old - required to transpile .ts to .js', '- abstract base class - to render template to DOM - can be overridden for Custom Rendering - RendererFactory2', '3 parts -', ' -1: Template Parsing + creating Data Structure', ' 2: passing sructure into Interpreter + Tree Shaking'  ,' 3: Compilation' , '- Interpreter', '--metadata.json file',
    'contains the static repn of code in a Component','JIT or AOT'],
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
    ['Why forms - to handle user input - eg Login - Register',
    ' -- ',
    '- Template Forms', '-- Template directives for object Model','-- ngForm', 'more complex test setup','-- complex validation','',
    ' -- ',
    ' --- Template Validation',
    ' -- ',
    '- Reactive Forms','-- direct access to Object Model','-- Synchronous data flow','simpler test setup','-- simpler validation','-- Data','= new FormControl("")',
    ' -- ',
    '--- Reactive Validation'
  ],
    ['State Management - Reactive State for Angular - a group of angular libraries for Reactive extensions - inspired by the Redux pattern - derives state using RxJS - helps simplify appns with many user interactions and multiple data sources',
    'BehaviorSubject',
    'appn State',
    '- enforces a unidirectional sequence of operations ',
    '- ngrx/Store is a library for managing the main appn State - A reactive state mgmt library powered by RxJS - manages flow of data through appn - actions dispatched - reducers act on them and mutate the Store',
    '- Reducer are pure functions which take an action and output data to state or on to Effects (if async)',
    '- Action - acts as input to Reducer to produce new State',
    '- Selector - Read state data - are pure functions for getting slices of the state from the Store - how appns listen to State Changes', 
    '- Effects - (side Effects - commn with ext API HTTP or dispatching another action  ) asynchronous parts of code which take effect after Reducer functions - DJ of the NGRX dancefloor', 
    '-- Entity - data - ',
    '-- Data - Simplifying the case for many CRUD operations',
     '--- if the state is confined to one Component then this can be used',
    'implementation of ngrx ', '- Auth0 SDK'
    ], 
    ['Whats View DOM', '- ViewChild', '- ViewChildren'],
    ['Whats Content DOM', '- ContentChild', '- ContentChildren'],
    ['Whats transclusion', 'ng-content','- Single Slot','- Multi-Slot','- Conditional'],
    ['CRUD', 'HttpClient', 'HttpInterceptors', 'Angular-web-api-'],
    ['Parent Child commn','- @Input()', '- @Output EventEmitter'],
    ['Parts','- Working tree', '- Stage area','- Local Repository','- Remote Repository','Branches','Fork','stash',
    'Commands - ','- Add','- fetch','- commit','- init','- push','- pull','- log','- status',''], 
   
    ['Why Test', '- Unit', '-- spec.ts', '--- describe', '--- beforeEach()', '--- it - fit - xit', '--- afterEach', '---- TestBed', '-- Jasmine', '-- Karma', '-- Mocking', '--- Wallaby', 
    '- Integration','-- Shallow','-- Deep', '- End to End', '-- Protractor', '-- Cypress'],
    ['Security', 
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
    ['Why CI/CD', 
  '- CI - Continuous Integration',
  '- CD - Continuous Development', 
  '- CD - Continuous Delivery', 
  '-- Jenkins'],
    ['Webpack', 
    'module bundler',
    'Terser plugin', 
    'Entry Points -', 
    '-- Entry',
    '-- Output', 
    'Loaders',
    'Plugins'],
    ['- AWS - Amazon Web Services', '- Azure'],
    ['Accessability','- ARIA attrbutes', '- WCAG', '- POUR'],
   ['Ang Material', 'Ang CDK'],
    ['Flex-layout', 
        'display:flex'],
    ['Progressive Web Applications - ',
      '- Service Workers'
    ],
    ['let us Mix languages together - eg Angular and React','- Custom Elements','- Web Components', '- Framework Agnostic','polyfills',
    'CustomElementRegistry','- createCustomElement() API','NgElementConstructor i/f()','customElements.define()',  '-- CD ftn', '-- data binding','bootstrap to DOM'
    ,'-- Dynamic Content','- NgElement class','-- let us add Type Infon to the NgElement class'],
    ['Web Workers permit multithreading in Angular', 'Threading', 
      ''],
    ['Angular Universal is a UI Framework - Accessability - mobile friendly','- SSR - Server Side Rendering'],
    ['How - Angular Performance - ','- sourceMap Explorer','LCP - largest Component Paint  ',' - Lazy Loading','- Angular Universal','- PWA-SW','- Ivy', '- AOT Compilation','- Tree-Shaking', '- Modern Angular'],
    ['RESTitutional file transfer','- Swagger', '- GraphQL'],
    ['Why Micro-FEs','- WebPack5', '- Module Federation'],  

    ['- new WWW -','', ''] 
];
 

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
