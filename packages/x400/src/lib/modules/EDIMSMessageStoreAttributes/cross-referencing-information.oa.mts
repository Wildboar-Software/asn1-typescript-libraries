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
} from '../MSAbstractService/AttributeType.ta.mjs';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
import {
    CrossReferencingInformationSubField,
    _decode_CrossReferencingInformationSubField,
    _encode_CrossReferencingInformationSubField,
} from '../EDIMSInformationObjects/CrossReferencingInformationSubField.ta.mjs';
export {
    CrossReferencingInformationSubField,
    _decode_CrossReferencingInformationSubField,
    _encode_CrossReferencingInformationSubField,
} from '../EDIMSInformationObjects/CrossReferencingInformationSubField.ta.mjs';
import { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa.mjs';
export { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa.mjs';
import { id_hat_cross_referencing_information } from '../EDIMSObjectIdentifiers/id-hat-cross-referencing-information.va.mjs';
export { id_hat_cross_referencing_information } from '../EDIMSObjectIdentifiers/id-hat-cross-referencing-information.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION cross_referencing_information */
/**
 * @summary cross_referencing_information
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cross-referencing-information X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   CrossReferencingInformationSubField,
 *   EQUALITY MATCHING-RULE  bitStringMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-cross-referencing-information
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<CrossReferencingInformationSubField>}
 * @implements {X413ATTRIBUTE<CrossReferencingInformationSubField>}
 */
export const cross_referencing_information: X413ATTRIBUTE<CrossReferencingInformationSubField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_CrossReferencingInformationSubField,
    },
    encoderFor: {
        '&Type': _encode_CrossReferencingInformationSubField,
    },
    '&equalityMatch': bitStringMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_cross_referencing_information /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION cross_referencing_information */

/* eslint-enable */
