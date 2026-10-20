/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary DNDActivateArg_argumentExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDActivateArg-argumentExtension ::= CHOICE {
 *     extension [1] IMPLICIT Extension {{DNDExtSet}},
 *     sequenceOfExtn [2] IMPLICIT SEQUENCE OF Extension {{DNDExtSet}}
 * }
 * ```
 */
export
type DNDActivateArg_argumentExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { sequenceOfExtn: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DNDActivateArg_argumentExtension: $.ASN1Decoder<DNDActivateArg_argumentExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNDActivateArg_argumentExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNDActivateArg_argumentExtension (el: _Element): DNDActivateArg_argumentExtension {
    if (!_cached_decoder_for_DNDActivateArg_argumentExtension) { _cached_decoder_for_DNDActivateArg_argumentExtension = $._decode_inextensible_choice<DNDActivateArg_argumentExtension>({
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "sequenceOfExtn", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_DNDActivateArg_argumentExtension(el);
}

let _cached_encoder_for_DNDActivateArg_argumentExtension: $.ASN1Encoder<DNDActivateArg_argumentExtension> | null = null;

/**
 * @summary Encodes a(n) DNDActivateArg_argumentExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNDActivateArg_argumentExtension, encoded as an ASN.1 Element.
 */
export
function _encode_DNDActivateArg_argumentExtension (value: DNDActivateArg_argumentExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNDActivateArg_argumentExtension) { _cached_encoder_for_DNDActivateArg_argumentExtension = $._encode_choice<DNDActivateArg_argumentExtension>({
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "sequenceOfExtn": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_DNDActivateArg_argumentExtension(value, elGetter);
}

/* eslint-enable */
