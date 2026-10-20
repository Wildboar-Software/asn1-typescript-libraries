/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { scfChained } from "../IN-SCF-SCF-ops-args/scfChained.oa.mjs";
// export { scfChained } from "../IN-SCF-SCF-ops-args/scfChained.oa.mjs";
// export { networkCapability } from "../IN-SCF-SCF-ops-args/networkCapability.oa.mjs";


/**
 * @summary chainedNetworkCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedNetworkCapability OPERATION ::= scfChained{networkCapability}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const chainedNetworkCapability: OPERATION = scfChained;

/* eslint-enable */
