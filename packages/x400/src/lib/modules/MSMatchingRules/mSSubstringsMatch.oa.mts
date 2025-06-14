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
import {
    SubstringAssertion,
    _decode_SubstringAssertion,
    _encode_SubstringAssertion,
} from '../MSMatchingRules/SubstringAssertion.ta.mjs';
import { id_mr_ms_substrings_match } from '../MSObjectIdentifiers/id-mr-ms-substrings-match.va.mjs';
/* START_OF_SYMBOL_DEFINITION mSSubstringsMatch */
/**
 * @summary mSSubstringsMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mSSubstringsMatch MATCHING-RULE ::= {
 *   SYNTAX  SubstringAssertion
 *   ID      id-mr-ms-substrings-match
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<SubstringAssertion>}
 * @implements {MATCHING_RULE<SubstringAssertion>}
 */
export const mSSubstringsMatch: MATCHING_RULE<SubstringAssertion> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_SubstringAssertion,
    },
    encoderFor: {
        '&AssertionType': _encode_SubstringAssertion,
    },
    '&id': id_mr_ms_substrings_match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION mSSubstringsMatch */

/* eslint-enable */
