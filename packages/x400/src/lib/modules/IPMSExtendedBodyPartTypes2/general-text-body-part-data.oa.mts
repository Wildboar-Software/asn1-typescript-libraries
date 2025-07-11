/* eslint-disable */
import {
    TYPE_IDENTIFIER,
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
    GeneralTextData,
    _decode_GeneralTextData,
    _encode_GeneralTextData,
} from '../IPMSExtendedBodyPartTypes2/GeneralTextData.ta.mjs';
import { id_et_general_text } from '../IPMSObjectIdentifiers/id-et-general-text.va.mjs';
/**
 * @summary general_text_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * general-text-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<GeneralTextData>}
 * @implements {TYPE_IDENTIFIER<GeneralTextData>}
 */
export const general_text_body_part_data: TYPE_IDENTIFIER<GeneralTextData> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_GeneralTextData,
    },
    encoderFor: {
        '&Type': _encode_GeneralTextData,
    },
    '&id': id_et_general_text /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
