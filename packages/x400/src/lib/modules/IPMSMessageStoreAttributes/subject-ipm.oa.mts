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
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    SubjectIPMField,
    _decode_SubjectIPMField,
    _encode_SubjectIPMField,
} from '../IPMSInformationObjects/SubjectIPMField.ta.mjs';
import { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa.mjs';
import { id_nat_subject_ipm } from '../IPMSObjectIdentifiers/id-nat-subject-ipm.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

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

/* eslint-enable */
