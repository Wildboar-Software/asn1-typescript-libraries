/* eslint-disable */
import {
    SET,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from "../CMIP-1/ObjectInstance.ta.mjs";



/**
 * @summary ContactObjectPtrList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContactObjectPtrList  ::=  SET OF ObjectInstance
 * ```
 */
export
type ContactObjectPtrList = ObjectInstance[]; // SetOfType

let _cached_decoder_for_ContactObjectPtrList: $.ASN1Decoder<ContactObjectPtrList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContactObjectPtrList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContactObjectPtrList (el: _Element): ContactObjectPtrList {
    if (!_cached_decoder_for_ContactObjectPtrList) { _cached_decoder_for_ContactObjectPtrList = $._decodeSetOf<ObjectInstance>(() => _decode_ObjectInstance); }
    return _cached_decoder_for_ContactObjectPtrList(el);
}

let _cached_encoder_for_ContactObjectPtrList: $.ASN1Encoder<ContactObjectPtrList> | null = null;

/**
 * @summary Encodes a(n) ContactObjectPtrList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContactObjectPtrList, encoded as an ASN.1 Element.
 */
export
function _encode_ContactObjectPtrList (value: ContactObjectPtrList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContactObjectPtrList) { _cached_encoder_for_ContactObjectPtrList = $._encodeSetOf<ObjectInstance>(() => _encode_ObjectInstance, $.BER); }
    return _cached_encoder_for_ContactObjectPtrList(value, elGetter);
}


/* eslint-enable */
