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
const NAOperationType: typeof _enum_for_NAOperationType = _enum_for_NAOperationType;

/**
 * @summary NAOperationType_createNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const NAOperationType_createNetworkAssistanceSession: _enum_for_NAOperationType.createNetworkAssistanceSession = NAOperationType.createNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary createNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const createNetworkAssistanceSession: _enum_for_NAOperationType.createNetworkAssistanceSession = NAOperationType.createNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_retrieveNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const NAOperationType_retrieveNetworkAssistanceSession: _enum_for_NAOperationType.retrieveNetworkAssistanceSession = NAOperationType.retrieveNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieveNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const retrieveNetworkAssistanceSession: _enum_for_NAOperationType.retrieveNetworkAssistanceSession = NAOperationType.retrieveNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_updateNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const NAOperationType_updateNetworkAssistanceSession: _enum_for_NAOperationType.updateNetworkAssistanceSession = NAOperationType.updateNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updateNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const updateNetworkAssistanceSession: _enum_for_NAOperationType.updateNetworkAssistanceSession = NAOperationType.updateNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_patchNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const NAOperationType_patchNetworkAssistanceSession: _enum_for_NAOperationType.patchNetworkAssistanceSession = NAOperationType.patchNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary patchNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const patchNetworkAssistanceSession: _enum_for_NAOperationType.patchNetworkAssistanceSession = NAOperationType.patchNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_destroyNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const NAOperationType_destroyNetworkAssistanceSession: _enum_for_NAOperationType.destroyNetworkAssistanceSession = NAOperationType.destroyNetworkAssistanceSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destroyNetworkAssistanceSession
 * @constant
 * @type {number}
 */
export
const destroyNetworkAssistanceSession: _enum_for_NAOperationType.destroyNetworkAssistanceSession = NAOperationType.destroyNetworkAssistanceSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_requestBitRateRecommendation
 * @constant
 * @type {number}
 */
export
const NAOperationType_requestBitRateRecommendation: _enum_for_NAOperationType.requestBitRateRecommendation = NAOperationType.requestBitRateRecommendation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestBitRateRecommendation
 * @constant
 * @type {number}
 */
export
const requestBitRateRecommendation: _enum_for_NAOperationType.requestBitRateRecommendation = NAOperationType.requestBitRateRecommendation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NAOperationType_requestDeliveryBoost
 * @constant
 * @type {number}
 */
export
const NAOperationType_requestDeliveryBoost: _enum_for_NAOperationType.requestDeliveryBoost = NAOperationType.requestDeliveryBoost; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestDeliveryBoost
 * @constant
 * @type {number}
 */
export
const requestDeliveryBoost: _enum_for_NAOperationType.requestDeliveryBoost = NAOperationType.requestDeliveryBoost; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NAOperationType: $.ASN1Decoder<NAOperationType> = $._decodeEnumerated;
export const _encode_NAOperationType: $.ASN1Encoder<NAOperationType> = $._encodeEnumerated;


/* eslint-enable */
