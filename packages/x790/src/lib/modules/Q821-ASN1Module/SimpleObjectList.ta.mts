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
 * @summary SimpleObjectList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SimpleObjectList  ::=  SET OF ObjectInstance
 * ```
 */
export
type SimpleObjectList = ObjectInstance[]; // SetOfType

let _cached_decoder_for_SimpleObjectList: $.ASN1Decoder<SimpleObjectList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SimpleObjectList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SimpleObjectList (el: _Element): SimpleObjectList {
    if (!_cached_decoder_for_SimpleObjectList) { _cached_decoder_for_SimpleObjectList = $._decodeSetOf<ObjectInstance>(() => _decode_ObjectInstance); }
    return _cached_decoder_for_SimpleObjectList(el);
}

let _cached_encoder_for_SimpleObjectList: $.ASN1Encoder<SimpleObjectList> | null = null;

/**
 * @summary Encodes a(n) SimpleObjectList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SimpleObjectList, encoded as an ASN.1 Element.
 */
export
function _encode_SimpleObjectList (value: SimpleObjectList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SimpleObjectList) { _cached_encoder_for_SimpleObjectList = $._encodeSetOf<ObjectInstance>(() => _encode_ObjectInstance, $.BER); }
    return _cached_encoder_for_SimpleObjectList(value, elGetter);
}


/* eslint-enable */
