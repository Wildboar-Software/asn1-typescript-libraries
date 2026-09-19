/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PagingRestrictionIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PagingRestrictionIndicator  ::=  OCTET STRING (SIZE(1..33))
 * ```
 */
export
type PagingRestrictionIndicator = OCTET_STRING; // OctetStringType

let _cached_decoder_for_PagingRestrictionIndicator: $.ASN1Decoder<PagingRestrictionIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PagingRestrictionIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PagingRestrictionIndicator (el: _Element): PagingRestrictionIndicator {
    if (!_cached_decoder_for_PagingRestrictionIndicator) { _cached_decoder_for_PagingRestrictionIndicator = $._decodeOctetString; }
    return _cached_decoder_for_PagingRestrictionIndicator(el);
}

let _cached_encoder_for_PagingRestrictionIndicator: $.ASN1Encoder<PagingRestrictionIndicator> | null = null;

/**
 * @summary Encodes a(n) PagingRestrictionIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PagingRestrictionIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_PagingRestrictionIndicator (value: PagingRestrictionIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PagingRestrictionIndicator) { _cached_encoder_for_PagingRestrictionIndicator = $._encodeOctetString; }
    return _cached_encoder_for_PagingRestrictionIndicator(value, elGetter);
}


/* eslint-enable */
