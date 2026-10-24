/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ANDSPRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ANDSPRule  ::=  CHOICE
 * {
 *     wLANSP                     [1] OCTET STRING,
 *     n3ANNodeConfiguration      [2] OCTET STRING
 * }
 * ```
 */
export
type ANDSPRule =
    { wLANSP: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { n3ANNodeConfiguration: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ANDSPRule: $.ASN1Decoder<ANDSPRule> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ANDSPRule
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ANDSPRule (el: _Element): ANDSPRule {
    if (!_cached_decoder_for_ANDSPRule) { _cached_decoder_for_ANDSPRule = $._decode_extensible_choice<ANDSPRule>({
    "CONTEXT 1": [ "wLANSP", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "n3ANNodeConfiguration", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_ANDSPRule(el);
}

let _cached_encoder_for_ANDSPRule: $.ASN1Encoder<ANDSPRule> | null = null;

/**
 * @summary Encodes a(n) ANDSPRule into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ANDSPRule, encoded as an ASN.1 Element.
 */
export
function _encode_ANDSPRule (value: ANDSPRule, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ANDSPRule) { _cached_encoder_for_ANDSPRule = $._encode_choice<ANDSPRule>({
    "wLANSP": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "n3ANNodeConfiguration": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_ANDSPRule(value, elGetter);
}


/* eslint-enable */
