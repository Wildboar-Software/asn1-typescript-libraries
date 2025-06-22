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
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_RepeatReport {
    unspecified = 0,
    recentInstallation = 1,
    repeat = 2,
    bothInstallationAndRepeat = 3,
    chronic = 4,
    bothInstallationAndChronic = 5,
}


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
 * ```
 *
 * @enum {number}
 */
export type RepeatReport = _enum_for_RepeatReport | ENUMERATED;


/**
 * @summary RepeatReport_unspecified
 * @constant
 * @type {number}
 */
export const RepeatReport_unspecified: RepeatReport = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export const unspecified: RepeatReport = RepeatReport_unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary RepeatReport_recentInstallation
 * @constant
 * @type {number}
 */
export const RepeatReport_recentInstallation: RepeatReport = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary recentInstallation
 * @constant
 * @type {number}
 */
export const recentInstallation: RepeatReport = RepeatReport_recentInstallation; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary RepeatReport_repeat
 * @constant
 * @type {number}
 */
export const RepeatReport_repeat: RepeatReport = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary repeat
 * @constant
 * @type {number}
 */
export const repeat: RepeatReport = RepeatReport_repeat; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary RepeatReport_bothInstallationAndRepeat
 * @constant
 * @type {number}
 */
export const RepeatReport_bothInstallationAndRepeat: RepeatReport = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary bothInstallationAndRepeat
 * @constant
 * @type {number}
 */
export const bothInstallationAndRepeat: RepeatReport = RepeatReport_bothInstallationAndRepeat; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary RepeatReport_chronic
 * @constant
 * @type {number}
 */
export const RepeatReport_chronic: RepeatReport = 4; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary chronic
 * @constant
 * @type {number}
 */
export const chronic: RepeatReport = RepeatReport_chronic; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary RepeatReport_bothInstallationAndChronic
 * @constant
 * @type {number}
 */
export const RepeatReport_bothInstallationAndChronic: RepeatReport = 5; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary bothInstallationAndChronic
 * @constant
 * @type {number}
 */
export const bothInstallationAndChronic: RepeatReport = RepeatReport_bothInstallationAndChronic; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_RepeatReport = $._decodeEnumerated;




export const _encode_RepeatReport = $._encodeEnumerated;


/* eslint-enable */
