/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    type UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ParameterValue
 * @description
 * 
 * Value of one element-descriptor parameter.
 * 
 * `intValue` is an octet value. `textValue` is text. Clause 15.3 does not
 * further define either alternative.
 * 
 * 3GPP TS 33.108, annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValue ::=  CHOICE
 * {
 *     intValue  [1] OCTET STRING,
 *     textValue [2] UTF8String,
 *     ...
 * }
 * ```
 */
export
type ParameterValue =
    { intValue: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { textValue: UTF8String } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ParameterValue: $.ASN1Decoder<ParameterValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValue (el: _Element): ParameterValue {
    if (!_cached_decoder_for_ParameterValue) { _cached_decoder_for_ParameterValue = $._decode_extensible_choice<ParameterValue>({
    "CONTEXT 1": [ "intValue", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "textValue", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ]
}); }
    return _cached_decoder_for_ParameterValue(el);
}

let _cached_encoder_for_ParameterValue: $.ASN1Encoder<ParameterValue> | null = null;

/**
 * @summary Encodes a(n) ParameterValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValue, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValue (value: ParameterValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValue) { _cached_encoder_for_ParameterValue = $._encode_choice<ParameterValue>({
    "intValue": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "textValue": $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER),
}, $.BER); }
    return _cached_encoder_for_ParameterValue(value, elGetter);
}


/* eslint-enable */
