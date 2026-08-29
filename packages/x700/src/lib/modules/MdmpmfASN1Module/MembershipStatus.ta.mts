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
 * @summary MembershipStatus
 * @description
 *
 * Membership of a named object: unknown, member, or non-member.
 * Reply of `verifyMembershipStatus`. ITU-T Rec. X.749 (08/97)
 * [§8.4.3](https://www.itu.int/rec/T-REC-X.749-199708-I), A.7,
 * A.10.
 *
 * - `unknown` (1): status could not be determined.
 * - `member` (2): object is a member.
 * - `non-member` (3): object is not a member.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MembershipStatus  ::=  ENUMERATED {unknown(1), member(2), non-member(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_MembershipStatus {
    unknown = 1,
    member = 2,
    non_member = 3,
}

/**
 * @summary MembershipStatus
 * @description
 *
 * Membership of a named object: unknown, member, or non-member.
 * Reply of `verifyMembershipStatus`. ITU-T Rec. X.749 (08/97)
 * [§8.4.3](https://www.itu.int/rec/T-REC-X.749-199708-I), A.7,
 * A.10.
 *
 * - `unknown` (1): status could not be determined.
 * - `member` (2): object is a member.
 * - `non-member` (3): object is not a member.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MembershipStatus  ::=  ENUMERATED {unknown(1), member(2), non-member(3)}
 * ```
 *
 * @enum {number}
 */
export type MembershipStatus = _enum_for_MembershipStatus;

/**
 * @summary MembershipStatus
 * @description
 *
 * Membership of a named object: unknown, member, or non-member.
 * Reply of `verifyMembershipStatus`. ITU-T Rec. X.749 (08/97)
 * [§8.4.3](https://www.itu.int/rec/T-REC-X.749-199708-I), A.7,
 * A.10.
 *
 * - `unknown` (1): status could not be determined.
 * - `member` (2): object is a member.
 * - `non-member` (3): object is not a member.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MembershipStatus  ::=  ENUMERATED {unknown(1), member(2), non-member(3)}
 * ```
 *
 * @enum {number}
 */
export const MembershipStatus = _enum_for_MembershipStatus;

/**
 * @summary MembershipStatus_unknown
 * @description
 *
 * Membership status could not be determined. ITU-T Rec. X.749
 * (08/97)
 * [§8.4.3](https://www.itu.int/rec/T-REC-X.749-199708-I).
 * @constant
 * @type {number}
 */
export const MembershipStatus_unknown: MembershipStatus =
    MembershipStatus.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * Membership status could not be determined. ITU-T Rec. X.749
 * (08/97)
 * [§8.4.3](https://www.itu.int/rec/T-REC-X.749-199708-I).
 * @constant
 * @type {number}
 */
export const unknown: MembershipStatus =
    MembershipStatus.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MembershipStatus_member
 * @description
 *
 * The named object is a member. ITU-T Rec. X.749 (08/97)
 * [§8.4.3](https://www.itu.int/rec/T-REC-X.749-199708-I).
 * @constant
 * @type {number}
 */
export const MembershipStatus_member: MembershipStatus =
    MembershipStatus.member; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary member
 * @description
 *
 * The named object is a member. ITU-T Rec. X.749 (08/97)
 * [§8.4.3](https://www.itu.int/rec/T-REC-X.749-199708-I).
 * @constant
 * @type {number}
 */
export const member: MembershipStatus =
    MembershipStatus.member; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MembershipStatus_non_member
 * @description
 *
 * The named object is not a member. ITU-T Rec. X.749 (08/97)
 * [§8.4.3](https://www.itu.int/rec/T-REC-X.749-199708-I).
 * @constant
 * @type {number}
 */
export const MembershipStatus_non_member: MembershipStatus =
    MembershipStatus.non_member; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary non_member
 * @description
 *
 * The named object is not a member. ITU-T Rec. X.749 (08/97)
 * [§8.4.3](https://www.itu.int/rec/T-REC-X.749-199708-I).
 * @constant
 * @type {number}
 */
export const non_member: MembershipStatus =
    MembershipStatus.non_member; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_MembershipStatus = $._decodeEnumerated;


export const _encode_MembershipStatus = $._encodeEnumerated;


/* eslint-enable */
