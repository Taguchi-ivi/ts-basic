import './App.css';
import TestComponent from './TestComponent';

import Data from './data.json';

const name = 'hallo';

let nameChange = 'hallo';
nameChange = 'hallo2';

let username = 'hallo';
let dummyNum = 2;
let bool: boolean = true;

let array1 = [true, false, true];
let array2 = [1, 2, 3, 'hallo'];

interface NAME {
  first: string;
  last?: string | null;
}

let nameObj: NAME = {
  first: 'yamada',
  last: 'taro',
};

const func1 = (x: number, y: number): number => {
  return x + y;
};

// intersection type
type PROFILE = {
  age: number;
  city: string;
};
type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: 'tokyo',
  username: 'xxx',
  password: 'yyy',
};

// union type
let value: boolean | number;
value = true;
value = 10;
// value = 'hello'; // error

let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, 'hello'];

// literal type
let company: 'facebook' | 'google' | 'amazon';
company = 'amazon';
// company = 'apple'; // error

let memory: 256 | 512;

// typeof (jsonのobjectの型を取得する)
let msg: string = 'Hi';
let msg2: typeof msg;
msg2 = 'hello';
// msg2 = 10; // error

let animal = { cat: 'small cat' };
let newAnimal: typeof animal = { cat: 'big cat' };

// keyof (objectのkeyを取得する)
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = 'primary';

// typeof + keyof
const SPORTS = {
  soccer: 'Soccer',
  baseball: 'Baseball',
};

let keySports: keyof typeof SPORTS;
keySports = 'soccer';

// enum (自動で連番を振ってくれる)
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OSType: OS;
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};
const PC2: PC = {
  id: 1,
  OSType: OS.Mac,
};

// 型の互換性
const comp1 = 'test';
let comp2: string = comp1;
let comp3: string = 'test';
// let comp4: 'test' = comp3; // error (抽象度が高いものから低いものには代入できない)

// ジェネリクス
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = { item: 'hello' };
// const gen1: GEN = { item: 12 }; // error
const gen1: GEN<number> = { item: 12 };

interface GEN1<T = string> {
  // デフォルト値を設定できる
  item: T;
}
const gen3: GEN1 = { item: 'hello' };

interface GEN2<T extends string | number> {
  // stringかnumberのみ許容
  item: T;
}
const gen4: GEN2<string> = { item: 'hello' };
const gen5: GEN2<number> = { item: 12 };
// const gen6: GEN2<boolean> = { item: true }; // error

function funcGen<T>(props: T) {
  return { item: props };
}
const gen7 = funcGen('test');
const gen8 = funcGen<string | null>(null);

function funcGen1<T extends string | null>(props: T) {
  return { value: props };
}
const gen9 = funcGen1('hello');
const gen10 = funcGen1(null);
// const gen11 = funcGen1(10); // error

interface Props {
  price: number;
}

function funcGen2<T extends Props>(props: T) {
  return { value: props.price };
}
const gen12 = funcGen2({ price: 10 });

const funcGen3 = <T extends Props>(props: T) => {
  return { value: props.price };
};

// jsonの型推論
type USERS = typeof Data;

// react

const App: React.FC = () => {
  return (
    <>
      <TestComponent text="hello" />
    </>
  );
};

export default App;
