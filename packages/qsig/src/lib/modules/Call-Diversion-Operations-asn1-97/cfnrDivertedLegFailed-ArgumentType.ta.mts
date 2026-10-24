/* eslint-disable */
import {
    type NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary cfnrDivertedLegFailed_ArgumentType
 * @description
 *
 * Argument of `cfnrDivertedLegFailed` (ECMA-174 §6.3.1). `null` carries no
 * standardized information. `single` and `multiple` are manufacturer-specific
 * extensions from `DiversionExtensionSet`, which is empty in this Standard. The
 * procedures do not define any other argument contents (§6.5.4.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cfnrDivertedLegFailed-ArgumentType ::= CHOICE {
 *     null NULL,
 *     single [1] IMPLICIT Extension {{DiversionExtensionSet}},
 *     multiple [2] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 * }
 * ```
 */
export
type cfnrDivertedLegFailed_ArgumentType =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_cfnrDivertedLegFailed_ArgumentType: $.ASN1Decoder<cfnrDivertedLegFailed_ArgumentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) cfnrDivertedLegFailed_ArgumentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_cfnrDivertedLegFailed_ArgumentType (el: _Element): cfnrDivertedLegFailed_ArgumentType {
    if (!_cached_decoder_for_cfnrDivertedLegFailed_ArgumentType) { _cached_decoder_for_cfnrDivertedLegFailed_ArgumentType = $._decode_inextensible_choice<cfnrDivertedLegFailed_ArgumentType>({
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "CONTEXT 1": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_cfnrDivertedLegFailed_ArgumentType(el);
}

let _cached_encoder_for_cfnrDivertedLegFailed_ArgumentType: $.ASN1Encoder<cfnrDivertedLegFailed_ArgumentType> | null = null;

/**
 * @summary Encodes a(n) cfnrDivertedLegFailed_ArgumentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The cfnrDivertedLegFailed_ArgumentType, encoded as an ASN.1 Element.
 */
export
function _encode_cfnrDivertedLegFailed_ArgumentType (value: cfnrDivertedLegFailed_ArgumentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_cfnrDivertedLegFailed_ArgumentType) { _cached_encoder_for_cfnrDivertedLegFailed_ArgumentType = $._encode_choice<cfnrDivertedLegFailed_ArgumentType>({
    "null_": $._encodeNull,
    "single": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_cfnrDivertedLegFailed_ArgumentType(value, elGetter);
}

/* eslint-enable */
