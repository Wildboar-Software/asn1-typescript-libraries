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
} from 'asn1-ts';
import {
    IA5TextData,
    _decode_IA5TextData,
    _encode_IA5TextData,
} from '../IPMSInformationObjects/IA5TextData.ta.mjs';
import { id_et_ia5_text } from '../IPMSObjectIdentifiers/id-et-ia5-text.va.mjs';
/**
 * @summary ia5_text_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ia5-text-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<IA5TextData>}
 * @implements {TYPE_IDENTIFIER<IA5TextData>}
 */
export const ia5_text_body_part_data: TYPE_IDENTIFIER<IA5TextData> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_IA5TextData,
    },
    encoderFor: {
        '&Type': _encode_IA5TextData,
    },
    '&id': id_et_ia5_text /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
