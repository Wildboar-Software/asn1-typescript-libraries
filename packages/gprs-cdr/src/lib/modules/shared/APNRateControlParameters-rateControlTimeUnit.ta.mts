/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary APNRateControlParameters_rateControlTimeUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APNRateControlParameters-rateControlTimeUnit ::= INTEGER {
 *    unrestricted    ( 0 ),
 *    minute          ( 1 ),
 *    hour            ( 2 ),
 *    day             ( 3 ),
 *    week            ( 4 )
 * }
 * ```
 */
export
type APNRateControlParameters_rateControlTimeUnit = INTEGER;

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_unrestricted
 * @constant
 * @type {number}
 */
export
const APNRateControlParameters_rateControlTimeUnit_unrestricted: 0 = 0 satisfies APNRateControlParameters_rateControlTimeUnit; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_unrestricted
 * @constant
 * @type {number}
 */
export
const unrestricted: 0 = APNRateControlParameters_rateControlTimeUnit_unrestricted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_minute
 * @constant
 * @type {number}
 */
export
const APNRateControlParameters_rateControlTimeUnit_minute: 1 = 1 satisfies APNRateControlParameters_rateControlTimeUnit; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_minute
 * @constant
 * @type {number}
 */
export
const minute: 1 = APNRateControlParameters_rateControlTimeUnit_minute; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_hour
 * @constant
 * @type {number}
 */
export
const APNRateControlParameters_rateControlTimeUnit_hour: 2 = 2 satisfies APNRateControlParameters_rateControlTimeUnit; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_hour
 * @constant
 * @type {number}
 */
export
const hour: 2 = APNRateControlParameters_rateControlTimeUnit_hour; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_day
 * @constant
 * @type {number}
 */
export
const APNRateControlParameters_rateControlTimeUnit_day: 3 = 3 satisfies APNRateControlParameters_rateControlTimeUnit; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_day
 * @constant
 * @type {number}
 */
export
const day: 3 = APNRateControlParameters_rateControlTimeUnit_day; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_week
 * @constant
 * @type {number}
 */
export
const APNRateControlParameters_rateControlTimeUnit_week: 4 = 4 satisfies APNRateControlParameters_rateControlTimeUnit; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_week
 * @constant
 * @type {number}
 */
export
const week: 4 = APNRateControlParameters_rateControlTimeUnit_week; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_APNRateControlParameters_rateControlTimeUnit: $.ASN1Decoder<APNRateControlParameters_rateControlTimeUnit> = $._decodeInteger;

export
const _encode_APNRateControlParameters_rateControlTimeUnit: $.ASN1Encoder<APNRateControlParameters_rateControlTimeUnit> = $._encodeInteger;

/* eslint-enable */
