/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS2-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS2-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inCs2SsfToScfGeneric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inCs2SsfToScfGeneric OBJECT IDENTIFIER ::= {id-contract 3}
 * ```
 * 
 * @constant
 */
export
const id_inCs2SsfToScfGeneric: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], id_contract);

/* eslint-enable */
