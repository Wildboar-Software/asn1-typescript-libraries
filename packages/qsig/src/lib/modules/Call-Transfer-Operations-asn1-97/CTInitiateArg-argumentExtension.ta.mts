/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary CTInitiateArg_argumentExtension
 * @description
 *
 * Manufacturer-specific extension on `callTransferInitiate`.
 * ECMA-178 §6.3.1 defines no member of `CTExtSet`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTInitiateArg-argumentExtension ::= CHOICE {
 *     single [6] IMPLICIT Extension {{CTExtSet}},
 *     multiple [7] IMPLICIT SEQUENCE OF Extension {{CTExtSet}}
 * }
 * ```
 */
export
type CTInitiateArg_argumentExtension =
    { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CTInitiateArg_argumentExtension: $.ASN1Decoder<CTInitiateArg_argumentExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CTInitiateArg_argumentExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CTInitiateArg_argumentExtension (el: _Element): CTInitiateArg_argumentExtension {
    if (!_cached_decoder_for_CTInitiateArg_argumentExtension) { _cached_decoder_for_CTInitiateArg_argumentExtension = $._decode_inextensible_choice<CTInitiateArg_argumentExtension>({
    "CONTEXT 6": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 7": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_CTInitiateArg_argumentExtension(el);
}

let _cached_encoder_for_CTInitiateArg_argumentExtension: $.ASN1Encoder<CTInitiateArg_argumentExtension> | null = null;

/**
 * @summary Encodes a(n) CTInitiateArg_argumentExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTInitiateArg_argumentExtension, encoded as an ASN.1 Element.
 */
export
function _encode_CTInitiateArg_argumentExtension (value: CTInitiateArg_argumentExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CTInitiateArg_argumentExtension) { _cached_encoder_for_CTInitiateArg_argumentExtension = $._encode_choice<CTInitiateArg_argumentExtension>({
    "single": $._encode_implicit(_TagClass.context, 6, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_CTInitiateArg_argumentExtension(value, elGetter);
}

/* eslint-enable */
