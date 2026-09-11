/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MediaAttachmentEvents
 * @description
 *
 * Media-attachment events. BIT STRING advertised in ACSE user-information
 * listing which CSTA services or events this association will use. ECMA-285
 * §8.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaAttachmentEvents  ::=  BIT STRING
 * {    mediaAttached                         ( 0),
 *     mediaDetached                         ( 1) }
 * ```
 */
export
type MediaAttachmentEvents = BIT_STRING;

/**
 * @summary MediaAttachmentEvents_mediaAttached
 * @description
 * Advertises the `mediaAttached` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const MediaAttachmentEvents_mediaAttached: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary mediaAttached
 * @description Alias of {@link MediaAttachmentEvents_mediaAttached}.
 * @constant
 */
export
const mediaAttached: number = MediaAttachmentEvents_mediaAttached; /* SHORT_NAMED_BIT */

/**
 * @summary MediaAttachmentEvents_mediaDetached
 * @description
 * Advertises the `mediaDetached` event for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const MediaAttachmentEvents_mediaDetached: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mediaDetached
 * @description Alias of {@link MediaAttachmentEvents_mediaDetached}.
 * @constant
 */
export
const mediaDetached: number = MediaAttachmentEvents_mediaDetached; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MediaAttachmentEvents: $.ASN1Decoder<MediaAttachmentEvents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaAttachmentEvents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaAttachmentEvents (el: _Element): MediaAttachmentEvents {
    if (!_cached_decoder_for_MediaAttachmentEvents) { _cached_decoder_for_MediaAttachmentEvents = $._decodeBitString; }
    return _cached_decoder_for_MediaAttachmentEvents(el);
}

let _cached_encoder_for_MediaAttachmentEvents: $.ASN1Encoder<MediaAttachmentEvents> | null = null;

/**
 * @summary Encodes a(n) MediaAttachmentEvents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaAttachmentEvents, encoded as an ASN.1 Element.
 */
export
function _encode_MediaAttachmentEvents (value: MediaAttachmentEvents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaAttachmentEvents) { _cached_encoder_for_MediaAttachmentEvents = $._encodeBitString; }
    return _cached_encoder_for_MediaAttachmentEvents(value, elGetter);
}


/* eslint-enable */
