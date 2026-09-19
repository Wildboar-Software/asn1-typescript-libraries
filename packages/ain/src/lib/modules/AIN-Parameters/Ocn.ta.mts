/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Ocn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Ocn  ::=  [87] IMPLICIT IA5String(SIZE(4..8))
 * ```
 */
export
type Ocn = IA5String; // IA5String

let _cached_decoder_for_Ocn: $.ASN1Decoder<Ocn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Ocn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Ocn (el: _Element): Ocn {
    if (!_cached_decoder_for_Ocn) { _cached_decoder_for_Ocn = $._decode_implicit<Ocn>(() => $._decodeIA5String); }
    return _cached_decoder_for_Ocn(el);
}

let _cached_encoder_for_Ocn: $.ASN1Encoder<Ocn> | null = null;

/**
 * @summary Encodes a(n) Ocn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Ocn, encoded as an ASN.1 Element.
 */
export
function _encode_Ocn (value: Ocn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Ocn) { _cached_encoder_for_Ocn = $._encode_implicit(_TagClass.context, 87, () => $._encodeIA5String, $.BER); }
    return _cached_encoder_for_Ocn(value, elGetter);
}


/* eslint-enable */
