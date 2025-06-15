/* eslint-disable */
import {
    ENUMERATED,
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

/* START_OF_SYMBOL_DEFINITION _enum_for_RepeatReport */
export enum _enum_for_RepeatReport {
    unspecified = 0,
    recentInstallation = 1,
    repeat = 2,
    bothInstallationAndRepeat = 3,
    chronic = 4,
    bothInstallationAndChronic = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_RepeatReport */

/* START_OF_SYMBOL_DEFINITION RepeatReport */
/**
 * @summary RepeatReport
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepeatReport  ::=  ENUMERATED {
 *   unspecified(0), recentInstallation(1), repeat(2),
 *   bothInstallationAndRepeat(3), chronic(4), bothInstallationAndChronic(5),
 *   ...
 *   }
 * ```@enum {number}
 */
export type RepeatReport = _enum_for_RepeatReport | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION RepeatReport */

/* START_OF_SYMBOL_DEFINITION RepeatReport_unspecified */
/**
 * @summary RepeatReport_unspecified
 * @constant
 * @type {number}
 */
export const RepeatReport_unspecified: RepeatReport = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RepeatReport_unspecified */

/* START_OF_SYMBOL_DEFINITION unspecified */
/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export const unspecified: RepeatReport = RepeatReport_unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unspecified */

/* START_OF_SYMBOL_DEFINITION RepeatReport_recentInstallation */
/**
 * @summary RepeatReport_recentInstallation
 * @constant
 * @type {number}
 */
export const RepeatReport_recentInstallation: RepeatReport = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RepeatReport_recentInstallation */

/* START_OF_SYMBOL_DEFINITION recentInstallation */
/**
 * @summary recentInstallation
 * @constant
 * @type {number}
 */
export const recentInstallation: RepeatReport = RepeatReport_recentInstallation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION recentInstallation */

/* START_OF_SYMBOL_DEFINITION RepeatReport_repeat */
/**
 * @summary RepeatReport_repeat
 * @constant
 * @type {number}
 */
export const RepeatReport_repeat: RepeatReport = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RepeatReport_repeat */

/* START_OF_SYMBOL_DEFINITION repeat */
/**
 * @summary repeat
 * @constant
 * @type {number}
 */
export const repeat: RepeatReport = RepeatReport_repeat; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION repeat */

/* START_OF_SYMBOL_DEFINITION RepeatReport_bothInstallationAndRepeat */
/**
 * @summary RepeatReport_bothInstallationAndRepeat
 * @constant
 * @type {number}
 */
export const RepeatReport_bothInstallationAndRepeat: RepeatReport = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RepeatReport_bothInstallationAndRepeat */

/* START_OF_SYMBOL_DEFINITION bothInstallationAndRepeat */
/**
 * @summary bothInstallationAndRepeat
 * @constant
 * @type {number}
 */
export const bothInstallationAndRepeat: RepeatReport = RepeatReport_bothInstallationAndRepeat; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bothInstallationAndRepeat */

/* START_OF_SYMBOL_DEFINITION RepeatReport_chronic */
/**
 * @summary RepeatReport_chronic
 * @constant
 * @type {number}
 */
export const RepeatReport_chronic: RepeatReport = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RepeatReport_chronic */

/* START_OF_SYMBOL_DEFINITION chronic */
/**
 * @summary chronic
 * @constant
 * @type {number}
 */
export const chronic: RepeatReport = RepeatReport_chronic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION chronic */

/* START_OF_SYMBOL_DEFINITION RepeatReport_bothInstallationAndChronic */
/**
 * @summary RepeatReport_bothInstallationAndChronic
 * @constant
 * @type {number}
 */
export const RepeatReport_bothInstallationAndChronic: RepeatReport = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION RepeatReport_bothInstallationAndChronic */

/* START_OF_SYMBOL_DEFINITION bothInstallationAndChronic */
/**
 * @summary bothInstallationAndChronic
 * @constant
 * @type {number}
 */
export const bothInstallationAndChronic: RepeatReport = RepeatReport_bothInstallationAndChronic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bothInstallationAndChronic */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RepeatReport */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RepeatReport */

/* START_OF_SYMBOL_DEFINITION _decode_RepeatReport */
export const _decode_RepeatReport = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_RepeatReport */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RepeatReport */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RepeatReport */

/* START_OF_SYMBOL_DEFINITION _encode_RepeatReport */
export const _encode_RepeatReport = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_RepeatReport */

/* eslint-enable */
