/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetSpeakerMute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetSpeakerMute  ::=  BIT STRING
 * {     auditoryApparatus             ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     privateData                 ( 2) }
 * ```
 */
export
type GetSpeakerMute = BIT_STRING;

/**
 * @summary GetSpeakerMute_auditoryApparatus
 * @constant
 */
export
const GetSpeakerMute_auditoryApparatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatus
 * @constant
 */
export
const auditoryApparatus: number = GetSpeakerMute_auditoryApparatus; /* SHORT_NAMED_BIT */

/**
 * @summary GetSpeakerMute_privateDataInAck
 * @constant
 */
export
const GetSpeakerMute_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetSpeakerMute_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetSpeakerMute_privateData
 * @constant
 */
export
const GetSpeakerMute_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetSpeakerMute_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetSpeakerMute: $.ASN1Decoder<GetSpeakerMute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetSpeakerMute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetSpeakerMute (el: _Element): GetSpeakerMute {
    if (!_cached_decoder_for_GetSpeakerMute) { _cached_decoder_for_GetSpeakerMute = $._decodeBitString; }
    return _cached_decoder_for_GetSpeakerMute(el);
}

let _cached_encoder_for_GetSpeakerMute: $.ASN1Encoder<GetSpeakerMute> | null = null;

/**
 * @summary Encodes a(n) GetSpeakerMute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetSpeakerMute, encoded as an ASN.1 Element.
 */
export
function _encode_GetSpeakerMute (value: GetSpeakerMute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetSpeakerMute) { _cached_encoder_for_GetSpeakerMute = $._encodeBitString; }
    return _cached_encoder_for_GetSpeakerMute(value, elGetter);
}


/* eslint-enable */
