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
    CirculationMember,
    _decode_CirculationMember,
    _encode_CirculationMember,
} from '../IPMSHeadingExtensions/CirculationMember.ta.mjs';
import { id_mr_circulation_member } from '../IPMSObjectIdentifiers/id-mr-circulation-member.va.mjs';
/**
 * @summary circulationMemberMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * circulationMemberMatch MATCHING-RULE ::= {
 *   SYNTAX  CirculationMember
 *   ID      id-mr-circulation-member
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<CirculationMember>}
 * @implements {MATCHING_RULE<CirculationMember>}
 */
export const circulationMemberMatch: MATCHING_RULE<CirculationMember> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_CirculationMember,
    },
    encoderFor: {
        '&AssertionType': _encode_CirculationMember,
    },
    '&id': id_mr_circulation_member /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
