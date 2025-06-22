/* eslint-disable */
import { ASN1Element as _Element, NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AddEntryResultData,
    _decode_AddEntryResultData,
    _encode_AddEntryResultData,
} from "../DirectoryAbstractService/AddEntryResultData.ta.mjs";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
/**
 * @summary AddEntryResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddEntryResult  ::=  CHOICE {
 *   null          NULL,
 *   information   OPTIONALLY-PROTECTED-SEQ { AddEntryResultData },
 *   ... }
 * ```
 */
export type AddEntryResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<AddEntryResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AddEntryResult: $.ASN1Decoder<AddEntryResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddEntryResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddEntryResult} The decoded data structure.
 */
export function _decode_AddEntryResult(el: _Element) {
    if (!_cached_decoder_for_AddEntryResult) {
        /**
         * NOTE: This was manually modified to use `_decode_inextensible_choice`
         * because `AddEntryResult` actually cannot be extended, because
         * `OPTIONALLY-PROTECTED-SEQ` occupies every single tag type.
         */
        _cached_decoder_for_AddEntryResult = $._decode_inextensible_choice<AddEntryResult>(
            {
                "UNIVERSAL 5": ["null_", $._decodeNull],
                "*": [
                    "information",
                    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<AddEntryResultData>(
                        _decode_AddEntryResultData
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_AddEntryResult(el);
}

let _cached_encoder_for_AddEntryResult: $.ASN1Encoder<AddEntryResult> | null = null;

/**
 * @summary Encodes a(n) AddEntryResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddEntryResult, encoded as an ASN.1 Element.
 */
export function _encode_AddEntryResult(
    value: AddEntryResult,
    elGetter: $.ASN1Encoder<AddEntryResult>
) {
    if (!_cached_encoder_for_AddEntryResult) {
        _cached_encoder_for_AddEntryResult = $._encode_choice<AddEntryResult>(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<AddEntryResultData>(
                    _encode_AddEntryResultData
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_AddEntryResult(value, elGetter);
}


/* eslint-enable */
