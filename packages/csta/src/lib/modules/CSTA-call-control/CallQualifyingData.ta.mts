/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { OCTET_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallQualifyingData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallQualifyingData  ::=  OCTET STRING
 * ```
 */
export
type CallQualifyingData = OCTET_STRING; // OctetStringType

let _cached_decoder_for_CallQualifyingData: $.ASN1Decoder<CallQualifyingData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallQualifyingData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallQualifyingData (el: _Element): CallQualifyingData {
    if (!_cached_decoder_for_CallQualifyingData) { _cached_decoder_for_CallQualifyingData = $._decodeOctetString; }
    return _cached_decoder_for_CallQualifyingData(el);
}

let _cached_encoder_for_CallQualifyingData: $.ASN1Encoder<CallQualifyingData> | null = null;

/**
 * @summary Encodes a(n) CallQualifyingData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallQualifyingData, encoded as an ASN.1 Element.
 */
export
function _encode_CallQualifyingData (value: CallQualifyingData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallQualifyingData) { _cached_encoder_for_CallQualifyingData = $._encodeOctetString; }
    return _cached_encoder_for_CallQualifyingData(value, elGetter);
}


/* eslint-enable */
