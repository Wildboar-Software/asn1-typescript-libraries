/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGMSAFUnsuccessfulOperation
 * @description
 * 
 * Type of unsuccessful operation.
 *
 * 3GPP TS 33.128, clause 7.15.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFUnsuccessfulOperation ::=  ENUMERATED
 * {
 *     retrieveServiceAccessInformation(1),
 *     submitConsumptionReport(2),
 *     submitMetricsReport(3),
 *     createDynamicPolicy(4),
 *     retrieveDynamicPolicy(5),
 *     updateDynamicPolicy(6),
 *     patchDynamicPolicy(7),
 *     destroyDynamicPolicy(8),
 *     createNetworkAssistanceSession(9),
 *     retrieveNetworkAssistanceSession(10),
 *     updateNetworkAssistanceSession(11),
 *     patchNetworkAssistanceSession(12),
 *     destroyNetworkAssistanceSession(13),
 *     requestBitRateRecommendation(14),
 *     requestDeliveryBoost(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FiveGMSAFUnsuccessfulOperation {
    retrieveServiceAccessInformation = 1,
    submitConsumptionReport = 2,
    submitMetricsReport = 3,
    createDynamicPolicy = 4,
    retrieveDynamicPolicy = 5,
    updateDynamicPolicy = 6,
    patchDynamicPolicy = 7,
    destroyDynamicPolicy = 8,
    createNetworkAssistanceSession = 9,
    retrieveNetworkAssistanceSession = 10,
    updateNetworkAssistanceSession = 11,
    patchNetworkAssistanceSession = 12,
    destroyNetworkAssistanceSession = 13,
    requestBitRateRecommendation = 14,
    requestDeliveryBoost = 15,
}

/**
 * @summary FiveGMSAFUnsuccessfulOperation
 * @description
 * 
 * Type of unsuccessful operation.
 *
 * 3GPP TS 33.128, clause 7.15.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFUnsuccessfulOperation ::=  ENUMERATED
 * {
 *     retrieveServiceAccessInformation(1),
 *     submitConsumptionReport(2),
 *     submitMetricsReport(3),
 *     createDynamicPolicy(4),
 *     retrieveDynamicPolicy(5),
 *     updateDynamicPolicy(6),
 *     patchDynamicPolicy(7),
 *     destroyDynamicPolicy(8),
 *     createNetworkAssistanceSession(9),
 *     retrieveNetworkAssistanceSession(10),
 *     updateNetworkAssistanceSession(11),
 *     patchNetworkAssistanceSession(12),
 *     destroyNetworkAssistanceSession(13),
 *     requestBitRateRecommendation(14),
 *     requestDeliveryBoost(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FiveGMSAFUnsuccessfulOperation = _enum_for_FiveGMSAFUnsuccessfulOperation;

/**
 * @summary FiveGMSAFUnsuccessfulOperation
 * @description
 * 
 * Type of unsuccessful operation.
 *
 * 3GPP TS 33.128, clause 7.15.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMSAFUnsuccessfulOperation ::=  ENUMERATED
 * {
 *     retrieveServiceAccessInformation(1),
 *     submitConsumptionReport(2),
 *     submitMetricsReport(3),
 *     createDynamicPolicy(4),
 *     retrieveDynamicPolicy(5),
 *     updateDynamicPolicy(6),
 *     patchDynamicPolicy(7),
 *     destroyDynamicPolicy(8),
 *     createNetworkAssistanceSession(9),
 *     retrieveNetworkAssistanceSession(10),
 *     updateNetworkAssistanceSession(11),
 *     patchNetworkAssistanceSession(12),
 *     destroyNetworkAssistanceSession(13),
 *     requestBitRateRecommendation(14),
 *     requestDeliveryBoost(15)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FiveGMSAFUnsuccessfulOperation: typeof _enum_for_FiveGMSAFUnsuccessfulOperation = _enum_for_FiveGMSAFUnsuccessfulOperation;

/**
 * @summary FiveGMSAFUnsuccessfulOperation_retrieveServiceAccessInformation
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_retrieveServiceAccessInformation: _enum_for_FiveGMSAFUnsuccessfulOperation.retrieveServiceAccessInformation = FiveGMSAFUnsuccessfulOperation.retrieveServiceAccessInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieveServiceAccessInformation
 * @constant
 * @type {number}
 */
export
const retrieveServiceAccessInformation: _enum_for_FiveGMSAFUnsuccessfulOperation.retrieveServiceAccessInformation = FiveGMSAFUnsuccessfulOperation.retrieveServiceAccessInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_submitConsumptionReport
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_submitConsumptionReport: _enum_for_FiveGMSAFUnsuccessfulOperation.submitConsumptionReport = FiveGMSAFUnsuccessfulOperation.submitConsumptionReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submitConsumptionReport
 * @constant
 * @type {number}
 */
export
const submitConsumptionReport: _enum_for_FiveGMSAFUnsuccessfulOperation.submitConsumptionReport = FiveGMSAFUnsuccessfulOperation.submitConsumptionReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_submitMetricsReport
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_submitMetricsReport: _enum_for_FiveGMSAFUnsuccessfulOperation.submitMetricsReport = FiveGMSAFUnsuccessfulOperation.submitMetricsReport; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submitMetricsReport
 * @constant
 * @type {number}
 */
export
const submitMetricsReport: _enum_for_FiveGMSAFUnsuccessfulOperation.submitMetricsReport = FiveGMSAFUnsuccessfulOperation.submitMetricsReport; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_createDynamicPolicy
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_createDynamicPolicy: _enum_for_FiveGMSAFUnsuccessfulOperation.createDynamicPolicy = FiveGMSAFUnsuccessfulOperation.createDynamicPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary createDynamicPolicy
 * @constant
 * @type {number}
 */
export
const createDynamicPolicy: _enum_for_FiveGMSAFUnsuccessfulOperation.createDynamicPolicy = FiveGMSAFUnsuccessfulOperation.createDynamicPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_retrieveDynamicPolicy
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_retrieveDynamicPolicy: _enum_for_FiveGMSAFUnsuccessfulOperation.retrieveDynamicPolicy = FiveGMSAFUnsuccessfulOperation.retrieveDynamicPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieveDynamicPolicy
 * @constant
 * @type {number}
 */
export
const retrieveDynamicPolicy: _enum_for_FiveGMSAFUnsuccessfulOperation.retrieveDynamicPolicy = FiveGMSAFUnsuccessfulOperation.retrieveDynamicPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_updateDynamicPolicy
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_updateDynamicPolicy: _enum_for_FiveGMSAFUnsuccessfulOperation.updateDynamicPolicy = FiveGMSAFUnsuccessfulOperation.updateDynamicPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updateDynamicPolicy
 * @constant
 * @type {number}
 */
export
const updateDynamicPolicy: _enum_for_FiveGMSAFUnsuccessfulOperation.updateDynamicPolicy = FiveGMSAFUnsuccessfulOperation.updateDynamicPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_patchDynamicPolicy
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_patchDynamicPolicy: _enum_for_FiveGMSAFUnsuccessfulOperation.patchDynamicPolicy = FiveGMSAFUnsuccessfulOperation.patchDynamicPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary patchDynamicPolicy
 * @constant
 * @type {number}
 */
export
const patchDynamicPolicy: _enum_for_FiveGMSAFUnsuccessfulOperation.patchDynamicPolicy = FiveGMSAFUnsuccessfulOperation.patchDynamicPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_destroyDynamicPolicy
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_destroyDynamicPolicy: _enum_for_FiveGMSAFUnsuccessfulOperation.destroyDynamicPolicy = FiveGMSAFUnsuccessfulOperation.destroyDynamicPolicy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destroyDynamicPolicy
 * @constant
 * @type {number}
 */
export
const destroyDynamicPolicy: _enum_for_FiveGMSAFUnsuccessfulOperation.destroyDynamicPolicy = FiveGMSAFUnsuccessfulOperation.destroyDynamicPolicy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_createNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_createNetworkAssistanceSession: _enum_for_FiveGMSAFUnsuccessfulOperation.createNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.createNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary createNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const createNetworkAssistanceSession: _enum_for_FiveGMSAFUnsuccessfulOperation.createNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.createNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_retrieveNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_retrieveNetworkAssistanceSession: _enum_for_FiveGMSAFUnsuccessfulOperation.retrieveNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.retrieveNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieveNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const retrieveNetworkAssistanceSession: _enum_for_FiveGMSAFUnsuccessfulOperation.retrieveNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.retrieveNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_updateNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_updateNetworkAssistanceSession: _enum_for_FiveGMSAFUnsuccessfulOperation.updateNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.updateNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updateNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const updateNetworkAssistanceSession: _enum_for_FiveGMSAFUnsuccessfulOperation.updateNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.updateNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_patchNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_patchNetworkAssistanceSession: _enum_for_FiveGMSAFUnsuccessfulOperation.patchNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.patchNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary patchNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const patchNetworkAssistanceSession: _enum_for_FiveGMSAFUnsuccessfulOperation.patchNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.patchNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_destroyNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_destroyNetworkAssistanceSession: _enum_for_FiveGMSAFUnsuccessfulOperation.destroyNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.destroyNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destroyNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const destroyNetworkAssistanceSession: _enum_for_FiveGMSAFUnsuccessfulOperation.destroyNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.destroyNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_requestBitRateRecommendation
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_requestBitRateRecommendation: _enum_for_FiveGMSAFUnsuccessfulOperation.requestBitRateRecommendation = FiveGMSAFUnsuccessfulOperation.requestBitRateRecommendation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestBitRateRecommendation
 * @constant
 * @type {number}
 */
export
const requestBitRateRecommendation: _enum_for_FiveGMSAFUnsuccessfulOperation.requestBitRateRecommendation = FiveGMSAFUnsuccessfulOperation.requestBitRateRecommendation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_requestDeliveryBoost
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_requestDeliveryBoost: _enum_for_FiveGMSAFUnsuccessfulOperation.requestDeliveryBoost = FiveGMSAFUnsuccessfulOperation.requestDeliveryBoost; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestDeliveryBoost
 * @constant
 * @type {number}
 */
export
const requestDeliveryBoost: _enum_for_FiveGMSAFUnsuccessfulOperation.requestDeliveryBoost = FiveGMSAFUnsuccessfulOperation.requestDeliveryBoost; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FiveGMSAFUnsuccessfulOperation: $.ASN1Decoder<FiveGMSAFUnsuccessfulOperation> = $._decodeEnumerated;
export const _encode_FiveGMSAFUnsuccessfulOperation: $.ASN1Encoder<FiveGMSAFUnsuccessfulOperation> = $._encodeEnumerated;


/* eslint-enable */
