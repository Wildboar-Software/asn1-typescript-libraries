/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ScreeningIndicator
 * @description
 *
 * Who supplied a party number and which network screened it (ECMA-165 Annex B
 * Table B.1). Carried with a screened number or address.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
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
 * Who supplied a party number and which network screened it (ECMA-165 Annex B
 * Table B.1). Carried with a screened number or address.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
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
 * Who supplied a party number and which network screened it (ECMA-165 Annex B
 * Table B.1). Carried with a screened number or address.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
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
 * @description
 *
 * The remote user's terminal provided the number. A network other than the
 * local public or local private network screened it. ECMA-165 Annex B Table
 * B.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const ScreeningIndicator_userProvidedNotScreened = ScreeningIndicator.userProvidedNotScreened; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userProvidedNotScreened
 * @description Alias of {@link ScreeningIndicator_userProvidedNotScreened}.
 * @constant
 * @type {number}
 */
export
const userProvidedNotScreened = ScreeningIndicator.userProvidedNotScreened; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScreeningIndicator_userProvidedVerifiedAndPassed
 * @description
 *
 * The remote user's terminal, or a remote private network, provided the number.
 * The local public or local private network screened it and accepted it.
 * ECMA-165 Annex B Table B.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const ScreeningIndicator_userProvidedVerifiedAndPassed = ScreeningIndicator.userProvidedVerifiedAndPassed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userProvidedVerifiedAndPassed
 * @description
 *
 * Alias of {@link ScreeningIndicator_userProvidedVerifiedAndPassed}.
 * @constant
 * @type {number}
 */
export
const userProvidedVerifiedAndPassed = ScreeningIndicator.userProvidedVerifiedAndPassed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScreeningIndicator_userProvidedVerifiedAndFailed
 * @description
 *
 * Not used; the value is reserved. ECMA-165 Annex B Table B.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const ScreeningIndicator_userProvidedVerifiedAndFailed = ScreeningIndicator.userProvidedVerifiedAndFailed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userProvidedVerifiedAndFailed
 * @description
 *
 * Alias of {@link ScreeningIndicator_userProvidedVerifiedAndFailed}.
 * @constant
 * @type {number}
 */
export
const userProvidedVerifiedAndFailed = ScreeningIndicator.userProvidedVerifiedAndFailed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ScreeningIndicator_networkProvided
 * @description
 *
 * The local public or local private network provided the number. ECMA-165 Annex
 * B Table B.1.
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export
const ScreeningIndicator_networkProvided = ScreeningIndicator.networkProvided; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkProvided
 * @description Alias of {@link ScreeningIndicator_networkProvided}.
 * @constant
 * @type {number}
 */
export
const networkProvided = ScreeningIndicator.networkProvided; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ScreeningIndicator: $.ASN1Decoder<ScreeningIndicator> = $._decodeEnumerated;

export
const _encode_ScreeningIndicator: $.ASN1Encoder<ScreeningIndicator> = $._encodeEnumerated;

/* eslint-enable */
