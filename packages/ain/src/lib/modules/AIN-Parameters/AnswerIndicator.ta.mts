/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AnswerIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AnswerIndicator  ::=  [12] IMPLICIT NULL
 * ```
 */
export
type AnswerIndicator = NULL; // NullType

let _cached_decoder_for_AnswerIndicator: $.ASN1Decoder<AnswerIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AnswerIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AnswerIndicator (el: _Element): AnswerIndicator {
    if (!_cached_decoder_for_AnswerIndicator) { _cached_decoder_for_AnswerIndicator = $._decode_implicit<AnswerIndicator>(() => $._decodeNull); }
    return _cached_decoder_for_AnswerIndicator(el);
}

let _cached_encoder_for_AnswerIndicator: $.ASN1Encoder<AnswerIndicator> | null = null;

/**
 * @summary Encodes a(n) AnswerIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AnswerIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_AnswerIndicator (value: AnswerIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AnswerIndicator) { _cached_encoder_for_AnswerIndicator = $._encode_implicit(_TagClass.context, 12, () => $._encodeNull, $.BER); }
    return _cached_encoder_for_AnswerIndicator(value, elGetter);
}


/* eslint-enable */
