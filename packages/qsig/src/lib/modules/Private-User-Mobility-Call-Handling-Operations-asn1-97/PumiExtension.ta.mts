/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary PumiExtension
 * @description
 *
 * Manufacturer-specific extension on an ANF-PUMI argument or result (ECMA-284
 * §6.3.1). `extension` is one extension from `PUMCHExtSet`; `sequOfExtn` is a
 * sequence of them. This module assigns no extensions.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-284/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PumiExtension  ::=  CHOICE {
 *     extension [4] IMPLICIT Extension {{PUMCHExtSet}},
 *     sequOfExtn [5] IMPLICIT SEQUENCE OF Extension {{PUMCHExtSet}}
 * }
 * ```
 */
export
type PumiExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { sequOfExtn: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PumiExtension: $.ASN1Decoder<PumiExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PumiExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PumiExtension (el: _Element): PumiExtension {
    if (!_cached_decoder_for_PumiExtension) { _cached_decoder_for_PumiExtension = $._decode_inextensible_choice<PumiExtension>({
    "CONTEXT 4": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 5": [ "sequOfExtn", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_PumiExtension(el);
}

let _cached_encoder_for_PumiExtension: $.ASN1Encoder<PumiExtension> | null = null;

/**
 * @summary Encodes a(n) PumiExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PumiExtension, encoded as an ASN.1 Element.
 */
export
function _encode_PumiExtension (value: PumiExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PumiExtension) { _cached_encoder_for_PumiExtension = $._encode_choice<PumiExtension>({
    "extension": $._encode_implicit(_TagClass.context, 4, () => _encode_Extension, $.BER),
    "sequOfExtn": $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_PumiExtension(value, elGetter);
}

/* eslint-enable */
