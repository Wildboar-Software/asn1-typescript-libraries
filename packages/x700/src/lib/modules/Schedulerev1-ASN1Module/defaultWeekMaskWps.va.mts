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
} from '@wildboar/asn1';
import {
    WeekMaskWps,
    _decode_WeekMaskWps,
    _encode_WeekMaskWps,
} from '../Schedulerev1-ASN1Module/WeekMaskWps.ta.mjs';
import { defaultIntervalsOfDayWps } from '../Schedulerev1-ASN1Module/defaultIntervalsOfDayWps.va.mjs';
import { WeekMaskWps_Item } from '../Schedulerev1-ASN1Module/WeekMaskWps-Item.ta.mjs';

/**
 * @summary defaultWeekMaskWps
 * @description
 *
 * Default week mask: all seven days with
 * `defaultIntervalsOfDayWps` (full-day interval). ITU-T Rec.
 * X.746 (02/00)
 * [§8.3.5.2](https://www.itu.int/rec/T-REC-X.746-200002-I),
 * A.6.
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

/* eslint-enable */
