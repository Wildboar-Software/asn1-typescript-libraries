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
    InformationCategories,
    _decode_InformationCategories,
    _encode_InformationCategories,
} from '../IPMSHeadingExtensions/InformationCategories.ta.mjs';
import { id_hex_information_category } from '../IPMSObjectIdentifiers/id-hex-information-category.va.mjs';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/**
 * @summary information_category
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * information-category IPMS-EXTENSION ::= {
 *   VALUE          InformationCategories,
 *   IDENTIFIED BY  id-hex-information-category
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<InformationCategories>}
 * @implements {IPMS_EXTENSION<InformationCategories>}
 */
export const information_category: IPMS_EXTENSION<InformationCategories> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_InformationCategories,
    },
    encoderFor: {
        '&Type': _encode_InformationCategories,
    },
    '&id': id_hex_information_category /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
