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
    AuthorizationTime,
    _decode_AuthorizationTime,
    _encode_AuthorizationTime,
} from '../IPMSHeadingExtensions/AuthorizationTime.ta.mjs';
import { generalizedTimeMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { generalizedTimeOrderingMatch } from '@wildboar/x500/SelectedAttributeTypes';
import { id_hat_authorization_time } from '../IPMSObjectIdentifiers/id-hat-authorization-time.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary authorization_time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorization-time X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   AuthorizationTime,
 *   EQUALITY MATCHING-RULE  generalizedTimeMatch,
 *   ORDERING MATCHING-RULE  generalizedTimeOrderingMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-hat-authorization-time
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<AuthorizationTime>}
 * @implements {X413ATTRIBUTE<AuthorizationTime>}
 */
export const authorization_time: X413ATTRIBUTE<AuthorizationTime> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_AuthorizationTime,
    },
    encoderFor: {
        '&Type': _encode_AuthorizationTime,
    },
    '&equalityMatch': generalizedTimeMatch /* OBJECT_FIELD_SETTING */,
    '&orderingMatch': generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_authorization_time /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
