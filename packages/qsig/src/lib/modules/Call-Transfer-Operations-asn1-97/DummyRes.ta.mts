/* eslint-disable */
import {
    type NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary DummyRes
 * @description
 *
 * Result of `callTransferInitiate` and `callTransferSetup`. A return
 * result means the request succeeded. The procedures describe no
 * standardized result elements. `null` is that empty result. `single`
 * and `multiple` carry manufacturer extensions. ECMA-178 §6.3.1
 * defines no members of `CTExtSet`. ECMA-178 §6.5.2.3, §6.5.3.3.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DummyRes  ::=  CHOICE {
 *     null NULL,
 *     single [1] IMPLICIT Extension {{CTExtSet}},
 *     multiple [2] IMPLICIT SEQUENCE OF Extension {{CTExtSet}}
 * }
 * ```
 */
export
type DummyRes =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { single: Extension } /* CHOICE_ALT_ROOT */
    | { multiple: Extension[] } /* CHOICE_ALT_ROOT */;

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
    "CONTEXT 1": [ "single", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multiple", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
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
    "single": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multiple": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_DummyRes(value, elGetter);
}

/* eslint-enable */
