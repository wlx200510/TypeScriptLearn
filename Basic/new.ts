/**
 * Variables
 */

 let globalScope: number = 1;
 {
   let blockScope: string = '123';

   globalScope = 100;

 }

const name1: string = 'Steve';
const heightInCentimeters: number = 182.33;
const isActive: boolean = true;

const names: string[] = ['James', 'Nick', 'Rebecca', 'Lily'];
let sayHello: (name: string) => string;
sayHello = function(name) {
  return 'Hello ' + name
};

let person: { name: string; heightInCentimeters: number;};
person =  {
  name: 'Mark',
  heightInCentimeters: 188
}

/**
 * Although many languates specify the type before the identifier, the placement of type annotations in TypeScript after the identifier helps
 * to reinforce that the type annotation is optional. It also allows you to use the full range of variable statements, including const and let
 * This style of type annotation is also inspired by type theory
 */

 /**
  * If a type annotation becomes too complex , use interface or type aliases
  * an interface can do that a type alias cannot do
  */

interface PersonInterface {
  name: string;
  heightInCentimeters: number;
}

const sherlock: PersonInterface = {
  name: 'Bendict',
  heightInCentimeters: 183
}

// Type Alias

type PersonType = {
  name: string;
  heightIncentimeters: number;
};

const john: PersonType = {
  name: 'Martin',
  heightIncentimeters: 169
}

enum VehicleType {
  john, //0
  Lorry //1
}

let union: boolean | number;
union = 5;
union = true;
// union = 'string'
type StringOrError = string | Error;
type SeriesOfTypes = string | number | boolean | Error;
// A union can be created using any types available in your program, not just primitive types

// String literal type
type Kingdom = 'Bacteria' | 'Protozoa' | 'Chromista' | 'Plantae' | 'Fungi' | 'Animalia';
let kingdom: Kingdom;

kingdom = 'Bacteria';

// kingdom = 'Protista';

type Randoms = 'Text' | 10 | false;

let random: Randoms;

random = 'Text';
random = 10;
random = false;

interface Skier {
  slide(): void;
}

interface Shooter {
  shoot(): void;
}

type Biathelete = Skier & Shooter; // Intersection Types

// Typed arrays

interface Monument {
  name: string;
  heightInMeters: number;
}

const monuments: Monument[] = [];

monuments.push({
  name: 'Statue of Liberty',
  heightInMeters: 46
})

monuments.push({
  name: 'Peter the Great',
  heightInMeters: 96
});

monuments.push({
  name: 'Angel of the North',
  heightInMeters: 20
});

function compareMonumentHeights(a: Monument, b: Monument) {
  return b.heightInMeters - a.heightInMeters
}

const monumentsOrderedByHeight = monuments.sort(compareMonumentHeights);
const tallestMonument = monumentsOrderedByHeight[0];

console.log(tallestMonument.name)

// Tuple Types  元组与ES6的小括号不同，是用数组的中括号表示的

let poem: [number, boolean, string];

poem = [1, true, 'love']

interface Cephalopod {
  hasInk: boolean;
  arms: number;
  tentacles: number;
}

interface CephalopodDictionary {
  [index: string]: Cephalopod;
}

let dictionary: CephalopodDictionary = {};
dictionary['octopus'] = {hasInk: true, arms: 8, tentacles: 0};
dictionary['loligo'] = {hasInk: true, arms: 8, tentacles: 2};

// dictionary[0] = {hasInk: true}
const octopus = dictionary['octopus']

console.log(octopus.tentacles)
delete dictionary['octopus']

interface Options {
  material: string;
  backlight: boolean;
}

// Mapped types
type ReadOnly<T> = {readonly [k in keyof T]: T[k];}
type Optional<T> = {[k in keyof T]?: T[k];}
type Nullable<T> = {[k in keyof T]: T[k] | null}

type ReadonlyOptions = Readonly<Options>;
type OptionalOptions = Optional<Options>;
type NullableOptions = Nullable<Options>;

function alertName(): void {
  alert('My name is Karl')
}

let u: undefined = undefined
let n: null = null

// 在ts种 null和undefined是所有类型的子类型
// any表示任意值，声明某变量为任意值后，任何操作返回的内容类型都是any

// 接口的实质就是对象的类型