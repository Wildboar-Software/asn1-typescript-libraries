/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inCs3SsfToScfDpSpecific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inCs3SsfToScfDpSpecific OBJECT IDENTIFIER ::= {id-contract inCs3SsfToScfDpSpecific(4)}
 * ```
 * 
 * @constant
 */
export
const id_inCs3SsfToScfDpSpecific: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inCs3SsfToScfDpSpecific */ 4,
], id_contract);

/* eslint-enable */
