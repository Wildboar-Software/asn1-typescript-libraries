/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MediaDetached
 * @description
 * Capability bitmap for the Media Detached event (ECMA-269 C.10.2, ECMA-285
 * §9.10). Presence of this entry in `MediaEvtsList` means the SF supports that
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
 * MediaDetached  ::=  BIT STRING
 * {     mediaServiceVersion             ( 0),     -- optional parameters
 *     mediaServiceInstanceID             ( 1),     -- optional parameters
 *     mediaStreamID                 ( 2),     -- optional parameters
 *     mediaCallCharacteristics         ( 3),     -- optional parameters
 *     callCharacteristics             ( 4),     -- optional parameters
 *     mediaConnectionInfo             ( 5),     -- optional parameters
 *     privateData                 ( 6) }
 * ```
 */
export
type MediaDetached = BIT_STRING;

/**
 * @summary MediaDetached_mediaServiceVersion
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.10.2).
 */
export
const MediaDetached_mediaServiceVersion: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceVersion
 * @constant
 * @description
 * Alias of `MediaDetached_mediaServiceVersion`.
 */
export
const mediaServiceVersion: number = MediaDetached_mediaServiceVersion; /* SHORT_NAMED_BIT */

/**
 * @summary MediaDetached_mediaServiceInstanceID
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.10.2).
 */
export
const MediaDetached_mediaServiceInstanceID: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInstanceID
 * @constant
 * @description
 * Alias of `MediaDetached_mediaServiceInstanceID`.
 */
export
const mediaServiceInstanceID: number = MediaDetached_mediaServiceInstanceID; /* SHORT_NAMED_BIT */

/**
 * @summary MediaDetached_mediaStreamID
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.10.2).
 */
export
const MediaDetached_mediaStreamID: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary mediaStreamID
 * @constant
 * @description
 * Alias of `MediaDetached_mediaStreamID`.
 */
export
const mediaStreamID: number = MediaDetached_mediaStreamID; /* SHORT_NAMED_BIT */

/**
 * @summary MediaDetached_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.10.2).
 */
export
const MediaDetached_mediaCallCharacteristics: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `MediaDetached_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = MediaDetached_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary MediaDetached_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.10.2).
 */
export
const MediaDetached_callCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `MediaDetached_callCharacteristics`.
 */
export
const callCharacteristics: number = MediaDetached_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary MediaDetached_mediaConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.10.2).
 */
export
const MediaDetached_mediaConnectionInfo: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mediaConnectionInfo
 * @constant
 * @description
 * Alias of `MediaDetached_mediaConnectionInfo`.
 */
export
const mediaConnectionInfo: number = MediaDetached_mediaConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary MediaDetached_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.10.2).
 */
export
const MediaDetached_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `MediaDetached_privateData`.
 */
export
const privateData: number = MediaDetached_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MediaDetached: $.ASN1Decoder<MediaDetached> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaDetached
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaDetached (el: _Element): MediaDetached {
    if (!_cached_decoder_for_MediaDetached) { _cached_decoder_for_MediaDetached = $._decodeBitString; }
    return _cached_decoder_for_MediaDetached(el);
}

let _cached_encoder_for_MediaDetached: $.ASN1Encoder<MediaDetached> | null = null;

/**
 * @summary Encodes a(n) MediaDetached into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaDetached, encoded as an ASN.1 Element.
 */
export
function _encode_MediaDetached (value: MediaDetached, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaDetached) { _cached_encoder_for_MediaDetached = $._encodeBitString; }
    return _cached_encoder_for_MediaDetached(value, elGetter);
}


/* eslint-enable */
