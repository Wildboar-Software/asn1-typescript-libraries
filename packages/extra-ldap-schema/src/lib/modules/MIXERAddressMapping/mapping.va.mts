/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { mhs_ds } from "../MIXERAddressMapping/mhs-ds.va.mjs";
// export { mhs_ds } from "../MIXERAddressMapping/mhs-ds.va.mjs";


/**
 * @summary mapping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mapping OBJECT IDENTIFIER ::= {mhs-ds 4}
 * ```
 * 
 * @constant
 */
export
const mapping: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], mhs_ds);

/* eslint-enable */
