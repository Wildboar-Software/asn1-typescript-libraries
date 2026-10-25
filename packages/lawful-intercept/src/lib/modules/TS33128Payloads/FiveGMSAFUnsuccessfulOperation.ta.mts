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
const FiveGMSAFUnsuccessfulOperation = _enum_for_FiveGMSAFUnsuccessfulOperation;

/**
 * @summary FiveGMSAFUnsuccessfulOperation_retrieveServiceAccessInformation
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_retrieveServiceAccessInformation = FiveGMSAFUnsuccessfulOperation.retrieveServiceAccessInformation satisfies FiveGMSAFUnsuccessfulOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieveServiceAccessInformation
 * @constant
 * @type {number}
 */
export
const retrieveServiceAccessInformation = FiveGMSAFUnsuccessfulOperation.retrieveServiceAccessInformation satisfies FiveGMSAFUnsuccessfulOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_submitConsumptionReport
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_submitConsumptionReport = FiveGMSAFUnsuccessfulOperation.submitConsumptionReport satisfies FiveGMSAFUnsuccessfulOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submitConsumptionReport
 * @constant
 * @type {number}
 */
export
const submitConsumptionReport = FiveGMSAFUnsuccessfulOperation.submitConsumptionReport satisfies FiveGMSAFUnsuccessfulOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_submitMetricsReport
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_submitMetricsReport = FiveGMSAFUnsuccessfulOperation.submitMetricsReport satisfies FiveGMSAFUnsuccessfulOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary submitMetricsReport
 * @constant
 * @type {number}
 */
export
const submitMetricsReport = FiveGMSAFUnsuccessfulOperation.submitMetricsReport satisfies FiveGMSAFUnsuccessfulOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_createDynamicPolicy
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_createDynamicPolicy = FiveGMSAFUnsuccessfulOperation.createDynamicPolicy satisfies FiveGMSAFUnsuccessfulOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary createDynamicPolicy
 * @constant
 * @type {number}
 */
export
const createDynamicPolicy = FiveGMSAFUnsuccessfulOperation.createDynamicPolicy satisfies FiveGMSAFUnsuccessfulOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_retrieveDynamicPolicy
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_retrieveDynamicPolicy = FiveGMSAFUnsuccessfulOperation.retrieveDynamicPolicy satisfies FiveGMSAFUnsuccessfulOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieveDynamicPolicy
 * @constant
 * @type {number}
 */
export
const retrieveDynamicPolicy = FiveGMSAFUnsuccessfulOperation.retrieveDynamicPolicy satisfies FiveGMSAFUnsuccessfulOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_updateDynamicPolicy
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_updateDynamicPolicy = FiveGMSAFUnsuccessfulOperation.updateDynamicPolicy satisfies FiveGMSAFUnsuccessfulOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updateDynamicPolicy
 * @constant
 * @type {number}
 */
export
const updateDynamicPolicy = FiveGMSAFUnsuccessfulOperation.updateDynamicPolicy satisfies FiveGMSAFUnsuccessfulOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_patchDynamicPolicy
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_patchDynamicPolicy = FiveGMSAFUnsuccessfulOperation.patchDynamicPolicy satisfies FiveGMSAFUnsuccessfulOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary patchDynamicPolicy
 * @constant
 * @type {number}
 */
export
const patchDynamicPolicy = FiveGMSAFUnsuccessfulOperation.patchDynamicPolicy satisfies FiveGMSAFUnsuccessfulOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_destroyDynamicPolicy
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_destroyDynamicPolicy = FiveGMSAFUnsuccessfulOperation.destroyDynamicPolicy satisfies FiveGMSAFUnsuccessfulOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destroyDynamicPolicy
 * @constant
 * @type {number}
 */
export
const destroyDynamicPolicy = FiveGMSAFUnsuccessfulOperation.destroyDynamicPolicy satisfies FiveGMSAFUnsuccessfulOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_createNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_createNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.createNetworkAssistanceSession satisfies FiveGMSAFUnsuccessfulOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary createNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const createNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.createNetworkAssistanceSession satisfies FiveGMSAFUnsuccessfulOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_retrieveNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_retrieveNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.retrieveNetworkAssistanceSession satisfies FiveGMSAFUnsuccessfulOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieveNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const retrieveNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.retrieveNetworkAssistanceSession satisfies FiveGMSAFUnsuccessfulOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_updateNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_updateNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.updateNetworkAssistanceSession satisfies FiveGMSAFUnsuccessfulOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updateNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const updateNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.updateNetworkAssistanceSession satisfies FiveGMSAFUnsuccessfulOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_patchNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_patchNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.patchNetworkAssistanceSession satisfies FiveGMSAFUnsuccessfulOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary patchNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const patchNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.patchNetworkAssistanceSession satisfies FiveGMSAFUnsuccessfulOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_destroyNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_destroyNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.destroyNetworkAssistanceSession satisfies FiveGMSAFUnsuccessfulOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destroyNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const destroyNetworkAssistanceSession = FiveGMSAFUnsuccessfulOperation.destroyNetworkAssistanceSession satisfies FiveGMSAFUnsuccessfulOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_requestBitRateRecommendation
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_requestBitRateRecommendation = FiveGMSAFUnsuccessfulOperation.requestBitRateRecommendation satisfies FiveGMSAFUnsuccessfulOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestBitRateRecommendation
 * @constant
 * @type {number}
 */
export
const requestBitRateRecommendation = FiveGMSAFUnsuccessfulOperation.requestBitRateRecommendation satisfies FiveGMSAFUnsuccessfulOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGMSAFUnsuccessfulOperation_requestDeliveryBoost
 * @constant
 * @type {number}
 */
export
const FiveGMSAFUnsuccessfulOperation_requestDeliveryBoost = FiveGMSAFUnsuccessfulOperation.requestDeliveryBoost satisfies FiveGMSAFUnsuccessfulOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestDeliveryBoost
 * @constant
 * @type {number}
 */
export
const requestDeliveryBoost = FiveGMSAFUnsuccessfulOperation.requestDeliveryBoost satisfies FiveGMSAFUnsuccessfulOperation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FiveGMSAFUnsuccessfulOperation: $.ASN1Decoder<FiveGMSAFUnsuccessfulOperation> = $._decodeEnumerated;
export const _encode_FiveGMSAFUnsuccessfulOperation: $.ASN1Encoder<FiveGMSAFUnsuccessfulOperation> = $._encodeEnumerated;


/* eslint-enable */
