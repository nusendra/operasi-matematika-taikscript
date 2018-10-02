export default class Operator {
  nilaiAwal: number;
  nilaiKedua: number;

  constructor(nilaiAwal: number, nilaiKedua: number = 0) {
    this.nilaiAwal = nilaiAwal;
    this.nilaiKedua = nilaiKedua;
  }

  public tambah(): number {
    return this.nilaiAwal + this.nilaiKedua;
  }

  public kurang(): number {
    return this.nilaiAwal - this.nilaiKedua;
  }

  public kali(): number {
    return this.nilaiAwal * this.nilaiKedua;
  }

  public bagi(): number {
    return this.nilaiAwal / this.nilaiKedua
  }

  public pangkat(): number {
    return Math.pow(this.nilaiAwal, this.nilaiKedua);
  }
}
