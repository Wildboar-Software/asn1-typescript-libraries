/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    iso,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary spack
 * @description
 * 
 * Object identifier of the service-package attribute. The printable
 * name is `spack`.
 * 
 * CCSDS 911.1-B-5, section A2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * spack    OBJECT IDENTIFIER ::= {iso 3 112 4 3 1 2 53}
 * ```
 * 
 * @constant
 */
export
const spack: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
    112,
    4,
    3,
    1,
    2,
    53,
], iso);

/* eslint-enable */
