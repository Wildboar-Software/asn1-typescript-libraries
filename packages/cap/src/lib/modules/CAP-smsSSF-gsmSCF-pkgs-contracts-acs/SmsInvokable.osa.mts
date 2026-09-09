/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { connectSMS } from "../CAP-SMS-ops-args/connectSMS.oa.mjs";
// export { connectSMS } from "../CAP-SMS-ops-args/connectSMS.oa.mjs";
import { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
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
