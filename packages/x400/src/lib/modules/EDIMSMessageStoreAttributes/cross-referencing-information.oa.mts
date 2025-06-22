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
    CrossReferencingInformationSubField,
    _decode_CrossReferencingInformationSubField,
    _encode_CrossReferencingInformationSubField,
} from '../EDIMSInformationObjects/CrossReferencingInformationSubField.ta.mjs';
import { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa.mjs';
import { id_hat_cross_referencing_information } from '../EDIMSObjectIdentifiers/id-hat-cross-referencing-information.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

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

/* eslint-enable */
