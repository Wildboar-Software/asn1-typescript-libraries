/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    iso,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary sagr
 * @description
 * 
 * Object identifier of the service-agreement attribute. The printable
 * name is `sagr`.
 * 
 * CCSDS 911.1-B-5, section A2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sagr     OBJECT IDENTIFIER ::= {iso 3 112 4 3 1 2 52}
 * ```
 * 
 * @constant
 */
export
const sagr: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
    112,
    4,
    3,
    1,
    2,
    52,
], iso);

/* eslint-enable */
