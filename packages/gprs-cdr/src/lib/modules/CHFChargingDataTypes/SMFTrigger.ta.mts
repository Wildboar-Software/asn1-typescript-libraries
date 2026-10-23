/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFTrigger
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFTrigger  ::=  INTEGER {
 *    startOfPDUSession                           ( 1 ),
 *    startOfServiceDataFlowNoSession             ( 2 ),
 *    qoSChange                                   ( 100 ),
 *    userLocationChange                          ( 101 ),
 *    servingNodeChange                           ( 102 ),
 *    presenceReportingAreaChange                 ( 103 ),
 *    threeGPPPSDataOffStatusChange               ( 104 ),
 *    tariffTimeChange                            ( 105 ),
 *    uETimeZoneChange                            ( 106 ),
 *    pLMNChange                                  ( 107 ),
 *    rATTypeChange                               ( 108 ),
 *    sessionAMBRChange                           ( 109 ),
 *    additionOfUPF                               ( 110 ),
 *    removalOfUPF                                ( 111 ),
 *    gFBRGuaranteedStatusChange                  ( 115 ),
 *    pDUSessionExpiryDataTimeLimit               ( 200 ),
 *    pDUSessionExpiryDataVolumeLimit             ( 201 ),
 *    pDUSessionExpiryDataEventLimit              ( 202 ),
 *    pDUSessionExpiryChargingConditionChanges    ( 203 ),
 *    ratingGroupDataTimeLimit                    ( 300 ),
 *    ratingGroupDataVolumeLimit                  ( 301 ),
 *    ratingGroupDataEventLimit                   ( 302 ),
 *    timeThresholdReached                        ( 400 ),
 *    volumeThresholdReached                      ( 401 ),
 *    unitThresholdReached                        ( 402 ),
 *    timeQuotaExhausted                          ( 403 ),
 *    volumeQuotaExhausted                        ( 404 ),
 *    unitQuotaExhausted                          ( 405 ),
 *    expiryOfQuotaValidityTime                   ( 406 ),
 *    reAuthorizationRequest                      ( 407 ),
 *    startOfServiceDataFlowNoValidQuota          ( 408 ),
 *    otherQuotaType                              ( 409 ),
 *    terminationOfServiceDataFlow                ( 500 ),
 *    managementIntervention                      ( 501 ),
 *    unitCountInactivityTimer                    ( 502 ),
 *    endOfPDUSession                             ( 503 ),
 *    cHFResponseWithSessionTermination           ( 504 ),
 *    cHFAbortRequest                             ( 505 ),
 *    abnormalRelease                             ( 506 ),
 *    qoSFlowExpiryDataTimeLimit                  ( 600 ),
 *    qoSFlowExpiryDataVolumeLimit                ( 601 )}
 * ```
 */
export
type SMFTrigger = INTEGER;

/**
 * @summary SMFTrigger_startOfPDUSession
 * @constant
 * @type {number}
 */
export
const SMFTrigger_startOfPDUSession: SMFTrigger = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_startOfPDUSession
 * @constant
 * @type {number}
 */
export
const startOfPDUSession: SMFTrigger = SMFTrigger_startOfPDUSession; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_startOfServiceDataFlowNoSession
 * @constant
 * @type {number}
 */
export
const SMFTrigger_startOfServiceDataFlowNoSession: SMFTrigger = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_startOfServiceDataFlowNoSession
 * @constant
 * @type {number}
 */
export
const startOfServiceDataFlowNoSession: SMFTrigger = SMFTrigger_startOfServiceDataFlowNoSession; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_qoSChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_qoSChange: SMFTrigger = 100; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_qoSChange
 * @constant
 * @type {number}
 */
export
const qoSChange: SMFTrigger = SMFTrigger_qoSChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_userLocationChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_userLocationChange: SMFTrigger = 101; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_userLocationChange
 * @constant
 * @type {number}
 */
export
const userLocationChange: SMFTrigger = SMFTrigger_userLocationChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_servingNodeChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_servingNodeChange: SMFTrigger = 102; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_servingNodeChange
 * @constant
 * @type {number}
 */
export
const servingNodeChange: SMFTrigger = SMFTrigger_servingNodeChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_presenceReportingAreaChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_presenceReportingAreaChange: SMFTrigger = 103; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_presenceReportingAreaChange
 * @constant
 * @type {number}
 */
export
const presenceReportingAreaChange: SMFTrigger = SMFTrigger_presenceReportingAreaChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_threeGPPPSDataOffStatusChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_threeGPPPSDataOffStatusChange: SMFTrigger = 104; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_threeGPPPSDataOffStatusChange
 * @constant
 * @type {number}
 */
export
const threeGPPPSDataOffStatusChange: SMFTrigger = SMFTrigger_threeGPPPSDataOffStatusChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_tariffTimeChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_tariffTimeChange: SMFTrigger = 105; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_tariffTimeChange
 * @constant
 * @type {number}
 */
export
const tariffTimeChange: SMFTrigger = SMFTrigger_tariffTimeChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_uETimeZoneChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_uETimeZoneChange: SMFTrigger = 106; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_uETimeZoneChange
 * @constant
 * @type {number}
 */
export
const uETimeZoneChange: SMFTrigger = SMFTrigger_uETimeZoneChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pLMNChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_pLMNChange: SMFTrigger = 107; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pLMNChange
 * @constant
 * @type {number}
 */
export
const pLMNChange: SMFTrigger = SMFTrigger_pLMNChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_rATTypeChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_rATTypeChange: SMFTrigger = 108; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_rATTypeChange
 * @constant
 * @type {number}
 */
export
const rATTypeChange: SMFTrigger = SMFTrigger_rATTypeChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_sessionAMBRChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_sessionAMBRChange: SMFTrigger = 109; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_sessionAMBRChange
 * @constant
 * @type {number}
 */
export
const sessionAMBRChange: SMFTrigger = SMFTrigger_sessionAMBRChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_additionOfUPF
 * @constant
 * @type {number}
 */
export
const SMFTrigger_additionOfUPF: SMFTrigger = 110; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_additionOfUPF
 * @constant
 * @type {number}
 */
export
const additionOfUPF: SMFTrigger = SMFTrigger_additionOfUPF; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_removalOfUPF
 * @constant
 * @type {number}
 */
export
const SMFTrigger_removalOfUPF: SMFTrigger = 111; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_removalOfUPF
 * @constant
 * @type {number}
 */
export
const removalOfUPF: SMFTrigger = SMFTrigger_removalOfUPF; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_gFBRGuaranteedStatusChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_gFBRGuaranteedStatusChange: SMFTrigger = 115; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_gFBRGuaranteedStatusChange
 * @constant
 * @type {number}
 */
export
const gFBRGuaranteedStatusChange: SMFTrigger = SMFTrigger_gFBRGuaranteedStatusChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pDUSessionExpiryDataTimeLimit
 * @constant
 * @type {number}
 */
export
const SMFTrigger_pDUSessionExpiryDataTimeLimit: SMFTrigger = 200; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pDUSessionExpiryDataTimeLimit
 * @constant
 * @type {number}
 */
export
const pDUSessionExpiryDataTimeLimit: SMFTrigger = SMFTrigger_pDUSessionExpiryDataTimeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pDUSessionExpiryDataVolumeLimit
 * @constant
 * @type {number}
 */
export
const SMFTrigger_pDUSessionExpiryDataVolumeLimit: SMFTrigger = 201; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pDUSessionExpiryDataVolumeLimit
 * @constant
 * @type {number}
 */
export
const pDUSessionExpiryDataVolumeLimit: SMFTrigger = SMFTrigger_pDUSessionExpiryDataVolumeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pDUSessionExpiryDataEventLimit
 * @constant
 * @type {number}
 */
export
const SMFTrigger_pDUSessionExpiryDataEventLimit: SMFTrigger = 202; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pDUSessionExpiryDataEventLimit
 * @constant
 * @type {number}
 */
export
const pDUSessionExpiryDataEventLimit: SMFTrigger = SMFTrigger_pDUSessionExpiryDataEventLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pDUSessionExpiryChargingConditionChanges
 * @constant
 * @type {number}
 */
export
const SMFTrigger_pDUSessionExpiryChargingConditionChanges: SMFTrigger = 203; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pDUSessionExpiryChargingConditionChanges
 * @constant
 * @type {number}
 */
export
const pDUSessionExpiryChargingConditionChanges: SMFTrigger = SMFTrigger_pDUSessionExpiryChargingConditionChanges; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_ratingGroupDataTimeLimit
 * @constant
 * @type {number}
 */
export
const SMFTrigger_ratingGroupDataTimeLimit: SMFTrigger = 300; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_ratingGroupDataTimeLimit
 * @constant
 * @type {number}
 */
export
const ratingGroupDataTimeLimit: SMFTrigger = SMFTrigger_ratingGroupDataTimeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_ratingGroupDataVolumeLimit
 * @constant
 * @type {number}
 */
export
const SMFTrigger_ratingGroupDataVolumeLimit: SMFTrigger = 301; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_ratingGroupDataVolumeLimit
 * @constant
 * @type {number}
 */
export
const ratingGroupDataVolumeLimit: SMFTrigger = SMFTrigger_ratingGroupDataVolumeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_ratingGroupDataEventLimit
 * @constant
 * @type {number}
 */
export
const SMFTrigger_ratingGroupDataEventLimit: SMFTrigger = 302; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_ratingGroupDataEventLimit
 * @constant
 * @type {number}
 */
export
const ratingGroupDataEventLimit: SMFTrigger = SMFTrigger_ratingGroupDataEventLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_timeThresholdReached
 * @constant
 * @type {number}
 */
export
const SMFTrigger_timeThresholdReached: SMFTrigger = 400; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_timeThresholdReached
 * @constant
 * @type {number}
 */
export
const timeThresholdReached: SMFTrigger = SMFTrigger_timeThresholdReached; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_volumeThresholdReached
 * @constant
 * @type {number}
 */
export
const SMFTrigger_volumeThresholdReached: SMFTrigger = 401; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_volumeThresholdReached
 * @constant
 * @type {number}
 */
export
const volumeThresholdReached: SMFTrigger = SMFTrigger_volumeThresholdReached; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_unitThresholdReached
 * @constant
 * @type {number}
 */
export
const SMFTrigger_unitThresholdReached: SMFTrigger = 402; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_unitThresholdReached
 * @constant
 * @type {number}
 */
export
const unitThresholdReached: SMFTrigger = SMFTrigger_unitThresholdReached; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_timeQuotaExhausted
 * @constant
 * @type {number}
 */
export
const SMFTrigger_timeQuotaExhausted: SMFTrigger = 403; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_timeQuotaExhausted
 * @constant
 * @type {number}
 */
export
const timeQuotaExhausted: SMFTrigger = SMFTrigger_timeQuotaExhausted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_volumeQuotaExhausted
 * @constant
 * @type {number}
 */
export
const SMFTrigger_volumeQuotaExhausted: SMFTrigger = 404; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_volumeQuotaExhausted
 * @constant
 * @type {number}
 */
export
const volumeQuotaExhausted: SMFTrigger = SMFTrigger_volumeQuotaExhausted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_unitQuotaExhausted
 * @constant
 * @type {number}
 */
export
const SMFTrigger_unitQuotaExhausted: SMFTrigger = 405; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_unitQuotaExhausted
 * @constant
 * @type {number}
 */
export
const unitQuotaExhausted: SMFTrigger = SMFTrigger_unitQuotaExhausted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_expiryOfQuotaValidityTime
 * @constant
 * @type {number}
 */
export
const SMFTrigger_expiryOfQuotaValidityTime: SMFTrigger = 406; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_expiryOfQuotaValidityTime
 * @constant
 * @type {number}
 */
export
const expiryOfQuotaValidityTime: SMFTrigger = SMFTrigger_expiryOfQuotaValidityTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_reAuthorizationRequest
 * @constant
 * @type {number}
 */
export
const SMFTrigger_reAuthorizationRequest: SMFTrigger = 407; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_reAuthorizationRequest
 * @constant
 * @type {number}
 */
export
const reAuthorizationRequest: SMFTrigger = SMFTrigger_reAuthorizationRequest; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_startOfServiceDataFlowNoValidQuota
 * @constant
 * @type {number}
 */
export
const SMFTrigger_startOfServiceDataFlowNoValidQuota: SMFTrigger = 408; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_startOfServiceDataFlowNoValidQuota
 * @constant
 * @type {number}
 */
export
const startOfServiceDataFlowNoValidQuota: SMFTrigger = SMFTrigger_startOfServiceDataFlowNoValidQuota; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_otherQuotaType
 * @constant
 * @type {number}
 */
export
const SMFTrigger_otherQuotaType: SMFTrigger = 409; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_otherQuotaType
 * @constant
 * @type {number}
 */
export
const otherQuotaType: SMFTrigger = SMFTrigger_otherQuotaType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_terminationOfServiceDataFlow
 * @constant
 * @type {number}
 */
export
const SMFTrigger_terminationOfServiceDataFlow: SMFTrigger = 500; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_terminationOfServiceDataFlow
 * @constant
 * @type {number}
 */
export
const terminationOfServiceDataFlow: SMFTrigger = SMFTrigger_terminationOfServiceDataFlow; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_managementIntervention
 * @constant
 * @type {number}
 */
export
const SMFTrigger_managementIntervention: SMFTrigger = 501; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_managementIntervention
 * @constant
 * @type {number}
 */
export
const managementIntervention: SMFTrigger = SMFTrigger_managementIntervention; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_unitCountInactivityTimer
 * @constant
 * @type {number}
 */
export
const SMFTrigger_unitCountInactivityTimer: SMFTrigger = 502; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_unitCountInactivityTimer
 * @constant
 * @type {number}
 */
export
const unitCountInactivityTimer: SMFTrigger = SMFTrigger_unitCountInactivityTimer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_endOfPDUSession
 * @constant
 * @type {number}
 */
export
const SMFTrigger_endOfPDUSession: SMFTrigger = 503; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_endOfPDUSession
 * @constant
 * @type {number}
 */
export
const endOfPDUSession: SMFTrigger = SMFTrigger_endOfPDUSession; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_cHFResponseWithSessionTermination
 * @constant
 * @type {number}
 */
export
const SMFTrigger_cHFResponseWithSessionTermination: SMFTrigger = 504; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_cHFResponseWithSessionTermination
 * @constant
 * @type {number}
 */
export
const cHFResponseWithSessionTermination: SMFTrigger = SMFTrigger_cHFResponseWithSessionTermination; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_cHFAbortRequest
 * @constant
 * @type {number}
 */
export
const SMFTrigger_cHFAbortRequest: SMFTrigger = 505; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_cHFAbortRequest
 * @constant
 * @type {number}
 */
export
const cHFAbortRequest: SMFTrigger = SMFTrigger_cHFAbortRequest; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_abnormalRelease
 * @constant
 * @type {number}
 */
export
const SMFTrigger_abnormalRelease: SMFTrigger = 506; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_abnormalRelease
 * @constant
 * @type {number}
 */
export
const abnormalRelease: SMFTrigger = SMFTrigger_abnormalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_qoSFlowExpiryDataTimeLimit
 * @constant
 * @type {number}
 */
export
const SMFTrigger_qoSFlowExpiryDataTimeLimit: SMFTrigger = 600; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_qoSFlowExpiryDataTimeLimit
 * @constant
 * @type {number}
 */
export
const qoSFlowExpiryDataTimeLimit: SMFTrigger = SMFTrigger_qoSFlowExpiryDataTimeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_qoSFlowExpiryDataVolumeLimit
 * @constant
 * @type {number}
 */
export
const SMFTrigger_qoSFlowExpiryDataVolumeLimit: SMFTrigger = 601; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_qoSFlowExpiryDataVolumeLimit
 * @constant
 * @type {number}
 */
export
const qoSFlowExpiryDataVolumeLimit: SMFTrigger = SMFTrigger_qoSFlowExpiryDataVolumeLimit; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_SMFTrigger: $.ASN1Decoder<SMFTrigger> = $._decodeInteger;

export
const _encode_SMFTrigger: $.ASN1Encoder<SMFTrigger> = $._encodeInteger;

/* eslint-enable */
