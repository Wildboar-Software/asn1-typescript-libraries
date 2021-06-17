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
    WeekDayTranslationList,
    _decode_WeekDayTranslationList,
    _encode_WeekDayTranslationList,
} from '../Schedulerev1-ASN1Module/WeekDayTranslationList.ta';
export {
    WeekDayTranslationList,
    _decode_WeekDayTranslationList,
    _encode_WeekDayTranslationList,
} from '../Schedulerev1-ASN1Module/WeekDayTranslationList.ta';
import {
    WeekDay,
    _enum_for_WeekDay,
    WeekDay_sunday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sunday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_monday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    monday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_tuesday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    tuesday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_wednesday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    wednesday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_thursday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    thursday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_friday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    friday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_saturday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    saturday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_WeekDay,
    _encode_WeekDay,
} from '../Schedulerev1-ASN1Module/WeekDay.ta';
export {
    WeekDay,
    _enum_for_WeekDay,
    WeekDay_sunday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    sunday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_monday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    monday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_tuesday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    tuesday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_wednesday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    wednesday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_thursday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    thursday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_friday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    friday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    WeekDay_saturday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    saturday /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_WeekDay,
    _encode_WeekDay,
} from '../Schedulerev1-ASN1Module/WeekDay.ta';
import {
    TypeOfDay,
    TypeOfDay_workday /* IMPORTED_LONG_NAMED_INTEGER */,
    workday /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_weekend /* IMPORTED_LONG_NAMED_INTEGER */,
    weekend /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay1 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay2 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay2 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay3 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay3 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay4 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay4 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay5 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay5 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay6 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay6 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay7 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay7 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay8 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay8 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay9 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay9 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay10 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay10 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay11 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay11 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay12 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay12 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay13 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay13 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay14 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay14 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay15 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay15 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay16 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay16 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TypeOfDay,
    _encode_TypeOfDay,
} from '../Schedulerev1-ASN1Module/TypeOfDay.ta';
export {
    TypeOfDay,
    TypeOfDay_workday /* IMPORTED_LONG_NAMED_INTEGER */,
    workday /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_weekend /* IMPORTED_LONG_NAMED_INTEGER */,
    weekend /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay1 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay2 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay2 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay3 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay3 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay4 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay4 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay5 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay5 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay6 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay6 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay7 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay7 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay8 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay8 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay9 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay9 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay10 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay10 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay11 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay11 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay12 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay12 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay13 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay13 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay14 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay14 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay15 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay15 /* IMPORTED_SHORT_NAMED_INTEGER */,
    TypeOfDay_specialDay16 /* IMPORTED_LONG_NAMED_INTEGER */,
    specialDay16 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TypeOfDay,
    _encode_TypeOfDay,
} from '../Schedulerev1-ASN1Module/TypeOfDay.ta';

/* START_OF_SYMBOL_DEFINITION defaultWeekDayTranslationList */
/**
 * @summary defaultWeekDayTranslationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultWeekDayTranslationList WeekDayTranslationList ::= {{weekDay sunday, typeOfDay workday}, {weekDay monday, typeOfDay workday},
 *     {weekDay tuesday, typeOfDay workday},
 *     {weekDay wednesday, typeOfDay workday},
 *     {weekDay thursday, typeOfDay workday}, {weekDay friday, typeOfDay workday},
 *     {weekDay saturday, typeOfDay weekend}}
 * ```
 *
 * @constant
 */
export const defaultWeekDayTranslationList: WeekDayTranslationList = [
    ,
    ,
    ,
    ,
    ,
    ,/* COULD_NOT_COMPILE_SEQUENCE_OR_SET_OF_VALUE 0 */
/* COULD_NOT_COMPILE_SEQUENCE_OR_SET_OF_VALUE 1 */
/* COULD_NOT_COMPILE_SEQUENCE_OR_SET_OF_VALUE 2 */
/* COULD_NOT_COMPILE_SEQUENCE_OR_SET_OF_VALUE 3 */
/* COULD_NOT_COMPILE_SEQUENCE_OR_SET_OF_VALUE 4 */
/* COULD_NOT_COMPILE_SEQUENCE_OR_SET_OF_VALUE 5 */
/* COULD_NOT_COMPILE_SEQUENCE_OR_SET_OF_VALUE 6 */
];
/* END_OF_SYMBOL_DEFINITION defaultWeekDayTranslationList */

/* eslint-enable */
