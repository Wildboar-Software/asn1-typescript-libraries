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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
export {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
import {
    EDIMessageTypeFieldSubField,
    _decode_EDIMessageTypeFieldSubField,
    _encode_EDIMessageTypeFieldSubField,
} from '../EDIMSInformationObjects/EDIMessageTypeFieldSubField.ta';
export {
    EDIMessageTypeFieldSubField,
    _decode_EDIMessageTypeFieldSubField,
    _encode_EDIMessageTypeFieldSubField,
} from '../EDIMSInformationObjects/EDIMessageTypeFieldSubField.ta';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa';
export { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa';
import { id_hat_edi_message_type } from '../EDIMSObjectIdentifiers/id-hat-edi-message-type.va';
export { id_hat_edi_message_type } from '../EDIMSObjectIdentifiers/id-hat-edi-message-type.va';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta";

/* START_OF_SYMBOL_DEFINITION edi_message_type */
/**
 * @summary edi_message_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-message-type X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   EDIMessageTypeFieldSubField,
 *   EQUALITY MATCHING-RULE  mSStringMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-edi-message-type
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDIMessageTypeFieldSubField>}
 * @implements {X413ATTRIBUTE<EDIMessageTypeFieldSubField>}
 */
export const edi_message_type: X413ATTRIBUTE<EDIMessageTypeFieldSubField> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDIMessageTypeFieldSubField,
    },
    encoderFor: {
        '&Type': _encode_EDIMessageTypeFieldSubField,
    },
    '&equalityMatch': mSStringMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_edi_message_type /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION edi_message_type */

/* eslint-enable */
