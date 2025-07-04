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
    SecurityElementsField,
    _decode_SecurityElementsField,
    _encode_SecurityElementsField,
} from '../EDIMSInformationObjects/SecurityElementsField.ta.mjs';
import { id_nat_notification_security_elements } from '../EDIMSObjectIdentifiers/id-nat-notification-security-elements.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary notification_security_elements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notification-security-elements X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  SecurityElementsField,
 *
 *   -- EQUALITY MATCHING-RULE   rule not defined
 *   NUMERATION             single-valued,
 *   ID                     id-nat-notification-security-elements
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<SecurityElementsField>}
 * @implements {X413ATTRIBUTE<SecurityElementsField>}
 */
export const notification_security_elements: X413ATTRIBUTE<SecurityElementsField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_SecurityElementsField,
    },
    encoderFor: {
        '&Type': _encode_SecurityElementsField,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_notification_security_elements /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
