/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AFKeyRemovalCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFKeyRemovalCause  ::=  ENUMERATED
 * {
 *     unknown(1),
 *     keyExpiry(2),
 *     applicationSpecific(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AFKeyRemovalCause {
    unknown = 1,
    keyExpiry = 2,
    applicationSpecific = 3,
}

/**
 * @summary AFKeyRemovalCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFKeyRemovalCause  ::=  ENUMERATED
 * {
 *     unknown(1),
 *     keyExpiry(2),
 *     applicationSpecific(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AFKeyRemovalCause = _enum_for_AFKeyRemovalCause;

/**
 * @summary AFKeyRemovalCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFKeyRemovalCause  ::=  ENUMERATED
 * {
 *     unknown(1),
 *     keyExpiry(2),
 *     applicationSpecific(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AFKeyRemovalCause = _enum_for_AFKeyRemovalCause;

/**
 * @summary AFKeyRemovalCause_unknown
 * @constant
 * @type {number}
 */
export
const AFKeyRemovalCause_unknown: AFKeyRemovalCause = AFKeyRemovalCause.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: AFKeyRemovalCause = AFKeyRemovalCause.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AFKeyRemovalCause_keyExpiry
 * @constant
 * @type {number}
 */
export
const AFKeyRemovalCause_keyExpiry: AFKeyRemovalCause = AFKeyRemovalCause.keyExpiry; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary keyExpiry
 * @constant
 * @type {number}
 */
export
const keyExpiry: AFKeyRemovalCause = AFKeyRemovalCause.keyExpiry; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AFKeyRemovalCause_applicationSpecific
 * @constant
 * @type {number}
 */
export
const AFKeyRemovalCause_applicationSpecific: AFKeyRemovalCause = AFKeyRemovalCause.applicationSpecific; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary applicationSpecific
 * @constant
 * @type {number}
 */
export
const applicationSpecific: AFKeyRemovalCause = AFKeyRemovalCause.applicationSpecific; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AFKeyRemovalCause: $.ASN1Decoder<AFKeyRemovalCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AFKeyRemovalCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AFKeyRemovalCause (el: _Element): AFKeyRemovalCause {
    if (!_cached_decoder_for_AFKeyRemovalCause) { _cached_decoder_for_AFKeyRemovalCause = $._decodeEnumerated; }
    return _cached_decoder_for_AFKeyRemovalCause(el);
}

let _cached_encoder_for_AFKeyRemovalCause: $.ASN1Encoder<AFKeyRemovalCause> | null = null;

/**
 * @summary Encodes a(n) AFKeyRemovalCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AFKeyRemovalCause, encoded as an ASN.1 Element.
 */
export
function _encode_AFKeyRemovalCause (value: AFKeyRemovalCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AFKeyRemovalCause) { _cached_encoder_for_AFKeyRemovalCause = $._encodeEnumerated; }
    return _cached_encoder_for_AFKeyRemovalCause(value, elGetter);
}


/* eslint-enable */
