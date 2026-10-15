/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    iso,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary raf
 * @description
 * 
 * Object identifier of the Return All Frames service-name attribute.
 * The printable name is `raf`.
 * 
 * CCSDS 911.1-B-5, section A2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * raf      OBJECT IDENTIFIER ::= {iso 3 112 4 3 1 2 22}
 * ```
 * 
 * @constant
 */
export
const raf: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
    112,
    4,
    3,
    1,
    2,
    22,
], iso);

/* eslint-enable */
