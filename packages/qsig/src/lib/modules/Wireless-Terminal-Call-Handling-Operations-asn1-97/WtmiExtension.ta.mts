/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary WtmiExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WtmiExtension  ::=  CHOICE {
 *     extension [4] IMPLICIT Extension {{WTMCHExtSet}},
 *     sequOfExtn [5] IMPLICIT SEQUENCE OF Extension {{WTMCHExtSet}}
 * }
 * ```
 */
export
type WtmiExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { sequOfExtn: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_WtmiExtension: $.ASN1Decoder<WtmiExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WtmiExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WtmiExtension (el: _Element): WtmiExtension {
    if (!_cached_decoder_for_WtmiExtension) { _cached_decoder_for_WtmiExtension = $._decode_inextensible_choice<WtmiExtension>({
    "CONTEXT 4": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 5": [ "sequOfExtn", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_WtmiExtension(el);
}

let _cached_encoder_for_WtmiExtension: $.ASN1Encoder<WtmiExtension> | null = null;

/**
 * @summary Encodes a(n) WtmiExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WtmiExtension, encoded as an ASN.1 Element.
 */
export
function _encode_WtmiExtension (value: WtmiExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WtmiExtension) { _cached_encoder_for_WtmiExtension = $._encode_choice<WtmiExtension>({
    "extension": $._encode_implicit(_TagClass.context, 4, () => _encode_Extension, $.BER),
    "sequOfExtn": $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_WtmiExtension(value, elGetter);
}

/* eslint-enable */
