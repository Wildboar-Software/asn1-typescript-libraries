/* eslint-disable */
import {
    TYPE_IDENTIFIER,
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
    MessageParameters,
    _decode_MessageParameters,
    _encode_MessageParameters,
} from '../IPMSInformationObjects/MessageParameters.ta.mjs';
import { id_ep_notification } from '../IPMSObjectIdentifiers/id-ep-notification.va.mjs';
/**
 * @summary notification_body_part_parameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notification-body-part-parameters ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<MessageParameters>}
 * @implements {TYPE_IDENTIFIER<MessageParameters>}
 */
export const notification_body_part_parameters: TYPE_IDENTIFIER<MessageParameters> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_MessageParameters,
    },
    encoderFor: {
        '&Type': _encode_MessageParameters,
    },
    '&id': id_ep_notification /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
