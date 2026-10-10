/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SNSSAI, _decode_SNSSAI, _encode_SNSSAI } from "../TS33128Payloads/SNSSAI.ta.mjs";


/**
 * @summary TAISliceSupportList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TAISliceSupportList  ::=  SEQUENCE (SIZE(1..MAX)) OF SNSSAI
 * ```
 */
export
type TAISliceSupportList = SNSSAI[]; // SequenceOfType

let _cached_decoder_for_TAISliceSupportList: $.ASN1Decoder<TAISliceSupportList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TAISliceSupportList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TAISliceSupportList (el: _Element): TAISliceSupportList {
    if (!_cached_decoder_for_TAISliceSupportList) { _cached_decoder_for_TAISliceSupportList = $._decodeSequenceOf<SNSSAI>(() => _decode_SNSSAI); }
    const _value = _cached_decoder_for_TAISliceSupportList(el);
    if (_value.length < 1) {
        throw new ASN1SizeError("TAISliceSupportList violates SIZE constraint");
    }
    return _value;
}

let _cached_encoder_for_TAISliceSupportList: $.ASN1Encoder<TAISliceSupportList> | null = null;

/**
 * @summary Encodes a(n) TAISliceSupportList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TAISliceSupportList, encoded as an ASN.1 Element.
 */
export
function _encode_TAISliceSupportList (value: TAISliceSupportList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TAISliceSupportList) { _cached_encoder_for_TAISliceSupportList = $._encodeSequenceOf<SNSSAI>(() => _encode_SNSSAI, $.BER); }
    return _cached_encoder_for_TAISliceSupportList(value, elGetter);
}


/* eslint-enable */
