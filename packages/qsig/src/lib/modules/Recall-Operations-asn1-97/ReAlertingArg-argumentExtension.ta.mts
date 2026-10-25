/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary ReAlertingArg_argumentExtension
 * @description
 *
 * Manufacturer-specific extension on `recallAlerting`. Either one extension or
 * a sequence of them, from `REExtSet`. The standardized set is empty (ECMA-214
 * §6.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-214/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReAlertingArg-argumentExtension ::= CHOICE {
 *     extension [6] IMPLICIT Extension {{REExtSet}},
 *     multipleExtension [7] IMPLICIT SEQUENCE OF Extension {{REExtSet}}
 * }
 * ```
 */
export
type ReAlertingArg_argumentExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReAlertingArg_argumentExtension: $.ASN1Decoder<ReAlertingArg_argumentExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReAlertingArg_argumentExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReAlertingArg_argumentExtension (el: _Element): ReAlertingArg_argumentExtension {
    if (!_cached_decoder_for_ReAlertingArg_argumentExtension) { _cached_decoder_for_ReAlertingArg_argumentExtension = $._decode_inextensible_choice<ReAlertingArg_argumentExtension>({
    "CONTEXT 6": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 7": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_ReAlertingArg_argumentExtension(el);
}

let _cached_encoder_for_ReAlertingArg_argumentExtension: $.ASN1Encoder<ReAlertingArg_argumentExtension> | null = null;

/**
 * @summary Encodes a(n) ReAlertingArg_argumentExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReAlertingArg_argumentExtension, encoded as an ASN.1 Element.
 */
export
function _encode_ReAlertingArg_argumentExtension (value: ReAlertingArg_argumentExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReAlertingArg_argumentExtension) { _cached_encoder_for_ReAlertingArg_argumentExtension = $._encode_choice<ReAlertingArg_argumentExtension>({
    "extension": $._encode_implicit(_TagClass.context, 6, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ReAlertingArg_argumentExtension(value, elGetter);
}

/* eslint-enable */
