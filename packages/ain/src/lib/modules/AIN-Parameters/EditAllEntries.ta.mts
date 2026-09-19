/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EditAllEntries
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EditAllEntries  ::=  ENUMERATED{
 *         deleteAllEntries(0),
 *         deleteAllPrivateEntries(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EditAllEntries {
    deleteAllEntries = 0,
    deleteAllPrivateEntries = 1,
}

/**
 * @summary EditAllEntries
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EditAllEntries  ::=  ENUMERATED{
 *         deleteAllEntries(0),
 *         deleteAllPrivateEntries(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type EditAllEntries = _enum_for_EditAllEntries;

/**
 * @summary EditAllEntries
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EditAllEntries  ::=  ENUMERATED{
 *         deleteAllEntries(0),
 *         deleteAllPrivateEntries(1)
 *     }
 * ```
 * 
 * @enum {number}
 */
export
const EditAllEntries = _enum_for_EditAllEntries;

/**
 * @summary EditAllEntries_deleteAllEntries
 * @constant
 * @type {number}
 */
export
const EditAllEntries_deleteAllEntries: EditAllEntries = EditAllEntries.deleteAllEntries; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deleteAllEntries
 * @constant
 * @type {number}
 */
export
const deleteAllEntries: EditAllEntries = EditAllEntries.deleteAllEntries; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EditAllEntries_deleteAllPrivateEntries
 * @constant
 * @type {number}
 */
export
const EditAllEntries_deleteAllPrivateEntries: EditAllEntries = EditAllEntries.deleteAllPrivateEntries; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deleteAllPrivateEntries
 * @constant
 * @type {number}
 */
export
const deleteAllPrivateEntries: EditAllEntries = EditAllEntries.deleteAllPrivateEntries; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EditAllEntries: $.ASN1Decoder<EditAllEntries> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EditAllEntries
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EditAllEntries (el: _Element): EditAllEntries {
    if (!_cached_decoder_for_EditAllEntries) { _cached_decoder_for_EditAllEntries = $._decodeEnumerated; }
    return _cached_decoder_for_EditAllEntries(el);
}

let _cached_encoder_for_EditAllEntries: $.ASN1Encoder<EditAllEntries> | null = null;

/**
 * @summary Encodes a(n) EditAllEntries into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EditAllEntries, encoded as an ASN.1 Element.
 */
export
function _encode_EditAllEntries (value: EditAllEntries, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EditAllEntries) { _cached_encoder_for_EditAllEntries = $._encodeEnumerated; }
    return _cached_encoder_for_EditAllEntries(value, elGetter);
}


/* eslint-enable */
