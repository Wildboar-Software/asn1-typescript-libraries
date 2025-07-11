/* eslint-disable */
import { ASN1Element as _Element, NULL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ModifyDNResultData,
    _decode_ModifyDNResultData,
    _encode_ModifyDNResultData,
} from "../DirectoryAbstractService/ModifyDNResultData.ta.mjs";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
/**
 * @summary ModifyDNResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyDNResult  ::=  CHOICE {
 *   null         NULL,
 *   information  OPTIONALLY-PROTECTED-SEQ { ModifyDNResultData },
 *   ... }
 * ```
 */
export type ModifyDNResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          information: OPTIONALLY_PROTECTED_SEQ<ModifyDNResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ModifyDNResult: $.ASN1Decoder<ModifyDNResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyDNResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyDNResult} The decoded data structure.
 */
export function _decode_ModifyDNResult(el: _Element): ModifyDNResult {
    if (!_cached_decoder_for_ModifyDNResult) {
        /**
         * NOTE: This was manually modified to use `_decode_inextensible_choice`
         * because `ModifyDNResult` actually cannot be extended, because
         * `OPTIONALLY-PROTECTED-SEQ` occupies every single tag type.
         */
        _cached_decoder_for_ModifyDNResult = $._decode_inextensible_choice<ModifyDNResult>(
            {
                "UNIVERSAL 5": ["null_", $._decodeNull],
                "*": [
                    "information",
                    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<ModifyDNResultData>(
                        _decode_ModifyDNResultData
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ModifyDNResult(el);
}

let _cached_encoder_for_ModifyDNResult: $.ASN1Encoder<ModifyDNResult> | null = null;

/**
 * @summary Encodes a(n) ModifyDNResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyDNResult, encoded as an ASN.1 Element.
 */
export function _encode_ModifyDNResult(
    value: ModifyDNResult,
    elGetter: $.ASN1Encoder<ModifyDNResult>
): _Element {
    if (!_cached_encoder_for_ModifyDNResult) {
        _cached_encoder_for_ModifyDNResult = $._encode_choice<ModifyDNResult>(
            {
                null_: $._encodeNull,
                information: _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<ModifyDNResultData>(
                    _encode_ModifyDNResultData
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ModifyDNResult(value, elGetter);
}


/* eslint-enable */
