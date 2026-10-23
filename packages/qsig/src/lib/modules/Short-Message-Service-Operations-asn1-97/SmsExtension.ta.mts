/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary SmsExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmsExtension  ::=  CHOICE {
 *     single [1] IMPLICIT Extension {{SmsExtSet}},
 *     multiple [2] IMPLICIT SEQUENCE OF Extension {{SmsExtSet}}
 * }
 * ```
 */
export
type SmsExtension =
    { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SmsExtension: $.ASN1Decoder<SmsExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SmsExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SmsExtension (el: _Element): SmsExtension {
    if (!_cached_decoder_for_SmsExtension) { _cached_decoder_for_SmsExtension = $._decode_inextensible_choice<SmsExtension>({
    "CONTEXT 1": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_SmsExtension(el);
}

let _cached_encoder_for_SmsExtension: $.ASN1Encoder<SmsExtension> | null = null;

/**
 * @summary Encodes a(n) SmsExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmsExtension, encoded as an ASN.1 Element.
 */
export
function _encode_SmsExtension (value: SmsExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SmsExtension) { _cached_encoder_for_SmsExtension = $._encode_choice<SmsExtension>({
    "single": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_SmsExtension(value, elGetter);
}

/* eslint-enable */
