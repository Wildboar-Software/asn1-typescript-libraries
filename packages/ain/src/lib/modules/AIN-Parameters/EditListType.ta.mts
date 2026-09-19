/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EditListType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EditListType  ::=  ENUMERATED{
 *         addListElement(0),
 *         deleteListElement(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EditListType {
    addListElement = 0,
    deleteListElement = 1,
}

/**
 * @summary EditListType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EditListType  ::=  ENUMERATED{
 *         addListElement(0),
 *         deleteListElement(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type EditListType = _enum_for_EditListType;

/**
 * @summary EditListType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EditListType  ::=  ENUMERATED{
 *         addListElement(0),
 *         deleteListElement(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const EditListType = _enum_for_EditListType;

/**
 * @summary EditListType_addListElement
 * @constant
 * @type {number}
 */
export
const EditListType_addListElement: EditListType = EditListType.addListElement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary addListElement
 * @constant
 * @type {number}
 */
export
const addListElement: EditListType = EditListType.addListElement; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EditListType_deleteListElement
 * @constant
 * @type {number}
 */
export
const EditListType_deleteListElement: EditListType = EditListType.deleteListElement; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deleteListElement
 * @constant
 * @type {number}
 */
export
const deleteListElement: EditListType = EditListType.deleteListElement; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EditListType: $.ASN1Decoder<EditListType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EditListType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EditListType (el: _Element): EditListType {
    if (!_cached_decoder_for_EditListType) { _cached_decoder_for_EditListType = $._decodeEnumerated; }
    return _cached_decoder_for_EditListType(el);
}

let _cached_encoder_for_EditListType: $.ASN1Encoder<EditListType> | null = null;

/**
 * @summary Encodes a(n) EditListType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EditListType, encoded as an ASN.1 Element.
 */
export
function _encode_EditListType (value: EditListType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EditListType) { _cached_encoder_for_EditListType = $._encodeEnumerated; }
    return _cached_encoder_for_EditListType(value, elGetter);
}


/* eslint-enable */
