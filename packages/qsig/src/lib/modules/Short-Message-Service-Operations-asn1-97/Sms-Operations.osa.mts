/* eslint-disable */
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { smsSubmit } from "../Short-Message-Service-Operations-asn1-97/smsSubmit.oa.mjs";
// export { smsSubmit } from "../Short-Message-Service-Operations-asn1-97/smsSubmit.oa.mjs";
import { smsDeliver } from "../Short-Message-Service-Operations-asn1-97/smsDeliver.oa.mjs";
// export { smsDeliver } from "../Short-Message-Service-Operations-asn1-97/smsDeliver.oa.mjs";
import { smsStatusReport } from "../Short-Message-Service-Operations-asn1-97/smsStatusReport.oa.mjs";
// export { smsStatusReport } from "../Short-Message-Service-Operations-asn1-97/smsStatusReport.oa.mjs";
import { smsCommand } from "../Short-Message-Service-Operations-asn1-97/smsCommand.oa.mjs";
// export { smsCommand } from "../Short-Message-Service-Operations-asn1-97/smsCommand.oa.mjs";
import { scAlert } from "../Short-Message-Service-Operations-asn1-97/scAlert.oa.mjs";
// export { scAlert } from "../Short-Message-Service-Operations-asn1-97/scAlert.oa.mjs";


/**
 * @summary Sms_Operations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Sms-Operations OPERATION ::= {
 *     smsSubmit
 *     | smsDeliver
 *     | smsStatusReport
 *     | smsCommand
 *     | scAlert
 * }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const Sms_Operations: (OPERATION)[] = [ smsSubmit, smsDeliver, smsStatusReport, smsCommand, scAlert, ];

/* eslint-enable */
