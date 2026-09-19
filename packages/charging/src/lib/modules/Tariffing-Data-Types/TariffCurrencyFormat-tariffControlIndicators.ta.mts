/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TariffCurrencyFormat_tariffControlIndicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffCurrencyFormat-tariffControlIndicators ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TariffCurrencyFormat_tariffControlIndicators = BIT_STRING;

/**
 * @summary TariffCurrencyFormat_tariffControlIndicators_non_cyclicTariff
 * @constant
 */
export
const TariffCurrencyFormat_tariffControlIndicators_non_cyclicTariff: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary non_cyclicTariff
 * @constant
 */
export
const non_cyclicTariff: number = TariffCurrencyFormat_tariffControlIndicators_non_cyclicTariff; /* SHORT_NAMED_BIT */

let _cached_decoder_for_TariffCurrencyFormat_tariffControlIndicators: $.ASN1Decoder<TariffCurrencyFormat_tariffControlIndicators> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TariffCurrencyFormat_tariffControlIndicators
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TariffCurrencyFormat_tariffControlIndicators (el: _Element): TariffCurrencyFormat_tariffControlIndicators {
    if (!_cached_decoder_for_TariffCurrencyFormat_tariffControlIndicators) { _cached_decoder_for_TariffCurrencyFormat_tariffControlIndicators = $._decodeBitString; }
    return _cached_decoder_for_TariffCurrencyFormat_tariffControlIndicators(el);
}

let _cached_encoder_for_TariffCurrencyFormat_tariffControlIndicators: $.ASN1Encoder<TariffCurrencyFormat_tariffControlIndicators> | null = null;

/**
 * @summary Encodes a(n) TariffCurrencyFormat_tariffControlIndicators into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TariffCurrencyFormat_tariffControlIndicators, encoded as an ASN.1 Element.
 */
export
function _encode_TariffCurrencyFormat_tariffControlIndicators (value: TariffCurrencyFormat_tariffControlIndicators, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TariffCurrencyFormat_tariffControlIndicators) { _cached_encoder_for_TariffCurrencyFormat_tariffControlIndicators = $._encodeBitString; }
    return _cached_encoder_for_TariffCurrencyFormat_tariffControlIndicators(value, elGetter);
}


/* eslint-enable */
