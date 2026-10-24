/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { chainedHandlingInformationRequest } from "../IN-CS2-SCF-SCF-ops-args/chainedHandlingInformationRequest.oa.mjs";
// export { chainedHandlingInformationRequest } from "../IN-CS2-SCF-SCF-ops-args/chainedHandlingInformationRequest.oa.mjs";
import { chainedConfirmedNotificationProvided } from "../IN-CS2-SCF-SCF-ops-args/chainedConfirmedNotificationProvided.oa.mjs";
// export { chainedConfirmedNotificationProvided } from "../IN-CS2-SCF-SCF-ops-args/chainedConfirmedNotificationProvided.oa.mjs";
import { chainedConfirmedReportChargingInformation } from "../IN-CS2-SCF-SCF-ops-args/chainedConfirmedReportChargingInformation.oa.mjs";
// export { chainedConfirmedReportChargingInformation } from "../IN-CS2-SCF-SCF-ops-args/chainedConfirmedReportChargingInformation.oa.mjs";


/**
 * @summary DSSP_Returnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSSP-Returnable OPERATION ::= {chainedHandlingInformationRequest |
 *    chainedConfirmedNotificationProvided |
 *    chainedConfirmedReportChargingInformation}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const DSSP_Returnable: (OPERATION)[] = [ chainedHandlingInformationRequest, chainedConfirmedNotificationProvided, chainedConfirmedReportChargingInformation, ];

/* eslint-enable */
