/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetSpeakerVolume
 * @description
 * Capability bitmap for the Get Speaker Volume service (ECMA-269 C.12.13,
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
 * GetSpeakerVolume  ::=  BIT STRING
 * {     auditoryApparatus             ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     speakerVolAbsInAck             ( 2),     -- optional parameters
 *     privateDataInAck             ( 3) }
 * ```
 */
export
type GetSpeakerVolume = BIT_STRING;

/**
 * @summary GetSpeakerVolume_auditoryApparatus
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.13).
 */
export
const GetSpeakerVolume_auditoryApparatus: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary auditoryApparatus
 * @constant
 * @description
 * Alias of `GetSpeakerVolume_auditoryApparatus`.
 */
export
const auditoryApparatus: number = GetSpeakerVolume_auditoryApparatus; /* SHORT_NAMED_BIT */

/**
 * @summary GetSpeakerVolume_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.12.13).
 */
export
const GetSpeakerVolume_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetSpeakerVolume_privateData`.
 */
export
const privateData: number = GetSpeakerVolume_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetSpeakerVolume_speakerVolAbsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `speakerVolAbs` in the acknowledgement
 * (ECMA-269 C.12.13).
 */
export
const GetSpeakerVolume_speakerVolAbsInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary speakerVolAbsInAck
 * @constant
 * @description
 * Alias of `GetSpeakerVolume_speakerVolAbsInAck`.
 */
export
const speakerVolAbsInAck: number = GetSpeakerVolume_speakerVolAbsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetSpeakerVolume_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.12.13).
 */
export
const GetSpeakerVolume_privateDataInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetSpeakerVolume_privateDataInAck`.
 */
export
const privateDataInAck: number = GetSpeakerVolume_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetSpeakerVolume: $.ASN1Decoder<GetSpeakerVolume> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetSpeakerVolume
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetSpeakerVolume (el: _Element): GetSpeakerVolume {
    if (!_cached_decoder_for_GetSpeakerVolume) { _cached_decoder_for_GetSpeakerVolume = $._decodeBitString; }
    return _cached_decoder_for_GetSpeakerVolume(el);
}

let _cached_encoder_for_GetSpeakerVolume: $.ASN1Encoder<GetSpeakerVolume> | null = null;

/**
 * @summary Encodes a(n) GetSpeakerVolume into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetSpeakerVolume, encoded as an ASN.1 Element.
 */
export
function _encode_GetSpeakerVolume (value: GetSpeakerVolume, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetSpeakerVolume) { _cached_encoder_for_GetSpeakerVolume = $._encodeBitString; }
    return _cached_encoder_for_GetSpeakerVolume(value, elGetter);
}


/* eslint-enable */
