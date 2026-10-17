/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    iso,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary rcfsh
 * @description
 * 
 * Object identifier of the service-name attribute whose printable name
 * is `rcfsh`.
 * 
 * CCSDS 911.1-B-5, section A2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rcfsh    OBJECT IDENTIFIER ::= {iso 3 112 4 3 1 2 44}
 * ```
 * 
 * @constant
 */
export
const rcfsh: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
    112,
    4,
    3,
    1,
    2,
    44,
], iso);

/* eslint-enable */
