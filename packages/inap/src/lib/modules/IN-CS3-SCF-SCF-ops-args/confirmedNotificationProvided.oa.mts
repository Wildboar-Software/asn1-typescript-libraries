/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { makeConfirm } from "../IN-CS3-SCF-SCF-ops-args/makeConfirm.oa.mjs";
// export { makeConfirm } from "../IN-CS3-SCF-SCF-ops-args/makeConfirm.oa.mjs";
// export { notificationProvided } from "../IN-CS3-SCF-SCF-ops-args/notificationProvided.oa.mjs";
// export { opcode_confirmedNotificationProvided } from "../IN-CS3-operationcodes/opcode-confirmedNotificationProvided.va.mjs";


/**
 * @summary confirmedNotificationProvided
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * confirmedNotificationProvided OPERATION ::= makeConfirm{notificationProvided,
 *              opcode-confirmedNotificationProvided}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const confirmedNotificationProvided: OPERATION = makeConfirm;

/* eslint-enable */
