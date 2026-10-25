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
const FiveGSUserState: typeof _enum_for_FiveGSUserState = _enum_for_FiveGSUserState;

/**
 * @summary FiveGSUserState_deregistered
 * @constant
 * @type {number}
 */
export
const FiveGSUserState_deregistered: _enum_for_FiveGSUserState.deregistered = FiveGSUserState.deregistered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deregistered
 * @constant
 * @type {number}
 */
export
const deregistered: _enum_for_FiveGSUserState.deregistered = FiveGSUserState.deregistered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSUserState_registeredNotReachableForPaging
 * @constant
 * @type {number}
 */
export
const FiveGSUserState_registeredNotReachableForPaging: _enum_for_FiveGSUserState.registeredNotReachableForPaging = FiveGSUserState.registeredNotReachableForPaging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registeredNotReachableForPaging
 * @constant
 * @type {number}
 */
export
const registeredNotReachableForPaging: _enum_for_FiveGSUserState.registeredNotReachableForPaging = FiveGSUserState.registeredNotReachableForPaging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSUserState_registeredReachableForPaging
 * @constant
 * @type {number}
 */
export
const FiveGSUserState_registeredReachableForPaging: _enum_for_FiveGSUserState.registeredReachableForPaging = FiveGSUserState.registeredReachableForPaging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registeredReachableForPaging
 * @constant
 * @type {number}
 */
export
const registeredReachableForPaging: _enum_for_FiveGSUserState.registeredReachableForPaging = FiveGSUserState.registeredReachableForPaging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSUserState_connectedNotReachableForPaging
 * @constant
 * @type {number}
 */
export
const FiveGSUserState_connectedNotReachableForPaging: _enum_for_FiveGSUserState.connectedNotReachableForPaging = FiveGSUserState.connectedNotReachableForPaging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectedNotReachableForPaging
 * @constant
 * @type {number}
 */
export
const connectedNotReachableForPaging: _enum_for_FiveGSUserState.connectedNotReachableForPaging = FiveGSUserState.connectedNotReachableForPaging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSUserState_connectedReachableForPaging
 * @constant
 * @type {number}
 */
export
const FiveGSUserState_connectedReachableForPaging: _enum_for_FiveGSUserState.connectedReachableForPaging = FiveGSUserState.connectedReachableForPaging; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary connectedReachableForPaging
 * @constant
 * @type {number}
 */
export
const connectedReachableForPaging: _enum_for_FiveGSUserState.connectedReachableForPaging = FiveGSUserState.connectedReachableForPaging; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSUserState_notProvidedFromAMF
 * @constant
 * @type {number}
 */
export
const FiveGSUserState_notProvidedFromAMF: _enum_for_FiveGSUserState.notProvidedFromAMF = FiveGSUserState.notProvidedFromAMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notProvidedFromAMF
 * @constant
 * @type {number}
 */
export
const notProvidedFromAMF: _enum_for_FiveGSUserState.notProvidedFromAMF = FiveGSUserState.notProvidedFromAMF; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FiveGSUserState: $.ASN1Decoder<FiveGSUserState> = $._decodeEnumerated;
export const _encode_FiveGSUserState: $.ASN1Encoder<FiveGSUserState> = $._encodeEnumerated;


/* eslint-enable */
