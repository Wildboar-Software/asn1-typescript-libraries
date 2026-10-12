/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDMDefinedCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMDefinedCause  ::=  ENUMERATED
 * {
 *     userNotFound(1),
 *     dataNotFound(2),
 *     contextNotFound(3),
 *     subscriptionNotFound(4),
 *     other(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UDMDefinedCause {
    userNotFound = 1,
    dataNotFound = 2,
    contextNotFound = 3,
    subscriptionNotFound = 4,
    other = 5,
}

/**
 * @summary UDMDefinedCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMDefinedCause  ::=  ENUMERATED
 * {
 *     userNotFound(1),
 *     dataNotFound(2),
 *     contextNotFound(3),
 *     subscriptionNotFound(4),
 *     other(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UDMDefinedCause = _enum_for_UDMDefinedCause;

/**
 * @summary UDMDefinedCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMDefinedCause  ::=  ENUMERATED
 * {
 *     userNotFound(1),
 *     dataNotFound(2),
 *     contextNotFound(3),
 *     subscriptionNotFound(4),
 *     other(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UDMDefinedCause = _enum_for_UDMDefinedCause;

/**
 * @summary UDMDefinedCause_userNotFound
 * @constant
 * @type {number}
 */
export
const UDMDefinedCause_userNotFound: UDMDefinedCause = UDMDefinedCause.userNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userNotFound
 * @constant
 * @type {number}
 */
export
const userNotFound: UDMDefinedCause = UDMDefinedCause.userNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDefinedCause_dataNotFound
 * @constant
 * @type {number}
 */
export
const UDMDefinedCause_dataNotFound: UDMDefinedCause = UDMDefinedCause.dataNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dataNotFound
 * @constant
 * @type {number}
 */
export
const dataNotFound: UDMDefinedCause = UDMDefinedCause.dataNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDefinedCause_contextNotFound
 * @constant
 * @type {number}
 */
export
const UDMDefinedCause_contextNotFound: UDMDefinedCause = UDMDefinedCause.contextNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contextNotFound
 * @constant
 * @type {number}
 */
export
const contextNotFound: UDMDefinedCause = UDMDefinedCause.contextNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDefinedCause_subscriptionNotFound
 * @constant
 * @type {number}
 */
export
const UDMDefinedCause_subscriptionNotFound: UDMDefinedCause = UDMDefinedCause.subscriptionNotFound; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriptionNotFound
 * @constant
 * @type {number}
 */
export
const subscriptionNotFound: UDMDefinedCause = UDMDefinedCause.subscriptionNotFound; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMDefinedCause_other
 * @constant
 * @type {number}
 */
export
const UDMDefinedCause_other: UDMDefinedCause = UDMDefinedCause.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: UDMDefinedCause = UDMDefinedCause.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_UDMDefinedCause: $.ASN1Decoder<UDMDefinedCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMDefinedCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMDefinedCause (el: _Element): UDMDefinedCause {
    if (!_cached_decoder_for_UDMDefinedCause) { _cached_decoder_for_UDMDefinedCause = $._decodeEnumerated; }
    return _cached_decoder_for_UDMDefinedCause(el);
}

let _cached_encoder_for_UDMDefinedCause: $.ASN1Encoder<UDMDefinedCause> | null = null;

/**
 * @summary Encodes a(n) UDMDefinedCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMDefinedCause, encoded as an ASN.1 Element.
 */
export
function _encode_UDMDefinedCause (value: UDMDefinedCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMDefinedCause) { _cached_encoder_for_UDMDefinedCause = $._encodeEnumerated; }
    return _cached_encoder_for_UDMDefinedCause(value, elGetter);
}


/* eslint-enable */
