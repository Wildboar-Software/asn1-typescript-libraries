/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MediaDetached
 * @description
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
 */
export
const MediaDetached_mediaServiceVersion: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceVersion
 * @constant
 */
export
const mediaServiceVersion: number = MediaDetached_mediaServiceVersion; /* SHORT_NAMED_BIT */

/**
 * @summary MediaDetached_mediaServiceInstanceID
 * @constant
 */
export
const MediaDetached_mediaServiceInstanceID: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mediaServiceInstanceID
 * @constant
 */
export
const mediaServiceInstanceID: number = MediaDetached_mediaServiceInstanceID; /* SHORT_NAMED_BIT */

/**
 * @summary MediaDetached_mediaStreamID
 * @constant
 */
export
const MediaDetached_mediaStreamID: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary mediaStreamID
 * @constant
 */
export
const mediaStreamID: number = MediaDetached_mediaStreamID; /* SHORT_NAMED_BIT */

/**
 * @summary MediaDetached_mediaCallCharacteristics
 * @constant
 */
export
const MediaDetached_mediaCallCharacteristics: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = MediaDetached_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary MediaDetached_callCharacteristics
 * @constant
 */
export
const MediaDetached_callCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = MediaDetached_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary MediaDetached_mediaConnectionInfo
 * @constant
 */
export
const MediaDetached_mediaConnectionInfo: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mediaConnectionInfo
 * @constant
 */
export
const mediaConnectionInfo: number = MediaDetached_mediaConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary MediaDetached_privateData
 * @constant
 */
export
const MediaDetached_privateData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
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
