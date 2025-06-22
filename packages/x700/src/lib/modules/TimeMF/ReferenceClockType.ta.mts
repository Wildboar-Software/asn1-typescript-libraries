/* eslint-disable */
import {
    INTEGER,
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
 * @summary ReferenceClockType
 * @description
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
export const ReferenceClockType_unspecifiedOrUnknown: ReferenceClockType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_unspecifiedOrUnknown
 * @constant
 * @type {number}
 */
export const unspecifiedOrUnknown: ReferenceClockType = ReferenceClockType_unspecifiedOrUnknown; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_calibratedAtomicClock
 * @constant
 * @type {number}
 */
export const ReferenceClockType_calibratedAtomicClock: ReferenceClockType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_calibratedAtomicClock
 * @constant
 * @type {number}
 */
export const calibratedAtomicClock: ReferenceClockType = ReferenceClockType_calibratedAtomicClock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_radioVLForLF
 * @constant
 * @type {number}
 */
export const ReferenceClockType_radioVLForLF: ReferenceClockType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_radioVLForLF
 * @constant
 * @type {number}
 */
export const radioVLForLF: ReferenceClockType = ReferenceClockType_radioVLForLF; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_radioHF
 * @constant
 * @type {number}
 */
export const ReferenceClockType_radioHF: ReferenceClockType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_radioHF
 * @constant
 * @type {number}
 */
export const radioHF: ReferenceClockType = ReferenceClockType_radioHF; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_radioUHF
 * @constant
 * @type {number}
 */
export const ReferenceClockType_radioUHF: ReferenceClockType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_radioUHF
 * @constant
 * @type {number}
 */
export const radioUHF: ReferenceClockType = ReferenceClockType_radioUHF; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_localNet
 * @constant
 * @type {number}
 */
export const ReferenceClockType_localNet: ReferenceClockType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_localNet
 * @constant
 * @type {number}
 */
export const localNet: ReferenceClockType = ReferenceClockType_localNet; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_synch
 * @constant
 * @type {number}
 */
export const ReferenceClockType_synch: ReferenceClockType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_synch
 * @constant
 * @type {number}
 */
export const synch: ReferenceClockType = ReferenceClockType_synch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_wallclock
 * @constant
 * @type {number}
 */
export const ReferenceClockType_wallclock: ReferenceClockType = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_wallclock
 * @constant
 * @type {number}
 */
export const wallclock: ReferenceClockType = ReferenceClockType_wallclock; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_telephoneModem
 * @constant
 * @type {number}
 */
export const ReferenceClockType_telephoneModem: ReferenceClockType = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_telephoneModem
 * @constant
 * @type {number}
 */
export const telephoneModem: ReferenceClockType = ReferenceClockType_telephoneModem; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_gps
 * @constant
 * @type {number}
 */
export const ReferenceClockType_gps: ReferenceClockType = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_gps
 * @constant
 * @type {number}
 */
export const gps: ReferenceClockType = ReferenceClockType_gps; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_loranC
 * @constant
 * @type {number}
 */
export const ReferenceClockType_loranC: ReferenceClockType = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_loranC
 * @constant
 * @type {number}
 */
export const loranC: ReferenceClockType = ReferenceClockType_loranC; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_other
 * @constant
 * @type {number}
 */
export const ReferenceClockType_other: ReferenceClockType = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ReferenceClockType_other
 * @constant
 * @type {number}
 */
export const other: ReferenceClockType = ReferenceClockType_other; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ReferenceClockType = $._decodeInteger;


export const _encode_ReferenceClockType = $._encodeInteger;


/* eslint-enable */
