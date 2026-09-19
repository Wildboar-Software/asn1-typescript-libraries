/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SCreasonValueOctetStr, _decode_SCreasonValueOctetStr, _encode_SCreasonValueOctetStr } from "../MEDIA-GATEWAY-CONTROL/SCreasonValueOctetStr.ta.mjs";
// export { SCreasonValueOctetStr, _decode_SCreasonValueOctetStr, _encode_SCreasonValueOctetStr } from "../MEDIA-GATEWAY-CONTROL/SCreasonValueOctetStr.ta.mjs";


/**
 * @summary SCreasonValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCreasonValue  ::=  SEQUENCE OF SCreasonValueOctetStr
 * ```
 */
export
type SCreasonValue = SCreasonValueOctetStr[]; // SequenceOfType

let _cached_decoder_for_SCreasonValue: $.ASN1Decoder<SCreasonValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCreasonValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCreasonValue (el: _Element): SCreasonValue {
    if (!_cached_decoder_for_SCreasonValue) { _cached_decoder_for_SCreasonValue = $._decodeSequenceOf<SCreasonValueOctetStr>(() => _decode_SCreasonValueOctetStr); }
    return _cached_decoder_for_SCreasonValue(el);
}

let _cached_encoder_for_SCreasonValue: $.ASN1Encoder<SCreasonValue> | null = null;

/**
 * @summary Encodes a(n) SCreasonValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCreasonValue, encoded as an ASN.1 Element.
 */
export
function _encode_SCreasonValue (value: SCreasonValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCreasonValue) { _cached_encoder_for_SCreasonValue = $._encodeSequenceOf<SCreasonValueOctetStr>(() => _encode_SCreasonValueOctetStr, $.BER); }
    return _cached_encoder_for_SCreasonValue(value, elGetter);
}


/* eslint-enable */
