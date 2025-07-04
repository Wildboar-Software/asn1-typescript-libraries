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
    NotificationExtensionsSubField,
    _decode_NotificationExtensionsSubField,
    _encode_NotificationExtensionsSubField,
} from '../EDIMSInformationObjects/NotificationExtensionsSubField.ta.mjs';
import { id_nat_notification_extensions } from '../EDIMSObjectIdentifiers/id-nat-notification-extensions.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary notification_extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notification-extensions X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  NotificationExtensionsSubField,
 *
 *   -- EQUALITY MATCHING-RULE   rule not defined
 *   NUMERATION             multi-valued,
 *   ID                     id-nat-notification-extensions
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<NotificationExtensionsSubField>}
 * @implements {X413ATTRIBUTE<NotificationExtensionsSubField>}
 */
export const notification_extensions: X413ATTRIBUTE<NotificationExtensionsSubField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_NotificationExtensionsSubField,
    },
    encoderFor: {
        '&Type': _encode_NotificationExtensionsSubField,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_notification_extensions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
