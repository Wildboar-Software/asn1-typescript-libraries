/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
// export { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";


/**
 * @summary CTCompleteArg_argumentExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTCompleteArg-argumentExtension ::= CHOICE {
 *     single [9] IMPLICIT Extension {{CTExtSet}},
 *     multiple [10] IMPLICIT SEQUENCE OF Extension {{CTExtSet}}
 * }
 * ```
 */
export
type CTCompleteArg_argumentExtension =
    { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CTCompleteArg_argumentExtension: $.ASN1Decoder<CTCompleteArg_argumentExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CTCompleteArg_argumentExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CTCompleteArg_argumentExtension (el: _Element): CTCompleteArg_argumentExtension {
    if (!_cached_decoder_for_CTCompleteArg_argumentExtension) { _cached_decoder_for_CTCompleteArg_argumentExtension = $._decode_inextensible_choice<CTCompleteArg_argumentExtension>({
    "CONTEXT 9": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 10": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_CTCompleteArg_argumentExtension(el);
}

let _cached_encoder_for_CTCompleteArg_argumentExtension: $.ASN1Encoder<CTCompleteArg_argumentExtension> | null = null;

/**
 * @summary Encodes a(n) CTCompleteArg_argumentExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTCompleteArg_argumentExtension, encoded as an ASN.1 Element.
 */
export
function _encode_CTCompleteArg_argumentExtension (value: CTCompleteArg_argumentExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CTCompleteArg_argumentExtension) { _cached_encoder_for_CTCompleteArg_argumentExtension = $._encode_choice<CTCompleteArg_argumentExtension>({
    "single": $._encode_implicit(_TagClass.context, 9, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_CTCompleteArg_argumentExtension(value, elGetter);
}


/* eslint-enable */
