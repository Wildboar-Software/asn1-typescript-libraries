/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
// export { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";


/**
 * @summary LrExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LrExtension  ::=  CHOICE {
 *     extension [1] IMPLICIT Extension {{WTMLRExtSet}},
 *     sequOfExtn [2] IMPLICIT SEQUENCE OF Extension {{WTMLRExtSet}}
 * }
 * ```
 */
export
type LrExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { sequOfExtn: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LrExtension: $.ASN1Decoder<LrExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LrExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LrExtension (el: _Element): LrExtension {
    if (!_cached_decoder_for_LrExtension) { _cached_decoder_for_LrExtension = $._decode_inextensible_choice<LrExtension>({
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "sequOfExtn", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_LrExtension(el);
}

let _cached_encoder_for_LrExtension: $.ASN1Encoder<LrExtension> | null = null;

/**
 * @summary Encodes a(n) LrExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LrExtension, encoded as an ASN.1 Element.
 */
export
function _encode_LrExtension (value: LrExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LrExtension) { _cached_encoder_for_LrExtension = $._encode_choice<LrExtension>({
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "sequOfExtn": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_LrExtension(value, elGetter);
}


/* eslint-enable */
