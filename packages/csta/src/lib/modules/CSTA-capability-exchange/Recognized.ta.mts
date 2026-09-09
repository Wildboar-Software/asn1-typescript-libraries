/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Recognized
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Recognized  ::=  BIT STRING
 * {     resource                 ( 0),     -- optional parameters
 *     cause                    ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type Recognized = BIT_STRING;

/**
 * @summary Recognized_resource
 * @constant
 */
export
const Recognized_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = Recognized_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Recognized_cause
 * @constant
 */
export
const Recognized_cause: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = Recognized_cause; /* SHORT_NAMED_BIT */

/**
 * @summary Recognized_servicesPermitted
 * @constant
 */
export
const Recognized_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = Recognized_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Recognized_privateData
 * @constant
 */
export
const Recognized_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Recognized_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Recognized: $.ASN1Decoder<Recognized> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Recognized
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Recognized (el: _Element): Recognized {
    if (!_cached_decoder_for_Recognized) { _cached_decoder_for_Recognized = $._decodeBitString; }
    return _cached_decoder_for_Recognized(el);
}

let _cached_encoder_for_Recognized: $.ASN1Encoder<Recognized> | null = null;

/**
 * @summary Encodes a(n) Recognized into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Recognized, encoded as an ASN.1 Element.
 */
export
function _encode_Recognized (value: Recognized, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Recognized) { _cached_encoder_for_Recognized = $._encodeBitString; }
    return _cached_encoder_for_Recognized(value, elGetter);
}


/* eslint-enable */
