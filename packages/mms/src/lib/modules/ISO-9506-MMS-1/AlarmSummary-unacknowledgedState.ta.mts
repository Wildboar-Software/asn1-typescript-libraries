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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AlarmSummary_unacknowledgedState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlarmSummary-unacknowledgedState ::= INTEGER {
 *     none (0),
 *     active (1),
 *     idle (2),
 *     both (3)
 * } (0..3)
 * ```
 */
export
type AlarmSummary_unacknowledgedState = INTEGER;

/**
 * @summary AlarmSummary_unacknowledgedState_none
 * @constant
 * @type {number}
 */
export
const AlarmSummary_unacknowledgedState_none: AlarmSummary_unacknowledgedState = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_none
 * @constant
 * @type {number}
 */
export
const none: AlarmSummary_unacknowledgedState = AlarmSummary_unacknowledgedState_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_active
 * @constant
 * @type {number}
 */
export
const AlarmSummary_unacknowledgedState_active: AlarmSummary_unacknowledgedState = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_active
 * @constant
 * @type {number}
 */
export
const active: AlarmSummary_unacknowledgedState = AlarmSummary_unacknowledgedState_active; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_idle
 * @constant
 * @type {number}
 */
export
const AlarmSummary_unacknowledgedState_idle: AlarmSummary_unacknowledgedState = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_idle
 * @constant
 * @type {number}
 */
export
const idle: AlarmSummary_unacknowledgedState = AlarmSummary_unacknowledgedState_idle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_both
 * @constant
 * @type {number}
 */
export
const AlarmSummary_unacknowledgedState_both: AlarmSummary_unacknowledgedState = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AlarmSummary_unacknowledgedState_both
 * @constant
 * @type {number}
 */
export
const both: AlarmSummary_unacknowledgedState = AlarmSummary_unacknowledgedState_both; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AlarmSummary_unacknowledgedState = $._decodeInteger;
export const _encode_AlarmSummary_unacknowledgedState = $._encodeInteger;


/* eslint-enable */
