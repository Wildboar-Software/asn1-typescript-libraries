/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary DummyRes
 * @description
 *
 * Result of `doNotDisturbDeactivateQ` and of
 * `doNotDisturbOvrExecuteQ`. ECMA-194 §6.3.1 defines no service
 * parameters: `null`, or a manufacturer extension from the empty
 * `DNDExtSet`. Acceptance is the return result itself; SS-DND
 * deactivation does not echo the basic service or DNDPL
 * (ECMA-193 §8.2.1.7).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DummyRes  ::=  CHOICE {
 *     null NULL,
 *     extension [1] IMPLICIT Extension {{DNDExtSet}},
 *     sequenceOfExtn [2] IMPLICIT SEQUENCE OF Extension {{DNDExtSet}}
 * }
 * ```
 */
export
type DummyRes =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { extension: Extension } /* CHOICE_ALT_ROOT */
    | { sequenceOfExtn: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DummyRes: $.ASN1Decoder<DummyRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DummyRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DummyRes (el: _Element): DummyRes {
    if (!_cached_decoder_for_DummyRes) { _cached_decoder_for_DummyRes = $._decode_inextensible_choice<DummyRes>({
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "sequenceOfExtn", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_DummyRes(el);
}

let _cached_encoder_for_DummyRes: $.ASN1Encoder<DummyRes> | null = null;

/**
 * @summary Encodes a(n) DummyRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DummyRes, encoded as an ASN.1 Element.
 */
export
function _encode_DummyRes (value: DummyRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DummyRes) { _cached_encoder_for_DummyRes = $._encode_choice<DummyRes>({
    "null_": $._encodeNull,
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "sequenceOfExtn": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_DummyRes(value, elGetter);
}

/* eslint-enable */
