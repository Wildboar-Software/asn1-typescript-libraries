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
    AcknowledgementRequestField,
    _decode_AcknowledgementRequestField,
    _encode_AcknowledgementRequestField,
} from '../EDIMSInformationObjects/AcknowledgementRequestField.ta.mjs';
import { booleanMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/booleanMatch.oa.mjs';
import { id_rat_acknowledgement_request_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-acknowledgement-request-for-this-recipient.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION acknowledgement_request_for_this_recipient */
/**
 * @summary acknowledgement_request_for_this_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * acknowledgement-request-for-this-recipient X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   AcknowledgementRequestField,
 *   EQUALITY MATCHING-RULE  booleanMatch,
 *   NUMERATION              single-valued,
 *   ID                      id-rat-acknowledgement-request-for-this-recipient
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<AcknowledgementRequestField>}
 * @implements {X413ATTRIBUTE<AcknowledgementRequestField>}
 */
export const acknowledgement_request_for_this_recipient: X413ATTRIBUTE<AcknowledgementRequestField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_AcknowledgementRequestField,
    },
    encoderFor: {
        '&Type': _encode_AcknowledgementRequestField,
    },
    '&equalityMatch': booleanMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_rat_acknowledgement_request_for_this_recipient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION acknowledgement_request_for_this_recipient */

/* eslint-enable */
