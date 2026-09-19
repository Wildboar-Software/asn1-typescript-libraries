/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedRinging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedRinging  ::=  [146] IMPLICIT NULL
 * ```
 */
export
type ExtendedRinging = NULL; // NullType

let _cached_decoder_for_ExtendedRinging: $.ASN1Decoder<ExtendedRinging> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedRinging
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedRinging (el: _Element): ExtendedRinging {
    if (!_cached_decoder_for_ExtendedRinging) { _cached_decoder_for_ExtendedRinging = $._decode_implicit<ExtendedRinging>(() => $._decodeNull); }
    return _cached_decoder_for_ExtendedRinging(el);
}

let _cached_encoder_for_ExtendedRinging: $.ASN1Encoder<ExtendedRinging> | null = null;

/**
 * @summary Encodes a(n) ExtendedRinging into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedRinging, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedRinging (value: ExtendedRinging, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedRinging) { _cached_encoder_for_ExtendedRinging = $._encode_implicit(_TagClass.context, 146, () => $._encodeNull, $.BER); }
    return _cached_encoder_for_ExtendedRinging(value, elGetter);
}


/* eslint-enable */
