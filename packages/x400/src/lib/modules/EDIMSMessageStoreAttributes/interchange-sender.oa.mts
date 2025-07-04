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
    InterchangeSenderField,
    _decode_InterchangeSenderField,
    _encode_InterchangeSenderField,
} from '../EDIMSInformationObjects/InterchangeSenderField.ta.mjs';
import { id_hat_interchange_sender } from '../EDIMSObjectIdentifiers/id-hat-interchange-sender.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary interchange_sender
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * interchange-sender X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  InterchangeSenderField,
 *
 *   -- EQUALITY MATCHING-RULE   rule not defined
 *   NUMERATION             single-valued,
 *   ID                     id-hat-interchange-sender
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<InterchangeSenderField>}
 * @implements {X413ATTRIBUTE<InterchangeSenderField>}
 */
export const interchange_sender: X413ATTRIBUTE<InterchangeSenderField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_InterchangeSenderField,
    },
    encoderFor: {
        '&Type': _encode_InterchangeSenderField,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_interchange_sender /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
