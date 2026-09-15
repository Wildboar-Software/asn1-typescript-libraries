/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { connectSMS } from "../CAP-SMS-ops-args/connectSMS.oa.mjs";
// export { connectSMS } from "../CAP-SMS-ops-args/connectSMS.oa.mjs";
// export { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
import { continueSMS } from "../CAP-SMS-ops-args/continueSMS.oa.mjs";
// export { continueSMS } from "../CAP-SMS-ops-args/continueSMS.oa.mjs";
import { furnishChargingInformationSMS } from "../CAP-SMS-ops-args/furnishChargingInformationSMS.oa.mjs";
// export { furnishChargingInformationSMS } from "../CAP-SMS-ops-args/furnishChargingInformationSMS.oa.mjs";
import { initialDPSMS } from "../CAP-SMS-ops-args/initialDPSMS.oa.mjs";
// export { initialDPSMS } from "../CAP-SMS-ops-args/initialDPSMS.oa.mjs";
import { releaseSMS } from "../CAP-SMS-ops-args/releaseSMS.oa.mjs";
// export { releaseSMS } from "../CAP-SMS-ops-args/releaseSMS.oa.mjs";
import { requestReportSMSEvent } from "../CAP-SMS-ops-args/requestReportSMSEvent.oa.mjs";
// export { requestReportSMSEvent } from "../CAP-SMS-ops-args/requestReportSMSEvent.oa.mjs";
import { resetTimerSMS } from "../CAP-SMS-ops-args/resetTimerSMS.oa.mjs";
// export { resetTimerSMS } from "../CAP-SMS-ops-args/resetTimerSMS.oa.mjs";


/**
 * @summary SmsReturnable
 * @description
 * 
 * Operations that may be returned in the smsSSF-to-gsmSCF `TCMessage`:
 * `connectSMS`, `continueSMS`, `furnishChargingInformationSMS`, `initialDPSMS`,
 * `releaseSMS`, `requestReportSMSEvent`, `resetTimerSMS`. Bound set
 * `cAPSpecificBoundSet`. Rel-6 imports version8(7) operations from
 * CAP-SMS-ops-args. (3GPP TS 29.078 V19.0.0 clause 7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsReturnable OPERATION ::= {
 *     connectSMS {cAPSpecificBoundSet} |
 *     continueSMS |
 *     furnishChargingInformationSMS {cAPSpecificBoundSet} |
 *     initialDPSMS {cAPSpecificBoundSet} |
 *     releaseSMS |
 *     requestReportSMSEvent {cAPSpecificBoundSet} |
 *     resetTimerSMS {cAPSpecificBoundSet}}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const SmsReturnable: (OPERATION)[] = [ connectSMS, continueSMS, furnishChargingInformationSMS, initialDPSMS, releaseSMS, requestReportSMSEvent, resetTimerSMS, ];

/* eslint-enable */
