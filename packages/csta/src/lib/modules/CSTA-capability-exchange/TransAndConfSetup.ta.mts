/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary TransAndConfSetup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransAndConfSetup  ::=  BIT STRING
 * {     consultationCall             ( 0),
 *     holdCallMakeCall             ( 1),
 *     alternateCall                 ( 2),
 *     twoCallsInHold                 ( 3),
 *     twoCallsInConnected             ( 4) }
 * ```
 */
export
type TransAndConfSetup = BIT_STRING;

/**
 * @summary TransAndConfSetup_consultationCall
 * @constant
 */
export
const TransAndConfSetup_consultationCall: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary consultationCall
 * @constant
 */
export
const consultationCall: number = TransAndConfSetup_consultationCall; /* SHORT_NAMED_BIT */

/**
 * @summary TransAndConfSetup_holdCallMakeCall
 * @constant
 */
export
const TransAndConfSetup_holdCallMakeCall: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary holdCallMakeCall
 * @constant
 */
export
const holdCallMakeCall: number = TransAndConfSetup_holdCallMakeCall; /* SHORT_NAMED_BIT */

/**
 * @summary TransAndConfSetup_alternateCall
 * @constant
 */
export
const TransAndConfSetup_alternateCall: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary alternateCall
 * @constant
 */
export
const alternateCall: number = TransAndConfSetup_alternateCall; /* SHORT_NAMED_BIT */

/**
 * @summary TransAndConfSetup_twoCallsInHold
 * @constant
 */
export
const TransAndConfSetup_twoCallsInHold: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary twoCallsInHold
 * @constant
 */
export
const twoCallsInHold: number = TransAndConfSetup_twoCallsInHold; /* SHORT_NAMED_BIT */

/**
 * @summary TransAndConfSetup_twoCallsInConnected
 * @constant
 */
export
const TransAndConfSetup_twoCallsInConnected: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary twoCallsInConnected
 * @constant
 */
export
const twoCallsInConnected: number = TransAndConfSetup_twoCallsInConnected; /* SHORT_NAMED_BIT */

let _cached_decoder_for_TransAndConfSetup: $.ASN1Decoder<TransAndConfSetup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransAndConfSetup
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransAndConfSetup (el: _Element): TransAndConfSetup {
    if (!_cached_decoder_for_TransAndConfSetup) { _cached_decoder_for_TransAndConfSetup = $._decodeBitString; }
    return _cached_decoder_for_TransAndConfSetup(el);
}

let _cached_encoder_for_TransAndConfSetup: $.ASN1Encoder<TransAndConfSetup> | null = null;

/**
 * @summary Encodes a(n) TransAndConfSetup into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransAndConfSetup, encoded as an ASN.1 Element.
 */
export
function _encode_TransAndConfSetup (value: TransAndConfSetup, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransAndConfSetup) { _cached_encoder_for_TransAndConfSetup = $._encodeBitString; }
    return _cached_encoder_for_TransAndConfSetup(value, elGetter);
}


/* eslint-enable */
