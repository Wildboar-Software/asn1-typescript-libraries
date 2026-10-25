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
const AlarmStatus_Item_underRepair: 0 = 0 satisfies AlarmStatus_Item; /* LONG_NAMED_INTEGER_VALUE */

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
const underRepair: 0 = AlarmStatus_Item_underRepair; /* SHORT_NAMED_INTEGER_VALUE */

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
const AlarmStatus_Item_critical: 1 = 1 satisfies AlarmStatus_Item; /* LONG_NAMED_INTEGER_VALUE */

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
const critical: 1 = AlarmStatus_Item_critical; /* SHORT_NAMED_INTEGER_VALUE */

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
const AlarmStatus_Item_major: 2 = 2 satisfies AlarmStatus_Item; /* LONG_NAMED_INTEGER_VALUE */

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
const major: 2 = AlarmStatus_Item_major; /* SHORT_NAMED_INTEGER_VALUE */

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
const AlarmStatus_Item_minor: 3 = 3 satisfies AlarmStatus_Item; /* LONG_NAMED_INTEGER_VALUE */

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
const minor: 3 = AlarmStatus_Item_minor; /* SHORT_NAMED_INTEGER_VALUE */

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
const AlarmStatus_Item_alarmOutstanding: 4 = 4 satisfies AlarmStatus_Item; /* LONG_NAMED_INTEGER_VALUE */

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
const alarmOutstanding: 4 = AlarmStatus_Item_alarmOutstanding; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AlarmStatus_Item: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_AlarmStatus_Item: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
