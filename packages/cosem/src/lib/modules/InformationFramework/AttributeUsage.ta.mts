/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AttributeUsage {
    userApplications = 0,
    directoryOperation = 1,
    distributedOperation = 2,
    dSAOperation = 3,
}

/**
 * @summary AttributeUsage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeUsage  ::=  ENUMERATED {
 *   userApplications     (0),
 *   directoryOperation   (1),
 *   distributedOperation (2),
 *   dSAOperation         (3),
 *   ... }
 * ```
 * 
 * @enum {number}
 */
export
type AttributeUsage = _enum_for_AttributeUsage | ENUMERATED;

/**
 * @summary AttributeUsage_userApplications
 * @constant
 * @type {number}
 */
export
const AttributeUsage_userApplications: AttributeUsage = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary userApplications
 * @constant
 * @type {number}
 */
export
const userApplications: AttributeUsage = AttributeUsage_userApplications; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeUsage_directoryOperation
 * @constant
 * @type {number}
 */
export
const AttributeUsage_directoryOperation: AttributeUsage = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary directoryOperation
 * @constant
 * @type {number}
 */
export
const directoryOperation: AttributeUsage = AttributeUsage_directoryOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeUsage_distributedOperation
 * @constant
 * @type {number}
 */
export
const AttributeUsage_distributedOperation: AttributeUsage = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary distributedOperation
 * @constant
 * @type {number}
 */
export
const distributedOperation: AttributeUsage = AttributeUsage_distributedOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AttributeUsage_dSAOperation
 * @constant
 * @type {number}
 */
export
const AttributeUsage_dSAOperation: AttributeUsage = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dSAOperation
 * @constant
 * @type {number}
 */
export
const dSAOperation: AttributeUsage = AttributeUsage_dSAOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AttributeUsage: $.ASN1Decoder<AttributeUsage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeUsage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeUsage (el: _Element): AttributeUsage {
    if (!_cached_decoder_for_AttributeUsage) { _cached_decoder_for_AttributeUsage = $._decodeEnumerated; }
    return _cached_decoder_for_AttributeUsage(el);
}

let _cached_encoder_for_AttributeUsage: $.ASN1Encoder<AttributeUsage> | null = null;

/**
 * @summary Encodes a(n) AttributeUsage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeUsage, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeUsage (value: AttributeUsage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeUsage) { _cached_encoder_for_AttributeUsage = $._encodeEnumerated; }
    return _cached_encoder_for_AttributeUsage(value, elGetter);
}


/* eslint-enable */
