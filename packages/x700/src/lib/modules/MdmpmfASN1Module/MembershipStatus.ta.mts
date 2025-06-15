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
import * as $ from 'asn1-ts/dist/functional.mjs';

/**
 * @summary MembershipStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MembershipStatus  ::=  ENUMERATED {unknown(1), member(2), non-member(3)}
 * ```@enum {number}
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
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MembershipStatus  ::=  ENUMERATED {unknown(1), member(2), non-member(3)}
 * ```@enum {number}
 */
export type MembershipStatus = _enum_for_MembershipStatus;

/**
 * @summary MembershipStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MembershipStatus  ::=  ENUMERATED {unknown(1), member(2), non-member(3)}
 * ```@enum {number}
 */
export const MembershipStatus = _enum_for_MembershipStatus;

/**
 * @summary MembershipStatus_unknown
 * @constant
 * @type {number}
 */
export const MembershipStatus_unknown: MembershipStatus =
    MembershipStatus.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export const unknown: MembershipStatus =
    MembershipStatus.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MembershipStatus_member
 * @constant
 * @type {number}
 */
export const MembershipStatus_member: MembershipStatus =
    MembershipStatus.member; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary member
 * @constant
 * @type {number}
 */
export const member: MembershipStatus =
    MembershipStatus.member; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MembershipStatus_non_member
 * @constant
 * @type {number}
 */
export const MembershipStatus_non_member: MembershipStatus =
    MembershipStatus.non_member; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary non_member
 * @constant
 * @type {number}
 */
export const non_member: MembershipStatus =
    MembershipStatus.non_member; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_MembershipStatus = $._decodeEnumerated;


export const _encode_MembershipStatus = $._encodeEnumerated;


/* eslint-enable */
