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
import { MATCHING_RULE } from '@wildboar/x500/InformationFramework';
import {
    ContentIdentifier,
    _decode_ContentIdentifier,
    _encode_ContentIdentifier,
} from '../MTSAbstractService/ContentIdentifier.ta.mjs';
import { id_mr_content_identifier_match } from '../MSObjectIdentifiers/id-mr-content-identifier-match.va.mjs';
/**
 * @summary contentIdentifierMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contentIdentifierMatch MATCHING-RULE ::= {
 *   SYNTAX  ContentIdentifier
 *   ID      id-mr-content-identifier-match
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<ContentIdentifier>}
 * @implements {MATCHING_RULE<ContentIdentifier>}
 */
export const contentIdentifierMatch: MATCHING_RULE<ContentIdentifier> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_ContentIdentifier,
    },
    encoderFor: {
        '&AssertionType': _encode_ContentIdentifier,
    },
    '&id': id_mr_content_identifier_match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
