/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OriginDestCombination, _decode_OriginDestCombination, _encode_OriginDestCombination } from "../CSChargingDataTypes/OriginDestCombination.ta.mjs";
// export { OriginDestCombination, _decode_OriginDestCombination, _encode_OriginDestCombination } from "../CSChargingDataTypes/OriginDestCombination.ta.mjs";


/**
 * @summary OriginDestCombinations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginDestCombinations  ::=  SET  OF
 *    OriginDestCombination
 * ```
 */
export
type OriginDestCombinations = OriginDestCombination[]; // SetOfType

let _cached_decoder_for_OriginDestCombinations: $.ASN1Decoder<OriginDestCombinations> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginDestCombinations
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginDestCombinations (el: _Element): OriginDestCombinations {
    if (!_cached_decoder_for_OriginDestCombinations) { _cached_decoder_for_OriginDestCombinations = $._decodeSetOf<OriginDestCombination>(() => _decode_OriginDestCombination); }
    return _cached_decoder_for_OriginDestCombinations(el);
}

let _cached_encoder_for_OriginDestCombinations: $.ASN1Encoder<OriginDestCombinations> | null = null;

/**
 * @summary Encodes a(n) OriginDestCombinations into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginDestCombinations, encoded as an ASN.1 Element.
 */
export
function _encode_OriginDestCombinations (value: OriginDestCombinations, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginDestCombinations) { _cached_encoder_for_OriginDestCombinations = $._encodeSetOf<OriginDestCombination>(() => _encode_OriginDestCombination, $.BER); }
    return _cached_encoder_for_OriginDestCombinations(value, elGetter);
}


/* eslint-enable */
