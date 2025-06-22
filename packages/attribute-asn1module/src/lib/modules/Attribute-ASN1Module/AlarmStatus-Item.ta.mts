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
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AlarmStatus_Item
 * @description
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
 * @constant
 * @type {number}
 */
export
const AlarmStatus_Item_underRepair: AlarmStatus_Item = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_underRepair
 * @constant
 * @type {number}
 */
export
const underRepair: AlarmStatus_Item = AlarmStatus_Item_underRepair; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_critical
 * @constant
 * @type {number}
 */
export
const AlarmStatus_Item_critical: AlarmStatus_Item = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_critical
 * @constant
 * @type {number}
 */
export
const critical: AlarmStatus_Item = AlarmStatus_Item_critical; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_major
 * @constant
 * @type {number}
 */
export
const AlarmStatus_Item_major: AlarmStatus_Item = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_major
 * @constant
 * @type {number}
 */
export
const major: AlarmStatus_Item = AlarmStatus_Item_major; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_minor
 * @constant
 * @type {number}
 */
export
const AlarmStatus_Item_minor: AlarmStatus_Item = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_minor
 * @constant
 * @type {number}
 */
export
const minor: AlarmStatus_Item = AlarmStatus_Item_minor; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_alarmOutstanding
 * @constant
 * @type {number}
 */
export
const AlarmStatus_Item_alarmOutstanding: AlarmStatus_Item = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmStatus_Item_alarmOutstanding
 * @constant
 * @type {number}
 */
export
const alarmOutstanding: AlarmStatus_Item = AlarmStatus_Item_alarmOutstanding; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AlarmStatus_Item = $._decodeInteger;


export const _encode_AlarmStatus_Item = $._encodeInteger;


/* eslint-enable */
