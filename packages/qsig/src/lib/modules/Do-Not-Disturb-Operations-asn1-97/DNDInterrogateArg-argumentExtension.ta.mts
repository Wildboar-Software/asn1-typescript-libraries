/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary DNDInterrogateArg_argumentExtension
 * @description
 *
 * Manufacturer-specific extension on a remote interrogation request.
 * ECMA-194 §6.3.1 defines the two alternatives and registers none
 * in `DNDExtSet`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDInterrogateArg-argumentExtension ::= CHOICE {
 *     extension [1] IMPLICIT Extension {{DNDExtSet}},
 *     sequenceOfExtn [2] IMPLICIT SEQUENCE OF Extension {{DNDExtSet}}
 * }
 * ```
 */
export
type DNDInterrogateArg_argumentExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { sequenceOfExtn: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DNDInterrogateArg_argumentExtension: $.ASN1Decoder<DNDInterrogateArg_argumentExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNDInterrogateArg_argumentExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNDInterrogateArg_argumentExtension (el: _Element): DNDInterrogateArg_argumentExtension {
    if (!_cached_decoder_for_DNDInterrogateArg_argumentExtension) { _cached_decoder_for_DNDInterrogateArg_argumentExtension = $._decode_inextensible_choice<DNDInterrogateArg_argumentExtension>({
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "sequenceOfExtn", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_DNDInterrogateArg_argumentExtension(el);
}

let _cached_encoder_for_DNDInterrogateArg_argumentExtension: $.ASN1Encoder<DNDInterrogateArg_argumentExtension> | null = null;

/**
 * @summary Encodes a(n) DNDInterrogateArg_argumentExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNDInterrogateArg_argumentExtension, encoded as an ASN.1 Element.
 */
export
function _encode_DNDInterrogateArg_argumentExtension (value: DNDInterrogateArg_argumentExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNDInterrogateArg_argumentExtension) { _cached_encoder_for_DNDInterrogateArg_argumentExtension = $._encode_choice<DNDInterrogateArg_argumentExtension>({
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "sequenceOfExtn": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_DNDInterrogateArg_argumentExtension(value, elGetter);
}

/* eslint-enable */
