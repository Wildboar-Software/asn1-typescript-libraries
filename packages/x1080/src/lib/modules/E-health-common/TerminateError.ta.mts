/* eslint-disable */
import {
    type ENUMERATED,
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


export enum _enum_for_TerminateError {
    terminationNotAllowed = 0,
    invalidSessionType = 1,
    invalidSessionId = 2,
}


/**
 * @summary TerminateError
 * @description
 *
 * Why session termination was refused. ITU-T Rec. X.1080.1
 * (05/2018)
 * [§11.2.3](https://www.itu.int/rec/T-REC-X.1080.1-201805-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateError  ::=  ENUMERATED {
 *   terminationNotAllowed,
 *   invalidSessionType,
 *   invalidSessionId,
 *   ... }
 * ```
 *
 * @enum {number}
 */
export type TerminateError = _enum_for_TerminateError | ENUMERATED;


/**
 * @summary TerminateError_terminationNotAllowed
 * @description
 *
 * The entity is not allowed to terminate the session. ITU-T Rec.
 * X.1080.1 (05/2018) §11.2.3 a).
 *
 * @constant
 * @type {number}
 */
export const TerminateError_terminationNotAllowed = _enum_for_TerminateError.terminationNotAllowed satisfies TerminateError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary terminationNotAllowed
 * @description
 *
 * The entity is not allowed to terminate the session. ITU-T Rec.
 * X.1080.1 (05/2018) §11.2.3 a).
 *
 * @constant
 * @type {number}
 */
export const terminationNotAllowed = TerminateError_terminationNotAllowed satisfies TerminateError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary TerminateError_invalidSessionType
 * @description
 *
 * No session of the indicated type exists. ITU-T Rec. X.1080.1
 * (05/2018) §11.2.3 b).
 *
 * @constant
 * @type {number}
 */
export const TerminateError_invalidSessionType = _enum_for_TerminateError.invalidSessionType satisfies TerminateError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidSessionType
 * @description
 *
 * No session of the indicated type exists. ITU-T Rec. X.1080.1
 * (05/2018) §11.2.3 b).
 *
 * @constant
 * @type {number}
 */
export const invalidSessionType = TerminateError_invalidSessionType satisfies TerminateError; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary TerminateError_invalidSessionId
 * @description
 *
 * No session with this identity exists. ITU-T Rec. X.1080.1
 * (05/2018) §11.2.3 c).
 *
 * @constant
 * @type {number}
 */
export const TerminateError_invalidSessionId = _enum_for_TerminateError.invalidSessionId satisfies TerminateError; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidSessionId
 * @description
 *
 * No session with this identity exists. ITU-T Rec. X.1080.1
 * (05/2018) §11.2.3 c).
 *
 * @constant
 * @type {number}
 */
export const invalidSessionId = TerminateError_invalidSessionId satisfies TerminateError; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_TerminateError = $._decodeEnumerated;




export const _encode_TerminateError = $._encodeEnumerated;


/* eslint-enable */
