/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSPeriodFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSPeriodFormat  ::=  ENUMERATED
 * {
 *     absolute(1),
 *     relative(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSPeriodFormat {
    absolute = 1,
    relative = 2,
}

/**
 * @summary MMSPeriodFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSPeriodFormat  ::=  ENUMERATED
 * {
 *     absolute(1),
 *     relative(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSPeriodFormat = _enum_for_MMSPeriodFormat;

/**
 * @summary MMSPeriodFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSPeriodFormat  ::=  ENUMERATED
 * {
 *     absolute(1),
 *     relative(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSPeriodFormat: typeof _enum_for_MMSPeriodFormat = _enum_for_MMSPeriodFormat;

/**
 * @summary MMSPeriodFormat_absolute
 * @constant
 * @type {number}
 */
export
const MMSPeriodFormat_absolute: _enum_for_MMSPeriodFormat.absolute = MMSPeriodFormat.absolute; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary absolute
 * @constant
 * @type {number}
 */
export
const absolute: _enum_for_MMSPeriodFormat.absolute = MMSPeriodFormat.absolute; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSPeriodFormat_relative
 * @constant
 * @type {number}
 */
export
const MMSPeriodFormat_relative: _enum_for_MMSPeriodFormat.relative = MMSPeriodFormat.relative; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary relative
 * @constant
 * @type {number}
 */
export
const relative: _enum_for_MMSPeriodFormat.relative = MMSPeriodFormat.relative; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSPeriodFormat: $.ASN1Decoder<MMSPeriodFormat> = $._decodeEnumerated;
export const _encode_MMSPeriodFormat: $.ASN1Encoder<MMSPeriodFormat> = $._encodeEnumerated;


/* eslint-enable */
