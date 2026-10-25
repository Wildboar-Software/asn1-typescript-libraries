/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary Release_request_reason
 * @description
 *
 * Reason in an RLRQ APDU: `normal` (0), `urgent` (1),
 * `user-defined` (30). Currently not used; included for
 * completeness only. ITU-T Rec. Q.773 (06/97)
 * [§3.2.1](https://www.itu.int/rec/T-REC-Q.773-199706-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Release-request-reason  ::=  INTEGER {normal(0), urgent(1), user-defined(30)
 * }
 * ```
 */
export type Release_request_reason = INTEGER;

/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export const Release_request_reason_normal = 0 satisfies Release_request_reason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_normal
 * @constant
 * @type {number}
 */
export const normal = Release_request_reason_normal satisfies Release_request_reason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_urgent
 * @constant
 * @type {number}
 */
export const Release_request_reason_urgent = 1 satisfies Release_request_reason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_urgent
 * @constant
 * @type {number}
 */
export const urgent = Release_request_reason_urgent satisfies Release_request_reason; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_user_defined
 * @constant
 * @type {number}
 */
export const Release_request_reason_user_defined = 30 satisfies Release_request_reason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_request_reason_user_defined
 * @constant
 * @type {number}
 */
export const user_defined = Release_request_reason_user_defined satisfies Release_request_reason; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Release_request_reason = $._decodeInteger;


export const _encode_Release_request_reason = $._encodeInteger;


/* eslint-enable */
