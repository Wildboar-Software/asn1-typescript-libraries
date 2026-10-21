/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CalcCtatInfoUnit, _decode_CalcCtatInfoUnit, _encode_CalcCtatInfoUnit } from "../CT-Authentication-Operations/CalcCtatInfoUnit.ta.mjs";
// export { CalcCtatInfoUnit, _decode_CalcCtatInfoUnit, _encode_CalcCtatInfoUnit } from "../CT-Authentication-Operations/CalcCtatInfoUnit.ta.mjs";


/**
 * @summary CalcCtatInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalcCtatInfo  ::=  SEQUENCE SIZE(1..5) OF CalcCtatInfoUnit
 * ```
 */
export
type CalcCtatInfo = CalcCtatInfoUnit[]; // SequenceOfType

let _cached_decoder_for_CalcCtatInfo: $.ASN1Decoder<CalcCtatInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CalcCtatInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CalcCtatInfo (el: _Element): CalcCtatInfo {
    if (!_cached_decoder_for_CalcCtatInfo) { _cached_decoder_for_CalcCtatInfo = $._decodeSequenceOf<CalcCtatInfoUnit>(() => _decode_CalcCtatInfoUnit); }
    return _cached_decoder_for_CalcCtatInfo(el);
}

let _cached_encoder_for_CalcCtatInfo: $.ASN1Encoder<CalcCtatInfo> | null = null;

/**
 * @summary Encodes a(n) CalcCtatInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CalcCtatInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CalcCtatInfo (value: CalcCtatInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CalcCtatInfo) { _cached_encoder_for_CalcCtatInfo = $._encodeSequenceOf<CalcCtatInfoUnit>(() => _encode_CalcCtatInfoUnit, $.BER); }
    return _cached_encoder_for_CalcCtatInfo(value, elGetter);
}


/* eslint-enable */
