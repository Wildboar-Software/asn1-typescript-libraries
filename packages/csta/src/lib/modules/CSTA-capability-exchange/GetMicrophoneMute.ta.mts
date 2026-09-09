/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetMicrophoneMute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetMicrophoneMute  ::=  BIT STRING
 * {     auditoryApparatus             ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2) }
 * ```
 */
export
type GetMicrophoneMute = BIT_STRING;

/**
 * @summary GetMicrophoneMute_auditoryApparatus
 * @constant
 */
export
const GetMicrophoneMute_auditoryApparatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatus
 * @constant
 */
export
const auditoryApparatus: number = GetMicrophoneMute_auditoryApparatus; /* SHORT_NAMED_BIT */

/**
 * @summary GetMicrophoneMute_privateData
 * @constant
 */
export
const GetMicrophoneMute_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetMicrophoneMute_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetMicrophoneMute_privateDataInAck
 * @constant
 */
export
const GetMicrophoneMute_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetMicrophoneMute_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetMicrophoneMute: $.ASN1Decoder<GetMicrophoneMute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetMicrophoneMute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetMicrophoneMute (el: _Element): GetMicrophoneMute {
    if (!_cached_decoder_for_GetMicrophoneMute) { _cached_decoder_for_GetMicrophoneMute = $._decodeBitString; }
    return _cached_decoder_for_GetMicrophoneMute(el);
}

let _cached_encoder_for_GetMicrophoneMute: $.ASN1Encoder<GetMicrophoneMute> | null = null;

/**
 * @summary Encodes a(n) GetMicrophoneMute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetMicrophoneMute, encoded as an ASN.1 Element.
 */
export
function _encode_GetMicrophoneMute (value: GetMicrophoneMute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetMicrophoneMute) { _cached_encoder_for_GetMicrophoneMute = $._encodeBitString; }
    return _cached_encoder_for_GetMicrophoneMute(value, elGetter);
}


/* eslint-enable */
