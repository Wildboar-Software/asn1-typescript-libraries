/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary PumrExtension
 * @description
 *
 * Manufacturer-specific extension on an SS-PUMR argument or result (ECMA-282
 * §6.3.1). `extension` is one extension from `PUMRExtSet`; `sequOfExtn` is a
 * sequence of them. This module assigns no extensions.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PumrExtension  ::=  CHOICE {
 *     extension [4] IMPLICIT Extension {{PUMRExtSet}},
 *     sequOfExtn [5] IMPLICIT SEQUENCE OF Extension {{PUMRExtSet}}
 * }
 * ```
 */
export
type PumrExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { sequOfExtn: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PumrExtension: $.ASN1Decoder<PumrExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PumrExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PumrExtension (el: _Element): PumrExtension {
    if (!_cached_decoder_for_PumrExtension) { _cached_decoder_for_PumrExtension = $._decode_inextensible_choice<PumrExtension>({
    "CONTEXT 4": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 5": [ "sequOfExtn", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_PumrExtension(el);
}

let _cached_encoder_for_PumrExtension: $.ASN1Encoder<PumrExtension> | null = null;

/**
 * @summary Encodes a(n) PumrExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PumrExtension, encoded as an ASN.1 Element.
 */
export
function _encode_PumrExtension (value: PumrExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PumrExtension) { _cached_encoder_for_PumrExtension = $._encode_choice<PumrExtension>({
    "extension": $._encode_implicit(_TagClass.context, 4, () => _encode_Extension, $.BER),
    "sequOfExtn": $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_PumrExtension(value, elGetter);
}

/* eslint-enable */
