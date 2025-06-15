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
    AuthorizingUsersSubfield,
    _decode_AuthorizingUsersSubfield,
    _encode_AuthorizingUsersSubfield,
} from '../IPMSInformationObjects/AuthorizingUsersSubfield.ta.mjs';
import { oRDescriptorMatch } from '../IPMSMessageStoreAttributes/oRDescriptorMatch.oa.mjs';
import { oRDescriptorElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorElementsMatch.oa.mjs';
import { oRDescriptorSingleElementMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSingleElementMatch.oa.mjs';
import { oRDescriptorSubstringElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSubstringElementsMatch.oa.mjs';
import { id_hat_authorizing_users } from '../IPMSObjectIdentifiers/id-hat-authorizing-users.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary authorizing_users
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authorizing-users X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   AuthorizingUsersSubfield,
 *   EQUALITY MATCHING-RULE  oRDescriptorMatch,
 *   OTHER MATCHING-RULES
 *     {oRDescriptorElementsMatch | oRDescriptorSingleElementMatch |
 *       oRDescriptorSubstringElementsMatch, ...},
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-authorizing-users
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<AuthorizingUsersSubfield>}
 * @implements {X413ATTRIBUTE<AuthorizingUsersSubfield>}
 */
export const authorizing_users: X413ATTRIBUTE<AuthorizingUsersSubfield> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_AuthorizingUsersSubfield,
    },
    encoderFor: {
        '&Type': _encode_AuthorizingUsersSubfield,
    },
    '&equalityMatch': oRDescriptorMatch /* OBJECT_FIELD_SETTING */,
    '&OtherMatches': [
        oRDescriptorElementsMatch,
        oRDescriptorSingleElementMatch,
        oRDescriptorSubstringElementsMatch,
    ] /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_authorizing_users /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
