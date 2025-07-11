/* eslint-disable */
import { ASN1Element as _Element, ASN1TagClass as _TagClass } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SenderDhPublicKey,
    _decode_SenderDhPublicKey,
    _encode_SenderDhPublicKey,
} from "../PkiPmiWrapper/SenderDhPublicKey.ta.mjs";
import {
    SenderStaticInfo,
    _decode_SenderStaticInfo,
    _encode_SenderStaticInfo,
} from "../PkiPmiWrapper/SenderStaticInfo.ta.mjs";
/**
 * @summary SenderDhInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SenderDhInfo  ::=  CHOICE {
 *   senderStaticInfo   [0] SenderStaticInfo,
 *   senderDhPublicKey  [1] SenderDhPublicKey,
 *   ... }
 * ```
 */
export type SenderDhInfo =
    | { senderStaticInfo: SenderStaticInfo } /* CHOICE_ALT_ROOT */
    | { senderDhPublicKey: SenderDhPublicKey } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SenderDhInfo: $.ASN1Decoder<SenderDhInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SenderDhInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SenderDhInfo} The decoded data structure.
 */
export function _decode_SenderDhInfo(el: _Element): SenderDhInfo {
    if (!_cached_decoder_for_SenderDhInfo) {
        _cached_decoder_for_SenderDhInfo = $._decode_extensible_choice<SenderDhInfo>(
            {
                "CONTEXT 0": [
                    "senderStaticInfo",
                    $._decode_explicit<SenderStaticInfo>(
                        () => _decode_SenderStaticInfo
                    ),
                ],
                "CONTEXT 1": [
                    "senderDhPublicKey",
                    $._decode_explicit<SenderDhPublicKey>(
                        () => _decode_SenderDhPublicKey
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_SenderDhInfo(el);
}

let _cached_encoder_for_SenderDhInfo: $.ASN1Encoder<SenderDhInfo> | null = null;

/**
 * @summary Encodes a(n) SenderDhInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SenderDhInfo, encoded as an ASN.1 Element.
 */
export function _encode_SenderDhInfo(
    value: SenderDhInfo,
    elGetter: $.ASN1Encoder<SenderDhInfo>
): _Element {
    if (!_cached_encoder_for_SenderDhInfo) {
        _cached_encoder_for_SenderDhInfo = $._encode_choice<SenderDhInfo>(
            {
                senderStaticInfo: $._encode_explicit(
                    _TagClass.context,
                    0,
                    () => _encode_SenderStaticInfo,
                    $.DER
                ),
                senderDhPublicKey: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () => _encode_SenderDhPublicKey,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_SenderDhInfo(value, elGetter);
}


/* eslint-enable */
