/* eslint-disable */
import { TYPE_IDENTIFIER } from "@wildboar/asn1";

/**
 * @summary CHARACTERISTIC_TWO
 * @description
 *
 * Information object class for F2^m basis kinds. ANSI
 * X9.62-1998 §6.1 defines `CHARACTERISTIC-TWO ::= TYPE-IDENTIFIER`.
 * Objects in `BasisTypes` bind `gnBasis`/`tpBasis`/`ppBasis` to
 * `NULL`/`Trinomial`/`Pentanomial`.
 */
export type CHARACTERISTIC_TWO<Type> = TYPE_IDENTIFIER<Type>;

/* eslint-enable */
