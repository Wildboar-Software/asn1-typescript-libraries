/* eslint-disable */
import {
    ENUMERATED,
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
export const TerminateError_terminationNotAllowed: TerminateError = 0; /* LONG_NAMED_ENUMERATED_VALUE */


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
export const terminationNotAllowed: TerminateError = TerminateError_terminationNotAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */


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
export const TerminateError_invalidSessionType: TerminateError = 1; /* LONG_NAMED_ENUMERATED_VALUE */


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
export const invalidSessionType: TerminateError = TerminateError_invalidSessionType; /* SHORT_NAMED_ENUMERATED_VALUE */


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
export const TerminateError_invalidSessionId: TerminateError = 2; /* LONG_NAMED_ENUMERATED_VALUE */


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
export const invalidSessionId: TerminateError = TerminateError_invalidSessionId; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_TerminateError = $._decodeEnumerated;




export const _encode_TerminateError = $._encodeEnumerated;


/* eslint-enable */
