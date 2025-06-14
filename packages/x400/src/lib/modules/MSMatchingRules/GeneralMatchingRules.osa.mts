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
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
import { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa.mjs';
import { booleanMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/booleanMatch.oa.mjs';
import { contentIdentifierMatch } from '../MSMatchingRules/contentIdentifierMatch.oa.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.mjs';
import { mSStringCaseSensitiveMatch } from '../MSMatchingRules/mSStringCaseSensitiveMatch.oa.mjs';
import { objectIdentifierMatch } from '@wildboar/x500/src/lib/modules/InformationFramework/objectIdentifierMatch.oa.mjs';
import { oRNameMatch } from '../MSMatchingRules/oRNameMatch.oa.mjs';
import { uTCTimeMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeMatch.oa.mjs';
import { uTCTimeOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeOrderingMatch.oa.mjs';
import { contentCorrelatorMatch } from '../MSMatchingRules/contentCorrelatorMatch.oa.mjs';
import { generalizedTimeMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/generalizedTimeMatch.oa.mjs';
import { generalizedTimeOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/generalizedTimeOrderingMatch.oa.mjs';
import { mSSingleSubstringMatch } from '../MSMatchingRules/mSSingleSubstringMatch.oa.mjs';
import { mSStringListElementsMatch } from '../MSMatchingRules/mSStringListElementsMatch.oa.mjs';
import { mSStringListMatch } from '../MSMatchingRules/mSStringListMatch.oa.mjs';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa.mjs';
import { mSStringOrderingMatch } from '../MSMatchingRules/mSStringOrderingMatch.oa.mjs';
import { mSSingleSubstringListElementsMatch } from '../MSMatchingRules/mSSingleSubstringListElementsMatch.oa.mjs';
import { mSSingleSubstringListMatch } from '../MSMatchingRules/mSSingleSubstringListMatch.oa.mjs';
import { mSSubstringsMatch } from '../MSMatchingRules/mSSubstringsMatch.oa.mjs';
import { mTSIdentifierMatch } from '../MSMatchingRules/mTSIdentifierMatch.oa.mjs';
import { oRAddressElementsMatch } from '../MSMatchingRules/oRAddressElementsMatch.oa.mjs';
import { oRAddressMatch } from '../MSMatchingRules/oRAddressMatch.oa.mjs';
import { oRAddressSubstringElementsMatch } from '../MSMatchingRules/oRAddressSubstringElementsMatch.oa.mjs';
import { oRNameElementsMatch } from '../MSMatchingRules/oRNameElementsMatch.oa.mjs';
import { oRNameSingleElementMatch } from '../MSMatchingRules/oRNameSingleElementMatch.oa.mjs';
import { oRNameSubstringElementsMatch } from '../MSMatchingRules/oRNameSubstringElementsMatch.oa.mjs';
import { redirectionOrDLExpansionElementsMatch } from '../MSMatchingRules/redirectionOrDLExpansionElementsMatch.oa.mjs';
import { redirectionOrDLExpansionMatch } from '../MSMatchingRules/redirectionOrDLExpansionMatch.oa.mjs';
import { redirectionOrDLExpansionSingleElementMatch } from '../MSMatchingRules/redirectionOrDLExpansionSingleElementMatch.oa.mjs';
import { redirectionOrDLExpansionSubstringElementsMatch } from '../MSMatchingRules/redirectionOrDLExpansionSubstringElementsMatch.oa.mjs';
import { redirectionReasonMatch } from '../MSMatchingRules/redirectionReasonMatch.oa.mjs';
import { valueCountMatch } from '../MSMatchingRules/valueCountMatch.oa.mjs';
/* START_OF_SYMBOL_DEFINITION GeneralMatchingRules */
/**
 * @summary GeneralMatchingRules
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralMatchingRules MATCHING-RULE ::= {bitStringMatch | booleanMatch | contentIdentifierMatch | integerMatch |
 *    integerOrderingMatch | mSStringCaseSensitiveMatch | objectIdentifierMatch |
 *    oRNameMatch | uTCTimeMatch | uTCTimeOrderingMatch,
 *    ... -- 1994 extension additions --, contentCorrelatorMatch |
 *    generalizedTimeMatch | generalizedTimeOrderingMatch | mSSingleSubstringMatch
 *    | mSStringCaseSensitiveMatch | mSStringListElementsMatch | mSStringListMatch
 *    | mSStringMatch | mSStringOrderingMatch | mSSingleSubstringListElementsMatch
 *    | mSSingleSubstringListMatch | mSSubstringsMatch | mTSIdentifierMatch |
 *    oRAddressElementsMatch | oRAddressMatch | oRAddressSubstringElementsMatch |
 *    oRNameElementsMatch | oRNameMatch | oRNameSingleElementMatch |
 *    oRNameSubstringElementsMatch | redirectionOrDLExpansionElementsMatch |
 *    redirectionOrDLExpansionMatch | redirectionOrDLExpansionSingleElementMatch |
 *    redirectionOrDLExpansionSubstringElementsMatch | redirectionReasonMatch |
 *    valueCountMatch}
 * ```
 *
 * @constant
 * @type {MATCHING_RULE[]}
 *
 */
export const GeneralMatchingRules: MATCHING_RULE[] = [
    bitStringMatch,
    booleanMatch,
    contentIdentifierMatch,
    integerMatch,
    integerOrderingMatch,
    mSStringCaseSensitiveMatch,
    objectIdentifierMatch,
    oRNameMatch,
    uTCTimeMatch,
    uTCTimeOrderingMatch,
    /* OBJECT_SET_EXTENSION_MARKER */ contentCorrelatorMatch,
    generalizedTimeMatch,
    generalizedTimeOrderingMatch,
    mSSingleSubstringMatch,
    mSStringCaseSensitiveMatch,
    mSStringListElementsMatch,
    mSStringListMatch,
    mSStringMatch,
    mSStringOrderingMatch,
    mSSingleSubstringListElementsMatch,
    mSSingleSubstringListMatch,
    mSSubstringsMatch,
    mTSIdentifierMatch,
    oRAddressElementsMatch,
    oRAddressMatch,
    oRAddressSubstringElementsMatch,
    oRNameElementsMatch,
    oRNameMatch,
    oRNameSingleElementMatch,
    oRNameSubstringElementsMatch,
    redirectionOrDLExpansionElementsMatch,
    redirectionOrDLExpansionMatch,
    redirectionOrDLExpansionSingleElementMatch,
    redirectionOrDLExpansionSubstringElementsMatch,
    redirectionReasonMatch,
    valueCountMatch,
];
/* END_OF_SYMBOL_DEFINITION GeneralMatchingRules */

/* eslint-enable */
