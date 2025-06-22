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
    TeletexData,
    _decode_TeletexData,
    _encode_TeletexData,
} from '../IPMSInformationObjects/TeletexData.ta.mjs';
import { id_et_teletex } from '../IPMSObjectIdentifiers/id-et-teletex.va.mjs';
/**
 * @summary teletex_body_part_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-body-part-data ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {TYPE_IDENTIFIER<TeletexData>}
 * @implements {TYPE_IDENTIFIER<TeletexData>}
 */
export const teletex_body_part_data: TYPE_IDENTIFIER<TeletexData> = {
    class: 'TYPE-IDENTIFIER',
    decoderFor: {
        '&Type': _decode_TeletexData,
    },
    encoderFor: {
        '&Type': _encode_TeletexData,
    },
    '&id': id_et_teletex /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
