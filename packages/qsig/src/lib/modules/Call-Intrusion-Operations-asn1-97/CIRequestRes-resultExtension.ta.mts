/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary CIRequestRes_resultExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIRequestRes-resultExtension ::= CHOICE {
 *     extension [1] IMPLICIT Extension {{CIExtSet}},
 *     sequenceOfExtn [2] IMPLICIT SEQUENCE OF Extension {{CIExtSet}}
 * }
 * ```
 */
export
type CIRequestRes_resultExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { sequenceOfExtn: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CIRequestRes_resultExtension: $.ASN1Decoder<CIRequestRes_resultExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CIRequestRes_resultExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CIRequestRes_resultExtension (el: _Element): CIRequestRes_resultExtension {
    if (!_cached_decoder_for_CIRequestRes_resultExtension) { _cached_decoder_for_CIRequestRes_resultExtension = $._decode_inextensible_choice<CIRequestRes_resultExtension>({
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "sequenceOfExtn", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_CIRequestRes_resultExtension(el);
}

let _cached_encoder_for_CIRequestRes_resultExtension: $.ASN1Encoder<CIRequestRes_resultExtension> | null = null;

/**
 * @summary Encodes a(n) CIRequestRes_resultExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CIRequestRes_resultExtension, encoded as an ASN.1 Element.
 */
export
function _encode_CIRequestRes_resultExtension (value: CIRequestRes_resultExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CIRequestRes_resultExtension) { _cached_encoder_for_CIRequestRes_resultExtension = $._encode_choice<CIRequestRes_resultExtension>({
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "sequenceOfExtn": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_CIRequestRes_resultExtension(value, elGetter);
}

/* eslint-enable */
