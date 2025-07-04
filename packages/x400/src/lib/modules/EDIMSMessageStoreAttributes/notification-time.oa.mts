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
    NotificationTimeField,
    _decode_NotificationTimeField,
    _encode_NotificationTimeField,
} from '../EDIMSInformationObjects/NotificationTimeField.ta.mjs';
import { uTCTimeMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { uTCTimeOrderingMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_nat_notification_time } from '../EDIMSObjectIdentifiers/id-nat-notification-time.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary notification_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notification-time X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   NotificationTimeField,
 *   EQUALITY MATCHING-RULE  uTCTimeMatch,
 *   ORDERING MATCHING-RULE
 *     uTCTimeOrderingMatch, -- rule not defined in version 1
 *
 *   NUMERATION              single-valued,
 *   ID                      id-nat-notification-time
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<NotificationTimeField>}
 * @implements {X413ATTRIBUTE<NotificationTimeField>}
 */
export const notification_time: X413ATTRIBUTE<NotificationTimeField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_NotificationTimeField,
    },
    encoderFor: {
        '&Type': _encode_NotificationTimeField,
    },
    '&equalityMatch': uTCTimeMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': uTCTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_notification_time /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
