/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary CPIPRequestArg_argumentExtension
 * @description
 *
 * Manufacturer-specific extension on an SS-CPIP request. ECMA-264 §6.3.1
 * defines the two alternatives and registers none in CPIPExtSet.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPIPRequestArg-argumentExtension ::= CHOICE {
 *     extension [1] IMPLICIT Extension {{CPIPExtSet}},
 *     sequenceOfExtn [2] IMPLICIT SEQUENCE OF Extension {{CPIPExtSet}}
 * }
 * ```
 */
export
type CPIPRequestArg_argumentExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { sequenceOfExtn: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CPIPRequestArg_argumentExtension: $.ASN1Decoder<CPIPRequestArg_argumentExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CPIPRequestArg_argumentExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CPIPRequestArg_argumentExtension (el: _Element): CPIPRequestArg_argumentExtension {
    if (!_cached_decoder_for_CPIPRequestArg_argumentExtension) { _cached_decoder_for_CPIPRequestArg_argumentExtension = $._decode_inextensible_choice<CPIPRequestArg_argumentExtension>({
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "sequenceOfExtn", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_CPIPRequestArg_argumentExtension(el);
}

let _cached_encoder_for_CPIPRequestArg_argumentExtension: $.ASN1Encoder<CPIPRequestArg_argumentExtension> | null = null;

/**
 * @summary Encodes a(n) CPIPRequestArg_argumentExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPIPRequestArg_argumentExtension, encoded as an ASN.1 Element.
 */
export
function _encode_CPIPRequestArg_argumentExtension (value: CPIPRequestArg_argumentExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CPIPRequestArg_argumentExtension) { _cached_encoder_for_CPIPRequestArg_argumentExtension = $._encode_choice<CPIPRequestArg_argumentExtension>({
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "sequenceOfExtn": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_CPIPRequestArg_argumentExtension(value, elGetter);
}

/* eslint-enable */
