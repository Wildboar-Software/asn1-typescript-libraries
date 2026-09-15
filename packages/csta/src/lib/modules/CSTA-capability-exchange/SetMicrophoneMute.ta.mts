/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SetMicrophoneMute
 * @description
 * Capability bitmap for the Set Microphone Mute service (ECMA-269 C.12.20,
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
 * SetMicrophoneMute  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1),     -- optional parameters
 *     ackModelMultiStep             ( 2) }
 * ```
 */
export
type SetMicrophoneMute = BIT_STRING;

/**
 * @summary SetMicrophoneMute_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.12.20).
 */
export
const SetMicrophoneMute_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SetMicrophoneMute_privateData`.
 */
export
const privateData: number = SetMicrophoneMute_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SetMicrophoneMute_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.12.20).
 */
export
const SetMicrophoneMute_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SetMicrophoneMute_privateDataInAck`.
 */
export
const privateDataInAck: number = SetMicrophoneMute_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary SetMicrophoneMute_ackModelMultiStep
 * @constant
 * @description
 * Bit set means the SF supports the multi-step positive acknowledgement model
 * (ECMA-269 C.12.20).
 */
export
const SetMicrophoneMute_ackModelMultiStep: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ackModelMultiStep
 * @constant
 * @description
 * Alias of `SetMicrophoneMute_ackModelMultiStep`.
 */
export
const ackModelMultiStep: number = SetMicrophoneMute_ackModelMultiStep; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SetMicrophoneMute: $.ASN1Decoder<SetMicrophoneMute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetMicrophoneMute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetMicrophoneMute (el: _Element): SetMicrophoneMute {
    if (!_cached_decoder_for_SetMicrophoneMute) { _cached_decoder_for_SetMicrophoneMute = $._decodeBitString; }
    return _cached_decoder_for_SetMicrophoneMute(el);
}

let _cached_encoder_for_SetMicrophoneMute: $.ASN1Encoder<SetMicrophoneMute> | null = null;

/**
 * @summary Encodes a(n) SetMicrophoneMute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetMicrophoneMute, encoded as an ASN.1 Element.
 */
export
function _encode_SetMicrophoneMute (value: SetMicrophoneMute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetMicrophoneMute) { _cached_encoder_for_SetMicrophoneMute = $._encodeBitString; }
    return _cached_encoder_for_SetMicrophoneMute(value, elGetter);
}


/* eslint-enable */
