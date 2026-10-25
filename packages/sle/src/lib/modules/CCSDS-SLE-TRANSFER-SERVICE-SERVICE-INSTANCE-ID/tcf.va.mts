/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    iso,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary tcf
 * @description
 * 
 * Object identifier of the service-name attribute whose printable name
 * is `tcf`.
 * 
 * CCSDS 911.1-B-5, section A2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcf      OBJECT IDENTIFIER ::= {iso 3 112 4 3 1 2 12}
 * ```
 * 
 * @constant
 */
export
const tcf: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
    112,
    4,
    3,
    1,
    2,
    12,
], iso);

/* eslint-enable */
