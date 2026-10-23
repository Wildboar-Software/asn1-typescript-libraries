/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-CS3-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inCs3AssistHandoffSsfToScf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inCs3AssistHandoffSsfToScf OBJECT IDENTIFIER ::= {id-contract inCs3AssistHandoffSsfToScf(5)}
 * ```
 * 
 * @constant
 */
export
const id_inCs3AssistHandoffSsfToScf: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inCs3AssistHandoffSsfToScf */ 5,
], id_contract);

/* eslint-enable */
