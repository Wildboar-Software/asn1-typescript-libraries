/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SynthesizeMsg
 * @description
 * Capability bitmap for the Synthesize Message service (ECMA-269 C.19.17,
 * ECMA-285 §9.10). Presence of this entry in `VoiceUnitServList` means the SF
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
 * SynthesizeMsg  ::=  BIT STRING
 * {     genderMale                 ( 0),     -- optional parameters
 *     genderFemale                 ( 1),     -- optional parameters
 *     privateData                 ( 2),     -- optional parameters
 *     privateDataInAck             ( 3) }
 * ```
 */
export
type SynthesizeMsg = BIT_STRING;

/**
 * @summary SynthesizeMsg_genderMale
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.17).
 */
export
const SynthesizeMsg_genderMale: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary genderMale
 * @constant
 * @description
 * Alias of `SynthesizeMsg_genderMale`.
 */
export
const genderMale: number = SynthesizeMsg_genderMale; /* SHORT_NAMED_BIT */

/**
 * @summary SynthesizeMsg_genderFemale
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.19.17).
 */
export
const SynthesizeMsg_genderFemale: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary genderFemale
 * @constant
 * @description
 * Alias of `SynthesizeMsg_genderFemale`.
 */
export
const genderFemale: number = SynthesizeMsg_genderFemale; /* SHORT_NAMED_BIT */

/**
 * @summary SynthesizeMsg_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.19.17).
 */
export
const SynthesizeMsg_privateData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SynthesizeMsg_privateData`.
 */
export
const privateData: number = SynthesizeMsg_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SynthesizeMsg_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.19.17).
 */
export
const SynthesizeMsg_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SynthesizeMsg_privateDataInAck`.
 */
export
const privateDataInAck: number = SynthesizeMsg_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SynthesizeMsg: $.ASN1Decoder<SynthesizeMsg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SynthesizeMsg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SynthesizeMsg (el: _Element): SynthesizeMsg {
    if (!_cached_decoder_for_SynthesizeMsg) { _cached_decoder_for_SynthesizeMsg = $._decodeBitString; }
    return _cached_decoder_for_SynthesizeMsg(el);
}

let _cached_encoder_for_SynthesizeMsg: $.ASN1Encoder<SynthesizeMsg> | null = null;

/**
 * @summary Encodes a(n) SynthesizeMsg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SynthesizeMsg, encoded as an ASN.1 Element.
 */
export
function _encode_SynthesizeMsg (value: SynthesizeMsg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SynthesizeMsg) { _cached_encoder_for_SynthesizeMsg = $._encodeBitString; }
    return _cached_encoder_for_SynthesizeMsg(value, elGetter);
}


/* eslint-enable */
