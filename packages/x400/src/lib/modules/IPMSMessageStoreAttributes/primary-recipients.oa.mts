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
    PrimaryRecipientsSubfield,
    _decode_PrimaryRecipientsSubfield,
    _encode_PrimaryRecipientsSubfield,
} from '../IPMSInformationObjects/PrimaryRecipientsSubfield.ta.mjs';
export {
    PrimaryRecipientsSubfield,
    _decode_PrimaryRecipientsSubfield,
    _encode_PrimaryRecipientsSubfield,
} from '../IPMSInformationObjects/PrimaryRecipientsSubfield.ta.mjs';
import { recipientSpecifierMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierMatch.oa.mjs';
export { recipientSpecifierMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierMatch.oa.mjs';
import { recipientSpecifierElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierElementsMatch.oa.mjs';
export { recipientSpecifierElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierElementsMatch.oa.mjs';
import { recipientSpecifierSubstringElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSubstringElementsMatch.oa.mjs';
export { recipientSpecifierSubstringElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSubstringElementsMatch.oa.mjs';
import { recipientSpecifierSingleElementMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSingleElementMatch.oa.mjs';
export { recipientSpecifierSingleElementMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSingleElementMatch.oa.mjs';
import { id_hat_primary_recipients } from '../IPMSObjectIdentifiers/id-hat-primary-recipients.va.mjs';
export { id_hat_primary_recipients } from '../IPMSObjectIdentifiers/id-hat-primary-recipients.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION primary_recipients */
/**
 * @summary primary_recipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * primary-recipients X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   PrimaryRecipientsSubfield,
 *   EQUALITY MATCHING-RULE  recipientSpecifierMatch,
 *   OTHER MATCHING-RULES
 *     {recipientSpecifierElementsMatch | recipientSpecifierSubstringElementsMatch
 *       | recipientSpecifierSingleElementMatch, ...},
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-primary-recipients
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<PrimaryRecipientsSubfield>}
 * @implements {X413ATTRIBUTE<PrimaryRecipientsSubfield>}
 */
export const primary_recipients: X413ATTRIBUTE<PrimaryRecipientsSubfield> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PrimaryRecipientsSubfield,
    },
    encoderFor: {
        '&Type': _encode_PrimaryRecipientsSubfield,
    },
    '&equalityMatch': recipientSpecifierMatch /* OBJECT_FIELD_SETTING */,
    '&OtherMatches': [
        recipientSpecifierElementsMatch,
        recipientSpecifierSubstringElementsMatch,
        recipientSpecifierSingleElementMatch,
    ] /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_primary_recipients /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION primary_recipients */

/* eslint-enable */
