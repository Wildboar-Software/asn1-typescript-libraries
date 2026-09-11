/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MicrophoneMute
 * @description
 * Capability bitmap for the Microphone Mute event (ECMA-269 C.13.8, ECMA-285
 * §9.10). Presence of this entry in `PhysDevEvtsList` means the SF supports
 * that event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MicrophoneMute  ::=  BIT STRING
 * {     privateData                 ( 0) }
 * ```
 */
export
type MicrophoneMute = BIT_STRING;

/**
 * @summary MicrophoneMute_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.13.8).
 */
export
const MicrophoneMute_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `MicrophoneMute_privateData`.
 */
export
const privateData: number = MicrophoneMute_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MicrophoneMute: $.ASN1Decoder<MicrophoneMute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MicrophoneMute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MicrophoneMute (el: _Element): MicrophoneMute {
    if (!_cached_decoder_for_MicrophoneMute) { _cached_decoder_for_MicrophoneMute = $._decodeBitString; }
    return _cached_decoder_for_MicrophoneMute(el);
}

let _cached_encoder_for_MicrophoneMute: $.ASN1Encoder<MicrophoneMute> | null = null;

/**
 * @summary Encodes a(n) MicrophoneMute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MicrophoneMute, encoded as an ASN.1 Element.
 */
export
function _encode_MicrophoneMute (value: MicrophoneMute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MicrophoneMute) { _cached_encoder_for_MicrophoneMute = $._encodeBitString; }
    return _cached_encoder_for_MicrophoneMute(value, elGetter);
}


/* eslint-enable */
