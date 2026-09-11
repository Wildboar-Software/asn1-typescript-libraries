/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CdrReport
 * @description
 * Capability bitmap for the Call Detail Records Report service (ECMA-269
 * C.21.2, ECMA-285 §9.10). Presence of this entry in `CDRServList` means the SF
 * supports that service. Each set bit is an optional parameter, enumerated
 * value, initial connection state, or miscellaneous characteristic from Annex
 * C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CdrReport  ::=  BIT STRING
 * {     cdrReasonTimeout             ( 0),     -- optional parameters
 *     cdrReasonThresholdReached         ( 1),     -- optional parameters
 *     cdrReasonOther                 ( 2),     -- optional parameters
 *     recordNumber                 ( 3),     -- optional parameters
 *     recordCreationTime             ( 4),     -- optional parameters
 *     callingDevice                 ( 5),     -- optional parameters
 *     calledDevice                 ( 6),     -- optional parameters
 *     assocCallingDevice             ( 7),     -- optional parameters
 *     assocCalledDevice             ( 8),     -- optional parameters
 *     netwCallingDevice             ( 9),     -- optional parameters
 *     netwCalledDevice             (10),     -- optional parameters
 *     callCharacteristics             (11),     -- optional parameters
 *     mediaCallCharacteristics         (12),     -- optional parameters
 *     chargedDeviceOperator             (13),     -- optional parameters
 *     chargedDeviceNonOperator         (14),     -- optional parameters
 *     recordedCall                 (15),     -- optional parameters
 *     nodeNumberArea0             (16),     -- optional parameters
 *     nodeNumberArea1             (17),     -- optional parameters
 *     nodeNumberArea2             (18),     -- optional parameters
 *     tarifTable                 (19),     -- optional parameters
 *     connectionStart             (20),     -- optional parameters
 *     connectionEnd                 (21),     -- optional parameters
 *     connectionDuration             (22),     -- optional parameters
 *     accessCode                 (23),     -- optional parameters
 *     carrier                 (24),     -- optional parameters
 *     selectedRoute                 (25),     -- optional parameters
 *     billingIndicatorNormalCharging         (26),     -- optional parameters
 *     billingIndicatorReverseCharging     (27),     -- optional parameters
 *     billingIndicatorCreditCardCharging     (28),     -- optional parameters
 *     billingIndicatorCallForwarding         (29),     -- optional parameters
 *     billingIndicatorCallDeflection         (30),     -- optional parameters
 *     billingIndicatorCallTransfer         (31),     -- optional parameters
 *     billingIndicatorOther             (32),     -- optional parameters
 *     chargingInfo                 (33),     -- optional parameters
 *     suppServiceInfoNormalCall         (34),     -- optional parameters
 *     suppServiceInfoConsultationCall     (35),     -- optional parameters
 *     suppServiceInfoTransferCall         (36),     -- optional parameters
 *     suppServiceInfoCallCompletion         (37),     -- optional parameters
 *     suppServiceInfoCallForwarding         (38),     -- optional parameters
 *     suppServiceInfoCallDiversion         (39),     -- optional parameters
 *     suppServiceInfoConferencing         (40),     -- optional parameters
 *     suppServiceInfoIntrusion         (41),     -- optional parameters
 *     suppServiceInfoUserUserInfo         (42),     -- optional parameters
 *     suppServiceInfoOther             (43),     -- optional parameters
 *     reasonForTermNormalClearing         (44),     -- optional parameters
 *     reasonForTermUnsuccessfulCallAttempt     (45),     -- optional parameters
 *     reasonForTermAbnormalTermination     (46),     -- optional parameters
 *     reasonForTermCallTransferred         (47),     -- optional parameters
 *     reasonForTermOther             (48),     -- optional parameters
 *     authCode                 (49),     -- optional parameters
 *     accountInfo                 (50),     -- optional parameters
 *     deviceCategory                 (51),     -- optional parameters
 *     namedDeviceTypes             (52),     -- optional parameters
 *     operatorDevice                 (53),     -- optional parameters
 *     lastStoredCDRReportSent         (54),     -- optional parameters
 *     privateData                 (55),     -- optional parameters
 *     privateDataInAck             (56) }
 * ```
 */
export
type CdrReport = BIT_STRING;

/**
 * @summary CdrReport_cdrReasonTimeout
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_cdrReasonTimeout: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary cdrReasonTimeout
 * @constant
 * @description
 * Alias of `CdrReport_cdrReasonTimeout`.
 */
export
const cdrReasonTimeout: number = CdrReport_cdrReasonTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_cdrReasonThresholdReached
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_cdrReasonThresholdReached: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cdrReasonThresholdReached
 * @constant
 * @description
 * Alias of `CdrReport_cdrReasonThresholdReached`.
 */
export
const cdrReasonThresholdReached: number = CdrReport_cdrReasonThresholdReached; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_cdrReasonOther
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_cdrReasonOther: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary cdrReasonOther
 * @constant
 * @description
 * Alias of `CdrReport_cdrReasonOther`.
 */
export
const cdrReasonOther: number = CdrReport_cdrReasonOther; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_recordNumber
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_recordNumber: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary recordNumber
 * @constant
 * @description
 * Alias of `CdrReport_recordNumber`.
 */
export
const recordNumber: number = CdrReport_recordNumber; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_recordCreationTime
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_recordCreationTime: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary recordCreationTime
 * @constant
 * @description
 * Alias of `CdrReport_recordCreationTime`.
 */
export
const recordCreationTime: number = CdrReport_recordCreationTime; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_callingDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_callingDevice: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary callingDevice
 * @constant
 * @description
 * Alias of `CdrReport_callingDevice`.
 */
export
const callingDevice: number = CdrReport_callingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_calledDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_calledDevice: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary calledDevice
 * @constant
 * @description
 * Alias of `CdrReport_calledDevice`.
 */
export
const calledDevice: number = CdrReport_calledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_assocCallingDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_assocCallingDevice: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary assocCallingDevice
 * @constant
 * @description
 * Alias of `CdrReport_assocCallingDevice`.
 */
export
const assocCallingDevice: number = CdrReport_assocCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_assocCalledDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_assocCalledDevice: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary assocCalledDevice
 * @constant
 * @description
 * Alias of `CdrReport_assocCalledDevice`.
 */
export
const assocCalledDevice: number = CdrReport_assocCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_netwCallingDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_netwCallingDevice: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary netwCallingDevice
 * @constant
 * @description
 * Alias of `CdrReport_netwCallingDevice`.
 */
export
const netwCallingDevice: number = CdrReport_netwCallingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_netwCalledDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_netwCalledDevice: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary netwCalledDevice
 * @constant
 * @description
 * Alias of `CdrReport_netwCalledDevice`.
 */
export
const netwCalledDevice: number = CdrReport_netwCalledDevice; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.21.2).
 */
export
const CdrReport_callCharacteristics: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `CdrReport_callCharacteristics`.
 */
export
const callCharacteristics: number = CdrReport_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.21.2).
 */
export
const CdrReport_mediaCallCharacteristics: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `CdrReport_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = CdrReport_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_chargedDeviceOperator
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_chargedDeviceOperator: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary chargedDeviceOperator
 * @constant
 * @description
 * Alias of `CdrReport_chargedDeviceOperator`.
 */
export
const chargedDeviceOperator: number = CdrReport_chargedDeviceOperator; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_chargedDeviceNonOperator
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_chargedDeviceNonOperator: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary chargedDeviceNonOperator
 * @constant
 * @description
 * Alias of `CdrReport_chargedDeviceNonOperator`.
 */
export
const chargedDeviceNonOperator: number = CdrReport_chargedDeviceNonOperator; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_recordedCall
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_recordedCall: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary recordedCall
 * @constant
 * @description
 * Alias of `CdrReport_recordedCall`.
 */
export
const recordedCall: number = CdrReport_recordedCall; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_nodeNumberArea0
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_nodeNumberArea0: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary nodeNumberArea0
 * @constant
 * @description
 * Alias of `CdrReport_nodeNumberArea0`.
 */
export
const nodeNumberArea0: number = CdrReport_nodeNumberArea0; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_nodeNumberArea1
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_nodeNumberArea1: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary nodeNumberArea1
 * @constant
 * @description
 * Alias of `CdrReport_nodeNumberArea1`.
 */
export
const nodeNumberArea1: number = CdrReport_nodeNumberArea1; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_nodeNumberArea2
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_nodeNumberArea2: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary nodeNumberArea2
 * @constant
 * @description
 * Alias of `CdrReport_nodeNumberArea2`.
 */
export
const nodeNumberArea2: number = CdrReport_nodeNumberArea2; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_tarifTable
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_tarifTable: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary tarifTable
 * @constant
 * @description
 * Alias of `CdrReport_tarifTable`.
 */
export
const tarifTable: number = CdrReport_tarifTable; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_connectionStart
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_connectionStart: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary connectionStart
 * @constant
 * @description
 * Alias of `CdrReport_connectionStart`.
 */
export
const connectionStart: number = CdrReport_connectionStart; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_connectionEnd
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_connectionEnd: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary connectionEnd
 * @constant
 * @description
 * Alias of `CdrReport_connectionEnd`.
 */
export
const connectionEnd: number = CdrReport_connectionEnd; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_connectionDuration
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_connectionDuration: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary connectionDuration
 * @constant
 * @description
 * Alias of `CdrReport_connectionDuration`.
 */
export
const connectionDuration: number = CdrReport_connectionDuration; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_accessCode
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_accessCode: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary accessCode
 * @constant
 * @description
 * Alias of `CdrReport_accessCode`.
 */
export
const accessCode: number = CdrReport_accessCode; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_carrier
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_carrier: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary carrier
 * @constant
 * @description
 * Alias of `CdrReport_carrier`.
 */
export
const carrier: number = CdrReport_carrier; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_selectedRoute
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_selectedRoute: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary selectedRoute
 * @constant
 * @description
 * Alias of `CdrReport_selectedRoute`.
 */
export
const selectedRoute: number = CdrReport_selectedRoute; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_billingIndicatorNormalCharging
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_billingIndicatorNormalCharging: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary billingIndicatorNormalCharging
 * @constant
 * @description
 * Alias of `CdrReport_billingIndicatorNormalCharging`.
 */
export
const billingIndicatorNormalCharging: number = CdrReport_billingIndicatorNormalCharging; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_billingIndicatorReverseCharging
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_billingIndicatorReverseCharging: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary billingIndicatorReverseCharging
 * @constant
 * @description
 * Alias of `CdrReport_billingIndicatorReverseCharging`.
 */
export
const billingIndicatorReverseCharging: number = CdrReport_billingIndicatorReverseCharging; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_billingIndicatorCreditCardCharging
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_billingIndicatorCreditCardCharging: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary billingIndicatorCreditCardCharging
 * @constant
 * @description
 * Alias of `CdrReport_billingIndicatorCreditCardCharging`.
 */
export
const billingIndicatorCreditCardCharging: number = CdrReport_billingIndicatorCreditCardCharging; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_billingIndicatorCallForwarding
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_billingIndicatorCallForwarding: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary billingIndicatorCallForwarding
 * @constant
 * @description
 * Alias of `CdrReport_billingIndicatorCallForwarding`.
 */
export
const billingIndicatorCallForwarding: number = CdrReport_billingIndicatorCallForwarding; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_billingIndicatorCallDeflection
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_billingIndicatorCallDeflection: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary billingIndicatorCallDeflection
 * @constant
 * @description
 * Alias of `CdrReport_billingIndicatorCallDeflection`.
 */
export
const billingIndicatorCallDeflection: number = CdrReport_billingIndicatorCallDeflection; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_billingIndicatorCallTransfer
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_billingIndicatorCallTransfer: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary billingIndicatorCallTransfer
 * @constant
 * @description
 * Alias of `CdrReport_billingIndicatorCallTransfer`.
 */
export
const billingIndicatorCallTransfer: number = CdrReport_billingIndicatorCallTransfer; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_billingIndicatorOther
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_billingIndicatorOther: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary billingIndicatorOther
 * @constant
 * @description
 * Alias of `CdrReport_billingIndicatorOther`.
 */
export
const billingIndicatorOther: number = CdrReport_billingIndicatorOther; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_chargingInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_chargingInfo: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary chargingInfo
 * @constant
 * @description
 * Alias of `CdrReport_chargingInfo`.
 */
export
const chargingInfo: number = CdrReport_chargingInfo; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_suppServiceInfoNormalCall
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_suppServiceInfoNormalCall: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary suppServiceInfoNormalCall
 * @constant
 * @description
 * Alias of `CdrReport_suppServiceInfoNormalCall`.
 */
export
const suppServiceInfoNormalCall: number = CdrReport_suppServiceInfoNormalCall; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_suppServiceInfoConsultationCall
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_suppServiceInfoConsultationCall: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary suppServiceInfoConsultationCall
 * @constant
 * @description
 * Alias of `CdrReport_suppServiceInfoConsultationCall`.
 */
export
const suppServiceInfoConsultationCall: number = CdrReport_suppServiceInfoConsultationCall; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_suppServiceInfoTransferCall
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_suppServiceInfoTransferCall: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary suppServiceInfoTransferCall
 * @constant
 * @description
 * Alias of `CdrReport_suppServiceInfoTransferCall`.
 */
export
const suppServiceInfoTransferCall: number = CdrReport_suppServiceInfoTransferCall; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_suppServiceInfoCallCompletion
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_suppServiceInfoCallCompletion: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary suppServiceInfoCallCompletion
 * @constant
 * @description
 * Alias of `CdrReport_suppServiceInfoCallCompletion`.
 */
export
const suppServiceInfoCallCompletion: number = CdrReport_suppServiceInfoCallCompletion; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_suppServiceInfoCallForwarding
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_suppServiceInfoCallForwarding: number = 38; /* LONG_NAMED_BIT */

/**
 * @summary suppServiceInfoCallForwarding
 * @constant
 * @description
 * Alias of `CdrReport_suppServiceInfoCallForwarding`.
 */
export
const suppServiceInfoCallForwarding: number = CdrReport_suppServiceInfoCallForwarding; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_suppServiceInfoCallDiversion
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_suppServiceInfoCallDiversion: number = 39; /* LONG_NAMED_BIT */

/**
 * @summary suppServiceInfoCallDiversion
 * @constant
 * @description
 * Alias of `CdrReport_suppServiceInfoCallDiversion`.
 */
export
const suppServiceInfoCallDiversion: number = CdrReport_suppServiceInfoCallDiversion; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_suppServiceInfoConferencing
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_suppServiceInfoConferencing: number = 40; /* LONG_NAMED_BIT */

/**
 * @summary suppServiceInfoConferencing
 * @constant
 * @description
 * Alias of `CdrReport_suppServiceInfoConferencing`.
 */
export
const suppServiceInfoConferencing: number = CdrReport_suppServiceInfoConferencing; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_suppServiceInfoIntrusion
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_suppServiceInfoIntrusion: number = 41; /* LONG_NAMED_BIT */

/**
 * @summary suppServiceInfoIntrusion
 * @constant
 * @description
 * Alias of `CdrReport_suppServiceInfoIntrusion`.
 */
export
const suppServiceInfoIntrusion: number = CdrReport_suppServiceInfoIntrusion; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_suppServiceInfoUserUserInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_suppServiceInfoUserUserInfo: number = 42; /* LONG_NAMED_BIT */

/**
 * @summary suppServiceInfoUserUserInfo
 * @constant
 * @description
 * Alias of `CdrReport_suppServiceInfoUserUserInfo`.
 */
export
const suppServiceInfoUserUserInfo: number = CdrReport_suppServiceInfoUserUserInfo; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_suppServiceInfoOther
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_suppServiceInfoOther: number = 43; /* LONG_NAMED_BIT */

/**
 * @summary suppServiceInfoOther
 * @constant
 * @description
 * Alias of `CdrReport_suppServiceInfoOther`.
 */
export
const suppServiceInfoOther: number = CdrReport_suppServiceInfoOther; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_reasonForTermNormalClearing
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_reasonForTermNormalClearing: number = 44; /* LONG_NAMED_BIT */

/**
 * @summary reasonForTermNormalClearing
 * @constant
 * @description
 * Alias of `CdrReport_reasonForTermNormalClearing`.
 */
export
const reasonForTermNormalClearing: number = CdrReport_reasonForTermNormalClearing; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_reasonForTermUnsuccessfulCallAttempt
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_reasonForTermUnsuccessfulCallAttempt: number = 45; /* LONG_NAMED_BIT */

/**
 * @summary reasonForTermUnsuccessfulCallAttempt
 * @constant
 * @description
 * Alias of `CdrReport_reasonForTermUnsuccessfulCallAttempt`.
 */
export
const reasonForTermUnsuccessfulCallAttempt: number = CdrReport_reasonForTermUnsuccessfulCallAttempt; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_reasonForTermAbnormalTermination
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_reasonForTermAbnormalTermination: number = 46; /* LONG_NAMED_BIT */

/**
 * @summary reasonForTermAbnormalTermination
 * @constant
 * @description
 * Alias of `CdrReport_reasonForTermAbnormalTermination`.
 */
export
const reasonForTermAbnormalTermination: number = CdrReport_reasonForTermAbnormalTermination; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_reasonForTermCallTransferred
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_reasonForTermCallTransferred: number = 47; /* LONG_NAMED_BIT */

/**
 * @summary reasonForTermCallTransferred
 * @constant
 * @description
 * Alias of `CdrReport_reasonForTermCallTransferred`.
 */
export
const reasonForTermCallTransferred: number = CdrReport_reasonForTermCallTransferred; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_reasonForTermOther
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_reasonForTermOther: number = 48; /* LONG_NAMED_BIT */

/**
 * @summary reasonForTermOther
 * @constant
 * @description
 * Alias of `CdrReport_reasonForTermOther`.
 */
export
const reasonForTermOther: number = CdrReport_reasonForTermOther; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_authCode
 * @constant
 * @description
 * Bit set means the SF supports the optional `authCode` parameter (ECMA-269
 * C.21.2).
 */
export
const CdrReport_authCode: number = 49; /* LONG_NAMED_BIT */

/**
 * @summary authCode
 * @constant
 * @description
 * Alias of `CdrReport_authCode`.
 */
export
const authCode: number = CdrReport_authCode; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_accountInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_accountInfo: number = 50; /* LONG_NAMED_BIT */

/**
 * @summary accountInfo
 * @constant
 * @description
 * Alias of `CdrReport_accountInfo`.
 */
export
const accountInfo: number = CdrReport_accountInfo; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_deviceCategory
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_deviceCategory: number = 51; /* LONG_NAMED_BIT */

/**
 * @summary deviceCategory
 * @constant
 * @description
 * Alias of `CdrReport_deviceCategory`.
 */
export
const deviceCategory: number = CdrReport_deviceCategory; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_namedDeviceTypes
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_namedDeviceTypes: number = 52; /* LONG_NAMED_BIT */

/**
 * @summary namedDeviceTypes
 * @constant
 * @description
 * Alias of `CdrReport_namedDeviceTypes`.
 */
export
const namedDeviceTypes: number = CdrReport_namedDeviceTypes; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_operatorDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_operatorDevice: number = 53; /* LONG_NAMED_BIT */

/**
 * @summary operatorDevice
 * @constant
 * @description
 * Alias of `CdrReport_operatorDevice`.
 */
export
const operatorDevice: number = CdrReport_operatorDevice; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_lastStoredCDRReportSent
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.21.2).
 */
export
const CdrReport_lastStoredCDRReportSent: number = 54; /* LONG_NAMED_BIT */

/**
 * @summary lastStoredCDRReportSent
 * @constant
 * @description
 * Alias of `CdrReport_lastStoredCDRReportSent`.
 */
export
const lastStoredCDRReportSent: number = CdrReport_lastStoredCDRReportSent; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.21.2).
 */
export
const CdrReport_privateData: number = 55; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `CdrReport_privateData`.
 */
export
const privateData: number = CdrReport_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CdrReport_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.21.2).
 */
export
const CdrReport_privateDataInAck: number = 56; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `CdrReport_privateDataInAck`.
 */
export
const privateDataInAck: number = CdrReport_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CdrReport: $.ASN1Decoder<CdrReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CdrReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CdrReport (el: _Element): CdrReport {
    if (!_cached_decoder_for_CdrReport) { _cached_decoder_for_CdrReport = $._decodeBitString; }
    return _cached_decoder_for_CdrReport(el);
}

let _cached_encoder_for_CdrReport: $.ASN1Encoder<CdrReport> | null = null;

/**
 * @summary Encodes a(n) CdrReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CdrReport, encoded as an ASN.1 Element.
 */
export
function _encode_CdrReport (value: CdrReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CdrReport) { _cached_encoder_for_CdrReport = $._encodeBitString; }
    return _cached_encoder_for_CdrReport(value, elGetter);
}


/* eslint-enable */
