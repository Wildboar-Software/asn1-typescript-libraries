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
    RelatedMessageReference,
    _decode_RelatedMessageReference,
    _encode_RelatedMessageReference,
} from '../EDIMSInformationObjects/RelatedMessageReference.ta.mjs';
import { id_hat_related_messages } from '../EDIMSObjectIdentifiers/id-hat-related-messages.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary related_messages
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * related-messages X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  RelatedMessageReference,
 *
 *   -- EQUALITY MATCHING-RULE   rule not defined
 *   NUMERATION             multi-valued,
 *   ID                     id-hat-related-messages
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<RelatedMessageReference>}
 * @implements {X413ATTRIBUTE<RelatedMessageReference>}
 */
export const related_messages: X413ATTRIBUTE<RelatedMessageReference> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_RelatedMessageReference,
    },
    encoderFor: {
        '&Type': _encode_RelatedMessageReference,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_related_messages /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
