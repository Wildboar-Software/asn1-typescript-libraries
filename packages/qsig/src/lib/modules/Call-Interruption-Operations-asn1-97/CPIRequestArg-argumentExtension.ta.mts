/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
// export { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";


/**
 * @summary CPIRequestArg_argumentExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPIRequestArg-argumentExtension ::= CHOICE {
 *     extension [1] IMPLICIT Extension {{CPIPExtSet}},
 *     sequenceOfExtn [2] IMPLICIT SEQUENCE OF Extension {{CPIPExtSet}}
 * }
 * ```
 */
export
type CPIRequestArg_argumentExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { sequenceOfExtn: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CPIRequestArg_argumentExtension: $.ASN1Decoder<CPIRequestArg_argumentExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CPIRequestArg_argumentExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CPIRequestArg_argumentExtension (el: _Element): CPIRequestArg_argumentExtension {
    if (!_cached_decoder_for_CPIRequestArg_argumentExtension) { _cached_decoder_for_CPIRequestArg_argumentExtension = $._decode_inextensible_choice<CPIRequestArg_argumentExtension>({
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "sequenceOfExtn", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_CPIRequestArg_argumentExtension(el);
}

let _cached_encoder_for_CPIRequestArg_argumentExtension: $.ASN1Encoder<CPIRequestArg_argumentExtension> | null = null;

/**
 * @summary Encodes a(n) CPIRequestArg_argumentExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPIRequestArg_argumentExtension, encoded as an ASN.1 Element.
 */
export
function _encode_CPIRequestArg_argumentExtension (value: CPIRequestArg_argumentExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CPIRequestArg_argumentExtension) { _cached_encoder_for_CPIRequestArg_argumentExtension = $._encode_choice<CPIRequestArg_argumentExtension>({
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "sequenceOfExtn": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_CPIRequestArg_argumentExtension(value, elGetter);
}


/* eslint-enable */
