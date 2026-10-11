/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSPriority  ::=  ENUMERATED
 * {
 *     low(1),
 *     normal(2),
 *     high(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSPriority {
    low = 1,
    normal = 2,
    high = 3,
}

/**
 * @summary MMSPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSPriority  ::=  ENUMERATED
 * {
 *     low(1),
 *     normal(2),
 *     high(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSPriority = _enum_for_MMSPriority;

/**
 * @summary MMSPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSPriority  ::=  ENUMERATED
 * {
 *     low(1),
 *     normal(2),
 *     high(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSPriority = _enum_for_MMSPriority;

/**
 * @summary MMSPriority_low
 * @constant
 * @type {number}
 */
export
const MMSPriority_low: MMSPriority = MMSPriority.low; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @constant
 * @type {number}
 */
export
const low: MMSPriority = MMSPriority.low; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSPriority_normal
 * @constant
 * @type {number}
 */
export
const MMSPriority_normal: MMSPriority = MMSPriority.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: MMSPriority = MMSPriority.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSPriority_high
 * @constant
 * @type {number}
 */
export
const MMSPriority_high: MMSPriority = MMSPriority.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high: MMSPriority = MMSPriority.high; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMSPriority: $.ASN1Decoder<MMSPriority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSPriority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSPriority (el: _Element): MMSPriority {
    if (!_cached_decoder_for_MMSPriority) { _cached_decoder_for_MMSPriority = $._decodeEnumerated; }
    return _cached_decoder_for_MMSPriority(el);
}

let _cached_encoder_for_MMSPriority: $.ASN1Encoder<MMSPriority> | null = null;

/**
 * @summary Encodes a(n) MMSPriority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSPriority, encoded as an ASN.1 Element.
 */
export
function _encode_MMSPriority (value: MMSPriority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSPriority) { _cached_encoder_for_MMSPriority = $._encodeEnumerated; }
    return _cached_encoder_for_MMSPriority(value, elGetter);
}


/* eslint-enable */
