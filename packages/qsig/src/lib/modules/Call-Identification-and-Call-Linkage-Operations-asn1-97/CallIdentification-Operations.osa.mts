/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { callIdentificationAssign } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/callIdentificationAssign.oa.mjs";
// export { callIdentificationAssign } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/callIdentificationAssign.oa.mjs";
import { callIdentificationUpdate } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/callIdentificationUpdate.oa.mjs";
// export { callIdentificationUpdate } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/callIdentificationUpdate.oa.mjs";


/**
 * @summary CallIdentification_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallIdentification-Operations OPERATION ::= { callIdentificationAssign | callIdentificationUpdate }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const CallIdentification_Operations: (OPERATION)[] = [ callIdentificationAssign, callIdentificationUpdate, ];

/* eslint-enable */
