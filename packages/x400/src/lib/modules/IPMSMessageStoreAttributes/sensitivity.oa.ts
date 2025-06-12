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
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.js';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.js';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
import {
    SensitivityField,
    _enum_for_SensitivityField,
    SensitivityField_personal /* IMPORTED_LONG_ENUMERATION_ITEM */,
    personal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    private_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SensitivityField_company_confidential /* IMPORTED_LONG_ENUMERATION_ITEM */,
    company_confidential /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SensitivityField,
    _encode_SensitivityField,
} from '../IPMSInformationObjects/SensitivityField.ta.js';
export {
    SensitivityField,
    _enum_for_SensitivityField,
    SensitivityField_personal /* IMPORTED_LONG_ENUMERATION_ITEM */,
    personal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    private_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SensitivityField_company_confidential /* IMPORTED_LONG_ENUMERATION_ITEM */,
    company_confidential /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SensitivityField,
    _encode_SensitivityField,
} from '../IPMSInformationObjects/SensitivityField.ta.js';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.js';
export { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.js';
import { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.js';
export { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.js';
import { id_hat_sensitivity } from '../IPMSObjectIdentifiers/id-hat-sensitivity.va.js';
export { id_hat_sensitivity } from '../IPMSObjectIdentifiers/id-hat-sensitivity.va.js';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.js';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.js";

/* START_OF_SYMBOL_DEFINITION sensitivity */
/**
 * @summary sensitivity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sensitivity X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   SensitivityField,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   ORDERING MATCHING-RULE
 *     integerOrderingMatch, -- not defined for 1988 Application Contexts
 *
 *   NUMERATION              single-valued,
 *   ID                      id-hat-sensitivity
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SensitivityField>}
 * @implements {X413ATTRIBUTE<SensitivityField>}
 */
export const sensitivity: X413ATTRIBUTE<SensitivityField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SensitivityField,
    },
    encoderFor: {
        '&Type': _encode_SensitivityField,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_sensitivity /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sensitivity */

/* eslint-enable */
