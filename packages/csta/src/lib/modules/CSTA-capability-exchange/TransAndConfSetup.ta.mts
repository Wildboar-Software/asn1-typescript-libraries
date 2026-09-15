/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary TransAndConfSetup
 * @description
 * Ways the SF can set up a conference or transfer. Absent from Get Switching
 * Function Capabilities means only Consultation Call (ECMA-269 §13.1.4.2.1
 * Table 13-9, ECMA-285 §9.10).
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
 * @description
 * Bit set means the SF supports set up via Consultation Call (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const TransAndConfSetup_consultationCall: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary consultationCall
 * @constant
 * @description
 * Alias of `TransAndConfSetup_consultationCall`.
 */
export
const consultationCall: number = TransAndConfSetup_consultationCall; /* SHORT_NAMED_BIT */

/**
 * @summary TransAndConfSetup_holdCallMakeCall
 * @constant
 * @description
 * Bit set means the SF supports set up via Hold Call then Make Call (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const TransAndConfSetup_holdCallMakeCall: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary holdCallMakeCall
 * @constant
 * @description
 * Alias of `TransAndConfSetup_holdCallMakeCall`.
 */
export
const holdCallMakeCall: number = TransAndConfSetup_holdCallMakeCall; /* SHORT_NAMED_BIT */

/**
 * @summary TransAndConfSetup_alternateCall
 * @constant
 * @description
 * Bit set means the SF supports set up via Alternate Call (ECMA-269 §13.1.4.2.1
 * Table 13-9).
 */
export
const TransAndConfSetup_alternateCall: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary alternateCall
 * @constant
 * @description
 * Alias of `TransAndConfSetup_alternateCall`.
 */
export
const alternateCall: number = TransAndConfSetup_alternateCall; /* SHORT_NAMED_BIT */

/**
 * @summary TransAndConfSetup_twoCallsInHold
 * @constant
 * @description
 * Bit set means the SF supports two calls in the initial state of Hold
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const TransAndConfSetup_twoCallsInHold: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary twoCallsInHold
 * @constant
 * @description
 * Alias of `TransAndConfSetup_twoCallsInHold`.
 */
export
const twoCallsInHold: number = TransAndConfSetup_twoCallsInHold; /* SHORT_NAMED_BIT */

/**
 * @summary TransAndConfSetup_twoCallsInConnected
 * @constant
 * @description
 * Bit set means the SF supports two calls in the initial state of Connected
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const TransAndConfSetup_twoCallsInConnected: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary twoCallsInConnected
 * @constant
 * @description
 * Alias of `TransAndConfSetup_twoCallsInConnected`.
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
