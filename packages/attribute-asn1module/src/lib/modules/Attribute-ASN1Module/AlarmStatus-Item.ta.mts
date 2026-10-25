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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AlarmStatus_Item
 * @description
 * 
 * One member of `AlarmStatus`. ITU-T Rec. X.721 (02/92) §14.2; ITU-T Rec. X.731
 * | ISO/IEC 10164-2 §7.2.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlarmStatus-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AlarmStatus_Item = INTEGER;

/**
 * @summary AlarmStatus_Item_underRepair
 * @description
 *
 * Resource is being repaired. ITU-T Rec. X.721 (02/92) §14.2; ITU-T Rec. X.731
 * | ISO/IEC 10164-2 §7.2.5.
 *
 * @constant
 * @type {number}
 */
export
const AlarmStatus_Item_underRepair = 0 satisfies AlarmStatus_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_underRepair
 * @description
 *
 * Resource is being repaired. ITU-T Rec. X.721 (02/92) §14.2; ITU-T Rec. X.731
 * | ISO/IEC 10164-2 §7.2.5.
 *
 * @constant
 * @type {number}
 */
export
const underRepair = AlarmStatus_Item_underRepair satisfies AlarmStatus_Item; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_critical
 * @description
 *
 * One or more critical alarms outstanding. ITU-T Rec. X.721 (02/92) §14.2;
 * ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.5.
 *
 * @constant
 * @type {number}
 */
export
const AlarmStatus_Item_critical = 1 satisfies AlarmStatus_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_critical
 * @description
 *
 * One or more critical alarms outstanding. ITU-T Rec. X.721 (02/92) §14.2;
 * ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.5.
 *
 * @constant
 * @type {number}
 */
export
const critical = AlarmStatus_Item_critical satisfies AlarmStatus_Item; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_major
 * @description
 *
 * One or more major (and no critical) alarms outstanding. ITU-T Rec. X.721
 * (02/92) §14.2; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.5.
 *
 * @constant
 * @type {number}
 */
export
const AlarmStatus_Item_major = 2 satisfies AlarmStatus_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_major
 * @description
 *
 * One or more major (and no critical) alarms outstanding. ITU-T Rec. X.721
 * (02/92) §14.2; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.5.
 *
 * @constant
 * @type {number}
 */
export
const major = AlarmStatus_Item_major satisfies AlarmStatus_Item; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_minor
 * @description
 *
 * One or more minor (and no major/critical) alarms outstanding. ITU-T Rec.
 * X.721 (02/92) §14.2; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.5.
 *
 * @constant
 * @type {number}
 */
export
const AlarmStatus_Item_minor = 3 satisfies AlarmStatus_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_minor
 * @description
 *
 * One or more minor (and no major/critical) alarms outstanding. ITU-T Rec.
 * X.721 (02/92) §14.2; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.5.
 *
 * @constant
 * @type {number}
 */
export
const minor = AlarmStatus_Item_minor satisfies AlarmStatus_Item; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_alarmOutstanding
 * @description
 *
 * One or more alarms have been raised against the resource. ITU-T Rec. X.721
 * (02/92) §14.2; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.5.
 *
 * @constant
 * @type {number}
 */
export
const AlarmStatus_Item_alarmOutstanding = 4 satisfies AlarmStatus_Item; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_alarmOutstanding
 * @description
 *
 * One or more alarms have been raised against the resource. ITU-T Rec. X.721
 * (02/92) §14.2; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.5.
 *
 * @constant
 * @type {number}
 */
export
const alarmOutstanding = AlarmStatus_Item_alarmOutstanding satisfies AlarmStatus_Item; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AlarmStatus_Item = $._decodeInteger;


export const _encode_AlarmStatus_Item = $._encodeInteger;


/* eslint-enable */
