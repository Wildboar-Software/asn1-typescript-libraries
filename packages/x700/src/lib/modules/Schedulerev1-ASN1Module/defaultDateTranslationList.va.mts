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
/**
 * @summary defaultDateTranslationList
 * @description
 *
 * Default of `dateTranslationList`: empty set (no
 * date-specific type-of-day overrides; weekday mapping
 * applies). ITU-T Rec. X.746 (02/00)
 * [A.1.12](https://www.itu.int/rec/T-REC-X.746-200002-I),
 * A.4.0.2, A.6.
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

/* eslint-enable */
