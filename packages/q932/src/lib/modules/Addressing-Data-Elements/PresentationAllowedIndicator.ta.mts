/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PresentationAllowedIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentationAllowedIndicator  ::=  BOOLEAN
 * ```
 */
export
type PresentationAllowedIndicator = BOOLEAN; // BooleanType

let _cached_decoder_for_PresentationAllowedIndicator: $.ASN1Decoder<PresentationAllowedIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresentationAllowedIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresentationAllowedIndicator (el: _Element): PresentationAllowedIndicator {
    if (!_cached_decoder_for_PresentationAllowedIndicator) { _cached_decoder_for_PresentationAllowedIndicator = $._decodeBoolean; }
    return _cached_decoder_for_PresentationAllowedIndicator(el);
}

let _cached_encoder_for_PresentationAllowedIndicator: $.ASN1Encoder<PresentationAllowedIndicator> | null = null;

/**
 * @summary Encodes a(n) PresentationAllowedIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentationAllowedIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_PresentationAllowedIndicator (value: PresentationAllowedIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresentationAllowedIndicator) { _cached_encoder_for_PresentationAllowedIndicator = $._encodeBoolean; }
    return _cached_encoder_for_PresentationAllowedIndicator(value, elGetter);
}


/* eslint-enable */
