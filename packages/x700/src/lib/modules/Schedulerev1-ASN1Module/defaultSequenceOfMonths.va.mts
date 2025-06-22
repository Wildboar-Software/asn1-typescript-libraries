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
    SequenceOfMonths,
    _decode_SequenceOfMonths,
    _encode_SequenceOfMonths,
} from '../Schedulerev1-ASN1Module/SequenceOfMonths.ta.mjs';
import { defaultDaysOfMonth } from '../Schedulerev1-ASN1Module/defaultDaysOfMonth.va.mjs';
import { defaultIntervalsOfDayWps } from '../Schedulerev1-ASN1Module/defaultIntervalsOfDayWps.va.mjs';
import {
    _decode_MonthMask,
    _encode_MonthMask,
} from '../Schedulerev1-ASN1Module/MonthMask.ta.mjs';
import { MonthMask_Item } from '../Schedulerev1-ASN1Module/MonthMask-Item.ta.mjs';

/**
 * @summary defaultSequenceOfMonths
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultSequenceOfMonths SequenceOfMonths ::= {
 *    {
 *       {
 *           daysOfMonth    defaultDaysOfMonth,
 *           timesOfDayWps  intervalsOfDayWps:defaultIntervalsOfDayWps
 *       }
 *    }
 * }
 * ```
 *
 * @constant
 */
export const defaultSequenceOfMonths: SequenceOfMonths = [
    [
        new MonthMask_Item(
            defaultDaysOfMonth,
            {
                intervalsOfDayWps: defaultIntervalsOfDayWps,
            },
        ),
    ],
];

/* eslint-enable */
