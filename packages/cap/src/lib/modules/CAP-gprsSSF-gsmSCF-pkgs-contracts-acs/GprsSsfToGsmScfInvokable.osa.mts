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
import { connectGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/connectGPRS.oa.mjs";
import { entityReleasedGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/entityReleasedGPRS.oa.mjs";
import { eventReportGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/eventReportGPRS.oa.mjs";
import { furnishChargingInformationGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/furnishChargingInformationGPRS.oa.mjs";
import { initialDPGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/initialDPGPRS.oa.mjs";
import { releaseGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/releaseGPRS.oa.mjs";
import { requestReportGPRSEvent } from "../CAP-gprsSSF-gsmSCF-ops-args/requestReportGPRSEvent.oa.mjs";
import { sendChargingInformationGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/sendChargingInformationGPRS.oa.mjs";
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activityTestGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/activityTestGPRS.oa.mjs";
// export { activityTestGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/activityTestGPRS.oa.mjs";
import { applyChargingGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/applyChargingGPRS.oa.mjs";
// export { applyChargingGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/applyChargingGPRS.oa.mjs";
import { applyChargingReportGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/applyChargingReportGPRS.oa.mjs";
// export { applyChargingReportGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/applyChargingReportGPRS.oa.mjs";
import { cancelGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/cancelGPRS.oa.mjs";
// export { cancelGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/cancelGPRS.oa.mjs";
import { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
// export { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
import { resetTimerGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/resetTimerGPRS.oa.mjs";
// export { resetTimerGPRS } from "../CAP-gprsSSF-gsmSCF-ops-args/resetTimerGPRS.oa.mjs";


/**
 * @summary GprsSsfToGsmScfInvokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GprsSsfToGsmScfInvokable OPERATION ::= {
 *     activityTestGPRS |
 *     applyChargingGPRS |
 *     applyChargingReportGPRS |
 *     cancelGPRS |
 *     connectGPRS {cAPSpecificBoundSet} |
 *     entityReleasedGPRS {cAPSpecificBoundSet} |
 *     eventReportGPRS {cAPSpecificBoundSet} |
 *     furnishChargingInformationGPRS {cAPSpecificBoundSet} |
 *     initialDPGPRS {cAPSpecificBoundSet} |
 *     releaseGPRS {cAPSpecificBoundSet} |
 *     requestReportGPRSEvent {cAPSpecificBoundSet} |
 *     resetTimerGPRS |
 *     sendChargingInformationGPRS {cAPSpecificBoundSet}}
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const GprsSsfToGsmScfInvokable: (OPERATION)[] = [ activityTestGPRS, applyChargingGPRS, applyChargingReportGPRS, cancelGPRS, connectGPRS, entityReleasedGPRS, eventReportGPRS, furnishChargingInformationGPRS, initialDPGPRS, releaseGPRS, requestReportGPRSEvent, resetTimerGPRS, sendChargingInformationGPRS, ];

/* eslint-enable */
