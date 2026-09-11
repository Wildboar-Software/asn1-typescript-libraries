/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { INTEGER, SEQUENCE, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary PrivateDataVersionList
 * @description
 *
 * Supported private-data versions for this manufacturer. Table 13-9.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateDataVersionList  ::=  SEQUENCE OF INTEGER
 * ```
 */
export
type PrivateDataVersionList = INTEGER[]; // SequenceOfType

let _cached_decoder_for_PrivateDataVersionList: $.ASN1Decoder<PrivateDataVersionList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateDataVersionList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateDataVersionList (el: _Element): PrivateDataVersionList {
    if (!_cached_decoder_for_PrivateDataVersionList) { _cached_decoder_for_PrivateDataVersionList = $._decodeSequenceOf<INTEGER>(() => $._decodeInteger); }
    return _cached_decoder_for_PrivateDataVersionList(el);
}

let _cached_encoder_for_PrivateDataVersionList: $.ASN1Encoder<PrivateDataVersionList> | null = null;

/**
 * @summary Encodes a(n) PrivateDataVersionList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateDataVersionList, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateDataVersionList (value: PrivateDataVersionList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateDataVersionList) { _cached_encoder_for_PrivateDataVersionList = $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER); }
    return _cached_encoder_for_PrivateDataVersionList(value, elGetter);
}


/* eslint-enable */
