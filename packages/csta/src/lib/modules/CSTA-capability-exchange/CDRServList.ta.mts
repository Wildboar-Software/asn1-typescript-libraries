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
import { CdrNotification, CdrNotification_cdrReasonTimeout /* IMPORTED_LONG_NAMED_BIT */, CdrNotification_cdrReasonThresholdReached /* IMPORTED_LONG_NAMED_BIT */, CdrNotification_cdrReasonOther /* IMPORTED_LONG_NAMED_BIT */, CdrNotification_privateData /* IMPORTED_LONG_NAMED_BIT */, CdrNotification_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_CdrNotification, _encode_CdrNotification } from "../CSTA-capability-exchange/CdrNotification.ta.mjs";
// export { CdrNotification, CdrNotification_cdrReasonTimeout /* IMPORTED_LONG_NAMED_BIT */, CdrNotification_cdrReasonThresholdReached /* IMPORTED_LONG_NAMED_BIT */, CdrNotification_cdrReasonOther /* IMPORTED_LONG_NAMED_BIT */, CdrNotification_privateData /* IMPORTED_LONG_NAMED_BIT */, CdrNotification_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_CdrNotification, _encode_CdrNotification } from "../CSTA-capability-exchange/CdrNotification.ta.mjs";
import { CdrReport, CdrReport_cdrReasonTimeout /* IMPORTED_LONG_NAMED_BIT */, CdrReport_cdrReasonThresholdReached /* IMPORTED_LONG_NAMED_BIT */, CdrReport_cdrReasonOther /* IMPORTED_LONG_NAMED_BIT */, CdrReport_recordNumber /* IMPORTED_LONG_NAMED_BIT */, recordNumber /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_recordCreationTime /* IMPORTED_LONG_NAMED_BIT */, recordCreationTime /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_callingDevice /* IMPORTED_LONG_NAMED_BIT */, callingDevice /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_calledDevice /* IMPORTED_LONG_NAMED_BIT */, calledDevice /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_assocCallingDevice /* IMPORTED_LONG_NAMED_BIT */, assocCallingDevice /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_assocCalledDevice /* IMPORTED_LONG_NAMED_BIT */, assocCalledDevice /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, netwCallingDevice /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, netwCalledDevice /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, callCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, mediaCallCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_chargedDeviceOperator /* IMPORTED_LONG_NAMED_BIT */, chargedDeviceOperator /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_chargedDeviceNonOperator /* IMPORTED_LONG_NAMED_BIT */, chargedDeviceNonOperator /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_recordedCall /* IMPORTED_LONG_NAMED_BIT */, recordedCall /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_nodeNumberArea0 /* IMPORTED_LONG_NAMED_BIT */, nodeNumberArea0 /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_nodeNumberArea1 /* IMPORTED_LONG_NAMED_BIT */, nodeNumberArea1 /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_nodeNumberArea2 /* IMPORTED_LONG_NAMED_BIT */, nodeNumberArea2 /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_tarifTable /* IMPORTED_LONG_NAMED_BIT */, tarifTable /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_connectionStart /* IMPORTED_LONG_NAMED_BIT */, connectionStart /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_connectionEnd /* IMPORTED_LONG_NAMED_BIT */, connectionEnd /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_connectionDuration /* IMPORTED_LONG_NAMED_BIT */, connectionDuration /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_accessCode /* IMPORTED_LONG_NAMED_BIT */, accessCode /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_carrier /* IMPORTED_LONG_NAMED_BIT */, carrier /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_selectedRoute /* IMPORTED_LONG_NAMED_BIT */, selectedRoute /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_billingIndicatorNormalCharging /* IMPORTED_LONG_NAMED_BIT */, billingIndicatorNormalCharging /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_billingIndicatorReverseCharging /* IMPORTED_LONG_NAMED_BIT */, billingIndicatorReverseCharging /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_billingIndicatorCreditCardCharging /* IMPORTED_LONG_NAMED_BIT */, billingIndicatorCreditCardCharging /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_billingIndicatorCallForwarding /* IMPORTED_LONG_NAMED_BIT */, billingIndicatorCallForwarding /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_billingIndicatorCallDeflection /* IMPORTED_LONG_NAMED_BIT */, billingIndicatorCallDeflection /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_billingIndicatorCallTransfer /* IMPORTED_LONG_NAMED_BIT */, billingIndicatorCallTransfer /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_billingIndicatorOther /* IMPORTED_LONG_NAMED_BIT */, billingIndicatorOther /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_chargingInfo /* IMPORTED_LONG_NAMED_BIT */, chargingInfo /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoNormalCall /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoNormalCall /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoConsultationCall /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoConsultationCall /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoTransferCall /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoTransferCall /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoCallCompletion /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoCallCompletion /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoCallForwarding /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoCallForwarding /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoCallDiversion /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoCallDiversion /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoConferencing /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoConferencing /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoIntrusion /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoIntrusion /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoUserUserInfo /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoUserUserInfo /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoOther /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoOther /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_reasonForTermNormalClearing /* IMPORTED_LONG_NAMED_BIT */, reasonForTermNormalClearing /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_reasonForTermUnsuccessfulCallAttempt /* IMPORTED_LONG_NAMED_BIT */, reasonForTermUnsuccessfulCallAttempt /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_reasonForTermAbnormalTermination /* IMPORTED_LONG_NAMED_BIT */, reasonForTermAbnormalTermination /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_reasonForTermCallTransferred /* IMPORTED_LONG_NAMED_BIT */, reasonForTermCallTransferred /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_reasonForTermOther /* IMPORTED_LONG_NAMED_BIT */, reasonForTermOther /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_authCode /* IMPORTED_LONG_NAMED_BIT */, authCode /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_accountInfo /* IMPORTED_LONG_NAMED_BIT */, accountInfo /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_deviceCategory /* IMPORTED_LONG_NAMED_BIT */, deviceCategory /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_namedDeviceTypes /* IMPORTED_LONG_NAMED_BIT */, namedDeviceTypes /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_operatorDevice /* IMPORTED_LONG_NAMED_BIT */, operatorDevice /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_lastStoredCDRReportSent /* IMPORTED_LONG_NAMED_BIT */, lastStoredCDRReportSent /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_privateData /* IMPORTED_LONG_NAMED_BIT */, CdrReport_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_CdrReport, _encode_CdrReport } from "../CSTA-capability-exchange/CdrReport.ta.mjs";
// export { CdrReport, CdrReport_cdrReasonTimeout /* IMPORTED_LONG_NAMED_BIT */, CdrReport_cdrReasonThresholdReached /* IMPORTED_LONG_NAMED_BIT */, CdrReport_cdrReasonOther /* IMPORTED_LONG_NAMED_BIT */, CdrReport_recordNumber /* IMPORTED_LONG_NAMED_BIT */, recordNumber /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_recordCreationTime /* IMPORTED_LONG_NAMED_BIT */, recordCreationTime /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_callingDevice /* IMPORTED_LONG_NAMED_BIT */, callingDevice /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_calledDevice /* IMPORTED_LONG_NAMED_BIT */, calledDevice /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_assocCallingDevice /* IMPORTED_LONG_NAMED_BIT */, assocCallingDevice /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_assocCalledDevice /* IMPORTED_LONG_NAMED_BIT */, assocCalledDevice /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, netwCallingDevice /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, netwCalledDevice /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, callCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, mediaCallCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_chargedDeviceOperator /* IMPORTED_LONG_NAMED_BIT */, chargedDeviceOperator /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_chargedDeviceNonOperator /* IMPORTED_LONG_NAMED_BIT */, chargedDeviceNonOperator /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_recordedCall /* IMPORTED_LONG_NAMED_BIT */, recordedCall /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_nodeNumberArea0 /* IMPORTED_LONG_NAMED_BIT */, nodeNumberArea0 /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_nodeNumberArea1 /* IMPORTED_LONG_NAMED_BIT */, nodeNumberArea1 /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_nodeNumberArea2 /* IMPORTED_LONG_NAMED_BIT */, nodeNumberArea2 /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_tarifTable /* IMPORTED_LONG_NAMED_BIT */, tarifTable /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_connectionStart /* IMPORTED_LONG_NAMED_BIT */, connectionStart /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_connectionEnd /* IMPORTED_LONG_NAMED_BIT */, connectionEnd /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_connectionDuration /* IMPORTED_LONG_NAMED_BIT */, connectionDuration /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_accessCode /* IMPORTED_LONG_NAMED_BIT */, accessCode /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_carrier /* IMPORTED_LONG_NAMED_BIT */, carrier /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_selectedRoute /* IMPORTED_LONG_NAMED_BIT */, selectedRoute /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_billingIndicatorNormalCharging /* IMPORTED_LONG_NAMED_BIT */, billingIndicatorNormalCharging /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_billingIndicatorReverseCharging /* IMPORTED_LONG_NAMED_BIT */, billingIndicatorReverseCharging /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_billingIndicatorCreditCardCharging /* IMPORTED_LONG_NAMED_BIT */, billingIndicatorCreditCardCharging /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_billingIndicatorCallForwarding /* IMPORTED_LONG_NAMED_BIT */, billingIndicatorCallForwarding /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_billingIndicatorCallDeflection /* IMPORTED_LONG_NAMED_BIT */, billingIndicatorCallDeflection /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_billingIndicatorCallTransfer /* IMPORTED_LONG_NAMED_BIT */, billingIndicatorCallTransfer /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_billingIndicatorOther /* IMPORTED_LONG_NAMED_BIT */, billingIndicatorOther /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_chargingInfo /* IMPORTED_LONG_NAMED_BIT */, chargingInfo /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoNormalCall /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoNormalCall /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoConsultationCall /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoConsultationCall /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoTransferCall /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoTransferCall /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoCallCompletion /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoCallCompletion /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoCallForwarding /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoCallForwarding /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoCallDiversion /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoCallDiversion /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoConferencing /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoConferencing /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoIntrusion /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoIntrusion /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoUserUserInfo /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoUserUserInfo /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_suppServiceInfoOther /* IMPORTED_LONG_NAMED_BIT */, suppServiceInfoOther /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_reasonForTermNormalClearing /* IMPORTED_LONG_NAMED_BIT */, reasonForTermNormalClearing /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_reasonForTermUnsuccessfulCallAttempt /* IMPORTED_LONG_NAMED_BIT */, reasonForTermUnsuccessfulCallAttempt /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_reasonForTermAbnormalTermination /* IMPORTED_LONG_NAMED_BIT */, reasonForTermAbnormalTermination /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_reasonForTermCallTransferred /* IMPORTED_LONG_NAMED_BIT */, reasonForTermCallTransferred /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_reasonForTermOther /* IMPORTED_LONG_NAMED_BIT */, reasonForTermOther /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_authCode /* IMPORTED_LONG_NAMED_BIT */, authCode /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_accountInfo /* IMPORTED_LONG_NAMED_BIT */, accountInfo /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_deviceCategory /* IMPORTED_LONG_NAMED_BIT */, deviceCategory /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_namedDeviceTypes /* IMPORTED_LONG_NAMED_BIT */, namedDeviceTypes /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_operatorDevice /* IMPORTED_LONG_NAMED_BIT */, operatorDevice /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_lastStoredCDRReportSent /* IMPORTED_LONG_NAMED_BIT */, lastStoredCDRReportSent /* IMPORTED_SHORT_NAMED_BIT */, CdrReport_privateData /* IMPORTED_LONG_NAMED_BIT */, CdrReport_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_CdrReport, _encode_CdrReport } from "../CSTA-capability-exchange/CdrReport.ta.mjs";
import { SendStoredCDRs, SendStoredCDRs_timePeriod /* IMPORTED_LONG_NAMED_BIT */, timePeriod /* IMPORTED_SHORT_NAMED_BIT */, SendStoredCDRs_privateData /* IMPORTED_LONG_NAMED_BIT */, SendStoredCDRs_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SendStoredCDRs, _encode_SendStoredCDRs } from "../CSTA-capability-exchange/SendStoredCDRs.ta.mjs";
// export { SendStoredCDRs, SendStoredCDRs_timePeriod /* IMPORTED_LONG_NAMED_BIT */, timePeriod /* IMPORTED_SHORT_NAMED_BIT */, SendStoredCDRs_privateData /* IMPORTED_LONG_NAMED_BIT */, SendStoredCDRs_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SendStoredCDRs, _encode_SendStoredCDRs } from "../CSTA-capability-exchange/SendStoredCDRs.ta.mjs";
import { StartCDRTransmission, StartCDRTransmission_transferModeTransferAtEndOfCall /* IMPORTED_LONG_NAMED_BIT */, transferModeTransferAtEndOfCall /* IMPORTED_SHORT_NAMED_BIT */, StartCDRTransmission_transferModeTransferOnRequest /* IMPORTED_LONG_NAMED_BIT */, transferModeTransferOnRequest /* IMPORTED_SHORT_NAMED_BIT */, StartCDRTransmission_transferModeTransferOnThresholdReached /* IMPORTED_LONG_NAMED_BIT */, transferModeTransferOnThresholdReached /* IMPORTED_SHORT_NAMED_BIT */, StartCDRTransmission_privateData /* IMPORTED_LONG_NAMED_BIT */, StartCDRTransmission_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_StartCDRTransmission, _encode_StartCDRTransmission } from "../CSTA-capability-exchange/StartCDRTransmission.ta.mjs";
// export { StartCDRTransmission, StartCDRTransmission_transferModeTransferAtEndOfCall /* IMPORTED_LONG_NAMED_BIT */, transferModeTransferAtEndOfCall /* IMPORTED_SHORT_NAMED_BIT */, StartCDRTransmission_transferModeTransferOnRequest /* IMPORTED_LONG_NAMED_BIT */, transferModeTransferOnRequest /* IMPORTED_SHORT_NAMED_BIT */, StartCDRTransmission_transferModeTransferOnThresholdReached /* IMPORTED_LONG_NAMED_BIT */, transferModeTransferOnThresholdReached /* IMPORTED_SHORT_NAMED_BIT */, StartCDRTransmission_privateData /* IMPORTED_LONG_NAMED_BIT */, StartCDRTransmission_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_StartCDRTransmission, _encode_StartCDRTransmission } from "../CSTA-capability-exchange/StartCDRTransmission.ta.mjs";
import { StopCDRTransmission, StopCDRTransmission_cdrTermReasonEndOfData /* IMPORTED_LONG_NAMED_BIT */, cdrTermReasonEndOfData /* IMPORTED_SHORT_NAMED_BIT */, StopCDRTransmission_cdrTermReasonError /* IMPORTED_LONG_NAMED_BIT */, cdrTermReasonError /* IMPORTED_SHORT_NAMED_BIT */, StopCDRTransmission_cdrTermReasonThresholdReached /* IMPORTED_LONG_NAMED_BIT */, cdrTermReasonThresholdReached /* IMPORTED_SHORT_NAMED_BIT */, StopCDRTransmission_cdrTermReasonOther /* IMPORTED_LONG_NAMED_BIT */, cdrTermReasonOther /* IMPORTED_SHORT_NAMED_BIT */, StopCDRTransmission_privateData /* IMPORTED_LONG_NAMED_BIT */, StopCDRTransmission_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, StopCDRTransmission_swFunctionSupportsSending /* IMPORTED_LONG_NAMED_BIT */, swFunctionSupportsSending /* IMPORTED_SHORT_NAMED_BIT */, StopCDRTransmission_swFunctionSupportsReceiving /* IMPORTED_LONG_NAMED_BIT */, swFunctionSupportsReceiving /* IMPORTED_SHORT_NAMED_BIT */, _decode_StopCDRTransmission, _encode_StopCDRTransmission } from "../CSTA-capability-exchange/StopCDRTransmission.ta.mjs";
// export { StopCDRTransmission, StopCDRTransmission_cdrTermReasonEndOfData /* IMPORTED_LONG_NAMED_BIT */, cdrTermReasonEndOfData /* IMPORTED_SHORT_NAMED_BIT */, StopCDRTransmission_cdrTermReasonError /* IMPORTED_LONG_NAMED_BIT */, cdrTermReasonError /* IMPORTED_SHORT_NAMED_BIT */, StopCDRTransmission_cdrTermReasonThresholdReached /* IMPORTED_LONG_NAMED_BIT */, cdrTermReasonThresholdReached /* IMPORTED_SHORT_NAMED_BIT */, StopCDRTransmission_cdrTermReasonOther /* IMPORTED_LONG_NAMED_BIT */, cdrTermReasonOther /* IMPORTED_SHORT_NAMED_BIT */, StopCDRTransmission_privateData /* IMPORTED_LONG_NAMED_BIT */, StopCDRTransmission_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, StopCDRTransmission_swFunctionSupportsSending /* IMPORTED_LONG_NAMED_BIT */, swFunctionSupportsSending /* IMPORTED_SHORT_NAMED_BIT */, StopCDRTransmission_swFunctionSupportsReceiving /* IMPORTED_LONG_NAMED_BIT */, swFunctionSupportsReceiving /* IMPORTED_SHORT_NAMED_BIT */, _decode_StopCDRTransmission, _encode_StopCDRTransmission } from "../CSTA-capability-exchange/StopCDRTransmission.ta.mjs";


/**
 * @summary CDRServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRServList ::= SEQUENCE
 * {     cdrNotification         [ 0] IMPLICIT     CdrNotification         OPTIONAL,
 *     cdrReport             [ 1] IMPLICIT     CdrReport             OPTIONAL,
 *     sendStoredCDRs             [ 2] IMPLICIT     SendStoredCDRs             OPTIONAL,
 *     startCDRTransmission         [ 3] IMPLICIT     StartCDRTransmission         OPTIONAL,
 *     stopCDRTransmission         [ 4] IMPLICIT     StopCDRTransmission         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CDRServList {
    constructor (
        /**
         * @summary `cdrNotification`.
         * @public
         * @readonly
         */
        readonly cdrNotification: OPTIONAL<CdrNotification>,
        /**
         * @summary `cdrReport`.
         * @public
         * @readonly
         */
        readonly cdrReport: OPTIONAL<CdrReport>,
        /**
         * @summary `sendStoredCDRs`.
         * @public
         * @readonly
         */
        readonly sendStoredCDRs: OPTIONAL<SendStoredCDRs>,
        /**
         * @summary `startCDRTransmission`.
         * @public
         * @readonly
         */
        readonly startCDRTransmission: OPTIONAL<StartCDRTransmission>,
        /**
         * @summary `stopCDRTransmission`.
         * @public
         * @readonly
         */
        readonly stopCDRTransmission: OPTIONAL<StopCDRTransmission>
    ) {}

    /**
     * @summary Restructures an object into a CDRServList
     * @description
     * 
     * This takes an `object` and converts it to a `CDRServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CDRServList`.
     * @returns {CDRServList}
     */
    public static _from_object (_o: { [_K in keyof (CDRServList)]: (CDRServList)[_K] }): CDRServList {
        return new CDRServList(_o.cdrNotification, _o.cdrReport, _o.sendStoredCDRs, _o.startCDRTransmission, _o.stopCDRTransmission);
    }


}

/**
 * @summary The Leading Root Component Types of CDRServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CDRServList: $.ComponentSpec[] = [
    new $.ComponentSpec("cdrNotification", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("cdrReport", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("sendStoredCDRs", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("startCDRTransmission", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("stopCDRTransmission", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CDRServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CDRServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CDRServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CDRServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CDRServList: $.ASN1Decoder<CDRServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CDRServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CDRServList (el: _Element): CDRServList {
    if (!_cached_decoder_for_CDRServList) { _cached_decoder_for_CDRServList = function (el: _Element): CDRServList {
    let cdrNotification: OPTIONAL<CdrNotification>;
    let cdrReport: OPTIONAL<CdrReport>;
    let sendStoredCDRs: OPTIONAL<SendStoredCDRs>;
    let startCDRTransmission: OPTIONAL<StartCDRTransmission>;
    let stopCDRTransmission: OPTIONAL<StopCDRTransmission>;
    const callbacks: $.DecodingMap = {
        "cdrNotification": (_el: _Element): void => { cdrNotification = $._decode_implicit<CdrNotification>(() => _decode_CdrNotification)(_el); },
        "cdrReport": (_el: _Element): void => { cdrReport = $._decode_implicit<CdrReport>(() => _decode_CdrReport)(_el); },
        "sendStoredCDRs": (_el: _Element): void => { sendStoredCDRs = $._decode_implicit<SendStoredCDRs>(() => _decode_SendStoredCDRs)(_el); },
        "startCDRTransmission": (_el: _Element): void => { startCDRTransmission = $._decode_implicit<StartCDRTransmission>(() => _decode_StartCDRTransmission)(_el); },
        "stopCDRTransmission": (_el: _Element): void => { stopCDRTransmission = $._decode_implicit<StopCDRTransmission>(() => _decode_StopCDRTransmission)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CDRServList,
        _extension_additions_list_spec_for_CDRServList,
        _root_component_type_list_2_spec_for_CDRServList,
        undefined,
    );
    return new CDRServList(
        cdrNotification,
        cdrReport,
        sendStoredCDRs,
        startCDRTransmission,
        stopCDRTransmission
    );
}; }
    return _cached_decoder_for_CDRServList(el);
}

let _cached_encoder_for_CDRServList: $.ASN1Encoder<CDRServList> | null = null;

/**
 * @summary Encodes a(n) CDRServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CDRServList, encoded as an ASN.1 Element.
 */
export
function _encode_CDRServList (value: CDRServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CDRServList) { _cached_encoder_for_CDRServList = function (value: CDRServList, elGetter: $.ASN1Encoder<CDRServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.cdrNotification === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CdrNotification, $.BER)(value.cdrNotification, $.BER)),
            /* IF_ABSENT  */ ((value.cdrReport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CdrReport, $.BER)(value.cdrReport, $.BER)),
            /* IF_ABSENT  */ ((value.sendStoredCDRs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SendStoredCDRs, $.BER)(value.sendStoredCDRs, $.BER)),
            /* IF_ABSENT  */ ((value.startCDRTransmission === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_StartCDRTransmission, $.BER)(value.startCDRTransmission, $.BER)),
            /* IF_ABSENT  */ ((value.stopCDRTransmission === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_StopCDRTransmission, $.BER)(value.stopCDRTransmission, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CDRServList(value, elGetter);
}


/* eslint-enable */
