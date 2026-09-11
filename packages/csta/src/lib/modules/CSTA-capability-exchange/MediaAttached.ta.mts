/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MediaAttached
 * @description
 * Capability bitmap for the Media Attached event (ECMA-269 C.10.1, ECMA-285
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
 * MediaAttached  ::=  BIT STRING
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
type MediaAttached = BIT_STRING;

/**
 * @summary MediaAttached_mediaServiceVersion
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.10.1).
 */
export
const MediaAttached_mediaServiceVersion: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceVersion
 * @constant
 * @description
 * Alias of `MediaAttached_mediaServiceVersion`.
 */
export
const mediaServiceVersion: number = MediaAttached_mediaServiceVersion; /* SHORT_NAMED_BIT */

/**
 * @summary MediaAttached_mediaServiceInstanceID
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.10.1).
 */
export
const MediaAttached_mediaServiceInstanceID: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInstanceID
 * @constant
 * @description
 * Alias of `MediaAttached_mediaServiceInstanceID`.
 */
export
const mediaServiceInstanceID: number = MediaAttached_mediaServiceInstanceID; /* SHORT_NAMED_BIT */

/**
 * @summary MediaAttached_mediaStreamID
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.10.1).
 */
export
const MediaAttached_mediaStreamID: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary mediaStreamID
 * @constant
 * @description
 * Alias of `MediaAttached_mediaStreamID`.
 */
export
const mediaStreamID: number = MediaAttached_mediaStreamID; /* SHORT_NAMED_BIT */

/**
 * @summary MediaAttached_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.10.1).
 */
export
const MediaAttached_mediaCallCharacteristics: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `MediaAttached_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = MediaAttached_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary MediaAttached_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.10.1).
 */
export
const MediaAttached_callCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `MediaAttached_callCharacteristics`.
 */
export
const callCharacteristics: number = MediaAttached_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary MediaAttached_mediaConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.10.1).
 */
export
const MediaAttached_mediaConnectionInfo: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mediaConnectionInfo
 * @constant
 * @description
 * Alias of `MediaAttached_mediaConnectionInfo`.
 */
export
const mediaConnectionInfo: number = MediaAttached_mediaConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary MediaAttached_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.10.1).
 */
export
const MediaAttached_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `MediaAttached_privateData`.
 */
export
const privateData: number = MediaAttached_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MediaAttached: $.ASN1Decoder<MediaAttached> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaAttached
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaAttached (el: _Element): MediaAttached {
    if (!_cached_decoder_for_MediaAttached) { _cached_decoder_for_MediaAttached = $._decodeBitString; }
    return _cached_decoder_for_MediaAttached(el);
}

let _cached_encoder_for_MediaAttached: $.ASN1Encoder<MediaAttached> | null = null;

/**
 * @summary Encodes a(n) MediaAttached into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaAttached, encoded as an ASN.1 Element.
 */
export
function _encode_MediaAttached (value: MediaAttached, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaAttached) { _cached_encoder_for_MediaAttached = $._encodeBitString; }
    return _cached_encoder_for_MediaAttached(value, elGetter);
}


/* eslint-enable */
