/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MediaAttachmentServices
 * @description
 *
 * Media-attachment services. BIT STRING advertised in ACSE user-information
 * listing which CSTA services or events this association will use. ECMA-285
 * §8.2.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaAttachmentServices  ::=  BIT STRING
 * {    attachMediaService                    ( 0),
 *         detachMediaService                    ( 1) }
 * ```
 */
export
type MediaAttachmentServices = BIT_STRING;

/**
 * @summary MediaAttachmentServices_attachMediaService
 * @description
 * Advertises `attachMediaService` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const MediaAttachmentServices_attachMediaService: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary attachMediaService
 * @description Alias of {@link MediaAttachmentServices_attachMediaService}.
 * @constant
 */
export
const attachMediaService: number = MediaAttachmentServices_attachMediaService; /* SHORT_NAMED_BIT */

/**
 * @summary MediaAttachmentServices_detachMediaService
 * @description
 * Advertises `detachMediaService` for this association. ECMA-285 §8.2.
 * @constant
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export
const MediaAttachmentServices_detachMediaService: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary detachMediaService
 * @description Alias of {@link MediaAttachmentServices_detachMediaService}.
 * @constant
 */
export
const detachMediaService: number = MediaAttachmentServices_detachMediaService; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MediaAttachmentServices: $.ASN1Decoder<MediaAttachmentServices> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaAttachmentServices
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaAttachmentServices (el: _Element): MediaAttachmentServices {
    if (!_cached_decoder_for_MediaAttachmentServices) { _cached_decoder_for_MediaAttachmentServices = $._decodeBitString; }
    return _cached_decoder_for_MediaAttachmentServices(el);
}

let _cached_encoder_for_MediaAttachmentServices: $.ASN1Encoder<MediaAttachmentServices> | null = null;

/**
 * @summary Encodes a(n) MediaAttachmentServices into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaAttachmentServices, encoded as an ASN.1 Element.
 */
export
function _encode_MediaAttachmentServices (value: MediaAttachmentServices, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaAttachmentServices) { _cached_encoder_for_MediaAttachmentServices = $._encodeBitString; }
    return _cached_encoder_for_MediaAttachmentServices(value, elGetter);
}


/* eslint-enable */
