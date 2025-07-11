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
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    DistributionCode,
    _decode_DistributionCode,
    _encode_DistributionCode,
} from '../IPMSHeadingExtensions/DistributionCode.ta.mjs';
import { distributionCodeMatch } from '../IPMSMessageStoreAttributes/distributionCodeMatch.oa.mjs';
import { id_hat_distribution_codes } from '../IPMSObjectIdentifiers/id-hat-distribution-codes.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary distribution_codes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * distribution-codes X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   DistributionCode,
 *   EQUALITY MATCHING-RULE  distributionCodeMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-distribution-codes
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<DistributionCode>}
 * @implements {X413ATTRIBUTE<DistributionCode>}
 */
export const distribution_codes: X413ATTRIBUTE<DistributionCode> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_DistributionCode,
    },
    encoderFor: {
        '&Type': _encode_DistributionCode,
    },
    '&equalityMatch': distributionCodeMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_distribution_codes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
