/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ActivationStateCode, _encode_ActivationStateCode, ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";
// export { ActivationStateCode, _enum_for_ActivationStateCode, ActivationStateCode_off /* IMPORTED_LONG_ENUMERATION_ITEM */, off /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivationStateCode_on /* IMPORTED_LONG_ENUMERATION_ITEM */, on /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActivationStateCode, _encode_ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";


/**
 * @summary CancelInterdigitTimer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelInterdigitTimer ::=  ActivationStateCode
 * ```
 */
export
type CancelInterdigitTimer = ActivationStateCode; // DefinedType

let _cached_decoder_for_CancelInterdigitTimer: $.ASN1Decoder<CancelInterdigitTimer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelInterdigitTimer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelInterdigitTimer (el: _Element): CancelInterdigitTimer {
    if (!_cached_decoder_for_CancelInterdigitTimer) { _cached_decoder_for_CancelInterdigitTimer = _decode_ActivationStateCode; }
    return _cached_decoder_for_CancelInterdigitTimer(el);
}

let _cached_encoder_for_CancelInterdigitTimer: $.ASN1Encoder<CancelInterdigitTimer> | null = null;

/**
 * @summary Encodes a(n) CancelInterdigitTimer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelInterdigitTimer, encoded as an ASN.1 Element.
 */
export
function _encode_CancelInterdigitTimer (value: CancelInterdigitTimer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelInterdigitTimer) { _cached_encoder_for_CancelInterdigitTimer = _encode_ActivationStateCode; }
    return _cached_encoder_for_CancelInterdigitTimer(value, elGetter);
}


/* eslint-enable */
