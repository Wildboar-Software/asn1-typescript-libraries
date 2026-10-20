/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { Priority, _decode_Priority, _encode_Priority } from "../Remote-Operations-Information-Objects/Priority.ta.mjs";
// export { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { scfChained } from "../IN-CS2-SCF-SCF-ops-args/scfChained.oa.mjs";
// export { scfChained } from "../IN-CS2-SCF-SCF-ops-args/scfChained.oa.mjs";
// export { reportChargingInformation } from "../IN-CS2-SCF-SCF-ops-args/reportChargingInformation.oa.mjs";


/**
 * @summary chainedReportChargingInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chainedReportChargingInformation OPERATION ::= scfChained{reportChargingInformation}
 * ```
 * 
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export
const chainedReportChargingInformation: OPERATION = scfChained;

/* eslint-enable */
