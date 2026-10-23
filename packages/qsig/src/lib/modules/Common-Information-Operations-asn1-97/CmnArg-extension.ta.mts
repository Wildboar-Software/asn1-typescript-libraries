/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary CmnArg_extension
 * @description
 *
 * Manufacturer-specific extension on CmnArg. ECMA-251 §6.3.1 defines single
 * and multiple alternatives and registers none in CMNExtSet.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-251/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CmnArg-extension ::= CHOICE {
 *     single [7] IMPLICIT Extension {{CMNExtSet}},
 *     multiple [8] IMPLICIT SEQUENCE OF Extension {{CMNExtSet}}
 * }
 * ```
 */
export
type CmnArg_extension =
    { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CmnArg_extension: $.ASN1Decoder<CmnArg_extension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CmnArg_extension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CmnArg_extension (el: _Element): CmnArg_extension {
    if (!_cached_decoder_for_CmnArg_extension) { _cached_decoder_for_CmnArg_extension = $._decode_inextensible_choice<CmnArg_extension>({
    "CONTEXT 7": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 8": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_CmnArg_extension(el);
}

let _cached_encoder_for_CmnArg_extension: $.ASN1Encoder<CmnArg_extension> | null = null;

/**
 * @summary Encodes a(n) CmnArg_extension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CmnArg_extension, encoded as an ASN.1 Element.
 */
export
function _encode_CmnArg_extension (value: CmnArg_extension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CmnArg_extension) { _cached_encoder_for_CmnArg_extension = $._encode_choice<CmnArg_extension>({
    "single": $._encode_implicit(_TagClass.context, 7, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_CmnArg_extension(value, elGetter);
}

/* eslint-enable */
