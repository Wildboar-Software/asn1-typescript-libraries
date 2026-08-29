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
    SequenceOfDays,
    _decode_SequenceOfDays,
    _encode_SequenceOfDays,
} from '../Schedulerev1-ASN1Module/SequenceOfDays.ta.mjs';
import { defaultIntervalsOfDayWps } from '../Schedulerev1-ASN1Module/defaultIntervalsOfDayWps.va.mjs';
import {
    _decode_TimesOfDayWps,
    _encode_TimesOfDayWps,
} from '../Schedulerev1-ASN1Module/TimesOfDayWps.ta.mjs';
/**
 * @summary defaultSequenceOfDays
 * @description
 *
 * Default of `sequenceOfDays`: one day with
 * `defaultIntervalsOfDayWps` (full-day interval). Results in
 * the SMO activity being continually active. ITU-T Rec. X.746
 * (02/00)
 * [§8.3.4.3](https://www.itu.int/rec/T-REC-X.746-200002-I),
 * A.3.1, A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultSequenceOfDays SequenceOfDays ::= {intervalsOfDayWps:defaultIntervalsOfDayWps}
 * ```
 *
 * @constant
 */
export const defaultSequenceOfDays: SequenceOfDays = [
    { intervalsOfDayWps: defaultIntervalsOfDayWps },
];

/* eslint-enable */
