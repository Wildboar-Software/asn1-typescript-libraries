/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { scfChained } from "../IN-SCF-SCF-ops-args/scfChained.oa.mjs";
// export { scfChained } from "../IN-SCF-SCF-ops-args/scfChained.oa.mjs";
// export { notificationProvided } from "../IN-SCF-SCF-ops-args/notificationProvided.oa.mjs";


/**
 * @summary chainedNotificationProvided
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedNotificationProvided OPERATION ::= scfChained{notificationProvided}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const chainedNotificationProvided: OPERATION = scfChained;

/* eslint-enable */
