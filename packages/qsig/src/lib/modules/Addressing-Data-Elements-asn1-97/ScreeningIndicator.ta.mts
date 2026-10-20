/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ScreeningIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScreeningIndicator  ::=  ENUMERATED {
 *     userProvidedNotScreened(0),
 *     -- number was provided by a remote user terminal
 *     -- equipment, and has been screened by a network that
 *     -- is not the local public or the local private
 *     -- network.
 *     userProvidedVerifiedAndPassed(1),
 *     -- number was provided by a remote user terminal
 *     -- equipment (or by a remote private network), and has
 *     -- been screened by the local public or the local
 *     -- private network.
 *     userProvidedVerifiedAndFailed(2),
 *     -- not used, value reserved.
 *     networkProvided(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ScreeningIndicator {
    userProvidedNotScreened = 0,
    userProvidedVerifiedAndPassed = 1,
    userProvidedVerifiedAndFailed = 2,
    networkProvided = 3,
}

/**
 * @summary ScreeningIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScreeningIndicator  ::=  ENUMERATED {
 *     userProvidedNotScreened(0),
 *     -- number was provided by a remote user terminal
 *     -- equipment, and has been screened by a network that
 *     -- is not the local public or the local private
 *     -- network.
 *     userProvidedVerifiedAndPassed(1),
 *     -- number was provided by a remote user terminal
 *     -- equipment (or by a remote private network), and has
 *     -- been screened by the local public or the local
 *     -- private network.
 *     userProvidedVerifiedAndFailed(2),
 *     -- not used, value reserved.
 *     networkProvided(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ScreeningIndicator = _enum_for_ScreeningIndicator;

/**
 * @summary ScreeningIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScreeningIndicator  ::=  ENUMERATED {
 *     userProvidedNotScreened(0),
 *     -- number was provided by a remote user terminal
 *     -- equipment, and has been screened by a network that
 *     -- is not the local public or the local private
 *     -- network.
 *     userProvidedVerifiedAndPassed(1),
 *     -- number was provided by a remote user terminal
 *     -- equipment (or by a remote private network), and has
 *     -- been screened by the local public or the local
 *     -- private network.
 *     userProvidedVerifiedAndFailed(2),
 *     -- not used, value reserved.
 *     networkProvided(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ScreeningIndicator = _enum_for_ScreeningIndicator;

/**
 * @summary ScreeningIndicator_userProvidedNotScreened
 * @constant
 * @type {number}
 */
export
const ScreeningIndicator_userProvidedNotScreened: ScreeningIndicator = ScreeningIndicator.userProvidedNotScreened; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userProvidedNotScreened
 * @constant
 * @type {number}
 */
export
const userProvidedNotScreened: ScreeningIndicator = ScreeningIndicator.userProvidedNotScreened; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScreeningIndicator_userProvidedVerifiedAndPassed
 * @constant
 * @type {number}
 */
export
const ScreeningIndicator_userProvidedVerifiedAndPassed: ScreeningIndicator = ScreeningIndicator.userProvidedVerifiedAndPassed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userProvidedVerifiedAndPassed
 * @constant
 * @type {number}
 */
export
const userProvidedVerifiedAndPassed: ScreeningIndicator = ScreeningIndicator.userProvidedVerifiedAndPassed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScreeningIndicator_userProvidedVerifiedAndFailed
 * @constant
 * @type {number}
 */
export
const ScreeningIndicator_userProvidedVerifiedAndFailed: ScreeningIndicator = ScreeningIndicator.userProvidedVerifiedAndFailed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userProvidedVerifiedAndFailed
 * @constant
 * @type {number}
 */
export
const userProvidedVerifiedAndFailed: ScreeningIndicator = ScreeningIndicator.userProvidedVerifiedAndFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScreeningIndicator_networkProvided
 * @constant
 * @type {number}
 */
export
const ScreeningIndicator_networkProvided: ScreeningIndicator = ScreeningIndicator.networkProvided; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkProvided
 * @constant
 * @type {number}
 */
export
const networkProvided: ScreeningIndicator = ScreeningIndicator.networkProvided; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ScreeningIndicator: $.ASN1Decoder<ScreeningIndicator> = $._decodeEnumerated;

export
const _encode_ScreeningIndicator: $.ASN1Encoder<ScreeningIndicator> = $._encodeEnumerated;

/* eslint-enable */
