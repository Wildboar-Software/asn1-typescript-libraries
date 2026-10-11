/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ParameterName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterName ::=  CHOICE
 * {
 *     integername [1] INTEGER,
 *     textName    [2] UTF8String,
 * ...
 * }
 * ```
 */
export
type ParameterName =
    { integername: INTEGER } /* CHOICE_ALT_ROOT */
    | { textName: UTF8String } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ParameterName: $.ASN1Decoder<ParameterName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterName (el: _Element): ParameterName {
    if (!_cached_decoder_for_ParameterName) { _cached_decoder_for_ParameterName = $._decode_extensible_choice<ParameterName>({
    "CONTEXT 1": [ "integername", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "textName", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ]
}); }
    return _cached_decoder_for_ParameterName(el);
}

let _cached_encoder_for_ParameterName: $.ASN1Encoder<ParameterName> | null = null;

/**
 * @summary Encodes a(n) ParameterName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterName, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterName (value: ParameterName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterName) { _cached_encoder_for_ParameterName = $._encode_choice<ParameterName>({
    "integername": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "textName": $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER),
}, $.BER); }
    return _cached_encoder_for_ParameterName(value, elGetter);
}


/* eslint-enable */
