/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SuspendPlay
 * @description
 * Capability bitmap for the Suspend Play event (ECMA-269 C.20.15, ECMA-285
 * §9.10). Presence of this entry in `VoiceUnitEvtsList` means the SF supports
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
 * SuspendPlay  ::=  BIT STRING
 * {     message                    ( 5),     -- optional parameters
 *     resource                ( 6),     -- optional parameters
 *     length                     ( 0),     -- optional parameters
 *     currentPosition             ( 1),     -- optional parameters
 *     cause                     ( 2),     -- optional parameters
 *     servicesPermitted             ( 3),     -- optional parameters
 *     privateData                 ( 4) }
 * ```
 */
export
type SuspendPlay = BIT_STRING;

/**
 * @summary SuspendPlay_message
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.15).
 */
export
const SuspendPlay_message: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary message
 * @constant
 * @description
 * Alias of `SuspendPlay_message`.
 */
export
const message: number = SuspendPlay_message; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendPlay_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * C.20.15).
 */
export
const SuspendPlay_resource: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `SuspendPlay_resource`.
 */
export
const resource: number = SuspendPlay_resource; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendPlay_length
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.15).
 */
export
const SuspendPlay_length: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary length
 * @constant
 * @description
 * Alias of `SuspendPlay_length`.
 */
export
const length: number = SuspendPlay_length; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendPlay_currentPosition
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.15).
 */
export
const SuspendPlay_currentPosition: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary currentPosition
 * @constant
 * @description
 * Alias of `SuspendPlay_currentPosition`.
 */
export
const currentPosition: number = SuspendPlay_currentPosition; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendPlay_cause
 * @constant
 * @description
 * Bit set means the SF supports the optional `cause` parameter (ECMA-269
 * C.20.15).
 */
export
const SuspendPlay_cause: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 * @description
 * Alias of `SuspendPlay_cause`.
 */
export
const cause: number = SuspendPlay_cause; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendPlay_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.15).
 */
export
const SuspendPlay_servicesPermitted: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `SuspendPlay_servicesPermitted`.
 */
export
const servicesPermitted: number = SuspendPlay_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendPlay_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.20.15).
 */
export
const SuspendPlay_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SuspendPlay_privateData`.
 */
export
const privateData: number = SuspendPlay_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SuspendPlay: $.ASN1Decoder<SuspendPlay> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuspendPlay
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuspendPlay (el: _Element): SuspendPlay {
    if (!_cached_decoder_for_SuspendPlay) { _cached_decoder_for_SuspendPlay = $._decodeBitString; }
    return _cached_decoder_for_SuspendPlay(el);
}

let _cached_encoder_for_SuspendPlay: $.ASN1Encoder<SuspendPlay> | null = null;

/**
 * @summary Encodes a(n) SuspendPlay into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuspendPlay, encoded as an ASN.1 Element.
 */
export
function _encode_SuspendPlay (value: SuspendPlay, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuspendPlay) { _cached_encoder_for_SuspendPlay = $._encodeBitString; }
    return _cached_encoder_for_SuspendPlay(value, elGetter);
}


/* eslint-enable */
