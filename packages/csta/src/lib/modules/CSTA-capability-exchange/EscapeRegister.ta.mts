/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary EscapeRegister
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EscapeRegister  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type EscapeRegister = BIT_STRING;

/**
 * @summary EscapeRegister_privateData
 * @constant
 */
export
const EscapeRegister_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = EscapeRegister_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary EscapeRegister_privateDataInAck
 * @constant
 */
export
const EscapeRegister_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = EscapeRegister_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_EscapeRegister: $.ASN1Decoder<EscapeRegister> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EscapeRegister
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EscapeRegister (el: _Element): EscapeRegister {
    if (!_cached_decoder_for_EscapeRegister) { _cached_decoder_for_EscapeRegister = $._decodeBitString; }
    return _cached_decoder_for_EscapeRegister(el);
}

let _cached_encoder_for_EscapeRegister: $.ASN1Encoder<EscapeRegister> | null = null;

/**
 * @summary Encodes a(n) EscapeRegister into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscapeRegister, encoded as an ASN.1 Element.
 */
export
function _encode_EscapeRegister (value: EscapeRegister, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EscapeRegister) { _cached_encoder_for_EscapeRegister = $._encodeBitString; }
    return _cached_encoder_for_EscapeRegister(value, elGetter);
}


/* eslint-enable */
