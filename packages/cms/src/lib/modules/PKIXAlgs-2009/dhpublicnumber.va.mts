/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";


/**
 * @summary dhpublicnumber
 * @description
 *
 * ANSI X9.42 DH public number OID ([RFC 3279 §2.3.3](https://datatracker.ietf.org/doc/html/rfc3279#section-2.3.3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dhpublicnumber OBJECT IDENTIFIER ::= {
 * iso(1) member-body(2) us(840) ansi-x942(10046) number-type(2) 1 }
 * ```
 *
 * @constant
 */
export const dhpublicnumber: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-x942 */ 10046,
    /* number-type */ 2,
    1,
]);

/* eslint-enable */
