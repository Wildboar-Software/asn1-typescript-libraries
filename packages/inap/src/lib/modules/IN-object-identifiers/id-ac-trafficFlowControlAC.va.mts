/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";
// export { id_ac } from "../IN-object-identifiers/id-ac.va.mjs";


/**
 * @summary id_ac_trafficFlowControlAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-ac-trafficFlowControlAC OBJECT IDENTIFIER ::= {id-ac trafficFlowControlAC(28) version1(0)}
 * ```
 * 
 * @constant
 */
export
const id_ac_trafficFlowControlAC: OBJECT_IDENTIFIER = _OID.fromParts([
    /* trafficFlowControlAC */ 28,
    /* version1 */ 0,
], id_ac);

/* eslint-enable */
