/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONALLY_PROTECTED_SEQ,
    _get_decoder_for_OPTIONALLY_PROTECTED_SEQ,
    _get_encoder_for_OPTIONALLY_PROTECTED_SEQ,
} from "../EnhancedSecurity/OPTIONALLY-PROTECTED-SEQ.ta.mjs";
import {
    TerminateOperationalBindingResultData,
    _decode_TerminateOperationalBindingResultData,
    _encode_TerminateOperationalBindingResultData,
} from "../OperationalBindingManagement/TerminateOperationalBindingResultData.ta.mjs";
/**
 * @summary TerminateOperationalBindingResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateOperationalBindingResult  ::=  CHOICE {
 *   null            NULL,
 *   protected  [1]  OPTIONALLY-PROTECTED-SEQ{ TerminateOperationalBindingResultData },
 *   ... }
 * ```
 */
export type TerminateOperationalBindingResult =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | {
          protected_: OPTIONALLY_PROTECTED_SEQ<TerminateOperationalBindingResultData>;
      } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_TerminateOperationalBindingResult: $.ASN1Decoder<TerminateOperationalBindingResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminateOperationalBindingResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminateOperationalBindingResult} The decoded data structure.
 */
export function _decode_TerminateOperationalBindingResult(el: _Element) {
    if (!_cached_decoder_for_TerminateOperationalBindingResult) {
        _cached_decoder_for_TerminateOperationalBindingResult = $._decode_extensible_choice<TerminateOperationalBindingResult>(
            {
                "UNIVERSAL 5": ["null_", $._decodeNull],
                "CONTEXT 1": [
                    "protected_",
                    $._decode_explicit<
                        OPTIONALLY_PROTECTED_SEQ<TerminateOperationalBindingResultData>
                    >(() =>
                        _get_decoder_for_OPTIONALLY_PROTECTED_SEQ<TerminateOperationalBindingResultData>(
                            _decode_TerminateOperationalBindingResultData
                        )
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_TerminateOperationalBindingResult(el);
}

let _cached_encoder_for_TerminateOperationalBindingResult: $.ASN1Encoder<TerminateOperationalBindingResult> | null = null;

/**
 * @summary Encodes a(n) TerminateOperationalBindingResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateOperationalBindingResult, encoded as an ASN.1 Element.
 */
export function _encode_TerminateOperationalBindingResult(
    value: TerminateOperationalBindingResult,
    elGetter: $.ASN1Encoder<TerminateOperationalBindingResult>
) {
    if (!_cached_encoder_for_TerminateOperationalBindingResult) {
        _cached_encoder_for_TerminateOperationalBindingResult = $._encode_choice<TerminateOperationalBindingResult>(
            {
                null_: $._encodeNull,
                protected_: $._encode_explicit(
                    _TagClass.context,
                    1,
                    () =>
                        _get_encoder_for_OPTIONALLY_PROTECTED_SEQ<TerminateOperationalBindingResultData>(
                            _encode_TerminateOperationalBindingResultData
                        ),
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_TerminateOperationalBindingResult(
        value,
        elGetter
    );
}


/* eslint-enable */
