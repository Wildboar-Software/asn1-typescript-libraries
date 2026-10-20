/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { recallAlerting } from "../Recall-Operations-asn1-97/recallAlerting.oa.mjs";
// export { recallAlerting } from "../Recall-Operations-asn1-97/recallAlerting.oa.mjs";
import { recallAnswered } from "../Recall-Operations-asn1-97/recallAnswered.oa.mjs";
// export { recallAnswered } from "../Recall-Operations-asn1-97/recallAnswered.oa.mjs";


/**
 * @summary Recall_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Recall-Operations OPERATION ::= { recallAlerting | recallAnswered }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Recall_Operations: (OPERATION)[] = [ recallAlerting, recallAnswered, ];

/* eslint-enable */
