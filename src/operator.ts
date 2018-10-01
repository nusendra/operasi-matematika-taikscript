export default class Operator {
  nilaiAwal: number;
  nilaiKedua: number;

  constructor(nilaiAwal: number, nilaiKedua: number) {
    this.nilaiAwal = nilaiAwal;
    this.nilaiKedua = nilaiKedua;
  }

  public tambah() {
    return this.nilaiAwal + this.nilaiKedua;
  }
}
