/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary SuspendResumeChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SuspendResumeChoice  ::=  ENUMERATED {suspend(0), resume(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_SuspendResumeChoice {
    suspend = 0,
    resume = 1,
}

/**
 * @summary SuspendResumeChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SuspendResumeChoice  ::=  ENUMERATED {suspend(0), resume(1)}
 * ```
 *
 * @enum {number}
 */
export type SuspendResumeChoice = _enum_for_SuspendResumeChoice;

/**
 * @summary SuspendResumeChoice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SuspendResumeChoice  ::=  ENUMERATED {suspend(0), resume(1)}
 * ```
 *
 * @enum {number}
 */
export const SuspendResumeChoice = _enum_for_SuspendResumeChoice;

/**
 * @summary SuspendResumeChoice_suspend
 * @constant
 * @type {number}
 */
export const SuspendResumeChoice_suspend: SuspendResumeChoice =
    SuspendResumeChoice.suspend; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary suspend
 * @constant
 * @type {number}
 */
export const suspend: SuspendResumeChoice =
    SuspendResumeChoice.suspend; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SuspendResumeChoice_resume
 * @constant
 * @type {number}
 */
export const SuspendResumeChoice_resume: SuspendResumeChoice =
    SuspendResumeChoice.resume; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resume
 * @constant
 * @type {number}
 */
export const resume: SuspendResumeChoice =
    SuspendResumeChoice.resume; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_SuspendResumeChoice = $._decodeEnumerated;


export const _encode_SuspendResumeChoice = $._encodeEnumerated;


/* eslint-enable */
