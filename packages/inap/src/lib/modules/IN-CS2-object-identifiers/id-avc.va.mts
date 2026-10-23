/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { in_ds } from "../IN-CS2-object-identifiers/in-ds.va.mjs";
// export { in_ds } from "../IN-CS2-object-identifiers/in-ds.va.mjs";


/**
 * @summary id_avc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-avc OBJECT IDENTIFIER ::= {in-ds 29}
 * ```
 * 
 * @constant
 */
export
const id_avc: OBJECT_IDENTIFIER = _OID.fromParts([
    29,
], in_ds);

/* eslint-enable */
