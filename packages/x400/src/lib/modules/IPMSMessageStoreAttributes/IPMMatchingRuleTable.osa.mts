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
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
import { iPMIdentifierMatch } from '../IPMSMessageStoreAttributes/iPMIdentifierMatch.oa.mjs';
import { oRDescriptorMatch } from '../IPMSMessageStoreAttributes/oRDescriptorMatch.oa.mjs';
import { recipientSpecifierMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierMatch.oa.mjs';
import { circulationMemberCheckmarkMatch } from '../IPMSMessageStoreAttributes/circulationMemberCheckmarkMatch.oa.mjs';
import { circulationMemberElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberElementsMatch.oa.mjs';
import { circulationMemberMatch } from '../IPMSMessageStoreAttributes/circulationMemberMatch.oa.mjs';
import { circulationMemberSingleElementMatch } from '../IPMSMessageStoreAttributes/circulationMemberSingleElementMatch.oa.mjs';
import { circulationMemberSubstringElementsMatch } from '../IPMSMessageStoreAttributes/circulationMemberSubstringElementsMatch.oa.mjs';
import { distributionCodeMatch } from '../IPMSMessageStoreAttributes/distributionCodeMatch.oa.mjs';
import { informationCategoryMatch } from '../IPMSMessageStoreAttributes/informationCategoryMatch.oa.mjs';
import { iPMLocationMatch } from '../IPMSMessageStoreAttributes/iPMLocationMatch.oa.mjs';
import { oRDescriptorElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorElementsMatch.oa.mjs';
import { oRDescriptorSingleElementMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSingleElementMatch.oa.mjs';
import { oRDescriptorSubstringElementsMatch } from '../IPMSMessageStoreAttributes/oRDescriptorSubstringElementsMatch.oa.mjs';
import { recipientSpecifierElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierElementsMatch.oa.mjs';
import { recipientSpecifierSingleElementMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSingleElementMatch.oa.mjs';
import { recipientSpecifierSubstringElementsMatch } from '../IPMSMessageStoreAttributes/recipientSpecifierSubstringElementsMatch.oa.mjs';
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

/* eslint-enable */
