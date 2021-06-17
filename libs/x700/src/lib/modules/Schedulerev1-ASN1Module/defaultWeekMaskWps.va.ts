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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    WeekMaskWps,
    _decode_WeekMaskWps,
    _encode_WeekMaskWps,
} from '../Schedulerev1-ASN1Module/WeekMaskWps.ta';
export {
    WeekMaskWps,
    _decode_WeekMaskWps,
    _encode_WeekMaskWps,
} from '../Schedulerev1-ASN1Module/WeekMaskWps.ta';
import { defaultIntervalsOfDayWps } from '../Schedulerev1-ASN1Module/defaultIntervalsOfDayWps.va';
export { defaultIntervalsOfDayWps } from '../Schedulerev1-ASN1Module/defaultIntervalsOfDayWps.va';
import {
    DaysOfWeek,
    DaysOfWeek_sunday /* IMPORTED_LONG_NAMED_BIT */,
    sunday /* IMPORTED_SHORT_NAMED_BIT */,
    DaysOfWeek_monday /* IMPORTED_LONG_NAMED_BIT */,
    monday /* IMPORTED_SHORT_NAMED_BIT */,
    DaysOfWeek_tuesday /* IMPORTED_LONG_NAMED_BIT */,
    tuesday /* IMPORTED_SHORT_NAMED_BIT */,
    DaysOfWeek_wednesday /* IMPORTED_LONG_NAMED_BIT */,
    wednesday /* IMPORTED_SHORT_NAMED_BIT */,
    DaysOfWeek_thursday /* IMPORTED_LONG_NAMED_BIT */,
    thursday /* IMPORTED_SHORT_NAMED_BIT */,
    DaysOfWeek_friday /* IMPORTED_LONG_NAMED_BIT */,
    friday /* IMPORTED_SHORT_NAMED_BIT */,
    DaysOfWeek_saturday /* IMPORTED_LONG_NAMED_BIT */,
    saturday /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_DaysOfWeek,
    _encode_DaysOfWeek,
} from '../Schedulerev1-ASN1Module/DaysOfWeek.ta';
export {
    DaysOfWeek,
    DaysOfWeek_sunday /* IMPORTED_LONG_NAMED_BIT */,
    sunday /* IMPORTED_SHORT_NAMED_BIT */,
    DaysOfWeek_monday /* IMPORTED_LONG_NAMED_BIT */,
    monday /* IMPORTED_SHORT_NAMED_BIT */,
    DaysOfWeek_tuesday /* IMPORTED_LONG_NAMED_BIT */,
    tuesday /* IMPORTED_SHORT_NAMED_BIT */,
    DaysOfWeek_wednesday /* IMPORTED_LONG_NAMED_BIT */,
    wednesday /* IMPORTED_SHORT_NAMED_BIT */,
    DaysOfWeek_thursday /* IMPORTED_LONG_NAMED_BIT */,
    thursday /* IMPORTED_SHORT_NAMED_BIT */,
    DaysOfWeek_friday /* IMPORTED_LONG_NAMED_BIT */,
    friday /* IMPORTED_SHORT_NAMED_BIT */,
    DaysOfWeek_saturday /* IMPORTED_LONG_NAMED_BIT */,
    saturday /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_DaysOfWeek,
    _encode_DaysOfWeek,
} from '../Schedulerev1-ASN1Module/DaysOfWeek.ta';
import {
    TimesOfDayWps,
    _decode_TimesOfDayWps,
    _encode_TimesOfDayWps,
} from '../Schedulerev1-ASN1Module/TimesOfDayWps.ta';
export {
    TimesOfDayWps,
    _decode_TimesOfDayWps,
    _encode_TimesOfDayWps,
} from '../Schedulerev1-ASN1Module/TimesOfDayWps.ta';

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
    /* COULD_NOT_COMPILE_SEQUENCE_OR_SET_OF_VALUE 0 */
];
/* END_OF_SYMBOL_DEFINITION defaultWeekMaskWps */

/* eslint-enable */
