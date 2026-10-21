/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary DummyArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DummyArg  ::=  CHOICE {
 *     none NULL,
 *     extension [1] IMPLICIT Extension {{AOCExtSet}},
 *     multipleExtension [2] IMPLICIT SEQUENCE OF Extension {{AOCExtSet}}
 * }
 * ```
 */
export
type DummyArg =
    { none: NULL } /* CHOICE_ALT_ROOT */
    | { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DummyArg: $.ASN1Decoder<DummyArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DummyArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DummyArg (el: _Element): DummyArg {
    if (!_cached_decoder_for_DummyArg) { _cached_decoder_for_DummyArg = $._decode_inextensible_choice<DummyArg>({
    "UNIVERSAL 5": [ "none", $._decodeNull ],
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_DummyArg(el);
}

let _cached_encoder_for_DummyArg: $.ASN1Encoder<DummyArg> | null = null;

/**
 * @summary Encodes a(n) DummyArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DummyArg, encoded as an ASN.1 Element.
 */
export
function _encode_DummyArg (value: DummyArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DummyArg) { _cached_encoder_for_DummyArg = $._encode_choice<DummyArg>({
    "none": $._encodeNull,
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_DummyArg(value, elGetter);
}

/* eslint-enable */
