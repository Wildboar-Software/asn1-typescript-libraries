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
    IPMSExtension,
    _decode_IPMSExtension,
    _encode_IPMSExtension,
} from '../IPMSInformationObjects/IPMSExtension.ta.mjs';
import { id_nat_other_notification_type_fields } from '../IPMSObjectIdentifiers/id-nat-other-notification-type-fields.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary other_notification_type_fields
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * other-notification-type-fields X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  IPMSExtension {{OtherNotifications}},
 *   NUMERATION             multi-valued,
 *   ID                     id-nat-other-notification-type-fields
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<IPMSExtension>}
 * @implements {X413ATTRIBUTE<IPMSExtension>}
 */
export const other_notification_type_fields: X413ATTRIBUTE<IPMSExtension> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_IPMSExtension,
    },
    encoderFor: {
        '&Type': _encode_IPMSExtension,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_other_notification_type_fields /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
