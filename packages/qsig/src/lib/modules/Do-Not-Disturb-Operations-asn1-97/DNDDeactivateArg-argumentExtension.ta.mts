/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary DNDDeactivateArg_argumentExtension
 * @description
 *
 * Manufacturer-specific extension on a remote deactivation request.
 * ECMA-194 §6.3.1 defines the two alternatives and registers none
 * in `DNDExtSet`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDDeactivateArg-argumentExtension ::= CHOICE {
 *     extension [1] IMPLICIT Extension {{DNDExtSet}},
 *     sequenceOfExtn [2] IMPLICIT SEQUENCE OF Extension {{DNDExtSet}}
 * }
 * ```
 */
export
type DNDDeactivateArg_argumentExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { sequenceOfExtn: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DNDDeactivateArg_argumentExtension: $.ASN1Decoder<DNDDeactivateArg_argumentExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNDDeactivateArg_argumentExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNDDeactivateArg_argumentExtension (el: _Element): DNDDeactivateArg_argumentExtension {
    if (!_cached_decoder_for_DNDDeactivateArg_argumentExtension) { _cached_decoder_for_DNDDeactivateArg_argumentExtension = $._decode_inextensible_choice<DNDDeactivateArg_argumentExtension>({
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "sequenceOfExtn", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_DNDDeactivateArg_argumentExtension(el);
}

let _cached_encoder_for_DNDDeactivateArg_argumentExtension: $.ASN1Encoder<DNDDeactivateArg_argumentExtension> | null = null;

/**
 * @summary Encodes a(n) DNDDeactivateArg_argumentExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNDDeactivateArg_argumentExtension, encoded as an ASN.1 Element.
 */
export
function _encode_DNDDeactivateArg_argumentExtension (value: DNDDeactivateArg_argumentExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNDDeactivateArg_argumentExtension) { _cached_encoder_for_DNDDeactivateArg_argumentExtension = $._encode_choice<DNDDeactivateArg_argumentExtension>({
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "sequenceOfExtn": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_DNDDeactivateArg_argumentExtension(value, elGetter);
}

/* eslint-enable */
