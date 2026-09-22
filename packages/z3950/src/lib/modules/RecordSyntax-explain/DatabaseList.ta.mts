/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DatabaseList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DatabaseList  ::=  SEQUENCE OF DatabaseName
 * ```
 */
export
type DatabaseList = DatabaseName[]; // SequenceOfType

let _cached_decoder_for_DatabaseList: $.ASN1Decoder<DatabaseList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DatabaseList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DatabaseList (el: _Element): DatabaseList {
    if (!_cached_decoder_for_DatabaseList) { _cached_decoder_for_DatabaseList = $._decodeSequenceOf<DatabaseName>(() => _decode_DatabaseName); }
    return _cached_decoder_for_DatabaseList(el);
}

let _cached_encoder_for_DatabaseList: $.ASN1Encoder<DatabaseList> | null = null;

/**
 * @summary Encodes a(n) DatabaseList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DatabaseList, encoded as an ASN.1 Element.
 */
export
function _encode_DatabaseList (value: DatabaseList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DatabaseList) { _cached_encoder_for_DatabaseList = $._encodeSequenceOf<DatabaseName>(() => _encode_DatabaseName, $.BER); }
    return _cached_encoder_for_DatabaseList(value, elGetter);
}


/* eslint-enable */
