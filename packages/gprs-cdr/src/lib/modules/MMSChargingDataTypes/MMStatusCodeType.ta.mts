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
const MMStatusCodeType = _enum_for_MMStatusCodeType;

/**
 * @summary MMStatusCodeType_retrieved
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_retrieved = MMStatusCodeType.retrieved satisfies MMStatusCodeType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieved
 * @constant
 * @type {number}
 */
export
const retrieved = MMStatusCodeType.retrieved satisfies MMStatusCodeType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_forwarded
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_forwarded = MMStatusCodeType.forwarded satisfies MMStatusCodeType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @constant
 * @type {number}
 */
export
const forwarded = MMStatusCodeType.forwarded satisfies MMStatusCodeType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_expired
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_expired = MMStatusCodeType.expired satisfies MMStatusCodeType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary expired
 * @constant
 * @type {number}
 */
export
const expired = MMStatusCodeType.expired satisfies MMStatusCodeType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_rejected
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_rejected = MMStatusCodeType.rejected satisfies MMStatusCodeType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejected
 * @constant
 * @type {number}
 */
export
const rejected = MMStatusCodeType.rejected satisfies MMStatusCodeType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_deferred
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_deferred = MMStatusCodeType.deferred satisfies MMStatusCodeType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferred
 * @constant
 * @type {number}
 */
export
const deferred = MMStatusCodeType.deferred satisfies MMStatusCodeType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_unrecognised
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_unrecognised = MMStatusCodeType.unrecognised satisfies MMStatusCodeType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognised
 * @constant
 * @type {number}
 */
export
const unrecognised = MMStatusCodeType.unrecognised satisfies MMStatusCodeType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_read
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_read = MMStatusCodeType.read satisfies MMStatusCodeType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read
 * @constant
 * @type {number}
 */
export
const read = MMStatusCodeType.read satisfies MMStatusCodeType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMStatusCodeType_deletedWithoutBeingRead
 * @constant
 * @type {number}
 */
export
const MMStatusCodeType_deletedWithoutBeingRead = MMStatusCodeType.deletedWithoutBeingRead satisfies MMStatusCodeType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deletedWithoutBeingRead
 * @constant
 * @type {number}
 */
export
const deletedWithoutBeingRead = MMStatusCodeType.deletedWithoutBeingRead satisfies MMStatusCodeType; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_MMStatusCodeType: $.ASN1Decoder<MMStatusCodeType> = $._decodeEnumerated;

export
const _encode_MMStatusCodeType: $.ASN1Encoder<MMStatusCodeType> = $._encodeEnumerated;

/* eslint-enable */
