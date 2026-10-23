/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary activateDiversionQ_ResultType
 * @description
 *
 * Result of a successful `activateDiversionQ`. Sent when the Served User PINX
 * accepts activation (ECMA-174 §6.5.3.1.1). `null` carries no standardized
 * information. `single` and `multiple` are manufacturer-specific extensions
 * from `DiversionExtensionSet`, which is empty in this Standard (ECMA-174
 * §6.3.1). The procedures do not define result contents.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * activateDiversionQ-ResultType ::= CHOICE {
 *     null NULL,
 *     single [1] IMPLICIT Extension {{DiversionExtensionSet}},
 *     multiple [2] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 * }
 * ```
 */
export
type activateDiversionQ_ResultType =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_activateDiversionQ_ResultType: $.ASN1Decoder<activateDiversionQ_ResultType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) activateDiversionQ_ResultType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_activateDiversionQ_ResultType (el: _Element): activateDiversionQ_ResultType {
    if (!_cached_decoder_for_activateDiversionQ_ResultType) { _cached_decoder_for_activateDiversionQ_ResultType = $._decode_inextensible_choice<activateDiversionQ_ResultType>({
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "CONTEXT 1": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_activateDiversionQ_ResultType(el);
}

let _cached_encoder_for_activateDiversionQ_ResultType: $.ASN1Encoder<activateDiversionQ_ResultType> | null = null;

/**
 * @summary Encodes a(n) activateDiversionQ_ResultType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The activateDiversionQ_ResultType, encoded as an ASN.1 Element.
 */
export
function _encode_activateDiversionQ_ResultType (value: activateDiversionQ_ResultType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_activateDiversionQ_ResultType) { _cached_encoder_for_activateDiversionQ_ResultType = $._encode_choice<activateDiversionQ_ResultType>({
    "null_": $._encodeNull,
    "single": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_activateDiversionQ_ResultType(value, elGetter);
}

/* eslint-enable */
