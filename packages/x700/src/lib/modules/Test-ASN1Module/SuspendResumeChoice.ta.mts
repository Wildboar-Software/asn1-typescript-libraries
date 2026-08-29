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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary SuspendResumeChoice
 * @description
 *
 * Whether TestSuspendResumeInfo asks to suspend or resume the indicated tests.
 * Successful suspend/resume applies to all TOs of each identified test. ITU-T
 * Rec. X.745 (11/93) §8.4.2.3, 7.2.4, 9.7.
 * [§8.4.2.3](https://www.itu.int/rec/T-REC-X.745-199311-I)
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
 * Whether TestSuspendResumeInfo asks to suspend or resume the indicated tests.
 * Successful suspend/resume applies to all TOs of each identified test. ITU-T
 * Rec. X.745 (11/93) §8.4.2.3, 7.2.4, 9.7.
 * [§8.4.2.3](https://www.itu.int/rec/T-REC-X.745-199311-I)
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
 * Whether TestSuspendResumeInfo asks to suspend or resume the indicated tests.
 * Successful suspend/resume applies to all TOs of each identified test. ITU-T
 * Rec. X.745 (11/93) §8.4.2.3, 7.2.4, 9.7.
 * [§8.4.2.3](https://www.itu.int/rec/T-REC-X.745-199311-I)
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
 * @description
 *
 * Set all TOs of the indicated tests to Suspended. Whether MORT normal
 * operation is restored is TO-defined. ITU-T Rec. X.745 (11/93) §7.2.4.
 * [§7.2.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const SuspendResumeChoice_suspend: SuspendResumeChoice =
    SuspendResumeChoice.suspend; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary suspend
 * @description
 *
 * Set all TOs of the indicated tests to Suspended. Whether MORT normal
 * operation is restored is TO-defined. ITU-T Rec. X.745 (11/93) §7.2.4.
 * [§7.2.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const suspend: SuspendResumeChoice =
    SuspendResumeChoice.suspend; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SuspendResumeChoice_resume
 * @description
 *
 * Resume the indicated tests; the TO definition decides the lifecycle point of
 * resumption. ITU-T Rec. X.745 (11/93) §7.2.4.
 * [§7.2.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const SuspendResumeChoice_resume: SuspendResumeChoice =
    SuspendResumeChoice.resume; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resume
 * @description
 *
 * Resume the indicated tests; the TO definition decides the lifecycle point of
 * resumption. ITU-T Rec. X.745 (11/93) §7.2.4.
 * [§7.2.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const resume: SuspendResumeChoice =
    SuspendResumeChoice.resume; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_SuspendResumeChoice = $._decodeEnumerated;


export const _encode_SuspendResumeChoice = $._encodeEnumerated;


/* eslint-enable */
