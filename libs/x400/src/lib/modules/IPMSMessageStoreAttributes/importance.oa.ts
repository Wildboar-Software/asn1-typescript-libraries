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
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
import {
    ImportanceField,
    _enum_for_ImportanceField,
    ImportanceField_low /* IMPORTED_LONG_ENUMERATION_ITEM */,
    low /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ImportanceField_normal /* IMPORTED_LONG_ENUMERATION_ITEM */,
    normal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ImportanceField_high /* IMPORTED_LONG_ENUMERATION_ITEM */,
    high /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ImportanceField,
    _encode_ImportanceField,
} from '../IPMSInformationObjects/ImportanceField.ta';
export {
    ImportanceField,
    _enum_for_ImportanceField,
    ImportanceField_low /* IMPORTED_LONG_ENUMERATION_ITEM */,
    low /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ImportanceField_normal /* IMPORTED_LONG_ENUMERATION_ITEM */,
    normal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ImportanceField_high /* IMPORTED_LONG_ENUMERATION_ITEM */,
    high /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ImportanceField,
    _encode_ImportanceField,
} from '../IPMSInformationObjects/ImportanceField.ta';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa';
export { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa';
import { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa';
export { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa';
import { id_hat_importance } from '../IPMSObjectIdentifiers/id-hat-importance.va';
export { id_hat_importance } from '../IPMSObjectIdentifiers/id-hat-importance.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

/* START_OF_SYMBOL_DEFINITION importance */
/**
 * @summary importance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * importance X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ImportanceField,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   ORDERING MATCHING-RULE
 *     integerOrderingMatch, -- not defined for 1988 Application Contexts
 *
 *   NUMERATION              single-valued,
 *   ID                      id-hat-importance
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ImportanceField>}
 * @implements {X413ATTRIBUTE<ImportanceField>}
 */
export const importance: X413ATTRIBUTE<ImportanceField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ImportanceField,
    },
    encoderFor: {
        '&Type': _encode_ImportanceField,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_importance /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION importance */

/* eslint-enable */
