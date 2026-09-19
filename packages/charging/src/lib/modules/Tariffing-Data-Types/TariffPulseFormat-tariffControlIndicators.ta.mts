/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TariffPulseFormat_tariffControlIndicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffPulseFormat-tariffControlIndicators ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TariffPulseFormat_tariffControlIndicators = BIT_STRING;

/**
 * @summary TariffPulseFormat_tariffControlIndicators_non_cyclicTariff
 * @constant
 */
export
const TariffPulseFormat_tariffControlIndicators_non_cyclicTariff: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary non_cyclicTariff
 * @constant
 */
export
const non_cyclicTariff: number = TariffPulseFormat_tariffControlIndicators_non_cyclicTariff; /* SHORT_NAMED_BIT */

let _cached_decoder_for_TariffPulseFormat_tariffControlIndicators: $.ASN1Decoder<TariffPulseFormat_tariffControlIndicators> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TariffPulseFormat_tariffControlIndicators
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TariffPulseFormat_tariffControlIndicators (el: _Element): TariffPulseFormat_tariffControlIndicators {
    if (!_cached_decoder_for_TariffPulseFormat_tariffControlIndicators) { _cached_decoder_for_TariffPulseFormat_tariffControlIndicators = $._decodeBitString; }
    return _cached_decoder_for_TariffPulseFormat_tariffControlIndicators(el);
}

let _cached_encoder_for_TariffPulseFormat_tariffControlIndicators: $.ASN1Encoder<TariffPulseFormat_tariffControlIndicators> | null = null;

/**
 * @summary Encodes a(n) TariffPulseFormat_tariffControlIndicators into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TariffPulseFormat_tariffControlIndicators, encoded as an ASN.1 Element.
 */
export
function _encode_TariffPulseFormat_tariffControlIndicators (value: TariffPulseFormat_tariffControlIndicators, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TariffPulseFormat_tariffControlIndicators) { _cached_encoder_for_TariffPulseFormat_tariffControlIndicators = $._encodeBitString; }
    return _cached_encoder_for_TariffPulseFormat_tariffControlIndicators(value, elGetter);
}


/* eslint-enable */
