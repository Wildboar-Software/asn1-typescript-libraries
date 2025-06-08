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
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
export { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca';
import { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa';
export { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa';
import { oRDescriptorMatch } from '../IPMSMessageStoreAttributes/oRDescriptorMatch.oa';
export { oRDescriptorMatch } from '../IPMSMessageStoreAttributes/oRDescriptorMatch.oa';
import { recipientSpecifierMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierMatch.oa';
export { recipientSpecifierMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierMatch.oa';
import { circulationMemberCheckmarkMatch } from '../IPMSMessageStoreAttributes/circulationMemberCheckmarkMatch.oa';
export { circulationMemberCheckmarkMatch } from '../IPMSMessageStoreAttributes/circulationMemberCheckmarkMatch.oa';
import { circulationMemberElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberElementsMatch.oa';
export { circulationMemberElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberElementsMatch.oa';
import { circulationMemberMatch } from '../IPMSMessageStoreAttributes/circulationMemberMatch.oa';
export { circulationMemberMatch } from '../IPMSMessageStoreAttributes/circulationMemberMatch.oa';
import { circulationMemberSingleElementMatch } from '../IPMSMessageStoreAttributes/circulationMemberSingleElementMatch.oa';
export { circulationMemberSingleElementMatch } from '../IPMSMessageStoreAttributes/circulationMemberSingleElementMatch.oa';
import { circulationMemberSubstringElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberSubstringElementsMatch.oa';
export { circulationMemberSubstringElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberSubstringElementsMatch.oa';
import { distributionCodeMatch } from '../IPMSMessageStoreAttributes/distributionCodeMatch.oa';
export { distributionCodeMatch } from '../IPMSMessageStoreAttributes/distributionCodeMatch.oa';
import { informationCategoryMatch } from '../IPMSMessageStoreAttributes/informationCategoryMatch.oa';
export { informationCategoryMatch } from '../IPMSMessageStoreAttributes/informationCategoryMatch.oa';
import { iPMLocationMatch } from '../IPMSMessageStoreAttributes/iPMLocationMatch.oa';
export { iPMLocationMatch } from '../IPMSMessageStoreAttributes/iPMLocationMatch.oa';
import { oRDescriptorElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorElementsMatch.oa';
export { oRDescriptorElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorElementsMatch.oa';
import { oRDescriptorSingleElementMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSingleElementMatch.oa';
export { oRDescriptorSingleElementMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSingleElementMatch.oa';
import { oRDescriptorSubstringElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSubstringElementsMatch.oa';
export { oRDescriptorSubstringElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSubstringElementsMatch.oa';
import { recipientSpecifierElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierElementsMatch.oa';
export { recipientSpecifierElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierElementsMatch.oa';
import { recipientSpecifierSingleElementMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSingleElementMatch.oa';
export { recipientSpecifierSingleElementMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSingleElementMatch.oa';
import { recipientSpecifierSubstringElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSubstringElementsMatch.oa';
export { recipientSpecifierSubstringElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSubstringElementsMatch.oa';

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
