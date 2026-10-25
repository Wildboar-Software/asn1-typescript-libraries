/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    iso,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary fsp
 * @description
 * 
 * Object identifier of the service-name attribute whose printable name
 * is `fsp`.
 * 
 * CCSDS 911.1-B-5, section A2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fsp      OBJECT IDENTIFIER ::= {iso 3 112 4 3 1 2 10}
 * ```
 * 
 * @constant
 */
export
const fsp: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
    112,
    4,
    3,
    1,
    2,
    10,
], iso);

/* eslint-enable */
