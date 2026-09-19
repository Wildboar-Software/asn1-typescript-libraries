/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EPSBearers, _decode_EPSBearers, _encode_EPSBearers } from "../TS33128Payloads/EPSBearers.ta.mjs";
// export { EPSBearers, _decode_EPSBearers, _encode_EPSBearers } from "../TS33128Payloads/EPSBearers.ta.mjs";


/**
 * @summary EPSBearerInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerInfo  ::=  SEQUENCE OF EPSBearers
 * ```
 */
export
type EPSBearerInfo = EPSBearers[]; // SequenceOfType

let _cached_decoder_for_EPSBearerInfo: $.ASN1Decoder<EPSBearerInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearerInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSBearerInfo (el: _Element): EPSBearerInfo {
    if (!_cached_decoder_for_EPSBearerInfo) { _cached_decoder_for_EPSBearerInfo = $._decodeSequenceOf<EPSBearers>(() => _decode_EPSBearers); }
    return _cached_decoder_for_EPSBearerInfo(el);
}

let _cached_encoder_for_EPSBearerInfo: $.ASN1Encoder<EPSBearerInfo> | null = null;

/**
 * @summary Encodes a(n) EPSBearerInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearerInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EPSBearerInfo (value: EPSBearerInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSBearerInfo) { _cached_encoder_for_EPSBearerInfo = $._encodeSequenceOf<EPSBearers>(() => _encode_EPSBearers, $.BER); }
    return _cached_encoder_for_EPSBearerInfo(value, elGetter);
}


/* eslint-enable */
