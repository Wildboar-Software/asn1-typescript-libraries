/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
import {
    AcknowledgementRequestField,
    _decode_AcknowledgementRequestField,
    _encode_AcknowledgementRequestField,
} from '../EDIMSInformationObjects/AcknowledgementRequestField.ta.mjs';
export {
    AcknowledgementRequestField,
    _decode_AcknowledgementRequestField,
    _encode_AcknowledgementRequestField,
} from '../EDIMSInformationObjects/AcknowledgementRequestField.ta.mjs';
import { booleanMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/booleanMatch.oa.mjs';
export { booleanMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/booleanMatch.oa.mjs';
import { id_rat_acknowledgement_request_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-acknowledgement-request-for-this-recipient.va.mjs';
export { id_rat_acknowledgement_request_for_this_recipient } from '../EDIMSObjectIdentifiers/id-rat-acknowledgement-request-for-this-recipient.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

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
