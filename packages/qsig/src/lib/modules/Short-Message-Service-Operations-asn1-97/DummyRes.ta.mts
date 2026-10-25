/* eslint-disable */
import {
    type NULL,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SmsExtension, _decode_SmsExtension, _encode_SmsExtension } from "../Short-Message-Service-Operations-asn1-97/SmsExtension.ta.mjs";

/**
 * @summary DummyRes
 * @description
 *
 * Result of `scAlert` (ECMA-325 §6.3.1). Either `null` or a
 * manufacturer-specific `smsExtension`. §6.5.3.2.1 says the Service Centre
 * returns a result or an error after checking the alert. It defines neither
 * the result contents nor what makes an alert invalid.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DummyRes  ::=  CHOICE {
 *     null NULL,
 *     smsExtension SmsExtension
 * }
 * ```
 */
export
type DummyRes =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { smsExtension: SmsExtension } /* CHOICE_ALT_ROOT */;

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
    "CONTEXT 1": [ "smsExtension", _decode_SmsExtension ],
    "CONTEXT 2": [ "smsExtension", _decode_SmsExtension ]
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
    "smsExtension": _encode_SmsExtension,
}, $.BER); }
    return _cached_encoder_for_DummyRes(value, elGetter);
}

/* eslint-enable */
