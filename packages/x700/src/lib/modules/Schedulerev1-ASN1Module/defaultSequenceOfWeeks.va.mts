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
    SequenceOfWeeks,
    _decode_SequenceOfWeeks,
    _encode_SequenceOfWeeks,
} from '../Schedulerev1-ASN1Module/SequenceOfWeeks.ta.mjs';
import { defaultWeekMaskWps } from '../Schedulerev1-ASN1Module/defaultWeekMaskWps.va.mjs';
import {
    _decode_WeekMaskWps,
    _encode_WeekMaskWps,
} from '../Schedulerev1-ASN1Module/WeekMaskWps.ta.mjs';
/**
 * @summary defaultSequenceOfWeeks
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultSequenceOfWeeks SequenceOfWeeks ::= {defaultWeekMaskWps}
 * ```
 *
 * @constant
 */
export const defaultSequenceOfWeeks: SequenceOfWeeks = [defaultWeekMaskWps];

/* eslint-enable */
