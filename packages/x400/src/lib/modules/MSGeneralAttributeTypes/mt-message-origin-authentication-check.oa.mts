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
    MessageOriginAuthenticationCheck,
    _decode_MessageOriginAuthenticationCheck,
    _encode_MessageOriginAuthenticationCheck,
} from '../MTSAbstractService/MessageOriginAuthenticationCheck.ta.mjs';
import { id_att_message_origin_authentication_check } from '../MSObjectIdentifiers/id-att-message-origin-authentication-check.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_message_origin_authentication_check
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-message-origin-authentication-check X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  MessageOriginAuthenticationCheck,
 *   NUMERATION             single-valued,
 *   ID                     id-att-message-origin-authentication-check
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<MessageOriginAuthenticationCheck>}
 * @implements {X413ATTRIBUTE<MessageOriginAuthenticationCheck>}
 */
export const mt_message_origin_authentication_check: X413ATTRIBUTE<MessageOriginAuthenticationCheck> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_MessageOriginAuthenticationCheck,
    },
    encoderFor: {
        '&Type': _encode_MessageOriginAuthenticationCheck,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_message_origin_authentication_check /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
