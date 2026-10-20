/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary APNRateControlParameters_rateControlTimeUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APNRateControlParameters-rateControlTimeUnit ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
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
const APNRateControlParameters_rateControlTimeUnit_unrestricted: APNRateControlParameters_rateControlTimeUnit = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_unrestricted
 * @constant
 * @type {number}
 */
export
const unrestricted: APNRateControlParameters_rateControlTimeUnit = APNRateControlParameters_rateControlTimeUnit_unrestricted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_minute
 * @constant
 * @type {number}
 */
export
const APNRateControlParameters_rateControlTimeUnit_minute: APNRateControlParameters_rateControlTimeUnit = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_minute
 * @constant
 * @type {number}
 */
export
const minute: APNRateControlParameters_rateControlTimeUnit = APNRateControlParameters_rateControlTimeUnit_minute; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_hour
 * @constant
 * @type {number}
 */
export
const APNRateControlParameters_rateControlTimeUnit_hour: APNRateControlParameters_rateControlTimeUnit = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_hour
 * @constant
 * @type {number}
 */
export
const hour: APNRateControlParameters_rateControlTimeUnit = APNRateControlParameters_rateControlTimeUnit_hour; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_day
 * @constant
 * @type {number}
 */
export
const APNRateControlParameters_rateControlTimeUnit_day: APNRateControlParameters_rateControlTimeUnit = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_day
 * @constant
 * @type {number}
 */
export
const day: APNRateControlParameters_rateControlTimeUnit = APNRateControlParameters_rateControlTimeUnit_day; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_week
 * @constant
 * @type {number}
 */
export
const APNRateControlParameters_rateControlTimeUnit_week: APNRateControlParameters_rateControlTimeUnit = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary APNRateControlParameters_rateControlTimeUnit_week
 * @constant
 * @type {number}
 */
export
const week: APNRateControlParameters_rateControlTimeUnit = APNRateControlParameters_rateControlTimeUnit_week; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_APNRateControlParameters_rateControlTimeUnit: $.ASN1Decoder<APNRateControlParameters_rateControlTimeUnit> = $._decodeInteger;

export
const _encode_APNRateControlParameters_rateControlTimeUnit: $.ASN1Encoder<APNRateControlParameters_rateControlTimeUnit> = $._encodeInteger;

/* eslint-enable */
