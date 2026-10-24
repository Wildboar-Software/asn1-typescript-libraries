/* eslint-disable */
import { type OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { smsSubmit } from "../Short-Message-Service-Operations-asn1-97/smsSubmit.oa.mjs";
import { smsDeliver } from "../Short-Message-Service-Operations-asn1-97/smsDeliver.oa.mjs";
import { smsStatusReport } from "../Short-Message-Service-Operations-asn1-97/smsStatusReport.oa.mjs";
import { smsCommand } from "../Short-Message-Service-Operations-asn1-97/smsCommand.oa.mjs";
import { scAlert } from "../Short-Message-Service-Operations-asn1-97/scAlert.oa.mjs";

/**
 * @summary Sms_Operations
 * @description
 *
 * SMS operations (ECMA-325 §6.3.1): `smsSubmit`, `smsDeliver`,
 * `smsStatusReport`, `smsCommand`, and `scAlert`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
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
