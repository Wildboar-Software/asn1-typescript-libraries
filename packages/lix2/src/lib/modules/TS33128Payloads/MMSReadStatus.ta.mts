/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSReadStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReadStatus  ::=  ENUMERATED
 * {
 *     read(1),
 *     deletedWithoutBeingRead(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSReadStatus {
    read = 1,
    deletedWithoutBeingRead = 2,
}

/**
 * @summary MMSReadStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReadStatus  ::=  ENUMERATED
 * {
 *     read(1),
 *     deletedWithoutBeingRead(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSReadStatus = _enum_for_MMSReadStatus;

/**
 * @summary MMSReadStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReadStatus  ::=  ENUMERATED
 * {
 *     read(1),
 *     deletedWithoutBeingRead(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSReadStatus = _enum_for_MMSReadStatus;

/**
 * @summary MMSReadStatus_read
 * @constant
 * @type {number}
 */
export
const MMSReadStatus_read: MMSReadStatus = MMSReadStatus.read; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read
 * @constant
 * @type {number}
 */
export
const read: MMSReadStatus = MMSReadStatus.read; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSReadStatus_deletedWithoutBeingRead
 * @constant
 * @type {number}
 */
export
const MMSReadStatus_deletedWithoutBeingRead: MMSReadStatus = MMSReadStatus.deletedWithoutBeingRead; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deletedWithoutBeingRead
 * @constant
 * @type {number}
 */
export
const deletedWithoutBeingRead: MMSReadStatus = MMSReadStatus.deletedWithoutBeingRead; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_MMSReadStatus: $.ASN1Decoder<MMSReadStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSReadStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSReadStatus (el: _Element): MMSReadStatus {
    if (!_cached_decoder_for_MMSReadStatus) { _cached_decoder_for_MMSReadStatus = $._decodeEnumerated; }
    return _cached_decoder_for_MMSReadStatus(el);
}

let _cached_encoder_for_MMSReadStatus: $.ASN1Encoder<MMSReadStatus> | null = null;

/**
 * @summary Encodes a(n) MMSReadStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSReadStatus, encoded as an ASN.1 Element.
 */
export
function _encode_MMSReadStatus (value: MMSReadStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSReadStatus) { _cached_encoder_for_MMSReadStatus = $._encodeEnumerated; }
    return _cached_encoder_for_MMSReadStatus(value, elGetter);
}


/* eslint-enable */
