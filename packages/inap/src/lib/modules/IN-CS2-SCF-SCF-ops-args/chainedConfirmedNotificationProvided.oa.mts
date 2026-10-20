/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { scfChained } from "../IN-CS2-SCF-SCF-ops-args/scfChained.oa.mjs";
// export { scfChained } from "../IN-CS2-SCF-SCF-ops-args/scfChained.oa.mjs";
// export { confirmedNotificationProvided } from "../IN-CS2-SCF-SCF-ops-args/confirmedNotificationProvided.oa.mjs";


/**
 * @summary chainedConfirmedNotificationProvided
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedConfirmedNotificationProvided OPERATION ::= scfChained{confirmedNotificationProvided}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const chainedConfirmedNotificationProvided: OPERATION = scfChained;

/* eslint-enable */
