/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    iso,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary cltu
 * @description
 * 
 * Object identifier of the service-name attribute whose printable name
 * is `cltu`.
 * 
 * CCSDS 911.1-B-5, section A2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cltu     OBJECT IDENTIFIER ::= {iso 3 112 4 3 1 2 7}
 * ```
 * 
 * @constant
 */
export
const cltu: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
    112,
    4,
    3,
    1,
    2,
    7,
], iso);

/* eslint-enable */
