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
    SubjectEDIMField,
    _decode_SubjectEDIMField,
    _encode_SubjectEDIMField,
} from '../EDIMSInformationObjects/SubjectEDIMField.ta.mjs';
import { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa.mjs';
import { id_nat_subject_edim } from '../EDIMSObjectIdentifiers/id-nat-subject-edim.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary subject_edim
 * @description
 *
 * The Subject EDIM Identifier is the EDIM Identifier either passed in the EDIN Receiver
 * field, if Responsibility has been forwarded, or the This EDIM field, if not.
 * SubjectEDIMField ::= EDIMIdentifier NOTE – EDIM Identifier is defined in 7.1. See ITU-T
 * X.435 (1999), §9.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subject-edim X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   SubjectEDIMField,
 *   EQUALITY MATCHING-RULE  iPMIdentifierMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-nat-subject-edim
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SubjectEDIMField>}
 * @implements {X413ATTRIBUTE<SubjectEDIMField>}
 */
export const subject_edim: X413ATTRIBUTE<SubjectEDIMField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SubjectEDIMField,
    },
    encoderFor: {
        '&Type': _encode_SubjectEDIMField,
    },
    '&equalityMatch': iPMIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_subject_edim /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
