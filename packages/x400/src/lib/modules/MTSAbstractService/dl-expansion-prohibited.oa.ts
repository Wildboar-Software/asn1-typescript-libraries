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
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.js';
export {
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.js';
import {
    Criticality,
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    for_submission /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_transfer /* IMPORTED_LONG_NAMED_BIT */,
    for_transfer /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    for_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.js';
export {
    Criticality,
    Criticality_for_submission /* IMPORTED_LONG_NAMED_BIT */,
    for_submission /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_transfer /* IMPORTED_LONG_NAMED_BIT */,
    for_transfer /* IMPORTED_SHORT_NAMED_BIT */,
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    for_delivery /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.js';
import {
    DLExpansionProhibited,
    _enum_for_DLExpansionProhibited,
    DLExpansionProhibited_dl_expansion_allowed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    dl_expansion_allowed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DLExpansionProhibited_dl_expansion_prohibited /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_DLExpansionProhibited,
    _encode_DLExpansionProhibited,
} from '../MTSAbstractService/DLExpansionProhibited.ta.js';
export {
    DLExpansionProhibited,
    _enum_for_DLExpansionProhibited,
    DLExpansionProhibited_dl_expansion_allowed /* IMPORTED_LONG_ENUMERATION_ITEM */,
    dl_expansion_allowed /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    DLExpansionProhibited_dl_expansion_prohibited /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_DLExpansionProhibited,
    _encode_DLExpansionProhibited,
} from '../MTSAbstractService/DLExpansionProhibited.ta.js';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.js';
export { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.js';

/* START_OF_SYMBOL_DEFINITION dl_expansion_prohibited */
/**
 * @summary dl_expansion_prohibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dl-expansion-prohibited EXTENSION ::= {
 *   DLExpansionProhibited
 *   IF ABSENT                dl-expansion-allowed,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:3
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<DLExpansionProhibited>}
 * @implements {EXTENSION<DLExpansionProhibited>}
 */
export const dl_expansion_prohibited: EXTENSION<DLExpansionProhibited> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_DLExpansionProhibited,
    },
    encoderFor: {
        '&Type': _encode_DLExpansionProhibited,
    },
    '&absent': dl_expansion_allowed /* OBJECT_FIELD_SETTING */,
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(Math.max(0, 1, 2));
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 3,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dl_expansion_prohibited */

/* eslint-enable */
