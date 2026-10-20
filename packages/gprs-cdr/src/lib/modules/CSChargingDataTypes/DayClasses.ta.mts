/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DayClass, _decode_DayClass, _encode_DayClass } from "../CSChargingDataTypes/DayClass.ta.mjs";
// export { DayClass, _decode_DayClass, _encode_DayClass } from "../CSChargingDataTypes/DayClass.ta.mjs";


/**
 * @summary DayClasses
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DayClasses  ::=  SET  OF
 *    DayClass
 * ```
 */
export
type DayClasses = DayClass[]; // SetOfType

let _cached_decoder_for_DayClasses: $.ASN1Decoder<DayClasses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DayClasses
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DayClasses (el: _Element): DayClasses {
    if (!_cached_decoder_for_DayClasses) { _cached_decoder_for_DayClasses = $._decodeSetOf<DayClass>(() => _decode_DayClass); }
    return _cached_decoder_for_DayClasses(el);
}

let _cached_encoder_for_DayClasses: $.ASN1Encoder<DayClasses> | null = null;

/**
 * @summary Encodes a(n) DayClasses into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DayClasses, encoded as an ASN.1 Element.
 */
export
function _encode_DayClasses (value: DayClasses, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DayClasses) { _cached_encoder_for_DayClasses = $._encodeSetOf<DayClass>(() => _encode_DayClass, $.BER); }
    return _cached_encoder_for_DayClasses(value, elGetter);
}


/* eslint-enable */
