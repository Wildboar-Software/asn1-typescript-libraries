/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    iso,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary rsp
 * @description
 * 
 * Object identifier of the service-name attribute whose printable name
 * is `rsp`.
 * 
 * CCSDS 911.1-B-5, section A2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rsp      OBJECT IDENTIFIER ::= {iso 3 112 4 3 1 2 40}
 * ```
 * 
 * @constant
 */
export
const rsp: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
    112,
    4,
    3,
    1,
    2,
    40,
], iso);

/* eslint-enable */
