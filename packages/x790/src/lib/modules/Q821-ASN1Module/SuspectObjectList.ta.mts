/* eslint-disable */
import {
    SET,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SuspectObject,
    _decode_SuspectObject,
    _encode_SuspectObject,
} from "../Q821-ASN1Module/SuspectObject.ta.mjs";



/**
 * @summary SuspectObjectList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuspectObjectList  ::=  SET OF SuspectObject
 * ```
 */
export
type SuspectObjectList = SuspectObject[]; // SetOfType

let _cached_decoder_for_SuspectObjectList: $.ASN1Decoder<SuspectObjectList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuspectObjectList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuspectObjectList (el: _Element): SuspectObjectList {
    if (!_cached_decoder_for_SuspectObjectList) { _cached_decoder_for_SuspectObjectList = $._decodeSetOf<SuspectObject>(() => _decode_SuspectObject); }
    return _cached_decoder_for_SuspectObjectList(el);
}

let _cached_encoder_for_SuspectObjectList: $.ASN1Encoder<SuspectObjectList> | null = null;

/**
 * @summary Encodes a(n) SuspectObjectList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuspectObjectList, encoded as an ASN.1 Element.
 */
export
function _encode_SuspectObjectList (value: SuspectObjectList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuspectObjectList) { _cached_encoder_for_SuspectObjectList = $._encodeSetOf<SuspectObject>(() => _encode_SuspectObject, $.BER); }
    return _cached_encoder_for_SuspectObjectList(value, elGetter);
}


/* eslint-enable */
