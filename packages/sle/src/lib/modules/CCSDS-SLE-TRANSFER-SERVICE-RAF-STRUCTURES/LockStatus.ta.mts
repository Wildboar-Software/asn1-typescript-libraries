/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LockStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LockStatus                    ::=  INTEGER
 * {   inLock                            (0)
 * ,   outOfLock                         (1)
 * ,   notInUse                          (2)
 * ,   unknown                           (3)
 * }
 * ```
 */
export
type LockStatus = INTEGER;

/**
 * @summary LockStatus_inLock
 * @constant
 * @type {number}
 */
export
const LockStatus_inLock: LockStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_inLock
 * @constant
 * @type {number}
 */
export
const inLock: LockStatus = LockStatus_inLock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_outOfLock
 * @constant
 * @type {number}
 */
export
const LockStatus_outOfLock: LockStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_outOfLock
 * @constant
 * @type {number}
 */
export
const outOfLock: LockStatus = LockStatus_outOfLock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_notInUse
 * @constant
 * @type {number}
 */
export
const LockStatus_notInUse: LockStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_notInUse
 * @constant
 * @type {number}
 */
export
const notInUse: LockStatus = LockStatus_notInUse; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_unknown
 * @constant
 * @type {number}
 */
export
const LockStatus_unknown: LockStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LockStatus_unknown
 * @constant
 * @type {number}
 */
export
const unknown: LockStatus = LockStatus_unknown; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_LockStatus: $.ASN1Decoder<LockStatus> = $._decodeInteger;
export const _encode_LockStatus: $.ASN1Encoder<LockStatus> = $._encodeInteger;


/* eslint-enable */
