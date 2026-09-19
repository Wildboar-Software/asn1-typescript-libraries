/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MediaSecFailureIndication {
    genericFailure = 0,
}

/**
 * @summary MediaSecFailureIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaSecFailureIndication  ::=  ENUMERATED
 * {
 *  genericFailure (0),
 *  ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MediaSecFailureIndication = _enum_for_MediaSecFailureIndication | ENUMERATED;

/**
 * @summary MediaSecFailureIndication_genericFailure
 * @constant
 * @type {number}
 */
export
const MediaSecFailureIndication_genericFailure: MediaSecFailureIndication = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary genericFailure
 * @constant
 * @type {number}
 */
export
const genericFailure: MediaSecFailureIndication = MediaSecFailureIndication_genericFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MediaSecFailureIndication: $.ASN1Decoder<MediaSecFailureIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaSecFailureIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaSecFailureIndication (el: _Element): MediaSecFailureIndication {
    if (!_cached_decoder_for_MediaSecFailureIndication) { _cached_decoder_for_MediaSecFailureIndication = $._decodeEnumerated; }
    return _cached_decoder_for_MediaSecFailureIndication(el);
}

let _cached_encoder_for_MediaSecFailureIndication: $.ASN1Encoder<MediaSecFailureIndication> | null = null;

/**
 * @summary Encodes a(n) MediaSecFailureIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaSecFailureIndication, encoded as an ASN.1 Element.
 */
export
function _encode_MediaSecFailureIndication (value: MediaSecFailureIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaSecFailureIndication) { _cached_encoder_for_MediaSecFailureIndication = $._encodeEnumerated; }
    return _cached_encoder_for_MediaSecFailureIndication(value, elGetter);
}


/* eslint-enable */
