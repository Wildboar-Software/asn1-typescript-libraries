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
 * @summary Completeness
 * @description
 *
 * Completeness of a membership list in `listMembership` (and
 * direct-membership) replies: unknown, known complete, or known
 * incomplete. ITU-T Rec. X.749 (08/97)
 * [§8.4.1](https://www.itu.int/rec/T-REC-X.749-199708-I), A.10.
 *
 * - `completenessUnknown` (0): completeness is not known.
 * - `knownComplete` (1): list is known to be complete.
 * - `knownNotComplete` (2): list is known to be incomplete.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Completeness  ::=  ENUMERATED {
 *   completenessUnknown(0), knownComplete(1), knownNotComplete(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_Completeness {
    completenessUnknown = 0,
    knownComplete = 1,
    knownNotComplete = 2,
}

/**
 * @summary Completeness
 * @description
 *
 * Completeness of a membership list in `listMembership` (and
 * direct-membership) replies: unknown, known complete, or known
 * incomplete. ITU-T Rec. X.749 (08/97)
 * [§8.4.1](https://www.itu.int/rec/T-REC-X.749-199708-I), A.10.
 *
 * - `completenessUnknown` (0): completeness is not known.
 * - `knownComplete` (1): list is known to be complete.
 * - `knownNotComplete` (2): list is known to be incomplete.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Completeness  ::=  ENUMERATED {
 *   completenessUnknown(0), knownComplete(1), knownNotComplete(2)}
 * ```
 *
 * @enum {number}
 */
export type Completeness = _enum_for_Completeness;

/**
 * @summary Completeness
 * @description
 *
 * Completeness of a membership list in `listMembership` (and
 * direct-membership) replies: unknown, known complete, or known
 * incomplete. ITU-T Rec. X.749 (08/97)
 * [§8.4.1](https://www.itu.int/rec/T-REC-X.749-199708-I), A.10.
 *
 * - `completenessUnknown` (0): completeness is not known.
 * - `knownComplete` (1): list is known to be complete.
 * - `knownNotComplete` (2): list is known to be incomplete.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Completeness  ::=  ENUMERATED {
 *   completenessUnknown(0), knownComplete(1), knownNotComplete(2)}
 * ```
 *
 * @enum {number}
 */
export const Completeness = _enum_for_Completeness;

/**
 * @summary Completeness_completenessUnknown
 * @description
 *
 * Completeness of the membership list is not known. ITU-T Rec.
 * X.749 (08/97)
 * [§8.4.1](https://www.itu.int/rec/T-REC-X.749-199708-I).
 * @constant
 * @type {number}
 */
export const Completeness_completenessUnknown: Completeness =
    Completeness.completenessUnknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary completenessUnknown
 * @description
 *
 * Completeness of the membership list is not known. ITU-T Rec.
 * X.749 (08/97)
 * [§8.4.1](https://www.itu.int/rec/T-REC-X.749-199708-I).
 * @constant
 * @type {number}
 */
export const completenessUnknown: Completeness =
    Completeness.completenessUnknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Completeness_knownComplete
 * @description
 *
 * Membership list is known to be complete. ITU-T Rec. X.749
 * (08/97)
 * [§8.4.1](https://www.itu.int/rec/T-REC-X.749-199708-I).
 * @constant
 * @type {number}
 */
export const Completeness_knownComplete: Completeness =
    Completeness.knownComplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary knownComplete
 * @description
 *
 * Membership list is known to be complete. ITU-T Rec. X.749
 * (08/97)
 * [§8.4.1](https://www.itu.int/rec/T-REC-X.749-199708-I).
 * @constant
 * @type {number}
 */
export const knownComplete: Completeness =
    Completeness.knownComplete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Completeness_knownNotComplete
 * @description
 *
 * Membership list is known to be incomplete. ITU-T Rec. X.749
 * (08/97)
 * [§8.4.1](https://www.itu.int/rec/T-REC-X.749-199708-I).
 * @constant
 * @type {number}
 */
export const Completeness_knownNotComplete: Completeness =
    Completeness.knownNotComplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary knownNotComplete
 * @description
 *
 * Membership list is known to be incomplete. ITU-T Rec. X.749
 * (08/97)
 * [§8.4.1](https://www.itu.int/rec/T-REC-X.749-199708-I).
 * @constant
 * @type {number}
 */
export const knownNotComplete: Completeness =
    Completeness.knownNotComplete; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_Completeness = $._decodeEnumerated;


export const _encode_Completeness = $._encodeEnumerated;


/* eslint-enable */
