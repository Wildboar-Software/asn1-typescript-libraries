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
    SubjectIPMField,
    _decode_SubjectIPMField,
    _encode_SubjectIPMField,
} from '../IPMSInformationObjects/SubjectIPMField.ta';
export {
    SubjectIPMField,
    _decode_SubjectIPMField,
    _encode_SubjectIPMField,
} from '../IPMSInformationObjects/SubjectIPMField.ta';
import { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa';
export { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa';
import { id_nat_subject_ipm } from '../IPMSObjectIdentifiers/id-nat-subject-ipm.va';
export { id_nat_subject_ipm } from '../IPMSObjectIdentifiers/id-nat-subject-ipm.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

/* START_OF_SYMBOL_DEFINITION subject_ipm */
/**
 * @summary subject_ipm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subject-ipm X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   SubjectIPMField,
 *   EQUALITY MATCHING-RULE  iPMIdentifierMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-nat-subject-ipm
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SubjectIPMField>}
 * @implements {X413ATTRIBUTE<SubjectIPMField>}
 */
export const subject_ipm: X413ATTRIBUTE<SubjectIPMField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SubjectIPMField,
    },
    encoderFor: {
        '&Type': _encode_SubjectIPMField,
    },
    '&equalityMatch': iPMIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_subject_ipm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION subject_ipm */

/* eslint-enable */
