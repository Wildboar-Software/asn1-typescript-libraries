/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MediaModification {
    add = 1,
    remove = 2,
    change = 3,
    unknown = 4,
}

/**
 * @summary MediaModification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaModification  ::=  ENUMERATED
 * {
 *         add (1),
 *         remove (2),
 *         change (3),
 *         unknown (4),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MediaModification = _enum_for_MediaModification | ENUMERATED;

/**
 * @summary MediaModification_add
 * @constant
 * @type {number}
 */
export
const MediaModification_add: MediaModification = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary add
 * @constant
 * @type {number}
 */
export
const add: MediaModification = MediaModification_add; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaModification_remove
 * @constant
 * @type {number}
 */
export
const MediaModification_remove: MediaModification = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remove
 * @constant
 * @type {number}
 */
export
const remove: MediaModification = MediaModification_remove; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaModification_change
 * @constant
 * @type {number}
 */
export
const MediaModification_change: MediaModification = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary change
 * @constant
 * @type {number}
 */
export
const change: MediaModification = MediaModification_change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MediaModification_unknown
 * @constant
 * @type {number}
 */
export
const MediaModification_unknown: MediaModification = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: MediaModification = MediaModification_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MediaModification: $.ASN1Decoder<MediaModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaModification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaModification (el: _Element): MediaModification {
    if (!_cached_decoder_for_MediaModification) { _cached_decoder_for_MediaModification = $._decodeEnumerated; }
    return _cached_decoder_for_MediaModification(el);
}

let _cached_encoder_for_MediaModification: $.ASN1Encoder<MediaModification> | null = null;

/**
 * @summary Encodes a(n) MediaModification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaModification, encoded as an ASN.1 Element.
 */
export
function _encode_MediaModification (value: MediaModification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaModification) { _cached_encoder_for_MediaModification = $._encodeEnumerated; }
    return _cached_encoder_for_MediaModification(value, elGetter);
}


/* eslint-enable */
