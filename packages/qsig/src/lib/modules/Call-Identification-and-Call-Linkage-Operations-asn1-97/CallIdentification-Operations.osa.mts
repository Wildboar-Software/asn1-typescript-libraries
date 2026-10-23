/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { callIdentificationAssign } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/callIdentificationAssign.oa.mjs";
import { callIdentificationUpdate } from "../Call-Identification-and-Call-Linkage-Operations-asn1-97/callIdentificationUpdate.oa.mjs";

/**
 * @summary CallIdentification_Operations
 * @description
 *
 * Operations of module
 * Call-Identification-and-Call-Linkage-Operations-asn1-97 (ECMA-314 §6.3.1,
 * Table 1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-314/
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
