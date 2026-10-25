/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { in_ds } from "../IN-CS2-object-identifiers/in-ds.va.mjs";
// export { in_ds } from "../IN-CS2-object-identifiers/in-ds.va.mjs";


/**
 * @summary id_aca
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aca OBJECT IDENTIFIER ::= {in-ds 24}
 * ```
 * 
 * @constant
 */
export
const id_aca: OBJECT_IDENTIFIER = _OID.fromParts([
    24,
], in_ds);

/* eslint-enable */
