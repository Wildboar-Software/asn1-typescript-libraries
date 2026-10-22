/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MaximumBitRate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaximumBitRate  ::=  ENUMERATED {
 *    mbr14400BitsPerSecond    ( 1 ),
 *    mbr28800BitsPerSecond    ( 2 ),
 *    mbr32000BitsPerSecond    ( 3 ),
 *    mbr33600BitsPerSecond    ( 4 ),
 *    mbr56000BitsPerSecond    ( 5 ),
 *    mbr57600BitsPerSecond    ( 6 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MaximumBitRate {
    mbr14400BitsPerSecond = 1,
    mbr28800BitsPerSecond = 2,
    mbr32000BitsPerSecond = 3,
    mbr33600BitsPerSecond = 4,
    mbr56000BitsPerSecond = 5,
    mbr57600BitsPerSecond = 6,
}

/**
 * @summary MaximumBitRate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaximumBitRate  ::=  ENUMERATED {
 *    mbr14400BitsPerSecond    ( 1 ),
 *    mbr28800BitsPerSecond    ( 2 ),
 *    mbr32000BitsPerSecond    ( 3 ),
 *    mbr33600BitsPerSecond    ( 4 ),
 *    mbr56000BitsPerSecond    ( 5 ),
 *    mbr57600BitsPerSecond    ( 6 ) }
 * ```
 * 
 * @enum {number}
 */
export
type MaximumBitRate = _enum_for_MaximumBitRate;

/**
 * @summary MaximumBitRate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaximumBitRate  ::=  ENUMERATED {
 *    mbr14400BitsPerSecond    ( 1 ),
 *    mbr28800BitsPerSecond    ( 2 ),
 *    mbr32000BitsPerSecond    ( 3 ),
 *    mbr33600BitsPerSecond    ( 4 ),
 *    mbr56000BitsPerSecond    ( 5 ),
 *    mbr57600BitsPerSecond    ( 6 ) }
 * ```
 * 
 * @enum {number}
 */
export
const MaximumBitRate = _enum_for_MaximumBitRate;

/**
 * @summary MaximumBitRate_mbr14400BitsPerSecond
 * @constant
 * @type {number}
 */
export
const MaximumBitRate_mbr14400BitsPerSecond: MaximumBitRate = MaximumBitRate.mbr14400BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mbr14400BitsPerSecond
 * @constant
 * @type {number}
 */
export
const mbr14400BitsPerSecond: MaximumBitRate = MaximumBitRate.mbr14400BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MaximumBitRate_mbr28800BitsPerSecond
 * @constant
 * @type {number}
 */
export
const MaximumBitRate_mbr28800BitsPerSecond: MaximumBitRate = MaximumBitRate.mbr28800BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mbr28800BitsPerSecond
 * @constant
 * @type {number}
 */
export
const mbr28800BitsPerSecond: MaximumBitRate = MaximumBitRate.mbr28800BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MaximumBitRate_mbr32000BitsPerSecond
 * @constant
 * @type {number}
 */
export
const MaximumBitRate_mbr32000BitsPerSecond: MaximumBitRate = MaximumBitRate.mbr32000BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mbr32000BitsPerSecond
 * @constant
 * @type {number}
 */
export
const mbr32000BitsPerSecond: MaximumBitRate = MaximumBitRate.mbr32000BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MaximumBitRate_mbr33600BitsPerSecond
 * @constant
 * @type {number}
 */
export
const MaximumBitRate_mbr33600BitsPerSecond: MaximumBitRate = MaximumBitRate.mbr33600BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mbr33600BitsPerSecond
 * @constant
 * @type {number}
 */
export
const mbr33600BitsPerSecond: MaximumBitRate = MaximumBitRate.mbr33600BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MaximumBitRate_mbr56000BitsPerSecond
 * @constant
 * @type {number}
 */
export
const MaximumBitRate_mbr56000BitsPerSecond: MaximumBitRate = MaximumBitRate.mbr56000BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mbr56000BitsPerSecond
 * @constant
 * @type {number}
 */
export
const mbr56000BitsPerSecond: MaximumBitRate = MaximumBitRate.mbr56000BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MaximumBitRate_mbr57600BitsPerSecond
 * @constant
 * @type {number}
 */
export
const MaximumBitRate_mbr57600BitsPerSecond: MaximumBitRate = MaximumBitRate.mbr57600BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mbr57600BitsPerSecond
 * @constant
 * @type {number}
 */
export
const mbr57600BitsPerSecond: MaximumBitRate = MaximumBitRate.mbr57600BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MaximumBitRate: $.ASN1Decoder<MaximumBitRate> = $._decodeEnumerated;

export
const _encode_MaximumBitRate: $.ASN1Encoder<MaximumBitRate> = $._encodeEnumerated;

/* eslint-enable */
