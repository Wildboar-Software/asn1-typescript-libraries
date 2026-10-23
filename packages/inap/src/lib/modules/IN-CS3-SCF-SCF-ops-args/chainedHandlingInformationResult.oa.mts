/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { scfChained } from "../IN-CS3-SCF-SCF-ops-args/scfChained.oa.mjs";
// export { scfChained } from "../IN-CS3-SCF-SCF-ops-args/scfChained.oa.mjs";
// export { handlingInformationResult } from "../IN-CS3-SCF-SCF-ops-args/handlingInformationResult.oa.mjs";


import { handlingInformationResult } from "../IN-CS3-SCF-SCF-ops-args/handlingInformationResult.oa.mjs";

/**
 * @summary chainedHandlingInformationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedHandlingInformationResult OPERATION ::= scfChained{handlingInformationResult}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const chainedHandlingInformationResult: OPERATION = scfChained(handlingInformationResult);

/* eslint-enable */
