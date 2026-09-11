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
import { eventReportSMS } from "../CAP-SMS-ops-args/eventReportSMS.oa.mjs";
// export { eventReportSMS } from "../CAP-SMS-ops-args/eventReportSMS.oa.mjs";
import { furnishChargingInformationSMS } from "../CAP-SMS-ops-args/furnishChargingInformationSMS.oa.mjs";
// export { furnishChargingInformationSMS } from "../CAP-SMS-ops-args/furnishChargingInformationSMS.oa.mjs";
import { initialDPSMS } from "../CAP-SMS-ops-args/initialDPSMS.oa.mjs";
// export { initialDPSMS } from "../CAP-SMS-ops-args/initialDPSMS.oa.mjs";
import { requestReportSMSEvent } from "../CAP-SMS-ops-args/requestReportSMSEvent.oa.mjs";
// export { requestReportSMSEvent } from "../CAP-SMS-ops-args/requestReportSMSEvent.oa.mjs";
import { resetTimerSMS } from "../CAP-SMS-ops-args/resetTimerSMS.oa.mjs";
// export { resetTimerSMS } from "../CAP-SMS-ops-args/resetTimerSMS.oa.mjs";


/**
 * @summary SmsInvokable
 * @description
 * 
 * Operations that may be invoked in the smsSSF-to-gsmSCF `TCMessage`:
 * `connectSMS`, `eventReportSMS`, `furnishChargingInformationSMS`,
 * `initialDPSMS`, `requestReportSMSEvent`, `resetTimerSMS`. Bound set
 * `cAPSpecificBoundSet`. Rel-6 imports version8(7) operations from
 * CAP-SMS-ops-args. (3GPP TS 29.078 V19.0.0 clause 7.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsInvokable OPERATION ::= {
 *     connectSMS {cAPSpecificBoundSet} |
 *     eventReportSMS {cAPSpecificBoundSet} |
 *     furnishChargingInformationSMS {cAPSpecificBoundSet} |
 *     initialDPSMS {cAPSpecificBoundSet} |
 *     requestReportSMSEvent {cAPSpecificBoundSet} |
 *     resetTimerSMS {cAPSpecificBoundSet}}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const SmsInvokable: (OPERATION)[] = [ connectSMS, eventReportSMS, furnishChargingInformationSMS, initialDPSMS, requestReportSMSEvent, resetTimerSMS, ];

/* eslint-enable */
