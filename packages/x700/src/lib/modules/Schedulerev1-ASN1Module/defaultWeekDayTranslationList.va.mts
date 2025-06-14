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
    WeekDayTranslationList,
    _decode_WeekDayTranslationList,
    _encode_WeekDayTranslationList,
} from '../Schedulerev1-ASN1Module/WeekDayTranslationList.ta.mjs';
import {
    _enum_for_WeekDay,
    WeekDay_sunday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WeekDay_monday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WeekDay_tuesday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WeekDay_wednesday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WeekDay_thursday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WeekDay_friday /* IMPORTED_LONG_ENUMERATION_ITEM */,
    WeekDay_saturday /* IMPORTED_LONG_ENUMERATION_ITEM */,
} from '../Schedulerev1-ASN1Module/WeekDay.ta.mjs';
import {
    TypeOfDay_workday /* IMPORTED_LONG_NAMED_INTEGER */,
    TypeOfDay_weekend /* IMPORTED_LONG_NAMED_INTEGER */,
    _decode_TypeOfDay,
    _encode_TypeOfDay,
} from '../Schedulerev1-ASN1Module/TypeOfDay.ta.mjs';
import { WeekDayTranslationList_Item } from '../Schedulerev1-ASN1Module/WeekDayTranslationList-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION defaultWeekDayTranslationList */
/**
 * @summary defaultWeekDayTranslationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultWeekDayTranslationList WeekDayTranslationList ::= {
 *     {weekDay sunday, typeOfDay workday},
 *     {weekDay monday, typeOfDay workday},
 *     {weekDay tuesday, typeOfDay workday},
 *     {weekDay wednesday, typeOfDay workday},
 *     {weekDay thursday, typeOfDay workday},
 *     {weekDay friday, typeOfDay workday},
 *     {weekDay saturday, typeOfDay weekend}
 * }
 * ```
 *
 * @constant
 */
export const defaultWeekDayTranslationList: WeekDayTranslationList = [
    new WeekDayTranslationList_Item(
        WeekDay_sunday,
        TypeOfDay_workday,
    ),
    new WeekDayTranslationList_Item(
        WeekDay_monday,
        TypeOfDay_workday,
    ),
    new WeekDayTranslationList_Item(
        WeekDay_tuesday,
        TypeOfDay_workday,
    ),
    new WeekDayTranslationList_Item(
        WeekDay_wednesday,
        TypeOfDay_workday,
    ),
    new WeekDayTranslationList_Item(
        WeekDay_thursday,
        TypeOfDay_workday,
    ),
    new WeekDayTranslationList_Item(
        WeekDay_friday,
        TypeOfDay_workday,
    ),
    new WeekDayTranslationList_Item(
        WeekDay_saturday,
        TypeOfDay_weekend,
    ),
];
/* END_OF_SYMBOL_DEFINITION defaultWeekDayTranslationList */

/* eslint-enable */
