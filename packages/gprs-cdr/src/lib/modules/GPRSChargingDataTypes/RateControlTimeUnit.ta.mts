/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RateControlTimeUnit
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RateControlTimeUnit  ::=  INTEGER {
 *    unrestricted    ( 0 ),
 *    minute          ( 1 ),
 *    hour            ( 2 ),
 *    day             ( 3 ),
 *    week            ( 4 )}
 * ```
 */
export
type RateControlTimeUnit = INTEGER;

/**
 * @summary RateControlTimeUnit_unrestricted
 * @constant
 * @type {number}
 */
export
const RateControlTimeUnit_unrestricted: 0 = 0 satisfies RateControlTimeUnit; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_unrestricted
 * @constant
 * @type {number}
 */
export
const unrestricted: 0 = RateControlTimeUnit_unrestricted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_minute
 * @constant
 * @type {number}
 */
export
const RateControlTimeUnit_minute: 1 = 1 satisfies RateControlTimeUnit; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_minute
 * @constant
 * @type {number}
 */
export
const minute: 1 = RateControlTimeUnit_minute; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_hour
 * @constant
 * @type {number}
 */
export
const RateControlTimeUnit_hour: 2 = 2 satisfies RateControlTimeUnit; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_hour
 * @constant
 * @type {number}
 */
export
const hour: 2 = RateControlTimeUnit_hour; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_day
 * @constant
 * @type {number}
 */
export
const RateControlTimeUnit_day: 3 = 3 satisfies RateControlTimeUnit; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_day
 * @constant
 * @type {number}
 */
export
const day: 3 = RateControlTimeUnit_day; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_week
 * @constant
 * @type {number}
 */
export
const RateControlTimeUnit_week: 4 = 4 satisfies RateControlTimeUnit; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_week
 * @constant
 * @type {number}
 */
export
const week: 4 = RateControlTimeUnit_week; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RateControlTimeUnit: $.ASN1Decoder<RateControlTimeUnit> = $._decodeInteger;

export
const _encode_RateControlTimeUnit: $.ASN1Encoder<RateControlTimeUnit> = $._encodeInteger;

/* eslint-enable */
