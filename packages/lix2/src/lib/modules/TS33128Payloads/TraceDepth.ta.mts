/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TraceDepth
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceDepth  ::=  ENUMERATED
 * {
 *     minimum(1),
 *     medium(2),
 *     maximum(3),
 *     minimumWithoutVendorSpecificExtension(4),
 *     mediumWithoutVendorSpecificExtension(5),
 *     maximumWithoutVendorSpecificExtension(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TraceDepth {
    minimum = 1,
    medium = 2,
    maximum = 3,
    minimumWithoutVendorSpecificExtension = 4,
    mediumWithoutVendorSpecificExtension = 5,
    maximumWithoutVendorSpecificExtension = 6,
}

/**
 * @summary TraceDepth
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceDepth  ::=  ENUMERATED
 * {
 *     minimum(1),
 *     medium(2),
 *     maximum(3),
 *     minimumWithoutVendorSpecificExtension(4),
 *     mediumWithoutVendorSpecificExtension(5),
 *     maximumWithoutVendorSpecificExtension(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TraceDepth = _enum_for_TraceDepth;

/**
 * @summary TraceDepth
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceDepth  ::=  ENUMERATED
 * {
 *     minimum(1),
 *     medium(2),
 *     maximum(3),
 *     minimumWithoutVendorSpecificExtension(4),
 *     mediumWithoutVendorSpecificExtension(5),
 *     maximumWithoutVendorSpecificExtension(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TraceDepth = _enum_for_TraceDepth;

/**
 * @summary TraceDepth_minimum
 * @constant
 * @type {number}
 */
export
const TraceDepth_minimum: TraceDepth = TraceDepth.minimum; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary minimum
 * @constant
 * @type {number}
 */
export
const minimum: TraceDepth = TraceDepth.minimum; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_medium
 * @constant
 * @type {number}
 */
export
const TraceDepth_medium: TraceDepth = TraceDepth.medium; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary medium
 * @constant
 * @type {number}
 */
export
const medium: TraceDepth = TraceDepth.medium; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_maximum
 * @constant
 * @type {number}
 */
export
const TraceDepth_maximum: TraceDepth = TraceDepth.maximum; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maximum
 * @constant
 * @type {number}
 */
export
const maximum: TraceDepth = TraceDepth.maximum; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_minimumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const TraceDepth_minimumWithoutVendorSpecificExtension: TraceDepth = TraceDepth.minimumWithoutVendorSpecificExtension; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary minimumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const minimumWithoutVendorSpecificExtension: TraceDepth = TraceDepth.minimumWithoutVendorSpecificExtension; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_mediumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const TraceDepth_mediumWithoutVendorSpecificExtension: TraceDepth = TraceDepth.mediumWithoutVendorSpecificExtension; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mediumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const mediumWithoutVendorSpecificExtension: TraceDepth = TraceDepth.mediumWithoutVendorSpecificExtension; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_maximumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const TraceDepth_maximumWithoutVendorSpecificExtension: TraceDepth = TraceDepth.maximumWithoutVendorSpecificExtension; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maximumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const maximumWithoutVendorSpecificExtension: TraceDepth = TraceDepth.maximumWithoutVendorSpecificExtension; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TraceDepth: $.ASN1Decoder<TraceDepth> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceDepth
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TraceDepth (el: _Element): TraceDepth {
    if (!_cached_decoder_for_TraceDepth) { _cached_decoder_for_TraceDepth = $._decodeEnumerated; }
    return _cached_decoder_for_TraceDepth(el);
}

let _cached_encoder_for_TraceDepth: $.ASN1Encoder<TraceDepth> | null = null;

/**
 * @summary Encodes a(n) TraceDepth into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceDepth, encoded as an ASN.1 Element.
 */
export
function _encode_TraceDepth (value: TraceDepth, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TraceDepth) { _cached_encoder_for_TraceDepth = $._encodeEnumerated; }
    return _cached_encoder_for_TraceDepth(value, elGetter);
}


/* eslint-enable */
