/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CalcWtatInfoUnit, _decode_CalcWtatInfoUnit, _encode_CalcWtatInfoUnit } from "../WTM-Authentication-Operations-asn1-97/CalcWtatInfoUnit.ta.mjs";

/**
 * @summary CalcWtatInfo
 * @description
 *
 * From one to five SS-WTAT challenge and expected-response pairs (ECMA-306
 * §6.3.1). When the result uses this choice, the Visitor PINX uses the values
 * and does not calculate them (§6.5.6.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-306/
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
    const _value = _cached_decoder_for_CalcWtatInfo(el);
    if (_value.length < 1 || _value.length > 5) {
        throw new ASN1SizeError("CalcWtatInfo violates SIZE constraint");
    }
    return _value;
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
