/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMStatusCodeType
 * @description
 *
 * This field contains an appropriate status value of the delivered MM (e.g.
 * retrieved, rejected, etc.).
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.28.
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
 * This field contains an appropriate status value of the delivered MM (e.g.
 * retrieved, rejected, etc.).
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.28.
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
 * This field contains an appropriate status value of the delivered MM (e.g.
 * retrieved, rejected, etc.).
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.28.
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
const MMStatusCodeType: typeof _enum_for_MMStatusCodeType = _enum_for_MMStatusCodeType;

/**
 * @summary MMStatusCodeType_retrieved
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_retrieved: _enum_for_MMStatusCodeType.retrieved = MMStatusCodeType.retrieved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieved
 * @constant
 * @type {number}
 */
export
const retrieved: _enum_for_MMStatusCodeType.retrieved = MMStatusCodeType.retrieved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_forwarded
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_forwarded: _enum_for_MMStatusCodeType.forwarded = MMStatusCodeType.forwarded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @constant
 * @type {number}
 */
export
const forwarded: _enum_for_MMStatusCodeType.forwarded = MMStatusCodeType.forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_expired
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_expired: _enum_for_MMStatusCodeType.expired = MMStatusCodeType.expired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary expired
 * @constant
 * @type {number}
 */
export
const expired: _enum_for_MMStatusCodeType.expired = MMStatusCodeType.expired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_rejected
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_rejected: _enum_for_MMStatusCodeType.rejected = MMStatusCodeType.rejected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejected
 * @constant
 * @type {number}
 */
export
const rejected: _enum_for_MMStatusCodeType.rejected = MMStatusCodeType.rejected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_deferred
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_deferred: _enum_for_MMStatusCodeType.deferred = MMStatusCodeType.deferred; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferred
 * @constant
 * @type {number}
 */
export
const deferred: _enum_for_MMStatusCodeType.deferred = MMStatusCodeType.deferred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_unrecognised
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_unrecognised: _enum_for_MMStatusCodeType.unrecognised = MMStatusCodeType.unrecognised; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognised
 * @constant
 * @type {number}
 */
export
const unrecognised: _enum_for_MMStatusCodeType.unrecognised = MMStatusCodeType.unrecognised; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_read
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_read: _enum_for_MMStatusCodeType.read = MMStatusCodeType.read; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read
 * @constant
 * @type {number}
 */
export
const read: _enum_for_MMStatusCodeType.read = MMStatusCodeType.read; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_deletedWithoutBeingRead
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_deletedWithoutBeingRead: _enum_for_MMStatusCodeType.deletedWithoutBeingRead = MMStatusCodeType.deletedWithoutBeingRead; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deletedWithoutBeingRead
 * @constant
 * @type {number}
 */
export
const deletedWithoutBeingRead: _enum_for_MMStatusCodeType.deletedWithoutBeingRead = MMStatusCodeType.deletedWithoutBeingRead; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MMStatusCodeType: $.ASN1Decoder<MMStatusCodeType> = $._decodeEnumerated;

export
const _encode_MMStatusCodeType: $.ASN1Encoder<MMStatusCodeType> = $._encodeEnumerated;

/* eslint-enable */
