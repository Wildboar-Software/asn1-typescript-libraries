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
    SequenceOfDays,
    _decode_SequenceOfDays,
    _encode_SequenceOfDays,
} from '../Schedulerev1-ASN1Module/SequenceOfDays.ta.mjs';
import { defaultIntervalsOfDayWps } from '../Schedulerev1-ASN1Module/defaultIntervalsOfDayWps.va.mjs';
import {
    _decode_TimesOfDayWps,
    _encode_TimesOfDayWps,
} from '../Schedulerev1-ASN1Module/TimesOfDayWps.ta.mjs';
/* START_OF_SYMBOL_DEFINITION defaultSequenceOfDays */
/**
 * @summary defaultSequenceOfDays
 * @description
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
/* END_OF_SYMBOL_DEFINITION defaultSequenceOfDays */

/* eslint-enable */
