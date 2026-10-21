/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AOCSCurrencyInfo, _decode_AOCSCurrencyInfo, _encode_AOCSCurrencyInfo } from "../SS-AOC-Operations-asn1-97/AOCSCurrencyInfo.ta.mjs";

/**
 * @summary AOCSCurrencyInfoList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AOCSCurrencyInfoList  ::=  SEQUENCE SIZE(1..10) OF AOCSCurrencyInfo
 * ```
 */
export
type AOCSCurrencyInfoList = AOCSCurrencyInfo[]; // SequenceOfType

let _cached_decoder_for_AOCSCurrencyInfoList: $.ASN1Decoder<AOCSCurrencyInfoList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AOCSCurrencyInfoList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AOCSCurrencyInfoList (el: _Element): AOCSCurrencyInfoList {
    if (!_cached_decoder_for_AOCSCurrencyInfoList) { _cached_decoder_for_AOCSCurrencyInfoList = $._decodeSequenceOf<AOCSCurrencyInfo>(() => _decode_AOCSCurrencyInfo); }
    const _value = _cached_decoder_for_AOCSCurrencyInfoList(el);
    if (_value.length < 1 || _value.length > 10) {
        throw new ASN1SizeError("AOCSCurrencyInfoList violates SIZE constraint");
    }
    return _value;
}

let _cached_encoder_for_AOCSCurrencyInfoList: $.ASN1Encoder<AOCSCurrencyInfoList> | null = null;

/**
 * @summary Encodes a(n) AOCSCurrencyInfoList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AOCSCurrencyInfoList, encoded as an ASN.1 Element.
 */
export
function _encode_AOCSCurrencyInfoList (value: AOCSCurrencyInfoList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AOCSCurrencyInfoList) { _cached_encoder_for_AOCSCurrencyInfoList = $._encodeSequenceOf<AOCSCurrencyInfo>(() => _encode_AOCSCurrencyInfo, $.BER); }
    return _cached_encoder_for_AOCSCurrencyInfoList(value, elGetter);
}

/* eslint-enable */
