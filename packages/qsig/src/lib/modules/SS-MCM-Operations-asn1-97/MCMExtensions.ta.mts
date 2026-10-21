/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary MCMExtensions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMExtensions  ::=  CHOICE {
 *     none NULL,
 *     extension [1] IMPLICIT Extension {{MCMExtSet}},
 *     multipleExtension [2] IMPLICIT SEQUENCE OF Extension {{MCMExtSet}}
 * }
 * ```
 */
export
type MCMExtensions =
    { none: NULL } /* CHOICE_ALT_ROOT */
    | { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MCMExtensions: $.ASN1Decoder<MCMExtensions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCMExtensions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCMExtensions (el: _Element): MCMExtensions {
    if (!_cached_decoder_for_MCMExtensions) { _cached_decoder_for_MCMExtensions = $._decode_inextensible_choice<MCMExtensions>({
    "UNIVERSAL 5": [ "none", $._decodeNull ],
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_MCMExtensions(el);
}

let _cached_encoder_for_MCMExtensions: $.ASN1Encoder<MCMExtensions> | null = null;

/**
 * @summary Encodes a(n) MCMExtensions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMExtensions, encoded as an ASN.1 Element.
 */
export
function _encode_MCMExtensions (value: MCMExtensions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCMExtensions) { _cached_encoder_for_MCMExtensions = $._encode_choice<MCMExtensions>({
    "none": $._encodeNull,
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_MCMExtensions(value, elGetter);
}

/* eslint-enable */
