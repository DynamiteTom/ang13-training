
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

const features = `
    'angular',
    'classes',
    'Decorators', 
    '--- component', 
    '--- directive',
    '--- pipes',
    '--- simple services',
    'appn root',
    'package managers',
    'interf_class',
    'JavaScript', 
    'EcmaScript',
    'TypeScript',    
    'Angular CLI',
    'lodash',
    'Important-files',
    'InnerHtml',
    'Events - DOM vs Custom',
    'Template ref variables',
    'Data binding',
    'Styles_CSS_SCSS',
    '--- SCSS',
    'ViewEncapsulation',
    'modules',   
    '--- Bootstrapping',
    'life-cycle-hooks',
    'routing_router',
    '@Input_@Output',
    'Dependency Injection',
    'Event Bubbling',
    'funny operators',
    ' -- ',
    'lazy-loading', 
    'Change Detection',
    'AoT-compilation', 
    'tree-shaking',
    'APF',
    'ESBuild',
    'Ivy_Locality', 
    '--- Locality',
    '--- Incremental DOM',
    'View-Engine',
    'Template Rendering',
    'Promises',
    'Observables',
    'Subjects',
    'RxJS_',
    'Higher-Order-Map  -ftns',
    'Forms',
    '--- Template Forms',
    '--- Reactive Forms',
    'ElementRef',
    'ViewContainerRef',
    'ViewDOM',
    'ContentDOM',
    'Content-Projection',
    'HTTP_HttpClient',
    '--- HttpClient',
    '--- HttpInterceptors'
    'Custom Libraries',  
    'Caching',
    'Storage mechanisms',
    'Nx Nrwl',
    'CQRS', 
    'ngrx_CRUD',
    ' -- ',
    'install app from github',
    'Ang main libraries',
    'Git_distd-VCS',
    'Environment variables',
    'Testing_unit',
    '--- Unit Testing',
    '--- Integration Testing',
    '--- End to End Testing',
    'TDD/BDD/DDD',
    'Design Patterns',
    'Security',
    'Authorizatn/Authenticatn',
    'Node.js',
    'npm',
    'express',
    'VS-Code',
    'Angular Language Service',
    'TSServer',
    'ALS (Language Service)',
    'ESLint',
    'CI_CD_Jenkins',
    '--- DevOps',
    'Webpack',
    'Machine Learning',  
    'Cloud_AWS_Azure',
    '--- AWS',
    '--- Azure',
    '--- Google',
    '--- CloudFlare',
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
    'Debugging Angular',
    '-- Time Travelling Debugger',
    '-- Chrome Devtools',
    'Angular Performance',
    '- SourceMap Explorer',
    'REST_APIs_Swagger_Postman',
    'GraphQL',
    'Real Time Appns',
    'Ag-grid',
    'Databases',
    'Docker',
    'Kubernettes',
    'Web 3',
    'Micro Frontends',
    'Angular Versions'
 `;

const subTopics = [
   ['Angular',
    '--- JSF |  SPA | Front End appns', 
    ' -- ',
    '--- main parts',
    '----- Components',
    '--------- Templates',
    '----- Directives',
    '----- Pipes',
    '----- Services & DI',
    '------- DI (Dependency Injection)',
    ' -- ',
    '--- Angular/CLI',
    '------ Schematics',
    '------ Webpack',
    ' -- ',
    '--- Modules',
    '------ Lazy Loading',
    ' -- ',
    '--- EcmaScript',
    '------ ESM (ES Modules)',
    '--------- Vite using ESBuild',
    ' -- ',
    '--- TypeScript',
    ' -- ',
    '--- Template Ref Variables',
    ' -- ',
    '--- Data Binding',
    '--- Life Cycle Hooks',
    ' -- ',
    '--- Routing',
    ' -- ',
    '--- Styles CSS|SCSS',
    ' -- ',
    '--- Promises',
    '--- Observables',
    '--- Subjects',
    ' -- ',
    '- Decorators',
    '---- @Input | @Output',
    '---- @ViewContainerRef',
    '---- @ViewChild',
    '---- @ContentChild',
    '---- Content Projection',
   ' -- ',
   '----- Template Forms',
   '----- Reactive Forms',
   ' -- ',
    '--- Change Detection',
    ' -- ',
    '--- design pattern',
    ' -- ',
    '--- ALS (Lang Service)',
    ' -- ',
    '--- ESLint',
    ' -- ',
    '--- git',
    ' -- ',
    '--- Agile',  
    '------ JIRA boards',
    '------ Kanban boards',
    ' -- ',
    '--- Cloud/AWS',
    '------ Azure',
    ' -- ',
    '--- CI/CD',
    ' -- ',
    '--- ivy', 
    '--- View Engine',
    ' -- ', 
    '---- CQRS',
   ' -- ', 
    '--- ngrx - State Managmt',
    ' -- ',
    '--- Angular Material',
    '--- Angular/elements', 
    '--- Angular/PWA/SW',
    '--- Angular Universal',
    '--- Angular/WebWorkers'
    ],
    ['classes',
     '--- constructor()',
     '--- properties',
     '--- methods',
     '------- TypeScript',
     '----------- data types',
     ' -- ',
     '--- Decorators ', 
     '------- metadata',
     '------- annotations',
     ' -- ',
     '--- constants',
     '--- enums',
     '--- interfaces',
     ' -- ',
     '--- DataBinding',
     '------ interpolation',
     '------ property binding []',
     '------ event binding ()',
     '------ two way binding',
     ' -- ',
     '--- View DOM',
     '--- Content DOM',
     '--- Transclusion',
     ' -- ',
     '--- implements',
     '------ interface',
     '--- extends',
     '------ inheritance'    
    ],
    ['Components - ',
    '--- @Component({})',
    '--- must have a template',
    '----- accessing a DOM el',
    '------- @ViewChild()',
    '--- Most important Ang el', 
    '--- class',
    '------ constructor(){}',
    '------ properties',
    '------ methods',
    '------ Services',
    '------ Directives',
    '------ Observables',
    '------ Subjects',
    ' -- ', 
    '--- template',
    '------- pipes',
    ' -- ', 
    '--- Decorators',
    '------ @Component({})', 
    '----------- selector', 
    '----------- templateUrl or template', 
    '----------- styleUrl',
    '----------- providers',
    '----------- standalone',
    ' -- ', 
    '--- Template Ref Variable', 
    ' -- ', 
    '--- Data Binding', 
    ' -- ', 
    '--- LC-hooks',
    ' -- ', 
    '--- Component Tree',
    ' -- ', 
    '--- Change detection',
    ' -- ', 
    '--- this',
    '------- globalThis', 
    ' -- ', 
    '--- ng g c xyz',
    ' -- ',
    '------- Smart Components',
    '----------- keep track of state',
    '------- how components work together',
    '------- Dumb Components - presentation components'
   ],
    ['Directives',
     '--- @Directive({})', 
     '------- have no views (template)',
     '------- work directly with the el - ElementRef',
     '------- 2 Directive Types',
     '----------- attribute-directives', 
     '----------- template-directives *ngIf',
     ' -- ',
     ' --- Types of Template Directives',
     '------- *ngIf',
     '------------ *ngIf ; else ng-tmp',
     '---------------- ng-template #ng-tmp',
     ' -- ', 
     '-------- *ngFor',
     '------------ trackBy performance',
     ' -- ',   
     '-------- *ngSwitch()',
     '------------- case',
     ' -- ', 
     '-------- ng-template <ng-template>',
     '--------- not displayed by default',
     '------------ determine when display',
     '------------ has 1+ input named values',
     '----------- template vars', 
     '----------- use of let-x',
     '--- section off ng-templae',
    '-------- ng-container <ng-container',
    '------------ no element displayed',
    '-------- ng-content <ng-content>',
    '---------- transclusion',
    '-------- ngTemplateOutlet',
    '------------ ',
    '--- ng-template instantiated',
    '-------- named inputs bound to vars', 
    '------ ng-template uses',
    '--------- else part of *ngIf',
    '-------- with ngForOf',
    ' -- ', 
    '--- Components'
    ],
    ['Pipes',
    '--- CD (Change Detection)',
    '--- transforms data',
    '--- in templates',
    ' -- ',
    '--- ng g p myUpper',
    ' -- ',
    '---- | ',
    '---- display',
    '---- only declared once',
    '---- list built-in pipes',
    '-------- parameters',
    '----------- name',
    '----------- pure',
    '-------- chaining pipes',
    ' -- ',
    '--- inbuilt Pipes',
    '------- DatePipe',
    '------- CurrencyPipe',
    '------- DecimalPipe',
    '------- UpperCasePipe',
    '------- LowerCasePipe',
    '------- Percent  Pipe',
    ' -- ',
    '----- async Pipe - Observable',
   ' -- ', 
    '--- Pure',
    '------- CD to pipe pars', 
    '------- pure: true - default',
    '--- Impure',
    '------- every CD cycle',
    '------- pure: false',  
    ' -- ',  
    '--- Custom Pipes', 
    '-------- @Pipe({})',
    '-------- PipeTransform - transform',
    '-------- Declared once',
    '------------ used throughout app',
    '-------- @Pipe({})',
    '--------- attributes - name, pure',  
    ' -- ',  
    '------ pipe wrt ftn',
    '------ pipe parameters'
  ],
  ['Services and DI',
    '--- wrt Components',
    '--- A Service',
    '--- @Injectable({})',
    '------- providedIn: \'root\'',
    '------- injectors',
    '------- provider', 
    '------ service',
    '---------- Reuse',
    ' -- ',
    '--- providers section',
    '------- Appn or Component',
    '----- Appn - Module',
    '-------- @NgModule({})',
    '----- Component',
    '-------- @Component({})',
    '--- Injecting a Service',
    '------- Component constructor',
    ' -- ',
    '- DI (Dependency Injection)',
    '--- Application based DI',
    '--- Component based DI',
    '---- Providers',        
    '----- dependency',
    '------- Service Instance',
    '- nesting',
    '- Sharing',
    'typical tasks',
    ' -- ',
    '- Providing a Service', 
    '--- @injectable({ providedIn: \'root\'})',
    '------- providedIn: \'root\'',
    '------- providedIn: \'platform\'',
    '------- providedIn: \'any\'',
    '------- providedIn: \'<T>\'',
    'providers'
    ], 
    ['Application root',
     '--- root level Component',
     '------- index.html | app-root',
     '--- root folder - angular.json',   
     '--- src/',
     '--- root module - AppModule',

     
    ],
    ['Dependency Injection',
    '--- DI Guide',
    '--- Loosely coupled architecture',
    ' -- ',
    '---- DI - Helps in Unit Testing',
    '--',
    '--- 3 types of DI',
    '------ 1 Constructor injection',
    '------ 2 Method injection',
    '------ 3 Property injection',
    ' -- ',
    '--- Providers',
    '-------- Dependencies (Services)',
    '----------- class | ftn| value| alias',
    '-------- Metadata - accept deps',
    ' -- ',
    '-------- How create dep instance',
    '----------- provider-definitin key',    
    '----------- 1:   useClass (Class prov)',
    '----------- 2:   useValue (Value prov)',
    '----------- 3:   useFactory (Factory prov)',
    '----------- 4:   useExisting (Alias prov)',
    '----------- providers and provider',
    ' -- ',
    '----- Sandboxing',
    '-------- multiple services',
    ' -- ',
    '--- Injector',
    '-------  Configure inj with Providers',
    '----------- create|obtain dependencies',
    '----------- injector instance per class',
    '-------- map of internal deps',
    '------------ DI Token is map key',
    '---------------- Runtime version of dep',
    '--------------- DI token on Injector',
    '--------------- Runtime value',
    '--------------- ProviderToken',
    '--------------- Type| String| Injection',
    ' -- ',
    '-------- StaticProvider',
    '------------ in Injector abstract class',
    '------------ provides Tokens to injector',
  
    ' -- ',
  
    '------- Injector.create()',
    '------------ get()',
    ' -- ',
    '--- Injectors', 
    '------ backbone of DI framework',
    '------- injectors - key-value pairs ',
    '------ container of dep instances',
    ' -- ',
    '------- for each Component/Directive',
    '------- for each Lazy loaded Modules',
    ' -- ',
    '------ 2 types of Injector Hierarchy DI system',
    '--------- 2 Injector trees',
 '----1: ModuleInjector (14- EnvironmentInjector)',
    '---------- A: Providers Metadata and @NgModule',  
    '---------------- null injector - top',  
    '---------------- Platform injector',
    '---------------- Root Module injector',
    ' -- ',
    '---------- B: @Injectable({providedIn:\'\'})',
    ' -- ',
    '------- Automatic Provisioning',
    '----------- @Injectable({providedIn: })',
    '------------- Providing a Service', 
    '---------------- providedIn: \'root\'',
    '---------------- providedIn: \'any\'',
    '---------------- providedIn: \'platform\'',
    '---------------- providedIn: \'any<T>\'',
    '------------ other values',
    ' -- ',
   
    '-----------',
    '----2: ElementInjector (Ivy NodeInjector)',
    ' -- ',
    '--------- NodeInjector implements Injector',
    '--------- Injector Tree',
    '------------ parallel Component Tree',
    '--------- providers',
    '--------- viewProviders',
    '--------- Injector Bubbling',
    '------------ Components local injector',
    '------------ root injector',
    '--- Resolution Modifiers',
    '----- @Optional()',
    '----- @SkipSelf()',
    '----- @Host()',
    '----- @Self()',
    '----------- object refs to',
    '------------- TNode - TView.data array',
    '------------- LView.   - array',
    ' -- ',
    '----------- using Bloom filter',
    '--- DI - Dep Injection',
    '--- Design pattern',
    '------- DI Tokens',
    '------------ Injectors',
    '--- DI parts',
    '---- Dependency Provider',
    '---- Defining Providers',
    '------ provide example',
    '------ provider-definition key',
    ' -- ',
    '--- Providers',
    '-- Providers with deps',
    '--- aliasing class providers',
    '--- aliasing class interface',
    '--- aliasing multi class i/fs',
    '--- injecting an Object',
    '--- injecting a config Object',
    '--- InjectionToken object',
    '--- interfaces and DI',
    '---- Using factory providers'
  ],
 
  ['Decorators',
    '- Metadata',
    '- Annotations', 
    '- Class', 
    '-- Types of decorators',
    ' -- ',
    '--- Class',
    '----- @Component()',
    '----- @Directive()',
    '----- @Pipe()',
    '----- @Injectable()',
    '----- @NgModule()',
    ' -- ',
    '--- Property',
    '----- @Input()',
    '------- Parent to child',
    '------- 3 ways to use',
    '------- 1: std',
    '------- 2: aliase',
    '------- 3: getter | setter',
    ' -- ',
    '----- @Output()',
    '------- Child to Parent',
    '------- EventEmitter()',
    '--------- Ex',
    '-------- using emit()',
    '---------- using myOutput event',
    ' -- ',
    '----- @HostBinding()',
    '------- host property binding',
    '------- binds prop to host el',
    '---------- Ex @HostBinding()',
    '------------ value of toggle',
    '--------- on change - checked by CD',
    ' -- ',
    '----- @ContentChild()', 
    '------- selects projected content',
    '---------- Content DOM',
    ' -- ',
    '-------  @ContentChildren()',
    '--------- fetch a QueryList',
    '----------- configure content query',
    '------------- list of queries',
    ' -- ', 
    '----- @ViewChild()', 
    '------- simple @ViewChild Ex',
    '------- config a View Query', 
    '--------- from template of Comp',    
    '--------- View DOM tree',
    '----------- instance in parent comp',
    '---- parent comp access methods',
    '---- ngAfterViewInit LCH',  
    '------ read - ',
    '------ static - ',
    ' -- ',
    '---- Ex @ViewChild', 
    ' -- ',
    '------- @ViewChildren()',
    '------- child els View DOM',
    '--------- View Queries',
    ' -- ',
    '--- Method',
    '----- @HostListener()',
    '------- provides an event',
    '--------- event handler ',
    ' -- ',
    '--- Parameter',
    '----- @Inject()',
    '------- DI Token',
    '----- @Self()',
    '------- local injector',
    '----- @Optional()',
    '------- returns null if not found',
    '----- @skipSelf()',
    '------- parent injector',
    '----- @Host()',
    '------- similar to @Self',
    '-------  search till host',
    '----- @Override()',
    '------- overrides method',
    ' -- ',
    'Decorator examples'
    ],
    ['Interfaces',    
      '- export', 
    '- interface defn', 'Classes','- constructor', '- properties', '- methods', '- events', '-- this'
  ],
  ['JavaScript',
  '--- browser scripting lang',
  '--- Interpreter based',
  '--- data types',  
  '--- variables var x',
  '--- const',
  '--- static',
  '--- case sensitive',
  '--- control statemen  ts',
  '--- dynamic typing',
  '--- operators',  
  '--- first class citizens',
  '------ Objects',
  '------ Functions',
  '--- Event handling',
  '--- Closures',
  '--- Hoisting',
  '--- IIFE',
  '--- Array features',
  '------ length',
  '------ sort()',
  '------ toString()',
  '------ filter()',
  '------ push()',
  '------ pop()',
  '------ indexOf()',
  '------ splice()',
  '------ slice()',
  '------ shift()',
  '------ unshift()',
  '------ fill()',
  '------ every()',
  '------ entries()',
  '------ join()',
  '------ concat()',
  '--- Exs',
  '------ Fibinaci sequence',    
  ],
  ['ES EcmaScript - modern JavaScript',
        '-- modern JavaScript',
        '---- ES6 (ES 2015)',
        '------ let const var',
        '------ fat arrow ftns (x)=> x * 2;',
        '------ For/of',
        '------ Map Objects',
        '------ Set Objects',
        '------ Classes',
        '------ Promises',
        '------ defaul params',
        '------ ftn rest params',
        '------ String - includes ...',
        '-------- string.includes()',
        '-------- string.startsWith()',
        '-------- string.endsWith()',
        '------ Array - from | keys| ...', 
        '-------- array.from()',
        '-------- array.keys()',
        '------- array.find()',
        '-------- array.findIndex()',
        '------ Object entries',
        '------ JS Modules',
        ' -- ',
        '--- JavaScript features'
      ],
    ['TypeScript',
    '- Object Oriented Language',
    '- Strong Data Types',
    '--- VS Code',
    '--- Compile time - Type checking',
    '----- Type Annotations',
    '------- enforces type checking',
    '- JS Primitives',
    '--- string',
    '--- number',
    '--- boolean',   
    '- JS primitive values',
    '--- null',
    '--- undefined',
    '--- Type Safe - ',
    '--- No Casting',
    '--- No Runtime type errors',
    ' -- ',
    '- Basic Data Types',
    '--- JS primitives',
    '--- JS Primitive Values',
    `----- strictNullChecks -  null or undefined
         <br/>null - 
         <br/>undefined - 
    `,
    `--- Enums`,

    '--- Array',
    '--- any - avoid',
    '----- unknown (TypeSafe)',
    '--- Object Type',
    '----- interfaces | classes',
    '--- type vs inteface',
    '------ partial types - partial&lt;T>',
    '------ Type aliases',
    '---------- path aliases',
    ' -- ',  
    '--- Advanced Types',
    '--- Conditional Types using ?',
    '--- Generics using <T>',
    '--- Union Types using |',
    '----- Composite Data Types',
    '----- Narrowing',
    '-------  Type Guards',
    '----------- conditional value check',
    '----------- typeof x',
    '----------- instanceof y',
    '----------- in type',
    '----------- type guard ftn with predicate',
    '----------- type guard ftn with assertion  ',
    '--- Distributive Conditional Types',
    '--- Inferred Types',    
    '--- Reduce()',
    '- Duck Typing',
    '- tooling -     ',
    '- tsc', 
    '- .ts files', 
    '-- TS files transpile down to plain JS (no concept of typpes)', 
    '- tsconfig.json - configures TS files in Angular app',
    '-- compilerOptions',
    '-- angularCompilerOptions',
    '---    fullTemplateTypeCheck: true', 
    '- JS files', '- ngc',
    '- Barrels (index.ts)',
    '-- index.ts',
    '- Custom Objec Types'
    ],
    ['Angular CLI',
      '-- initialise | develop| scaffold',
      '---- from a cmd shell',
      '------ Installation - npm install',
      ' -- ',
      '--- Commands',
      '----- ng new',
      '--------- options',
      '------------- -S=true skip tests',
      '--------- npm cache clean -f',
      '--------- npm audit fix -f',
      ' -- ',
      '----- ng add',
      ' -- ',
      '----- ng generate',
      ' -- ',
      '----- ng build',
      ' -- ',
      '----- ng update',
      ' -- ',
      '----- ng serve',
      '------- uses build dev-server',
      ' -- ',
      '----- ng test',
      ' -- ',
      '----- ng deploy',
      ' -- ',
      '----- hg help',  
      ' -- ',
      '---- uses Schematics',
      '-------- virtual file system',
      '----------- tree',
      '----------- base + staging area (changes)',
      '-------- Rule object = transformations',
      '----------  4 Actions',
      '----------  SchematicContext',
      '------------- logging API',
      '------------- merge strategy',
      ' -- ',
      '---- uses Webpack',
      ' ------ uses Webpack (5 since Ang 12)',
      '--------- long term caching',

      '--------- Module Federation', 
      '------------ Add Module at runtime',
      '------------ Work on diff builds indeptly',
      '--------- Custom Webpack'  
    ],
    ['lodash',
    '--- simplifies JS ',
    '--- simplifies manipulating TS types',
    '--- ES6 replacements',
    '--- Map | Filter |  Reduce'
    ],
    ['important files',
    '--- package.json', 
    '--- angular.json', 
    '--- tsconfig.json',
    '------- TypeScript confign file',
    '--- index.html',
    '--- main.js',
    '--- dist folder',
    '------ main.js',
    '---------- lazy loading',
    '---------- preloadingStrategy',
    '------ runtime.js',
    '---------- webpack bundler',
    '------ scripts.js',
    '------ styles.js',
    '------ polyfills.js',
    '------ vendor.js',
    '--- node_modules folder',
    '--- core.d.ts' 
    ],
    ['InnerHtml'
    ],
    ['Events - DOM vs Custom',
      '---DOM Events ',
      '---- Bubble up',
      ' -- ',
      '--- Custom Events',
      '---- Dont bubble up',
      '------ only available to parent',  
      '-----can bubble up with element.dispatchEvent()',  
      ' -- ',
      '---- possible solutions',
      '------ ngrx store',
    ],
    ['Template Ref Variables',
      '--- use of the # character',
      '---4 types of variables',
      '----- DOM el in template',
      '----- Directive | Component',
      '----- TemplateRef in ng-template',
      '----- Web Component',
    ],
    ['Data Binding',
    '--- String interpolation {{x}}',
    'ex',
    '--- property binding[]',
    'ex',
    '--- event binding()',
    'ex', 
    '--- 2-way data binding','ex'
  ],  
  ['Sstyle - color-size-position', 
    '--- position',
    '--- CSS',
    ' -- ', 
    '------- CSS-Box-Model',
    '---------- margins',
    '---------- padding',
    '---------- borders',
    '---------- content',
    ' -- ',     
    '------- Display property', 
    '---------- block',
    '---------- inline',
    '---------- none',
    ' -- ',     
    '------ Z-index', 
    ' -- ',     
    '------ inline - ext', 
    '---------- ngStyle',
    '---------- ngClass', 
    ' -- ',
    '---- Document.querySelector()',
    ' -- ',
     '--- SCSS - variables etc.',
     '------- variables', 
     '------- functions()', 
     '------- mixins',
     '------- inheritance', 
     ' -- ',
     '----ViewEncapsulation'
     ],
     ['SCSS (Sassy CSS)',
     '--- variables', 
     '--- functions()', 
     '--- mixins',
     '--- inheritance'
    ],
    ['ViewEncapsulation',
     '--- Browser\'s builtin ShadowDOM',
     '------- ShadowRoot',
     '--- ',
     '------ ViewEncapsulation.ShadowDom',
     '------ ViewEncapsulation.Emulated',
     '---------- _nghost',
     '---------- _ngcontent',
     '------ ViewEncapsulation.None',
     '--- :host',
     '--- :host-context',
     '--- _content'
     ], 
     ['Modules',
     '--- NgModule', 
     '--- Angular vs JS modules',
     '------- Angular @NgModules',
     '------------ @NgModule decorator', 
     '------------ bootstrapping',
     '------------ main.ts',
     '------------ min 1 Module',
     '---------------- Lazy Loading',
     '------------ imports Modules',
     '------------ exports Modules',
     '------------ standalone: true',
     '----------------- declares Components',
     '------------- Libraries ', 
     '------------- Can define Service',
     '------------- dynamic imports (Ang 08)',
     '----------------- TS 2.4',
     '----------------- improves speed',
     '-------- JS Modules',
     '------------- CommonJS',
     '------------------ Node.js',
     '------------- ESMs',
     '------------------- Browsers or Node.js',
     '---------------- output-hashing',
     '---------------- type="module',
    ],
    ['Bootstrapping', 
    '--- initializing/loading appn',
    '---- platformBrowserDynamic()',
    '------- bootstrapModule()',
    '---------- root ModuleInjector (now R3Injector)',
    '------------ hierarchy of injectors',
    '---------- ElementInjector (now NodeInjector)',
    '------------ hier of Comp injectors', 
    '------- NullInjector',    
    ' -- ',
    '--- angular.json file',
     '------ Loading index.html etc.',
     '------ 3rd party libs + appn',
     '------ main.ts',
     '---------- platformBrowserDynamic',
     '---------- AppModule',
     '------------- BrowserModule',  
     '------------- AppRoutingModule',  
     '---------- AppComponent',  
     '------------- root Module/Component', 
     ' -- ',
     '----- faster appn',
     '----- APP_INITIALIZER',
     '-------- delays root comp render',
     '-------- StaticProvider[]',
     '-------- ENVIRONMENT_INITIALIZER',
     '-------- EnvironmentInjector (Ang 14)',
     '-------- RouterInjector (Ang 14)',
     ' -- ',
     '-- webpack --- 2 dep graphs',
     '---- 1: app.js',
     '---- 2: vender.js'
    ],
    ['Life Cycle Hooks',
    '--- rem with After',
    '--- Instantiates class',
    '--- Renders View + Child',
    '--- Change detection',
    '------- Updates View + Comp Instance',
     '------ imports @angular/core',
     'LCH parts',
     '------- ngOnChanges()', 
     '------- ngOnInit() most popular',
     '------- ngDoCheck()', 
     '------- ngAfterContentInit()', 
     '------- ngAfterContentChecked()', 
     '------- ngAfterViewInit()', 
     '------- ngAfterViewChecked()',
     '------- ngOnDestroy()'
    ],
    ['ComponentRouter', 
    '--- Routes: Route[]',
    '--- Routes path:\'x\' component: XXX',
    '------ children', 
    '--- router-outlet',
    '--- routerLink',   
    '--- RouterModule', 
    '------- @angular/router',
    '------- forRoot() - eager',
    '------- multiple outlets',
    ' -- ',
    '--- forChild() - Lazy loading',
    '------ loadChildren()',
    '------ Nested Routes',
    '--------- Routed Sub-Module',
    ' -- ',
    '<base href=\/"\">', 
    '-- HTML5 Urls', 
    ' -- ',
    '--- get Route Info',
    '------ ActivatedRoute',
    '------ ActivatedRouteSnapshot',
    '------ RouterStateSnapshot',
    '----- .snapshot.paramMap.get(\'id\') ',
    '-------- ParamMap',
    ' -- ',
    '--- Wildcard Routes **',
    '--- PageNotFoundComponent',
    '--- redirectTo()',
    ' -- ',
    '--- Router Guards', 
    '------ 5 Guard options',
    '----------- canActivate',
    '----------- canActivateChild',
    '----------- canDeactivate',
    '----------- Resolve',
    '----------- CanLoad',
    ' -- ',
    '------ ActivationStart',
    '------ ActivationEnd',
    '------ ChildActivationEnd', 
    '------ Componentless-routes',
    ' -- ',
    '--- history',
    '--- history.pushState',
    '--- older browsers',
    '--- LocationStrategy',
    '--- PathLocationStrategy',
    ' -- ',
    '--- HTML5 style navigation',
    '------ HashLocationStrategy', 
    '------ useHash:true',
    ' -- ',
    '--- Route Resolver', 
    '------ new Comp --routing',
    '------ Lazy Loading',
    ' -- ',
    '--- Angular 14 Route providers',
    '------  Inject()'
  ],
   ['Parent Child communication', 
    '--- @Input() decorator',
    '------- Property Binding - []', 
    '------- ngOnChanges()',
    ' -- ',
    '--- @Output()',
    '------ Event Binding - ()', 
    '------ EventEmitter()',
    ' -- ', 
    '-- 2 way data binding [()]', 
   ], 
  ['Event Bubbling',
  '--- Event propagation',
  '--- single handler on parent',
  '------- event first captured',
  '------- handled by inner el',
  '------- propagated to outer els',
  '--- btn in a Component',
  '--- events fired by children',
  '--- Dom vs Custom',
  '------ bubbling of DOM events',
  '------ but not Custom Events',
  '--- Event.stopPropagation()',
  '--- Event.stopImmediatePropagation()',
  '--- addEventListener()',
  ' -- ',
  '--- vs Event Capture',
  '------ captured by Outer element',
  '------ propagated by inner els'
  ],
   ['Funny Operators',
      'Non null operator !',
      'Safe navigation operator ?.',
      'Optional operator ?: ',
      'Ternary operator ? :',
      'Null Coalescence ??',
      'Template Ref Variable #'
    ],
    [' -- '],
    ['Lazy Loading',
    '- Modules',
    '-- browser URL',
    '-- forChild','-- children', 
    '--- Feature Modules',
    '---- generating modules',
    '---- generating comps in modules',
    '--- Shared Modules',
    '---- PreLoading Modules',
    '----- PreloadAllModules',
    ' -- ',
    'Lazy Load Components',
    '--- async await', 
    '--- await import',
    '--- simplified Ang13'
    ],
    ['Change Detection?',
    '--- zone.js',
    '--- zones',
    '--- execution contexts',
    '------- Browsers',
    '--- ngZone',
    ' -- ',
    '--- LC Hooks',
    '------- ngOnChanges()',
    '------- ngDoCheck()',
    ' -- ',
    'Browser exec flow | Node.js',
    '--- Event Loop',
    '----------MacroTasks',
    '----------- Changes to DOM',
    '----------- MicroTasks',
    '------------- created by promises',
    ' -- ',
    '- ChangeDetectorRef',
    '--- ngZone', 
    '------ service',
    '------ helps performance',
    '------ asynchronous tasks',
    '---------- runOutsideAngular()',
    '---------- run() - to re-enter',
    ' -- ',   
    '- ngZone methods',
    '--- isInAngularZone()',
    '--- assertInAngularZone()',
    '--- assertNotInAngularZone()',
    '--- hasPendingMacroTasks()',
    '--- hasPendingMicroTasks()',
    '--- isStable()',
    '--- onUnstable()',
    '--- onMicrotaskEmpty()',
    '--- onStable()',
    '--- onError()',
    '--- run<T>()',
    '--- runTask<T>()',
    '--- runGuarded<T>()',
    '--- runOutsideAngular<T>()',
    ' -- ',
    '--- manual CD', 
    '------ automatic CD',
    '--- onPush', 
    '--- without ngZone',
    '------- NgZone.runOutsideAngular()',
    ' -- ',
    '--- ChangeDetectionStrategy',
    '------- OnPush',
    '------- Default',
    ' -- ',
    '--- MacroTasks',
    '--- MicroTasks',
    '------- Promises',
    ' -- ',  
    '--- rx-angular',
    '------- rx-angular/cdk',
    
    '------- rx-angular/state',  

    '------- @rx-angular/template',
    '---------- let directive *rxLet',
    '---------- PushPipe ( | push) aka async',
    '---------- unpatch wrt runOutsideZone',
    '---------- rendering strategies'
  ],
    ['AOT Compilation',
    '--- Compile time build', 
    '--- No need for Compiler',
    ' -- ',
    '--- 3 Phases',
    '------ 1:Code Analysis',
    '------ 2:Code generation',
    '------ 3:Template type checking',
    ' -- ',
    '---Benefits'
    ],
    ['--- Why TreeShake', 
    '-------- dead code', 
    '-------- treeshaking in Ivy', 
    '-------- treeShaking in VE'
    ],
    ['APF - Ang Package Format', 
    'npm packages',
    'Tooling support',
    'ES versions',
    'Angular CLI',
    'ng-packagr',
    'esm and fesm',
    '.dts files',
    'ESM',
       'Angular 13 APF',
       '- Node package exports', 
       '- es2020 support', 
       '- Ivy partial compilation'
    ],
    ['ESBuild',
      '--- CommonJS',
      '--- ESMs',
      '------ Vite using ESBuild',
      ' -- ',
      '--- Node.js - Backend',
      '-------- fastify wrt express.js',
      '-------- fastify-node-tsc'
    ],
    ['Ivy new', 
    '--- enableIvy: true',
    '--- Complete rewrite of RE',
    '--- Very fast loading',
    '--- operates Very fast',
    '--- reduced bundle size',
    '--- Tree Shakeable',
    '--- Comp compilation independently',
    ' -- ',
    '--- Locality',
    '--- Single file',
    '--- own local infon',
    '--- Recompiles partial changes',
    '--- Create Comp|Dir at runtime',
    '--- HMR',
    ' -- ',
    '- Incremental DOM',
    '---- compiled - series of instns',
    '------ create DOM trees',
    '-------- updated mutably inplace',
    '------ Tree Shakable',   
    '--------- Only memory needed',
    '------------ on Change to DOM',
    ' -- ',
    '-- Decorators to Static Properties',
    '---- ngComponentDef in .d.ts files  ', 
    '---- no complete code analysis - ',
    '------ @NgModule metadata',
    '---- Template instructions',
    '------ no metadata',  
    '---- AOT by default',
    ' -- ',
    'Libraries', 
    '- ngcc', 
    '-- Linker instead', 
    '-- Partial Compilation',
    'Ang Language Service',
    'Compilaion of changes',
    'Ivy - Advantages',
    'no EntryComponents',
    ' -- ',  
    'Ivy DI (Dep Injection)',
    '---- R3Injector (ModuleInjector)',
    '-------- Store property',
    ' -- ',
    '---- NodeInjector (ElementInjector)',
    '-------- TNode object',
    '-------- LView object'
    ],
    [`--- Locality
   
    `,
    ],
    [`--- Incremental DOM
   
    `,
    ],
    ['- ViewEngine old', 
    '- Renderer2', 
    '3 parts -', 
    '--- 1: Template Parsing',
    '------ Interpreter', 
    '------ metadata.json file', 
    '--- 2: Tree Shaking',
    '--- 3: Compilation' ,
    '-------- application.json', 
    '-------- ngFactory.js file',
    '-------- JIT or AOT',
    '-------- EntryComponent',
    ' -- ',
    'View Engine DI (Dep Injection)',
    '---- ModuleInjector',
    '-------- Store property',
    ' -- ',
    '---- ElementInjector',
    '-------- TNode object',
    '-------- LView object',
  ],
    ['Template Rendering',
      '--- from Component classes to View', 
      '----- Unidirectional data flow',
      '------- Helps get great performance',
      '------- Component- simple to understand',
      ' -- ',
      '--- What is actual happening',
      '----- Traversing the DOM Tree'
    ],
    ['Promises', 
    '--- then()', 
    '--- future tasks', 
    '--- (resolve, reject)',
    '------ asynchronous',
    '------ catch',' -- ', 
    ' -- ', 
    'Observables',
     '--- streams', 
     '----- time', 
     '--- next()',
     '--- Observer',
     '----- subscribe',
     '--- async pipe',
     ' -- ',
     '----- hot-cold',
     ' -- ',
     '----- Sync or Async', 
     ' -- ',
     '-- Marble Diagrams'
    ], 
     ['Observables',
     '--- streams',
     '----- time based',
     '--- multiple values',
     '--- compared to Promises',
     '----- cancellable',
     '--- Observer',
     ' -- ',
     '--- Hot and Cold',
     '------ Hot - always emit',
     '-------- xx',
     '------ Cold - must subscribe to',
     '-------- subscribe()',
     '--- Shared Observables',
     ' -- ',
     '--- rxjs operators',
  ],
    [
     'Subjects', 
     '---- Combn Observable + Observer',
     '--- behaviorSubject', 
     '--- asyncSubject', 
     '--- replaySubject'
    ],
    ['rxjs - Reactive Extensions',
    '--- library',
    '------- npm install rxjs', 
    '--- rxjs operators',
    '------- are immutable',
    '------- return Observables',
    '--- asynchronous',
    '--- Event based ops',
    '--- Observable sequences',
    '------- imps Observable type',
    ' -- ',
    '--- rxjs Pipeable Operators',
    ' -- ',
    '--- Utility ftns',
    '--- Convert async to Observables',
    '-------- iterating over stream',
    '-------- map vals to types',
    '-------- filtering streams',
    '-------- multiple streams',
    ' -- ',
    '--- Pipeable operators',
    '-------- Combination',
    ' -- ', 
    '-------- Conditional',
    ' -- ', 
    '-------- Creation',
    ' -- ', 
    '-------- Errors',
    ' -- ', 
    '-------- Multi-cast',
    ' -- ', 
    '-------- Filters',
    ' -- ', 
    '-------- Transform',
   ' -- ',  
    '--- rx-angular/state',
    '------ RxAngular',
    '------ RxState'
  ],  
    ['Higher Order Mapping Operators',
    '--- Concat| Merge| Switch| Exhaust',
    '--- OuterObservable',
    '------- InnerObservable',
    '--- Observable of Observables',
    '--- transforms higher order Observables',
    '------ maps a value into an Observable',
    '--- Network calls - HTTP',
    ' -- ',
    '----- ConcatMap',
     '-------- Sequence opns (Queue)',
     '-------- stores calls - ops',
     ' -- ', 
     '----- MergeMap',
     '--------- Parallel opns',
     '--------- lets HTTP requests finish',
     ' -- ', 
     '----- SwitchMap',
     '--------- cancels prev HTTP requests',
     '--------- maps value from src to inner Observable',
     '--------- subscribes + starts emitting immed',
     ' -- ', 
     '----- ExhaustMap',
     '--------- combines exhaust + map opns',
     '--------- maps value from src to inner Observable',
     '--------- subscribes and waits to finish'  
    ],
    ['Forms',
    '--- Why we need forms',
    '--- Capture view user inputs',
    '--- Data field binding',
    '------ create a Form Modal',
    '------ create a data model',
    
    '--- Form field Validation',
    '--- Form value and validity',
    ' -- ',
    '--- FormControl',
    '----- FormGroup',
    '----- FormArray',
    '----- ControlValueAccessor',
    ' -- ',
    '--- SetValue() | PatchValue()',
    '--- ',  
    '--- Template Forms', 
    '------ Template directives',
    '------ work on Data Model',
    '------ ngForm', 
    '------ FormsModule',
    ' -- ',
    '------ Asynchronous data flow', 
    '------ complex test setup',
    '------ complex validation', 
    '------ [(ngModel)]',
    '------ Unstructured | Mutable',
    '------ Asynchronous Data flow',
    ' -- ',
    ' -------- Template Validation',
    '-------------- Directives', 
    ' -- ',
    '--- Reactive Forms',
    '------ defined programmatically',
    '-------- forms object model',
    '------ Synchronous data flow',
    '------ Structured | Immutable',
    '------ Synchronous Data flow',
    '------ ReactiveFormsModule',
    ' -- ',
    '----- Advantages',
    '------- Simple Forms',
    '------- Tesable',
    '------- Reusable',
    '------- Scalable',
    '----- simpler validation', 
    '----- new FormControl("")',
    ' -- ',
    '------ FormBuilder',  
    ' -- ',
    '  -------- Reactive Validation', 
    '------------- Functions', 
    ],
    ['--- Template Forms'
  
    ],
    ['--- Reactive Forms'
  
    ],
    ['ElementRef',
      '--- access native DOM Element',
      '----- Be careful',
      '----- Security Vulnerabilities',
      '------- XSS Attacks',
      '------- tightly couples to rendering',
      '---class ElementRef<T = any>{',
      '----- constructor(nativeElement: T)',
      '----- nativeElement: T',
      '---- A web worker gives null',
      '--- Alternatives',
      '------ @ViewChild() access DOM el',
      '------ Renderer2 - custom rendering',
      '-------- Custom Rendering',
      '---------- Render to a Web Worker',
    ],
    ['ViewContainerRef',
       '-- A container',
       '---- attach multiple views',
       '------ to a Component',
       '---- View Container',
       '------ any DOM el',
       '-------- appends views to el',
       '---- VCF methods',
       '-- createEmbeddedView()',
       '-- Ex of createEmbeddedView()',
       '-- createComponent()',
       '-- Ex of createComponent()',
       '-- shortcuts',
       '---- ngTemplateOutlet', 
       '------ Ex using ngTemplateOutlet',
       '---- ngComponentOutlet', 
       '------ Ex using ngComponentOutlet',
       '---- used with ng-container',
       '---- use @ViewChild | @ConentChild',
       '--- use @ViewChild with VCF',
       '----- Ex @ViewChild with VCF',
       '--- use @ContentChild with VCF',
       '----- Ex @ContentChild with VCF'
    ],
      
    ['Whats View DOM', 
    '--- component template',  
    '--- Template ref variables',
    '------ &lt;p #title>Hi&lt;/p>',
    '- @ViewChild', 
    '--- alt to ElementRef',
    '------ access a DOM element',
    '--- configures a Vew Query',
    '----- only sees template',
    '------ Queries the Comp templae',
    '--- Metadata properties',
    '------ selector',
    '------ read',
    '------ static',
    '--- Selectors supported',
    '----- Component|Directive class',
    '----- temp ref var #cmp',
    '----- Any provider - service',
    '----- Provider string token',
    '----- TemplateRef',
    '--- read supports',
    '----- Comp/Dir class',
    '----- TemplateRef',
    '----- ElementRef',
    '----- ViewContainerRef',
    '--- static - boolean',
    '----- true - resolve before CD',
    '----- false - resolve after CD',
    '--- ngAfterViewInit LCH',
    ' -- ',
    '--- inject into Comp class',
    '----- refs to els from template',
    '--------- using ElementRef',
    '3 types to inject',
    '----  Wraps DOM el',
    '------ @ViewChild(\'title\')',
    '---------- title:ElementRef',
    '---------- this.title.nativeElement',
    '------Default - return a Component instance',  
    '------- \@ViewChild(\'AComponent\')',
    '----------  aComp: AComponent',
    '----- Using 2nd arg - read',
    '------- { read: ElementRef}',
    '----------- anEl: ElementRef',
    '----- Injecting a Directive',
    '-------- <input #pIP >',
    '------- @ViewChild(\'pIP\', {read: BDirective)',
    '---------- colP: BDirective',
    '---------- this.copP.xxx',
    ' -- ',
    '- @ViewChildren',
    '--- Queries multiple Children',
    '--- Queries the Comp templae',
    '------ gives a QueryList',
    ' -------- from View DOM',
    '---- QuearyList updated when',
    '------- Add | Remove | move',
    '----- Ex @ViewChildren(Pane)',
    '--------- panes!: QueryList<Pane>;',
    '----- this.panes.changes.subscribe((r)',
    '-------  this.pages.calculate();',
    '--- ngAfterViewInit LCH',
    '------ metadata properties',
    '-------- selector',
    '-------- read',
    '-------- emitDistinctChangesOnly',
    
    '--- ViewContainerRef' 
   ], 
   ['Whats Content DOM', 
    '- exists within tags',
    '--- of a Comp/Directive',
    '- ContentChild',
    '--- imps 1 query',
    '----- within Content OOM',
    '------- Comp template - black box',
    '----- Ex @ContentChild(X) x!: X;',
    '--- Metadata properties',
    '------ selector',
    '------ read',
    '------ static',
    '--- Selectors supported',
    '----- Component|Directive class',
    '----- temp ref var #cmp',
    '----- Any provider - service',
    '----- Provider string token',
    '----- TemplateRef',
    '--- read supports',
    '----- Comp/Dir class',
    '----- TemplateRef',
    '----- ElementRef',
    '----- ViewContainerRef',
    '--- static - boolean',
    '----- true - resolve before CD',
    '----- false - resolve after CD', 
    '--- ngAfterContentInit LCH',
    ' -- ',
    '- ContentChildren',
    '--- ngAfterContentInit LCH',
  ],
  
    ['Transclusion (Content Projection)',
    '--- insert or project content',
    '----- inside another Component',
    '------- Eg CardComponent',
    '------- uses &lt;ng-content>&lt;/ng-content>',
    '--- Directives- templates',
    '--- Directives dyn data driven DOM',
    '--- make reusable components',
    '----- Scalable appns',    
    '--- ngAfterContentInit LCH',
    '--------- No real DOM el', 
    '---- 3 Types of Transclusion',
    '------ Single Slot',
    '--------- content from 1 source', 
    '--------- &lt;ng-conttent>&lt;/ng-content>',
    
    '------ Multi-Slot',
    '--------- multiple slots',
    '------------ using select',
    '------------ <ng-content select="[quest]"',
    '------ Conditional',
    '--------- Conditionally render content',
    '--------- TemplateRef',
    '----------- [ngTemplateOutlet]',
    '------------- content.templateRef',
    ' -- ',
    '-- data types -',
    '---- Inner HTML', 
    '---- HTML Elements',
    '---- Styled HTML', 
    '---- Other Components' 
  ],
  
    ['CRUD', 
    '- HttpClient', 
    '--- based on XHR - Ajax',
    '-- Fetch API (2017)',
    '--- based on Promises',
    '-- Commn with remote Http Server',
    '-- HttpClientModule - ',
    
    ' -- ',
     '--- HttpInterceptors',
     '------ Service',      
     '------ intercepts HTTP Request | Response',
     '------ caches Http Requests | Responsee',
     '------ Example of interceptor i/f',
     '--------- intercept()',
     ' -- ',
     '--- Angular/InMemoryWebApi',
     '------ Angular Demos | Tests ',
     '------ Emulates CRUD ops wrt REST',
     '------ in-memory data store',
     '------ npm install',
     '------ HttpClientInMemoryWebApiModule',
     '---------- angular/in-memory-web-api'
    ],
    ['--- HttpClient'
  
    ],
    ['--- HttpInterceptors'
  
    ],
    ['appns vers custom libraries',
    'Appns',
    'Custom Libraries',
    '- ng g library x','-- angular.json',
    '- ng-packagr','-- package.json', 
    '- ref to build path',
    '-- tsconfig.json',
    '- lib sources in project/x',
    'Ivy and ngcc',
    'Ang11 - Partial compilation'],
    ['Caching',
    '- ng cache',
    ' -- ',
    '- Memoization',
    ' -- ',
    '- Browser Limits',
    ' -- ', 
    '- Browser Cache',
    '-- Cache Headers ',
    ' -- ', 
    '- HTTP Cache',
    '-- Cache Control',
    ' -- ',  
    '- Service Worker Caching',
    '-- Cache Control',
    '--- AppCache',
    ],
    ['- Storage mechanisms',
    '- indexedDB','-- blobs','- Web Storage', '- cookies', '- Cloud Storage'],
    
    ['Nx Nrwl','- Nrwl/Nx',
    '-- Nx Monorepo',
    '-- smart', 
    '-- fast',
    '-- extensible',
    '-- nrwl/angular', 
    '-- nx monorepo', 
    '-- nx cli',
    '-- nx build', 
    '-- nx serve'
  ],
  ['CQRS',
    '--- opns wrt CRUD',
    '------ READ',
    '------ UPDATE',
    '--- Advantages',
    '------ Performance',
    '------ Scalability',
    '------ Security'
  ],  
    ['ngrx - State Management', 
    'RxJS and Observables', 
    'BehaviorSubject',
    '- appn State', 
    'uni-directional',
    ' -- ',
    '- 5 features ',
    '-- Serializability', 
    '-- TypeSafety',
    '-- Encapsulation',   
    '-- Testable',
    '-- Performance',
    ' -- ',
  '- SHARI principle',
  '-- Shared',
  '-- Hydrated',
  '-- Available',
  '-- Retreived',
  '-- Impacted',
  ' -- ',
  'ngrx Parts',  
  '- Store',
  '-- state data',
  ' -- ',
  '- Action',
  '---- Events',
  '---- Document messages',
  '---- Commands',
  ' -- ',
  '---- Props - Payload',
  ' -- ',
  '--- createAction',
  ' -- ',
  '- Reducer',
  ' -- ',
  '- Selector',
  ' -- ', 
  '- Effects',  
  ' -- ',
  '--- createActionGroups',
  ' -- ',
  '--- Feature creators',
  ' -- ',
  '-- Store Devtools',
  ' -- ',
  '--- Action Log',
  '--- State inspector',
  '--- Time Travelling Debugger',
  '---- Installation',
  ' -- ',
  '--- Entity', 
  '--- Data', 
  '--- ComponentStore',
  ' -- ',
  '--- Auth0 and ngrx',
  ' -- ',
  '--- NgRx Ducks',
  '------- @StoreFacade',
  '------- @StoreChunks'
],
    [' -- '],
    ['install from Github', 
    'npm install'
  ],  
  ['Core libraries',
      '- @angular/core',
      '- @angular/common',
      ' -- ',
      '--- CommonModule',
      
      '---- default template Directives',
      '------- NgClass - ',
      '------- NgComponentOutlet - ',
      '------- NgForOf - ',
      '------- NgIf - ',
      '------- NgPlural - ',
      '------- NgPluralCase - ',
      '------- NgStyle - ',
      '------- NgSwitch - ',
      '------- NgSwitchCase - ',
      '------- NgSwitchDefault - ',
      '------- NgTemplateOutlet - ',
     
      '---- default pipes',
      '------- AsyncPipe - ',
      '------- CurrencyPipe - ',
      '------- DatePipe - ',
      '------- DecimalPipe - ',
      '------- I18nPluralPipe - ',
      '------- I18nSelectPipe - ',
      '------- JsonPipe - ',
      '------- KeyValuePipe - ',
      '------- LowerCasePipe - ',
      '------- PercentPipe - ',
      '------- SlicePipe - ',
      '------- TitleCasePipe - ',
      '------- UpperCasePipe - ',
      ' -- ',
      '----- location services',
      '- @angular/compiler',
        '-- ngc',
      '- @angular/browser',
      '--- BrowserModule',
      ' -- ',
      '- @angular/router',
      '--- RouerModule',
      ' -- ',
      '- @angular/platform-browser',
      '--- main.ts',  
      '------ @angular/platform-browser-dynamic',
      '------ bootstrapApplication()',
      ' -- ',
      '- @angular/forms',
      '--- FormsModule',
      '--- ReactiveFormsModule',
      ' -- ',
      '- @angular/animations',
      '---  AnimationsModule',
      ' -- ',
      '- @angular/material',
      '- @angular/cdk',
      '--',
      '- @angular/cli',
      '- @angular/compiler/cli',
      '- @angular-devkit/build-angular',
      
    ],
    ['GIT',
    '- Parts',
    ' -- ',
    '- Working tree (directory)',
    '--- git init cmd',
    '----- git folder - history',
    '----- working directory - ',
 ' -- ',   
    '- Staging area (Index)',
    '----- Git add',
    '----- Git commit -',
    '-------- Git Squash',
    ' -- ',
    '- Local Repository',
    '--- Local computers',
    '------ git Push',
    ' -- ',
    '- Remote Repository',
    '--- Server for Team',
    '------ git Pull',
    ' -- ',  
    '--- Branches',
    '------- MASTER',
    '------- View branches',      
    '---------- local - git branch',
    '---------- remote - git branch -r',
    '---------- all - git branch -a',
    ' -- ',
    '--- git checkout',
    ' -- ',
    '------- HEAD = branch name',
    ' -- ',
    '--- Fork',
    ' -- ',
    '--- git clone',
    ' -- ',
    '- stash',
    ' -- ',    
    '--- Commands - ',
    '--- Add',
    '--- fetch',
    '--- branch',
    '--- checkout', 
    '------ HEAD',
    '--- commit',
    '--- init',
    '--- push',
    '--- pull',
    '--- log',
    '--- status',
    ' -- ',
    '--- GitHub'
    ],
    ['Environment Variables',
      '--- user variable for dynap',
      '--- system variables'
    ], 
    ['Testing', 
    '--- PoC',
    '--- Unit', 
    '------- spec.ts', 
    '------- describe', 
    '------- beforeEach()', 
    '------- it - fit - xit', 
    '------- afterEach', 
    '------- TestBed', 
    '------- Jasmine', 
    '------- Karma', 
    '------- Mocking', 
    '------- Wallaby', 
    ' -- ',
    '--- Integration',
    '------- Shallow',
    '------- Deep', 
    ' -- ',
    '--- End to End', 
    '------- Protractor', 
    '------- Cypress'
  ],
  ['--- Unit Testing',
  ],
  ['--- Integration Testing',
   '-------- Shallow IT',
   '-------- Deep IT'
   ],
   ['--- End to End Testing',
   '------- Protractor',
   '------- Cypress'
    ],
    ['TDD Test Driven Devt', 
    '--- Test First fail',
    '--- refactor',
    '--- pass',
    ' -- ',
    '--- BDD Behavoral Driven Design', 
    '------- businss', 
    '------- agile',
    '----------- Cucumber',
    '------- Rapid Iterations',
    '------- 3 Step Practice',
    '------------  1: Small change', 
    '------------- 2: document examples',
    '------------- 3: implement Behavior',
    '-- or ',
    '-------- User Story',
    '-------- Discovery ', 
    '-------- Formulation',
    '-------- Automation',
    '-------- Working S/W',
    ' -- ',
    '--- DDD Domain Driven Design', 
    '-------- Business Domain', 
    '-------- Object Oriented', 
    '-------- evolving model',
    '-------- Goals',
    '------------ domain and domain logic',
    '------------ complex design',
    '------------ init creative collabn - refine', 
    ],
    ['Design Patterns', 
    '--- SOLID Principles',
    '--- Single Responsibility',
    '--- Open-Closed',
    '--- Liskov Substn',
    '--- Interface Segn',
    '--- Dep Inv', 
    ' -- ',
    '--- DRY',
    ' -- ', 
    '--- DIP',  
    ' -- ',
    '--- Singleton Pattern',  
    ' -- ',
    '--- Factory Pattern',  
    ' -- ',
    '--- Decorator Pattern',  
    ' -- ',
    '--- Lazy',
    ' -- ',
    '--- Composition'
    ],
    ['Security',
    '--- XSS',
    '------- auto-escaping{{}}',
    '------- CSRF - XSRF', 
    '------- CSRF token',
    '------- HttpClientXsrfModule', 
    '------- Output Encoding', 
    '------- Sanitization', 
    '------- DomSanitizer',
    '------- bypassSecurityTrustHTML', 
    '------- Immutable Code', 
    '------- JWTs', 
    '------- OWASP', 
    '------- SNYK'
  ],
  ['Security', 
    '--- Auhtorization',

    '--- Authentication', 
    
    '------ Auth0', 
    '------ OAuth2'
  ],
   ['Node.js',
    '--- http://nodejs.org', 
    '--- JS runtime env\'t',  
    '--- small | mid sized appns',
    '--- Chrome V8 JS Engine',
    '--- Chrome',
    '--- Node.js',
    '--- backend JS runtime',
    '------ can generate dynamic pages',
    '------ can CRUD + close files',
    '------ collect form data',
    '------ add|delete|modify db',
    '------ tasks exec on events',
    '------ event - server port',
    '------ files initiated on server', 
    '------ ',
     '----- traspiled to *.js',
     '--------- esbuild',
    ],
    ['express',
    '--- node.js web appn frmwork',
    '--- node.js',
    '--- express impn',
    '------ get()',
    '------ listen()'
    ],
    ['Package managers',
      '--- installs libraries as deps',
      '--- npm',
      '------- installs packages sequentially',
      '--- yarn',
      '------- installs in parallel '
    ],
    ['IDEs',
      '--- VS-Code',
      '------ Git',
      '------ Extensions'
    ],
    ['Angular Language Service',
    '--- Code completions', 
    '--- Errors', 
    '--- Hints', 
    '--- Navigation', 
    '--- Angular Templates'
  ],
  ['TSServer-',
  ''
  ],  
  ['Angular Language Service',
        '--- inside Angular templates',
        '------ completions',
        '------ errors',
        '------ hints',
        '------ navigations',
        ' -- ',
        '--- tsconfig.json',
        '------ strictTemplates: true',
        ' -- ',
        '----------- GetSamanticsDiagnostics'
    ],
    ['ESLint', 
    '--- JS + TS', 
    '--- Static Analysis',
    '--- VS Code + CI Pipeline',
    '--- AST based pattern checker - JS',
    '------ enforce style | formatting| coding',
    '------ ESLint 8.9 - ',
    '------ ESLint 8.15 - ',
    '------ ESLint 8.23 - ',
    '------ ESLint 8.23.1 - ',
    
    ],
    ['Why CI/CD', 
    '--- CI - Continuous Integration',
    '--- CD - Continuous Development', 
    '--- CD s- Continuous Delivery', 
    '--- TeamCity',
    '--- Artifactory'
    ],
    ['--- DevOps',
     '------ Jenkins',
     '-------- scriptive | declarative',
     '-------- Scriptive Pipeline (initial)',
     '------------ begin with word node',
     '------------ imperative programming model',
     '------------ Complex Groovy|JAVA Apis',    
     '-------- Declarative Pipeline - now',
     '------------ begine with word pipeline',
     '------------ Jenkins DSL',
     '------------ conditional statement logic',
     '------------ access to env variables',      
     '------------ add logging|error handling',
     '------------ series of steps',
     '------------ Jenkins plugins',
     '------------ shared libraries',
     ' -- ', 
     '------ TeamCity',
     '------ Artifactory' 
    ],
    ['Webpack', 
    '--- bundles HTML | css | ts/js',
    '--- module bundler',
    '--- CLI build process',
    '--- TS to JS',
    '--- SASS files to CSS',
    '--- transpile HTML to JS',
    '--- Terser',
    '------- Terser plugin', 
    '--- Entry Points -', 
    '------- Entry',
    '------- Output', 
    '--- Loaders',
    '--- Plugins'
    ],
    ['Machine Learning',
    '--- Tensorflow'

    ],
    ['Cloud',
    '--- Types of Cloud',
    '--- CDN vs Cloud',
    '------- CDN - content fast',
    '------- Cloud - flexible, scalable',
    ' -- ',
    '------- AWS| Azure| Google| Cloudflare',
    '--- 3 reasons for the cloud are', 
    '------- Serverless',
    '------- Cloud based architecture',
    '------- FAAS (Ftn as a Service)',
    '------- Advantages',
    ' -- ',  
    '----- Deployment', 
  '----- Dynamic Data',
  '----- Node.js',
  '--- Amazon CloudFront (CDN)',
  ' -- ', 
  ' -- ',
  '--- Google Cloud', 
  '------ GCP | G Suite', 
  '------- Google Cloud Platform (GCP)',
  '------- suite of modular cloud services',
  '----------- Computing',
  '----------- Data Storage',
  '----------- Data Analytics',
  '----------- ML Machine Learning',
  '------- management tools',
  '------- Envts',
  '----------- IAAS',
  '----------- PAAS',
  '----------- Serverless Computing',
  '------ G Suite (Google Workspace)',
  '------ Enterprise Chrome',
  '------ Enterprise Android',
  '------ APIs for M/L and enterprise mapping',
  ' -- ',
  '--- CloudFlare CDN',
  ' -- ',
  '--- Cloudinary SAAP',
  '------- image processing | management',
  ],
  ['AWS (Amazon Web Services)',
  '--- S3 - Simple Storage Service',
  '--- EC2 - Elastic Compute Cloud',
  '--- Amazon Connect',
  '--- AWS Lambda',    
  ' -- ',
  '--- AWS S3',
 
  '--- AWS Lambda',
  '----- AWS Lambda Properties',
  '----- AWS Lambda Reqts',
  '----- AWS Lambda Users',
  '----- AWS Lambda Uses',
  '----- AWS Lambda Languaged',
  '----- AWS Lambda Advantages',
  '----- AWS Lambda Limitations',
  '----- AWS Templates',
  '---------- AWS Terraform' 
  ],
  ['Azure',
  '--- MS Azure',
  '-------- services - ',
  '-------- virtual m/c - IaaS',
  '-------- App Services - PaaS',
  '-------- Websites - ',
  '-------- WebJobs - ',
  '----------- Identity',
  '----------- AAD ',
  '----------- AAD - B2C',
  '----------- AAD Domain Services  ',
  '----------- Azure Info Protn',
  '----------- location',
  '----------- on-premise - ',
  '----------- hybrid -',
  '----------- multicloud -',
  '----------- at the edge -',
  ],
  ['Google Cloud', 
  '--- GCP | G Suite', 
  '--- Google Cloud Platform (GCP)',
  '--- suite of modular cloud services',
  '--- Computing',
  '------ Data Storage',
  '------ Data Analytics',
  '------ ML Machine Learning',
  '---- management tools',
  '------- Envts',
  '----------- IAAS',
  '----------- PAAS',
  '----------- Serverless Computing',
  '------ G Suite (Google Workspace)',
  '------ Enterprise Chrome',
  '------ Enterprise Android',
  '------ APIs for M/L and enterprise mapping',
  ],
  ['--- CloudFlare',
  
  ],
  ['Accessability',
    '--- ARIA attrbutes', 
    '--- WCAG', 
    '------ POUR',
    '--- ESLint Accessability'
    ],
    [' -- '],
    ['Schematics',
    '--- template based code generator',
    '--- part of the Angular ecosystem',
    '--- CLI applies transforms',
    '--- Schematic Collection tool',
    '---- encorces architectural rules + convns',
    '------ ng generate | ng add',
    '--- Uses of Schematics',
    '---- fix breaking changes in dep',
    '---- angular.json - schematics',
    '--- examples ftns',
    '------- classify',
    '------- normalize',
    '------- dasherize',
    '------- join',
    '------- buildRelativePath',
    ],
    ['Angular Material/CDK',
    '--- Ang Material', 
    ' -- ',
    '--- Ang CDK'

    ],
    ['Flex-layout', 
    '--- display:flex'
    ],
    ['PWA (Progressive Web Appns)',
    '--- @angular/pwa',

    '--- SW (Service Workers)', 
    '------- manifests', 
    '------------ manifest.webmanifest file',
    '------- Web-platform features',
    '------- Progressive Enhancement ',
    '------- native apps',
    '------- Works Offline',
    ' -- ',
    '--- Requirements',
    '------- Responsive', 
    '------- Auto-updated',
    '------- Secure',
    '------- Reliably Connected', 
    '------- Progresve',
    '------- Searchable',
    '------- Shareable  ', 
    '--- User Exprience',
    '------- installable', 
    '--- Regularly Communicate',
    ' -- ',
    '--- Service Workers',
    '------- HTTPS',
    '------- Caching',
    '------- SW Manifest',
    '------- Updating cache',
    '------- Fast loading', 
    '------- Push Notifications',  
    '------- interfaces',
    '------- PushEvent',
    '------- PushManager',
    '------- PushMessageData',
    '------- PushSubscription',
    '------- PushSubscriptionOptions', 
    '------- Background Sync', 
    '------- defer actions',
    '------- Store when offline',
    '------- browser cache',
    '------- indexedDB', 
    '------- Sync when online',  
   '-------- Network proxy',
   '-------- intercepts HTTP outputs',
   '-------- various responses',
   '-------- mobile or other'
    ],
    ['Why Angular Elements',
    '--- Custom Els (Web Components)',
    `-------- createCustomElements()`,
    '-------- define()',  
    '-------- NgElement',
    '---------- abstract class NgElement',
    '---------- extends HTMLElement',
    '---------- ngElementStrategy',
    '---------- how component is transformed',  
    '--------- events: Observable<NgElementStrategyEvent>',
    '--------- connect(element: HTMLElement)',
    '--------- disconnect():void',
    '--------- getInputValue(propName: string)',
    '--------- setInputValue(propName: string, string)',
    ' -- ',
    '----- ngElementEventsSubscription()',
    '----- attributeChangedCallback(...)',
    '---------- change attribue',  
    '----- connectedCallback()',
    '----- disconnectedCallback()',
    ' -- ',   
    
    '--- Web Components',    
    '------- Framework Agnostic',
    '------- polyfills',
    '------ CustomElementRegistry',
    '------ createCustomElement() API',
    '------ NgElementConstructor i/f()',
    '------ customElements.define()',  
    '------ CD ftn', 
    '------ data binding',
    '------ bootstrap to DOM',
    '------ Dynamic Content',
    '------ NgElements class',
    '------ WithProperties()'
  ],
  ['Why Web Workers', 
   '---Threading', 
   ''
  ],
  ['Why Angular Universal',
    '--- SSR (Server Side Rendering)'
  ],
  ['Stand Alone Components',
  '--- Optional Modules', 
  '--- main.ts',
  '---- platformBrowserDynamic()',
  '------ standalone: true', 
  '------ bootstrapApplication(x)',
  '--- virtual module (SCAM)',
  '--- Compatability',
  '--- Architecture',  
  '--- Advantages of Schematics',
  '------- Problem with Schematics'
  ],
  [' -- '],
  ['Agile', 
  '--- Iterative', 
  '--- Incemental', 
  '--- Teams',
  '--- Respond to Change',
  '--- Jira'
 ],
 ['Jira',
  '--- teamwork',
  '--- Boards',
  '----- Create an Agile Board',
  ' -- ',
  '--- Team Management Board',
  '------ Simplified board',
  ' -- ',
  '--- Scrum Board',
  '------ Sprints + Backlog',
  ' -- ',
  '--- Kanban Board', 
  '----- WIP (Work In Progress)', 
  '------- What is WIP',
  ' -- ',
  '--- Agile project management tool'
  ],
  [' Azure',
  '--- Azure Applications',
  '--- Azure Web APplication',
  '--- Azure tools',

  ' -- ',
  '--- Azure Functions',
  
  '---- DevOps',
       '------ Azure Boards',
       '------ Azure Pipelines',
       '------ Azure Repos',
       '------ Azure Test plans',
       '------ Azure Artifacts',
       '------ Extensions Marketplace',
    '--- Azure Logic Application',  
    '----- Visual workflow designer',
    '-------- event grid',
    ' -- ',
    '-- Azure Serverless Components',
    '---- Azure ftns ',
    '------ code on demand',
    '------ indept of location',
    '------ built for reuse and composition',
    '------ Messaging Component integration',
    '------ Serverless Cloud infrastructure'
  ],
  ['Debugging Angular', 
  '- Chrome Devtools',
  '--- Component explorer',
  '----- appn Component tree',
  ' -- ',
  '--- Profiler',
  '----- Performance bottlenecks',
  '---------- preview CD cycles',
  '---- Problem Patterns',
  '------- Zone Pollution',
  '------- Local change triggers ext CD',
  '------- Ref transparent expressions',
  '------- Large Component trees',
  ' -- ',
  '--- VS Code extension',  
  ' -- ',
  'webpack- source-maps',
  '--- Lighthouse',
  '--- Call Stack',
  '---- Stack of ftn calls',
  '---- Restart from Frame', 
  '--- Debugger',
  '--- Conditional breakpoints',
  '--- ng.probe($0).componentInstance',
  '---- $0 - $4',
  '--- ng.profiler.timeChangeDetection()',
  '--- Built in profiler',
  '-- ',
  '--- Debugger - Source',
  '--- Network throttling',
  '--- throttling CPU',
    '-- '
  ],
  ['Time Travelling Debugger', 
  '--- WinDbg preview app',
  '--- Dump File',
  '--- Analyze Link'
],
['- Chrome Developer Tools', 
'--- Elements',
'--- select elements',
'-- ',
'--- Console', 
'------ cmd prompt',
'-- ',
'--- Sources', 
'------- debugging',
'-- ',
'--- Network', 
'------ measureing time for ',
'-- ',
'--- Performance',
'------- render time - CD', 
'-- ',
'--- Memory', 
'------ debug memory over time', 
'-- ',
'--- Application',
'------ inspect all loaded resources', 
'-- ', 
'--- Security',
'------- security of cert + conn\'n'
],
['Angular Performance - ',
'--- FCP (First Contentful Paint)',
'--- LCP (Largest Contentful Paint)',
'--- Lazy Loading',
'--- Webpack bundle analyzer',
'--- AOT Compilation',
'--- Tree-Shaking', 
'--- Modern Angular',
'--- Ivy', 
' -- ',
'--- Angular Universal',
'--- PWA-SW',
'--- Chrome User Experience Report',
'--- PageSpeed Insights',
'--- Core Web Vitals',
'--- Chrome DevTools',
'--- Lighthouse',
'--- Web-Vitals',
'--- LogRocket',
''
],
[`SourceMap Explorer
 <br/>-------
`, 
 `--- sourceMaps: true
 <br/>------- 
 `
], 
['REST (RESTitutional file transfer)',
  '----- 5 REST HTTP Methods',
  '----- 6 Architectural constraints',
  '----- Problems with REST',
  '----- APIs',
  '----- RAML',
  '----- IDLs',
  '------ humans/auto machine procing',
  ' -- ',
  `--- HTTP
  <br/>------
  `,
  '------- HTTP methods',
    '---------- List REST API DLs',
    '------- WSDL',
    '------- WADL',
    '------- OData',
    '------- OpenAPI',
    '------- RSDL',
    '------- RAML',
    '------- REST Servers',
    '------ json-server', 
    ' --',
    '------ http-server', 
    ' -- ',
    '--- Swagger', 
    '--- design & Doc APIs',
    '--- enable Teams',
    '--- IDL',
    '---   RESTful APIs',
    '--- JSON',
    '--- CRUD methods', 
    ' -- ',
    '--- Postman', 
    '-------- web based tool',
    '-------- access APIs anywhre  ',
    '--- inspect HTTP/HTTPS',
    '--- Capture Network traffic',
    '--- Postman Proxy',
    ' -- ',
    '- GraphQL',
    '--- Quey language for API',
    '--- description of data in API',
    '--- Server side runtime',
    '--- exec queries'
    ],
    ['GraphQL server',
      '--- GraphQL Advantages',
      '--- Schemas',
      '------ Schema Objects',
      '-------- TS (TypeScript) can help',
        '--- Servers',
        '------ JS via Node.js',
        '------ C#/Net',
        '------ Python',
        '------ C/C++',
        '------ Elm', 
        ' -- ',
        '--- GraphQL CLI',
        '--- GraphQL TS',
        '--- GraphQL Config',
        '--- GraphQL ESLint',
        '--- GraphQL Tools',
        '--- GraphQL Language Service',
        '--- GraphQL WS (Web Sockets)',
        '--- GraphQL Live Query',
        ' -- ', 
        '--- Angular Apollo',
        '------ simplifies build Components',
        '--------- Ang schematics | router| mobile',
        '--- Apollo - clients',  
        '------ Angular Schematics',
        '------ Angular Router',
        '-------- Angular Universal (SSR)',
        '------ NativeScript',
        '------ Ionic'  
    ],
    ['Real Time Appns',
     '--- Web Sockets',
     '--- Realtime Decorators '
    ],
    ['Ag-grid',
    '--- fully customizable',
    '--- ag-grid performance',  
    '--- no 3rd party deps',
    '--- integrates with Angular',
    ' -- ',
    '--- ag-grid Features',
    '--- Column-integration',
    '--- Pagination',
    '--- Sorting ',
    '--- Row Selection',
    ' -- ',
    '--- ag-grid data',
    '--- ag-grid ex',
    ],
    ['Databases',
    '--- DOM Storage',
    '--- IndexedDB',
    '--- LocalForage',
    '-------- IndexedDB',
    '--- Firebase',
    '-------- '.
    '--- RxDB - Reactive DB',
    '--- SQL Server',
    '--- NoSQL Dbs',

    ],
    ['Docker ',   
     '--- Containerization platform',
     '------ deals with dependencies',
     '------ package appn into Docker Container', 
     '------ std exec comps + OS libs + deps', 
     '---------- Building',
     '---------- Running',
     '---------- Managing',
     '---------- Distributing appns',    
     '--- vs VM',
     '------- virtualizations of same OS',
     '--- Docker images', 
     ],
    ['Kubernetties K8s', 
     '--- clusters| nodes| pods',
     ' -- ',
     '--- deal with multiple containers',
     '------- What if one goes down',
     '------- scaling',
     '------- failovers',
     '--- Clusters', 
     '-------- multiple worker nodes',  
     '------------ fault tolerance',
     '------------ high availability',
     '------------ set of worker m/cs',
     '-------- Pods',
     '------------ hosted by a Node',
     '------------ smalles deployable units',
     '------------ componens of appn workload',
     '-------- Conrol plane',
     '------------- manages worker nodes + Pods',
     '------------- runs across mult comps',
     '--- Open source system', 
     '--- automating deployment',
     '--- scaling',
     '--- management',
     '------- containerized appns'
    ],
    ['Web 3 - new WWW -',
     '--- DApps', 
     '--- Blockchain technology', 
     '--- Ethereum',
     '--- Turing complete',
     '--- inherent decentralization',
     '--- native token ETH (Ether)  ',
     '--- for Everyone'
    ],
    ['Why Micro-FEs',
     '--- MicroService in a browser',
     '--- Multiple MFEs',
     '--- Shell',
     '--- Sep domains', 
     '--- Diff teams', 
     '--- Idea- composition of features',
     '--- slice larger appn up', 
     ' -- ',
     '--- WebPack5', 
     '------- Modulse Federation',
     ' -- ',
     '--- Ang CLI | Webpack confign',
     '--- webpack.config.js ',
     '--- ModuleFederationPlugin',
     '--- create mult sep builds', 
     '--- loads MFEs at runtime',
     ' -- ',  
     '--- Shell (Host)',
     '------ Shell\'s webpack.config',
     '------ Shell defines Shared libs',
     '------ singleton|strictVersion',
     '------ Dynamic imports- ESMs',
     ' -- ',
     '--- MicroFrontEnd - Remote',
     '------ MFE\'s webpack.config',
     '------ exposes ESMs',
     '------ remoteEntry.js',  
     '------ metadata',
     '------ shared libraries',
     '-------- (not) dynamic imports',
     ' -- ',
     '--- Dynamic MicroFrontEnds', 
     '------ runtime',
     '------ loadRemoteModule()',
     '---- '
    ],
    ['Ang Versions',
     '--- Ang 14 (02/06/2022)',
     '------ TS 4.7',
     '------ strictly typed Reactive Forms',
     '------ adv extended template diagnostics',
     '------ optional ngModules (standalone: true)',
     '------ Router title',
     '------ ng cache',
    ' -- ',
     '--- Ang 13 (Nov 2021)', 
     '------- TS 4.5',
     '------- new APF (Angular Package Format) ',
     '------- ESBuild ',
     '------- Node Package Exports',
     '------- cli.cache',
     '------- ES 2020',
     '------- simpler dyn Comp creation',
  ' -- ',
     '--- Ang 12',
     '------ TS 4.2',
     '------ cleaner code and Ivy everywhere',
     '------ templates Nullish coalescing',
     '------ Critters for CSS inlining',
     ' -- ',
     '--- Ang 11',
     '------ TS 4.0',
     '------ Font inlining',
     '------ ESLint - stricter types',
     '------ Partial Compilation - linker',
     '------ HMR (Hot Module Replacement',
     '------ webpack 5 - Module Federation',
     ' -- ',
     '--- Ang 10',
     '------ TS 3.9',
     '------ new default browser config',
     '------ Ivy ngcc optional strict',
     '------ performance improvements',
     '------ ModuleWithProviders<T>',
     ' -- ',
     '--- Ang 09',
     '------ TS 3.6',
     '------ Ivy enabled by default',
     '------ Smaller bundle size',
     '------ Update Zone.js | RxJS',
     '------ ModuleWithProviders',
     '------ Language Service',
     '------ ComponentHarness',
     ' -- ',
     '--- Ang 08',
     '------ TS 3.4',
     '------ Differential loading',
     '------ dynamic imports',
     '------ simplifies Web Workers',
     '------ new APIs',
     '------ bazel | Ivy coming',
     ' -- ',
     '--- Ang 07',
     '------ TS 3.1',
     '------ Ang Material | SDK',
     '------ Angullar Do-Bootstrap',
     '------ 8 phase rot AOT Compiln',
     '------ Angular error handling']
     ];

const subTopicsInfo = [

  [
 `Angular is a 
  <br/>--- JavaScript Framework for development of client side mobile web desktop appns -
  <br/>
  <br/>--- SPA (Single Page Application)
  <br/>
  <br/>--- written in MS TypeScript for adding types to the JS framework and simplifying JS (EcmaScript - modern JS) - with classes and interfaces 
  <br/>- ts files are then transpiled down to JS code to run in the browser 
  <br/>
  <br/>--- rendering pages in the DOM in response to user actions - 
  <br/>----- Angular uses View DOM in the template HTML and Content DOM inside other Components
  <br/>
  <br/>--- using the Angular/CLI to generate the main parts of Angular appns -
  <br/>ng g c
  <br/>--- Components - (must have a template) 
  <br/>------- template is adjacent (not inside Component)
  <br/>
  <br/>ng g d
  <br/>--- Directives - (no template)
  <br/>
  <br/>ng g p
  <br/>--- Pipes - (pure or impure)
  <br/>
  <br/>ng g s
  <br/>--- Services - DI (Dependency Injection)
  <br/>
  <br/>ng g m
  <br/>--- Modules - contain groups of above els
  <br/>--- 
  <br/>
  <br/>Tips for using Angular
  <br/>--- 1: Use the CLI
  <br/>--- 2: Follow the Style Guide
  <br/>--- 3: Sort and Filter in the Component
  <br/>--- 4: Use TS
  <br/>--- 5: Use NgRx
  <br/>--- 6: Use Webpack   
  <br/>
  <br/>Change Detection to id when events occur
  <br/>--- zones | ngZone|  ChangeDetectorRef | ChangeDetectionStrategy.onPush() 
  <br/>
  <br/>- Dependency Injection - 
  <br/>--- Services
  <br/>------- @Injectable({})
  <br/>------- providers
  <br/>------- dependencies
  <br/>------- DI Tokens
  <br/>
  <br/>Decorators    
  <br/>--- @xxx({}) -  Component | Directive| Pipe| Input| Output| 
  <br/>
  <br/>ES (EcmaScript)
  <br/>--- block scope - const | let | wrt var in JS - | Fat arrow => | Promise | multi-line strings  |- String constants using s\`\` 
  <br/>
  <br/>TypeScript - ts - 
  <br/>--- Strong types - tools - tsc transpiles ts down to js - tsconfig.json -    
  <br/>
  <br/>Special files - package.json (diff libraries used) - angular.json - tsconfig.json - main/index.htmls and main/main.ts file 
  <br/>
  <br/>Special folders - node_modules for the large libraries used in project and librares 
  <br/>
  <br/>ng build gives the dist folder - ang13-training/favicon.ico | index.html | main.js 300kb | polyfill.js | runtime.js
  <br/>
  <br/>Data Binding
  <br/>--- interpolation {{ x }} | Property binding | Event binding | 2 way data binding
  <br/>
  <br/>Styles CSS | SCSS |  
  <br/>--- visual property of an element - Box Model - border| margin | padding | content
  <br/>
  <br/>Bootstrapping 
  <br/>--- normal bootstrapping the AppModule
  <br/>--- can manually with ngBootStrap()
  <br/>--- can now have module free - standalone 
  <br/>------- app with bootstrapApplication(comp)    
  <br/>
  <br/>LCH (Life Cycle Hooks)
  <br/>--- ngOnChanges() | ngOnInit()| ngDoCheck()| 
  <br/>--- ngAfterContentInit() | ngAfterContentChecked() | ngAfterViewInit() | ngAfterViewChecked()
  <br/>--- ngOnDestroy()
  <br/>
  <br/>Promises
  <br/>--- emits 1 object | not cancellable | asynchronous
  <br/>
  <br/>RxJS operators
  <br/><br/>Pipeable operators
  <br/>--- Combination
  <br/>------ combineAll
  <br/>------ combineLatest   
  <br/>------ concat 
  <br/>------ forkjoin 
  <br/>
  <br/>------ merge
  <br/>------ mergeAll 
  <br/>------ race
  <br/>------ startWith 
  <br/>------ withLatestFrom
  <br/>------ zip   
  <br/> 
  <br/>--- Conditional
  <br/>------ defaultEmpty
  <br/>------ every 
  <br/>------ iif 
  <br/>------ sequenceEqual   
  <br/>
  <br/>--- Creation
  <br/>------ ajax   
  <br/>------ create 
  <br/>------ defer
  <br/>------ empty
  <br/>------ from
  <br/>------ fromEvent 
  <br/>------ interval 
  <br/>------ of
  <br/>------ range 
  <br/>------ throw
  <br/>------ timer 
  <br/>
  <br/>--- Errors',
  <br/>------ catch/catchError 
  <br/>------ retry
  <br/>------ retryWhen
  <br/>
  <br/>--- Filtering
  <br/>------ audit
  <br/>------ debounce
  <br/>------ distinct   
  <br/>------ filter 
  <br/>------ find 
  <br/>------ first 
  <br/>------ last
  <br/>------ single 
  <br/>------ skip   
  <br/>------ take 
  <br/>------ throttle 
  <br/>
  <br/>--- Multi-cast
  <br/>-------- multicast
  <br/>------ 
  <br/>--- publish 
  <br/>-------- share 
  <br/>
  <br/>--- Transformation -
  <br/>------ buffer
  <br/>------ concatMap   
  <br/>--------- expand 
  <br/>------ map - data stream transformation operator wrt arrays
  <br/>----------- map(x => x*x )
  <br/>------ mergeScan 
  <br/>---------- reduce - reduces value from source Observable to 1 value 
  <br/>---------- scan - like reduce for Arrays
  <br/>------ switchMap 
  <br/>--------- toArray 
  <br/>--------- window 
  <br/>
  <br/>
  <br/>
  <br/>Observables -
  <br/>--- emits many objects (stream) over time - Cancellable | Hot\Code| Subscribe() | 
  <br/>
  <br/>--- Observables and the RxJS operators can manipulate 
  <br/>----- streams of data over time 
  <br/>
  <br/>--- like promises handling async requests 
  <br/>--- handle multiple events - 
  <br/>------ cancellable (wrt a promise)
  <br/>--- can be Hot (always emitting) | Cold (only when subscrubed to)
  <br/>
  <br/>--- can use RxJS to manipulate Observables
  <br/>
  <br/>--- Subscribe() works on Cold Observables to get at the data
  <br/>
  <br/>--- can work with Subscribers to create multicasting Observables
    -
  <br/>----- and use Subjects to aid working with them -
  <br/>-------simplifying subscription and allow 
  <br/>---------multi-casting events around the application. 
  <br/>
  <br/>Routing and Component Router -
  <br/>--- path | component | router-outlet| routerLink | ActivatedRoute | Router Guards 5 |   
  <br/>
  <br/>@Input and @Output
  <br/>--- for updating child with parent info and sending data from child to parent 
  <br/>
  <br/>Lazy Loading 
  <br/>--- So you only load modules when info is required and hence smaller initial load 
  <br/>----- lazy load Components too - 
  <br/>
  <br/>Change Detection
  <br/>--- Zones - ngZone | ChangeDetectorRef - 
  <br/>
  <br/>AoT (Ahead of Time) Compilation -compiler runs once at build time
  <br/>--- browser downloads a pre-compiled version of an application 
  <br/>--- browser loads executable code - render app'n immediately
  <br/>------ few async requests - 
  <br/>
  <br/>Tree Shaking - Dead code elimination - 
  <br/>
  <br/>APF (Angular Package Format)
  <br/>
  <br/> -- 
  <br/>Ivy (new Ang 9+)
  <br/>--- Incremental DOM -
  <br/>--- Locality - 
  <br/>--- 3 phase Compiler - Code Analysis | Code Generation | Template TypeChecking
  <br/>
  <br/>View Engine (old Angu 4 to 8)
  <br/>--- rotating 8 phase AOT Compiler  
  <br/>
  <br/>Promises - emit 1 object - not cancellable - async 
  <br/>--- 
  <br/>
  <br/>Observables and the RxJS operators 
  <br/>--- can manipulate streams of data over time 
  <br/>---- and use Subjects to aid working with them 
  <br/>------ simplifying subscription and allow multi-casting events 
  <br/> --------- around the application. 
  <br/>
  <br/>RxJS (Reactive Extensions)
  <br/>Higher Ordrer Mapping ftns
  <br/>
  <br/>Forms
  <br/>--- Template - 
  <br/>------- 
  <br/>--- Reactive -
  <br/>-------  
  <br/>
  <br/>ElementRef | ViewContainerRef| View DOM | Content DOM
  <br/>@ViewChild and @ViewChildren | @ContentChild | @ContentChildren
  <br/>
  <br/>Transclusion (Content Projection)
  <br/>
  <br/>HTTP-HttpClient 
  <br/>--- Get or Post information / data between server and client - 
  <br/>--- HttpInterceptor - 
  <br/>
  <br/>GIT (Global Info Tracker) - 
  <br/>--- 3 parts - Working tree | Staging area| Local repo + Remote repo
  <br/>------ Git cmds - Staging (index) | Stashing | Branches | 
  <br/>------ Checkout | commit | push| pull | Master | HEAD |
  <br/>
  <br/>Angular appns vs Angular custom libraries
  <br/>--- Libraries - 
  <br/>
  <br/>Caching
  <br/>--- Stored on disk or memory - 
  <br/>--- Cache HTTP Requests helps to optimize your appn 
  <br/>------- HttpInterceptor 
  <br/>--- ng cache 
  <br/>
  <br/>Storage -  
  <br/>--- 
  <br/>
  <br/>CQRS (Command Query Responsibility Segretation)
  <br/>
  <br/>NGXS - simpler to learn | less boilerplate code
  <br/>----- is modeled on CQRS pattern - 
  <br/>
  <br/>ngrx - () (Reactive State Management)
  <br/>--- ngrx Store -
  <br/>------ provides reactive state management for Ang Apps
  <br/>------ is a controlled state container - simplifies state to objects
  <br/>---------- State is Read only - Single source of truth
  <br/>---------- Data stored in Observable in a service called Store in client
  <br/>---------- Changes made with Reducer 
  <br/>--------- Unify events in your appn and derive state using rxjs 
  <br/>------ composes map of Reducers mapped into 1 Reducer 
  <br/>
  <br/>--- Actions - express unique events 
  <br/>------ extend NgRx Action - 
  <br/>--------- type property -
  <br/>--------- payload property  
  <br/>
  <br/>--- Reducer - pure functions -  
  <br/>
  <br/>--- Selector - read store | state - 
  <br/>
  <br/>--- Effects - asynchronous actions - 
  <br/>------- DJ of the ngrx dance floor
  <br/>
  <br/>--- store-devtools - 
  <br/>
  <br/>--- schematics
  <br/>
  <br/>--- meta-Reducers - hooks into action reducer pipeline  
  <br/>------ higher order reducer ftn - takes reducer - returns new reducer
  <br/>
  <br/>--- ngrx-Entity - small library to help keep entities in ideal Entity state format
  <br/>------- array of ids + map Entities 
  <br/>------- used with ngrx Store 
  <br/>------ entity-adapter -   is a JS object containing 
  <br/>---------- generated Reducer ftns
  <br/>---------- original provided selectId 
  <br/>---------- sortComparer callbacks
  <br/>---------- method to generate initial Entity State value 
  <br/>---------- ftns to generate memoized selector ftns for this entity (global| non-global)
  <br/>
  <br/>--- ngrx Data - 
  <br/>
  <br/>SHARI - Shared Hydraded Available Retrieved Impacted
  <br/>
  <br/>--- 
  <br/>Angular main libraries
  <br/>
  <br/>
  <br/>---
  <br/>Security -
  <br/>--- XSS - CSRF |
   XSRF | Output encoding | Sanitation | OWASP | SNYK 
  <br/>
  <br/>--- 
  <br/>Schematics -  
  <br/>--- template based code generator - supports complex logic
  <br/>--- Angular CLI uses schematics - to apply transforms to a web project 
  <br/>------- ng g | ng add
  <br/>
  <br/>CI/CD Jenkins - automation server | reliably build | test | deploy S/W
  <br/>
  <br/>--- Continuous Integration - pipeline 
  <br/>------ drive devt teams to freq imp small code canges 
  <br/>------ check them in to a version control repo   
  <br/>
  <br/>--- Continuous Delivery 
  <br/>------
  <br/>
  <br/>--- 
  <br/>Testing - Unit | Integration | End to End
  <br/>-- Unit
  <br/>----- Jasmine Spy - 
  <br/>----- Karma 
  <br/>-------- Component Harness - test interact with a Component
  <br/>
  <br/>-------- TestBed - creates Angular testing Module (@NgModule)
  <br/>------------configureTestingModule - dyn constructed Ang test module
  <br/>------------lets us test the Component DOM 
  <br/>----- Wallaby.js
  <br/> -- 
  <br/>-- Integration
  <br/>----- combine 2 or more Unit Tests 
  <br/> --  
  <br/>-- End to End
  <br/>----- Protractor
  <br/>----- Cypress 
  <br/> --  
  <br/>
  <br/>--- 
  <br/>ESLint - 
  <br/>--- id + report on patterns found in ES/JS code for TS|JS code
  <br/>--- goal of making code more consistant and avoiding bugs  
  <br/>--- Static Analysis - AST (Abstract Syntax Tree)
  <br/>
  <br/>Webpack 
  <br/>--- is a module bundler - bundle JS files for usage in a browser 
  <br/>--------- supports both ESM and CommonJS
  <br/>--- extended to support HTML| CSS| images | fonts| stylesheets
  <br/> -- 
  <br/>Cloud - AWS | Azure
  <br/>------ long running reliable storage services
  <br/>------ services - Servers| Storage| DBs| Networking| S/W| Analytics| etc.
  <br/>  
  <br/>--- AWS (Amazon Web Services) -
  <br/>------ S3 -
  <br/>------ EC2 -
  <br/>------ EBS -
  <br/>------ ECS
  <br/>------ Glacier -  
  <br/> 
  <br/>--- Azure - cheaper -  
  <br/>------ Blob Storage
  <br/>------ Disk Storage
  <br/>------ Queue Storage 
  <br/>------ Standard Archive
  <br/> 
  <br/> --
  <br/> 
  <br/>REST - Swagger | 
  <br/>
  <br/>Debugging Angular 
  <br/>
  <br/>Other
  <br/>
  <br/>Angular Components (Angular Material)
  <br/>PWA (Progressive Web Appns) - Service Workers
  <br/>Angular Elements
  <br/>Web Workers
  <br/>Angular Universal
  <br/>Flex-layout
  `,
 
  `JS Framework 
    <br/>akin to ReactJS and Vue 
   SPA (Single Page Appn) Web Framework 
   <br/>
   <br/>  mobile-laptop-desktop
   <br/>primarily used for writing Front End Appns 
   <br/>--- written in TypeScript 
   <br/>--- which are then transpiled to JS 
   <br/>-------to run on the browser
   `,
  ' -- ',
  `-- main parts - Components - Directives - Pipes - Services - Modules 
  `,
  `--- Components 
  <br/>------- are the most important part of an Ang appn 
  <br/>------- they have a @Component decorator with a selector - template and optional style
  <br/>----------- selector: - 
  <br/>----------- templateUrl: 'extUrl' | template: \` Hello world \` 
  <br/>----------- styles or styleUrls metadata
  <br/>  
  <br/>-------  They must have a template - either internal or external with HTML   
    <br/>
    <br/>-------- The class can have constructor - properties - methods - events 
    <br/>
    <br/>-------- Can import services into the constructor using DI 
    <br/>
    <br/>-------- Data binding - interpolation {{}} | property [] | event () | [( ngModel )]  
    <br/>-------- Can have child Components and use @Input() / @Output() with EventEmitter()
    <br/>
    <br/>-------- Life Cycle Hooks define how the Component operates from creation to destruction
    <br/>-------- most common ngOnInit()
    <br/>
    <br/>-------- Component Tree - each component has a ChangeDetector - to react to changes and ensure View is correct
    <br/>-------- Style of the parts of the data - 
    <br/>
    <br/>-------- Best to store Component data as immutable Observables which can then be manipulated using RxJS library
    <br/>
    <br/>-------- Subjects - like BehaviorSubject let us turn Observables into multi-cast objects
    <br/>-------- can use this to ref data or methods in the Component - 
  `,
  `--- template: or templateUrl:
  <br/>------- These are how the Component will look or display 
  <br/>------- are adjacent to the Component - not part of it
  <br/>----------- External file - usualy html
  <br/>----------- Internal inside \` and \` marks
  <br/>
  `,
  `--- Directives - are classes that add extra behavior to elements in Angular appns 
  <br/>
  <br/>------ Cant have a template - (unless a Component) 
  <br/>
  <br/>------ let us define a different style (attribute) or add or remove parts to HTML (template) but normally dont have templates
  <br/>
  <br/>------ decorator @Directive({}) 
  <br/>
  <br/>------ 3 types - attribute | template | Components -  
  <br/>
  <br/>----- template directives
  <br/>--------- *ngIf
  <br/>----------- Selection true or false
  <br/>
  <br/>--------- *ngFor
  <br/>----------- iterable of items
  <br/>
  <br/>--------- *ngSwitch
  <br/>
  <br/>--------- &lt;ng-template>
  <br/>------------- determines when to show
  <br/>------------- &lt;ng-container>
  <br/>------------- &lt;ng-content>
  <br/>------------- &lt;ngTemplateOutlet>    
  `,

  `Pipes 
    <br/>--- transform data in the template
    <br/>--- accept input value and return a transformed value
    <br/>
    <br/>--- simple ftns to use in Template expressions
    <br/>
    <br/>--- pure and impure - decoraor - @Pipe() 
    <br/>--- used in a template HTML to modify data 
    <br/>
    <br/>--- use throughout appn but only declare once  
    <br/> -- 
    <br/>-- inbuilt Pipes
    <br/>----- DatePipe
    <br/>----- CurrencyPipe
    <br/>----- DecimalPipe
    <br/>----- UpperCasePipe
    <br/>----- LowerCasePipe
    <br/>----- Percent  Pipe
    <br/>
    <br/>----- async Pipe
    <br/>----- json Pipe
    <br/>
    <br/>---2 types 
    <br/>------ Pure Pipes
    <br/>--------- only use CD on branch with Directive
    <br/>--------- are much faster
    <br/>
    <br/>------ Impure Pipes
    <br/>--------- run CD on whole appn 
    <br/>--------- are much slower
    <br/>
    <br/>--- Custom Pipes - @PipeTransform with transform()
    `,
    `--- CD (Change Detection)
    `,
    `Services and Dependency Injection 
    <br/> - implemented as a simple class with @Injectable({}) decorator - 
    <br/>ng g s my-service
    <br/>can be reussssed in several different Components so data can be shared 
    <br/>We can have nested services -  
      <br/>
      <br/>A provider is an instruction to the DI (Dep Injection) system 
      <br/>on how to obtain a value for a dependency
      <br/>
      <br/>- most of the time these dependencies are services 
      <br/>that you create and provide
      <br/>
      <br/>@Injectable({}) - ensures the compiler will generate the reqd metadata to create classs deps when class is injected 
      <br/>- ng g s my-service
      <br/> 
      <br/>providedIn? - determines which injectors will provide the injectable 
      <br/>- @Injectable({ providedIn : \'root\',}) - (appn - or root level injector) you can now inject the service anywhere in your appn     
      <br/>      
      <br/>- @Injectable({ providedIn : \'platform\',}) - a special singleton platform injector via a service - shared by all appns on page    
      <br/>
      - <br/>- @Injectable({ providedIn : \'any\',}) - provides a unique instance in each lazy loaded module | all eagerly loaded modules share one instance 
      <br/>
      <br/>- @Injectable({ providedIn : \'Type<any>\',}) - associates the injectable with an @NgModule or other injector types 
      <br/>
      <br/>Services and DI - 
      <br/>Services are the provider from Injector hierarchy
     `,
      `DI (Dependency Injection) - is a design pattern  
    <br/>--- in which a class requests dependencies from external sources    
  <br/>------ (wrt creatng them) 
  <br/>  
 <br/>---- provides dependencies to a class upon instantiation
 <br/>
 <br/>---- is used to increase flexibility + modularity in your appns
 <br/>
 <br/>-- by default - DI searches for a Provider in the Injector Hierarchy
 <br/>
 <br/>---- First injector found 
 <br/>------- configured with a provider (matching) 
 <br/>------- supplies the dependency
 <br/
 <br/>-- Injector Hierarchy DI system
 <br/>---- Injector Tree echoes the Component Tree
 <br/> ------ every Component has its own injector
 <br/>
 <br/> ------- When a Component requests a dependency 
 <br/>------- Angular uses a Provider regd in the Components Injector
 <br/>
 <br/>------- if Component injector has no provider - passes to parent Components Injector
 <br/>
 <br/>
  
     <br/>-- Injector Hierarchy DI system
     <br/>---- Injector Tree echoes the Component Tree
   <br/> ------ every Component has its own injector
   <br/>
   <br/> ------- When a Component requests a dependency 
   <br/>---------- Angular uses a Provider regd in the Components Injector
   <br/>
   <br/>------- if Component injector has no provider 
   <br/>--------- passes to parent Components Injector
   <br/>
   <br/>
   
   <br/>- View object - an internal object that reps Ang template
   <br/>--- Ang builds a tree of views 
     <br/>----- which always starts with a fake root View
     <br/>----- that only contains 1 root element
     <br/>----- Ivy uses LView and TView.data arrays
     <br/>
     <br/>------- Injector Bubbling - 
     <br/>---------- Components local injector
     <br/>---------- root injector
     <br/>---- 2 Injector Hierarchies
     <br/>------- injectors - key-value pairs 
     <br/>------- ModuleInjector (Ivy R3Injector) but (Ang 14 - EnvironmentInjector)
     <br/>----------- a Module level injector
     <br/>--- has a Records property that stores DI info 
     <br/>------ and stores instances of injectables    
     <br/>
     <br/>------ get() records a Map collection
     <br/>-------- key is a token 
     <br/>-------- value is instance corresponding to token    
     <br/>
     <br/>------- ElementInjector (Ivy NodeInjector)
     <br/>is an injector that belongs to a node
     <br/>is an object that has ref to TNode and LView objects
     <br/> 
     <br/>--------- NodeInjector implements Injector is saved in
     <br/>----------- 9 contiguous slots in LView +
     <br/>----------- 9 contiguous slots in TView.data  
    <br/>----------- object refs to
   <br/>------------- TNode - any kind of object : 
   <br/> - element| ng-template| ng-container
   <br/>
   <br/> - Ang creates a injectorIndex property on TNode 
   <br/>--- where bloom filter is located. 
   <br/> - The NodeInjector gets required provider by looking at the data 
   <br/> - contained in TNode and LView objects
   <br/> - Ivy renderer - stores injection info for the Node in the view data
   <br/> - start from a header (17 slots) 
   <br/> --- contains ref to parent injector at index 10  
   <br/> - It allocates allocates slots in LView + TView.data arrays    
   <br/>
   <br/>------------- LView - contains DI info 
   <br/>  array contains data 
   <br/>------------- describing a specific template
   <br/> stores instances -
   <br/> After each bloom filter - Ang stores parentLocation ptr  
   <br/> ---   we can walk through all parent injectors     
   <br/>
   <br/>------------- TView.data array - Ang keeps data shared x templates 
   <br/> stores all tokens 
   <br/>
   <br/>--------------- These slots rep 2 bloom filters - Cumulative + template    
   <br/> - 1 view can have as many bloom filters or injectors 
    <br/> - for nodes located on the view
    <br/>
    <br/>
    <br/>--------------- using Bloom filter
     <br/> -   8 slots long ([n, n+7] indices) - 
     <br/>Their number is directly proportional to the num of nodes  
     <br/>-- for which the injector is created
     <br/>
     <br/>Each bloom filter has a ptr to the parent bloom filter 
     <br/>--- in the "packed" parentLocation slot (n + 8)
     <br/>
     <br/> Ivy bloom size is 256 bits - divided into 8 parts - 
     <br/>---
     <br/>
   <br/>---- Sandboxing - Multiple service instances 
   <br/> ------ at the same level of the Component
   <br/> ------ eg A Service that holds state for its companion comp instance
   <br/>
   <br/>------- Multiple Service Instances
   <br/>
   <br/>------ @Host() - limits the search for a matching provider
   <br/>------- root injector -  
   <br/>
   <br/>----- @Optional()
   <br/>----- @Self() 
   <br/>----- @SkipSelf()
   <br/>----- 
   <br/>- DI Tokens - When you configure an injector with a provider - you are associating that provider with a DI token
   <br/>The injector lets Angular create a map of any internal dependencies.
   <br/>
   <br/>The DI token - acts as a key to that map - 
   <br/>The dep value is an instance & the class type serves as a look up key 
   <br/>
   <br/>eg. Here the injector uses HeroService type as the token for looking up heroService 
   <br/>constructor(private heroService: HeroService){}  
   <br/>   
   <br/>-- DI Parts - injector | provide | dependency provider | provide defn key
   <br/>-- Dependency Provider - configures provider with a DI token 
   <br/>which that injector uses to provide the runtime version of a dep value
   <br/>
   <br/>-- Defining Providers - provide: [Logger] same as [{provide: Logger, useClass: Logger}]
   <br/>class provider syntax - is a shorthand expression for a provider confign defined by the Provider interface
   <br/>Above is a class provider syntax for providing a Logger class in the providers array
   <br/>Note the provide property holds the token - key for locating a dep value and config injector
   <br/>Note 2nd property is a provder defn object - which tells injector how to create the dependency value    
   <br/>
   
   <br/>-- [Logger] same as [{provide: Logger, useClass: Logger}]
   <br/>-- provider defn key - useClass | useExisting | useValue | useFactory
   <br/> to configure the injector - keys for tokens
   <br/>
   <br/>--- Providers with deps
   <br/>---- aliasing class providers - useClass
   <br/>[{ provide: Logger, useClass: BetterLogger }]
   <br/>
   <br/>---- aliasing class interface - useExisting
   <br/>---- aliasing multi class i/fs
   <br/>---- injecting an Object - configure with a useValue option
   
   <br/>[{provide: Logger, useValue: SilentLogger}]
   <br/>
   <br/>---- injecting a config Object
   <br/>---- InjectionToken object
   <br/>---- interfaces and DI  
   <br/>---- Using factory providers - useFactory field - specifies provider is a factory ftn whose impn is here - heroServiceFactory
   <br/>export const heroServiceProvider =
   <br/>  { provide: HeroService,
     <br/>    useFactory: heroServiceFactory,
     <br/>deps: [Logger, UserService]
     <br/>  };  
     <br/>
     <br/>class +
     <br/> '@Injectable({}) 
     <br/> '- declare locn', '- nesting','- Sharing','typical tasks',
     <br/> '- Providing a Service', 
     <br/> '-- @injectable({ providedIn: \'root\'})',
     <br/> '--- providedIn: \'root\'',
     <br/> '--- providedIn: \'platform\'',
     <br/> '--- providedIn: \'any\'',
     <br/>--- providedIn: &lt;T>\' 
    
 `,   

 ' -- ', 
  `Angular CLI (Command Line Interface) tool - 
        <br/>lets you initialize | develop | Scaffold | maintain | build| serve 
        <br/>--- Angular apps directly from a Cmd line - prompt 
        <br/>
        <br/>--- uses ng xxx commands 
        <br/> 
        <br/>--- uses Node.js | npm and Schematics and Webpack 
        <br/>
        <br/>CLI includes a Server to let you build, serve and test app locally  
        <br/>--- uses builder dev-server 
        <br/>----- when ng serve - port 4200 by default on localhost 
        <br/> 
        <br/>requires Node.js | npm (Node Package Manager)
        <br/>
        <br/>npm install -g @angular/cli   
        <br/>
         <br/>- CLI Commands
         <br/>--- ng new
         <br/>--- ng add
         <br/>--- ng generate
         <br/>--- ng build
         <br/>--- ng update
         <br/>--- ng serve
         <br/>------- uses build dev-server
         <br/>--- ng test
         <br/>--- ng deploy
         <br/>--- ng help
         <br/>
         <br/>- uses Schematics
         <br/>--- Virtual file system 
         <br/>----- base + staging area + add mod'ns to staging area 
         <br/>---- Rule object - takes a Tree | applies transformations | returns tree
         <br/>----- index.ts is main file for schematic - contains schematic logic    
         <br/>---- Actions - Create | Rename|   Overwrite | Delete
         <br/>---- Each schematic runs in a context - SchematicContext object 
         <br/>  
         <br/> uses Webpack 
        <br/>--- behind the scenes - no webpack.config.js file to use
        <br/>
         <br/>-- Angular 12 and above uses Webpack 5 
         <br/>---- long term caching - 
         <br/>
         <br/>---- Module Federation 
         <br/>------ loading remote modules + stitch with appn at runtime 
         <br/>-------- game changer in JS world 
         <br/>------ allows multiple Webpack builds to work together 
         <br/>
         <br/>---- Custom Webpack configuration - 
  ----- server - test locally - default port - localhost:4200
  -------- ng add | ng generate - uses schematics to create library
  `,
 `--------- --- uses Schematics to apply transforms to a web-app project
 <br/>---- guard against errors by creating a virtual file system      
 <br/>-------- Virtual File Syste - is repd bu a tree - 
 <br/>------  Schematic describes a pipeline of transformations applied to Virtual FIle System
 <br/>------- When schematic is run - transformations are recorded in memory 
 <br/>---------- only applied to real file system - once checked to be valid
 <br/>
 <br/>---- custom schematics - 
 <br/>------ virtual file system
 <br/>--------  tree
 <br/>----------  base + staging area (changes)',
 <br/>--------  Rule object = transformations',
 <br/>--------  4 Actions - Create | Rename | Overwrite | Delete',
 <br/>--------  SchematicContext - Each Schematic runs in a context repd by a SchematicContext object 
 <br/>------- The context object passed into a rule provides access to utility ftns + metadata - wrt schematic 
 <br/>---------- including logging API to help debugging
 <br/>-----------also defines a merge strategy - staged tree to base tree      
 <br/>----- Packaging schematics with libraries - lets you integrate them with CLI
 <br/>----- Schematics can be chained
 <br/>--- uses ng-packagr - to produce npm packages in APF format 
 `,
 `--- CLI uses Webpack behind the scenes - to minify and speed up appn 
    <br/>--- is a module bundler with its main purpose is to bundle JS files for usage in a browser
    <br/>It scans appn looking for JS files - merging them into 1+ large files - bundles any kind of file
    <br/>
    <br/>Once installed you can interact with webpack either with CLI or API
    <br/> 
    <br/>A tool that lets you compile JS modules
     <br/> 
     <br/>It generates 1 file (or a few files) to run your app
     <br/>
     <br/>npm install --save-dev webpack 
     <br/>
     <br/>The most modern modules are ESM (EcmaScript Modules) supports ES2015+ | CommonJS| AMD modules out of the box  
     <br/>- performs clever static analysis of the AST of your code - 
     <br/>- has an evaluation engine to evaluate simple expressions - supports most libraries out of the box
     <br/>
     <br/>Code Splitting - lets you split your codebase - into multiple chunks 
     <br/>
     <br/> - Chunks are loaded asynchronously at runtime - Reduces the initial loading time
     <br/>
     <br/>Optimizations - Webpack can do many optns to reduce the output size of your JS by dedup freq used modules - minifying and giving you full control of what is loaded initially
     <br/>- and what is loaded at runtime through code splitting 
     <br/>
     <br/>- It can also make your code chunks cache friendly by using hashes  
     <br/>
     <br/>Has a rich plugin interface - very flexible - 
     <br/>
     <br/>Enables use of Loaders to preprocess files - lets you bundle any static resource - beyond JS Use Node.js to write your own
     <br/>
     <br/>uses async I/O and has multiple caching levels - very fast on inc compilations
    `,
 ' -- ', 
    `--- Modules - is a mechanism to group
    <br/>----- components | directives | pipes | services that are related
    <br/>----- Modules can be combined with other Modules to create an Appn 
    <br/>
    <br/>----- Angular loads as a collection of Modules 
    <br/>
    <br/>----- NgModule - is a class marked by the @NgModule decorator 
    <br/>-------- takes a metadata object that describes how 
    <br/>-------- to compile a components template 
    <br/>-------- and how to create an injector at runtime 
    <br/> 
    <br/>----- configure the injector and the compiler 
    <br/>-------- and help organize related things together
    <br/>
    <br/>--- Diff between JS Module and Angular Module
    <br/>------ 1: JS Module (ESM) is a file 
    <br/>------ 2: Angular Module is a class with related Components, Directives, Pipes, Services etc.
    <br/>
    <br/>----- @NgModule
    <br/>------base class of Std Angular libraries
    <br/>------  
    <br/>
    <br/>----- Bootstrapping
    <br/>------ 
    <br/>------ 
    <br/>
    <br/>----- Ang AppModule - root
    <br/>
    <br/>
    <br/>------- DoBootstrap - hook for manual bootstrapping of the appn
    <br/>--------- ngDoBootstrap()
    <br/>
    <br/>--------- ngDoBootstrap()
    <br/>class AppModule implements DoBootstrap {
      <br/>ngDoBootstrap(appRef: ApplicationRef) {
        <br/>  appRef.bootstrap(AppComponent); // Or some other component
        <br/> }
        <br/>}
    `,
    `Lazy Loading - is the process of loading Components | Modules | other assets 
    <br/>--- as they are required 
    <br/>----- NgModules can be lazy loaded -
    <br/>
    <br/>------ with a SPA normally loads of unneccesary things are loaded at once
    <br/>----------- eg libraries and modules 
    <br/>--------------- load time increases 
    `, 
     ' -- ',
  `--- ES EcmaScript - modern JavaScript
    <br/>is a JS std to ensure interoperability of web pages wrt diff browsers
    <br/>
    <br/>------ since then there have been several updates
    <br/>-------- ES - 2020
    <br/>-------- ES - 2022
    <br/>
    <br/>These add features onto the original JS to simplify coding 
    <br/>eg. Fat Arrow ftns | const | let with block scope | Promises | \`\` string literals
    <br/>---- string and array functions too 
    <br/>
    <br/>    -- modern JavaScript
    <br/>    ---- ES6 (ES 2015)
    <br/>    ------ let const var
        <br/>----- let - has block scope
        <br/>----- const - has block scope
        <br/>----- var - has function or app scope
        <br/>
        <br/>---- fat arrow ftns (x)=> x * 2;
        <br/>---- For/of
        <br/>
        <br/>const cars = ["BMW", "Volvo", "Mini"];
        <br/>let text = "";
        <br/>
        <br/>for (let x of cars) {
          <br/>text += x + " ";
        <br/>}\`,
        <br/>---- Map Objects
        <br/>---- Classes
        <br/>---- Promises
        <br/>---- defaul params
        <br/>---- ftn rest params
        <br/>
        <br/>---- String -
        <br/>------- includes | startsWith | endsWith
        <br/>
        <br/>------- string.includes()
        <br/>------- string.startsWith()
        <br/>------- string.endsWith()
        <br/>
        <br/>---- Array -  
        <br/>-------    from | keys | find() | findIndex()
        <br/>------- array.from()
        <br/>------- array.keys()
        <br/>------- array.find()
        <br/>------- array.findIndex()

        <br/>---- Object entries
        <br/>---- JS Modules
        <br/> --
        <br/>--- JavaScript features
   
  `,

  `----- ESM (ES Modules)
  <br/>---- leads to fast reload speeds and smaller bundles 
  <br/>------ ES5 is associated with the original JS
  <br/> 
  <br/>------ Es2015 (ES6) - is associated with 1st ES roll out
  `,
  `--- Vite
  <br/>------ ESMs (ES Modules to file) direct to browser | PreBunles | 1 request | when starting server
  <br/>--- a dev server - for answering browser requests
  <br/>--- serving the reqd ESMs
  <br/>   
  <br/>--------- modern browsers can use ES Modules directly 
  <br/>--------- no need to generate a bundle 
  <br/>--------- just load the few ESM needed for the page
  <br/>--------- browser loads reqd imports using HTTP Requests  
  <br/>
  <br/>--------- Vite sometimes needs to transform files into ESMs using ESBuild
  <br/>------------ then sends the ESM to the browser  
  <br/>------------ Modifying a file just means changing 1 ESM and sending it to browser
  <br/>---------------- Webpack tools must rebuild the whole bundle 
  <br/>
  <br/>------------ Prebundles thousands of files into 1 file using esbuild 
  <br/>--------------- serves to browser in 1 request   
  <br/>
  <br/>---------- need to use RollUp at the moment for code splitting etc
  <br/>------------- 
  `,
  `TypeScript - JS with the power of types - 
      <br/>data types - number | string | boolean | Array | 
      <br/>---- null | undefined
      <br/>---- helps avoid static type errors - discover at Compile time (not runtime)
      <br/> 
      <br/>- Object Oriented Language
      <br/>- strongly typed and uses inferred types 
      <br/>- interfaces and types   
      <br/>
      <br/>A Strongly Typed Programming Language
      <br/>- Can be used in any browser or JS engine (ES6) ie. Node.js   
      <br/>
      <br/>tsc transpiles ts down to .js files 
      <br/>--- run in the browser 
      <br/>
      <br/>-- Compile time Type Checking 
      <br/>
      <br/>uses tsconfig.json - configures TS
      <br/>--- compilerOptions and AngularCompilerOptions
  <br/>
  <br/>tooling - auto-completion | navigation | refactoring - 
  <br/>
  <br/>--- tsc - TypeScript Compiler
  <br/>----- transpilation
  <br/>--- tsconfig.json
  <br/>-- TS Libraries  
  <br/>  
  <br/>--- ngc c  ompiler uses tsc (TypeScript) compiler 
   <br/>------ Webpack used by the Angular/CLI
   <br/>------ 
  `,
  ' -- ',
  `--- Template Ref Variables
  <br/> ---- uses # to access variables in the templlate
  `,
  ' -- ',
  `-- Data Binding - Interpolation {{}} | Property Binding []| Event Binding ()| Two way Binding [()]
  <br/>
  <br/>---- Interpolation - embedding expressions into marked up text 
  <br/>------ Default uses {{ x }} as delimiters
  <br/>------- allows you to incorporate calculated strings into the text 
  <br/>--------- between HTML element tags and within attribute assignments      
  <br/> -- 
  <br/>---- Property binding - [] 
    <br/>--- Properties are features of DOM nodes 
    <br/>----- from view target to data source
    <br/>------- RHS of binding is a template expression
    <br/>--------- It should equate type of value - number | string| etc
    <br/>----- Ex Property Binding
    <br/>-------- @Input() childItem=''; // string
    <br/>---------using selector
    <br/>------------ &lt;app-item [childItem]='parentItem'>&lt;/app-item>
    <br>//------------ eg parentItem = 'lamp'
    <br/>
    <br/>-------- passing an Object eg array
    <br/>---------- @Input() items: Item[] = [];
    <br/>------------ &lt;app-item [items]='currentItems'>&lt;/app-item>
    <br/> -- 
    <br/>-- Event Binding - () to fire an event 
    <br/>---- @Output() - lets a child send data to the parent component
    <br/>   
    <br/>---- EventEmitter() - should have a type of EventEmitter()
    <br/>------- @Output() newItemEvent = new EventEmitter<string>()
    <br/>
    <br/>--------- We call the emit() on the @Output() variable
    <br/>-------------- this.newItemEvent.emit('Hello World');
    <br/> -- 
    <br/>-- Two Way Data Binding [()] - 
    <br/>---- will help users to exchange data 
    <br/>------ from the component to view
    <br/>------ and from view to the component [()] 
    <br/>---- Two way data binding can be achieved using an ngModel directive
    <br/>------- [(ngModel)] - requires the FormsModule in AppModule
    <br/>
    <br/>---- or using Custom Two Way Data Binding
    <br/>export class SizerComponent {
      <br/>
      <br/>@Input()  size!: number | string;
      <br/>@Output() sizeChange = new EventEmitter&lt;number>();
      <br/> 
      <br/>dec() { this.resize(-1); }
      <br/>inc() { this.resize(+1); }
      <br/>
      <br/> resize(delta: number) {
        <br/>this.size = Math.min(40, Math.max(8, +this.size + delta));
        <br/>this.sizeChange.emit(this.size);
        <br/>}
        <br/>}
        <br/>
  <br/>
  <br/>&lt;app-sizer [(size)]="fontSizePx">&lt;/app-sizer>
  <br/>
  <br/>In app.component  
  <br/>&lt;app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event">&lt;/app-sizer> 
  <br/>&lt;div [style.font-size.px]="fontSizePx">Resizable Text&lt;/div>
    `,
    `Life Cycle Hooks - A component has a life-cycle that starts when 
    <br/>Angular instantiates the Component class 
    <br/>and renders the Component view and child views -
    <br/>
    <br/>We can fine tune the hehavior of our components during creatin | update | destruction
    <br/>
    <br/>
    <br/>Life Cycle Hooks (LCH)
    <br/>--- ngOnChanges - details which properties have changed and how theyve changed  
    <br/>
    <br/>--- ngOnInit - the most common LCH contains initialisation logic for the Component
    <br/>
    <br/>--- ngDoCheck()
    <br/>
    <br/>--- ngAfterContentInit
    <br/>
    <br/>--- ngAfterContentChecked
    <br/>
    <br/>--- ngAfterViewInit
    <br/>
    <br/>--- ngAfterViewChecked
    <br/>
    <br/>--- ngOnDestroy 
    <br/>-------- which is where we place the cleanup logic for the Component
    `,
    ' -- ',
    `Routing - ComponentRouter - to handle the navigation from 1 view to the next 
    <br/>--- Interpreting browser URLs as an instn to change view -
    <br/>ng new ang-app --routing --defaults 
    <br/>
    <br/>using the Angular CLI to generate a basic Ang appn with routing enabled 
    <br/>We can use ActivatedRoute and to get data about the Routes
    <br/>
   <br/>&lt;router-outlet>&lt;/router-outlet> lets us position the routing infon in our Component template -
   <br/>   
    <br/>routing normally uses RouterModule.forRoot(routes) where routes defines the actual component routes linking URL paths with various components 
    <br/>
    <br/>Lazy Loading - 
    <br/>--- Note that Lazy Loading can use Routing using a RouteModule.forChild(routes)
    <br/>---- We can use the Router Resolver to prefetch data to ensure the data is objtained first - 
    `,
    ' -- ',
    `- Styles CSS | SCSS| SASS
    <br/>--- Angular uses styles to change various visual features of an el
    <br/>----- color | background-color | size| width | height | font-weight 
    <br/>
    <br/>Units 
    <br/> - mm | px | pt|  em| rem |   
    <br/>
    <br/>mm -  
    <br/>px -
    <br/>pt - 
    <br/>em - rel to font size - 2em means 2 x current font
    <br/>rem - relative to font size of root el
    <br/>vw - rel to 1% of width of Viewport 
    <br/>vh - rel to 1% of height of Viewport 
    <br/>% - rel to parent el 
    <br/>
    <br/>--- CSS Box Model - box that wraps every HTML element
   <br/>------ Content| Border | Margin | Padding
   <br/>
   <br/>---- Border
   <br/>------- dotted| dashed| solid| double| inset| ridge| none| hidden|
   <br/>----------- border: 4px dotted blue;
   <br/>
   <br/>---- Margin - 
   <br/>------- margin-top: 100px;
   <br/>
   <br/>---- Padding -
   <br/>------- padding-right: 30px;  
   <br/>  
   --- SCSS (Sassy CSS) (Syntactically Awesome StyleSheets)  pre-compiler
    <br/>------ CSS with SuperPowers
    <br/>------ most mature | stable| powerful | professional grade CSS extn language
    <br/>------ uses block formatting like CSS with { and ; } 
    <br/>
    <br/>Styles of larger projects are usually divided into partials
    <br/>-- to make it easier to find the code you need to target
    <br/>-- makes project easier to manage and make changes 
    <br/>--
    <br/>-- Partials can be loaded inside other stylesheets to create global styles  
    <br/>----- for Components and sections - on your site
    <br/>------- helps to keep code DRY and readable
    <br/>--
    <br/>@import - lets you import SASS/CSS into another stylesheet
    <br/>
    <br/>@use lets us break our stylesheet into more practical smaller sections 
    <br/>--- and load them inside other stylesheets
    <br/>--- keeps projects organized and tidy and avoid CSS conflicts | bugs   
    <br/>--- refer to namespace of original files 
    <br/>
    <br/// _button.scss
    <br/
    <br/$padding: 1rem;
    <br///_box.scss
    <br/
    <br/@use 'button';
    <br/>
    <br/.boxButton {  padding: button.$padding; // 1rem;
    <br/}
    <br///_newBox.scss
    <br/
    <br/@use 'box';
    <br/
    <br/.newBoxButton {  padding: button.$padding; // ???
    <br/}
    <br/
    <br/>//_box.scss
    <br/>
    <br/>--- A Component can have a style from CSS | SCSS  
    <br/>----- using style - | styleUrls - Extenral files 
    <br/>------- Each Component or other El can have an ext CSS | SCSS file
    <br/>---------- my-col.component.scss -  
    <br/>
    <br/>------- defining classes - class="clsBlue"
    <br/>---------- .clsBlue{ color: blue; }
    <br/>
    <br/>------- defining ids - id="idRed"
    <br/>---------- #idRed{ color: red; }
    <br/>
    <br/>---- inline styles - using style=""
    <br/>------ &lt;my-component style="height:300px; background:gray;">&lt;/my-component>
    <br/>
    <br/>------ &lt;button style="padding: 10px" [ngStyle]="{backgroundColor: varNameOrPropName}">{{text}}&lt;/button>
    <br/>
    <br/>------ src/styles.scss - global styles to whole appn
    <br/>-------- in the src folder  
    <br/>
    <br/>[ngStyle] - 
    <br/>&lt;button [ngStyle]="{ color: variableN }">&lt;/button>
    <br/> 
    <br/>[ngClass] -
    <br/>[ngClass]="{'green': row.status === 'GREEN',
    <br/>
    <br/>----- Box Model - box that wraps every HTML element
   <br/>------ Content| Border | Margin | Padding
   <br/>
   <br/>---- Border
   <br/>------- dotted| dashed| solid| double| inset| ridge| none| hidden|
   <br/>----------- border: 4px dotted blue;
   <br/>
   <br/>---- Margin - 
   <br/>------- margin-top: 100px;
   <br/>
   <br/>---- Padding -
   <br/>------- padding-right: 30pxl
   <br/>  
   <br/>--- SCSS (Sassy CSS) (Syntactically Awesome StyleSheets)  pre-compiler
    <br/>------ CSS with SuperPowers
    <br/>------ most mature | stable| powerful | professional grade CSS extn language
    <br/>------ uses block formatting like CSS with { and ; } 
    <br/>
    <br/>Styles of larger projects are usually divided into partials
    <br/>-- to make it easier to find the code you need to target
    <br/>-- makes project easier to manage and make changes 
    <br/>--
    <br/>-- Partials can be loaded inside other stylesheets to create global styles  
    <br/>----- for Components and sections - on your site
    <br/>------- helps to keep code DRY and readable
    <br/>--
    <br/>@import - lets you import SASS/CSS into another stylesheet
    <br/>
    <br/>@use lets us break our stylesheet into more practical smaller sections 
    <br/>--- and load them inside other stylesheets
    <br/>--- keeps projects organized and tidy and avoid CSS conflicts | bugs   
    <br/>--- refer to namespace of original files 
    <br/>
    <br/// _button.scss
    <br/
    <br/$padding: 1rem;
    <br///_box.scss
    <br/
    <br/@use 'button';
    <br/
    <br/.boxButton {  padding: button.$padding; // 1rem;
    <br/}
    <br///_newBox.scss
    <br/
    <br/@use 'box';
    <br/
    <br/.newBoxButton {  padding: button.$padding; // ???
    <br/}
    <br/
    <br/>//_box.scss
<br/>
<br/>@use 'button';
<br/>
    <br/>--------- @Forward rule - lets you gain access to members through another file 
    <br/>
    @forward 'button'; // recreates the variable from _button.scss inside the current file
<br/>
<br/>.boxButton { padding: button.$padding; // 1rem;
<br/>}
<br/>//_newBox.scss
<br/>
<br/>@use 'box';
<br/>
<br/>.newBoxButton { padding: box.$padding // 1rem;
<br/>}
<br/>
    <br/>
    <br/>
    <br/>------ Features

    <br/>--------- functions
    <br/>--------- mixins
    <br/>--------- nesting
    <br/>--------- functions     
   `,
     ' -- ',  
  
     `Promises - 
     <br/>a JS object that can produce a value at a pt in time 
     <br/>execute immediately only once - part of ES std 
     <br/>--- simplify execution of async ftns that uses callbacks
     <br/>--- while emitting and completing (resolving or rejecting) 
     <br/>----- one value at a time 
     <br/>
     <br/>var promise = new Promise((resolve, reject) => { 
       <br/>--- resolve("Promise Resolved"); 
     <br/>}) 
     <br/>
     <br/>---- Enables you to emit 1 event from the API
     <br/>------- far cleaner solution to writing async code than callbacks
     <br/>
     <br/>---- not cancellable -
     <br/>
     <br/>---- then(resolve, reject){}
     <br/>
     <br/>promise.then((success) => { 
     <br/>---- console.log(success); 
     <br/>}) 
     <br/>.catch(function(error) => { 
     <br/>---- console.log(error); 
     <br/>}); 
     <br/>// Output: Promise Resolved
     <br/>
     <br/>--- 4 states
     <br/>------ fulfilled - action relating to promise succeded     
     <br/>---------- then     
     <br/>------ rejected - action relating to promise failing
     <br>/>---------- catch when an error occurs 
     <br/>------ pending - hasn't fulfilled or rejected yet
     <br/>------ settled - has fulfilled or rejected 
     <br/>
     <br/>
     <br/>-future tasks 
     <br/>- new Promise(resolve, reject)
     <br/>- asynchronous
     <br/>- Promise.resolve(\'done\').then((val) 
     <br/>--- => {throw new Error("fail")})
     <br/>--------.then((val) => console.log(val))
     <br/>----------- .catch((err) => console.error(err));
     `,  
     `RxJS operators
     

     `,
     `Observables - included in RxJS library 
     <br/>--- variable with a trailing $ ie timer$
     <br/>------ often with async ops
     <br/>------ 
     <br/>
     <br/>--- is a lazily evaluated computation that can sync | async
     <br/>------ return 0+ infinite from the time 
     <br/>------- over a period of time -
     <br/>------ they are a technique for event handling | async prog| handling mult values
     <br/> 
     <br/>--- generally needs a subscribe() to operate
     <br/>----- time
    <br/>------ requires unsubscribe() too
    <br/>--- but can be called using async pipe (without subscribe | unsubscribe)  
    <br/>
    <br/>--- Observables and the RxJS operators can manipulate 
    <br/>----- streams of data over time 
    <br/>
    <br/>--- emit events -   
    <br/>
    <br/>--- like promises handling async requests 
    <br/>--- handle multiple events - 
    <br/>------ cancellable (wrt a promise)
    <br/>
    <br/>--- 4 stages of Observable
    <br/>------ Creation -
    <br/>------ Subscription -
    <br/>------ Execution -
    <br/>------ Destruction -

    <br/>--- can be Hot (always emitting) | Cold (only when subscrubed to)
    <br/>
    <br/>--- can use RxJS to manipulate Observables
    <br/>
    <br/>--- Subscribe() works on Cold Observables to get at the data
    <br/>
    <br/>--- can work with Subscribers to create multicasting Observables
    -
    <br/>----- and use Subjects to aid working with them -
    <br/>-------simplifying subscription and allow 
    <br/>---------multi-casting events around the application. 
    `,
     `RxJS Subjects - special type of Observable that allows multi-casting to many Observers
     <br/>--- comprises an Observer and Observable (every Subject is an Observer)
     <br/>--- like EventEmitters - maintain a registry of many listeners  
     <br/>--- subscribe - simply registers the Observer in a list of Observers 
     <br/>----- like addListener() 
     <br/>
     <br/>--- Types of Subjects - Subject| BehaviorSubject| AsyncSubject| ReplaySubject
     <br/>------ Subject
     <br/>--------- const subj = new Subject();
     <br/>
     <br/>------ ReplaySubject -  
     <br/>--------- keeps a buffer of previous values to be emitted to new subscriptions    
     <br/>--------- const replaySubj = new ReplaySubject(2); // prev 2 values in buffer
     <br/>
     <br/>------ BehaviorSubject
     <br/>---------- similar to RelaySubject
     <br/>---------- but will re-emit the last emitted value or a default value (if no emitted)
     <br/>---------- const behSubj = new BehaviorSubject(123); // emits a value
     <br/>
     <br/>------ AsyncSubject
     <br/>---------- emits its last value on completion to all subscribers
     <br/>----------- const sub = new AsyncSubject()
     <br/>
     <br/>--- Observer Pattern - a S/W pattern wrt an Object called the Subject
     <br/>----- maintains a list of its dependents called Observers 
     <br/>----- and notifies them auto of state changes    
     <br/>  
     <br/>--- Observers - a handler for receiving Observable notifications 
     <br/>------ imps Observer interfaces
     <br/>------ Defines callback methods - handle 3 types notifications
     <br/>--------- Next() - reqd - handler for each delivered value 
     <br/>------------- called after execution starts
     <br/>--------- Error() - opt - handler for error - halts execution
     <br/>--------- Complete() - opt - handler for execution complete notification
     <br/>------------ Delayed values can continue to be delivered after complete
     <br/>
     <br/>--- asObservable() - operator 
     <br/>------- can be used to transform a Subject into an Observable 
     <br/>
     `,
     ' -- ',
`- Decorators
   <br/>----- metadata
   <br/>
   <br/>----- TS features - 
   <br/>@Component() | @Directive() | @Pipe() | @Injectable | @NgModule
   <br/>--- Std list decorators - class | property | method| parameter
   <br/>
   <br/>Class Decorators
   <br/> ----- @Component() | @Directive() | @Pipe() | @Injectable() | @NgModule()
  <br/>
  <br/>Property Decorators
  <br/>----- @Input() | 
  <br/>@ContentChild() | @ContentChildren |
  <br/>@ViewChild() | @ViewChildren()
  <br/>
  <br/> Method Dorators
  <br/>----- @HostListener() 
  <br/>    
  <br/> Parameter Decorators -
  <br/>----- @Inject() | @Self() | @Host() | @SkipSelf() | 
  <br/>-------       @Optional() | @Output() | EventEmitter()
   `,
  
   `@Input() | @Output()
    <br/>--- for parent child Component Interaction - 
    <br/> ----   
   `,
   `ViewContainerRef - reps a container 
   -   lets you attach multiple views to a Component
   <br/>--- can be used with @ViewChild | @ContentChild| ng-template
   <br/> 
   <br/>---- can contain Host Views (instiating a Component with createComponent)| 
                 embeddedViews (instiating TemplateRef with createEmbeddedView) 
   <br/>---- A view container instance can contain other view containers - A view container hierarchty
   `,
   `----- @ViewChild() - configures a View Query from template of Component    
     <br/> - matching selector in View DOM tree
     <br/>--- Provides instance of another component in a parent component 
     <br/>---- parent component can access methods of  
     <br/>--- used in ngAfterViewInit LCH
     `,
     `----- @ContentChild() - selects project content 
     <br/> 1st el matching selector from Content DOM
     <br/>------- selects projected content - 1st el matching selector from Content DOM
     <br/>---------- Content DOM
    `,
    `transclusion is Content Projection - initialized in ngAfterContentInit LCH 
    <br/>- a pattern to insert/project content to use inside another Component 
    <br/>- lets a Directive to make use of templates + add content to DOM 
    <br/>- lets Directives generate dynamice data driven DOM instns 
      <br/>you can make reusable components 
      - for scalable appns by inserting content into already created Comps/Dirs 
      uses ng-content
      <br/>
      <br/>3 types of Content projection - Single slot| Multi-slot| Conditional
      `, 
   ' -- ',
   `--- Template Forms 
  <br/>--- - Template Driven Approach 
    
 <br/>----- using directives)
   <br/>
   <br/>----- NgModel
   <br/>----- NgForm - creates a top-level FormGroup instance and binds it to a form el 
   <br/>------- to track aggregated form value and validation status 
   <br/>
   <br/>NgModelGroup 
   <br/>- creates a FormGroup instance to a DOM element
   <br/>----- directives in template
   <br/>----- simple directives
   <br/>----- asynchronous forms
   <br/>----- FormsModule
   <br/>----- Unstructured and Mutable
   <br/>----- More complex Testing
  
   <br/>----- &lt;form (ngSubmit)="onSubmit()" #heroForm="ngForm">
  `,
   `--- Reactive Forms - (Model Driven Approach)
   <br/>---- complex forms
   <br/>---- FormModel
   <br/>---- FormControl
   <br/>---- Structured and Immutable
   <br/>---- Sync forms
   <br/>---- simplifies Testing
   <br/>&lt;form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm)">
   <br/>--- &lt;div>
   <br/>------- &lt;label>
   <br/>-----------Name: <input formControlName="name" placeholder="Your name">
   <br/>------- &lt;/label>
   <br/>--- &lt;/div>
   <br/>--- &lt;button type="submit">Send&lt;/button>
   <br/>&lt;/form>
   `,
    ' -- ',
    `--- Change Detection is a builtin framework feature 
    <br/>--- ensuring rerender the display when the state changes
    <br/>------- due to an event - User interaction (btn clk)| HTTP| Timer
    <br/>----------- cascading changes (to child components)
    <br/>----------- Zone.js - creates a wrapper around any async opn
    <br/>------- Re-render display 
    <br/>
    <br/>--- that ensures auto sync using CD (Change Detection)
    <br/>----- between changes to data and the view
    <br/>
    <br/>--- Each Appn Component has a change detector 
    <br/>----- forms a CD tree - of Components with changes 
    <br/>
    <br/> topics - Zone.js | NgZone | runOutsideAngular() | OnPush() | ChangeDtectorRef 
    <br/>
    <br/>
    <br/>--- Angular uses Zone.js and NgZone 
    <br/>------ to know when to trigger UI update (CD)
    <br/>-------- when our Appn data changes
    <br/>------ Define Zones to detect when data changes
    <br/>-------- for all the Components in the whole appliction
    <br/>
    <br/>-- zone.js 
    <br/>----- can monitor all the states of sync|async operations
    <br/>----- provides a mechanism called Zones 
    <br/>------- for encapsulating and intercepting async activities
    <br/>---------- tick()
    <br/>---------- Angular picks up changes and then calls tick()
    <br/>------------- any listeners for those changes are fired
    <br/>------------- loops through views and calls detectChanges() method
    <br/>
    <br/>--- NgZone - is an injectable service
    <br/>---- creates a zone named Angular to automatically trigger CD
    <br/>-------- when a sync | async function is executed 
    <br/>-------- for executing work inside or outside the Angular Zone
    <br/>
    <br/>--- with Properties and Methods regarding CD
    <br/>
    <br/>------ NgZone.runOutsideAngular() - 
    <br/>--------- Gives an option to run outside Angular Zone
    <br/>--------- makes Appn more efficient 
    <br/>
    <br/> -- 
    <br/>
    <br/>--- ChangeDetectionStategy.OnPush() - 
    <br/>------ runs CD for the Components and their sub-tree only
    <br/>-------- checks the local branch
    <br/>------ when new refs are passed to them (not data mutated)
    <br/>
    <br/> -- 
    <br/> 
    <br/>-- The ChangeDetectorRef - is a base class that provides CD ftns -
    <br/>----- A CD Tree collects all views 
    <br/>--------- that are to be checked for changes
    <br/>------Use methods to 
    <br/>-------- add | remove views from the tree | 
    <br/>-------- initiate CD | 
    <br/>-------- explicit mark views as dirty 
    <br/>----------- changed Input changed | events -
    <br/>     
    <br/>--- ChangeDetectorRef methods
    <br/>----- markForCheck()
    <br/>----- detach()
    <br/>----- detectChanges()
    <br/>----- checkNoChanges()
    <br/>----- reattach() 
    <br/>
    <br/>---- lets us enable local CD
    <br/>------ on a lone Component 
    <br/>
    <br/> -- 
    <br/>
    <br/>--- igniteUI for Angular - toolkit for CD
    <br/>
    <br/>
    <br/>-- zone.js 
    <br/>----- can monitor all the states of sync|async operations
    <br/>----- provides a mechanism called Zones 
    <br/>------- for encapsulating and intercepting async activities
    <br/>-----------tick()
    <br/>---------- Angular picks up changes and then calls tick()
    <br/>------------- any listeners for those changes are fired
    <br/>------------- loops through views and calls detectChanges() method
    <br/>
    <br/>--- ngZone service is a wrapper around Zone.js 
    <br/>------ creates a Zone named angular
    <br/>----- to automatically trigger CD  
    <br/>----- to help with CD properties and methods
    <br/>-------- auto run updates when it detects an async opn event
    <br/>
    <br/> -- 
    <br/>-----We can also run via ChangeDetectionStrategy.onPush() 
    <br/>-------- to inc performance and just check a branch 
   `,
    ' -- ',
    `--- Design Patterns
  - aims to decouplle the impn of services from the components 
  <br/>-- uses DI design to work efficiency that lets our component classes and modules to be interdept 
  <br/>-- while maintaining consistency over ext deps injected in our appns - 
  <br/>-- reduces freq with which class/module base changes 
  <br/>
  <br/>---- MVC (Model View Container)
  <br/>---- DI (pattern)  
  <br/>---- SOLID pattern
  <br/>---- Observer pattern
  <br/>---- immutability - something cant be modified after being instantiated
  <br/>---- Singleton pattern
  <br/>---- Composition pattern
  <br/>---- Lazy pattern
  <br/>---- Model Adapter pattern
  <br/>---- Strategy pattern 
  <br/>---- Factory pattern   
  <br/>---- Deorator pattern
  <br/>--
  <br/>--
  <br/>--
  <br/>--
  `,
  ' -- ',
  `Angular Language Service - provides code editors eg VS Code 
    <br/>with completions | erroers | hints | navigation 
    <br/>
    <br/>- eg VS Code with a way to get 
    <br/>Completions | Errors | Hints | Navigation inside Angular templates
    <br/>
    <br/>---It goes straight to your config files 
    <br/>----- and finds out about all the templates in your project 
    <br/>-------- and provides adequate support as you open a template 
    `,
  ' -- ',
  `ESLint 
    <br/>--- statically analyses your code to quickly find problems 
    <br/>
    <br/>--- is a static code analysis tool used to flag programming errors | bugs | stylistic errors and suspicious constructs
    <br/>
    <br/>--- is a JavaScript Linter to lint either JS + TS code 
   = <br/>------(TSLint only used by TypeScript) - A large project can contain both JS + TS
    <br/>
    <br/>--- is built into most Web Editors VS Code or as part of your CI pipeline  -
    <br/>
    <br/>--- enables you to enforce a set of style | formatting | coding stds for your codebase  
    <br/>
    <br/>--- ESLint8.9 - released Feb 2022 - ES2022 added - ecmaVersion parser option to 13 
    <br/>
    <br/>--- ESLint8.15 - May 2022 - 
    `,
  ' -- ',
  `GIT (Global Infon Tracker) - is a free open source distributed VCS (Version Control System) 
    <br/>- designed to handle small to large projects with speed and efficiency
    <br/>
    <br/>- has 3 parts 
    <br/>---- 1: Working tree 
    <br/>---- 2: Staging area (Index) 
    <br/>---- 3: Local repository 
    <br/>--------- Remote repository - 
    <br/>
    <br/>Git Commits - 
    <br/>
    <br/>
    <br/>- Branches - part of everyday devt process 
    <br/>---- A pointer to a snapshot of your changes 
    <br/>---- spawn a new branch to make changes 
    <br/>
    <br/>- Forking - creates a indept copy of a Git repository 
    <br/>
    <br/>- git clone 
    <br/>---- creates a linked copy that will continue to sync with the target repo
    <br/>
    <br/>- Stashing - lets you change to a diff project 
    <br/>---- and store the current staged file info 
    <br/>
    <br/>- Staging area (Index) and Committing -  
    <br/>
    <br/> Parts - ---Working tree | Staging area | Local repository
    <br/> -- 
    <br/>- Working directory
    <br/>--- current work files
    <br/>----- history of all the files + changes
    <br/>--- current state of project',
    <br/>----- including any changes that have been made to files',
    <br/>--- git init cmd
    <br/>----- git folder - history of project
    <br/>----- working directory - 
    <br/>-- 
    <br/>- Staging area - holds files to be used in the next commit 
    <br/> -- lets git know what file changes will exist in next commit
    <br/>
    <br/>--- Git index - a crucial Git data structure
    <br/>---- Staging Area between files on Git filesystem and commit history 
    <br/> -- 
    <br/> ----- Prepare Commits
    <br/> ------- files for next commit
    <br/> ----- Git add - adds a change in working directory to Staging Area
    <br/>-------- Nothing changes until the git commit 
    <br/> ------- adds to Staging Area
    <br/> -- 
    <br/> ------- hashes WT files
    <br/> --------- stored as Objects in Staging Area     
    <br/>
    <br/> ----- Git commit - save Staged Changes to the local repository
    <br/> ------- Staged changes
    <br/> --------- Name changes
    <br/> -- 
    <br/>--- Local Repository
    <br/>-------- Local computers
    <br/>-------- git Push
    <br/> --   
    <br/>--- Remote Repository
    <br/>-------- Server for Team
    <br/>-------- git Pull 
    <br/> --  
    <br/>--- Branches - 
    <br/>------- lightweight movable ptr   
    <br/>------- Commits
    <br/>----- Snapshot of changes
    <br/>------- New branch per change
    <br/>--- default = master',
    <br/>----- MASTER
    <br/>------- naming for Branch
    <br/>----- after clone
    <br/>------- Local Repo - Master
    <br/>------- Repos default Branch
    <br/>--- View branches      
    <br/>----- local - git branch
    <br/>----- remote - git branch -r
    <br/>----- all - git branch -
    <br/> -- 
    <br/>-- git checkout
    <br/>--- only 1 branch checked out
    <br/>----- HEAD branch
    <br/>------- active = current
    <br/>--- navitate between branches
    <br/> updates files Work Dir
    <br/>------- work dir = branch
    <br/>----- record all new commits
    <br/>--- HEAD = branch name
    <br/>----- attaches to master
    <br/> -- 
    <br/>- Fork - is a copy of a repository 
    <br/>
    <br/>--- completely indept copy of a repo (not linked)
    <br/> -- 
    <br/>--- git clone - 
    <br/>-- a git clone op exec on remote repo -  
    <br/>
    <br/>----- server repo
    <br/>----- linked copy of repo
    <br/>------- hosting service
    <br/>------- BitBucket
    <br/> -- 
    <br/>- stash
    <br/>--- temp Shelves changes
    <br/> record work dir + index
    <br/>--- Clean Working directory
    <br/> -- 
    <br/>--- Commands - 
    <br/>--- Add - 
    <br/>--- fetch - 
    <br/>--- branch - 
    <br/>--- checkout -

    <br/>--- commit - 
    <br/>--- init - 
    <br/>--- push - 
    <br/>--- pull - 
    <br/>--- log - 
    <br/>--- status -
  `,  
  ' -- ',
  `--- agile | JIRA | Kanban 
    <br/>Agile - is an iterative approach to project management 
    <br/>+ S/W devt that helps teams deliver value to their customers faster 
    <br/> 
    <br/>- with fewer headaches 
    <br/>- suite of Agile work management solutions powering collaboration 
    <br/>- across all teams
    <br/>
    <br/>- iterative means small incremental changes
    <br/>- (no bigbang) - delivers work in small, 
    <br/>but consumable, increments,
    <br/>- Teams can easily work together and ... 
    <br/>- Requirements | Plans| Results are evaluated continuously 
    <br/>so teams have a natural mechanisms for responding to change
   `,
  `JIRA is a DevOps project management tool
   <br/>
   `,  
    `Kanban Board - management + constraining WIP - includes option of Kanban backlog - fully extendable - with custom extensions and Backlog management
    <br/>--- Kanban Board - 
    <br/>is a project management method that helps visualize tasks 
    <br/>
    <br/>-------- Parts of Kanban 
    <br/>----------- Story Cards -
    <br/>KB displays most rel info for each story | issue | bug | task
    <br/>Click in to get all details | 
    <br/>---- related source code | pull requests | priority comments | attachments and more 
    <br/>
    <br/>----------- WIP (Work In Progress) limit configuration -
    <br/>can be set to restrict the number of stories in each status at a time
    <br/>This is important to prevent particular states 
    <br/> from becoming bottlenecks and that issues flow smoothly 
    <br/>through your workflow - 
    <br/>
    <br/>----------- Swimlanes and columns  -
    <br/>Configure columns to rep major workflow states such as
    <br/>To Do | In Progress | Done 
    <br/>Add swimlanes to group work into streams by epics | assignees or projects 
    <br/> or whatever makes sense for your team 
    <br/>
    <br/>----------- Flexible workflows -
    <br/>Define and configure diff workflows for diff issue types
    <br/>or map all issue types on your board to a single unified workflow
    <br/>
    <br/>----------- Cumulative Flow Diagram -
    <br/>shows the number of issues in each status 
    <br/>Team can easily spot blockages by seeing the number of issues
    <br/>that increase in any given state 
    <br/>
    <br/>----------- Control Chart  -
    <br/>See the cycle time for the product | version | or Sprint  
    <br/>This helps you identify whether data from the current process 
    <br/>can be used to determine future performance - 
    `,
    ' -- ',
  `The Cloud/AWS
    <br/>--- The Cloud - refers to Servers accessed over the Internet 
    <br/>-------- and the S/W and DBs that run on those servers 
    <br/>-------- Cloud Servers are located all over the World
    <br/>-------- Cloud Computing offers businesses Scalability of resources for when production expands and contracts
    <br/>
    <br/>--- 2 main types of Cloud services - AWS (Amazon Web Services) | Azure 
    <br/>
    <br/>--- AWS S3 -   
    <br/>------- Serverless S3 service - requires an AWS Account
    <br/>----------- 5GB of std storage - Secure | Durable | Scalable - object storage infrastructure
    <br/>----------- 20000 get requests 
    <br/>----------- 2000 put requests
    <br/>
    <br/>------ S3 Bucket name - unique amongst all AWS accounts  
    <br/>Select region -  
    <br/>
    <br/>--- Properties
    <br/>Versioning
    <br/>Server access logging
    <br/>Static website hosting - entry page and error page  
    <br/>Object level logging -
    <br/>Default encryption -
    <br/>Object lock
    <br/>Tags - 
    <br/>Transfer acceleration -
    <br/>Events
    <br/>Requester pays
    <br/>
     <br/>-- AWS Lambda - Serverless Event driven compute service
     <br/>--- lets you run code for virtually any type of app'n or backend service 
     <br/>--- automatically manages the computing resources reqd 
     <br/>--- without worrying about the infrastructure of servers or OS or clusters or Networking
     <br/>
     <br/>----- AWS Lambda Reqts - Computing Service | DB | HTTP Gateway Service 
     <br/>------ DynamoDB and RDS is the bases of a Serverless soln    
     <br/>
     <br/>--- AWS Lambda Users - create functions - self contained appns  
     <br/>---- written in a supported language and runtimes 
     <br/>---- uploaded to AWS Lambda for effic exection     
     <br/>--- AWS Lambda Uses  
     <br/>---- Serving web pages
     <br/>---- Processing streams of data 
     <br/>---- Calling APIs 
     <br/>---- Integrating with other AWS Services
     <br/>
     <br/>--- AWS Lambda Languages - 
     <br/>------ Node.js 8.1 | 10| 12| xxx
     <br/>------ Python   
     <br/>------ Ruby 
     <br/>------ Java 8 | 11 
     <br/>------ Go 1.x
     <br/>------ C# Net Core 1.0 | 2.1   
     <br/>------ Powershell Core 6.0
     <br/>
     <br/>------ AWS Lambda Advantages -
     <br/>------ Pay per use
     <br/>------ Fully managed infrastructure
     <br/>------ Automatic scaling 
     <br/>------ Tight integration with other AWS products
     <br/>
     <br/>--- AWS Lambda Limitations -
     <br/>---- Cold Start Time
     <br/>---- Function Limits
     <br/>------ Execute time/run time 15 minutes       
     <br/>------ Memory RAM - 128MB to 3008MB with 64MB Step   
     <br/>------ Zipped package code size &lt; 50MB - Unzipped < 250MB
     <br/>------ Concurrency &lt; 1000 
     <br/>------ Payload Size &lt; 10MB that API Gateway can handle            
     <br/>---- Not always cost effective - 
     <br/>----- Maybe AWS EC2 might be better in some cases  
     <br/>---- Ltd number of supported runtimes
     `,
     `Azure - Cloud
     <br/>New Azure Application Platform
     <br/>
     <br/>Azure Web Apps
     <br/>   - comprise non-managed components - 
     <br/> - Azure tools
     <br/> -- 
     Azure Functions
     <br/>execute event driven serverless code ftns 
     <br/> accelerate and simplify serverless App devt 
     <br/>1: Automated flexible scaling - no infracuture management
     <br/>2: Integrated Prog Model to respond to events | connect to other services
     <br/>3: End to End devt with Integd tools + built in DevOps capabilities           
     <br/>4: Variety of prog languages TypeScript etc  
     <br/>
     <br/>-- DevOps - modern day services - 
     <br/>1: Azure Boards - agile tools to plan| track| discuss work x teams
     <br/>2: Azure Pipelines - Build test deploy with CI/CD | run in parallel - with any language platform + cloud - Connect to Github | Git and deploy continuously
     <br/>3: Azure Repos - unlimited cloud hosted private Git repos + collaborate to build better code with pull requests + better fle mgmt      
     <br/>4: Azure Test plans - Mangual + exploratory testing tools - 
     <br/>5: Azure Artifacts - Create host and share packages with team - Add artifacts to CI/CD pipeline with 1 click  
     <br/>6: Extensions market place - Access extns from Stack to SonarCloud  
     <br/>
     <br/>---- Azure Boards
     <br/>---- ssssAzure Pipelines
     <br/>---- Azure Repos
     <br/>---- Azure Test plans
     <br/>---- Azure Artifacts
     <br/>---- Extensions Marketplace
     <br/>
     <br/>-- Azure Logic Application - Visual Workflow Designer - 
     <br/>design workflows + services (MS | 3rd party)  
     <br/>
     <br/>---- Vsual Workflow Designer',
     <br/>------ Event Grid - manages all events to configure code + logic',
     <br/>-- 
     <br/>Azure Serverless Components
     <br/> sit on top of Serverless Cloud infrastructure services
     <br/> built for reuse and composition
     <br/> written in Vanilla JS - 
     <br/> offers infinite abstractions for all use cases
     <br/> can be deployed on the Serverless Framework
     <br/> Messaging plays a crucial part in Serverless Component integration
     <br/> - examples are AWS SQS (AWS) | Apache Kafka| RabbitMQ
     <br/>Serverless Functions - run custom code on demand indept of where or scalability
     <br/>
     <br/>---- Azure Functions
     <br/>------ Code run on demand
     <br/>------ indept of location + scalability
     <br/>----- built for reuse and composition
     <br/>
     <br/>Messaging plays a crucial part in Serverless Component integration
      <br/>
      <br/> ------ sit on top of Serverless Cloud infrastructure services
      <br/>
      <br/>---- must ensure Servers set up properly
      
  `,
  ' -- ',
  `--- CI/CD 
  <br/>----- CI - Continuous Integration
  <br/>------ is a DevOps SD Practice  
  <br/>------ is practice of automating integration of code changes
  <br/>-------- from multiple contributers into 1 S/W project
  <br/>------- Developers merge code changes to central repository
  <br/>--------- After which automated builds and tests are run
  <br/>------- CI is generally used alongside an agile S/W dev\'t workflow
  <br/>--------- org\'n compiles a list of tasks - comprising product roadmap
  <br/>----------- Tasks allocated to diff team members
  <br/>---- CI lets orgns scale engineering team size | codebase size | infrastructure
  <br/>------ helps build DevOps and agile workflows
  <br/>------- Faster feedback on Business decisions is a side effect of CI
  <br/>--- TDD (Test Driven Devt) - 
  <br/>--- Bamboo - 
  <br/>--- JIRA - agile | DevOps project management tools',
  <br/>
  <br/> -- 
  <br/>- CD - Continuous Delivery Pipeline
  <br/>---- is a S/W Engineering approach to produce S/W in short cycles
  <br/>---- ensures S/W can be released at any time
  <br/>------ releasing code automatically
  <br/>-------- aims at building | testing | releasing S/W
  <br/>----------- with greater speed and accuracy
  <br/> -- 
  <br/>- CD - Continuous Deployment Pipeline 
  <br/>---- is a S/W Engineering approach to produce S/W in short cycles',
  <br/>---- with Automated deployments
  <br/> -- 
  <br/>-- Jenkins
  <br/>----- open source Automation Server
  <br/>------- automates build | test | deploy S/W
  <br/>----- largest CI/CD platform
  <br/>----- simplest way to do CI/CD
  <br/>-------- faster and robust tools
  <br/>-------- integrate entire chain
  <br/>----- open source automation server
  <br/>----- DevOps tool written in Java
  <br/>----- used to imp workflows (pipelines)
  <br/>----- simple to set up CI/CD
  <br/>----- FREE
  <br/>----- Pipelines
  <br/>-------- Create a pipeline script
  <br/>-------- branch sources can be Git|Subversion
  <br/>-------- Add plugins for more features and restart Jenkins
  <br/>----------- Blue Ocean plugin - latest greatest
  <br/>----------- C/C++ plugin
  <br/>-------- Jenkinsfile
  <br/>-------- check it into your repository
  <br/>-------- nightly builds
  `,
  ' -- ',
  `--- Ivy - is new Compilation and Rendering Pipeline 
    <br/>---- which creates template instructions to render info to the DOM
    <br/>
    <br/>Does not need an interpreter or metadata.json file 
    <br/>nor the ngFactory.js file
    <br/>
    <br/>It just produces the appComponent.js file 
    <br/>--- from the compilation step
    <br/>
    <br/>using AoT Compilation by default
    <br/>- enableIvy: true
    <br/> - complete rewrite of RE
    <br/>- loading is very fast 
    <br/>- operates very fast too
    <br/>- smaller size
    <br/>-- Much more Tree Shakeable
    <br/>- compile comps more independently than before
    <br/>-- 
    <br/>- Locality - single file compilation
    <br/>--- only one file is compiled at a time 
    <br/>----- Each component should compile using its own info 
    <br/>----- components dont need to know about dependencies
    <br/>------- Hot Reloading - only compiles component you changed 
    <br/>
    <br/>--- View Engine suffered from the Global Compilation Problem
    <br/>
    <br/>--- Also has ability to create Directive | Component at runtime
    <br/>
    <br/>---- Single file - with no other dependencies required ',
    <br/>---- Components own local infon is used
    <br/>------- Recompiles partial changes
    <br/>------- Ability to create Directive | Component at runtime
    <br/>------- HMR (Hot Module Replacement) - support improved Ang 14
    <br/> -- 
    <br/>- Incremental DOM 
     <br/>---- every component gets compiled 
     <br/>------  to a series of instructions 
     <br/>--------- create DOM trees 
     <br/>------------ updated mutably inplace 
     <br/>---- Tree Shakable -   
     <br/> ----It doesnt need any memory to rerender the view
     <br/> ------- if it doesn't change the DOM 
     <br/> ---- We only need to allocate memory 
     <br/> ------- when the DOM nodes are added or removed
     <br/> ------- Size of allocation is proportional to size of change
     <br/> ----- Hence large memory savings          
     <br/>
     <br/>-------- series of instructions
     <br/>----------create DOM trees
     <br/>------------ updated mutably inplace
     <br/>------ Tree Shakable   
     <br/>--------- Only memory needed
     <br/>------------ on Change to DOM
     <br/>-- Decorators to Static Properties - ngComponentDef etc.',
     <br/>---- ngComponentDef in .d.ts files   
   c  <br/>---- no complete code analysis - 
     <br/>------ @NgModule metadata
     <br/>-- Template instructions 
     <br/>- replace the template data and runtime interpreter 
     <br/> ---- from the View Engine
     <br/> ---- Create the correct DOM on their own  
     <br/> ---- replace the ngFactory and metadata.json phase 
     <br/>
     <br/> - no metadata - Renderer2 create a metadata.json file 
     <br/>Angular ivy does not!
     <br/>
     <br/>- AOT with Ivy is faster and should be used by default
    `,
    `--- View Engine - Renderer2 - (old Angular 8 and below)
     <br/>----- all UI frameworks - store a repn of the DOM 
     <br/>------- to optimize CD (Change Detection) + improve re-rendering performance
     <br/>----- template HTML | template Data | Angular interpreter | DOM
     <br/>------- compiled to node_modules/.bin/ngc/  
     <br/>----- suffered from the Global Compilation Problem
     <br/>----- needs an runtime interpreter and metadata.json file 
     <br/>------- and the ngFactory.js file
     <br/>----- When Angular has a change - all bindings are re-evaluated 
     <br/>--------for all Components
     <br/>---------- properties used by the template 
     <br/>---------- dirt  y checking - isChanged = true
     <br/>------------ template data is interpreted to DOM with latest bindings
     <br/>
     <br/>----- tree-shakes 
     <br/>------- Static analysis of code 
     <br/>---------- and then compiles whats left
    `,
    ' -- ',
    `CQRS (Command Query Responsibility Segregation)
    <br/>--- Read -  Get
    <br/>--- Update - Command
    `,
    ' -- ',
   `ngrx - State Management - Reactive State for Angular 
     <br/>
     <br/>- a group of angular libraries for Reactive extensions 
     <br/>
     <br/>- inspired by the Redux pattern - derives state using RxJS and Observables
     <br/>----- State is derived from a single immutable Data Store - 
     <br/>------- with simpler faster OnPush CD 
     <br/>
     <br/>- Unidirectional - 
     <br/>
     <br/>- helps simplify appns with many user interactions and multiple data sources
     <br/>
     <br/>- Features 
     <br/>1: Serializability 
     <br/>2: TypeSafety - using tsc (TypeScript compiler)
     <br/>3: Encapsulation - using ngrx Effects and Store - any resource side effects - network requests | db access | business logic can be isolated from the UI - simpler components and helps SRP   
     <br/>4: Testable - since store uses pure ftns (Reducers) for changing state and (Selectors) for selecting data from state and (Effects) to isolate side effects from UI - this simplifies testing - Ngrx provides special test methods - provideMockStore |   provideMockActions etc.
     <br/>5: Performance - Store is built on single immutable data state - making CD (Change Detection) simpler using OnPush strategy. NgRx is also powered by Memoized selector ftns - optimizing  state query computations
     <br/>
     <br/>
     <br/>-SHARI -
     <br/> 
    <br/>S: - Shared state that is accessed by many components and services
    <br/>H: - Hydrated state that is persisted and rehydrated from external storage 
    <br/>A: - Available state that must be available when reentering routes
    <br/>R: - Retrieved state that must be retrieved with a side effect
    <br/>I: - Impacted state that is impacted by Actions from other sources
    `,
    ' -- ',
    `--- Angular Material -  
    `,
    `--- Angular/elements -
    `,  
    `--- Angular/pwa (SW - Service Workers)
    `,
   `--- Angular Universal lets Angular work on the Server and use SSR - Server Side Rendering - Also a way to speed up the initial load time by only loading static code and then dynamically loading the Angular framework after behind the scenes - very fast load time
   `,
    `--- Angular/WebWorkers -
   `
 ], 
 [`classes
   <br/>--- can have a constructor, properties, methods
   <br/>
   <br/>-------- are used in Components --- |--- Directives--- | --- Pipes --- | ----- Services
   <br/>-------- using decorator objects starting with a @ 
   <br/>------------------ @Component({}) - | - @Directive({}) | --- @Pipe({}) | --- @Injectable({})
   <br/>
   <br/>--- Component is the most common example of a class 
   <br/>--- Here is an example of what a Component looks like
   <br/>--- defining a class 
   <br/>
   <br/>--- The @Component decorator 
   <br/>
   <br/>------- @Component({
   <br/>------------ selector: 'app-my',
   <br/>------------ template: \`  
   <br/>----------------  // example of interpolation data binding
   <br/>----------------- {{ nVal1 }} {{ sVal2 }}
   <br/>------------ \`,
   <br/>------------ StyleUrls:['./my.component.css'],
   <br/>------------ providers: ''
   <br/>------- })
   <br/>--- uses the OnInit Life Cycle Hook
   <br/>------- export class MyComponent implements OnInit{
   <br/>--------- // Properties
   <br/>----------- nVal1: number = 4;
   <br/>----------- sVal2 = "Hello";
   <br/>
   <br/>--------- // Constructor
   <br/>----------- constructor(){
   <br/>
   <br/>----------- }
   <br/>
   <br/>--------- // imp LCH (Life Cycle Hook)
   <br/>----------- ngOnInit(){
   <br/>
   <br/>----------- }
   <br/>
   <br/>---------- // Method example 
   <br/>----------- getData(x: string){
   <br/>---------------- console.log('Val x is ', x);  
   <br/>----------- }
   <br/>
   <br/>------- }
   <br/>
   <br/>--- }
 
 
  `,
   `--- constructor()
   
   `,
   `--- properties
   
   `,
   `--- methods
   `,
   ' -- ',
   `------- TypeScript
   `,
   `----------- data types
   <br/>-------
 
   `,
   ' -- ',
   `--- Decorators 
   <br/>-------
   
   `, 
   `------- metadata
   
   `,
  `------- annotations
  
  `,
   ' -- ',
   `--- constants`,
   `--- enums
   <br/>-------
 
   `,
  `--- interfaces
  <br/>-------
  `,
  ' -- ',
  
  `--- DataBinding
  `,
  `------ interpolation
  `,
  `------ property binding []
  <br/>-------
  `,
  `------ event binding ()
  <br/>-------
  `,
  `------ two way binding [()]
  <br/>------- banana in a box
  <br/>------- 
  `,
  ' -- ',
  `--- Components have 
   <br/>------ Lify Cycle Hooks 
  `,
  ' -- ',
  `--- View DOM
  <br/>----- 
  `,
  `--- Content DOM
  <br/>----- 
  `,
  `--- Transclusion
  <br/>------- 
  `,
  
  ' -- ',
  `--- implements
  <br/>-------
  `,
  `------ interface
  <br/>--------
  `,
  `--- extends
  <br/>-------
  `,
  `------ inheritance
  <br/>-------
  `    
  ],
  [`Components 
    <br/>are the most important part of an Ang appn 
    <br/>- they have a @Component decorator with a selector - template and optional style
    <br/>
    <br/>- They must have a template - either internal or external with HTML   
    <br/>
    <br/>The class can have constructor - properties - methods - events 
    <br/>
    <br/>Can import services into the constructor using DI 
    <br/>
    <br/>Data binding - interpolation {{}} | property [] | event () | [( ngModel )]  
    <br/>Can have child Components and use @Input() / @Output() with EventEmitter()
    <br/>
    <br/>Life Cycle Hooks define how the Component operates from creation to destruction
    <br/>- most common ngOnInit()
    <br/>
    <br/>Component Tree - each component has a ChangeDetector - to react to changes and ensure View is correct
    <br/>Style of the parts of the data - 
    <br/>
    <br/>Best to store Component data as immutable Observables which can then be manipulated using RxJS library
    <br/>
    <br/>Subjects - like BehaviorSubject let us turn Observables into multi-cast objects
    <br/>can use this to ref data or methods in the Component - 
  `, 
  '--- @Component({})',
  '--- must have a template',
  '----- accessing a DOM el',
  '------- @ViewChild()',
  '--- Most important Ang el',

  'A class - defines the properties and methods including constructor and events of a Component - Directive - Pipe - Service - Module', 
      '- constructor(){}',
      '-- properties',
      '-- methods',
      '-- Services',
      '-- Directives',
      '--- Observables',
      '--- Subjects',
      ' -- ',   
      `name of the External HTML file or inline HTML 
      <br/>  templateUrl: \'./ts-menu.component.html\' 
      or "Hello World" - Note directives dont have a template file
      `,
      '- Pipes', 
      ' -- ',   
      'Decorators - eg @Component - define metadata for Angular annotations to class',  
      'decorator which defines the selector - template and styles of the Component', 
      '-- tag which can be used to install the Component', 
     
      '-- HTML part of the Component',
      '-- styles of the Component', 
      ' -- ', 
      ' Template Ref Variable', 
      ' -- ', 
      '- Data Binding', 
      ' -- ', 
      '- LC-hooks',
      ' -- ', 
    ` -- Component Tree - is all components in the appn 
        <br/>---in a tree branching structure 
        <br/>------ with each Component having a CD mechanism (CD tree)
       `,
      ' -- ',   
      '--- applied to every Component  to detect when the Component properties have changed ',
      ' -- ',
      `this - used in browsers at the top level of your program to ref a global object 
      <br/>- refs all properties or methods or events of a Component
      <br/>- this.foo = 135;  console.log('object val foo is ', this.foo);   
      `,
      `globalThis - to combine things like the global object in different environments
      <br/> browsers | Web Workers | 
      <br/> this.foo === windows.foo is true      
      `,
      ' -- ',
      'generate a new Component',
      ' -- ',
      `--- Smart Components (Container Components)
        <br/>---- keep trakc of state and care about how they work together
        <br/>
        <br/>---- Container design pattern',
        <br/>------ pass data to the presentation component
      `,
      '----- Keep track of the state and care about how they work',
      '----- Container Design Patern',
      '------- pass data down to presentation Components',
      '=-------- interact with the service layer and retrieve the data',
      ' -- ',
      `--- Dumb Components - presentation components
      <br/>---- just displays the data thats passed to it
      <br/>------- get data via @Input()
      `,  
      '------- displays the data passd to it',
      `------- get data via @Input()
      `,
      '------- return modified data using @Output() and EventEmiter()'

    ],
    [`Directives 
    <br/>--- are classes that add extra behavior to elements in Angular appns 
    <br/>------- add features to HTML els like divs and spans etc.
    <br/>
    <br/>--- Cant have a template - (unless a Component) 
    <br/>
    <br/>--- let us define a different style (attribute) or add or remove parts to HTML (template) but normally dont have templates
    <br/>
    <br/>--- decorator @Directive({}) 
    <br/>
    <br/>--- 3 types - attribute | template | Components -  
    <br/>
    <br/>----- template directives (Control Flow Directives)
    <br/>--------- *ngIf
    <br/>----------- Selection true or false
    <br/>
    <br/>--------- *ngFor
    <br/>----------- iterable of items
    <br/>
    <br/>--------- *ngSwitch
    <br/>
    <br/>--------- &lt;ng-template>
    <br/>------------- determines when to show
    <br/>------------- &lt;ng-container>
    <br/>------------- &lt;ng-content>
    <br/>------------- &lt;ngTemplateOutlet>    
    `,
      '@Directive({})',
      ' -- ',
      '--- Types of Directives',

      `---1: Attribute-directives 
      ----- change the appearance or behavior of an element | component | directive
      `, 
     
      '----2:  Template-directives *ngIf - *nfFor() ',
      `<br/>---- 
      `,
        '-- Type of Template Directives',
              `----- *ngIf &lt;div *ngIf="let x === 1; else elsePart">&lt;/div> 
              &lt;ng-template #elsePart>`,
              '------ *ngIf ; else tmp-dir',
              '---------- else &lt;ng-template #tmp-dir>',
              ' -- ', 
              '----- *ngFor &lt;div *nfFor="x of List">&lt;/div>',
              `------- trackBy - to speed up for loop iteration
          @Component({
          <br/>  selector: 'app-list',
          <br/>  template: \` &lt;div *ngFor="let item of items; trackBy: trackById">...&lt;/div> 
          <br/>  \`,
          <br/> })
          <br/>export class AppListComponent {
          <br/> @Input()
          <br/>public items: Item[];
          <br/>
          <br/> public trackById(index: number, item: Item) {
          <br/>return item.id;
          <br/> }
          <br/> }
          `,
          ' -- ', 
          `----- *ngSwitch &lt;div *ngSwitch with case statements
          `,
          `------- case
          `,
          ' -- ', 
          `--- ng-template &lt;ng-template>
           `,
          '--- not displayed by default',
          '----- determine when to display',
            '------- has 1+ input named values',
            '--------- assigned to template variables', 
            `------- use of let-
            `,
            '--- section off ng-templae',
            '----- ng-container <ng-container',
            '-------- no element displayed',
            '----- ng-content <ng-content>',
            '-------- transclusion (content projection)',
            `----- ng-template-outlet &lt;ngTemplateOutlet>
            `,
           '--- ng-template instantiated',
           `----- Onamed inputs bound to 1+ input template variables 
           `,
           '--- ng-template uses',
           '------ else part of *ngIf',
           `------ with ngForOf 
           <br/>&lt;ng-template ngFor let-hero let-i="index" [ngForOf]="heroes">
           <br/>  &lt;li>Hero number {{i}}: {{hero.name}}
           <br/>&lt;/ng-template>
           `,
           ' -- ', 
       '---- 3: Components are a form of Directive but have a template'  
      ],  
      [`Pipes 
        <br/>--- transform data in the template
        <br/>
        <br/>--- pure and impure - decoraor - @Pipe() 
        <br/>-------- used in a template HTML to modify data 
        <br/>
        <br/>--- declared once - 
        <br/>-------- only called when data changes
        <br/>
        <br/>--- ng g p my-upper-case
        <br/>------- must add the pure: true in @Pipe({})
        <br/> -- 
        <br/>--- inbuilt Pipes
        <br/>----- DatePipe
        <br/>----- CurrencyPipe
        <br/>----- DecimalPipe
        <br/>----- UpperCasePipe
        <br/>----- LowerCasePipe
        <br/>----- Percent  Pipe
        <br/>
        <br/>----- async Pipe
        <br/>----- json Pipe
        <br/>
        <br/>---2 types 
        <br/>------ Pure Pipes
        <br/>--------- only use CD on branch with Directive
        <br/>--------- ran only when input changes - very performant
        <br/>--------- are much faster
        <br/>
        <br/>------ Impure Pipes
        <br/>--------- run CD on whole appn - on every CD cycle
        <br/>--------- are much slower
        <br/>
        <br/>--- Custom Pipes - @PipeTransform with transform()
        `,
        `--- Change detection 
        <br/>------ pure - only when value changes
        <br/>------ impure - is called on every CD cycle
        <br/>
        `, 
      '--- transform data for display',
      '--- only applied in template',
      ' -- ',
      `--- ng g p my-upper-case
        <br/>------- must add the pure: true in @Pipe({})
        <br/>
        <br/>import { Pipe, PipeTransform } from '@angular/core';
        <br/>
        <br/>@Pipe({
        <br/>--- name: 'myUpperCase',
        <br/>--- pure: true  // added
        <br/>})
        <br/>export class MyUpperCasePipe implements PipeTransform {
        <br/>---- transform(value: string){
        <br/>------- return value.toUpperCase();
        <br/>---- }
        <br/>}
        <br/>
        <br/>added to the declarations in AppModule
        <br/>
        <br/> {{ value | myUpperCase }}
      `,
      ' -- ',    
      `@Pipe({})
       
      `,
      `------- list inbuilt pipes - 
          <br/>--------- Date | 
          <br/>--------- UpperCase | 
          <br/>--------- LowerCase | 
          <br/>--------- Currency | 
          <br/>--------- Decimal | 
          <br/>--------- Percentage | 
          <br/>--------- Async
      `,
      ' -- ',
      '--- inbuilt Pipes',
      '------- DatePipe',
      '------- CurrencyPipe',
      '------- DecimalPipe',
      '------- UpperCasePipe',
      '------- LowerCasePipe',
      '------- Percent  Pipe',
      `------- async Pipe
      <br/>-------- myObs | async 
      <br/>-------- tool to resolve value of a subscribable in the template
      <br/>------------ an Observable | EventEmitter | Promise
      <br/>-------- Pipe listens for either Promise or Observables|Event Emitters to emit values      
      <br/>
      <br/>-------- subscribes to a Promise| Observable and returns latest value emitted
      `,
      ' -- ', 
      
      `--- Pure Pipes
     
      `, 
      `--- Impure Pipes
       
      `,
      `Custom Pipes
      <br/>--- @Pipe({name: 'exponentialStrength'})
      <br/>--- export class ExponentialStrengthPipe implements PipeTransform {
      <br/>------ transform(value: number, exponent = 1): number {
      <br/>------------- return Math.pow(value, exponent);
      <br/>------ }
      <br/>--- }
      `, 
       `-- custom transformation
       
       `,
       `--- data with parameters
      <br/>------ {{ amt | currency : 'EUR': 'Euros' }}
      `       
  ],
  [ 
    `Services and Dependency Injection 
    <br/>--- implemented as a simple class with @Injectable({}) decorator - 
    <br/>--- ng g s my-service
    <br/>--- can be reussssed in several different Components so data can be shared 
    <br/>--- We can have nested services -  
    <br/>
    <br/>--- A provider is an instruction to the DI (Dep Injection) system 
    <br/>--- on how to obtain a value for a dependency
    <br/>
    <br/>--- most of the time these dependencies are services 
    <br/>--------that you create and provide
    <br/>
    <br/>--- @Injectable({}) - ensures the compiler will generate the reqd metadata to create classs deps when class is injected 
    <br/>------ ng g s my-service
    <br/> 
    <br/>------ providedIn? - determines which injectors will provide the injectable 
    <br/>--------- @Injectable({ providedIn : \'root\',}) - (appn - or root level injector) you can now inject the service anywhere in your appn     
    <br/>      
    <br/>------ @Injectable({ providedIn : \'platform\',}) - a special singleton platform injector via a service - shared by all appns on page    
    <br/>
    <br/>------ @Injectable({ providedIn : \'any\',}) - provides a unique instance in each lazy loaded module | all eagerly loaded modules share one instance 
    <br/>
    <br/>------ @Injectable({ providedIn : \'Type<any>\',}) - associates the injectable with an @NgModule or other injector types 
      `,  
      '------ simplifies Components',
      `------ A Service - is a TypeScript class - with shareable properties and methods 
       <br/>------- decoratred with an @Injectable([]) decorator
       `,
       `----- @Injectable({ providedIn: 'root'}) - decorator provides metadata 
       <br/>------ that allows Angular to inject it (service) into Component as a dependency 
       <br/> 
       `,
       `-------- providedIn: 'root'
       <br/>root - 
       <br/>or platform - 
       <br/>or none -
       `,
       `--- Injector - part of all Components (has injector tree matching Component tree) 
        ----- creates dependencies 
        <br/>and maintains a container of dependencies that it reuses
       `,
       '----- A provider - tells injector how to obtain or create a dependency',
       '------- service',

       '---- Reuseability in other Components',
       '--- providers section',
       '--- Appn or Component',
       '----- Appn - Module',
       '-------- @NgModule({})',
       '----- Component',
       '-------- @Component({})',
       '- Services are injected into Components via the constructor', 
       '------ constructor(private x: MyService){}', 
       ' -- ',
       `- DI (Dependency Injection) - 
        <br/>---- is a design pattern 
        <br/>---- in which a class requests dependencies from external sources 
        <br/>-------- (wrt creatng them) 
        <br/>------ by default - DI searches for a Provider in the Injector Hierarchy
        <br/>---------- First injector found - configured with a provider (matching) - supplies the dependency
      `,
      `--- Application based DI - 
      
      `,
      `--- Component based DI      
      `,
       `---- Provider - supplies the dependency 
       <br>------ Service Instance or Value
       `,
       '-------- dependency - Service Instance or Value',
       '---------- Service Instance',
    
     'nesting services',
     '- Sharing',
     'fetching data from a server - logging - validating user input ', 
     'class with injectable decorator',
     ' -- ',
     `Service @Injectable({ providedIn: \'xxx\'\})
     <br/>
     `,
     `-- @Injectable({ providedIn : \'root\',}) - 
     (appn - or root level injector) you can now inject the service anywhere in your appn
     `,     
     ' -- ',
     `-- @Injectable({ providedIn : \'platform\',}) 
     <br/>--- a special singleton platform injector via a service 
     - shared by all appns on page
     `, 
     ' -- ',   
     `-- @Injectable({ providedIn : \'any\',}) 
     <br/>---- provides a unique instance in each lazy loaded module | 
     <br/>---- all eagerly loaded modules share one instance
     `, 
     ' -- ',
     `-- @Injectable({ providedIn : \'Type<any>\',}) 
     <br/>---- associates the injectable with an @NgModule or other injector types
     `,       
     'other values',
     'privders:[MyService]'
    ],
    [`Application root
    
    
    `,
    `--- root level Component
    
    `,
    `------- index.html | app-root
     <br/>------- normally AppComponent is the root component
     <br/>------- with a tree of components sprouting upwards
     <br/>------- events bubble downwards 
    `,
    `--- root folder - angular.json
    
    `,   
    `--- src/
    
    `,
    `--- root module - AppModule
    
    `,
    
    
   ],
    [`DI (Dependency Injection) 
    <br/>--- involves 
    <br/>--- Dependencies| tokens| injectors|  
    <br/> 
    <br/>--- An Angular injector facilitates interaction between
    <br/>-------- dependency consumers (Components) and dependency providers (service)  
    <br/>-------- but as well as services | other schematics - pipes| directives| benefit from DI
    <br/>
    <br/>-------- Injectors are data structure that specify 
    <br/>------------- where and how services (dependencies) form       
    <br/>------------- Modules | Directives| Components contain injector metadata 
    <br/>------------- iterator tree mirrors the Component tree   
    <br/>------------------ providers:[] metadata - accept services - reg with class injector   
    <br/>--------------------- creates an instance of service for the class
    <br/>------------------ Services can register with any iterator up to the application root itself  
    <br/>
    <br/>--- is a design pattern 
    <br/>------  a class requests dependencies from external sources 
    <br/>--------- (instead of creatng them) 
    <br/>-------  
    <br/>--- DI GUIDE
    <br/>
    <br/>--- DI keeps code flexible| testable| mutable
    <br/>
    <br/>--- happens automatically most of the time
    <br/>
    <br/>--- Loosely coupled architecture
    <br/>------- more mainable appns 
    <br/>
    <br/>--- is used to increase flexibility + modularity in your appns
    <br/>
    <br/>--- DI - Helps in Unit Testing
    <br/>
    <br/>--- 3 types of DI 
    <br/>-------- 1:  Constructor Injection - interface passed to constructor
    <br/>-------- 2:  Method Injection - interface based injection
    <br/>-------- 3:  Property Injection - setter inection
    <br/>
    <br/>-- by default - DI searches for a Provider in the Injector Hierarchy
    <br/>   
    <br/>--- Providers -
    <br/>------ how to get value for a Dependency (Service)
    <br/>
    <br/>------ provides dependencies to a class upon instantiation 
    <br/> ----- 3 types of Dependencies - class | functions | values
    <br/>------------------ Class - Service
    <br/>------------------ Function - 
    <br/>------------------ Values - 
    <br/>
    <br/>------ Providers metadata accept services 
    <br/>--------- that register within class injector
    <br/>--------- Provider field adds instns to let injector ftn
    <br/>
    <br/>--------- providers :[{ provide: ProductService, useClass: ProductService }]
    <br/>
    <br/>------- useClass| useValue| useFactory| useExisting
    <br/>---------- can never use an interface 
    <br/>---------- can only be classes or InjectionToken 
    <br/>-------------- get around shortcomings of JS  
    <br/> 
    <br/>------ 4 ways to create a Dependency - Provider tells Injector How  
    <br/>---------- 1:   useClass (Class provider)
    <br/>---------- 2:   useValue (Value provider)
    <br/>---------- 3:   useFactory (Factory provider)
    <br/>---------- 4:   useExisting (Alias provider)
    <br/>   
    Using provide with providers
    <br/>
    `,
    ` @Component({
    <br/>--- selector: 'app-hero-of-the-month'
    <br/>--- templateUrl: './hero-of-the-month.component.html'
    <br/>--- providers: [
    <br/>----- { provide: Hero,          useValue:    someHero },
    <br/>----- { provide: TITLE,         useValue:   'Hero of the Month' },
    <br/>----- { provide: HeroService,   useClass:    HeroService },
    <br/> ----- { provide: MinimalLogger, useExisting: LoggerService },
    <br/>----- { provide: RUNNERS_UP,    useFactory:  runnersUpFactory(2), deps: [Hero, HeroService] }
    <br/>--- ]
    <br/>})
    <br/>
    <br/>------ Providers configure an Injector with a DI token
    <br/>---------- injector provides runtime value of dependency value
    <br/>-------------- 3 types Token - Type| String| Injection
    <br/>
    <br/>--- Root Injector - 1st Module appn loads - normally AppModule - 
    <br/>------- AppModule root injector has a parent NgZoneInjector
    <br/>---------- has parent PlatformInjector 
    <br/>
    <br/>--- PlatformInjector 
    <br/>
    <br/>--- ModuleInjector - 
    <br/>------- can be configured in 1 of 2 ways
    <br/>---------- 1: @Injectable() providedIn - to @NgModule() or root 
    <br/>---------- 2: @NgModule() providers array
    <br/>------- is a flattening of all the providers arrays  
    <br/>------- that can be reached by following the NgModules.imports recursively
    <br/>
    <br/>--- NullInjector - top of the tree
    <br/>------- doesn't keep any tokens
    <br/>------- always throws an error except @Optional - null
    <br/>
    <br/>
    <br/>--------- Sandboxing
    <br/> ---------- Multiple Service Instances
    <br/> ------------- at same level of Component hierarchy
    <br/> ---------- a service that holds state for its Component Instance
    <br/> ---------- a separate instance of service for each Component
    <br/> ------------- work-state isolated from other Component dep
    <br/> ---------- Each service + component instance has its own sandbox 
    <br/>
    <br/>Components - @Component can have providers: [] 
    <br/>---- limits service to that Component
    <br/>
    <br/>Modules - @NgModule can have providers: []
    <br/>---- a singleton instance available all over appn
    <br/>
    <br/>Lazy Loaded Modules - can have providers: []
    <bfr/>---- a singleton instance available all over feature Module
    <br/>
    <br/>--------- Sandboxing - 
    <br/>
    <br/>--- Injectors 
    <br/>------ form the backbone of the DI framework
    <br/>------ key-value pairs ',
    <br/>
    <br/>---- First injector found 
    <br/>------- configured with a provider (matching) 
    <br/>------- supplies the dependency
    <br/>
    <br/>--- Injector Hierarchy DI system
    <br/>--- 2 types of Hierarchy
    <br/>
    <br/>--- 1: ModuleInjector - @NgModule or @Injectable
    <br/>----------- Null Injector (At top of this is instance of the 
    <br/>----------- PlaformModule - 
    <br/>----------- Root Module (Eaguerly loaded Modules - share Root Module Injector) 
    <br/>----------- and every Lazy loaded Module
    <br/>
    <br/>-------- Automatic Provisioning - @Injectable({providedIn}) class 
    <br/>----------- can have dependencies injected into it 
    <br/>----------- providedIn property configures a ModuleInjector -  
    <br/>------------- root | any | platform| any&lt;T>
    <br/>----------- 1: root - (Ang 6+) 
    <br/>---------------- default + most common 
    <br/>---------------- specify a certain Module class - where to position class
    <br/>---------------- Service (dep) is provided as a singleton throughout the appn
    <br/>---------------- 2 possibilities
    <br/>-------------------- 1: Single Module depends on service
    <br/>-------------------------- class provided within a module
    <br/>-------------------- 2: 2+ Modules depend on the service
    <br/>-------------------------- its provided in appn root injector (AppModule)
    <br/>
    <br/>----------- 2: any - (Ang 9+) 
    <br/>---------------- allows multi-module 
    <br/>---------------- ensure each module gets its own instance of dep (service)
    <br/>---------------- eg if each module defines alt child deps (services) of any dep
    <br/>---------------- Eagerly loaded modules - Ang 10 - share 1 instance of service
    <br/>---------------- Lazily loaded modules - get their own instance of any deps (service)
    <br/>
    <br/>----------- 3: platform - (Ang 9+)
    <br/>---------------- deps (services) to be regd at Platform level 
    <br/>-------------------- parent of root level of current app  
    <br/>-------------------- truely global singletons - shared among Ang apps
    <br/>-------------------- Micro-Frontend | Web Components  
    <br/>
    <br/>------- 2: ElementInjector - at each DOM el - Component | Directive
    <br/>
    <br/>----------- Injector Tree echoes the Component Tree
    <br/>--------------- providing a service (dep) in a @Component  
    <br/> -------------- every Component/Directive has its own injector
    <br/>
    <br/>--------------- can use providers or viewProviders
    <br/>------------------- viewProviders - only ViewDOM accessable (not ContentDOM)
    <br/>
    <br/> ------------- When a Component requests a dependency 
    <br/>----------------- Angular uses a Provider regd in the Components Injector
    <br/>
    <br/>-------------- if Component injector has no provider 
    <br/>----------------- passes to parent Components Injector
    <br/>
    <br/>------- InjectionToken 
    <br/>----------- creates a token that can be used in a DI Provideer
    <br/>----------- parameterized on T - type of object to be returned by Injector
    <br/>----------- provides an additional level of Type safety
    <br/>
    <br/>
    <br/>--- Injectors can have 1+   child Injectors - 
    <br/>
    <br/>
    <br/>--- ReflectiveInjector implements Injector 
    <br/>------- ReflectiveDependency Injection container 
    <br/>----------- used for instantiating objects and resolving dependencies
    <br/>----------- DEPRECATED
    <br/>  
    <br/>--- StaticInjector - Angular 5 
    <br/>------- much faster thant ReflectiveInjector          
    <br/>------- doesent resolve implicit deps at all
    <br/>------- developer must explicitly spec deps for each provider
    <br/>
    <br/>--- New Provider Type
    <br/>
    <br/>--- export interface StaticClassProvider {
    <br/>------- provide: any;
    <br/> ------ useClass: Type<any>;
    <br/> ------ deps: any[];
    <br/> ------ multi?: boolean;
    <br/>}
    <br/>
    <br/>--- Injector.create(providers);
    `,
    
    `--- DI GUIDE
    `,
    `--- Loosely coupled architecture
    ------- more mainable appns 
    `,
    ' -- ',
    `---- DI - Helps in Unit Testing
    
    `,
    ' -- ',
    `3 types of DI
    <br/>-------- 1:  Constructor Injection - interface passed to constructor
    <br/>-------- 2:  Method Injection - interface based injection
    <br/>-------- 3:  Property Injection - setter inection
    `,
    
    `--- 1 Constructor injection
    
    `,
    `--- 2 Method injection
    
    `,
    `--- 3 Property injection
    
    `,
    
  ' -- ',
    `--- Providers -
    <br/>------ how to get value for a Dependency (Service)
    <br/>---------- using DI system  
    <br/>
    <br/>------ Providers metadata accept services - that register within class injector
    <br/>--------- Provider field adds instns to let injector <ftn
    <br/>
    <br/>------- useClass| useValue| useFactory| useExisting
    <br/>---------- can never use an interface 
    <br/>------- can only be classes or InjectionToken 
    <br/>---------- get around shortcomings of JS  
    <br/>
    <br/>------ Providers configure an Injector with a DI token
    <br/>---------- injector provides runtime value of dependency value
    <br/>-------------- 3 types Token - Type| String| Injection
    <br/>
    <br/>
    <br/>------ by default - DI searches for a Provider 
    <br/>--------- in the Injector Hierarchy
    <br/> -    
    <br/>Components - @Component can have providers: [] 
    <br/>---- limits service to that Component
    <br/>
    <br/>Modules - @NgModule can have providers: []
    <br/>---- a singleton instance available all over appn
    <br/>
    <br/>Lazy Loaded Modules - can have providers: []
    <br/>---- a singleton instance available all over feature Module
    
    `,
    `-------------- Dependencies (Services)
    <br/>-------------- normally Services but can be Objects 
    <br/>------------------- class | functions | values 
    <br/>---------------------- that a class needs to perform itsftn 
    <br/>
    <br/>-------------- Runtime value - DI token on injector via Provider    
    <br/>
    <br/>------------ Providers metadata accept services 
    <br/>---------------- that register within class injector
    <br/>---------------- Provider field adds instns to let injector ftn
    <br/>
    `,
    `------------------ 3 types of Dependencies - class | functions | values
    <br/>------------------ Class - 
    <br/>------------------ Function - 
    <br/>------------------ Values - 
    `,  
    `------------ Providers metadata accept services 
    <br/>------------- that register within class injector
    <br/>------------- Provider field adds instns to let injector ftn
   `,
    ' -- ',
    `-------- 4 ways to create dep instance
    `,
    `----------- Provider definition Key
    <br/>----------  useClass | useValue| useFactory| useExisting
    `,
    `----------- 1:   useClass (Class provider)
    <br/>
    <br/>------------- inject a class
    `,
    `----------- 2:   useValue (Value provider)
    <br/>
    <br/>------------- inject a boolean or string, etc.
    `,
    `----------- 3:   useFactory (Factory provider)
    <br/>
    <br/>------------- inject a function - returns value
    <br/>------------- return objects based on a condition
    <br/>------------- can have a deps array of extra deps
    `,
    `----------- 4:   useExisting (Alias provider)
    <br/>
    <br/>------------- replace provider with a new one
    `,
   
    `Using provide with providers
    <br/> 
    <br/>@Component({
      <br/>--- selector: \'app-hero-of-the-month\',
      <br/>--- templateUrl:
      <br/> \'./hero-of-the-month.component.html\',
      <br/>--- providers: [
        <br/>----- { provide: Hero,          useValue:    someHero },
        <br/>----- { provide: TITLE,         useValue:   'Hero of the Month' },
        <br/>----- { provide: HeroService,   useClass:    HeroService },
        <br/>----- { provide: MinimalLogger, useExisting: LoggerService },
        <br/>----- { provide: RUNNERS_UP,    useFactory:  runnersUpFactory(2), deps: [Hero, HeroService] }
    <br/>--- ]
    <br/>})
    `,
    ' -- ',
     `----- Sandboxing - Multiple service instances 
      <br/> ------ at the same level of the Component
      <br/> ------ eg A Service that holds state for its companion comp instance       
      `,
        '------- Multiple Service Instances',
     ' -- ',
    `--- Injector
    <br/>----- provides a runtime version of dependency 
    <br/>--------- by dependency provider configuring injector with DI Token 
    <br/>
    <br/>----- for instantiating the dependency 
    <br/>---------- and injecting it into the Component/Service 
 
    <br/>
    <br/>----- looks for dependency in Angular Providers
    <br/>---------- using the Injection token   
    `,
    `------- Configure injectors with Providers
    `,
    `---------- Provider - lets injector - obtain | create deps
    `,
    `------- Injector instance / class 
    `,
    `----------- map of dependencies
    
    `,
    `--------------- DI Token is the key
    `,
    `------------------ DI Token and Runtime version of Dependency value 
    `,
    `--------------- DI Token on injector
    <br/> 
    <br/>---------------- registers the provider
    <br/>---------------- used to locate the depenency
    <br/>---------------- provides Runtime value of Dependency   
    <br/>
    <br/>-------------------- 3 types Token - Type| String| Injection
    `,

    `-------------------- Runtime value of Dependency
    `,
    `---------------- ProviderToken
   <br/>-------------- Token that can be used to retrieve instance from injector (or by query)
   <br/>-------------- type ProviderToken<T> = Type<T> | AbstractType<T> | InjectionToken<T>;
 `,
 `---- DI Tokens uniquely identify a provider
    <br/>-------------------- 3 types Token'
    <br/> ------------------------ 1: Type
    <br/> ------------------------ 2: String
    <br/> ------------------------ 3: Injection
    `,
    ' -- ',
    `------- StaticProvider 
    <br/>--------- type StaticProvider = 
    <br/>--------- ValueProvider | ExistingProvider | StaticClassProvider | ConstructorProvider | FactoryProvider | any[];
    <br/>
    <br/>--------- provides tokens to an injector for various types of dependencies
    <br/>
    <br/>--------- injector should be configured as static (without Reflection)
    `,
    `------------ used in Injector static class
    `,
    `------------ returns deps to Injector
    `,
    `------- ENVIRONMENT_INITIALIZER Injection Token 
    <br/>---- multi-provider token for initn ftns 
    <br/>------- that run on construction of an environment injector
    <br/>   
    <br/>const ENVIRONMENT_INITIALIZER: InjectionToken<() => void>;
    <br/>
    <br/>--- bootstrapApplication(AppComponent, {
    <br/>-------  providers: [
    <br/>-----------  {
    <br/>-----------------      provide: ENVIRONMENT_INITIALIZER,
    <br/>-----------------      multi: true,
    <br/>-----------------      useValue() {
    <br/>-------------------        inject(FooService).init()
    <br/>-----------------      }
    <br/>------------  }
    <br/>-------  ]
    <br/>--- })
    <br/>
    <br/>
    <br/>export const todosRoutes: Routes = [
      <br/>{
      <br/>---  path: '',
      <br/>---  loadComponent: () =>
      <br/>------    import('./todos-page.component').then((m) => m.TodosPageComponent),
      <br/>--------- providers: \[
      <br/>------------- {
      <br/>-----------------  provide: ENVIRONMENT_INITIALIZER,
      <br/>-----------------  multi: true,
      <br/>-----------------  useValue() {
      <br/>---------------------  inject(TodosService).init();
      <br/>----------------- },
      <br/>------------- },
      <br/>-------\],
      <br/>--- },
      <br/>\];
      <br/>
  `,
    `--- Environment Injector - (Angular 14)
    <br/>------- is a generalized version of NgModuleRef (Module Injector)
    <br/>------- one of the primitives supporting standalone component APIs
    <br/>
    <br/>--- import { ENVIRONMENT_INITIALIZER, inject } from '@angular/core';
    <br/>--- import { bootstrapApplication } from '@angular/platform-browser';
    <br/>
    <br/>Angular 14 Injectors - since we can be Module-less
    <br/>ModuleInjector was renamed EnvironmentInjector
    <br/>---- EnvironmentInjector is a generalized version of NgModuleRef 
    <br/>-------- also known as Module Injector
    <br/>
    <br/>NodeInjector (ElementInjector) service has priority over EnvironmentInjector
    <br/>---- (priority over EnvironmentInjector)
    <br/>
    <br/>RouterInjector (New Ang 14)
    <br/>-------- Providers in Angular Route  
    <br/>------------ has a 
    <br/>--------------- can be parent to Lazy Loaded Modules
    <br/>
    <br/>------------ Normally our Routes 
    <br/>---------------- use path and Component
    <br/>---------------- or path and loadChildren
    <br/>
    <br/>@Component({
    <br/>----- selector: '',
    <br/>----- standalone: true,
    <br/>----- imports: [CommonModule, UsersModule],
    <br/>----- templateUrl: 'x.component.html',
    <br/>----- styleUrls: ['x.component.scss'],
    <br/>})
    <br/>------------- RouterInjector
    <br/>----------------- path: 'admin', 
    <br/>----------------- providers : \[
    <br/>-------------------- { provide: UserService, useExisting: ExperimentUserService}
    <br/>----------------- \],
    <br/>----------------- loadComponent: () => import('./feature/admin/admin.component').
    <br/>--------------------- then(c => c.then(m => m.adminComponent))   
    <br/>
    <br/>NgModuleRef&lt;T>{
    <br/> abstract  injector: EnvironmentInjector
    <br/>----    abstract  instance: T  
    <br/>----    abstract  destroy(): void
    <br/>----    abstract  onDestroy(callback: () => void): void 
    <br/>}  
    <br/>
    <br/>Angular 13
    <br/>ViewContainerRef.createComponent(x:MyComponent);
   `,
    ' -- ',
     `----- Injector.create()
    <br/>-------- static create(options: {providers: StaticProvider\[\]: parent?: Injector; name?: string;}): Injector
    <br/>
    `,
    `------------ get() - 
    `,
    ' -- ',
    `--- Injectors 
    <br/>--- form backbone of DI framework
    <br/>
    <br/>------ create + retrieve services (Deps) in an app
    <br/>
    <br/>------ are data structures storing instns
    <br/>--------- detailing where + how services form
    <br/>--------- instantiate services 

    <br/>
    <br/>------ Acting as intermediaries within Ang DI system
    <br/>
    <br/>------ Module | Directive| Component classes 
    <br/>----------- contain metadata specific wrt injectors
    <br/>----------- each class contains a new injector instance
    <br/>
    <br/>------ Providers metadata accept services - that register within class injector
    <br/>--------- Provider field adds instns to let injector ftn
    <br/>
    `,
    '------ backbone of DI framework',
    '------ injectors - key-value pairs ',      
    '--------- Injector Hierarchy DI system',
  `---------------- Injector Bubbling - 
  
  `,
  '-- 2 Injector Hierarchies',
  `-------1: ModuleInjector 
  <br/>---------- (Ivy R3Injector)
  <br/>---------- (Angular 14 - EnvironmentInjector)
  `,
  `----------- a Module level injector
      <br/>------- Angular creates the Module Injector tree when the appn starts
      <br/>  
      <br/>---------- has a Records property that stores DI info 
      <br/>-------------- and stores instances of injectables    
      <br/>
      <br/>------- can be configured in 1 of 2 ways
      <br/>----------- 1:s @NgModule() providers array
      <br/>----------- 2: @Injectable() providedIn - to @NgModule() or root 
      <br/>------- is a flattening of all the providers arrays  
      <br/>------- that can be reached by following the NgModules.imports recursively 
      <br/>
      <br/>------------- get() records a Map collection
      <br/>---------------- key is a token 
      <br/>---------------- value is instance corresponding to token    
      `,
      '----------- A: Providers Metadata of the @NgModule',
      `--------------- nullInjector - top of tree
      <br/>------------------ doesnt keep any tokens
      <br/>------------------ always throws error unless @Optional - null
      `,
      `--------------- platformInjector
      <br/>----------------- under nullInjector is an instance of the PlatformInjector
      <br/>--------------------- usually has built in providers like DomSanatizer   
      `,
      `--------------- RootModuleInjector
      <br/>-----------------  under platformInjector is an injector for the Root Module
      <br/>-----------------  root (alias) -  
      `,
      `---- When a dynamically loaded component is created
      <br/>-------- gives you option to create child ModuleInjector hierarchies
      <br/>-------- such as with the Router 
      `,
      ' and ',
      `--------------- for each Lazy Loaded Module`,
      ' -- ',
      `----------- B: - Providing a Service
      <br/>------------ Service @Injectable({ providedIn: \'xxx\'\})
      <br/>------------ root | platform | any | Type<any> | other values
      `,
       `-------------- 'root'
       <br/>-- @Injectable({ providedIn : \'root\',}) - 
       <br/>(appn - or root level injector) you can now inject the service anywhere in your appn
       <br/>
       <br/>---------------- default + most common 
       <br/>---------------- specify a certain Module class - where to position class
       <br/>---------------- Service (dep) is provided as a singleton throughout the appn
       <br/>---------------- 2 possibilities
       <br/>-------------------- 1: Single Module depends on service
       <br/>-------------------------- class provided within a module
       <br/>-------------------- 2: 2+ Modules depend on the service
       <br/>-------------------------- its provided in appn root injector (AppModule)
       `,     
       `-------------- 'any'
       <br/>-- @Injectable({ providedIn : \'any\',}) 
       <br/>---- provides a unique instance in each lazy loaded module | 
       <br/>
       <br/>---- all eagerly loaded modules share one instance
       <br/>---------------- allows multi-module 
       <br/>---------------- ensure each module gets its own instance of dep (service)
       <br/>---------------- eg if each module defines alt child deps (services) of any dep
       <br/>---------------- Eagerly loaded modules - Ang 10 - share 1 instance of service
       <br/>---------------- Lazily loaded modules - get their own instance of any deps (service)
       `, 
       `-------------- 'platform'
       <br/>-- @Injectable({ providedIn : \'platform\',}) 
       <br/>--- a special singleton platform injector via a service 
       <br/>- shared by all appns on page
       <br/>---------------- deps (services) to be regd at Platform level 
       <br/>-------------------- parent of root level of current app  
       <br/>-------------------- truely global singletons - shared among Ang apps
       <br/>-------------------- Micro-Frontend | Web Components
       `,    
       `-------------- 'Type&lt;any>'
       <br/>-- @Injectable({ providedIn : \'Type&lt;any>\',}) 
       <br/>---- associates the injectable with an @NgModule or other injector types
       `,       
       'other values',
       ' -- ',  
  `-------2: ElementInjector (Ivy NodeInjector)
  <br/> ------------ Injector Tree echoes the Component Tree
  <br/> -------------- every Component has its own injector
  <br/> -------------- has priority over Module(Environment) Injector
  <br/>
  <br/> ----------- When a Component requests a dependency 
  <br/>----------------- Angular uses a Provider regd in the Components Injector
  <br/>
  <br/>------- if Component injector has no provider 
  <br/>--------- passes to parent Components Injector
  <br/>
  <br/>@Component({
   <br/>----- providers: [{ provide: ItemService, useValue: { name: 'lamp' } }]
   <br/>})
   <br/>export class TestComponent
   <br/>  
   `,
  `--- Resolution Modifiers
  <br/>------ 3 categories
`,
'------------ @Optional()',
'------------ @SkipSelf()',
`------------ @Host() and @Self 
  <br/>---------- @Host - limits the search for a matching provider
  <br/>------------ root injector -  
  `,
  '----- @Self()',    

  ' -- ',
     
  `--------- NodeInjector implements Injector is saved in
  <br/>-------- is an injector that belongs to a node
  <br/>-------- is an object that has ref to TNode and LView objects
  `, 
  `----------- 9 contiguous slots in LView +
  `, 
  `----------- 9 contiguous slots in TView.data
  
  `,  
  '----------- object refs to',
  `------------- TNode - any kind of object : 
  <br/> - element| ng-template| ng-container
  <br/>
  <br/> - Ang creates a injectorIndex property on TNode 
  <br/>--- where bloom filter is located. 
  <br/> - The NodeInjector gets required provider by looking at the data 
  <br/> - contained in TNode and LView objects
  <br/> - Ivy renderer - stores injection info for the Node in the view data  
  <br/> - start from a header (17 slots) 
  <br/> --- contains ref to parent injector at index 10  
  <br/> - It allocates allocates slots in LView + TView.data arrays    
  `,
  `------------- LView - contains DI info 
  <br/>  array contains data 
  <br/>------------- describing a specific template
     <br/> stores instances -
     <br/> After each bloom filter - Ang stores parentLocation ptr  
     <br/> ---   we can walk through all parent injectors     
  `,
  `------------- TView.data array - Ang keeps data shared x templates    
   <br/> stores all tokens 
  `,
  `--------------- These slots rep 2 bloom filters - Cumulative + template    
   <br/> - 1 view can have as many bloom filters or injectors 
   <br/> - for nodes located on the view
  `,
  '- ',
  `--------------- using Bloom filter
    <br/> -   8 slots long ([n, n+7] indices) - 
    <br/>Their number is directly proportional to the num of nodes  
    <br/>-- for which the injector is created
    <br/>
    <br/>Each bloom filter has a ptr to the parent bloom filter 
    <br/>--- in the "packed" parentLocation slot (n + 8)
    <br/>
    <br/> Ivy bloom size is 256 bits - divided into 8 parts - 
    <br/>---   
  `,
  `---------------------- ENVIRONMENT_INITIALIZER
  <br/>---------------------- multi-provider token for initialization ftns 
  <br/>---------------------- that will run on construction of an environment injector
  <br/>
  <br/>---------------------- const ENVIRONMENT_INITIALIZER: InjectionToken<() => void>;
  `,

  '- View object - an internal object that reps Ang template',
  `--- Ang builds a tree of views 
    <br/>----- which always starts with a fake root View
    <br/>----- that only contains 1 root element
    <br/>----- Ivy uses LView and TView.data arrays   
  `,
  '----- ',
  `- DI Tokens - When you configure an injector with a provider 
  <br/>- you are associating that provider with a DI token
  <br/>The injector lets Angular create a map of any internal dependencies.
  <br/>
  <br/>The DI token - acts as a key to that map - 
  <br/>The dep value is an instance & the class type serves as a look up key 
  <br/>
  <br/>eg. Here the injector uses HeroService type as the token for looking up heroService 
  <br/>constructor(private heroService: HeroService){}  
  `,
  '-- DI Parts - injector | provide | dependency provider | provide defn key',
  `-- Dependency Provider - configures provider with a DI token 
  <br/>which that injector uses to provide the runtime version of a dep value
  `,
  `-- Defining Providers - provide: [Logger] same as [{provide: Logger, useClass: Logger}]
  <br/>class provider syntax - is a shorthand expression for a provider confign defined by the Provider interface
  <br/>Above is a class provider syntax for providing a Logger class in the providers array
  <br/>Note the provide property holds the token - key for locating a dep value and config injector
  <br/>Note 2nd property is a provder defn object - which tells injector how to create the dependency value    
  `,
  '-- [Logger] same as [{provide: Logger, useClass: Logger}]',
  `-- provider defn key - useClass | useExisting | useValue | useFactory
  <br/> to configure the injector - keys for tokens
  `,
  '--- Providers with deps',
  `---- aliasing class providers - useClass
  <br/>[{ provide: Logger, useClass: BetterLogger }]
  `,
  '---- aliasing class interface - useExisting',
  '---- aliasing multi class i/fs',
  `---- injecting an Object - configure with a useValue option
    <br/>[{provide: Logger, useValue: SilentLogger}]
  `,
  '---- injecting a config Object',
  '---- InjectionToken object',
  '---- interfaces and DI  ',
  `---- Using factory providers - useFactory field - specifies provider is a factory ftn whose impn is here - heroServiceFactory
  <br/>export const heroServiceProvider =
  { provide: HeroService,
    useFactory: heroServiceFactory,
    deps: [Logger, UserService]
  };  
  `,
  'class +',
  '@sInjectable({})', 
  '- declare locn', '- nesting','- Sharing','typical tasks',
  '- Providing a Service', 
  '-- @injectable({ providedIn: \'root\'})',
  '--- providedIn: \'root\'',
  '--- providedIn: \'platform\'',
  '--- providedIn: \'any\'',
  '--- providedIn: &lt;T>\''
  ],
  [`Decorators 
    <br/>--- add metadata to a class | objects or methods 
    <br/>---  which defines annotations 
    <br/>--- used by TypeScript compiler tsc
    `,
     '- Metadata - describes other data',
     `--- Annotations - 
     <br/>------- are hard coded language features - 
     <br/>------- set on a class - reflect metadata library
     `, 
     '--- class',
     'Decorator Types', 
     '- Class - ',
     '----- @Component()',
     '----- @Directive()',
     '----- @Pipe()',
     '----- @Injectable()',
     '----- @NgModule()',
     ' -- ',  
     '--- Property',
     `----- @Input() - most used decorators 
     <br/>------ passes data from parent (host) component to child
     <br/>------ related to DOM property in template where child is used     
     `,
     '-------- passes data from parent to child',
     '--- 3 ways to use @Input()',
     `------ 1: plain - @Input() message: string;
     <br/>------- &lt;child-one message="hi there">&lt;/child-one>
     <br/>------- In he child-one - &lt;p>{{ message }}&lt;/p>
     `,
     `------ 2: alias - @Input("msg") message: string;
     <br/>------- &lt;child-two msg="hi there">&lt;/child-two>
     <br/>------- In the child-two - &lt;p>{{ message }}&lt;/p>
     `,
     `------ 3: setter/getter 
     <br/>------ use the TS get and set auto-properties
     <br/>------ private _message: string;
     <br/>
     <br/>------ @Input() // specify Input decorator here
     <br/>------ set message(inputMessage: string) {
     <br/>------ this._message = inputMessage && inputMessage.toUpperCase(); // uppercase message here
     <br/>--- }
     <br/>
     <br/>--- get message(): string {
     <br/>--- return this._message;
     <br/>}
     `,
     ' -- ',
     `--- @Output() 
     <br/>-------- marks property in child 
     <br/>------ to let data travel from a child to a parent 
     <br/>------ binds a property of type EventEmitter class   
     <br/>
     <br/>------ @Output() myOutput:EventEmitter&lt;string>= new EventEmitter();  
     `,
       '------ pass data from child to a parent class',
       '-------- EventEmitter()',
      `------- Ex @Output() myOutput:EventEmitter&lt;string>= new EventEmitter();  
      <br/>--- Using emit()
      <br/>--- sendValues(){  
      <br/>--- this.myOutput.emit(this.outputMessage);  
      <br/>}  
      `,
      `---------- using emit() 
      <br/>--- sendValues(){  
      <br/>------- this.myOutput.emit(this.outputMessage);  
      <br/>---}  
      <br/> 
      <br/>--- &lt;app-student 
      <br/>--- [myinputMsg]="myInputMessage" 
      <br/>--- (myOutput) ="GetChildData($event)">
      <br/>--- &lt;/app-student>   
     `, 
     ` using the myOutput() event
       <br/>--- &lt;app-student [myinputMsg]="myInputMessage" (myOutput) ="GetChildData($event)">
       <br/>--- &lt;/app-student>   
     `, 
     ' -- ',
     `----- @HostBinding() 
     <br/>------- declares a host property binding
     <br/>------- Angular automatically checks Host property bindings during CD
     <br/>------- If binding changes - it updates the host element of directive  
     `,
     '------- declares a host property binding',
     '------- binds a property to the host element',
     '---------- Ex @HostBinding(\'class.box1\') toggle: boolean = false;',
     '------------ value of toggle determines if box1 class is applied',
     '--------- on change - checked by CD',
    ' -- ',
     `----- @ContentChild() 
      <br/>------ selects project content 
      <br/>------ 1st el matching selector from Content DOM
     `,
     '------- selects projected content - 1st el matching selector from Content DOM',
     '---------- Content DOM',
     ' -- ',
     `------- @ContentChildren() 
     <br/>-------- fetch a QueryList of els from Content DOM
     <br/>-------- configures a content query 
   `,
   `------------- list of queries
   `,
   '----------- configure content query',
   '------------- list of queries',
     ' -- ',
     `--- @ViewChild()
     <br/>------- configures a View Query from template of Component    
     <br/>------- matching selector in View DOM tree
     <br/>------- Provides instance of another component in a parent component 
     <br/>------- parent component can access methods of  
     <br/>------- used in ngAfterViewInit LCH
     `,
     `----- Simple Ex - 
     <br/>------- @ViewChild(ColorSampleComponent)
     <br/>------- primarySampleComponent: ColorSampleComponent;
     `,
    '------- config a View Query', 
    '--------- from template of Comp',    
    '--------- View DOM tree',
    '----------- instance in parent comp',
    '---- parent comp access methods',
    `--- ngAfterViewInit() Life Cycle Hook
      <br/>----- use to write initialization code 
    `,
    '--- read - ',
    '--- static - ',
     `-------- Ex ViewChild 
     <br/>------- @ViewChild(DemoComponent, { static: false }) hello: DemoComponent;
     <br/>------- ngAfterViewInit() {
     <br/>-----------   console.log("Hello ", this.hello.componentName);
     <br/>--- }
     <br/>}
   `,
    ' -- ',
    `------- @ViewChildren()
     <br/>provide access to child els in the View DOM
     <br/>by setting up View Queries
     `,
     '---------- child els in View DOM',
     '------------- View Queries',
     ' -- ',
     '--- Method',
     `----- @HostListener() 
     <br/>------ decorator that declares a DOM event to listen for  
     <br/>-------- also provides a handler method to run when event occurs
     <br/>---------- which is invoked when host element emits specified event 
     <br/>
     <br/>------- provides a handler
     <br/>------- triggered on event
     `,  
    ' -- ',
     '--- Parameter',
     `----- @Inject() - 
       <br/>------ A DI token that maps to the dep to be injected 
       <br/>--------- a par decorator on a dep par of a class constructor 
       <br/>------ specifying a cust provider of the dep
     `,
     '--- DI token',
     `------ @Self() - instructs Ang to look for dep only in local injector  
     <br/>------ part of current Component or Directive
     <br/>------ Resolution Modifiers - mod injector behavior
     `,
     '------- local injector',
     `----- @Optional() - marks dep as being an optional parameter 
     <br/>------ if dep not found it returns null instead of an error
     `,
     '------- returns null if not found',
    `----- @skipSelf() - instructs Ang to look for dep only in parent injector  
     <br/>------- parent of current Component or Directive
     <br/>------- Resolution Modifiers - mod injector behavior
     `,
     '------- parent injector',
     `----- @Host() - instructs Ang to look for injector on Component itself
     <br/>----- similar to @Self() but 
     <br/>------- if not found in current Component 
     <br/>------- continues to search till it reaches the host i Component   
     `,
     '------- similar to @Self',
     '-------  search till host',
     `----- @Override()
     `,
     '------- overrides method',
     ], 
     [`Interfaces 
      <br/>--- define a contract with a set of properties and or methods - 
      <br/>--- to be implemented by a class
      <br/>--- export interface IGame:{ prop1: number; prop2: string; prop3: number;}
    `,
    '--- export', 
    `--- export interface IGame{ gameId: number, gameName: string, gameCode: string, etc. }
    `, 
      `--- Classes 
      <br/>------ can implement interfaces and must bind by the contract 
      <br/>------ can have constructor| properties| methods| events
      `,
      `--- constructor 
      <br/>------ important for DI of services
      `, 
      `--- properties - class data - can be private 
      <br/>------- default public
      `, 
      '- methods - functions on the class', 
      '- events - ', 
      '-- this to ref the class object properties and methods'
    ],
    ['JavaScript',
    '--- browser scripting lang',
    '--- Interpreter based',
    '--- data types',
    '--- variables var x',  
    `--- const 
      <br/>------- const MAX_CNT = 5;
    `,
      `--- static
      <br/>------ can be a variable or function
      <br/>--------- static variable 
      <br/>--------- used throughout the appn
      <br/>
      <br/>--------- static function like main
      <br/>-------------- static main(){} 
 
      `,
      '--- case sensitive',
      '--- control statemen  ts',
      '--- dynamic typing',
      `--- document.getElementById()
  
      `,
      '--- operators',    
      '--- first class citizens',
      '------ Objects',
      '------ Functions',
      '--- Event handling',
      '--- Closures',
      '--- Hoisting',
      '--- IIFE',
      '--- Array features',
      `-------- length
      `,
      `--------- sort()
      `,
      `--------- toString()
  
      `,
      `---------- filter()
      `,
       `--------- push()
      `,
      `---------- pop()
      `,
      `---------- indexOf()
  
      `,
     `-  ------- splice()
  
      `,
      `---------- slice()
  
      `,
      `---------- shift()
      `,
  `---------- unshift()
  
      `,
      `---------- fill()
      `,
  `---------- every()
      `,
      `---------- entries()
      `,
  `---------- join()
      `,
        `---------- concat()
  
      `,
      '--- Exs',
      `------- Fibinaci Series

      C# demo 
      var yourself = {
        fibonacci : function(n) {
            if (n > 1) {
              return this.fibonacci(n - 1) +
                           this.fibonacci(n - 2);
    
            }
            return n;
        }
      };
    
      
      `
    
    
      ],
    [`ES EcmaScript 
    <br/>--- modern JavaScript
    <br/>--- is a JS std to ensure interoperability of web pages wrt diff browsers
    <br/>
    <br/>-- ESMs (EcmaScript Modules)    
    <br/>---- leads to fast reload speeds and smaller bundles 
    <br/>------ ES5 is associated with the original JS 
    <br/>------ Es2015 (ES6) - is associated with 1st ES roll out
    <br/>
    <br/>------ since then there have been several updates
    <br/>-------- ES - 2020
    <br/>-------- ES - 2022
    <br/>
    <br/>--- These add features onto the original JS to simplify coding 
    <br/>--- eg. Fat Arrow ftns | const | let with block scope | Promises | \`\` string literals
    <br/>---- string and array functions too 
    `,
    '--- modern JavaScript',
    '---- ES6 (ES 2015)',
    `------ let const var
    <br/>----- let - has block scope
    <br/>----- const - has block scope
    <br/>----- var - has function or app scope
     `,
    '---- fat arrow ftns (x)=> x * 2;',
    `---- For/of
     <br/>
     <br/>--- const cars = ["BMW", "Volvo", "Mini"];
     <br/>--- let text = "";
     <br/>
     <br/>--- for (let x of cars) {
     <br/>---------text += x + " ";
     <br/>--- }
     `,
     '---- Map Objects',
     '---- Classes',
     '---- Promises',
     '---- defaul params',
     '---- ftn rest params',
     `---- String -
     <br/>------- includes | startsWith | endsWith
       `,
        '------- string.includes()',
        '------- string.startsWith()',
        '------- string.endsWith()',
        `---- Array -  
            from | keys | find() | findIndex()   
        `,
        '------- array.from()',
        '------- array.keys()',
        '------- array.find()',
        '------- array.findIndex()',
        '---- Object entries',
        '---- JS Modules',
        ' -- ',
        `--- JavaScript features
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        `,
        ' -- ',
        `--- JavaScript Advanced features
        <br/>Closures to extend variable scope
        <br/>Hoisting to top - JS default behavior
        <br/>Object literals to pass optional args
        <br/>Contextual targeting of DOM elements
        <br/>Using namespaces to prevent conflicts
        <br/>Hybrid Appn Devt
        <br/>
        <br/>Closures
        <br/>A ftn that refs variables in the outer scope from its inner scope
        <br/>Closure preserves the outer scope inside the inner scope
        <br/>
        <br/>ftns in JS form closures - combn of ftn + lexical envt
        <br/>Closures let you associate data with ftns 
        <br/>Lexical Scoping - 
        <br/>
        <br/>Hoisting moving all declarations to the Top of Scope (normally file)
        <br/>--- variables + ftn declarations - hoisted before code execution
        <br/>--- during creation phase of execution context 
        `
      ],
    [`TypeScript - JS with the power of types - 
      <br/>--- data types - number | string | boolean | Array | 
      <br/>--- null | undefined
      <br/>-------- helps avoid static type errors (compilation errors) 
      <br/>-------- discover at Compile time (not runtime)
      <br/> 
      <br/>--- Object Oriented Language
      <br/>---- strongly typed and uses inferred types 
      <br/>---------- interfaces and types   
      <br/>
      <br/>A Strongly Typed Programming Language
      <br/>- Can be used in any browser or JS engine (ES6) ie. Node.js   
      <br/>
      <br/>tsc transpiles ts down to .js files 
      <br/>--- run in the browser 
      <br/>
      <br/>-- Compile time Type Checking 
      <br/>
      <br/>uses tsconfig.json - configures TS
      <br/>--- compilerOptions and AngularCompilerOptions
      <br/>
      <br/>tooling - auto-completion | navigation | refactoring - 
      `,
      '- Object Oriented Language ',
      `- Strong Typeed - relates to a whole language 
      <br/>- number | string | boolean | 
      `,
      '--- normally written in Code editor - VS Code',
      `TS has - Compile Time Type Checking 
      <br/>- a statically typed language
      <br/>- Type Checks are performed at compile time
      `,
      `--- Type Annotations 
      <br/>------ used to enforce type Checking
      <br/> ----- helps compiler to check types and avoided data type errors 
      <br/> -------- (not mandetory in TS) 
      `,
      '----- helps compiler check types ',
      `- JS Primitive Types 
      <br/>--- JS is a dynamically typed language
      <br/>--- Type Checks are performed at runtime
      <br/>---- when the program is executing 
      `,
      `--- string
      `,  
      `--- number
      `,
      `--- boolean
      `,
      `- JS Primitive Values
      `,
      `--- null
      `,
      `--- undefined
      `,
      `--- Type safe - means No casting or Runtime type errors
      <br/>------ relates to a portion of code 
      `,
      '------ No Casting',
      '------ No Runtime type errors',
      ' -- ',
      '- TS Basic Data Types',
      '--- JS Primitives',  
      '--- JS Primitive Value',
      '----- strictNullChecks on/off',
      '--- Array',
    `--- any - should be avoided
     <br/>------ noImplicitAny flag in tsconfig.json

    `,
    '----- unknown (TypeSafe any)',
    `--- Enums
    <br/>------ let a developer define a set of named constants
    <br/>------ lets you document intent or set of distinct cases
    <br/>------ both numeric and string based enums
    <br/>
    <br/>enum Direction {
      <br/>--- Up = 1,
      <br/>--- Down,
      <br/>--- Left,
      <br/>--- Right,
      <br/>}
      <br/>
      <br/>export enum staffTypes{
      <br/>--- tester = 1,
      <br/>--- developer = 2,
      <br/>--- manager = 3
      <br/>}
      <br/>
      <br/>String enums 
      <br/>
      <br/>enum Direction {
        <br/>--- Up = "UP",
        <br/>--- Down = "DOWN",
        <br/>--- Left = "LEFT",
        <br/>--- Right = "RIGHT",
      <br/>}
    
      `, 
    `--- Object Type
    <br/>------ var employee : { 
    <br/>--------- id: number; 
    <br/>--------- name: string; 
    <br/>------ }; 
    <br/>
    <br/>------ employee = { 
    <br/>--------- id: 100, 
    <br/>--------- name : "John"
    <br/>------ }
    `,
    `--- interfaces | classes
    <br/>------ Interfaces are defined in TS
    <br/>---------- interfaces define properties of diff types
    <br/>
    <br/>------ TS does not define a class
    <br/>---------- classes are defined in Angular 
    <br/>---------- all members of an interface must be implemented by a class
    <br/>------------- except if they are optional (at end of defn)
    <br/>
    <br/>---------- or if all members options use partial type
    `,
    `--- typeOf()
    <br/>------ JS supports a typeof operator
    <br/>---------- which can give basic type info values at runtime 
    <br/>
    <br/>------ TS expects this to return a set of strings
    <br/>----------- "string"| "number| "bigint"| "boolean"| "symbol"
    <br/>----------- "undefined"| "object" | "function()"        
    `,
    `--- type vs interfaces
    <br/>------ interfaces are better for Objects and method Objects
    <br/>------ types are better to work with functions and compled types      
    `,
    `--- partial type - partial&lt;T>
    <br/>------ constructs a type with all properties of a Type set to Optional
    <br/>------       
    <br/>
    <br/>interface Todo {
      <br/>--- title: string;
      <br/>--- description: string;
    <br/>}
    <br/> 
    <br/>function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
      <br/>--- return { ...todo, ...fieldsToUpdate };
    <br/>}
    <br/> 
    <br/>const todo2 = updateTodo(todo1, {
    <br/>--- description: "throw out trash",
    <br/>});     
    `,
    `--- Index Signature []
    <br/>--- used for accessing object types with unknown string keys
    <br/>------- and a specific value type
    <br/>--- type studentScore = { [name:string]: number};

    `,
    `--- Record type
    <br/>---  type studentScore = Record<string, number>;
    `,
    `------ using Record
    <br/>------- is more concise wrt index signature
    <br/>---------- type staffCountByEnum = Record<staffTypes, number>;
    `,
    `------ combinging Record with keyOf
    <br/>---------- type staffJson = Record<keyOf Staff, string>  
    <br/>---------- const product: StaffJson = {name:'Jo', salary: '1000'}
    <br/>}
    `,
    `--- comb Record| Partial| Intersection
    <br/>----- creates strongly typed benefits object
    <br/>--------- assoc kesy with value types   
    <br/>--------- catches error at compile time
    <br/>--------- flags errors while typing     
    <br/>--------- provides intellisense and autocompletion  
    `,
    `----- Type aliases
    <br/>------- gives a type a new name 
    <br/>
    <br/>------- type type_alias = number | string | boolean;  
      `,
    `-------- Path aliases
    <br/>--- import { User } from \'../../user/model\';
    <br/>--- import { Article } from \'../../article/model\';
    <br/>
    <br/>--- import { Cache } from \'../../../../cache\';
    <br/>--- import { MongoDB } from \'../../../../mongodb\';
    <br/>
    <br/>--- Much better look
    <br/>--- import { User } from '@modules/user/model';  
    <br/>--- import { Article } from '@modules/article/model';
    <br/>
    <br/>--- import { Cache } from '@services/cache';
    <br/>--- import { MongoDB } from '@services/mongodb';
    <br/>
    <br/>---- npm i --save module-alias 
    <br/>------- module registers the path aliases in compiled js files
    <br/>-------- 
    <br/>--- "_moduleAliases": {
    <br/>--- "@modules": "dist/rest/modules",
    <br/>--- "@services": "dist/services"
    <br/>}    
    <br/>
    <br/>--- "baseUrl": "./src",
    <br/>--- "paths": {
    <br/>--- "@modules/*": ["rest/modules/*"],
    <br/>--- "@services/*": ["services/*"]    
    `,
      '--- Union Types',
      `----- Composite types - data types that have 1+ fields dynamically linked to fields in another data type
      <br/>- useful for creating a single data type - refs info in > 1 data source or refs > 1 table or structure in a data source
      `,
      `------ Narrowing - 
      <br/>------- process of refining to more specific types 
      <br/>----------- eg a union down to a spefific type 
      <br/>
      <br/>------- different types of Narrowing
      <br/>---------- Truthiness
      <br/>---------- Equality 
      <br/>---------- in-operator
      <br/>---------- instanceof()
      `,
      `-------- Type Guards 
      <br/>-------- is used to get info about a type of a variable
      <br/>----------- usually within a conditional block
      <br/>----------- are regular ftns returning a boolean 
      <br/>--------- taking a type and telling TS 
      <br/>----------- if it can be narrowed down or not            
      <br/>
      <br/>--------- let you narrow down the type of a variable within a condnal block
      <br/>------------ uses typeof x 
      <br/>------------ uses instanceof y
      `,
      '----------- conditional value check',
      '----------- typeof x',
      '----------- instanceof y',
      '----------- in type',
      '----------- type guard ftn with predicate',
      '----------- type guard ftn with assertion  ',  
      '--- Distributive Conditional Types',
      '--- Inferred Types - TS determines the types',
      `--- Reduce()
       <br/>------- 
      `,
      `--- duck typing 
       <br/>------ powerful feature which brings strong typing concepts in TS code  
       <br/>------ type checking that focuses on the shape that values have - checks for properties instead of Objec type
       `,
        '--- tooling - auto-completion | navigation | refactoring',  
        '--- TypeScript Compiler - MS - transpiles ts with type information to js files', 
      '--- .ts fisles - files with Type Infon - makes data TypeSafe',
      '--- transpilation ts files down to JavaScript files', 
      `--- tsconfig.json - identifies the project or appn as a TypeScript appn 
       <br/> - with this ids root path - CompilerOptions - AngularCompilerOptions
      `,   
      '--- CompilerOptions',
      '--- AngularCompilerOptions',
      '--- fullTemplateTypeCheck: true',
      '--- JS files - ES5 files - with std JavaScript' , 
      '--- ngc - (Angular Compiler ) uses tsc to transpile ts to js files',
      `--- Barrels - (index.ts) is a way to rollup exports from several modules into one convenient module
      <br/>--- The barrel itself is a module file that re-exports selected exports of other modules
      <br/>------- module file which provides a centralised place for exporting 
      <br/>------ components | interfaces | services | directives | pipes
      `,
       `--- Exs of Composite data types - sequence | set | list | Array | table | Record | ftn call | union | intersection   
       <br/>
       `,  
      `--- Union types - A | B eg   let unionJack : number | string;
      <br/>
      `,
      `--- intersection types - expressiveness of type system - are composite data types - used to assign diff types to an object
      <br/>------ useful for defining overloaded functions  
      <br/>------ class Egg { private kind: "Egg" } and class Milk { private kind: "Milk" }
      `,
      `--- product types - assigned to a tuple `,
     
      `--- interfaces (custom Object types) - export interface Course{ title: string; descn: string; ageYears: number;} Type definition object   
      <br/>We can make properties optional by adding a ? at end of property name
      <br/>- note JS does not have interfaces
      `,
      '--- optional properties ageYear?: number - must be at the end of the interface defn export interface Course{ title: string; descn: string; ageYears?: number;}   ',
      '--- readonly properties - export interface Course{ readonly title: string; descn: string; ageYears: number;}',
      '--- const myIfObj: Course = { title: \'My Course\', descn:\'My Descn\'',
      `--- Type Aliases - eg can be used with union type - 
      <br/>--- type CourseStatus = "draft"| "published" | "unpublished";
      <br/>--- let x: CourseStatus = "draft"; 
      `,
      `--- classes - helps structure reusable Angular objects  
       <br/>------ with multiple declarations for methods - properties - events 
      `,
      '--- index.ts',
      `--- TypeScript Exression Engine 
       <br/>------ evaluates expressions in realtime against arbitrary data 
       <br/>
    
    `
     ],
     [`Angular CLI (Command Line Interface) tool - 
        <br/>--- lets you initialize | develop | Scaffold | maintain | build| serve 
        <br/>--- Angular apps directly from a Cmd line - prompt 
        <br/>
        <br/>--- uses ng xxx commands 
        <br/> 
        <br/>--- suses Node.js | npm and Schematics and Webpack 
        <br/>
        <br/>--- CLI includes a Server to let you build, serve and test app locally  
        <br/>------ uses builder dev-server 
        <br/>------ when ng serve - port 4200 by default on localhost 
        <br/> 
        <br/>--- requires Node.js | npm (Node Package Manager)
        <br/>
        <br/>--- npm install -g @angular/cli   
        <br/>
        <br/>- CLI Commands
        <br/>--- ng new
        <br/>--- ng add
        <br/>--- ng generate
        <br/>--- ng build
        <br/>--- ng update
        <br/>--- ng serve
        <br/>--- ng test
        <br/>--- ng help
        <br/>
        <br/>--- uses Schematics
        <br/>--- Virtual file system 
        <br/>----- base + staging area + add mod'ns to staging area 
        <br/>---- Rule object - takes a Tree | applies transformations | returns tree
        <br/>----- index.ts is main file for schematic - contains schematic logic    
        <br/>---- Actions - Create | Rename|   Overwrite | Delete
        <br/>---- Each schematic runs in a context - SchematicContext object 
        <br/>  
        <br/>--- Schematic JSON Schema file <schematic>/schema.json file 
        <br/> --
        <br/>- uses Webpack 
        <br/>--- behind the scenes - no webpack.config.js file to use
        <br/>
        <br/>-- Angular 12 and above uses Webpack 5 
        <br/>---- long term caching - 
        <br/>
        <br/>---- Module Federation 
        <br/>------ loading remote modules + stitch with appn at runtime 
         <br/>-------- game changer in JS world 
         <br/>------ allows multiple Webpack builds to work together 
         <br/>
         <br/>---- Custom Webpack configuration - 
        `,
        '--- initialise | develop| scaffold',
        '------- from a cmd shell',
        '------- Installation - npm install -g @angular/cli',
        ' -- ',  
        '--- ng Commands',
        `------- ng new
        <br/>---------- ng new my-app
        `,
        `----------- options
        <br/>
        H
        `,
        `------------- npm cache clean -f
        <br/>
        `,
        `------------- npm audit fix -f
        <br/>
        `,
        ' -- ',
        `---- ng add
        <br/>
        `,
        ' -- ',
        `---- ng generate
        <br/>-------
        `,
        ' -- ',
        `---- ng build
        <br/>------ Building
        `,
        ' -- ',
  
        `---- ng update
        <br/>------ 
        `,
        ' -- ',
        `---- ng serve
       <br/>------ Serving
       <br/>------ launches the server | watches your files | rebuilds app on change to files  
       <br/>------ launches server by default on port 4200 on localhost
       <br/>------ localhost:4200 
       <br/>
       <br/>------ uses builder dev-server
        `,
        ' -- ',
        `---- ng test
        <br/>------- Testing 
        `,
        ' -- ',
        `---- ng deploy
        <br/>------- Deployment
        
        `,
        ' -- ',
        `---- ng help
        `,
      ' -- ',
      `--- uses Schematics to apply transforms to a web-app project
      <br/>---- guard against errors by creating a virtual file system      
      <br/>-------- Virtual File Syste - is repd bu a tree - 
      <br/>------  Schematic describes a pipeline of transformations applied to Virtual FIle System
      <br/>------- When schematic is run - transformations are recorded in memory 
      <br/>---------- only applied to real file system - once checked to be valid
      <br/>
      <br/>---- custom schematics - 
      `,
      '------ virtual file system',
      '--------  tree',
      '----------  base + staging area (changes)',
      '--------  Rule object = transformations',
      `--------  4 Actions - Create | Rename | Overwrite | Delete
        <br/>------ Create 
        <br/>------ Rename
        <br/>------ Overwrite
        <br/>------ Delete
      `,
      `--------  SchematicContext - Each Schematic runs in a context repd by a SchematicContext object 
      <br/>------- The context object passed into a rule provides access to utility ftns + metadata - wrt schematic 
      <br/>---------- including logging API to help debugging
      <br/>-----------also defines a merge strategy - staged tree to base tree      
      <br/>----- Packaging schematics with libraries - lets you integrate them with CLI
      <br/>----- Schematics can be chained
      `,
      '---------- logging API',
      '------------  merge strategy',
      ' -- ',
      `--- uses Webpack
      <br/>----- behind the scenes - no webpack.config.js file to use
      <br/>
      <br/>---- Angular 12 and above uses Webpack 5 
      <br/>------ long term caching - 
      <br/>
      <br/>------ Module Federation 
      <br/>-------- loading remote modules + stitch with appn at runtime 
      <br/>---------- game changer in JS world 
      <br/>-------- allows multiple Webpack builds to work together 
       `,
       ` ------ uses Webpack (5 since Ang 12)
       `,
       '--------- long term caching',

       `--------- Module Federation 
       `,
       `------------ Add Module to appn modules at runtime
       `,
       '------------ Work on diff builds indeptly',

       `<br/>----- Custom Webpack 
      `,
    ],
    [`lodash - we can easily use lodash in Angular
      <br/>makes JS simpler and simplifies manipulating ES types 
      <br/>We can replace lodash _ with ES6 methods - 
      `,
      '--- simplifies JS ',
    `--- simplifies Array | numbers | objects | strings - manipn
    `,    
    `--- ES6 replacements for lodash
    <br/>---- Map -    
    <br/>---- Filter
    <br/>   - Reduce -
    <br/>   -
    <br/>   - Head   
    <br/>   - Tail 
    <br/>   - Rest
    <br/>   - spread
    <br/>   -      
    <br/>   - Curry
    <br/>   - Partial 
    <br/>   - Operators
    <br/>   - Paths
    <br/>   - Pick
    <br/>   - Constant
    <br/>   - Identity
    <br/>   - Noop
    <br/>   - Chaining
    <br/>   - Flow   
  `,
   `--- Map -    
    <br/>     - Filter
    <br/>     - Reduce -
    `
    ],
    [`Important files
    <br/>--- package.json
    <br/>--- angular.json
    <br/>--- package-lock.json
    <br/>--- tsconfig.json
    <br/>
    <br/>--- dist folder
    <br/>------ main.js
    <br/>---------- lazy loading
    <br/>---------- preloadingStrategies
    <br/>------ runtime.js
    <br/>---------- webpack 
    <br/>------ polyfill.js
    <br/>------ styles.js
    <br/>---------- angular.json
    <br/>------ scrips.js
    <br/>---------- angular.json
    <br/>------ vendor.js 
    <br/>
    <br/>--- node_modules folder
      `,
      `--- package.json
    <br/>------- a JSON file for JS projects 
    <br/>------- holds metadata rel to project and used for managing 
    <br/>------- projects dependencies | scrips| versions| 
    <br/>----------- scripts | dependencies | devDependencies
    <br/>
    <br/>------- follows semver - semantic versioning 
    <br/>
    <br/>------- info about the installed npm libraries 
    <br/>----------- which are to be npm installed packages
    <br/>
    <br/>
    <br/>
    `, 
     `--- angular.json
     <br/>------ Workspace settings for the Angular project
     <br/>------ projectType - 
     <br/>------ root
     <br/>------ sourceRoot
     <br/>------ schematics
     <br/>------ architect - settings for building the project   
     <br/>------ scripts
     <br/>------ styles
     <br/>------ outputPath
     <br/>------ configurations
     <br/>------ optimization
     <br/>------ outputHashing
     <br/>------ sourceMap
     <br/>------ namedChunks
     <br/>------ vendorChunk    
     <br/>------ buildOptimizer - @angular-devkit/build-optimizer (AOT)
     `,
     `--- package-lock.json - 
      <br/>------ automatically generated for any opns 
      <br/>------ where npm modules modifies either
      <br/>---------- node_modules tree
      <br/>---------- package.json
      <br/>
      <br/>------   
     `,  
     ' -- ',
     `--- dist folder
     <br/>------ contains js files called chunks
     `,
     `------ main.js
     <br/>------- contains all our code including Components (ts |html| css/scss)
     <br/>------------ pipes | directives | services| and all imported modules (+ 3rd party modules)
     <br/>------- contains the action related code of the appn
     <br/>
     <br/>------ If we dont lazy load this main.js can be very large 
     <br/>------ but by lazy loading we only load the modules or files that are initially required
     <br/>----------- hence the main.js is much smaller
     <br/>------ and then dynamically load up the module or component thats required 
     <br/>
     <br/>------ Preloading strategy - helps performance - 
     <br/>---------- { preloadingStrategy: PreloadAllModules }
     <br/>
     <br/>------ faster download and render of the main page 
     `,
     `------- Lazy loading 
     <br/>------ If we dont lazy load this main.js can be very large 
     <br/>------ but by lazy loading we only load the modules or files that are initially required
     <br/>----------- hence the main.js is much smaller
     <br/>------ and then dynamically load up the module or component thats required 
     `,
     `---------- PreloadingStrategy
     <br/>---------- { preloadingStrategy: PreloadAllModules }
     `,

     `----- runtime.js
     <br/>------- used by webpack to load code at runtime  
     <br/>------- bundles are generated by webpack 
     `,
     `---------- webpack 
     <br/>------------ bundler and loader
     `,
     `------ polyfills.js
     <br/>------- to allow modern features in other browsers
     `,
     `------ styles.js
     <br/>------- styles applied throughout the appn
     <br/>------- in the styles section of angular.json
     `,
     `------ scripts.js
     <br/>------- scripts from the angular.json scripts section
     `,
     `------ vendor.js - 
     <br/>-------- contains all libraries and frameworks 
     <br/>------------ imported into your appn AppModule (including Angular libraries)     
     `,
     
    ' -- ',
     '--- node_modules folder',
     `--- primary entry point for @angular/core lib
     `,
    ],
    [`innerHtml
     <br/>---s used with square brackets to implement an expression
     <br/>--- &lt;div [innerHtml]="exp">abc&lt;/div>
     <br/>--- whereas inerpolation does not implement the expn
      `,
      `--- [innerHtml]
     <br/>----- is a std HTML element attribute
     <br/>----- to which Angular can bind 
     <br/>
     <br/>----- as opposed to interpolation 
     <br/>-----  htmlContent = '<h1>Hello Angular 14!</h1>';
     <br/>----- {{ HtmlContent }}
     <br/>---------- just displays the <h1>... etc
     <br/>
     <br/>----- <p [innerHtml]="htmlContent"></p>
     <br/>---------- displays the data in bold
      `
    ], 
    [`Events - DOM vs Custom
    `,
    `--- DOM Events 
    <br/>------ to react to DOM els div, span, button  
    <br/>------ events used wrt functions  
    <br/>------ traverse the parent chain is traversed   
    `,
    `------ DOM elements
    `,
    `------ Bubble up
    
    `,
    ' -- ',
    `------ Custom Elements
    <br/>---------- 
    `,
    `----------- Custom Events
    <br/>------ 
    `,
    '---- Dont bubble up',
    '------ only available to parent',  
    '------ can bubble up with element.dispatchEvent()',  
    ' -- ',
    '---- possible solutions',
    `------ ngrx store
    `
    ],
    
    [`Template Ref Variables
      <br/>--- uses a #  &lt;input ngModel #username>
      <br/>------- gives direct access to the DOM element 
      <br/>------- rebinds our input every time we type 
      <br/>--- the ngModel directive to set a local model and updae on change
      <br/>-------- display the value by {{ username.value }}
    `,
    `  --- using a #`,
    `--- 4 types of variables
     -------- Dom el | Directive/Component | TemplateRef | Web Component 
     `,
    '----- DOM el in template',
    '----- Directive | Component',
    '----- TemplateRef in ng-template',
    '----- Web Component'
    ],
    [`Data Binding 
    <br/>--- is a technique where data stays in sync between the Component and the View
    <br/>--------- automatically keeps your page up to date based on appn state
    <br/>  
    <br/>--- When user updates data in the view 
    <br/>--- Ang updates the Component
    <br/>--- When Component gets new data 
    <br/>--- Ang updates the View
    <br/>
    <br/>--- techniques
    <br/>------ Interpolation {{}}
    <br/>------ Property Binding [] 
    <br/>------ Event Binding ()
    <br/>------ Two way data binding [()] 
    <br/>
    <br/>- String sinterpolation {{x}} - from data source to target view
    `,    
    `-------- {{ val }}
    <br/>
    `,
    `--- String sinterpolation {{x}} 
    <br/>------ from data source to target view
    <br/>
    <br/>--- {{ val }}
    <br/>------- Property binding - [] 
    <br/>------- Properties are features of DOM nodes 
    <br/>---------- from view target to data source
    <br/>---------- RHS of binding is a template expression
    <br/>---------- It should equate type of value - number | string| etc
    <br/>
    <br/>------- Ex Property Binding
    <br/>-------- @Input() childItem=''; // string
    <br/>---------using selector
    <br/>------------ &lt;app-item [childItem]='parentItem'>&lt;/app-item>
    <br/>------------ eg parentItem = 'lamp'
    <br/>
    <br/>-------- passing an Object eg array
    <br/>---------- @Input() items: Item[] = [];
    <br/>------------ &lt;app-item [items]='currentItems'>&lt;/app-item>
    `,
    `--- <img [alt]="hero.name" [src]="heroImageUrl">
    
    `,
    `--- Attribute binding - &lt;button type="button" [attr.aria-label]="actionName">{{actionName}} with Aria&lt;/button> 
    `,
    '--- Class binding - [class]="classExpression"',
  ],
  [`Style - color-size-position
    <br/>
    <br/>--- Colours
    <br/>--- Position
    <br/>--- Size
    <br/>--- Height
    <br/>--- Width
    <br/>
    <br/>--- styleUrls
    <br/>
    <br/>
    <br/>--- Inline Styles
    <br/>
    <br/>
    <br/>--- CSS
    <br/>
    <br/>
    <br/>--- SCSS
    <br/>
    <br/>
    <br/>
    `, 
    `--- CSS
    
    `, 
    `--- CSS-Box-Model
     <br/>
    `,
    ' -- ',     
    `--- Display property - is the most impt property for displaying layout
    <br/>----- Every HTML element has a default display value dept on type of element 
    <br/>----- normally block or inline
    `, 
    `--- block - Block level els always start on a new line and takes up the full width available Left and Right
    <br/>------- Exs of blocks are div | h1 to h6 | p| form | header| footer| section
    `,
    `--- inline 
    <br/>------- An Inline display does not start on a new line and only takes up as much space as necessare
    <br/>------- £xs of Inline are - span | a | img   
    `,
    `--- display:none 
     <br/>------ normally used with JS to hide/show els without deleting and recreating them `,
    ' -- ',     
    `--- sZ-index 
    <br/>------ specifies the stack order of an element
    <br/>------ Only works on positioned elements - 
    <br/>------ position: absolute, relative, fixed, sticky - flex items
    `,
    `--- position: 
    <br/>------ absolute, 
    <br/>------ relative, 
    <br/>------ fixed, 
    <br/>------ sticky - 
    <br/>------ flex items
    `,
    
    ' -- ',
    `inline - ext
    
    `, 
    `--- ngStyle
    
    `,
    `--- ngClass
    <br/>------ 
    `, 
    ' -- ',
    `--- Document.querySelector()
    <br/>------ function targets CSS elements in a web page
    <br/>----------- eg &lt;a> or &lt;p> tags
    `,
    ' -- ',
    '- SCSS - variables etc.',
        `--- ViewEncapsulation
    <br/>------ 
    `],
     [`SCSS (Sassy CSS)
      <br/>--- variables
      <br/>--- functions
      <br/>--- mxins
      <br/>--- inheritance 
     `,
    `--- variables
    
    `, 
    `--- functions()
    
    `, 
    `--- mixins
    `,
     `--- inheritance
    
     `
    ],
    [`ViewEncapsulation
     <br/>--- lets us write simpler styles - simple to read
     <br/>------- and wont interfere with other styles
    `,
     `--- Browser\'s builtin ShadowDOM
     <br/>-------
     `,
     `------- ShadowRoot
     
     `,
     '--- ',
     `------ ViewEncapsulation.ShadowDom
     <br/>-------- Angular uses the browser's built in Shadow DOM API  
     <br/>-------- to enclose the component's host element
     <br/>------------ and apply the provided styles in an isolated manner
     `,
     `------ ViewEncapsulation.Emulated (default)
     <br/>-------- Angular modifies component's CSS selectors
     <br/>------------ so only applied to component's view 
     <br/>--------------- dont affect other els of appn (emulate Shadow Dom)
     <br/>------------ Preprocesses all component styles   
     <br/>--------------- so only applied to the Component's view
     <br/>
     <br/>--------- Emulated View encapsulation Component's DOM
     <br/>-------------- has extra attributes attached to them
     <br/>-------------------- _nghost - added to els that enclose a component's view 
     <br/>-------------------- _ngcontent - added to a child element within Component's view 
     
     `,
     `---------- _nghost 
     <br/>------------ added to els that enclose a component's view
     <br/>---------------- would be ShadowRoots in a native Shadow DOM encapsulation
     `,
     `---------- _ngcontent
     <br/>------------ added to a child el within Component's view
     <br/>---------------- used to match els with respective em ShadowRoots
     `,
     `------ ViewEncapsulation.None
     
     `,
     '--- :host',
    `--- :host-context
    <br/>---- let a component apply a style to an el outside of it
    <br/>---- passing diff themes to a Component 

    <br/>----styles: [\`
    <br/>----  :host-context(.red-theme) .btn-theme {
      <br/>----    background: red;
      <br/>----   }
      <br/>----  :host-context(.blue-theme) .btn-theme {
        <br/>----     background: blue;
        <br/>---- }
      `,
    '--- _content'
    ],
    [`Modules - 
    <br/>--- Angular appns are modular - with NgModule containers 
    <br/>------ for a cohesive block of code - 
    <br/>--------- imports | declarations | exports| bootstrap| providers etc.
    <br/>------ are a great way to organize an appn 
    <br/>--------- and extend it with capabilities from ext libraries 
    <br/>
    <br/>--- NgModule - 
    <br/>-------- is a class marked by the @NgModule decorator 
    <br/>-------- takes a metadata object that describes how to compile a components template 
    <br/>-------- and how to create an injector at runtime 
    <br/> 
    <br/>--- configure the injector and the compiler and help organize related things together
    <br/>
    <br/>--- Multiple Modules
    <br/>-------- Lazy loading - 
    <br/>-------- Feature Modules - 
    <br/>
    <br/>-------- difficulties
    <br/>----------- routing
    <br/>----------- error messages
    <br/>----------- importing and exporting 
    <br/>
    <br/>--- Note Angular 14 introduced the concept of 
    <br/>-------- Modduleless (Standalone) Components 
    `,
    `--- Diff between JS Module and Angular Module
    <br/>--- 1: JS Module (ESM) is a file - normally an ESModule
    <br/>------ which can be loaded into a browser
    <br/>------ A script should have type="module" with ESMs
    <br/> 
    <br/>--- 2: Angular Module is a @NgModule based class 
    <br/>------ with related Components, Directives, Pipes, Services etc.
      
    `, 
    `--- ESMs (EcmaScript Modules)
    <br/>------ are the official std format  
    <br/>------ leads to fast reload speeds and smaller bundles 
    <br/>------ to package JS code for reuse 
    <br/>------ defined using import and export statements
    <br/>----------- for interoperability 
    <br/>
    <br/>--- <script type="module"> fires off lots of dependencies
    <br/>------ but due to caching and HTTP2 support on Server - it works
    <br/>------ APF (Angular Package Format) - uses 1 flat ESM per entry pt
        
    `,  
    `--- dynamic imports (Ang 08) - 
    <br/>--- TypeScript 2.4 included support for dynamic import() expressions 
    <br/>------ lets us asynchronously load and execute ESMs (EcmaScript Modules) on demand    
    <br/>------ means we can conditionally and Lazy import other modules and libraries
    <br/>
    <br/>--- In Angular - import statements 
    <br/>------ are written as inline function calls within modules    
    `,
     
    `------- Output Hashing determines if JS files in dist folder
    <br/>--------- have a hash number to stop them being cached
    <br/>--------- output-hashing when we build  
    <br/>------------ ng build --output-hashing none 
    <br/>--------------- we output main.js and runtime.js etc
    <br/>------------ ng build --output-hashing all 
    <br/>--------------- we output main.4354534553.js and runtime.345435345345.js etc    
    <br/>-------- determines if the JS output files are cashed
    `,
    `--------- type="module" to load esms into browser
    <br/>--------- either in script files
    <br/>--------- or in package.json
    <br/>------------- lets the browser run ESMs
    
    `,
    `--- static import of modules is preferred for most modules 
    `,
    ' -- ',
    '--- Ang Libraries are NgModules - FormsModule | HttpClientModule| RouterModule',
    ' -- ',
    '@NgModule({}) decorator',
    '- declares relavent Components', 
    `--- imports Modules
    <br/>------ Modules means you can split an appn into several files (modules)
    <br/>------ 
    
    `,
    '--',
    `------- CommonJS (CJS)
    <br/>-------- synchronous
    <br/>-------- run in server side Node.js
    <br/>-------- Browsers cant run CommonJS modules  
    `,  
    `------- ESMs (EcmaScript Modules)
    <br/>-------- EcmaScript6 (2015)
    <br/>-------- asynchronous
    <br/>-------- can import CJS
    <br/>-------- used in client side - Angular
    <br/>-------- Node also supports ESMs 
    `,
    '--- exports Modules', 
    '- Can define Service Providers - providers',
    '- bootstrap: [AppComponent]',
    '- required by every Ang appn',
    '- Lazy Loading - uses Feature Modules and Shared Modules',
    ' -- ',
    `--- Angular 14 Module-less (Standalone) components
    <br/>------ 
    `
  ],
    
  
   [`Bootstrapping
     <br/>--- reads the angular.json -
     <br/>--- Loads the index.html file - app-root 
     <br/>
     <br/>--- Loads the main.ts file - 
     <br/>-------- ids the AppModule - 
     <br/>-------- ids the AppRoutingModule and AppComponent
     <br/>
     <br/>--- webpack - dep graphs - app.js and vender.js
     <br/>--- 
     <br/>--- manual / automatic 
     `,
     `----- Automatic Bootstrapping
      <br/>------ platformBrowserDynamic.bootstrapModule(AppModule)  
     `,
     `----- Manual  Bootstrapping
     <br/>-------- ngDoBootstrap()
     <br/>----------- DoBootstrap
     `,
     `----- standalone Bootstrapping 
     <br/>-------- bootstrapApplication()
     `,
    `--- initializing/loading appn 
      <br/>--- application.json file - 
      <br/>------ loads index.html - 
      <br/>------ app-root 
      <br/>--- main.ts 
      <br/>------ AppModule and AppComponent 
      <br/>--- webpack
      <br/>--- angular.json file - 
      <br/>------ 1: Where to find source of appn 
      <br/>------ 2: How to build the appn 
      <br/>------ 3: Which files to refer to for testing -   
      <br/>------ 4: Where to find the main file (main.ts) - identifies which module to bootstrap  
      `, 
      `--- platformBrowserDynamic().bootstrapModule(AppModule)
      <br/>----- The platformBrowserDynamic() method - creates an injector 
      <br/>------- configured by the PlatformModule - contains platform specific deps
      <br/>------- allows multiple apps to share a platform confign
      `,
       `--- bootStrapModule() 
       <br/>------- creates a child injector of the platform injector 
       <br/>------ configd by the AppModule
       <br/>--------- called the root ModuleInjector
       `,
       `-------- Child injector of Platform injector
       ------------- 
       `,
       `-------- APP_INITIALIZER (@angular/core)
       <br/>--------- a special injection token
       <br/>--------- used to execute custom code during appn start up 
       <br/>--------- helps to register providers 
       `,
       '------- root ModuleInjector',
        '--------- hierarchy of injectors (for each Component)',
        '------- ElementInjector',
        '---------- hierarchy of Component Injectors ',
        '------- NullInjector',    
        ' -- ',
        `--- angular.json 
        <br/> --- 
        <br/>--- "build": {
        <br/>--- "builder": "@angular-devkit/build-angular:browser",
        <br/>--------- "options": {
        <br/>--- "outputPath": "dist/ang13-training",
        <br/>--------- "index": "src/index.html",
        `,
        `--- Loading index.html etc.
        <br/>---- first page to be loaded - 
        <br/>---- &lt;body>&lt;app-root>&lt;/app-root>&lt;/body>
     `,
     '---- 3rd party libs + appn',
     `---- main.ts
     <br/>
     <br/>
     <br/>import { enableProdMode } from \'@angular/core\';
     <br/>import { platformBrowserDynamic } from \'@angular/platform-browser-dynamic\';
     <br/>
     <br/>import { AppModule } from \'./app/app.module\';
     <br/>import { environment } from \'./environments/environment\';
     <br/>
     <br/>if (environment.production) {
    <br/>enableProdMode();
  <br/>}
  <br/>
  <br/>--- platformBrowserDynamic().bootstrapModule(AppModule)
  <br/>------- .catch(err => console.error(err));
     `,
     `--- plaformBrowserDynamic 
     <br/>------ JIT compiles AppModule
 
     `,
     `------ AppModule imports the 
     <br/>-------- BrowserModule (imported only once in the root folder) and 
     <br/>-------- AppRoutingModule ( imports RouterModule and identifies ComponentRoutes)
     <br/>-------- identifies which is the main Component - eg AppComponent
     <br/>
     <br/>   @NgModule({
     <br/>-------- declarations: [
     <br/>------------- AppComponent,
     <br/>------------- HelloWorldComponent
     <br/>-------- ],
     <br/>-------- imports: [
     <br/>-------------- BrowserModule,
     <br/>-------------- AppRoutingModule
     <br/>-------- ],
     <br/>-------- providers: [],
     <br/>-------- bootstrap: [AppComponent]
     <br/>--- })  
     <br/>--- export class AppModule { }
     `,
     '------ BrowserModule - impored only once in the App root',
     '------ AppRoutingModule - imports RouterModule and Routes and identifies Component Routes',
     `------ AppComponent - identifies the root Component from which the other Components - Directives - Pipes - Services and other Modules are referenced
     
     `,
     '---- root Module/Component',    
      `--- Webpack 
      <br/>------- roams over your appn source code looking for import statements - building a dep graph and emitting 1+ bundles
      <br/>------- It can preprocess and minify diff JS files - TS | HTML| CSS 
      <br/>------- 2 sep dep graphs - 
      <br/>------------ 1: app.js (only appn code) 
      <br/>------------ 2: vender.js (all the vendor deps) 
      `,
      '------- 1: app.js',
      '------- 2: vender.js'
    ],

    [`Life Cycle Hooks 
    <br/>--- intreface in Angular Core library
    <br/>--- A component has a life-cycle that starts when 
    <br/>--- Angular instantiates the Component class 
    <br/>------ and renders the Component view and child views -
    <br/>
    <br/>--- LCH responds to events in the Component/Directive  Life Cycle 
    <br/>-------- Change Detection triggers these methods
    <br/>
    <br/>--- Order of execution is important 
    <br/>
    <br/>--- We can fine tune the hehavior of our components during 
    <br/>------- creation | update | destruction
    <br/>
    <br/>
    <br/>1: ngOnChanges
    <br/>--- handles the changes  
    <br/>--- details which properties have changed 
    <br/>------- and how they've changed
    <br/>--- called when any <b>data-bound property of a directive changes</b>
    <br/>
    <br/>--- detect changes from any variable decoarted with @Input()
    <br/>
    <br/>2: ngOnInit - the most common LCH contains initialisation logic for the Component
    <br/>
    <br/>3: ngDoCheck()
    <br/>
    <br/>4: ngAfterContentInit
    <br/>
    <br/>5: ngAfterContentChecked
    <br/>
    <br/>6: ngAfterViewInit
    <br/>
    <br/>7: ngAfterViewChecked
    <br/>
    <br/>8: ngOnDestroy - which is where we place the cleanup logic for the Component
    `,
    '--- ngOnInit() - instantiates class', 
    '--- renders view + child views',
    '--- CD',
    '--- updates View + Component Instance',
    '--- import from @angular/core',
    ' -- ',
    '--- Hooks -',
     `------- <b>ngOnChanges</b>(changes: SimpleChanges) 
     <br/>------ called many times - when Ang sets/resets data bound Input properties 
     <br/>------ changes to input properties
     <br/>
     <br/>-------
     <br/>------ Fires upon initialization of input data
     `, 
     `------- SimpleChanges paramater type
     <br/>-------- contains info on the changed input bound properties
     
     `,
     `--- <b>ngOnInit()</b> 
     <br/>------ most popular (called only once!) 
     <br/>------ Initializes the Comp/Directive 
     <br/>------ after Ang 1st displays data bound properties 
     <br/>------ + sets Input property
     `,
     `--- <b>ngDoCheck()</b>
     <br/>------ Fires with every CD cycle 
     <br/> 
     <br/>------- Detect and Act upon changes that Ang cant detect on its own 
     <br/>------- Called immed after ngOnChanges() on every CD run 
     <br/>------- + after ngOnInt() on 1st run
     ' -- After --',
     `, 
     ' -- Content',
     `--- <b>ngAfterContentInit()</b>
     <br/>------ (called once after ngDoCheck()) 
     <br/>------ Responds after Ang projects ext content into View 
     <br/>------ or view containing Directive
     
     `,
     `--- <b>ngAfterContentChecked()</b> 
     <br/>------ Responds after Ang checks content projected into Comp/Dir 
     <br/>------ after all ngDoChecks + ngAfterContentInit()
     `, 
     ' --- View',
     `--- <b>ngAfterViewInit()</b> 
     <br/>------- (called once after ngAfterContentChecked) 
     <br/>------- Responds after Ang Initialises Comp View + Child Views     
     <br/>------- place to access DOM els
     `, 
     `--- <b>ngAfterViewChecked()</b> - 
     <br/>------ Responds after Ang checks Comp View + Child Views 
     <br/>------ (After every ngAfterContentChecked + ngAfterViewInit()
     `,
     ' --- Destroy',
     `--- <b>ngOnDestroy()</b> - 
     <br/>----- Cleanup just before Comp - 
     <br/>----- Unsubscribes Observables 
     <br/>----- detach event handlers 
     <br/>----- avoid memory leaks
     `
    ],  

    [`ComponentRouter - 
     <br/>--- to handle the navigation from 1 view to the next 
     <br/>------- Interpreting browser URLs as an instn to change view -
     <br/>
     <br/>--- Routes: Route[] where Route interface has many properties
     <br/>------- at its simplest path and component
     <br/>
     <br/>--- const routes: Routes = [
     <br/>-------- { path: 'first-component', component: FirstComponent },
     <br/> ------- { path: 'second-component', component: SecondComponent },
     <br/>--- ];
     <br/>
     <br/>--- ng new ang-app --routing --defaults 
     <br/>
     <br/>--- using the Angular CLI to generate a basic Ang appn with routing enabled 
     <br/>
     <br/>--- We can use ActivatedRoute and to get data about the Routes
     <br/>
     <br/>--- &lt;router-outlet>&lt;/router-outlet> 
     <br/>------- lets us position the routing infon in our Component template -
     <br/>   
     <br/>--- routing normally uses RouterModule.forRoot(routes) where routes defines the actual component routes linking URL paths with various components 
     <br/>------- Note that Lazy Loading can use Routing using a RouteModule.forChild(routes)
     <br/>------- We can use the Router Resolver to prefetch data to ensure the data is objtained first - 
     `,
     `--- Routes: Route[]
     <br/>
     <br/>------ array of Route interfaces  
     `,
     `Route - is an interface   
      <br/>--- supports static  | parameterised | redirect | wildcard routes
      <br/>------ and custom route data and resolve methods  
      <br/>
      <br/>--- Can involve
      <br/>------- modules 
      <br/>-------  but can use standalone components (no Modules)
      <br/>------- children
      <br/>------- lazy loading 
      <br/>------- router Guards
      <br/>
      <br/>--- at its simplest path and component
      <br/>
      <br/>const routes: Routes = [
      <br/> ---- { path: 'first-component', component: FirstComponent },
      <br/> ---- { path: 'second-component', component: SecondComponent },
      <br/>];
      <br/>
      <br/>interface Route {
      <br/>---  title?: string | Type<Resolve<string>>
      <br/>---  path?: string
      <br/>---    pathMatch?: 'prefix' | 'full'
      <br/>---    matcher?: UrlMatcher
      <br/>---    component?: Type<any>
      <br/>---    loadComponent?: () => Type<unknown> | Observable<Type<unknown>> | Promise<Type<unknown>>
      <br/>---    redirectTo?: string
      <br/>---    outlet?: string
      <br/>---    canActivate?: any[]
      <br/>---    canMatch?: Array<Type<CanMatch> | InjectionToken<CanMatchFn>>
      <br/>---    canActivateChild?: any[]
      <br/>---    canDeactivate?: any[]
      <br/>---    canLoad?: any[]
      <br/>---    data?: Data
      <br/>---    resolve?: ResolveData
      <br/>---    children?: Routes
      <br/>---    loadChildren?: LoadChildren
      <br/>---    runGuardsAndResolvers?: RunGuardsAndResolvers
      <br/>---    providers?: Array<Provider | ImportedNgModuleProviders>
      <br/>}
      <br/>
      <br/>routes:Routes = [{path:"first-comp",component: FirstComponent}]
      <br/>--- uses a path to ref a Component to direct to the View of that Component
      `,
     `--- children - 
     <br/>
     <br/>------ children of the Component element 
     <br/>
     <br/>[{
     <br/>--- path: 'team/:id',
     <br/>--- component: Team,
     <br/>--- children: [{
     <br/>------ path: 'user/:name',
     <br/>------ component: User
     <br/>--- }]
     <br/>}]
     `,
     `--- router-outlet
     <br/> 
     <br/>------ &lt;router-outlet>&lt;/router-outlet> 
     <br/>
     <br/>------ location where the router links will go
     `, 
     `--- routerLink 
     <br/>
     <br/>------ &lt;a routerLink="/first_comp">link&lt;/a>
     <br/>
     <br/>------ lets us jump to a certain location to load a certain component
     <br/>     
     <br/>------ assign links to the two components - using anchor tag
     <br/>------ adding route to the routerLink attribute 
     <br/>----------- updating the component template to include router-outlet - 
     <br/>----------- updating the appn view with Component for selected route  
     <br/>
     <br/>--- Order is important - Router uses 1st match wins approach
     <br/>
     <br/>--- &lt;nav>
     <br/>------ &lt;ul>
     <br/>--------- &lt;li>&lt;a routerLink="/first-component" routerLinkActive="active" ariaCurrentWhenActive="page">First Component&lt;/a>&lt;/li>
     <br/>--------- &lt;li>&lt;a routerLink="/second-component" routerLinkActive="active" ariaCurrentWhenActive="page">Second Component&lt;/a>&lt;/li>
     <br/>------ &lt;/ul>
     <br/>--- &lt;/nav>  
     `, 
     `--- RouterModule  
     <br/>
     <br/>--- import RouterModule and Routes into the routing module (or AppModule)
     <br/>--- Define routes in the Routes array - normally a JS object with path and component
     <br/>---------- Path defines URL path for the route
     <br/>---------- component defines the Compoonent to load
     <br/> 
     <br/>--- import { Routes, RouterModule } from '@angular/router'; // CLI imports router <br/>// configures NgModule imports and exports
     <br/>
     <br/>--- @NgModule({ 
     <br/>
     <br/>--- imports: [RouterModule.forRoot(routes)],
     <br/>--- exports: [RouterModule]
     <br/>})
     <br/>export class AppRoutingModule { }
    <br>/>
    `, 
     `--- @angular/router
     <br/>-------- library for the Router items in appn
     <br/>-------- RouterModule, Routes, Route, 
     <br/>
     `, 
     `--- RouterModule.forRoot(routes)
     <br/>
     <br/>---- for eagerly loaded modules / components 
     <br/>---- routes defines the paths etc.
     `,
     `--- Multi-outlets
     <br/>----- 
     `,
      ' -- ',
     `--- forChild() and Lazy Loading
     <br/>------ RouterModule.forChild(routes) - lazy load the Component or Module
     <br/> 
      `,
      `-------- loadChildren() - Lazy Loading 
      <br/>
      <br/>----- by default it uses Modules for Lazy Loading
      <br/>--------- but you can now Lazy Load Components
      <br/>
      <br/>
      `, 
    `------ Nested Routes - 
    `,
    `---------- SubModules and forChild()`,
    ' -- ',
     `--- &lt;base href=\/"\">
     `, 
    ` --- HTML5 Urls 
       `, 
       ' -- ',
       `--- get Route Info 
         
         `,
         ` --- ActivatedRoute  
         <br/>---- Currently activated route
         <br/> -
         <br/>---- contains a lot of info regarding the route
         `,
         `--- ActivatedRouteSnapshot
         <br/>---- route loading a Component loaded in a certain outlet
         <br/>---- associated with a particular moment in time
       
       `,
        `--- RouterStateSnapshot 
        <br/>------- an immutable data structure representing 
        <br/>------- the state of the router at a particular moment in time  
        <br/>
        <br/>------- Ant time a component is added | removed | parameter updated
        <br/>---------- a new snapshot is created
        `,
        `--- .snapshot.paramMap.get(\'id\') 
        `,
        `--- ParamMap 
        <br/>----- a map that provides access to the reqd and optional pars specific to route
        <br/>----- The map supports retrieving a single value with get() 
        <br/>----- or multiple values with getAll()
        <br/>
        <br/>interface ParamMap {
        <br/>----- keys: string[]
        <br/>----- has(name: string): boolean
        <br/>----- get(name: string): string | null
        <br/>----- getAll(name: string): string[]
        <br/>}
        `,
        ' -- ',
     `--- Wildcard Routes **
     <br/>
     <br/>
     `,
     `--- PageNotFoundComponent
     <br/>
     <br/>
     `,
     `--- redirectTo()
     <br/>------ a URL to redirect when the path matches
     <br/>------ Absolute if path begines '/'
     <br/>------ else relative path URL  
     <br/>-------  
     <br/>------- After an absolute path - 
     <br/>------------ no further redirects are evaluated  
     `, 
     ' -- ',
     `--- Router Guards
     <br/>------- interfaces when implemented let us  
     <br/>------- control accessability of a route dept on conditions 
     <br/>------- determine if route can be executed or not
     `,
     `------- 5 Guard options
     <br/>--------- canActivate()
     <br/>--------- canActivateChild()
     <br/>--------- canDeactivate()
     <br/>--------- Resolve()
     <br/>--------- CanLoad()
     <br/>
     `,
     `------ canActivate()
     <br/>--- can implement a route guard 
     <br/>------ deciding if a route can be activated  
     <br/>------ If all guards return true - then activate
     <br/>------ else returns false - navigation cancelled
     <br/>
     <br/>------ If any guard returns a UrlTree - 
     <br/>---------- current nav cancelled and a new navigation begins
     <br/>
     <br/>--- interface CanActivate {
      <br/>------- canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
      <br/>}
      <br/>
      <br/>class UserToken {}
      <br/>class Permissions {
      <br/>---- canActivate(user: UserToken, id: string): boolean {
        <br/>----- return true;
      <br/>----}
      <br/>}
      <br/>
      <br/>
      <br/>@Injectable()
      <br/>class CanActivateTeam implements CanActivate {
      <br/>---- constructor(private permissions: Permissions, private currentUser: UserToken) {}
      <br/>
      <br/>---- canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
      <br/>--------- return this.permissions.canActivate(this.currentUser, route.params.id);
      <br/>---- }
      <br/>}
     `,
     `------ canActivateChild()
     <br/>
     <br/>--- can implement a child route guard 
     <br/>------ deciding if a child route can be activated  
     <br/>------ If all child guards return true - then activate
     <br/>------ else returns false - navigation cancelled
     <br/>
     <br/>------ If any child guard returns a UrlTree - 
     <br/>---------- current nav cancelled and a new navigation begins 
     `,
     `------ canDeactivate()
     <br/>
     <br/>------- decide if a route can be deactivated 
     <br/>---------- canDeactivate(component: T, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
     <br/>--------------- Observable&lt;boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     `,
     `------ Resolve()
     <br/>-------- resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero>|Promise<Hero>|Hero
     <br/>-------- {
     <br/>-----------  return this.service.getHero(route.paramMap.get('id'));
     <br/>------ }
     <br/>--- }
    
     <br/>  
     <br/>---  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero>|Promise<Hero>|Hero
     <br/>------ {
     <br/>-----------  return this.service.getHero(route.paramMap.get('id'));
     <br/>------ }
     <br/>--- }
     `,
     `------ CanLoad()
     <br/>interface that a class can implement 
     <br/>
     <br/>------ Interface that a class can implement 
     <br/>---------- to be a guard deciding if children can be loaded. 
     <br/>------ If all guards return true, navigation continues. 
     <br/>------ If any guard returns false, navigation is cancelled. 
     <br/>------ If any guard returns a UrlTree, 
     <br/>-----------  current navigation is cancelled and a new navigation starts 
     <br/>-------------to the UrlTree returned from the guard.
     <br/>
     <br/>--- interface CanLoad {
     <br/>------ canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     <br/>--- }
     `, 
     ' -- ',
     `--- Routing Resolve phase
     <br/>-------- it resolves the required data for the router state
     <br/>-------- It activates the Angular components to display the page 
     <br/>-------- Managing the navigation and repeats when a new URL is requested
     <br/>-------- 
     <br/>-------- Resolve() retrieves the data needed to activate the requested route
     <br/>
     <br/>-------- resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable&lt;T> | Promise&lt;T> | T
     <br/>-------- 
     <br/>@Injectable({ providedIn: 'root' })
     <br/>export class HeroResolver implements Resolve<Hero> {
     <br/>--- constructor(private service: HeroService) {}
     <br/>
     <br/>---  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero>|Promise<Hero>|Hero
     <br/>------ {
     <br/>-----------  return this.service.getHero(route.paramMap.get('id'));
     <br/>------ }
     <br/>--- }
     `,
     `--- ActivationStart
     <br/>----- event triggered at the start of the activation part 
     <br/>----------- of the Resolve phase of routing
     <br/>
     <br/>class ActivationStart {
     <br/>--- constructor(snapshot: ActivatedRouteSnapshot)
     <br/>--- type: EventType.ActivationStart
     <br/>--- snapshot: ActivatedRouteSnapshot
     <br/>--- toString(): string
     <br/>}
     `,
     `--- ActivationEnd
     <br/>----- event triggered at the end of the activation part 
     <br/>----------- of the Resolve phase of routing
     <br/>
     `,
     `--- ChildActivationStart
     <br/>------ An event triggered at the start of the child-activation part 
     <br/>--------- of the Resolve phase of routing.
     <br/>
     <br/>class ChildActivationStart {
     <br/>--- constructor(snapshot: ActivatedRouteSnapshot)
     <br/>--- type: EventType.ChildActivationStart
     <br/>--- snapshot: ActivatedRouteSnapshot
     <br/>--- toString(): string
     <br/>}
     `,
     `--- ChildActivationEnd
     <br/>------ An event triggered at the end of the child-activation part 
     <br/>--------- of the Resolve phase of routing.
     <br/>
     <br/>class ChildActivationEnd {
     <br/>--- constructor(snapshot: ActivatedRouteSnapshot)
     <br/>--- type: EventType.ChildActivationEnd
     <br/>--- snapshot: ActivatedRouteSnapshot
     <br/>--- toString(): string
     <br/>}
     `,
     `----- Componentless-routes
     <br/>------- provide data to children
     <br/>----------- without instantiating any Component  
     <br/>
     <br/>----------- Consume URL segments
     <br/>----------- provide data to its children
     <br/>--------------- without instantiating any Components 
     <br/>----------- Parameters captured by these 
     <br/>--------------- are merged into their children's parameters
     <br/>
     `,
     ' -- ',
     `--- hisory
     <br/>------- When a router navigates to a new Comp view 
     <br/>------- it updates browser location and history with URL for view 
     - `, 
     `--- for modern browsers - 
     <br/>-------- HTML5 History push state 
     <br/>-------- no server page request
     ',
     '--- older browsers 
     <br/>-------- use # for no server request 
     <br/>-------- localhost:3002/src/#/crisis-center
     `,
     `--- LocationStrategy
     <br/>------ Enables the Location service to read route state from the browser's URL. 
     <br/>------ Angular provides two strategies: HashLocationStrategy and PathLocationStrategy.
     <br/>   
     <br/>abstract class LocationStrategy {
     <br/>--- abstract path(includeHash?: boolean): string
     <br/>--- abstract prepareExternalUrl(internal: string): string
     <br/>--- abstract getState(): unknown
     <br/>--- abstract pushState(state: any, title: string, url: string, queryParams: string): void
     <br/>--- abstract replaceState(state: any, title: string, url: string, queryParams: string): void
     <br/>--- abstract forward(): void
     <br/>--- abstract back(): void
     <br/>--- historyGo(relativePosition: number)?: void
     <br/>--- abstract onPopState(fn: LocationChangeListener): void
     <br/>--- abstract getBaseHref(): string
     <br/>}
     `,
     `--- PathLocationStrategy 
     <br/>------ extends LocationStrategy
     <br/>------ http://example.com/foo
     <br/>
     <br/>---
     <br/>class PathLocationStrategy extends LocationStrategy implements OnDestroy {
      <br/>--- onPopState(fn: LocationChangeListener): void
      <br/>--- getBaseHref(): string
      <br/>--- prepareExternalUrl(internal: string): string
      <br/>--- path(includeHash: boolean = false): string
      <br/>--- pushState(state: any, title: string, url: string, queryParams: string)
      <br/>--- replaceState(state: any, title: string, url: string, queryParams: string)
      <br/>--- forward(): void
      <br/>--- back(): void
      <br/>--- getState(): unknown
      <br/>--- historyGo(relativePosition: number = 0): void
      <br/>--- // inherited from common/LocationStrategy
      <br/>--- abstract path(includeHash?: boolean): string
      <br/>--- abstract prepareExternalUrl(internal: string): string
      <br/>--- abstract getState(): unknown
      <br/>--- abstract pushState(state: any, title: string, url: string, queryParams: string): void
      <br/>--- abstract replaceState(state: any, title: string, url: string, queryParams: string): void
      <br/>--- abstract forward(): void
      <br/>--- abstract back(): void
      <br/>--- historyGo(relativePosition: number)?: void
      <br/>--- abstract onPopState(fn: LocationChangeListener): void
      <br/>--- abstract getBaseHref(): string
      <br/>}
     `,
     `--- HashLocationStrategy
     <br/>------ URL can contain some data prepended with a #
     <br/>---------- called the hash fragment
     <br/>---------- uses hash fragment part of URL to store state for the client 
     <br/>--------------- easier to set up and doesnt require any coord from Server side 
     <br/>
     <br/>------ "http://example.com#/foo" - #   
     <br/>--------- but wont work with Angular universal
     <br/>
     <br/>------ RouterModule.forRoot(routes, {useHash: true})
     <br/>--------- enables HashLocationStrategy
     <br/>------------- extends LocationStrategy - 
     <br/>
     <br/>class HashLocationStrategy extends LocationStrategy implements OnDestroy {
     <br/>--- onPopState(fn: LocationChangeListener): void
     <br/>--- getBaseHref(): string
     <br/>--- path(includeHash: boolean = false): string
     <br/>--- prepareExternalUrl(internal: string): string
     <br/>--- pushState(state: any, title: string, path: string, queryParams: string)
     <br/>--- replaceState(state: any, title: string, path: string, queryParams: string)
     <br/>--- forward(): void
     <br/>--- back(): void
     <br/>--- getState(): unknown
     <br/>--- historyGo(relativePosition: number = 0): void
     <br/>
     <br/>--- // inherited from common/LocationStrategy
     <br/>--- abstract path(includeHash?: boolean): string
     <br/>--- abstract prepareExternalUrl(internal: string): string
     <br/>--- abstract getState(): unknown
     <br/>--- abstract pushState(state: any, title: string, url: string, queryParams: string): void
     <br/>--- abstract replaceState(state: any, title: string, url: string, queryParams: string): void
     <br/>--- abstract forward(): void
     <br/>--- abstract back(): void
     <br/>--- historyGo(relativePosition: number)?: void
     <br/>--- abstract onPopState(fn: LocationChangeListener): void
     <br/>--- abstract getBaseHref(): string
     <br/>}
     <br/>
     `, 
     `---- useHash:true
     
     `,
     `--- HTML5 style navigation
     <br/>------ nav tag  &lt;nav /> tag   
     <br/>------ is one of the new elements introduced in HTML5 specn
     <br/>
     <br/>------ &lt;!DOCTYPE html>
     <br/>------ &lt;html>  
     <br/>------ &lt;head lang="en">
     <br/>------ &lt;meta charset="UTF-8">
     <br/>------ &lt;title>HTML5 Navigation Bar Example - Example 1&lt;/title>
     <br/>------ &lt;link href="style3.css" rel="stylesheet"/>
     <br/>------ &lt;/head>
     <br/>------ &lt;body>
     <br/>------ &lt;nav>
     <br/>------ &lt;ul>
     <br/>---------  &lt;li>
     <br/>---------  &lt;a href="home.html">Home&lt;/a>
     <br/>-------------- &lt;ul>
     <br/>-----------------  &lt;li>&lt;a href="presentation.html">presentation&lt;/a>&lt;/li>
     <br/>--------------------- &lt;li>
     <br/>--------------------- &lt;a href="contact.html">contact&lt;/a>
     <br/>--------------------- &lt;ul>
     <br/>------                    &lt;li>&lt;a href="one.html">One&lt;/a>&lt;/li>
     <br/>------                    &lt;li>&lt;a href="two.html">Two&lt;/a>&lt;/li>
     <br/>------                    &lt;li>&lt;a href="three.html">Three&lt;/a>&lt;/li>
     <br/>------                &lt;/ul>
     <br/>------            &lt;/li>
     <br/>------        &lt;/ul>
     <br/>------    &lt;/li>
     <br/>------    &lt;li>
     <br/>------        &lt;a href="blog.html">Blog&lt;/a>
     <br/>------------  &lt;ul>
     <br/>----------------  &lt;li>&lt;a href="one.html">One&lt;/a>&lt;/li>
     <br/>----------------  &lt;li&lt;a href="two.html">Two&lt;/a>&lt;/li>
     <br/>----------------  &lt;li><a href="three.html">Three&lt;/a&lt;/li>
     <br/>----------- &lt;/ul>
     <br/>------    &lt;/li>
     <br/>------    &lt;li>
     <br/>------ &lt;title>HTML5 Navigation Bar Example - Example 1&lt;/title>
     <br/>------ &lt;a href="shop.html">Shop&lt;/a>
     <br/>------    &lt;ul>
     <br/>--------- &lt;li>
     <br/>------------ &lt;a href="candy.html">candy&lt;/a>
     <br/>--------------  &lt;ul>
     <br/>-----------------  &lt;li><a href="one.html">One&lt;/a>&lt;/li>
     <br/>-----------------  &lt;li><a href="two.html">Two&lt;/a>&lt;/li>
     <br/>-----------------  &lt;li><a href="three.html">Three&lt;/a>&lt;/li>
     <br/>--------------- &lt;/ul>
     <br/>------------ &lt;/li>
     <br/>------------ &lt;li>&lt;a href="chocolate.html">chocolate&lt;/a>&lt;/li>
     <br/>------------- &lt;li>
     <br/>-------------   &lt;a href="icecream.html">ice cream&lt;/a>
     <br/>------------------  &lt;ul>
     <br/>---------------------  &lt;li>&lt;a href="one.html">One&lt;/a&lt;/li>
     <br/>---------------------  &lt;li>&lt;a href="two.html">Two&lt;/a&lt;/li>
     <br/>---------------------  &lt;li&lt;a href="three.html">Three&lt;/a>&lt;/li>
     <br/>------------------- &lt;/ul>
     <br/>---------------- &lt;/li>
     <br/>--------------  &lt;/ul>
     <br/>------------  &lt;/li>
     <br/>----------  &lt;li>&lt;a href="news.html">News&lt;/a>&lt;/li>
     <br/>-------- &lt;/ul>
     <br/>------ &lt;/nav>
     <br/>--- &lt;/body>
     <br/> &lt;/html>     
     `,
     ' -- ',
     `--- Resolve - 
     <br/>------ pre-fetches data before deciding 
     <br/>------ if to jump to the URL or not
     `, 
     `--------- create a new Component but include rooting in it
     
     `,
     `--- The router is used for Lazy Loading
     
     `],
      [`Parent Child communication 
     <br/>--- is normally implemented using the @Input() and @Output() decorators.
     <br/>--- to share info between a parent and one or more child components 
     <br/>
     <br/>--- &lt;parent-component>
     <br/>------ &lt;child-component>&lt;/child-component>
     <br/>--- &lt;/parent-component>
     <br/>
     `,
     `--- @Input() - 
      <br/>--- lets a parent Component 
      <br/>------ update a child component data 
      <br/> 
      `, 
      `--- Property Binding [] - 
      <br/>--- sets a property on a component class 
      <br/>
      `,
      `--- ngOnChanges() - intercept input property changes 
      <br/>
      <br/>--- import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
      <br/>--- ngOnChanges(changes: SimpleChanges) {
      <br/>
        `,
     `- @Output() - 
      <br/>--- lets a child send data to the parent component
      <br/>
      <br/>------ @Output() newItemEvent = new EventEmitter&lt;string>()
    `,
     `-- Event Binding - () 
     <br/>--- to fire an event
     
     `,
     `  ------- EventEmitter() - should have a type of EventEmitter()
     <br/>---- @Output() newItemEvent = new EventEmitter&lt;string>()      
     `,
     `--- Two way binding - Combine Property and Event Binding 
     <br/>---- by using Banana in a Box
     <br/>--------- [(NgModel)] 
     `
    ], 
    [`Event Bubbling
      <br/>--- type of Event propagation 
      <br/>--- inner propagated to outer els 
      <br/>--- supports bubbling DOM events
      <br/>------- not custom events
      <br/>--- A singler handler on a parent el
      <br/>------- to listen to events fired by any child
    `,
    `--- Event propagation
    <br/>------ 3 phases 
    <br/>---------- Capture phase  
    <br/>-------------- event goes down to el
    <br/>---------- Target phase
    <br/>-------------- event reached target el
    <br/>---------- Bubbling phase
    <br/>-------------- event bubbles up from el   
    `,
    `--- single handler on parent
    
    `,
    `------- event first captured
    
    `,
    `------- handled by inner el
    `,
    `------- propagated to outer els
    `,
    `--- eg btn clicked in a Component
    <br/>
    `,
    `--- events fired by children
    <br/>------ Events are actions or occurrences
    <br/>------ so code can react to it eg click()
    `,
    `--- Dom vs Custom
    `,
    `------ bubbling of DOM events
    `,
    `------ but not Custom Events
    
    `,
    `--- Event.stopPropagation()
    
    `,
    `--- Event.stopImmediatePropagation()
    `,
    `--- addEventListener()
    <br/>------ deprecated but not sure what its replaced by
    <br/>
    `,
    `--- getEventListener()
    <br/>------ Google specific 
    `,
    ' -- ',
    `--- vs Event Capture
    <br/>--- Outer propagated to inner els 
    <br/>
    `,
    `------ captured by Outer element
    `,
    `------ propagated by inner els
    `
    ],
   ['Funny Operators',
      `Non null assertion operator !
      <br/>----- ! bang operator
      `,
      `Safe navigation operator (Optional Chaining) ?.
      <br/>----- Ensures path does not have values of null or undefined
      <br/>-----  
      `,
      `optional ?:
      <br/> ----- means a value is optional
      `,
      `Ternary operator ? :
      <br/>----- a = (x === 4) ? 4 : 3;
      `,
      `Null Coalescence ??
      <br/>----- 
      `,
      `Template Reference Variable #
      <br/>----- #xxx
     `
    ],
     [' -- '],
     [`Lazy Loading 
     <br/>--- is the process of loading Components | Modules | other assets 
     <br/>------ as they are required 
     <br/>----- NgModules can be lazy loaded -
     <br/>
     <br/>------ with a SPA normally loads of unneccesary things are loaded at once
     <br/>----------- eg libraries and modules 
     <br/>--------------- load time increases 
     `, 
     '--- Initially only Modules could be Lazy Loaded (but now Components can too)', '-- browser URL','RouterModule.forChild()',
     '--- children', 
    `<br/>------ Feature Modules - import CommonModule instead of BrowserModule (imported once in the root)
    `,
    `ng g m CustFeature - creates a Module called CustFeatureModule 
    <br/>
    <br/>--- import { NgModule } from '@angular/core';
    <br/>--- import { CommonModule } from '@angular/common';
    <br/>
    <br/>@NgModule({
    <br/>--- imports: [
    <br/>------ CommonModule
    <br/>],  
    <br/>--- declarations: []
    <br/>})
    <br/>export class CustFeatureModule[}
    `,
    `--- Component in a Feature Module - 
    <br/>----- ng g c cust-feature/CustFeature
    <br/>
    <br/>import { CustFeatureComponent } from './cust-feature/cust-feature.component';
    <br/>
    <br/>@NgModule({
    <br/>imports: [
    <br/>--- CommonModule
    <br/>],
    <br/>declarations: [
    <br/>--- CustFeatureComponent
    <br/>]
    <br/>})
    `,
    `------ preloadingStrategy
    
    `,
    `--- Shared Modules
    <br/>----- you can have several shared modules 
    <br/>----- to ensure it doesnt get too large 
    <br/>----- especaially the HomeSharedModule 
    `,
    '------ PreloadingStrategy',
    '--- PreloadAllModules - to initially fetch all modules', 
    ' -- ',
    '-- Lazy Load Components (not Modules)',
    '- async-await is used for lazy loading Components',
    `---  async getLazy2() {this.viewContainerRef.clear(); 
      <br/>const { Lazy2Component } = await import(\'./lazy2.component\'); 
      <br/>this.viewContainerRef.createComponent( this.cfr.resolveComponentFactory(Lazy2Component));}
      `,
      `--- Simplified in Angular 13
    <br/>------ Deprecated router.loadChildren() using a string value
    <br/>
    <br/>------ Ivy creates the Component in ViewContainerRef (without a factory)
    <br/>
    <br/>export class AppComponent {
    <br/>@ViewChild("formComponent", { read: ViewContainerRef })
    <br/>formComponent!: ViewContainerRef;
    <br/>
    <br/>constructor() {}
    <br/> 
    <br/>async loadForm() {
    <br/>--- const { LazyFormComponent } = await import("./lazy-form.component");
    <br/>--- this.formComponent.clear();
    <br/>--- this.formComponent.createComponent(LazyFormComponent);
    <br/>}    
`    
],
  [`Change Detection - 
    <br/>--- is a builtin framework feature 
    <br/>--- is the backbone of the Angular framework
    <br/>--- that ensures auto sync using CD (Change Detection)
    <br/>------ between changes to data and the view
    <br/>
    <br/>--- Each Component has its own   change detector 
    <br/>------ forms a CD tree - of Components with changes 
    <br/>
    <br/>--- Angular can detect when Component data changes 
    <br/>------- and can re-render the view to display the updated data
    <br/>------- ensuring the data        
    <br/>
    <br/>--- Angular uses Zones internally to trigger CD
    <br/> 
    <br/>--- works by detecting async changes 
    <br/>-------- common browser events (mouse clicks)
    <br/>-------- HTTP Requests  
    <br/>-------- other types of events   
    <br/>      

    <br/>--- topics - Zone.js | NgZone | runOutsideAngular() | OnPush() | ChangeDtectorRef 
    <br/>
    <br/>--- CD Cycles 
    <br/>-------- CD checks every component tree from 
    <br/>------------- from top to bottom to see if a model has changed   
    <br/>
    <br/>--- Angular uses Zone.js and NgZone 
    <br/>------ to know when to trigger UI update (CD)
    <br/>-------- when our Appn data changes
    <br/>------ Define Zones to detect when data changes
    <br/>-------- for all the Components in the whole appliction
    <br/>
    <br/>-- zone.js 
    <br/>----- can monitor all the states of sync|async operations
    <br/>----- provides a mechanism called Zones 
    <br/>------- for encapsulating and intercepting async activities
    <br/>---------- tick()
    <br/>---------- Angular picks up changes and then calls tick()
    <br/>------------- any listeners for those changes are fired
    <br/>------------- loops through views and calls detectChanges() method
    <br/>
    <br/>--- NgZone - is an injectable service
    <br/>---- creates a zone named Angular to automatically trigger CD
    <br/>-------- when a sync | async function is executed 
    <br/>-------- for executing work inside or outside the Angular Zone
    <br/>
    <br/>--- with Properties and Methods regarding CD
    <br/>
    <br/>------ NgZone.runOutsideAngular() - 
    <br/>--------- Gives an option to run outside Angular Zone
    <br/>--------- makes Appn more efficient 
    <br/>
    <br/> -- 
    <br/>
    <br/>--- ChangeDetectionStategy.OnPush() - 
    <br/>------ runs CD for the Components and their sub-tree only
    <br/>-------- checks the local branch
    <br/>------ when new refs are passed to them (not data mutated)
    <br/>
    <br/>------ framework checks OnPush 
    <br/>-----------  when any of its input property changes
    <br/>-----------  when it fires an event    
    <br/>-----------  when Observable fires an event 
    <br/>
    <br/>-----------  CD is only triggered if 
    <br/>--------------- data passed on @Input() has a new reference    
    <br/>   -- 
    <br/>------ Dissadvantages 
    <br/>---------- high complexity cost if used with mutable objects 
    <br/>
    <br/>----------- solution - immutable.js 
    <br/>--- The ChangeDetectorRef 
    <br/>------ is a base class that provides CD ftns -
    <br/>------ A CD Tree collects all views 
    <br/>--------- that are to be checked for changes
    <br/>
    <br/>------Use methods to 
    <br/>-------- add | remove views from the tree | 
    <br/>-------- initiate CD | 
    <br/>-------- explicit mark views as dirty 
    <br/>----------- changed Input changed | events -
    <br/>     
    <br/>--- ChangeDetectorRef methods
    <br/>------ markForCheck()
    <br/>------ detach()
    <br/>------ detectChanges()
    <br/>------ checkNoChanges()
    <br/>------ reattach() 
    <br/>
    <br/>----Using ChangeDetectorRef with detectChanges() 
    <br/>-------- constructor(private cd: ChangeDetectorRef){}
    <br/>----------- this.cd.detectChanges() in a refresh(){    }
    <br/>
    <br/>--- lets us enable local CD (Change Detection)
    <br/>------ on a lone Component 
    <br/>
    <br/> -- 
    <br/>
    <br/>--- igniteUI for Angular - toolkit for CD
    <br/>
    <br/>
    <br/>-- zone.js 
    <br/>----- can monitor all the states of sync|async operations
    <br/>----- provides a mechanism called Zones 
    <br/>------- for encapsulating and intercepting async activities
    <br/>-----------tick()
    <br/>---------- Angular picks up changes and then calls tick()
    <br/>------------- any listeners for those changes are fired
    <br/>------------- loops through views and calls detectChanges() method
    <br/>
    <br/>--- ngZone service is a wrapper around Zone.js 
    <br/>------- creates a Zone named angular
    <br/>----- to automatically trigger CD  
    <br/>----- to help with CD properties and methods
    <br/>-------- auto run updates when it detects an async opn event
    <br/> -- 
    <br/>----- We can also run via ChangeDetectionStrategy.onPush() 
    <br/>-------- to inc performance and just check a branch 
    `,    
    `--- Zone.js - provides a method (zones) 
    <br/>------ for encapsulating and intercepting async activities in the browser
    <br/>------ are execution contexts 
    <br/>------------ lets angular track start | completion of async activities
 `,
    `---- zones
    <br/>----- provides an execution context   
    <br/>----- that persists across async tasks 
    `,
    `-------- execution contexts
    <br/>-------- holds info about environment 
    <br/>---------- within current executing code      
    `,
    `------- Browser JS execution flow (Node.js) is based on an Event Loop
    <br/>
    `,
    `------------- Event Loop - JS Engine 
    <br/>-------------- waits for tasks | 
    <br/>-------------- executes them | 
    <br/>-------------- sleeps
    `,
    ' -- ',
    `--- LC Hooks
    <br/>------ Typically you should not use 
    <br/>------ both ngOnChanges() and ngDoCheck()
    <br/>
    <br/>--- CD Cycles 
    <br/>-------- CD checks every component tree from 
    <br/>------------- from top to bottom to see if a model has changed   
    `,
    `------- ngOnChanges()

    <br/>-------- called when a value bound to an ip changes
    <br/>-------- so you can run custom code when an ip has changed     
    `,
    `------- ngDoCheck()
    <br/>--------- cb method that performs CD 
    <br/>------------- invoked after default CD runs
    <br/>--------- fires with every CD cycle 
    <br/>--------- called when CD runs so you can imp custom CD
    `,
     ' -- ',
    `--- ngZone 
    <br/>----- is an injectable service 
    <br/>----- for executing for work inside or outside of the Angular zone  
    <br/>----- is a wrapper around Zone.js 
    <br/>
    <br/>----- notifies Angular when to perform CD process 
    <br/>----------- eg a DOM event with bound listener   
    <br/>
    <br/>--- optimizes performance when starting a work 
    <br/>--------- consisting of 1+ async tasks that dont require UI updates or error handling 
    <br/>--------- to be handled by Angular
    <br/>
    <br/>--- runOutsideAngular() 
    <br/>------- kicks off outside of Angular context 
    <br/>------- but then run inside Angular with run()
    <br/>
    <br/>--- isInAngularZone() - assertInAngularZone() - assertNotInAngularZone()
    <br/>
    <br/>--- NgZone properties 
    <br/>------ hasPendingMacroTasks() 
    <br/>------ hasPendingMicroTasks() 
    <br/>------ isStable()
    <br/>------ onStable() 
    <br/>------ onError()
    <br/>
    <br/>--- NgZone methods 
    <br/>----- isInAngularZone()
    <br/>----- assertInAngularZone()
    <br/>----- assertNotInAngularZone()
    <br/>----- hasPendingMacroTasks()
    <br/>----- hasPendingMicroTasks()
    <br/>----- isStable()
    <br/>----- onUnstable()
    <br/>----- on  Error()
    <br/>----- run() 
    <br/>----- runTask() 
    <br/>----- runGuarded() - 
    <br/>----- runOutsideAngular()
    `,   
   
    '--- ngZone methods',
    '------ isInAngularZone()',
    '------ assertInAngularZone()',
    '------ assertNotInAngularZone()',
    '------ hasPendingMacroTasks()',
    '------ hasPendingMicroTasks()',
    '------ isStable()',
    '------ onUnstable()',
    '------ onMicrotaskEmpty()',
    '------ onStable()',
    '------ onError()',
    '------ run&lt;T>()',
    '------ runTask&lt;T>()',
    '------ runGuarded&lt;T>()',  
    '------ runOutsideAngular<T>()',
    ' -- ',
    `--- ChangeDetectorRef  
    <br/>------- is a class used to manage local CD in our Component
    <br/>------- base class that provides CD functionality 
      <br/>  
      <br/>--- A change detection tree - 
      <br/>------- corresponds to Component tree 
      <br/>------- collects all views that are to be checked for changes
      <br/>
      <br/>--- ChangeDetectorRef  
      <br/>------Use methods to 
      <br/>-------- add | remove views from the tree | 
      <br/>-------- initiate CD | 
      <br/>-------- explicit mark views as dirty 
      <br/>----------- changed Input changed | events -
      <br/>     
      <br/>--- ChangeDetectorRef methods
      <br/>----- markForCheck()
      <br/>----- detach()
      <br/>----- detectChanges()
      <br/>----- checkNoChanges()
      <br/>----- reattach() 
      <br/>
      <br/>
      <br/>

    `,
    '--- helps performance',
    '--- asynchronous tasks',
    '------- runOutsideAngular()',
    '----- run() - to re-enter Angular Zone',
    ' -- ',   
    ' -- ',
    `ngZone properties and methods
    <br/>--- NgZone properties 
    <br/>----- hasPendingMacroTasks() 
    <br/>----- hasPendingMicroTasks() 
    <br/>----- isStable()
    <br/>----- onStable() 
    <br/>----- onError()
    <br/>
    <br/>--- NgZone methods 
    <br/>----- isInAngularZone()
    <br/>----- assertInAngularZone()
    <br/>----- assertNotInAngularZone()
    <br/>----- hasPendingMacroTasks()
    <br/>----- hasPendingMicroTasks()
    <br/>----- isStable()
    <br/>----- onUnstable()
    <br/>----- onError()
    <br/>----- run() 
    <br/>----- runTask() 
    <br/>----- runGuarded() - 
    <br/>----- runOutsideAngular()
    <br/>
    `,
    '--- manual CD', 
    `------ compares the template expression values 
      <br/>--- before + after an event 
      <br/>.-- for all components of the Component tree
    `,
    `--- without Angular zone - NgZone.runOutsideAngular()
    <br/>
    `,
    `--- Automatic change detection is not required

    `,
    `--- ChangeDetectionStrategy.onPush() 
    <bssr/>------ ensures only Component tree including source Component
    
    `,
    `------ OnPush
    <br/>@Component({
    <br/>--- selector: 'user-view',
    <br/>--- changeDection: ChangeDetectionStrategy.OnPush,
    <br/>--- template: ... 
    <br/>})
    <br/>export class UserViewComponent {
    <br/>--- 
    <br/>}
    `,
    `------ Default    
    `,
    '--',
  
    `--------- MacroTasks - mouseMove | setTimeoout
  
    `,
    `--------- changes to DOM only after tasks completed
    `,
    `-------- MicroTasks - come solely from our code
      <br/> ---------- run before next macrotask is run
    `,
     '--------- created by promises',
     ' -- ',
    `--- rx-angular
    <br/>3 parts
    <br/>------ rx-angular/cdk
    <br/>------ rx-angular/state
    <br/>------ rx-angular/template
    `,  
    `------ rx-angular/cdk
    <br/>-------- is a CDK for ergonomic  
    <br/>-------- and highly performant appns   
    `,
    `------ rx-angular/state
    <br/>-------- RxState is a lightweight, flexible, strongly typed and tested tool
    <br/>-------- dedicated to reduce the complexity of managing component state in Angular

    `,
     `------ @rx-angular/template
     <br/>------- import { LetModule, PushModule, ViewportPrioModule } from '@rx-angular/template';
     <br/>------- @NgModule({
     <br/>---------- declarations: [...],
     <br/>---------- imports: [LetModule, PushModule, ViewportPrioModule],
     <br/>------ })
     <br/>------ export class MyModule {}
     `,
     `------- let directive *rxLet
     <br/>-------- a convenient way to bind Observables to a view context   
     <br/>
     <br/>------- <ng-container *ngIf="observableNumber$ | async as n">
     <br/>---------- <app-number [number]="n"></app-number>
     <br/>---------- <app-number-special [number]="n"></app-number-special>
     <br/>------- </ng-container>
     <br/>  
     <br/>------- <ng-container *rxLet="observableNumber$; let n; let e = $error, let c = $complete">
     <br/>---------- <app-number [number]="n" *ngIf="!e && !c"></app-number>
     <br/>---------- <ng-container *ngIf="e"> There is an error: {{ e }} </ng-container>
     <br/>---------- <ng-container *ngIf="c"> Observable completed: {{ c }} </ng-container>
     <br/>------- </ng-container>
     `,
     `------- PushPipe ( | push) aka async
     <br/>---------- handles CD locally (instead of globally - async pipe) 
     <br/>---------- gives zoneless performance in Zone appns   
     <br/>
     <br/>---------- triggers CD and rendering only in 
     <br/>--------------- component where change happened   
     <br/>--------------- and child components affected by change
     <br/>--------------- Doesn't trigger rendering unnecessarily     
     `,
     `------- unpatch wrt runOutsideZone
     
     `,
     `------- rendering strategies
     `
  ],
    [`AoT (Ahead Of Time) Compilation 
    <br/>--- compiler converts HTML + TS code to JS 
    <br/>------ into efficient JS during build phase (requires Compilation process) 
    <br/>---------- before browser downloads and runs the code 
    <br/>
    <br/>--- is better due to - the code is compiled at build time 
    <br/>------- and hence the code to be sent to the browser 
    <br/>------------- does not contain the Compiler itsel and is much smaller
    `,
    '---- Compile time build', 
    '---- No need for Compiler',
    ' -- ', 
    `---- 3 Phases - 
    <br/>----- 1:Code Analysis- 
    <br/>----- 2:Code generation- 
    <br/>----- 3:Template type checking

    `,
    `--- 1 AOT Collector - analyzes the metadata and reps in best manner 
    <br/>------ recorded in the metadata.json file
    <br/>------ like a diagram of the overall structure of a decorator's metadata 
    <br/>------ metadata is like an AST (Abstract Syntax Tree)      
    `,
    `--- 2 Metadata collected from the Code Analysis phase 
    <br/>------ is interpreted by Compilers Static Reflector 
    <br/>------ check for metadata errors 
    `,
    `--- 3 Angular template compiler 
    <br/>----- uses tsc to validate binding expns in template 
    <br/>----- fullTemplateTypeCheck: true in tsconfig
    `,
    `--- Benefits are 
    <br/>------- 1: Faster rendering - due to pre-compilation being downloaded to browser
    <br/>------- 2: Fewer async requests - Compiler inlines ext HTML + CSS files 
    <br/>------- 3: Executable code loaded - 
    <br/>------- 4: inlines all ext HTML+CSS - 
    <br/>------- 5: finds template errors - during the build step 
    <br/>------- 6: Reduces injection attacks - Better security - 
    <br/>------- 7: Reduces bundle load of Frmwk - does not need to load the Compiler itself
    `],
    [`--- Tree Shaking
    <br/>------ Remove dead code from the bundle 
    <br/>----- unused bits
    `, 
    `-------  Dead code
    `,
    `--- Ivy tree-shakes - DI-CP-View 
    <br/>- Content queries 
    <br/>---- Animations Pipes i18n core frmwork services LCHs 
    <br/>-------- easier to ship librarries
    `, 
    `View Engine tree-shakes 
    <br/>--- Static analysis of code 
    <br/>------- and then compiles whats left
    `
    ],  
     [`APF (Ang Package Format) 
     <br/>--- is an Angular specific specn for the structure 
     <br/>------ and format of npm packages 
     <br/>
     <br/>--- used by all Angular packages @angular/core and Angular libraries etc.
     <br/>
     <br/>--- compatable with all tooling offere by the Angular team + JS ecosystem + 3rd party developers  
     <br/>
     <br/>--- Developers can rely on the CLI and ng-packagr to produce packages in the APF 
     `, 
    '--- npm packages',
    '--- @angular/core | @angular/routing',
    '--- Tooling support',
    '--- ES versions -',
    `Angular CLI - is a Command Line Interface tool 
    <br/>--- used to initialize | develop | scaffold and maintain 
    <br/>---- Angular appns directly from a command shell
    <br/>
    <br/>npm install -g @angular/cli 
    <br/>- ng new - ng help - ng build - ng serve - ng test 
    <br/>
    <br/>uses schematics to apply transforms to a web-project 
    <br/>- modify these schematics | define new  one (update code |  
    <br/>
    <br/>  fix breaking changes in a dep | add new confign | add a framewok)  
    <br/>
    <br/>---- Added in the @schematis/angular colln 
    <br/>---- ng g   and ng add     
    `,
    'ng-packagr - a build tool - Angular CLI uses',   
    'esm and fesm (flattened)',
    '.d.ts files',  
    `-  package.json - "type": "module" 
    <br/>- No CommonJS Modules
    `,
    `Angular 13 new improved version 
    <br/>- Node package exports 
    <br/>- es2020 support Ivy partial compilation
    `,
     `- not rely on Internal APIs - using the Node.js 
     <br/>- sub-path pattern feature 
     <br/>- displaying multiple outputs at each entry point
     <br/>`, 
     `--- BigInt 
     <br/>- Dynamic Import 
     <br/>- Nullish Coascing 
     <br/>- Optional Chaining 
     <br/>-   Promise.allSettled 
     <br/>- string#matchAll 
     <br/>- globalThis 
     <br/>- Module Namespace exports 
     <br/>- import.meta
     `, 
     'for Libraries - publishing tsconfig.json - "angularCompilerOptions": {"compilationMode": "partial"}- no particular runtime version - '
  ],
  [`ESBuild - suoerfast build b  undler
  <br/>--- dramatically speeds up bundling speed of both CommonJS and ESMs
  <br/>-------- (no need of a cache)  
  <br/>-------- used by the more modern versions of Ang 13 | 14 
  <br/>--- Tree Shakes ESMs - 
  
 `,
    `CommonJS - 
      <br/>----- more suitable for Node.js (Not JS)
    `,
    `--- ESMs - (EcmaScript Modules) -
    <br/>------ FESM (Flat ESMs)
    <be/>
    <br/>------ Tree Shaking of ESMs
    <br/>
    <br/>--- The most modern modules are ESM (EcmaScript Modules) supports ES2015+ | CommonJS| AMD modules out of the box  
    <br/>------- performs clever static analysis of the AST of your code - 
    <br/>------- has an evaluation engine to evaluate simple expressions 
    <br/>------- supports most libraries out of the box
  `],  
   [`Ivy - is new Compilation and Rendering Pipeline 
  <br/>---- which creates template instructions to render info to the DOM
  <br/>
  <br/>- features - Template Instructions | Incremental DOM | Locality | TreeShaking | 
  <br/>- Libraries - ngcc but now uses Linker and partial compilation
  <br/> -- 
  <br/>Does not need an interpreter or metadata.json file 
  <br/>nor the ngFactory.js file
  <br/>
  <br/>It just produces the appComponent.js file 
  <br/>--- from the compilation step
  <br/>
  <br/>using AoT Compilation by default
  `,
  '- enableIvy: true',
  '- complete rewrite of RE',
  '- loading is very fast ',
  '- operates very fast too',
  '- smaller size',
  '-- Much more Tree Shakeable',
  '- compile comps more independently than before',
  ' -- ',
  `--- Locality 
  <br/>--- single file compilation
  <br/>--- only one file is compiled at a time 
  <br/>----- Each component should compile using its own info 
  <br/>----- components dont need to know about dependencies
  <br/>------- Hot Reloading - only compiles component you changed 
  <br/>
  <br/>--- View Engine suffered from the Global Compilation Problem
  <br/>
  <br/>--- Also has ability to create Directive | Component at runtime
    `,
    '---- Single file - with no other dependencies required ',
    '---- Components own local infon is used',
    '------- Recompiles partial changes',
    '------- Ability to create Directive | Component at runtime',
    '------- HMR (Hot Module Replacement) - support improved Ang 14',
    ' -- ',
    `- Incremental DOM 
     <br/>---- every component gets compiled 
     <br/>------  to a series of instructions 
     <br/>--------- create DOM trees 
     <br/>------------ updated mutably inplace 
     <br/>---- Tree Shakable -   
     <br/> ----It doesnt need any memory to rerender the view
     <br/> ------- if it doesn't change the DOM 
     <br/> ---- We only need to allocate memory 
     <br/> ------- when the DOM nodes are added or removed
     <br/> ------- Size of allocation is proportional to size of change
     <br/> ----- Hence large memory savings          
    `,
    '-------- series of instructions',
    '----------create DOM trees',
    '------------ updated mutably inplace',
    '------ Tree Shakable',   
    '--------- Only memory needed',
    '------------ on Change to DOM',
    ' -- ',
    '-- Decorators to Static Properties - ngComponentDef etc.',
    '---- ngComponentDef in .d.ts files  ', 
    '---- no complete code analysis - ',
    '------ @NgModule metadata',
    `-- Template instructions 
    <br/>- replace the template data and runtime interpreter 
    <br/> ---- from the View Engine
    <br/> ---- Create the correct DOM on their own  
    <br/> ---- replace the ngFactory and metadata.json phase 
      `,
      `- no metadata - Renderer2 create a metadata.json file 
      <br/>Angular ivy does not!
    `,
    `--- AOT with Ivy is faster and should be used by default
    <br/>--- 3 Phases - 
    <br/>---- 1:Code Analysis- 
    <br/>---- 2:Code generation- 
    <br/>---- 3:Template type checking
    `,
    ' -- ',
     `Libraries - used to use the ngcc (Angular Compatability Compiler) 
     <br/>to create Angular libraries from View Engine format
     <br/>ngcc would translate libraries to Ivy format     
      `, 
    '--- ngcc', 
    `- Linker can now be used instead of ngcc 
    <br/>- since Angualr 11 and especially Ang 13 
    <br/>
     `, 
    '--- Partial Compilation - no need for ngcc (Angular 13)',   
    'Ang Language Service',
    'only recompiles Components that have changed',
    `- adv Tree Shakeable 
    <br/>- Reduced size - 
    <br/>- faster compilation 
    <br/>--- locality -   
    <br/>--- enhanced testing + debugging - 
    <br/>--- easier dyn comp loading - 
    <br/>--- mobile exp
    <br/>--- backwards compaable - 
    `,
    'EntryComponents - are no longer required',
    ' -- ',
    'Ivy DI (Dep Injection)',
    `---- R3Injector (ModuleInjector) - Angular 14 - EnvironmentInjector
    <br/>---- 
    `,
    '-------- Store property',  
    ' -- ',
    '---- NodeInjector (ElementInjector)',
    '-------- TNode object',
    '-------- LView object',
   ],
   [`--- Locality
   
   `,    
   ],
   [`--- Incremental DOM
   
   `,
   ],
   [`ViewEngine old 
    <br/>--- legacy compilation and rendering pipeline
    <br/>
    `, 
    '--- tended to use JIT compilation by default',
    `---- 8 phase AOT Compiler
  `,  
    `-- Code Analysis - 
    <br/>--1 AOT Collector - analyzes the metadata and reps in best manner - recorded in the metadata.json file
    <br/>like a diagram of the overall structure of a decorator's metadata 
    <br/>metadata is like an AST (Abstract Syntax Tree)      
    `,
    '--- Interpreter ',
    '--- metadata.json file - ',
    `<br/>-- 2 - Code Generation - 
     <br/>--- Metadata collected from the Code Analysis phase is interpreted by Compilers Static Reflector 
     <br/>------ + check for metadata errors 
     <br/>------ passing sructure into Interpreter + Tree Shaking
    `,
    `<br/>-- Template Type Checking - 
     <br/>-3 Angular template compiler - uses tsc to validate binding expns in template - fullTemplateTypeCheck: true in tsconfig',
      `,
      `--- abstract base class - to render template to DOM - 
     <br/>------ can be overridden for Custom Rendering - 
     <br/>------ RendererFactory2
     `, 
    '--- 1: Template Parsing + creating Data Structure', 
    '--- 2: '  ,
    '------ Interpreter', 
    '------ metadata.json file',
    '--- 3: Compilation', 
    '------- 2 files generated',
    '--------- 1: Component.js',
    `--------- 2: ngFactory.js - static repn of code in Component.js
      <br/> generation of this file takes a lot of time and processing
    `,
    '--- application.js file',
    'ngFactory.js file - contains the static repn of code in a Component',
    '--- JIT or AOT',
    `--- EntryComponent is any component that Angular loads imperatively - not refd in the template - by type 
    <br/>---you bootstrap the component in an NgModule - or including it in a routing defn
    <br/>---- 1: Bootstrapped Component
    <br/>---- 2: A Component you specify in a route defn
    `],
    ['Template Rendering',
    '--- from Component classes to View', 
    '----- Unidirectional data flow',
    '------- Helps get great performance',
    '------- Component- simple to understand',
    ' -- ',
    `--- What is actual happening
      <br/>-- Angular is generating DOM Data Structures directly 
      <br/>---- via a Component Renderer which gives a DOM tree
      <br/>---- that represents the Component View  
      <br/>-------  It is not just generating HTML 
      <br/>
      <br/>---- by running the template data through a function   
      <br/>------ using a DOM Component Renderer 
      `,
      `--- Angular goes through the whole Component Tree 
      <br/>----- starting at the root component of app'n
      <br/>
      <br/>-------- For each Component - (root to leaves      )  
      <br/>------------ Ang runs the CD (Change Detection) wrt Component
      <br/>--------------- re-renders Component if changed
      <br/>------------------ runs DOM generation ftn - new DOM data structure
      <br/>------------- template expressions are evaluated
      <br/>------------- runs Life Cycle methods  
      <br/>
      <br/>--------- Angular Development Mode
      <br/>----------- runs the rendering process twice
      <br/>------------- to ensure 1st rendering process does not change data  
      `
    ],
    [`Promises 
    <br/>--- a JS object that can produce a value at a pt in time 
    <br/>--- execute immediately only once 
    <br/>--- simplify execution of async ftns that uses callbacks
    <br/>--- while emitting and completing (resolving or rejecting) 
    <br/>----- one value at a time 
    <br/>
    <br/>var promise = new Promise((resolve, reject) => { 
    <br/>--- resolve("Promise Resolved"); 
    <br/>}) 
    <br/>
    <br/>---- Enables you to emit 1 event from the API
    <br/>------- far cleaner solution to writing async code than callbacks
    <br/>
    <br/>---- not cancellable -
    <br/>
    <br/>---- then(resolve, reject){}
    <br/>
    <br/>promise.then((success) => { 
    <br/>---- console.log(success); 
    <br/>}) 
    <br/>.catch(function(error) => { 
    <br/>---- console.log(error); 
    <br/>}); 
    <br/>// Output: Promise Resolved
    <br/>
    <br/>--- 4 states
    <br/>------ fulfilled - action relating to promise succeded     
    <br/>---------- then     
    <br/>------ rejected - action relating to promise failing
    <br/>---------- catch when an error occurs 
    <br/>------ pending - hasn't fulfilled or rejected yet
    <br/>------ settled - has fulfilled or rejected 
    <br/>
    <br/>
    `,  
    '- then()', 
    '- future tasks', 
    '- new Promise(resolve, reject)',
    '- asynchronous',
    `- Promise.resolve(\'done\').then((val) 
        <br/>--- => {throw new Error("fail")})
        <br/>--------.then((val) => console.log(val))
        <br/>----------- .catch((err) => console.error(err));
    `,
    ' -- ',
     `Observables - 

     `,
     '- next()',
     '- Observer',
     '- subscribe',
     '- async pipe',
     '- hot - runs all the time without req subscribe()',  
     '- cold - requires subscribe ',
     '-- bubbles which identify parts in the timestream'
    ],
    [`Observables - 
    <br/>--- Observables and the RxJS operators can manipulate 
    <br/>----- streams of data over time 
    <br/>
    <br/>--- like promises handling async requests 
    <br/>--- handle multiple events - 
    <br/>------ cancellable (wrt a promise)
    <br/>--- can be Hot (always emitting) | Cold (only when subscrubed to)
    <br/>
    <br/>--- can use RxJS to manipulate Observables
    <br/>
    <br/>--- Subscribe() works on Cold Observables to get at the data
    <br/>
    <br/>--- can work with Subscribers to create multicasting Observables
    -
    <br/>----- and use Subjects to aid working with them -
    <br/>-------simplifying subscription and allow 
    <br/>---------multi-casting events around the application. 
    `,
    '--- streams',
    '----- time based',
    '--- multiple values',
    '--- compared to Promises',
    '----- cancellable',
    '--- Observer',
    ' -- ',
    '--- Hot and Cold',
    '------ Hot - always emit',
    '-------- xx',
    '------ Cold - must subscribe to',
    '-------- subscribe()',
    '--- Shared Observables',
    ' -- ',
    '--- rxjs operators',
  ],
  ['- Subjects', 
    '--- behaviorSubject', 
    '--- asyncSubject', 
    '--- replaySubject'
    ],
    [`rxjs - Reactive Extensions - 
    <br/>--- is a library for reactive programming using Observables
    <br/>------ for composing asynch + event based programs
    <br/>------ 
    <br/>
    <br/>--- simplifying composing asynch impn or callback based code 
    <br/>------ using Observable sequences
    <br/>------ based on Observables -
    <br/>
    <br/>--- RxJS concepts -
    <br/>------- Observable - reps invokable colln of future values of values or events 
    <br/>------- Observer - is a colln of callbacks knowing how to lisen  
    <br/>------- Subscription - reps the execn of an Observable - cancel execn
    <br/>------- Operators - pure ftns enable ftnal programming 
    <br/>------- Subject - like an EventEmitter() 
    <br/>------- mulit-casting a value or even to multiple observers
    <br/>------- Schedulers - centralised dispatchers to control concurrency
    <br/>
    <br/>-------   
    <br/>--- rxjs Pipeable operators - 
    <br/>------ act on Observables and 
    <br/>------ are immutable by default 
    <br/>------ return Observables  
    <br/>------ always creates new Observables
    <br/>
    <br/>--- Using pipe()
    <br/>------ lets us use multiple operators in one method
    <br/>
    <br/>--- Pipeable operators
    <br/>--- Combination
    <br/>------ combineAll
    <br/>------ combineLatest   
    <br/>------ concat 
    <br/>------ forkjoin 
    <br/>
    <br/>------ merge
    <br/>------ mergeAll 
    <br/>------ race
    <br/>------ startWith 
    <br/>------ withLatestFrom
    <br/>------ zip   
    <br/> 
    <br/>--- Conditional
    <br/>------ defaultEmpty
    <br/>------ every 
    <br/>------ iif 
    <br/>------ sequenceEqual   
    <br/>
    <br/>--- Creation
    <br/>------ ajax   
    <br/>------ create 
    <br/>------ defer
    <br/>------ empty
    <br/>------ from
    <br/>------ fromEvent 
    <br/>------ interval 
    <br/>------ of
    <br/>------ range 
    <br/>------ throw
    <br/>------ timer 
    <br/>
    <br/>--- Errors',
    <br/>------ catch/catchError 
    <br/>------ retry
    <br/>------ retryWhen
    <br/>
    <br/>--- Filtering
    <br/>------ audit
    <br/>------ debounce
    <br/>------ distinct   
    <br/>------ filter 
    <br/>------ find 
    <br/>------ first 
    <br/>------ last
    <br/>------ single 
    <br/>------ skip   
    <br/>------ take 
    <br/>------ throttle 
    <br/>
    <br/>--- Multi-cast
    <br/>-------- multicast
    <br/>------ 
    <br/>--- publish 
    <br/>-------- share 
    <br/>
    <br/>--- Transformation -
    <br/>------ buffer
    <br/>------ concatMap   
    <br/>--------- expand 
    <br/>------ map - data stream transformation operator wrt arrays
    <br/>----------- map(x => x*x )
    <br/>------ mergeScan 
    <br/>---------- reduce - reduces value from source Observable to 1 value 
    <br/>---------- scan - like reduce for Arrays
    <br/>------ switchMap 
    <br/>--------- toArray 
    <br/>--------- window 
    <br/>
    `,
    '- library',
    '--- npm install rxjs', 
    `------ rxjs operators
    `,
    '--- are immutable',
    '--- return Observables',
    '--- asynchronous',
    '--- Event based ops',
    '--- Observable sequences',
    '---- imps Observable type',
    ' -- ',
    'Utility ftns',
    '- Convert async to Observables',
    '- iterating over stream','- map vals to types',
    '- filtering streams',
    '- multiple streams',
    ' -- ',
    'Pipeable operators',
    '--- Combination',
    ' -- ',
    '--- Conditional',
    ' -- ',
    '--- Creation',
    ' -- ',
    '--- Errors',
    ' -- ',
    '--- Multi-cast',
    ' -- ',
    '--- Filters',
    ' -- ',
    '--- Transform',
    ' -- ',
    '--- Higher Order Map Ftns',
    '------ concatMap| mergeMap| switchMap| exhaustMap',
    ' -- ',  
    `--- rx-angular/state
    
    `,
    `------ RxAngular
    <br/>------- offers a comprehensive toolset for handling     
    <br/>---------- fully reactive Ang appns 
    <br/>---------- with the main focus on 
    <br/>------------- performance and   template rendering  
    `,
    `------ RxAngular/template
    <br/>------- Fully reactive Component Template Rendering   
    <br/>--------- leverages latest browser APIs 
    <br/>--------- to max rendering performance   
    <br/>
    <br/>--------- functionalities provided by     
    <br/>------------ structural directives
    <br/>------------ pipes
    <br/>------------ RxJS 
    <br/>------------ imperative ftns 
    <br/>
    <br/>-------- imperative rendering (How to code something)
    <br/>-------- unpatch directive 
    <br/>----------- higher perf wrt runOutsizeZone 
    <br/>-------- strategies for rendering
    <br/>-------- push pipe | push (like async)
    <br/>-------- rxLet directive *rxLet
    <br/>-------- viewport-prio Direcive
    `,
    `------ RxState
    
    `
    ],
    [`Higher-Order-Mapping-ftns
    <br/>--- Produces an Observable as an output 
    <br/>------- are among the most widely used RxJS operators
    <br/>--- transform higher order Observables  
    <br/>--- emit values that are Observables  
    <br/>--- Most of the network calls will use these oprs
    <br/>------- Http(s) calls - 
    <br/>
    <br/>--- Different types of HOM
    <br/>------ concatMap - flatten but order is impt - serial 
    <br/>------ mergeMap - flatten to one Observable  
    <br/>------ switchMap - flatten but need latest
    <br/>------ exhaustMap 
    `,
    `--- 4 types of HOMFs
    <br/>------ concatMap | mergeMap| switchMap| exhaustMap
    `,
    `--- OuterObservables
    `,
    `------ InnerObservables
    `,
    '--- Observable of Observables',
    `--- map source Observable - emitted value
    <br/>----- into other Observable(s)
    <br/>-------- returns Observable of Observables
    `,
    `--- emit values that are Observables  
     `,
     `--- most of the network calls use these
    <br/>------- HTTP and HttpClient
    `,
    ' -- ',
    `--- ConcatMap extends Concat strategy
    <br/>
    <br/>------- Concat strategy
    <br/>------------ waits for 1st Observable to complete before next
    <br/>
    <br/>--- ConcatMap
    <br/>------- Sequence opn (order of opns is important) 
    <br/>------- map values to inner Observable subscribe 
    <br/>------- and emit in order - delayed subscribe to inner Observables
    `,
    `------- Sequence opn 
    `,
    `------- xxx
    `,
    ' -- ',
    `--- MergeMap extends merge strategy
    <br/>
    <br/>--- Merge strategy
    <br/>------- works in Parallel - 
    <br/>------- without waiting for previous inner Observable to complete       
    <br/>  
    <br/>--- MergeMap 
    <br/>------ (alias FlatMap) Parallel opn 
    <br/>------ Multiple simultaneous active inner subscriptions 
    s<br/>------ possible memory leaks 
    <br/>------ subscribes immed to inner Observables 
    <br/>------ map to Observable with inner timer or a stream of DOM events
    `,
    `-------- multiple simultaneous active inner subscriptions
    `,
    `----- parallel ops without waiting 
    `,
    ' -- ',
    `--- switcMap extends switch strategy
    <br/>
    <br/>------- switch strategy
    <br/>------------ on a new search - cancels previous search 
    <br/>
    <br/>------- switchMap - maps to Observable 
    <br/>----------- complete previous inner Observable 
    <br/>----------- emit values 
    <br/>----------- immed cancel prev opn and emit new one 
    <br/>------- can have a cancelling operator - 
    `,
    `------- maintains only 1 inner subscription at a time
    <br/>
    `,  
    `------ Avoiding nested subscription
    <br/>--------- 
    `,
    `----- Cancelling 
    `,
    ' -- ',
    `--- ExhaustMap extends the Exhaust strategy
    <br/>
    <br/>--- Exhaust Strategy - 
    <br/>------ ignore new vals in source 
    <br/>------ till prev value completes 
    <br/>
    <br/>------ ExhaustMap - 
    <br/>--------- projects each source value to an Observale 
    <br/>--------- which is merged in the o/p Observable 
    <br/>--------- only if prev has completed - maps each value to an Observable then flattens all the inner Observables usng exhaust
    `,
    `------- projects each source value to an Observable
    <br/>
    `,
    `--------- maps value 
    <br/>-------------from src to inner Observable
    `,
    `---- only merge new Observables if prev has completed 
    `,
    ],
    [`Forms 
    <br/>--- Uses for Forms
    <hr/>------- 1: Login and Registration
    <br/>------- 2: Data entry
    <br/>------- 3: Validatng Data entry
    <br/>------ Template Forms
    <br/>----------- Template Approach uses directives in template
    <br/>----------- uses NgForm 
    <br/>----------- for small and   simple forms   
    <br/>----------- use 2 way data binding to update the data Model
    <br/>--------------- to keep model data and template display in sync     
    <br/>----------- assynchronous   
    <br/>----------- dont scale well 
    <br/>
    <br/>------- Reactive Forms
    <br/>------------ Reactive Forms declare a model driven approach in the class 
    <br/>------------ Values change over time
    <br/>------------ immutable data model 
    <br/>------------ access Control info via properties and methods 
    <br/>---------------- control form state    
    <br/>------------- more powerful and easier to control
    <br/>------------- synchronous
    <br/>------------ Dynamic Form Validation
  
    <br/>--- Both Template and Reactive forms 
    <br/>------ track value changes between form Input elements and form data 
    <br/>--------- in the Component Model
    <br/>
    <br/>------ Validation is an integral part of managing any type of forms 
    <br/>---------- Angular provides a set of built-in validators + ability to create custom validators
    
    
    <br/>--- Data Binding
    <br/>--- Form Validation
    <br/>
    <br/>--- Form value and validity
    <br/>
    <br/>--- sharing common building blocks but differ how to create + manage common form-control instances 
    <br/>
    <br/>---- 2 types of Forms - 
    <br/>---  1: Templsate Forms - for simple forms 
    <br/>------- not as reusable or scalable
    <br/>
    <br/>------ use async data flow between the View and data model - 
    <br/>
    <br/>------ Most of the work uses NgModel and template directives - 
    <br/>
    <br/>------ uses ngForm - 
    <br/>
    <br/>------ rely on mutability with 2 way data binding 
    <br/>
    <br/>------ to update the data model in the Comp as changes 
    <br/>
    <br/>------ are made in the template
    <br/>
    <br/>------ Testing is reliant on angular CD 
    <br/>
    <br/>------ to run properly and require more setup
    <br/>
    <br/>------ FormsModule - 
    <br/>
    <br/> -- 
    <br/>
    <br/>---- Reactive Forms 
    <br/>------- more scalable and reusable and use Observable streams 
    <br/>
    <br/>------- explicit and immutable approach to managing the state of a form at a given point in time
    <br/>
    <br/>------- Most of the code is in the class (not the template) 
    <br/>
    <br/>------- provides a Model-driven approach
    <br/>
    <br/>------- to handling form inputs whose values change over time
    <br/>
    <br/>------- FormControl instance always return a new value when the controls 
    <br/>
    <br/>------- Each change to form state returns a new state - 
    <br/>
    <br/>------- maintains the integrity of the model between changes - 
    <br/>
    <br/>------- where form inputs and values are provided as streams of input values which can be accessed asynchronously 
    <br/>
    <br/>------- provide synchronous access to the data model| immutability with Observable operators | change tracking through observable streams
    <br/>
    <br/>------- FormModel is the source of truth
    <br/>------- FormControl instance emits the new value via the valueChanges observable 
    <br/>
    <br/>--- 2: ReactiveFormsModule - 
    <br/> -- 
    <br/>--- Validation is an integral part of managing any type of forms 
    <br/>
    <br/>--- Angular provides a set of built-in validators + ability to create custom validators
    <br/>
    <br/>--- Conditional Validators
    <br/>
    <br/>--- Angular 14
    <br/>------- Typed Reactive Forms  
      `,
      `--- Why do we need forms 
      <br/>------ 1: Login and Registration
      <br/>------ 2: Data entry 
      <br/>------ 3: Validating data entry
      `,
      `--- Template forms - 
      
      `,
      `--- Reactive Forms - 
      `,
      ' -- ',
      `--- Data Binding
      
      `,
      `--- Form Validation
      
      `,
      
      `--- Form value 
      `,
      `--- Form validity
      `,
      `--- 2 types of Forms
      `,
      `------ 1: Template Forms 
      <br/>-------- Template Driven Approach using directives)
      `,
      `-------- NgForm - 
      <br/>------- creates a top-level FormGroup instance 
      <br/>----------- and binds it to a form el 
      <br/>------- to track aggregated form value and validation status 
      `,
      `------ Template Directives
      <br/>------- NgModel
      <br/>------- Required| MinLength| MaxLength| 
      `,
      '-------- NgModel',

      `-------- NgModelGroup - creates a FormGroup instance to a DOM element
     
      `,
      `----------- container 
      <br/>-------------- series of fields
      <br/>------------------ each field has validators
      <br/>------------------ a value - valid/invalid
      `,
      `------ FormsModule
      
      `,
      '----- directives in template',
      '----- simple directives',
      '----- asynchronous forms',
      '----- FormsModule',
      '----- Dont scale very well',
      '----- Unstructured and Mutable',
      '----- More complex Testing',
      '----- &lt;form (ngSubmit)="onSubmit()" #heroForm="ngForm">',
      ' -- ',
      `--- 2: Reactive Forms 
      <br/>------ (Model Driven Approach)
      <br/>
      <br/>------ complex forms
      <br/>------ FormModel
      <br/>------ FormControl
      <br/>
      <br/>---- Structured and Immutable
      <br/>---- Sync forms
      <br/>---- simplifies Testing
      <br/>
      <br/>--- &lt;form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm)">
      <br/>
      <br/>-------- &lt;div>
      <br/>------------- &lt;label>
      <br/>----------------- Name: <input formControlName="name" placeholder="Your name">
      <br/>------------- &lt;/label>
      <br/>-------- &lt;/div>
      <br/>
      <br/>-------- &lt;button type="submit">Send&lt;/button>
      <br/>
      <br/>--- &lt;/form>
      `,
      ' -- ',
      `------- uses FormGroup and FormControl for fields 
       <br/>-------- and validation
       <br/>-------- directives 
       <br/>------------ formGroup and formControlName 
      `,
      `------- define in class - a form of type FormGroup
      <br/>--------- form: FormGroup
      <br/>--------- form = new FormGroup({
      <br/>-------------- email: new FormControl('',{validators: [Validators.requi  red, Validators.email]}),
      <br/>-------------- password: new FormControl('', {validators: [Validators.required, Validators.minLength(8)]})
      <br/>--------- })
    <br/>------------ gives good separation of concerns - 
      `,
      `--------- within template - bind the form 
      <br/>----------- with a new Reactive Forms Directive called FormGroup
      <br/>----------- &lt;form [formGroup]="form">  
      `,
      `-------- defined in the ReactiveFormsModule
      <br/>
      `,
      `---------- formControlName directive
      <br/>------------ &lt;input type="email" name="email" 
      <br/>------------------- placeholder="Email" formControlName="email">      
      `,

      `------- expose API - Observab
les - 
      <br/>---------- simplify certain use cases 
      `,
      `----- logic defined in Component Class
      <br/>-------- expose Observables -
      `,
      '----- for more complex forms',
      '----- FormModel is single source of truth',
      '----- FormControl instance emits value via valueChanges() observable',
      '----- synchronous forms',
      '----- simplifies testing',
      '----- ReactiveFormsModule',
      
      `- Form Validation - a web form checks if the infon provided by a user is correct
      <br/>a: User messed up and get an error message
      <br/>b: Everything is ok and we can proceed with the regn process   
      <br/> There is Client side validation (optional) and Server side validation (reqd)
      `,
      `-- Client side Validation - ensures all reqd form controls are filled out - in the correct format
      <br/>important part of good user experience by catching errors on client side - User can fix right away
      <br/>ensures the data submitted matches the reqts reqd in form controls 
      `,
      `-- Server side Validation - is a requirement to make sure the data is correct on the Server  
      <br/>
      `,
    ' -- ',
    '- Template Forms', 
    '-- Template directives for object Model',
    '-- Asynchronous data flow',
    '-- ngForm', 
    '-- more complex test setup',
    '-- complex validation','',
    ' -- ',
    ' --- Template Validation',
    ' -- ',
    '- Reactive Forms',
    '-- direct access to Object Model',
    '-- Synchronous data flow','-- simpler test setup','-- simpler validation','-- Data','= new FormControl("")',



    ' -- ',
    '--- Reactive Validation'
  ], 
  [`--- Template Forms`],
  [`--- Reactive Forms`],
  [`ElementRef
  <br/>--- is   a wrapper around a native DOM element inside a View
  <br/>--- permits direct access to a DOM element 
  <br/>------- more vulnerable to XSS attacks 
  <br/>--- tightly couples appn and rendering layers
  <br/>----- difficult to run appn on multiple platforms
  <br/>--- Use with caution
  <br/>----- nativeElement - 
  <br/>------- use @ViewChild instead
  `,
  '--- access native DOM Element',
  '----- Be careful',
  '----- Security Vulnerabilities',
  '------- XSS Attacks',
  '------- tightly couples to rendering',
  '---class ElementRef<T = any>{',
  '----- constructor(nativeElement: T)',
  '----- nativeElement: T',
  '---- A web worker gives null',
  '--- Alternatives',
  '------ @ViewChild() access DOM el',
  '------ Renderer2 - custom rendering',
  '-------- Custom Rendering',
  '---------- Render to a Web Worker'
  ],
  [`ViewContainerRef - reps a container 
  <br/>--- lets you attach multiple views to a Component
  <br/>--- can be used with @ViewChild | @ContentChild| ng-template
  <br/> 
  <br/>---- can contain Host Views (instiating a Component with createComponent)| 
                embeddedViews (instiating TemplateRef with createEmbeddedView) 
  <br/>---- A view container instance can contain other view containers - A view container hierarchty
  `,
  `--- reps a container that lets you attach muliple views to a Component
  `,
  '----- attach multiple views',
  '------- to a Component',
  `--- can be used with @ViewChild | @ContentChild | 
   `,  
  '---- View Container',
  '------ any DOM el',
  '-------- appends views to el',
  '--- abstract class ViewContainerRef{',
  '----- abstract properties - element: ElementRef, injector: Injector',
  `----- abstract methods - clear()| insert()| get()| indexOf()| detach()| move() 
    <br/>------ createComponent() | createEmbeddedView()
   `,
   `----- createEmbeddedView(templateRef: TemplateRef<C>, context?: C, 
     <br/>--------- options?:{index: number; injector?: Injector;}): EmbeddedViewRef<C>
     <br/>--------- creates a View
   `,
   `------- Ex using createEmbeddedView()
    <br/>@Componen  <br/>selector: 'sample',
    <br/>template: \`
    <br/>&lt;span>I am first span&lt;/span>
    <br/>&lt;ng-container #vc>&lt;/ng-container>
    <br/>&lt;span>I am last span&lt;/span>
    <br/>&lt;ng-template #tpl>
    <br/>--- &lt;span>I am span in template&lt;/span>
    <br/>&lt;/ng-template>
    <br/>\`
    <br/>})
<br/>export class SampleComponent implements AfterViewInit {
  <br/>@ViewChild("vc", {read: ViewContainerRef}) vc: ViewContainerRef;
  <br/>@ViewChild("tpl") tpl: TemplateRef<any>;
  <br/>
  <br/>ngAfterViewInit() {
  <br/>let view = this.tpl.createEmbeddedView(null);
  <br/>this.vc.insert(view);
  <br/>}
  <br/>}
   `,
   `---- createComponent(componentType: Type&lt;C>,
  <br/>options?:{index: number; injector?: Injector; 
  <br/>ngModuleRef?: NgModuleRef<unknown>;
  <br/>environmentInjector?: EnvironmentInjector|ngModuleRef?: NgModuleRef&lt;unknown>; 
  <br/>projectableNodes: Node[][];): ComponentRef&lt;C>
  <br/> creates a Component
 `,
 `------ Ex of using createComponent()
  <br/>@Component({
  <br/>selector: 'my-app',
  <br/>template: \`
  <br/>--- &lt;template #alertContainer>&lt;/template>
  <br/>-------- &lt;button (click)="createComponent('success')">Create success alert&lt;/button>
  <br/>-------- &lt;button (click)="createComponent('danger')">Create danger alert&lt;/button>
  \`,
  <br/>})
  <br/>export class App {
  <br/>@ViewChild("alertContainer", { read: ViewContainerRef }) container;
  <br/>---- constructor(private resolver: ComponentFactoryResolver) {}
  <br/>
  <br/>---- createComponent(type) {
  <br/>------- this.container.clear(); 
  <br/>------- const factory: ComponentFactory = this.resolver.resolveComponentFactory(AlertComponent);
  <br/>------- this.componentRef: ComponentRef = this.container.createComponent(factory);
  <br/>--- }
  <br/>}
 `,
   '-- shortcuts',
   `---- ngTemplateOutlet - marks a DOM el as a ViewContainer 
   `,
   `------ Ex using ngTemplateOutlet -
   <br/>
   <br/>@Component({
   <br/>--- selector: 'sample',
   <br/>--- template: \`
   <br/>-------- &lt;span>I am first span&lt;/span>
   <br/>-------- &lt;ng-container [ngTemplateOutlet]="tpl">
   <br/>-------- &lt;/ng-container>
   <br/>-------- &lt;span>I am last span &lt;/span>
   <br/>-------- &lt;ng-template #tpl>
   <br/>----------- &lt;span>I am span in template&lt;/span>
   <br/>-------- &lt;/ng-template>
   <br/>--- \`
   <br/>})
   <br/>export class SampleComponent {}
   `,
   `---- ngComponentOutlet - inserts an embedded view - created by template
   <br/> ----- creates a Host View - (instantiates a Component)  
   `,
   `------ use of ngComponentOutlet
   <br/>
   <br/>&lt;ng-container *ngComponentOutlet="ColorComponent">&lt;/ng-container>
   `,
   '--- use with ng-container',
   '--- use @ViewChild | @ConentChild',
   `--- @ViewChild VCF defn
   <br/>
   <br/>@ViewChild("vc", {read: ViewContainerRef}) 
   <br/>           vc: ViewContainerRef;
   `,
   `@ViewChild VCF Ex
    <br/>
    <br/>@Component({
    <br/>selector: \'sample\',
    <br/>--- template: \`
    <br/>------- &lt;span>I am first span&lt;/span>
    <br/>------- &lt;ng-container #vc>&lt;/ng-container>
    <br/>------- &lt;span>I am last span&lt;/span>
    <br/>\`
    <br/>})
    <br/>export class SampleComponent implements AfterViewInit {
    <br/>@ViewChild("vc", {read: ViewContainerRef}) vc: ViewContainerRef;
    <br/>
    <br/>ngAfterViewInit(): void {
    <br/>// outputs \`template bindings={}\`
    <br/>console.log(this.vc.element.nativeElement.textContent);
    <br/>}
    }
   `,
   `---- @ContentChild VCF defn
   <br/>@ContentChild(\'nameInput\', {static:false, read: ViewContainerRef }) 
                nameVarAsViewContainerRef;
`
    ],
    ['View DOM',   
    '--- component template',  
    '--- Template ref variables',
    '------ &lt;p #title>Hi&lt;/p>',
    ' -- ',
    `--- @ViewChild 
     <br/>------- can return many differet things eg ElementRef 
     <br/>------- is within the template of the Component
     <br/>------ configures a Vew Query
     <br/>------ 3 types to inject
     <br/>--------- 1: HTML - using ElementRef and nativeElement
     <br/>--------- 2: Component (Default) - 
     <br/>--------- 3: Directive
     <br/>--- uses the ngAfterViewInit LCH    
     `,
     '--- alt to ElementRef',
     '------ access a DOM element',
     '------ used with @ViewChild',
     '--- configures a Vew Query',
     '----- only sees template',
     '------ Queries the Comp template',
     '--- Metadata properties',
     '------ selector',
     '------ read',
     '------ static',
     '--- Selectors supported',
     '----- Component|Directive class',
     '----- temp ref var #cmp',
     '----- Any provider - service',
     '----- Provider string token',
     '----- TemplateRef',
     '--- read supports',
     '----- Comp/Dir class',
     '----- TemplateRef',
     '----- ElementRef',
     '----- ViewContainerRef',
     '--- static - boolean',
     '----- true - resolve before CD',
     '----- false - resolve after CD',
     '--- ngAfterViewInit LCH',
     ' -- ',
     '--- inject into Comp class',
     '----- refs to els from template',
     '--------- using ElementRef',
     '--- 3 types to inject',
    '--------  Wraps DOM el',
    '----------- @ViewChild(\'title\')',
    '-------------- title:ElementRef',
    '--------------- this.title.nativeElement',
    '--------------- Default - return a Component instance',  
    '---------------- @ViewChild(\'AComponent\')',
    '----------  aComp: AComponent',
    '--------------- Using 2nd arg - read',
    '--------------- { read: ElementRef}',
    '---------------- anEl: ElementRef',
    '----------- Injecting a Directive',
    '---------------- <input #pIP >',
    '---------------- @ViewChild(\'pIP\', {read: BDirective)',
    '---------------- colP: BDirective',
    '---------------- this.copP.xxx',
    ' -- ',
    '- @ViewChildren',
    '--- Queries multiple Children',
    '--- Queries the Comp templae',
    '------ gives a QueryList',
    ' -------- from View DOM',
    '---- QuearyList updated when',
    '------- Add | Remove | move',
    `--- ngAfterViewInit LCH
    <br/>------ after Angular has initialised Cpmponent's Views or ChildViews
    <br/>------ always the place to access DOM els
    `,
    `--- ViewContainerRef 
    <br/>------ lets you attach several views to it
    `
    ],
    [`Content DOM
    <br/>--- area within the selector fields in template
    <br/>-------- within the tags
    `,
    `--- @ContentChild - is within a Component tags
     <br/>------ within the Content DOM',
     <br/>------ Queries one child within Component or Directive tag
     <br/>--- @ContentChild(Pane) pane!: Pane;
       <br/>-- Initialize code in ngAfterContentInit LCH
    `, 
    '- Queries one child ',
    '--- within a Comp tag', 
    '--- Metadata properties',
    '------ selector',
    '------ read',
    '------ static',
    '--- Selectors supported',
    '----- Component|Directive class',
    '----- temp ref var #cmp',
    '----- Any provider - service',
    '----- Provider string token',
    '----- TemplateRef',
    '--- read supports',
    '----- Comp/Dir class',
    '----- TemplateRef',
    '----- ElementRef',
    '----- ViewContainerRef',
    '--- static - boolean',
    '----- true - resolve before CD',
    '----- false - resolve after CD',
    `--- set before ngAfterContentInit() Life Cycle Hook
    ----- for all the initialization code 
    `,
    ' -- ', 
    '- Queries multiple children'
  ],
 
  [`transclusion is Content Projection 
  <br/>--- initialized in ngAfterContentInit LCH 
  <br/>--- a pattern to insert/project content to use inside another Component 
  <br/>------- lets a Directive to make use of templates + add content to DOM 
  <br/>------- lets Directives generate dynamice data driven DOM instns 
  <br/>--- You can make reusable components 
  <br/>------- for scalable appns by inserting content into already created Comps/Dirs 
  <br/>------------ uses ng-content
  <br/>
  <br/>--- 3 types of Content projection - Single slot| Multi-slot| Conditional
  <br/>--- pattern to insert| project content to use inside another Component
  <br/>------ inside another Component
  <br/>--- eg a Component projecting data into a CardComponent
  <br/>------ uses &lt;ng-content>&lt;/ng-content>
  <br/>------ let Directives make use of templates + add content
  <br/>------ let Directives generate dynamic data driven DOM instans
  <br/>------ make reusable components
  <br/>----- Scalable appns 
  <br/>----- ngAfterContentInit LCH
  <br/>--------- No real DOM el
  `,
  ' -- ',
    `--- 3 types of Content Projection
  <br/>----- 1: Single | 2: Multi | 3: Conditional
    `,
    `------ Single Slot
    <br/>--------- content from 1 source 
    <br/>--------- &lt;ng-conttent>&lt;/ng-content>
    `,
    ' -- ',
    `------ Multi-Slot
    <br/>--------- content from multiple slots
    <br/>------------ using select
    <br/>------------ &lt;ng-content select="[quest]"
    `,
    ' -- ',
    `------ Conditional
    <br/>--------- Conditionally render content
    <br/>------------- ng-template to acceept dyn content
    <br/>----------------- not ng-content
    <br/>---------- Ex &lt;ng-template appExampleZippyContent>
    <br/>------------ It depends on what you do with it.
    <br/>---------- &lt;/ng-template>
    `,
    '--------- TemplateRef',
    '----------- [ngTemplateOutlet]',
    '------------- content.templateRef',
    ' -- ',
     '-- data types',
     '---- Inner HTML', 
     '---- HTML Elements',
     '---- Styled HTML', 
     '---- Other Components' 
     ],
     [`HTTP CRUD 
     <br/>--- Create | Read| Update | Delete 
     <br/>--- operations which the HTTP can use to manipulate data 
     <br/>-------- from a server
     `, 
     `--- HttpClient 
     <br/>----- performs HTTP requests 
     <br/>----- uses HttpClientModule from @angular/common/http
     `,      
     `--- based on XHR (XMLHttpRequest) - API consisting of an object 
     <br/>------ provided by the browser through its JS engine
     <br/>------ which can be used to transfer data between a web browser and web server in async way
     <br/>------ but without have to reload the whole page 
     `,
     `-- Fetch API (2017) - i/f for fetching resources (alt to XHR API) 
     - more powerful + flexible way to   
     <br/>--- based on Promises ( not callbacks) - we need to resolve the response object  
     `,
     '--- based on Promises',
     '--- Angulars mechanism for Communication with a remote Server over HTTP',
     '-- HttpClientModule - ',
     ' -- ',
     `--- HttpInterceptors 
     <br/>--- is a special Angular service 
     <br/>--- provides a way to intercept HTTP Requests and Responses 
     <br/>------- and modify them the way we wish
     <br/>------- can cache HTTP requests and responses - 
     `,
     '------- Service',
     '- intercepts an HttpRequest or HttpResponse',
     '- caches HttpRequests | HttpResponsee',
     `-- interface HttpInterceptor {
      <br/>    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
      <br/>}
      `,    
      `--- intercept(HttpRequest<T>, HttpHandler): Observable<HttpEvent> - 
      <br/>---- HttpRequest<T> - outgoing request object to handle,
      <br/>---- HttpHandler - next intercepter in the chain (or Backend)
      <br/>----- Objservable<HttpEvent> - Observable of event stream
      `,
      ' -- ',
     `HttpClientInMemoryWebApiModule 
      <br/>--- angular-in-memory-web-api - for Angular demos and tests 
      <br/>------- that emulates CRUD opns over a RESTify API -      
      <br/>--- is a library that intercepts Angular Http and HttpClient requests 
      <br/>------- that would normally go to the remote server
      <br/>------- and redirects them to an in-memory data store 
      <br/>---------- that you control on the frontend.
      <br/>
      <br/>--- angular/in-memory-web-api -  
      <br/>------ HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1000})   
      `,
      '--- Angular Demos | Tests ',
      '------  Emulates CRUD ops wrt REST',
      '------  in-memory data store',
      '--- npm install angular-in-memory-web-api --save', 
      '--- HttpClientInMemoryWebApiModule',
      '--- angular/in-memory-web-api'
      
  ],
  [`--- HttpClient
  
  `,
  ],
  [`--- HttpInterceptors
   

  `,

  ],
  ['appns vers custom libraries',
    '--- Appns',
    '--- use ng g library',
    '--- ng-packagr', 
    '--- ng g library', 
    '--- angular.json',
    '--- ng-packagr --',
    '--- package.json - ref to build path--', 
    '--- tsconfig.json',
    '--- lib sources in project/x',
    '--- Ivy and ngcc (Compatability Compiler) ',
    '--- Ang11 - Partial compilation - no need for ngcc'
    ],
    [`Caching 
    <br/>--- was initally developed to reduce the access time between the CPU and RAM 
    <br/>
    <br/>--- Cache memory is faster to access by the CPU wrt RAM because its physically stored inside the CPU
    <br/>
    <br/>--- Diff ways to implement caching 
    <br/>--- ng cache - 
    <br/>--- WebStorage
    <br/>--- Memoization
    <br/>--- ngrx store for states
    <br/>--- array that holds values
    <br/>--- HTTP Cache (Browser Cache) - browser uses cache but if nothing found then it goes to the server to fetch the resource  
    <br/>--- Service Workers in PWAs (Programmable Web Appns)
    <br/>
    <bt/>To stop use of cache in Angular
    <br/>ng build --output-hashing all 
    <br/>--- hash contents of generated files and append a hash # to file name 
    <br/>---- facilitates cache busting - (change to file - new hash)
    <br/>---- browser is forced to load a new file 
    `,
    '--- ng cache - on Hard Disk - caching project',
   ' -- ',
    `--- Memoization 
    <br/>------- optimization technique to speed up computer programs 
    <br/>----------- by storing results of exp ftn calls 
    <br/>----------- returning cached result when same input occurs again 
    <br/>
    <br/>
    <br/>
    <br/>-- impn in Angular - by ngrx - 
    `,
    ' -- ',
    `Stop caching by 
        <br/>--- ng build --output-hashing all 
    `,
    ' -- ',
    '--- ngrx',
    ' -- ',
    `- Http Caching (Browser Cache) - varies from browser to browser - 
      <br/>Google < 80MB - IE < 50MB Firefox < 50MB Safari < 20MB
    `,
    ` Browser Cache - saves content on your computer - and is controlled by the browser
    `,
    '-- Response Headers',
    '-- Cache expiry logic',
    ' -- ', 
    `- HTTP Cache - stores the response from a server and reuses the stored response for subsequent requests 
       - but when data on server is updated the data is stale and must be requested via HTTP again
      `,
    `-- Cache Control - HTTP header - requests and responses  `,
    ' -- ',
    `- Service Worker Caching - fixes many problems of AppCache - 
      <br/>
    `,
    `--- AppCache - file used by many web browsers to access web apps when no network is available
    <br/>- contains copies of resources needed by your appn - even when Refresh is pressed 
      <br/>but it made many assumptions and breaks if not what it expects 
      <br/>fixed by using Service Workers
    `,
    '---- HTML 5 Cache Manifest - 2014 - Obsolete '
    ],
    [`indexedDB and Cache
    `, 
    `- IndexedDB 
     <br/>------ (client side storage - on local disk 
     <br/>------ low level API for large amts of data - files and blobs) - 
     <br/>
     <br/>------ lets you persistently store data inside a user\'s browser 
     <br/>------ gives you rich (High Perf) query capabilities on and offline - indept of network      
     <br/>------ Is a transactional DB system - JS based Object Oriented DB - 
     <br/>------ Store and Retrieve objects - asynchronously - indexed with a key  
     <br/>------ Only limit is users disk size and OS - 
    `,
    '-- Blob objects - are simpler as we dont need to base64 encode them',
    `Web Storage - localStorage/sessionStorage - smaller amounts of data - less structured
    <br/>W3C and WHATWG and supported by all major browsers
    <br/>slightly faster than indexedDB 
    <br/>localStorage has a max memory of 5MB but sessionStorage is only ltd by the system memory -      
    `,
    `Cookies - the original way to store small amts of application data on a browser -
    <br/>main problem with Cookies was Security - search and browser history can be tracked - 
    <br/>max size of Cookie is 4KB but you can have 30 to 50 cookies stored - 120KB to 200KB     
    `,
    `Cloud Storage - lets you store digital data in an online space with multiple servers and locations - HDDs or SSDs  
    `
  ],
    [`- a smart fast extensible Build System 
    - Nx is a next generation build system with 1st class monorepo support + powerful integrations
    `,
    '- Nrwl/Nx',
    '-- Nx Monorepo',
    '-- smart', 
    '-- fast',
    '-- extensible',
    '-- nrwl/angular', 
    '-- nx monorepo', 
    '-- nx cli',
    '-- nx build', 
    '-- nx serve'
    ],
    [`CQRS - (Command Query Responsibility Segregation) - 
      <br/>--- pattern that separates Read | Update operations for a data store  
      <br/>------ can maximise the performance | scalability| security  
    `,
    'Indept Models wrt standard CRUD ops',
      `------ Read - Query that returns data
      
      `,
      `------ Update - Command that performs an Action
       
       `
  ,
  '--- Advantages',
  ``,
  `------ Performance - burdon on the data store`,
  `------ Scalability - Parallel operations`,
  `------ Security and Permissions - impropper context `,
  
  ],  
  [`ngrx
    <br/>--- Reactive State for Angular 
    <br/>
    <br/>--- a group of angular libraries for Reactive extensions 
    <br/>
    <br/>--- originating from CQRS(Command Query Responsibility Segregation)
    <br/>--- and Event driven systems - 
    <br/>------- 3 diff action types - Events | Document messages | Commands  
    <br/>
    <br/>--- Note dont use ngrx with GraphQL and Apolo client
    <br/>

    <br/>--- 3 main building blocks of ngrx
    <br/>-------- actions | reducers| selectors
    <br/>
    <br/>-------- actions - cause state transitions  
    <br/>-------- reducers - create a reducer for handling state transitions 
    <br/>-------- selectors - obtain slices of feature state 
  
    <br/>
    <br/>- inspired by the Redux pattern - derives state using RxJS and Observables
    <br/>----- State is derived from a single immutable Data Store - 
    <br/>------- with simpler faster OnPush CD 
    <br/>
    <br/>- Unidirectional - 
    <br/>
    <br/>- helps simplify appns with many user interactions and multiple data sources
    <br/>
    <br/>--- Features 
    <br/>------ 1: Serializability 
    <br/>------ 2: TypeSafety - using tsc (TypeScript compiler)
    <br/>------ 3: Encapsulation - using ngrx Effects and Store - any resource side effects - network requests | db access | business logic can be isolated from the UI - simpler components and helps SRP   
    <br/>------ 4: Testable - since store uses pure ftns (Reducers) for changing state and (Selectors) for selecting data from state and (Effects) to isolate side effects from UI - this simplifies testing - Ngrx provides special test methods - provideMockStore |   provideMockActions etc.
    <br/>------ 5: Performance - Store is built on single immutable data state - making CD (Change Detection) simpler using OnPush strategy. NgRx is also powered by Memoized selector ftns - optimizing  state query computations
    <br/>
    <br/>--- SHARI -<br/> 
    <br/>------ S: - Shared state that is accessed by many components and services
    <br/>------ H: - Hydrated state that is persisted and rehydrated from external storage 
    <br/>------ A: - Available state that must be available when reentering routes
    <br/>------ R: - Retrieved state that must be retrieved with a side effect
    <br/>------ I: - Impacted state that is impacted by Actions from other sources
        
    `,
    '--- ngrx is based around the RxJS library and Observables to make the data immutable',
    '------- BehaviorSubject - ngrx is based around the behaviorSubject',
    '--- appn State',
    '----- enforces a unidirectional sequence of operations ',
    ' -- ',
    '- 5 features - Serializablity | TypeSafety | Encapsulation | Testable | Performance',
    '-- Serializability', 
    '-- TypeSafety - using tsc (TypeScript compiler)',
    '-- Encapsulation - using ngrx Effects and Store - any resource side effects - network requests | db access | business logic can be isolated from the UI - simpler components and helps SRP',   
    '-- Testable - since store uses pure ftns (Reducers) for changing state and (Selectors) for selecting data from state and (Effects) to isolate side effects from UI - this simplifies testing - Ngrx provides special test methods - provideMockStore |   provideMockActions etc',
    '-- Performance - Store is built on single immutable data state - making CD (Change Detection) simpler using OnPush strategy. NgRx is also powered by Memoized selector ftns - optimizing  state query computations',
    ' -- ',
    `--- SHARI -<br/> 
    <br/>------ S: - Shared state that is accessed by many components and services
    <br/>------ H: - Hydrated state that is persisted and rehydrated from external storage 
    <br/>------ A: - Available state that must be available when reentering routes
    <br/>------ R: - Retrieved state that must be retrieved with a side effect
    <br/>------ I: - Impacted state that is impacted by Actions from other sources
      `,
      '--- Shared',
      '--- Hydrated',
      '--- Available',
      '--- Retreived',
      '--- Impacted',
  ' -- ',
  ' - Parts - Store | Reducer | Action | Selector | Effects',
      `- ngrx/Store is a library for managing the main appn State - uses StoreModule from @ngrx/store - StoreModule.forRoot({ spinner: reducer }),',
      <br/> A reactive state mgmt library powered by RxJS - manages flow of data through appn - actions dispatched - reducers act on them and mutate the Store
     `,
     '-- stores the data in an RxJS Observable inside an Angular Service called Store',
    ' -- ',
    `- Action - express state changes - acts as input to Reducer to produce new State and if async then to feed it to the effects library'
    <br/> --- store rel info for the state 
    <br/> --- reach the store via the dispatch() method on the store object - 
    <br/>
    <br/> --- Props - gives the payload with an action 
    <br/> ------- defines any extra metadata for handling an action  
    <br/> ----------- emptyProps() ftn - defines an action without payload within action group
    <br/>
    <br/>------- 3 diff action types - Events | Document messages | Commands  
    `,
     `------ Events - most recommended way to use Actions
     <br/>------ simplify tracing where the action is dispatched from 
     <br/>----- what has happened in the app - btn clicked | x updated  
     <br/>-------- can be used to inc scalability - handled by many reducers/effects
     `,
     `------- Document messages
     <br/>--- an entity has been updated 
     <br/>------- used to sync changes/behaviors in entities 
     `,
     `------- Commands
     <br/>------ we are explicit about how action should be handled - imperative control flow
     <br/>------ fast and simple to work with - low scale - dont scale
     <br/>------ for many to one communication 
     <br/>
     `,
     ' -- ',
     `---- Props - gives the payload with an action 
     <br/> ------- defines any extra metadata for handling an action  
     <br/> ----------- emptyProps() ftn - defines an action without payload within action group
    `,
    ' -- ',
     `--- createAction()
      <br/>------ creates a configured creator function returns an Object
      <br/>---------- Action creator - 
      <br/>-------------- provide a consistent | type safe way to constructor an action that is being dispatched 
      <br/>
      <br/> --- import { createAction, props } from "@ngrx/store";
      <br/>
      <br/>------ createAction&lt;T extends string, 
       <br/>--------- C extends Creator>(type: T, config?: C | { _as: "props"; })
       <br/>----------------: ActionCreator&lt;T>
       <br/>
       <br/>------ config: C | {_as : "props";}
       <br/>
       <br/>------ ActionCreator&lt;T, () => TypedAction&lt;T>>       
       <br/>
       <br/>No payoad
       <br/>export const opened = createAction('[Products Page'].Opened');
       <br/>
       <br/>2 ways to create Payload
       <br/>export const pageChanged = createAction('[Products Page] Page Changed',
       <br/>------ props<{page: number; offset: number}>() 
       <br/>);
       <br/>
       <br/>or using the props factory
       <br/>export const queryChanged = createAction('[Products Page] Query Changed',
       <br/>------ (query: string) => ({ query }) 
       <br/>);
       <br/>
       <br/>
       <br/>
       <br/>Problems solved by using createActionGroup()
       <br/>--- uses source | events - key-value pairs 
       <br/>
       <br/>export const ProductsPageActions = createActionGroup({
        <br/>source: 'Products Page',
        <br/>events: {
        <br/>// No Payload
        <br/>Opened : emptyProps(),
        <br/>  
        <br/>'Pagination Changed': props<{page: number; offset: number}>()
        <br/>
        <br/>'Query Changed': (query: string) => ({ query }) 
        <br/>}
        <br/>
        <br/>ProductsPageActions.opened();
        <br/>
        <br/>ProductsPageActions.pageChanged( page: 10, offset: 100})
        <br/>
        <br/>ProductsPageActions.queryChanged('ngrx'})
       <br/>})
       <br/>
       `,
    `--- createActionGroup(source, events[]) - new June 2022
    <br/>----- creates a group of action creators from 1 source
    <br/>--------- accepts an action group source and an event dictionary as input args
    <br/>------------ event is a key-value pair - event name + event props  
    <br/>
    <br/>--------- returns a dictionary of action creators 
    <br/>------------ name of each action creator - camel case event name
    <br/>------------ Pagination Changed - paginationChanged 
    <br/>
    <br/>------ import {createActionGroup, emptyProps, props} from "@ngrx/store";  
    `,
    '- Selector - Read state data - are pure functions for getting slices of the state from the Store - how appns listen to State Changes', 
    '- Effects - (side Effects - commn with ext API HTTP or dispatching another action  ) asynchronous parts of code which take effect after Reducer functions - DJ of the NGRX dancefloor', 
    ' -- ',
    `FeatureCreator
    <br/>--- uses the createFeature() ftn 
    <br/>---- reduces repetitive code in selector files 
    <br/>-------- dont need to create feature + child selectors
    <br/>
    <br/>---- type World = "world";
    <br/>---- type Greeting = \`hello \${World}\`;
    <br/>
    <br/>-------- selectors have a 'select' prefix
    <br/>-------- feature selector has a 'State' prefix
    <br/>
    <br/>------ uses the power of template literal types - TS4.1  
    <br/>----------- build on string literal types    
    <br/>-------------- expand to many strings via unions
    `,
    `- Reducer are pure functions 
    <br/>--- which take an action and output data to state or on to Effects (if async)
    <br/>
    <br/>--- are responsible for handling transitions from one state to another state
    <br/>------ determining which transitions to handle which actions based on the type
    <br/>
    <br/>--- createReducer()
    <br/>
    <br/>--- Registering root state 
    <br/>
    <br/>------- @NgModule({ 
      <br/>--------- import: [ StoreModule.forRoot({ game: fromScoreBoard.reducer})]
    <br/>----  --- }) 
    `,
    `--- createReducer()
    
    `,
    `--- Registering root state
    <br/>------- @NgModule({ 
      <br/>--------- import: [ StoreModule.forRoot({ game: fromScoreBoard.reducer})]
    <br/>}) 
    
    `,
    ' -- ',
    `Side effects - createEffects()
    <br/>--- asynchronous jobs - to call the services - action - new Reducer
    <br/>------ cant use Reducers for these - use effects
    <br/>
    <br/>--- npm install @ngrx/effects --save
    <br/>
    <br/>--- import { Actions, createEffect, ofType } from '@ngrx/effects';
    <br/>
    <br/>--- @Injectable()
    <br/>--- export class MovieEffects {
    <br/>
    <br/>--- loadMovies$ = createEffect(() => this.actions$.pipe(
    <br/>--- ofType('[Movies Page] Load Movies'),
    <br/>--- mergeMap(() => this.moviesService.getAll()
    <br/>---   .pipe(
    <br/>------     map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
    <br/>------      catchError(() => EMPTY)
    <br/>---   ))
    <br/>)
    <br/> );
    
    `,
    ' -- ',

    `-- Store Devtools - @ngrx/store-devtools - provides dev tools and instrumentation for Store - npm install @ngrx/store-devtools - StoreDevtoolsModule -  
    <br/>StoreDevtoolsModule.instrument({name: 'NgRx Demo App',logOnly: environment.production})     
    <br/> - Key benefit of Devtools is it gives us some immediate visual indication about what the appn is doing at all times  
    `,
    ' -- ',
    '--- Action Log - gives a good understanding of how appn works and which parts are trigered by which actions',
    '--- State inspector - easily inspect memory store state',
    '--- Time Travelling Debugger - Play button and timeline at the bottom - replay any action at a given pt in debugging session - nav gate through multiple screens  ',
    `---- Installation of ngrx/schematics 1st and then the ngrx/devtools
    <br/>- ng config cli.defaultCollection @ngrx/schematics 
    <br/>- then
    <br/>-- ng generate store AppState --root --module app.module.ts
    `,
    ' -- ',  
    `--- Entity data - 
    
    `,
    `--- Data 
    <br/>------ Simplifying the case for many CRUD operations
    `,
    `--- Component Store 
    <br/>------- if the state is confined to one Component 
    <br/>------------- then this can be used
    `,
    ' -- ',
    '-------- Auth0 SDK',
    ' -- ',
    `--- NgRx Ducks - @ngrx-ducks/core  
    <br/>----- a thin layer on top of ngrx 
    <br/>----- built to simplify working with ngrx
    <br/>--------- simpler Action handling
    <br/>------------  auto creates ActionCreators and Reducers for you
    <br/>--------- make selectors part of Duck service
    <br/>--------- intuitive and typed API  
    <br/>-------------- lets you dispatch actions + select data from Store
    <br/>--------- fully compatable with NgRx 
    <br/>--------- Schematics in Ducks Library to auto gen Duck for you 
    <br/>
    <br/>--- uses @StoreFacade 
    <br/>--- uses @StoreChunk
    `,  
    `--- @StoreFacade 
    <br/>------ accepts a confign 
    <br/>----------- Reducer regd in Store
    <br/>------ can be generically Typed 
    <br/>------ produces a TreeShakable provider  
    <br/>------ no need for StoreModule.forFeature  
    <br/>---------- setting up feature and reducer is done automatically  
    
    `,
    `--- @StoreChunk
    <br/>------ solves 2 problems - 
    <br/>---------- 1: Connecting ducks and selectors with the store
    <br/>---------- 2: Registering the Facade as a service in Ang IoT container
    <br/>
    <br/>import { StoreChunk } from '@ngrx-ducks/core';
    <br/>
    <br/>add = createDuck('[Counter] Add', (state: Counter, payload: number) => {
    <br/>---  return {
    <br/>------    ...state,
    <br/>------    count = state.count + payload
    <br/>--- }
    <br/>});
    <br/>}   
    `,
    `--- Feature with Multiple Reducers
    <br/>------ A Feature can have multiple reducers
    <br/>--------- ngrx would need ActionReducerMap&lt;T> for multiple reducers 
    <br/>------ 
    <br/>
    <br/>export interface CounterFeatureState {
      <br/>--- simple: CounterState,
      <br/>--- complex: ConterComplexState
    <br/>}
    <br/>
    <br/>@StoreChunk<CounterFeatureState>({
      <br/>--- feature: 'counter',
      <br/>--- slice: 'simple',
      <br/>--- defaults 
    <br/>})

    `

    ], 

    [' -- '],
    ['install from GitHub', 
    'npm install to create the node_modules folder'],
    [`Core libraries`,
      `- @angular/core - imps Angular core functionality - low level services and utilities  
        <br/>BrowserModule - included auto in root AppModule when create a new app with CLI
        <br/>defines class structure for Components | view hierarchies | CD | Rendering | event handling
        <br/>defines the decorators for metadata
        <br/>defines infrastructure for DI | i18n | testing | debugging
      `,
      `--- @angular/common - 
      <br/>------ imps basic Angular framework functionality 
      <br/>------ directives | pipes |  
      <br/>------ exports are re-exported by BrowserModule - included in the root AppModule wrt Ang CLI
      `,
      ' -- ',
      `--- CommonModule - 
      <br/>----- exports all the basic Angular directives and pipes 
          <br/>- defines template binding directives *ngIf | *ngFor | *ngSwitch
          <br/>- and pipes - DecimalPipe | 
          <br/>- location services used in routing | HTTP services | localization support
          <br/>--- Re-exported by the BrowserModule - 
            `,
            '---- default template Directives',
            '------- NgClass - ',
            '------- NgComponentOutlet - ',
            '------- NgForOf - ',
            '------- NgIf - ',
            '------- NgPlural - ',
            '------- NgPluralCase - ',
            '------- NgStyle - ',
            '------- NgSwitch - ',
            '------- NgSwitchCase - ',
            '------- NgSwitchDefault - ',
            '------- NgTemplateOutlet - ',
           
            '---- default pipes',
            '------- AsyncPipe - ',
            '------- CurrencyPipe - ',
            '------- DatePipe - ',
            '------- DecimalPipe - ',
            '------- I18nPluralPipe - ',
            '------- I18nSelectPipe - ',
            '------- JsonPipe - ',
            '------- KeyValuePipe - ',
            '------- LowerCasePipe - ',
            '------- PercentPipe - ',
            '------- SlicePipe - ',
            '------- TitleCasePipe - ',
            '------- UpperCasePipe - ',
            ' -- ',
            '---- location services used in routing | HTTP services | localization support',        
      `- @angular/compiler - ngc - is the tool used to compile Angular appns and the Libraries
       <br/>built on top of the TypeScript compiler (tsc) - extended for Angular decorators etc      
        <br/>serves as a bridge between the developer and the runtime - ngc translaes the Ang code into efficient runtime instns
       `,
       '---- ngc',
      '- @angular/browser - loaded into the root folder automatically when creata a project with ng new xxx',
      '--- BrowserModule',
      ' -- ',
      `- @angular/router - imps the Angular router service - enables navn from 1 view to the next wrt appn tasks
      <br/>Defines the Route object that maps a URL path to a Component
      <br/>and RouterOutlet directive - places a RoutedView in a template 
      <br/>+ a complete API for configuring | querying | controlling router state  
      <br/>import { RouterModule } to use the Router service in apps   
      `,
      '--- RouterModule',
      ' -- ',
      `- @angular/platform-browser - supports exec of Ang apps on diff browsers 
      <br/>library for using Angular in a web browser
      <br/>BrowserModule - included by default  
      <br/>Ang 14 Standalone Components - 
      <br/>- bootstrapApplication()
      `,
      '--- main.ts',  
      `------ @angular/platform-browser-dynamic 
      <br/>- for using JIT with Angular in a web browser 
      <br/>eg Bootstrapping 
      `,
     '--------- bootstrapApplication()',
      ' -- ',
      '- @angular/forms',
      '--- FormModule',
      '--- ReactiveFormsModule',
      ' -- ',
      '- @angular/animations',
      '--- AnimationsModule',
      ' -- ',
      '- @angular/material',
      '- @angular/cdk',
      '--',
      '- @angular/cli - CLI tool for Angular - initialize | develop | scaffold | maintain Ang apps',
      '- @angular/compiler-cli - Compiler CLI for Node.js',
      `- @angular-devkit/build-angular - Webpack build facade - 
      <br/>package contains Architect builders used to build + test Ang Appns + libraries
      `,    
    ],
    [`GIT
    <br/>--- distributed VCS| decentralized| share devs work between teams| revert back to snapshot
    <br/>--- working dir| staging area (index)| local repo| remote repo| git clone| local repo
    <br/>--- git init| .git folder| git config| branches| .gitignore 
    <br/>--- git add| staging| git status| git restore --staged login.js
    <br/>--- git commit| local repo| git push | remote repos - git remote lists remote repos like Master 
    <br/>------- git reset long-hash
    <br/>-------- moved to not staged area   
    <br/>--- branches - git branch my-login  | git commit | git checkout my-login|
    <br/>-------- HEAD on Master or  if my-login then HEAD points to that
    <br/>--- git log - gives the history of project commits
    <br/>--- git remote add and git push and git commit - git remote 
    <br/>--- merge  conflicts and fixing   
    <br/>--- Stashing - saves working directory and staged changes
    <br/>--- Forking - creates a completely indept copy of a remote repository 
    <br/>--- Cloning - copies a local or remote repo which is synchronised with the local or remot repository   
    <br/>
    <br/>--- Object DB -     
    <br/>
    <br/>--- is a free open source distributed VCS (Version Control System) 
    <br/>-------- decentralized - devs dont need to be on same OS or network
    <br/>--- designed to handle small to large projects with speed and efficiency
    <br/>--- coordinates work between multiple developers
    <br/>--- 3 parts - working directory | staging area (index) | local repository
    <br/>--- git init - .git folder and .gitignore folder for to ignore folders or files
    <br/>-------- it just stores files in the .git folder
    <br/>--- staging of files before a commit - 
    <br/>-------- using the add command - staging area is called the index
    <br/>--- staged changes - with git add login.js or git add . but then 
    <br/>-------- unstage git restore --staged login.js   
    <br/>--- commit - history of project - who made what changes and when
    <br/>-------- snapshots of files 
    <br/>-------- each commit is stacked on top of each other 
    <br/>-------- git reset long-digits  - removes the commits above it
    <br/>-------- visit a snapshot at any time
    <br/>-------- revert back to a commit at any time 
    <br/>--- local and remote repositories 
    <br/>-------- make changes to local repos and push to a remote - github| BitBucket
    <br/>------------ github - allows us to host git repositories
    <br/>-------- Once you push data to remote folder - other devs can pull your changes
    <br/>--- git remote add origin https://github.com/gordoncumming/myappsimple
    <br/>-------- git push -u origin master |  git remote - gives all remote files and repos
    <br/>--- merge conflicts - when other people have modified same file as you
    <br/>--- branches - git branch abc | git checkout abc  | HEAD changes o abc
    <br/>-------- work on your own branch before merging with Master  
    <br/>-------- git checkout -b abc - same as git branch 123 and git checkout 123
    <br/>--- stashing - git stash takes the dirty state of working directory and staged changes
    <br/>------- before you change to a diff branch to continue other work
    <br/>------- saves it to a named stash for returning later
    <br/>
    <br/>--- has an Object DB - 
    <br/>--- GUI git 
    <br/>--- git bash (linux envt on windows)  | SSH keys so you dont need to enter username|pwd
    <br/>
    <br/>--- Distributed Revision Control System 
    <br/>------- A bit more complex wrt SubVersion client server system
    <br/>------- contains History | Branches | Merges | 
    <br/>------------ Conten Tracker - tracks files or directory changes
    <br/>------------ Maps keys to values - stored on Git
    <br/>-------------- Persistent Map 
    <br/>-------------- Keys use SHA1 hash 
    <br/>----------------- Every value (a file) has its own SHA1 hash
    <br/>-------------- 20 bytes or 40 hex digits 
    <br/>------------ a filname + permissions are stored in the tree that points to the blob
    <br/>---------------  A blob is the content of a file
    <br/>
    <br/>--- git config --global user.name 'Gordon Cumming'
    <br/>--- git config --global user.email 'dynaphoneimages@hotmail.com'
    <br/>--- add/remove staging area - git add index.html |  git rm --cached index.html
    <br/>--- git add . to add everything and git status then git commit message
    <br/>--- git commit -m "My changes" 
    <br/>--- branches - MASTER - git branch my-login | git commit -m "another change"
    <br/>--- switch branches - git checkout my-login  | git checkout master | git merge login    
    <br/>git remote and git push  
    <br/>
    <br/>--- Object Database (git/objects directory)
    <br/>-------- gives unique key that refers to that data object 
    <br/>-------- git hash-object - returns key (simplest form) 
    <br/>-------- open .git 
    <br/>------------ where git stores all data wrt project 
    <br/>------------ contains
    <br/>---------------- HEAD
    <br/>---------------- config
    <br/>---------------- description
    <br/>---------------- hooks/
    <br/>---------------- info/
    <br/>---------------- objects/  
    <br/>-------------------- 4 types - blobs| trees| commits| annotated tabs
    <br/>------------------------ 1: blobs - Content of object as binary data
    <br/>------------------------ 2: trees - list of named refs to other objects
    <br/>------------------------------- eg blobs | trees| commits
    <br/>------------------------ 3: commits - lots of info
    <br/>------------------------------- are full snapshots in time 
    <br/>------------------------------- refs to parent commits  
    <br/>------------------------------- Author and Commitee info
    <br/>------------------------------- ref to a tree 
    <br/>------------------------------- commit message
    <br/>---------------------------------- git cat-file -t longstringof hex gives tree or something
    <br/>---------------------------------- git cat-file -p longstringof hex gives other info like filename| auhor| etc
    <br/>------------------------ 4: (Annotated) tags
    <br/>------------------------------- message - ref to the object 
    <br/>
    <br/>-------------------- 3 file States in git
    <br/>----------------------- 1: modified
    <br/>----------------------- 2: staged
    <br/>----------------------- 3: committed
    <br/>
    <br/>--- has 3 parts 
    <br/>------ 1: Working tree 
    <br/>------ 2: Staging area (Index) 
    <br/>------ 3: Local repository 
    <br/>--------- Remote repository - 
    <br/>
    <br/>------- git repository 
    <br/>------------ tracks and saves the history of all changes made to files
    <br/>------------ saving data in folder called .git (Repository folder  )   
    <br/>----------------- can have multiple branches 
    <br/>------------ stores data but also metadata - data about the data
    <br/>----------------- Commits | trees| blobs
    <br/>------- a branch is a version of your repository 
    <br/>------------ an indept line of devt
    <br/>
    <br/>---------- git init cmd
    <br/>------------- .git folder - history of project
    <br/>----------------- git init --bare (remote repo is a bare one)
    <br/>----------------------git push -u file:///path/to/remote/ --all
    <br/>
    <br/>--------------- write some code - multiple files
    <br/>--------------- git add 
    <br/>--------------- git commit   
    <br/>
    <br/>
    <br/>------ filesystem vs repository
    <br/>
    <br/>--- Commands
    <br/>-------- Porcelain commands (user friendly)
    <br/>-------- Plumbing commands (low level)
    <br/>
    <br/>--- git init - .git folder 
    <br/>
    <br/>--- Git Commits - 
    <br/>
    <br/>--- Branches - part of everyday devt process 
    <br/>------ A pointer to a snapshot of your changes 
    <br/>------ spawn a new branch to make changes 
    <br/>
    <br/>------ git branch -a 
    <br/>---------- tells you of all the branches in your repository

    <br/>------ Orphans
    <br/>----------- branches have no parents (git history)
    <br/>----------- to share branche with no history 
    <br/>----------- starts with a diff root commit - first commit
    <br/>----------- git checkout —orphan new_branch_name.
    <br/>------------git --rm --rf (removes a file recursively and forcefully)
    <br/>
    <br/>----------- git --prune 
    <br/>------------------ not connected to any other branches and left unused 
    <br/>------------------ removes orphaned branches
    <br/>
    <br/>----------- git cache
    <br/>------------------ git --rm --cached (one file or entire working directory)
    <br/>---------------------- git --rm --cached  
    <br/>
    <br/>--- Forking - creates a indept copy of a Git repository 
    <br/>
    <br/>--- git clone 
    <br/>---- creates a linked copy that will continue to sync with the target repo
    <br/>
    <br/>- Stashing - lets you change to a diff project 
    <br/>---- and store the current staged file info 
    <br/>
    <br/>- Staging area (Index) and Committing -  
    `,
      `--- 3 Parts 
      <br/>------ 1: Working directory  
      <br/>------ 2: Staging area  
      <br/>------ 3: Local repository
      <br/>----------4: Remote repository
      `,
      ' -- ',
      `--- Working directory 
      <br/>------ current work files 
      <br/>--------- history of all the files + changes
      <br/>--------- is where a repository is checked out
      <br/>------------working tree reps its status
      <br/>------ current state of project
      <br/>---------- including any changes that have been made to files
      <br/>---------- git init cmd
      <br/>------------- .git folder - history of project
      `,
      ' -- ',  
      `--- Staging area 
      <br/>------- holds files to be used in the next commit 
      <br/>------- lets git know what file changes will exist in next commit
      <br/>------- Git index - a crucial Git data structure
      <br/>------- Staging Area between files on Git filesystem and commit history 
      <br/>----------- Prepare Commits
      <br/>-------------- files for next commit
      <br/>----------- Git add - adds a change in working directory to Staging Area
      <br/>------------ Nothing changes until the git commit
      <br/>---------------- adds to Staging Area',
      <br/>-------- hashes WT files',
      <br/>------------- stored as Objects in Staging Area',     
      `,
       `--- Local Repository
       <br/>------ Local computers
       <br/>-------- git Push
       `,
       ' -- ',  
       `--- Remote Repository',
       <br/>------ Server for Team',
       <br/>--------- git Pull
       `,
       ' -- ', 
      `--- Commands
      
      
      `,
      `------- Porcelain Commands
      <br/>-------
      `,
       `--- Git commit 
      <br/>------ save Staged Changes to the local repository
      <br/>------ 
      `,
      `--- Squash commits
      <br/>------ Combine multiple commits into one
      <br/>---------- most often done when merging branches
      <br/>---------- Can be done using interactive rebase cmd
      <br/>
      <br/>------ is a way to rewrite Commit history 
      <br/>---------- helps to clean up and simplify the Commit history 
      <br/>---------- before sharing work with team members
      <br/>
      <br/>------ merge it back into default branch 
      `,
      `------ git merge history 
      <br/>--------- simplified by merging of commits into one 
      `,
      `------ Squash Merging 
      <br/>-------- means combining lots of commits into one on the default branch 
      <br/>-------- before you merge it - means a much simpler history 
      
      `,
      '----- Staged changes',
      '------- Name changes',
      ' -- ',
       `--- Branches
       <br/>------ lightweight movable ptr   
       <br/>------ Commits
       <br/>------ Snapshot of changes
       <br/>------ New branch per change
       <br/>-------- default = master
       <br/>---------- MASTER
       <br/>----------- naming for Branch
       
       <br/>----- after clone
       <br/>------- Local Repo - Master
       <br/>--------- Repos default Branch   
       <br/>------- View branches   
       <br/>------- local - git branch
       <br/>----- remote - git branch -r
       <br/>----- all - git branch -a
       `, 
       ' -- ',
        `--- git checkout
         <br/>------ switch to feature branch
         <br/>------ only 1 branch checked out
         <br/>------ HEAD branch
         <br/>--------- active = current
         <br/>--------- navitate between branches
         <br/>--------- updates files Work Dir
         <br/>------ working dir = branch
         <br/>------ record all new commits
         <br/>------ HEAD = branch name
         <br/>------ attaches to master
         `,         
         `--- HEAD wrt Commit
         <br/>------ points to latest commit of a branch  
         <br/>--------- repos heads in path -   ./git/refs/heads/
         <br/>-------------- one file for each branch 
         <br/>-------------- each file has Commit ID of latest Commit
         `,
         `--- switch
         <br/>------ to move to a new branch 
         <br/>----------- instead of using checkout (older)   
         `,
          ' -- ',
       `--- Fork 
       <br/>------- is a copy of a repository 
       <br/>----------- completely indept copy of a repo (not linked)',
       `,
       ' -- ',
       `--- git clone - 
       <br/>------ a git clone op exec on remote repo -  
       <br/>------ server repo
       <br/>--------- linked copy of repo
       <br/>------- hosting service
       <br/>----------- BitBucket
       `,
       ' -- ',
       `--- Stash
       <br>------- temp Shelves changes
       <br/>------ record Work directory + index (Staging Area)
       <br/>------ Cleans Working directory
       `,
       ' -- ',
       `--- Git Model 
       
       `,
        ' -- ',    
        '--- Commands - ',
        `------ init - 
        <br/>
       
        `,
       `------ Add - 

        `,
        `------ fetch - 
        
        `,
        `------- branch - 
        <br/>------ Creates a new branch 
        <br/>
        <br/>------ 3 types of branches
        <br/>---------- 1: Production
        <br/>---------- 2: Latest working
        <br/>---------- 3: Feature (any code)
        `,
        `------ checkout -
        <br/>--------- switches to feature branch 
        <br/>------ 
        `,
        `------ commit - 
        <br/>-------
        `,
        `------ push 
        <br/>
        
        `,
        `------ pull - 
        <br/>
        `,
        `------ log - 
        <br/>--------- lists commands reachable from following parent(s)
        <br/>--------- Q to exit log
        `,
        '----------- Q to exit',
        `------ status -
        <br/>------- displays the state of the Working Directory and Staging Area 
        <br/>------------ gives the working tree 
        <br/>
        <br/>------- lets you see 
        <br/>-------------which commits have been staged     
        <br/>-------------which commits have not been staged 
        <br/>-------------which files are not being tracked by git    
        <br/>
        <br/>-------- but not any commit history info  
        `,
        `------ bisect
         <br/>------ search for failed commits 
        `,
        `
        <br/>--- Plumbing commands 
        <br/>------- hash-object, 
        <br/>----------- echo "Applie Pie" | git hash-object --stdin
        <br/>----------- prints out the hash for the string
        <br/>
        `,
        `--- Merge 
        <br/>------ joins 2+ development histories together  
        <br/>------ git merge topic
        <br/>--------- replays changes made to topic branch since it diverged from Master  
        <br/>--------- until its current commit
        <br/>--------- and record result in a new commit + names of 2 paren commits  
        <br/>------------- along with a log message from user describing changes  
        `
    ], 
    [`Environment Variables
     <br/>--- User Variables for dynap
     <br/>--- System Variables 
    `,
    `--- User Variables for dynap
    <br/>------ 
    `,
    `--- System Variables
    <br/>------
    `],
    [`Testing 
     <br/>--- Unit | Integration | End to End | Mocking | AAA 
    <br/>

      <br/>--- Tools 
      <br/>--- Unit Testing -  Jasmine | Karma 
      <br/>--- Integration Testing - 
      <br/>--- End to End Testing - Protractor  | Cypress
      <br/>
      <br/>--- is very important to ensure the validity of your programs and that there are no problems with the code!
      <br/>--- There are three forms of test 1: Unit 2: Integration 3: End 2 End
      <br/>
      <br/>--- Test Environments
      <br/>------ 1: Devt - Development Server - using an older copy of production server
      <br/>------ 2: Staging - using has a recent copy of production server 
      <br/>------ 3: Production - Production Server - not for testing
      <br/>
      <br/>--- Unit testing 
      <br/>------ is the simplest and most important type of testing. 
      <br/>------ It normally involves Jasmine and the Karma (Test runner)
      <br/>------ Jasmine spies are very useful for mocking parts of the Angular Component structure 
      <br/>
      <br/>---- TestBed tool 
      <br/>------ is used to create dummy components in a live envt etc 
      <br/>-------------- Jasmine spies -
      <br/>------ Async and fakeAsync - take adv of Zone.js to test async code
      <br/>------ MockBackend - helps in testing code which makes HTTP calls
      <br/>------ HttpInterceptor - can help with HTTP calls 
      <br/>
      <br/>------- AAA (Arrange Act Assert)
      <br/>
      <br/>
      <br/>--- Integration testing - 
      <br/>------- Testing components with children and or services
      <br/>
      <br/>------- has 2 types - shallow and deep 
      <br/>------- Shallow integration testing 
      <br/>------------- is where the child components are simple
      <br/>
      <br/>------- Deep integration testing 
      <br/>------------- is where child components have dependecies like services
      <br/>
      <br/>--- End to End testing 
      <br/>------- testing the full workflow as if a user has clicked a button
      <br/>------- using a Staging Server with recent copy of production server - wrt mocks 
      <br/>------- is not so important but using Protractor and the more modern Cypress
      <br/>
      <br/>------- Protractor 
      <br/>------------ has a page object to be shared across diff components - 
      <br/>------- Cypress - more modern 
      <br/>------------ has a time travelling debugger 
      `,
      `--- Test Environments
      <br/>------ 1: Devt - Development Server - using an older copy of production server
      <br/>------ 2: Staging - using has a recent copy of production server 
      <br/>------ 3: Production - Production Server - not for testing
      `,
      
    'PoC - Proof of Concept',
    '--- Unit testing', 
    '-------- spec.ts', 
    '-------- describe', 
    '------------ beforeEach()', 
    '------------ it - fit - xit', 
    '------------ afterEach', 
    `--- TestBed
    <br/>------- is used to dynamically create an Angular Test Module   
    <br/>------- emulating an @NgModule 
    <br/>--------TestBed.configureTestingModule()
    <br/>----------- takes metadata that have most properties of @NgModule
    <br/>
    `, 
    `--- ComponentFixture
     <br/>------ is a test harness for interacting with created components and its element
     <br/>------ access the Component instance via the fixture and confirm it exists 
     <br/>----- Note DebugElement.nativeelement has any type 
     <br/>
     <br/>---- ComponentFixture | DebugElement | QuerySelector | nativeelement | 
     <br/>
     <br/>
     <br/>----- describe('BannerComponent (with beforeEach)', () => {
     <br/>-----  let component: BannerComponent;
     <br/>----- let fixture: ComponentFixture<BannerComponent>;
     <br/>
     <br/>----- beforeEach(() => {
     <br/>----- TestBed.configureTestingModule({declarations: [BannerComponent]});
     <br/>----- fixture = TestBed.createComponent(BannerComponent);
     <br/>---------   component = fixture.componentInstance;
     <br/>----- });
     <br/>
     <br/>-----it('should create', () => {
      <br/>--------- expect(component).toBeDefined();
     <br/>-----});
     <br/>
     <br/>----- it('should contain "banner works!"', () => {
     <br/>--------- const bannerElement: HTMLElement = fixture.nativeElement;
     <br/>--------- expect(bannerElement.textContent).toContain('banner works!');
     <br/>----- });
    `,
    '-------- Jasmine', 
    '-------- Karma'  , 
    '-------- Mocking', 
    '-------- Wallaby', 
    
    `------- AAA (Arrange Act Assert)
    <br/>---------- Arrange
    <br/>---------- Act
    <br/>---------- Assert
    `,
    ' -- ',
    '--- Integration',
    '------- Shallow',
    '------- Deep', 
    ' -- ',
    '--- End to End', 
    `-------- Protractor
    <br/>---------- shared file
    `, 
    `-------- Cypress
    <br/>---------- ng add @cypress/schematic
    `
    ],
    [`--- Unit Testing
    <br/>------- tests an individual Component 
    <br/>----------- with other services etc being mocked
    <br/> 
    `
    ],
    [`--- Integration Testing
     <br/>------- lets you test 2+ units that work together
     <br/>------------- to perform a specific task  
     <br/>------------- eg Test component sends/receives correct data from a service 
     <br/>------- often requiring use of ext network or db
     `,
   `-------- Shallow IT
   
   `,
   `-------- Deep IT
   
    `
    ],
    [`--- End to End Testing
    <br/>------ tests a workflow of appn frm start to finish
    <br/>------ test for actions that real users can perform on appn
    <br/>------ simulating click of a button etc.
    <br/>------ utilizing actual services etc.

    
    `,
   '------- Protractor',
   '------- Cypress'
    ],
    [`TDD Test Driven Devt - 
    `, 
    '- Test First fail',
    '- refactor',
    '--- pass',
    ' -- ',
    `--- BDD - Behavoral Driven Design 
    <br/>------ eases conversion of user features specns to code reqd to imp them
    <br/>
    `,
    '-- narrows gap between Business features and S/W impn',
    '-- assumes team is agile - enhances existing agile processes',
    '-- Cucumber',
    '-- Rapid Iterations',
    '-- 3 Step Practice',
    '---1: Small change to system - User Story - discuss',
    '---2: document change - examples',
    '---3: implement Behavior in S/W - start with automated test to guide devt',
    '-- or ',
    '--- User Story',
    '--- Discovery - what it could do', 
    '--- Formulation - what it should do',
    '--- Automation- what it actually does','--- Working S/W',
    ' -- ',   
    `--- DDD Domain Driven Design - S/W design focusing on modeling S/W to match a domain wrt input from business experts
    <br/>
    `,'- Business Domain',
    '--- OO (Object Oriented) class | properties | methods - match business names',
    '-- connects impn to an evolving model',
    '--- Goals',
    '------ primary focus on domain and domain logic',
    '------ base complex design on domain model',
    '------ init creative collabn between technical and domain experts to iteratively refine a model wrt domain problems',
    ],
    ['Why Design', 
    '- SOLID',
    '-- A Class should have 1 and only 1 (Job) reason to change',
    '-- Open for extension but Closed for modification',
    '-- Every subclass - Generics - should be able to replace the base (Parent class)',
    '-- Never imp an Interface you dont use - nor methods they dont use',
    '-- Entities must depend on the abstraction (not Concreations)   ', 
    ' -- ','Dont Repeat Yourself', 
    ' -- ',' Dep Injection is important for Scalability - large appns - Services injected into many Components', 
    ' -- ',
    `--- ensure there is only 1 instance of the class 
     <br/>--- getInstance or DI system 
     <br/> Services defined in the root (not those in Components which are instantiated for each Component)
    `,  
    ' -- ','- Instantiate diff child objects - of same parent Class dept on conditions - <br/>Object Creation Interface',    
    ' -- ','- alternative to Subclasses for extending an Object - Composition instead of Inheritance<br/>An object which wraps another Object',  
    ' -- ','Lazy Pattern',
    ' -- ','Composition Pattern'
    ],
    [`Angular Security -   
      --- XSS | CSRF - Dom Sanitiser -   
      <br/>------- Security related info about the pages - 
       <br/>------ checks + verifies security of certificate + connection
       <br/>------ Also unencrypted resources
    `, 
    '--- XSS (Cross Site Scripting Vulnerability) - allows attacker to control users appn in browser',
    '------ Angular auto-escaping for {{}} interpolation', 
    '--- CSRF = XSRF (Cross Site Request Forgery) exploits users security by sending an unwanted request to server wrt cookies',
    '--- CSRF - cookie-to-header token - protected by server side appn generates token to protect against CSRF attacks',
    '--- HttpClientXsrfModule.withOptions({cookieName: \'XSRF-TOKEN\',headerName: \'X-XSRF-TOKEN\'})',
    '------- Strings are replaced by their text values', 
    '------- is the inspection of untrusted values - turning it into a safe to use in DOM value - Angular auto sanitizes untrusted values for HTML|styles|URLs ',
    '--- DomSanitizer - used to allow code through',
    '--- constructor(private sanitizer : DomSanitizer) {} - getHtmlSnippet() {let safeHtml = `<img src="..." oerror="alert(\'Failed to load image\')">`;return this.sanitizer.bypassSecurityTrustHtml(safeHtml);}', 
    '--- using Observables for data instead of the actual data - means the code cant be accidentally changed', 
    '--- JSON Web Tokens - appn talks to server that produces Token - passed as Authorization Header to prove authentication', 
    '- OWASP - a foundation works to improve security of S/W ', 
    '- npm install -g snyk - snyk test - tracks over 23 security vulnerabilities for Angular related Modules'],
    [`Authorization and Authentication
    `,
      `--- Authentication 
      <br/>------ is the process of matching web appn visistor
      <br/>---------- with identity (username and pwd)
      <br/>------ recognizing users identity
      <br/>
      <br/>------ JWT and auth-0 can be used for Authentication
      `,
      `------ JWT (JSON Web Tokens)
      <br/>------- conpact and self contained way for 
      <br/>------------ securely transmitting info between parties as JSON object      
      <br/>------- info can be verified and trusted as its digitly signed
      <br/>--- Each JWT contains encoded JSON objects - set of claims
      <br/>------- cryptographic algorithm to ensure claims cant be altered

      `,  
      `------ auth-0
      
      `,
      ' -- ', 
      `--- Authorization
      <br/>------ giving permission to user to access a certain resource in system
      <br/>------ User must he authenticated for authorization- 
      `,
      `------ Authorization Guards
      <br/>------ prevent unauthorized users from accessing web page | resource
      <br/>---------- when they are not supposed to see 
      <br/>---------- and redirect them     
      <br/>-------------- using a service
      <br/>
      <br/>@Injectable()
      <br/>export class AuthGuard {
      <br/>
      <br/>--- constructor(private authService : AuthService, private router : Router) {}
      <br/>
      <br/>--- canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {
      <br/>    
      <br/>--- if(this.authService.isLoggedIn()) return true;
      <br/>--- // else navigate to login
      <br/>--- }
      <br/>}
      <br/>
      <br/>const routes: Routes = [
        <br/>---  {
        <br/>-----    path: '',
        <br/>-----  component: HomeComponent
        <br/>--- },
        <br/>--- {
        <br/>------  path: 'todos',
        <br/>------  component: TodosComponent,
        <br/>------  canActivate: [AuthGuard]
        <br/>--- },
        <br/>--- {
        <br/>------  path: 'blog',
        <br/>------  component: BlogComponent,
        <br/>------  canActivate: [AuthGuard]
        <br/>--- }
      <br/>];
      `,
      `--- Auth0
       <br/>------- is an open std for Authentication and Authorization 
      `,
      
    '- Auth0', 
    '- OAuth2'
    ],
    [`Node.js - 
    - run time envt that allows us to load JS appns into the server directly
    - for small and mid sized appns where the data matters 
    `, 
    'http://nodejs.org',
    '- run time envt that allows us to load JS appns into the server directly',
    `- for small and mid sized appns where the data matters`,
    `- Chrome V8 JS Engine - is Googles open source high perf JS and WebAssembly engine written in C++
      <br/>- used in Chrome and Node.js
    `,
      '-- Chrome',
      '-- Node.js',
      `----- nodemod - CLI    
      <br/>-------- simple monitor script for use during devt of a Node.js app
      <br/>-------- Restarts appn when file changes in dir are detected
      <br/>-------- restarts the server - 
      `,    
    '-- backend JS runtime',
     '- can generate dynamic pages',
     '- can CRUD + close files',
     '- collect form data',
    '- add|delete|modify db',
    '- tasks exec on events',
    '- event - server port',
    ' -- ',
    '- files initiated on server',
    `---- Express.js - middleware - 
    
    `,   
    `---- Fastify - 5x faster than express
    <br/>------ Web framework - 
    <br/>-------- 30000 requests per sec
    <br/>-------- better response under load 
    <br/>-------- powerfull plugin architecture - 
    <br/>------------ extensible via hooks | plugins| decorators
    <br/>-------- schema based - JSON Schema 
    <br/>------------- validate routes | serialize outputs 
    <br/>-------- uses Pino logger 
    <br/>-------- Highly secure and performant  
    <br/>-------- TS Ready -   
    <br/>
    <br/>-------- npm install fastify
    <br/>
    <br/>------------ server.js
    <br/>
    <br/>-------- npm install -g fastify-cli
    <br/>
    <br/>-------- fastify generate myfproj
     
    `,
    `--- server.js - 
<br/>    
<br/>// Require the framework and instantiate it
<br/>const fastify = require('fastify')({ logger: true })
<br/>
<br/>// Declare a route
<br/>fastify.get('/', async (request, reply) => {
  <br/>--- return { hello: 'world' }
  <br/>})
  <br/>
<br/>// Run the server!
<br/>const start = async () => {
  <br/>--- try {
    <br/>------ await fastify.listen({ port: 3000 })
    <br/>---} catch (err) {
    <br/>------ fastify.log.error(err)
    <br/>------ process.exit(1)
    <br/>---}
  <br/>}
<br/>start()
<br/>
    `,
    `--- Fastify Request Response
    <br/>     
    <br/>// Require the framework and instantiate it
    <br/>const fastify = require('fastify')({ logger: true })
    <br/>
    <br/>// Declare a route
    <br/>fastify.route({
      <br/>---- method: 'GET',  
      <br/>---- url: '/',
      <br/>---- schema: {
       <br/>-------- // request needs to have a querystring with a \`name\` parameter
       <br/>------------ querystring: {
          <br/>------------- name: {type: 'string'}
      <br/>------------- },
      <br/>------------- response:{
        <br/>---------------- 200: {
          <br/>------------------- type: 'object',
          <br/>------------------- properties: {
            <br/>----------------- hello: { type: 'string' }
            <br/>------------- }
            <br/>---------- }
            <br/>-------- }
            <br/>------},
      <br/>
      <br/>------ // this function is executed for every request before the handler is executed
      <br/>------ preHandler: async (request, reply) => {
      <br/>----------- // E.g. check authentication
      <br/>------ },
      <br/>------ handler: async (request, reply) => {
      <br/>---------- return { hello: 'world' }
      <br/>------}
      <br/>}) 
      <br/>
      <br/>// Run the server!
      <br/>const start = async () => {
      <br/>--- try {
      <br/>  ------ await fastify.listen({ port: 3000 })
      <br/>---} catch (err) {
      <br/>------ fastify.log.error(err)
      <br/>------ process.exit(1)
      <br/>---}
      <br/>}
    <br/>start()
`, 
`TypeScript support 
<br/>--- Fastify is shipped with a Typings file     
<br/>--------- (may need @types/node)
<br/>
<br/>http2
<br/>---- <http2.Http2Server, http2.Http2ServerRequest, http2.Http2ServerResponse>.
<br/>
<br/>https 
<br/>---- http2.Http2SecureServer or http.SecureServer instead of Server.
<br/>
<br/>import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
<br/>import { Server, IncomingMessage, ServerResponse } from 'http'
<br/>
<br/>const server: FastifyInstance = Fastify({})
<br/>
<br/>const opts: RouteShorthandOptions = {
  <br/>---schema: {
  <br/>-----response: {
  <br/>------- 200: {
  <br/>---------- type: 'object',
  <br/>---------- properties: {
  <br/>------------  pong: {
  <br/>-----------------type: 'string'
  <br/>------------------- }
  <br/>----------------- }
  <br/>-------------  }
  <br/>---------- }
  <br/>------ }
  <br/>--- }
  <br/>
  <br/>server.get('/ping', opts, async (request, reply) => {
    <br/>---- return { pong: 'it worked!' }
  <br/>})
  <br/>
  <br/>const start = async () => {
  <br/>--- try {
  <br/>-------- await server.listen({ port: 3000 })
  <br/>
  <br/>-------- const address = server.server.address()
  <br/>-------- const port = typeof address === 'string' ? address : address?.port
  <br/>
  <br/>-----} catch (err) {
  <br/>-------- server.log.error(err)
  <br/>------ process.exit(1)
  <br/>--- }
  <br/>}
  <br/>start()
`,

`After installing esbuild with esbuild-node-tsc
<br/> -- latest June 14th 2022  a7ul 1.8.6
<br/> 
<br/> ------- npm install -D nodemon esbuild esbuild-node-tsc 
<br/>--------------- note esbuild-node-tsc  
<br/>------------------- takes into account tsconfig.json
<br/>------------------- but the build is done with esbuild
<br/>   
<br/>--- configure nodemon.json
<br/>
<br/>  {
<br/>----  "watch": \["src"\],
<br/>----  "ignore":\["src/**/*.test.ts", 
               "node_modules"\],
<br/>----  "ext": "ts,mjs,js,json,graphql",
<br/>----  "exec": "etsc && node ./dist/server.js",
<br/>----  "legacyWatch": true
<br/>}
`,

`--- package.json - 
<br/>------ use ESM  
<br/>------ {
<br/>---- // ...
<br/>---- "main": "server.js",
<br/>---- "scripts": {
<br/>-------- "dev": "nodemon",
<br/>-------- "build": "etsc",
<br/>-------- "start": "node dist/server.js"
<br/>---- },
<br/>---- // ...
<br/>} 
`,  

`using Fastify - create simple fasify api
// @/src/server.ts
import fastify, {
<br/>---- FastifyRequest,
<br/>---- FastifyReply,
<br/>---- FastifyInstance,
<br/>} from "fastify";
<br/>
<br/>const startServer = async (): Promise<FastifyInstance> => {
<br/>----  const app = fastify();
<br/>----  app.get("/", async (request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> => {
<br/>---------    return reply.send({ hello: "world" });
<br/>
<br/>----});
<br/>
<br/>----  return app;
<br/>};
<br/>
<br/>--- startServer()
<br/>------  .then((app) => app.listen(3333))
<br/>------  .catch(console.error);    
`,
 '------ transpiled to *.js',
 `------- esbuild
    <br/> ------- superfast transpiler from ts to js
    <br/> ------- npm install -D nodemon esbuild esbuild-node-tsc 
    `
    ],
    [`npm (Node Package Manager) - 
    
    `,
    `- Yarn`],
    ['- Most popular Web framework - A backend web appn for Node.js for building Web appns and APIs - provides mechanisms for writing handlers for requests with diff HTTP verbs at diff URL Paths- routes ',
    '-- const express = require(\'express\'); const app = express(); const port = 3000;','-- app.get(\'/\', function(req, res) {res.send(\'Hello World!\')}); - ','--  app.listen(port, function() { console.log(\`Example app listening on port ${port}!\`)}); ' 
    ],
    [`VS-Code
    <br/>
    <br/>
    <br/>VS Code Extensions
    <br/>--- Prettier - an opinionated code formatter and linter (code analysis) 
    <br/>------- ensure 1 code format - 
    <br/>
    <br/>------- format files when saving or commiting them to VCS eg Git 
    <br/>
    <br/>---- Ctrl + Shift + P to use Prettier  
      `,
      ' -- ',
      '--- VS Code Extensions',
      '----- Prettier',
      '------- Ctrl + Shift + P'
    ],

    [`Angular Language Service - provides code editors eg VS Code 
    <br/>with completions | erroers | hints | navigation 
    <br/>
    <br/>- eg VS Code with a way to get 
    <br/>Completions | Errors | Hints | Navigation inside Angular templates
    <br/>
    <br/>It goes straight to your config files and finds out about all the templates in your project and provides adequate support as you open a template 
    `,
    '- Code completions', '- Errors', '- Hints', '- Navigation', '-- Angular Templates'
    ],
    
    [`TSServer (Stand alone Server) - is a Node executable that executes the tsc (TypeScript Compiler) and Language Services 
    <br/>- and exposes them through a JSON protocol
    <br/>- used in Code editors and IDE support 
    - VS Code - uses tsserver written in TypeScript     
    `], 
    [`ESLint - 
    <br/>--- statically analyses your code to quickly find problems 
    <br/>
    <br/>--- is a static code analysis tool used to flag programming errors | bugs | stylistic errors and suspicious constructs
    <br/>
    <br/>--- is a JavaScript Linter to lint either JS + TS code 
    <br/>------ (TSLint only used by TypeScript) - A large project can contain both JS + TS
    <br/>
    <br/>------ is built into most Web Editors VS Code or as part of your CI pipeline  -
    <br/>
    <br/>------ enables you to enforce a set of style | formatting | coding stds for your codebase  
    <br/>
    <br/>------ ESLint8.9 - released Feb 2022 - ES2022 added - ecmaVersion parser option to 13 
    <br/>
    <br/>---------ESLint8.15 - May 2022 - 
    `,
    '--- ESLint is a JavaScript Linter to lint either JS + TS code', 
    '--- Static Analysis',
    '--- VS Code + CI Pipeline',
    '--- AST based pattern checker - JS',
    '------- lets you enforce a set of style | formatting | coding stds for your codebase',
    '------- ESLint 8.09 (7th Feb 2022) -  ',
    `------- ESLint 8.15 (7th May 2022) -  `,
    `------- ESLint 8.23 (26th Aug 2022) -  `,
    `------- ESLint 8.23.1 (12th Sept 2022) -  
    `,
    `--- Add ESLint 
    <br/>------ npm i @angular-eslint/eslint-plugin
    <br/>------ ng add @angular-eslint/schematics
    `,
    `------- Add ESLint and Remove TSLint
    <br/>-------- ng g @angular-eslint/schematics:convert-tslint-to-eslint --remove-tslint-if-no-more-tslint-targets --ignore-existing-tslint-config
    `  
    ],
    [`ALS (Angular Language Service ) - for templates
      <br/>  
      <br/>--- ALS reads the tsconfig.json file
      <br/>------ finds all templates in app'n -provides Lang Services for any open templates
      <br/>
      <br/>---- npm i @angular/language-service
      <br/>--- provides code editors with a way to get 
      <br/>------- completions| errors| hints| navigation 
      <br/>------- inside Angular external and internal templates 
      `,
    `--- outside and inside Angular templates
    
    `,
    `------ completions
    `,
    `------ errors
    `,
    `------ hints
    `,
    `------ Quick info and navigations
    `,
    ' -- ',
    `--- tsconfig.json
      <br/>--- has both
      <br/>------ compilerOptions
      <br/>------ angularCompilerOptions
    `,
    `------ strictTemplates: true
    <br/>----- "angularCompilerOptions": {
    <br/>-------- "strictTemplates": true
    <br/>----- }
    `,
    ' -- ',
    `----------- GetSamanticsDiagnostics
    `
     ],
     [`CI/CD
    
      `, 
     `--- Jenkins | TeamCity | BitBucket
    `,
    `--- CI (Continuous Integration)
   <br/>--- is a DevOps SD Practice  
   <br/>------ is practice of automating integration of code changes
   <br/>-------- from multiple contributers into 1 S/W project
   <br/>------ Developers merge code changes to central repository
   <br/>--------- after which automated builds and tests are run
   <br/>
   <br/>------- CI is generally used alongside an agile S/W dev\'t workflow
   <br/>--------- org\'n compiles a list of tasks - comprising product roadmap
   <br/>----------- Tasks allocated to diff team members
   <br/>---- CI lets orgns scale engineering team size | codebase size | infrastructure',
   <br/>------ helps build DevOps and agile workflows
   <br/>------- Faster feedback on Business decisions is a side effect of CI
  `,
  '--- is a DevOps SD Practice   ',
  '------ TDD (Test Driven Devt) - ',
  '------ Bamboo - ',
  '------ JIRA - agile | DevOps project management tools',
  
  ' -- ',
  `- CD - Continuous Delivery Pipeline
  <br/>---- is a S/W Engineering approach to produce S/W in short cycles
  <br/>---- ensures S/W can be released at any time
  <br/>------ releasing code automatically
  <br/>-------- aims at building | testing | releasing S/W
  <br/>----------- with greater speed and accuracy
  `, 
  ' -- ',
  `- CD - Continuous Deployment Pipeline
  <br/>---- is a S/W Engineering approach to produce S/W in short cycles
  <br/>---- with Automated deployments
  `, 
  ' -- ',
  `--- Jenkins CI/CD
  <br/>----- open source Automation Server
  <br/>----- automates build | test | deploy S/W
  <br/>----- largest CI/CD platform
  <br/>----- simplest way to do CI/CD
  <br/>-------- faster and robust tools
  <br/>-------- integrate entire chain
  <br/>-------- Fast| Flexible| Scalable
  <br/>----- open source automation server
  <br/>----- DevOps tool written in Java
  <br/>----- used to imp workflows (pipelines)
  <br/>----- simple to set up CI/CD
  <br/>----- FREE
  `,
  '----- Pipelines - same speed etc',
  `-------- Scriptive Pipeline (initial)
  <br/>------------ begin with word 'node'
  <br/>------------ imperative programming model
  <br/>------------ Complex Groovy|JAVA Apis
  `,    
   `----------- begin with word 'node'
   
   `,
  `------------ imperative programming model
  `,
  `------------ Complex Groovy|JAVA Apis
  `,    
  `-------- Declarative Pipeline - now
  <br/>------------ begine with word pipeline
  <br/>------------ Jenkins DSL
  <br/>------------ conditional statement logic
  <br/>------------ access to env variables     
  <br/>------------ add logging|error handling
  <br/>------------ series of steps
  <br/>------------ Jenkins plugins
  <br/>------------ shared libraries
  <br/> 
  <br/>----- pipeline{
    <br/>------ agent any
    <br/>------ stages {
    <br/>------ stage('Build'){     
    <br/>-----------  steps{
    <br/>--------------  echo "Database engine is \${DB_ENGINE}"
    <br/>-------------- echo "DISABLE_AUTH is \${DISABLE_AUTH}"
    <br/>-------------- sh 'printenv'
    <br/>-------------- sh 'make' 
    <br/>-----------}
    <br/>------ }
    <br/>------ stage('Test'){     
    <br/>-----------  steps{
    <br/>-------------- sh 'make check'
    <br/>-------------- junit 'reports/**/*.xml' 
    <br/>-----------}
    <br/>------ } 
    <br/>------ stage('Deplooy'){     
    <br/>-----------  steps{
    <br/>-------------- sh 'make publish'
    <br/>-----------}
    <br/>------ }
    <br/>--- }    
    <br/>  
    <br/>
    <br/>
    <br/>
  <br/>}
  `,
  `------------ begine with word pipeline
  
  `,
  `------------ Jenkins DSL plugin
  `,
  `------------ conditional statement logic
  `,
  `------------ access to env variables
  
  `,      
  `------------ add logging|error handling
  `,
  `------------ series of steps
  `,
  `------------ Jenkins plugins
  `,
  `------------ shared libraries
  `,
  ' -- ',
  `-------- Create a pipeline script
  <br/>-------- branch sources can be Git|Subversion
  <br/>-------- Add plugins for more features and restart Jenkins
  <br/>----------- Blue Ocean plugin - latest greatest
  <br/>----------- C/C++ plugin
  <br/>-------- Jenkinsfile
  <br/>-------- check it into your repository
  <br/>-------- nightly builds
  `,
  '-------- branch sources Git|Subversion',
  '-------- Add plugins',
  '----------- Blue Ocean plugin',
  '----------- C/C++ plugin',
  '-------- Jenkinsfile',  
  '-------- check it into your repository',
  '-------- nightly builds',
  '-- ',
  `--- TeamCity
  <br/>---- a Build Management and CI Server (JetBrains)
  <br/>---- DevOps centric teams
  <br/>---- Build faster wrt Jenkins with fewer bugs
  <br/>---- Flexibility
  <br/>---- FREE
  `,
  '---- a Build Management and CI Server (JetBrains)',
  '------- DevOps centric teams',  
  '------- Build faster wrt Jenkins with fewer bugs',
  '---------- Flexibility',
  '---------- FREE',
  '---------- licence needed > 3 agents and 100 builds',
  '-------- 3 agents and 100 builds',
  '------- complex UI',
  '------- upgrade is tedious',
  '---- no need for plugins',
  '---- automated way to buid + test',
  '---- easy to set up and configure',   
  '---- cross platform',
  '---- notifies of build failures',
  '-------- details the reasons',
  '---- reduces code integration problems',
  '---- more effective teamwork',
  '-----versions',
  '-------- Cloud',
  '-------- Professional',
  '-------- Enterprise',
  ' -- ',
  `--- Bitbucket pipelines (Atlassian) 
  <br/>----- automate code from test to production - integd with Bitbucket cloud
  <br/> ---- BitBucket cloud - is a Git based code and CI/CD tool
  <br/> ---- Git based source code repository - hosting service 
  <br/> ---- optimized for teams using Jira 
  `,
  ' -- ',
  `--- Github - 
  <br/> 
  <br/>
  `,
  ' -- ',
  `--- Travis CI
  `,

  ' -- ',
  '--- Artifactory'
    ],
    [`DevOps - Devt + Operational 
    <br/>--- is for writing and deploying code
    <br/>--- shifts Testing so it happens early in SDLC
    <br/>-------- Planning and DevOps tools
    <br/>-------- with seamless collaboration between
    <br/>----------- developers | testers| QA teams
    <br/>
    <br/>--- is a colln of ideas, practices, processes, technologies
    <br/>-------- that allow devt and op teams to work together to streamline product devt
    <br/>
    <br/>-------- leads to quality appns fewer issues - stability + security
    <br/>
    <br/>--- SRE (S/W Reliability Engineering)
    <br/>-------- fits in between Devt and Operations
    <br/>-------- is more comprehensive 
    <br/>-------- the team takes the end user's perspective
    <br/>
    <br/>8 DevOps features
    <br/>--- 1: Defn -  
    <br/>--- 2: Scope -
    <br/>--- 3: Purpose -
    <br/>--- 4: Process -  
    <br/>--- 5: Impn -
    <br/>--- 6: Stages - Cont Devt (Planning + SW coding) CI (new ftns + integn) CD 
    <br/>----------- 1: Devops covers CI and CD
    <br/>----------- 2: CI stage - new ftn integd with existing code (Daily)
    <br/>------------------ All commits checked and problems detected early
    <br/>------------------ Compilation | Integn Testing| Unit Testing| Packaging| Code review
    <br/>
    <br/>----------- 3: Cont Testing - S/W cont tested for bugs autd tools 
    <br/>------------------- JUnit | TestNG | Selenium | QA - mult code bases in parallel

    <br/>
    <br/>----------- 4: Cont Monitoring - All opn factors of DevOps - checks problems
    <br/>
    <br/>----------- 5: Cont Feedback - cont improvement - analysis
    <br/>
    <br/>----------- 6: (CD) Deployment of code to prodn servers 
    <br/>------------------- Docker containers helps scale up and down 
    <br/>
    <br/>----------- 7:   
    <br/>
    <br/>--- 7: Benefts -
    <br/>--- 8: Use case -
    
    <br/> 
    <br/>--- CI/CD 
    <br/>-------- refers to a set of devt practices   
    <br/>-------- that enables the rapid and reliable delivery of code changes
    <br/>
    <br/>8 CI/CD features
    <br/>--- 1: Defn -   
    <br/>--- 2: Scope -
    <br/>--- 3: Purpose -
    <br/>--- 4: Process -  
    <br/>--- 5: Impn -
    <br/>--- 6: Stages - Source | Build | Test | Deploy
    <br/>--- 7: Benefts -
    <br/>--- 8: Use case -
    
    `,
     '------ Jenkins',
     '-------- scriptive | declarative',
     '-------- Scriptive Pipeline (initial)',
     '------------ begin with word node',
     '------------ imperative programming model',
     '------------ Complex Groovy|JAVA Apis',    
     '-------- Declarative Pipeline - now',
     '------------ begine with word pipeline',
     '------------ Jenkins DSL',
     '------------ conditional statement logic',
     '------------ access to env variables',      
     '------------ add logging|error handling',
     '------------ series of steps',
     '------------ Jenkins plugins',
     '------------ shared libraries',
     ' -- ', 
     '------ TeamCity',
     '------ Artifactory' 
    ],
    [`Webpack 
    <br/>--- is a module bundler with its main purpose is to bundle JS files for usage in a browser
    <br/> 
    <br/>--- It scans appn looking for JS files - merging them into 1+ large files - bundles any kind of file
    <br/>
    <br/>--- Once installed you can interact with webpack either with CLI or API
    <br/> 
    <br/>--- A tool that lets you compile JS modules
     <br/> 
     <br/>--- It generates 1 file (or a few files) to run your app
     <br/>
     <br/>--- npm install --save-dev webpack 
     <br/>
     <br/>--- The most modern modules are ESM (EcmaScript Modules) supports ES2015+ | CommonJS| AMD modules out of the box  
     <br/>------ performs clever static analysis of the AST of your code - 
     <br/>------ has an evaluation engine to evaluate simple expressions 
     <br/>------ supports most libraries out of the box
     <br/>
     <br/>--- Code Splitting - lets you split your codebase - into multiple chunks 
     <br/>
     <br/>--- Chunks are loaded asynchronously at runtime - Reduces the initial loading time
     <br/>
     <br/>--- Optimizations - Webpack can do many optns to reduce the output size of your JS by dedup freq used modules - minifying and giving you full control of what is loaded initially
     <br/>------- and what is loaded at runtime through code splitting 
     <br/>
     <br/>--- It can also make your code chunks cache friendly by using hashes  
     <br/>
     <br/>--- Has a rich plugin interface - very flexible - 
     <br/>
     <br/>--- Enables use of Loaders to preprocess files - lets you bundle any static resource - beyond JS Use Node.js to write your own
     <br/>
     <br/>--- uses async I/O and has multiple caching levels - very fast on inc compilations
    `, 
    `------- Custom Webpack Builders - for Angular's build facade   
    <br/>------- 
    <br/>
    <br/>
    <br/>------- npm i -D @angular-builders/custom-webpack
    <br/>------- "architect": {
    <br/>------- ...
    <br/>------- "[architect-target]": {
    <br/>------- "builder": "@angular-builders/custom-webpack:[browser|server|karma|dev-server|extract-i18n]"
    <br/>--- without ejecting 
    <br/>-------- instead of  "builder": "@angular-devkit/build-angular:browser",
    `,
    `--- Angular CLI build process 
    <br/>------ uses Webpack behind the scenes for
    `,
    '--- transpile TS to JS',
    '--- transform SASS files to CSS',
    '--- transpile HTML to JS',
    '--- module bundler - which lets you bundle JS modules together',
    `--- Terser is an industry std minifier for JS code - 
     <br/>------ Webpack performs minification mode using Terser by default 
     <br/>------ It minifies JS + HTML + CSS - requires loaders + plugins 
    `,
    `--- Terser plugin 
    <br/>------ TerserWebpackPlugin - 3rd party package - plugin uses terser to minify your JS  
    <br/>------ Webpack v5 has latest terser-webpack-plugin out of the box
    <br/>------- const TerserPlugin = require("terser-webpack-plugin");
    `, 
    '--- Entry Points -', 
    '------- Entry',
    '------- Output', 
    '------- Loaders',
    '------- Plugins',
    ' -- ',
    `--- Webpack 5 introduced the Module Federation -
    <br/> ---- multiple Webpack builds can work together
    <br/> ---- create multiple sep indept builds (without deps on eachother)
    <br/> ------ developed and deployed independently
    <br/> --------- ideal for loading Micro FrontEnds at runtime
    <br/> ----------common libs - Angular | Auth 0 can be shared -- 
    <br/> ---------- same as a set of users too - 
    <br/> ---- initially created to allow async loading of JS bundles
    <br/> -- 
    <br/>--- RemoteEntry.js (Host) 
    <br/>-------- is Mod Fed way for your App 
    <br/> ------ to be loaded from a remote Server - 
    <br/> ------ a file used by Mod Fed to bootstrap remotes - 
    <br/> ------ is considered a local chunk in remote repo
    <br/> ------- We grap the endpoint for each remote   
    <br/>-------- Shell - load MFE (MicroFrontends) into a Shell appn on demand 
    <br/>-------- Webpack 5s Module Federation simplifies this wrt before 
    `
    ],
    ['Machine Learning',
    '--- Tensorflow'

    ],
     
    [`Cloud 
      <br/>- refers to Servers accessed over the Internet and the S/W and DBs that run on those servers 
      <br/>Cloud Servers are located all over the World
      <br/>Cloud Computing offers businesses Scalability of resources for when production expands and contracts
    `,
    `--- 3 reasons 
    <br/>------ 1: File Storage 
    <br/>----------- store all types of info in the cloud 
    <br/>------ 2: File Sharing 
    <br/>-----------  Makes it easy to share files simultaneously 
    <br/>------ 3: Backing up Data 
    <br/>------------ simplifies backing up and protecting your files
    `, 
    ' -- ',
    `--- AWS (Amazon Web Services)
      <br/>------ offers reliable | scalable | cheap Cloud Computing Services 
      <br/>------ provides distributed computing processing capacity 
      <br/>---------- and S/W tools via AWS server farms - S3 and EC2  
      <br/>------ AWS are accessed over HTTP using the REST architecture style 
      <br/>----------(JSON for newer APIs) and SOAP (for older APIs)
      `,
    '------ S3 - Simple Storage Service - ',
    '------ EC2 - Elastic Compute Cloud -   ',
    '------ Amazon Connect - ',
    `------ AWS Lambda 
    <br/>-------- a serverless ftn enabling ETL wrt EC2 and S3
    `,    
    ' -- ',
    `--- Azure - 
    <br/>------ MS - Cloud computing - for appn management via MS-managed data centers
    <br/>
    `,
    '------ services - ',
    '--------- virtual m/c - IaaS (Infrastrucure as a Service) - lets users launch GP Windows and Linxu VMs - Linux on Azure',
    '--------- App Services - PaaS (Platform as a Service) - letting devs easily publsh and manage websites',
    '--------- Websites - allow devs to develop using a raft of Server side langs - ',
    '--------- WebJobs - apps can be deployed to an App Service envt to imp background processing on a schedule|on demand| run continuously ',
    '--------- Identity',
    '------------- AAD (Azure Active Directory) - sync on premisees directories + enables SSO',
    '------------- AAD (Azure Active Directory) - B2C - use of consumer identity and access management',
    '------------- AAD (Azure Active Directory) - Domain Services - join Azure virtual machines to a domain',
    '------------- Azure Info Protn - used to protect sensitive info',
    '--- location',
    '------- on-premise - ',
    '------- hybrid -',
    '------- multicloud -',
    '------- at the edge -',
    ' -- ',


    `--- Serverless 
    <br/>------ Angular - Cloud based architecture
    <br/>------ FAAS (Function as a Service)
    <br/>------ lets users to write + deploy code 
    <br/>---------- without worrying about underlying architecture  
    <br/>---------- written using Node.js - dev'd for building appns on AWS Lamda - 
    <br/>---------- no need to maintain your own servers  
    `,
    '--- Cloud based architecture',
    '--- FAAS',
    '--- Advantages',
    `--- AWS S3 -   
     <br/>------ Serverless S3 service - requires an AWS Account
     <br/>------ 5GB of std storage - Secure | Durable | Scalable - object storage infrastructure
     <br/>--------- 20000 get requests 
     <br/>--------- 2000 put requests
     <br/>
     <br/>------ S3 Bucket name - unique amongst all AWS accounts  
     <br/>------ Select region -  
    `,
    `--- Properties
    <br/>--- Versioning
    <br/>--- Server access logging
    <br/>--- Static website hosting - entry page and error page  
    <br/>--- Object level logging -
    <br/>--- Default encryption -
    <br/>--- Object lock
    <br/>--- Tags - 
    <br/>--- Transfer acceleration -
    <br/>--- Events
    <br/>--- Requester pays
    `,
     `-- AWS Lambda - Serverless Event driven compute service
     <br/>--- lets you run code for virtually any type of app'n or backend service 
     <br/>--- automatically manages the computing resources reqd 
     <br/>--- without worrying about the infrastructure of servers or OS or clusters or Networking
     `, `----- AWS Lambda Reqts - Computing Service | DB | HTTP Gateway Service 
     <br/>------ DynamoDB and RDS is the bases of a Serverless soln    
     `,
     `--- AWS Lambda Users 
     <br/>------ create functions - self contained appns  
     <br/>------ written in a supported language and runtimes 
     <br/>------ uploaded to AWS Lambda for effic exection     
     `,
     `--- AWS Lambda Uses  
     <br/>---- Serving web pages
     <br/>---- Processing streams of data 
     <br/>---- Calling APIs 
     <br/>---- Integrating with other AWS Services
     `,
     `--- AWS Lambda Languages - 
     <br/>---- Node.js 8.1 | 10| 12| xxx
     <br/>---- Python   
     <br/>---- Ruby 
     <br/>---- Java 8 | 11 
     <br/>---- Go 1.x
     <br/>---- C# Net Core 1.0 | 2.1   
     <br/>---- Powershell Core 6.0
     `,
     `--- AWS Lambda Advantages -
     <br/>---- Pay per use
     <br/>---- Fully managed infrastructure
     <br/>---- Automatic scaling 
     <br/>---- Tight integration with other AWS products
     `,
     `--- AWS Lambda Limitations -
     <br/>---- Cold Start Time
     <br/>---- Function Limits
     <br/>------ Execute time/run time 15 minutes       
     <br/>------ Memory RAM - 128MB to 3008MB with 64MB Step   
     <br/>------ Zipped package code size &lt; 50MB - Unzipped < 250MB
     <br/>------ Concurrency &lt; 1000 
     <br/>------ Payload Size &lt; 10MB that API Gateway can handle            
     <br/>---- Not always cost effective - 
     <br/>----- Maybe AWS EC2 might be better in some cases  
     <br/>---- Ltd number of supported runtimes
     `,
     '----- AWS Templates',
     '---------- AWS Terraform',
     `--- Deployment - 
     <br/>----- ng deploy (Ang 8.3)    
     <br/>
     <br/>----- Firebase hosting 
     <br/>----- Github pages  angular-cli-ghpages
     <br/>----- npm -  ngx-deploy-npm 
     <br/>----- AWS - Amazon Cloud S3  @jefiozie/ngx-aws-deploy
     <br/>---- Angular.json
     <br/>----"deploy": {
     <br/>---- "builder": "@jefiozie/ngx-aws-deploy:deploy",
     <br/>----"options": {}
     <br/>----}
     <br/>----- Azure - using Node and github 
     <br/>--------  
     `,
     `--- Dynamic Data 
    

    
    `,`--- Node.js    
    `  
   ], 
   [`AWS (Amazon Web Services)
    <br/>--- provides on demand cloud computing platforms and APIs
    <br/>-------- on a metered pay as you go basis
    <br/>-------- These cloud computing Web Services 
      <br/>----------- provide distributed computing processing capacity and S/W tools via AWS server farms
      <br/>--- One of these services is
      <br/>------- EC2 (Amazon Elastic Compute Cloud)
      <br/>------------ lets users have a virtual cluster of Computers
      <br/>----------------- available all the time via the Intenet
      <br/>------------ AWS's virtual computers emulate 
      <br/>--------------- most of the attributes of a real computer
      <br/>-------------------- CPUs + GPUs + local RAM memory + SSD + OS + Networking
      <br/>---------------------- + preloaded appn S/W - Web servers| DBs| CRM
      <br/>--- delivered to customers via a network of AWS server farms around the world
      <br/>-------- Fees are on a PAYG (Pay as You Go model)
      <br/>------------ H/W | OS| S/W| or Networking features| reqd availability| redundancy| security| service options
      <br/>
      <br/>--- Subscribers can pay for 1 virtual AWS computer| a physical computer| or clusters 
      <br/>-------- AWS provides select portions of security for providers  
      <br/>------------ physical security of the data centers
      <br/>------------ other aspects of security by subscriber 
      <br/>--------------- Account mgmt | vulnerability scanning| patching  
      <br/>
      <br/>------ AWS provides a way of obtaining Large Scale computing capacity quicker + cheaper 
      <br/>---------- wrt building an actual physical server farm 
      <br/>--------------- based on usage | each service measures diff ways
      <br/>
      <br/>--- AWS has over 200 products and services
      <br/>-------- computing | storage| networking| db| analytics| appn services| 
      <br/>-------- deployment| management| ML| mobile| dev tools| RobOps| tools for IoT
      <br/>
      <br/>--- Most popular services are
      <br/>------- EC2 (Amazon Elastic Compute Cloud)
      <br/>------- S3 (Amazon Simple Storage Service)
      <br/>------- Amazon Connect
      <br/>------- AWS Lambda (a serverless ftn enabling serverless ETL)(extract |transform| load)
      `,
      `--- S3 - Amazon Simple Storage Service
      <br/>--- Cloud storage - Enforce DACs (Data access controls) Hghly scalable, reliable & low latency data storage 
      <br/>
      <br/>------ is an object storage service 
      <br/>------ offering industry leading scalability| daa availabilit| security and performance
      `,
        `--- EC2 - Amazon Elastic Compute Cloud
        <br/>--- provides secure + resizable compute capacity with easy scalability
        <br/>
        <br/>------ provides scalable computing capacity in the AWS Cloud 
        <br/>------ eliminates need to invest in H/W up front 
        <br/>------ so you can develop and deploy appns faster
        <br/>--------- launch as many or as few virtual servers as you need 
        <br/>--------- configure security and networking
        <br/>--------- manage storage 
        <br/>------- scale up/down to handle changes in reqts 
        <br/>
        <br/>------- Virtual computing envts, known as instances
        <br/>------- Preconfigured templates for instances - AMIs (Amazon Machine Images)
        <br/>------- Various confign of instanct type = CPU| memory| storage| networking capacity|  
        <br/>------- Secure login for instances - using key pairs 
        <br/>------- Instance store volumes = Storage Volumes for temp data thats deleted when you stop| hybernate|terminate instance
        <br/>------- Persistant Store Volumes for data using EBS (Amazon Elastic Block Store) EBS Volumes
        <br/>------- Multiple physical locations for resources 
        <br/>----------- Instances | EBS Volumes (Regions) | Availability Zones
        <br/>------- Firewall lets you specify protocols| ports| source IP ranges - security groups
        <br/>------- Static IPv4 Addresses for dynamic cloud computing - Elastic IP Addresses
        <br/>------- Metadata known as tags - create + assgn to EC2 resources
        <br/>------- Virtual networks - logically isolated from rest of cloud and connect to your own network 
        <br/>------------ known as VPCs (Virtual Private Clouds)
        `,  
        `--- Amazon Connect
        <br/>--- uses S3 to store recorded conversns and exported reports  
        <br/>
        <br/>------ Omnichannel cloud contact center 
        <br/>------ set up in a few steps | add agents| start engaging with customers
        <br/>------ build reusable reliable + cheap auto calling services
        <br/>------------ dyn offer chat or voice contact 
        <br/>------------ Agents handle all customers from 1 interface
        <br/>
        <br/>------ Storage - uses S3 
        <br/>------ Database DynamoDB 
        <br/>------ Analytics - contact records - 
        <br/>------ Messaging - Pinpoint| SNS (Notificn Service)| SES (Simple Email Service)
        <br/>------ Management - CloudWatch| CloudFormation| CloudTrail
        <br/>------ Security - IAM (Identity and Access Management) + Directory Service - MAD| ADFS or SAML 2.0
        <br/>------ ML + AI - Amazon Lex| Transcribe | Comprehend   
        `,
        `--- AWS Lambda
        <br/>--- runs code in response to events + auto manages resources
        <br/>
        <br/>----- serverless, event-driven compute service 
        <br/>----- is a compute service that lets you run code without provisioning or managing servers
        <br/>----- runs your code on a high availability compute infrastructure 
        <br/>----- and performs all of the admin of the compute resources
        <br/>------- including 
        <br/>----------- Server + OS maintenance | capacity provisioning | auto scaling| logging   
        `,    
        ' -- ',
        '--- AWS Lambda',
        '----- AWS Lambda Properties',
      '----- AWS Lambda Reqts',
      '----- AWS Lambda Users',
      '----- AWS Lambda Uses',
      '----- AWS Lambda Languaged',
      '----- AWS Lambda Advantages',
      '----- AWS Lambda Limitations',
      '----- AWS Templates',
      '---------- AWS Terraform',
      '--- AWS Web Service',
      '--- AWS Cloud Compute Service',
      '--- AWS Management Console'
      ],
      ['Azure',
      '--- MS Azure',
      '-------- services - ',
      '-------- virtual m/c - IaaS',
      '-------- App Services - PaaS',
      '-------- Websites - ',
      '-------- WebJobs - ',
      '----------- Identity',
      '----------- AAD ',
      '----------- AAD - B2C',
      '----------- AAD Domain Services  ',
      '----------- Azure Info Protn',
      '----------- location',
      '----------- on-premise - ',
      '----------- hybrid -',
      '----------- multicloud -',
      '----------- at the edge -',
      ],
      ['Google Cloud', 
    '--- GCP | G Suite', 
    '--- Google Cloud Platform (GCP)',
    '--- suite of modular cloud services',
    '--- Computing',
    '------ Data Storage',
    '------ Data Analytics',
    '------ ML Machine Learning',
    '---- management tools',
    '------- Envts',
    '----------- IAAS',
    '----------- PAAS',
    '----------- Serverless Computing',
    '------ G Suite (Google Workspace)',
    '------ Enterprise Chrome',
    '------ Enterprise Android',
    '------ APIs for M/L and enterprise mapping',
    ],
    ['--- CloudFlare',
    
    ],
    [`Accessability -
    <br/>
    <br/>--- ARIA attributes
    <br/>--- WCAG
    <br/>--- POUR
    <br/>--- Amgular ESLint
    <br/>
    `,
    `--- WAI (Web Accessability Initiative) 
    <br/>------ ARIA (Accessabilty Rich Internet Appns) attrbutes
    <br/>------ is good for bridging areas with accessability issues 
    <br/>------ that can't be managed with native HTML      
    <br/>
    `, 
    `--- WCAG (Web Content Accessability Guidelines)
    <br/>----- built on POUR
    <br/>
    `, 
    `------- POUR (4 main accessability principles)
    <br/>------- breaks Accessability down into 4 aspects
    <br/>--------- Percievable
    <br/>--------- Operable
    <br/>--------- Understandable
    <br/>--------- Robust 
    `,
    `--- Angular ESLint   
    <br/>----- https://dev.to/bitovi/angular-a11y-eslint-rules-2fjc
    <br/>----- @angular/eslint repo includes several lintint rules 
    <br/>----- that can enforce accessability best practices 
    <br/>----- within Angular component templates
    <br/>
    <br/>----- 1: ARIA roles and attributes
    <br/>
    <br/>----- 2: Rules related to textual repn of content 
    <br/>
    <br/>----- 3: Interactivity - User interactivity and Event handling
    <br/>
    <br/> 
    `
   ],
    [' -- '],
    [`Schematics - is a template based code generator - that supports complex logic 
      <br/>A set of instructions for transforming a S/W project by generating or modifying code  
      <br/>--- packaged into collections and installed by npm 
      <br/>
      <br/>Angular CLI uses schematics to apply transforms to a web-project - 
      <br/>----modify these schematics | define new  one (update code |  fix breaking changes in a dep | add new confign | add a framewok)  
      <br/>
      <br/>Added in the @schematis/angular colln - ng g and ng add  
      `,
      '-- template based code generator',
      '-- part of the Angular ecosystem',
      '-- CLI uses schematics to apply transforms to a web-app project',
      `-- Schematic Collection - powerful tool for creating | modifying | maintaining
        <br/>---- a S/W project useful to customize projects wrt own orgn
      `,
      '---- enforces architectural rules + conventions',  
      '------  ng generate | ng add',
      '-- Uses of Schematics',
      '---- fix breaking changes in dep',
      `-- angular.json - schemaitcs
      <br/>
      "projects": {    "ang13-training": {
        "projectType": "application",
        "schematics": {
          "@schematics/angular:component": {
            "style": "scss"
          },
          "@schematics/angular:application": {
            "strict": true
          }
        },
      `,
        'example ftns',
    '-- classify',
    '-- normalize',
    '-- dasherize',
    '-- join',
    '-- buildRelativePath',
      '  "root": ""'

    ],
    [`Ang Material - 
    `, 
    ' -- ',
    'Ang CDK'
    ],
    [`Flex-layout - 
    `, 
        'display:flex'
    ],
    [`PWA (Progressive Web Appn) 
    <br/>--- are Web appns that use Service Workers 
    <br/>--- manifests - caching - progressive appns - to give a similar exp with a native appn 
    <br/>--- apps leverage modern browser capabilities 
    <br/>--- even with no Network or sparse Networks
    <br/>------- ng add @angular/pwa
    <br/>
    <br/>------- SW (Service Workers)
    <br/>------------ added to an app - turns it into a PWA  
    <br/>
    <br/>------- "@angular/service-worker": "14.2.3",
    `, 
    `--- @angular/pwa is a library with SW support 
    
    `,
  
    `------ SW (Service Workers) - added to an app - turns it into a PWA  
    <br/>
    `, 
    '------- manifests', 
    '- other Web-platform features',
    '------- Progressive Enhancement ',
    '------- native apps ',
    '------------ Works Offline',
    ' -- ',
    '--- Requirements',
    '------- Runs on almost every desktop | mobile | tablet', 
    '------- Due to SW - keeps it always updated',
    '------- due to HTTPS - secure',
    '------- SWs to make it work offline and on sparse networks',
    '------- employs modern web capabilities to produce an app-like experrience',
    '------- via SE due to web app manifest',
    '------- does not require downloading - easily shared via simple link or URL', 
    '------- engages same interaction methodology as a native app  ',
    '------- fully installable on users mobile home screen (no App Store)',
    '------- up to date via Push Notification - offers latest updates', 
    ' -- ',
    `--- Service Workers 
    <br/>------ is a script runs in Web browser to manage and manages caching of appn
    `,
    '---------- For SW to be registered it requires HTTPS', 
    '---------- Caching is like installing a native appn - appn is cached as 1 unit - all files updated together ',
    '---------- SW loads Manifest file - ngsw.json from Server using CLI generated config file- ngsw-tsconfig.json - (not the Web App Manifest file) - Caching - describes resources to cache - includes hashes of every files content',
    '---------- Update to appn deployed - Contents of manifest changes - hence new ver of appn should be downloaded and cached - Updates happen in background quickly after changes are published',
    '--------- SW is preserved after user closes tab - next time browser loads appn - it loads SW first - appn very fast - intercepts every resource request - no need for Network',    
    '--------- interactions are handled using the SwPush service - ensure protect against CSRF/XSRF   attacks ',
    '--------- interfaces',
    '---- PushEvent',
    '---- PushManager',
    '---- PushMessageData',
    '---- PushSubscription',
    '---- PushSubscriptionOptions',
      '-- Background Sync - ',
    '--- defer actions',
    '---- Store when offline',
    '----- caches small static assets',
    '----- for storing large assets', 
    '----- Sync when online',
    '-- SW work as a Network proxy - intercept all outgoing HTTP requests made by appn and can choose how to respond to them - query a local cache | deliver cached response| request new data from Server','--- interupts HTTP output requests','--- ',
    '-- mobile or other'
    ],
    [`@Angular/Elements - 
    <br/>--- let us create Angular Components
    <br/>------ packaged as Custom Elements (Web Components)
    <br/>
    <br/>--- let us Mix languages together (language agnostic way) 
    <br/>--- eg Angular and React and Vue and AngularJS
    <br/>----- Can also be used in a static HTML site eg WordPress 
    <br/>
    <br/>
    <br/>--- Custom Elements extend HTML - let us define a tag
    <br/>----- whose conent + created by JS code 
    <br/>
    <br/>--- Browser maintains a CustomElementRegitry of defined custom elements
    <br/>----- maps an instantiable JS class to an HTML tag 
    <br/>
    <br/>--- exports createCustomElement() API 
    <br/>----- bridges Angullar Component interface | CD to built in DOM API
    <br/>--- Problems
    <br/>----- Zone.js Change Detection not as good
    <br/>----- better to use Observables and OnPush CD -   
    <br/>
    <br/>--- ng add @angular/elements
    <br/>
    <br/>----- create a Component - 
    <br/>------- remove AppComponent bootstrap 
    <br/>------- add manual bootstrap 
    <br/>--------- constructor(private injector: Injector:){}
    <br/>--------- ngDoBootstrap(){
      <br/>---------- const el = createCustomElement(ButtonComponent, {injectr: this.injector});
      <br/>---------- customElements.define("ngsd-button", el);
    <br/>    
    <br/>------- create Custom Element 
    <br/>------- define Custom Element selector
    <br/>------- add CUSTOM_ELEMENTS_SCHEMA to module schemas
    <br/>
    <br/>--------- Input names are transf  ormed to dashed-lowercase 
    <br/>--------- Output names are not changed
    <br/>
    <br/>In a normal HTML Page
    <br/>&lt;script> 
    <br/>- &lt;ngsd-button button-label="ClickMe!">&lt;/ngsd-button>
    <br/>
    <br/>- create a component by document.querySelector('ng-air-button');
    <br/>- component.addEventListener('customEvent', evebt => { alert(event.detail)})
    <br/>&lt;/script>
    <br/>
    <br/>--- Build Combine Deploy locally
    <br/>----- Define a Custom Element called ButtonComponent
    <br/>
    <br/>@Component({
    <br/>--- selector: 'ngsd-button',
    <br/>--- templateUrls: 
    <br/>--- styleUrls: scss',
    <br/>--- encapsulation: ViewEncapsulation.ShadowDom]
    <br/>})
    <br/>export class ButtonComponent implements ngOnInit

    <br/>@Input('buttonComponent') buttonLabel: string = 'default';
    <br/>@Output('customEvent') customEvent: EventEmitter<any> = new EventEmitter();
    <br/>
    <br/>onClick(){
    <br/>--- this.customEvent.emit('Emitting string');
     <br/>}
     <br/>
     <br/>In template file
     <br/>&lt;button (click)="onClick()">{{buttonLabel}}&lt;/button>
     <br/>
     <br/>Create a HTML page - 
     <br/>&lt;!doctype="html">
     <br/>&lt;html lang="en">
     <br/>&lt;head>
     <br/>&lt;meta charset="utf-8">
     <br/>&lt;title>ngElements&lt;/title>
     <br/>&lt;base href="/">
     <br/>&lt;meta name"viewport" content="width=device-width, initial-scale=1:1
     <br/>&lt;link rel="icon" type="image/x-icon" href="favicon.ico">
     <br/>&lt;/head>
     <br/>&lt;body>    
     <br/>&lt;ngsd-button button-label="click me!">&lt;/ngsd-button>
    <br/>
    <br/> or 
    <br/>&lt;ngsd-button button-label="click me!">
    <br/>
    <br/>--- &lt;span slot="title">
    <br/>----- &lt;h1>This is the title&lt;/h1>
    <br/>--- &lt;/span>
    <br/>- &lt;/ngsd-button>
     <br/> 
     <br/>&lt;script>
    <br/>--- // create a component by document.querySelector('ngsd-button');
    <br/>--- const component = document.querySelector('ngsd-button'); 
    <br/>--- component.addEventListener('customEvent', event => { alert(event.detail)})
    <br/>&lt;/script>
     <br/>&lt;/body>
     <br/>&lt;/html>
    <br/>
    <br/>-- Using Slots - 
    <br/>---- Set ViewEncapsulation to Shadow DOM
    <br/>---- Add a slot element where you would like output to be projected
    <br/>---- Add a name attribute to identify the slot
    <br/>---- Add default markup inside the slot element 
    <br/>
    <br/>--- Consuming slot in a Web Component
    <br/>----- Inside Custom el - add a span el with slot attribute = name targeted
    <br/>----- Add markup inside the span
    <br/>----- defult will be replaced with custom values in span
    <br/<>
    <br/>--- Build
    <br/>----- Combining files 
    <br/>------- Combining dist.js files simplifies angular-elements / Web Components - 
    <br/>------- combine using a node script 
    <br/>--------- output-hashing=none
    <br/>-------- run node script 
    <br/>--- concat.js
    <br/>----- const fs = require('fs-extra');
    <br/>----- const concat = require('concat');
    <br/>----- (async files=[
    <br/>------- './dist/ng-elements/runtime.js',
    <br/>------- './dist/ng-elements/polyfill.js',
    <br/>------- './dist/ng-elements/main.js'
    <br/>]
    <br/>await fs.ensureDir('elements');  
    <br/>await concat(files, 'elements/elements.js');
    <br/>await fs.copyFile('./dist/ng-elements/styles.css','elements/styles'))()      
    <br/>
    <br/>"build:elements" : 'ng build --prod --output-hashing none && node concat.js'
    <br/>
    <br/> or
    <br/>------- npm library ngx-build-plus lets you combine files during a build
    <br/>--------- ng build --single-build 
    <br/>
    <br/>--- Deploying locally
    <br/>----- install http-server globally with npm
    <br/>----- Serve the elements folder with the http-server
    <br/>----- in the HTML file that will consume the element
    <br/>-------- Import the served js file
    <br/>-------- Add the custom element 
    <br/>
    <br/>--- Deploy to Cloud using Firebase
    <br/>install firebase cli globally -g
    <br/>--- npm install -g firebase-tools
    <br/>
    <br/>initialize a new firebase project 
    <br/>--- firebase.init
    <br/>
    <br/>Change the public folder to the elements folder
    <br/>{ "hosting": {"public": "elements",} }
    <br/>
    <br/>Deploy the element to Firebase hosting
    <br/>---- firebase.deploy
    <br/>
    <br/>&lt;head>
    <br/>&lt;script src="https://angular-elements1.firebaseapp.com/elements.jd";
    <br/>&lt;/head>
    <br/>
    <br/>--- NgElement
    <br/>----- abstract class NgElement,
    <br/>------- extends HTMLElement,
    <br/>
    <br/>----- properties
    <br/>------- ngElementStrategy
    <br/>--------- how component is transformed to a custom el  
    <br/>----------- events: Observable<NgElementStrategyEvent>
    <br/>----------- connect(element: HTMLElement)
    <br/>----------- disconnect():void
    <br/>----------- getInputValue(propName: string)
    <br/>----------- setInputValue(propName: string, string)
    ' -- ',
    <br/>------- ngElementEventsSubscription() - subscription to change | connect | disconnect events
    <br/>
    <br/>----- methods
    <br/>------- attributeChangedCallback(attrName: string, oldValue: string, newValue: string, namespace?: string): void
    <br/>---------- handler for change in observed attribue  
    <br/>------- connectedCallback() - handler for insertion of custom el in the DOM
    <br/>------- disconnectedCallback() - handler for deletion of custom el from DOM
    ' -- ',   
    `,
    `--- Custom Elements (Web Components)
    <br/> --- 
    `,
    `---  createCustomElements()`,
    '----- define()',  
    
    '-- NgElement',
    `---- abstract class NgElement extends HTMLElement
    `,
    '---- extends HTMLElement - interface that reps any HTML Element  ',
    `----- protected abstract ngElementStrategy: NgElementStrategy
        <br/>------- strategy that controls how a component is transformed in a custom el
    `,
    `-------- how component is transformed - created destroyed - react to changes  
        <br/> --------- events   | connect(element: HTMLElement) | disconnect() | getInputValue() | setInputValue(  )  
    `,
    '----- events: Observable<NgElementStrategyEvent>',
    '----- connect(element: HTMLElement): Observable<NgElementStrategyEvent>',
    '----- disconnect():void',
    '----- getInputValue(propName: string): any',
    '----- setInputValue(propName: string, string): void',
    ' -- ',
    `----- protected abstract ngElementEventsSubscription  : Subscription | null
      <br/>----- 
    `,
    `----- protected abstract attributeChangedCallback(attributeName: string, oldValue: string, newValue: string, ns?: string): void
        <br/>------ handler responding to change in attribute
    `,
    '------ change in attribute',
    `----- protected abstract connectedCallback():void 
      <br/>----- handler that responds to insertion of custom el in the DOM   
      `,
      ' ------- on insertion of el into DOM',
    `----- protected abstract disconnectedCallback():void 
      <br/>---- handler responding to deletion of custom element 
    `,
     '------- handler responds to deletion of cust el',
     ' -- ',
    `- Web Components
    <br/>--- is a way to create encapsulated | 
    <br/>-------- SRP code block | 
    <br/>-------- for reuse on any page
    <br/>-------- with their functionality 
    <br/>------------ encapsulated away from rest of your code
    <br/>
    <br/>--- provide a set of Web technologies to create reusable HTML elements 
    <br/>--- are a set of Web Platform APIs 
    <br/>-------- that allow you to create new custom | reusable | encapsulated HTML tags 
    <br/>-------- to use in Web pages and Web apps
    <br/>
    <br/>--- lets you share Components between various languages
    <br/>------  AngularJS | Angular | React | Vue  
    <br/>------ Ex must contain a - eg &lt;my-world>&lt;/my-world>
    `,
    '------ framework agnostic way',
    '---------- 4 types of Web Components',
    `---------- 1 - Custom Elements
    <br/>----------- hosts an Angular component
    <br/>
    `,
    `------------- Angular Elements packaged as custom components
    <br/>------------ are Angular components that 
    <br/>--------------- the minified version of the whole framework
    <br/>--------------- ng g @angular/elements 
    <br/>----------- import { createCustomElement } from '@angular  /elements';
     
    <br/>--- // Note customElements is a RO property of the Window interface
    <br/>--- // a ref to the customElementRegistry 
    <br/>----------- constructor(private injector: Injector) {
    <br/>-------------- const webComponent = createCustomElement(UIButtonComponent, {injector});
    <br/>-------------- customElements.define('ui-button', webComponent);
    <br/>----------- }
    <br/>----------- ngDoBootstrap(); // manual bootstrap
    `,
    `---------- 2 - Shadow DOM - 
    <br/>--------- allows hidden DOM trees to be attached 
    <br/>------------ to regular DOM tree element.
    <br/>------------ Starts with a Shadow Root 
    <br/> 
    <br/>--------- a set of JS APIs for attaching 
    <br/>------------- an encapsulated "Shadow DOM tree" to an element
    <br/>------------- rendered sep from main document DOM
    <br/>------------- and controlled associated functionality
    <br/>--------- this.attachShadow();
    const shadow = this.attachShadow({mode: 'open'});
    <br/>-------- const para = document.createElement('p');
    <br/>--------- shadow.appendChild(para);
    `,
    `---------- 3 - ES Modules
    
    `,
    `---------- 4 - HTML Template

    `,
    '--- Framework Agnostic',
    '--- polyfills',
    '--- CustomElementRegistry',
    '--- createCustomElement() API',
    '--- NgElementConstructor i/f()',
    '--- customElements.define()',  
    '--- CD ftn', 
    '--- data binding','bootstrap to DOM',
    '--- Dynamic Content',
    '--- NgElement class',
    '--- let us add Type Infon to the NgElement class'
    ],
    ['Web Workers permit multithreading in Angular', 'Threading', 
     ''
    ],
    [`Angular Universal - is a UI Framework - Accessability 
    <br/>- mobile friendly
    <br/>--- SSR (Server Side Rendering)
    `,
    `--- SSR - Server Side Rendering
    
    `,
    `--- @angular/platform-server
    <br/>--------- for SSR 
    <br/>--------- supports delivery of Ang apps on the server
    <br/>--------- npm i @angular/platform-server
    `,
    `--- BrowserModule.withServerTransition()
    <br/>--------- configures a browser based app to     
    <br/>--------- transition from a server rendering app (if one exists on page)
    <br/>--------- BrowserModule.withServerTransition({ appId: 'angular-starter' }),
    `
  ],
   [`Standalone Components - (Module-less) 
   <br/>--- are components that can be used without declaring them inside the NgModule decorators  
   <br/>--- and providing standalone: true
   <br/>  
   <br/>--- Stand alone Components - 
   <br/>------ @Component({ standalone: true }) 
   <br/>------ and its backwards compatible in both directions - 
   <br/>------ Not owned by anyone or anything 
   <br/>------ but can be imported into other components and modules
   <br/>
   <br/>------ explicitly manage their own dependencies
   <br/>
   <br/>------ We also need imports [CommonModule]
   <br/>---------- to be able to use the template directives
   <br/>---------- *ngIf | *ngFor| * etc.
   <br/>---- The CommonModule is used to assign 
   <br/>------- StandAlone Components | Pipes | Directives
   <br/>
   <br/>---- enables fine grained lazy loading and 
   <br/>------- code splitting at a Component level
   <br/>
   <br/>------ ImportProvidersFrom(RouterModule.forRoot(APP_ROUTES))  
   <br/> 
   <br/>--- We just update Angular Schematics
   <br/>------ ng g c no-mod --standalone
   <br/>------ ng g c no-mod2 --flat --standalone
   <br/>   
   <br/>-------  
   `, 
    `--- standalone: true - provide a simplified way to build Ang appns
    <br/>----- standalone components | directives | pipes 
    <br/>---------streamline experience - reducing need for NgModules
    <br/>------------- developer preview (not stable)
    <br/>
    <br/>---- explicitly manage their own dependencies
    `,
    `--- imports [CommonModule]
    <br/>----- template directives (Control Flow Directives)
    <br/>------ to be able to use the template directives 
    <br/>------ *ngIf | *ngFor| * etc.
     `,
     `------- use imports: [NgIf],
     <br/>------- instead of importing the whole CommonModule
     <br/>------- where we import { NgIf } from '@angular/common';
     <br/>
     <br/>  &lt;p *ngIf="show">Toggled&lt;/p>
     `,
    '--- Optional Modules',  
    '------- main.ts',
    '----------- platformBrowserDynamic()',
    '----------- @Component ({standalone: true})', 
    '---------------- bootstrapApplication(AppComponent)',
    '---------------- under the hood use virtual module (similar to SCAM)',
    '---------------- Backwards compatability -',
    '----------------- Architecture -',
     `--- Advantages - 
     <br/>------ 1: Reduces boilerplate in many appns eg SCAM (Single Component Angular Module) pattern
     <br/>------ 2: Simplifies learning Angular by removing NgModule from coding
     <br/>------ 3: Allows us to offer more streamlined APIs for common use cases      
     `,
      '--- SCAM (Single Component Angular Module) - one Module for each Component',
      `------ Problem with Schematics 
      <br/>------- which search for your AppModule - Libs should update schematics
      `
    ], 
    [' -- '],
    [`Agile 
    <br/>--- is an iterative approach to project management + S/W devt that helps teams deliver value to their customers faster 
    <br/>------- with fewer headaches 
    <br/>--- suite of Agile work management solutions powering collaboration 
    <br/>------- across all teams
    `,
    '--- iterative means small incremental changes',
    '--- (no bigbang) - delivers work in small, but consumable, increments - ',
    '--- Teams can easily work together and ... ',
    '--- Requirements | Plans| Results are evaluated continuously so teams have a natural mechanisms for responding to change'
    ],
    [`Jira S/W 
    <br/>--- provides Scrum and Kanban boards 
    <br/>--- are task management hubs 
    <br/>--- where tasks are mapped to customizable workflows
    <br/>
    <br/>---Scrum and Kanban are popular frameworks for imp agile 
    <br/> ----- project management methodologies that complete project tasks 
    <br/> ----- in small increments and emphasize continuous improvement 
    <br/>
    `,
    '--- View all boards - click Create board - Scrum|Kanban', 
    '-------- Boards - displays issues 1+ projects so you can view | manage | report on work',  
    '-------- teamwork',
    '-------- Boards',
    '-------- Team management board - Simplified board - teams new to agile - lets you incrementally inc power',
   '--- Simplified Board',
   '-- ',
  `--- Scrum Board 
    <br/>------- visual status of your sprint practices in teams
    <br/>------- Scrum is a method that provides structure to the team and schedule
    <br/>------- showing your work split across diff stages of your workflow
    <br/>------- Team of rugby players - creates a culture of collaboration
    <br/>
    <br/>--- Parts of Scrum Board 
    <br/>------ Sprint - 
    <br/>------ a short (2 week) - time boxed period when a team works
    <br/>------ to complete a set amount of work 
    <br/>------ during which a done | unstable | 
    <br/>
    <br/>----------- Backlog - 
    <br/>---------------- is owned by the product owner 
    <br/>---------------- is a prioritized list of work for the devt team 
    <br/>---------------- This can include features | defects | enhancements | experiments 
    <br/>-------------------that need to be done 
    <br/>---------------- Each item has a description | rank | size | estimate | value
    <br/>
    <br/>----------- User Story - 
    <br/>--------------- Items in backlog can be written as stories 
    <br/>--------------- A user story is a general explanation of a S/W feature 
    <br/>--------------- written from the perspective of a user or customer
    <br/>--------------- Purpose is to articulate how a S/W feature will provide value
    <br/>
    <br/>----------- Issue - 
    <br/>--------------- conains all tasks | dependencies | rel info 
    <br/>--------------- related to 1 item of work 
    <br/>
    <br/>----------- Epic - 
    <br/>--------------- captures a large body of work 
    <br/>--------------- A large user story that can be broken down 
    <br/>--------------- into a number of smaller stories 
    <br/>--------------- that may be take several sprints 
    <br/>--------------------to complete an epic 
    <br/>
    <br/>----------- Swimlane - 
    <br/>---------------- is a means of categorizing issues on the Jira Scrum board
    <br/>---------------- so that agile teams can easily see issues 
    <br/>---------------- grouped by different criteria such as the user 
    <br/> 
    `,
    `--- Scrum Board 
    <br/>- for teams that use sprints - includes a backlog - is the tool that unites Agile teams around a single goal + promotes iterative incremental delivery',
    <br/>------- Sprints + Backlog ----- short time based period when a scrum team works to complete a set amount of work (eg 2 weeks)
    <br/>------- provide transparency across teamwork 
    <br/>----------+ visibility into the status of every work item.
     `, 
    ' -- ',
    `--- Kanban Board - management + constraining WIP - includes option of Kanban backlog - fully extendable - with custom extensions and Backlog management
    <br/>-------- Kanban Board - 
    <br/>-------- is a project management method that helps visualize tasks 
    <br/>
    <br/>-------- Parts of Kanban 
    <br/>----------- Story Cards -
    <br/>----------- KB displays most rel info for each story | issue | bug | task
    <br/>----------- Click in to get all details | 
    <br/>---------------- related source code | pull requests | priority comments | attachments and more 
    <br/>
    <br/>----------- WIP (Work In Progress) limit configuration -
    <br/>-------------- can be set to restrict the number of stories in each status at a time
    <br/>-------------- This is important to prevent particular states 
    <br/>-------------- from becoming bottlenecks and that issues flow smoothly 
    <br/>-------------- through your workflow - 
    <br/>
    <br/>----------- Swimlanes and columns  -
    <br/>Configure columns to rep major workflow states such as
    <br/>To Do | In Progress | Done 
    <br/>Add swimlanes to group work into streams by epics | assignees or projects 
    <br/> or whatever makes sense for your team 
    <br/>
    <br/>----------- Flexible workflows -
    <br/>--------------- Define and configure diff workflows for diff issue types
    <br/>--------------- or map all issue types on your board to a single unified workflow
    <br/>
    <br/>----------- Cumulative Flow Diagram -
    <br/>----------- shows the number of issues in each status 
    <br/>----------- Team can easily spot blockages by seeing the number of issues
    <br/>----------- that increase in any given state 
    <br/>
    <br/>----------- Control Chart  -
    <br/>--------------- See the cycle time for the product | version | or Sprint  
    <br/>--------------- This helps you identify whether data from the current process 
    <br/>--------------- can be used to determine future performance - 
    <br/>
    `,
    '--- designed to visualise work - limit WIP - maximize efficiency or flow',
    '-------- used in supply chain management - for cost of unfinished goods the manufacturing process',
    ' -- ',
    '- help Agile + DevOps'
  ],
  ['Azure - Cloud',
      `New Azure Application Platform
      `,
      `Azure Web Apps
        - comprise non-managed components - 
      `,
      ' - Azure tools',
      ' -- ',
      `Azure Functions
      <br/>execute event driven serverless code ftns 
      <br/> accelerate and simplify serverless App devt 
      <br/>1: Automated flexible scaling - no infracuture management
      <br/>2: Integrated Prog Model to respond to events | connect to other services
      <br/>3: End to End devt with Integd tools + built in DevOps capabilities           
      <br/>4: Variety of prog languages TypeScript etc  
      `,
      `-- DevOps - modern day services - 
      <br/>1: Azure Boards - agile tools to plan| track| discuss work x teams
      <br/>2: Azure Pipelines - Build test deploy with CI/CD | run in parallel - with any language platform + cloud - Connect to Github | Git and deploy continuously
      <br/>3: Azure Repos - unlimited cloud hosted private Git repos + collaborate to build better code with pull requests + better fle mgmt      
      <br/>4: Azure Test plans - Mangual + exploratory testing tools - 
      <br/>5: Azure Artifacts - Create host and share packages with team - Add artifacts to CI/CD pipeline with 1 click  
      <br/>6: Extensions market place - Access extns from Stack to SonarCloud  
      `,
       '---- Azure Boards',
       '---- ssssAzure Pipelines',
       '---- Azure Repos',
       '---- Azure Test plans',
       '---- Azure Artifacts',
       '---- Extensions Marketplace',

      `-- Azure Logic Application - Visual Workflow Designer - 
       <br/>design workflows + services (MS | 3rd party)  
      `,
      '---- Vsual Workflow Designer',
      '------ Event Grid - manages all events to configure code + logic',
      ' -- ',
      `Azure Serverless Components
      <br/> sit on top of Serverless Cloud infrastructure services
      <br/> built for reuse and composition
      <br/> written in Vanilla JS - 
      <br/> offers infinite abstractions for all use cases
      <br/> can be deployed on the Serverless Framework
      <br/> Messaging plays a crucial part in Serverless Component integration
      <br/> - examples are AWS SQS (AWS) | Apache Kafka| RabbitMQ
      <br/>Serverless Functions - run custom code on demand indept of where or scalability
      `,
      '---- Azure Functions',
      '------ Code run on demand',
      '------ indept of location + scalability',
      ` ----- built for reuse and composition
      `,
      `------ Messaging plays a crucial part in Serverless Component integration
      `,
      `------ sit on top of Serverless Cloud infrastructure services
      `,
       `---- must ensure Servers set up properly
       `
  ],
  [`Debugging Angular 
  <br/>--- Chrome Devtools (Debugger for Chrome) 
  <br/>------ Find them in the Chrome Web Store - 
  <br/>
  <br/>-------- find these under Angular tab in Google Devtools 
  <br/>
  <br/>--- Webpack
  <br/> 
  <br/>--- Devtools include a Component Explorer and Profiler
  <br/>
  <br/>--- Angular Devtools (1.0.6) 09/June/2022 with profiling and debugging capabilities
  <br/>-------- an extension to Chrome Devtools
  `,
  `- Chrome Devtools (Debugger for Chrome)  
   - Added VS-Code extension - Devtools for Chrome - 
   <br/>- Opens the Chrome Devtools as a dockable Webview      
  `,
  '------ Component Explorer',
    '-------- appn Component tree',
  '------ Profiler',
  '-------- Performance bottlenecks',
  '---------- preview CD cycles',
  '---- Problem Patterns',
  `------- Zone Polllution - start recording in profiler - 
  `,
  '------- Local change triggers ext CD',
  '------- Ref transparent expressions - dont have to recalc value between CD cyles unless input changes',
  `-------- Large Component Trees - 
     <br/>-------- on demand rendering 
     <br/>-------- virtualization - CDK infinite scrolling 
     <br/>-------- pagination 
  `,
  ' -- ',
  '--- VS Code extension',
  `- Webpack - module bundler
  <br/> - provide - source maps 
  `,
  `--- Lighthouse - tool - 
  `,
  `- Call Stack - Chrome Devtools shows the Current CallStack
  <br/> - gives info about the stack of ftn calls indicating 
  <br/> - what triggered the execution of the ftn that is being executed          
  <br/>
  <br/> - Quite a few would be from Angular libraries 
  <br/> - but others from relatd to your code
  <br/> - Also show HTML part of appn that triggered the ftn call
  <br/> - You can also Right Click a frame and restart it   
  <br/> -- It will restart the execution from the frame 
  `,
  '---- Stack of ftn calls',
  '---- Restart from Frame',   
  `- Debugger - can be used in Angular appns -     
  <br/>- A debugger statement - when the Chrome Dev Tools is enabled 
  <br/>- causes the appn to break where you placed the debugger statement
  `,
  `- Conditional breakpoints - on Chrome Devtools instead of Debugger statement
  <br/>- and avoid waiting for appn to compile and refresh for debugger to apply
  <br/>- It is also easy to enable + disable the breakpoints individually 
  <br/>- Right click on line number in source file - when condn satisfiied 

  `,
  `- ng.probe($0).componentInstance
  <br/>- This is a quirky cmd that we can use on the console 
  <br/>- to see what the component state is 
  <br/>
  <br/>- Simply select the component 
  <br/>- you want to inspect from the Element tab 
  <br/>- and execute ng.probe($0).componentInstance on the console  
  <br/>-- $0 is a global variable (on Chrome Devtools) make available
  <br/>---- most recent selected element
  <br/>-      
  `,
  `--- $0 most recent selected element 
  <br/>$1 most recent prev DOM els - $4 most recent fourth DOM els
  <br/>-- inspect other info - parent of seld component | list of listeners 
  `,
  `-- ng.profiler.timeChangeDetection()
  <br/>
  <br/>--- Angular has a built in profiler to profile appns 
  <br/>--- TimeChangeDetection on the appn 
  <br/>---- how long a round of state detection takes for current state of UI < 3ms  
  `,
  '--- Built in profiler',
 ' -- ',
  '- Debugger - Source',
  `- Network throttling
    <br/> - issues due to slow networks  
  `,
  '----- throttling CPU',
  ' -- ', 
  ],
  ['- Time Travelling Debugger', 
  '- WinDbg preview app',
  '- Dump File',
  '-- Analyze Link'
  ],
  [ 'Chrome Developer Tools', 
  `- Elements - gives ability to view and change the DOM and refd CSS
  <br/>- manipulate styles directly -  
  <br/>
  <br/>- inspect or tweak pages without needing to change source code - 
  <br/>find unused CSS - view animations
  `,
  '-- inspects - ','-- ',
  `- Console - interact with Web page using Cmd prompt CLI 
  <br/>-- execute code dir in browser for trouble shooting and debugging
  `,
  '-- command prompt','-- ', 
  `- Sources - range of features to help id and manage refd objects called by Web page
  <br/>- We land here when our debugger statement's are triggered 
  <br/>-- Add waches and conditional breakpoints   
  <br/>- lets you debug code | create breakpoints | find unused JS
  `,
  '-- debugging - watches | conditional breakpoints','-- ',       
  `- Network - record network requests -    
  <br/>-- measures time taken for each object to render in web page
  <br/>-- ids bottlenecks wrt resource loading
  <br/>-- slow page loads
  `,'-- ',
  `- Performance - helps optomize website speed  
  <br/>-- measures els like loading | scripting | rendering | painting 
  <br/>-- + calc render time for each
  `,    
  '-- calc rendering time','-- ',
  `- Memory - ChromeDev Tools feature helps troubleshoot + debug memory related problems 
  <br/>-- track memory use over time + check memory allocn by element()
  `, 
  '-- memory related problems','-- ',
  `- Application - inspect all loaded resources 
  <br/>-- including indexedDB + Web SQL DBs | local/session storage 
  <br/>-- appn cache | images | fonts | stylesheets
  `,
  '-- inspects all loaded resources','-- ',
],                                                                                                                                                                                                                                                                                                    
  [`Performance - 
    <br/>--- Ivy 
    <br/>--- AoT 
    <br/>--- Lazy loading -
    <br/>--- Webpack Bundle Analyzer 
    <br/>--- tree shaking - 
    <br/>--- Modern Angular
    <br/>--- RxJS
    <br/>--- TypeScript 
    <br/>--- use pipes instead of methods
    <br/>--- Pure pipes
    <br/>--- OnPush CD   
    <br/>--- Use trackBy option For Loop
    <br/>--- optimize bundling and preloading  
    <br/>--- virtual scroll| infinite scroll| pagination
    <br/>--- Lazy load images (not visible till we scroll down)
    <br/>--- use smart and dumb components
    <br/>--- NgZone.runOutsideAngular()
    <br/>--- ES2015 to 2022
    <br/>--- Unsubscribe from Observables
    <br/>--- Observables and BehaviorSubjects
    <br/>--- Immutability   
    <br/>--- Avoid computation in template files
    <br/>--- Webpack -   
    <br/>--- ESBuild - super fast build tool perf with a super fast JS bundler- without needing cache
    <br/>--- Terser -
    <br/>--- cli.cache -
    <br/>--- APF (Angular Package Format)   
    <br/>--- Library - Linker Partial Compilation
    <br/>--- Optional Modules - stand alone Components 
    <br/>--- LCP (largest Component Paint)
    <br/>--- PWA - Service Workers 
    <br/>--- Web Workers 
    <br/>--- rx-angular
   `,
  `---- sourceMap Explorer
  <br/>-- 
  `,
  `--- Ivy
   
  `,
  `--- AOT Compilation
  <br/>------ converts HTML and TS code into efficient JS during build phase
  <br/>------ before browser downloads and runs the code
  <br/>------ compiling in build phase means a faster rendering in browser (without compiler)
  <br/>---------- as compiler is 50% size of Angular  
  <br/>>------ Compiler inlines ext files - HTML and CSS   - no sep ajax requests
  <br/>------ detects and reports template binding errors before user spies them
  <br/>------ better Security - fewer opportunity for injection attacks      
  `,
  `--- Lazy Loading
  `,
   `--- Webpack Bundle Analyzer 
   <br/>--- npm install --save-dev webpack-bundle-analyzer
   <br/>
   <br/>--- using stats.json with WBA
   <br/>--- "bundle-report": "ng build --prod --stats-json && webpack-bundle-analyzer dist/stats.json"
   <br/>
   <br/>--- npm run bundle-report
   `,
   `------- stats.json
   <br/>--------- ng build --stats-json
   <br/>--------- generates stats.json file in dist folder
   <br/>--------- 
   `,
   `------- zoomable treemap
   <br/>--------- webpack bundle analyzer
   `,
   `--- Several small shared modules
   <br/>------ so they dont grow too big 
   <br/>------ especially one for HomeSharedMoule which might simplify things
   `,
  `--- Tree-Shaking
  <br/?------- Dead code elimination
  `, 
  `--- Modern Angular
  <br/>------- Mpst new major versions of Angular
  <br/>----------- speeds up and reduces the size of the previous
  `,
  `--- RxJS 
  `,
  `--- TypeScript 
  
  `,
  `--- use Pipes instead of methods
  <br/>------- they are cached and shareable - just declared
  <br/>
  `,
  `--- Pure pipes
  <br/>------ Pure: true
  `,
  `--- OnPush CD (Change Detection)
  <br/>------ ChangeDetectionStrategy.onPush()
  `,
  `--- trackBy in for loop
  
  `,
  `--- optimize bundling and preloading
  `,
  `--- virtual scroll| infinite scroll| pagination
  
  `,
  `--- use Smart and Dumb components
  
  `,
  `--- NgZone.runOutsideAngular()
  
  `,
  `--- ES (EcmaScript) 2015 - 2022
  
  `,
  `--- Fonts
  <br/>------ use FOUT instead of FOIT
  <br/>----------- FOUT - Flash of Unstyled Text 
  <br/>----------- FOIT - Flush of Invisible Text 
  
  `,
  `--- `,
  `--- unsubscribe from Observables
  `,
  `--- Observables and BehaviorSubjects
  `,
  `--- Observables | async pipe 
   `,
   `--- Webpack 
   `, 
  `--- ESBuild 
  <br/>------ new (Ang 12) streamlined bundler - super fast 
  <br/>---------- without need to cache - with a solid API
  <br/>---------- handles TypeScript | JSON module importing -   
  <br/>
  <br/>------ given array of entry points - 
  <br/>----------- it will transpile | bundle | treeshake | code split your modules
  <br/>----------- use a build.mjs script - ESM -
  <br/>------ Ang 13 - It works with Terser     
  `,
  `--- Terser - is a JS minifier 
  `,
  `--- cli.cache
  `,
  `-->- APF (Angular Package Format) 
  <br/>------ rule is to use entry points 
  <br/>----------- for smallest sets of logically connected code possible
  <br/>----------- for structure and format of npm packages 
  <br/>------ used by all std Ang libs
  `,
  `--- Library - Linker Partial Compilation
  `,
  `--- Optional Modules (standalone)
  
  `,
  `--- FCP 
  <br>/>----- measures the time from 
  <br/>----- when the page starts loading   
  <br/>--------- to when any part of the page's content 
  <br/>--------- is rendered on the screen  
  `,
  `--- LCP (largest Component Paint) 
  <br/>------ is a user experience metric introduced in 2021
  <br/>------ as part of the Page Expreince Update  
  <br/>
  <br/>------ measures time when page starts loading
  <br/>---------- to when the largest text block or image element 
  <br/>---------- is rendered on the screen     
  
  `,
  `--- Chrome User Experience Report 
  <br/>------ report can be used to measure Core Web Vitals
  <br/>------ on field data from real users who have opted in 
  <br/>------ to allow Chrome to collect and share this data        
  `,

  `--- PageSpeed Insights
  <br/>------ can be used to measure Core Web Vitals 
  <br/>------ using field data sourced from the CUER 
  <br/>------ as well as lab data collected + analyzed by Google
  `,
  `--- Core Web Vitals 
  <br/>------   report on the Google Search Console 
  <br/>------ provides a Core Web Vitals report for 
  <br/>------ each of your regd web properties 
  `,
  `--- Chrome Devtools 
  <br/>------ Web Tools Performance tab includes 
  <br/>------ a Web Vitals lane that displays some of 
  <br/>------ the core vitals scores  
  `,
  `--- Lighthouse 
  <br/>------ is an automated tool that can be run on any web page
  <br/>----------- public accessable | requiring authentication 
  <br/>----------- to improve quality of page 
  <br/>--- can generate reports that includes Web Vitals metrics
  <br/>------- audits for performance | accessability | PWAs| SEO
  
  `,
  `--- Web vitals - 
  <br/>------ JS Library that can be integrated into your web appn  
  <br/>------ It includes a simple set of ftns that capture
  <br/>------ Web Vital events and data 
  `,
  `LogRocket 
  <br/>--- correlates Web Vitals metrics with businss impact  
  <br/>--- it monitors 
  <br/>------- page load times
  <br/>------- CPU/memory usage
  <br/>------- browser crashes 
  <br/>------- Reactive computer rendering  
  `,


  `--- 
  `,

  `- Angular Universal (SSR - Server Side Rendering)
   <br/>
  `,
   `--- PWA (Progressive Web Appn)-SW (Service Worker)
   <br/>------ PWA (Progressive Web Appn)
   <br/>
   <br/>------ SW (Service Worker)
   `,
  `--- rx-angular
  <br/>------ rx-angular/cdk
  <br/>------ rx-angular/state
  <br/>------ rx-angular/template
  `,
   `------ rx-angular/cdk

  `,
   `------ rx-angular/state
   
   `,
   `------ rx-angular/template
   `
   ],
  ['SourceMap Explorer', 
  '--- sourceMaps: true',
  `--- ng build --prod --source-map
  <br/>--- Every JS file has a corresponding SourceMap
  <br/>
  <br/>--- maps production bundle code to original dev code
  <br/>
  <br/>--- in package.json file - 
  <br/>--- 'explore:"source-map-explorer dist/**/*.js"
`],
  [`REST (REpresentational State Transfer) 
  <br/>--- architectual style that for an API that 
  <br/>--- uses HTTP requests to access and use data
  <br/>
  <br/>--- REST API (RESTful API)
  <br/>------- API or Web API conforms to constraints of REST architecutral style 
  <br/>----------- allows for interaction with RESTful web services
  <br/>
  <br/>--- typically used to connect to Cloud services flexibly in distribute envt
  <br/>-------- used by Amazon, Google, LinkedIn, Twitter
  <br/>-------- client requests a resource 
  <br/>-----------     server sends back current state of resource in std repn
  <br/>
  <br/>---- 5 REST HTTP methods
  <br/>------- 1: POST - operates on resource collns
  <br/>------- 2: PUT - replaces a resources content entirely
  <br/>------- 3: PATCH - modifies resource contents - JSON | XML
  <br/>------- 4: GET - returns a repn view of a resources contents and data
  <br/>---------- Read Only (most common method)
  <br/>------- 5: DELETE - deletes 1 resource 
    <br/>
    <br/>---- 6 architectural constraints of
    <br/>------ Uniform interface
    <br/>------ Client-Server
    <br/>---------- indept Client and Server
    <br/>------ Stateless
    <br/>---------- Server will not store any info about HTTP requests
    <br/>---------- treats every request as new - no session| history
    <br/>------ Cacheable
    <br/>---------- can be client or server 
    <br/>---------- improves scalability and performance
    <br/>------ Layered System
    <br/>---------- deploy API on server A
    <br/>---------- store data on server B  
    <br/>---------- Authenticate on server C   
    <br/>------ Code on Demand (optional)
    <br/>---------- normally static data XML | JSON
    <br/>---------- but it could return a UI widget
    <br/>
    <br/>--- HATEOAS
    <br/>------ Hypermedia as the Engine of Appn State
    <br/>------ is a constraint of the REST appn architecture 
    <br/>------ HATEOAS keeps the REST style architecture unique   
    <br/>--------- hypermedia - content with links to media- movies|images|text
    <br/>--------- lets client dyn navigate to resources by traversing links
    <br/>
    <br/>--- Problems with REST 
    <br/>------ multiple end points - multiple round trips to get the data
    <br/>------ Over and Under fetching of data
    <br/>------ Versioning - diff versions    
  `,
  `---- 5 REST HTTP methods
    <br/>------- 1: POST - operates on resource collns
    <br/>------- 2: PUT - replaces a resources content entirely
    <br/>------- 3: PATCH - modifies resource contents - JSON | XML
    <br/>------- 4: GET - returns a repn view of a resources contents and data
    <br/>---------- Read Only (most common method)
    <br/>------- 5: DELETE - deletes 1 resource
    
    `,
    `---- 6 architectural constraints of
    <br/>------ Uniform interface
    <br/>------ Client-Server
    <br/>---------- indept Client and Server
    <br/>------ Stateless
    <br/>---------- Server will not store any info about HTTP requests
    <br/>---------- treats every request as new - no session| history
    <br/>------ Cacheable
    <br/>---------- can be client or server 
    <br/>---------- improves scalability and performance
    <br/>------ Layered System
    <br/>---------- deploy API on server A
    <br/>---------- store data on server B  
    <br/>---------- Authenticate on server C   
    <br/>------ Code on Demand (optional)
    <br/>---------- normally static data XML | JSON
    <br/>---------- but it could return a UI widget
    `, 
    `--- HATEOAS
    <br/>------ Hypermedia as the Engine of Appn State
    <br/>------ is a constraint of the REST appn architecture 
    <br/>------ HATEOAS keeps the REST style architecture unique   
    <br/>--------- hypermedia - content with links to media- movies|images|text
    <br/>--------- lets client dyn navigate to resources by traversing links
    `,
    `--- Problems with REST 
    <br/>------ multiple end points - multiple round trips to get the data
    <br/>------ Over and Under fetching of data
    <br/>------ Versioning - diff versions    
    `,
  '--- APIs',
  '--- IDLs',
  '--- humans/auto machine procing',
  '--- HTTP methods',  
  '--- List REST API DLs',
  '--- WSDL',
  '--- WADL',
  '--- OData',
  '--- OpenAPI',
  '--- RSDL',
  '--- RAML',
    ' -- ',
    '- IDL for RESTful APIs expressed using JSON',
    `---- RAML - (RESTful API Modelling Language)
      <br/>------ YAML based modeling language to describe RESTful APIs 
      <br/?------ Defn of HTML based APIs 
      <br/>---------- allows any file content - code fragments wrt OpenAPI (only ext files)
    `, 
    '-- design & Doc APIs','-- ',
    '-- Interface Defn Language',
    '-- RESTful APIs',
    '-- JSON',
    ' -- ',
    `HTTP (HyperText Transfer Protocol) - is an app'n layer protocol 
    <br/>---- for transmitting hypermedia documents - eg HTML
    <br/>---- Designed for comm'n between web browsers and web servers
    `,
    `---- HTTP HttpClient
    <br/>--- HTTP CRUD - Create | Read| Update | Delete 
    <br/>-----  operations which the HTTP can use to manipulate data from a server
    <br/>
    <br/>----- HttpClient - performs HTTP requests 
    <br/>----- HTTP Request - is an HTTP message 
    <br/>-------- that a client sends to an HTTP Server
    <br/>-------- 2 most common methods are get | post
    <br/>
    <br/>---------   uses HttpClientModule from @angular/common/http
   `,
   `REST 
   <br/>--- API architectual style hat uses HTTP requests 
   <br/>------- to access and use data
   `,
    '--- APIs',
    '--- IDLs',
    '--- humans/auto machine procing',
    '--- List REST API DLs',
    '--- WSDL',
    '--- WADL',
    '--- OData',
    '--- OpenAPI',
    '--- RSDL',
    '--- RAML',
    `--- IDL for RESTful APIs expressed using JSON
    <br/>-- design & Doc API
    <br/>-- Interface Defn Language
    <br/>-- RESTful APIs
    <br/>-- JSON
    <br/>-- CRUD methods
    <br/>--- REST Servers
    <br/>---- json-server - JS library for mocking REST APIs - npm install -g json-server
    <br/>-------- requires server.js and a db.json file for your database
    <br/>-------- (jsonServer.router(\‘apps/fake-backend/src/json-server-backend/db.json\’)
    <br/>
    <br/>---- http-server - simple zero configuration Command Line - http server - npm install --g http-server
    <br/>--- powerful enough for production usage - 
    <br/>--------simple and hackable to be used for testing | local devt | learning
    `,
   `--- Swagger - rules | specifications | tools  
   <br/>------ for developing and describing RESTful APIs
   <br/>
   <br/>------ Swagger framework - lets us develop
   <br/>----------- interactive m/c + human readable API documentation
   <br/>------ 
    `,
    `------ HttpClientInMemoryWebApiModule - angular-in-memory-web-api 
    <br/>- for Angular demos and tests that emulates CRUD opns over a RESTify API -  
    <br/>    
    <br/>------ is a library that intercepts Angular Http and HttpClient requests that would normally go to the remote server
    <br/>------  and redirects them to an in-memory data store 
    <br/>--------- that you control on the frontend.
    <br/>
    <br/>----- angular/in-memory-web-api -  HttpClientInMemoryWebApiModule
    <br/>-------- .forRoot(InMemoryDataService, {delay: 1000})   
     <br/>  
     <br/>------- Angular Demos | Tests 
     <br/>------- Emulates CRUD ops wrt REST
     <br/>------- in-memory data store
     <br/>---------- npm install angular-in-memory-web-api --save 
     <br/>---------- HttpClientInMemoryWebApiModule
     <br/>---------- angular/in-memory-web-api
    `,
    `-- Postman
  <br/>--- sending | observing the HTTP requests + responses 
  <br/>------ has a GUI and and can be used on Linux | Windows | Mac
  <br/>
  <br/>--- simplifies every step of the API Life Cycle  
  `,
  `--- inspect HTTP/HTTPS request traffic 
  <br/>------ sent/received in the appn 
  <br/>----- 
  `,
  `--- Capture Network traffic - 
  <br/>-----   
  <br/>----- 
  `,
  `--- Postman Proxy
  <br/>----- 
  <br/>----- 
  `, 
  ' --- ',
  `GraphQL (2012 Facebook) - 
  <br/>--- Write Queries (not Code)
  <br/>--- is a Query Language for your API  
  <br/>--- between client and server to exchange info
  <br/>--- and a Server Side Runtime - for executing queries
  <br/>--- using a type system you define for your data
  <br/>--- is backed by your existing code and data 
  <br/>----Successor to REST
  <br/>------- get exacly what data you asked for 
  <br/>
  <br/>--- Servers - Node/JS | DotNet C# | C/C++ | Python| etc.
  <br/>
  <br/>--- Angular Apolo is the GraphQL client for Angular
  <br/>------ works with Angular schematics | router | nativeScript | ionic
  <br/>------ simplifies building UI Components that fetch data with GraphQL
  <br/>------ should use with View Layer Integrations - 
  <br/>---------- Angular | React | Vue | WebComponents
  <br/>
  <br/>GraphQL 
  <br/>--- is designed to make APIs  
  <br/>---- fast | flexible| developer friendly 
  <br/>---- can be deployed within an IDE known as GraphiQL - 
  <br/>----- alternative to REST 
  <br/>-------- constructs requests that pull data from multiple data sources in 1 API call
  <br/>----------- Its for extending + expanding upon their services 
  <br/>
  <br/>{  
  <br/>--- "data": { ... },  
  <br/>--- "errors": [ ... ]  
  <br/>}   
  <br/>
  <br/>--- GraphQL API - is a nested graph of types - dependencies (not a flat structure) 
  <br/>
  <br/>--- uses schema to know what properties are queryable - 
  <br/>----- and the type of queries (limited to schema Objects) that are to be accepted
  <br/>-------- Schema Objects - Tables | Views| Indexes | Indexed-tables| Clusters | Hash-Clusters| Synonyms
  <br/>
  <br/>GraphCMS - has grown to a widely adapted Query Language 
  <br/>All the new tools being developed for GraphQL   
  <br/>
  <br/>
  <br/>GraphQL server and Angular Apollo 
  <br/>GraphQL - is a server - is a query language for API - descn of data in API
  <br/>
  <br/>GraphQL CLI - 
  <br/>
  <br/>GraphQL TS - 
  <br/>--- TypeGraphQL - to improve Typed GraphQL
  <br/>
  <br/>GraphQL Config - 
  <br/>
  <br/>GraphQL ESLint - 
  <br/>
  <br/>GraphQL Tools - set of npm packages + structure for schema+resolvers
  <br/>--- A simpler way to create GraphQL APIs
  <br/>
  <br/>------ GraphCMS - API first Headless CMS to build GraphQL 
  <br/>
  <br/>GraphQL Language Service - 
  <br/>
  <br/>GraphQL-WS - WebSockets - 
  <br/>
  <br/>GraphQL Live-Query - 
  <br/>
  <br/>Angular Apolo is the GraphQL client for Angular
  <br/>
  <br/>--- Schemas - used to know what properties are queryable - 
  <br/>----- and the type of queries (limited to schema Objects) that are to be accepted
  <br/>-------- Schema Objects - Tables | Views| Indexes | Indexed-tables| Clusters | Hash-Clusters| Synonyms
  <br/>
  <br/>----- Schema Objects - Tables | Views| Indexes | Indexed-tables| Clusters | Hash-Clusters| Synonyms
  <br/> 
  <br/>--- Servers
  <br/>------ JS via Node.js
      <br/>var { graphql, buildSchema } = require(\'graphql\');
      <br/>
      <br/>var schema = buildSchema(\`
      <br/>type Query {
      <br/>hello: String
      <br/> }
      <br/>\`);
      <br/>
      <br/>var rootValue = { hello: () => 'Hello world!' };
      <br/>
      <br/>var source = 's{ hello }';
      <br/>
      <br/>graphql({ schema, source, rootValue }).then((response) => {
      <br/>console.log(response);
      <br/>});
      <br/>
      <br/>------ C#/Net        
      <br/>public static async Task Main(string[] args)
      <br/>{
      <br/>var schema = Schema.For(@"
      <br/>type Query {
      <br/>hello: String
      <br/>}
      <br/>");
      <br/>
      <br/>var json = await schema.ExecuteAsync(_ =>
      <br/>{
      <br/> _.Query = "{ hello }";
      <br/> _.Root = new { Hello = "Hello World!" };
      <br/>});
      <br/>
      <br/>Console.WriteLine(json);
      <br/>}
      <br/>}
      <br/> 
      <br/>------ Python
      <br/>------ C/C++
      <br/>
      <br/>------ Elm
      <br/> -- 
      <br/>--- GraphQL CLI
      <br/>--- GraphQL TS
      <br/>--- GraphQL Config
      <br/>--- GraphQL ESLint
      <br/>--- GraphQL Tools (@graphql-tools/*)-
      <br/>is a set of npm packages 
      <br/>and an opinionated structure for 
      <br/>how to build a GraphQL schema and resolvers in JS
      <br/>
      <br/>------ GraphCMS
      <br/>-------- is a powerful, easy to use Headless CMS
      <br/>-------- that allows you to build the essential back end infrastructure reqd
      <br/>-------- creates a GraphQL endpoint - + endpt for trying out GrpahQL too 
      <br/>------------ (no need for a server)
      <br/>
      <br/>------ GraphQL Voyager
      <br/>------- is a tool that you can use to visualise your GraphQL APIs schema
      <br/>
      <br/>
      <br/>------ GraphQL Docs
      <br/>------ Swagger schema to GraphQL
      <br/>------ GraphQL IDE - GraphQL Playground
      <br/>------ GraphQL Network - style tab
      <br/>------ GraphQL Editor - Create backends from schema
      <br/>
      <br/>------ GraphQL with HTTP
      <br/>----- using GraphQL Yaga
      <br/>-------- bind JS GraphQL schema to an HTTP Server
      <br/>        <br/>
      <br/>--- GraphQL Language Service
      <br/> -- 
      <br/>--- GraphQL-ws library for - 
      <br/>
      <br/>--- GraphQL WS (Web Sockets)
      <br/>execute subscriptions (or other opns) over WebSocket
      <br/> with the subscriptions-transport-ws library
      <br/>
      <br/>------ Subscriptions are normally impd with WebSockets',                                                                                                                                                
      <br/>--------- Server holds a steady conection to the client
      <br/> -- 
      <br/>--- GraphQL introspection - for developer tooling 
      <br/>
      <br/>--- GraphQL Live Query
      <br/> -- 
      <br/>--- Apollo - clients  
      <br/>----- Angular Schematics
      <br/>----- Angular Router
      <br/>-------- Angular Universal (SSR)
      <br/>----- NativeScript
      <br/>----- Ionic
   `,
    ' -- ',
   `NoSQL - 
    <br/>DynamoDB - Amazon flexible   NoSQL db service 
    <br/>--- for single-digit millisec performance at any scale  
    <br/>------ a fully managed | serverless | key-value db
    <br/>------ designed to run high perf app'ns at any scale
    <br/>------ offers built-in security | continuous backups| auto multi-Region repn
    <br/>------ in-memory caching | data export tools 
    `,
    ' -- ',
    '--- REST Servers',
    `---- json-server - JS library for mocking REST APIs - npm install -g json-server
    <br/> requires server.js and a db.json file for your database
    <br/>(jsonServer.router(\‘apps/fake-backend/src/json-server-backend/db.json\’)
    `,
    ' -- ',
    `---- http-server - simple zero configuration Command Line - http server - npm install --g http-server
      <br/>powerful enough for production usage - 
      <br/>simple and hackable to be used for testing | local devt | learning
    `,
    ' -- ','- an API platform for building and using APIs -','-- simplifies each step of the API lifecycle','-- streamlines collaboation with team members',
    ' -- ',
    `GraphQL-a Query Language for   your API 
    <br/>- provides a complete descn of data in the API
    `,
    '--- Quey language for API',
    '--- description of data in API',
    '--- Server side runtime',
    `--- exec queries`
    ],
    [`GraphQL (2012) Facebook 
    <br/>--- Write Queries (not Code)
    <br/>--- is a Query Language for your API  
    <br/>--- between client and server to exchange info
    <br/>--- and a Server Side Runtime - for executing queries
    <br/>--- using a type system you define for your data
    <br/>--- is backed by your existing code and data 
    <br/>----Successor to REST
    <br/>------- get exacly what data you asked for 
    <br/>
    <br/>--- Advantages of GraphQL
    <br/>------- get exacly what data you asked for
    <br/>------- allows multiple resource requests in 1 Query call 
    <br/>------- faster front-end devt - Appolo 
    <br/>------- mobile devt with low powered and network offline or low     
    <br/>
    <br/>--- allows multiple resource requests in 1 Query call 
    <br/>------- saves time and bandwidth by reducing number of Network round trips
    <br/>
    <br/>--- Servers - Node/JS | DotNet C# | C/C++ | Python| etc.
    <br/>
    <br/>--- Angular Apolo is the GraphQL client for Angular
    <br/>------ works with Angular schematics | router | nativeScript | ionic
    <br/>------ simplifies building UI Components that fetch data with GraphQL
    <br/>------- should use with View Layer Integrations - 
    <br/>---------- Angular | React | Vue | WebComponents
    <br/>
    <br/>--- GraphQL is designed to make APIs  
    <br/>------ fast | flexible| developer friendly 
    <br/>------ can be deployed within an IDE known as GraphiQL - 
    <br/>------ alternative to REST 
    <br/>-------- constructs requests that pull data from multiple data sources in 1 API call
    <br/>----------- Its for extending + expanding upon their services 
    <br/>
    <br/>
    <br/>--- GraphQL API - is a nested graph of types - dependencies (not a flat structure) 
    <br/>
    <br/>--- uses schema to know what properties are queryable - 
    <br/>----- and the type of queries (limited to schema Objects) that are to be accepted
    <br/>-------- Schema Objects - Tables | Views| Indexes | Indexed-tables| Clusters | Hash-Clusters| Synonyms
    <br/>
    <br/>--- GraphCMS - has grown to a widely adapted Query Language 
    <br/>------ All the new tools being developed for GraphQL   
    <br/>
    <br/>
    <br/>--- GraphQL server and Angular Apollo 
    <br/>--- GraphQL - is a server - is a query language for API - descn of data in API
    <br/>
    <br/>--- GraphQL CLI - 
    <br/>
    <br/>--- GraphQL TS - 
    <br/>--- TypeGraphQL - to improve Typed GraphQL
    <br/>
    <br/>--- GraphQL Config - 
    <br/>
    <br/>--- GraphQL ESLint - 
    <br/>
    <br/>--- GraphQL Tools - set of npm packages + structure for schema+resolvers
    <br/>--- A simpler way to create GraphQL APIs
    <br/>
    <br/>------ GraphCMS - API first Headless CMS to build GraphQL 
    <br/>
    <br/>--- GraphQL Language Service - 
    <br/>
    <br/>--- GraphQL-WS - WebSockets - 
    <br/>
    <br/>--- GraphQL Live-Query -
    `, 
    `--- Advantages of GraphQL
    <br/>------- get exacly what data you asked for
    <br/>------- allows multiple resource requests in 1 Query call 
    <br/>------- faster front-end devt - Appolo 
    <br/>------- mobile devt with low powered and network offline or low         
      `,
    `--- Schemas - used to know what properties are queryable - 
    <br/>----- and the type of queries (limited to schema Objects) that are to be accepted
    <br/>-------- Schema Objects - Tables | Views| Indexes | Indexed-tables| Clusters | Hash-Clusters| Synonyms
    `,
    `----- Schema Objects - Tables | Views| Indexes | Indexed-tables| Clusters | Hash-Clusters| Synonyms
    `, 
    `----- TypeScript and GraphQL
    <br/>-------- TypeGraphQL
    `,
    '--- Servers',
    `------ JS via Node.js
    <br/>var { graphql, buildSchema } = require(\'graphql\');
    <br/>
    <br/>var schema = buildSchema(\`
    <br/>type Query {
    <br/>hello: String
    <br/> }
    <br/>\`);
    <br/>
    <br/>var rootValue = { hello: () => 'Hello world!' };
    <br/>
    <br/>var source = '{ hello }';
    <br/>
    <br/>graphql({ schema, source, rootValue }).then((response) => {
    <br/>console.log(response);
    <br/>});
    `,
    `Angular Apolo is the GraphQL client for Angular
    <br/>--- works with Angular schematics | router | nativeScript | ionics
    <br/>--- simplifies building UI Components that fetch data with GraphQL
    <br/>------ should use with View Layer Integrations - 
    <br/>---------- Angular | React | Vue | WebComponents
     `,
     `------ C#/Net        
    <br/>public static async Task Main(string[] args)
    <br/>{
    <br/>var schema = Schema.For(@"
    <br/>type Query {
    <br/>hello: String
    <br/>}
    <br/>");
    <br/>
    <br/>var json = await schema.ExecuteAsync(_ =>
    <br/>{
    <br/> _.Query = "{ hello }";
    <br/> _.Root = new { Hello = "Hello World!" };
    <br/>});
    <br/>
    <br/>Console.WriteLine(json);
    <br/>}
    <br/>}
    <br/> 
    `,
    '------ Python',
    `------ C/C++
    `,
    '------ Elm',  
    ' -- ',
    '--- GraphQL CLI',
    '--- GraphQL TS',
    '--- GraphQL Config',
    '--- GraphQL ESLint',
    `--- GraphQL Tools (@graphql-tools/*)-
      <br/>is a set of npm packages 
      <br/>and an opinionated structure for how to build a GraphQL schema and resolvers in JS
    `,
    `------ GraphCMS
    <br/>-------- is a powerful, easy to use Headless CMS
    <br/>-------- that allows you to build the essential back end infrastructure reqd
    <br/>-------- creates a GrpahQL endpoint - + endpt for trying out GrpahQL too (no need for a server)
    `,
    `------ GraphQL Voyager
    <br/>------- is a tool that you can use to visualise your GraphQL APIs schema
    <br/>
    `,
    '------ GraphQL Docs',
        '------ Swagger schema to GraphQL',
    '------ GraphQL IDE - GraphQL Playground',
    '------ GraphQL Network - style tab',
    '------ GraphQL Editor - Create backends from schema',

    `------ GraphQL with HTTP
      <br/>----- using GraphQL Yaga
      <br/>-------- bind JS GraphQL schema to an HTTP Server
    `,
    '--- Dont use ngrx with GraphQL and Apolo client',
      ' -- ',
      '--- GraphQL Language Service',
      ' -- ',
      `--- GraphQL-ws library for - 
      `,
      `--- GraphQL WS (Web Sockets)
          <br/>execute subscriptions (or other opns) over WebSocket
          <br/> with the subscriptions-transport-ws library
      `,
      '------ Subscriptions are normally impd with WebSockets',                                                                                                                                                
      '--------- Server holds a steady conection to the client',
      ' -- ',
      `--- GraphQL introspection - for developer tooling  ', 
      
      `,
      '--- GraphQL Live Query',
      ' -- ',
      '--- Apollo - clients',  
      '----- Angular Schematics',
      '----- Angular Router',
      '-------- Angular Universal (SSR)',
      '----- NativeScript',
      '----- Ionic',  
      ' -- ',
      `TypeGraphQL - TypeScript and GraphQL 

      <br/>--- 

      `
      ],
    
    [`Real time appns - 
      <br/> uses @Override() | @deprecate() | @autobind() | @mixin decorators
      
    `],
    [`ag-grid - is a fully featured and highly customizable JS data grid 
    <br/>- delivering outstanding performance
    <br/>Fully customizable | ag-grid performance | no 3rd party deps 
    - integrates with Angular
    <br/>Features - 
    <br/>1: Column-integration - 
    <br/>2: Pagination - 
    <br/>3: Sortable  - 
    <br/>4: Row selection
    <br/> - &lt;ag-grid>&lt;/ag-grid>
    `,
    `- fully customizable -   
    `, `- Outstanding performance`,
     `-- No 3rd party dependencies - `,
     `-- Integrates with Angular as an Angular Component`,
     ' -- ',
     `- Features `,
     '-- Column integration -   ',
     '-- Pagination ',
     '-- Sorting ',
     '-- Row Selection -',
     ' -- ',

    `- ag-grid Data - 
    <br/>
    <br/>  export class AppComponent {
    <br/>   title = 'app';
    <br/>  
    <br/>   columnDefs = [
    <br/> {headerName: 'Make', field: 'make' },
    <br/>{headerName: 'Model', field: 'model' },
    <br/>{headerName: 'Price', field: 'price'}
    <br/>   ];
    <br/>
    <br/>     rowData = [
    <br/>      { make: 'Toyota', model: 'Celica', price: 35000 },
    <br/>      { make: 'Ford', model: 'Mondeo', price: 32000 },
    <br/>      { make: 'Porsche', model: 'Boxster', price: 72000 }
    <br/>    ];
    <br/>   }
    `,
    `-- ag-grid example
    <br/>
    <br/>&lt;ag-grid-angular 
    <br/>  	style="width: 500px; height: 500px;" 
    <br/>  	class="ag-theme-balham"
    <br/>  	[rowData]="rowData" 
    <br/>  	[columnDefs]="columnDefs">
    <br/>&lt;/ag-grid-angular>
    <br/>`
    ],
    [`Databases
    <br/>

    `,
    `--- DOM storage 
    <br/>------- for storing small amounts of data
    
    `,
    `--- IndexedDB
    <brH/>------ is a large scale NoSQL DB   
    <br/>------ A low level API for Client Side Storage for significat amts of structured data
    <br/>------------- including files | blobs   
    <br/>------ uses indexes for high perf searches of this data
    <br/>------ uses Object store
   
    <br/>------ store almost anything in the user's browser   
    <br/>------ supports search, get and put and transactions 
    <br/>---------- Diff browsers store data differently  
    <br/>------ uses computer's HDD disk space - limits size
    `,
    `------ Object Store
    <br/>--------- like tables in SQL Server  
    <br/>--------- One Object Store for each type you are storing   
    <br/>--------- data can be diff JS data types - numbers, strings for same table data
    `,
    `------ Index
    <br/>--------- storing peopel - ref by name, age or favorite animal
    
    `,
    `------ Operation
    <br/>---------- interaction with the DB
    `,
    `------- Transaction
    <br/>--------- wrapper around an operation or group of operations
    <br/>--------- ensureing DB Integrity 1 fails the txn does not work
    <br/>-------------- DB remains in the same state it was in before
    <br/>--------- All R/W opns must be part of a txn   
    <br/>--------- allows auto read-modify-write for simultaneous threads    
    `,
    `------- Cursor
    <br/>--------- operate over multiple records in a DB

    `,
    ' -- ',
    `--- LocalForage 
    <br/>------ uses IndexedDB with fallback to LocalStorage
    <br/>------  at the storage backend
    <br/>------- is synschronous API and accepts simple key value srings
    <br/>----------- use Promises to get/set values  
    `,
    `------ IndexedDB 
    <br/>-------
    `,
    ' -- ',
    `--- Firebase
    <br/>------ Google's DB 
    <br/>------ a set of hosting services for any type of appn
    <br/>------ offers NoSQL and real-time hosting of dbs| content| authn| notifications   
    Kbr/>
    <br/>------ Firebase cloud hosted backend - 
    `,
    `------ Firebase cloud hosted backend  
    `,
    `--- RxDB - Reactive DB
     <br/>--- real time - No SQL DB for JS based app'ns 
     <br/>------- including webpages
     <br/>------- Node apps  
     <br/>------- PWAs 
     <br/>------- Hybrid S/W 
     <br/>------- Electron appns 
     <br/>
     <br/>--- Data is stored in an impn of the RxStorage interface
     <br/>------ Options to switch out the data layer - dep on JS envt + perf 
     <br/>---------- PouchDB + SQLLite adapter for a capacitor app
     <br/>---------- LokiJS RxStorage with IndexedDB adapter for a browser appn
     <br/>---------- Node.js - filesystem based adapters
     <br/>
     <br/>------- Can replicate with any CouchDB server or GraphQL endpoints
    
     `,
    `--- SQL Server
    
    `,
    `--- IndexedDB - 
    <br/>------ (client side storage) - on local disk 
    <br/>------ low level API for large amts of data - files and blobs) - 
    <br/>------ indexed key object db 
    `,
    `--- NoSQL Dbs
    `,
    `--- PouchDB 
    <br/>------ is an open source JS pocket sized DB     
    <br/>---------- inspired by the CouchDB   
    <br/>---------- is a JS inspiration to CouchDB
    <br/>---------- inspired to run well within the browser
    <br/>------ works well offline and online  
    <br/>
    <br/>------ npm install pouchdb
    <br/>------ var PouchDB = require('pouchdb');
    <br/>------ var db = new PouchDB('my_db');`

   ],
   [`Docker - open platform for developing | shipping | running appns 
    <br/>- lets you separate appns from infrastructure - 
    <br/>- so you can deliver S/W quickly 
    <br/>- manage infrastructure like you manage your appns   
    `,
    `- Docker images - are usually very small - rapid delivery 
    <br/>-- reduces time to deploy new application containers 
    <br/>-- reduces effort and risk of problems with appn deps 
     `,
     `- Docker Container -  Build | Share | Run appn
     <br/>-- an image is a lightweight | standalone | exec package of S/W
     <br/>-- that includes everything needed to run an appn code | runtime | system tools | system libs | seettings
     `
   ],
   [`- Kubernetties K8s
  <br/>-- Cluster orchestration system  
   
  `,
  `-- Clusters - set of worker machines (Nodes)
  <br/>---- that run containerised appns 
  <br/>---- has at least 1 Node
  <br/>------- Nodes - host the Pods that are components of the appn workload 
  <br/>--------- Control Plane - manages worker nodes and Pods in cluster 
  `, 
  '----- Node',
  '------- Containerised appns',
  '----- Pod - ',
  '----- Control Plane',
  ' -- ',
  `-- Open source system`, 
  `---- automating deployment`,
  `---- scaling`,
  `---- management`,
  `------- containerized appns`
    ],
    [`Web 3 - new WWW - based on blockchain technology
    <br/>- based on decentralised Web and token based economics - 
    <br/>- Ethereum decentralised apps (DApps) that run on the blockchain
    <br/>- Allow anyone to participate without monitising personal data
    <br/>
    `,
    `- DApps - 
    <br/>
    `,
    `- based on blockchain technology
    `, 
    `-- Ethereum
    `,
    '--- Turing complete means you can program anything',
    '--- Decentralised ',
    '--- native token ETH (Ether) - has payments built in',
    '--- Anyone welcome'
    ],
    [`Why Micro-FEs (MFEs) - are the idea that 1 SPA can be divided into sep specialised sections 
    <br/>- Gives dev teams the ability to complete their work independently
    <br/>- Shell (Host) - 
    <br/> -- 
    <br/>
    <br/>- MFE (MicroFrontEnd) - Remote -  
    <br/>- that give indept teams E2E ownership  
    <br/>- defines the Urls at compile time -
    `,
    '-- MicroService in a Browser',
    '- Multiple MFEs (MicroFrontEnds)',
    `- Shell - loads MFEs into a Shell appn on demand 
    <br/>-- Webpack 5\'s Module Federation simplifies this wrt before 
    `,
    `- Sep domains`,
    `-- Diff teams`,
    '- idea - composition ',
    '-- slice larger appn up', 
    ' -- ',
    `- WebPack5 - now has module Federation
    <br/>lets us integrated multiple MFEs
    `, 
    `-- Module Federation (plugin) - lets us integrate multiple MFEs   
    <br/>--- Libraries can be shared at runtime among the MFEs 
    <br/>--- ng add @angular/architecture/module-federation  
    `,
    ' -- ',
    `-- Angular CLI is generating most parts of the Webpack confign 
      <br/>--- ModuleFederationPlugin that ships with Webpack
    `,
    '- webpack.config.js ',
    '--- ModuleFederationPlugin - that ships with Webpack',
    '--- create mult separate builds comprising 1 appn',
    '--- loads MFEs at runtime',
    ' -- ',
    `-- Shell (Host)
    <br/>Maps URLs in Webpack config
    <br/>remotes: { mfe1: "mfe1"}
    `,
    `--- Shell\'s webpack.config.js - is simple
     <br/>---- just define the shared libraries        
    `,
    '------ Shell defines Shared   libs',
    `ModuleFederationPlugin - shared: share({
       "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto'} 
    }) `,
    '------ Dynamic Imports for ESMs',
    ' -- ',
    `-- MFE (Remote)
    <br/>Exposes files in webpack.config 
    <br/>expose: { Cmp: './my.cmp.ts'}
    `,
    `--- MFE\'s webpack.config.js - is more complex
    `,
    `---- MFE - exposes ESMs (EcmaScript Modules) for the Host
    `,
    `----- fileName: "remoteEntry.js",exposes: {\'./AddressModule\': \'xxx/address.module.ts\',}
    <br/> ---- The fileName points to a file - webpack generates when building the project
    <br/> ---- The Remote Entry Point - remoteEntry.js 
    <br/> ---- generates all the metadata - the shell needs to load the MFE
    `,
    '----- generates metadata',    
    '--- shared libraries', 
    `---- TypeScript Compiler doesn\'t know about file mfe1/AddressModule
    <br/> ----- needed a type definition .d.ts 
    `,

    '- cant use dynamic imports',
    ' -- ',
    '- Dynamic MicroFrontEnds', 
    '-- We can tell Module Federation about MFEs at runtime',
    `--- loadRemoteModule() 
    <br/> ---- @angular-architects/module-federation - 
    <br/> ---- along with Lazy routes - 
   `,
    '---- ng serve shell',
    '---- ng serve mfe1',
    ],  
   
    ['- Ang Versions',
    `Ang 14.2.0 TS 4.8
     <br/>--- NgOptimizedImage  
     <br/>--- Angular Elements with Standalone
     <br/>--- Component Mirror - 
     <br/>--- ESBuild instead of Webpack
     `,
     `--- Ng OptimizedImage 
     <br/>------ is te biggest new feature
     <br/>------ and is a standalone directive 
     <br/>------ available as an experiment in the @angular/common package
     <br/>
     <br/>------ Directive helps you to otomize your images in your appn
     <br/>------ To enable it add it to the imports to one of your
     <br/>------------ modules
     <br/>------------ or standalone components
     <br/>-------imports: [NgOptimizedImage]
     <br/>------- &lt;img [rawSrc]="imageUrl" />
     <br/>
     <br/>------- The directive then enforces best practices for this image
     <br/>------- Recommended to set width and height attributes on the img tag
     <br/>
     <br/>------- It auto sets the fetchPriority on img tag
     <br/>----------- used by modern browsers to prioritize
     <br/>----------- fetching of image 
     `,
     `--- Angular Elements with Standalone
     <br/>------ defined in the main.ts not in app.component.ts 
     <br/>------ does not use modules
     <br/>------
     `,
      `--- Compoent Mirror 
      <br/>------ component mirror object
      <br/>------ const mirror = reflectComponentType(UserComponent)!;
      <br/>
      <br/>------ contains metadata of the component
      <br/>----------- selector, for example app-user
      <br/>----------- type, for example UserComponent
      <br/>----------- inputs, for example [{ propName: 'userModel', templateName: 'userModel' }]
      <br/>----------- outputs, for example [{ propName: 'userSaved', templateName: 'userSaved' }]
      <br/>----------- ngContentSelectors, for example ['*']
      <br/>----------- isStandalone, for example false
      `,
    `--- use ESBuild instead of Webpack 
    <br/>------ for a much faster build speed 
    <br/>------ in angular.json
    <br/>------ "build": {
    <br/>------   "builder": "@angular-devkit/build-angular:browser",
    <br/>
    <br/>-------- "builder": "@angular-devkit/build-angular:browser-esbuild 
    `,
    `Ang 14 TS 4.7 - 
    <br/>--- Strictly typed Reactive Forms | 
    <br/>--- adv extended template diagnostics | 
    <br/>--- optional ngModules (standalone : true) 
    <br/>--- router title added
    <br/>--- improved inject()
    <br/>--- ng cache  
    `,
      '-- TS 4.7',
      '-- strictly typed Reactive Forms',
      '-- adv extended template diagnostics',
      '-- optional ngModules (standalone: true)',
      '-- Router title added',
      '-- ng cache',
    ' -- ',
    `Ang 13 TS 4.5 - milestone in updates - 
     <br/>--- new APF - 
     <br/>--- CLI now uses ESBuild 
     <br/>--- Simpler dyn Component creation - no Factory reqd
     <br/>-------- (JS Bundler works with Terser)
     <br/>--- Node package exports
     <br/>--- TSLint (deprecated) replaced by ESLint
     <br/>--- ESLint is optional  
     <br/>--- ES2020 - 
     <br/>--- cli.cache 
    `, 
      '--- TS 4.5',
      '--- new APF',
      '--- ESBuild ',
      `--- TSLint deprecated
      `,
      `--- ESLint is optional`,
      '--- Node Package Exports',
      '--- cli.cache',
      '--- ES 2020',
      `--- Simpler Dynamic Component Creation 
      <br/>---- no need for Factories
      `,
 ' -- ',
      `Ang 12 TS 4.2 - 
      <br/>--- cleaner code - 
      <br/>--- Ivy everywhere - 
      <br/>--- templates - 
      <br/>--- Nullish Coalescing - 
      <br/>--- Critters for CSS inlining - 
      `,
      '-- TS 4.2',
      '-- cleaner code and Ivy everywhere',
    '-- templates Nullish coalescing',
    '-- Critters for CSS inlining',
' -- ',
    `Ang 11 TS 4.0 - 
    <br/>--- Font inlining - 
    <br/>--- ESLint - Stricter types - 
    <br/>--- HMR Hot Module Replacement - 
    <br/>--- Partial Compilation - 
    <br/>--- Linker - no ngcc - 
    <br/>--- Webpack 5 Module Fedn
    `,  
    '-- TS 4.0',
    '--- Font inlining',
    '--- ESLint - stricter types',
    '--- Partial Compilation - linker',
    '--- HMR (Hot Module Replacement',
    '--- webpack 5 - Module Federation',
' -- ',
    `Ang 10 TS 3.9 - major release - 
    <br/>--- new default browser config - 
    <br/>--- Ivy Ngcc - 
    <br/>--- optional strict - 
    <br/>--- Perf improvements - 
    <br/>--- ModuleWithProviders<T>
    `,
    `-- Ang 9 TS 3.9`,
    '-- new default browser config',
    '-- Ivy ngcc optional strict',
    '-- performance improvements',
    '-- ModuleWithProviders<T>',
  ' -- ',
  `Ang 09 TS 3.6/7 
    <br/>--- Ivy enabled by default 
    <br/>--- AOT compliation the default
    <br/>--- Updates to Zone.js and RxJS 
    <br/>--- smaller bundle size
    <br/>--- uses Dynamic imports wrt string
    <br/>    ModuleWithProviders - Language Service 
    <br/>    - Faster Testing with ComponentHarness
    <br/>
    <br/>Deprecated NgModuleFactory&lt;T>  
    <br/>
    `,
    '--- TS 3.6',
    `--- Ivy enabled by default
    <br/>------ Locality
    <br/>------ Incremental DOM
    `,
    `--- AOT compilation default 
    <br/>------- 3 Phases
    <br/>------- 1: Code Analysis - tsc and AOT collector repn of source as metadata (No Arrow ftns) 
    <br/>------- 2: Code Generation - StaticReflector interprets and validates phase 1 metadata and throws errors  
    <br/>------- 3: Template Type Checking = tsc used to validate binding expns in template
    <br/>------------ FullTemplateTypeCheck: true     
    `,
    '--- Smaller bundle size',
    '--- Update to Zone.js and RxJS',
    `--- uses Dynamic imports wrt string
    
    `,
    `--- ModuleWithProviders
    
    `,
    '--- Language Service',
    `--- Faster Tesing with ComponentHarness
    
    `,
    ' -- ',
    `Ang 08 TS 3.4 
    <br/>--- Differenctial Loading 
    <br/>--- ES5 | ES2015 - 
    <br/>--- new lazy loading syntax 
    <br/>--- uses dynamic import syntax -    
    <br/>--- default JIT Compiler
    <br/>--- Simplifies Web Worker creation -   ng g 
    <br/>--- new APIs 
    <br/>--- bazel and Ivy are coming -
    <br/>
    <br/>- still used NgModuleFactory for ViewEngine based Jit API  
    <br/>------ Deprecated in Ivy JIT mode
    `,
    `--- TS 3.4
    
    `,
    `--- Differential loading ES5 | ES2015
    
    `,
    `--- new lazy loading syntax - uses dynamic imports
    <br/>
    
    `,
    `--- default JIT Compiler
    `,
    `--- simplifies Web Worker creation
    `,
    '--- new APIs',
    '--- bazel and Ivy are coming',
     ' -- ',
    `Ang 07 TS 3.1
    <br/>--- Ang Material and CDK - Virtual scrolling | Drag n Drop  
    <br/>--- Performance improvements -reflect-metadata polyfill - 
    <br/>--- CLI prompts       
    <br/>--- Angular DO-Bootstrap (interface DoBootstrap - ngDoBootstrap) and Angular Compiler - 
    <br/>--- new Angular Compiler - offers an 8 phase rotating AOT compilation - NGCC libraries 
    <br/>--- Angular Error handling - 
    <br/>--- Angular Elements - 
    <br/>--- Native Script - 
    `,
    `-- TS 3.1
    
    `,
    `-- Ang Material | SDK
    
    `,
    `-- CLI Prompts
    
    `,
    ` -- Angullar Do-Bootstrap
    `  ,
    `--- new Angular Compiler -  
    <br/>------ 8 phase rotating AOT Compilation
    `,
     `--- improved Angular error handling     
     `
  ]
];

@Component({
    selector: 'app-ts-menu',
    templateUrl: './ts-menu.component.html',
    styleUrls: ['./ts-menu.component.scss']
})
export class TsMenuComponent implements OnInit {  
  static x = 5;
  isScreenSmall = false;

  ts_list = of(features.split(','));
  ts_sublist = subTopics; // gives indiv arrays
  
  ts_strArr: string[] = [];
  ts_subStrArr: string[6][] = [];
  
  tsFeatureIndex = 0;
  tsFeatureSubIndex = 0;

  tsInfo: string = ``;
  
  x = 8;

  constructor() { 
     console.log('x = ',this.x);
  }

  ngOnInit(): void {
      console.log('ngOnInit()');
      let arr = this.ts_sublist;
  }

  getInfo(i: number, j: number){
      this.tsInfo = subTopicsInfo[i][j] as string;       
      this.tsFeatureSubIndex = j;
  }

  removeQuote(str: string): string{
      return str.replace(/'/g,'');
  }

  showTSFeatures(inx: number){
      this.tsFeatureIndex = inx;
      this.getInfo(inx, 0);
  }
}
