/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
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
const MMSPeriodFormat = _enum_for_MMSPeriodFormat;

/**
 * @summary MMSPeriodFormat_absolute
 * @constant
 * @type {number}
 */
export
const MMSPeriodFormat_absolute: MMSPeriodFormat = MMSPeriodFormat.absolute; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary absolute
 * @constant
 * @type {number}
 */
export
const absolute: MMSPeriodFormat = MMSPeriodFormat.absolute; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSPeriodFormat_relative
 * @constant
 * @type {number}
 */
export
const MMSPeriodFormat_relative: MMSPeriodFormat = MMSPeriodFormat.relative; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary relative
 * @constant
 * @type {number}
 */
export
const relative: MMSPeriodFormat = MMSPeriodFormat.relative; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) MMSPeriodFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MMSPeriodFormat = $._decodeEnumerated;

/**
 * @summary Encodes a(n) MMSPeriodFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSPeriodFormat, encoded as an ASN.1 Element.
 */
export const _encode_MMSPeriodFormat = $._encodeEnumerated;


/* eslint-enable */
