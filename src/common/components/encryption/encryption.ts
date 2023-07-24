<<<<<<< HEAD
/* eslint-disable prettier/prettier */
import CryptoJS from "crypto-js"

export class Encryption {
  static encrypt(value: any): string {
    return CryptoJS.AES.encrypt(
      JSON.stringify(value),
      "Burftagagt1577481",
    ).toString()
  }

  static decrypt(value: any): string {
    return CryptoJS.AES.decrypt(value, "Burftagagt1577481").toString(
      CryptoJS.enc.Utf8,
    )
  }
}
=======
/* eslint-disable prettier/prettier */
import CryptoJS from "crypto-js"

export class Encryption {
  static encrypt(value: any): string {
    return CryptoJS.AES.encrypt(
      JSON.stringify(value),
      "Burftagagt1577481",
    ).toString()
  }

  static decrypt(value: any): string {
    return CryptoJS.AES.decrypt(value, "Burftagagt1577481").toString(
      CryptoJS.enc.Utf8,
    )
  }
}
>>>>>>> f5caa89ee2da2e1f70c3298f1c68c44c2323ae77
