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
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
import { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa.mjs';
export { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa.mjs';
import { oRDescriptorMatch } from '../IPMSMessageStoreAttributes/oRDescriptorMatch.oa.mjs';
export { oRDescriptorMatch } from '../IPMSMessageStoreAttributes/oRDescriptorMatch.oa.mjs';
import { recipientSpecifierMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierMatch.oa.mjs';
export { recipientSpecifierMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierMatch.oa.mjs';
import { circulationMemberCheckmarkMatch } from '../IPMSMessageStoreAttributes/circulationMemberCheckmarkMatch.oa.mjs';
export { circulationMemberCheckmarkMatch } from '../IPMSMessageStoreAttributes/circulationMemberCheckmarkMatch.oa.mjs';
import { circulationMemberElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberElementsMatch.oa.mjs';
export { circulationMemberElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberElementsMatch.oa.mjs';
import { circulationMemberMatch } from '../IPMSMessageStoreAttributes/circulationMemberMatch.oa.mjs';
export { circulationMemberMatch } from '../IPMSMessageStoreAttributes/circulationMemberMatch.oa.mjs';
import { circulationMemberSingleElementMatch } from '../IPMSMessageStoreAttributes/circulationMemberSingleElementMatch.oa.mjs';
export { circulationMemberSingleElementMatch } from '../IPMSMessageStoreAttributes/circulationMemberSingleElementMatch.oa.mjs';
import { circulationMemberSubstringElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberSubstringElementsMatch.oa.mjs';
export { circulationMemberSubstringElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberSubstringElementsMatch.oa.mjs';
import { distributionCodeMatch } from '../IPMSMessageStoreAttributes/distributionCodeMatch.oa.mjs';
export { distributionCodeMatch } from '../IPMSMessageStoreAttributes/distributionCodeMatch.oa.mjs';
import { informationCategoryMatch } from '../IPMSMessageStoreAttributes/informationCategoryMatch.oa.mjs';
export { informationCategoryMatch } from '../IPMSMessageStoreAttributes/informationCategoryMatch.oa.mjs';
import { iPMLocationMatch } from '../IPMSMessageStoreAttributes/iPMLocationMatch.oa.mjs';
export { iPMLocationMatch } from '../IPMSMessageStoreAttributes/iPMLocationMatch.oa.mjs';
import { oRDescriptorElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorElementsMatch.oa.mjs';
export { oRDescriptorElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorElementsMatch.oa.mjs';
import { oRDescriptorSingleElementMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSingleElementMatch.oa.mjs';
export { oRDescriptorSingleElementMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSingleElementMatch.oa.mjs';
import { oRDescriptorSubstringElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSubstringElementsMatch.oa.mjs';
export { oRDescriptorSubstringElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSubstringElementsMatch.oa.mjs';
import { recipientSpecifierElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierElementsMatch.oa.mjs';
export { recipientSpecifierElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierElementsMatch.oa.mjs';
import { recipientSpecifierSingleElementMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSingleElementMatch.oa.mjs';
export { recipientSpecifierSingleElementMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSingleElementMatch.oa.mjs';
import { recipientSpecifierSubstringElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSubstringElementsMatch.oa.mjs';
export { recipientSpecifierSubstringElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSubstringElementsMatch.oa.mjs';

/* START_OF_SYMBOL_DEFINITION IPMMatchingRuleTable */
/**
 * @summary IPMMatchingRuleTable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMMatchingRuleTable MATCHING-RULE ::= {iPMIdentifierMatch | oRDescriptorMatch | recipientSpecifierMatch,
 *    ... -- 1994 extension additions --, circulationMemberCheckmarkMatch |
 *    circulationMemberElementsMatch | circulationMemberMatch |
 *    circulationMemberSingleElementMatch |
 *    circulationMemberSubstringElementsMatch | distributionCodeMatch |
 *    informationCategoryMatch | iPMLocationMatch | oRDescriptorElementsMatch |
 *    oRDescriptorSingleElementMatch | oRDescriptorSubstringElementsMatch |
 *    recipientSpecifierElementsMatch | recipientSpecifierSingleElementMatch |
 *    recipientSpecifierSubstringElementsMatch}
 * ```
 *
 * @constant
 * @type {MATCHING_RULE[]}
 *
 */
export const IPMMatchingRuleTable: MATCHING_RULE[] = [
    iPMIdentifierMatch,
    oRDescriptorMatch,
    recipientSpecifierMatch,
    /* OBJECT_SET_EXTENSION_MARKER */ circulationMemberCheckmarkMatch,
    circulationMemberElementsMatch,
    circulationMemberMatch,
    circulationMemberSingleElementMatch,
    circulationMemberSubstringElementsMatch,
    distributionCodeMatch,
    informationCategoryMatch,
    iPMLocationMatch,
    oRDescriptorElementsMatch,
    oRDescriptorSingleElementMatch,
    oRDescriptorSubstringElementsMatch,
    recipientSpecifierElementsMatch,
    recipientSpecifierSingleElementMatch,
    recipientSpecifierSubstringElementsMatch,
];
/* END_OF_SYMBOL_DEFINITION IPMMatchingRuleTable */

/* eslint-enable */
