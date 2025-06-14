/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import {
    WeekMaskWps,
    _decode_WeekMaskWps,
    _encode_WeekMaskWps,
} from '../Schedulerev1-ASN1Module/WeekMaskWps.ta.mjs';
import { defaultIntervalsOfDayWps } from '../Schedulerev1-ASN1Module/defaultIntervalsOfDayWps.va.mjs';
import { WeekMaskWps_Item } from '../Schedulerev1-ASN1Module/WeekMaskWps-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION defaultWeekMaskWps */
/**
 * @summary defaultWeekMaskWps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultWeekMaskWps WeekMaskWps ::= {
 *   {daysOfWeek     '1111111'B,
 *    timesOfDayWps  intervalsOfDayWps:defaultIntervalsOfDayWps}
 * }
 * ```
 *
 * @constant
 */
export const defaultWeekMaskWps: WeekMaskWps = [
    new WeekMaskWps_Item(
        new Uint8ClampedArray([1, 1, 1, 1, 1, 1, 1]),
        {
            intervalsOfDayWps: defaultIntervalsOfDayWps,
        },
    ),
];
/* END_OF_SYMBOL_DEFINITION defaultWeekMaskWps */

/* eslint-enable */
