/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ACPNoAttachments
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACPNoAttachments  ::=  BOOLEAN
 * ```
 */
export
type ACPNoAttachments = BOOLEAN; // BooleanType

let _cached_decoder_for_ACPNoAttachments: $.ASN1Decoder<ACPNoAttachments> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACPNoAttachments
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACPNoAttachments (el: _Element): ACPNoAttachments {
    if (!_cached_decoder_for_ACPNoAttachments) { _cached_decoder_for_ACPNoAttachments = $._decodeBoolean; }
    return _cached_decoder_for_ACPNoAttachments(el);
}

let _cached_encoder_for_ACPNoAttachments: $.ASN1Encoder<ACPNoAttachments> | null = null;

/**
 * @summary Encodes a(n) ACPNoAttachments into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACPNoAttachments, encoded as an ASN.1 Element.
 */
export
function _encode_ACPNoAttachments (value: ACPNoAttachments, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACPNoAttachments) { _cached_encoder_for_ACPNoAttachments = $._encodeBoolean; }
    return _cached_encoder_for_ACPNoAttachments(value, elGetter);
}


/* eslint-enable */
