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
    CopyRecipientsSubfield,
    _decode_CopyRecipientsSubfield,
    _encode_CopyRecipientsSubfield,
} from '../IPMSInformationObjects/CopyRecipientsSubfield.ta.mjs';
export {
    CopyRecipientsSubfield,
    _decode_CopyRecipientsSubfield,
    _encode_CopyRecipientsSubfield,
} from '../IPMSInformationObjects/CopyRecipientsSubfield.ta.mjs';
import { recipientSpecifierMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierMatch.oa.mjs';
export { recipientSpecifierMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierMatch.oa.mjs';
import { recipientSpecifierElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierElementsMatch.oa.mjs';
export { recipientSpecifierElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierElementsMatch.oa.mjs';
import { recipientSpecifierSubstringElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSubstringElementsMatch.oa.mjs';
export { recipientSpecifierSubstringElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSubstringElementsMatch.oa.mjs';
import { recipientSpecifierSingleElementMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSingleElementMatch.oa.mjs';
export { recipientSpecifierSingleElementMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSingleElementMatch.oa.mjs';
import { id_hat_copy_recipients } from '../IPMSObjectIdentifiers/id-hat-copy-recipients.va.mjs';
export { id_hat_copy_recipients } from '../IPMSObjectIdentifiers/id-hat-copy-recipients.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
export { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued, multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION copy_recipients */
/**
 * @summary copy_recipients
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * copy-recipients X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   CopyRecipientsSubfield,
 *   EQUALITY MATCHING-RULE  recipientSpecifierMatch,
 *   OTHER MATCHING-RULES
 *     {recipientSpecifierElementsMatch | recipientSpecifierSubstringElementsMatch
 *       | recipientSpecifierSingleElementMatch, ...},
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-copy-recipients
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<CopyRecipientsSubfield>}
 * @implements {X413ATTRIBUTE<CopyRecipientsSubfield>}
 */
export const copy_recipients: X413ATTRIBUTE<CopyRecipientsSubfield> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_CopyRecipientsSubfield,
    },
    encoderFor: {
        '&Type': _encode_CopyRecipientsSubfield,
    },
    '&equalityMatch': recipientSpecifierMatch /* OBJECT_FIELD_SETTING */,
    '&OtherMatches': [
        recipientSpecifierElementsMatch,
        recipientSpecifierSubstringElementsMatch,
        recipientSpecifierSingleElementMatch,
    ] /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_copy_recipients /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION copy_recipients */

/* eslint-enable */
