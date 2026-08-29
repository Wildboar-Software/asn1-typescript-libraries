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
 * @summary ViolationStatus
 * @description
 *
 * Result of evaluating a policy against an object. ITU-T Rec.
 * X.749 (08/97)
 * [A.10](https://www.itu.int/rec/T-REC-X.749-199708-I), A.7,
 * §8.2.8.3.
 *
 * - `unknown` (1): status could not be determined.
 * - `no-violation` (2): no violation detected.
 * - `violation-detected` (3): policy evaluated to false.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ViolationStatus  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ViolationStatus {
    unknown = 1,
    no_violation = 2,
    violation_detected = 3,
}

/**
 * @summary ViolationStatus
 * @description
 *
 * Result of evaluating a policy against an object. ITU-T Rec.
 * X.749 (08/97)
 * [A.10](https://www.itu.int/rec/T-REC-X.749-199708-I), A.7,
 * §8.2.8.3.
 *
 * - `unknown` (1): status could not be determined.
 * - `no-violation` (2): no violation detected.
 * - `violation-detected` (3): policy evaluated to false.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ViolationStatus  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3)}
 * ```
 *
 * @enum {number}
 */
export type ViolationStatus = _enum_for_ViolationStatus;

/**
 * @summary ViolationStatus
 * @description
 *
 * Result of evaluating a policy against an object. ITU-T Rec.
 * X.749 (08/97)
 * [A.10](https://www.itu.int/rec/T-REC-X.749-199708-I), A.7,
 * §8.2.8.3.
 *
 * - `unknown` (1): status could not be determined.
 * - `no-violation` (2): no violation detected.
 * - `violation-detected` (3): policy evaluated to false.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ViolationStatus  ::=  ENUMERATED {
 *   unknown(1), no-violation(2), violation-detected(3)}
 * ```
 *
 * @enum {number}
 */
export const ViolationStatus = _enum_for_ViolationStatus;

/**
 * @summary ViolationStatus_unknown
 * @description
 *
 * Violation status could not be determined. ITU-T Rec. X.749
 * (08/97)
 * [A.10](https://www.itu.int/rec/T-REC-X.749-199708-I).
 * @constant
 * @type {number}
 */
export const ViolationStatus_unknown: ViolationStatus =
    ViolationStatus.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * Violation status could not be determined. ITU-T Rec. X.749
 * (08/97)
 * [A.10](https://www.itu.int/rec/T-REC-X.749-199708-I).
 * @constant
 * @type {number}
 */
export const unknown: ViolationStatus =
    ViolationStatus.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ViolationStatus_no_violation
 * @description
 *
 * No policy violation detected. ITU-T Rec. X.749 (08/97)
 * [A.10](https://www.itu.int/rec/T-REC-X.749-199708-I), §8.2.8.3.
 * @constant
 * @type {number}
 */
export const ViolationStatus_no_violation: ViolationStatus =
    ViolationStatus.no_violation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_violation
 * @description
 *
 * No policy violation detected. ITU-T Rec. X.749 (08/97)
 * [A.10](https://www.itu.int/rec/T-REC-X.749-199708-I), §8.2.8.3.
 * @constant
 * @type {number}
 */
export const no_violation: ViolationStatus =
    ViolationStatus.no_violation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ViolationStatus_violation_detected
 * @description
 *
 * Policy evaluated to false. ITU-T Rec. X.749 (08/97)
 * [§8.2.8.3](https://www.itu.int/rec/T-REC-X.749-199708-I), A.10.
 * @constant
 * @type {number}
 */
export const ViolationStatus_violation_detected: ViolationStatus =
    ViolationStatus.violation_detected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary violation_detected
 * @description
 *
 * Policy evaluated to false. ITU-T Rec. X.749 (08/97)
 * [§8.2.8.3](https://www.itu.int/rec/T-REC-X.749-199708-I), A.10.
 * @constant
 * @type {number}
 */
export const violation_detected: ViolationStatus =
    ViolationStatus.violation_detected; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ViolationStatus = $._decodeEnumerated;


export const _encode_ViolationStatus = $._encodeEnumerated;


/* eslint-enable */
