/* eslint-disable */
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
const TraceDepth: typeof _enum_for_TraceDepth = _enum_for_TraceDepth;

/**
 * @summary TraceDepth_minimum
 * @constant
 * @type {number}
 */
export
const TraceDepth_minimum: _enum_for_TraceDepth.minimum = TraceDepth.minimum; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary minimum
 * @constant
 * @type {number}
 */
export
const minimum: _enum_for_TraceDepth.minimum = TraceDepth.minimum; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_medium
 * @constant
 * @type {number}
 */
export
const TraceDepth_medium: _enum_for_TraceDepth.medium = TraceDepth.medium; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary medium
 * @constant
 * @type {number}
 */
export
const medium: _enum_for_TraceDepth.medium = TraceDepth.medium; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_maximum
 * @constant
 * @type {number}
 */
export
const TraceDepth_maximum: _enum_for_TraceDepth.maximum = TraceDepth.maximum; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maximum
 * @constant
 * @type {number}
 */
export
const maximum: _enum_for_TraceDepth.maximum = TraceDepth.maximum; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_minimumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const TraceDepth_minimumWithoutVendorSpecificExtension: _enum_for_TraceDepth.minimumWithoutVendorSpecificExtension = TraceDepth.minimumWithoutVendorSpecificExtension; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary minimumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const minimumWithoutVendorSpecificExtension: _enum_for_TraceDepth.minimumWithoutVendorSpecificExtension = TraceDepth.minimumWithoutVendorSpecificExtension; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_mediumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const TraceDepth_mediumWithoutVendorSpecificExtension: _enum_for_TraceDepth.mediumWithoutVendorSpecificExtension = TraceDepth.mediumWithoutVendorSpecificExtension; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mediumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const mediumWithoutVendorSpecificExtension: _enum_for_TraceDepth.mediumWithoutVendorSpecificExtension = TraceDepth.mediumWithoutVendorSpecificExtension; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_maximumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const TraceDepth_maximumWithoutVendorSpecificExtension: _enum_for_TraceDepth.maximumWithoutVendorSpecificExtension = TraceDepth.maximumWithoutVendorSpecificExtension; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maximumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const maximumWithoutVendorSpecificExtension: _enum_for_TraceDepth.maximumWithoutVendorSpecificExtension = TraceDepth.maximumWithoutVendorSpecificExtension; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TraceDepth: $.ASN1Decoder<TraceDepth> = $._decodeEnumerated;
export const _encode_TraceDepth: $.ASN1Encoder<TraceDepth> = $._encodeEnumerated;


/* eslint-enable */
