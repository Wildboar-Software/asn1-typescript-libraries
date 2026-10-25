/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * @summary ReferenceClockType
 * @description
 *
 * Type of reference clock or external source represented by
 * a `referenceClock` object (GPS, radio such as WWV, atomic
 * oscillators, etc.). Syntax of `referenceClockType` and of
 * the `refClockID` alternative of
 * `synchronizationSourceAddress`. Named values (A.5):
 * `unspecifiedOrUnknown` (0), `calibratedAtomicClock` (1),
 * `radioVLForLF` (2), `radioHF` (3), `radioUHF` (4),
 * `localNet` (5), `synch` (6), `wallclock` (7),
 * `telephoneModem` (8), `gps` (9), `loranC` (10), `other`
 * (11). ITU-T Rec. X.743 (06/98)
 * [§8.3.17](https://www.itu.int/rec/T-REC-X.743-199806-I), §7.2.4.2, A.2.17.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReferenceClockType  ::=  INTEGER {
 *   unspecifiedOrUnknown(0), calibratedAtomicClock(1), radioVLForLF(2),
 *   radioHF(3), radioUHF(4), localNet(5), synch(6), wallclock(7),
 *   telephoneModem(8), gps(9), loranC(10), other(11)}
 * ```
 */
export type ReferenceClockType = INTEGER;

/**
 * @summary ReferenceClockType_unspecifiedOrUnknown
 * @constant
 * @type {number}
 */
export const ReferenceClockType_unspecifiedOrUnknown = 0 satisfies ReferenceClockType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_unspecifiedOrUnknown
 * @constant
 * @type {number}
 */
export const unspecifiedOrUnknown = ReferenceClockType_unspecifiedOrUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_calibratedAtomicClock
 * @constant
 * @type {number}
 */
export const ReferenceClockType_calibratedAtomicClock = 1 satisfies ReferenceClockType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_calibratedAtomicClock
 * @constant
 * @type {number}
 */
export const calibratedAtomicClock = ReferenceClockType_calibratedAtomicClock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_radioVLForLF
 * @constant
 * @type {number}
 */
export const ReferenceClockType_radioVLForLF = 2 satisfies ReferenceClockType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_radioVLForLF
 * @constant
 * @type {number}
 */
export const radioVLForLF = ReferenceClockType_radioVLForLF; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_radioHF
 * @constant
 * @type {number}
 */
export const ReferenceClockType_radioHF = 3 satisfies ReferenceClockType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_radioHF
 * @constant
 * @type {number}
 */
export const radioHF = ReferenceClockType_radioHF; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_radioUHF
 * @constant
 * @type {number}
 */
export const ReferenceClockType_radioUHF = 4 satisfies ReferenceClockType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_radioUHF
 * @constant
 * @type {number}
 */
export const radioUHF = ReferenceClockType_radioUHF; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_localNet
 * @constant
 * @type {number}
 */
export const ReferenceClockType_localNet = 5 satisfies ReferenceClockType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_localNet
 * @constant
 * @type {number}
 */
export const localNet = ReferenceClockType_localNet; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_synch
 * @constant
 * @type {number}
 */
export const ReferenceClockType_synch = 6 satisfies ReferenceClockType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_synch
 * @constant
 * @type {number}
 */
export const synch = ReferenceClockType_synch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_wallclock
 * @constant
 * @type {number}
 */
export const ReferenceClockType_wallclock = 7 satisfies ReferenceClockType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_wallclock
 * @constant
 * @type {number}
 */
export const wallclock = ReferenceClockType_wallclock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_telephoneModem
 * @constant
 * @type {number}
 */
export const ReferenceClockType_telephoneModem = 8 satisfies ReferenceClockType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_telephoneModem
 * @constant
 * @type {number}
 */
export const telephoneModem = ReferenceClockType_telephoneModem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_gps
 * @constant
 * @type {number}
 */
export const ReferenceClockType_gps = 9 satisfies ReferenceClockType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_gps
 * @constant
 * @type {number}
 */
export const gps = ReferenceClockType_gps; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_loranC
 * @constant
 * @type {number}
 */
export const ReferenceClockType_loranC = 10 satisfies ReferenceClockType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_loranC
 * @constant
 * @type {number}
 */
export const loranC = ReferenceClockType_loranC; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_other
 * @constant
 * @type {number}
 */
export const ReferenceClockType_other = 11 satisfies ReferenceClockType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_other
 * @constant
 * @type {number}
 */
export const other = ReferenceClockType_other; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ReferenceClockType = $._decodeInteger;


export const _encode_ReferenceClockType = $._encodeInteger;


/* eslint-enable */
