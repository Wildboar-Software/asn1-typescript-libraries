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

export const _decode_MMSReadStatus: $.ASN1Decoder<MMSReadStatus> = $._decodeEnumerated;

export const _encode_MMSReadStatus: $.ASN1Encoder<MMSReadStatus> = $._encodeEnumerated;


/* eslint-enable */
