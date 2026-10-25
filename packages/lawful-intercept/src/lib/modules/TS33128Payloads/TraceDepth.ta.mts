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
const TraceDepth = _enum_for_TraceDepth;

/**
 * @summary TraceDepth_minimum
 * @constant
 * @type {number}
 */
export
const TraceDepth_minimum = TraceDepth.minimum satisfies TraceDepth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary minimum
 * @constant
 * @type {number}
 */
export
const minimum = TraceDepth.minimum satisfies TraceDepth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_medium
 * @constant
 * @type {number}
 */
export
const TraceDepth_medium = TraceDepth.medium satisfies TraceDepth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary medium
 * @constant
 * @type {number}
 */
export
const medium = TraceDepth.medium satisfies TraceDepth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_maximum
 * @constant
 * @type {number}
 */
export
const TraceDepth_maximum = TraceDepth.maximum satisfies TraceDepth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maximum
 * @constant
 * @type {number}
 */
export
const maximum = TraceDepth.maximum satisfies TraceDepth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_minimumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const TraceDepth_minimumWithoutVendorSpecificExtension = TraceDepth.minimumWithoutVendorSpecificExtension satisfies TraceDepth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary minimumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const minimumWithoutVendorSpecificExtension = TraceDepth.minimumWithoutVendorSpecificExtension satisfies TraceDepth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_mediumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const TraceDepth_mediumWithoutVendorSpecificExtension = TraceDepth.mediumWithoutVendorSpecificExtension satisfies TraceDepth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mediumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const mediumWithoutVendorSpecificExtension = TraceDepth.mediumWithoutVendorSpecificExtension satisfies TraceDepth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TraceDepth_maximumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const TraceDepth_maximumWithoutVendorSpecificExtension = TraceDepth.maximumWithoutVendorSpecificExtension satisfies TraceDepth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary maximumWithoutVendorSpecificExtension
 * @constant
 * @type {number}
 */
export
const maximumWithoutVendorSpecificExtension = TraceDepth.maximumWithoutVendorSpecificExtension satisfies TraceDepth; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_TraceDepth: $.ASN1Decoder<TraceDepth> = $._decodeEnumerated;
export const _encode_TraceDepth: $.ASN1Encoder<TraceDepth> = $._encodeEnumerated;


/* eslint-enable */
