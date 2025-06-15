/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";


/**
 * @summary ecdsa_with_SHA384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA384 OBJECT IDENTIFIER ::= {
 * iso(1) member-body(2) us(840) ansi-X9-62(10045) signatures(4)
 * ecdsa-with-SHA2(3) 3 }
 * ```
 *
 * @constant
 */
export const ecdsa_with_SHA384: OBJECT_IDENTIFIER = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-X9-62 */ 10045,
    /* signatures */ 4,
    /* ecdsa-with-SHA2 */ 3,
    3,
]);

/* eslint-enable */
