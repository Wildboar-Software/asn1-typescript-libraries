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
    ActionRequestField,
    _decode_ActionRequestField,
    _encode_ActionRequestField,
} from '../EDIMSInformationObjects/ActionRequestField.ta.mjs';
import { objectIdentifierMatch } from '@wildboar/x500/src/lib/modules/InformationFramework/objectIdentifierMatch.oa.mjs';
import { id_rat_action_request_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-action-request-for-this-recipient.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary action_request_for_this_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * action-request-for-this-recipient X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   ActionRequestField,
 *   EQUALITY MATCHING-RULE  objectIdentifierMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-rat-action-request-for-this-recipient
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ActionRequestField>}
 * @implements {X413ATTRIBUTE<ActionRequestField>}
 */
export const action_request_for_this_recipient: X413ATTRIBUTE<ActionRequestField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ActionRequestField,
    },
    encoderFor: {
        '&Type': _encode_ActionRequestField,
    },
    '&equalityMatch': objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_rat_action_request_for_this_recipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
