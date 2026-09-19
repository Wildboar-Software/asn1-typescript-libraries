/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Period_months_bitMonth
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Period-months-bitMonth ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Period_months_bitMonth = BIT_STRING;

/**
 * @summary Period_months_bitMonth_january
 * @constant
 */
export
const Period_months_bitMonth_january: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary january
 * @constant
 */
export
const january: number = Period_months_bitMonth_january; /* SHORT_NAMED_BIT */

/**
 * @summary Period_months_bitMonth_february
 * @constant
 */
export
const Period_months_bitMonth_february: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary february
 * @constant
 */
export
const february: number = Period_months_bitMonth_february; /* SHORT_NAMED_BIT */

/**
 * @summary Period_months_bitMonth_march
 * @constant
 */
export
const Period_months_bitMonth_march: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary march
 * @constant
 */
export
const march: number = Period_months_bitMonth_march; /* SHORT_NAMED_BIT */

/**
 * @summary Period_months_bitMonth_april
 * @constant
 */
export
const Period_months_bitMonth_april: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary april
 * @constant
 */
export
const april: number = Period_months_bitMonth_april; /* SHORT_NAMED_BIT */

/**
 * @summary Period_months_bitMonth_may
 * @constant
 */
export
const Period_months_bitMonth_may: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary may
 * @constant
 */
export
const may: number = Period_months_bitMonth_may; /* SHORT_NAMED_BIT */

/**
 * @summary Period_months_bitMonth_june
 * @constant
 */
export
const Period_months_bitMonth_june: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary june
 * @constant
 */
export
const june: number = Period_months_bitMonth_june; /* SHORT_NAMED_BIT */

/**
 * @summary Period_months_bitMonth_july
 * @constant
 */
export
const Period_months_bitMonth_july: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary july
 * @constant
 */
export
const july: number = Period_months_bitMonth_july; /* SHORT_NAMED_BIT */

/**
 * @summary Period_months_bitMonth_august
 * @constant
 */
export
const Period_months_bitMonth_august: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary august
 * @constant
 */
export
const august: number = Period_months_bitMonth_august; /* SHORT_NAMED_BIT */

/**
 * @summary Period_months_bitMonth_september
 * @constant
 */
export
const Period_months_bitMonth_september: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary september
 * @constant
 */
export
const september: number = Period_months_bitMonth_september; /* SHORT_NAMED_BIT */

/**
 * @summary Period_months_bitMonth_october
 * @constant
 */
export
const Period_months_bitMonth_october: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary october
 * @constant
 */
export
const october: number = Period_months_bitMonth_october; /* SHORT_NAMED_BIT */

/**
 * @summary Period_months_bitMonth_november
 * @constant
 */
export
const Period_months_bitMonth_november: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary november
 * @constant
 */
export
const november: number = Period_months_bitMonth_november; /* SHORT_NAMED_BIT */

/**
 * @summary Period_months_bitMonth_december
 * @constant
 */
export
const Period_months_bitMonth_december: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary december
 * @constant
 */
export
const december: number = Period_months_bitMonth_december; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Period_months_bitMonth: $.ASN1Decoder<Period_months_bitMonth> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Period_months_bitMonth
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Period_months_bitMonth (el: _Element): Period_months_bitMonth {
    if (!_cached_decoder_for_Period_months_bitMonth) { _cached_decoder_for_Period_months_bitMonth = $._decodeBitString; }
    return _cached_decoder_for_Period_months_bitMonth(el);
}

let _cached_encoder_for_Period_months_bitMonth: $.ASN1Encoder<Period_months_bitMonth> | null = null;

/**
 * @summary Encodes a(n) Period_months_bitMonth into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period_months_bitMonth, encoded as an ASN.1 Element.
 */
export
function _encode_Period_months_bitMonth (value: Period_months_bitMonth, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Period_months_bitMonth) { _cached_encoder_for_Period_months_bitMonth = $._encodeBitString; }
    return _cached_encoder_for_Period_months_bitMonth(value, elGetter);
}


/* eslint-enable */
