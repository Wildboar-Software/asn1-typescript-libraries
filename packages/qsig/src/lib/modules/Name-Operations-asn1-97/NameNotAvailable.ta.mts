/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary NameNotAvailable
 * @description
 *
 * The name is not available (ECMA-164 §6.1). The receiving PINX delivers no
 * name, only the indicator "name not available" (§7.4.2.1, §8.4.2.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameNotAvailable  ::=  [4] IMPLICIT NULL
 * ```
 */
export
type NameNotAvailable = NULL; // NullType

let _cached_decoder_for_NameNotAvailable: $.ASN1Decoder<NameNotAvailable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NameNotAvailable
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NameNotAvailable (el: _Element): NameNotAvailable {
    if (!_cached_decoder_for_NameNotAvailable) { _cached_decoder_for_NameNotAvailable = $._decode_implicit<NameNotAvailable>(() => $._decodeNull); }
    return _cached_decoder_for_NameNotAvailable(el);
}

let _cached_encoder_for_NameNotAvailable: $.ASN1Encoder<NameNotAvailable> | null = null;

/**
 * @summary Encodes a(n) NameNotAvailable into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameNotAvailable, encoded as an ASN.1 Element.
 */
export
function _encode_NameNotAvailable (value: NameNotAvailable, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NameNotAvailable) { _cached_encoder_for_NameNotAvailable = $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER); }
    return _cached_encoder_for_NameNotAvailable(value, elGetter);
}

/* eslint-enable */
