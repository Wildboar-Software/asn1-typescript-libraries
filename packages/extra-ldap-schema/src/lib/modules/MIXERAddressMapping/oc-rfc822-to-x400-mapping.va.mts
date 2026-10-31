/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { oc } from "../MIXERAddressMapping/oc.va.mjs";
// export { oc } from "../MIXERAddressMapping/oc.va.mjs";


/**
 * @summary oc_rfc822_to_x400_mapping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oc-rfc822-to-x400-mapping OBJECT IDENTIFIER ::= {oc 1}
 * ```
 * 
 * @constant
 */
export
const oc_rfc822_to_x400_mapping: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], oc);

/* eslint-enable */
