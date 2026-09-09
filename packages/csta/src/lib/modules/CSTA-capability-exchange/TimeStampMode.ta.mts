/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary TimeStampMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeStampMode  ::=  BIT STRING
 * {     allEvents                 ( 0),
 *     allAcks                 ( 1),
 *     allServReqs                 ( 2) }
 * ```
 */
export
type TimeStampMode = BIT_STRING;

/**
 * @summary TimeStampMode_allEvents
 * @constant
 */
export
const TimeStampMode_allEvents: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary allEvents
 * @constant
 */
export
const allEvents: number = TimeStampMode_allEvents; /* SHORT_NAMED_BIT */

/**
 * @summary TimeStampMode_allAcks
 * @constant
 */
export
const TimeStampMode_allAcks: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary allAcks
 * @constant
 */
export
const allAcks: number = TimeStampMode_allAcks; /* SHORT_NAMED_BIT */

/**
 * @summary TimeStampMode_allServReqs
 * @constant
 */
export
const TimeStampMode_allServReqs: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary allServReqs
 * @constant
 */
export
const allServReqs: number = TimeStampMode_allServReqs; /* SHORT_NAMED_BIT */

let _cached_decoder_for_TimeStampMode: $.ASN1Decoder<TimeStampMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeStampMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeStampMode (el: _Element): TimeStampMode {
    if (!_cached_decoder_for_TimeStampMode) { _cached_decoder_for_TimeStampMode = $._decodeBitString; }
    return _cached_decoder_for_TimeStampMode(el);
}

let _cached_encoder_for_TimeStampMode: $.ASN1Encoder<TimeStampMode> | null = null;

/**
 * @summary Encodes a(n) TimeStampMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeStampMode, encoded as an ASN.1 Element.
 */
export
function _encode_TimeStampMode (value: TimeStampMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeStampMode) { _cached_encoder_for_TimeStampMode = $._encodeBitString; }
    return _cached_encoder_for_TimeStampMode(value, elGetter);
}


/* eslint-enable */
