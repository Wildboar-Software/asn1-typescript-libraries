/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary SSCTInitiateArg_argumentExtension
 * @description
 *
 * Manufacturer-specific extension on `ssctInitiate`. ECMA-300 §6.3.1
 * defines no member of `SSCTExtSet`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-300/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSCTInitiateArg-argumentExtension ::= CHOICE {
 *     single [4] IMPLICIT Extension {{SSCTExtSet}},
 *     multiple [5] IMPLICIT SEQUENCE OF Extension {{SSCTExtSet}}
 * }
 * ```
 */
export
type SSCTInitiateArg_argumentExtension =
    { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SSCTInitiateArg_argumentExtension: $.ASN1Decoder<SSCTInitiateArg_argumentExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SSCTInitiateArg_argumentExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SSCTInitiateArg_argumentExtension (el: _Element): SSCTInitiateArg_argumentExtension {
    if (!_cached_decoder_for_SSCTInitiateArg_argumentExtension) { _cached_decoder_for_SSCTInitiateArg_argumentExtension = $._decode_inextensible_choice<SSCTInitiateArg_argumentExtension>({
    "CONTEXT 4": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 5": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_SSCTInitiateArg_argumentExtension(el);
}

let _cached_encoder_for_SSCTInitiateArg_argumentExtension: $.ASN1Encoder<SSCTInitiateArg_argumentExtension> | null = null;

/**
 * @summary Encodes a(n) SSCTInitiateArg_argumentExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SSCTInitiateArg_argumentExtension, encoded as an ASN.1 Element.
 */
export
function _encode_SSCTInitiateArg_argumentExtension (value: SSCTInitiateArg_argumentExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SSCTInitiateArg_argumentExtension) { _cached_encoder_for_SSCTInitiateArg_argumentExtension = $._encode_choice<SSCTInitiateArg_argumentExtension>({
    "single": $._encode_implicit(_TagClass.context, 4, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_SSCTInitiateArg_argumentExtension(value, elGetter);
}

/* eslint-enable */
