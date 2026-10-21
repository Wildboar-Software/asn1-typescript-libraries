/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary CcExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CcExtension  ::=  CHOICE {
 *     none NULL,
 *     single [14] IMPLICIT Extension {{CCExtSet}},
 *     multiple [15] IMPLICIT SEQUENCE OF Extension {{CCExtSet}}
 * }
 * ```
 */
export
type CcExtension =
    { none: NULL } /* CHOICE_ALT_ROOT */
    | { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CcExtension: $.ASN1Decoder<CcExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CcExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CcExtension (el: _Element): CcExtension {
    if (!_cached_decoder_for_CcExtension) { _cached_decoder_for_CcExtension = $._decode_inextensible_choice<CcExtension>({
    "UNIVERSAL 5": [ "none", $._decodeNull ],
    "CONTEXT 14": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 15": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_CcExtension(el);
}

let _cached_encoder_for_CcExtension: $.ASN1Encoder<CcExtension> | null = null;

/**
 * @summary Encodes a(n) CcExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CcExtension, encoded as an ASN.1 Element.
 */
export
function _encode_CcExtension (value: CcExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CcExtension) { _cached_encoder_for_CcExtension = $._encode_choice<CcExtension>({
    "none": $._encodeNull,
    "single": $._encode_implicit(_TagClass.context, 14, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 15, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_CcExtension(value, elGetter);
}

/* eslint-enable */
