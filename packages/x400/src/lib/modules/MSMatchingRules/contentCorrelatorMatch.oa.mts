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
    ContentCorrelator,
    _decode_ContentCorrelator,
    _encode_ContentCorrelator,
} from '../MTSAbstractService/ContentCorrelator.ta.mjs';
import { id_mr_content_correlator_match } from '../MSObjectIdentifiers/id-mr-content-correlator-match.va.mjs';
/**
 * @summary contentCorrelatorMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contentCorrelatorMatch MATCHING-RULE ::= {
 *   SYNTAX  ContentCorrelator
 *   ID      id-mr-content-correlator-match
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<ContentCorrelator>}
 * @implements {MATCHING_RULE<ContentCorrelator>}
 */
export const contentCorrelatorMatch: MATCHING_RULE<ContentCorrelator> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_ContentCorrelator,
    },
    encoderFor: {
        '&AssertionType': _encode_ContentCorrelator,
    },
    '&id': id_mr_content_correlator_match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
