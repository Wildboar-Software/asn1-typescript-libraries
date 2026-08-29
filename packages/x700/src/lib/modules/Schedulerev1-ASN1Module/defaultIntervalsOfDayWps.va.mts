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
    IntervalsOfDayWps,
    _decode_IntervalsOfDayWps,
    _encode_IntervalsOfDayWps,
} from '../Schedulerev1-ASN1Module/IntervalsOfDayWps.ta.mjs';
import {
    Time24Wps,
    _decode_Time24Wps,
    _encode_Time24Wps,
} from '../Schedulerev1-ASN1Module/Time24Wps.ta.mjs';
import { IntervalsOfDayWps_Item } from '../Schedulerev1-ASN1Module/IntervalsOfDayWps-Item.ta.mjs';

/**
 * @summary defaultIntervalsOfDayWps
 * @description
 *
 * Default intervals of day: a single interval from 00:00 to
 * 00:00, i.e. the entire 24-hour period (activity continually
 * active). ITU-T Rec. X.746 (02/00)
 * [§8.3.4.2](https://www.itu.int/rec/T-REC-X.746-200002-I),
 * A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultIntervalsOfDayWps IntervalsOfDayWps ::= {
 *   {intervalStart  {hour 0, minute 0, second 0},
 *    intervalEnd    {hour 0, minute 0, second 0}}
 * }
 * ```
 *
 * @constant
 */
export const defaultIntervalsOfDayWps: IntervalsOfDayWps = [
    new IntervalsOfDayWps_Item(
        new Time24Wps(0, 0, 0, undefined, undefined, undefined, undefined),
        new Time24Wps(0, 0, 0, undefined, undefined, undefined, undefined),
    ),
];

/* eslint-enable */
