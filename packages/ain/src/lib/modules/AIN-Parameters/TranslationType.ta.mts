/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TranslationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TranslationType  ::=  [70] IMPLICIT INTEGER(0..255)
 * ```
 */
export
type TranslationType = INTEGER;

let _cached_decoder_for_TranslationType: $.ASN1Decoder<TranslationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TranslationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TranslationType (el: _Element): TranslationType {
    if (!_cached_decoder_for_TranslationType) { _cached_decoder_for_TranslationType = $._decode_implicit<TranslationType>(() => $._decodeInteger); }
    return _cached_decoder_for_TranslationType(el);
}

let _cached_encoder_for_TranslationType: $.ASN1Encoder<TranslationType> | null = null;

/**
 * @summary Encodes a(n) TranslationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TranslationType, encoded as an ASN.1 Element.
 */
export
function _encode_TranslationType (value: TranslationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TranslationType) { _cached_encoder_for_TranslationType = $._encode_implicit(_TagClass.context, 70, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_TranslationType(value, elGetter);
}


/* eslint-enable */
