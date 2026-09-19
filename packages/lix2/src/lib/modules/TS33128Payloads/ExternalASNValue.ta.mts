/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExternalASNValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExternalASNValue  ::=  CHOICE
 * {
 *     bER          [1] OCTET STRING,
 *     alignedPER   [2] OCTET STRING
 * }
 * ```
 */
export
type ExternalASNValue =
    { bER: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { alignedPER: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ExternalASNValue: $.ASN1Decoder<ExternalASNValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExternalASNValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExternalASNValue (el: _Element): ExternalASNValue {
    if (!_cached_decoder_for_ExternalASNValue) { _cached_decoder_for_ExternalASNValue = $._decode_inextensible_choice<ExternalASNValue>({
    "CONTEXT 1": [ "bER", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "alignedPER", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_ExternalASNValue(el);
}

let _cached_encoder_for_ExternalASNValue: $.ASN1Encoder<ExternalASNValue> | null = null;

/**
 * @summary Encodes a(n) ExternalASNValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalASNValue, encoded as an ASN.1 Element.
 */
export
function _encode_ExternalASNValue (value: ExternalASNValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExternalASNValue) { _cached_encoder_for_ExternalASNValue = $._encode_choice<ExternalASNValue>({
    "bER": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "alignedPER": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_ExternalASNValue(value, elGetter);
}


/* eslint-enable */
