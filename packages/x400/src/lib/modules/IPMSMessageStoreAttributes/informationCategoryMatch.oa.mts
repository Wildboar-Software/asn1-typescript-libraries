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
    InformationCategory,
    _decode_InformationCategory,
    _encode_InformationCategory,
} from '../IPMSHeadingExtensions/InformationCategory.ta.mjs';
import { id_mr_information_category } from '../IPMSObjectIdentifiers/id-mr-information-category.va.mjs';
/**
 * @summary informationCategoryMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * informationCategoryMatch MATCHING-RULE ::= {
 *   SYNTAX  InformationCategory
 *   ID      id-mr-information-category
 * }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<InformationCategory>}
 * @implements {MATCHING_RULE<InformationCategory>}
 */
export const informationCategoryMatch: MATCHING_RULE<InformationCategory> = {
    class: 'MATCHING-RULE',
    decoderFor: {
        '&AssertionType': _decode_InformationCategory,
    },
    encoderFor: {
        '&AssertionType': _encode_InformationCategory,
    },
    '&id': id_mr_information_category /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&AssertionType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
