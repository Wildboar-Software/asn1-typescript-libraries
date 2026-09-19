/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary holdInstruction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * holdInstruction OBJECT IDENTIFIER ::= {joint-iso-itu-t(2) member-body(2) us(840) x9cm(10040) 2}
 * ```
 * 
 * @constant
 */
export
const holdInstruction: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* member-body */ 2,
    /* us */ 840,
    /* x9cm */ 10040,
    2,
]);

/* eslint-enable */
