/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMStatusCodeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatusCodeType  ::=  ENUMERATED {
 *    retrieved                  ( 0 ),
 *    forwarded                  ( 1 ),
 *    expired                    ( 2 ),
 *    rejected                   ( 3 ),
 *    deferred                   ( 4 ),
 *    unrecognised               ( 5 ),
 *    read                       ( 6 ),
 *    deletedWithoutBeingRead    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMStatusCodeType {
    retrieved = 0,
    forwarded = 1,
    expired = 2,
    rejected = 3,
    deferred = 4,
    unrecognised = 5,
    read = 6,
    deletedWithoutBeingRead = 7,
}

/**
 * @summary MMStatusCodeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatusCodeType  ::=  ENUMERATED {
 *    retrieved                  ( 0 ),
 *    forwarded                  ( 1 ),
 *    expired                    ( 2 ),
 *    rejected                   ( 3 ),
 *    deferred                   ( 4 ),
 *    unrecognised               ( 5 ),
 *    read                       ( 6 ),
 *    deletedWithoutBeingRead    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
type MMStatusCodeType = _enum_for_MMStatusCodeType;

/**
 * @summary MMStatusCodeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMStatusCodeType  ::=  ENUMERATED {
 *    retrieved                  ( 0 ),
 *    forwarded                  ( 1 ),
 *    expired                    ( 2 ),
 *    rejected                   ( 3 ),
 *    deferred                   ( 4 ),
 *    unrecognised               ( 5 ),
 *    read                       ( 6 ),
 *    deletedWithoutBeingRead    ( 7 ) }
 * ```
 * 
 * @enum {number}
 */
export
const MMStatusCodeType = _enum_for_MMStatusCodeType;

/**
 * @summary MMStatusCodeType_retrieved
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_retrieved: MMStatusCodeType = MMStatusCodeType.retrieved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieved
 * @constant
 * @type {number}
 */
export
const retrieved: MMStatusCodeType = MMStatusCodeType.retrieved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_forwarded
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_forwarded: MMStatusCodeType = MMStatusCodeType.forwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @constant
 * @type {number}
 */
export
const forwarded: MMStatusCodeType = MMStatusCodeType.forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_expired
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_expired: MMStatusCodeType = MMStatusCodeType.expired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary expired
 * @constant
 * @type {number}
 */
export
const expired: MMStatusCodeType = MMStatusCodeType.expired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_rejected
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_rejected: MMStatusCodeType = MMStatusCodeType.rejected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejected
 * @constant
 * @type {number}
 */
export
const rejected: MMStatusCodeType = MMStatusCodeType.rejected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_deferred
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_deferred: MMStatusCodeType = MMStatusCodeType.deferred; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferred
 * @constant
 * @type {number}
 */
export
const deferred: MMStatusCodeType = MMStatusCodeType.deferred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_unrecognised
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_unrecognised: MMStatusCodeType = MMStatusCodeType.unrecognised; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognised
 * @constant
 * @type {number}
 */
export
const unrecognised: MMStatusCodeType = MMStatusCodeType.unrecognised; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_read
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_read: MMStatusCodeType = MMStatusCodeType.read; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read
 * @constant
 * @type {number}
 */
export
const read: MMStatusCodeType = MMStatusCodeType.read; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_deletedWithoutBeingRead
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_deletedWithoutBeingRead: MMStatusCodeType = MMStatusCodeType.deletedWithoutBeingRead; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deletedWithoutBeingRead
 * @constant
 * @type {number}
 */
export
const deletedWithoutBeingRead: MMStatusCodeType = MMStatusCodeType.deletedWithoutBeingRead; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MMStatusCodeType: $.ASN1Decoder<MMStatusCodeType> = $._decodeEnumerated;

export
const _encode_MMStatusCodeType: $.ASN1Encoder<MMStatusCodeType> = $._encodeEnumerated;

/* eslint-enable */
