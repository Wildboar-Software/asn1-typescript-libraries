/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary ecPublicKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ecPublicKey OBJECT IDENTIFIER ::= {
 *     iso(1) member-body(2) us(840) ansi-x962(10045) keyType(2) 1
 * }
 * ```
 * 
 * @constant
 */
export
const ecPublicKey: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-x962 */ 10045,
    /* keyType */ 2,
    1,
]);

/* eslint-enable */
