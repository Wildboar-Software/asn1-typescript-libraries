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
    InformationCategories,
    _decode_InformationCategories,
    _encode_InformationCategories,
} from '../IPMSHeadingExtensions/InformationCategories.ta.mjs';
import { id_hex_information_category } from '../IPMSObjectIdentifiers/id-hex-information-category.va.mjs';
import { type IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/**
 * @summary information_category
 * @description
 *
 * Information object `information_category`. The Information-category-match rule
 * compares for equality a presented value with attribute-values of type Information
 * Category as defined in A.1.10.  The rule returns true if, and only
 * if, one of the following conditions is fulfilled for the presented value and at least
 * one value of the attribute: a) the… See ITU-T X.420 (1999), §19.7.17.
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
