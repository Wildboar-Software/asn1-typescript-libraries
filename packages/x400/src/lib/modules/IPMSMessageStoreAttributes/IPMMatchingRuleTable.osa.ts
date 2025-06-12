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
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.js';
import { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa.js';
export { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa.js';
import { oRDescriptorMatch } from '../IPMSMessageStoreAttributes/oRDescriptorMatch.oa.js';
export { oRDescriptorMatch } from '../IPMSMessageStoreAttributes/oRDescriptorMatch.oa.js';
import { recipientSpecifierMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierMatch.oa.js';
export { recipientSpecifierMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierMatch.oa.js';
import { circulationMemberCheckmarkMatch } from '../IPMSMessageStoreAttributes/circulationMemberCheckmarkMatch.oa.js';
export { circulationMemberCheckmarkMatch } from '../IPMSMessageStoreAttributes/circulationMemberCheckmarkMatch.oa.js';
import { circulationMemberElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberElementsMatch.oa.js';
export { circulationMemberElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberElementsMatch.oa.js';
import { circulationMemberMatch } from '../IPMSMessageStoreAttributes/circulationMemberMatch.oa.js';
export { circulationMemberMatch } from '../IPMSMessageStoreAttributes/circulationMemberMatch.oa.js';
import { circulationMemberSingleElementMatch } from '../IPMSMessageStoreAttributes/circulationMemberSingleElementMatch.oa.js';
export { circulationMemberSingleElementMatch } from '../IPMSMessageStoreAttributes/circulationMemberSingleElementMatch.oa.js';
import { circulationMemberSubstringElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberSubstringElementsMatch.oa.js';
export { circulationMemberSubstringElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberSubstringElementsMatch.oa.js';
import { distributionCodeMatch } from '../IPMSMessageStoreAttributes/distributionCodeMatch.oa.js';
export { distributionCodeMatch } from '../IPMSMessageStoreAttributes/distributionCodeMatch.oa.js';
import { informationCategoryMatch } from '../IPMSMessageStoreAttributes/informationCategoryMatch.oa.js';
export { informationCategoryMatch } from '../IPMSMessageStoreAttributes/informationCategoryMatch.oa.js';
import { iPMLocationMatch } from '../IPMSMessageStoreAttributes/iPMLocationMatch.oa.js';
export { iPMLocationMatch } from '../IPMSMessageStoreAttributes/iPMLocationMatch.oa.js';
import { oRDescriptorElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorElementsMatch.oa.js';
export { oRDescriptorElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorElementsMatch.oa.js';
import { oRDescriptorSingleElementMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSingleElementMatch.oa.js';
export { oRDescriptorSingleElementMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSingleElementMatch.oa.js';
import { oRDescriptorSubstringElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSubstringElementsMatch.oa.js';
export { oRDescriptorSubstringElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSubstringElementsMatch.oa.js';
import { recipientSpecifierElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierElementsMatch.oa.js';
export { recipientSpecifierElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierElementsMatch.oa.js';
import { recipientSpecifierSingleElementMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSingleElementMatch.oa.js';
export { recipientSpecifierSingleElementMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSingleElementMatch.oa.js';
import { recipientSpecifierSubstringElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSubstringElementsMatch.oa.js';
export { recipientSpecifierSubstringElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSubstringElementsMatch.oa.js';

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
