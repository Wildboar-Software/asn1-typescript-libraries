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
    MSString,
    _decode_MSString,
    _encode_MSString,
} from '../MSMatchingRules/MSString.ta.mjs';
import { id_mr_ms_single_substring_match } from '../MSObjectIdentifiers/id-mr-ms-single-substring-match.va.mjs';
/**
 * @summary mSSingleSubstringMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mSSingleSubstringMatch MATCHING-RULE ::= {
 *   SYNTAX  MSString {ub-msstring-match}
 *   ID      id-mr-ms-single-substring-match
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<MSString>}
 * @implements {MATCHING_RULE<MSString>}
 */
export const mSSingleSubstringMatch: MATCHING_RULE<MSString> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_MSString,
    },
    encoderFor: {
        '&AssertionType': _encode_MSString,
    },
    '&id': id_mr_ms_single_substring_match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
