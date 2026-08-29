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
 * @summary LeapIndication
 * @description
 *
 * Whether a leap second is about to occur, and whether the
 * last minute of the day is lengthened or shortened. Syntax
 * of `leapSecondIndication` and of the `leapIndication`
 * field of the `leapSecond` action. Named values: `noWarning`
 * (0); `minuteHas61Seconds` (1) last minute has 61 seconds;
 * `minuteHas59Seconds` (2) last minute has 59 seconds;
 * `alarmCondition` (3). The next-leap-second procedure
 * specifies time and insert-or-delete; how the clock applies
 * the step is a local matter. ITU-T Rec. X.743 (06/98)
 * [§8.3.14](https://www.itu.int/rec/T-REC-X.743-199806-I),
 * §7.3.2.5, A.2.14, A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LeapIndication  ::=  ENUMERATED {
 *   noWarning(0), minuteHas61Seconds(1), minuteHas59Seconds(2), alarmCondition(3)
 * }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_LeapIndication {
    noWarning = 0,
    minuteHas61Seconds = 1,
    minuteHas59Seconds = 2,
    alarmCondition = 3,
}

/**
 * @summary LeapIndication
 * @description
 *
 * Whether a leap second is about to occur, and whether the
 * last minute of the day is lengthened or shortened. Syntax
 * of `leapSecondIndication` and of the `leapIndication`
 * field of the `leapSecond` action. Named values: `noWarning`
 * (0); `minuteHas61Seconds` (1) last minute has 61 seconds;
 * `minuteHas59Seconds` (2) last minute has 59 seconds;
 * `alarmCondition` (3). The next-leap-second procedure
 * specifies time and insert-or-delete; how the clock applies
 * the step is a local matter. ITU-T Rec. X.743 (06/98)
 * [§8.3.14](https://www.itu.int/rec/T-REC-X.743-199806-I),
 * §7.3.2.5, A.2.14, A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LeapIndication  ::=  ENUMERATED {
 *   noWarning(0), minuteHas61Seconds(1), minuteHas59Seconds(2), alarmCondition(3)
 * }
 * ```
 *
 * @enum {number}
 */
export type LeapIndication = _enum_for_LeapIndication;

/**
 * @summary LeapIndication
 * @description
 *
 * Whether a leap second is about to occur, and whether the
 * last minute of the day is lengthened or shortened. Syntax
 * of `leapSecondIndication` and of the `leapIndication`
 * field of the `leapSecond` action. Named values: `noWarning`
 * (0); `minuteHas61Seconds` (1) last minute has 61 seconds;
 * `minuteHas59Seconds` (2) last minute has 59 seconds;
 * `alarmCondition` (3). The next-leap-second procedure
 * specifies time and insert-or-delete; how the clock applies
 * the step is a local matter. ITU-T Rec. X.743 (06/98)
 * [§8.3.14](https://www.itu.int/rec/T-REC-X.743-199806-I),
 * §7.3.2.5, A.2.14, A.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LeapIndication  ::=  ENUMERATED {
 *   noWarning(0), minuteHas61Seconds(1), minuteHas59Seconds(2), alarmCondition(3)
 * }
 * ```
 *
 * @enum {number}
 */
export const LeapIndication = _enum_for_LeapIndication;

/**
 * @summary LeapIndication_noWarning
 * @description
 *
 * No leap-second warning. ITU-T Rec. X.743 (06/98)
 * [§A.5](https://www.itu.int/rec/T-REC-X.743-199806-I).
 * @constant
 * @type {number}
 */
export const LeapIndication_noWarning: LeapIndication =
    LeapIndication.noWarning; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noWarning
 * @constant
 * @type {number}
 */
export const noWarning: LeapIndication =
    LeapIndication.noWarning; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LeapIndication_minuteHas61Seconds
 * @description
 *
 * Last minute of the day has 61 seconds (positive leap
 * second). ITU-T Rec. X.743 (06/98)
 * [§A.5](https://www.itu.int/rec/T-REC-X.743-199806-I), §7.3.2.5.
 * @constant
 * @type {number}
 */
export const LeapIndication_minuteHas61Seconds: LeapIndication =
    LeapIndication.minuteHas61Seconds; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary minuteHas61Seconds
 * @constant
 * @type {number}
 */
export const minuteHas61Seconds: LeapIndication =
    LeapIndication.minuteHas61Seconds; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LeapIndication_minuteHas59Seconds
 * @description
 *
 * Last minute of the day has 59 seconds (negative leap
 * second). ITU-T Rec. X.743 (06/98)
 * [§A.5](https://www.itu.int/rec/T-REC-X.743-199806-I), §7.3.2.5.
 * @constant
 * @type {number}
 */
export const LeapIndication_minuteHas59Seconds: LeapIndication =
    LeapIndication.minuteHas59Seconds; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary minuteHas59Seconds
 * @constant
 * @type {number}
 */
export const minuteHas59Seconds: LeapIndication =
    LeapIndication.minuteHas59Seconds; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LeapIndication_alarmCondition
 * @description
 *
 * Alarm condition. The rec does not further define this
 * value. ITU-T Rec. X.743 (06/98)
 * [§A.5](https://www.itu.int/rec/T-REC-X.743-199806-I).
 * @constant
 * @type {number}
 */
export const LeapIndication_alarmCondition: LeapIndication =
    LeapIndication.alarmCondition; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alarmCondition
 * @constant
 * @type {number}
 */
export const alarmCondition: LeapIndication =
    LeapIndication.alarmCondition; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_LeapIndication = $._decodeEnumerated;


export const _encode_LeapIndication = $._encodeEnumerated;


/* eslint-enable */
