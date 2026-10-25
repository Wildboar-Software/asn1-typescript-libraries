/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    iso,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary rsl_fg
 * @description
 * 
 * Object identifier of the return-service functional-group attribute.
 * The printable name is `rsl-fg`.
 * 
 * CCSDS 911.1-B-5, section A2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rsl-fg   OBJECT IDENTIFIER ::= {iso 3 112 4 3 1 2 38}
 * ```
 * 
 * @constant
 */
export
const rsl_fg: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
    112,
    4,
    3,
    1,
    2,
    38,
], iso);

/* eslint-enable */
