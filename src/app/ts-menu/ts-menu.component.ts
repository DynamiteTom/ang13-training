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
    ['JavaScript Framework','mobile-desktop','TypeScript','TS Libraries  '], 
    ['Why Components', 'class', 'template','Decorators','@Component({})', '- selector', '- templateUrl', '- styleUrl', 'LC-hooks','Change detection'],
    ['Why Directives','@Directive({})','- attribute-directives', '- template-directives *ngIf','- Components'],
    ['Why Pipes', 'template', '- Pure', '- Impure','Custom Pipes', '@Pipe({})','-- PipeTransform - transform'],
    ['Why Services','- DI - dep Injection', '@Injectable({})', '- Module', '- Component','- Sharing'], 
    ['Decorators','- Metadata','- Annotations', '- Class'], 
    ['Interfaces', 'Classes','- constructor', '- properties', '- methods', '- events', '-- this'],
    ['tsc', '- .ts files', '- tsconfig.json', '- JS files', '- ngc'],
    ['- package.json', '- angular.json', '-- dist folder','-- node_modules folder' ],
    ['- String interpolation {{x}}','- property binding[]','- event binding()', '- 2-way data binding'],
    ['Why Style - color-size-position', '- CSS', '-- CSS-Box-Model','inline - ext', 'ngStyle','ngClass', '- SCSS - variables etc.','ViewEncapsulation'],
    ['Angular/CLI','- Building', '- Serving the Browser port'],
    ['NgModule', '- declares Components', '- imports modules', '- Can define Service'],
    ['ngOnChanges()', '- ngOnInit() most popular','- ngDoCheck()', '- ngAfterContentInit()', 
     '- ngAfterContentChecked()', '- ngAfterViewInit()', '- ngAfterViewChecked()','- ngOnDestroy()'],
    ['ComponentRouter', '- router-outlet', '- routerLink', '- ActivatedRoute', '- ParamMap','- Router Guards'],
    ['forChild','children', '- Feature Modules','- Shared Modules'],
    ['Why Change Detection?','- ngZone', '- manual CD', '- automatic CD','- onPush', '- without ngZone'],
    ['Compile time build', 'No need for Compiler','3 Phases','- 1:Code Analysis','- 2:Code generation','- 3:Template type checking'],
    ['Remove unused parts of code'],
    ['Ivy new', 'Locality','Incremental DOM','-- Instructions', 'Libraries', '- ngcc', '- Linker instead', 'Ang Language Service','Compilaion of changes','Ivy - Advantages'],
    ['- ViewEngine old', '- Renderer2', '- Interpreter', '--metadata.json file'],
    ['Promises', '- then()', 'Observables','- next()','- Observer','- subscribe','- async pipe','-- Marble Diagrams'],
    ['Observables','Subjects', '- behaviorSubject', '- asyncSubject', '- replaySubject'],
    ['Reactive Extensions','Pipeable operators','- Combination','- Conditional','- Creation',
    '- Errors','- Multi-cast','- Filters','- Transform'],
    ['- ConcatMap','- MergeMap','- SwitchMap','- ExhaustMap'],
    ['Why forms','- Template Forms','- Reactive Forms'],
    ['State Management','BehaviorSubject','uni-directional','- Store','- Reducer','- Action','- Selector', '- Effects', '-- Entity', '-- Data'],
    ['Whats View DOM', '- ViewChild', '- ViewChildren'],
    ['Whats Content DOM', '- ContentChild', '- ContentChildren'],
    ['Whats transclusion', 'ng-content','- Single Slot','- Multi-Slot','- Conditional'],
    ['CRUD', 'HttpClient', 'HttpInterceptors', 'Angular-web-api-'],
    ['Parent Child commn','- @Input()', '- @Output EventEmitter'],
    ['Parts','- Working tree', '- Stage area','- Local Repository','- Remote Repository','Branches','Fork','stash',
    'Commands - ','- Add','- fetch','- commit','- init','- push','- pull','- log','- status',''], 
    ['Why Test', '- Unit', '-- spec.ts', '--- describe', '--- beforeEach()', '--- it - fit - xit', '--- afterEach', '---- TestBed', '-- Jasmine', '-- Karma', '-- Mocking', '--- Wallaby', 
    '- Integration','-- Shallow','-- Deep', '- End to End', '-- Protractor', '-- Cypress'],
    ['Security', ''],
    ['Auhtorization', 'Authentication', '- Auth0', '- OAuth2'],
    ['Why CI/CD', '- CI - Continuous Integration','- CD - Continuous Development', '- CD - Continuous Delivery', '-- Jenkins'],
    ['Webpack', ''],
    ['Whats the Cloud?', '- AWS - Amazon Web Services', '- Azure'],
    ['Accessability','- ARIA attrbutes', '- WCAG', '- POUR'],
    ['Ang Material', 'Ang CDK'],
    ['Flex-layout', 'display:flex'],
    ['Why PWA','- Service Workers'],
    ['Why Angular Elements'],
    ['Why Web Workers', 'Threading', ''],
    ['Why Angular Universal','- SSR - Server Side Rendering'],
    ['How - Angular Performance - ','largest contentful paint', '',
         'Lazy Loading','Angular Universal','PWA-SW','Ivy', 'AOT Compilation','Tree-Shaking', 'Modern Angular'],
    ['RESTitutional file transfer','- Swagger', '- GraphQL'],
    ['Why Micro-FEs','- WebPack5', '- Module Federation'],
    ['- new WWW -','', '']
];

const subTopicsInfo = [
  ['JavaScript Framework','mobile-desktop','TypeScript','TS Libraries  '], 
    ['Why Components', 'class', 'template','Decorators','@Component({})', '- selector', '- templateUrl', '- styleUrl', 'LC-hooks','Change detection'],
    ['Why Directives','@Directive({})','- attribute-directives', '- template-directives *ngIf','- Components'],
    ['Why Pipes', 'template', '- Pure', '- Impure','Custom Pipes', '@Pipe({})','-- PipeTransform - transform'],
    ['Why Services','- DI - dep Injection', '@Injectable({})', '- Module', '- Component','- Sharing'], 
    ['Decorators','- Metadata','- Annotations', '- Class'], 
    ['Interfaces', 'Classes','- constructor', '- properties', '- methods', '- events', '-- this'],
    ['tsc', '- .ts files', '- tsconfig.json', '- JS files', '- ngc'],
    ['- package.json', '- angular.json', '-- dist folder','-- node_modules folder' ],
    ['- String interpolation {{x}}','- property binding[]','- event binding()', '- 2-way data binding'],
    ['Why Style - color-size-position', '- CSS', '-- CSS-Box-Model','inline - ext', 'ngStyle','ngClass', '- SCSS - variables etc.','ViewEncapsulation'],
    ['Angular/CLI','- Building', '- Serving the Browser port'],
    ['NgModule', '- declares Components', '- imports modules', '- Can define Service'],
    ['ngOnChanges()', '- ngOnInit() most popular','- ngDoCheck()', '- ngAfterContentInit()', 
     '- ngAfterContentChecked()', '- ngAfterViewInit()', '- ngAfterViewChecked()','- ngOnDestroy()'],
    ['ComponentRouter', '- router-outlet', '- routerLink', '- ActivatedRoute', '- ParamMap','- Router Guards'],
    ['forChild','children', '- Feature Modules','- Shared Modules'],
    ['Why Change Detection?','- ngZone', '- manual CD', '- automatic CD','- onPush', '- without ngZone'],
    ['Compile time build', 'No need for Compiler', '3 Phases - 1:Code Analysis- 2:Code generation- 3:Template type checking',
    '-1 AOT Collector - analyzes the metadata and reps in best manner - recorded in the metadata.json file',
    '-2 Metadata collected from the Code Analysis phase is interpreted by Compilers Static Reflector + check for metadata errors ',
    '-3 Angular template compiler - uses tsc to validate binding expns in template - fullTemplateTypeCheck: true in tsconfig'],
    ['Remove unused bits', 
    'Ivy tree-shakes - DI-CP-View - Content queries - Animations Pipes i18n core frmwork services LCHs - easier to ship librarries', 
    'View Engine tree-shakes - '],
    ['Ivy is new Compilation and Rendering Pipeline using AoT Compilation', 
    ' - single file compilation - components dont need to know about dependencies',
    'Incremental DOM - every component gets compiled to a series of instructions - create DOM trees - updated mutably inplace - comprising the compiler ',
    '-- Instructions', 'Libraries', '- ngcc', '- Linker instead', 'Ang Language Service','- only recompile changes to code',
    '- adv Reduced size - faster compilation - enhanced testing + debugging - easier dyn comp loading - mobile exp'],
    ['- ViewEngine old', '- Render  er2', '- Interpreter', '--metadata.json file','ngFactory.js files'],
    ['Promises', '- then()', 'Observables','- next()','- Observer','- subscribe','- async pipe','-- Marble Diagrams'],
    ['Observables','Subjects', '- behaviorSubject', '- asyncSubject', '- replaySubject'],
    ['Reactive Extensions','Pipeable operators','- Combination','- Conditional','- Creation',
    '- Errors','- Multi-cast','- Filters','- Transform'],
    ['- ConcatMap','- MergeMap','- SwitchMap','- ExhaustMap'],
    ['Why forms','- Template Forms','- Reactive Forms'],
    ['State Management','BehaviorSubject','uni-directional','- Store','- Reducer','- Action','- Selector', '- Effects', '-- Entity', '-- Data'],
    ['Whats View DOM', '- ViewChild', '- ViewChildren'],
    ['Whats Content DOM', '- ContentChild', '- ContentChildren'],
    ['Whats transclusion', 'ng-content','- Single Slot','- Multi-Slot','- Conditional'],
    ['CRUD', 'HttpClient', 'HttpInterceptors', 'Angular-web-api-'],
    ['Parent Child commn','- @Input()', '- @Output EventEmitter'],
    ['Parts','- Working tree', '- Stage area','- Local Repository','- Remote Repository','Branches','Fork','stash',
    'Commands - ','- Add','- fetch','- commit','- init','- push','- pull','- log','- status',''], 
    ['Why Test', '- Unit', '-- spec.ts', '--- describe', '--- beforeEach()', '--- it - fit - xit', '--- afterEach', '---- TestBed', '-- Jasmine', '-- Karma', '-- Mocking', '--- Wallaby', 
    '- Integration','-- Shallow','-- Deep', '- End to End', '-- Protractor', '-- Cypress'],
    ['Security', ''],
    ['Auhtorization', 'Authentication', '- Auth0', '- OAuth2'],
    ['Why CI/CD', '- CI - Continuous Integration','- CD - Continuous Development', '- CD - Continuous Delivery', '-- Jenkins'],
    ['Webpack', ''],
    ['Whats the Cloud?', '- AWS - Amazon Web Services', '- Azure'],
    ['Accessability','- ARIA attrbutes', '- WCAG', '- POUR'],
    ['Ang Material', 'Ang CDK'],
    ['Flex-layout', 'display:flex'],
    ['Why PWA','- Service Workers'],
    ['Why Angular Elements'],
    ['Why Web Workers', 'Threading', ''],
    ['Why Angular Universal','- SSR - Server Side Rendering'],
    ['How - Angular Performance - ','- sourceMap Explorer','LCP - largest   ','Lazy Loading','Angular Universal','PWA-SW','Ivy', 'AOT Compilation','Tree-Shaking', 'Modern Angular'],
    ['RESTitutional file transfer','- Swagger', '- GraphQL'],
    ['Why Micro-FEs','- WebPack5', '- Module Federation'],
    ['- new WWW -','', '']
]

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
