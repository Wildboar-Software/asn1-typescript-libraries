/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary DummyExtension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DummyExtension  ::=  CHOICE {
 *     extension [5] IMPLICIT Extension {{WTMAuthExtSet}},
 *     sequOfExtn [6] IMPLICIT SEQUENCE OF Extension {{WTMAuthExtSet}}
 * }
 * ```
 */
export
type DummyExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { sequOfExtn: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DummyExtension: $.ASN1Decoder<DummyExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DummyExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DummyExtension (el: _Element): DummyExtension {
    if (!_cached_decoder_for_DummyExtension) { _cached_decoder_for_DummyExtension = $._decode_inextensible_choice<DummyExtension>({
    "CONTEXT 5": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 6": [ "sequOfExtn", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_DummyExtension(el);
}

let _cached_encoder_for_DummyExtension: $.ASN1Encoder<DummyExtension> | null = null;

/**
 * @summary Encodes a(n) DummyExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DummyExtension, encoded as an ASN.1 Element.
 */
export
function _encode_DummyExtension (value: DummyExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DummyExtension) { _cached_encoder_for_DummyExtension = $._encode_choice<DummyExtension>({
    "extension": $._encode_implicit(_TagClass.context, 5, () => _encode_Extension, $.BER),
    "sequOfExtn": $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_DummyExtension(value, elGetter);
}

/* eslint-enable */
