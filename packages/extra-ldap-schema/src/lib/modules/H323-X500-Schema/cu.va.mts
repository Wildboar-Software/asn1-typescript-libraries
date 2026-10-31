/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { h350_cr } from "../H323-X500-Schema/h350-cr.va.mjs";
// export { h350_cr } from "../H323-X500-Schema/h350-cr.va.mjs";


/**
 * @summary cu
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cu OBJECT IDENTIFIER ::= {h350-cr cu(1)}
 * ```
 * 
 * @constant
 */
export
const cu: OBJECT_IDENTIFIER = _OID.fromParts([
    /* cu */ 1,
], h350_cr);

/* eslint-enable */
