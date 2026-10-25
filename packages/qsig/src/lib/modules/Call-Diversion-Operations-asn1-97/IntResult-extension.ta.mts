/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary IntResult_extension
 * @description
 *
 * Manufacturer-specific extension on `IntResult`. Either one extension or a
 * sequence of them, from `DiversionExtensionSet`. The standardized set is empty
 * (ECMA-174 §6.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntResult-extension ::= CHOICE {
 *     single [1] IMPLICIT Extension {{DiversionExtensionSet}},
 *     multiple [2] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 * }
 * ```
 */
export
type IntResult_extension =
    { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IntResult_extension: $.ASN1Decoder<IntResult_extension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntResult_extension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntResult_extension (el: _Element): IntResult_extension {
    if (!_cached_decoder_for_IntResult_extension) { _cached_decoder_for_IntResult_extension = $._decode_inextensible_choice<IntResult_extension>({
    "CONTEXT 1": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_IntResult_extension(el);
}

let _cached_encoder_for_IntResult_extension: $.ASN1Encoder<IntResult_extension> | null = null;

/**
 * @summary Encodes a(n) IntResult_extension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntResult_extension, encoded as an ASN.1 Element.
 */
export
function _encode_IntResult_extension (value: IntResult_extension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntResult_extension) { _cached_encoder_for_IntResult_extension = $._encode_choice<IntResult_extension>({
    "single": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_IntResult_extension(value, elGetter);
}

/* eslint-enable */
