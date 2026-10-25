/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    iso,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary fsl_fg
 * @description
 * 
 * Object identifier of the forward-service functional-group attribute.
 * The printable name is `fsl-fg`.
 * 
 * CCSDS 911.1-B-5, section A2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fsl-fg   OBJECT IDENTIFIER ::= {iso 3 112 4 3 1 2 14}
 * ```
 * 
 * @constant
 */
export
const fsl_fg: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
    112,
    4,
    3,
    1,
    2,
    14,
], iso);

/* eslint-enable */
