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
import { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa';
export { bitStringMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/bitStringMatch.oa';
import { booleanMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/booleanMatch.oa';
export { booleanMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/booleanMatch.oa';
import { contentIdentifierMatch } from '../MSMatchingRules/contentIdentifierMatch.oa';
export { contentIdentifierMatch } from '../MSMatchingRules/contentIdentifierMatch.oa';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa';
export { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa';
import { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa';
export { integerOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerOrderingMatch.oa';
import { mSStringCaseSensitiveMatch } from '../MSMatchingRules/mSStringCaseSensitiveMatch.oa';
export { mSStringCaseSensitiveMatch } from '../MSMatchingRules/mSStringCaseSensitiveMatch.oa';
import { objectIdentifierMatch } from '@wildboar/x500/src/lib/modules/InformationFramework/objectIdentifierMatch.oa';
export { objectIdentifierMatch } from '@wildboar/x500/src/lib/modules/InformationFramework/objectIdentifierMatch.oa';
import { oRNameMatch } from '../MSMatchingRules/oRNameMatch.oa';
export { oRNameMatch } from '../MSMatchingRules/oRNameMatch.oa';
import { uTCTimeMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeMatch.oa';
export { uTCTimeMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeMatch.oa';
import { uTCTimeOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeOrderingMatch.oa';
export { uTCTimeOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/uTCTimeOrderingMatch.oa';
import { contentCorrelatorMatch } from '../MSMatchingRules/contentCorrelatorMatch.oa';
export { contentCorrelatorMatch } from '../MSMatchingRules/contentCorrelatorMatch.oa';
import { generalizedTimeMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/generalizedTimeMatch.oa';
export { generalizedTimeMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/generalizedTimeMatch.oa';
import { generalizedTimeOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/generalizedTimeOrderingMatch.oa';
export { generalizedTimeOrderingMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/generalizedTimeOrderingMatch.oa';
import { mSSingleSubstringMatch } from '../MSMatchingRules/mSSingleSubstringMatch.oa';
export { mSSingleSubstringMatch } from '../MSMatchingRules/mSSingleSubstringMatch.oa';
import { mSStringListElementsMatch } from '../MSMatchingRules/mSStringListElementsMatch.oa';
export { mSStringListElementsMatch } from '../MSMatchingRules/mSStringListElementsMatch.oa';
import { mSStringListMatch } from '../MSMatchingRules/mSStringListMatch.oa';
export { mSStringListMatch } from '../MSMatchingRules/mSStringListMatch.oa';
import { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa';
export { mSStringMatch } from '../MSMatchingRules/mSStringMatch.oa';
import { mSStringOrderingMatch } from '../MSMatchingRules/mSStringOrderingMatch.oa';
export { mSStringOrderingMatch } from '../MSMatchingRules/mSStringOrderingMatch.oa';
import { mSSingleSubstringListElementsMatch } from '../MSMatchingRules/mSSingleSubstringListElementsMatch.oa';
export { mSSingleSubstringListElementsMatch } from '../MSMatchingRules/mSSingleSubstringListElementsMatch.oa';
import { mSSingleSubstringListMatch } from '../MSMatchingRules/mSSingleSubstringListMatch.oa';
export { mSSingleSubstringListMatch } from '../MSMatchingRules/mSSingleSubstringListMatch.oa';
import { mSSubstringsMatch } from '../MSMatchingRules/mSSubstringsMatch.oa';
export { mSSubstringsMatch } from '../MSMatchingRules/mSSubstringsMatch.oa';
import { mTSIdentifierMatch } from '../MSMatchingRules/mTSIdentifierMatch.oa';
export { mTSIdentifierMatch } from '../MSMatchingRules/mTSIdentifierMatch.oa';
import { oRAddressElementsMatch } from '../MSMatchingRules/oRAddressElementsMatch.oa';
export { oRAddressElementsMatch } from '../MSMatchingRules/oRAddressElementsMatch.oa';
import { oRAddressMatch } from '../MSMatchingRules/oRAddressMatch.oa';
export { oRAddressMatch } from '../MSMatchingRules/oRAddressMatch.oa';
import { oRAddressSubstringElementsMatch } from '../MSMatchingRules/oRAddressSubstringElementsMatch.oa';
export { oRAddressSubstringElementsMatch } from '../MSMatchingRules/oRAddressSubstringElementsMatch.oa';
import { oRNameElementsMatch } from '../MSMatchingRules/oRNameElementsMatch.oa';
export { oRNameElementsMatch } from '../MSMatchingRules/oRNameElementsMatch.oa';
import { oRNameSingleElementMatch } from '../MSMatchingRules/oRNameSingleElementMatch.oa';
export { oRNameSingleElementMatch } from '../MSMatchingRules/oRNameSingleElementMatch.oa';
import { oRNameSubstringElementsMatch } from '../MSMatchingRules/oRNameSubstringElementsMatch.oa';
export { oRNameSubstringElementsMatch } from '../MSMatchingRules/oRNameSubstringElementsMatch.oa';
import { redirectionOrDLExpansionElementsMatch } from '../MSMatchingRules/redirectionOrDLExpansionElementsMatch.oa';
export { redirectionOrDLExpansionElementsMatch } from '../MSMatchingRules/redirectionOrDLExpansionElementsMatch.oa';
import { redirectionOrDLExpansionMatch } from '../MSMatchingRules/redirectionOrDLExpansionMatch.oa';
export { redirectionOrDLExpansionMatch } from '../MSMatchingRules/redirectionOrDLExpansionMatch.oa';
import { redirectionOrDLExpansionSingleElementMatch } from '../MSMatchingRules/redirectionOrDLExpansionSingleElementMatch.oa';
export { redirectionOrDLExpansionSingleElementMatch } from '../MSMatchingRules/redirectionOrDLExpansionSingleElementMatch.oa';
import { redirectionOrDLExpansionSubstringElementsMatch } from '../MSMatchingRules/redirectionOrDLExpansionSubstringElementsMatch.oa';
export { redirectionOrDLExpansionSubstringElementsMatch } from '../MSMatchingRules/redirectionOrDLExpansionSubstringElementsMatch.oa';
import { redirectionReasonMatch } from '../MSMatchingRules/redirectionReasonMatch.oa';
export { redirectionReasonMatch } from '../MSMatchingRules/redirectionReasonMatch.oa';
import { valueCountMatch } from '../MSMatchingRules/valueCountMatch.oa';
export { valueCountMatch } from '../MSMatchingRules/valueCountMatch.oa';

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
