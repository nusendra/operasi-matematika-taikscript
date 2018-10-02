# Operasi Matematika dengan TypeScript

`Repo ini untuk memperingati acara HacktoberFest. Silakan berkontribusi di repo sederhana ini.`

## Instalasi

Pastikan sudah install Nodejs dan NPM yaaa.

```terminal
yarn install
```

atau

```terminal
npm install
```

## Cara Ngoding nya

file `index.ts` berfungsi untuk menjalankan atau mengetes library kita, sedangkan file `src/operator.ts` ini sebagai library nya. Jadi nanti kalian bisa berkontribusi di file `operator.ts` ini.

## Cara Menjalankan

Buka 2 terminal, yang pertama untuk menjalankan compiler typescript dengan mode watch, yang kedua untuk mencoba menjalankan app kita.

1. Terminal pertama, Ketik `yarn ts` atau `npm run ts`, nanti akan muncul sebuah folder yang bernama `build`. Nah nanti untuk menjalankan app kita bisa melalui folder ini. Terminal pertama ini dia mode `watch`, fungsi nya jika ada perubahan kode maka typescript secara otomatis akan mengkompilasi file `ts` menjadi `js` native (di folder build).
2. Terminal kedua, Ketik `node build` untuk mencoba menjalankan app kita

## Cara Menggunakan

```javascript
import Operator from './src/operator';

const hitung = new Operator(5, 2);
console.log(hitung.tambah());
```

## Bingung Gimana Caranya? 

https://t.me/nusendra

## 6. Contact

911
