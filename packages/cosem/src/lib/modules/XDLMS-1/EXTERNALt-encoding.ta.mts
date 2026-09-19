/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EXTERNALt_encoding
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EXTERNALt-encoding ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EXTERNALt_encoding =
    { single_ASN1_type: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { octet_aligned: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { arbitrary: BIT_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EXTERNALt_encoding: $.ASN1Decoder<EXTERNALt_encoding> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EXTERNALt_encoding
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EXTERNALt_encoding (el: _Element): EXTERNALt_encoding {
    if (!_cached_decoder_for_EXTERNALt_encoding) { _cached_decoder_for_EXTERNALt_encoding = $._decode_inextensible_choice<EXTERNALt_encoding>({
    "CONTEXT 0": [ "single_ASN1_type", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "octet_aligned", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "arbitrary", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ]
}); }
    return _cached_decoder_for_EXTERNALt_encoding(el);
}

let _cached_encoder_for_EXTERNALt_encoding: $.ASN1Encoder<EXTERNALt_encoding> | null = null;

/**
 * @summary Encodes a(n) EXTERNALt_encoding into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EXTERNALt_encoding, encoded as an ASN.1 Element.
 */
export
function _encode_EXTERNALt_encoding (value: EXTERNALt_encoding, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EXTERNALt_encoding) { _cached_encoder_for_EXTERNALt_encoding = $._encode_choice<EXTERNALt_encoding>({
    "single_ASN1_type": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "octet_aligned": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "arbitrary": $._encode_implicit(_TagClass.context, 2, () => $._encodeBitString, $.BER),
}, $.BER); }
    return _cached_encoder_for_EXTERNALt_encoding(value, elGetter);
}


/* eslint-enable */
