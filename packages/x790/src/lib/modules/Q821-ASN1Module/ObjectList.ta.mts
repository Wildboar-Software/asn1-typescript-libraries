/* eslint-disable */
import {
    SET,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectListChoice,
    _decode_ObjectListChoice,
    _encode_ObjectListChoice,
} from "../Q821-ASN1Module/ObjectListChoice.ta.mjs";



/**
 * @summary ObjectList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectList  ::=  SET OF ObjectListChoice
 * ```
 */
export
type ObjectList = ObjectListChoice[]; // SetOfType

let _cached_decoder_for_ObjectList: $.ASN1Decoder<ObjectList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObjectList (el: _Element): ObjectList {
    if (!_cached_decoder_for_ObjectList) { _cached_decoder_for_ObjectList = $._decodeSetOf<ObjectListChoice>(() => _decode_ObjectListChoice); }
    return _cached_decoder_for_ObjectList(el);
}

let _cached_encoder_for_ObjectList: $.ASN1Encoder<ObjectList> | null = null;

/**
 * @summary Encodes a(n) ObjectList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectList, encoded as an ASN.1 Element.
 */
export
function _encode_ObjectList (value: ObjectList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObjectList) { _cached_encoder_for_ObjectList = $._encodeSetOf<ObjectListChoice>(() => _encode_ObjectListChoice, $.BER); }
    return _cached_encoder_for_ObjectList(value, elGetter);
}


/* eslint-enable */
