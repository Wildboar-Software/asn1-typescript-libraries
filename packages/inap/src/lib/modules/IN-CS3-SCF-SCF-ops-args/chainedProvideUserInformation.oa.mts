/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { scfChained } from "../IN-CS3-SCF-SCF-ops-args/scfChained.oa.mjs";
// export { scfChained } from "../IN-CS3-SCF-SCF-ops-args/scfChained.oa.mjs";
// export { provideUserInformation } from "../IN-CS3-SCF-SCF-ops-args/provideUserInformation.oa.mjs";


/**
 * @summary chainedProvideUserInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedProvideUserInformation OPERATION ::= scfChained{provideUserInformation}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const chainedProvideUserInformation: OPERATION = scfChained;

/* eslint-enable */
