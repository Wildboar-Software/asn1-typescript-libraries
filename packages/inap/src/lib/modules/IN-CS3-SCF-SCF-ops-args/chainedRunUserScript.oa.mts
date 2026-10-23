/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { scfChained } from "../IN-CS3-SCF-SCF-ops-args/scfChained.oa.mjs";
// export { scfChained } from "../IN-CS3-SCF-SCF-ops-args/scfChained.oa.mjs";
// export { runUserScript } from "../IN-CS3-SCF-SCF-ops-args/runUserScript.oa.mjs";


import { runUserScript } from "../IN-CS3-SCF-SCF-ops-args/runUserScript.oa.mjs";

/**
 * @summary chainedRunUserScript
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedRunUserScript OPERATION ::= scfChained{runUserScript}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const chainedRunUserScript: OPERATION = scfChained(runUserScript);

/* eslint-enable */
