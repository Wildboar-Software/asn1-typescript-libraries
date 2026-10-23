/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { chainedHandlingInformationRequest } from "../IN-SCF-SCF-ops-args/chainedHandlingInformationRequest.oa.mjs";
// export { chainedHandlingInformationRequest } from "../IN-SCF-SCF-ops-args/chainedHandlingInformationRequest.oa.mjs";
import { chainedConfirmedNotificationProvided } from "../IN-SCF-SCF-ops-args/chainedConfirmedNotificationProvided.oa.mjs";
// export { chainedConfirmedNotificationProvided } from "../IN-SCF-SCF-ops-args/chainedConfirmedNotificationProvided.oa.mjs";
import { chainedConfirmedReportChargingInformation } from "../IN-SCF-SCF-ops-args/chainedConfirmedReportChargingInformation.oa.mjs";
// export { chainedConfirmedReportChargingInformation } from "../IN-SCF-SCF-ops-args/chainedConfirmedReportChargingInformation.oa.mjs";
import { chainedRunUserScript } from "../IN-SCF-SCF-ops-args/chainedRunUserScript.oa.mjs";
// export { chainedRunUserScript } from "../IN-SCF-SCF-ops-args/chainedRunUserScript.oa.mjs";


/**
 * @summary DSSP_Returnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSSP-Returnable OPERATION ::= {chainedHandlingInformationRequest |
 *    chainedConfirmedNotificationProvided |
 *    chainedConfirmedReportChargingInformation |
 *    chainedRunUserScript}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const DSSP_Returnable: (OPERATION)[] = [ chainedHandlingInformationRequest, chainedConfirmedNotificationProvided, chainedConfirmedReportChargingInformation, chainedRunUserScript, ];

/* eslint-enable */
