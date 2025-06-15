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
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    SecurityClassification,
    _decode_SecurityClassification,
    _encode_SecurityClassification,
} from '../MTSAbstractService/SecurityClassification.ta.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { id_att_security_classification } from '../MSObjectIdentifiers/id-att-security-classification.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_security_classification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-security-classification X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   SecurityClassification,
 *   EQUALITY MATCHING-RULE  integerMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-att-security-classification
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SecurityClassification>}
 * @implements {X413ATTRIBUTE<SecurityClassification>}
 */
export const mt_security_classification: X413ATTRIBUTE<SecurityClassification> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SecurityClassification,
    },
    encoderFor: {
        '&Type': _encode_SecurityClassification,
    },
    '&equalityMatch': integerMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_security_classification /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
