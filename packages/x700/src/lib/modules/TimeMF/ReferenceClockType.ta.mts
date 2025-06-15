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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION ReferenceClockType */
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
/* END_OF_SYMBOL_DEFINITION ReferenceClockType */

/* START_OF_SYMBOL_DEFINITION ReferenceClockType_unspecifiedOrUnknown */
/**
 * @summary ReferenceClockType_unspecifiedOrUnknown
 * @constant
 * @type {number}
 */
export const ReferenceClockType_unspecifiedOrUnknown: ReferenceClockType = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceClockType_unspecifiedOrUnknown */

/* START_OF_SYMBOL_DEFINITION unspecifiedOrUnknown */
/**
 * @summary ReferenceClockType_unspecifiedOrUnknown
 * @constant
 * @type {number}
 */
export const unspecifiedOrUnknown: ReferenceClockType = ReferenceClockType_unspecifiedOrUnknown; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unspecifiedOrUnknown */

/* START_OF_SYMBOL_DEFINITION ReferenceClockType_calibratedAtomicClock */
/**
 * @summary ReferenceClockType_calibratedAtomicClock
 * @constant
 * @type {number}
 */
export const ReferenceClockType_calibratedAtomicClock: ReferenceClockType = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceClockType_calibratedAtomicClock */

/* START_OF_SYMBOL_DEFINITION calibratedAtomicClock */
/**
 * @summary ReferenceClockType_calibratedAtomicClock
 * @constant
 * @type {number}
 */
export const calibratedAtomicClock: ReferenceClockType = ReferenceClockType_calibratedAtomicClock; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION calibratedAtomicClock */

/* START_OF_SYMBOL_DEFINITION ReferenceClockType_radioVLForLF */
/**
 * @summary ReferenceClockType_radioVLForLF
 * @constant
 * @type {number}
 */
export const ReferenceClockType_radioVLForLF: ReferenceClockType = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceClockType_radioVLForLF */

/* START_OF_SYMBOL_DEFINITION radioVLForLF */
/**
 * @summary ReferenceClockType_radioVLForLF
 * @constant
 * @type {number}
 */
export const radioVLForLF: ReferenceClockType = ReferenceClockType_radioVLForLF; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION radioVLForLF */

/* START_OF_SYMBOL_DEFINITION ReferenceClockType_radioHF */
/**
 * @summary ReferenceClockType_radioHF
 * @constant
 * @type {number}
 */
export const ReferenceClockType_radioHF: ReferenceClockType = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceClockType_radioHF */

/* START_OF_SYMBOL_DEFINITION radioHF */
/**
 * @summary ReferenceClockType_radioHF
 * @constant
 * @type {number}
 */
export const radioHF: ReferenceClockType = ReferenceClockType_radioHF; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION radioHF */

/* START_OF_SYMBOL_DEFINITION ReferenceClockType_radioUHF */
/**
 * @summary ReferenceClockType_radioUHF
 * @constant
 * @type {number}
 */
export const ReferenceClockType_radioUHF: ReferenceClockType = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceClockType_radioUHF */

/* START_OF_SYMBOL_DEFINITION radioUHF */
/**
 * @summary ReferenceClockType_radioUHF
 * @constant
 * @type {number}
 */
export const radioUHF: ReferenceClockType = ReferenceClockType_radioUHF; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION radioUHF */

/* START_OF_SYMBOL_DEFINITION ReferenceClockType_localNet */
/**
 * @summary ReferenceClockType_localNet
 * @constant
 * @type {number}
 */
export const ReferenceClockType_localNet: ReferenceClockType = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceClockType_localNet */

/* START_OF_SYMBOL_DEFINITION localNet */
/**
 * @summary ReferenceClockType_localNet
 * @constant
 * @type {number}
 */
export const localNet: ReferenceClockType = ReferenceClockType_localNet; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION localNet */

/* START_OF_SYMBOL_DEFINITION ReferenceClockType_synch */
/**
 * @summary ReferenceClockType_synch
 * @constant
 * @type {number}
 */
export const ReferenceClockType_synch: ReferenceClockType = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceClockType_synch */

/* START_OF_SYMBOL_DEFINITION synch */
/**
 * @summary ReferenceClockType_synch
 * @constant
 * @type {number}
 */
export const synch: ReferenceClockType = ReferenceClockType_synch; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION synch */

/* START_OF_SYMBOL_DEFINITION ReferenceClockType_wallclock */
/**
 * @summary ReferenceClockType_wallclock
 * @constant
 * @type {number}
 */
export const ReferenceClockType_wallclock: ReferenceClockType = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceClockType_wallclock */

/* START_OF_SYMBOL_DEFINITION wallclock */
/**
 * @summary ReferenceClockType_wallclock
 * @constant
 * @type {number}
 */
export const wallclock: ReferenceClockType = ReferenceClockType_wallclock; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION wallclock */

/* START_OF_SYMBOL_DEFINITION ReferenceClockType_telephoneModem */
/**
 * @summary ReferenceClockType_telephoneModem
 * @constant
 * @type {number}
 */
export const ReferenceClockType_telephoneModem: ReferenceClockType = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceClockType_telephoneModem */

/* START_OF_SYMBOL_DEFINITION telephoneModem */
/**
 * @summary ReferenceClockType_telephoneModem
 * @constant
 * @type {number}
 */
export const telephoneModem: ReferenceClockType = ReferenceClockType_telephoneModem; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION telephoneModem */

/* START_OF_SYMBOL_DEFINITION ReferenceClockType_gps */
/**
 * @summary ReferenceClockType_gps
 * @constant
 * @type {number}
 */
export const ReferenceClockType_gps: ReferenceClockType = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceClockType_gps */

/* START_OF_SYMBOL_DEFINITION gps */
/**
 * @summary ReferenceClockType_gps
 * @constant
 * @type {number}
 */
export const gps: ReferenceClockType = ReferenceClockType_gps; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION gps */

/* START_OF_SYMBOL_DEFINITION ReferenceClockType_loranC */
/**
 * @summary ReferenceClockType_loranC
 * @constant
 * @type {number}
 */
export const ReferenceClockType_loranC: ReferenceClockType = 10; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceClockType_loranC */

/* START_OF_SYMBOL_DEFINITION loranC */
/**
 * @summary ReferenceClockType_loranC
 * @constant
 * @type {number}
 */
export const loranC: ReferenceClockType = ReferenceClockType_loranC; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION loranC */

/* START_OF_SYMBOL_DEFINITION ReferenceClockType_other */
/**
 * @summary ReferenceClockType_other
 * @constant
 * @type {number}
 */
export const ReferenceClockType_other: ReferenceClockType = 11; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ReferenceClockType_other */

/* START_OF_SYMBOL_DEFINITION other */
/**
 * @summary ReferenceClockType_other
 * @constant
 * @type {number}
 */
export const other: ReferenceClockType = ReferenceClockType_other; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION other */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReferenceClockType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReferenceClockType */

/* START_OF_SYMBOL_DEFINITION _decode_ReferenceClockType */
export const _decode_ReferenceClockType = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_ReferenceClockType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReferenceClockType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReferenceClockType */

/* START_OF_SYMBOL_DEFINITION _encode_ReferenceClockType */
export const _encode_ReferenceClockType = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_ReferenceClockType */

/* eslint-enable */
