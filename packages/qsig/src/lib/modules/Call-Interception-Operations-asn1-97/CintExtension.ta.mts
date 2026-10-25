/* eslint-disable */
import {
    type NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary CintExtension
 * @description
 *
 * Manufacturer-specific extension for an ANF-CINT APDU. `none`
 * carries nothing. `single` and `multiple` draw on `CINTExtSet`,
 * which ECMA-221 §6.3.1 leaves empty. This is the whole argument of
 * `cintDisable` and `cintEnable`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CintExtension  ::=  CHOICE {
 *     none NULL,
 *     single [5] IMPLICIT Extension {{CINTExtSet}},
 *     multiple [6] IMPLICIT SEQUENCE OF Extension {{CINTExtSet}}
 * }
 * ```
 */
export
type CintExtension =
    { none: NULL } /* CHOICE_ALT_ROOT */
    | { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CintExtension: $.ASN1Decoder<CintExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CintExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CintExtension (el: _Element): CintExtension {
    if (!_cached_decoder_for_CintExtension) { _cached_decoder_for_CintExtension = $._decode_inextensible_choice<CintExtension>({
    "UNIVERSAL 5": [ "none", $._decodeNull ],
    "CONTEXT 5": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 6": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_CintExtension(el);
}

let _cached_encoder_for_CintExtension: $.ASN1Encoder<CintExtension> | null = null;

/**
 * @summary Encodes a(n) CintExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CintExtension, encoded as an ASN.1 Element.
 */
export
function _encode_CintExtension (value: CintExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CintExtension) { _cached_encoder_for_CintExtension = $._encode_choice<CintExtension>({
    "none": $._encodeNull,
    "single": $._encode_implicit(_TagClass.context, 5, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_CintExtension(value, elGetter);
}

/* eslint-enable */
