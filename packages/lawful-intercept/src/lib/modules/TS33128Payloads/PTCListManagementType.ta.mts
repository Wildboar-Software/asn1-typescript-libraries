/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCListManagementType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementType   ::=  ENUMERATED
 * {
 *     contactListManagementAttempt(1),
 *     groupListManagementAttempt(2),
 *     contactListManagementResult(3),
 *     groupListManagementResult(4),
 *     requestUnsuccessful(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCListManagementType {
    contactListManagementAttempt = 1,
    groupListManagementAttempt = 2,
    contactListManagementResult = 3,
    groupListManagementResult = 4,
    requestUnsuccessful = 5,
}

/**
 * @summary PTCListManagementType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementType   ::=  ENUMERATED
 * {
 *     contactListManagementAttempt(1),
 *     groupListManagementAttempt(2),
 *     contactListManagementResult(3),
 *     groupListManagementResult(4),
 *     requestUnsuccessful(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCListManagementType = _enum_for_PTCListManagementType;

/**
 * @summary PTCListManagementType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCListManagementType   ::=  ENUMERATED
 * {
 *     contactListManagementAttempt(1),
 *     groupListManagementAttempt(2),
 *     contactListManagementResult(3),
 *     groupListManagementResult(4),
 *     requestUnsuccessful(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCListManagementType = _enum_for_PTCListManagementType;

/**
 * @summary PTCListManagementType_contactListManagementAttempt
 * @constant
 * @type {number}
 */
export
const PTCListManagementType_contactListManagementAttempt: PTCListManagementType = PTCListManagementType.contactListManagementAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contactListManagementAttempt
 * @constant
 * @type {number}
 */
export
const contactListManagementAttempt: PTCListManagementType = PTCListManagementType.contactListManagementAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementType_groupListManagementAttempt
 * @constant
 * @type {number}
 */
export
const PTCListManagementType_groupListManagementAttempt: PTCListManagementType = PTCListManagementType.groupListManagementAttempt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupListManagementAttempt
 * @constant
 * @type {number}
 */
export
const groupListManagementAttempt: PTCListManagementType = PTCListManagementType.groupListManagementAttempt; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementType_contactListManagementResult
 * @constant
 * @type {number}
 */
export
const PTCListManagementType_contactListManagementResult: PTCListManagementType = PTCListManagementType.contactListManagementResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary contactListManagementResult
 * @constant
 * @type {number}
 */
export
const contactListManagementResult: PTCListManagementType = PTCListManagementType.contactListManagementResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementType_groupListManagementResult
 * @constant
 * @type {number}
 */
export
const PTCListManagementType_groupListManagementResult: PTCListManagementType = PTCListManagementType.groupListManagementResult; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary groupListManagementResult
 * @constant
 * @type {number}
 */
export
const groupListManagementResult: PTCListManagementType = PTCListManagementType.groupListManagementResult; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCListManagementType_requestUnsuccessful
 * @constant
 * @type {number}
 */
export
const PTCListManagementType_requestUnsuccessful: PTCListManagementType = PTCListManagementType.requestUnsuccessful; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary requestUnsuccessful
 * @constant
 * @type {number}
 */
export
const requestUnsuccessful: PTCListManagementType = PTCListManagementType.requestUnsuccessful; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PTCListManagementType: $.ASN1Decoder<PTCListManagementType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCListManagementType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCListManagementType (el: _Element): PTCListManagementType {
    if (!_cached_decoder_for_PTCListManagementType) { _cached_decoder_for_PTCListManagementType = $._decodeEnumerated; }
    return _cached_decoder_for_PTCListManagementType(el);
}

let _cached_encoder_for_PTCListManagementType: $.ASN1Encoder<PTCListManagementType> | null = null;

/**
 * @summary Encodes a(n) PTCListManagementType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCListManagementType, encoded as an ASN.1 Element.
 */
export
function _encode_PTCListManagementType (value: PTCListManagementType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCListManagementType) { _cached_encoder_for_PTCListManagementType = $._encodeEnumerated; }
    return _cached_encoder_for_PTCListManagementType(value, elGetter);
}


/* eslint-enable */
