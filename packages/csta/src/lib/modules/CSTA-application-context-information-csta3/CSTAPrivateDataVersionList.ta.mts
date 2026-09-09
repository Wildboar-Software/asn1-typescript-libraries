/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { INTEGER, SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CSTAPrivateDataVersionList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CSTAPrivateDataVersionList     ::=   SEQUENCE OF INTEGER
 * ```
 */
export
type CSTAPrivateDataVersionList = INTEGER[]; // SequenceOfType

let _cached_decoder_for_CSTAPrivateDataVersionList: $.ASN1Decoder<CSTAPrivateDataVersionList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CSTAPrivateDataVersionList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CSTAPrivateDataVersionList (el: _Element): CSTAPrivateDataVersionList {
    if (!_cached_decoder_for_CSTAPrivateDataVersionList) { _cached_decoder_for_CSTAPrivateDataVersionList = $._decodeSequenceOf<INTEGER>(() => $._decodeInteger); }
    return _cached_decoder_for_CSTAPrivateDataVersionList(el);
}

let _cached_encoder_for_CSTAPrivateDataVersionList: $.ASN1Encoder<CSTAPrivateDataVersionList> | null = null;

/**
 * @summary Encodes a(n) CSTAPrivateDataVersionList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CSTAPrivateDataVersionList, encoded as an ASN.1 Element.
 */
export
function _encode_CSTAPrivateDataVersionList (value: CSTAPrivateDataVersionList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CSTAPrivateDataVersionList) { _cached_encoder_for_CSTAPrivateDataVersionList = $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER); }
    return _cached_encoder_for_CSTAPrivateDataVersionList(value, elGetter);
}


/* eslint-enable */
