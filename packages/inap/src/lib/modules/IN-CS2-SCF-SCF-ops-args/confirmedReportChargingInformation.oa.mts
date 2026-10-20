/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { makeConfirm } from "../IN-CS2-SCF-SCF-ops-args/makeConfirm.oa.mjs";
// export { makeConfirm } from "../IN-CS2-SCF-SCF-ops-args/makeConfirm.oa.mjs";
// export { reportChargingInformation } from "../IN-CS2-SCF-SCF-ops-args/reportChargingInformation.oa.mjs";
// export { opcode_confirmedReportChargingInformation } from "../IN-CS2-operationcodes/opcode-confirmedReportChargingInformation.va.mjs";


/**
 * @summary confirmedReportChargingInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * confirmedReportChargingInformation OPERATION ::= makeConfirm{reportChargingInformation,
 *              opcode-confirmedReportChargingInformation}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const confirmedReportChargingInformation: OPERATION = makeConfirm;

/* eslint-enable */
