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
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    InformationCategory,
    _decode_InformationCategory,
    _encode_InformationCategory,
} from '../IPMSHeadingExtensions/InformationCategory.ta.mjs';
import { informationCategoryMatch } from '../IPMSMessageStoreAttributes/informationCategoryMatch.oa.mjs';
import { id_hat_information_category } from '../IPMSObjectIdentifiers/id-hat-information-category.va.mjs';
import { X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/* START_OF_SYMBOL_DEFINITION information_category */
/**
 * @summary information_category
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * information-category X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX   InformationCategory,
 *   EQUALITY MATCHING-RULE  informationCategoryMatch,
 *   NUMERATION              multi-valued,
 *   ID                      id-hat-information-category
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<InformationCategory>}
 * @implements {X413ATTRIBUTE<InformationCategory>}
 */
export const information_category: X413ATTRIBUTE<InformationCategory> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_InformationCategory,
    },
    encoderFor: {
        '&Type': _encode_InformationCategory,
    },
    '&equalityMatch': informationCategoryMatch /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_hat_information_category /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION information_category */

/* eslint-enable */
