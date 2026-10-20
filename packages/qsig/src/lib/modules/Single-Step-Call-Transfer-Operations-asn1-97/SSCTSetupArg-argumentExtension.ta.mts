/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
// export { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";


/**
 * @summary SSCTSetupArg_argumentExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSCTSetupArg-argumentExtension ::= CHOICE {
 *     single [3] IMPLICIT Extension {{SSCTExtSet}},
 *     multiple [4] IMPLICIT SEQUENCE OF Extension {{SSCTExtSet}}
 * }
 * ```
 */
export
type SSCTSetupArg_argumentExtension =
    { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SSCTSetupArg_argumentExtension: $.ASN1Decoder<SSCTSetupArg_argumentExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SSCTSetupArg_argumentExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SSCTSetupArg_argumentExtension (el: _Element): SSCTSetupArg_argumentExtension {
    if (!_cached_decoder_for_SSCTSetupArg_argumentExtension) { _cached_decoder_for_SSCTSetupArg_argumentExtension = $._decode_inextensible_choice<SSCTSetupArg_argumentExtension>({
    "CONTEXT 3": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 4": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_SSCTSetupArg_argumentExtension(el);
}

let _cached_encoder_for_SSCTSetupArg_argumentExtension: $.ASN1Encoder<SSCTSetupArg_argumentExtension> | null = null;

/**
 * @summary Encodes a(n) SSCTSetupArg_argumentExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SSCTSetupArg_argumentExtension, encoded as an ASN.1 Element.
 */
export
function _encode_SSCTSetupArg_argumentExtension (value: SSCTSetupArg_argumentExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SSCTSetupArg_argumentExtension) { _cached_encoder_for_SSCTSetupArg_argumentExtension = $._encode_choice<SSCTSetupArg_argumentExtension>({
    "single": $._encode_implicit(_TagClass.context, 3, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_SSCTSetupArg_argumentExtension(value, elGetter);
}


/* eslint-enable */
