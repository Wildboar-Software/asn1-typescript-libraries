/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary MCRExtensions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCRExtensions  ::=  CHOICE {
 *     none NULL,
 *     single [0] IMPLICIT Extension {{MakeCallRequestExtension}},
 *     multiple [1] IMPLICIT SEQUENCE OF Extension {{MakeCallRequestExtension}}
 * }
 * ```
 */
export
type MCRExtensions =
    { none: NULL } /* CHOICE_ALT_ROOT */
    | { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MCRExtensions: $.ASN1Decoder<MCRExtensions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCRExtensions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCRExtensions (el: _Element): MCRExtensions {
    if (!_cached_decoder_for_MCRExtensions) { _cached_decoder_for_MCRExtensions = $._decode_inextensible_choice<MCRExtensions>({
    "UNIVERSAL 5": [ "none", $._decodeNull ],
    "CONTEXT 0": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 1": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_MCRExtensions(el);
}

let _cached_encoder_for_MCRExtensions: $.ASN1Encoder<MCRExtensions> | null = null;

/**
 * @summary Encodes a(n) MCRExtensions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCRExtensions, encoded as an ASN.1 Element.
 */
export
function _encode_MCRExtensions (value: MCRExtensions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCRExtensions) { _cached_encoder_for_MCRExtensions = $._encode_choice<MCRExtensions>({
    "none": $._encodeNull,
    "single": $._encode_implicit(_TagClass.context, 0, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_MCRExtensions(value, elGetter);
}

/* eslint-enable */
