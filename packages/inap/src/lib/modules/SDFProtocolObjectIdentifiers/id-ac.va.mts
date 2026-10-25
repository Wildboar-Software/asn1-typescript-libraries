/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { in_ds } from "../SDFProtocolObjectIdentifiers/in-ds.va.mjs";
// export { in_ds } from "../SDFProtocolObjectIdentifiers/in-ds.va.mjs";


/**
 * @summary id_ac
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac OBJECT IDENTIFIER ::= {in-ds 3}
 * ```
 * 
 * @constant
 */
export
const id_ac: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], in_ds);

/* eslint-enable */
