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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
// export { OPERATION } from "../Remote-Operations-Information-Objects/OPERATION.oca.mjs";
import { activityTest } from "../CAP-gsmSSF-gsmSCF-ops-args/activityTest.oa.mjs";
// export { activityTest } from "../CAP-gsmSSF-gsmSCF-ops-args/activityTest.oa.mjs";
import { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
// export { cAPSpecificBoundSet } from "../CAP-classes/cAPSpecificBoundSet.oa.mjs";
import { disconnectForwardConnection } from "../CAP-gsmSSF-gsmSCF-ops-args/disconnectForwardConnection.oa.mjs";
// export { disconnectForwardConnection } from "../CAP-gsmSSF-gsmSCF-ops-args/disconnectForwardConnection.oa.mjs";
import { specializedResourceReport } from "../CAP-gsmSCF-gsmSRF-ops-args/specializedResourceReport.oa.mjs";
// export { specializedResourceReport } from "../CAP-gsmSCF-gsmSRF-ops-args/specializedResourceReport.oa.mjs";


/**
 * @summary SsfToScfGenericInvokable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SsfToScfGenericInvokable OPERATION ::= {
 *     activityTest |
 *     applyCharging {cAPSpecificBoundSet} |
 *     applyChargingReport {cAPSpecificBoundSet} |
 *     callInformationReport {cAPSpecificBoundSet} |
 *     callInformationRequest {cAPSpecificBoundSet} |
 *     cancel {cAPSpecificBoundSet} |
 *     connect {cAPSpecificBoundSet} |
 *     continueWithArgument {cAPSpecificBoundSet} |
 *     connectToResource {cAPSpecificBoundSet} |
 *     collectInformation |
 *     disconnectForwardConnection |
 *     disconnectForwardConnectionWithArgument {cAPSpecificBoundSet} |
 *     disconnectLeg {cAPSpecificBoundSet} |
 *     entityReleased {cAPSpecificBoundSet} |
 *     establishTemporaryConnection {cAPSpecificBoundSet} |
 *     eventReportBCSM {cAPSpecificBoundSet} |
 *     furnishChargingInformation {cAPSpecificBoundSet} |
 *     initialDP {cAPSpecificBoundSet} |
 *     initiateCallAttempt {cAPSpecificBoundSet} |
 *     moveLeg {cAPSpecificBoundSet} |
 *     releaseCall {cAPSpecificBoundSet} |
 *     requestReportBCSMEvent {cAPSpecificBoundSet} |
 *     resetTimer {cAPSpecificBoundSet} |
 *     sendChargingInformation {cAPSpecificBoundSet} |
 *     splitLeg {cAPSpecificBoundSet} |
 *     playAnnouncement {cAPSpecificBoundSet} |
 *     playTone {cAPSpecificBoundSet} |
 *     promptAndCollectUserInformation {cAPSpecificBoundSet} |
 *     specializedResourceReport
 *     }
 * ```
 * 
 * @constant
 * @type {OPERATION[]}
 * 
 */
export
const SsfToScfGenericInvokable: (OPERATION)[] = [ activityTest, applyCharging, applyChargingReport, callInformationReport, callInformationRequest, cancel, connect, continueWithArgument, connectToResource, collectInformation, disconnectForwardConnection, disconnectForwardConnectionWithArgument, disconnectLeg, entityReleased, establishTemporaryConnection, eventReportBCSM, furnishChargingInformation, initialDP, initiateCallAttempt, moveLeg, releaseCall, requestReportBCSMEvent, resetTimer, sendChargingInformation, splitLeg, playAnnouncement, playTone, promptAndCollectUserInformation, specializedResourceReport, ];

/* eslint-enable */
