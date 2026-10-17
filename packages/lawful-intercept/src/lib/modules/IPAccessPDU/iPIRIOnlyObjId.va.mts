/* eslint-disable */
import {
    RELATIVE_OID
} from "@wildboar/asn1";
import { iPAccessPDUObjId } from "../IPAccessPDU/iPAccessPDUObjId.va.mjs";
// export { iPAccessPDUObjId } from "../IPAccessPDU/iPAccessPDUObjId.va.mjs";


/**
 * @summary iPIRIOnlyObjId
 * @description
 *
 * Identifies an `IPIRIOnly` payload (packet-header or packet-summary
 * IRI). Arc `iRIOnly(3)` under `iPAccessPDUObjId`
 * (ETSI TS 102 232-3 V3.9.1, clause 8).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iPIRIOnlyObjId RELATIVE-OID ::= {iPAccessPDUObjId iRIOnly(3)}
 * ```
 * 
 * @constant
 */
export
const iPIRIOnlyObjId: RELATIVE_OID = [ ...iPAccessPDUObjId, /* iRIOnly */ 3 ];

/* eslint-enable */
