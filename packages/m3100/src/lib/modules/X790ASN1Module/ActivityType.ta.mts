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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION ActivityType */
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
/* END_OF_SYMBOL_DEFINITION ActivityType */

/* START_OF_SYMBOL_DEFINITION ActivityType_after_hours_repair */
/**
 * @summary ActivityType_after_hours_repair
 * @constant
 */
export const ActivityType_after_hours_repair: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_after_hours_repair */

/* START_OF_SYMBOL_DEFINITION after_hours_repair */
/**
 * @summary after_hours_repair
 * @constant
 */
export const after_hours_repair: number = ActivityType_after_hours_repair; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION after_hours_repair */

/* START_OF_SYMBOL_DEFINITION ActivityType_standby */
/**
 * @summary ActivityType_standby
 * @constant
 */
export const ActivityType_standby: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_standby */

/* START_OF_SYMBOL_DEFINITION standby */
/**
 * @summary standby
 * @constant
 */
export const standby: number = ActivityType_standby; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION standby */

/* START_OF_SYMBOL_DEFINITION ActivityType_after_hours_standby */
/**
 * @summary ActivityType_after_hours_standby
 * @constant
 */
export const ActivityType_after_hours_standby: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_after_hours_standby */

/* START_OF_SYMBOL_DEFINITION after_hours_standby */
/**
 * @summary after_hours_standby
 * @constant
 */
export const after_hours_standby: number = ActivityType_after_hours_standby; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION after_hours_standby */

/* START_OF_SYMBOL_DEFINITION ActivityType_test */
/**
 * @summary ActivityType_test
 * @constant
 */
export const ActivityType_test: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_test */

/* START_OF_SYMBOL_DEFINITION test */
/**
 * @summary test
 * @constant
 */
export const test: number = ActivityType_test; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION test */

/* START_OF_SYMBOL_DEFINITION ActivityType_manager_initiated_test */
/**
 * @summary ActivityType_manager_initiated_test
 * @constant
 */
export const ActivityType_manager_initiated_test: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_manager_initiated_test */

/* START_OF_SYMBOL_DEFINITION manager_initiated_test */
/**
 * @summary manager_initiated_test
 * @constant
 */
export const manager_initiated_test: number = ActivityType_manager_initiated_test; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION manager_initiated_test */

/* START_OF_SYMBOL_DEFINITION ActivityType_dispatch */
/**
 * @summary ActivityType_dispatch
 * @constant
 */
export const ActivityType_dispatch: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_dispatch */

/* START_OF_SYMBOL_DEFINITION dispatch */
/**
 * @summary dispatch
 * @constant
 */
export const dispatch: number = ActivityType_dispatch; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION dispatch */

/* START_OF_SYMBOL_DEFINITION ActivityType_no_access */
/**
 * @summary ActivityType_no_access
 * @constant
 */
export const ActivityType_no_access: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_no_access */

/* START_OF_SYMBOL_DEFINITION no_access */
/**
 * @summary no_access
 * @constant
 */
export const no_access: number = ActivityType_no_access; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION no_access */

/* START_OF_SYMBOL_DEFINITION ActivityType_delayed_maintenance */
/**
 * @summary ActivityType_delayed_maintenance
 * @constant
 */
export const ActivityType_delayed_maintenance: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_delayed_maintenance */

/* START_OF_SYMBOL_DEFINITION delayed_maintenance */
/**
 * @summary delayed_maintenance
 * @constant
 */
export const delayed_maintenance: number = ActivityType_delayed_maintenance; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION delayed_maintenance */

/* START_OF_SYMBOL_DEFINITION ActivityType_release */
/**
 * @summary ActivityType_release
 * @constant
 */
export const ActivityType_release: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION ActivityType_release */

/* START_OF_SYMBOL_DEFINITION release */
/**
 * @summary release
 * @constant
 */
export const release: number = ActivityType_release; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION release */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityType */

/* START_OF_SYMBOL_DEFINITION _decode_ActivityType */
export const _decode_ActivityType = $._decodeBitString;
/* END_OF_SYMBOL_DEFINITION _decode_ActivityType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityType */

/* START_OF_SYMBOL_DEFINITION _encode_ActivityType */
export const _encode_ActivityType = $._encodeBitString;

/* END_OF_SYMBOL_DEFINITION _encode_ActivityType */

/* eslint-enable */
