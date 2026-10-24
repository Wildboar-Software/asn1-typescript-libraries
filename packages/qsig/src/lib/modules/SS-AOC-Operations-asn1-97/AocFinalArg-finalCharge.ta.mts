/* eslint-disable */
import {
    NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AocFinalArg_finalCharge_specificCurrency, _decode_AocFinalArg_finalCharge_specificCurrency, _encode_AocFinalArg_finalCharge_specificCurrency } from "../SS-AOC-Operations-asn1-97/AocFinalArg-finalCharge-specificCurrency.ta.mjs";

/**
 * @summary AocFinalArg_finalCharge
 * @description
 *
 * `chargeNotAvailable` means the total is not available (ECMA-211 §C.1.1).
 * `freeOfCharge` means no charge to the served user; amount 0 may be used
 * instead (§8.2.2.2, §C.1.2). `specificCurrency` is the total in currency
 * units. Some PISNs omit particular charges, such as some supplementary-service
 * charges, from the total (§C.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AocFinalArg-finalCharge ::= CHOICE {
 *     chargeNotAvailable [0] IMPLICIT NULL,
 *     freeOfCharge [1] IMPLICIT NULL,
 *     specificCurrency SEQUENCE {
 *         recordedCurrency [1] IMPLICIT RecordedCurrency,
 *         finalBillingId [2] IMPLICIT FinalBillingId OPTIONAL
 *     }
 * }
 * ```
 */
export
type AocFinalArg_finalCharge =
    { chargeNotAvailable: NULL } /* CHOICE_ALT_ROOT */
    | { freeOfCharge: NULL } /* CHOICE_ALT_ROOT */
    | { specificCurrency: AocFinalArg_finalCharge_specificCurrency } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AocFinalArg_finalCharge: $.ASN1Decoder<AocFinalArg_finalCharge> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AocFinalArg_finalCharge
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AocFinalArg_finalCharge (el: _Element): AocFinalArg_finalCharge {
    if (!_cached_decoder_for_AocFinalArg_finalCharge) { _cached_decoder_for_AocFinalArg_finalCharge = $._decode_inextensible_choice<AocFinalArg_finalCharge>({
    "CONTEXT 0": [ "chargeNotAvailable", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "freeOfCharge", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "UNIVERSAL 16": [ "specificCurrency", _decode_AocFinalArg_finalCharge_specificCurrency ]
}); }
    return _cached_decoder_for_AocFinalArg_finalCharge(el);
}

let _cached_encoder_for_AocFinalArg_finalCharge: $.ASN1Encoder<AocFinalArg_finalCharge> | null = null;

/**
 * @summary Encodes a(n) AocFinalArg_finalCharge into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AocFinalArg_finalCharge, encoded as an ASN.1 Element.
 */
export
function _encode_AocFinalArg_finalCharge (value: AocFinalArg_finalCharge, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AocFinalArg_finalCharge) { _cached_encoder_for_AocFinalArg_finalCharge = $._encode_choice<AocFinalArg_finalCharge>({
    "chargeNotAvailable": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "freeOfCharge": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "specificCurrency": _encode_AocFinalArg_finalCharge_specificCurrency,
}, $.BER); }
    return _cached_encoder_for_AocFinalArg_finalCharge(value, elGetter);
}

/* eslint-enable */
