/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetMicrophoneGain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetMicrophoneGain  ::=  BIT STRING
 * {     auditoryApparatus             ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     micGainAbsInAck             ( 2),     -- optional parameters
 *     privateDataInAck             ( 3) }
 * ```
 */
export
type GetMicrophoneGain = BIT_STRING;

/**
 * @summary GetMicrophoneGain_auditoryApparatus
 * @constant
 */
export
const GetMicrophoneGain_auditoryApparatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatus
 * @constant
 */
export
const auditoryApparatus: number = GetMicrophoneGain_auditoryApparatus; /* SHORT_NAMED_BIT */

/**
 * @summary GetMicrophoneGain_privateData
 * @constant
 */
export
const GetMicrophoneGain_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = GetMicrophoneGain_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetMicrophoneGain_micGainAbsInAck
 * @constant
 */
export
const GetMicrophoneGain_micGainAbsInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary micGainAbsInAck
 * @constant
 */
export
const micGainAbsInAck: number = GetMicrophoneGain_micGainAbsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetMicrophoneGain_privateDataInAck
 * @constant
 */
export
const GetMicrophoneGain_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 */
export
const privateDataInAck: number = GetMicrophoneGain_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetMicrophoneGain: $.ASN1Decoder<GetMicrophoneGain> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetMicrophoneGain
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetMicrophoneGain (el: _Element): GetMicrophoneGain {
    if (!_cached_decoder_for_GetMicrophoneGain) { _cached_decoder_for_GetMicrophoneGain = $._decodeBitString; }
    return _cached_decoder_for_GetMicrophoneGain(el);
}

let _cached_encoder_for_GetMicrophoneGain: $.ASN1Encoder<GetMicrophoneGain> | null = null;

/**
 * @summary Encodes a(n) GetMicrophoneGain into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetMicrophoneGain, encoded as an ASN.1 Element.
 */
export
function _encode_GetMicrophoneGain (value: GetMicrophoneGain, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetMicrophoneGain) { _cached_encoder_for_GetMicrophoneGain = $._encodeBitString; }
    return _cached_encoder_for_GetMicrophoneGain(value, elGetter);
}


/* eslint-enable */
