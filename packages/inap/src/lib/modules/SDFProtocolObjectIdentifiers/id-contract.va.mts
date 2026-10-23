/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { in_ds } from "../SDFProtocolObjectIdentifiers/in-ds.va.mjs";
// export { in_ds } from "../SDFProtocolObjectIdentifiers/in-ds.va.mjs";


/**
 * @summary id_contract
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-contract OBJECT IDENTIFIER ::= {in-ds 26}
 * ```
 * 
 * @constant
 */
export
const id_contract: OBJECT_IDENTIFIER = _OID.fromParts([
    26,
], in_ds);

/* eslint-enable */
