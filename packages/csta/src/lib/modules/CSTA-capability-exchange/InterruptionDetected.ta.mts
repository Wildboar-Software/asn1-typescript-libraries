/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary InterruptionDetected
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterruptionDetected  ::=  BIT STRING
 * {     resource                 ( 0),     -- optional parameters
 *     cause                    ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type InterruptionDetected = BIT_STRING;

/**
 * @summary InterruptionDetected_resource
 * @constant
 */
export
const InterruptionDetected_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = InterruptionDetected_resource; /* SHORT_NAMED_BIT */

/**
 * @summary InterruptionDetected_cause
 * @constant
 */
export
const InterruptionDetected_cause: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = InterruptionDetected_cause; /* SHORT_NAMED_BIT */

/**
 * @summary InterruptionDetected_servicesPermitted
 * @constant
 */
export
const InterruptionDetected_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = InterruptionDetected_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary InterruptionDetected_privateData
 * @constant
 */
export
const InterruptionDetected_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = InterruptionDetected_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_InterruptionDetected: $.ASN1Decoder<InterruptionDetected> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InterruptionDetected
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InterruptionDetected (el: _Element): InterruptionDetected {
    if (!_cached_decoder_for_InterruptionDetected) { _cached_decoder_for_InterruptionDetected = $._decodeBitString; }
    return _cached_decoder_for_InterruptionDetected(el);
}

let _cached_encoder_for_InterruptionDetected: $.ASN1Encoder<InterruptionDetected> | null = null;

/**
 * @summary Encodes a(n) InterruptionDetected into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InterruptionDetected, encoded as an ASN.1 Element.
 */
export
function _encode_InterruptionDetected (value: InterruptionDetected, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InterruptionDetected) { _cached_encoder_for_InterruptionDetected = $._encodeBitString; }
    return _cached_encoder_for_InterruptionDetected(value, elGetter);
}


/* eslint-enable */
