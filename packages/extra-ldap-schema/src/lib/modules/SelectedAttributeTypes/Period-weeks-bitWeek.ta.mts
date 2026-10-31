/* eslint-disable */
import {
    type BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Period_weeks_bitWeek
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Period-weeks-bitWeek ::= BIT STRING {
 *   week1 (0),
 *   week2 (1),
 *   week3 (2),
 *   week4 (3),
 *   week5 (4) }
 * ```
 */
export
type Period_weeks_bitWeek = BIT_STRING;

/**
 * @summary Period_weeks_bitWeek_week1
 * @constant
 */
export
const Period_weeks_bitWeek_week1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary week1
 * @constant
 */
export
const week1: number = Period_weeks_bitWeek_week1; /* SHORT_NAMED_BIT */

/**
 * @summary Period_weeks_bitWeek_week2
 * @constant
 */
export
const Period_weeks_bitWeek_week2: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary week2
 * @constant
 */
export
const week2: number = Period_weeks_bitWeek_week2; /* SHORT_NAMED_BIT */

/**
 * @summary Period_weeks_bitWeek_week3
 * @constant
 */
export
const Period_weeks_bitWeek_week3: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary week3
 * @constant
 */
export
const week3: number = Period_weeks_bitWeek_week3; /* SHORT_NAMED_BIT */

/**
 * @summary Period_weeks_bitWeek_week4
 * @constant
 */
export
const Period_weeks_bitWeek_week4: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary week4
 * @constant
 */
export
const week4: number = Period_weeks_bitWeek_week4; /* SHORT_NAMED_BIT */

/**
 * @summary Period_weeks_bitWeek_week5
 * @constant
 */
export
const Period_weeks_bitWeek_week5: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary week5
 * @constant
 */
export
const week5: number = Period_weeks_bitWeek_week5; /* SHORT_NAMED_BIT */

export
const _decode_Period_weeks_bitWeek: $.ASN1Decoder<Period_weeks_bitWeek> = $._decodeBitString;

export
const _encode_Period_weeks_bitWeek: $.ASN1Encoder<Period_weeks_bitWeek> = $._encodeBitString;

/* eslint-enable */
