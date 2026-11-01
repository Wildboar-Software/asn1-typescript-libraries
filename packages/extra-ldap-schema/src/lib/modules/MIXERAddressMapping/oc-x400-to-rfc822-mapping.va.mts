/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { oc } from "../MIXERAddressMapping/oc.va.mjs";


/**
 * @summary oc_x400_to_rfc822_mapping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oc-x400-to-rfc822-mapping OBJECT IDENTIFIER ::= {oc 2}
 * ```
 * 
 * @constant
 */
export
const oc_x400_to_rfc822_mapping: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], oc);

/* eslint-enable */

