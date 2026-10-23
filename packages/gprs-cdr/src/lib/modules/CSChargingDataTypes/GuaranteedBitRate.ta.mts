/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GuaranteedBitRate
 * @description
 *
 * This field contains the Guaranteed Bit Rate based on the FNUR for
 * transparent and Wanted AIUR for non-transparent CS data services based on
 * the described mapping in TS 27.001 [213]. The Guaranteed Bit Rate may be
 * used to facilitate admission control based on available resources, and for
 * resource allocation within UMTS. The bit-rate of the UMTS bearer service
 * shall guarantee to the user or applications refer TS 22.002 [102].
 * Operator may choose any of the possible values less or equal to wanted
 * AIUR (Air Interface User Rate). (If WAIUR is less or equal to 14,4 kbit/s
 * then Guaranteed Bit Rate and Maximum Bit Rate shall be set to 14,4
 * kbit/s).
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.29.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GuaranteedBitRate  ::=  ENUMERATED {
 *    gbr14400BitsPerSecond    ( 1 ),
 *    gbr28800BitsPerSecond    ( 2 ),
 *    gbr32000BitsPerSecond    ( 3 ),
 *    gbr33600BitsPerSecond    ( 4 ),
 *    gbr56000BitsPerSecond    ( 5 ),
 *    gbr57600BitsPerSecond    ( 6 ),
 *    gbr64000BitsPerSecond    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_GuaranteedBitRate {
    gbr14400BitsPerSecond = 1,
    gbr28800BitsPerSecond = 2,
    gbr32000BitsPerSecond = 3,
    gbr33600BitsPerSecond = 4,
    gbr56000BitsPerSecond = 5,
    gbr57600BitsPerSecond = 6,
    gbr64000BitsPerSecond = 7,
}

/**
 * @summary GuaranteedBitRate
 * @description
 *
 * This field contains the Guaranteed Bit Rate based on the FNUR for
 * transparent and Wanted AIUR for non-transparent CS data services based on
 * the described mapping in TS 27.001 [213]. The Guaranteed Bit Rate may be
 * used to facilitate admission control based on available resources, and for
 * resource allocation within UMTS. The bit-rate of the UMTS bearer service
 * shall guarantee to the user or applications refer TS 22.002 [102].
 * Operator may choose any of the possible values less or equal to wanted
 * AIUR (Air Interface User Rate). (If WAIUR is less or equal to 14,4 kbit/s
 * then Guaranteed Bit Rate and Maximum Bit Rate shall be set to 14,4
 * kbit/s).
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.29.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GuaranteedBitRate  ::=  ENUMERATED {
 *    gbr14400BitsPerSecond    ( 1 ),
 *    gbr28800BitsPerSecond    ( 2 ),
 *    gbr32000BitsPerSecond    ( 3 ),
 *    gbr33600BitsPerSecond    ( 4 ),
 *    gbr56000BitsPerSecond    ( 5 ),
 *    gbr57600BitsPerSecond    ( 6 ),
 *    gbr64000BitsPerSecond    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
type GuaranteedBitRate = _enum_for_GuaranteedBitRate;

/**
 * @summary GuaranteedBitRate
 * @description
 *
 * This field contains the Guaranteed Bit Rate based on the FNUR for
 * transparent and Wanted AIUR for non-transparent CS data services based on
 * the described mapping in TS 27.001 [213]. The Guaranteed Bit Rate may be
 * used to facilitate admission control based on available resources, and for
 * resource allocation within UMTS. The bit-rate of the UMTS bearer service
 * shall guarantee to the user or applications refer TS 22.002 [102].
 * Operator may choose any of the possible values less or equal to wanted
 * AIUR (Air Interface User Rate). (If WAIUR is less or equal to 14,4 kbit/s
 * then Guaranteed Bit Rate and Maximum Bit Rate shall be set to 14,4
 * kbit/s).
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.29.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GuaranteedBitRate  ::=  ENUMERATED {
 *    gbr14400BitsPerSecond    ( 1 ),
 *    gbr28800BitsPerSecond    ( 2 ),
 *    gbr32000BitsPerSecond    ( 3 ),
 *    gbr33600BitsPerSecond    ( 4 ),
 *    gbr56000BitsPerSecond    ( 5 ),
 *    gbr57600BitsPerSecond    ( 6 ),
 *    gbr64000BitsPerSecond    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
const GuaranteedBitRate = _enum_for_GuaranteedBitRate;

/**
 * @summary GuaranteedBitRate_gbr14400BitsPerSecond
 * @constant
 * @type {number}
 */
export
const GuaranteedBitRate_gbr14400BitsPerSecond: GuaranteedBitRate = GuaranteedBitRate.gbr14400BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gbr14400BitsPerSecond
 * @constant
 * @type {number}
 */
export
const gbr14400BitsPerSecond: GuaranteedBitRate = GuaranteedBitRate.gbr14400BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GuaranteedBitRate_gbr28800BitsPerSecond
 * @constant
 * @type {number}
 */
export
const GuaranteedBitRate_gbr28800BitsPerSecond: GuaranteedBitRate = GuaranteedBitRate.gbr28800BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gbr28800BitsPerSecond
 * @constant
 * @type {number}
 */
export
const gbr28800BitsPerSecond: GuaranteedBitRate = GuaranteedBitRate.gbr28800BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GuaranteedBitRate_gbr32000BitsPerSecond
 * @constant
 * @type {number}
 */
export
const GuaranteedBitRate_gbr32000BitsPerSecond: GuaranteedBitRate = GuaranteedBitRate.gbr32000BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gbr32000BitsPerSecond
 * @constant
 * @type {number}
 */
export
const gbr32000BitsPerSecond: GuaranteedBitRate = GuaranteedBitRate.gbr32000BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GuaranteedBitRate_gbr33600BitsPerSecond
 * @constant
 * @type {number}
 */
export
const GuaranteedBitRate_gbr33600BitsPerSecond: GuaranteedBitRate = GuaranteedBitRate.gbr33600BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gbr33600BitsPerSecond
 * @constant
 * @type {number}
 */
export
const gbr33600BitsPerSecond: GuaranteedBitRate = GuaranteedBitRate.gbr33600BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GuaranteedBitRate_gbr56000BitsPerSecond
 * @constant
 * @type {number}
 */
export
const GuaranteedBitRate_gbr56000BitsPerSecond: GuaranteedBitRate = GuaranteedBitRate.gbr56000BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gbr56000BitsPerSecond
 * @constant
 * @type {number}
 */
export
const gbr56000BitsPerSecond: GuaranteedBitRate = GuaranteedBitRate.gbr56000BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GuaranteedBitRate_gbr57600BitsPerSecond
 * @constant
 * @type {number}
 */
export
const GuaranteedBitRate_gbr57600BitsPerSecond: GuaranteedBitRate = GuaranteedBitRate.gbr57600BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gbr57600BitsPerSecond
 * @constant
 * @type {number}
 */
export
const gbr57600BitsPerSecond: GuaranteedBitRate = GuaranteedBitRate.gbr57600BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GuaranteedBitRate_gbr64000BitsPerSecond
 * @constant
 * @type {number}
 */
export
const GuaranteedBitRate_gbr64000BitsPerSecond: GuaranteedBitRate = GuaranteedBitRate.gbr64000BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gbr64000BitsPerSecond
 * @constant
 * @type {number}
 */
export
const gbr64000BitsPerSecond: GuaranteedBitRate = GuaranteedBitRate.gbr64000BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_GuaranteedBitRate: $.ASN1Decoder<GuaranteedBitRate> = $._decodeEnumerated;

export
const _encode_GuaranteedBitRate: $.ASN1Encoder<GuaranteedBitRate> = $._encodeEnumerated;

/* eslint-enable */
