/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSUserState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSUserState  ::=  ENUMERATED
 * {
 *     deregistered(1),
 *     registeredNotReachableForPaging(2),
 *     registeredReachableForPaging(3),
 *     connectedNotReachableForPaging(4),
 *     connectedReachableForPaging(5),
 *     notProvidedFromAMF(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FiveGSUserState {
    deregistered = 1,
    registeredNotReachableForPaging = 2,
    registeredReachableForPaging = 3,
    connectedNotReachableForPaging = 4,
    connectedReachableForPaging = 5,
    notProvidedFromAMF = 6,
}

/**
 * @summary FiveGSUserState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSUserState  ::=  ENUMERATED
 * {
 *     deregistered(1),
 *     registeredNotReachableForPaging(2),
 *     registeredReachableForPaging(3),
 *     connectedNotReachableForPaging(4),
 *     connectedReachableForPaging(5),
 *     notProvidedFromAMF(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FiveGSUserState = _enum_for_FiveGSUserState;

/**
 * @summary FiveGSUserState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSUserState  ::=  ENUMERATED
 * {
 *     deregistered(1),
 *     registeredNotReachableForPaging(2),
 *     registeredReachableForPaging(3),
 *     connectedNotReachableForPaging(4),
 *     connectedReachableForPaging(5),
 *     notProvidedFromAMF(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FiveGSUserState = _enum_for_FiveGSUserState;

/**
 * @summary FiveGSUserState_deregistered
 * @constant
 * @type {number}
 */
export
const FiveGSUserState_deregistered = FiveGSUserState.deregistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deregistered
 * @constant
 * @type {number}
 */
export
const deregistered = FiveGSUserState.deregistered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSUserState_registeredNotReachableForPaging
 * @constant
 * @type {number}
 */
export
const FiveGSUserState_registeredNotReachableForPaging = FiveGSUserState.registeredNotReachableForPaging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registeredNotReachableForPaging
 * @constant
 * @type {number}
 */
export
const registeredNotReachableForPaging = FiveGSUserState.registeredNotReachableForPaging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSUserState_registeredReachableForPaging
 * @constant
 * @type {number}
 */
export
const FiveGSUserState_registeredReachableForPaging = FiveGSUserState.registeredReachableForPaging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registeredReachableForPaging
 * @constant
 * @type {number}
 */
export
const registeredReachableForPaging = FiveGSUserState.registeredReachableForPaging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSUserState_connectedNotReachableForPaging
 * @constant
 * @type {number}
 */
export
const FiveGSUserState_connectedNotReachableForPaging = FiveGSUserState.connectedNotReachableForPaging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectedNotReachableForPaging
 * @constant
 * @type {number}
 */
export
const connectedNotReachableForPaging = FiveGSUserState.connectedNotReachableForPaging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSUserState_connectedReachableForPaging
 * @constant
 * @type {number}
 */
export
const FiveGSUserState_connectedReachableForPaging = FiveGSUserState.connectedReachableForPaging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectedReachableForPaging
 * @constant
 * @type {number}
 */
export
const connectedReachableForPaging = FiveGSUserState.connectedReachableForPaging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSUserState_notProvidedFromAMF
 * @constant
 * @type {number}
 */
export
const FiveGSUserState_notProvidedFromAMF = FiveGSUserState.notProvidedFromAMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notProvidedFromAMF
 * @constant
 * @type {number}
 */
export
const notProvidedFromAMF = FiveGSUserState.notProvidedFromAMF; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FiveGSUserState: $.ASN1Decoder<FiveGSUserState> = $._decodeEnumerated;
export const _encode_FiveGSUserState: $.ASN1Encoder<FiveGSUserState> = $._encodeEnumerated;


/* eslint-enable */
