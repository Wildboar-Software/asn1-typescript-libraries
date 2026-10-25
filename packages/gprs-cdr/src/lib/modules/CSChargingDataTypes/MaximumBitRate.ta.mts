/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MaximumBitRate
 * @description
 *
 * This field contains the Maximum Bit Rate based on the FNUR (Fixed Network
 * User Rate) for transparent and WAIUR(Wanted Air Interface User Rate) for
 * non-transparent CS data services based on the described mapping in TS
 * 27.001 [213]. The parameter can be used to make code reservations in the
 * downlink of the radio interface for the UMTS bearer service (BS20 and
 * BS30) refer TS 22.002 [102]. Its purpose is: Maximum bit rate is set to
 * the highest value WAIUR (If WAIUR is less or equal to 14.4 kbit/s then
 * Guaranteed Bit Rate and Maximum Bit Rate shall be set to 14.4 kbit/s).
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.51.
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
 * This field contains the Maximum Bit Rate based on the FNUR (Fixed Network
 * User Rate) for transparent and WAIUR(Wanted Air Interface User Rate) for
 * non-transparent CS data services based on the described mapping in TS
 * 27.001 [213]. The parameter can be used to make code reservations in the
 * downlink of the radio interface for the UMTS bearer service (BS20 and
 * BS30) refer TS 22.002 [102]. Its purpose is: Maximum bit rate is set to
 * the highest value WAIUR (If WAIUR is less or equal to 14.4 kbit/s then
 * Guaranteed Bit Rate and Maximum Bit Rate shall be set to 14.4 kbit/s).
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.51.
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
 * This field contains the Maximum Bit Rate based on the FNUR (Fixed Network
 * User Rate) for transparent and WAIUR(Wanted Air Interface User Rate) for
 * non-transparent CS data services based on the described mapping in TS
 * 27.001 [213]. The parameter can be used to make code reservations in the
 * downlink of the radio interface for the UMTS bearer service (BS20 and
 * BS30) refer TS 22.002 [102]. Its purpose is: Maximum bit rate is set to
 * the highest value WAIUR (If WAIUR is less or equal to 14.4 kbit/s then
 * Guaranteed Bit Rate and Maximum Bit Rate shall be set to 14.4 kbit/s).
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.51.
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
const MaximumBitRate_mbr14400BitsPerSecond = MaximumBitRate.mbr14400BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mbr14400BitsPerSecond
 * @constant
 * @type {number}
 */
export
const mbr14400BitsPerSecond = MaximumBitRate.mbr14400BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MaximumBitRate_mbr28800BitsPerSecond
 * @constant
 * @type {number}
 */
export
const MaximumBitRate_mbr28800BitsPerSecond = MaximumBitRate.mbr28800BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mbr28800BitsPerSecond
 * @constant
 * @type {number}
 */
export
const mbr28800BitsPerSecond = MaximumBitRate.mbr28800BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MaximumBitRate_mbr32000BitsPerSecond
 * @constant
 * @type {number}
 */
export
const MaximumBitRate_mbr32000BitsPerSecond = MaximumBitRate.mbr32000BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mbr32000BitsPerSecond
 * @constant
 * @type {number}
 */
export
const mbr32000BitsPerSecond = MaximumBitRate.mbr32000BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MaximumBitRate_mbr33600BitsPerSecond
 * @constant
 * @type {number}
 */
export
const MaximumBitRate_mbr33600BitsPerSecond = MaximumBitRate.mbr33600BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mbr33600BitsPerSecond
 * @constant
 * @type {number}
 */
export
const mbr33600BitsPerSecond = MaximumBitRate.mbr33600BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MaximumBitRate_mbr56000BitsPerSecond
 * @constant
 * @type {number}
 */
export
const MaximumBitRate_mbr56000BitsPerSecond = MaximumBitRate.mbr56000BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mbr56000BitsPerSecond
 * @constant
 * @type {number}
 */
export
const mbr56000BitsPerSecond = MaximumBitRate.mbr56000BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MaximumBitRate_mbr57600BitsPerSecond
 * @constant
 * @type {number}
 */
export
const MaximumBitRate_mbr57600BitsPerSecond = MaximumBitRate.mbr57600BitsPerSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mbr57600BitsPerSecond
 * @constant
 * @type {number}
 */
export
const mbr57600BitsPerSecond = MaximumBitRate.mbr57600BitsPerSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MaximumBitRate: $.ASN1Decoder<MaximumBitRate> = $._decodeEnumerated;

export
const _encode_MaximumBitRate: $.ASN1Encoder<MaximumBitRate> = $._encodeEnumerated;

/* eslint-enable */
