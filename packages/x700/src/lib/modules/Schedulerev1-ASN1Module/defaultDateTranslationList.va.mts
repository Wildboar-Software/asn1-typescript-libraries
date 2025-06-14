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
    DateTranslationList,
    _decode_DateTranslationList,
    _encode_DateTranslationList,
} from '../Schedulerev1-ASN1Module/DateTranslationList.ta.mjs';
import {
    _decode_Date,
    _encode_Date,
} from '../Schedulerev1-ASN1Module/Date.ta.mjs';
import {
    _decode_TypeOfDay,
    _encode_TypeOfDay,
} from '../Schedulerev1-ASN1Module/TypeOfDay.ta.mjs';
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
