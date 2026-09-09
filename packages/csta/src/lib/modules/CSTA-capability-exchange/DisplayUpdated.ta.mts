/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DisplayUpdated
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisplayUpdated  ::=  BIT STRING
 * {     characterSetASCII             ( 0),     -- optional parameters
 *     characterSetUnicode             ( 1),     -- optional parameters
 *     characterSetProprietary         ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type DisplayUpdated = BIT_STRING;

/**
 * @summary DisplayUpdated_characterSetASCII
 * @constant
 */
export
const DisplayUpdated_characterSetASCII: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary characterSetASCII
 * @constant
 */
export
const characterSetASCII: number = DisplayUpdated_characterSetASCII; /* SHORT_NAMED_BIT */

/**
 * @summary DisplayUpdated_characterSetUnicode
 * @constant
 */
export
const DisplayUpdated_characterSetUnicode: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary characterSetUnicode
 * @constant
 */
export
const characterSetUnicode: number = DisplayUpdated_characterSetUnicode; /* SHORT_NAMED_BIT */

/**
 * @summary DisplayUpdated_characterSetProprietary
 * @constant
 */
export
const DisplayUpdated_characterSetProprietary: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary characterSetProprietary
 * @constant
 */
export
const characterSetProprietary: number = DisplayUpdated_characterSetProprietary; /* SHORT_NAMED_BIT */

/**
 * @summary DisplayUpdated_privateData
 * @constant
 */
export
const DisplayUpdated_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = DisplayUpdated_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DisplayUpdated: $.ASN1Decoder<DisplayUpdated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisplayUpdated
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisplayUpdated (el: _Element): DisplayUpdated {
    if (!_cached_decoder_for_DisplayUpdated) { _cached_decoder_for_DisplayUpdated = $._decodeBitString; }
    return _cached_decoder_for_DisplayUpdated(el);
}

let _cached_encoder_for_DisplayUpdated: $.ASN1Encoder<DisplayUpdated> | null = null;

/**
 * @summary Encodes a(n) DisplayUpdated into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayUpdated, encoded as an ASN.1 Element.
 */
export
function _encode_DisplayUpdated (value: DisplayUpdated, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisplayUpdated) { _cached_encoder_for_DisplayUpdated = $._encodeBitString; }
    return _cached_encoder_for_DisplayUpdated(value, elGetter);
}


/* eslint-enable */
