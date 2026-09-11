/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetMicrophoneGain
 * @description
 * Capability bitmap for the Get Microphone Gain service (ECMA-269 C.12.9,
 * ECMA-285 §9.10). Presence of this entry in `PhysDevServList` means the SF
 * supports that service. Each set bit is an optional parameter, enumerated
 * value, initial connection state, or miscellaneous characteristic from Annex
 * C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.9).
 */
export
const GetMicrophoneGain_auditoryApparatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatus
 * @constant
 * @description
 * Alias of `GetMicrophoneGain_auditoryApparatus`.
 */
export
const auditoryApparatus: number = GetMicrophoneGain_auditoryApparatus; /* SHORT_NAMED_BIT */

/**
 * @summary GetMicrophoneGain_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.12.9).
 */
export
const GetMicrophoneGain_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetMicrophoneGain_privateData`.
 */
export
const privateData: number = GetMicrophoneGain_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetMicrophoneGain_micGainAbsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `micGainAbs` in the acknowledgement
 * (ECMA-269 C.12.9).
 */
export
const GetMicrophoneGain_micGainAbsInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary micGainAbsInAck
 * @constant
 * @description
 * Alias of `GetMicrophoneGain_micGainAbsInAck`.
 */
export
const micGainAbsInAck: number = GetMicrophoneGain_micGainAbsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetMicrophoneGain_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.12.9).
 */
export
const GetMicrophoneGain_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetMicrophoneGain_privateDataInAck`.
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
