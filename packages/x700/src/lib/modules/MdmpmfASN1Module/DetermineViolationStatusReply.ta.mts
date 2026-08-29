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
 * @summary DetermineViolationStatusReply
 * @description
 *
 * Reply of `determineViolationStatus`. Adds `non-member` to the
 * three `ViolationStatus` values when the named object is not in
 * the domain. ITU-T Rec. X.749 (08/97)
 * [A.7](https://www.itu.int/rec/T-REC-X.749-199708-I), §8.4.2,
 * A.10.
 *
 * - `unknown` (1): status could not be determined.
 * - `no-violation` (2): member, no violation detected.
 * - `violation-detected` (3): member, policy evaluated to false.
 * - `non-member` (4): object is not a domain member.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DetermineViolationStatusReply  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3), non-member(4)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_DetermineViolationStatusReply {
    unknown = 1,
    no_violation = 2,
    violation_detected = 3,
    non_member = 4,
}

/**
 * @summary DetermineViolationStatusReply
 * @description
 *
 * Reply of `determineViolationStatus`. Adds `non-member` to the
 * three `ViolationStatus` values when the named object is not in
 * the domain. ITU-T Rec. X.749 (08/97)
 * [A.7](https://www.itu.int/rec/T-REC-X.749-199708-I), §8.4.2,
 * A.10.
 *
 * - `unknown` (1): status could not be determined.
 * - `no-violation` (2): member, no violation detected.
 * - `violation-detected` (3): member, policy evaluated to false.
 * - `non-member` (4): object is not a domain member.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DetermineViolationStatusReply  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3), non-member(4)}
 * ```
 *
 * @enum {number}
 */
export type DetermineViolationStatusReply = _enum_for_DetermineViolationStatusReply;

/**
 * @summary DetermineViolationStatusReply
 * @description
 *
 * Reply of `determineViolationStatus`. Adds `non-member` to the
 * three `ViolationStatus` values when the named object is not in
 * the domain. ITU-T Rec. X.749 (08/97)
 * [A.7](https://www.itu.int/rec/T-REC-X.749-199708-I), §8.4.2,
 * A.10.
 *
 * - `unknown` (1): status could not be determined.
 * - `no-violation` (2): member, no violation detected.
 * - `violation-detected` (3): member, policy evaluated to false.
 * - `non-member` (4): object is not a domain member.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DetermineViolationStatusReply  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3), non-member(4)}
 * ```
 *
 * @enum {number}
 */
export const DetermineViolationStatusReply = _enum_for_DetermineViolationStatusReply;

/**
 * @summary DetermineViolationStatusReply_unknown
 * @description
 *
 * Status could not be determined. ITU-T Rec. X.749 (08/97)
 * [A.7](https://www.itu.int/rec/T-REC-X.749-199708-I), §8.4.2.
 * @constant
 * @type {number}
 */
export const DetermineViolationStatusReply_unknown: DetermineViolationStatusReply =
    DetermineViolationStatusReply.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * Status could not be determined. ITU-T Rec. X.749 (08/97)
 * [A.7](https://www.itu.int/rec/T-REC-X.749-199708-I), §8.4.2.
 * @constant
 * @type {number}
 */
export const unknown: DetermineViolationStatusReply =
    DetermineViolationStatusReply.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DetermineViolationStatusReply_no_violation
 * @description
 *
 * Object is a member and no violation was detected. ITU-T Rec.
 * X.749 (08/97)
 * [A.7](https://www.itu.int/rec/T-REC-X.749-199708-I), §8.4.2.
 * @constant
 * @type {number}
 */
export const DetermineViolationStatusReply_no_violation: DetermineViolationStatusReply =
    DetermineViolationStatusReply.no_violation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_violation
 * @description
 *
 * Object is a member and no violation was detected. ITU-T Rec.
 * X.749 (08/97)
 * [A.7](https://www.itu.int/rec/T-REC-X.749-199708-I), §8.4.2.
 * @constant
 * @type {number}
 */
export const no_violation: DetermineViolationStatusReply =
    DetermineViolationStatusReply.no_violation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DetermineViolationStatusReply_violation_detected
 * @description
 *
 * Object is a member and the policy evaluated to false. ITU-T Rec.
 * X.749 (08/97)
 * [A.7](https://www.itu.int/rec/T-REC-X.749-199708-I), §8.4.2.
 * @constant
 * @type {number}
 */
export const DetermineViolationStatusReply_violation_detected: DetermineViolationStatusReply =
    DetermineViolationStatusReply.violation_detected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary violation_detected
 * @description
 *
 * Object is a member and the policy evaluated to false. ITU-T Rec.
 * X.749 (08/97)
 * [A.7](https://www.itu.int/rec/T-REC-X.749-199708-I), §8.4.2.
 * @constant
 * @type {number}
 */
export const violation_detected: DetermineViolationStatusReply =
    DetermineViolationStatusReply.violation_detected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DetermineViolationStatusReply_non_member
 * @description
 *
 * Named object is not a domain member. ITU-T Rec. X.749 (08/97)
 * [A.7](https://www.itu.int/rec/T-REC-X.749-199708-I), §8.4.2.
 * @constant
 * @type {number}
 */
export const DetermineViolationStatusReply_non_member: DetermineViolationStatusReply =
    DetermineViolationStatusReply.non_member; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary non_member
 * @description
 *
 * Named object is not a domain member. ITU-T Rec. X.749 (08/97)
 * [A.7](https://www.itu.int/rec/T-REC-X.749-199708-I), §8.4.2.
 * @constant
 * @type {number}
 */
export const non_member: DetermineViolationStatusReply =
    DetermineViolationStatusReply.non_member; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_DetermineViolationStatusReply = $._decodeEnumerated;


export const _encode_DetermineViolationStatusReply = $._encodeEnumerated;


/* eslint-enable */
