/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary DNDActivateRes_resultExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDActivateRes-resultExtension ::= CHOICE {
 *     extension [1] IMPLICIT Extension {{DNDExtSet}},
 *     sequenceOfExtn [2] IMPLICIT SEQUENCE OF Extension {{DNDExtSet}}
 * }
 * ```
 */
export
type DNDActivateRes_resultExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { sequenceOfExtn: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DNDActivateRes_resultExtension: $.ASN1Decoder<DNDActivateRes_resultExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNDActivateRes_resultExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNDActivateRes_resultExtension (el: _Element): DNDActivateRes_resultExtension {
    if (!_cached_decoder_for_DNDActivateRes_resultExtension) { _cached_decoder_for_DNDActivateRes_resultExtension = $._decode_inextensible_choice<DNDActivateRes_resultExtension>({
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "sequenceOfExtn", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_DNDActivateRes_resultExtension(el);
}

let _cached_encoder_for_DNDActivateRes_resultExtension: $.ASN1Encoder<DNDActivateRes_resultExtension> | null = null;

/**
 * @summary Encodes a(n) DNDActivateRes_resultExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNDActivateRes_resultExtension, encoded as an ASN.1 Element.
 */
export
function _encode_DNDActivateRes_resultExtension (value: DNDActivateRes_resultExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNDActivateRes_resultExtension) { _cached_encoder_for_DNDActivateRes_resultExtension = $._encode_choice<DNDActivateRes_resultExtension>({
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "sequenceOfExtn": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_DNDActivateRes_resultExtension(value, elGetter);
}

/* eslint-enable */
