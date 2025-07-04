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
    EDINReceiverField,
    _decode_EDINReceiverField,
    _encode_EDINReceiverField,
} from '../EDIMSInformationObjects/EDINReceiverField.ta.mjs';
import { id_hat_edin_receiver } from '../EDIMSObjectIdentifiers/id-hat-edin-receiver.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary edin_receiver
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edin-receiver X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  EDINReceiverField,
 *
 *   -- EQUALITY MATCHING-RULE   rule not defined
 *   NUMERATION             single-valued,
 *   ID                     id-hat-edin-receiver
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDINReceiverField>}
 * @implements {X413ATTRIBUTE<EDINReceiverField>}
 */
export const edin_receiver: X413ATTRIBUTE<EDINReceiverField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDINReceiverField,
    },
    encoderFor: {
        '&Type': _encode_EDINReceiverField,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_edin_receiver /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
