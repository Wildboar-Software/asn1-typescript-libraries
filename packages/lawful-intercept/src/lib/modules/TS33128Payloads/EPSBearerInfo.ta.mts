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
 * Shall be present if there are any EPS Bearers associated to the PDU Session
 * in the SM Context or PDU Session Context at the SMF+PGW-C. Contains
 * information about the EPS Bearer context(s) associated with the PDU Session.
 * See TS 29.502 [16] clause 6.1.6.2.4.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
