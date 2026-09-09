/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetDisplay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetDisplay  ::=  BIT STRING
 * {     displayID                 ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     characterSetASCII             ( 2),     -- optional parameters
 *     characterSetUnicode             ( 3),     -- optional parameters
 *     characterSetProprietary         ( 4),     -- optional parameters
 *     privateDataInAck             ( 5) }
 * ```
 */
export
type GetDisplay = BIT_STRING;

/**
 * @summary GetDisplay_displayID
 * @constant
 */
export
const GetDisplay_displayID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary displayID
 * @constant
 */
export
const displayID: number = GetDisplay_displayID; /* SHORT_NAMED_BIT */

/**
 * @summary GetDisplay_privateData
 * @constant
 */
export
const GetDisplay_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetDisplay_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetDisplay_characterSetASCII
 * @constant
 */
export
const GetDisplay_characterSetASCII: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary characterSetASCII
 * @constant
 */
export
const characterSetASCII: number = GetDisplay_characterSetASCII; /* SHORT_NAMED_BIT */

/**
 * @summary GetDisplay_characterSetUnicode
 * @constant
 */
export
const GetDisplay_characterSetUnicode: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary characterSetUnicode
 * @constant
 */
export
const characterSetUnicode: number = GetDisplay_characterSetUnicode; /* SHORT_NAMED_BIT */

/**
 * @summary GetDisplay_characterSetProprietary
 * @constant
 */
export
const GetDisplay_characterSetProprietary: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary characterSetProprietary
 * @constant
 */
export
const characterSetProprietary: number = GetDisplay_characterSetProprietary; /* SHORT_NAMED_BIT */

/**
 * @summary GetDisplay_privateDataInAck
 * @constant
 */
export
const GetDisplay_privateDataInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetDisplay_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetDisplay: $.ASN1Decoder<GetDisplay> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetDisplay
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetDisplay (el: _Element): GetDisplay {
    if (!_cached_decoder_for_GetDisplay) { _cached_decoder_for_GetDisplay = $._decodeBitString; }
    return _cached_decoder_for_GetDisplay(el);
}

let _cached_encoder_for_GetDisplay: $.ASN1Encoder<GetDisplay> | null = null;

/**
 * @summary Encodes a(n) GetDisplay into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetDisplay, encoded as an ASN.1 Element.
 */
export
function _encode_GetDisplay (value: GetDisplay, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetDisplay) { _cached_encoder_for_GetDisplay = $._encodeBitString; }
    return _cached_encoder_for_GetDisplay(value, elGetter);
}


/* eslint-enable */
