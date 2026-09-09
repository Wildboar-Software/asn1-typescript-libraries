/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { INTEGER, SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ConnectionRateList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionRateList  ::=  SEQUENCE OF INTEGER
 * ```
 */
export
type ConnectionRateList = INTEGER[]; // SequenceOfType

let _cached_decoder_for_ConnectionRateList: $.ASN1Decoder<ConnectionRateList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionRateList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionRateList (el: _Element): ConnectionRateList {
    if (!_cached_decoder_for_ConnectionRateList) { _cached_decoder_for_ConnectionRateList = $._decodeSequenceOf<INTEGER>(() => $._decodeInteger); }
    return _cached_decoder_for_ConnectionRateList(el);
}

let _cached_encoder_for_ConnectionRateList: $.ASN1Encoder<ConnectionRateList> | null = null;

/**
 * @summary Encodes a(n) ConnectionRateList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionRateList, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionRateList (value: ConnectionRateList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionRateList) { _cached_encoder_for_ConnectionRateList = $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER); }
    return _cached_encoder_for_ConnectionRateList(value, elGetter);
}


/* eslint-enable */
