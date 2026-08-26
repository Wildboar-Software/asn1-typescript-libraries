/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary id_keyExchangeAlgorithm
 * @description
 *
 * SKIP/KEA key-exchange algorithm OID ([RFC 3279 §2.3.3](https://datatracker.ietf.org/doc/html/rfc3279#section-2.3.3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-keyExchangeAlgorithm OBJECT IDENTIFIER ::= {
 * joint-iso-itu-t(2) country(16) us(840) organization(1)
 * gov(101) dod(2) infosec(1) algorithms(1) 22 }
 * ```
 *
 * @constant
 */
export const id_keyExchangeAlgorithm: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
    /* organization */ 1,
    /* gov */ 101,
    /* dod */ 2,
    /* infosec */ 1,
    /* algorithms */ 1,
    22,
]);

/* eslint-enable */
