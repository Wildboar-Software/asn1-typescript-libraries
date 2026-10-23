/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inSsfToScfGeneric
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inSsfToScfGeneric OBJECT IDENTIFIER ::= {id-contract inSsfToScfGeneric(3)}
 * ```
 * 
 * @constant
 */
export
const id_inSsfToScfGeneric: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inSsfToScfGeneric */ 3,
], id_contract);

/* eslint-enable */
