/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NAOperationType
 * @description
 * 
 * Type of operation applied to the network assistance resource, i.e.
 * createNetworkAssistanceSession, retrieveNetworkAssistanceSession,
 * updateNetworkAssistanceSession, patchNetworkAssistanceSession,
 * destroyNetworkAssistanceSession, requestBitRateRecommendation and
 * requestDeliveryBoost.
 *
 * 3GPP TS 33.128, clause 7.15.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAOperationType  ::=  ENUMERATED
 * {
 *     createNetworkAssistanceSession(1),
 *     retrieveNetworkAssistanceSession(2),
 *     updateNetworkAssistanceSession(3),
 *     patchNetworkAssistanceSession(4),
 *     destroyNetworkAssistanceSession(5),
 *     requestBitRateRecommendation(6),
 *     requestDeliveryBoost(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NAOperationType {
    createNetworkAssistanceSession = 1,
    retrieveNetworkAssistanceSession = 2,
    updateNetworkAssistanceSession = 3,
    patchNetworkAssistanceSession = 4,
    destroyNetworkAssistanceSession = 5,
    requestBitRateRecommendation = 6,
    requestDeliveryBoost = 7,
}

/**
 * @summary NAOperationType
 * @description
 * 
 * Type of operation applied to the network assistance resource, i.e.
 * createNetworkAssistanceSession, retrieveNetworkAssistanceSession,
 * updateNetworkAssistanceSession, patchNetworkAssistanceSession,
 * destroyNetworkAssistanceSession, requestBitRateRecommendation and
 * requestDeliveryBoost.
 *
 * 3GPP TS 33.128, clause 7.15.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAOperationType  ::=  ENUMERATED
 * {
 *     createNetworkAssistanceSession(1),
 *     retrieveNetworkAssistanceSession(2),
 *     updateNetworkAssistanceSession(3),
 *     patchNetworkAssistanceSession(4),
 *     destroyNetworkAssistanceSession(5),
 *     requestBitRateRecommendation(6),
 *     requestDeliveryBoost(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NAOperationType = _enum_for_NAOperationType;

/**
 * @summary NAOperationType
 * @description
 * 
 * Type of operation applied to the network assistance resource, i.e.
 * createNetworkAssistanceSession, retrieveNetworkAssistanceSession,
 * updateNetworkAssistanceSession, patchNetworkAssistanceSession,
 * destroyNetworkAssistanceSession, requestBitRateRecommendation and
 * requestDeliveryBoost.
 *
 * 3GPP TS 33.128, clause 7.15.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAOperationType  ::=  ENUMERATED
 * {
 *     createNetworkAssistanceSession(1),
 *     retrieveNetworkAssistanceSession(2),
 *     updateNetworkAssistanceSession(3),
 *     patchNetworkAssistanceSession(4),
 *     destroyNetworkAssistanceSession(5),
 *     requestBitRateRecommendation(6),
 *     requestDeliveryBoost(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NAOperationType = _enum_for_NAOperationType;

/**
 * @summary NAOperationType_createNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const NAOperationType_createNetworkAssistanceSession = NAOperationType.createNetworkAssistanceSession satisfies NAOperationType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary createNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const createNetworkAssistanceSession = NAOperationType.createNetworkAssistanceSession satisfies NAOperationType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_retrieveNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const NAOperationType_retrieveNetworkAssistanceSession = NAOperationType.retrieveNetworkAssistanceSession satisfies NAOperationType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieveNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const retrieveNetworkAssistanceSession = NAOperationType.retrieveNetworkAssistanceSession satisfies NAOperationType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_updateNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const NAOperationType_updateNetworkAssistanceSession = NAOperationType.updateNetworkAssistanceSession satisfies NAOperationType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updateNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const updateNetworkAssistanceSession = NAOperationType.updateNetworkAssistanceSession satisfies NAOperationType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_patchNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const NAOperationType_patchNetworkAssistanceSession = NAOperationType.patchNetworkAssistanceSession satisfies NAOperationType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary patchNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const patchNetworkAssistanceSession = NAOperationType.patchNetworkAssistanceSession satisfies NAOperationType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_destroyNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const NAOperationType_destroyNetworkAssistanceSession = NAOperationType.destroyNetworkAssistanceSession satisfies NAOperationType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destroyNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const destroyNetworkAssistanceSession = NAOperationType.destroyNetworkAssistanceSession satisfies NAOperationType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_requestBitRateRecommendation
 * @constant
 * @type {number}
 */
export
const NAOperationType_requestBitRateRecommendation = NAOperationType.requestBitRateRecommendation satisfies NAOperationType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestBitRateRecommendation
 * @constant
 * @type {number}
 */
export
const requestBitRateRecommendation = NAOperationType.requestBitRateRecommendation satisfies NAOperationType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_requestDeliveryBoost
 * @constant
 * @type {number}
 */
export
const NAOperationType_requestDeliveryBoost = NAOperationType.requestDeliveryBoost satisfies NAOperationType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestDeliveryBoost
 * @constant
 * @type {number}
 */
export
const requestDeliveryBoost = NAOperationType.requestDeliveryBoost satisfies NAOperationType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NAOperationType: $.ASN1Decoder<NAOperationType> = $._decodeEnumerated;
export const _encode_NAOperationType: $.ASN1Encoder<NAOperationType> = $._encodeEnumerated;


/* eslint-enable */
