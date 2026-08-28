/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
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
 * @summary Release_response_reason
 * @description
 *
 * Reason in an RLRE APDU: `normal` (0), `not-finished` (1),
 * `user-defined` (30). Currently not used; included for
 * completeness only. ITU-T Rec. Q.773 (06/97)
 * [§3.2.1](https://www.itu.int/rec/T-REC-Q.773-199706-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Release-response-reason  ::=  INTEGER {
 *   normal(0), not-finished(1), user-defined(30)}
 * ```
 */
export type Release_response_reason = INTEGER;

/**
 * @summary Release_response_reason_normal
 * @constant
 * @type {number}
 */
export const Release_response_reason_normal: Release_response_reason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_response_reason_normal
 * @constant
 * @type {number}
 */
export const normal: Release_response_reason = Release_response_reason_normal; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Release_response_reason_not_finished
 * @constant
 * @type {number}
 */
export const Release_response_reason_not_finished: Release_response_reason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_response_reason_not_finished
 * @constant
 * @type {number}
 */
export const not_finished: Release_response_reason = Release_response_reason_not_finished; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary Release_response_reason_user_defined
 * @constant
 * @type {number}
 */
export const Release_response_reason_user_defined: Release_response_reason = 30; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Release_response_reason_user_defined
 * @constant
 * @type {number}
 */
export const user_defined: Release_response_reason = Release_response_reason_user_defined; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_Release_response_reason = $._decodeInteger;


export const _encode_Release_response_reason = $._encodeInteger;


/* eslint-enable */
