/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary BookmarkReached
 * @description
 * Capability bitmap for the Bookmark Reached event (ECMA-269 C.20.1, ECMA-285
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
 * BookmarkReached  ::=  BIT STRING
 * {     resource                 ( 0),     -- optional parameters
 *     currentPosition             ( 1),     -- optional parameters
 *     servicesPermitted             ( 2),     -- optional parameters
 *     privateData                 ( 3) }
 * ```
 */
export
type BookmarkReached = BIT_STRING;

/**
 * @summary BookmarkReached_resource
 * @constant
 * @description
 * Bit set means the SF supports the optional `resource` parameter (ECMA-269
 * C.20.1).
 */
export
const BookmarkReached_resource: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 * @description
 * Alias of `BookmarkReached_resource`.
 */
export
const resource: number = BookmarkReached_resource; /* SHORT_NAMED_BIT */

/**
 * @summary BookmarkReached_currentPosition
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.1).
 */
export
const BookmarkReached_currentPosition: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary currentPosition
 * @constant
 * @description
 * Alias of `BookmarkReached_currentPosition`.
 */
export
const currentPosition: number = BookmarkReached_currentPosition; /* SHORT_NAMED_BIT */

/**
 * @summary BookmarkReached_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.20.1).
 */
export
const BookmarkReached_servicesPermitted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `BookmarkReached_servicesPermitted`.
 */
export
const servicesPermitted: number = BookmarkReached_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary BookmarkReached_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.20.1).
 */
export
const BookmarkReached_privateData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `BookmarkReached_privateData`.
 */
export
const privateData: number = BookmarkReached_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_BookmarkReached: $.ASN1Decoder<BookmarkReached> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BookmarkReached
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BookmarkReached (el: _Element): BookmarkReached {
    if (!_cached_decoder_for_BookmarkReached) { _cached_decoder_for_BookmarkReached = $._decodeBitString; }
    return _cached_decoder_for_BookmarkReached(el);
}

let _cached_encoder_for_BookmarkReached: $.ASN1Encoder<BookmarkReached> | null = null;

/**
 * @summary Encodes a(n) BookmarkReached into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BookmarkReached, encoded as an ASN.1 Element.
 */
export
function _encode_BookmarkReached (value: BookmarkReached, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BookmarkReached) { _cached_encoder_for_BookmarkReached = $._encodeBitString; }
    return _cached_encoder_for_BookmarkReached(value, elGetter);
}


/* eslint-enable */
