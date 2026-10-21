/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary ReAnswerArg_argumentExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReAnswerArg-argumentExtension ::= CHOICE {
 *     extension [6] IMPLICIT Extension {{REExtSet}},
 *     multipleExtension [7] IMPLICIT SEQUENCE OF Extension {{REExtSet}}
 * }
 * ```
 */
export
type ReAnswerArg_argumentExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReAnswerArg_argumentExtension: $.ASN1Decoder<ReAnswerArg_argumentExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReAnswerArg_argumentExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReAnswerArg_argumentExtension (el: _Element): ReAnswerArg_argumentExtension {
    if (!_cached_decoder_for_ReAnswerArg_argumentExtension) { _cached_decoder_for_ReAnswerArg_argumentExtension = $._decode_inextensible_choice<ReAnswerArg_argumentExtension>({
    "CONTEXT 6": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 7": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_ReAnswerArg_argumentExtension(el);
}

let _cached_encoder_for_ReAnswerArg_argumentExtension: $.ASN1Encoder<ReAnswerArg_argumentExtension> | null = null;

/**
 * @summary Encodes a(n) ReAnswerArg_argumentExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReAnswerArg_argumentExtension, encoded as an ASN.1 Element.
 */
export
function _encode_ReAnswerArg_argumentExtension (value: ReAnswerArg_argumentExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReAnswerArg_argumentExtension) { _cached_encoder_for_ReAnswerArg_argumentExtension = $._encode_choice<ReAnswerArg_argumentExtension>({
    "extension": $._encode_implicit(_TagClass.context, 6, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ReAnswerArg_argumentExtension(value, elGetter);
}

/* eslint-enable */
