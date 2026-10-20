/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TariffPeriod, _decode_TariffPeriod, _encode_TariffPeriod } from "../CSChargingDataTypes/TariffPeriod.ta.mjs";


/**
 * @summary TariffPeriods
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffPeriods  ::=  SET  OF
 *    TariffPeriod
 * ```
 */
export
type TariffPeriods = TariffPeriod[]; // SetOfType

let _cached_decoder_for_TariffPeriods: $.ASN1Decoder<TariffPeriods> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TariffPeriods
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TariffPeriods (el: _Element): TariffPeriods {
    if (!_cached_decoder_for_TariffPeriods) { _cached_decoder_for_TariffPeriods = $._decodeSetOf<TariffPeriod>(() => _decode_TariffPeriod); }
    return _cached_decoder_for_TariffPeriods(el);
}

let _cached_encoder_for_TariffPeriods: $.ASN1Encoder<TariffPeriods> | null = null;

/**
 * @summary Encodes a(n) TariffPeriods into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TariffPeriods, encoded as an ASN.1 Element.
 */
export
function _encode_TariffPeriods (value: TariffPeriods, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TariffPeriods) { _cached_encoder_for_TariffPeriods = $._encodeSetOf<TariffPeriod>(() => _encode_TariffPeriod, $.BER); }
    return _cached_encoder_for_TariffPeriods(value, elGetter);
}


/* eslint-enable */
