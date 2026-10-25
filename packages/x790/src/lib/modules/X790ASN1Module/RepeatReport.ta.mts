/* eslint-disable */
import {
    type ENUMERATED,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_RepeatReport {
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
export
type RepeatReport = _enum_for_RepeatReport | ENUMERATED;

/**
 * @summary RepeatReport_unspecified
 * @constant
 * @type {number}
 */
export
const RepeatReport_unspecified: _enum_for_RepeatReport.unspecified = _enum_for_RepeatReport.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified: _enum_for_RepeatReport.unspecified = RepeatReport_unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RepeatReport_recentInstallation
 * @constant
 * @type {number}
 */
export
const RepeatReport_recentInstallation: _enum_for_RepeatReport.recentInstallation = _enum_for_RepeatReport.recentInstallation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recentInstallation
 * @constant
 * @type {number}
 */
export
const recentInstallation: _enum_for_RepeatReport.recentInstallation = RepeatReport_recentInstallation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RepeatReport_repeat
 * @constant
 * @type {number}
 */
export
const RepeatReport_repeat: _enum_for_RepeatReport.repeat = _enum_for_RepeatReport.repeat; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary repeat
 * @constant
 * @type {number}
 */
export
const repeat: _enum_for_RepeatReport.repeat = RepeatReport_repeat; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RepeatReport_bothInstallationAndRepeat
 * @constant
 * @type {number}
 */
export
const RepeatReport_bothInstallationAndRepeat: _enum_for_RepeatReport.bothInstallationAndRepeat = _enum_for_RepeatReport.bothInstallationAndRepeat; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bothInstallationAndRepeat
 * @constant
 * @type {number}
 */
export
const bothInstallationAndRepeat: _enum_for_RepeatReport.bothInstallationAndRepeat = RepeatReport_bothInstallationAndRepeat; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RepeatReport_chronic
 * @constant
 * @type {number}
 */
export
const RepeatReport_chronic: _enum_for_RepeatReport.chronic = _enum_for_RepeatReport.chronic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary chronic
 * @constant
 * @type {number}
 */
export
const chronic: _enum_for_RepeatReport.chronic = RepeatReport_chronic; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RepeatReport_bothInstallationAndChronic
 * @constant
 * @type {number}
 */
export
const RepeatReport_bothInstallationAndChronic: _enum_for_RepeatReport.bothInstallationAndChronic = _enum_for_RepeatReport.bothInstallationAndChronic; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bothInstallationAndChronic
 * @constant
 * @type {number}
 */
export
const bothInstallationAndChronic: _enum_for_RepeatReport.bothInstallationAndChronic = RepeatReport_bothInstallationAndChronic; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RepeatReport: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_RepeatReport: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
