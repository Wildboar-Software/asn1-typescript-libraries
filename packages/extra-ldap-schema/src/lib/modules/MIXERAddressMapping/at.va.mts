/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { mapping } from "../MIXERAddressMapping/mapping.va.mjs";
// export { mapping } from "../MIXERAddressMapping/mapping.va.mjs";


/**
 * @summary at
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * at OBJECT IDENTIFIER ::= {mapping 2}
 * ```
 * 
 * @constant
 */
export
const at: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], mapping);

/* eslint-enable */
