/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";


/**
 * @summary ecdsa_with_SHA256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA256 OBJECT IDENTIFIER ::= {
 * iso(1) member-body(2) us(840) ansi-X9-62(10045) signatures(4)
 * ecdsa-with-SHA2(3) 2 }
 * ```
 *
 * @constant
 */
export const ecdsa_with_SHA256: OBJECT_IDENTIFIER = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-X9-62 */ 10045,
    /* signatures */ 4,
    /* ecdsa-with-SHA2 */ 3,
    2,
]);

/* eslint-enable */
