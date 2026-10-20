/* eslint-disable */
import {
    INTEGER
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
const RateControlTimeUnit_unrestricted: RateControlTimeUnit = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_unrestricted
 * @constant
 * @type {number}
 */
export
const unrestricted: RateControlTimeUnit = RateControlTimeUnit_unrestricted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_minute
 * @constant
 * @type {number}
 */
export
const RateControlTimeUnit_minute: RateControlTimeUnit = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_minute
 * @constant
 * @type {number}
 */
export
const minute: RateControlTimeUnit = RateControlTimeUnit_minute; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_hour
 * @constant
 * @type {number}
 */
export
const RateControlTimeUnit_hour: RateControlTimeUnit = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_hour
 * @constant
 * @type {number}
 */
export
const hour: RateControlTimeUnit = RateControlTimeUnit_hour; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_day
 * @constant
 * @type {number}
 */
export
const RateControlTimeUnit_day: RateControlTimeUnit = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_day
 * @constant
 * @type {number}
 */
export
const day: RateControlTimeUnit = RateControlTimeUnit_day; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_week
 * @constant
 * @type {number}
 */
export
const RateControlTimeUnit_week: RateControlTimeUnit = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RateControlTimeUnit_week
 * @constant
 * @type {number}
 */
export
const week: RateControlTimeUnit = RateControlTimeUnit_week; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RateControlTimeUnit: $.ASN1Decoder<RateControlTimeUnit> = $._decodeInteger;

export
const _encode_RateControlTimeUnit: $.ASN1Encoder<RateControlTimeUnit> = $._encodeInteger;

/* eslint-enable */
