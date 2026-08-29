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
 * @summary TONotCreated_reason
 * @description
 *
 * Enumerated reasons a TO was not created (A.7.4). The rec lists the names
 * only; they correspond to class/instance/MORT/AO checks and to the
 * MORT-not-available / AO-not-available errors.
 * invalidTOclass (0): requested TO class is not valid for this TARR.
 * duplicateTOInstance (1): that TO instance already exists.
 * invalidMORTClass (2): a MORT class is not valid for this test.
 * invalidAssociatedObjectClass (3): an AO class is not valid for this test.
 * mORTNotAvailable (4): a MORT is not in a testable state (8.4.4.6).
 * associatedObjectNotAvailable (5): an AO is not in the correct state
 * (8.4.4.2). ITU-T Rec. X.745 (11/93) §A.7.4.
 * [§A.7.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TONotCreated-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_TONotCreated_reason {
    invalidTOclass = 0,
    duplicateTOInstance = 1,
    invalidMORTClass = 2,
    invalidAssociatedObjectClass = 3,
    mORTNotAvailable = 4,
    associatedObjectNotAvailable = 5,
}

/**
 * @summary TONotCreated_reason
 * @description
 *
 * Enumerated reasons a TO was not created (A.7.4). The rec lists the names
 * only; they correspond to class/instance/MORT/AO checks and to the
 * MORT-not-available / AO-not-available errors.
 * invalidTOclass (0): requested TO class is not valid for this TARR.
 * duplicateTOInstance (1): that TO instance already exists.
 * invalidMORTClass (2): a MORT class is not valid for this test.
 * invalidAssociatedObjectClass (3): an AO class is not valid for this test.
 * mORTNotAvailable (4): a MORT is not in a testable state (8.4.4.6).
 * associatedObjectNotAvailable (5): an AO is not in the correct state
 * (8.4.4.2). ITU-T Rec. X.745 (11/93) §A.7.4.
 * [§A.7.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TONotCreated-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export type TONotCreated_reason = _enum_for_TONotCreated_reason;

/**
 * @summary TONotCreated_reason
 * @description
 *
 * Enumerated reasons a TO was not created (A.7.4). The rec lists the names
 * only; they correspond to class/instance/MORT/AO checks and to the
 * MORT-not-available / AO-not-available errors.
 * invalidTOclass (0): requested TO class is not valid for this TARR.
 * duplicateTOInstance (1): that TO instance already exists.
 * invalidMORTClass (2): a MORT class is not valid for this test.
 * invalidAssociatedObjectClass (3): an AO class is not valid for this test.
 * mORTNotAvailable (4): a MORT is not in a testable state (8.4.4.6).
 * associatedObjectNotAvailable (5): an AO is not in the correct state
 * (8.4.4.2). ITU-T Rec. X.745 (11/93) §A.7.4.
 * [§A.7.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TONotCreated-reason ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @enum {number}
 */
export const TONotCreated_reason = _enum_for_TONotCreated_reason;

/**
 * @summary TONotCreated_reason_invalidTOclass
 * @description
 *
 * Requested TO class is not valid for this TARR. ITU-T Rec. X.745 (11/93)
 * §A.7.4.
 * [§A.7.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_invalidTOclass: TONotCreated_reason =
    TONotCreated_reason.invalidTOclass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidTOclass
 * @description
 *
 * Requested TO class is not valid for this TARR. ITU-T Rec. X.745 (11/93)
 * §A.7.4.
 * [§A.7.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const invalidTOclass: TONotCreated_reason =
    TONotCreated_reason.invalidTOclass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TONotCreated_reason_duplicateTOInstance
 * @description
 *
 * A TO with that instance name already exists. ITU-T Rec. X.745 (11/93) §A.7.4.
 * [§A.7.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_duplicateTOInstance: TONotCreated_reason =
    TONotCreated_reason.duplicateTOInstance; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicateTOInstance
 * @description
 *
 * A TO with that instance name already exists. ITU-T Rec. X.745 (11/93) §A.7.4.
 * [§A.7.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const duplicateTOInstance: TONotCreated_reason =
    TONotCreated_reason.duplicateTOInstance; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TONotCreated_reason_invalidMORTClass
 * @description
 *
 * A MORT class is not valid for this test. ITU-T Rec. X.745 (11/93) §A.7.4.
 * [§A.7.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_invalidMORTClass: TONotCreated_reason =
    TONotCreated_reason.invalidMORTClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidMORTClass
 * @description
 *
 * A MORT class is not valid for this test. ITU-T Rec. X.745 (11/93) §A.7.4.
 * [§A.7.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const invalidMORTClass: TONotCreated_reason =
    TONotCreated_reason.invalidMORTClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TONotCreated_reason_invalidAssociatedObjectClass
 * @description
 *
 * An associated-object class is not valid for this test. ITU-T Rec. X.745
 * (11/93) §A.7.4.
 * [§A.7.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_invalidAssociatedObjectClass: TONotCreated_reason =
    TONotCreated_reason.invalidAssociatedObjectClass; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalidAssociatedObjectClass
 * @description
 *
 * An associated-object class is not valid for this test. ITU-T Rec. X.745
 * (11/93) §A.7.4.
 * [§A.7.4](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const invalidAssociatedObjectClass: TONotCreated_reason =
    TONotCreated_reason.invalidAssociatedObjectClass; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TONotCreated_reason_mORTNotAvailable
 * @description
 *
 * A MORT is not in a state in which it may be tested. ITU-T Rec. X.745 (11/93)
 * §8.4.4.6, A.7.4.
 * [§8.4.4.6](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_mORTNotAvailable: TONotCreated_reason =
    TONotCreated_reason.mORTNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mORTNotAvailable
 * @description
 *
 * A MORT is not in a state in which it may be tested. ITU-T Rec. X.745 (11/93)
 * §8.4.4.6, A.7.4.
 * [§8.4.4.6](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const mORTNotAvailable: TONotCreated_reason =
    TONotCreated_reason.mORTNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TONotCreated_reason_associatedObjectNotAvailable
 * @description
 *
 * An associated object is not in the correct state for the test. ITU-T Rec.
 * X.745 (11/93) §8.4.4.2, A.7.4.
 * [§8.4.4.2](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const TONotCreated_reason_associatedObjectNotAvailable: TONotCreated_reason =
    TONotCreated_reason.associatedObjectNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary associatedObjectNotAvailable
 * @description
 *
 * An associated object is not in the correct state for the test. ITU-T Rec.
 * X.745 (11/93) §8.4.4.2, A.7.4.
 * [§8.4.4.2](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const associatedObjectNotAvailable: TONotCreated_reason =
    TONotCreated_reason.associatedObjectNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_TONotCreated_reason = $._decodeEnumerated;


export const _encode_TONotCreated_reason = $._encodeEnumerated;


/* eslint-enable */
