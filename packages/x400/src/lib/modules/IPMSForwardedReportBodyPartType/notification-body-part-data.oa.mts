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
} from 'asn1-ts';
import {
    IPN,
    _decode_IPN,
    _encode_IPN,
} from '../IPMSInformationObjects/IPN.ta.mjs';
import { id_et_notification } from '../IPMSObjectIdentifiers/id-et-notification.va.mjs';
/* START_OF_SYMBOL_DEFINITION notification_body_part_data */
/**
 * @summary notification_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * notification-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<IPN>}
 * @implements {TYPE_IDENTIFIER<IPN>}
 */
export const notification_body_part_data: TYPE_IDENTIFIER<IPN> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_IPN,
    },
    encoderFor: {
        '&Type': _encode_IPN,
    },
    '&id': id_et_notification /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION notification_body_part_data */

/* eslint-enable */
