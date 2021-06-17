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
    DateTranslationList,
    _decode_DateTranslationList,
    _encode_DateTranslationList,
} from '../Schedulerev1-ASN1Module/DateTranslationList.ta';
export {
    DateTranslationList,
    _decode_DateTranslationList,
    _encode_DateTranslationList,
} from '../Schedulerev1-ASN1Module/DateTranslationList.ta';
import {
    Date,
    _decode_Date,
    _encode_Date,
} from '../Schedulerev1-ASN1Module/Date.ta';
export {
    Date,
    _decode_Date,
    _encode_Date,
} from '../Schedulerev1-ASN1Module/Date.ta';
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

/* START_OF_SYMBOL_DEFINITION defaultDateTranslationList */
/**
 * @summary defaultDateTranslationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultDateTranslationList DateTranslationList ::= {}
 * ```
 *
 * @constant
 */
export const defaultDateTranslationList: DateTranslationList = [];
/* END_OF_SYMBOL_DEFINITION defaultDateTranslationList */

/* eslint-enable */
