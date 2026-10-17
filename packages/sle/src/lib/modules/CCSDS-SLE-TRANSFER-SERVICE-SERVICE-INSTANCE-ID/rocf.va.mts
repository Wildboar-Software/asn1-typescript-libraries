/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    iso,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary rocf
 * @description
 * 
 * Object identifier of the service-name attribute whose printable name
 * is `rocf`.
 * 
 * CCSDS 911.1-B-5, section A2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rocf     OBJECT IDENTIFIER ::= {iso 3 112 4 3 1 2 49}
 * ```
 * 
 * @constant
 */
export
const rocf: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
    112,
    4,
    3,
    1,
    2,
    49,
], iso);

/* eslint-enable */
