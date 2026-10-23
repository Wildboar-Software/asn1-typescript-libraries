/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary deactivateDiversionQ_ResultType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * deactivateDiversionQ-ResultType ::= CHOICE {
 *     null NULL,
 *     single [1] IMPLICIT Extension {{DiversionExtensionSet}},
 *     multiple [2] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 * }
 * ```
 */
export
type deactivateDiversionQ_ResultType =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_deactivateDiversionQ_ResultType: $.ASN1Decoder<deactivateDiversionQ_ResultType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) deactivateDiversionQ_ResultType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_deactivateDiversionQ_ResultType (el: _Element): deactivateDiversionQ_ResultType {
    if (!_cached_decoder_for_deactivateDiversionQ_ResultType) { _cached_decoder_for_deactivateDiversionQ_ResultType = $._decode_inextensible_choice<deactivateDiversionQ_ResultType>({
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "CONTEXT 1": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_deactivateDiversionQ_ResultType(el);
}

let _cached_encoder_for_deactivateDiversionQ_ResultType: $.ASN1Encoder<deactivateDiversionQ_ResultType> | null = null;

/**
 * @summary Encodes a(n) deactivateDiversionQ_ResultType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The deactivateDiversionQ_ResultType, encoded as an ASN.1 Element.
 */
export
function _encode_deactivateDiversionQ_ResultType (value: deactivateDiversionQ_ResultType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_deactivateDiversionQ_ResultType) { _cached_encoder_for_deactivateDiversionQ_ResultType = $._encode_choice<deactivateDiversionQ_ResultType>({
    "null_": $._encodeNull,
    "single": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_deactivateDiversionQ_ResultType(value, elGetter);
}

/* eslint-enable */
