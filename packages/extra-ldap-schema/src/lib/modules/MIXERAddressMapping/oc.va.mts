/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { mapping } from "../MIXERAddressMapping/mapping.va.mjs";

/**
 * @summary oc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oc OBJECT IDENTIFIER ::= {mapping 1}
 * ```
 * 
 * @constant
 */
export
const oc: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], mapping);

/* eslint-enable */
