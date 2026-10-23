/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary NameExtension
 * @description
 *
 * Manufacturer-specific extension on `NameArg`. Either one extension or a
 * sequence of them, from `NameExtensionSet`. The standardized set is empty
 * (ECMA-164 §6.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameExtension  ::=  CHOICE {
 *     single [5] IMPLICIT Extension {{NameExtensionSet}},
 *     multiple [6] IMPLICIT SEQUENCE OF Extension {{NameExtensionSet}}
 * }
 * ```
 */
export
type NameExtension =
    { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NameExtension: $.ASN1Decoder<NameExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NameExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NameExtension (el: _Element): NameExtension {
    if (!_cached_decoder_for_NameExtension) { _cached_decoder_for_NameExtension = $._decode_inextensible_choice<NameExtension>({
    "CONTEXT 5": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 6": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_NameExtension(el);
}

let _cached_encoder_for_NameExtension: $.ASN1Encoder<NameExtension> | null = null;

/**
 * @summary Encodes a(n) NameExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameExtension, encoded as an ASN.1 Element.
 */
export
function _encode_NameExtension (value: NameExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NameExtension) { _cached_encoder_for_NameExtension = $._encode_choice<NameExtension>({
    "single": $._encode_implicit(_TagClass.context, 5, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_NameExtension(value, elGetter);
}

/* eslint-enable */
