/* eslint-disable */
import {
    type ASN1Element as _Element,
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AbsentSubscriberReason {
    imsiDetach = 0,
    restrictedArea = 1,
    noPageResponse = 2,
    purgedMS = 3,
    mtRoamingRetry = 4,
    busySubscriber = 5,
}

/**
 * @summary AbsentSubscriberReason
 * @description
 * 
 * Qualifier on `AbsentSubscriberParam`. At reception of values other than the
 * ones listed, this parameter shall be ignored (3GPP TS 29.002 V19.1.0 clauses
 * 7.6.1.4 and 17.7.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AbsentSubscriberReason  ::=  ENUMERATED {
 *     imsiDetach (0),
 *     restrictedArea (1),
 *     noPageResponse (2),
 *     ... ,
 *     purgedMS (3),
 *     mtRoamingRetry (4),
 *     busySubscriber (5)}
 * ```
 * 
 * @enum {number}
 */
export
type AbsentSubscriberReason = _enum_for_AbsentSubscriberReason | ENUMERATED;

/**
 * @summary AbsentSubscriberReason_imsiDetach
 * @description
 *
 * Subscriber was IMSI detached (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const AbsentSubscriberReason_imsiDetach = _enum_for_AbsentSubscriberReason.imsiDetach satisfies AbsentSubscriberReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary imsiDetach
 * @description
 *
 * Subscriber was IMSI detached (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const imsiDetach = AbsentSubscriberReason_imsiDetach satisfies AbsentSubscriberReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AbsentSubscriberReason_restrictedArea
 * @description
 *
 * Subscriber was in a restricted area (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const AbsentSubscriberReason_restrictedArea = _enum_for_AbsentSubscriberReason.restrictedArea satisfies AbsentSubscriberReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary restrictedArea
 * @description
 *
 * Subscriber was in a restricted area (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const restrictedArea = AbsentSubscriberReason_restrictedArea satisfies AbsentSubscriberReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AbsentSubscriberReason_noPageResponse
 * @description
 *
 * Subscriber did not respond to paging (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const AbsentSubscriberReason_noPageResponse = _enum_for_AbsentSubscriberReason.noPageResponse satisfies AbsentSubscriberReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noPageResponse
 * @description
 *
 * Subscriber did not respond to paging (3GPP TS 29.002 V19.1.0 clause 7.6.1.4).
 *
 * @constant
 * @type {number}
 */
export
const noPageResponse = AbsentSubscriberReason_noPageResponse satisfies AbsentSubscriberReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AbsentSubscriberReason_purgedMS
 * @description
 *
 * Defined for the Super-Charger feature (see TS 23.116). If received in a
 * Provide Roaming Number response it shall be mapped to `imsiDetach` in the
 * Send Routeing Information response (3GPP TS 29.002 V19.1.0 clause 17.7.7).
 *
 * @constant
 * @type {number}
 */
export
const AbsentSubscriberReason_purgedMS = _enum_for_AbsentSubscriberReason.purgedMS satisfies AbsentSubscriberReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary purgedMS
 * @description
 *
 * Defined for the Super-Charger feature (see TS 23.116). If received in a
 * Provide Roaming Number response it shall be mapped to `imsiDetach` in the
 * Send Routeing Information response (3GPP TS 29.002 V19.1.0 clause 17.7.7).
 *
 * @constant
 * @type {number}
 */
export
const purgedMS = AbsentSubscriberReason_purgedMS satisfies AbsentSubscriberReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AbsentSubscriberReason_mtRoamingRetry
 * @description
 *
 * Used during MT Roaming Retry; see 3GPP TS 23.018 (3GPP TS 29.002 V19.1.0
 * clause 17.7.7).
 *
 * @constant
 * @type {number}
 */
export
const AbsentSubscriberReason_mtRoamingRetry = _enum_for_AbsentSubscriberReason.mtRoamingRetry satisfies AbsentSubscriberReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mtRoamingRetry
 * @description
 *
 * Used during MT Roaming Retry; see 3GPP TS 23.018 (3GPP TS 29.002 V19.1.0
 * clause 17.7.7).
 *
 * @constant
 * @type {number}
 */
export
const mtRoamingRetry = AbsentSubscriberReason_mtRoamingRetry satisfies AbsentSubscriberReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AbsentSubscriberReason_busySubscriber
 * @description
 *
 * Used during MT Roaming Forwarding; see 3GPP TS 23.018 (3GPP TS 29.002 V19.1.0
 * clause 17.7.7).
 *
 * @constant
 * @type {number}
 */
export
const AbsentSubscriberReason_busySubscriber = _enum_for_AbsentSubscriberReason.busySubscriber satisfies AbsentSubscriberReason; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busySubscriber
 * @description
 *
 * Used during MT Roaming Forwarding; see 3GPP TS 23.018 (3GPP TS 29.002 V19.1.0
 * clause 17.7.7).
 *
 * @constant
 * @type {number}
 */
export
const busySubscriber = AbsentSubscriberReason_busySubscriber satisfies AbsentSubscriberReason; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) AbsentSubscriberReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AbsentSubscriberReason = $._decodeEnumerated;

/**
 * @summary Encodes a(n) AbsentSubscriberReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AbsentSubscriberReason, encoded as an ASN.1 Element.
 */
export const _encode_AbsentSubscriberReason = $._encodeEnumerated;


/* eslint-enable */
