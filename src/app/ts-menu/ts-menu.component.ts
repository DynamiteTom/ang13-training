
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

const features = `
    'angular', 
    'component', 
    'directive',
    'pipes',
    'services',
    'Dependency Injection',
    'Decorators', 
    'interf_class',
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
    'ng-build_ng-serve',
    'modules',   
    '- Bootstrapping',
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
    'ElementRef',
    'ViewContainerRef',
    'ViewDOM',
    'ContentDOM',
    'Content-Projection (Transclusion)',
    'HTTP_HttpClient',
    'Cusom Libraries',  
    'Caching',
    'Storage mechanisms',
    'Nx Nrwl',
    'ngrx_CRUD',
    ' -- ',
    'install app from github',
    'Ang main libraries',
    'Git_distd-VCS',
    'Testing_unit',
    'Design Patterns',
    'TDD/BDD/DDD',
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
    'Debugging Angular',
    '-- Time Travelling Debugger',
    '-- Chrome Devtools',
    'Angular Performance',
    '- SourceMap Explorer',
    'REST_APIs_Swagger',
    'Real Time Appns',
    'Ag-grid',
    'Micro Frontends',
    'Web 3',
    'Docker',
    'Kubernettes',
    'Angular Versions'
 `;

const subTopics = [
   ['JavaScript Framework','- SPA', 
   '- mobile-laptop-desktop',
    '- Front End appns',
    ' -- ',
    '- Angular/CLI',
    '--- Command Line Interface',
    '----- initialise',
    '----- develop',
    '----- scaffold',
    '----- maintain',
    '--- server - test locally',
    '------ ng add | ng generate',
    '--------- schematics',
    ' --- uses ng-packagr',
    ' --- uses webpack',
    ' -- ',
    '- main parts',
    '--- Components',
    '----- uses a template',
    '--- Directives',
    '-------- no template',
    '--- Pipes',
    '----- Pure pipes',
    '----- Impure pipes',
    '--- Services',
    '----- inject into constructor',
    '------- DI',
    '--------- injection tree',
    '--- Modules',
    '----- @NgModule',
    '----- Bootstrapping',
    '----- Ang AppModule - root',
    '------- DoBootstrap',
    '---------- ngDoBootstrap()',
    '------- Lazy Loading',
    ' -- ',
    '- ngc Angular compiler',
    '--- TypeScript',
    '------ tsc TS compiler',
    '---------transpilation',
    '------ tsconfig.json',
    '--- TS Libraries',
    ' -- ',
    '- Template Ref Variables',
    ' -- ',
    '- Data Binding',
    '--- interpolation {{}}',
    '--- property binding []',
    '--- event binding ()',
    '--- 2 way binding [()]',
    ' -- ',
    '- Styles css',
    '--- CSS',
    '----- Box Model',
    '--- SCSS pre-compiler',
    '----- variables',
    '----- methods',
    '----- inheritance',
    '----- mixins',
    ' -- ',
    '- Routing',
    '--- URLs', 
    '------ Routes path:\'x\' - component', 
    '-------- <base href=\/"\">', 
    '-------- HTML5 Urls', 
    '------   router-outlet', 
    '------ routerLink',   
    ' -- ',
    '- Decorators',
    '----- metadata',
    '----- TypeScript features',
    '--- Std decorators',
    ' ----- Class Decorators',
    ' ----- Property Decorators',
    ' ----- Method Decorators',
    ' ----- Parameter Decorators',
   ' -- ',
    '- Change Detection',
    '--- zone.js',
    '----- NgZone',
    '------- OnPush',
    ' -- ',
    '- Services & DI',
    '--- DI (Dependency Injection)',
    '----- Injector Hierarchy | tree',
    '------- dependency - Provider',  
    '--- design pattern',
    ' -- ',
    'Angular Universal',
    '-- Server Side Angular',
    '---- Add ons'
    ],
    ['Components - ',
    '--- @Component({})',
    '--- must have a template',
    '----- accessing a DOM el',
    '------- @ViewChild()',
    '--- Most important Ang el', 
    '- class',
    '- constructor(){}',
    '-- properties',
    '-- methods',
    '-- Services',
    '-- Directives',
    '--- Observables',
    '--- Subjects',
    ' -- ', 
    '- template',
    '-- pipes',
    ' -- ', 
    'Decorators','- @Component({})', 
    '-= selector', '-- templateUrl', '-- styleUrl',
    ' -- ', 
    '- Template Ref Variables',
    ' -- ',
    '- Data Binding', 
    ' -- ', 
    '- LC-hooks',
    ' -- ', 
    '-- Component Tree',
    ' -- ', 
    '- Change detection',
    ' -- ', 
    'this','globalThis', 
    ' -- ', 
    '- ng g c xyz',
    ' -- ',
    '--- Smart Components',
    '----- keep track of state',
    '----- how components work together',
    '--- Dumb Components - presentation components'
    ],
    ['Directives',
     '@Directive({})', 
     'have no views (template)',
    '--- have no views',
    '----- work directly with the el - ElementRef',
    '--- 2 Directive Types',
    '----- attribute-directives', 
    '----- template-directives *ngIf',
    ' -- ',
    ' -- Types of Template Directives',
    '----- *ngIf',
    '------- *ngIf ; else ng-tmp',
    '--------- ng-template #ng-tmp',
    ' -- ', 
    '----- *ngFor',
    '------ trackBy performance',
    ' -- ',   
    '----- *ngSwitch()',
    '------- case',
    ' -- ', 
    '----- ng-template <ng-template>',
     '--------- not displayed by default',
     '---------- determine when display',
     '--------- has 1+ input named values',
     '----------- template vars', 
     '--------- use of let-x',
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
    ['Why Pipes',
    '- transforms data',
    '-- display',
    '---- list built-in pipes',
    ' -- ',
    '--- inbuilt Pipes',
    '----- DatePipe',
    '----- CurrencyPipe',
    '----- DecimalPipe',
    '----- UpperCasePipe',
    '----- LowerCasePipe',
    '----- Percent  Pipe',
    '----- async Pipe',
   ' -- ', 
    '- Pure', 
    '- Impure',
    'Custom Pipes', 
    '-- @Pipe({})',
    '-- PipeTransform - transform',
  ],

  ['Services and DI',
    '-- wrt Components',
    '- A Service',
    '--- @Injectable({})',
    '----- providedIn: \'root\'',
    '-- injectors',
    '---- provider', 
    '------ service',
    '-- Reu  se',
    '- providers section',
    '--- Appn or Component',
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
    '- Providing a Service', 
    '-- @injectable({ providedIn: \'root\'})',
    '--- providedIn: \'root\'',
    '--- providedIn: \'platform\'',
    '--- providedIn: \'any\'',
    '--- providedIn: \'<T>\'',
    'providers'
    ], 
    ['Dependency Injection',
    '-- Injector Hierarchy DI system',
    '--- Injector Tree',
    '----- parallel Component Tree',
    '----- Injector Bubbling',
    '-------- Components local injector',
    '-------- root injector',
    '---- 2 Injector Hierarchies',
    '------- injectors - key-value pairs ',
    '------- ModuleInjector (Ivy R3Injector)',
    '-----------',
    '------- ElementInjector (Ivy NodeInjector)',
    '--------- NodeInjector implements Injector',
    '----------- object refs to',
    '------------- TNode - TView.data array',
    '------------- LView.   - array',
    
    '----------- using Bloom filter',
    '----- Sandboxing',
    '------- Multiple Service Instances',
    '----- @Host()',
    '----- @Optional()',
    '----- @Self()',
    '----- @SkipSelf()',
    '- DI - Dep Injection',
    '--- Design pattern',
    '--- DI Tokens',
    '-- DI parts',
    '---- Dependency Provider',
    '---- Defining Providers',
    '------ provide example',
    '------ provider-definition key',
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
    '-- read - ',
    '-- static - ',
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
    ['ES EcmaScript - modern JavaScript',
        '-- modern JavaScript',
        '---- ES6 (ES 2015)',
        '---- let const var',
        '---- fat arrow ftns (x)=> x * 2;',
        '---- For/of',
        '---- Map Objects',
        '---- Set Objects',
        '---- Classes',
        '---- Promises',
        '---- defaul params',
        '---- ftn rest params',
        '---- String - includes ...',
        '------- string.includes()',
        '------- string.startsWith()',
        '------- string.endsWith()',
        '---- Array - from | keys| ...', 
        '------- array.from()',
        '------- array.keys()',
        '------- array.find()',
        '------- array.findIndex()',
        '---- Object entries',
        '---- JS Modules'
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
    '- Type Safe - ',
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
    '--- Array',
    '--- any',
    '----- unknown (TypeSafe)',
    '--- Object Type',
    '----- interfaces | classes',
    '----- Type aliases',
    ' -- ',  
    '- Advanced Types',
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
      '----- ng add',
      '----- ng generate',
      '----- ng build',
      '----- ng update',
      '----- ng serve',
      '----- ng test',
      '----- hg help',  
      ' -- ',
      '---- uses Schematics',
      '------ virtual file system',
      '--------  tree',
      '----------  base + staging area (changes)',
      '--------  Rule object = transformations',
      '--------  4 Actions',
      '--------  SchematicContext',
      '---------- logging API',
      '------------  merge strategy',
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
    '- simplifies JS ',
    '- simplifies manipulating TS types',
    '- ES6 replacements',
    '-- Map | Filter |  Reduce'
    ],
    ['- package.json', '- angular.json', '- tsconfig.json','-- index.html','-- main.js','-- dist folder','-- node_modules folder','core.d.ts' 
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
    '- String interpolation {{x}}',
    'ex',
    '- property binding[]',
    'ex',
    '- event binding()',
    'ex', 
    '- 2-way data binding','ex'],
    ['Why Style - color-size-position', '- CSS', 
    '-- CSS-Box-Model','-- margins','-- padding','-- borders','content',
    ' -- ',     
    '-- Display property', '--- block','--- inline','--- none',
    ' -- ',     
    '-- Z-index', 
    '--- position',
    ' -- ',     
    'inline - ext', 'ngStyle','ngClass', 
     ' -- ','- SCSS - variables etc.','-- variables', '-- functions()', '-- mixins','inheritance', 
     'ViewEncapsulation'
     ],
     ['Angular/CLI',
     '- Building', 
     '- Serving the Browser port'],
    ['Modules','NgModule', 
    'dynamic imports (Ang 08)',
    '- Libraries ', 'decorator', '- declares Components', '- imports Modules', '- exports Modules','- Can define Service','- bootstrapping - ','min 1 Module','Lazy Loading'],
    ['- Bootstrapping', 
    '-- initializing/loading appn',
    '---- platformBrowserDynamic()',
    '------- bootstrapModule()',
    '---------- root ModuleInjector (now R3Injector)',
    '------------ hierarchy of injectors',
    '---------- ElementInjector (now NodeInjector)',
    '------------ hier of Comp injectors', 
    '------- NullInjector',    
    ' -- ',
    '--- angular.json file',
     '--- Loading index.html etc.','---- 3rd party libs + appn',
     '---- main.ts',
     '----- platformBrowserDynamic',
     '------ AppModule',
     '------- BrowserModule',  
     '------- AppRoutingModule',  
     '------- AppComponent',  
     '---- root Module/Component',    
     '-- webpack --- 2 dep graphs','---- 1: app.js','---- 2: vender.js'
    ],
    ['Life Cycle Hooks','- Instantiates class','- Renders View + Child','- Change detection','- Updates View + Comp Instance',
     '- imports @angular/core',
     'LCH parts','- ngOnChanges()', '- ngOnInit() most popular','- ngDoCheck()', '- ngAfterContentInit()', 
     '- ngAfterContentChecked()', '- ngAfterViewInit()', '- ngAfterViewChecked()','- ngOnDestroy()'],
    ['ComponentRouter', 
    '- URLs', 
    'Routes path:\'x\' - component', 
    '<base href=\/"\">', 
    '-- HTML5 Urls', 
    '- router-outlet', 
    '- routerLink',   
    ' -- ',
    '- Routes',
    '- RouterModule', 
    '-- @angular/router',
    '--- forRoot()',
    '--- forChild()',
    '--- Nested Routes',
    ' -- ', 
    '- get Route Info',
    '-- ActivatedRoute',
    '-- ActivatedRouteSnapshot',
    '-- RouterStateSnapshot',
    '-- .snapshot.paramMap.get(\'id\') ',
    '-- ParamMap',
    '- Wildcard Routes **',
    '-- PageNotFoundComponent','redirectTo()', 
    ' -- ','- Router Guards', 
    '-- Componentless-routes', 
    '-- 5 Guard options',
    '--- canActivate',
    '--- canActivateChild',
    '--- canDeactivate',
    '--- Resolve',
    '--- CanLoad',
    ' -- ',
    '-- ActivationStart',
    '-- ActivationEnd',
    '-- ChildActivationEnd', 
    '- history',
    '- history.pushState',
    '- older browsers',
    '-- LocationStrategy',
    '--- PathLocationStrategy',
    '---- HTML5 style navigation',
    '--- HashLocationStrategy', 
    '---- useHash:true',
    ' -- ',
    'Route Resolver', 
    '- new Comp --routing',
    '-- Lazy Loading'
  ],
   ['Parent Child communication', 
    '- @Input() decorator','-- Property Binding - []', '--- ngOnChanges()',
    '- @Output()','-- Event Binding - ()', '-- EventEmitter()', '--- [()]', 
   ], 
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
    '--- zones',
    '--- execution contexts',
    'Browser exec flow | Node.js',
    '-- Event Loop',
    '----------MacroTasks',
    '----------- Changes to DOM',
    '------------MicroTasks',
    '------------- created by promises',
    ' -- ',
    '- ChangeDetectorRef',
    '- ngZone', 
    '--- service',
    '--- helps performance',
    '----- asynchronous tasks',
    '------- runOutsideAngular()',
    '----- run() - to re-enter',
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
    '- manual CD', 
    '- automatic CD',
    '- onPush', 
    '- without ngZone',
    '-- NgZone.runOutsideAngular()'
    ],
    ['Why AOT',
    'Compile time build', 
    'No need for Compiler','3 Phases','- 1:Code Analysis','- 2:Code generation','- 3:Template type checking',
    'Benefits'
    ],
    ['Why TreeShake', '- dead code', 'treeshaking in Ivy', 'treeShaking in VE'],
    ['APF - Ang Package Format', 'npm packages','Tooling support','ES versions','Angular CLI','ng-packagr','esm and fesm','.dts files','ESM',
       'Angular 13 APF','- Node package exports', '- es2020 support', '- Ivy partial compilation'
    ],  
    ['Ivy new', 
    '- enableIvy: true',
    '- Complete rewrite of RE',
    '- Very fast loading',
    '- operates Very fast',
    '- reduced bundle size',
    '-- Tree Shakeable',
    '- Comp compilation independently',
    ' -- ',
    '- Locality',
    '-- Single file',
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
    ['- ViewEngine old', 
    '- Renderer2', 
    '3 parts -', 
    ' -1: Template Parsing',
    '-- Interpreter', 
    '--metadata.json file', 
    ' -2: Tree Shaking',
    ' -3: Compilation' ,
    '-- application.json', 
    '-- ngFactory.js file',
    'JIT or AOT',
    'EntryComponent',
    ' -- ',
    'View Engine DI (Dep Injection)',
    '---- ModuleInjector',
    '-------- Store property',
    ' -- ',
    '---- ElementInjector',
    '-------- TNode object',
    '-------- LView object',
  ],
  
    ['Promises', 
    '- then()', 
    '- future tasks', 
    '- (resolve, reject)',
    '- asynchronous','- catch',' -- ', 
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
     ' -- ',
     '--- rxjs operators',
     ' -- ',
     'Subjects', 
     '---- Combination of Observable and Observer',
     '--- behaviorSubject', 
     '--- asyncSubject', 
     '--- replaySubject'
    ],
    ['rxjs - Reactive Extensions',
    '-- library',
    '---- npm install rxjs', 
    '-- rxjs operators',
    '---- are immutable',
    '---- return Observables',
    '-- asynchronous','-- Event based ops',
    '-- Observable sequences',
    '---- imps Observable type',
    ' -- ',
    '--- rxjs Pipeable Operators',

    'Utility ftns','- Convert async to Observables','- iterating over stream','- map vals to types','- filtering streams','- multiple streams',
    'Pipeable operators','- Combination','- Conditional','- Creation',
    '- Errors','- Multi-cast','- Filters','- Transform'
    ],
    ['Higher Order Operators',
     '--- maps a value into an Observable',
     '------ value is an Observable too',
     '-------- Observable of Observables',
     '---- mapping happens all the time',
     ' -- ',
     '--- 4 types of HOO',
     '----- ConcatMap',
     '----- MergeMap',
     '----- SwitchMap',
     '----- ExhaustMap'
    ],
    
    ['Why forms',
    ' -- ',  
    '- Template Forms', '-- Template directives','-- ngForm', '-- Asynchronous data flow', '-- complex test setup','-- complex validation', '-- [(ngModel)]',
    ' -- ',
    ' -- Template Validation', 
    ' -- ',
    '- Reactive Forms','-- direct access','-- Synchronous data flow','-- simpler test setup','-- simpler validation', '-- new FormControl("")','FormBuilder',  
    ' -- ',
    '  -- Reactive Validation' 
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
    '------ <p #title>Hi</p>',
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
    '3 types to inect',
    '----  Wraps DOM el',
    '------ @ViewChild(\'title\')',
    '---------- title:ElementRef',
    '---------- this.title.nativeElement',
    '------Default - return a Component instance',  
    '------- @ViewChild(\'AComponent\')',
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
    '------- uses <ng-content></ng-content>',
    '--- Directives- templates',
    '--- Directives dyn data driven DOM',
    '--- make reusable components',
    '----- Scalable appns',    
    '--- ngAfterContentInit LCH',
    '--------- No real DOM el', 
    '---- 3 Types of Transclusion',
    '------ Single Slot',
    '--------- content from 1 source', 
    '--------- <ng-conttent></ng-content>',
    
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
     'HttpInterceptors',
     '- Service',      
     '- intercepts HTTP Request | Response',
     '- caches Http Requests | Responsee',
     '-- Example of interceptor i/f',
     '--- intercept()',
     ' -- ',
     'Angular/InMemoryWebApi',
     '- Angular Demos | Tests ',
     '- Emulates CRUD ops wrt REST',
     '- in-memory data store',
     '-- npm install',
     '-- HttpClientInMemoryWebApiModule',
     '--- angular/in-memory-web-api'
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
    
    ['Nx Nrwl','- Nrwl/Nx','-- Nx Monorepo','-- smart', '-- fast','-- extensible','-- nrwl/angular', '-- nx monorepo', '-- nx cli','-- nx build', '-- nx serve'],  
    ['State Management', 'RxJS and Observables', 'BehaviorSubject','- appn State', 'uni-directional',
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
  '- Reducer','- Action','- Selector', '- Effects',  
  ' -- ',
  '-- Store Devtools',
  '--- Action Log',
  '--- State inspector',
  '--- Time Travelling Debugger',
  '---- Installation',
  ' -- ',
  '-- Entity', '-- Data', 'ComponentStore'],
    [' -- '],
    ['install from Github', 
    'npm install'
  ],  
  ['Core libraries',
      '- @angular/core',
      '- @angular/common',
      '--- CommonModule',
      '----- default template Directives',
      '----- default pipes',
      '----- location services',
      '- @angular/compiler',
        '-- ngc',
      '- @angular/browser',
      '--- BrowserModule',
      '- @angular/router',
      '--- RouerModule',
      '- @angular/platform-browser',
      '- @angular/platform-browser-dynamic',
      '- @angular/forms',
      '--- FormsModule',
      '--- ReactiveFormsModule',
      '- @angular/animations',
      '---  AnimationsModule',
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
    '--- current work files',
    '----- history files + changes',
    '--- current state of project',
    '----- including any changes',
    '--- git init cmd',
    '----- git folder - history',
    '----- working directory - ',
 ' -- ',   
    '- Staging area',
    '--- Git index',
    '----- Prepare Commits',
    '------- files for next commit',
    '----- Git add',
    '------- adds to Stage Area',
    '------- hashes WT files',
    '--------- stored as Objects',     
    '----- Git commit -',
    '------- Staged Changes',
    '------- Name changes',
    ' -- ',
    '- Local Repository',
    '--- Local computers',
    '------ git Push',
    ' -- ',
    '- Remote Repository',
    '--- Server for Team',
    '------ git Pull',
    ' -- ',  
    '- Branches',
    '--- lightweight movable ptr',   
    '----- Commits',
    '----- Snapshot of changes',
    '------- New branch per change',
    '--- default = master',
    '----- MASTER',
    '------- naming for Branch',
    '----- after clone',
    '------- Local Repo - Master',
    '------- Repos default Branch',
    '- View branches',      
    '--- local - git branch',
    '--- remote - git branch -r',
    '--- all - git branch -a',
    ' -- ',
    '- git checkout',
    '--- only 1 branch checked out',
    '----- HEAD branch',
    '------- active = current',
    '--- navitate between branches',
    '----- updates files Work Dir',
    '------- work dir = branch',
    '----- record all new commits',
    '--- HEAD = branch name',
    '----- attaches to master',
    ' -- ',
    '- Fork',
    '--- completely indept copy',
    ' -- ',
    '--- git clone',
    '----- server repo',
    '----- linked copy of repo',
    '------- hosting service',
    '------- BitBucket',
    ' -- ',
    '- stash',
    '--- temp Shelves changes',
    '--- record work dir + index',
    '--- Clean Working directory',
    ' -- ',    
    '- Commands - ',
    '- Add','- fetch','- branch',
    '- checkout', '- commit','- init','- push','- pull','- log','- status',
    '- GitHub'
    ], 
    ['Testing', '- PoC',
    '- Unit', '-- s  pec.ts', '--- describe', '--- beforeEach()', '--- it - fit - xit', '--- afterEach', '---- TestBed', '-- Jasmine', '-- Karma', '-- Mocking', '--- Wallaby', 
    ' -- ','- Integration','-- Shallow','-- Deep', 
    ' -- ','- End to End', '-- Protractor', '-- Cypress'],
    ['Why Design', 'SOLID Principles','-- Single Responsibility','-- Open-Closed','-- Liskov Substn','-- Interface Segn','-- Dep Inv', 
    ' -- ','DRY',
    ' -- ', 'DIP',  
    ' -- ','Singleton Pattern',  
    ' -- ','Factory Pattern',  
    ' -- ','Decorator Pattern',  
   ' -- ','Lazy',
   ' -- ','Composition'],
    ['TDD Test Driven Devt', '- Test First fail','- refactor','--- pass',
    ' -- ',
    'BDD Behavoral Driven Design', '- businss', '-- agile','--- Cucumber',
    '-- Rapid Iterations',
    '-- 3 Step Practice',
    '---1: Small change', '---2: document examples','---3: implement Behavior',
    '-- or ','--- User Story','--- Discovery ', '--- Formulation','--- Automation','--- Working S/W',
    ' -- ',
    'DDD Domain Driven Design', '- Business Domain', '-- Object Oriented', '-- evolving model',
    '- Goals',
    '-- domain and domain logic',
    '-- complex design',
    '-- init creative collabn - refine',
    
  ],
    ['Security','- XSS','-- auto-escaping{{}}',
    '-- CSRF - XSRF', '--- CSRF token','--- HttpClientXsrfModule', 
    '- Output Encoding', 
    '- Sanitization', '-- DomSanitizer','-- bypassSecurityTrustHTML', 
    '- Immutable Code', '- JWTs', '- OWASP', '- SNYK'],

    ['Auhtorization', 'Authentication', '- Auth0', '- OAuth2'],
    ['Node.js',
    'http://nodejs.org', 
    '- JS runtime env\'t',  
    '- small | mid sized appns',
    '- Chrome V8 JS Engine',
    '-- Chrome',
    '-- Node.js',
    '- backend JS runtime',
     '- can generate dynamic pages',
     '- can CRUD + close files',
     '- collect form data',
    '- add|delete|modify db',
    '- tasks exec on events',
    '- event - server port',
    '- files initiated on server', 
    '--*.js'
    ],
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
    '-- transpile HTML to JS',
    '--- bundles HTML | css | ts/js',
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
    '-- at the edge -',
  ' -- ',
  '- Serverless',
  '-- Cloud based architecture',
  '-- FAAS (Ftn as a Service)',
  '-- Advantages',
  '--- AWS S3',
  '---- AWS Lambda',
  '----- AWS Lambda Properties',
  '----- AWS Lambda Reqts',
  '----- AWS Lambda Users',
  '----- AWS Lambda Uses',
  '----- AWS Lambda Languaged',
  '----- AWS Lambda Advantages',
  '----- AWS Lambda Limitations',  
  '--- Deployment', 
  '--- Dynamic Data',
  '--- Node.js'
  ],
    ['Accessability','- ARIA attrbutes', '- WCAG', '- POUR'],
    [' -- '],
    ['Schematics',
    '-- template based code generator',
    '-- part of the Angular ecosystem',
    '-- CLI applies transforms',
    '-- Schematic Collection tool',
    '---- encorces architectural rules + convns',
    '------ ng generate | ng add',
    '-- Uses of Schematics',
    '---- fix breaking changes in dep',
    '---- angular.json - schematics',
    'examples ftns',
    '-- classify',
    '-- normalize',
    '-- dasherize',
    '-- join',
    '-- buildRelativePath',
    ],
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
    ['Why Angular Elements',
    '--- Custom Els (Web Components)',
    `- createCustomElements()`,
    '---- define()',  
    '-- NgElement',
    '- abstract class NgElement',
    '---- extends HTMLElement',
    '----- ngElementStrategy',
    '-------- how component is transformed',  
    '--------- events: Observable<NgElementStrategyEvent>',
    '--------- connect(element: HTMLElement)',
    '--------- disconnect():void',
    '--------- getInputValue(propName: string)',
    '--------- setInputValue(propName: string, string)',
    ' -- ',
    '----- ngElementEventsSubscription()',
    '----- attributeChangedCallback(...)',
    '-------- change attribue',  
    '----- connectedCallback()',
    '----- disconnectedCallback()',
    ' -- ',   
    
    '- Web Components',    
    '- Framework Agnostic',
    'polyfills',
      'CustomElementRegistry',
      '- createCustomElement() API',
      'NgElementConstructor i/f()',
      'customElements.define()',  
      '-- CD ftn', 
      '-- data binding',
      'bootstrap to DOM'
    ,'-- Dynamic Content',
    'NgElements class',
    'WithProperties()'
  ],
    ['Why Web Workers', 'Threading', ''],
    ['Why Angular Universal',
    '- SSR - Server Side Rendering'],
    ['Stand Alone Components',
    '-- Optional Modules', 
    '-- main.ts',
    '---- platformBrowserDynamic()',
    '------ standalone: true', 
    '------ bootstrapApplication(x)',
    '-- virtual module (SCAM)',
    '-- Compatability',
    '-- Architecture',  
    '-- Advantages of Schematics',
    '---- Problem with Schematics'
  ],
    [' -- '],
    ['Agile', '- Iterative', '- Incemental', '- Teams','- Respond to Change'],
    ['Jira',
    '- teamwork',
    '- Boards',
    '-- Create an Agile Board',
    ' -- ',
    '--- Team Management Board',
    '---- Simplified board',
    ' -- ',
    '--- Scrum Board',
    '---- Sprints + Backlog',
    ' -- ',
    '--- Kanban Board', 
    '---- WIP (Work In Progress)', 
    '----- What is WIP',
    ' -- ',
    '- Agile project management tool'
  ],
  [' - Azure',
  '-- Azure Applications',
  '-- Azure Web APplication',
  '-- Azure tools',

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
    'webpack- source-maps',
    '-- Call Stack',
    '---- Stack of ftn calls',
    '---- Restart from Frame', 
    '-- Debugger',
    '-- Conditional breakpoints',
    '-- ng.probe($0).componentInstance',
    '---- $0 - $4',
    '-- ng.profiler.timeChangeDetection()',
'---- Built in profiler',
    '-- ',
    '- Debugger - Source',
    '- Network throttling',
    '--- throttling CPU',
    '-- '
  ],
  ['- Time Travelling Debugger', 
  '-- WinDbg preview app',
  '--- Dump File',
  '---- Analyze Link'
],
['- Chrome Developer Tools', 
  '- Elements','-- select elements','-- ',
  '- Console', '-- cmd prompt','-- ',
  '- Sources', '-- debugging','-- ',
  '- Network', '-- measureing time for ', '-- ',
  '- Performance','-- render time - CD', '-- ',
  '- Memory', '-- debug memory over time', '-- ',
  '- Application','-- inspect all loaded resources', '-- ', 
  '- Security','-- security of cert + conn\'n'
],
['How - Angular Performance - ','largest contentful paint', '',
    'Lazy Loading','Angular Universal','PWA-SW','Ivy', 'AOT Compilation','Tree-Shaking', 'Modern Angular'
],
['SourceMap Explorer', 'sourceMaps: true'], 
  ['- RESTitutional file transfer','-- APIs','-- IDLs','--- humans/auto machine procing','-- HTTP methods',
    '-- List REST API DLs','--- WSDL','--- WADL','--- OData','--- OpenAPI','--- RSDL','--- RAML',
    '--- REST Servers',
    '---- json-server', ' --',
    '---- http-server', ' -- ',
    '- Swagger', '-- design & Doc APIs','-- enable Teams','-- IDL','--   RESTful APIs','-- JSON','-- CRUD methods', 
    ' -- ','- Postman', '-- web based tool','-- access APIs anywhere  ',
    ' -- ','- GraphQL','-- Quey language for API','-- description of data in API','-- Server side runtime','--- exec queries'],

    ['- Real Time Appns',
     
    '--- Realtime Decorators '
      
    ],
    [' - Ag-grid',
    '- fully customizable',
    '- ag-grid performance',  
    '- no 3rd party deps',
    '- integrates with Angular',
    ' -- ',
    '- ag-grid Features',
      '-- Column-integration',
      '-- Pagination',
      '-- Sorting ',
      '-- Row Selection',
      ' -- ',
      '- ag-grid data',
      '-- ag-grid ex',
    ],
    ['Why Micro-FEs',
     '- MicroService in a browser',
     '- Multiple MFEs',
     '- Shell',
     '- Sep domains', 
     '-- Diff teams', 
     '- Idea- composition of features',
     '-- slice larger appn up', 
     ' -- ',
     '- WebPack5', 
     '-- Modulse Federation',
     ' -- ',
     '- Ang CLI | Webpack confign',
     '-- webpack.config.js ',
     '-- ModuleFederationPlugin',
     '-- create mult sep builds', 
     '-- loads MFEs at runtime',
     ' -- ',  
     '- Shell (Host)',
     '--- Shell\'s webpack.config',
     '--- Shell defines Shared libs',
     '--- singleton|strictVersion',
     '--- Dynamic imports- ESMs',
     ' -- ',
     '- MicroFrontEnd - Remote',
     '-- MFE\'s webpack.config',
     '-- exposes ESMs',
     '-- remoteEntry.js',  
     '-- metadata',
     '--- shared libraries',
     '- (not) dynamic imports',
     ' -- ',
     '- Dynamic MicroFrontEnds', 
     '-- runtime',
     '--- loadRemoteModule()',
     '---- '
    ],
     ['Web 3 - new WWW -','- DApps', '- Blockchain technology', 
    '-- Ethereum','--- Turing complete','--- inherent decentralization','--- native token ETH (Ether)  ',
    '-- for Everyone'
    ],
    ['- Docker ', '-- Docker images', '-- Docker Container'],
    ['- Kubernetties K8s', '-- Clusters', '-- Open source system', '--- automating deployment','--- scaling','--- management','---- containerized appns'],
    ['- Ang Versions',
    'Ang 14 (02/06/2022)',
        '-- TS 4.7',
        '-- strictly typed Reactive Forms',
        '-- adv extended template diagnostics',
        '-- optional ngModules (standalone: true)',
        '-- Router title',
        '-- ng cache',
    ' -- ',
    'Ang 13 (Nov 2021)', 
      '-- TS 4.5',
      '-- new APF (Angular Package Format) ',
      '-- ESBuild ',
      '-- Node Package Exports',
      '-- cli.cache',
      '-- ES 2020',
  ' -- ',
    'Ang 12',
      '-- TS 4.2',
      '-- cleaner code and Ivy everywhere',
      '-- templates Nullish coalescing',
      '-- Critters for CSS inlining',
    ' -- ',
    'Ang 11',
        '-- TS 4.0',
        '-- Font inlining',
        '-- ESLint - stricter types',
        '-- Partial Compilation - linker',
        '-- HMR (Hot Module Replacement',
        '-- webpack 5 - Module Federation',
    ' -- ',
    'Ang 10',
        '-- TS 3.9',
        '-- new default browser config',
        '-- Ivy ngcc optional strict',
        '-- performance improvements',
        '-- ModuleWithProviders<T>',
    ' -- ',
    'Ang 09',
        '-- TS 3.6',
        '-- Ivy enabled by default',
        '-- Smaller bundle size',
        '-- Update Zone.js | RxJS',
        '-- ModuleWithProviders',
        '-- Language Service',
        '-- ComponentHarness',
     ' -- ',
    'Ang 08',
        '-- TS 3.4',
        '-- Differential loading',
        '-- dynamic imports',
        '-- simplifies Web Workers',
        '-- new APIs',
        '-- bazel | Ivy coming',
    ' -- ',
    'Ang 07',
        '-- TS 3.1',
        '-- Ang Material | SDK',
        '-- Angullar Do-Bootstrap',
        '-- 8 phase rot AOT Compiln',
        '-- Angular error handling']

      ];

const subTopicsInfo = [
  [`JavaScript Framework for development of client side mobile web desktop appns -
  <br/>
  <br/>SPA (Single Page Application)
  <br/>
  <br/>written in MS TypeScript for adding types to the JS framework and simplifying JS (EcmaScript - modern JS) - with classes and interfaces 
  <br/>- ts files are then transpiled down to JS code to run in the browser 
  <br/>
  <br/>rendering pages in the DOM in response to user actions - 
  Angular uses View DOM in the template HTML and Content DOM inside other Components
  <br/>
  <br/>using the Angular/CLI to generate the main parts of Angular appns -
  <br/>
  <br/>Components - (must have a template) 
  <br/>Directives - (no template)
  <br/>Pipes - (pure or impure)
  <br/>Services - DI (Dependency Injection)
  <br/>Modules - contain groups of above els
  <br/>
  <br/>Change Detection to id when events occur 
  <br/>
  <br/>- Dependency Injection - 
  <br/>--- Services
  <br/>
  <br/>Decorators    
  <br/>
  <br/>ES (EcmaScript)
  <br/>
  <br/>TypeScript 
  <br/>
  <br/>Special files - package.json (diff libraries used) - angular.json - tsconfig.json - main/index.htmls and main/main.ts file 
  <br/>
  <br/>Special folders - node_modules for the large libraries used in project and librares 
  <br/>
  <br/>ng build gives the dist folder - ang13-training/favicon.ico | index.html | main.js 300kb | polyfill.js | runtime.js
  <br/>
  <br/>Data Binding
  <br/>
  <br/>Styles CSS | SCSS  
  <br/>
  <br/>Bootstrapping    
  <br/>
  <br/>LCH (Life Cycle Hooks)
  <br/>
  <br/>Routing and Component Router -  
  <br/>
  <br/>@Input and @Output
  <br/>
  <br/>Lazy Loading 
  <br/>
  <br/>Change Detection
  <br/>
  <br/>AoT Compilation
  <br/>
  <br/>Tree Shaking
  <br/>
  <br/>APF (Angular Package Format)
  <br/>
  <br/>Ivy
  <br/>
  <br/>View Engine 
  <br/>
  <br/>Promises
  <br/>
  <br/>Observables and the RxJS operators can manipulate streams of data over time and use Subjects to aid working with them 
  <br/>simplifying subscription and allow multi-casting events around the application. 
  <br/>
  <br/>RxJS (Reactive Extensions)
  <br/>Higher Ordrer Mapping ftns
  <br/>
  <br/>Forms
  <br/>
  <br/>ElementRef | ViewContainerRef| View DOM | Content DOM
  <br/>@ViewChild and @ViewChildren | @ContentChild | @ContentChildren
  <br/>
  <br/>Transclusion (Content Projection)
  <br/>
  <br/>HTTP-HttpClient 
  <br/>
  <br/>Angular appns vs Angular custom libraries
  <br/>
  <br/>Caching
  <br/>
  <br/>Storage
  <br/>
  <br/>ngrx ()
  <br/>
  <br/>Angular main libraries
  <br/>
  <br/>Security
  <br/>
  <br/>Schematics  
  <br/>
  <br/>CI/CD Jenkins
  <br/>
  <br/>Testing - Unit | Integration | End to End
  <br/>-- Unit
  <br/>-- Integration
  <br/>-- End to End 
  <br/>
  <br/>Security
  <br/>
  <br/>Webpack 
  <br/>
  <br/>Cloud - AWS | Azure 
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
  `- SPA (Single Page Appn) Web Framework - 
   `,
  '- mobile-laptop-desktop', 
  `- primarily used for writing Front End Appns 
  <br/>--- written in TypeScript 
  <br/>--- which are then transpiled to JS 
  <br/>-------to run on the browser
  `,
  ' -- ',
  `- Angular CLI (Command Line Interface) uses Webpack 
      - generate parts - build appn or serve browser
  `,
  '--- Command Line Interface',
  '----- initialise',
  '----- develop',
  '----- scaffold',
  '----- maintain',
  '----- server - test locally - default port - localhost:4200',
  '-------- ng add | ng generate - uses schematics to create library',
 '--------- schematics', 
 '--- uses ng-packagr - to produce npm packages in APF format',
 '--- uses webpack behind the scenes - to minify and speed up appn',
 ' -- ', 
 `-- main parts - Components - Directives - Pipes - Services - Modules `,
  '--- Components',
  '----- has a template',
  
  '--- Directives',
  '------- no template',
  
  '--- Pipes',
  '----- Pure',
  '----- Impure',

  '--- Services',
  '----- injected into constructor',
  '----- DI',
  '-------- Injector tree',

  '--- Modules',
  '----- @NgModule',
  '----- Bootstrapping',
  '----- Ang AppModule - root',
  `------- DoBootstrap - hook for manual bootstrapping of the appn
    <br/>--------- ngDoBootstrap()
  `,
  `--------- ngDoBootstrap()
    class AppModule implements DoBootstrap {
        ngDoBootstrap(appRef: ApplicationRef) {
            appRef.bootstrap(AppComponent); // Or some other component
        }
    }`,
  '------- Lazy Loading',
  ' -- ',
  `ngc compiler uses tsc (TypeScript) Webpack used by the Angular/CLI
  `,
  '- TypeScript',
  '--- tsc - TypeScript Compiler',
  '----- transpilation',
  '--- tsconfig.json',
  '-- TS Libraries  ',
  ' -- ',
  '- Template Ref Variables',
  ' -- ',
  '- Data Binding',
    '--- interpolation {{ x }}',
    '--- property binding []',
    '--- event binding ()',
    '--- 2 way binding [()]',
    ' -- ',
    '- Styles css | SCSS| SASS',
    '--- CSS',
   '----- Box Model',
    '--- SCSS pre-compiler',
    '----- variables',
    '----- methods',
    '----- inheritance',
    '----- mixins',
     ' -- ',
    
     '- Routing',
    '--- URLs', 
    '------ Routes path:\'x\' - component', 
    '-------- <base href=\/"\">', 
    '-------- HTML5 Urls', 
    '------ router-outlet', 
    '------outerLink',   
   ' -- ',
   '- Decorators',
    '----- metadata',
    `----- TypeScript features - 
    <br/>@Component() | @Directive() | @Pipe() | @Injectable | @NgModule
    `, 
    `--- Std list decorators - class | property | method| parameter
    `,  
    `Class Decorators
     ----- @Component() | @Directive() | @Pipe() | @Injectable() | @NgModule()
    `,
    `Property Decorators
     ----- @Input() | 
           @ContentChild() | @ContentChildren |
           @ViewChild() | @ViewChildren()
    `,
    `Method Dorators
     ----- @HostListener()`,     
   ` Parameter Decorators -
    ----- @Inject() | @Self() | @Host() | @SkipSelf() | 
           @Optional() | @Output() | EventEmitter()
    `,
    ' -- ',
    '- Change Detection - CD',
    '--- zone.js',
    '----- NgZone',
    '----- ChangeDetectionStrategy.OnPush',
    ' -- ',
    `- Services and DI - 
     Services are the provider from Injector hierarchy
    
    `,
    `--- DI (Dependency Injection) 
     - to avoid ext dependencies threats - 
  `,
  '--- Injector Hierarchy | tree',
  '----- dependency - Provider',
  `--- Design Patterns
  - aims to decouplle the impn of services from the components 
  <br/>-- uses DI design to work efficiency that lets our component classes and modules to be interdept 
  <br/>-- while maintaining consistency over ext deps injected in our appns - 
  <br/>-- reduces freq with which class/module base changes 
  `,
   ' -- ',
  '- Angular Universal lets Angular work on the Server and use SSR - Server Side Rendering - Also a way to speed up the initial load time by only loading static code and then dynamically loading the Angular framework after behind the scenes - very fast load time',
  '-- SSR (Server Side Rendering) - ',
 
  `-- Add ons - angular/pwa (Progressive Web Appns) and Service Workers - 
    angular/elements - angular/webWorkers 
    - Angular Universal - Angular Material - angular/flex-layout
  `
  ], 

  [`Components are the most important part of an Ang appn 
  - they have a @Component decorator with a selector - template and optional style
  <br/>
  - They must have a template - either internal or external with HTML   
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
      'A class - defines the properties and methods including constructor and events of a Component - Directive - Pipe - Service - Module', 
      '- constructor(){}',
      '-- properties',
      '-- methods',
      '-- Services',
      '-- Directives',
      '--- Observables',
      '--- Subjects',
      ' -- ',   
      'name of the External HTML file or inline HTML <br/>  templateUrl: \'./ts-menu.component.html\' or "Hello World" - Note directives dont have a template file',
      '- Pipes', 
      ' -- ',   
      'Decorators - eg @Component - define metadata for Angular annotations to class',  
      'decorator which defines the selector - template and styles of the Component', 
      '-- tag which can be used to install the Component', 
     
      '-- HTML part of the Component',
      '-- styles of the Component', 
      ' -- ',   
      '-- Interpolation {{}} - Property [] - Event () - [( )]',
      ' -- ',   
      `- ngOnChanges() - ngOnInit() most popular - ngDoCheck()- ngAfterContentInit() 
      - ngAfterContentChecked() - ngAfterViewInit() - ngAfterViewChecked() - ngOnDestroy()`,
      ' -- ',   
      '-- Component Tree - is all components in the appn in a tree branching structure with each Component having a CD mechanism',
      ' -- ',   
      '--- applied to every Component  to detect when the Component properties have changed ',
      `this - used in browsers at the top level of your program to ref a global object 
      <br/>- refs all properties or methods or events of a Component
      <br/>- this.foo = 135;  console.log('object val foo is ', this.foo);   
      `,
      `globalThis - to combine things like the global object in different environments
      <br/> browsers | Web Workers | 
      <br/> this.foo === windows.foo is true      
      `,
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
    [`Directives - are classes that add extra behavior to elements in Angular appns 
    <br/>
    <br/>--- Cant have a template - (unless a Component) 
    <br/>
    <br/>--- let us define a different style (attribute) or add or remove parts to HTML (template) but normally dont have templates
    <br/>
    <br/> decorator @Directive({}) 
    <br/>
    <br/>--- 3 types - attribute | template | Components -  
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
    <br/>--------- <ng-template>
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
              '----- *ngIf <div *ngIf="let x === 1; else elsePart"></div> <ng-template #elsePart>',
              '------ *ngIf ; else tmp-dir',
              '---------- else <ng-template #tmp-dir>',
              ' -- ', 
              '----- *ngFor <div *nfFor="x of List"></div>',
              `------- trackBy - to speed up for loop iteration
          @Component({
          <br/>  selector: 'app-list',
          <br/>  template: \` <div *ngFor="let item of items; trackBy: trackById">...</div> 
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
          `----- *ngSwitch <div *ngSwitch with case statements
          `,
          `------- case
          `,
          ' -- ', 
          `- ng-template <ng-template>
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
            `----- ng-template-outlet <ngTemplateOutlet>
            `,
           '--- ng-template instantiated',
           `----- Onamed inputs bound to 1+ input template variables 
           `,
           '--- ng-template uses',
           '------ else part of *ngIf',
           `------ with ngForOf 
           <ng-template ngFor let-hero let-i="index" [ngForOf]="heroes">
               <li>Hero number {{i}}: {{hero.name}}
           </ng-template>
           `,
           ' -- ', 
       '---- 3: Components are a form of Directive but have a template'
      
      ],  
      [`Why Pipes - transform data in the template
        <br/>pure and impure - decoraor - @Pipe() 
        <br/>- used in a template HTML to modify data 
        <br/> -- 
        <br/>--- inbuilt Pipes
        <br/>----- DatePipe
        <br/>----- CurrencyPipe
        <br/>----- DecimalPipe
        <br/>----- UpperCasePipe
        <br/>----- LowerCasePipe
        <br/>----- Percent  Pipe
        <br/>----- async Pipe
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
      'transform data for display',
      '- only applied in template',
      '--list inbuilt pipes - Date | UpperCase | LowerCase | Currency | Decimal | Percentage | Async',
      ' -- ',
      '--- inbuilt Pipes',
      '----- DatePipe',
      '----- CurrencyPipe',
      '----- DecimalPipe',
      '----- UpperCasePipe',
      '----- LowerCasePipe',
      '----- Percent  Pipe',
      '----- async Pipe',
     ' -- ', 
     '- Pure Pipes', 
     '- Impure Pipes',
    'Custom Pipes', 
    '@Pipe({})','-- custom transformation',
  ],
    [`Services and Dependency Injection 
    <br/> - implemented as a simple class with @Injectable({}) decorator - 
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
      '-- simplifies Components',
      `- A Service - is a TypeScript class - with shareable properties and methods 
       <br/>--- decoratred with an @Injectable([]) decorator
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
       `- DI (Dependency Injection) - is a design pattern 
        <br/>-- in which a class requests dependencies from external sources 
        - (wrt creatng them) 
      <br/>-- by default - DI searches for a Provider in the Injector Hierarchy
      <br/>---- First injector found - configured with a provider (matching) - supplies the dependency
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
     '@Injectable({providedIn: \'root\'})',
     '-- @Injectable({ providedIn : \'root\',}) - (appn - or root level injector) you can now inject the service anywhere in your appn',     
     '-- @Injectable({ providedIn : \'platform\',}) - a special singleton platform injector via a service - shared by all appns on page',    
     '-- @Injectable({ providedIn : \'any\',}) - provides a unique instance in each lazy loaded module | all eagerly loaded modules share one instance', 
     '-- @Injectable({ providedIn : \'Type<any>\',}) - associates the injectable with an @NgModule or other injector types',       
     'other values',
     'privders:[MyService]'
    ], 
    [`DI (Dependency Injection) - is a design pattern 
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
  
    `,
  '-- Injector Hierarchy DI system',
  `---- Injector Tree echoes the Component Tree
  <br/> ------ every Component has its own injector
  <br/>
  <br/> ------- When a Component requests a dependency 
  <br/>---------- Angular uses a Provider regd in the Components Injector
  <br/>
  <br/>------- if Component injector has no provider 
  <br/>--------- passes to parent Components Injector
  <br/>
  `,
  '- View object - an internal object that reps Ang template',
  `--- Ang builds a tree of views 
    <br/>----- which always starts with a fake root View
    <br/>----- that only contains 1 root element
    <br/>----- Ivy uses LView and TView.data arrays   
  `,
  '------- Injector Bubbling - ',
  '---------- Components local injector',
  '---------- root injector',
  '---- 2 Injector Hierarchies',
  '------- injectors - key-value pairs ',
  '------- ModuleInjector (Ivy R3Injector)',
  `----------- a Module level injector
      <br/>--- has a Records property that stores DI info 
      <br/>------ and stores instances of injectables    
      <br/>
      <br/>------ get() records a Map collection
      <br/>-------- key is a token 
      <br/>-------- value is instance corresponding to token    
  
      `,

  `------- ElementInjector (Ivy NodeInjector)
        <br/>is an injector that belongs to a node
        <br/>is an object that has ref to TNode and LView objects
     `, 
     '--------- NodeInjector implements Injector is saved in', 
      '----------- 9 contiguous slots in LView +', 
      '----------- 9 contiguous slots in TView.data',  
  '----------- object refs to',
  `------------- TNode - any kind of object : 
  <br/> - element| ng-template| ng-container
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
    <br/>Each bloom filter has a ptr to the parent bloom filter 
    <br/>--- in the "packed" parentLocation slot (n + 8)
    <br/> Ivy bloom size is 256 bits - divided into 8 parts - 
    <br/>---   
  `,
  `----- Sandboxing - Multiple service instances 
  <br/> ------ at the same level of the Component
  <br/> ------ eg A Service that holds state for its companion comp instance       
  `,
  '------- Multiple Service Instances',

  `------ @Host() - limits the search for a matching provider
  <br/>------- root injector -  
  `,
  '----- @Optional()',
  '----- @Self()',    
  '----- @SkipSelf()',
  '----- ',
  `- DI Tokens - When you configure an injector with a provider - you are associating that provider with a DI token
  <br/>The injector lets Angular create a map of any internal dependencies.
  <br/>The DI token - acts as a key to that map - 
  <br/>The dep value is an instance & the class type serves as a look up key 
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
  '@Injectable({})', 
  '- declare locn', '- nesting','- Sharing','typical tasks',
  '- Providing a Service', 
  '-- @injectable({ providedIn: \'root\'})',
  '--- providedIn: \'root\'',
  '--- providedIn: \'platform\'',
  '--- providedIn: \'any\'',
  `--- providedIn: <T>\'
  ` ],
    [`Decorators - add metadata to a class | objects or methods 
    -  which defines annotations 
    - used by TypeScript compiler tsc
    `,
     '- Metadata - describes other data',
     '- Annotations - are hard coded language features - set on a class - reflect metadata library', 
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
     `----- @Input() - most used decorators - 
     <br/>- passes data from parent (host) component to child
     <br/>- related to DOM property in template where child is used     
     `,
     '-------- passes data from parent to child',
     '- 3 ways to use @Input()',
     `--- 1: plain - @Input() message: string;
     <br/><child-one message="hi there"></child-one>
     <br/>In he child-one - <p>{{ message }}</p>
     `,
     `--- 2: alias - @Input('msg') message: string;
     <br/> <child-two msg="hi there"></child-two>
     <br/>In he child-two - <p>{{ message }}</p>
     `,
     `--- 3: setter/getter - use the TS get and set auto-properties
 <br/>
     private _message: string;

@Input() // specify Input decorator here
set message(inputMessage: string) {
  this._message = inputMessage && inputMessage.toUpperCase(); // uppercase message here
}

get message(): string {
  return this._message;
}
     `,
     ' -- ',
     `----- @Output() - marks property in child 
     <br/> to let data travel from a child to a parent 
     <br/> binds a property of type EventEmitter class   
     <br/> @Output() myOutput:EventEmitter<string>= new EventEmitter();  
     `,
       '------ pass data from child to a parent class',
       '-------- EventEmitter()',
      `------- Ex @Output() myOutput:EventEmitter<string>= new EventEmitter();  
      <br/>Using emit()
      sendValues(){  
        this.myOutput.emit(this.outputMessage);  
      }  
      `,
      `---------- using emit() 
      <br/>sendValues(){  
        <br/>this.myOutput.emit(this.outputMessage);  
    <br/>}  
    <br/> 
    <br/> <app-student [myinputMsg]="myInputMessage" (myOutput) ="GetChildData($event)"></app-student>   
     `, 
     ` using the myOutput() event
     <br/><app-student [myinputMsg]="myInputMessage" (myOutput) ="GetChildData($event)"></app-student>   
     `, 
     ' -- ',
     `----- @HostBinding() - declares a host property binding
     Angular automatically checks Host property bindings during CD
     <br/>If binding changes - it updates the host element of directive  
     `,
     '------- declares a host property binding',
     '------- binds a property to the host element',
     '---------- Ex @HostBinding(\'class.box1\') toggle: boolean = false;',
     '------------ value of toggle determines if box1 class is applied',
     '--------- on change - checked by CD',
    ' -- ',
     `----- @ContentChild() - selects project content 
       <br/> 1st el matching selector from Content DOM
     `,
     '------- selects projected content - 1st el matching selector from Content DOM',
     '---------- Content DOM',
     ' - ',
     `-------   @ContentChildren() - fetch a QueryList of els from Content DOM
     <br/>configures a content query 
   `,
   `------------- list of queries
   `,
   '----------- configure content query',
   '------------- list of queries',
     ' -- ',
     `----- @ViewChild() - configures a View Query from template of Component    
     <br/> - matching selector in View DOM tree
     <br/>--- Provides instance of another component in a parent component 
     <br/>---- parent component can access methods of  
     <br/>--- used in ngAfterViewInit LCH
     `,

     `----- Simple Ex - 
     @ViewChild(ColorSampleComponent)
     primarySampleComponent: ColorSampleComponent;
     `,
    '------- config a View Query', 
    '--------- from template of Comp',    
    '--------- View DOM tree',
    '----------- instance in parent comp',
    '---- parent comp access methods',
    `--- ngAfterViewInit() Life Cycle Hook
      <br/>----- use to write initialization code 
    `,
    '-- read - ',
    '-- static - ',
     `---- Ex ViewChild 
     <br/> @ViewChild(DemoComponent, { static: false }) hello: DemoComponent;
     ngAfterViewInit() {
        console.log("Hello ", this.hello.componentName);
     }
   }
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
     `----- @HostListener() - decorator that declares a DOM event to listen for  
     -------- also provides a handler method to run when event occurs
     ---------- which is invoked when host element emits specified event 
     `,
     '------- provides a handler',
     '------- triggered on event',  
    ' -- ',
     '--- Parameter',
     `----- @Inject() - A DI token that maps to the dep to be injected 
       <br/> a par decorator on a dep par of a class constructor 
       <br/>specifying a cust provider of the dep
     `,
     '----- DI token',
     `----- @Self() - instructs Ang to look for dep only in local injector  
     <br/>- part of current Component or Directive
     <br/>--- Resolution Modifiers - mod injector behavior
     `,
     '------- local injector',
     `----- @Optional() - marks dep as being an optional parameter 
     <br/> if dep not found it returns null instead of an error
     `,
     '------- returns null if not found',
    `----- @skipSelf() - instructs Ang to look for dep only in parent injector  
     <br/>- parent of current Component or Directive
     <br/>--- Resolution Modifiers - mod injector behavior
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
     [`Interfaces - define a contract with a set of properties and or methods - to be implemented by a class
      <br/>export interface IGame:{ prop1: number; prop2: string; prop3: number;}

    `,
    '- export', 
    ' - export interface IGame{ gameId: number, gameName: string, gameCode: string, etc. }', 
      'Classes - can implement interfaces and must bind by the contract - can have constructor| properties| methods| events',
      '- constructor - important for DI of services', 
      '- properties - class data - can be private - default public', 
      '- methods - functions on the class', 
      '- events - ', 
      '-- this to ref the class object properties and methods'
    ],
    [`ES EcmaScript - modern JavaScript
    <br/>is a JS std to ensure interoperability of web pages wrt diff browsers
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
    <br/>These add features onto the original JS to simplify coding 
    <br/>eg. Fat Arrow ftns | const | let with block scope | Promises | \`\` string literals
    <br/>---- string and array functions too 
    `,
        '-- modern JavaScript',
        '---- ES6 (ES 2015)',
        `------ let const var
        <br/>----- let - has block scope
        <br/>----- const - has block scope
        <br/>----- var - has function or app scope
        `,
        '---- fat arrow ftns (x)=> x * 2;',
        `---- For/of
        <br/>
        const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}`,
        '---- Map Objects',
              '---- Classes',
        '---- Promises',
        '---- defaul params',
        '---- ftn rest params',

        `---- String -
        ------- includes | startsWith | endsWith
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
        '---- JS Modules'
    ],
    [`TypeScript - JS with syntax for types - 
      <br/>data types - number | string | boolean | Array | 
      <br/>---- null | undefined
      <br/>
      <br/>- Object Oriented Language
      - strongly typed and uses inferred types 
      - interfaces and types   
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
      `--- Type Annotations - used to enforce type Checking
      <br/> ----- helps compiler to check types and avoided data type errors 
      <br/> -------- (not mandetory in TS) 
      `,
      '----- helps compiler check types ',
      `- JS Primitive Types 
      <br/>--- JS is a dynamically typed language
      <br/>--- Type Checks are performed at runtime
      <br/>---- when the program is executing 
      `,
      '--- string',  
      '--- number',
      '--- boolean',
      '- JS Primitive Values',
      '--- null',
      '--- undefined',
      `- Type safe - means No casting or Runtime type errors
      <br/> - relates to a portion of code 
      `,
      '--- No Casting',
      '--- No Runtime type errors',
      ' -- ',
      '- TS Basic Data Types',
      '--- JS Primitives',  
      '--- JS Primitive Value',
      '----- strictNullChecks on/off',
      '--- Array',
    '--- any',
    '----- unknown (TypeSafe any)',
    `--- Object Type
    var employee : { 
      id: number; 
      name: string; 
  }; 
  
  employee = { 
    id: 100, 
    name : "John"
  }
    
    `,
    '----- interfaces | classes',
    '----- Type aliases',
    ' -- ',  
      '- Advanced Data TYpes',
      '--- Conditional Types using ?',
      '--- Generics using <T>',
      '--- Union Types',
      `----- Composite types - data types that have 1+ fields dynamically linked to fields in another data type
        <br/>- useful for creating a single data type - refs info in > 1 data source or refs > 1 table or structure in a data source
      `,
      '------ Narrowing - ',
      `-------- Type Guards - let you narrow down the type of a variable within a condnal block
       <br/>- uses typeof x 
       <br/>- uses instanceof y
      `,
      '----------- conditional value check',
      '----------- typeof x',
      '----------- instanceof y',
      '----------- in type',
      '----------- type guard ftn with predicate',
      '----------- type guard ftn with assertion  ',  
      '--- Distributive Conditional Types',
      '--- Inferred Types - TS determines the types',
      `- duck typing - powerful feature which brings strong typing concepts in TS code  
        <br/>type checking that focuses on the shape that values have - checks for properties instead of Objec type
        `,
        '- tooling - auto-completion | navigation | refactoring',  
        '- TypeScript Compiler - MS - transpiles ts with type information to js files', 
      '- .ts files - files with Type Infon - makes data TypeSafe',
      '-- transpilation ts files down to JavaScript files', 
      `- tsconfig.json - identifies the project or appn as a TypeScript appn 
       - <br/> - with this ids root path - CompilerOptions - AngularCompilerOptions
      `,   
      '-- CompilerOptions',
      '-- AngularCompilerOptions',
      '--- fullTemplateTypeCheck: true',
      '- JS files - ES5 files - with std JavaScript' , 
      '- ngc - (Angular Compiler ) uses tsc to transpile ts to js files',
      `- Barrels - (index.ts) is a way to rollup exports from several modules into one convenient module
      <br/>The barrel itself is a module file that re-exports selected exports of other modules
      <br/> - module file which provides a centralised place for exporting 
      <br/> -- components | interfaces | services | directives | pipes
      `,
  
          `-- Exs of Composite data types - sequence | set | list | Array | table | Record | ftn call | union | intersection   
        `,  
      `- Union types - A | B eg   let unionJack : number | string;
      `,`- intersection types - expressiveness of type system - are composite data types - used to assign diff types to an object
      <br/>useful for defining overloaded functions  
      <br/>class Egg { private kind: "Egg" } and class Milk { private kind: "Milk" }
      `,
      `- product types - assigned to a tuple `,
     
      `- interfaces (custom Object types) - export interface Course{ title: string; descn: string; ageYears: number;} Type definition object   
      <br/>We can make properties optional by adding a ? at end of property name
      <br/>- note JS does not have interfaces
      `,
      '-- optional properties ageYear?: number - must be at the end of the interface defn export interface Course{ title: string; descn: string; ageYears?: number;}   ',
      '-- readonly properties - export interface Course{ readonly title: string; descn: string; ageYears: number;}',
      '--- const myIfObj: Course = { title: \'My Course\', descn:\'My Descn\'',
      `- Type Aliases - eg can be used with union type - 
      <br/>type CourseStatus = "draft"| "published" | "unpublished";
      <br/>  let x: CourseStatus = "draft"; 
      `,
      `- classes - helps structure reusable Angular objects  
        with multiple declarations for methods - properties - events 
      `,
     
      '-- index.ts'
      
    ],
    [`Angular CLI (Command Line Interface) tool - 
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
         <br/>--- ng test
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
        `,
        '-- initialise | develop| scaffold',
        '---- from a cmd shell',
        '------ Installation - npm install -g @angular/cli',
        ' -- ',  
        '-- ng Commands',
        `---- ng new`,
        `---- ng add
        `,
        `---- ng generate
      
        `,
        `---- ng build
        
        `,
        `---- ng update
      `,
        `---- ng serve
      <br/>----- launches the server | watches your files | rebuilds app on change to files  
      <br/>----- launches server by default on port 4200 on localhost
      <br/>----- localhost:4200 
      <br/>
      <br/>----- uses builder dev-server
        `,
        `---- ng test
      `,
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
      '--------  4 Actions - Create | Rename | Overwrite | Delete',
      '--------  SchematicContext',
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
      
    `,'- simplifies JS ',
      '- simplifies Array | numbers | objects | strings - manipn',
      `- ES6 replacements for lodahs
       - Map -    
       - Filter
       - Reduce -
       -
       - Head   
       - Tail 
       - Rest
       - spread
       -      
       - Curry
       - Partial 
       - Operators
       - Paths
       - Pick
       - Constant
       - Identity
       - Noop
       - Chaining
       - FLow   
  `,`
       - Map -    
       - Filter
       - Reduce -
     `  
    ],
    ['- package.json', 
     '- angular.json',  
     '-- dist folder',
     '-- node_modules folder','- primary entry point for @angular/core lib' 
    
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
    [`Template Ref Variables
    
    `,
    `--- using a #`,
    '---4 types of variables',
    '----- DOM el in template',
    '----- Directive | Component',
    '----- TemplateRef in ng-template',
    '----- Web Component'
    ],
    [`Data binding - is a technique where data stays in sync between the Component and the View
    <br/>automatically keeps your page up to date based on appn state
    <br/>  
    <br/>- When user updates data in the view 
    <br/>--- Ang updates the Component
    <br/>- When Component gets new data 
    <br/>--- Ang updates the View
    <br/>
    <br/>- techniques
    <br/>--- Interpolation {{}}
    <br/>--- Property Binding [] 
    <br/>--- Event Binding ()
    <br/>--- Two way data binding [()] 
    <br/>
    `,
    `- String sinterpolation {{x}} - from data source to target view
    
    `,    
    `-- {{ val }}
    <br/>
    `,
    `- Property binding - [] 
    <br/>--- Properties are features of DOM nodes 
    <br/>----- from view target to data source
    <br/>------- RHS of binding is a template expression
    <br/>--------- It should equate type of value - number | string| etc
    <br/>----- Ex Property Binding
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
    `- Attribute binding - <button type="button" [attr.aria-label]="actionName">{{actionName}} with Aria</button>
    
    `,
    '- Class binding - [class]="classExpression"',
    '- Style binding - <nav [style]=\'navStyle\'>',
    
    `- event binding - () 
    <br/>--- from view target to data source 
    <br/>----- 
    <br/>
    <br/>
    <br/>
    `,
    
    `---- <button type="button" (click)="onSave()">Save</button>
    <br/>
    <br/>
    <br/>
    <br/>
    `, 
    `- 2-way data binding - Banana in a box - [(target)]
    <br/>--- is a combination of propert and event binding
    <br/>----- combination of [] and () 
    <br/>----- [] displays info to end user
    <br/>----- () responds to user making changes to undrelying data 
    <br/>------ makes a connection between the view (tempplate) and component class
    <br/>  
    `, 
    `-- [(ngModel)] = "name"
    <br/>  
    <br/>
    <br/>
    `
  ],
    ['Why Style - color-size-position', 
    '- CSS', 
    '-- CSS-Box-Model','-- margins','-- padding','-- borders','-- content',
    ' -- ',     
    `-- Display property - is the most impt property for displaying layout
    <br/>Every HTML element has a default display value dept on type of element - normally block or inline
    `, `--- block - Block level els always start on a new line and takes up the full width available Left and Right
      <br/>Exs of blocks are div | h1 to h6 | p| form | header| footer| section
    `,
    `--- inline - An Inline display does not start on a new line and only takes up as much space as necessare
    <br/>£xs of Inline are - span | a | img   
    `,
    `<br/>display:none - normally used with JS to hide/show els without deleting and recreating them `,
    ' -- ',     
    `-- Z-index - specifies the stack order of an element
    <br/>Only works on positioned elements - 
    <br/>position: absolute, relative, fixed, sticky - flex items
    `,
    '--- position: absolute, relative, fixed, sticky - flex items',
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
    `--- NgModule - is a class marked by the @NgModule decorator 
    <br/>takes a metadata object that describes how to compile a components template 
    <br/>and how to create an injector at runtime 
    <br/> 
    <br/>configure the injector and the compiler and help organize related things together
    `,
    `-- Diff between JS Module and Angular Module
    <br/>1: JS Module (ESM) is a file 
    <br/>2: Angular Module is a class with related Components, Directives, Pipes, Services etc.
      
    `, 
    `ESMs (EcmaScript Modules) - are the official std format  
    <br/>-- leads to fast reload speeds and smaller bundles 
    <br/>-- to package JS code for reuse 
    <br/>-- defined using import and export statements
    <br/>--- for interoperability 
    <br/><script type="module"> fires off lots of dependencies
    <br/>--- but due to caching and HTTP2 support on Server - it works
    <br/>--- APF (Angular Package Format) - uses 1 flat ESM per entry pt
        
    `,  
    `--- dynamic imports (Ang 08) - 
    <br/>TypeScript 2.4 included support for dynamic import() expressions 
    <br/> - lets us asynchronously load and execute ESMs (EcmaScript Modules) on demand    
    <br/> --- means we can conditionally and Lazy import other modules and libraries
    
    <br/>In Angular - import statements 
    <br/> -- are written as inline function calls within modules    
    `,
    `--- static import of modules is preferred for most modules 
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
   [`Bootstrapping
         <br/>reads the angular.json -
         <b/>Loads the index.html file - app-root 
         <b/>Loads the main.ts file - ids the AppModule - ids the AppRoutingModule and AppComponent
         webpack - dep graphs - app.js and vender.js
    `,
    `-- initializing/loading appn - application.json file - 
      <br/>--- loads index.html - 
      <br/>------ app-root 
      <br/>--- main.ts 
      <br/>------ AppModule and AppComponent 
      <br/>--- webpack
      <br/>--- angular.json file - 
         <br/>1: Where to find source of appn 
         <br/>2: How to build the appn 
         <br/>3: Which files to refer to for testing -   
         <br/>4: Where to find the main file (main.ts) - identifies which module to bootstrap  
      `, 
    `--- platformBrowserDynamic().bootstrapModule(AppModule)
    <br/>----- The platformBrowserDynamic() method - creates an injector 
    <br/>------- configured by the PlatformModule - contains platform specific deps
    <br/>------- allows multiple apps to share a platform confign
    `,
    `----- bootStrapModule() - creates a child injector of the platform injector 
        <br/>------- configd by the AppModule
        <br/>--------- called the root ModuleInjector
        `,
        '------- root ModuleInjector',
        '--------- hierarchy of injectors (for each Component)',
        '------- ElementInjector',
        '---------- hierarchy of Component Injectors ',
        '------- NullInjector',    
        ' -- ',
        `- angular.json 
            <br/> --- 
            "build": {
              "builder": "@angular-devkit/build-angular:browser",
              "options": {
                "outputPath": "dist/ang13-training",
                "index": "src/index.html",
            `,
        `--- Loading index.html etc.
     <br/>---- first page to be loaded - 
     <br/>---- <body><app-root></app-root></body>
     `,
     '---- 3rd party libs + appn',
     `---- main.ts
     <br/>

import { enableProdMode } from \'@angular/core\';
import { platformBrowserDynamic } from \'@angular/platform-browser-dynamic\';

import { AppModule } from \'./app/app.module\';
import { environment } from \'./environments/environment\';

if (environment.production) {
  enableProdMode();
}
  
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
     `,
     '----- plaformBrowserDynamic - JIT compiles AppModule',
     `------ AppModule imports the 
     <br/>BrowserModule (imported only once in the root folder) and 
     <br/>AppRoutingModule ( imports RouterModule and identifies ComponentRoutes)
     <br/>identifies which is the main Component - eg AppComponent
      <br/>
      @NgModule({
        declarations: [
          AppComponent,
          HelloWorldComponent
        ],
        imports: [
          BrowserModule,
          AppRoutingModule
        ],
        providers: [],
        bootstrap: [AppComponent]
      })  
      export class AppModule { }
     `,
     '------ BrowserModule - impored only once in the App root',
     '------ AppRoutingModule - imports RouterModule and Routes and identifies Component Routes',
     `------ AppComponent - identifies the root Component from which the other Components - Directives - Pipes - Services and other Modules are referenced
     
     `,
     '---- root Module/Component',    
      `-- Webpack - roams over your appn source code looking for import statements - building a dep graph and emitting 1+ bundles
      <br/>It can preprocess and minify diff JS files - TS | HTML| CSS 
      <br/>2 sep dep graphs - 
      <br/>1: app.js (only appn code) 
      <br/>2: vender.js (all the vendor deps) 
      `,
      '1: app.js',
      '2: vender.js'
    ],
    [`Life Cycle Hooks - A component has a life-cycle that starts when 
    <br/>Angular instantiates the Component class 
    <br/>and renders the Component view and child views -
    <br/>
    <br/>We can fine tune the hehavior of our components during creatin | update | destruction
    <br/>
    <br/>
    <br/>ngOnChanges - details which properties have changed and how theyve changed  
    <br/>
    <br/>ngOnInit - the most common LCH contains initialisation logic for the Component
    <br/>
    <br/>ngDoCheck()
    <br/>
    <br/>ngAfterContentInit
    <br/>
    <br/>ngAfterContentChecked
    <br/>
    <br/>ngAfterViewInit
    <br/>
    <br/>ngAfterViewChecked
    <br/>
    <br/>ngOnDestroy - which is where we place the cleanup logic for the Component
    `,
    '- instantiates class', 
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
     [`ComponentRouter - to handle the navigation from 1 view to the next 
     <br/>- Interpreting browser URLs as an instn to change view -
     <br/>ng new ang-app --routing --defaults 
     <br/>using the Angular CLI to generate a basic Ang appn with routing enabled 
     <br/>We can use ActivatedRoute and to get data about the Routes
    <br/><router-outlet></router-outlet> lets us position the routing infon in our Component template -
    <br/>   
     <br/>routing normally uses RouterModule.forRoot(routes) where routes defines the actual component routes linking URL paths with various components 
     <br/>Note that Lazy Loading can use Routing using a RouteModule.forChild(routes)
     <br/>We can use the Router Resolver to prefetch data to ensure the data is objtained first - 
     `,
     '- interprets a browser URL to change View', 
     'routes:Routes = [{path:"first-comp",component: FirstComponent}]',
     '<base href=\/"\">', 
     '-- HTML5 Urls', 
     '- <router-outlet></router-outlet> location where the router links will go', 
     '- <a routerLink="/first_comp">link</a>',
     ' -- ','- Routes','- RouterModule', '-- @angular/router', 'RouterModule.forRoot(routes)',
     '-- RouterModule.forChild(routes) - lazy load the Component or Module',
     '- Nested Routes - ',
     ' -- ','- get Route Info','-- ActivatedRoute','-- ActivatedRouteSnapshot','-- RouterStateSnapshot','-- .snapshot.paramMap.get(\'id\') ','-- ParamMap','- Wildcard Routes **','-- PageNotFoundComponent','redirectTo()', 
     ' -- ','- Router Guards','Componentless-routes','-- 5 Guard options','--- canActivate','--- canActivateChild','--- canDeactivate',
     '--- Resolve',
     '--- CanLoad', 
     ' -- ',
     `- When a router navigates to a new Comp view - it updates browser location and history with URL for view - ', '- for modern browsers - HTML5 History push state - no server page request','-- older browsers - use # for no server request - localhost:3002/src/#/crisis-center
     `,
     '-- LocationStrategy','--- PathLocationStrategy',
     '---- HTML5 style navigation','--- HashLocationStrategy', '---- useHash:true',
     ' -- ','-- pre-fetches data before deciding if to jump to the URL or not', '-- create a new Component but include rooting in it','-- The router is used for Lazy Loading'],
     [`Parent Child commn - is normally implemented using the @Input() and @Output() decorators.
     <br/>to share info between a parent and one or more child components 
     <br/>
     <parent-component>
         <child-component></child-component>
     </parent-component>
     <br/>
     `,`- @Input() - lets a parent Component update a child component data 
       <br/> 
      `, 
      `-- Property Binding [] - sets a property on a component class 
      <br/>
      `,
      `--- ngOnChanges() - intercept input property changes 
      <br/>import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
      <br/>ngOnChanges(changes: SimpleChanges) {
      <br/>
        `,
     `- @Output() - lets a child send data to the parent component
       <br/>
    `,
     `-- Event Binding - () to fire an event
     
     `,
     `  --- EventEmitter() - should have a type of EventEmitter()
     <br/>@Output() newItemEvent = new EventEmitter<string>()      
     `,
     `--- Combine Property and Event Binding by using Banana in a Box 
     `
    ], 
     [' -- '],
     [`Lazy Loading - 
     `, 
     '-- Initially only Modules could be Lazy Loaded (but now Components can too)', '-- browser URL','RouterModule.forChild()',
    'children', 
    `- Feature Modules - import CommonModule instead of BrowserModule (imported once in the root)
    `,
    `ng g m CustFeature - creates a Module called CustFeatureModule 
    <br/>
    <br/> import { NgModule } from '@angular/core';
    <br/>import { CommonModule } from '@angular/common';
    <br/>
    <br/>@NgModule({
      <br/>imports: [
        <br/>CommonModule
        <br/>],  
        <br/>declarations: []
        <br/>})
        <br/>export class CustFeatureModule[}
    `,
    `Component in a Feature Module - 
    <br/>ng g c cust-feature/CustFeature
    <br/>
    <br/>import { CustFeatureComponent } from './cust-feature/cust-feature.component';
    <br/>
    <br/>@NgModule({
      <br/>imports: [
        <br/>CommonModule
        <br/>],
        <br/>declarations: [
         <br/>CustFeatureComponent
         <br/>]
         <br/>})
    `,
    '- Shared Modules','-- PreloadingStrategy',
    '--- PreloadAllModules - to initially fetch all modules', 
    ' -- ',
    '-- Lazy Load Components (not Modules)',
    '- async-await is used for lazy loading Components',
    `---  async getLazy2() {this.viewContainerRef.clear(); 
      <br/>const { Lazy2Component } = await import(\'./lazy2.component\'); 
      <br/>this.viewContainerRef.createComponent( this.cfr.resolveComponentFactory(Lazy2Component));}
      `,
      `--- Simplified in Angular 13
    <br/>Ivy creates the Component in ViewContainerRef (without a factory)
    <br/>
    <br/>export class AppComponent {
      <br/>@ViewChild("formComponent", { read: ViewContainerRef })
      <br/>formComponent!: ViewContainerRef;
      <br/>
      <br/>constructor() {}
      <br/> 
      <br/>async loadForm() {
        <br/>const { LazyFormComponent } = await import("./lazy-form.component");
        <br/>this.formComponent.clear();
        <br/>this.formComponent.createComponent(LazyFormComponent);
        <br/>}    
    `],
    [`Change Detection is a builtin framework feature that ensures auto sync between changes to data and the view
      <br/>zone.js but has a class ngZone to help with CD properties and methods
      <br/>The ChangeDetectionRef is base class that provides CD ftns - A CD tree for changed views
      <br/>We can also run via ChangeDetectionStrategy.onPush() to inc performance and just check a branch 
      
      <br/> NgZone - 
    
      `,
    `- zone.js - provides a method (zones) for encapsulating and intercepting async activities in the browser
    <br/> - are execution contexts lets angular track start | completion of async activities

    `,
    '---- zones',
    '---- execution contexts',
    `-- Browser JS execution flow (Node.js) is based on an Event Loop
    <br/>
    `,
    '--- Event Loop - JS Engine waits for tasks | executes them | sleeps',
  
    `------ MacroTasks - mouseMove | setTimeoout
  
    `,
    '--------- changes to DOM only after tasks completed',
    `-------- MicroTasks - come solely from our code
      <br/> ---------- run before next macrotask is run
    `,
     '--------- created by promises',
     ' -- ',
    `- ChangeDetectorRef - base class that provides CD functionality 
      <br/>  
      <br/>A change detection tree collects all views that are to be checked for changes
      <br/>
      <br/>Use methods to add | remove views from the tree | initiate CD | explicit mark views as dirty - changed
      <br/>Input changed | events -
      <br/>
      <br/>markForCheck()
      <br/>detach()
      <br/>detectChanges()
      <br/>checkNoChanges()
      <br/>reattach() 
    `,
    `- ngZone - an injectable service 
    <br/>-- for executing for work inside or outside of the Angular zone  
    <br/>
    <br/>-- optimizes performance when starting a work 
    <br/>-----consisting of 1+ async tasks that dont require UI updates or error handling to be handled by Angular
    <br/>
    <br/>runOutsideAngular() 
    <br/>- kicks off but then run inside Angular with run()
    <br/>
    <br/>isInAngularZone() - assertInAngularZone() - assertNotInAngularZone()
    <br/>
    <br/>properties 
    <br/>- hasPendingMacroTasks() - hasPendingMicroTasks() - isStable()- onStable() onError()
    <br/>methods 
    <br/>- run() runTask() - runGuarded() - runOutsideAngular()
    `, 
    '- service',
    '- helps performance',
    '--- asynchronous tasks',
    '------- runOutsideAngular()',
    '----- run() - to re-enter',
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
    '- manual CD', 
    '- compares the template expression values before + after an event - for all components of the Component tree',
    '- ChangeDetectionStrategy.onPush() - ensures only Component tree including source Component', 
    '- without Angular zone - NgZone.runOutsideAngular()',
    '--- change detection is not required'
  ],
    [`AoT - compiler converts HTML + TS code into efficient JS during build phase 
    <br/>--- before browser downloads and runs the code 
    <br/>
      <br/>is better due to - the code is compiled at build time 
      <br/> and hence the code to be sent to the browser does not contain the Compiler itsel and is much smaller
    `,'Compile time build', 'No need for Compiler', 
    `3 Phases - 
    1:Code Analysis- 2:Code generation- 3:Template type checking
    `,
    `-1 AOT Collector - analyzes the metadata and reps in best manner - recorded in the metadata.json file
    <br/>like a diagram of the overall structure of a decorator's metadata 
    <br/>metadata is like an AST (Abstract Syntax Tree)      
    `    ,
    '-2 Metadata collected from the Code Analysis phase is interpreted by Compilers Static Reflector + check for metadata errors ',
    '-3 Angular template compiler - uses tsc to validate binding expns in template - fullTemplateTypeCheck: true in tsconfig',
    `Benefits are 1: Executable code loaded - 
    2: inlines all ext HTML+CSS - 3: finds template errors - 4: Reduces injection attacks - 5: Reduces bundle load of Frmwk
    `],
    ['Remove dead code from the bundle - unused bits', 
    '- Dead code',
    'Ivy tree-shakes - DI-CP-View - Content queries - Animations Pipes i18n core frmwork services LCHs - easier to ship librarries', 
    'View Engine tree-shakes - Static analysis of code and then compiles whats left'
    ],  
     [`APF - Ang Package Format 
     <br/>- is an Angular specific specn for the structure 
     <br/>and format of npm packages 
     <br/>
     <br/>- used by all Angular packages @angular/core and Angular libraries etc.
     <br/>
     <br/>- compatable with all tooling offere by the Angular team + JS ecosystem + 3rd party developers  
     <br/>
     <br/>- Developers can rely on the CLI and ng-packagr to produce packages in the APF 
     `, 
    '- npm packages',
    '- @angular/core | @angular/routing',
    '- Tooling support',
    'ES versions -',
    `Angular CLI - is a Command Line Interface tool 
    <br/>- used to initialize | develop | scaffold and maintain 
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
     <br/>Added in the @schematis/angular colln - ng g   and ng add     
    `,
    'ng-packagr - a build tool - Angular CLI uses',   
    'esm and fesm (flattened)',
    '.d.ts files',  
    '-  package.json - "type": "module" - No CommonJS Modules',
    `Angular 13 new improved version - Node package exports 
    <br/>- es2020 support Ivy partial compilation
    `,
     `- not rely on Internal APIs - using the Node.js 
     <br/>- sub-path pattern feature 
     <br/>- displaying multiple outputs at each entry point
     <br/>`, 
     '- BigInt - Dynamic Import - Nullish Coascing - Optional Chaining -   Promise.allSettled - string#matchAll - globalThis - Module Namespace exports - import.meta', 
     'for Libraries - publishing tsconfig.json - "angularCompilerOptions": {"compilationMode": "partial"}- no particular runtime version - '
  ],
  [`Ivy - is new Compilation and Rendering Pipeline which creates template instructions to render info to the DOM
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
  `- Locality - single file compilation
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
    `- AOT with Ivy is faster and should be used by default
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
     - Reduced size - 
     - faster compilation 
     - locality -   
     - enhanced testing + debugging - 
     - easier dyn comp loading - 
     - mobile exp
     - backwards compaable - 
    `,
    'EntryComponents - are no longer required',
    ' -- ',
    'Ivy DI (Dep Injection)',
    '---- R3Injector (ModuleInjector)',
    '-------- Store property',  
    ' -- ',
    '---- NodeInjector (ElementInjector)',
    '-------- TNode object',
    '-------- LView object',
  ], 
    [`ViewEngine old - legacy compilation and rendering pipeline
    <br/>
    `, 
    '- tended to use JIT compilation by default',
    `- 3 Phases - 
    <br/>1:Code Analysis- 
    <br/>2:Code generation- 
    <br/>3:Template type checking
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
      `,`- abstract base class - to render template to DOM - 
      can be overridden for Custom Rendering - 
      RendererFactory2`, 
    '- 1: Template Parsing + creating Data Structure', 
    '- 2: '  ,
    '-- Interpreter', 
    '-- metadata.json file',
 '- 3: Compilation', 
    '-- 2 files generated',
    '--- 1: Component.js',
    `--- 2: ngFactory.js - static repn of code in Component.js
      <br/> generation of this file takes a lot of time and processing
    `,
    '--- application.js file',
    'ngFactory.js file - contains the static repn of code in a Component',
    '--- JIT or AOT',
    `-- EntryComponent is any component that Angular loads imperatively - not refd in the template - by type 
    <br/>you bootstrap the component in an NgModule - or including it in a routing defn
    <br/>- 1: Bootstrapped Component
    <br/>- 2: A Component you specify in a route defn
    `],
    [`Promises - 
    
    `,  
    '- then()', 
    '- future tasks', 
    '- new Promise(resolve, reject)',
    '- asynchronous',
    '- Promise.resolve(\'done\').then((val) => {throw new Error("fail")}).then((val) => console.log(val)).catch((err) => console.error(err));',' -- ',
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
    ' -- ',
    '--- rxjs operators',
    ' -- ',
    '- Subjects', 
    '--- behaviorSubject', 
    '--- asyncSubject', 
    '--- replaySubject'
    ],
    [`rxjs - Reactive Extensions - 
    <br/>--- is a library for reactive programming using Observables
    <br/>------ for composing asynch + event based programs
    <br/>------ simplifying composing asynch impn or callback based code 
    <br/>--- using Observable sequences
    <br/>--- based on Observables -
    <br/>
    <br/>--- RxJS concepts -
    <br/>----- Observable - reps invokable colln of future values of values or events 
    <br/>----- Observer - is a colln of callbacks knowing how to lisen  
    <br/>----- Subscription - reps the execn of an Observable - cancel execn
    <br/>----- Operators - pure ftns enable ftnal programming 
    <br/>----- Subject - like an EventEmitter() 
    <br/>-------- mulit-casting a value or even to multiple observers
    <br/>----- Schedulers - centralised dispatchers to control concurrency
    <br/>
    <br/>-------   
    <br/>--- rxjs Pipeable operators - 
    <br/>------ act on Observables and 
    <br/>------ are immutable by default 
    <br/>------ return Observables  
    <br/>------ always creates new Observables
    <br/>
    <br/>Using pipe()
    <br/>--- lets us use multiple operators in one method
    <br/>
    <br/>Pipeable operators
    <br/>- Combination
    <br/>------ combineAll
    <br/>------ combineLatest   
    <br/>------ concat 
    <br/>------ forkjoin 
    <br/>------ merge
    <br/>------ mergeAll 
    <br/>------ race
    <br/>------ startWith 
    <br/>------ withLatestFrom
    <br/>------ zip   
    <br/> 
    <br/>- Conditional
    <br/>------ defaultEmpty
    <br/>------ every 
    <br/>------ iif 
    <br/>------ sequenceEqual   
    <br/>
    <br/>- Creation
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
    <br/>- Errors',
    <br/>------ catch/catchError 
    <br/>------ retry
    <br/>------ retryWhen
    <br/>
    <br/>- Filtering
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
    <br/>- Multi-cast
    <br/>------ multicast
    <br/>------ publish 
    <br/>------ share 
    <br/>
    <br/>- Transformation -
    <br/>------ buffer
    <br/>------ concatMap   
    <br/>------ expand 
    <br/>------ map - data stream transformation operator wrt arrays
    <br/>----------- map(x => x*x )
    <br/>------ mergeScan 
    <br/>------ reduce - reduces value from source Observable to 1 value 
    <br/>------ scan - like reduce for Arrays
    <br/>------ switchMap 
    <br/>------ toArray 
    <br/>------ window 
    <br/>
    
    `,
    '- library',
    '- npm install rxjs', 
    `- rxjs operators
    `,
    '--- are immutable',
    '--- return Observables',
    '-- asynchronous',
    '-- Event based ops',
    '-- Observable sequences',
    '---- imps Observable type',

    'Utility ftns',
    '- Convert async to Observables',
    '- iterating over stream','- map vals to types',
    '- filtering streams',
    '- multiple streams',
    ' -- ',
    'Pipeable operators',
    '- Combination',
    '- Conditional',
    '- Creation',
    '- Errors',
    '- Multi-cast',
    '- Filters',
    '- Transform'
    ],
    [`Higher-Order-Mapping-ftns
    <br/>- Produces an Observable as an output 
    <br/>
    <br/>- Different types of HOM
    <br/>--- ConcatMap
    <br/>--- MergeMap
    <br/>--- SwitchMap
    <br/>--- ExhaustMap 
    `,
    `--- ConcatMap
    <br/>- Sequence opn (order of opns is important) 
    <br/>- map values to inner Observable subscribe 
    <br/>- and emit in order - delayed subscribe to inner Observables
    `,
    `--- MergeMap - (alias FlatMap) Parallel opn 
    <br/>- Multiple simultaneous active inner subscriptions 
    <br/>- possible memory leaks 
    <br/>- subscribes immed to inner Observables 
    <br/>-  map to Observable with inner timer or a stream of DOM events
    `,
    `--- ConcatMap - map to Observable 
    <br/>- complete previous inner Observable 
    <br/>- emit values 
    <br/>- immed cancel prev opn and emit new one 
    <br/>- can have a cancelling operator - 
    `,
    `--- ExhaustMap 
    <br/>- projects each source value to an Observale 
    <br/>which is merged in the o/p Observable 
    <br/>only if prev has completed - maps each value to an Observable then flattens all the inner Observables usng exhaust
    `
    ],
    [`Why forms - to handle user input - eg Login - Register
    <br/>
    <br/>-- Both Template and Reactive forms 
    <br/>---- track value changes between form Input elements and form data 
    <br/>----in the Component Model
    <br/>
    <br/>--- sharing common building blocks but differ how to create + manage common form-control instances 
    <br/>
    <br/>---- 2 types of Forms - 
    <br/>------  Templsate Forms - for simple forms 
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
      <br/>------- ReactiveFormsModule - 
      <br/> -- 
      <br/>
      <br/>Validation is an integral part of managing any type of forms 
      <br/>
      <br/>--- Angular provides a set of built-in validators + ability to create custom validators
      `,
      `--- Template Forms - Template Driven Approach using directives)
      `,
      '----- NgModel',
      `----- NgForm - creates a top-level FormGroup instance and binds it to a form el 
      <br/>------- to track aggregated form value and validation status 
      `,
      `NgModelGroup - creates a FormGroup instance to a DOM element
      
      `,

      '----- directives in template',
      '----- simple directives',
      '----- asynchronous forms',
      '----- FormsModule',
      '----- Unstructured and Mutable',
      '----- More complex Testing',
      '----- &lt;form (ngSubmit)="onSubmit()" #heroForm="ngForm">',

      `--- Reactive Forms - (Model Driven Approach)
      <br/>---- complex forms
      <br/>---- FormModel
      <br/>---- FormControl
      <br/>---- Structured and Immutable
      <br/>---- Sync forms
      <br/>---- simplifies Testing
      <br/><form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm)">
      <div>
      <label>
        Name: <input formControlName="name" placeholder="Your name">
      </label>
      </div>
      <button type="submit">Send</button>
      </form>
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
  [`ElementRef - a wrapper around a native DOM element inside a View
  <br/>--- permits direct access to a DOM element 
  <br/>----- more vulnerable to XSS attacks 
  <br/>--- tightly couples appn and rendering layers
  <br/>----- difficult to run appn on multiple platforms
  <br/>--- Use with caution
  <br/>-----
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
  -   lets you attach multiple views to a Component
  <br/>--- can be used with @ViewChild | @ContentChild| 
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
    <br/>createComponent() | createEmbeddedView()
   `,
   `----- createEmbeddedView(templateRef: TemplateRef<C>, context?: C, 
       options?:{index: number; injector?: Injector;}): EmbeddedViewRef<C>
     <br/> creates a View
   `,
   `------- Ex using createEmbeddedView()
   @Component({
    selector: 'sample',
    template: \`
        <span>I am first span</span>
        <ng-container #vc></ng-container>
        <span>I am last span</span>
        <ng-template #tpl>
            <span>I am span in template</span>
        </ng-template>
    \`
})
export class SampleComponent implements AfterViewInit {
    @ViewChild("vc", {read: ViewContainerRef}) vc: ViewContainerRef;
    @ViewChild("tpl") tpl: TemplateRef<any>;

    ngAfterViewInit() {
        let view = this.tpl.createEmbeddedView(null);
        this.vc.insert(view);
    }
}
   `,
   `---- createComponent(componentType: Type<C>,
    options?:{index: number; injector?: Injector; ngModuleRef?: NgModuleRef<unknown>;environmentInjector?: EnvironmentInjector|ngModuleRef?: NgModuleRef<unknown>; projectableNodes: Node[][];): ComponentRef<C>
   <br/> createa a Component
 `,
 `------ Ex of using createComponent()
 @Component({
  selector: 'my-app',
  template: \`
    <template #alertContainer></template>
    <button (click)="createComponent('success')">Create success alert</button>
    <button (click)="createComponent('danger')">Create danger alert</button>
  \`,
})
export class App {
  @ViewChild("alertContainer", { read: ViewContainerRef }) container;
 
  constructor(private resolver: ComponentFactoryResolver) {}
 
  createComponent(type) {
    this.container.clear(); 
    const factory: ComponentFactory = this.resolver.resolveComponentFactory(AlertComponent);
    this.componentRef: ComponentRef = this.container.createComponent(factory);
  }
 }
 `,
   '-- shortcuts',
   `---- ngTemplateOutlet - marks a DOM el as a ViewContainer 
   `,
   `------ Ex using ngTemplateOutlet -
   @Component({
       selector: 'sample',
       template: \`
           <span>I am first span</span>
           <ng-container [ngTemplateOutlet]="tpl"></ng-container>
           <span>I am last span</span>
           <ng-template #tpl>
               <span>I am span in template</span>
           </ng-template>
       \`
   })
   export class SampleComponent {}
   `,
   `---- ngComponentOutlet - inserts an embedded view - created by template
     ----- creates a Host View - (instantiates a Component)  
   `,
   `------ use of ngComponentOutlet
   <br/>
   <ng-container *ngComponentOutlet="ColorComponent"></ng-container>
   `,
   '-- use with ng-container',
   '---- use @ViewChild | @ConentChild',
   `@ViewChild VCF defn
   <br/>
   @ViewChild("vc", {read: ViewContainerRef}) 
             vc: ViewContainerRef;
   `,
   `@ViewChild VCF Ex
 <br/>
   @Component({
    selector: \'sample\',
    template: \`
        <span>I am first span</span>
        <ng-container #vc></ng-container>
        <span>I am last span</span>
    \`
})
export class SampleComponent implements AfterViewInit {
    @ViewChild("vc", {read: ViewContainerRef}) vc: ViewContainerRef;

    ngAfterViewInit(): void {
        // outputs \`template bindings={}\`
        console.log(this.vc.element.nativeElement.textContent);
    }
}
   `,
   `---- @ContentChild VCF defn
   <br/>@ContentChild(\'nameInput\', {static:false, read: ViewContainerRef }) 
                nameVarAsViewContainerRef;
`
],
['Whats View DOM',   
    '--- component template',  
    '--- Template ref variables',
    '------ <p #title>Hi</p>',
    `- @ViewChild 
       - is within the template of the Component
--- configures a Vew Query
----- 3 types to inect
------- HTML - using ElementRef and nativeElement
------- Component (Default) - 
------- Directive
--- uses the ngAfterViewInit LCH    
`,
'--- alt to ElementRef',
'------ access a DOM element',
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
    '3 types to inect',
    '----  Wraps DOM el',
    '------ @ViewChild(\'title\')',
    '---------- title:ElementRef',
    '---------- this.title.nativeElement',
    '------Default - return a Component instance',  
    '------- @ViewChild(\'AComponent\')',
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
    '--- ngAfterViewInit LCH',
    `--- ViewContainerRef 
       - lets you attach several views to it
    `
    ],
    [`Content DOM
          area within the selector fields in template
          <br/>within the tags
    `,
    `@ContentChild - is within a Component tags
       <br/>-- within the Content DOM',
       <br/>-- Queries one child within Component or Directive tag
       @ContentChild(Pane) pane!: Pane;
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
 
  [`transclusion is Content Projection - initialized in ngAfterContentInit LCH 
    - a pattern to insert/project content to use inside another Component 
    - lets a Directive to make use of templates + add content to DOM 
    - lets Directives generate dynamice data driven DOM instns 
      <br/>you can make reusable components 
      - for scalable appns by inserting content into already created Comps/Dirs 
      uses ng-content
      <br/>
      <br/>3 types of Content projection - Single slot| Multi-slot| Conditional
      `, 
    '--- pattern to insert| project content to use inside another Component',
    '----- inside another Component',
    '-- eg a Component projecting data into a CardComponent',
    '--- uses <ng-content></ng-content>',
    '--- let Directives make use of templates + add content',
    '--- let Directives generate dynamic data driven DOM instans',
    '--- make reusable components',
    '----- Scalable appns ',
    '--- ngAfterContentInit LCH',
    '--------- No real DOM el',
    '--- 3 types of Content Projection',
    '------ Single Slot',
    '--------- content from 1 source', 
    '--------- <ng-conttent></ng-content>',
    
    '------ Multi-Slot',
    '--------- multiple slots',
    '------------ using select',
    '------------ <ng-content select="[quest]"',
    '------ Conditional',
    '--------- Conditionally render content',
    '------------- ng-template to acceept dyn content',
    '----------------- not ng-content',
    `---------- Ex <ng-template appExampleZippyContent>
                      It depends on what you do with it.
                    </ng-template>
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
     [`HTTP CRUD - Create | Read| Update | Delete 
     - operations which the HTTP can use to manipulate data from a server
     `, 
     `- HttpClient - performs HTTP requests 
     -  uses HttpClientModule from @angular/common/http
     `,      
     `-- based on XHR (XMLHttpRequest) - API consisting of an object 
     - provided by the browser through its JS engine
      <br/>-- which can be used to transfer data between a web browser and web server in async way
      <br/>-- but without have to reload the whole page 
     `,
     `-- Fetch API (2017) - i/f for fetching resources (alt to XHR API) 
     - more powerful + flexible way to   
     <br/>--- based on Promises ( not callbacks) - we need to resolve the response object  
     `,
     '--- based on Promises',
     '--- Angulars mechanism for Communication with a remote Server over HTTP',
     '-- HttpClientModule - ',
     ' -- ',
     `HttpInterceptors - is a special Angular service - provides a way to intercept HTTP Requests and Responses 
     <br/>and modify them the way we wish
     <br/> can cache HTTP requests and responses - 
     `,
     '- Service',
     '- intercepts an HttpRequest or HttpResponse',
     '- caches HttpRequests | HttpResponsee',
     `-- interface HttpInterceptor {
              intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
         }
      `,    
      `--- intercept(HttpRequest<T>, HttpHandler): Observable<HttpEvent> - 
      <br/>---- HttpRequest<T> - outgoing request object to handle,
      <br/>---- HttpHandler - next intercepter in the chain (or Backend)
      <br/>----- Objservable<HttpEvent> - Observable of event stream
      `,
      ' -- ',
     `HttpClientInMemoryWebApiModule - angular-in-memory-web-api - for Angular demos and tests that emulates CRUD opns over a RESTify API -      
      is a library that intercepts Angular Http and HttpClient requests that would normally go to the remote server
      and redirects them to an in-memory data store - that you control on the frontend.
       <br/>angular/in-memory-web-api -  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1000})   
      `,
      '- Angular Demos | Tests ',
      '- Emulates CRUD ops wrt REST',
      '- in-memory data store',
      '-- npm install angular-in-memory-web-api --save', 
      '-- HttpClientInMemoryWebApiModule',
      '--- angular/in-memory-web-api'
      
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
    [`Caching - was initally developed to reduce the access time between the CPU and RAM 
    <br/>
    <br/>Cache memory is faster to access by the CPU wrt RAM because its physically stored inside the CPU
    <br/>
    <br/>Diff ways to implement caching 
    <br/> - ng cache - 
    <br/> - WebStorage
    <br/> - Memoization
    <br/> - ngrx store for states
    <br/> - array that holds values
    <br/> - HTTP Cache (Browser Cache) - browser uses cache but if nothing found then it goes to the server to fetch the resource  
    <br/> - Service Workers in PWAs (Programmable Web Appns)
    <br/>
    <bt/>To stop use of cache in Angular
    <br/>ng build --output-hashing all 
    <br/>-- hash contents of generated files and append a hash # to file name 
    <br/>---- facilitates cache busting - (change to file - new hash)
    <br/>---- browser is forced to load a new file 
    `,
    '- ng cache - on Hard Disk - caching project',
   ' -- ',
    `- Memoization - optimization technique to speed up computer programs 
    <br/>- by storing results of exp ftn calls 
    <br/>- returning cached result when same input occurs again 
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
    `- IndexedDB (client side storage - on local disk 
      - low level API for large amts of data - files and blobs) - 
    <br/>lets you persistently store data inside a user\'s browser 
    <br/>gives you rich (High Perf) query capabilities on and offline - indept of network      
    <br/>Is a transactional DB system - JS based Object Oriented DB - 
    <br/>Store and Retrieve objects - asynchronously - indexed with a key  
    <br/>Only limit is users disk size and OS - 
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
    [`ngrx - State Management - Reactive State for Angular 
    <br/>
    <br/>- a group of angular libraries for Reactive extensions 
    <br/>
    <br/>- inspired by the Redux pattern - derives state using RxJS and Observables
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
    <br/>SHARI   
    `,
    'based around the RxJS library and Observables to make the data immutable',
    'BehaviorSubject - ngrx is based around the behaviorSubject',
    'appn State',
    '- enforces a unidirectional sequence of operations ',
    ' -- ',
    '- 5 features - Serializablity | TypeSafety | Encapsulation | Testable | Performance',
    '-- Serializability', 
    '-- TypeSafety - using tsc (TypeScript compiler)',
    '-- Encapsulation - using ngrx Effects and Store - any resource side effects - network requests | db access | business logic can be isolated from the UI - simpler components and helps SRP',   
    '-- Testable - since store uses pure ftns (Reducers) for changing state and (Selectors) for selecting data from state and (Effects) to isolate side effects from UI - this simplifies testing - Ngrx provides special test methods - provideMockStore |   provideMockActions etc',
    '-- Performance - Store is built on single immutable data state - making CD (Change Detection) simpler using OnPush strategy. NgRx is also powered by Memoized selector ftns - optimizing  state query computations',
    ' -- ',
    `- SHARI -<br/> 
    <br/>S: - Shared state that is accessed by many components and services
    <br/>H: - Hydrated state that is persisted and rehydrated from external storage 
    <br/>A: - Available state that must be available when reentering routes
    <br/>R: - Retrieved state that must be retrieved with a side effect
    <br/>I: - Impacted state that is impacted by Actions from other sources
      `,
      '-- Shared',
      '-- Hydrated',
      '-- Available',
      '-- Retreived',
      '-- Impacted',
  ' -- ',
  ' - Parts - Store | Reducer | Action | Selector | Effects',
      `- ngrx/Store is a library for managing the main appn State - uses StoreModule from @ngrx/store - StoreModule.forRoot({ spinner: reducer }),',
      <br/> A reactive state mgmt library powered by RxJS - manages flow of data through appn - actions dispatched - reducers act on them and mutate the Store
     `,
     '-- stores the data in an RxJS Observable inside an Angular Service called Store',

    '- Reducer are pure functions which take an action and output data to state or on to Effects (if async)',
    '- Action - express state changes - acts as input to Reducer to produce new State and if async then to feed the effects library'
    ,
    '- Selector - Read state data - are pure functions for getting slices of the state from the Store - how appns listen to State Changes', 
    '- Effects - (side Effects - commn with ext API HTTP or dispatching another action  ) asynchronous parts of code which take effect after Reducer functions - DJ of the NGRX dancefloor', 
    ' -- ',
    `-- Store Devtools - @ngrx/store-devtools - provides dev tools and instrumentation for Store - npm install @ngrx/store-devtools - StoreDevtoolsModule -  
    <br/>StoreDevtoolsModule.instrument({name: 'NgRx Demo App',logOnly: environment.production})     
    <br/> - Key benefit of Devtools is it gives us some immediate visual indication about what the appn is doing at all times  
    `,
    '--- Action Log - gives a good understanding of how appn works and which parts are trigered by which actions',
    '--- State inspector - easily inspect memory store state',
    '--- Time Travelling Debugger - Play button and timeline at the bottom - replay any action at a given pt in debugging session - nav gate through multiple screens  ',
    `---- Installation of ngrx/schematics 1st and then the ngrx/devtools
    <br/>- ng config cli.defaultCollection @ngrx/schematics 
    <br/>- then
    <br/>-- ng generate store AppState --root --module app.module.ts
    `,
    ' -- ',  
    '-- Entity - data - ',
    '-- Data - Simplifying the case for many CRUD operations',
    '--- if the state is confined to one Component then this can be used',
    'implementation of ngrx ', '- Au   th0 SDK'
    ], 
    [' -- '],
    ['install from GitHub', 'npm install to create the node_modules folder'],
    [`Core libraries`,
      `- @angular/core - imps Angular core functionality - low level services and utilities  
        <br/>BrowserModule - included auto in root AppModule when create a new app with CLI
        <br/>defines class structure for Components | view hierarchies | CD | Rendering | event handling
        <br/>defines the decorators for metadata
        <br/>defines infrastructure for DI | i18n | testing | debugging
      `,
      `- @angular/common - imps basic Angular framework functionality 
      <br/>directives | pipes |  
      <br/>exports are re-exported by BrowserModule - included in the root AppModule wrt Ang CLI
      `,
      `CommonModule - exports all the basic Angular directives and pipes 
          <br/>- defines template binding directives *ngIf | *ngFor | *ngSwitch
          <br/>- and pipes - DecimalPipe | 
          <br/>- location services used in routing | HTTP services | localization support
          <br/>--- Re-exported by the BrowserModule - 
            `,
            '---- default template Directives',
            '---- default pipes',
            '---- location services used in routing | HTTP services | localization support',        
      `- @angular/compiler - ngc - is the tool used to compile Angular appns and the Libraries
       <br/>built on top of the TypeScript compiler (tsc) - extended for Angular decorators etc      
        <br/>serves as a bridge between the developer and the runtime - ngc translaes the Ang code into efficient runtime instns
       `,
       '---- ngc',
      '- @angular/browser - loaded into the root folder automatically when creata a project with ng new xxx',
      '--- BrowserModule',
      `- @angular/router - imps the Angular router service - enables navn from 1 view to the next wrt appn tasks
      <br/>Defines the Route object that maps a URL path to a Component
      <br/>and RouterOutlet directive - places a RoutedView in a template 
      <br/>+ a complete API for configuring | querying | controlling router state  
      <br/>import { RouterModule } to use the Router service in apps   
      `,
      '--- RouterModule',
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
      '- @angular/forms',
      '--- FormModule',
      '--- ReactiveFormsModule',
      '- @angular/animations',
      '--- AnimationsModule',
      '- @angular/material',
      '- @angular/cdk',
      '--',
      '- @angular/cli - CLI tool for Angular - initialize | develop | scaffold | maintain Ang apps',
      '- @angular/compiler-cli - Compiler CLI for Node.js',
      `- @angular-devkit/build-angular - Webpack build facade - 
      <br/>package contains Architect builders used to build + test Ang Appns + libraries
      `,    
    ],
    [`GIT (Global Infon Tracker) - is a free open source distributed VCS (Version Control System) 
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
    `,
      `Parts - ---Working tree | Staging area | Local repository
      `,
      ' -- ',
      '- Working directory', 
      '--- current work files', 
      '----- history of all the files + changes',
      '--- current state of project',
      '----- including any changes that have been made to files',
      '--- git init cmd',
      '----- git folder - history of project',
      '----- working directory - ',
   
      ' -- ',  
      `- Staging area - holds files to be used in the next commit 
      <br/> -- lets git know what file changes will exist in next commit
      `,
      `--- Git index - a crucial Git data structure
      <br/>---- Staging Area between files on Git filesystem and commit history 
      `,
      '--- Prepare Commits',
      '----- files for next commit',
      `--- Git add - adds a change in working directory to Staging Area
        <br/>Nothing changes until the git commit 
      `,
      '----- adds to Staging Area',
      '----- hashes WT files',
       '------- stored as Objects in Staging Area',     
      `--- Git commit - save Staged Changes to the local repository`,
      '----- Staged changes',
      '------- Name changes',
      ' -- ',
      '- Local Repository',
      '-- Local computers',
      '---- git Push',
      ' -- ',
      '- Remote Repository',
      '-- Server for Team',
      '---- git Pull', 
      ' -- ', 
       'Branches - ',
       '--- lightweight movable ptr',   
       '----- Commits',
       '----- Snapshot of changes',
       '------- New branch per change',
       '--- default = master',
       '----- MASTER',
       '------- naming for Branch',
       '----- after clone',
       '------- Local Repo - Master',
       '------- Repos default Branch',   
       '--- View branches',      
       '----- local - git branch',
       '----- remote - git branch -r',
         '----- all - git branch -a',
         ' -- ',
         '- git checkout',
         '--- only 1 branch checked out',
         '----- HEAD branch',
         '------- active = current',
         '--- navitate between branches',
         '----- updates files Work Dir',
         '------- work dir = branch',
         '----- record all new commits',
         '--- HEAD = branch name',
         '----- attaches to master',
         ' -- ',
       `- Fork - is a copy of a repository 
       `,
       '--- completely indept copy of a repo (not linked)',
       ' -- ',
       `--- git clone - 
           <br/>-- a git clone op exec on remote repo -  
      `,
       '----- server repo',
       '----- linked copy of repo',
       '------- hosting service',
       '------- BitBucket',
       ' -- ',
       '- stash',
       '--- temp Shelves changes',
       '--- record work dir + index',
       '--- Clean Working directory',
       ' -- ',    
       '- Commands - ',
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
    ], 

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
    'PoC - Proof of Concept',
    '- Unit', 
    '-- spec.ts', 
    '--- describe', '--- beforeEach()', '--- it - fit - xit', '--- afterEach', '---- TestBed', '-- Jasmine', '-- Karma', '-- Mocking', '--- Wallaby', 
    ' -- ',
    '- Integration','-- Shallow','-- Deep', 
    ' -- ',
    '- End to End', '-- Protractor', '-- Cypress'],
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
    `- ensure there is only 1 instance of the class 
    - getInstance or DI system 
     <br/> Services defined in the root (not those in Components which are instantiated for each Component)
    `,  
    ' -- ','- Instantiate diff child objects - of same parent Class dept on conditions - <br/>Object Creation Interface',    
    ' -- ','- alternative to Subclasses for extending an Object - Composition instead of Inheritance<br/>An object which wraps another Object',  
    ' -- ','Lazy Pattern',
    ' -- ','Composition Pattern'],
    [`TDD Test Driven Devt - 
    `, 
    '- Test First fail','- refactor','--- pass',
    ' -- ',
    `Behavoral Driven Design - eases conversion of user features specns to code reqd to imp them
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
    `DDD Domain Driven Design - S/W design focusing on modeling S/W to match a domain wrt input from business experts
    <br/>
    `,'- Business Domain',
    '-- OO (Object Oriented) class | properties | methods - match business names',
    '-- connects impn to an evolving model',
    '- Goals',
    '-- primary focus on domain and domain logic',
    '-- base complex design on domain model',
    '-- init creative collabn between technical and domain experts to iteratively refine a model wrt domain problems',
    ],
    [`Angular Security -   
       XSS | CSRF - Dom Sanitiser -   
      - Security related info about the pages - 
       <br/>-- checks + verifies security of certificate + connection
       <br/>-- Also unencrypted resources
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
    '-- backend JS runtime',
     '- can generate dynamic pages',
     '- can CRUD + close files',
     '- collect form data',
    '- add|delete|modify db',
    '- tasks exec on events',
    '- event - server port',
    '- files initiated on server',   
    '--*.js'
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
    <br/>--- Prettier - an opinionated code formatter 
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
    [`ESLint - statically analyses your code to quickly find problems 
    <br/>
    <br/>- is a static code analysis tool used to flag programming errors | bugs | stylistic errors and suspicious constructs
    <br/>
    <br/>- is a JavaScript Linter to lint either JS + TS code 
    <br/>(TSLint only used by TypeScript) - A large project can contain both JS + TS
    <br/>
    <br/>- is built into most Web Editors VS Code or as part of your CI pipeline  -
    <br/>
    <br/>- enables you to enforce a set of style | formatting | coding stds for your codebase  
    <br/>
    <br/>ESLint8.9 - released Feb 2022 - ES2022 added - ecmaVersion parser option to 13 
    <br/>
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
    <br/> 
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
    '- Angular CLI build process uses Webpack behind the scenes for',
    '-- transpile TS to JS',
    '-- transform SASS files to CSS',
    '-- transpile HTML to JS',
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
    'Plugins',
    ' -- ',
    `-- Webpack 5 introduced the Module Federation -
    <br/> ---- multiple Webpack builds can work together
    <br/> ---- create multiple sep indept builds (without deps on eachother)
    <br/> ------ developed and deployed independently
    <br/> --------- ideal for loading Micro FrontEnds at runtime
    <br/> ----------common libs - Angular | Auth 0 can be shared -- 
    <br/> ---------- same as a set of users too - 
    <br/> ---- initially created to allow async loading of JS bundles
    <br/> -- 
    <br/> - RemoteEntry.js (Host) - is Mod Fed way for your App 
    <br/> --- to be loaded from a remote Server - 
    <br/> --- a file used by Mod Fed to bootstrap remotes - 
    <br/> ----- is considered a local chunk in remote repo
    <br/> ------- We grap the endpoint for each remote   
    <br/>- Shell - load MFE (MicroFrontends) into a Shell appn on demand 
    <br/>-- Webpack 5s Module Federation simplifies this wrt before 
    `
    ],
    [`The Cloud - refers to Servers accessed over the Internet and the S/W and DBs that run on those servers 
      <br/>Cloud Servers are located all over the World
      <br/>Cloud Computing offers businesses Scalability of resources for when production expands and contracts
    `,
    ` - 3 reasons 1: File Storage - store all types of info in the cloud 2: File Sharing 
    <br/>- Makes it easy to share files simultaneously 3: Backing up Data 
    <br/>- simplifies backing up and protecting your files
    `, 
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
    '-- at the edge -',
    ' -- ',
    `- Serverless - Angular - Cloud based architecture
    <br/>-- FAAS (Function as a Service)
    <br/>lets users to write + deploy code 
    <br/>without worrying about underlying architecture  
    <br/>- written using Node.js - dev'd for building appns on AWS Lamda - 
    <br/> - no need to maintain your own servers  
    `,
    '-- Cloud based architecture',
    '-- FAAS',
    '-- Advantages',
    `--- AWS S3 -   
     Serverless S3 service - requires an AWS Account
     <br/>5GB of std storage - Secure | Durable | Scalable - object storage infrastructure
     <br/>20000 get requests <br/>2000 put requests
     <br/>
     <br/>S3 Bucket name - unique amongst all AWS accounts  
     <br/>Select region -  
    `,
    `--- Properties
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
    `,
     `-- AWS Lambda - Serverless Event driven compute service
     <br/>--- lets you run code for virtually any type of app'n or backend service 
     <br/>--- automatically manages the computing resources reqd 
     <br/>--- without worrying about the infrastructure of servers or OS or clusters or Networking
     `, `----- AWS Lambda Reqts - Computing Service | DB | HTTP Gateway Service 
     <br/>------ DynamoDB and RDS is the bases of a Serverless soln    
     `,
     `--- AWS Lambda Users - create functions - self contained appns  
     <br/>---- written in a supported language and runtimes 
     <br/>---- uploaded to AWS Lambda for effic exection     
     `,`--- AWS Lambda Uses  
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
     `,`--- AWS Lambda Advantages -
     <br/>---- Pay per use
     <br/>---- Fully managed infrastructure
     <br/>---- Automatic scaling 
     <br/>---- Tight integration with other AWS products
     `,`--- AWS Lambda Limitations -
     <br/>---- Cold Start Time
     <br/>---- Function Limits
     <br/>------ Execute time/run time 15 minutes       
     <br/>------ Memory RAM - 128MB to 3008MB with 64MB Step   
     <br/>------ Zipped package code size < 50MB - Unzipped < 250MB
     <br/>------ Concurrency < 1000 
     <br/>------ Payload Size < 10MB that API Gateway can handle            
     <br/>---- Not always cost effective - 
     <br/>----- Maybe AWS EC2 might be better in some cases  
     <br/>---- Ltd number of supported runtimes
     `,
     `--- Deployment - 
     
     `,
     `--- Dynamic Data 
    
    
    `,`--- Node.js
    
    `  
],
    [`Accessability -
    <br/>
    <br/>ARIA attributes
    <br/>WCAG
    <br/>POUR
    `,
    '- ARIA attrbutes', 
    '- WCAG', 
    '- POUR'
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
    'Ang CDK'],
    [`Flex-layout - 
    
    `, 
        'display:flex'],
    [`Progressive Web Appn - are Web appns that use Service Workers 
    <br/>- manifests - caching - progressive appns - to give a similar exp with a native appn 
    <br/>- apps leverage modern browser capabilities 
    <br/>- even with no Network or sparse Networks
    `, 
    `- Service Workers -
    
    `, 
    '- manifests', 
    '- other Web-platform features',
    '- Progressive Enhancement ',
    '--- native apps ',
    '---- Works Offline',
    ' -- ',
    '- Requirements',
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
    `- Service Workers 
    <br/>- is a script runs in Web browser to manage and manages caching of appn
    `,
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
    <br/><script> 
    <br/>- <ngsd-button button-label="ClickMe!"></ngsd-button>
    <br/>
    <br/>- create a component by document.querySelector('ng-air-button');
    <br/>- component.addEventListener('customEvent', evebt => { alert(event.detail)})
    <br/></script>
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
     <br/><button (click)="onClick()">{{buttonLabel}}</button>

     <br/>
     <br/>Create a HTML page - 
     <br/>&lt;!doctype="html">
     <br/>&lt;html lang="en">
     <br/>&lt;head>
     <br/>&lt;meta charset="utf-8">
     <br/>&lt;title>ngElements</title>
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
    <br/>
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
    `- Web Components - is a way to create encapsulated | SRP code block | for reuse on any page
    <br/>--- provide a set of Web technologies to create reusable HTML elements 
    <br/>- are a set of Web Platform APIs 
    <br/> --- that allow you to create new custom | reusable | encapsulated HTML tags 
    <br/> --- to use in Web pages and Web apps
    <br/> --- lets you share Components between various languages
    <br/> -----  AngularJS | Angular | React | Vue  
    <br/> --- Ex must contain a - eg <my-world></my-world>
    `,
    '--- framework agnostic way',
    '--- 4 types of Web Components',
    '----- 1 - Custom Elements',
    `Angular Elements packaged as custom components
    `,
    
    `----- 2 - Shadow DOM - 
    `,
    '----- 3 - ES Modules',
    `----- 4 - HTML Template',
    
    `, 
    '- Framework Agnostic',
    '- polyfills',
    'CustomElementRegistry',
    '- createCustomElement() API',
    'NgElementConstructor i/f()',
    'customElements.define()',  
    '-- CD ftn', 
    '-- data binding','bootstrap to DOM'
    ,'-- Dynamic Content',
    '- NgElement class',
    '-- let us add Type Infon to the NgElement class'
  ],
  ['Web Workers permit multithreading in Angular', 'Threading', 
      ''],
    [`Angular Universal - is a UI Framework - Accessability 
    <br/>- mobile friendly
    <br/>--- SSR (Server Side Rendering)
    `,
    '- SSR - Server Side Rendering'
  ],
   [`Optional Modules - Standalone Components - 
   <br/>are components that can be used without declaring them inside the NgModule decorators  
   <br/>and providing standalone: true
   <br/>  
      <br/>Stand alone Components - @Component standalone: true 
      <br/>and its backwards compatible in both directions - 
      <br/> Not owned by anyone or anything 
      <br/>- but can be imported into other components and modules
      <br/> ImportProvidersFrom(RouterModule.forRoot(APP_ROUTES))  
      <br/> We just update Angular Schematics 
    `, 
    `--- standalone: true - provide a simplified way to build Ang appns
    <br/>----- standalone components | directives | pipes 
    <br/>---------streamline experience - reducing need for NgModules
    <br/>------------- developer preview (not stable)
    `,
    '-- Optional Modules',
    '-- main.ts',
    '---- platformBrowserDynamic()',
    '------ @Component ({standalone: true})', 
    '------ bootstrapApplication(AppComponent)',
    '-- under the hood use virtual module (similar to SCAM)',
    '-- Backwards compatability -',
    '-- Architecture -',
     `Advantages - 
     <br/>1: Reduces boilerplate in many appns eg SCAM (Single Component Angular Module) pattern
     <br/>2: Simplifies learning Angular by removing NgModule from coding
     <br/>3: Allows us to offer more streamlined APIs for common use cases      
     `,
      'SCAM (Single Component Angular Module) - one Module for each Component',
      `- Problem with Schematics 
      <br/>- which search for your AppModule - Libs should update schematics
      `
    ], 
    [' -- '],
    [`Agile - is an iterative approach to project management + S/W devt that helps teams deliver value to their customers faster 
    <br/>- with fewer headaches 
    <br/>- suite of Agile work management solutions powering collaboration 
    <be/>- across all teams
    `,
    '- iterative means small incremental changes',
    '- (no bigbang) - delivers work in small, but consumable, increments - ',
    '- Teams can easily work together and ... ',
    '- Requirements | Plans| Results are evaluated continuously so teams have a natural mechanisms for responding to change'
    ],
    [`Jira S/W - provides Scrum and Kanban boards 
    <br/>--- are task management hubs 
    <br/>--- where tasks are mapped to customizable workflows
    <br/>
    <br/>Scrum and Kanban are popular frameworks for imp agile 
    <br/> --- project management methodologies that complete project tasks 
    <br/> --- in small increments and emphasize continuous improvement 
    <br/>
    `,
    '-- View all boards - click Create board - Scrum|Kanban', 
    '- Boards - displays issues 1+ projects so you can view | manage | report on work',  
    '- teamwork',
    '- Boards',
    '--- Team management board - Simplified board - teams new to agile - lets you incrementally inc power',
   '--- Simplified Board',
   '-',
  `Scrum Board 
    <br/>- visual status of your sprint practices in teams
    <br/>------- Scrum is a method that provides structure to the team and schedule
    <br/>------- showing your work split across diff stages of your workflow
    <br/>------- Team of rugby players - creates a culture of collaboration
    <br/>
    <br/>Parts of Scrum Board 
    <br/>----------- Sprint - 
    <br/>a short (2 week) - time boxed period when a team works
    <br/>to complete a set amount of work 
    <br/>during which a done | unstable | 
    <br/>
    <br/>----------- Backlog - 
    <br/>is owned by the product owner 
    <br/>is a prioritized list of work for the devt team 
    <br/>This can include features | defects | enhancements | experiments 
    <br/>that need to be done 
    <br/>Each item has a description | rank | size | estimate | value
    <br/>
    <br/>----------- User Story - 
    <br/>Items in backlog can be written as stories 
    <br/>A user story is a general explanation of a S/W feature 
    <br/>written from the perspective of a user or customer
    <br/>Purpose is to articulate how a S/W feature will provide value
    <br/>
    <br/>----------- Issue - 
    <br/>conains all tasks | dependencies | rel info 
    <br/>related to 1 item of work 
    <br/>
    <br/>----------- Epic - 
    <br/>captures a large body of work 
    <br/>A large user story that can be broken down 
    <br/>into a number of smaller stories 
    <br/>that may be take several sprints 
    <br/>to complete an epic 
    <br/>
    <br/>----------- Swimlane - 
    <br/>is a means of categorizing issues on the Jira Scrum board
    <br/>so that agile teams can easily see issues 
    <br/>grouped by different criteria such as the user 
    <br/> 
    `,
    `--- Scrum Board - for teams that use sprints - includes a backlog - is the tool that unites Agile teams around a single goal + promotes iterative incremental delivery',
      ---- Sprints + Backlog ----- short time based period when a scrum team works to complete a set amount of work (eg 2 weeks)
     - provide transparency across teamwork 
     + visibility into the status of every work item.
     `, 
    ' -- ',
    `--- Kanban Board - management + constraining WIP - includes option of Kanban backlog - fully extendable - with custom extensions and Backlog management
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
    <br/>
    `,
    '---- designed to visualise work - limit WIP - maximize efficiency or flow',
    '----- used in supply chain management - for cost of unfinished goods the manufacturing process',
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
  [`Debugging Angular - Chrome Devtools (Debugger for Chrome) 
  <br/>- Webpack
  <br/> Devtools include a Component Explorer and Profiler
  `,
  `- Chrome Devtools (Debugger for Chrome)  
   - Added V S-Code extension - Devtools for Chrome - 
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
  `- Call Stack - Chrome Devtools shows the Current CallStack
  <br/> - gives info about the stack of ftn calls indicating 
  <br/> - what triggered the execution of the ftn that is being executed          
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
  [`How - Angular Performance - 
    <br/>-- Ivy 
    <br/>-- AoT 
    <br/>-- TypeScript 
    <br/>-- ES2015 to 2022
    <br/>-- OnPush CD   
    <br/>-- Pure pipes
    <br/>-- Unsubscribe from Observables
    <br/>-- Lazy loading - 
    <br/>-- Use trackBy option For Loop
    <br/>-- Avoid computation in template files
    <br/>-- Using of PWA - Service Workers 
    <br/>-- Usage of Web Workers 
    <br/>-- Webpack -   
    <br/>-- ESBuild - super fast build tool perf with a super fast JS bundler- without needing cache
    <br/>-- Terser -
    <br/>-- cli.cache -   
    <br/>-- Library - Linker Partial Compilation
    <br/>-- Optional Modules - stand alone Components 
    <br/>-- tree shaking - 
   `,
  `- sourceMap Explorer
  <br/>-- 
  `,
  `- ESBuild - new (Ang 12) streamlined bundler - super fast 
  <br/> - without need to cache - with a solid API
  <br/> handles TypeScript | JSON module importing -   
  <br/> given array of entry points - 
  <br/>--- it will transpile | bundle | treeshake | code split your modules
  <br/>- use a build.mjs script - ESM -
  <br/>Ang 13 - It works with Terser     
  `,
  `- Terser - is a JS minifier 
  `,
  `- APF - rule is to use entry points 
  <br/>--- for smallest sets of logically connected code possible
  <br/>--- for structure and format of npm packages - used by all std Ang libs
  
  `,
  'LCP - largest Component Paint  ',
  ' - Lazy Loading',
  '- Angular Universal',
  '- PWA-SW',
  '- Ivy', 
  '- AOT Compilation',
  '- Tree-Shaking', 
  '- Modern Angular'
 ],
  ['SourceMap Explorer', 'sourceMaps: true'],
  ['REST - architectual style that for an API that uses HTTP requests to access and use data','-- APIs','-- IDLs','--- humans/auto machine procing','-- HTTP methods',  '-- List REST API DLs','--- WSDL','--- WADL','--- OData','--- OpenAPI','--- RSDL','--- RAML',
    ' -- ',
    '- IDL for RESTful APIs expressed using JSON', 
    '-- design & Doc APIs','-- ',
    '-- Interface Defn Language',
    '-- RESTful APIs',
    '-- JSON',
    '-- CRUD methods', 
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
    '-- Quey language for API',
    '-- description of data in API',
    '-- Server side runtime',
    `--- exec queries`
    ],
    [`Real time appns - 
      <br/> uses @Override() | @deprecate() | @autobind() | @mixin decorators
      
    `],
    [`ag-grid - is a fully featured and highly customizable JS data grid 
    <br/>- delivering outstanding performance
    <br/>Fully customizable | ag-grid performance | no 3rd party deps 
    - integrates with Angular
    <br/>Features - 
    1: Column-integration - 
    2: Pagination - 
    3: Sortable  - 
    4: Row selection
    <br/> - <ag-grid></ag-grid>
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
    export class AppComponent {
      title = 'app';
    
      columnDefs = [
        {headerName: 'Make', field: 'make' },
        {headerName: 'Model', field: 'model' },
        {headerName: 'Price', field: 'price'}
      ];
    
      rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxster', price: 72000 }
      ];
    }
    `,
    `-- ag-grid example
    <br/>
    <ag-grid-angular 
      	style="width: 500px; height: 500px;" 
      	class="ag-theme-balham"
      	[rowData]="rowData" 
      	[columnDefs]="columnDefs">
    </ag-grid-angular>
    `
    ],
    [`Why Micro-FEs (MFEs) - are the idea that 1 SPA can be divided into sep specialised sections 
    <br/>- Gives dev teams the ability to complete their work independently
    <br/>- Shell (Host) - 
    <br/> -- 
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
    '--- Anyone welcome'],
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
  `-- Clusters - 
  `, 
  `-- Open source system`, 
  `--- automating deployment`,
  `--- scaling`,
  `--- management`,
  `---- containerized appns`
    ],
    ['- Ang Versions',
    `Ang 14 TS 4.7 - Strictly typed Reactive Forms | 
    adv extended template diagnostics | 
    optional ngModules (standalone : true) | 
    router title added
    ng cache
    `,
      '-- TS 4.7',
      '-- strictly typed Reactive Forms',
      '-- adv extended template diagnostics',
      '-- optional ngModules (standalone: true)',
      '-- Router title added',
      '-- ng cache',
    ' -- ',
    'Ang 13 TS 4.5 - milestone in updates - new APF - CLI now uses ESBuild (JS Bundler works with Terser) - Node package exports - ES2020 - cli.cache ', 
      '-- TS 4.5',
      '-- new APF',
      '-- ESBuild ',
      '-- Node Package Exports',
      '-- cli.cache',
      '-- ES 2020',
 ' -- ',
      'Ang 12 TS 4.2 - cleaner code - Ivy everywhere - templates - Nullish Coalescing - Critters for CSS inlining - ',
      '-- TS 4.2',
      '-- cleaner code and Ivy everywhere',
    '-- templates Nullish coalescing',
    '-- Critters for CSS inlining',
' -- ',
    `Ang 11 TS 4.0 - Font inlining - ESLint - Stricter types - HMR Hot Module Replacement - Partial Compilation - Linker - no ngcc - Webpack 5 Moduoe Fedn
    `,  
    '-- TS 4.0',
    '-- Font inlining',
    '-- ESLint - stricter types',
    '-- Partial Compilation - linker',
    '-- HMR (Hot Module Replacement',
    '-- webpack 5 - Module Federation',
' -- ',
    `Ang 10 TS 3.9 - major release - new default browser config - Ivy Ngcc - optional strict - Perf improvements - ModuleWithProviders<T>
    `,
    '-- TS 3.9',
    '-- new default browser config',
    '-- Ivy ngcc optional strict',
    '-- performance improvements',
    '-- ModuleWithProviders<T>',
' -- ',
    `Ang 09 TS 3.6/7 
    - Ivy enabled by default 
    - Updates to Zone.js and RxJS 
    - smaller bundle size
        ModuleWithProviders - Language Service 
        - Faster Testing with ComponentHarness
    `,
    '-- TS 3.6',
    '-- Ivy enabled by default',
    '-- Smaller bundle size',
    '-- Update to Zone.js and RxJS',
    '-- ModuleWithProviders',
    '-- Language Service',
    '-- Faster Tesing with ComponentHarness',
'-- ',
    `Ang 08 TS 3.4 - Differenctial Loading 
    - ES5 | ES2015 - 
    <br/>new lazy loading syntax 
    - uses dynamic import syntax -    
    <br/>Simplifies Web Worker creation -   ng g 
    <br/>new APIs 
    <br/>bazel and Ivy are coming - 
    `,
    '-- TS 3.4',
    '-- Differential loading ES5 | ES2015',
    '-- new lazy loading syntax - uses dynamic imports',
    '-- simplifies Web Worker creation',
    '-- new APIs',
    '-- bazel and Ivy are coming',
 ' -- ',
    `Ang 07 TS 3.1  Ang Material and CDK - Virtual scrolling | Drag n Drop  
      <br/>Performance improvements -reflect-metadata polyfill - 
      <br/> CLI prompts       
      <br/>Angular DO-Bootstrap (interface DoBootstrap - ngDoBootstrap) and Angular Compiler - 
      <br/>new Angular Compiler - offers an 8 phase rotating AOT compilation - NGCC libraries 
      <br/>Angular Error handling - 
      <br/>Angular Elements - 
      <br/>Native Script - 
  `,
    '-- TS 3.1',
    '-- Ang Material | SDK',
    '-- CLI Prompts',
    '-- Angullar Do-Bootstrap',
    '-- new Angular Compiler -  8 phase rotating AOT Compilation',
    '-- Angular error handling'
]
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

  constructor() { 
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
