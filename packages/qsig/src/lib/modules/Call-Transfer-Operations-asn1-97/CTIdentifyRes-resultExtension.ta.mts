/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary CTIdentifyRes_resultExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CTIdentifyRes-resultExtension ::= CHOICE {
 *     single [6] IMPLICIT Extension {{CTExtSet}},
 *     multiple [7] IMPLICIT SEQUENCE OF Extension {{CTExtSet}}
 * }
 * ```
 */
export
type CTIdentifyRes_resultExtension =
    { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CTIdentifyRes_resultExtension: $.ASN1Decoder<CTIdentifyRes_resultExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CTIdentifyRes_resultExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CTIdentifyRes_resultExtension (el: _Element): CTIdentifyRes_resultExtension {
    if (!_cached_decoder_for_CTIdentifyRes_resultExtension) { _cached_decoder_for_CTIdentifyRes_resultExtension = $._decode_inextensible_choice<CTIdentifyRes_resultExtension>({
    "CONTEXT 6": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 7": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_CTIdentifyRes_resultExtension(el);
}

let _cached_encoder_for_CTIdentifyRes_resultExtension: $.ASN1Encoder<CTIdentifyRes_resultExtension> | null = null;

/**
 * @summary Encodes a(n) CTIdentifyRes_resultExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTIdentifyRes_resultExtension, encoded as an ASN.1 Element.
 */
export
function _encode_CTIdentifyRes_resultExtension (value: CTIdentifyRes_resultExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CTIdentifyRes_resultExtension) { _cached_encoder_for_CTIdentifyRes_resultExtension = $._encode_choice<CTIdentifyRes_resultExtension>({
    "single": $._encode_implicit(_TagClass.context, 6, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_CTIdentifyRes_resultExtension(value, elGetter);
}

/* eslint-enable */
