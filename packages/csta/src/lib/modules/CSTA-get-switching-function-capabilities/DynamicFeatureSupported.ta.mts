/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DynamicFeatureSupported
 * @description
 *
 * How `servicesPermitted` is provided on events: none, all, or
 * some (then see logical-device event lists). Table 13-9.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DynamicFeatureSupported  ::=  ENUMERATED
 * {     none                         (0),
 *     all                         (1),
 *     some                         (2) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DynamicFeatureSupported {
    none = 0,
    all = 1,
    some = 2,
}

/**
 * @summary DynamicFeatureSupported
 * @description
 *
 * How `servicesPermitted` is provided on events: none, all, or
 * some (then see logical-device event lists). Table 13-9.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DynamicFeatureSupported  ::=  ENUMERATED
 * {     none                         (0),
 *     all                         (1),
 *     some                         (2) }
 * ```
 * 
 * @enum {number}
 */
export
type DynamicFeatureSupported = _enum_for_DynamicFeatureSupported;

/**
 * @summary DynamicFeatureSupported
 * @description
 *
 * How `servicesPermitted` is provided on events: none, all, or
 * some (then see logical-device event lists). Table 13-9.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DynamicFeatureSupported  ::=  ENUMERATED
 * {     none                         (0),
 *     all                         (1),
 *     some                         (2) }
 * ```
 * 
 * @enum {number}
 */
export
const DynamicFeatureSupported = _enum_for_DynamicFeatureSupported;

/**
 * @summary DynamicFeatureSupported_none
 * @constant
 * @type {number}
 */
export
const DynamicFeatureSupported_none: DynamicFeatureSupported = DynamicFeatureSupported.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: DynamicFeatureSupported = DynamicFeatureSupported.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DynamicFeatureSupported_all
 * @constant
 * @type {number}
 */
export
const DynamicFeatureSupported_all: DynamicFeatureSupported = DynamicFeatureSupported.all; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary all
 * @constant
 * @type {number}
 */
export
const all: DynamicFeatureSupported = DynamicFeatureSupported.all; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DynamicFeatureSupported_some
 * @constant
 * @type {number}
 */
export
const DynamicFeatureSupported_some: DynamicFeatureSupported = DynamicFeatureSupported.some; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary some
 * @constant
 * @type {number}
 */
export
const some: DynamicFeatureSupported = DynamicFeatureSupported.some; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DynamicFeatureSupported: $.ASN1Decoder<DynamicFeatureSupported> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DynamicFeatureSupported
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DynamicFeatureSupported (el: _Element): DynamicFeatureSupported {
    if (!_cached_decoder_for_DynamicFeatureSupported) { _cached_decoder_for_DynamicFeatureSupported = $._decodeEnumerated; }
    return _cached_decoder_for_DynamicFeatureSupported(el);
}

let _cached_encoder_for_DynamicFeatureSupported: $.ASN1Encoder<DynamicFeatureSupported> | null = null;

/**
 * @summary Encodes a(n) DynamicFeatureSupported into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DynamicFeatureSupported, encoded as an ASN.1 Element.
 */
export
function _encode_DynamicFeatureSupported (value: DynamicFeatureSupported, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DynamicFeatureSupported) { _cached_encoder_for_DynamicFeatureSupported = $._encodeEnumerated; }
    return _cached_encoder_for_DynamicFeatureSupported(value, elGetter);
}


/* eslint-enable */
