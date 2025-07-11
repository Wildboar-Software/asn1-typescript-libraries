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
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.mjs';
import { mTSIdentifierMatch } from '../MSMatchingRules/mTSIdentifierMatch.oa.mjs';
import { id_att_message_identifier } from '../MSObjectIdentifiers/id-att-message-identifier.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_message_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-message-identifier X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   MTSIdentifier,
 *   EQUALITY MATCHING-RULE
 *     mTSIdentifierMatch, -- rule not defined in 1988 Application Contexts
 *
 *   NUMERATION              single-valued,
 *   ID                      id-att-message-identifier
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<MTSIdentifier>}
 * @implements {X413ATTRIBUTE<MTSIdentifier>}
 */
export const mt_message_identifier: X413ATTRIBUTE<MTSIdentifier> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_MTSIdentifier,
    },
    encoderFor: {
        '&Type': _encode_MTSIdentifier,
    },
    '&equalityMatch': mTSIdentifierMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_message_identifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
