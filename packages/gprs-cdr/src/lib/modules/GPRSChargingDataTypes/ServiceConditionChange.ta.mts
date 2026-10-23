/* eslint-disable */
import {
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceConditionChange
 * @description
 *
 * Service Condition Change defines the reason for closing the service data
 * container (see TS 32.251 [11]), such as tariff time change, IP-CAN bearer
 * modification (e.g. QoS change, S-GW change, user location change, user CSG
 * information change), access change of service data flow, indirect service
 * condition change, service usage thresholds, service idled out, termination
 * or failure handling procedure. When one of the "CGI/SAI, ECGI or TAI or
 * RAI Change" are reported as user location change, the dedicated value in
 * service Condition Change is set instead of the generic "user location
 * change" value. This field is specified as bitmask for support of multiple
 * change trigger (e.g. S-GW and QoS change). This field is derived from
 * Change-Condition AVP at Service-Data-Container AVP level defined in TS
 * 32.299 [50] when received on Rf.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.24.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceConditionChange  ::=  BIT STRING {
 *    qoSChange  (0 ),
 *    sGSNChange  (1 ),
 *    sGSNPLMNIDChange  (2 ),
 *    tariffTimeSwitch  (3 ),
 *    pDPContextRelease  (4 ),
 *    rATChange  (5 ),
 *    serviceIdledOut  (6 ),
 *    reserved  (7 ),
 *    configurationChange  (8 ),
 *    serviceStop  (9 ),
 *    dCCATimeThresholdReached  (10 ),
 *    dCCAVolumeThresholdReached  (11 ),
 *    dCCAServiceSpecificUnitThresholdReached  (12 ),
 *    dCCATimeExhausted  (13 ),
 *    dCCAVolumeExhausted  (14 ),
 *    dCCAValidityTimeout  (15 ),
 *    reserved1  (16 ),
 *    dCCAReauthorisationRequest  (17 ),
 *    dCCAContinueOngoingSession  (18 ),
 *    dCCARetryAndTerminateOngoingSession  (19 ),
 *    dCCATerminateOngoingSession  (20 ),
 *    cGI-SAIChange  (21 ),
 *    rAIChange  (22 ),
 *    dCCAServiceSpecificUnitExhausted  (23 ),
 *    recordClosure  (24 ),
 *    timeLimit  (25 ),
 *    volumeLimit  (26 ),
 *    serviceSpecificUnitLimit  (27 ),
 *    envelopeClosure  (28 ),
 *    eCGIChange  (29 ),
 *    tAIChange  (30 ),
 *    userLocationChange  (31 ),
 *    userCSGInformationChange  (32 ),
 *    presenceInPRAChange  (33 ),
 *    accessChangeOfSDF  (34 ),
 *    indirectServiceConditionChange  (35 ),
 *    servingPLMNRateControlChange  (36 ),
 *    aPNRateControlChange  (37 )}
 * ```
 */
export
type ServiceConditionChange = BIT_STRING;

/**
 * @summary ServiceConditionChange_qoSChange
 * @constant
 */
export
const ServiceConditionChange_qoSChange: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary qoSChange
 * @constant
 */
export
const qoSChange: number = ServiceConditionChange_qoSChange; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_sGSNChange
 * @constant
 */
export
const ServiceConditionChange_sGSNChange: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary sGSNChange
 * @constant
 */
export
const sGSNChange: number = ServiceConditionChange_sGSNChange; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_sGSNPLMNIDChange
 * @constant
 */
export
const ServiceConditionChange_sGSNPLMNIDChange: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary sGSNPLMNIDChange
 * @constant
 */
export
const sGSNPLMNIDChange: number = ServiceConditionChange_sGSNPLMNIDChange; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_tariffTimeSwitch
 * @constant
 */
export
const ServiceConditionChange_tariffTimeSwitch: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary tariffTimeSwitch
 * @constant
 */
export
const tariffTimeSwitch: number = ServiceConditionChange_tariffTimeSwitch; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_pDPContextRelease
 * @constant
 */
export
const ServiceConditionChange_pDPContextRelease: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary pDPContextRelease
 * @constant
 */
export
const pDPContextRelease: number = ServiceConditionChange_pDPContextRelease; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_rATChange
 * @constant
 */
export
const ServiceConditionChange_rATChange: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary rATChange
 * @constant
 */
export
const rATChange: number = ServiceConditionChange_rATChange; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_serviceIdledOut
 * @constant
 */
export
const ServiceConditionChange_serviceIdledOut: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary serviceIdledOut
 * @constant
 */
export
const serviceIdledOut: number = ServiceConditionChange_serviceIdledOut; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_reserved
 * @constant
 */
export
const ServiceConditionChange_reserved: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary reserved
 * @constant
 */
export
const reserved: number = ServiceConditionChange_reserved; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_configurationChange
 * @constant
 */
export
const ServiceConditionChange_configurationChange: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary configurationChange
 * @constant
 */
export
const configurationChange: number = ServiceConditionChange_configurationChange; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_serviceStop
 * @constant
 */
export
const ServiceConditionChange_serviceStop: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary serviceStop
 * @constant
 */
export
const serviceStop: number = ServiceConditionChange_serviceStop; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_dCCATimeThresholdReached
 * @constant
 */
export
const ServiceConditionChange_dCCATimeThresholdReached: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary dCCATimeThresholdReached
 * @constant
 */
export
const dCCATimeThresholdReached: number = ServiceConditionChange_dCCATimeThresholdReached; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_dCCAVolumeThresholdReached
 * @constant
 */
export
const ServiceConditionChange_dCCAVolumeThresholdReached: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary dCCAVolumeThresholdReached
 * @constant
 */
export
const dCCAVolumeThresholdReached: number = ServiceConditionChange_dCCAVolumeThresholdReached; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_dCCAServiceSpecificUnitThresholdReached
 * @constant
 */
export
const ServiceConditionChange_dCCAServiceSpecificUnitThresholdReached: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary dCCAServiceSpecificUnitThresholdReached
 * @constant
 */
export
const dCCAServiceSpecificUnitThresholdReached: number = ServiceConditionChange_dCCAServiceSpecificUnitThresholdReached; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_dCCATimeExhausted
 * @constant
 */
export
const ServiceConditionChange_dCCATimeExhausted: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary dCCATimeExhausted
 * @constant
 */
export
const dCCATimeExhausted: number = ServiceConditionChange_dCCATimeExhausted; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_dCCAVolumeExhausted
 * @constant
 */
export
const ServiceConditionChange_dCCAVolumeExhausted: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary dCCAVolumeExhausted
 * @constant
 */
export
const dCCAVolumeExhausted: number = ServiceConditionChange_dCCAVolumeExhausted; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_dCCAValidityTimeout
 * @constant
 */
export
const ServiceConditionChange_dCCAValidityTimeout: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary dCCAValidityTimeout
 * @constant
 */
export
const dCCAValidityTimeout: number = ServiceConditionChange_dCCAValidityTimeout; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_reserved1
 * @constant
 */
export
const ServiceConditionChange_reserved1: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary reserved1
 * @constant
 */
export
const reserved1: number = ServiceConditionChange_reserved1; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_dCCAReauthorisationRequest
 * @constant
 */
export
const ServiceConditionChange_dCCAReauthorisationRequest: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary dCCAReauthorisationRequest
 * @constant
 */
export
const dCCAReauthorisationRequest: number = ServiceConditionChange_dCCAReauthorisationRequest; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_dCCAContinueOngoingSession
 * @constant
 */
export
const ServiceConditionChange_dCCAContinueOngoingSession: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary dCCAContinueOngoingSession
 * @constant
 */
export
const dCCAContinueOngoingSession: number = ServiceConditionChange_dCCAContinueOngoingSession; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_dCCARetryAndTerminateOngoingSession
 * @constant
 */
export
const ServiceConditionChange_dCCARetryAndTerminateOngoingSession: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary dCCARetryAndTerminateOngoingSession
 * @constant
 */
export
const dCCARetryAndTerminateOngoingSession: number = ServiceConditionChange_dCCARetryAndTerminateOngoingSession; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_dCCATerminateOngoingSession
 * @constant
 */
export
const ServiceConditionChange_dCCATerminateOngoingSession: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary dCCATerminateOngoingSession
 * @constant
 */
export
const dCCATerminateOngoingSession: number = ServiceConditionChange_dCCATerminateOngoingSession; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_cGI_SAIChange
 * @constant
 */
export
const ServiceConditionChange_cGI_SAIChange: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary cGI_SAIChange
 * @constant
 */
export
const cGI_SAIChange: number = ServiceConditionChange_cGI_SAIChange; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_rAIChange
 * @constant
 */
export
const ServiceConditionChange_rAIChange: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary rAIChange
 * @constant
 */
export
const rAIChange: number = ServiceConditionChange_rAIChange; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_dCCAServiceSpecificUnitExhausted
 * @constant
 */
export
const ServiceConditionChange_dCCAServiceSpecificUnitExhausted: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary dCCAServiceSpecificUnitExhausted
 * @constant
 */
export
const dCCAServiceSpecificUnitExhausted: number = ServiceConditionChange_dCCAServiceSpecificUnitExhausted; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_recordClosure
 * @constant
 */
export
const ServiceConditionChange_recordClosure: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary recordClosure
 * @constant
 */
export
const recordClosure: number = ServiceConditionChange_recordClosure; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_timeLimit
 * @constant
 */
export
const ServiceConditionChange_timeLimit: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary timeLimit
 * @constant
 */
export
const timeLimit: number = ServiceConditionChange_timeLimit; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_volumeLimit
 * @constant
 */
export
const ServiceConditionChange_volumeLimit: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary volumeLimit
 * @constant
 */
export
const volumeLimit: number = ServiceConditionChange_volumeLimit; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_serviceSpecificUnitLimit
 * @constant
 */
export
const ServiceConditionChange_serviceSpecificUnitLimit: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary serviceSpecificUnitLimit
 * @constant
 */
export
const serviceSpecificUnitLimit: number = ServiceConditionChange_serviceSpecificUnitLimit; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_envelopeClosure
 * @constant
 */
export
const ServiceConditionChange_envelopeClosure: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary envelopeClosure
 * @constant
 */
export
const envelopeClosure: number = ServiceConditionChange_envelopeClosure; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_eCGIChange
 * @constant
 */
export
const ServiceConditionChange_eCGIChange: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary eCGIChange
 * @constant
 */
export
const eCGIChange: number = ServiceConditionChange_eCGIChange; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_tAIChange
 * @constant
 */
export
const ServiceConditionChange_tAIChange: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary tAIChange
 * @constant
 */
export
const tAIChange: number = ServiceConditionChange_tAIChange; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_userLocationChange
 * @constant
 */
export
const ServiceConditionChange_userLocationChange: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary userLocationChange
 * @constant
 */
export
const userLocationChange: number = ServiceConditionChange_userLocationChange; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_userCSGInformationChange
 * @constant
 */
export
const ServiceConditionChange_userCSGInformationChange: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary userCSGInformationChange
 * @constant
 */
export
const userCSGInformationChange: number = ServiceConditionChange_userCSGInformationChange; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_presenceInPRAChange
 * @constant
 */
export
const ServiceConditionChange_presenceInPRAChange: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary presenceInPRAChange
 * @constant
 */
export
const presenceInPRAChange: number = ServiceConditionChange_presenceInPRAChange; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_accessChangeOfSDF
 * @constant
 */
export
const ServiceConditionChange_accessChangeOfSDF: number = 34; /* LONG_NAMED_BIT */

/**
 * @summary accessChangeOfSDF
 * @constant
 */
export
const accessChangeOfSDF: number = ServiceConditionChange_accessChangeOfSDF; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_indirectServiceConditionChange
 * @constant
 */
export
const ServiceConditionChange_indirectServiceConditionChange: number = 35; /* LONG_NAMED_BIT */

/**
 * @summary indirectServiceConditionChange
 * @constant
 */
export
const indirectServiceConditionChange: number = ServiceConditionChange_indirectServiceConditionChange; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_servingPLMNRateControlChange
 * @constant
 */
export
const ServiceConditionChange_servingPLMNRateControlChange: number = 36; /* LONG_NAMED_BIT */

/**
 * @summary servingPLMNRateControlChange
 * @constant
 */
export
const servingPLMNRateControlChange: number = ServiceConditionChange_servingPLMNRateControlChange; /* SHORT_NAMED_BIT */

/**
 * @summary ServiceConditionChange_aPNRateControlChange
 * @constant
 */
export
const ServiceConditionChange_aPNRateControlChange: number = 37; /* LONG_NAMED_BIT */

/**
 * @summary aPNRateControlChange
 * @constant
 */
export
const aPNRateControlChange: number = ServiceConditionChange_aPNRateControlChange; /* SHORT_NAMED_BIT */

export
const _decode_ServiceConditionChange: $.ASN1Decoder<ServiceConditionChange> = $._decodeBitString;

export
const _encode_ServiceConditionChange: $.ASN1Encoder<ServiceConditionChange> = $._encodeBitString;

/* eslint-enable */
