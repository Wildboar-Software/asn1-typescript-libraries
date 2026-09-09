/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Clear
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Clear  ::=  BIT STRING
 * {    resource                ( 0),     -- optional parameters
 *     privateData                ( 1),     -- optional parameters
 *     privateDataInAck            ( 2) }
 * ```
 */
export
type Clear = BIT_STRING;

/**
 * @summary Clear_resource
 * @constant
 */
export
const Clear_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = Clear_resource; /* SHORT_NAMED_BIT */

/**
 * @summary Clear_privateData
 * @constant
 */
export
const Clear_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Clear_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Clear_privateDataInAck
 * @constant
 */
export
const Clear_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = Clear_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Clear: $.ASN1Decoder<Clear> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Clear
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Clear (el: _Element): Clear {
    if (!_cached_decoder_for_Clear) { _cached_decoder_for_Clear = $._decodeBitString; }
    return _cached_decoder_for_Clear(el);
}

let _cached_encoder_for_Clear: $.ASN1Encoder<Clear> | null = null;

/**
 * @summary Encodes a(n) Clear into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Clear, encoded as an ASN.1 Element.
 */
export
function _encode_Clear (value: Clear, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Clear) { _cached_encoder_for_Clear = $._encodeBitString; }
    return _cached_encoder_for_Clear(value, elGetter);
}


/* eslint-enable */
