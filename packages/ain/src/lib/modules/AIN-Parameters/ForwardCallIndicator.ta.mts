/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ForwardCallIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardCallIndicator  ::=  [113] IMPLICIT OCTET STRING(SIZE(2))
 * ```
 */
export
type ForwardCallIndicator = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ForwardCallIndicator: $.ASN1Decoder<ForwardCallIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardCallIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardCallIndicator (el: _Element): ForwardCallIndicator {
    if (!_cached_decoder_for_ForwardCallIndicator) { _cached_decoder_for_ForwardCallIndicator = $._decode_implicit<ForwardCallIndicator>(() => $._decodeOctetString); }
    return _cached_decoder_for_ForwardCallIndicator(el);
}

let _cached_encoder_for_ForwardCallIndicator: $.ASN1Encoder<ForwardCallIndicator> | null = null;

/**
 * @summary Encodes a(n) ForwardCallIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardCallIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardCallIndicator (value: ForwardCallIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardCallIndicator) { _cached_encoder_for_ForwardCallIndicator = $._encode_implicit(_TagClass.context, 113, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_ForwardCallIndicator(value, elGetter);
}


/* eslint-enable */
