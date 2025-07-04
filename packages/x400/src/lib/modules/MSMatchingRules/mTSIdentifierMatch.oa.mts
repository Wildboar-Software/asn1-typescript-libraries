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
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.mjs';
import { id_mr_mts_identifier_match } from '../MSObjectIdentifiers/id-mr-mts-identifier-match.va.mjs';
/**
 * @summary mTSIdentifierMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mTSIdentifierMatch MATCHING-RULE ::= {
 *   SYNTAX  MTSIdentifier
 *   ID      id-mr-mts-identifier-match
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<MTSIdentifier>}
 * @implements {MATCHING_RULE<MTSIdentifier>}
 */
export const mTSIdentifierMatch: MATCHING_RULE<MTSIdentifier> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_MTSIdentifier,
    },
    encoderFor: {
        '&AssertionType': _encode_MTSIdentifier,
    },
    '&id': id_mr_mts_identifier_match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
