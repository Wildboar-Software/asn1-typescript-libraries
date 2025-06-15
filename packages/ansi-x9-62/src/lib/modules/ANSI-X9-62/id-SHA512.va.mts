/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";

/**
 * @summary id_SHA512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-SHA512 OBJECT IDENTIFIER ::= {
 * joint-iso-itu-t(2) country(16) us(840) organization(1) gov(101) csor(3) nistalgorithm(4) hashalgs(2) 3 }
 * ```
 *
 * @constant
 */
export const id_SHA512: OBJECT_IDENTIFIER = new _OID([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* csor */ 3,
    /* nistalgorithm */ 4,
    /* hashalgs */ 2,
    3,
]);

/* eslint-enable */
