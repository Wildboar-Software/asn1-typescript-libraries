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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
import { id_mr_orname_exact_match } from '../MHSObjectIdentifiers/id-mr-orname-exact-match.va.mjs';
/**
 * @summary oRNameExactMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * oRNameExactMatch MATCHING-RULE ::= {
 *   SYNTAX  ORName
 *   ID      id-mr-orname-exact-match
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<ORName>}
 * @implements {MATCHING_RULE<ORName>}
 */
export const oRNameExactMatch: MATCHING_RULE<ORName> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_ORName,
    },
    encoderFor: {
        '&AssertionType': _encode_ORName,
    },
    '&id': id_mr_orname_exact_match /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
