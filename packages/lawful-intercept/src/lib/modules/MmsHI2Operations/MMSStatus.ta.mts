/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MMSStatus {
    expired = 0,
    retrieved = 1,
    rejected = 2,
    deferred = 3,
    unrecognised = 4,
    indeterminate = 5,
    forwarded = 6,
    unreachable = 7,
}

/**
 * @summary MMSStatus
 * @description
 * 
 * Status of an MM (table 15.3.6.1.2). A status of retrieved is signalled by the
 * retrieving UE only after retrieval. Clause 15.3 does not further define the
 * other states.
 * 
 * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSStatus ::=  ENUMERATED
 * {
 *     expired         (0),
 *     retrieved        (1),
 *     rejected        (2),
 *     deferred        (3),
 *     unrecognised    (4),
 *     indeterminate    (5),
 *     forwarded        (6),
 *     unreachable        (7),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSStatus = _enum_for_MMSStatus | ENUMERATED;

/**
 * @summary MMSStatus_expired
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const MMSStatus_expired: MMSStatus = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary expired
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const expired: MMSStatus = MMSStatus_expired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStatus_retrieved
 * @description
 * 
 * The retrieving UE signals this only after it has retrieved the MM (table
 * 15.3.6.1.2).
 * @constant
 * @type {number}
 */
export
const MMSStatus_retrieved: MMSStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary retrieved
 * @description
 * 
 * Signalled by the retrieving UE only after retrieval.
 * @constant
 * @type {number}
 */
export
const retrieved: MMSStatus = MMSStatus_retrieved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStatus_rejected
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const MMSStatus_rejected: MMSStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejected
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const rejected: MMSStatus = MMSStatus_rejected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStatus_deferred
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const MMSStatus_deferred: MMSStatus = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deferred
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const deferred: MMSStatus = MMSStatus_deferred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStatus_unrecognised
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const MMSStatus_unrecognised: MMSStatus = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognised
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const unrecognised: MMSStatus = MMSStatus_unrecognised; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStatus_indeterminate
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const MMSStatus_indeterminate: MMSStatus = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary indeterminate
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const indeterminate: MMSStatus = MMSStatus_indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStatus_forwarded
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const MMSStatus_forwarded: MMSStatus = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const forwarded: MMSStatus = MMSStatus_forwarded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSStatus_unreachable
 * @description
 * 
 * Annex B.15 names this value. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const MMSStatus_unreachable: MMSStatus = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unreachable
 * @description
 * 
 * Clause 15.3 does not further define this value.
 * @constant
 * @type {number}
 */
export
const unreachable: MMSStatus = MMSStatus_unreachable; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSStatus: $.ASN1Decoder<MMSStatus> = $._decodeEnumerated;
export const _encode_MMSStatus: $.ASN1Encoder<MMSStatus> = $._encodeEnumerated;


/* eslint-enable */
