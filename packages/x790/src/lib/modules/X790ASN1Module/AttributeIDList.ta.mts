/* eslint-disable */
import {
    SET,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from "../CMIP-1/AttributeId.ta.mjs";



/**
 * @summary AttributeIDList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeIDList  ::=  SET OF AttributeId
 * ```
 */
export
type AttributeIDList = AttributeId[]; // SetOfType

let _cached_decoder_for_AttributeIDList: $.ASN1Decoder<AttributeIDList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeIDList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeIDList (el: _Element): AttributeIDList {
    if (!_cached_decoder_for_AttributeIDList) { _cached_decoder_for_AttributeIDList = $._decodeSetOf<AttributeId>(() => _decode_AttributeId); }
    return _cached_decoder_for_AttributeIDList(el);
}

let _cached_encoder_for_AttributeIDList: $.ASN1Encoder<AttributeIDList> | null = null;

/**
 * @summary Encodes a(n) AttributeIDList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIDList, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeIDList (value: AttributeIDList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeIDList) { _cached_encoder_for_AttributeIDList = $._encodeSetOf<AttributeId>(() => _encode_AttributeId, $.BER); }
    return _cached_encoder_for_AttributeIDList(value, elGetter);
}


/* eslint-enable */
