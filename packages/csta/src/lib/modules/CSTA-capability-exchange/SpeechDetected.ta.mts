/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SpeechDetected
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpeechDetected  ::=  BIT STRING
 * {     resource                 ( 0),     -- optional parameters
 *     cause                    ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type SpeechDetected = BIT_STRING;

/**
 * @summary SpeechDetected_resource
 * @constant
 */
export
const SpeechDetected_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = SpeechDetected_resource; /* SHORT_NAMED_BIT */

/**
 * @summary SpeechDetected_cause
 * @constant
 */
export
const SpeechDetected_cause: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = SpeechDetected_cause; /* SHORT_NAMED_BIT */

/**
 * @summary SpeechDetected_servicesPermitted
 * @constant
 */
export
const SpeechDetected_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = SpeechDetected_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary SpeechDetected_privateData
 * @constant
 */
export
const SpeechDetected_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SpeechDetected_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SpeechDetected: $.ASN1Decoder<SpeechDetected> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpeechDetected
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpeechDetected (el: _Element): SpeechDetected {
    if (!_cached_decoder_for_SpeechDetected) { _cached_decoder_for_SpeechDetected = $._decodeBitString; }
    return _cached_decoder_for_SpeechDetected(el);
}

let _cached_encoder_for_SpeechDetected: $.ASN1Encoder<SpeechDetected> | null = null;

/**
 * @summary Encodes a(n) SpeechDetected into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpeechDetected, encoded as an ASN.1 Element.
 */
export
function _encode_SpeechDetected (value: SpeechDetected, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpeechDetected) { _cached_encoder_for_SpeechDetected = $._encodeBitString; }
    return _cached_encoder_for_SpeechDetected(value, elGetter);
}


/* eslint-enable */
