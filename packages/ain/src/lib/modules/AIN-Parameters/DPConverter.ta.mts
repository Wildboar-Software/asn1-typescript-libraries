/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DPConverter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DPConverter  ::=  [76] IMPLICIT BOOLEAN
 * ```
 */
export
type DPConverter = BOOLEAN; // BooleanType

let _cached_decoder_for_DPConverter: $.ASN1Decoder<DPConverter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DPConverter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DPConverter (el: _Element): DPConverter {
    if (!_cached_decoder_for_DPConverter) { _cached_decoder_for_DPConverter = $._decode_implicit<DPConverter>(() => $._decodeBoolean); }
    return _cached_decoder_for_DPConverter(el);
}

let _cached_encoder_for_DPConverter: $.ASN1Encoder<DPConverter> | null = null;

/**
 * @summary Encodes a(n) DPConverter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DPConverter, encoded as an ASN.1 Element.
 */
export
function _encode_DPConverter (value: DPConverter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DPConverter) { _cached_encoder_for_DPConverter = $._encode_implicit(_TagClass.context, 76, () => $._encodeBoolean, $.BER); }
    return _cached_encoder_for_DPConverter(value, elGetter);
}


/* eslint-enable */
