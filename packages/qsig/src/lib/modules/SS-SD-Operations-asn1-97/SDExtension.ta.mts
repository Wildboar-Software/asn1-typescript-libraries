/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary SDExtension
 * @description
 *
 * One manufacturer-specific extension, or a sequence of them, from `SDExtSet`
 * (ECMA-311 §6.3.1). No member is defined, and the standard does not say when
 * to send one extension rather than several.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-311/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SDExtension  ::=  CHOICE {
 *     extension [2] IMPLICIT Extension {{SDExtSet}},
 *     multipleExtension [3] IMPLICIT SEQUENCE OF Extension {{SDExtSet}}
 * }
 * ```
 */
export
type SDExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SDExtension: $.ASN1Decoder<SDExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SDExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SDExtension (el: _Element): SDExtension {
    if (!_cached_decoder_for_SDExtension) { _cached_decoder_for_SDExtension = $._decode_inextensible_choice<SDExtension>({
    "CONTEXT 2": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 3": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_SDExtension(el);
}

let _cached_encoder_for_SDExtension: $.ASN1Encoder<SDExtension> | null = null;

/**
 * @summary Encodes a(n) SDExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SDExtension, encoded as an ASN.1 Element.
 */
export
function _encode_SDExtension (value: SDExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SDExtension) { _cached_encoder_for_SDExtension = $._encode_choice<SDExtension>({
    "extension": $._encode_implicit(_TagClass.context, 2, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_SDExtension(value, elGetter);
}

/* eslint-enable */
