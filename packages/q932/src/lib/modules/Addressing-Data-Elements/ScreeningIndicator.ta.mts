/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ScreeningIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScreeningIndicator  ::=  ENUMERATED {
 *   userProvidedNotScreened(0),
 *   --  number was provided by a remote user terminal
 *   --  equipment, and has been screened by a
 *   --  network that is not the local public or local
 *   --  private network.
 *   userProvidedVerifiedAndPassed(1),
 *   --  number was provided by a remote user terminal
 *   --  equipment (or by a remote private network), and
 *   --  has been screened by the local public or local
 *   --  private network.
 *   userProvidedVerifiedAndFailed(2),
 *   --  not used, value reserved
 *   networkProvided(3)}
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
 *   userProvidedNotScreened(0),
 *   --  number was provided by a remote user terminal
 *   --  equipment, and has been screened by a
 *   --  network that is not the local public or local
 *   --  private network.
 *   userProvidedVerifiedAndPassed(1),
 *   --  number was provided by a remote user terminal
 *   --  equipment (or by a remote private network), and
 *   --  has been screened by the local public or local
 *   --  private network.
 *   userProvidedVerifiedAndFailed(2),
 *   --  not used, value reserved
 *   networkProvided(3)}
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
 *   userProvidedNotScreened(0),
 *   --  number was provided by a remote user terminal
 *   --  equipment, and has been screened by a
 *   --  network that is not the local public or local
 *   --  private network.
 *   userProvidedVerifiedAndPassed(1),
 *   --  number was provided by a remote user terminal
 *   --  equipment (or by a remote private network), and
 *   --  has been screened by the local public or local
 *   --  private network.
 *   userProvidedVerifiedAndFailed(2),
 *   --  not used, value reserved
 *   networkProvided(3)}
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

let _cached_decoder_for_ScreeningIndicator: $.ASN1Decoder<ScreeningIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScreeningIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScreeningIndicator (el: _Element): ScreeningIndicator {
    if (!_cached_decoder_for_ScreeningIndicator) { _cached_decoder_for_ScreeningIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_ScreeningIndicator(el);
}

let _cached_encoder_for_ScreeningIndicator: $.ASN1Encoder<ScreeningIndicator> | null = null;

/**
 * @summary Encodes a(n) ScreeningIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScreeningIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_ScreeningIndicator (value: ScreeningIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScreeningIndicator) { _cached_encoder_for_ScreeningIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_ScreeningIndicator(value, elGetter);
}


/* eslint-enable */
