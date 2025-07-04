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
    AuthorizationInformationField,
    _decode_AuthorizationInformationField,
    _encode_AuthorizationInformationField,
} from '../EDIMSInformationObjects/AuthorizationInformationField.ta.mjs';
import { id_rat_authorization_information_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-authorization-information-for-this-recipient.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary authorization_information_for_this_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorization-information-for-this-recipient X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  AuthorizationInformationField,
 *
 *   -- EQUALITY MATCHING-RULE   rule not defined
 *   NUMERATION             single-valued,
 *   ID                     id-rat-authorization-information-for-this-recipient
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<AuthorizationInformationField>}
 * @implements {X413ATTRIBUTE<AuthorizationInformationField>}
 */
export const authorization_information_for_this_recipient: X413ATTRIBUTE<AuthorizationInformationField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_AuthorizationInformationField,
    },
    encoderFor: {
        '&Type': _encode_AuthorizationInformationField,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_rat_authorization_information_for_this_recipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
