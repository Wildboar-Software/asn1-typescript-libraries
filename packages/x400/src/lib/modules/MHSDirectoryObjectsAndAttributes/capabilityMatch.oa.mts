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
    Capability,
    _decode_Capability,
    _encode_Capability,
} from '../MHSDirectoryObjectsAndAttributes/Capability.ta.mjs';
import { id_mr_capability_match } from '../MHSObjectIdentifiers/id-mr-capability-match.va.mjs';
/**
 * @summary capabilityMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * capabilityMatch MATCHING-RULE ::= {
 *   SYNTAX  Capability
 *   ID      id-mr-capability-match
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<Capability>}
 * @implements {MATCHING_RULE<Capability>}
 */
export const capabilityMatch: MATCHING_RULE<Capability> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_Capability,
    },
    encoderFor: {
        '&AssertionType': _encode_Capability,
    },
    '&id': id_mr_capability_match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
