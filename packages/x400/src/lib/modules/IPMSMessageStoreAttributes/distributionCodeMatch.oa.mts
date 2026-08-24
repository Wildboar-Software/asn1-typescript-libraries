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
 * Information object `distributionCodeMatch`. The Distribution-code-match rule compares
 * for equality a presented value with attribute-values of type Distribution Code as
 * defined in A.1.8. distributionCodeMatch MATCHING-RULE ::= { SYNTAX DistributionCode ID
 * id-mr-distribution-code } The rule returns true if, and only if, at least one of the
 * following conditions is fulfilled for the presented value and at least one value of
 * the attribute: a) the OID-code… See ITU-T X.420 (1999), §19.7.16.
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
