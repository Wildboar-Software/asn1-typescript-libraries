/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
// export { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";


/**
 * @summary SSCTDigitInfoArg_argumentExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSCTDigitInfoArg-argumentExtension ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SSCTDigitInfoArg_argumentExtension =
    { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SSCTDigitInfoArg_argumentExtension: $.ASN1Decoder<SSCTDigitInfoArg_argumentExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SSCTDigitInfoArg_argumentExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SSCTDigitInfoArg_argumentExtension (el: _Element): SSCTDigitInfoArg_argumentExtension {
    if (!_cached_decoder_for_SSCTDigitInfoArg_argumentExtension) { _cached_decoder_for_SSCTDigitInfoArg_argumentExtension = $._decode_inextensible_choice<SSCTDigitInfoArg_argumentExtension>({
    "CONTEXT 3": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 4": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_SSCTDigitInfoArg_argumentExtension(el);
}

let _cached_encoder_for_SSCTDigitInfoArg_argumentExtension: $.ASN1Encoder<SSCTDigitInfoArg_argumentExtension> | null = null;

/**
 * @summary Encodes a(n) SSCTDigitInfoArg_argumentExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SSCTDigitInfoArg_argumentExtension, encoded as an ASN.1 Element.
 */
export
function _encode_SSCTDigitInfoArg_argumentExtension (value: SSCTDigitInfoArg_argumentExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SSCTDigitInfoArg_argumentExtension) { _cached_encoder_for_SSCTDigitInfoArg_argumentExtension = $._encode_choice<SSCTDigitInfoArg_argumentExtension>({
    "single": $._encode_implicit(_TagClass.context, 3, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_SSCTDigitInfoArg_argumentExtension(value, elGetter);
}


/* eslint-enable */
