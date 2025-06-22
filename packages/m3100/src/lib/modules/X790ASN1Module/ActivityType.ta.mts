/* eslint-disable */
import {
    BIT_STRING,
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
 * @summary ActivityType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivityType  ::=  BIT STRING {
 *   after-hours-repair(0), standby(1), after-hours-standby(2), test(3),
 *   manager-initiated-test(4), dispatch(5), no-access(6), delayed-maintenance(7),
 *   release(8)}
 * ```
 */
export type ActivityType = BIT_STRING;


/**
 * @summary ActivityType_after_hours_repair
 * @constant
 */
export const ActivityType_after_hours_repair: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary after_hours_repair
 * @constant
 */
export const after_hours_repair: number = ActivityType_after_hours_repair; /* SHORT_NAMED_BIT */


/**
 * @summary ActivityType_standby
 * @constant
 */
export const ActivityType_standby: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary standby
 * @constant
 */
export const standby: number = ActivityType_standby; /* SHORT_NAMED_BIT */


/**
 * @summary ActivityType_after_hours_standby
 * @constant
 */
export const ActivityType_after_hours_standby: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary after_hours_standby
 * @constant
 */
export const after_hours_standby: number = ActivityType_after_hours_standby; /* SHORT_NAMED_BIT */


/**
 * @summary ActivityType_test
 * @constant
 */
export const ActivityType_test: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary test
 * @constant
 */
export const test: number = ActivityType_test; /* SHORT_NAMED_BIT */


/**
 * @summary ActivityType_manager_initiated_test
 * @constant
 */
export const ActivityType_manager_initiated_test: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary manager_initiated_test
 * @constant
 */
export const manager_initiated_test: number = ActivityType_manager_initiated_test; /* SHORT_NAMED_BIT */


/**
 * @summary ActivityType_dispatch
 * @constant
 */
export const ActivityType_dispatch: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary dispatch
 * @constant
 */
export const dispatch: number = ActivityType_dispatch; /* SHORT_NAMED_BIT */


/**
 * @summary ActivityType_no_access
 * @constant
 */
export const ActivityType_no_access: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary no_access
 * @constant
 */
export const no_access: number = ActivityType_no_access; /* SHORT_NAMED_BIT */


/**
 * @summary ActivityType_delayed_maintenance
 * @constant
 */
export const ActivityType_delayed_maintenance: number = 7; /* LONG_NAMED_BIT */


/**
 * @summary delayed_maintenance
 * @constant
 */
export const delayed_maintenance: number = ActivityType_delayed_maintenance; /* SHORT_NAMED_BIT */


/**
 * @summary ActivityType_release
 * @constant
 */
export const ActivityType_release: number = 8; /* LONG_NAMED_BIT */


/**
 * @summary release
 * @constant
 */
export const release: number = ActivityType_release; /* SHORT_NAMED_BIT */




export const _decode_ActivityType = $._decodeBitString;




export const _encode_ActivityType = $._encodeBitString;


/* eslint-enable */
