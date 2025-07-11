/* eslint-disable */
import { ASN1Element as _Element, NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ModifyEntryResultData,
    _decode_ModifyEntryResultData,
    _encode_ModifyEntryResultData,
} from "../DirectoryAbstractService/ModifyEntryResultData.ta.mjs";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
/**
 * @summary ModifyEntryResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyEntryResult  ::=  CHOICE {
 *   null         NULL,
 *   information  OPTIONALLY-PROTECTED-SEQ { ModifyEntryResultData },
 *   ... }
 * ```
 */
export type ModifyEntryResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<ModifyEntryResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ModifyEntryResult: $.ASN1Decoder<ModifyEntryResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyEntryResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyEntryResult} The decoded data structure.
 */
export function _decode_ModifyEntryResult(el: _Element): ModifyEntryResult {
    if (!_cached_decoder_for_ModifyEntryResult) {
        /**
         * NOTE: This was manually modified to use `_decode_inextensible_choice`
         * because `ModifyEntryResult` actually cannot be extended, because
         * `OPTIONALLY-PROTECTED-SEQ` occupies every single tag type.
         */
        _cached_decoder_for_ModifyEntryResult = $._decode_inextensible_choice<ModifyEntryResult>(
            {
                "UNIVERSAL 5": ["null_", $._decodeNull],
                "*": [
                    "information",
                    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<ModifyEntryResultData>(
                        _decode_ModifyEntryResultData
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ModifyEntryResult(el);
}

let _cached_encoder_for_ModifyEntryResult: $.ASN1Encoder<ModifyEntryResult> | null = null;

/**
 * @summary Encodes a(n) ModifyEntryResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyEntryResult, encoded as an ASN.1 Element.
 */
export function _encode_ModifyEntryResult(
    value: ModifyEntryResult,
    elGetter: $.ASN1Encoder<ModifyEntryResult>
): _Element {
    if (!_cached_encoder_for_ModifyEntryResult) {
        _cached_encoder_for_ModifyEntryResult = $._encode_choice<ModifyEntryResult>(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<ModifyEntryResultData>(
                    _encode_ModifyEntryResultData
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ModifyEntryResult(value, elGetter);
}


/* eslint-enable */
