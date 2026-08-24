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
import { type MATCHING_RULE } from '@wildboar/x500/InformationFramework';
import {
    CirculationMember,
    _decode_CirculationMember,
    _encode_CirculationMember,
} from '../IPMSHeadingExtensions/CirculationMember.ta.mjs';
import { id_mr_circulation_member_substring_elements } from '../IPMSObjectIdentifiers/id-mr-circulation-member-substring-elements.va.mjs';
/**
 * @summary circulationMemberSubstringElementsMatch
 * @description
 *
 * Information object `circulationMemberSubstringElementsMatch`. The
 * Circulation-member-substring-elements-match determines whether a presented value is a
 * subset of the elements present in some value of an attribute of type Circulation
 * Member, where each presented string value is a substring of the corresponding stored
 * value. circulationMemberSubstringElementsMatch MATCHING-RULE ::= { SYNTAX
 * CirculationMember ID id-mr-circulation-member-substring-elements } 92 The rule is… See
 * ITU-T X.420 (1999), §19.7.13.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * circulationMemberSubstringElementsMatch MATCHING-RULE ::= {
 *   SYNTAX  CirculationMember
 *   ID      id-mr-circulation-member-substring-elements
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<CirculationMember>}
 * @implements {MATCHING_RULE<CirculationMember>}
 */
export const circulationMemberSubstringElementsMatch: MATCHING_RULE<CirculationMember> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_CirculationMember,
    },
    encoderFor: {
        '&AssertionType': _encode_CirculationMember,
    },
    '&id': id_mr_circulation_member_substring_elements /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
