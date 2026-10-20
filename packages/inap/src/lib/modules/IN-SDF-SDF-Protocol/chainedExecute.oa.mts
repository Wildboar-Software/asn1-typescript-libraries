import { execute } from "../IN-SCF-SDF-operations/execute.oa.mjs";
/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { chained } from "../DistributedOperations/chained.oa.mjs";
// export { chained } from "../DistributedOperations/chained.oa.mjs";
// export { execute } from "../IN-SCF-SDF-operations/execute.oa.mjs";


/**
 * @summary chainedExecute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedExecute OPERATION ::= chained{execute}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const chainedExecute: OPERATION = chained(execute) as unknown as OPERATION;

/* eslint-enable */
