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
    BodyPartSecurityLabel,
    _decode_BodyPartSecurityLabel,
    _encode_BodyPartSecurityLabel,
} from '../IPMSHeadingExtensions/BodyPartSecurityLabel.ta.mjs';
import { id_hat_body_part_security_label } from '../IPMSObjectIdentifiers/id-hat-body-part-security-label.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary body_part_security_label
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * body-part-security-label X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  BodyPartSecurityLabel,
 *   NUMERATION             multi-valued,
 *   ID                     id-hat-body-part-security-label
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<BodyPartSecurityLabel>}
 * @implements {X413ATTRIBUTE<BodyPartSecurityLabel>}
 */
export const body_part_security_label: X413ATTRIBUTE<BodyPartSecurityLabel> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_BodyPartSecurityLabel,
    },
    encoderFor: {
        '&Type': _encode_BodyPartSecurityLabel,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_body_part_security_label /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
