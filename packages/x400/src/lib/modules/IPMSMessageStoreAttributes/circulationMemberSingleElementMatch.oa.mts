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
import {
    MSString,
    _decode_MSString,
    _encode_MSString,
} from '../MSMatchingRules/MSString.ta.mjs';
import { id_mr_circulation_member_single_element } from '../IPMSObjectIdentifiers/id-mr-circulation-member-single-element.va.mjs';
/**
 * @summary circulationMemberSingleElementMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * circulationMemberSingleElementMatch MATCHING-RULE ::= {
 *   SYNTAX  MSString {ub-msstring-match}
 *   ID      id-mr-circulation-member-single-element
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<MSString>}
 * @implements {MATCHING_RULE<MSString>}
 */
export const circulationMemberSingleElementMatch: MATCHING_RULE<MSString> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_MSString,
    },
    encoderFor: {
        '&AssertionType': _encode_MSString,
    },
    '&id': id_mr_circulation_member_single_element /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
