/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary PRProposeArg_extension
 * @description
 *
 * Manufacturer-specific extension on `pathReplacePropose`.
 * ECMA-176 §6.3.1 defines no member of `PRExtSet`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-176/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PRProposeArg-extension ::= CHOICE {
 *     single [1] IMPLICIT Extension {{PRExtSet}},
 *     multiple [2] IMPLICIT SEQUENCE OF Extension {{PRExtSet}}
 * }
 * ```
 */
export
type PRProposeArg_extension =
    { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PRProposeArg_extension: $.ASN1Decoder<PRProposeArg_extension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PRProposeArg_extension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PRProposeArg_extension (el: _Element): PRProposeArg_extension {
    if (!_cached_decoder_for_PRProposeArg_extension) { _cached_decoder_for_PRProposeArg_extension = $._decode_inextensible_choice<PRProposeArg_extension>({
    "CONTEXT 1": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_PRProposeArg_extension(el);
}

let _cached_encoder_for_PRProposeArg_extension: $.ASN1Encoder<PRProposeArg_extension> | null = null;

/**
 * @summary Encodes a(n) PRProposeArg_extension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PRProposeArg_extension, encoded as an ASN.1 Element.
 */
export
function _encode_PRProposeArg_extension (value: PRProposeArg_extension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PRProposeArg_extension) { _cached_encoder_for_PRProposeArg_extension = $._encode_choice<PRProposeArg_extension>({
    "single": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_PRProposeArg_extension(value, elGetter);
}

/* eslint-enable */
