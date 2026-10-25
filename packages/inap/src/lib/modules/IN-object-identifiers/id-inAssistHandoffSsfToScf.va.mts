/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inAssistHandoffSsfToScf
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inAssistHandoffSsfToScf OBJECT IDENTIFIER ::= {id-contract inAssistHandoffSsfToScf(5)}
 * ```
 * 
 * @constant
 */
export
const id_inAssistHandoffSsfToScf: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inAssistHandoffSsfToScf */ 5,
], id_contract);

/* eslint-enable */
