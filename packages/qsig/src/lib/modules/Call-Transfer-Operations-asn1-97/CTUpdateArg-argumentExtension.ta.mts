/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary CTUpdateArg_argumentExtension
 * @description
 *
 * Manufacturer-specific extension on `callTransferUpdate`.
 * ECMA-178 §6.3.1 defines no member of `CTExtSet`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTUpdateArg-argumentExtension ::= CHOICE {
 *     single [9] IMPLICIT Extension {{CTExtSet}},
 *     multiple [10] IMPLICIT SEQUENCE OF Extension {{CTExtSet}}
 * }
 * ```
 */
export
type CTUpdateArg_argumentExtension =
    { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CTUpdateArg_argumentExtension: $.ASN1Decoder<CTUpdateArg_argumentExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CTUpdateArg_argumentExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CTUpdateArg_argumentExtension (el: _Element): CTUpdateArg_argumentExtension {
    if (!_cached_decoder_for_CTUpdateArg_argumentExtension) { _cached_decoder_for_CTUpdateArg_argumentExtension = $._decode_inextensible_choice<CTUpdateArg_argumentExtension>({
    "CONTEXT 9": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 10": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_CTUpdateArg_argumentExtension(el);
}

let _cached_encoder_for_CTUpdateArg_argumentExtension: $.ASN1Encoder<CTUpdateArg_argumentExtension> | null = null;

/**
 * @summary Encodes a(n) CTUpdateArg_argumentExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTUpdateArg_argumentExtension, encoded as an ASN.1 Element.
 */
export
function _encode_CTUpdateArg_argumentExtension (value: CTUpdateArg_argumentExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CTUpdateArg_argumentExtension) { _cached_encoder_for_CTUpdateArg_argumentExtension = $._encode_choice<CTUpdateArg_argumentExtension>({
    "single": $._encode_implicit(_TagClass.context, 9, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_CTUpdateArg_argumentExtension(value, elGetter);
}

/* eslint-enable */
