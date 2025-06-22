/* eslint-disable */
import { ASN1Element as _Element, NULL } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    RemoveEntryResultData,
    _decode_RemoveEntryResultData,
    _encode_RemoveEntryResultData,
} from "../DirectoryAbstractService/RemoveEntryResultData.ta.mjs";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
/**
 * @summary RemoveEntryResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveEntryResult  ::=  CHOICE {
 *   null          NULL,
 *   information   OPTIONALLY-PROTECTED-SEQ { RemoveEntryResultData },
 *   ... }
 * ```
 */
export type RemoveEntryResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<RemoveEntryResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_RemoveEntryResult: $.ASN1Decoder<RemoveEntryResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoveEntryResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveEntryResult} The decoded data structure.
 */
export function _decode_RemoveEntryResult(el: _Element) {
    if (!_cached_decoder_for_RemoveEntryResult) {
        /**
         * NOTE: This was manually modified to use `_decode_inextensible_choice`
         * because `RemoveEntryResult` actually cannot be extended, because
         * `OPTIONALLY-PROTECTED-SEQ` occupies every single tag type.
         */
        _cached_decoder_for_RemoveEntryResult = $._decode_inextensible_choice<RemoveEntryResult>(
            {
                "UNIVERSAL 5": ["null_", $._decodeNull],
                "*": [
                    "information",
                    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<RemoveEntryResultData>(
                        _decode_RemoveEntryResultData
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RemoveEntryResult(el);
}

let _cached_encoder_for_RemoveEntryResult: $.ASN1Encoder<RemoveEntryResult> | null = null;

/**
 * @summary Encodes a(n) RemoveEntryResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveEntryResult, encoded as an ASN.1 Element.
 */
export function _encode_RemoveEntryResult(
    value: RemoveEntryResult,
    elGetter: $.ASN1Encoder<RemoveEntryResult>
) {
    if (!_cached_encoder_for_RemoveEntryResult) {
        _cached_encoder_for_RemoveEntryResult = $._encode_choice<RemoveEntryResult>(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<RemoveEntryResultData>(
                    _encode_RemoveEntryResultData
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RemoveEntryResult(value, elGetter);
}


/* eslint-enable */
