/* eslint-disable */
import { ASN1Element as _Element, NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AdministerPasswordResultData,
    _decode_AdministerPasswordResultData,
    _encode_AdministerPasswordResultData,
} from "../DirectoryAbstractService/AdministerPasswordResultData.ta.mjs";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
/**
 * @summary AdministerPasswordResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdministerPasswordResult  ::=  CHOICE {
 *   null NULL,
 *   information OPTIONALLY-PROTECTED-SEQ { AdministerPasswordResultData },
 *   ...}
 * ```
 */
export type AdministerPasswordResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<AdministerPasswordResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AdministerPasswordResult: $.ASN1Decoder<AdministerPasswordResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdministerPasswordResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AdministerPasswordResult} The decoded data structure.
 */
export function _decode_AdministerPasswordResult(el: _Element) {
    if (!_cached_decoder_for_AdministerPasswordResult) {
        /**
         * NOTE: This was manually modified to use `_decode_inextensible_choice`
         * because `AdministerPasswordResult` actually cannot be extended, because
         * `OPTIONALLY-PROTECTED-SEQ` occupies every single tag type.
         */
        _cached_decoder_for_AdministerPasswordResult = $._decode_inextensible_choice<AdministerPasswordResult>(
            {
                "UNIVERSAL 5": ["null_", $._decodeNull],
                "*": [
                    "information",
                    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<AdministerPasswordResultData>(
                        _decode_AdministerPasswordResultData
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_AdministerPasswordResult(el);
}

let _cached_encoder_for_AdministerPasswordResult: $.ASN1Encoder<AdministerPasswordResult> | null = null;

/**
 * @summary Encodes a(n) AdministerPasswordResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdministerPasswordResult, encoded as an ASN.1 Element.
 */
export function _encode_AdministerPasswordResult(
    value: AdministerPasswordResult,
    elGetter: $.ASN1Encoder<AdministerPasswordResult>
) {
    if (!_cached_encoder_for_AdministerPasswordResult) {
        _cached_encoder_for_AdministerPasswordResult = $._encode_choice<AdministerPasswordResult>(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<AdministerPasswordResultData>(
                    _encode_AdministerPasswordResultData
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AdministerPasswordResult(value, elGetter);
}


/* eslint-enable */
