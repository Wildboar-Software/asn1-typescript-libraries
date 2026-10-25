/* eslint-disable */
import {
    type INTEGER
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
const SMFTrigger_startOfPDUSession = 1 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_startOfPDUSession
 * @constant
 * @type {number}
 */
export
const startOfPDUSession = SMFTrigger_startOfPDUSession; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_startOfServiceDataFlowNoSession
 * @constant
 * @type {number}
 */
export
const SMFTrigger_startOfServiceDataFlowNoSession = 2 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_startOfServiceDataFlowNoSession
 * @constant
 * @type {number}
 */
export
const startOfServiceDataFlowNoSession = SMFTrigger_startOfServiceDataFlowNoSession; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_qoSChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_qoSChange = 100 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_qoSChange
 * @constant
 * @type {number}
 */
export
const qoSChange = SMFTrigger_qoSChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_userLocationChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_userLocationChange = 101 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_userLocationChange
 * @constant
 * @type {number}
 */
export
const userLocationChange = SMFTrigger_userLocationChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_servingNodeChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_servingNodeChange = 102 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_servingNodeChange
 * @constant
 * @type {number}
 */
export
const servingNodeChange = SMFTrigger_servingNodeChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_presenceReportingAreaChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_presenceReportingAreaChange = 103 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_presenceReportingAreaChange
 * @constant
 * @type {number}
 */
export
const presenceReportingAreaChange = SMFTrigger_presenceReportingAreaChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_threeGPPPSDataOffStatusChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_threeGPPPSDataOffStatusChange = 104 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_threeGPPPSDataOffStatusChange
 * @constant
 * @type {number}
 */
export
const threeGPPPSDataOffStatusChange = SMFTrigger_threeGPPPSDataOffStatusChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_tariffTimeChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_tariffTimeChange = 105 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_tariffTimeChange
 * @constant
 * @type {number}
 */
export
const tariffTimeChange = SMFTrigger_tariffTimeChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_uETimeZoneChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_uETimeZoneChange = 106 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_uETimeZoneChange
 * @constant
 * @type {number}
 */
export
const uETimeZoneChange = SMFTrigger_uETimeZoneChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pLMNChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_pLMNChange = 107 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pLMNChange
 * @constant
 * @type {number}
 */
export
const pLMNChange = SMFTrigger_pLMNChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_rATTypeChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_rATTypeChange = 108 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_rATTypeChange
 * @constant
 * @type {number}
 */
export
const rATTypeChange = SMFTrigger_rATTypeChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_sessionAMBRChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_sessionAMBRChange = 109 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_sessionAMBRChange
 * @constant
 * @type {number}
 */
export
const sessionAMBRChange = SMFTrigger_sessionAMBRChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_additionOfUPF
 * @constant
 * @type {number}
 */
export
const SMFTrigger_additionOfUPF = 110 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_additionOfUPF
 * @constant
 * @type {number}
 */
export
const additionOfUPF = SMFTrigger_additionOfUPF; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_removalOfUPF
 * @constant
 * @type {number}
 */
export
const SMFTrigger_removalOfUPF = 111 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_removalOfUPF
 * @constant
 * @type {number}
 */
export
const removalOfUPF = SMFTrigger_removalOfUPF; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_gFBRGuaranteedStatusChange
 * @constant
 * @type {number}
 */
export
const SMFTrigger_gFBRGuaranteedStatusChange = 115 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_gFBRGuaranteedStatusChange
 * @constant
 * @type {number}
 */
export
const gFBRGuaranteedStatusChange = SMFTrigger_gFBRGuaranteedStatusChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pDUSessionExpiryDataTimeLimit
 * @constant
 * @type {number}
 */
export
const SMFTrigger_pDUSessionExpiryDataTimeLimit = 200 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pDUSessionExpiryDataTimeLimit
 * @constant
 * @type {number}
 */
export
const pDUSessionExpiryDataTimeLimit = SMFTrigger_pDUSessionExpiryDataTimeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pDUSessionExpiryDataVolumeLimit
 * @constant
 * @type {number}
 */
export
const SMFTrigger_pDUSessionExpiryDataVolumeLimit = 201 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pDUSessionExpiryDataVolumeLimit
 * @constant
 * @type {number}
 */
export
const pDUSessionExpiryDataVolumeLimit = SMFTrigger_pDUSessionExpiryDataVolumeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pDUSessionExpiryDataEventLimit
 * @constant
 * @type {number}
 */
export
const SMFTrigger_pDUSessionExpiryDataEventLimit = 202 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pDUSessionExpiryDataEventLimit
 * @constant
 * @type {number}
 */
export
const pDUSessionExpiryDataEventLimit = SMFTrigger_pDUSessionExpiryDataEventLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pDUSessionExpiryChargingConditionChanges
 * @constant
 * @type {number}
 */
export
const SMFTrigger_pDUSessionExpiryChargingConditionChanges = 203 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_pDUSessionExpiryChargingConditionChanges
 * @constant
 * @type {number}
 */
export
const pDUSessionExpiryChargingConditionChanges = SMFTrigger_pDUSessionExpiryChargingConditionChanges; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_ratingGroupDataTimeLimit
 * @constant
 * @type {number}
 */
export
const SMFTrigger_ratingGroupDataTimeLimit = 300 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_ratingGroupDataTimeLimit
 * @constant
 * @type {number}
 */
export
const ratingGroupDataTimeLimit = SMFTrigger_ratingGroupDataTimeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_ratingGroupDataVolumeLimit
 * @constant
 * @type {number}
 */
export
const SMFTrigger_ratingGroupDataVolumeLimit = 301 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_ratingGroupDataVolumeLimit
 * @constant
 * @type {number}
 */
export
const ratingGroupDataVolumeLimit = SMFTrigger_ratingGroupDataVolumeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_ratingGroupDataEventLimit
 * @constant
 * @type {number}
 */
export
const SMFTrigger_ratingGroupDataEventLimit = 302 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_ratingGroupDataEventLimit
 * @constant
 * @type {number}
 */
export
const ratingGroupDataEventLimit = SMFTrigger_ratingGroupDataEventLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_timeThresholdReached
 * @constant
 * @type {number}
 */
export
const SMFTrigger_timeThresholdReached = 400 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_timeThresholdReached
 * @constant
 * @type {number}
 */
export
const timeThresholdReached = SMFTrigger_timeThresholdReached; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_volumeThresholdReached
 * @constant
 * @type {number}
 */
export
const SMFTrigger_volumeThresholdReached = 401 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_volumeThresholdReached
 * @constant
 * @type {number}
 */
export
const volumeThresholdReached = SMFTrigger_volumeThresholdReached; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_unitThresholdReached
 * @constant
 * @type {number}
 */
export
const SMFTrigger_unitThresholdReached = 402 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_unitThresholdReached
 * @constant
 * @type {number}
 */
export
const unitThresholdReached = SMFTrigger_unitThresholdReached; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_timeQuotaExhausted
 * @constant
 * @type {number}
 */
export
const SMFTrigger_timeQuotaExhausted = 403 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_timeQuotaExhausted
 * @constant
 * @type {number}
 */
export
const timeQuotaExhausted = SMFTrigger_timeQuotaExhausted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_volumeQuotaExhausted
 * @constant
 * @type {number}
 */
export
const SMFTrigger_volumeQuotaExhausted = 404 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_volumeQuotaExhausted
 * @constant
 * @type {number}
 */
export
const volumeQuotaExhausted = SMFTrigger_volumeQuotaExhausted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_unitQuotaExhausted
 * @constant
 * @type {number}
 */
export
const SMFTrigger_unitQuotaExhausted = 405 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_unitQuotaExhausted
 * @constant
 * @type {number}
 */
export
const unitQuotaExhausted = SMFTrigger_unitQuotaExhausted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_expiryOfQuotaValidityTime
 * @constant
 * @type {number}
 */
export
const SMFTrigger_expiryOfQuotaValidityTime = 406 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_expiryOfQuotaValidityTime
 * @constant
 * @type {number}
 */
export
const expiryOfQuotaValidityTime = SMFTrigger_expiryOfQuotaValidityTime; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_reAuthorizationRequest
 * @constant
 * @type {number}
 */
export
const SMFTrigger_reAuthorizationRequest = 407 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_reAuthorizationRequest
 * @constant
 * @type {number}
 */
export
const reAuthorizationRequest = SMFTrigger_reAuthorizationRequest; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_startOfServiceDataFlowNoValidQuota
 * @constant
 * @type {number}
 */
export
const SMFTrigger_startOfServiceDataFlowNoValidQuota = 408 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_startOfServiceDataFlowNoValidQuota
 * @constant
 * @type {number}
 */
export
const startOfServiceDataFlowNoValidQuota = SMFTrigger_startOfServiceDataFlowNoValidQuota; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_otherQuotaType
 * @constant
 * @type {number}
 */
export
const SMFTrigger_otherQuotaType = 409 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_otherQuotaType
 * @constant
 * @type {number}
 */
export
const otherQuotaType = SMFTrigger_otherQuotaType; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_terminationOfServiceDataFlow
 * @constant
 * @type {number}
 */
export
const SMFTrigger_terminationOfServiceDataFlow = 500 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_terminationOfServiceDataFlow
 * @constant
 * @type {number}
 */
export
const terminationOfServiceDataFlow = SMFTrigger_terminationOfServiceDataFlow; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_managementIntervention
 * @constant
 * @type {number}
 */
export
const SMFTrigger_managementIntervention = 501 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_managementIntervention
 * @constant
 * @type {number}
 */
export
const managementIntervention = SMFTrigger_managementIntervention; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_unitCountInactivityTimer
 * @constant
 * @type {number}
 */
export
const SMFTrigger_unitCountInactivityTimer = 502 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_unitCountInactivityTimer
 * @constant
 * @type {number}
 */
export
const unitCountInactivityTimer = SMFTrigger_unitCountInactivityTimer; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_endOfPDUSession
 * @constant
 * @type {number}
 */
export
const SMFTrigger_endOfPDUSession = 503 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_endOfPDUSession
 * @constant
 * @type {number}
 */
export
const endOfPDUSession = SMFTrigger_endOfPDUSession; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_cHFResponseWithSessionTermination
 * @constant
 * @type {number}
 */
export
const SMFTrigger_cHFResponseWithSessionTermination = 504 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_cHFResponseWithSessionTermination
 * @constant
 * @type {number}
 */
export
const cHFResponseWithSessionTermination = SMFTrigger_cHFResponseWithSessionTermination; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_cHFAbortRequest
 * @constant
 * @type {number}
 */
export
const SMFTrigger_cHFAbortRequest = 505 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_cHFAbortRequest
 * @constant
 * @type {number}
 */
export
const cHFAbortRequest = SMFTrigger_cHFAbortRequest; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_abnormalRelease
 * @constant
 * @type {number}
 */
export
const SMFTrigger_abnormalRelease = 506 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_abnormalRelease
 * @constant
 * @type {number}
 */
export
const abnormalRelease = SMFTrigger_abnormalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_qoSFlowExpiryDataTimeLimit
 * @constant
 * @type {number}
 */
export
const SMFTrigger_qoSFlowExpiryDataTimeLimit = 600 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_qoSFlowExpiryDataTimeLimit
 * @constant
 * @type {number}
 */
export
const qoSFlowExpiryDataTimeLimit = SMFTrigger_qoSFlowExpiryDataTimeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_qoSFlowExpiryDataVolumeLimit
 * @constant
 * @type {number}
 */
export
const SMFTrigger_qoSFlowExpiryDataVolumeLimit = 601 satisfies SMFTrigger; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SMFTrigger_qoSFlowExpiryDataVolumeLimit
 * @constant
 * @type {number}
 */
export
const qoSFlowExpiryDataVolumeLimit = SMFTrigger_qoSFlowExpiryDataVolumeLimit; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_SMFTrigger: $.ASN1Decoder<SMFTrigger> = $._decodeInteger;

export
const _encode_SMFTrigger: $.ASN1Encoder<SMFTrigger> = $._encodeInteger;

/* eslint-enable */
