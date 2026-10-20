/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AOCSCurrencyInfoList, _decode_AOCSCurrencyInfoList, _encode_AOCSCurrencyInfoList } from "../SS-AOC-Operations-asn1-97/AOCSCurrencyInfoList.ta.mjs";
// export { AOCSCurrencyInfoList, _decode_AOCSCurrencyInfoList, _encode_AOCSCurrencyInfoList } from "../SS-AOC-Operations-asn1-97/AOCSCurrencyInfoList.ta.mjs";


/**
 * @summary AocRateArg_aocRate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AocRateArg-aocRate ::= CHOICE {
 *     chargeNotAvailable NULL,
 *     aocSCurrencyInfoList AOCSCurrencyInfoList
 * }
 * ```
 */
export
type AocRateArg_aocRate =
    { chargeNotAvailable: NULL } /* CHOICE_ALT_ROOT */
    | { aocSCurrencyInfoList: AOCSCurrencyInfoList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AocRateArg_aocRate: $.ASN1Decoder<AocRateArg_aocRate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AocRateArg_aocRate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AocRateArg_aocRate (el: _Element): AocRateArg_aocRate {
    if (!_cached_decoder_for_AocRateArg_aocRate) { _cached_decoder_for_AocRateArg_aocRate = $._decode_inextensible_choice<AocRateArg_aocRate>({
    "UNIVERSAL 5": [ "chargeNotAvailable", $._decodeNull ],
    "UNIVERSAL 16": [ "aocSCurrencyInfoList", _decode_AOCSCurrencyInfoList ]
}); }
    return _cached_decoder_for_AocRateArg_aocRate(el);
}

let _cached_encoder_for_AocRateArg_aocRate: $.ASN1Encoder<AocRateArg_aocRate> | null = null;

/**
 * @summary Encodes a(n) AocRateArg_aocRate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AocRateArg_aocRate, encoded as an ASN.1 Element.
 */
export
function _encode_AocRateArg_aocRate (value: AocRateArg_aocRate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AocRateArg_aocRate) { _cached_encoder_for_AocRateArg_aocRate = $._encode_choice<AocRateArg_aocRate>({
    "chargeNotAvailable": $._encodeNull,
    "aocSCurrencyInfoList": _encode_AOCSCurrencyInfoList,
}, $.BER); }
    return _cached_encoder_for_AocRateArg_aocRate(value, elGetter);
}


/* eslint-enable */
