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
    DistributionCode,
    _decode_DistributionCode,
    _encode_DistributionCode,
} from '../IPMSHeadingExtensions/DistributionCode.ta.mjs';
import { id_mr_distribution_code } from '../IPMSObjectIdentifiers/id-mr-distribution-code.va.mjs';
/**
 * @summary distributionCodeMatch
 * @description
 *
 * True iff the presented value matches at least one attribute value (ITU-T X.420 (1999),
 * §19.7.16): both have `oid-code` and they object-identifier-match, and `alphanumeric-code`
 * is either present in both and MS-string-match or absent from both; or `oid-code` is
 * absent from at least one value and `alphanumeric-code` is present in both and
 * MS-string-match. `or-descriptor` is not considered.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * distributionCodeMatch MATCHING-RULE ::= {
 *   SYNTAX  DistributionCode
 *   ID      id-mr-distribution-code
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<DistributionCode>}
 * @implements {MATCHING_RULE<DistributionCode>}
 */
export const distributionCodeMatch: MATCHING_RULE<DistributionCode> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_DistributionCode,
    },
    encoderFor: {
        '&AssertionType': _encode_DistributionCode,
    },
    '&id': id_mr_distribution_code /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
