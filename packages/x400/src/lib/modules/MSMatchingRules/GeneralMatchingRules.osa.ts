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
import { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa.js';
export { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa.js';
import { booleanMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/booleanMatch.oa.js';
export { booleanMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/booleanMatch.oa.js';
import { contentIdentifierMatch } from '../MSMatchingRules/contentIdentifierMatch.oa.js';
export { contentIdentifierMatch } from '../MSMatchingRules/contentIdentifierMatch.oa.js';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.js';
export { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.js';
import { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.js';
export { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa.js';
import { mSStringCaseSensitiveMatch } from '../MSMatchingRules/mSStringCaseSensitiveMatch.oa.js';
export { mSStringCaseSensitiveMatch } from '../MSMatchingRules/mSStringCaseSensitiveMatch.oa.js';
import { objectIdentifierMatch } from '@wildboar/x500/src/lib/modules/InformationFramework/objectIdentifierMatch.oa.js';
export { objectIdentifierMatch } from '@wildboar/x500/src/lib/modules/InformationFramework/objectIdentifierMatch.oa.js';
import { oRNameMatch } from '../MSMatchingRules/oRNameMatch.oa.js';
export { oRNameMatch } from '../MSMatchingRules/oRNameMatch.oa.js';
import { uTCTimeMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeMatch.oa.js';
export { uTCTimeMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeMatch.oa.js';
import { uTCTimeOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeOrderingMatch.oa.js';
export { uTCTimeOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeOrderingMatch.oa.js';
import { contentCorrelatorMatch } from '../MSMatchingRules/contentCorrelatorMatch.oa.js';
export { contentCorrelatorMatch } from '../MSMatchingRules/contentCorrelatorMatch.oa.js';
import { generalizedTimeMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/generalizedTimeMatch.oa.js';
export { generalizedTimeMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/generalizedTimeMatch.oa.js';
import { generalizedTimeOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/generalizedTimeOrderingMatch.oa.js';
export { generalizedTimeOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/generalizedTimeOrderingMatch.oa.js';
import { mSSingleSubstringMatch } from '../MSMatchingRules/mSSingleSubstringMatch.oa.js';
export { mSSingleSubstringMatch } from '../MSMatchingRules/mSSingleSubstringMatch.oa.js';
import { mSStringListElementsMatch } from '../MSMatchingRules/mSStringListElementsMatch.oa.js';
export { mSStringListElementsMatch } from '../MSMatchingRules/mSStringListElementsMatch.oa.js';
import { mSStringListMatch } from '../MSMatchingRules/mSStringListMatch.oa.js';
export { mSStringListMatch } from '../MSMatchingRules/mSStringListMatch.oa.js';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa.js';
export { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa.js';
import { mSStringOrderingMatch } from '../MSMatchingRules/mSStringOrderingMatch.oa.js';
export { mSStringOrderingMatch } from '../MSMatchingRules/mSStringOrderingMatch.oa.js';
import { mSSingleSubstringListElementsMatch } from '../MSMatchingRules/mSSingleSubstringListElementsMatch.oa.js';
export { mSSingleSubstringListElementsMatch } from '../MSMatchingRules/mSSingleSubstringListElementsMatch.oa.js';
import { mSSingleSubstringListMatch } from '../MSMatchingRules/mSSingleSubstringListMatch.oa.js';
export { mSSingleSubstringListMatch } from '../MSMatchingRules/mSSingleSubstringListMatch.oa.js';
import { mSSubstringsMatch } from '../MSMatchingRules/mSSubstringsMatch.oa.js';
export { mSSubstringsMatch } from '../MSMatchingRules/mSSubstringsMatch.oa.js';
import { mTSIdentifierMatch } from '../MSMatchingRules/mTSIdentifierMatch.oa.js';
export { mTSIdentifierMatch } from '../MSMatchingRules/mTSIdentifierMatch.oa.js';
import { oRAddressElementsMatch } from '../MSMatchingRules/oRAddressElementsMatch.oa.js';
export { oRAddressElementsMatch } from '../MSMatchingRules/oRAddressElementsMatch.oa.js';
import { oRAddressMatch } from '../MSMatchingRules/oRAddressMatch.oa.js';
export { oRAddressMatch } from '../MSMatchingRules/oRAddressMatch.oa.js';
import { oRAddressSubstringElementsMatch } from '../MSMatchingRules/oRAddressSubstringElementsMatch.oa.js';
export { oRAddressSubstringElementsMatch } from '../MSMatchingRules/oRAddressSubstringElementsMatch.oa.js';
import { oRNameElementsMatch } from '../MSMatchingRules/oRNameElementsMatch.oa.js';
export { oRNameElementsMatch } from '../MSMatchingRules/oRNameElementsMatch.oa.js';
import { oRNameSingleElementMatch } from '../MSMatchingRules/oRNameSingleElementMatch.oa.js';
export { oRNameSingleElementMatch } from '../MSMatchingRules/oRNameSingleElementMatch.oa.js';
import { oRNameSubstringElementsMatch } from '../MSMatchingRules/oRNameSubstringElementsMatch.oa.js';
export { oRNameSubstringElementsMatch } from '../MSMatchingRules/oRNameSubstringElementsMatch.oa.js';
import { redirectionOrDLExpansionElementsMatch } from '../MSMatchingRules/redirectionOrDLExpansionElementsMatch.oa.js';
export { redirectionOrDLExpansionElementsMatch } from '../MSMatchingRules/redirectionOrDLExpansionElementsMatch.oa.js';
import { redirectionOrDLExpansionMatch } from '../MSMatchingRules/redirectionOrDLExpansionMatch.oa.js';
export { redirectionOrDLExpansionMatch } from '../MSMatchingRules/redirectionOrDLExpansionMatch.oa.js';
import { redirectionOrDLExpansionSingleElementMatch } from '../MSMatchingRules/redirectionOrDLExpansionSingleElementMatch.oa.js';
export { redirectionOrDLExpansionSingleElementMatch } from '../MSMatchingRules/redirectionOrDLExpansionSingleElementMatch.oa.js';
import { redirectionOrDLExpansionSubstringElementsMatch } from '../MSMatchingRules/redirectionOrDLExpansionSubstringElementsMatch.oa.js';
export { redirectionOrDLExpansionSubstringElementsMatch } from '../MSMatchingRules/redirectionOrDLExpansionSubstringElementsMatch.oa.js';
import { redirectionReasonMatch } from '../MSMatchingRules/redirectionReasonMatch.oa.js';
export { redirectionReasonMatch } from '../MSMatchingRules/redirectionReasonMatch.oa.js';
import { valueCountMatch } from '../MSMatchingRules/valueCountMatch.oa.js';
export { valueCountMatch } from '../MSMatchingRules/valueCountMatch.oa.js';

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
