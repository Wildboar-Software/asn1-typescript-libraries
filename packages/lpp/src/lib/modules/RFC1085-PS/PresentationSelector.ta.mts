/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PresentationSelector
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentationSelector  ::=  [1] IMPLICIT OCTET STRING
 * ```
 */
export
type PresentationSelector = OCTET_STRING; // OctetStringType

let _cached_decoder_for_PresentationSelector: $.ASN1Decoder<PresentationSelector> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresentationSelector
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresentationSelector (el: _Element): PresentationSelector {
    if (!_cached_decoder_for_PresentationSelector) { _cached_decoder_for_PresentationSelector = $._decode_implicit<PresentationSelector>(() => $._decodeOctetString); }
    return _cached_decoder_for_PresentationSelector(el);
}

let _cached_encoder_for_PresentationSelector: $.ASN1Encoder<PresentationSelector> | null = null;

/**
 * @summary Encodes a(n) PresentationSelector into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentationSelector, encoded as an ASN.1 Element.
 */
export
function _encode_PresentationSelector (value: PresentationSelector, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresentationSelector) { _cached_encoder_for_PresentationSelector = $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_PresentationSelector(value, elGetter);
}


/* eslint-enable */
