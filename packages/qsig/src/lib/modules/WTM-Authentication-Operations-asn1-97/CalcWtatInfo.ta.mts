/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CalcWtatInfoUnit, _decode_CalcWtatInfoUnit, _encode_CalcWtatInfoUnit } from "../WTM-Authentication-Operations-asn1-97/CalcWtatInfoUnit.ta.mjs";
// export { CalcWtatInfoUnit, _decode_CalcWtatInfoUnit, _encode_CalcWtatInfoUnit } from "../WTM-Authentication-Operations-asn1-97/CalcWtatInfoUnit.ta.mjs";


/**
 * @summary CalcWtatInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalcWtatInfo  ::=  SEQUENCE SIZE(1..5) OF CalcWtatInfoUnit
 * ```
 */
export
type CalcWtatInfo = CalcWtatInfoUnit[]; // SequenceOfType

let _cached_decoder_for_CalcWtatInfo: $.ASN1Decoder<CalcWtatInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CalcWtatInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CalcWtatInfo (el: _Element): CalcWtatInfo {
    if (!_cached_decoder_for_CalcWtatInfo) { _cached_decoder_for_CalcWtatInfo = $._decodeSequenceOf<CalcWtatInfoUnit>(() => _decode_CalcWtatInfoUnit); }
    return _cached_decoder_for_CalcWtatInfo(el);
}

let _cached_encoder_for_CalcWtatInfo: $.ASN1Encoder<CalcWtatInfo> | null = null;

/**
 * @summary Encodes a(n) CalcWtatInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CalcWtatInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CalcWtatInfo (value: CalcWtatInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CalcWtatInfo) { _cached_encoder_for_CalcWtatInfo = $._encodeSequenceOf<CalcWtatInfoUnit>(() => _encode_CalcWtatInfoUnit, $.BER); }
    return _cached_encoder_for_CalcWtatInfo(value, elGetter);
}


/* eslint-enable */
