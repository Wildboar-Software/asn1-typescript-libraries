/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary checkRestriction_ArgumentType_extension
 * @description
 *
 * Manufacturer-specific extension on `checkRestriction`. Either one extension
 * or a sequence of them, from `DiversionExtensionSet`. The standardized set is
 * empty (ECMA-174 §6.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * checkRestriction-ArgumentType-extension ::= CHOICE {
 *     single [1] IMPLICIT Extension {{DiversionExtensionSet}},
 *     multiple [2] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 * }
 * ```
 */
export
type checkRestriction_ArgumentType_extension =
    { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_checkRestriction_ArgumentType_extension: $.ASN1Decoder<checkRestriction_ArgumentType_extension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) checkRestriction_ArgumentType_extension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_checkRestriction_ArgumentType_extension (el: _Element): checkRestriction_ArgumentType_extension {
    if (!_cached_decoder_for_checkRestriction_ArgumentType_extension) { _cached_decoder_for_checkRestriction_ArgumentType_extension = $._decode_inextensible_choice<checkRestriction_ArgumentType_extension>({
    "CONTEXT 1": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_checkRestriction_ArgumentType_extension(el);
}

let _cached_encoder_for_checkRestriction_ArgumentType_extension: $.ASN1Encoder<checkRestriction_ArgumentType_extension> | null = null;

/**
 * @summary Encodes a(n) checkRestriction_ArgumentType_extension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The checkRestriction_ArgumentType_extension, encoded as an ASN.1 Element.
 */
export
function _encode_checkRestriction_ArgumentType_extension (value: checkRestriction_ArgumentType_extension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_checkRestriction_ArgumentType_extension) { _cached_encoder_for_checkRestriction_ArgumentType_extension = $._encode_choice<checkRestriction_ArgumentType_extension>({
    "single": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_checkRestriction_ArgumentType_extension(value, elGetter);
}

/* eslint-enable */
