/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary TerminatingConditions
 * @description
 *
 * Conditions that end a voice-unit play/record. ECMA-285 §9.6.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminatingConditions  ::=  BIT STRING
 * {     durationExceeded         ( 0),
 *     dTMFDigitDetected         ( 1),
 *     endOfMessageDetected         ( 2),
 *     speechDetected             ( 3) }
 * ```
 */
export
type TerminatingConditions = BIT_STRING;

/**
 * @summary TerminatingConditions_durationExceeded
 * @description Stop when configured duration is exceeded. ECMA-285 §9.6.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TerminatingConditions_durationExceeded: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary durationExceeded
 * @description Alias of {@link TerminatingConditions_durationExceeded}.
 * @constant
 */
export
const durationExceeded: number = TerminatingConditions_durationExceeded; /* SHORT_NAMED_BIT */

/**
 * @summary TerminatingConditions_dTMFDigitDetected
 * @description Stop when a DTMF digit is detected. ECMA-285 §9.6.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TerminatingConditions_dTMFDigitDetected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary dTMFDigitDetected
 * @description Alias of {@link TerminatingConditions_dTMFDigitDetected}.
 * @constant
 */
export
const dTMFDigitDetected: number = TerminatingConditions_dTMFDigitDetected; /* SHORT_NAMED_BIT */

/**
 * @summary TerminatingConditions_endOfMessageDetected
 * @description Stop when end of message is detected. ECMA-285 §9.6.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TerminatingConditions_endOfMessageDetected: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary endOfMessageDetected
 * @description Alias of {@link TerminatingConditions_endOfMessageDetected}.
 * @constant
 */
export
const endOfMessageDetected: number = TerminatingConditions_endOfMessageDetected; /* SHORT_NAMED_BIT */

/**
 * @summary TerminatingConditions_speechDetected
 * @description Stop when speech is detected. ECMA-285 §9.6.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const TerminatingConditions_speechDetected: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary speechDetected
 * @description Alias of {@link TerminatingConditions_speechDetected}.
 * @constant
 */
export
const speechDetected: number = TerminatingConditions_speechDetected; /* SHORT_NAMED_BIT */

let _cached_decoder_for_TerminatingConditions: $.ASN1Decoder<TerminatingConditions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminatingConditions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminatingConditions (el: _Element): TerminatingConditions {
    if (!_cached_decoder_for_TerminatingConditions) { _cached_decoder_for_TerminatingConditions = $._decodeBitString; }
    return _cached_decoder_for_TerminatingConditions(el);
}

let _cached_encoder_for_TerminatingConditions: $.ASN1Encoder<TerminatingConditions> | null = null;

/**
 * @summary Encodes a(n) TerminatingConditions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminatingConditions, encoded as an ASN.1 Element.
 */
export
function _encode_TerminatingConditions (value: TerminatingConditions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminatingConditions) { _cached_encoder_for_TerminatingConditions = $._encodeBitString; }
    return _cached_encoder_for_TerminatingConditions(value, elGetter);
}


/* eslint-enable */
