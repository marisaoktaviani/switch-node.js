function luasPersegi(sisi) {
    return sisi * sisi;
}
function luasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}
function luasLingkaran(jariJari) {
    return Math.PI * jariJari * jariJari;
}

console.log("Luas Persegi:", luasPersegi(10));
console.log("Luas Segitiga:", luasSegitiga(12, 8));
console.log("Luas Lingkaran:", luasLingkaran(7));