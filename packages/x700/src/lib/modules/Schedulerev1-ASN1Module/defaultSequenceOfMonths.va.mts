/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import {
    SequenceOfMonths,
    _decode_SequenceOfMonths,
    _encode_SequenceOfMonths,
} from '../Schedulerev1-ASN1Module/SequenceOfMonths.ta.mjs';
export {
    SequenceOfMonths,
    _decode_SequenceOfMonths,
    _encode_SequenceOfMonths,
} from '../Schedulerev1-ASN1Module/SequenceOfMonths.ta.mjs';
import { defaultDaysOfMonth } from '../Schedulerev1-ASN1Module/defaultDaysOfMonth.va.mjs';
export { defaultDaysOfMonth } from '../Schedulerev1-ASN1Module/defaultDaysOfMonth.va.mjs';
import { defaultIntervalsOfDayWps } from '../Schedulerev1-ASN1Module/defaultIntervalsOfDayWps.va.mjs';
export { defaultIntervalsOfDayWps } from '../Schedulerev1-ASN1Module/defaultIntervalsOfDayWps.va.mjs';
import {
    MonthMask,
    _decode_MonthMask,
    _encode_MonthMask,
} from '../Schedulerev1-ASN1Module/MonthMask.ta.mjs';
export {
    MonthMask,
    _decode_MonthMask,
    _encode_MonthMask,
} from '../Schedulerev1-ASN1Module/MonthMask.ta.mjs';

/* START_OF_SYMBOL_DEFINITION defaultSequenceOfMonths */
/**
 * @summary defaultSequenceOfMonths
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultSequenceOfMonths SequenceOfMonths ::= {{{daysOfMonth defaultDaysOfMonth, timesOfDayWps
 *      intervalsOfDayWps:defaultIntervalsOfDayWps}}}
 * ```
 *
 * @constant
 */
export const defaultSequenceOfMonths: SequenceOfMonths = [
    [
        /* COULD_NOT_COMPILE_SEQUENCE_OR_SET_OF_VALUE 0 */
    ],
];
/* END_OF_SYMBOL_DEFINITION defaultSequenceOfMonths */

/* eslint-enable */
