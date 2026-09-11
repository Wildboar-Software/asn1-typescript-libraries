/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Play
 * @description
 * Capability bitmap for the Play event (ECMA-269 C.20.7, ECMA-285 §9.10).
 * Presence of this entry in `VoiceUnitEvtsList` means the SF supports that
 * event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Play  ::=  BIT STRING
 * {     length                     ( 0),     -- optional parameters
 *     currentPosition             ( 1),     -- optional parameters
 *     speed                     ( 2),     -- optional parameters
 *     cause                     ( 3),     -- optional parameters
 *     servicesPermitted             ( 4),     -- optional parameters
 *     privateData                 ( 5) }
 * ```
 */
export
type Play = BIT_STRING;

/**
 * @summary Play_length
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.7).
 */
export
const Play_length: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary length
 * @constant
 * @description
 * Alias of `Play_length`.
 */
export
const length: number = Play_length; /* SHORT_NAMED_BIT */

/**
 * @summary Play_currentPosition
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.7).
 */
export
const Play_currentPosition: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary currentPosition
 * @constant
 * @description
 * Alias of `Play_currentPosition`.
 */
export
const currentPosition: number = Play_currentPosition; /* SHORT_NAMED_BIT */

/**
 * @summary Play_speed
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.7).
 */
export
const Play_speed: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary speed
 * @constant
 * @description
 * Alias of `Play_speed`.
 */
export
const speed: number = Play_speed; /* SHORT_NAMED_BIT */

/**
 * @summary Play_cause
 * @constant
 * @description
 * Bit set means the SF supports the optional `cause` parameter (ECMA-269
 * C.20.7).
 */
export
const Play_cause: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 * @description
 * Alias of `Play_cause`.
 */
export
const cause: number = Play_cause; /* SHORT_NAMED_BIT */

/**
 * @summary Play_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.7).
 */
export
const Play_servicesPermitted: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `Play_servicesPermitted`.
 */
export
const servicesPermitted: number = Play_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Play_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.20.7).
 */
export
const Play_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Play_privateData`.
 */
export
const privateData: number = Play_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Play: $.ASN1Decoder<Play> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Play
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Play (el: _Element): Play {
    if (!_cached_decoder_for_Play) { _cached_decoder_for_Play = $._decodeBitString; }
    return _cached_decoder_for_Play(el);
}

let _cached_encoder_for_Play: $.ASN1Encoder<Play> | null = null;

/**
 * @summary Encodes a(n) Play into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Play, encoded as an ASN.1 Element.
 */
export
function _encode_Play (value: Play, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Play) { _cached_encoder_for_Play = $._encodeBitString; }
    return _cached_encoder_for_Play(value, elGetter);
}


/* eslint-enable */
