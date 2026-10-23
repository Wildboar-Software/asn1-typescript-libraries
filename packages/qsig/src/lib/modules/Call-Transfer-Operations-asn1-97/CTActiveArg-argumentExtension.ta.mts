/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary CTActiveArg_argumentExtension
 * @description
 *
 * Manufacturer-specific extension on `callTransferActive`.
 * ECMA-178 §6.3.1 defines no member of `CTExtSet`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTActiveArg-argumentExtension ::= CHOICE {
 *     single [9] IMPLICIT Extension {{CTExtSet}},
 *     multiple [10] IMPLICIT SEQUENCE OF Extension {{CTExtSet}}
 * }
 * ```
 */
export
type CTActiveArg_argumentExtension =
    { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CTActiveArg_argumentExtension: $.ASN1Decoder<CTActiveArg_argumentExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CTActiveArg_argumentExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CTActiveArg_argumentExtension (el: _Element): CTActiveArg_argumentExtension {
    if (!_cached_decoder_for_CTActiveArg_argumentExtension) { _cached_decoder_for_CTActiveArg_argumentExtension = $._decode_inextensible_choice<CTActiveArg_argumentExtension>({
    "CONTEXT 9": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 10": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_CTActiveArg_argumentExtension(el);
}

let _cached_encoder_for_CTActiveArg_argumentExtension: $.ASN1Encoder<CTActiveArg_argumentExtension> | null = null;

/**
 * @summary Encodes a(n) CTActiveArg_argumentExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTActiveArg_argumentExtension, encoded as an ASN.1 Element.
 */
export
function _encode_CTActiveArg_argumentExtension (value: CTActiveArg_argumentExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CTActiveArg_argumentExtension) { _cached_encoder_for_CTActiveArg_argumentExtension = $._encode_choice<CTActiveArg_argumentExtension>({
    "single": $._encode_implicit(_TagClass.context, 9, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_CTActiveArg_argumentExtension(value, elGetter);
}

/* eslint-enable */
