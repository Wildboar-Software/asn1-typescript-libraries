/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";


/**
 * @summary dhpublicnumber
 * @description
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
